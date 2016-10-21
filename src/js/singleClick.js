function on(curEle, type, fn) {
    curEle.addEventListener(type, fn, false);
}

function singleClick(Ele,fn) {
    on(Ele, 'touchstart', function (ev) {
        var point = ev.touches[0];
        this['strX'] = point.clientX;
        this['strY'] = point.clientY;
        this['isMove'] = false;
    });
    on(Ele, 'touchmove', function (ev) {
        var point = ev.touches[0];
        var newX = point.clientX,
            newY = point.clientY;
        //->判断是否发生滑动,我们需要判断偏移的值是否在30PX以内
        if (Math.abs(newX - this['strX']) > 30 || Math.abs(newY - this['strY']) > 30) {
            this['isMove'] = true;
        }
    });
    on(Ele, 'touchend', function (ev) {
        if (this['isMove'] === false) {
            //->点击
            fn.call(this)
        }
    });
}

