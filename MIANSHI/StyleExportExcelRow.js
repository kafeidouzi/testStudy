/* eslint-disable */
require('script-loader!file-saver');
import XLSX from 'g-xlsx-style'

function generateArray(table) {
  var out = [];
  var rows = table.querySelectorAll('tr');
  var ranges = [];
  for (var R = 0; R < rows.length; ++R) {
    var outRow = [];
    var row = rows[R];
    var columns = row.querySelectorAll('td');
    for (var C = 0; C < columns.length; ++C) {
      var cell = columns[C];
      var colspan = cell.getAttribute('colspan');
      var rowspan = cell.getAttribute('rowspan');
      var cellValue = cell.innerText;
      if (cellValue !== "" && cellValue == +cellValue) cellValue = +cellValue;

      //Skip ranges
      ranges.forEach(function (range) {
        if (R >= range.s.r && R <= range.e.r && outRow.length >= range.s.c && outRow.length <= range.e.c) {
          for (var i = 0; i <= range.e.c - range.s.c; ++i) outRow.push(null);
        }
      });

      //Handle Row Span
      if (rowspan || colspan) {
        rowspan = rowspan || 1;
        colspan = colspan || 1;
        ranges.push({
          s: {
            r: R,
            c: outRow.length
          },
          e: {
            r: R + rowspan - 1,
            c: outRow.length + colspan - 1
          }
        });
      }
      ;

      //Handle Value
      outRow.push(cellValue !== "" ? cellValue : null);

      //Handle Colspan
      if (colspan)
        for (var k = 0; k < colspan - 1; ++k) outRow.push(null);
    }
    out.push(outRow);
  }
  return [out, ranges];
};

function datenum(v, date1904) {
  if (date1904) v += 1462;
  var epoch = Date.parse(v);
  return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
}

function sheet_from_array_of_arrays(data, opts) {
  var ws = {};
  var range = {
    s: {
      c: 10000000,
      r: 10000000
    },
    e: {
      c: 0,
      r: 0
    }
  };
  for (var R = 0; R != data.length; ++R) {
    for (var C = 0; C != data[R].length; ++C) {
      if (range.s.r > R) range.s.r = R;
      if (range.s.c > C) range.s.c = C;
      if (range.e.r < R) range.e.r = R;
      if (range.e.c < C) range.e.c = C;
      var cell = {
        v: data[R][C]
      };
      if (cell.v == null) continue;
      var cell_ref = XLSX.utils.encode_cell({
        c: C,
        r: R
      });

      if (typeof cell.v === 'number') cell.t = 'n';
      else if (typeof cell.v === 'boolean') cell.t = 'b';
      else if (cell.v instanceof Date) {
        cell.t = 'n';
        cell.z = XLSX.SSF._table[14];
        cell.v = datenum(cell.v);
      } else cell.t = 's';

      ws[cell_ref] = cell;
    }
  }
  if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
  return ws;
}

function Workbook() {
  if (!(this instanceof Workbook)) return new Workbook();
  this.SheetNames = [];
  this.Sheets = {};
}

function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;
}

export function export_table_to_excel(id) {
  var theTable = document.getElementById(id);
  var oo = generateArray(theTable);
  var ranges = oo[1];

  /* original data */
  var data = oo[0];
  var ws_name = "SheetJS";

  var wb = new Workbook(),
    ws = sheet_from_array_of_arrays(data);

  /* add ranges to worksheet */
  // ws['!cols'] = ['apple', 'banan'];
  ws['!merges'] = ranges;

  /* add worksheet to workbook */
  wb.SheetNames.push(ws_name);
  wb.Sheets[ws_name] = ws;

  var wbout = XLSX.write(wb, {
    bookType: 'xlsx',
    bookSST: false,
    type: 'binary'
  });

  saveAs(new Blob([s2ab(wbout)], {
    type: "application/octet-stream"
  }), "test.xlsx")
}

