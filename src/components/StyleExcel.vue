/* eslint-disable */
<template>
  <div>
    <button @click="downloadExl(jsono)">导出</button>
  </div>
</template>

<script>
import XLSX from 'g-xlsx-style'
export default {
  data() {
    return {
        aoa : [
                      [
                        "柴油价格asdsadadadad",
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
                  ],
      jsono :[{
            id: 1, "合并的列头1": "数据11", "合并的列头2": "数据12", "合并的列头3": "数据13", "合并的列头4": "数据14",
        }, {
            id: 2, "合并的列头1": "数据21", "合并的列头2": "数据22", "合并的列头3": "数据23", "合并的列头4": "数据24",
        }],
       wopts: { bookType: 'xlsx', bookSST: true, type: 'binary', cellStyles: true },
        defaultCellStyle: {
           font: { name: "宋体", sz: 11, color: { auto: 1 } },
             border: {
               color: { auto: 1 }
             },
             alignment: {
                /// 自动换行
               wrapText: 1,
                 // 居中
               horizontal: "center",
               vertical: "center",
               indent: 0
          }
         },
         qq:[
            {
                name:'标准成本管理',
                url:'standard',
                children:[
                    {
                        name:'大区参数',
                        url:'regionalParameters'
                    },
                    {
                        name:'车型参数',
                        url:'modelParameters'
                    },
                    {
                        name:'基础参数',
                        url:'basicParameters'
                    }
                ]
             }
        ],
        router:[
            {
                name:'Standard',
                component:'',
                path:'/standard',
                redirect:'/standard/regionalParameters',
                meta:{name:'标准成本管理'},
                children:[
                    {
                        name:'RegionalParameters',
                        path:'regionalParameters',
                        meta:{name:'大区管理'},
                        component:'',
                        children:[
                            {
                                name:'RegionalStandard',
                                path:'regionalStandard',
                                component:'',
                                meta:{name:'标准成本'}
                            },
                            {
                                name:'RegionalChange',
                                path:'regionalChange',
                                component:'',
                                meta:{name:'变更历史'},
                                children:[
                                    {
                                        name:'RegionalChangeDetail',
                                        path:'regionalChangeDetail',
                                        component:'',
                                        meta:{name:'详情'},
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        name:'ModelParameters',
                        path:'modelParameters',
                        component:'',
                        meta:{name:'车型参数'},
                        children:[
                            {
                                name:'ModelStandard',
                                path:'modelStandard',
                                component:'',
                                meta:{name:'标准成本'}
                            },
                            {
                                name:'ModelChange',
                                path:'modelChange',
                                component:'',
                                meta:{name:'变更历史'},
                                children:[
                                    { 
                                        name:'ModelChangeDetail',
                                        path:'modelChangeDetail',
                                        component:'',
                                        meta:{name:'详情'},
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        name:'BasicParameters',
                        url:'basicParameters',
                        component:'',
                        meta:{name:'基础参数'}
                    }
                ]
             }
        ]
    }
  },
  methods:{
    saveAs(obj, fileName) {
            var tmpa = document.createElement("a");
            tmpa.download = fileName || "下载";
            tmpa.href = URL.createObjectURL(obj);
            tmpa.click();
            setTimeout(function () {
                URL.revokeObjectURL(obj);
            }, 100);
        },
        // const wopts = { bookType: 'xlsx', bookSST: true, type: 'binary', cellStyles: true };
        downloadExl(json, type) {
          let that = this
            var tmpdatas = json[0];
            json.unshift({});
            var keyMap = []; //获取keys
            for (var k in tmpdatas) {
                keyMap.push(k);
                json[0][k] = k;
            }
            let tmpdata = [];//用来保存转换好的json 
            json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
                v: v[k],
                position: (j > 25 ?that.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
            }))).reduce((prev, next) => prev.concat(next)).forEach((v) => tmpdata[v.position] = {
                v: v.v
            });
            var outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
            // tmpdata.s = this.defaultCellStyle
    //         tmpdata["B1"].s = { font: { sz: 14, bold: true, color: { rgb: "FFFFAA00" } },alignment: {
    //   horizontal: "center",vertical: "center"}, fill: { bgColor: { indexed: 64 }, fgColor: { rgb: "FFFF00" } } };//<====设置xlsx单元格样式
            tmpdata["!merges"] = [{
                s: { c: 1, r: 0 },
                e: { c: 4, r: 0 }
            }];//<====合并单元格 
            for (var b in tmpdata) {
                // if(b !== 'B1') {
                    tmpdata[b].s = that.defaultCellStyle
                // }
            }
                      var tmpWB = {
                SheetNames: ['mySheet'], //保存的表标题
                Sheets: {
                    'mySheet': Object.assign({},
                        tmpdata, //内容
                        {
                            '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] //设置填充区域
                        })
                }
            };
            let tmpDown = new Blob([that.s2ab(XLSX.write(tmpWB,
                { bookType: (type == undefined ? 'xlsx' : type), bookSST: false, type: 'binary' }//这里的数据是用来定义导出的格式类型
            ))], {
                    type: ""
                });
            that.saveAs(tmpDown, "这里是下载的文件名" + '.' + (that.wopts.bookType == "biff2" ? "xls" : that.wopts.bookType));
        },
        getCharCol(n) {
            let s = '',
                m = 0
                // temCol = '',
            while (n > 0) {
                m = n % 26 + 1
                s = String.fromCharCode(m + 64) + s
                n = (n - m) / 26
            }
            return s
        }
        ,s2ab(s) {
            if (typeof ArrayBuffer !== 'undefined') {
                let buf = new ArrayBuffer(s.length);
                var view = new Uint8Array(buf);
                for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
                return buf;
            } else {
                let buf = new Array(s.length);
                for (let i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
                return buf;
            }
        }
  }
}
</script>

<style>

</style>