<template>
<div class="box">
    <h3>css瀑布流布局1</h3>
    <div class="cainter">
        <div class="item" v-for="(item,index) in list"  :key="index">
            <img src="https://picsum.photos/130/200" alt="">
        </div>
    </div>
    <h3>css瀑布流布局2</h3>

</div>
    
</template>

<script>
export default {
    data(){
        return{
            list:[1,2,3,4,5,6,7,8,9,78]
        }
    }
}
</script>
<style lang="scss" scoped>
.cainter{
    column-count: 2;
    column-gap:5px;
}
.item{
    position: relative;
    margin-bottom: 5px;
    counter-increment: item-counter;//数字递增的类名样式
}
.item::after{
    position: absolute;
    top: 5px;
    left: 5px;
    width: 20px;
    height: 20px;
    background: #000;
    line-height: 20px;
    text-align: center;
    color:#fff;
    content: counter(item-counter);//定义一个类名

}
.item img{
    display: block;
    width: 100%;
    height: 100%;
}
.item:first-child{
    height: 300px;
}
.box{
    margin: 10px;
    border: 1px solid #000;
}
</style>