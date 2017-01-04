/**
 * Created by wrb on 2017/1/3.
 */

(function (SBPage) {

    if (!SBPage) {
        window.SBPage = SBPage = {};
    }

    var appService = SBPage.appService;
    var constUtils = SBPage.constUtils;
    var cacheUtils = SBPage.cacheUtils;

    var header = Regular.extend({

        template: __inline("../template/common/header.html"),

        init: function () {

            this.getInfo();

            cacheUtils.setItem(cacheUtils.keys.aaa, "this is demo");

        },

        config: function () {

        },

        getInfo: function () {
            var _this = this;
            appService.getInfo('', function (response) {
                if (response.head.code !== constUtils.SUCCCODE){
                    return false;
                }
                _this.data.info = response.body;
                _this.$update();
            })
        }

    });

    new header().$inject("#header");

    SBPage.header = header;

})(window.SBPage);