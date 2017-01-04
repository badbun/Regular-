/**
 * Created by wrb on 2016/12/30.
 */
(function (SBPage){

    if(!SBPage){
        window.SBPage = SBPage = {};
    }

    var Index = Regular.extend({
        template: __inline("../template/index.html"),

        init: function () {

        },

        config: function () {
            this.data.username = 'this is test';
        }
    });

    SBPage.Index = Index;
})(window.SBPage);