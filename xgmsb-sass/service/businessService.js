/**
 * Created by wrb on 2017/1/4.
 */
//ÒµÎñ²ã

(function (SBPage) {

    var appService = SBPage.appService;

    var businessService = {

        xxx: function () {
            appService.test(
                {
                    "aaa": 1,
                    "bbb": 2
                },
                function(response){
                    console.log(response);
                }
            )
        }

    };

    SBPage.businessService = businessService;

})(window.SBPage);