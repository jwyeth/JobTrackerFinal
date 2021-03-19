﻿var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


!function (t) { var e = {}; function i(n) { if (e[n]) return e[n].exports; var o = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports } i.m = t, i.c = e, i.d = function (t, e, n) { i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, i.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, i.t = function (t, e) { if (1 & e && (t = i(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var n = Object.create(null); if (i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var o in t) i.d(n, o, function (e) { return t[e] }.bind(null, o)); return n }, i.n = function (t) { var e = t && t.__esModule ? function () { return t.default } : function () { return t }; return i.d(e, "a", e), e }, i.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, i.p = "", i(i.s = 0) }([function (t, e, i) { "use strict"; i.r(e); var n = function () { return (n = Object.assign || function (t) { for (var e, i = 1, n = arguments.length; i < n; i++)for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t }).apply(this, arguments) }, o = function () { function t(t) { void 0 === t && (t = {}), this.itemsState = {}; var e = "object" == typeof t && "nameSpace" in t ? t.nameSpace : "hc", i = { nameSpace: "hc", toggleButtonAttr: "data-" + e + "-control", toggleContentAttr: "data-" + e + "-content", activeClass: "is-active", isAnimation: !0, closeOthers: !0, animationSpeed: 400, cssEasing: "ease-in-out", onSlideStart: function () { }, onSlideEnd: function () { } }; this.options = n(n({}, i), t), this.toggleContentEls = document.querySelectorAll("[" + this.options.toggleContentAttr + "]"), this.toggleButtonEls = document.querySelectorAll("[" + this.options.toggleButtonAttr + "]"), this.init() } return t.prototype.init = function () { this.toggleContentEls && this.initContentsState(this.toggleContentEls), this.toggleButtonEls.length > 0 && this.handleButtonsEvent(this.toggleButtonEls) }, t.prototype.initContentsState = function (t) { var e = this; this.itemsState = {}, [].slice.call(t).forEach((function (t) { t.style.overflow = "hidden", t.style.maxHeight = "none"; var i = t.classList.contains(e.options.activeClass), n = t.getAttribute(e.options.toggleContentAttr); n && (e.setItemState(n, i), i ? e.open(n, !1, !1) : e.close(n, !1, !1)) })) }, t.prototype.handleButtonsEvent = function (t) { var e = this; t && 0 !== t.length && [].slice.call(t).forEach((function (t) { var i = t.getAttribute(e.options.toggleButtonAttr); i && t.addEventListener("click", (function (n) { n.preventDefault(), e.toggleSlide(i, !!t) }), !1) })) }, t.prototype.setItemState = function (t, e) { this.itemsState[t] = { isOpen: e, isAnimating: !1 } }, t.prototype.toggleSlide = function (t, e) { void 0 === e && (e = !0), this.itemsState[t].isAnimating || (!1 === this.itemsState[t].isOpen ? this.open(t, e, this.options.isAnimation) : this.close(t, e, this.options.isAnimation)) }, t.prototype.open = function (t, e, i) { var n = this; if (void 0 === e && (e = !0), void 0 === i && (i = !0), t) { Object.prototype.hasOwnProperty.call(this.itemsState, t) || this.setItemState(t, !1), this.itemsState[t].isAnimating = !0, this.options.closeOthers && [].slice.call(this.toggleContentEls).forEach((function (e) { var o = e.getAttribute(n.options.toggleContentAttr); o && o !== t && n.close(o, !1, i) })), !1 !== e && this.options.onSlideStart(!0, t); var o = document.querySelector("[" + this.options.toggleContentAttr + "='" + t + "']"), s = this.getTargetHeight(o); o.classList.add(this.options.activeClass); var a = document.querySelectorAll("[" + this.options.toggleButtonAttr + "='" + t + "']"); a.length > 0 && [].slice.call(a).forEach((function (t) { t.classList.add(n.options.activeClass) })), i ? (o.style.overflow = "hidden", o.style.transition = this.options.animationSpeed + "ms " + this.options.cssEasing, o.style.maxHeight = (s || "1000") + "px", setTimeout((function () { !1 !== e && n.options.onSlideEnd(!0, t), o.style.maxHeight = "none", o.style.transition = "", o.style.overflow = "", n.itemsState[t].isAnimating = !1 }), this.options.animationSpeed)) : (o.style.maxHeight = "none", o.style.overflow = "", this.itemsState[t].isAnimating = !1), this.itemsState[t].isOpen = !0 } }, t.prototype.close = function (t, e, i) { var n = this; if (void 0 === e && (e = !0), void 0 === i && (i = !0), t) { Object.prototype.hasOwnProperty.call(this.itemsState, t) || this.setItemState(t, !1), this.itemsState[t].isAnimating = !0, !1 !== e && this.options.onSlideStart(!1, t); var o = document.querySelector("[" + this.options.toggleContentAttr + "='" + t + "']"); o.style.overflow = "hidden", o.classList.remove(this.options.activeClass), o.style.maxHeight = o.clientHeight + "px", setTimeout((function () { o.style.maxHeight = "0px" }), 5); var s = document.querySelectorAll("[" + this.options.toggleButtonAttr + "='" + t + "']"); s.length > 0 && [].slice.call(s).forEach((function (t) { t.classList.remove(n.options.activeClass) })), i ? (o.style.transition = this.options.animationSpeed + "ms " + this.options.cssEasing, setTimeout((function () { !1 !== e && n.options.onSlideEnd(!1, t), o.style.transition = "", n.itemsState[t].isAnimating = !1 }), this.options.animationSpeed)) : (this.options.onSlideEnd(!1, t), this.itemsState[t].isAnimating = !1), Object.prototype.hasOwnProperty.call(this.itemsState, t) && (this.itemsState[t].isOpen = !1) } }, t.prototype.getTargetHeight = function (t) { if (t) { var e = t.cloneNode(!0), i = t.parentNode; if (i) { e.style.maxHeight = "none", e.style.opacity = "0", i.appendChild(e); var n = e.clientHeight; return i.removeChild(e), n } } }, t }(); window.HandyCollapse = o }]);


//Full Options
const hc = new HandyCollapse({
    nameSpace: "hc",
    //activeClass: "is-active",
    isAnimation: true,
    closeOthers: false,
    //animationSpeed: 400,
    //cssEasing: "ease",
    onSlideStart: (isOpen, contentID) => {
        console.log(isOpen);
        const buttonEl = document.querySelectorAll(`[data-hc-control='${contentID}']`);
        console.log(buttonEl);
    },
    onSlideEnd: (isOpen, contentID) => {
        console.log(isOpen);
        const contentEl = document.querySelector(`[data-hc-content='${contentID}']`);
        console.log(contentEl);
    }
});

