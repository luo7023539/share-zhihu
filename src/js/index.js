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


/*实现注册登录切换*/
~function () {
    var signUp = document.querySelector('#signUp'),
        signIn = document.querySelector('#signIn'),
        viewSignin = document.querySelector('.view-signin'),
        viewSignUp = document.querySelector('.view-signup');

    function changeTabs() {
        var hash = window.location.href.urlToObj().hash;
        console.log(hash);
        if(hash === 'signup'){
            utils.hide(viewSignin);
            utils.show(viewSignUp);
        }else{
            utils.show(viewSignin);
            utils.hide(viewSignUp);
        }
    }
    singleClick(signUp,changeTabs);
    singleClick(signIn,changeTabs);
}();







