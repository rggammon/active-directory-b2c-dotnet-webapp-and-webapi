window.lpTag = window.lpTag || {},
    "undefined" == typeof window.lpTag._tagCount ?
        (window.lpTag =
            {
                site: '85612348' || "",
                section: lpTag.section || "",
                tagletSection: lpTag.tagletSection || null,
                autoStart: lpTag.autoStart !== !1,
                ovr: lpTag.ovr || {},
                _v: "1.8.0",
                _tagCount: 1,
                protocol: "https:",
                events: {
                    bind: function (t, e, i) {
                        lpTag.defer(function () {
                            lpTag.events.bind(t, e, i)
                        }, 0)
                    },
                    trigger: function (t, e, i) {
                        lpTag.defer(function () {
                            lpTag.events.trigger(t, e, i)
                        }, 1)
                    }
                },
                defer: function (t, e) {
                    0 == e ?
                        (this._defB = this._defB || [], this._defB.push(t)) :
                        1 == e ?
                            (this._defT = this._defT || [], this._defT.push(t)) :
                            (this._defL = this._defL || [], this._defL.push(t))
                },
                load: function (t, e, i) {
                    var n = this;
                    setTimeout(function () {
                        n._load(t, e, i)
                    }, 0)
                },
                _load: function (t, e, i) {
                    var n = t;
                    t || (n = this.protocol + "//" + (this.ovr && this.ovr.domain ?
                        this.ovr.domain : "lptag.liveperson.net") + "/tag/tag.js?site=" + this.site);
                        var a = document.createElement("script");
                        a.setAttribute("charset", e ? e : "UTF-8"),
                        i && a.setAttribute("id", i),
                        a.setAttribute("src", n),
                        document.getElementsByTagName("head").item(0).appendChild(a)
                },
                init: function () {
                    this._timing = this._timing || {},
                    this._timing.start = (new Date).getTime();
                    var t = this; window.attachEvent ? window.attachEvent("onload", function () {
                            t._domReady("domReady")
                        }) :
                        (window.addEventListener("DOMContentLoaded", function () {
                            t._domReady("contReady") }, !1), 
                            window.addEventListener("load", function () {
                                t._domReady("domReady")
                            }, !1)),
                        "undefined" == typeof window._lptStop && this.load()
                },
                start: function () { this.autoStart = !0 },
                _domReady: function (t) {
                    this.isDom || (this.isDom = !0, this.events.trigger("LPT", "DOM_READY", { t: t })),
                    this._timing[t] = (new Date).getTime()
                },
                vars: lpTag.vars || [],
                dbs: lpTag.dbs || [],
                ctn: lpTag.ctn || [],
                sdes: lpTag.sdes || [],
                hooks: lpTag.hooks || [],
                ev: lpTag.ev || []
            },
            lpTag.init()
        ) : window.lpTag._tagCount += 1;

window.lpTag.section = ['rgammon'];

window.lpGetAuthenticationCode = function (callback) {
    var code = document.cookie
        .split(";")
        .reduce(function (prev, cur) {
            if (prev) {
                return prev;
            }

            cur = cur.trim();
            var aadCode = "AADCode=";
            var codeIndex = cur.indexOf(aadCode);
            if (codeIndex >= 0) {
                return cur.substr(codeIndex + aadCode.length);
            }

            return null;
        }, null);

    callback({
        ssoKey: code,
        redirect_uri: window.location.href
    });
}

lpTag.events.bind({
    eventName: "VAR_ADDED",
    appName: "lp_sdes",
    func: function (e) { }
});

lpTag.events.bind({
    eventName: "MONITORING_STATE",
    appName: "lp_SMT",
    func: function (active) { }
});

lpTag.events.bind({
    eventName: "START",
    appName: "LP_OFFERS",
    func: function (e) { }
});

lpTag.events.bind({
    eventName: "OFFER_DISPLAY",
    appName: "LP_OFFERS",
    func: function (e) { }
});

lpTag.events.bind({
    eventName: "OFFER_IMPRESSION",
    appName: "LP_OFFERS",
    func: function (e) {
        lpTag.taglets.rendererStub.click(e.engagementId);
    }
});

lpTag.events.bind({
    eventName: "OFFER_CLICK",
    appName: "LP_OFFERS",
    func: function (e) { }
});

lpTag.events.bind({
    eventName: "OFFER_TIMEOUT",
    appName: "LP_OFFERS",
    func: function (e) { }
});

lpTag.events.bind({
    eventName: "OFFER_DECLINED",
    appName: "LP_OFFERS",
    func: function (e) { }
});

lpTag.events.bind({
    eventName: "OFFER_REMOVE",
    appName: "LP_OFFERS",
    func: function (e) { }
});

lpTag.events.bind({
    eventName: "state",
    appName: "lpUnifiedWindow",
    func: function (e) { }
});

lpTag.events.bind({
    eventName: "conversationInfo",
    appName: "lpUnifiedWindow",
    func: function (e) { }
});

lpTag.events.bind({
    eventName: "engagementData",
    appName: "lpUnifiedWindow",
    func: function (e) { }
});

lpTag.events.bind({
    eventName: "maximized",
    appName: "lpUnifiedWindow",
    func: function (e) { }
});

lpTag.events.bind({
    eventName: "minimized",
    appName: "lpUnifiedWindow",
    func: function (e) { }
});

lpTag.events.bind({
    eventName: "windowClosed",
    appName: "lpUnifiedWindow",
    func: function (e) { }
});

////setTimeout(function () {
////    var ei = lpTag.taglets.rendererStub.getEngagementInfo("RGammon Messaging");
////    var es = lpTag.taglets.rendererStub.getEngagementState("RGammon Messaging");
////    lpTag.taglets.rendererStub.click("RGammon Messaging");
////}, 2000);
