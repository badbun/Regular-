/**
 * Created by wrb on 2017/1/4.
 */
(function (SBPage) {

    if (!SBPage) {
        window.SBPage = SBPage = {};
    }

    var mock = true;
    var mUrl = mock ? "http://127.0.0.1:8080/xgmsb-sass/mock/" : "≤‚ ‘µÿ÷∑";

    var apiUrl = {
        "test": mUrl + "test.json"
    };

    var appService = {

        getInfo: function (requestData, callback) {
            reqwest({
                url: apiUrl.test,
                method: "get",
                data: requestData,
                success: function (respones) {
                    callback && callback(respones)
                }
            })
        }

    };

    SBPage.appService = appService;

})(window.SBPage);