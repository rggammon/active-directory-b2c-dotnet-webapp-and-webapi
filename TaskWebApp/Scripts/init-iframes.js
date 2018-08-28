var $iframes = $(".chat-iframe");

fetch("/DirectLineToken")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        $iframes.each(function (i, e) {
            var src = $(e).data("src");
            if (src) {
                e.src = src
                    .replace("##WEBCHAT_TOKEN##", data.webchatToken)
                    .replace("##LOCALHOST_TOKEN##", data.localhostToken);
            }
        });
    });
