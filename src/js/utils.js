var utils = (function () {
    function show(obj) {
        obj.style.display = 'block'
    }
    function hide(obj) {
        obj.style.display = 'none'
    }

    return {
        show:show,
        hide:hide
    }

})();