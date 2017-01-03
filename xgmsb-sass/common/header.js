/**
 * Created by wrb on 2017/1/3.
 */

(function () {
    var header = Regular.extend({

        template: __inline("../template/header.html")

    });

    new header().$inject("#header");

})();