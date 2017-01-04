/**
 * Created by wrb on 2017/1/3.
 */
(function (SBPage) {

    if(!SBPage){
        window.SBPage = SBPage = {};
    }

    var menu2 = Regular.extend({
        template: __inline("../template/menu2.html")
    });

    SBPage.menu2 = menu2;

})(window.SBPage);