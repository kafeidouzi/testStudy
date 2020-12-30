<template>
  <span>
    <input class="input-file" type="file" @change="exportData"/>
    <!-- accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" -->
    <button @click="btnClick">导入EXCEL</button>
    <div id="demo">
      
    </div>
  </span>
</template>

<script>
import XLSX from 'xlsx'
// import XLSX1 from 'xlsx-style'
export default {
  name: 'HelloWorld',
  props: {
    type: String,
    default: ()=> {
      return 'cccc'
    }
  },
  methods: {
    btnClick () {
      document.querySelector('.input-file').click()
    },
    exportData (event) {
      if (!event.currentTarget.files.length) {
        return
      }
      const that = this
      // 拿取文件对象
      var f = event.currentTarget.files[0]
      // 用FileReader来读取
      var reader = new FileReader()
      // 重写FileReader上的readAsBinaryString方法
      FileReader.prototype.readAsBinaryString = function (f) {
        var binary = ''
        var wb // 读取完成的数据
        var outdata // 你需要的数据
        var reader = new FileReader()
        reader.onload = function (e) {
          console.log(e)
          // 读取成Uint8Array，再转换为Unicode编码（Unicode占两个字节）
          var bytes = new Uint8Array(reader.result)
          var length = bytes.byteLength
          for (var i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i])
          }
          // 接下来就是xlsx了，具体可看api
          wb = XLSX.read(binary, {
            type: 'binary'
          })
          // document.getElementById("demo").innerHTML
          // let aa = JSON.stringify( XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]) )
          // document.getElementById("demo").innerHTML = XLSX.utils.json_to_sheet(aa)
          outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
          // document.getElementById("demo").innerHTML = XLSX.utils.json_to_sheet(outdata)
          // that.to_html(wb)
          console.log(that.to_json(wb),wb)
          let aoa = [
                      [
                        "柴油价格",
                        null,
                        "5.4元/升",
                        null,null
                      ],
                      [
                        "车型",
                        null,
                        4.2,
                        6.8,
                        9.6
                      ],
                      [
                        "过路费",
                        null,
                        0.5,
                        0.9,
                        1.3
                      ],
                      [
                        "司机薪资",
                        "小于300",
                        3000,
                        4000,
                        5000
                      ],
                      [
                        null,
                        "大于300",
                        4000,
                        5000,
                        6000
                      ],
                      [
                        "速度占比",
                        "0-20",
                        0.4,
                        0.4,
                        0.4
                      ],
                      [
                        null,
                        "20-30",
                        0.5,
                        0.5,
                        0.5
                      ],
                      [
                        null,
                        "30-50",
                        0.56,
                        0.56,
                        0.56
                      ],
                      [
                        "空车瞎",
                        "0-20",
                        0.2,
                        0.2,
                        0.2
                      ],
                      [
                        null,
                        "20-30",
                        0.3,
                        0.3,
                        0.3
                      ],
                      [
                        null,
                        "30-40",
                        0.4,
                        0.4,
                        0.4
                      ]
                  ]
            
            let sheet =XLSX.utils.aoa_to_sheet(aoa)
            sheet['C1'].s={
              font: {
                name: '宋体',
                sz: 30,
                bold: true,
                color: { rgb: "FFFFAA00" }
              },
            }
            sheet['!merges'] = [
                {s: {r: 0, c: 0}, e: {r: 0, c: 1}},
                {s: {r: 0, c: 2}, e: {r: 0, c: 5}},
                {s: {r: 1, c: 0}, e: {r: 1, c: 1}},
                {s: {r: 2, c: 0}, e: {r: 2, c: 1}},
                {s: {r: 2, c: 0}, e: {r: 2, c: 1}},
                {s: {r: 3, c: 0}, e: {r: 4, c: 0}},
                {s: {r: 5, c: 0}, e: {r: 7, c: 0}},
                {s: {r: 8, c: 0}, e: {r: 10, c: 0}},
            ];
            that.openDownloadDialog(that.sheet2blob(sheet), '单元格合并示例.xlsx');
          // document.getElementById("demo").innerHTML=XLSX.utils.aoa_to_sheet(JSON.parse(that.to_json(wb)).ssss);
          // 自定义方法向父组件传递数据
          console.log('outdata = ' ,outdata)
          for(var j = 0;j<outdata.length;j++){
          // console.log(outdata[j])
          }
          that.$emit('getResult', outdata)
        }
        reader.readAsArrayBuffer(f)
      }
      reader.readAsBinaryString(f)
    },
    to_html(workbook) {
      document.getElementById("demo").innerHTML = "";
      workbook.SheetNames.forEach(function(sheetName) {
      var htmlstr = XLSX.write(workbook, {sheet:sheetName, type:'string', bookType:'html'});
      document.getElementById("demo").innerHTML += htmlstr;
      });
      return "";
    },
    to_json(workbook) {
      var result = {};
      workbook.SheetNames.forEach(function(sheetName) {
      var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header:1});
      if(roa.length) result['ssss'] = roa;
      });
      return JSON.stringify(result, 2, 2);
    },
     openDownloadDialog(url, saveName){
	if(typeof url == 'object' && url instanceof Blob)
	{
		url = URL.createObjectURL(url); // 创建blob地址
	}
	var aLink = document.createElement('a');
	aLink.href = url;
	aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
	var event;
	if(window.MouseEvent) event = new MouseEvent('click');
	else
	{
		event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	}
	aLink.dispatchEvent(event);
},
  // 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
sheet2blob(sheet, sheetName) {
	sheetName = sheetName || 'sheet1';
	var workbook = {
		SheetNames: [sheetName],
		Sheets: {}
	};
	workbook.Sheets[sheetName] = sheet;
	// 生成excel的配置项
	var wopts = {
		bookType: 'xlsx', // 要生成的文件类型
		bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
		type: 'binary'
	};
	var wbout = XLSX.write(workbook, wopts);
	var blob = new Blob([s2ab(wbout)], {type:"application/octet-stream"});
	// 字符串转ArrayBuffer
	function s2ab(s) {
		var buf = new ArrayBuffer(s.length);
		var view = new Uint8Array(buf);
		for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
		return buf;
	}
	return blob;
}
  }
}
</script>

<style  scoped>

  .input-file {
    display: none;
  }
    #demo table,#demo table tr th,#demo  table tr td { border:1px solid #0094ff; }
    #demo table { width: 200px; min-height: 25px; line-height: 25px; text-align: center; border-collapse: collapse;}
 
</style>