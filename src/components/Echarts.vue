
<template>
  <div id="main">

  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.init()
  },
  methods:{
    init() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'),'dark');
      // 绘制图表
      myChart.setOption({
          // title: {
          //     text: 'ECharts 入门示例'
          // },
          // tooltip: {},
          // // xAxis: {
          // //     data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          // // },
          // // yAxis: {},
          // legend: {
          //   data:['毛裤','T恤','口罩','眼镜','耳机','鼠标']
          // },
          // series: [{
          //     name: '销量',
          //     type: 'pie',
          //     color:['blue','yellowgreen','red','#666','skyblue','purple'],
          //     // roseType: 'angle',
          //     radius:'55%',
          //     data: [
          //       {name:'毛裤',value:5},
          //       {name:'T恤',value:20},
          //       {name:'口罩',value:36},
          //       {name:'眼镜',value:10},
          //       {name:'耳机',value:10},
          //       {name:'鼠标',value:20}]
          // }]
        legend: {},
        tooltip: {},
        dataset: {
            source: [
                ['product', '2015', '2016', '2017'],
                ['Matcha Latte', 43.3, 85.8, 93.7],
                ['Milk Tea', 83.1, 73.4, 55.1],
                ['Cheese Cocoa', 86.4, 65.2, 82.5],
                ['Walnut Brownie', 72.4, 53.9, 39.1]
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'}
        ]
      });
    }
  }
}
</script>

<style>
#main{
  width: 500px;
  height: 500px;
}
</style>