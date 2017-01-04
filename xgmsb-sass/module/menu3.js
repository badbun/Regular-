/**
 * Created by wrb on 2017/1/3.
 */
(function (SBPage) {

    if(!SBPage){
        window.SBPage = SBPage = {};
    }

    var menu3 = Regular.extend({
        template: __inline("../template/menu3.html")
    });

    SBPage.menu3 = menu3;

})(window.SBPage);