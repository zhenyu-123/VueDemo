
    let clickoutside= {
      bind: function(el, binding) {
        //点击关闭
        function documentHandler(e) {
            console.log(e)
          //判断是否是外部元素
          if (el.contains(e.target)) {
            return false;
          }
        
          //判断当前指令有没有写表达式
          if (binding.expression) {
            binding.value(e);     //执行自定义指令绑定的函数
         
          }
        }
        //按esc关闭
        function documentHandler1(e){
            if(e.code=='Escape'&&binding.rawName=="v-clickoutside.esc"){
                binding.value(e);     //执行自定义指令绑定的函数
            }
        }
        el._vueClickOutside_ = documentHandler;
        el._vueClickOutside1_ = documentHandler1;
        document.addEventListener("click", el._vueClickOutside_);
        document.addEventListener("keydown",el._vueClickOutside1_)
      },
      unbind:function(el){
        //移出事件监听，删除对象
        document.removeEventListener('click',el._vueClickOutside_);
        document.removeEventListener("keydown",el._vueClickOutside1_);
        delete el._vueClickOutside_;
        delete el._vueClickOutside1_;

      }
    }
  module.exports={clickoutside}