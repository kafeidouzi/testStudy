<template>
  <div>
    <div :class="[{btn:isShow},sty]"></div>
    <button @click="handle">过渡</button>
    <div class="animal"></div>
    <button @click="handle">过渡</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow:false,
      sty:'sty'
    }
  },
  methods:{
    handle() {
      this.isShow = true
    }
  }
}
</script>

<style>
.animal{
  width: 200px;
  height: 200px;
  background: yellowgreen;
  animation: myanimate 10s infinite;
}
@keyframes myanimate {
  /* from {

  }
  to{

  } */
  0%{

  }
  50%{

  }
  100%{

  }
}
.sty{
  width: 200px;
  height: 200px;
  background: yellowgreen;
}
.btn{
  background: tomato;
  transition: all 3s linear 2s;
}
</style>