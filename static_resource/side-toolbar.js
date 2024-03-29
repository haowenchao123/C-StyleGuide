"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
    return typeof n
} : function (n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
};
!function (s, c) {
    location.protocol.substr(0, 4);
    var n = "1.6", e = {
        url: "https://g.csdnimg.cn/side-toolbar/" + n,
        opinion: {isShow: !1},
        qr: {
            isShow: !0,
            btnImgSrc: "https://g.csdnimg.cn/side-toolbar/1.6/images/qr.png",
            data: [{
                imgSrc: "https://g.csdnimg.cn/side-toolbar/1.6/images/qr_wechat.png",
                desc: "关注公众号"
            }, {imgSrc: "https://g.csdnimg.cn/side-toolbar/1.6/images/qr_app.png", desc: "下载APP"}]
        },
        cs: {
            isShow: !0,
            btnImgSrc: "https://g.csdnimg.cn/side-toolbar/1.6/images/kefu.png",
            clickUrl: "https://url.cn/5epoHIm?_type=wpa&qidian=true",
            clickFun: null
        },
        help: {
            isShow: !1,
            btnImgSrc: "https://g.csdnimg.cn/side-toolbar/1.6/images/bangzhucopy.png",
            clickUrl: "",
            clickFun: null
        },
        report: {isShow: !1, btnImgSrc: "https://g.csdnimg.cn/side-toolbar/1.6/images/jubaocopy.png"},
        goTop: {isShow: !0, btnImgSrc: "https://g.csdnimg.cn/side-toolbar/1.6/images/fanhuidingbucopy.png"},
        afterFinished: null
    }, o = {options: {}, goTop: y};
    void 0 === s.csdn && (s.csdn = {}), s.csdn.sideToolbar = Object.assign(o, s.csdn.sideToolbar);
    var t, i, a = s.csdn.sideToolbar.options;
    !function o(t, s) {
        Object.getOwnPropertyNames(t).forEach(function (n) {
            void 0 !== s[n] && ("object" === _typeof(s[n]) ? o(t[n], s[n]) : t[n] = s[n])
        }, null)
    }(e, a), t = e.url + "/side-toolbar.css", (i = c.createElement("link")).rel = "stylesheet", i.type = "text/css", i.href = t, c.getElementsByTagName("head")[0].appendChild(i);
    var r = "", l = "", p = "", d = "", g = "", b = "";
    if (e.opinion.isShow && (r = '\n    <a class="option-box" data-type="feedback">\n      <img src="' + e.opinion.btnImgSrc + '" alt="" srcset="">\n      <span class="show-txt">意见<br>反馈</span>\n    </a>\n    '), e.qr.isShow) {
        var h = "";
        e.qr.data.forEach(function (n) {
            h += '\n      <div class="qr-item-box">\n        <img src="' + n.imgSrc + '" alt="' + n.desc + '">\n        <p class="desc">' + n.desc + "</p>\n      </div>\n      "
        }), l = '\n    <a class="option-box" data-type="app">\n      <img src="' + e.qr.btnImgSrc + '" alt="" srcset="">\n      <span class="show-txt">手机看</span>\n      <div class="app-qr-box">\n        <div class="bg-box">\n          ' + h + "\n        </div>\n      </div>\n    </a>\n    "
    }
    e.cs.isShow && (p = '\n   '), e.help.isShow && (d = '\n    <a class="option-box" data-type="help">\n      <img src="' + e.help.btnImgSrc + '" alt="" srcset="">\n      <span class="show-txt">帮助</span>\n    </a>\n    '), e.report.isShow && (g = '\n    '), e.goTop.isShow && (b = '\n    <a class="option-box go-top-hide" data-type="gotop">\n      <img src="' + e.goTop.btnImgSrc + '" alt="" srcset="">\n      <span class="show-txt">返回<br>顶部</span>\n    </a>\n    ');
    var m = '\n  <div class="csdn-side-toolbar">\n    ' + r + "\n    " + l + "\n    " + p + "\n    " + d + "\n    " + g + "\n    " + b + "\n  </div>\n  ",
        u = c.createElement("div");

    function y() {
        var n = s.scrollY, o = n / 100, t = setInterval(function () {
            n -= o, s.scrollTo(0, n), n <= 0 && clearInterval(t)
        }, 10)
    }

    u.innerHTML = m, c.body.appendChild(u), null !== e.afterFinished && e.afterFinished(), c.body.onload = function () {
        if (e.goTop.isShow) {
            var n = function () {
                var n = s.scrollY;
                t <= n ? o.classList.remove("go-top-hide") : o.classList.add("go-top-hide")
            }, o = c.querySelector("a.option-box[data-type='gotop']"), t = s.outerHeight;
            c.body.scrollHeight;
            n(), s.addEventListener("scroll", n, !1), s.addEventListener("resize", function () {
                t = s.outerHeight, c.body.scrollHeight, n()
            }), o.addEventListener("click", y, !1)
        }
        e.cs.isShow && c.querySelector("a.option-box[data-type='cs']").addEventListener("click", function () {
            null !== e.cs.clickFun ? e.cs.clickFun() : s.open(e.cs.clickUrl, "_blank")
        }, !1);
        e.help.isShow && c.querySelector("a.option-box[data-type='cs']").addEventListener("click", function () {
            null !== e.help.clickFun ? e.help.clickFun() : s.open(e.help.clickUrl, "_blank")
        }, !1)
    }
}(window, document);