export function export_json_to_excel({
   title = [],
   multiHeader = [],
   header = [],
   data,
   arr = [],
   filename,
   merges = [],
   col = [],
   rowss = [],
   autoWidth = true,
   bookType = 'xlsx'
  } = {}) {
  /* original data */
  filename = filename || 'excel-list'
  data = [...data]
  header.length > 0 ?data.unshift(header) :'';
  title.length > 0 ? data.unshift(title) : '';
  for (let i = multiHeader.length - 1; i > -1; i--) {
    data.unshift(multiHeader[i])
  }

  var ws_name = "SheetJS";
  var wb = new Workbook(),
    ws = sheet_from_array_of_arrays(data);

  if (merges.length > 0) {
    if (!ws['!merges']) ws['!merges'] = [];
    ws['!merges'] = merges
    // merges.forEach(item => {
    //   ws['!merges'].push(XLSX.utils.decode_range(item))
    // })
  }

  if (autoWidth) {
    /*设置worksheet每列的最大宽度*/
    const colWidth = data.map(row => row.map(val => {
      /*先判断是否为null/undefined*/
      if (val == null) {
        return {
          'wch': 10
        };
      }
      /*再判断是否为中文*/
      else if (val.toString().charCodeAt(0) > 255) {
        return {
          'wch': val.toString().length * 2
        };
      } else {
        return {
          'wch': val.toString().length
        };
      }
    }))
    /*以第一行为初始值*/
    let result = colWidth[0];
    for (let i = 1; i < colWidth.length; i++) {
      for (let j = 0; j < colWidth[i].length; j++) {
        if (result[j]['wch'] < colWidth[i][j]['wch']) {
          result[j]['wch'] = colWidth[i][j]['wch'];
        }
      }
    }
    ws['!cols'] = result;
	col.length > 0 ?  ws['!cols'] =col :'';


	//修改行高
	const colHeight = data.map(row => row.map(val => {
		/*先判断是否为null/undefined*/
		// if (val == null) {
		//   return {
		// 	'hpx': 40
		//   };
		// }
		/*再判断是否为中文*/
		// else if (val.toString().charCodeAt(0) > 255) {
		//   return {
		// 	'hpx': 40
		//   };
		// } else {
		  return {
			'hpx': 30
		  };
		// }
	  }))
	  /*以第一行为初始值*/
	  let result1 = colHeight[0];
	  for (let i = 1; i < colHeight.length; i++) {
		for (let j = 0; j < colHeight[i].length; j++) {
		  if (result1[j]['hpx'] < colHeight[i][j]['hpx']) {
			result1[j]['hpx'] = colHeight[i][j]['hpx'];
		  }
		}
	  }

	ws['!rows'] = result1;
	rowss.length > 0 ?  ws['!rows'] =rowss :'';
  }

  /* add worksheet to workbook */
  wb.SheetNames.push(ws_name);
  wb.Sheets[ws_name] = ws;
  var dataInfo = wb.Sheets[wb.SheetNames[0]];

  const borderAll = {  //单元格外侧框线
    top: {
      style: 'thin'
    },
    bottom: {
      style: 'thin'
    },
    left: {
      style: 'thin'
    },
    right: {
      style: 'thin'
    }
  };
  //给所以单元格加上边框
  for (var i in dataInfo) {
    if (i == '!ref' || i == '!merges' || i == '!cols' || i == 'A1') {

    } else {
      dataInfo[i + ''].s = {
        border: borderAll
      }
    }
  }

  // 去掉标题边框
  // let arr = ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1", "I1", "J1", "K1", "L1", "M1", "N1", "O1", "P1", "Q1", "R1", "S1", "T1", "U1", "V1", "W1", "X1", "Y1", "Z1"];
  // arr.some(function (v) {
  //   let a = merges[0].split(':')
  //   if (v == a[1]) {
  //     dataInfo[v].s = {}
  //     return true;
  //   } else {
  //     dataInfo[v].s = {}
  //   }
  // })

  //设置主标题样式dataInfo["A1"].s
  const sty= {
    font: {
      name: '宋体',
      sz: 12,
      // color: {rgb: "ff0000"},
      bold: false,
      italic: false,
      underline: false
    },
    alignment: {
      horizontal: "center",
      vertical: "center"
    },
    // fill: {
    //   fgColor: {rgb: "008000"},
    // },
  };
  const sty1= {
    font: {
      name: '宋体',
      sz: 12,
      // color: {rgb: "ff0000"},
      bold: false,
      italic: false,
      underline: false
    },
    alignment: {
      horizontal: "center",
      vertical: "center"
    },
    numFmt:"0%"
    // fill: {
    //   fgColor: {rgb: "008000"},
    // },
  };
  for (var b in dataInfo) {
    if(b !== '!ref'){
      dataInfo[b].s = sty
    }
  }
  // dataInfo["!freeze"] = {
  //   xSplit: "1",
  //   ySplit: "6",
  //   // 坐上角是哪个cell
  //   topLeftCell: "B7",
  //   activePane: "bottomRight",
  //   state: "frozen",
  // }
  if(arr.length>0) {
    arr.forEach(item=>{
      console.log(dataInfo[item])
      // dataInfo[item].v = Number(dataInfo[item].v)
      dataInfo[item] = {v:Number(dataInfo[item].v),t:"n",s:sty1}
    })
  }
  // dataInfo["C8"] = {v: 0.4, t:"n",s:{numFmt:"0.0%"}}
  // console.log(merges)
  // console.log(dataInfo)


  var wbout = XLSX.write(wb, {
    bookType: bookType,
    bookSST: false,
    type: 'binary'
  });
  saveAs(new Blob([s2ab(wbout)], {
    type: "application/octet-stream"
  }), `${filename}.${bookType}`);
}