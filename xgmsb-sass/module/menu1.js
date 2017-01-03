/**
 * Created by wrb on 2017/1/3.
 */
(function (SBPage) {
    console.log(1);
    var menu1 = Regular.extend({
        template: __inline("../template/menu1.html")
    });

    SBPage.Menu1 = menu1;

})(window.SBPage);