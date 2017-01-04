/**
 * Created by wrb on 2017/1/3.
 */
(function () {
    var side = Regular.extend({

        template: __inline("../template/common/side.html"),

        init: function () {
        },

        menuChange: function (j) {
            var nav_arr = this.$refs.nav_arr.getElementsByTagName('li');
            for(var i = 0 ; i < nav_arr.length; i++){
                if(i == j){
                    nav_arr[i].className = "aaa";
                }else{
                    nav_arr[i].className = "";
                }
            }
        }
    });

    new side().$inject("#side");

})();
