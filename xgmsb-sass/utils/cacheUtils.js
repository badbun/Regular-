/**
 * Created by wrb on 2017/1/4.
 */
(function(SBPage){

    if(!SBPage){
        window.SBPage = SBPage = {};
    }

    var cacheUtils = {

        keys: {
            "aaa": "aaa"
        },

        getItem: function (key) {
            return localStorage.getItem(key);
        },

        setItem: function (key, value) {
            localStorage.setItem(key, value);
        }

    };

    SBPage.cacheUtils = cacheUtils;

})(window.SBPage);