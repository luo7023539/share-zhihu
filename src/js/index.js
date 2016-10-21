(function (pro) {
    /*获取url中的hash及问号传参*/
    function urlToObj() {
        var result = {},hash;
        this.replace(/([^/.=#?]+)=([^/.=#?]+)/, function () {
            result[arguments[1]] = arguments[2]
        });
        hash = this.slice(this.indexOf('#')+1);
        if(hash){
            result['hash'] = hash
        }
        return result;
    }
    pro.urlToObj = urlToObj
})(String.prototype);

/*自适应改变rem*/
~function () {
    var win = document.documentElement.clientWidth || document.body.clientWidth;
    document.documentElement.style.fontSize = win / 414 * 100 + 'px';
}();







