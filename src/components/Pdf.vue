<template>
   <div class="pdf-demo">
        <!-- <button @click="handleDown">jsPDF方式下载</button> -->
       
        <div id="demo" >
          <div class="title">
            <span>一撕得产品货运单</span>
            <img src="../assets/xiniu.png" alt="">
          </div>
          <table>
            <thead></thead>
            <tr>
              <td>送货单号</td>
              <td colspan="3"></td>
              <td>一撕得订单号</td>
              <td colspan="3"></td>
              <td>发货日期</td>
              <td colspan="3"></td>
            </tr>
            <tr>
              <td>客户编码</td>
              <td colspan="3"></td>
              <td>SKU编码</td>
              <td colspan="3"></td>
              <td>供应商编码</td>
              <td colspan="3"></td>
            </tr>
            <tr>
              <td>送货地址</td>
              <td colspan="10"></td>
            </tr>
            <tr>
              <td colspan="11">送货明细</td>
            </tr>
            <tr>
              <td>序号</td>
              <td colspan="2">产品名称型号</td>
              <td colspan="2">规格(长*宽*高)</td>
              <td colspan="2">客户产品明细</td>
              <td>发货数量(个)</td>
              <td >收货数量(个)</td>
              <td >收货单元</td>
              <td >备注</td>
            </tr>
            <tr>
              <td></td>
              <td colspan="2"></td>
              <td colspan="2"></td>
              <td colspan="2"></td>
              <td></td>
              <td ></td>
              <td ></td>
              <td ></td>
            </tr>
            <tr>
              <td colspan="7"></td>
              <td> </td>
              <td ></td>
              <td ></td>
              <td ></td>
            </tr>
            <tr>
              <td>提货人</td>
              <td colspan="2"></td>
              <td >提货日期</td>
              <td ></td>
              <td>车牌号</td>
              <td ></td>
              <td >收货人</td>
              <td ></td>
              <td >签收日期</td>
              <td ></td>
            </tr>
            <tr>
              <td >备注</td>
              <td colspan="10"></td>
            </tr>
          </table>
          
          <img :src="src" style="width:600px; height: 800px;" alt="">
        </div>
        <div id="chart1" style="width:600px; height: 800px;"></div>
         <button class="btnn" @click="handleWindowPrint( '#demo', '电子合同' )">浏览器方式下载</button>
    </div>
</template>

<script>
// import htmlToPdf from '../utils/htmlToPdf'
import print from '../utils/print'
import echarts from 'echarts'

export default {
    data() {
      return {
        src:'',
  option:{
    title: {
        text: '雷达图',
        textStyle: {
            color: 'rgba(221,221,221,1)', //标题颜色
            fontSize: 14,
            lineHeight: 20,
        },
        // 标题的位置，此时放在图的底边
        left: 'center',
        top: 'bottom',
    },
    // 图表的位置
    grid: {
        position: 'center',
     },
     tooltip : {
     //雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
        confine: true,
        enterable: true, //鼠标是否可以移动到tooltip区域内
     },
    radar: {
        shape: 'circle',
        splitNumber: 3, // 雷达图圈数设置
        name: {
            textStyle: {
                color: '#000000',
            },
        },
        // 设置雷达图中间射线的颜色
        axisLine: {
            lineStyle: {
                color: 'rgba(131,141,158,1)',
                },
        },
        indicator: [{
            name: '通信', max: 30,
            //若将此属性放在radar下，则每条indicator都会显示圈上的数值，放在这儿，只在通信这条indicator上显示
            axisLabel: {
                show: true,
                fontSize: 12,
                color: '#838D9E',
                showMaxLabel: false, //不显示最大值，即外圈不显示数字30
                showMinLabel: true, //显示最小数字，即中心点显示0
                formatter: (params)=>(
                  `${params}%`
                )
            },
        },
        { name: '零售', max: 30},
        { name: '电力', max: 30},
        { name: '交通', max: 30},
        { name: '食品', max: 30},
        { name: '建筑', max: 30},
        { name: '银行', max: 30},
        { name: '汽车', max: 30},
        { name: '电子工程', max: 30},
        ],
        //雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
        splitArea : {
            show : false,
            areaStyle : {
                color: 'rgba(255,0,0,0)', // 图表背景的颜色
            },
        },
        splitLine : {
            show : true,
            lineStyle : {
                width : 1,
                color : 'rgba(0,0,0,1)', // 设置网格的颜色
            },
        },
    },
    series: [{
        name: '雷达图', // tooltip中的标题
        type: 'radar', //表示是雷达图
        symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
        symbolSize: 8, // 拐点的大小
        areaStyle: {
            normal: {
                width: 1,
                opacity: 0.2,
            },
        },
        data: [
            {
                value: [17, 24, 27, 29, 26, 16, 13, 17, 25],
                name: '2018-07',
                // 设置区域边框和区域的颜色
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,1)',
                        lineStyle: {
                            color: 'rgba(0,0,0,1)',
                        },
                    },
                },
                //在拐点处显示数值
                label: {
                    normal: {
                        show: true,
                        formatter: (params) => {
                            return params.value
                        },
                    },
                },
            },
            {
                value: [5, 20, 19, 11, 22, 17, 8, 19, 16],
                name: '',
                 itemStyle: {
                    normal: {
                        color: 'rgba(60,135,213,1)',
                        lineStyle: {
                            width: 1,
                            color: 'rgba(60,135,213,1)',
                        },
                    },
                },
            },
             {
                value: [7, 18, 19, 13, 22, 17, 8, 25, 9],
                name: '',
                itemStyle: {
                    normal: {
                        color: 'rgba(255,74,74,1)',
                        lineStyle: {
                            width: 1,
                            color: 'rgba(255,74,74,1)',
                        },
                    },
                },
            },
        ],
    }],
    }
      }
    },
    methods: {
      // handleDown(){
      //     //导出PDF
      //     htmlToPdf.downloadPDF( document.querySelector('#demo'),'我的PDF');
      // },
      handleWindowPrint(ele,fileName) {
        console.log(print)
          print.handleWindowPrint(ele,fileName)
      },
      initEcharts() {
        //初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart1'));

        //使用制定的配置项和数据显示图表
        myChart.setOption(this.option);
        setTimeout(()=>{
          var picBase64Info = myChart.getDataURL();//获取echarts图的base64编码，为png格式。
          this.src = picBase64Info;
        },300)
      }
    },
    mounted() {
      this.initEcharts()
    } 
}
</script>

<style>
  #demo{
    width: max-content;
    height: max-content;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
  }
  #demo .title {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    font-size: 22px;
    margin-bottom: 20px;
  }
  #demo .title span{
    display: block;
    font-size: 22px;
    margin-left: 320px;
  }
  #demo .title img {
    display: block;
    float: right;
    /* margin-left: 300px; */
  }
  table{ border-collapse:collapse;}
  table td{ border:2px solid #ddd; width:100px; height:35px; text-align:center}
  .btnn{
    position: absolute;
    top: 0;
    left: 0;
  }
</style>