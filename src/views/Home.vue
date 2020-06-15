<template>
  <div class="home">
    <div class="main" v-clickoutside.esc="handleClose">
      <button @click="show=!show">点击显示下拉菜单</button>
      <div class="dropdown" v-show="show">
        <p>下拉框的内容，点击外边区域可以关闭</p>
      </div>
    </div>
  </div>
</template>
<script>
/*
需求：点击除按钮以外的区域，让菜单栏隐藏
思路：在dom绑定click事件，判断当前点击的元素是否属于外部元素
实现：自定义指令
*/
import {clickoutside} from '@/assets/js/close.js'
export default {
  name: "Home",
  data() {
    return {
      show: true
    };
  },
  methods: {
    handleClose() {
      this.show = false;
    }
  },
  directives: {
    clickoutside
  }
};
</script>
<style lang="scss" scoped>
.main {
  width: 200px;
  margin: auto;
  height: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;

  button{
    display: inline-block;
    width: 100%;
    height: 30px;
    background: #000;
    text-align: center;
    color: #fff;
    font-size: 20px;
  }
}
</style>
