

//监听滚动事件，更新滚动比率
window.addEventListener('scroll',()=>{
    let scrolled = document.body.scrollTop / (document.body.scrollHeight - document.body.clientHeight);
    console.log(scrolled);

    let $h1 = document.querySelector('h1');
    let $icon = document.querySelector('#icon-apple');
    let $mask = document.querySelector(".mask");
    //图标大小随滚动率改变
    $icon.style.width = $icon.style.height = document.body.clientHeight * (scrolled) * (scrolled) * (scrolled) * 30 + 'px';
    
    if(scrolled <= 0.1){
        $h1.style.opacity = (0.1 - scrolled) / 0.1;
        $h1.style.marginTop = scrolled * 1000 * -1 + "px";
        $icon.style.opacity = 0;
    }    

    else if(scrolled > 0.7){
        $icon.style.opacity = (1-scrolled) / 0.3;
        
    }

    else{
        $icon.style.opacity = 1
        $h1.style.opacity = 0;
        $mask.style.opacity = 1;

    }

    if(scrolled > 0.1 && scrolled < 0.2){
        $icon.style.opacity = (scrolled - 0.1) * 2  ;
    }

    if(scrolled > 0.2){        
        $mask.style.opacity = 0;
    };

})



