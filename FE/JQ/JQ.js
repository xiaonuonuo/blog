/**
 * Created by cc on 17/8/15.
 */


+function(window,document,undefined){
    function _$(el){
        this.el=el;
    }
    _$.prototype={
        constructor:this,
        on:function(evt,fn){
            this.el.addEventListener(evt,fn);
            return this;
        }
    }
    window.$=function(el){
        return new _$(el);
    }
}(window,document);


$(document).on('touchstart',function(){
    console.log(111);
}).on('touchmove',function(){
    console.log(222);
}).on('touchend',function(){
    console.log(333);
});