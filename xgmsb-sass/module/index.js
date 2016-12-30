/**
 * Created by wrb on 2016/12/30.
 */
(function (SBPage){
    if(!SBPage){
        window.SBPage = SBPage = {};
    }

    var Index = Regular.extend({
       template: 'hello word!123'
    });

    SBPage.Index = Index;
})(window.SBPage);