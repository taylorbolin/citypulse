! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = ot.type(e);
        return "function" === n || ot.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (ot.isFunction(t)) return ot.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return ot.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (pt.test(t)) return ot.filter(t, e, n);
            t = ot.filter(t, e)
        }
        return ot.grep(e, function(e) {
            return ot.inArray(e, t) >= 0 !== n
        })
    }

    function o(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function r(e) {
        var t = wt[e] = {};
        return ot.each(e.match(bt) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        ht.addEventListener ? (ht.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1)) : (ht.detachEvent("onreadystatechange", a), e.detachEvent("onload", a))
    }

    function a() {
        (ht.addEventListener || "load" === event.type || "complete" === ht.readyState) && (s(), ot.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Ct, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : At.test(n) ? ot.parseJSON(n) : n
                } catch (o) {}
                ot.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function c(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ot.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function d(e, t, n, i) {
        if (ot.acceptData(e)) {
            var o, r, s = ot.expando,
                a = e.nodeType,
                l = a ? ot.cache : e,
                c = a ? e[s] : e[s] && s;
            if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = a ? e[s] = Y.pop() || ot.guid++ : s), l[c] || (l[c] = a ? {} : {
                toJSON: ot.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? l[c] = ot.extend(l[c], t) : l[c].data = ot.extend(l[c].data, t)), r = l[c], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[ot.camelCase(t)] = n), "string" == typeof t ? (o = r[t], null == o && (o = r[ot.camelCase(t)])) : o = r, o
        }
    }

    function u(e, t, n) {
        if (ot.acceptData(e)) {
            var i, o, r = e.nodeType,
                s = r ? ot.cache : e,
                a = r ? e[ot.expando] : ot.expando;
            if (s[a]) {
                if (t && (i = n ? s[a] : s[a].data)) {
                    ot.isArray(t) ? t = t.concat(ot.map(t, ot.camelCase)) : t in i ? t = [t] : (t = ot.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
                    for (; o--;) delete i[t[o]];
                    if (n ? !c(i) : !ot.isEmptyObject(i)) return
                }(n || (delete s[a].data, c(s[a]))) && (r ? ot.cleanData([e], !0) : nt.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
            }
        }
    }

    function p() {
        return !0
    }

    function f() {
        return !1
    }

    function h() {
        try {
            return ht.activeElement
        } catch (e) {}
    }

    function g(e) {
        var t = Pt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function v(e, t) {
        var n, i, o = 0,
            r = typeof e.getElementsByTagName !== Tt ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Tt ? e.querySelectorAll(t || "*") : void 0;
        if (!r)
            for (r = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || ot.nodeName(i, t) ? r.push(i) : ot.merge(r, v(i, t));
        return void 0 === t || t && ot.nodeName(e, t) ? ot.merge([e], r) : r
    }

    function m(e) {
        Ht.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return ot.nodeName(e, "table") && ot.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== ot.find.attr(e, "type")) + "/" + e.type, e
    }

    function w(e) {
        var t = Ut.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) ot._data(n, "globalEval", !t || ot._data(t[i], "globalEval"))
    }

    function k(e, t) {
        if (1 === t.nodeType && ot.hasData(e)) {
            var n, i, o, r = ot._data(e),
                s = ot._data(t, r),
                a = r.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)
                    for (i = 0, o = a[n].length; o > i; i++) ot.event.add(t, n, a[n][i])
            }
            s.data && (s.data = ot.extend({}, s.data))
        }
    }

    function T(e, t) {
        var n, i, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[ot.expando]) {
                o = ot._data(t);
                for (i in o.events) ot.removeEvent(t, i, o.handle);
                t.removeAttribute(ot.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, w(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !ot.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ht.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function A(t, n) {
        var i, o = ot(n.createElement(t)).appendTo(n.body),
            r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : ot.css(o[0], "display");
        return o.detach(), r
    }

    function C(e) {
        var t = ht,
            n = Zt[e];
        return n || (n = A(e, t), "none" !== n && n || (Kt = (Kt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Kt[0].contentWindow || Kt[0].contentDocument).document, t.write(), t.close(), n = A(e, t), Kt.detach()), Zt[e] = n), n
    }

    function S(e, t) {
        return {
            get: function() {
                var n = e();
                return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
            }
        }
    }

    function E(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = fn.length; o--;)
            if (t = fn[o] + n, t in e) return t;
        return i
    }

    function $(e, t) {
        for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++) i = e[s], i.style && (r[s] = ot._data(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && $t(i) && (r[s] = ot._data(i, "olddisplay", C(i.nodeName)))) : (o = $t(i), (n && "none" !== n || !o) && ot._data(i, "olddisplay", o ? n : ot.css(i, "display"))));
        for (s = 0; a > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function N(e, t, n) {
        var i = cn.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function H(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += ot.css(e, n + Et[r], !0, o)), i ? ("content" === n && (s -= ot.css(e, "padding" + Et[r], !0, o)), "margin" !== n && (s -= ot.css(e, "border" + Et[r] + "Width", !0, o))) : (s += ot.css(e, "padding" + Et[r], !0, o), "padding" !== n && (s += ot.css(e, "border" + Et[r] + "Width", !0, o)));
        return s
    }

    function j(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = en(e),
            s = nt.boxSizing && "border-box" === ot.css(e, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = tn(e, t, r), (0 > o || null == o) && (o = e.style[t]), on.test(o)) return o;
            i = s && (nt.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + H(e, t, n || (s ? "border" : "content"), i, r) + "px"
    }

    function L(e, t, n, i, o) {
        return new L.prototype.init(e, t, n, i, o)
    }

    function D() {
        return setTimeout(function() {
            hn = void 0
        }), hn = ot.now()
    }

    function O(e, t) {
        var n, i = {
                height: e
            },
            o = 0;
        for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Et[o], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function M(e, t, n) {
        for (var i, o = (wn[t] || []).concat(wn["*"]), r = 0, s = o.length; s > r; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function P(e, t, n) {
        var i, o, r, s, a, l, c, d, u = this,
            p = {},
            f = e.style,
            h = e.nodeType && $t(e),
            g = ot._data(e, "fxshow");
        n.queue || (a = ot._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, u.always(function() {
            u.always(function() {
                a.unqueued--, ot.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = ot.css(e, "display"), d = "none" === c ? ot._data(e, "olddisplay") || C(e.nodeName) : c, "inline" === d && "none" === ot.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== C(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", nt.shrinkWrapBlocks() || u.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (o = t[i], vn.exec(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[i]) continue;
                    h = !0
                }
                p[i] = g && g[i] || ot.style(e, i)
            } else c = void 0;
        if (ot.isEmptyObject(p)) "inline" === ("none" === c ? C(e.nodeName) : c) && (f.display = c);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = ot._data(e, "fxshow", {}), r && (g.hidden = !h), h ? ot(e).show() : u.done(function() {
                ot(e).hide()
            }), u.done(function() {
                var t;
                ot._removeData(e, "fxshow");
                for (t in p) ot.style(e, t, p[t])
            });
            for (i in p) s = M(h ? g[i] : 0, i, u), i in g || (g[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function z(e, t) {
        var n, i, o, r, s;
        for (n in e)
            if (i = ot.camelCase(n), o = t[i], r = e[n], ot.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), s = ot.cssHooks[i], s && "expand" in s) {
                r = s.expand(r), delete e[i];
                for (n in r) n in e || (e[n] = r[n], t[n] = o)
            } else t[i] = o
    }

    function q(e, t, n) {
        var i, o, r = 0,
            s = bn.length,
            a = ot.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = hn || D(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r);
                return a.notifyWith(e, [c, r, n]), 1 > r && l ? n : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: ot.extend({}, t),
                opts: ot.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: hn || D(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = ot.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) c.tweens[n].run(1);
                    return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
                }
            }),
            d = c.props;
        for (z(d, c.opts.specialEasing); s > r; r++)
            if (i = bn[r].call(c, e, d, c.opts)) return i;
        return ot.map(d, M, c), ot.isFunction(c.opts.start) && c.opts.start.call(e, c), ot.fx.timer(ot.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function I(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(bt) || [];
            if (ot.isFunction(n))
                for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function F(e, t, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, ot.each(e[a] || [], function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var r = {},
            s = e === Rn;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function W(e, t) {
        var n, i, o = ot.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && ot.extend(!0, e, n), e
    }

    function _(e, t, n) {
        for (var i, o, r, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (s in a)
                if (a[s] && a[s].test(o)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in n) r = l[0];
        else {
            for (s in n) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    r = s;
                    break
                }
                i || (i = s)
            }
            r = r || i
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function B(e, t, n, i) {
        var o, r, s, a, l, c = {},
            d = e.dataTypes.slice();
        if (d[1])
            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (r = d.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (s = c[l + " " + r] || c["* " + r], !s)
                for (o in c)
                    if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], d.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (u) {
                    return {
                        state: "parsererror",
                        error: s ? u : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function R(e, t, n, i) {
        var o;
        if (ot.isArray(t)) ot.each(t, function(t, o) {
            n || Yn.test(e) ? i(e, o) : R(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== ot.type(t)) i(e, t);
        else
            for (o in t) R(e + "[" + o + "]", t[o], n, i)
    }

    function Q() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function X() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function U(e) {
        return ot.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var Y = [],
        J = Y.slice,
        V = Y.concat,
        G = Y.push,
        K = Y.indexOf,
        Z = {},
        et = Z.toString,
        tt = Z.hasOwnProperty,
        nt = {},
        it = "1.11.3",
        ot = function(e, t) {
            return new ot.fn.init(e, t)
        },
        rt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        st = /^-ms-/,
        at = /-([\da-z])/gi,
        lt = function(e, t) {
            return t.toUpperCase()
        };
    ot.fn = ot.prototype = {
        jquery: it,
        constructor: ot,
        selector: "",
        length: 0,
        toArray: function() {
            return J.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : J.call(this)
        },
        pushStack: function(e) {
            var t = ot.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return ot.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(ot.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(J.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: G,
        sort: Y.sort,
        splice: Y.splice
    }, ot.extend = ot.fn.extend = function() {
        var e, t, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || ot.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (o = arguments[a]))
                for (i in o) e = s[i], n = o[i], s !== n && (c && n && (ot.isPlainObject(n) || (t = ot.isArray(n))) ? (t ? (t = !1, r = e && ot.isArray(e) ? e : []) : r = e && ot.isPlainObject(e) ? e : {}, s[i] = ot.extend(c, r, n)) : void 0 !== n && (s[i] = n));
        return s
    }, ot.extend({
        expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ot.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === ot.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !ot.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== ot.type(e) || e.nodeType || ot.isWindow(e)) return !1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (nt.ownLast)
                for (t in e) return tt.call(e, t);
            for (t in e);
            return void 0 === t || tt.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && ot.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(st, "ms-").replace(at, lt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var o, r = 0,
                s = e.length,
                a = n(e);
            if (i) {
                if (a)
                    for (; s > r && (o = t.apply(e[r], i), o !== !1); r++);
                else
                    for (r in e)
                        if (o = t.apply(e[r], i), o === !1) break
            } else if (a)
                for (; s > r && (o = t.call(e[r], r, e[r]), o !== !1); r++);
            else
                for (r in e)
                    if (o = t.call(e[r], r, e[r]), o === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(rt, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? ot.merge(i, "string" == typeof e ? [e] : e) : G.call(i, e)), i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (K) return K.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++];
            if (n !== n)
                for (; void 0 !== t[i];) e[o++] = t[i++];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i, o = [], r = 0, s = e.length, a = !n; s > r; r++) i = !t(e[r], r), i !== a && o.push(e[r]);
            return o
        },
        map: function(e, t, i) {
            var o, r = 0,
                s = e.length,
                a = n(e),
                l = [];
            if (a)
                for (; s > r; r++) o = t(e[r], r, i), null != o && l.push(o);
            else
                for (r in e) o = t(e[r], r, i), null != o && l.push(o);
            return V.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (o = e[t], t = e, e = o), ot.isFunction(e) ? (n = J.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(J.call(arguments)))
            }, i.guid = e.guid = e.guid || ot.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: nt
    }), ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ct = function(e) {
        function t(e, t, n, i) {
            var o, r, s, a, l, c, u, f, h, g;
            if ((t ? t.ownerDocument || t : F) !== L && j(t), t = t || L, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
            if (!i && O) {
                if (11 !== a && (o = yt.exec(e)))
                    if (s = o[1]) {
                        if (9 === a) {
                            if (r = t.getElementById(s), !r || !r.parentNode) return n;
                            if (r.id === s) return n.push(r), n
                        } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(s)) && q(t, r) && r.id === s) return n.push(r), n
                    } else {
                        if (o[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = o[3]) && x.getElementsByClassName) return K.apply(n, t.getElementsByClassName(s)), n
                    }
                if (x.qsa && (!M || !M.test(e))) {
                    if (f = u = I, h = t, g = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (c = C(e), (u = t.getAttribute("id")) ? f = u.replace(wt, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--;) c[l] = f + p(c[l]);
                        h = bt.test(e) && d(t.parentNode) || t, g = c.join(",")
                    }
                    if (g) try {
                        return K.apply(n, h.querySelectorAll(g)), n
                    } catch (v) {} finally {
                        u || t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(lt, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[I] = !0, e
        }

        function o(e) {
            var t = L.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) k.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function u() {}

        function p(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function f(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                r = _++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || o) return e(t, n, r)
            } : function(t, n, s) {
                var a, l, c = [W, r];
                if (s) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) {
                            if (l = t[I] || (t[I] = {}), (a = l[i]) && a[0] === W && a[1] === r) return c[2] = a[2];
                            if (l[i] = c, c[2] = e(t, n, s)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, i) {
            for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
            return i
        }

        function v(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; l > a; a++)(r = e[a]) && (!n || n(r, i, o)) && (s.push(r), c && t.push(a));
            return s
        }

        function m(e, t, n, o, r, s) {
            return o && !o[I] && (o = m(o)), r && !r[I] && (r = m(r, s)), i(function(i, s, a, l) {
                var c, d, u, p = [],
                    f = [],
                    h = s.length,
                    m = i || g(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !i && t ? m : v(m, p, e, a, l),
                    b = n ? r || (i ? e : h || o) ? [] : s : y;
                if (n && n(y, b, a, l), o)
                    for (c = v(b, f), o(c, [], a, l), d = c.length; d--;)(u = c[d]) && (b[f[d]] = !(y[f[d]] = u));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (c = [], d = b.length; d--;)(u = b[d]) && c.push(y[d] = u);
                            r(null, b = [], c, l)
                        }
                        for (d = b.length; d--;)(u = b[d]) && (c = r ? et(i, u) : p[d]) > -1 && (i[c] = !(s[c] = u))
                    }
                } else b = v(b === s ? b.splice(h, b.length) : b), r ? r(null, s, b, l) : K.apply(s, b)
            })
        }

        function y(e) {
            for (var t, n, i, o = e.length, r = k.relative[e[0].type], s = r || k.relative[" "], a = r ? 1 : 0, l = f(function(e) {
                    return e === t
                }, s, !0), c = f(function(e) {
                    return et(t, e) > -1
                }, s, !0), d = [function(e, n, i) {
                    var o = !r && (i || n !== $) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                    return t = null, o
                }]; o > a; a++)
                if (n = k.relative[e[a].type]) d = [f(h(d), n)];
                else {
                    if (n = k.filter[e[a].type].apply(null, e[a].matches), n[I]) {
                        for (i = ++a; o > i && !k.relative[e[i].type]; i++);
                        return m(a > 1 && h(d), a > 1 && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(lt, "$1"), n, i > a && y(e.slice(a, i)), o > i && y(e = e.slice(i)), o > i && p(e))
                    }
                    d.push(n)
                }
            return h(d)
        }

        function b(e, n) {
            var o = n.length > 0,
                r = e.length > 0,
                s = function(i, s, a, l, c) {
                    var d, u, p, f = 0,
                        h = "0",
                        g = i && [],
                        m = [],
                        y = $,
                        b = i || r && k.find.TAG("*", c),
                        w = W += null == y ? 1 : Math.random() || .1,
                        x = b.length;
                    for (c && ($ = s !== L && s); h !== x && null != (d = b[h]); h++) {
                        if (r && d) {
                            for (u = 0; p = e[u++];)
                                if (p(d, s, a)) {
                                    l.push(d);
                                    break
                                }
                            c && (W = w)
                        }
                        o && ((d = !p && d) && f--, i && g.push(d))
                    }
                    if (f += h, o && h !== f) {
                        for (u = 0; p = n[u++];) p(g, m, s, a);
                        if (i) {
                            if (f > 0)
                                for (; h--;) g[h] || m[h] || (m[h] = V.call(l));
                            m = v(m)
                        }
                        K.apply(l, m), c && !i && m.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (W = w, $ = y), g
                };
            return o ? i(s) : s
        }
        var w, x, k, T, A, C, S, E, $, N, H, j, L, D, O, M, P, z, q, I = "sizzle" + 1 * new Date,
            F = e.document,
            W = 0,
            _ = 0,
            B = n(),
            R = n(),
            Q = n(),
            X = function(e, t) {
                return e === t && (H = !0), 0
            },
            U = 1 << 31,
            Y = {}.hasOwnProperty,
            J = [],
            V = J.pop,
            G = J.push,
            K = J.push,
            Z = J.slice,
            et = function(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ot = it.replace("w", "w#"),
            rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + nt + "*\\]",
            st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
            at = new RegExp(nt + "+", "g"),
            lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            ct = new RegExp("^" + nt + "*," + nt + "*"),
            dt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            pt = new RegExp(st),
            ft = new RegExp("^" + ot + "$"),
            ht = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + tt + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            gt = /^(?:input|select|textarea|button)$/i,
            vt = /^h\d$/i,
            mt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            wt = /'|\\/g,
            xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            kt = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            Tt = function() {
                j()
            };
        try {
            K.apply(J = Z.call(F.childNodes), F.childNodes), J[F.childNodes.length].nodeType
        } catch (At) {
            K = {
                apply: J.length ? function(e, t) {
                    G.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, A = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, j = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : F;
            return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, D = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)), O = !A(i), x.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = o(function(e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = mt.test(i.getElementsByClassName), x.getById = o(function(e) {
                return D.appendChild(e).id = I, !i.getElementsByName || !i.getElementsByName(I).length
            }), x.getById ? (k.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, k.filter.ID = function(e) {
                var t = e.replace(xt, kt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete k.find.ID, k.filter.ID = function(e) {
                var t = e.replace(xt, kt);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), k.find.TAG = x.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, k.find.CLASS = x.getElementsByClassName && function(e, t) {
                return O ? t.getElementsByClassName(e) : void 0
            }, P = [], M = [], (x.qsa = mt.test(i.querySelectorAll)) && (o(function(e) {
                D.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + I + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || M.push(".#.+[+~]")
            }), o(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
            })), (x.matchesSelector = mt.test(z = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function(e) {
                x.disconnectedMatch = z.call(e, "div"), z.call(e, "[s!='']:x"), P.push("!=", st)
            }), M = M.length && new RegExp(M.join("|")), P = P.length && new RegExp(P.join("|")), t = mt.test(D.compareDocumentPosition), q = t || mt.test(D.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, X = t ? function(e, t) {
                if (e === t) return H = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === F && q(F, e) ? -1 : t === i || t.ownerDocument === F && q(F, t) ? 1 : N ? et(N, e) - et(N, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return H = !0, 0;
                var n, o = 0,
                    r = e.parentNode,
                    a = t.parentNode,
                    l = [e],
                    c = [t];
                if (!r || !a) return e === i ? -1 : t === i ? 1 : r ? -1 : a ? 1 : N ? et(N, e) - et(N, t) : 0;
                if (r === a) return s(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) c.unshift(n);
                for (; l[o] === c[o];) o++;
                return o ? s(l[o], c[o]) : l[o] === F ? -1 : c[o] === F ? 1 : 0
            }, i) : L
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== L && j(e), n = n.replace(ut, "='$1']"), !(!x.matchesSelector || !O || P && P.test(n) || M && M.test(n))) try {
                var i = z.call(e, n);
                if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (o) {}
            return t(n, L, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && j(e), q(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== L && j(e);
            var n = k.attrHandle[t.toLowerCase()],
                i = n && Y.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== i ? i : x.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (H = !x.detectDuplicates, N = !x.sortStable && e.slice(0), e.sort(X), H) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return N = null, e
        }, T = t.getText = function(e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += T(t);
            return n
        }, k = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xt, kt), e[3] = (e[3] || e[4] || e[5] || "").replace(xt, kt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pt.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xt, kt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && B(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(at, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var c, d, u, p, f, h, g = r !== s ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            m = a && t.nodeName.toLowerCase(),
                            y = !l && !a;
                        if (v) {
                            if (r) {
                                for (; g;) {
                                    for (u = t; u = u[g];)
                                        if (a ? u.nodeName.toLowerCase() === m : 1 === u.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? v.firstChild : v.lastChild], s && y) {
                                for (d = v[I] || (v[I] = {}), c = d[e] || [], f = c[0] === W && c[1], p = c[0] === W && c[2], u = f && v.childNodes[f]; u = ++f && u && u[g] || (p = f = 0) || h.pop();)
                                    if (1 === u.nodeType && ++p && u === t) {
                                        d[e] = [W, f, p];
                                        break
                                    }
                            } else if (y && (c = (t[I] || (t[I] = {}))[e]) && c[0] === W) p = c[1];
                            else
                                for (;
                                    (u = ++f && u && u[g] || (p = f = 0) || h.pop()) && ((a ? u.nodeName.toLowerCase() !== m : 1 !== u.nodeType) || !++p || (y && ((u[I] || (u[I] = {}))[e] = [W, p]), u !== t)););
                            return p -= o, p === i || p % i === 0 && p / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, r = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[I] ? r(n) : r.length > 1 ? (o = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, o = r(e, n), s = o.length; s--;) i = et(e, o[s]), e[i] = !(t[i] = o[s])
                    }) : function(e) {
                        return r(e, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        o = S(e.replace(lt, "$1"));
                    return o[I] ? i(function(e, t, n, i) {
                        for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                    }) : function(e, i, r) {
                        return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(xt, kt),
                        function(t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return ft.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xt, kt).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === D
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !k.pseudos.empty(e)
                },
                header: function(e) {
                    return vt.test(e.nodeName)
                },
                input: function(e) {
                    return gt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[w] = a(w);
        for (w in {
                submit: !0,
                reset: !0
            }) k.pseudos[w] = l(w);
        return u.prototype = k.filters = k.pseudos, k.setFilters = new u, C = t.tokenize = function(e, n) {
            var i, o, r, s, a, l, c, d = R[e + " "];
            if (d) return n ? 0 : d.slice(0);
            for (a = e, l = [], c = k.preFilter; a;) {
                (!i || (o = ct.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = dt.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(lt, " ")
                }), a = a.slice(i.length));
                for (s in k.filter) !(o = ht[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : R(e, l).slice(0)
        }, S = t.compile = function(e, t) {
            var n, i = [],
                o = [],
                r = Q[e + " "];
            if (!r) {
                for (t || (t = C(e)), n = t.length; n--;) r = y(t[n]), r[I] ? i.push(r) : o.push(r);
                r = Q(e, b(o, i)), r.selector = e
            }
            return r
        }, E = t.select = function(e, t, n, i) {
            var o, r, s, a, l, c = "function" == typeof e && e,
                u = !i && C(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === t.nodeType && O && k.relative[r[1].type]) {
                    if (t = (k.find.ID(s.matches[0].replace(xt, kt), t) || [])[0], !t) return n;
                    c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = ht.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !k.relative[a = s.type]);)
                    if ((l = k.find[a]) && (i = l(s.matches[0].replace(xt, kt), bt.test(r[0].type) && d(t.parentNode) || t))) {
                        if (r.splice(o, 1), e = i.length && p(r), !e) return K.apply(n, i), n;
                        break
                    }
            }
            return (c || S(e, u))(i, t, !O, n, bt.test(e) && d(t.parentNode) || t), n
        }, x.sortStable = I.split("").sort(X).join("") === I, x.detectDuplicates = !!H, j(), x.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(L.createElement("div"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || r(tt, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    ot.find = ct, ot.expr = ct.selectors, ot.expr[":"] = ot.expr.pseudos, ot.unique = ct.uniqueSort, ot.text = ct.getText, ot.isXMLDoc = ct.isXML, ot.contains = ct.contains;
    var dt = ot.expr.match.needsContext,
        ut = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pt = /^.[^:#\[\.,]*$/;
    ot.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ot.find.matchesSelector(i, e) ? [i] : [] : ot.find.matches(e, ot.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ot.fn.extend({
        find: function(e) {
            var t, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof e) return this.pushStack(ot(e).filter(function() {
                for (t = 0; o > t; t++)
                    if (ot.contains(i[t], this)) return !0
            }));
            for (t = 0; o > t; t++) ot.find(e, i[t], n);
            return n = this.pushStack(o > 1 ? ot.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && dt.test(e) ? ot(e) : e || [], !1).length
        }
    });
    var ft, ht = e.document,
        gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        vt = ot.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : gt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ft).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof ot ? t[0] : t, ot.merge(this, ot.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ht, !0)), ut.test(n[1]) && ot.isPlainObject(t))
                        for (n in t) ot.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (i = ht.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2]) return ft.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = ht, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ot.isFunction(e) ? "undefined" != typeof ft.ready ? ft.ready(e) : e(ot) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ot.makeArray(e, this))
        };
    vt.prototype = ot.fn, ft = ot(ht);
    var mt = /^(?:parents|prev(?:Until|All))/,
        yt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ot.extend({
        dir: function(e, t, n) {
            for (var i = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !ot(o).is(n));) 1 === o.nodeType && i.push(o), o = o[t];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), ot.fn.extend({
        has: function(e) {
            var t, n = ot(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (ot.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, r = [], s = dt.test(e) || "string" != typeof e ? ot(e, t || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? ot.unique(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ot.inArray(this[0], ot(e)) : ot.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ot.unique(ot.merge(this.get(), ot(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ot.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ot.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ot.dir(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return ot.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ot.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ot.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ot.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ot.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ot.sibling(e.firstChild)
        },
        contents: function(e) {
            return ot.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ot.merge([], e.childNodes)
        }
    }, function(e, t) {
        ot.fn[e] = function(n, i) {
            var o = ot.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = ot.filter(i, o)), this.length > 1 && (yt[e] || (o = ot.unique(o)), mt.test(e) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var bt = /\S+/g,
        wt = {};
    ot.Callbacks = function(e) {
        e = "string" == typeof e ? wt[e] || r(e) : ot.extend({}, e);
        var t, n, i, o, s, a, l = [],
            c = !e.once && [],
            d = function(r) {
                for (n = e.memory && r, i = !0, s = a || 0, a = 0, o = l.length, t = !0; l && o > s; s++)
                    if (l[s].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, l && (c ? c.length && d(c.shift()) : n ? l = [] : u.disable())
            },
            u = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function r(t) {
                            ot.each(t, function(t, n) {
                                var i = ot.type(n);
                                "function" === i ? e.unique && u.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), t ? o = l.length : n && (a = i, d(n))
                    }
                    return this
                },
                remove: function() {
                    return l && ot.each(arguments, function(e, n) {
                        for (var i;
                            (i = ot.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (o >= i && o--, s >= i && s--)
                    }), this
                },
                has: function(e) {
                    return e ? ot.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = c = n = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, n || u.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, n) {
                    return !l || i && !c || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? c.push(n) : d(n)), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, ot.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ot.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ot.Deferred(function(n) {
                            ot.each(t, function(t, r) {
                                var s = ot.isFunction(e[t]) && e[t];
                                o[r[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && ot.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ot.extend(e, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, ot.each(t, function(e, r) {
                var s = r[2],
                    a = r[3];
                i[r[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), i.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, i, o = 0,
                r = J.call(arguments),
                s = r.length,
                a = 1 !== s || e && ot.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : ot.Deferred(),
                c = function(e, n, i) {
                    return function(o) {
                        n[e] = this, i[e] = arguments.length > 1 ? J.call(arguments) : o, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && ot.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, t)) : --a;
            return a || l.resolveWith(i, r), l.promise()
        }
    });
    var xt;
    ot.fn.ready = function(e) {
        return ot.ready.promise().done(e), this
    }, ot.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ot.readyWait++ : ot.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--ot.readyWait : !ot.isReady) {
                if (!ht.body) return setTimeout(ot.ready);
                ot.isReady = !0, e !== !0 && --ot.readyWait > 0 || (xt.resolveWith(ht, [ot]), ot.fn.triggerHandler && (ot(ht).triggerHandler("ready"), ot(ht).off("ready")))
            }
        }
    }), ot.ready.promise = function(t) {
        if (!xt)
            if (xt = ot.Deferred(), "complete" === ht.readyState) setTimeout(ot.ready);
            else if (ht.addEventListener) ht.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1);
        else {
            ht.attachEvent("onreadystatechange", a), e.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == e.frameElement && ht.documentElement
            } catch (i) {}
            n && n.doScroll && ! function o() {
                if (!ot.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    s(), ot.ready()
                }
            }()
        }
        return xt.promise(t)
    };
    var kt, Tt = "undefined";
    for (kt in ot(nt)) break;
    nt.ownLast = "0" !== kt, nt.inlineBlockNeedsLayout = !1, ot(function() {
            var e, t, n, i;
            n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Tt && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var e = ht.createElement("div");
            if (null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    nt.deleteExpando = !1
                }
            }
            e = null
        }(), ot.acceptData = function(e) {
            var t = ot.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var At = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ct = /([A-Z])/g;
    ot.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? ot.cache[e[ot.expando]] : e[ot.expando], !!e && !c(e)
        },
        data: function(e, t, n) {
            return d(e, t, n)
        },
        removeData: function(e, t) {
            return u(e, t)
        },
        _data: function(e, t, n) {
            return d(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return u(e, t, !0)
        }
    }), ot.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = ot.data(r), 1 === r.nodeType && !ot._data(r, "parsedAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), l(r, i, o[i])));
                    ot._data(r, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                ot.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                ot.data(this, e, t)
            }) : r ? l(r, e, ot.data(r, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                ot.removeData(this, e)
            })
        }
    }), ot.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = ot._data(e, t), n && (!i || ot.isArray(n) ? i = ot._data(e, t, ot.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ot.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = ot._queueHooks(e, t),
                s = function() {
                    ot.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ot._data(e, n) || ot._data(e, n, {
                empty: ot.Callbacks("once memory").add(function() {
                    ot._removeData(e, t + "queue"), ot._removeData(e, n)
                })
            })
        }
    }), ot.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ot.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ot.queue(this, e, t);
                ot._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ot.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ot.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = ot.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = ot._data(r[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var St = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Et = ["Top", "Right", "Bottom", "Left"],
        $t = function(e, t) {
            return e = t || e, "none" === ot.css(e, "display") || !ot.contains(e.ownerDocument, e)
        },
        Nt = ot.access = function(e, t, n, i, o, r, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === ot.type(n)) {
                o = !0;
                for (a in n) ot.access(e, t, a, n[a], !0, r, s)
            } else if (void 0 !== i && (o = !0, ot.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(ot(e), n)
                })), t))
                for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
        },
        Ht = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = ht.createElement("input"),
            t = ht.createElement("div"),
            n = ht.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ht.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                nt.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete t.test
            } catch (i) {
                nt.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, n, i = ht.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (nt[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), nt[t + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var jt = /^(?:input|select|textarea)$/i,
        Lt = /^key/,
        Dt = /^(?:mouse|pointer|contextmenu)|click/,
        Ot = /^(?:focusinfocus|focusoutblur)$/,
        Mt = /^([^.]*)(?:\.(.+)|)$/;
    ot.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, s, a, l, c, d, u, p, f, h, g, v = ot._data(e);
            if (v) {
                for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = ot.guid++), (s = v.events) || (s = v.events = {}), (d = v.handle) || (d = v.handle = function(e) {
                        return typeof ot === Tt || e && ot.event.triggered === e.type ? void 0 : ot.event.dispatch.apply(d.elem, arguments)
                    }, d.elem = e), t = (t || "").match(bt) || [""], a = t.length; a--;) r = Mt.exec(t[a]) || [], f = g = r[1], h = (r[2] || "").split(".").sort(), f && (c = ot.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = ot.event.special[f] || {}, u = ot.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && ot.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, l), (p = s[f]) || (p = s[f] = [], p.delegateCount = 0, c.setup && c.setup.call(e, i, h, d) !== !1 || (e.addEventListener ? e.addEventListener(f, d, !1) : e.attachEvent && e.attachEvent("on" + f, d))), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), ot.event.global[f] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, c, d, u, p, f, h, g, v = ot.hasData(e) && ot._data(e);
            if (v && (d = v.events)) {
                for (t = (t || "").match(bt) || [""], c = t.length; c--;)
                    if (a = Mt.exec(t[c]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f) {
                        for (u = ot.event.special[f] || {}, f = (i ? u.delegateType : u.bindType) || f, p = d[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) s = p[r], !o && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (p.splice(r, 1), s.selector && p.delegateCount--, u.remove && u.remove.call(e, s));
                        l && !p.length && (u.teardown && u.teardown.call(e, h, v.handle) !== !1 || ot.removeEvent(e, f, v.handle), delete d[f])
                    } else
                        for (f in d) ot.event.remove(e, f + t[c], n, i, !0);
                ot.isEmptyObject(d) && (delete v.handle, ot._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, o) {
            var r, s, a, l, c, d, u, p = [i || ht],
                f = tt.call(t, "type") ? t.type : t,
                h = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = d = i = i || ht, 3 !== i.nodeType && 8 !== i.nodeType && !Ot.test(f + ot.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), s = f.indexOf(":") < 0 && "on" + f, t = t[ot.expando] ? t : new ot.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : ot.makeArray(n, [t]), c = ot.event.special[f] || {}, o || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                if (!o && !c.noBubble && !ot.isWindow(i)) {
                    for (l = c.delegateType || f, Ot.test(l + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), d = a;
                    d === (i.ownerDocument || ht) && p.push(d.defaultView || d.parentWindow || e)
                }
                for (u = 0;
                    (a = p[u++]) && !t.isPropagationStopped();) t.type = u > 1 ? l : c.bindType || f, r = (ot._data(a, "events") || {})[t.type] && ot._data(a, "handle"), r && r.apply(a, n), r = s && a[s], r && r.apply && ot.acceptData(a) && (t.result = r.apply(a, n), t.result === !1 && t.preventDefault());
                if (t.type = f, !o && !t.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), n) === !1) && ot.acceptData(i) && s && i[f] && !ot.isWindow(i)) {
                    d = i[s], d && (i[s] = null), ot.event.triggered = f;
                    try {
                        i[f]()
                    } catch (g) {}
                    ot.event.triggered = void 0, d && (i[s] = d)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = ot.event.fix(e);
            var t, n, i, o, r, s = [],
                a = J.call(arguments),
                l = (ot._data(this, "events") || {})[e.type] || [],
                c = ot.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = ot.event.handlers.call(this, e, l), t = 0;
                    (o = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, r = 0;
                        (i = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((ot.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], r = 0; a > r; r++) i = t[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? ot(n, this).index(l) >= 0 : ot.find(n, this, null, [l]).length), o[n] && o.push(i);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        fix: function(e) {
            if (e[ot.expando]) return e;
            var t, n, i, o = e.type,
                r = e,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Dt.test(o) ? this.mouseHooks : Lt.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new ot.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || ht), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, r = t.button,
                    s = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ht, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ot.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return ot.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var o = ot.extend(new ot.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? ot.event.trigger(o, null, t) : ot.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, ot.removeEvent = ht.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === Tt && (e[i] = null), e.detachEvent(i, n))
    }, ot.Event = function(e, t) {
        return this instanceof ot.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : f) : this.type = e, t && ot.extend(this, t), this.timeStamp = e && e.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(e, t)
    }, ot.Event.prototype = {
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = p, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ot.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ot.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return (!o || o !== i && !ot.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), nt.submitBubbles || (ot.event.special.submit = {
        setup: function() {
            return ot.nodeName(this, "form") ? !1 : void ot.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = ot.nodeName(t, "input") || ot.nodeName(t, "button") ? t.form : void 0;
                n && !ot._data(n, "submitBubbles") && (ot.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), ot._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ot.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return ot.nodeName(this, "form") ? !1 : void ot.event.remove(this, "._submit")
        }
    }), nt.changeBubbles || (ot.event.special.change = {
        setup: function() {
            return jt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ot.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ot.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ot.event.simulate("change", this, e, !0)
            })), !1) : void ot.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                jt.test(t.nodeName) && !ot._data(t, "changeBubbles") && (ot.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ot.event.simulate("change", this.parentNode, e, !0)
                }), ot._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return ot.event.remove(this, "._change"), !jt.test(this.nodeName)
        }
    }), nt.focusinBubbles || ot.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ot.event.simulate(t, e.target, ot.event.fix(e), !0)
        };
        ot.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = ot._data(i, t);
                o || i.addEventListener(e, n, !0), ot._data(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = ot._data(i, t) - 1;
                o ? ot._data(i, t, o) : (i.removeEventListener(e, n, !0), ot._removeData(i, t))
            }
        }
    }), ot.fn.extend({
        on: function(e, t, n, i, o) {
            var r, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (r in e) this.on(r, t, n, e[r], o);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = f;
            else if (!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return ot().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = ot.guid++)), this.each(function() {
                ot.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ot(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = f), this.each(function() {
                ot.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ot.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? ot.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Pt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        zt = / jQuery\d+="(?:null|\d+)"/g,
        qt = new RegExp("<(?:" + Pt + ")[\\s/>]", "i"),
        It = /^\s+/,
        Ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Wt = /<([\w:]+)/,
        _t = /<tbody/i,
        Bt = /<|&#?\w+;/,
        Rt = /<(?:script|style|link)/i,
        Qt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Xt = /^$|\/(?:java|ecma)script/i,
        Ut = /^true\/(.*)/,
        Yt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Jt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Vt = g(ht),
        Gt = Vt.appendChild(ht.createElement("div"));
    Jt.optgroup = Jt.option, Jt.tbody = Jt.tfoot = Jt.colgroup = Jt.caption = Jt.thead, Jt.th = Jt.td, ot.extend({
        clone: function(e, t, n) {
            var i, o, r, s, a, l = ot.contains(e.ownerDocument, e);
            if (nt.html5Clone || ot.isXMLDoc(e) || !qt.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Gt.innerHTML = e.outerHTML, Gt.removeChild(r = Gt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ot.isXMLDoc(e)))
                for (i = v(r), a = v(e), s = 0; null != (o = a[s]); ++s) i[s] && T(o, i[s]);
            if (t)
                if (n)
                    for (a = a || v(e), i = i || v(r), s = 0; null != (o = a[s]); s++) k(o, i[s]);
                else k(e, r);
            return i = v(r, "script"), i.length > 0 && x(i, !l && v(e, "script")), i = a = o = null, r
        },
        buildFragment: function(e, t, n, i) {
            for (var o, r, s, a, l, c, d, u = e.length, p = g(t), f = [], h = 0; u > h; h++)
                if (r = e[h], r || 0 === r)
                    if ("object" === ot.type(r)) ot.merge(f, r.nodeType ? [r] : r);
                    else if (Bt.test(r)) {
                for (a = a || p.appendChild(t.createElement("div")), l = (Wt.exec(r) || ["", ""])[1].toLowerCase(), d = Jt[l] || Jt._default, a.innerHTML = d[1] + r.replace(Ft, "<$1></$2>") + d[2], o = d[0]; o--;) a = a.lastChild;
                if (!nt.leadingWhitespace && It.test(r) && f.push(t.createTextNode(It.exec(r)[0])), !nt.tbody)
                    for (r = "table" !== l || _t.test(r) ? "<table>" !== d[1] || _t.test(r) ? 0 : a : a.firstChild, o = r && r.childNodes.length; o--;) ot.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
                for (ot.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = p.lastChild
            } else f.push(t.createTextNode(r));
            for (a && p.removeChild(a), nt.appendChecked || ot.grep(v(f, "input"), m), h = 0; r = f[h++];)
                if ((!i || -1 === ot.inArray(r, i)) && (s = ot.contains(r.ownerDocument, r), a = v(p.appendChild(r), "script"), s && x(a), n))
                    for (o = 0; r = a[o++];) Xt.test(r.type || "") && n.push(r);
            return a = null, p
        },
        cleanData: function(e, t) {
            for (var n, i, o, r, s = 0, a = ot.expando, l = ot.cache, c = nt.deleteExpando, d = ot.event.special; null != (n = e[s]); s++)
                if ((t || ot.acceptData(n)) && (o = n[a], r = o && l[o])) {
                    if (r.events)
                        for (i in r.events) d[i] ? ot.event.remove(n, i) : ot.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], c ? delete n[a] : typeof n.removeAttribute !== Tt ? n.removeAttribute(a) : n[a] = null, Y.push(o))
                }
        }
    }), ot.fn.extend({
        text: function(e) {
            return Nt(this, function(e) {
                return void 0 === e ? ot.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ht).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? ot.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || ot.cleanData(v(n)), n.parentNode && (t && ot.contains(n.ownerDocument, n) && x(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ot.cleanData(v(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ot.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return ot.clone(this, e, t)
            })
        },
        html: function(e) {
            return Nt(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(zt, "") : void 0;
                if (!("string" != typeof e || Rt.test(e) || !nt.htmlSerialize && qt.test(e) || !nt.leadingWhitespace && It.test(e) || Jt[(Wt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Ft, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (ot.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, ot.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = V.apply([], e);
            var n, i, o, r, s, a, l = 0,
                c = this.length,
                d = this,
                u = c - 1,
                p = e[0],
                f = ot.isFunction(p);
            if (f || c > 1 && "string" == typeof p && !nt.checkClone && Qt.test(p)) return this.each(function(n) {
                var i = d.eq(n);
                f && (e[0] = p.call(this, n, i.html())), i.domManip(e, t)
            });
            if (c && (a = ot.buildFragment(e, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                for (r = ot.map(v(a, "script"), b), o = r.length; c > l; l++) i = a, l !== u && (i = ot.clone(i, !0, !0), o && ot.merge(r, v(i, "script"))), t.call(this[l], i, l);
                if (o)
                    for (s = r[r.length - 1].ownerDocument, ot.map(r, w), l = 0; o > l; l++) i = r[l], Xt.test(i.type || "") && !ot._data(i, "globalEval") && ot.contains(s, i) && (i.src ? ot._evalUrl && ot._evalUrl(i.src) : ot.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Yt, "")));
                a = n = null
            }
            return this
        }
    }), ot.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ot.fn[e] = function(e) {
            for (var n, i = 0, o = [], r = ot(e), s = r.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), ot(r[i])[t](n), G.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var Kt, Zt = {};
    ! function() {
        var e;
        nt.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, i;
            return n = ht.getElementsByTagName("body")[0], n && n.style ? (t = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Tt && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ht.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
        }
    }();
    var en, tn, nn = /^margin/,
        on = new RegExp("^(" + St + ")(?!px)[a-z%]+$", "i"),
        rn = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (en = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    }, tn = function(e, t, n) {
        var i, o, r, s, a = e.style;
        return n = n || en(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== s || ot.contains(e.ownerDocument, e) || (s = ot.style(e, t)), on.test(s) && nn.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 === s ? s : s + ""
    }) : ht.documentElement.currentStyle && (en = function(e) {
        return e.currentStyle
    }, tn = function(e, t, n) {
        var i, o, r, s, a = e.style;
        return n = n || en(e), s = n ? n[t] : void 0, null == s && a && a[t] && (s = a[t]), on.test(s) && !rn.test(t) && (i = a.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : s, s = a.pixelLeft + "px", a.left = i, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
    }), ! function() {
        function t() {
            var t, n, i, o;
            n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = s = !1, l = !0, e.getComputedStyle && (r = "1%" !== (e.getComputedStyle(t, null) || {}).top, s = "4px" === (e.getComputedStyle(t, null) || {
                width: "4px"
            }).width, o = t.appendChild(ht.createElement("div")), o.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight), t.removeChild(o)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = t.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === o[0].offsetHeight, a && (o[0].style.display = "", o[1].style.display = "none", a = 0 === o[0].offsetHeight), n.removeChild(i))
        }
        var n, i, o, r, s, a, l;
        n = ht.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], (i = o && o.style) && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, ot.extend(nt, {
            reliableHiddenOffsets: function() {
                return null == a && t(), a
            },
            boxSizingReliable: function() {
                return null == s && t(), s
            },
            pixelPosition: function() {
                return null == r && t(), r
            },
            reliableMarginRight: function() {
                return null == l && t(), l
            }
        }))
    }(), ot.swap = function(e, t, n, i) {
        var o, r, s = {};
        for (r in t) s[r] = e.style[r], e.style[r] = t[r];
        o = n.apply(e, i || []);
        for (r in t) e.style[r] = s[r];
        return o
    };
    var sn = /alpha\([^)]*\)/i,
        an = /opacity\s*=\s*([^)]*)/,
        ln = /^(none|table(?!-c[ea]).+)/,
        cn = new RegExp("^(" + St + ")(.*)$", "i"),
        dn = new RegExp("^([+-])=(" + St + ")", "i"),
        un = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        pn = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        fn = ["Webkit", "O", "Moz", "ms"];
    ot.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": nt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = ot.camelCase(t),
                    l = e.style;
                if (t = ot.cssProps[a] || (ot.cssProps[a] = E(l, a)), s = ot.cssHooks[t] || ot.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t];
                if (r = typeof n, "string" === r && (o = dn.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(ot.css(e, t)), r = "number"), null != n && n === n && ("number" !== r || ot.cssNumber[a] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(e, n, i))))) try {
                    l[t] = n
                } catch (c) {}
            }
        },
        css: function(e, t, n, i) {
            var o, r, s, a = ot.camelCase(t);
            return t = ot.cssProps[a] || (ot.cssProps[a] = E(e.style, a)), s = ot.cssHooks[t] || ot.cssHooks[a], s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = tn(e, t, i)), "normal" === r && t in pn && (r = pn[t]), "" === n || n ? (o = parseFloat(r), n === !0 || ot.isNumeric(o) ? o || 0 : r) : r
        }
    }), ot.each(["height", "width"], function(e, t) {
        ot.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? ln.test(ot.css(e, "display")) && 0 === e.offsetWidth ? ot.swap(e, un, function() {
                    return j(e, t, i)
                }) : j(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var o = i && en(e);
                return N(e, n, i ? H(e, t, i, nt.boxSizing && "border-box" === ot.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), nt.opacity || (ot.cssHooks.opacity = {
        get: function(e, t) {
            return an.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                o = ot.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ot.trim(r.replace(sn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = sn.test(r) ? r.replace(sn, o) : r + " " + o)
        }
    }), ot.cssHooks.marginRight = S(nt.reliableMarginRight, function(e, t) {
        return t ? ot.swap(e, {
            display: "inline-block"
        }, tn, [e, "marginRight"]) : void 0
    }), ot.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ot.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + Et[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, nn.test(e) || (ot.cssHooks[e + t].set = N)
    }), ot.fn.extend({
        css: function(e, t) {
            return Nt(this, function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (ot.isArray(t)) {
                    for (i = en(e), o = t.length; o > s; s++) r[t[s]] = ot.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? ot.style(e, t, n) : ot.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return $(this, !0)
        },
        hide: function() {
            return $(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                $t(this) ? ot(this).show() : ot(this).hide()
            })
        }
    }), ot.Tween = L, L.prototype = {
        constructor: L,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ot.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = L.propHooks[this.prop];
            return e && e.get ? e.get(this) : L.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = L.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ot.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
        }
    }, L.prototype.init.prototype = L.prototype, L.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ot.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                ot.fx.step[e.prop] ? ot.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ot.cssProps[e.prop]] || ot.cssHooks[e.prop]) ? ot.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ot.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ot.fx = L.prototype.init, ot.fx.step = {};
    var hn, gn, vn = /^(?:toggle|show|hide)$/,
        mn = new RegExp("^(?:([+-])=|)(" + St + ")([a-z%]*)$", "i"),
        yn = /queueHooks$/,
        bn = [P],
        wn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    o = mn.exec(t),
                    r = o && o[3] || (ot.cssNumber[e] ? "" : "px"),
                    s = (ot.cssNumber[e] || "px" !== r && +i) && mn.exec(ot.css(n.elem, e)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== r) {
                    r = r || s[3], o = o || [], s = +i || 1;
                    do a = a || ".5", s /= a, ot.style(n.elem, e, s + r); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
    ot.Animation = ot.extend(q, {
            tweener: function(e, t) {
                ot.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, o = e.length; o > i; i++) n = e[i], wn[n] = wn[n] || [], wn[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? bn.unshift(e) : bn.push(e)
            }
        }), ot.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? ot.extend({}, e) : {
                complete: n || !n && t || ot.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ot.isFunction(t) && t
            };
            return i.duration = ot.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ot.fx.speeds ? ot.fx.speeds[i.duration] : ot.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ot.isFunction(i.old) && i.old.call(this), i.queue && ot.dequeue(this, i.queue)
            }, i
        }, ot.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter($t).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = ot.isEmptyObject(e),
                    r = ot.speed(t, n, i),
                    s = function() {
                        var t = q(this, ot.extend({}, e), r);
                        (o || ot._data(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        r = ot.timers,
                        s = ot._data(this);
                    if (o) s[o] && s[o].stop && i(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && yn.test(o) && i(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                    (t || !n) && ot.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ot._data(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        r = ot.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, ot.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ot.each(["toggle", "show", "hide"], function(e, t) {
            var n = ot.fn[t];
            ot.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, i, o)
            }
        }), ot.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ot.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), ot.timers = [], ot.fx.tick = function() {
            var e, t = ot.timers,
                n = 0;
            for (hn = ot.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || ot.fx.stop(), hn = void 0
        }, ot.fx.timer = function(e) {
            ot.timers.push(e), e() ? ot.fx.start() : ot.timers.pop()
        }, ot.fx.interval = 13, ot.fx.start = function() {
            gn || (gn = setInterval(ot.fx.tick, ot.fx.interval))
        }, ot.fx.stop = function() {
            clearInterval(gn), gn = null
        }, ot.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ot.fn.delay = function(e, t) {
            return e = ot.fx ? ot.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var e, t, n, i, o;
            t = ht.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = ht.createElement("select"), o = n.appendChild(ht.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", nt.getSetAttribute = "t" !== t.className, nt.style = /top/.test(i.getAttribute("style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn = !!e.value, nt.optSelected = o.selected, nt.enctype = !!ht.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !o.disabled, e = ht.createElement("input"), e.setAttribute("value", ""), nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), nt.radioValue = "t" === e.value
        }();
    var xn = /\r/g;
    ot.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = ot.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, ot(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ot.isArray(o) && (o = ot.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), t = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = ot.valHooks[o.type] || ot.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(xn, "") : null == n ? "" : n)) : void 0
        }
    }), ot.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ot.find.attr(e, "value");
                    return null != t ? t : ot.trim(ot.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                        if (n = i[l], !(!n.selected && l !== o || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ot.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ot(n).val(), r) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = ot.makeArray(t), s = o.length; s--;)
                        if (i = o[s], ot.inArray(ot.valHooks.option.get(i), r) >= 0) try {
                            i.selected = n = !0
                        } catch (a) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), ot.each(["radio", "checkbox"], function() {
        ot.valHooks[this] = {
            set: function(e, t) {
                return ot.isArray(t) ? e.checked = ot.inArray(ot(e).val(), t) >= 0 : void 0
            }
        }, nt.checkOn || (ot.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var kn, Tn, An = ot.expr.attrHandle,
        Cn = /^(?:checked|selected)$/i,
        Sn = nt.getSetAttribute,
        En = nt.input;
    ot.fn.extend({
        attr: function(e, t) {
            return Nt(this, ot.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ot.removeAttr(this, e)
            })
        }
    }), ot.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            return e && 3 !== r && 8 !== r && 2 !== r ? typeof e.getAttribute === Tt ? ot.prop(e, t, n) : (1 === r && ot.isXMLDoc(e) || (t = t.toLowerCase(), i = ot.attrHooks[t] || (ot.expr.match.bool.test(t) ? Tn : kn)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = ot.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void ot.removeAttr(e, t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
                r = t && t.match(bt);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];) i = ot.propFix[n] || n, ot.expr.match.bool.test(n) ? En && Sn || !Cn.test(n) ? e[i] = !1 : e[ot.camelCase("default-" + n)] = e[i] = !1 : ot.attr(e, n, ""), e.removeAttribute(Sn ? n : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!nt.radioValue && "radio" === t && ot.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Tn = {
        set: function(e, t, n) {
            return t === !1 ? ot.removeAttr(e, n) : En && Sn || !Cn.test(n) ? e.setAttribute(!Sn && ot.propFix[n] || n, n) : e[ot.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = An[t] || ot.find.attr;
        An[t] = En && Sn || !Cn.test(t) ? function(e, t, i) {
            var o, r;
            return i || (r = An[t], An[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, An[t] = r), o
        } : function(e, t, n) {
            return n ? void 0 : e[ot.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), En && Sn || (ot.attrHooks.value = {
        set: function(e, t, n) {
            return ot.nodeName(e, "input") ? void(e.defaultValue = t) : kn && kn.set(e, t, n)
        }
    }), Sn || (kn = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, An.id = An.name = An.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, ot.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: kn.set
    }, ot.attrHooks.contenteditable = {
        set: function(e, t, n) {
            kn.set(e, "" === t ? !1 : t, n)
        }
    }, ot.each(["width", "height"], function(e, t) {
        ot.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), nt.style || (ot.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var $n = /^(?:input|select|textarea|button|object)$/i,
        Nn = /^(?:a|area)$/i;
    ot.fn.extend({
        prop: function(e, t) {
            return Nt(this, ot.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = ot.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), ot.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, o, r, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (r = 1 !== s || !ot.isXMLDoc(e), r && (t = ot.propFix[t] || t, o = ot.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ot.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : $n.test(e.nodeName) || Nn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), nt.hrefNormalized || ot.each(["href", "src"], function(e, t) {
        ot.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), nt.optSelected || (ot.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ot.propFix[this.toLowerCase()] = this
    }), nt.enctype || (ot.propFix.enctype = "encoding");
    var Hn = /[\t\r\n\f]/g;
    ot.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, s, a = 0,
                l = this.length,
                c = "string" == typeof e && e;
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).addClass(e.call(this, t, this.className))
            });
            if (c)
                for (t = (e || "").match(bt) || []; l > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Hn, " ") : " ")) {
                        for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = ot.trim(i), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, s, a = 0,
                l = this.length,
                c = 0 === arguments.length || "string" == typeof e && e;
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).removeClass(e.call(this, t, this.className))
            });
            if (c)
                for (t = (e || "").match(bt) || []; l > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Hn, " ") : "")) {
                        for (r = 0; o = t[r++];)
                            for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        s = e ? ot.trim(i) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ot.isFunction(e) ? function(n) {
                ot(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, i = 0, o = ot(this), r = e.match(bt) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else(n === Tt || "boolean" === n) && (this.className && ot._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ot._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Hn, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ot.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ot.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var jn = ot.now(),
        Ln = /\?/,
        Dn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ot.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            o = ot.trim(t + "");
        return o && !ot.trim(o.replace(Dn, function(e, t, o, r) {
            return n && t && (i = 0), 0 === i ? e : (n = o || t, i += !r - !o, "")
        })) ? Function("return " + o)() : ot.error("Invalid JSON: " + t)
    }, ot.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (o) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + t), n
    };
    var On, Mn, Pn = /#.*$/,
        zn = /([?&])_=[^&]*/,
        qn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        In = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Fn = /^(?:GET|HEAD)$/,
        Wn = /^\/\//,
        _n = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Bn = {},
        Rn = {},
        Qn = "*/".concat("*");
    try {
        Mn = location.href
    } catch (Xn) {
        Mn = ht.createElement("a"), Mn.href = "", Mn = Mn.href
    }
    On = _n.exec(Mn.toLowerCase()) || [], ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Mn,
            type: "GET",
            isLocal: In.test(On[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ot.parseJSON,
                "text xml": ot.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? W(W(e, ot.ajaxSettings), t) : W(ot.ajaxSettings, e)
        },
        ajaxPrefilter: I(Bn),
        ajaxTransport: I(Rn),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var o, d, m, y, w, k = t;
                2 !== b && (b = 2, a && clearTimeout(a), c = void 0, s = i || "", x.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, n && (y = _(u, x, n)), y = B(u, y, x, o), o ? (u.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ot.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (ot.etag[r] = w)), 204 === e || "HEAD" === u.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, d = y.data, m = y.error, o = !m)) : (m = k, (e || !k) && (k = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || k) + "", o ? h.resolveWith(p, [d, k, x]) : h.rejectWith(p, [x, k, m]), x.statusCode(v), v = void 0, l && f.trigger(o ? "ajaxSuccess" : "ajaxError", [x, u, o ? d : m]), g.fireWith(p, [x, k]), l && (f.trigger("ajaxComplete", [x, u]), --ot.active || ot.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, o, r, s, a, l, c, d, u = ot.ajaxSetup({}, t),
                p = u.context || u,
                f = u.context && (p.nodeType || p.jquery) ? ot(p) : ot.event,
                h = ot.Deferred(),
                g = ot.Callbacks("once memory"),
                v = u.statusCode || {},
                m = {},
                y = {},
                b = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!d)
                                for (d = {}; t = qn.exec(s);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, m[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (u.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) v[t] = [v[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return c && c.abort(t), n(0, t), this
                    }
                };
            if (h.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, u.url = ((e || u.url || Mn) + "").replace(Pn, "").replace(Wn, On[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = ot.trim(u.dataType || "*").toLowerCase().match(bt) || [""], null == u.crossDomain && (i = _n.exec(u.url.toLowerCase()), u.crossDomain = !(!i || i[1] === On[1] && i[2] === On[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (On[3] || ("http:" === On[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = ot.param(u.data, u.traditional)), F(Bn, u, t, x), 2 === b) return x;
            l = ot.event && u.global, l && 0 === ot.active++ && ot.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Fn.test(u.type), r = u.url, u.hasContent || (u.data && (r = u.url += (Ln.test(r) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = zn.test(r) ? r.replace(zn, "$1_=" + jn++) : r + (Ln.test(r) ? "&" : "?") + "_=" + jn++)), u.ifModified && (ot.lastModified[r] && x.setRequestHeader("If-Modified-Since", ot.lastModified[r]), ot.etag[r] && x.setRequestHeader("If-None-Match", ot.etag[r])), (u.data && u.hasContent && u.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", u.contentType), x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Qn + "; q=0.01" : "") : u.accepts["*"]);
            for (o in u.headers) x.setRequestHeader(o, u.headers[o]);
            if (u.beforeSend && (u.beforeSend.call(p, x, u) === !1 || 2 === b)) return x.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[o](u[o]);
            if (c = F(Rn, u, t, x)) {
                x.readyState = 1, l && f.trigger("ajaxSend", [x, u]), u.async && u.timeout > 0 && (a = setTimeout(function() {
                    x.abort("timeout")
                }, u.timeout));
                try {
                    b = 1, c.send(m, n)
                } catch (k) {
                    if (!(2 > b)) throw k;
                    n(-1, k)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, n) {
            return ot.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ot.get(e, void 0, t, "script")
        }
    }), ot.each(["get", "post"], function(e, t) {
        ot[t] = function(e, n, i, o) {
            return ot.isFunction(n) && (o = o || i, i = n, n = void 0), ot.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            })
        }
    }), ot._evalUrl = function(e) {
        return ot.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ot.fn.extend({
        wrapAll: function(e) {
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ot(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(ot.isFunction(e) ? function(t) {
                ot(this).wrapInner(e.call(this, t))
            } : function() {
                var t = ot(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ot.isFunction(e);
            return this.each(function(n) {
                ot(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ot.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ot.css(e, "display"))
    }, ot.expr.filters.visible = function(e) {
        return !ot.expr.filters.hidden(e)
    };
    var Un = /%20/g,
        Yn = /\[\]$/,
        Jn = /\r?\n/g,
        Vn = /^(?:submit|button|image|reset|file)$/i,
        Gn = /^(?:input|select|textarea|keygen)/i;
    ot.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                t = ot.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(e) || e.jquery && !ot.isPlainObject(e)) ot.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) R(n, e[n], t, o);
        return i.join("&").replace(Un, "+")
    }, ot.fn.extend({
        serialize: function() {
            return ot.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ot.prop(this, "elements");
                return e ? ot.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ot(this).is(":disabled") && Gn.test(this.nodeName) && !Vn.test(e) && (this.checked || !Ht.test(e))
            }).map(function(e, t) {
                var n = ot(this).val();
                return null == n ? null : ot.isArray(n) ? ot.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Jn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Jn, "\r\n")
                }
            }).get()
        }
    }), ot.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Q() || X()
    } : Q;
    var Kn = 0,
        Zn = {},
        ei = ot.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Zn) Zn[e](void 0, !0)
    }), nt.cors = !!ei && "withCredentials" in ei, ei = nt.ajax = !!ei, ei && ot.ajaxTransport(function(e) {
        if (!e.crossDomain || nt.cors) {
            var t;
            return {
                send: function(n, i) {
                    var o, r = e.xhr(),
                        s = ++Kn;
                    if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) r[o] = e.xhrFields[o];
                    e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                    r.send(e.hasContent && e.data || null), t = function(n, o) {
                        var a, l, c;
                        if (t && (o || 4 === r.readyState))
                            if (delete Zn[s], t = void 0, r.onreadystatechange = ot.noop, o) 4 !== r.readyState && r.abort();
                            else {
                                c = {}, a = r.status, "string" == typeof r.responseText && (c.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (d) {
                                    l = ""
                                }
                                a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                            }
                        c && i(a, l, c, r.getAllResponseHeaders())
                    }, e.async ? 4 === r.readyState ? setTimeout(t) : r.onreadystatechange = Zn[s] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), ot.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ot.globalEval(e), e
            }
        }
    }), ot.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ot.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = ht.head || ot("head")[0] || ht.documentElement;
            return {
                send: function(i, o) {
                    t = ht.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var ti = [],
        ni = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = ti.pop() || ot.expando + "_" + jn++;
            return this[e] = !0, e
        }
    }), ot.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, r, s, a = t.jsonp !== !1 && (ni.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = ot.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(ni, "$1" + o) : t.jsonp !== !1 && (t.url += (Ln.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return s || ot.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, ti.push(o)), s && ot.isFunction(r) && r(s[0]), s = r = void 0
        }), "script") : void 0
    }), ot.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || ht;
        var i = ut.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = ot.buildFragment([e], t, o), o && o.length && ot(o).remove(), ot.merge([], i.childNodes))
    };
    var ii = ot.fn.load;
    ot.fn.load = function(e, t, n) {
        if ("string" != typeof e && ii) return ii.apply(this, arguments);
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = ot.trim(e.slice(a, e.length)), e = e.slice(0, a)), ot.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && ot.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? ot("<div>").append(ot.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ot.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ot.expr.filters.animated = function(e) {
        return ot.grep(ot.timers, function(t) {
            return e === t.elem
        }).length
    };
    var oi = e.document.documentElement;
    ot.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a, l, c, d = ot.css(e, "position"),
                u = ot(e),
                p = {};
            "static" === d && (e.style.position = "relative"), a = u.offset(), r = ot.css(e, "top"), l = ot.css(e, "left"), c = ("absolute" === d || "fixed" === d) && ot.inArray("auto", [r, l]) > -1, c ? (i = u.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), ot.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : u.css(p)
        }
    }, ot.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                ot.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                r = o && o.ownerDocument;
            return r ? (t = r.documentElement, ot.contains(t, o) ? (typeof o.getBoundingClientRect !== Tt && (i = o.getBoundingClientRect()), n = U(r), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === ot.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ot.nodeName(e[0], "html") || (n = e.offset()), n.top += ot.css(e[0], "borderTopWidth", !0), n.left += ot.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ot.css(i, "marginTop", !0),
                    left: t.left - n.left - ot.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || oi; e && !ot.nodeName(e, "html") && "static" === ot.css(e, "position");) e = e.offsetParent;
                return e || oi
            })
        }
    }), ot.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        ot.fn[e] = function(i) {
            return Nt(this, function(e, i, o) {
                var r = U(e);
                return void 0 === o ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : void(r ? r.scrollTo(n ? ot(r).scrollLeft() : o, n ? o : ot(r).scrollTop()) : e[i] = o)
            }, e, i, arguments.length, null)
        }
    }), ot.each(["top", "left"], function(e, t) {
        ot.cssHooks[t] = S(nt.pixelPosition, function(e, n) {
            return n ? (n = tn(e, t), on.test(n) ? ot(e).position()[t] + "px" : n) : void 0
        })
    }), ot.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ot.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            ot.fn[i] = function(i, o) {
                var r = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || o === !0 ? "margin" : "border");
                return Nt(this, function(t, n, i) {
                    var o;
                    return ot.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? ot.css(t, n, s) : ot.style(t, n, i, s)
                }, t, r ? i : void 0, r, null)
            }
        })
    }), ot.fn.size = function() {
        return this.length
    }, ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ot
    });
    var ri = e.jQuery,
        si = e.$;
    return ot.noConflict = function(t) {
        return e.$ === ot && (e.$ = si), t && e.jQuery === ot && (e.jQuery = ri), ot
    }, typeof t === Tt && (e.jQuery = e.$ = ot), ot
}), ! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
        function t(t, i) {
            var o, r, s, a = this;
            if (a.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(t),
                    appendDots: e(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, t) {
                        return '<button type="button" data-role="none">' + (t + 1) + "</button>"
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0
                }, a.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1
                }, e.extend(a, a.initials), a.activeBreakpoint = null, a.animType = null, a.animProp = null, a.breakpoints = [], a.breakpointSettings = [], a.cssTransitions = !1, a.hidden = "hidden", a.paused = !1, a.positionProp = null, a.respondTo = null, a.rowCount = 1, a.shouldClick = !0, a.$slider = e(t), a.$slidesCache = null, a.transformType = null, a.transitionType = null, a.visibilityChange = "visibilitychange", a.windowWidth = 0, a.windowTimer = null, o = e(t).data("slick") || {}, a.options = e.extend({}, a.defaults, o, i), a.currentSlide = a.options.initialSlide, a.originalSettings = a.options, r = a.options.responsive || null, r && r.length > -1) {
                a.respondTo = a.options.respondTo || "window";
                for (s in r) r.hasOwnProperty(s) && (a.breakpoints.push(r[s].breakpoint), a.breakpointSettings[r[s].breakpoint] = r[s].settings);
                a.breakpoints.sort(function(e, t) {
                    return a.options.mobileFirst === !0 ? e - t : t - e
                })
            }
            "undefined" != typeof document.mozHidden ? (a.hidden = "mozHidden", a.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (a.hidden = "msHidden", a.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (a.hidden = "webkitHidden", a.visibilityChange = "webkitvisibilitychange"), a.autoPlay = e.proxy(a.autoPlay, a), a.autoPlayClear = e.proxy(a.autoPlayClear, a), a.changeSlide = e.proxy(a.changeSlide, a), a.clickHandler = e.proxy(a.clickHandler, a), a.selectHandler = e.proxy(a.selectHandler, a), a.setPosition = e.proxy(a.setPosition, a), a.swipeHandler = e.proxy(a.swipeHandler, a), a.dragHandler = e.proxy(a.dragHandler, a), a.keyHandler = e.proxy(a.keyHandler, a), a.autoPlayIterator = e.proxy(a.autoPlayIterator, a), a.instanceUid = n++, a.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, a.init(), a.checkResponsive(!0)
        }
        var n = 0;
        return t
    }(), t.prototype.addSlide = t.prototype.slickAdd = function(t, n, i) {
        var o = this;
        if ("boolean" == typeof n) i = n, n = null;
        else if (0 > n || n >= o.slideCount) return !1;
        o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : i === !0 ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, t.prototype.animateSlide = function(t, n) {
        var i = {},
            o = this;
        o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (t = -t), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
            left: t
        }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
            top: t
        }, o.options.speed, o.options.easing, n) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), e({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(e) {
                e = Math.ceil(e), o.options.vertical === !1 ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
            },
            complete: function() {
                n && n.call()
            }
        })) : (o.applyTransition(), t = Math.ceil(t), i[o.animType] = o.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function() {
            o.disableTransition(), n.call()
        }, o.options.speed))
    }, t.prototype.asNavFor = function(t) {
        var n = this,
            i = null !== n.options.asNavFor ? e(n.options.asNavFor).slick("getSlick") : null;
        null !== i && i.slideHandler(t, !0)
    }, t.prototype.applyTransition = function(e) {
        var t = this,
            n = {};
        n[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && e.paused !== !0 && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function() {
        var e = this;
        e.options.infinite === !1 ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (0 === e.currentSlide - 1 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
    }, t.prototype.buildArrows = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow = e(t.options.prevArrow), t.$nextArrow = e(t.options.nextArrow), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.appendTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled"))
    }, t.prototype.buildDots = function() {
        var t, n, i = this;
        if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
            for (n = '<ul class="' + i.options.dotsClass + '">', t = 0; t <= i.getDotCount(); t += 1) n += "<li>" + i.options.customPaging.call(this, i, t) + "</li>";
            n += "</ul>", i.$dots = e(n).appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t)
        }), t.$slidesCache = t.$slides, t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.options.accessibility === !0 && t.$list.prop("tabIndex", 0), t.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function() {
        var e, t, n, i, o, r, s, a = this;
        if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; o > e; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var d = e * s + (t * a.options.slidesPerRow + n);
                        r.get(d) && c.appendChild(r.get(d))
                    }
                    l.appendChild(c)
                }
                i.appendChild(l)
            }
            a.$slider.html(i), a.$slider.children().children().children().width(100 / a.options.slidesPerRow + "%").css({
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function(t) {
        var n, i, o, r = this,
            s = r.$slider.width(),
            a = window.innerWidth || e(window).width();
        if ("window" === r.respondTo ? o = a : "slider" === r.respondTo ? o = s : "min" === r.respondTo && (o = Math.min(a, s)), r.originalSettings.responsive && r.originalSettings.responsive.length > -1 && null !== r.originalSettings.responsive) {
            i = null;
            for (n in r.breakpoints) r.breakpoints.hasOwnProperty(n) && (r.originalSettings.mobileFirst === !1 ? o < r.breakpoints[n] && (i = r.breakpoints[n]) : o > r.breakpoints[n] && (i = r.breakpoints[n]));
            null !== i ? null !== r.activeBreakpoint ? i !== r.activeBreakpoint && (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick() : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[i]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh())) : (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick() : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[i]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh())) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh())
        }
    }, t.prototype.changeSlide = function(t, n) {
        var i, o, r, s = this,
            a = e(t.target);
        switch (a.is("a") && t.preventDefault(), r = 0 !== s.slideCount % s.options.slidesToScroll, i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
            case "previous":
                o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
                break;
            case "next":
                o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
                break;
            case "index":
                var l = 0 === t.data.index ? 0 : t.data.index || e(t.target).parent().index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(l), !1, n);
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function(e) {
        var t, n, i = this;
        if (t = i.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1];
        else
            for (var o in t) {
                if (e < t[o]) {
                    e = n;
                    break
                }
                n = t[o]
            }
        return e
    }, t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).off("click.slick", t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).off("mouseenter.slick", t.setPaused.bind(t, !0)).off("mouseleave.slick", t.setPaused.bind(t, !1)), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), t.options.autoplay === !0 && e(document).off(t.visibilityChange, t.visibility), t.$list.off("mouseenter.slick", t.setPaused.bind(t, !0)), t.$list.off("mouseleave.slick", t.setPaused.bind(t, !1)), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.html(e))
    }, t.prototype.clickHandler = function(e) {
        var t = this;
        t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function() {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible").attr("aria-hidden", "true").removeAttr("data-slick-index").css({
            position: "",
            left: "",
            top: "",
            zIndex: "",
            opacity: "",
            width: ""
        }), t.$slider.html(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized")
    }, t.prototype.disableTransition = function(e) {
        var t = this,
            n = {};
        n[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.fadeSlide = function(e, t) {
        var n = this;
        n.cssTransitions === !1 ? (n.$slides.eq(e).css({
            zIndex: 1e3
        }), n.$slides.eq(e).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: 1e3
        }), t && setTimeout(function() {
            n.disableTransition(e), t.call()
        }, n.options.speed))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        var e = this;
        return e.currentSlide
    }, t.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            n = 0,
            i = 0;
        if (e.options.infinite === !0) i = Math.ceil(e.slideCount / e.options.slidesToScroll);
        else if (e.options.centerMode === !0) i = e.slideCount;
        else
            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToShow, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return i - 1
    }, t.prototype.getLeft = function(e) {
        var t, n, i, o = this,
            r = 0;
        return o.slideOffset = 0, n = o.$slides.first().outerHeight(), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = -1 * o.slideWidth * o.options.slidesToShow, r = -1 * n * o.options.slidesToShow), 0 !== o.slideCount % o.options.slidesToScroll && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = -1 * (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth, r = -1 * (o.options.slidesToShow - (e - o.slideCount)) * n) : (o.slideOffset = -1 * o.slideCount % o.options.slidesToScroll * o.slideWidth, r = -1 * o.slideCount % o.options.slidesToScroll * n))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (e + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = o.options.vertical === !1 ? -1 * e * o.slideWidth + o.slideOffset : -1 * e * n + r, o.options.variableWidth === !0 && (i = o.$slideTrack.children(".slick-slide").eq(o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? e : e + o.options.slidesToShow), t = i[0] ? -1 * i[0].offsetLeft : 0, o.options.centerMode === !0 && (i = o.$slideTrack.children(".slick-slide").eq(o.options.infinite === !1 ? e : e + o.options.slidesToShow + 1), t = i[0] ? -1 * i[0].offsetLeft : 0, t += (o.$list.width() - i.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        var t = this;
        return t.options[e]
    }, t.prototype.getNavigableIndexes = function() {
        var e, t = this,
            n = 0,
            i = 0,
            o = [];
        for (t.options.infinite === !1 ? (e = t.slideCount - t.options.slidesToShow + 1, t.options.centerMode === !0 && (e = t.slideCount)) : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > n;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }, t.prototype.getSlick = function() {
        return this
    }, t.prototype.getSlideCount = function() {
        var t, n, i, o = this;
        return i = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(t, r) {
            return r.offsetLeft - i + e(r).outerWidth() / 2 > -1 * o.swipeLeft ? (n = r, !1) : void 0
        }), t = Math.abs(e(n).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        var n = this;
        n.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, t.prototype.init = function() {
        var t = this;
        e(t.$slider).hasClass("slick-initialized") || (e(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots()), t.$slider.trigger("init", [t])
    }, t.prototype.initArrowEvents = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.on("click.slick", {
            message: "next"
        }, e.changeSlide))
    }, t.prototype.initDotEvents = function() {
        var t = this;
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).on("mouseenter.slick", t.setPaused.bind(t, !0)).on("mouseleave.slick", t.setPaused.bind(t, !1))
    }, t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), t.options.autoplay === !0 && e(document).on(t.visibilityChange, t.visibility.bind(t)), t.$list.on("mouseenter.slick", t.setPaused.bind(t, !0)), t.$list.on("mouseleave.slick", t.setPaused.bind(t, !1)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange.bind(t)), e(window).on("resize.slick.slick-" + t.instanceUid, t.resize.bind(t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.initUI = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show(), e.options.autoplay === !0 && e.autoPlay()
    }, t.prototype.keyHandler = function(e) {
        var t = this;
        37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
            data: {
                message: "next"
            }
        })
    }, t.prototype.lazyLoad = function() {
        function t(t) {
            e("img[data-lazy]", t).each(function() {
                var t = e(this),
                    n = e(this).attr("data-lazy"),
                    i = document.createElement("img");
                i.onload = function() {
                    t.animate({
                        opacity: 1
                    }, 200)
                }, i.src = n, t.css({
                    opacity: 0
                }).attr("src", n).removeAttr("data-lazy").removeClass("slick-loading")
            })
        }
        var n, i, o, r, s = this;
        s.options.centerMode === !0 ? s.options.infinite === !0 ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1), r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), r = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, r = o + s.options.slidesToShow, s.options.fade === !0 && (o > 0 && o--, r <= s.slideCount && r++)), n = s.$slider.find(".slick-slide").slice(o, r), t(n), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), t(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), t(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), t(i))
    }, t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "next"
            }
        })
    }, t.prototype.orientationChange = function() {
        var e = this;
        e.checkResponsive(), e.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(), e.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.paused = !1, e.autoPlay()
    }, t.prototype.postSlide = function(e) {
        var t = this;
        t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 && t.autoPlay()
    }, t.prototype.prev = t.prototype.slickPrev = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, t.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function() {
        var t, n, i = this;
        t = e("img[data-lazy]", i.$slider).length, t > 0 && (n = e("img[data-lazy]", i.$slider).first(), n.attr("src", n.attr("data-lazy")).removeClass("slick-loading").load(function() {
            n.removeAttr("data-lazy"), i.progressiveLazyLoad(), i.options.adaptiveHeight === !0 && i.setPosition()
        }).error(function() {
            n.removeAttr("data-lazy"), i.progressiveLazyLoad()
        }))
    }, t.prototype.refresh = function() {
        var t = this,
            n = t.currentSlide;
        t.destroy(), e.extend(t, t.initials), t.init(), t.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }, t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.setPosition()
        }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
        var i = this;
        return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : i.slideCount - 1) : e = t === !0 ? --e : e, i.slideCount < 1 || 0 > e || e > i.slideCount - 1 ? !1 : (i.unload(), n === !0 ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
    }, t.prototype.setCSS = function(e) {
        var t, n, i = this,
            o = {};
        i.options.rtl === !0 && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, i.transformsEnabled === !1 ? i.$slideTrack.css(o) : (o = {}, i.cssTransitions === !1 ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
    }, t.prototype.setDimensions = function() {
        var e = this;
        e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function() {
        var t, n = this;
        n.$slides.each(function(i, o) {
            t = -1 * n.slideWidth * i, e(o).css(n.options.rtl === !0 ? {
                position: "relative",
                right: t,
                top: 0,
                zIndex: 800,
                opacity: 0
            } : {
                position: "relative",
                left: t,
                top: 0,
                zIndex: 800,
                opacity: 0
            })
        }), n.$slides.eq(n.currentSlide).css({
            zIndex: 900,
            opacity: 1
        })
    }, t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function(e, t, n) {
        var i = this;
        i.options[e] = t, n === !0 && (i.unload(), i.reinit())
    }, t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = null !== e.animType && e.animType !== !1
    }, t.prototype.setSlideClasses = function(e) {
        var t, n, i, o, r = this;
        r.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true").removeClass("slick-center"), n = r.$slider.find(".slick-slide"), r.options.centerMode === !0 ? (t = Math.floor(r.options.slidesToShow / 2), r.options.infinite === !0 && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = r.options.infinite === !0 ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
    }, t.prototype.setupInfinite = function() {
        var t, n, i, o = this;
        if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (n = null, o.slideCount > o.options.slidesToShow)) {
            for (i = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; i > t; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                e(this).attr("id", "")
            })
        }
    }, t.prototype.setPaused = function(e) {
        var t = this;
        t.options.autoplay === !0 && t.options.pauseOnHover === !0 && (t.paused = e, t.autoPlayClear())
    }, t.prototype.selectHandler = function(t) {
        var n = this,
            i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            o = parseInt(i.attr("data-slick-index"));
        return o || (o = 0), n.slideCount <= n.options.slidesToShow ? (n.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true"), n.$slides.eq(o).addClass("slick-active").attr("aria-hidden", "false"), n.options.centerMode === !0 && (n.$slider.find(".slick-slide").removeClass("slick-center"), n.$slides.eq(o).addClass("slick-center")), void n.asNavFor(o)) : void n.slideHandler(o)
    }, t.prototype.slideHandler = function(e, t, n) {
        var i, o, r, s, a = null,
            l = this;
        return t = t || !1, l.animating === !0 && l.options.waitForAnimate === !0 || l.options.fade === !0 && l.currentSlide === e || l.slideCount <= l.options.slidesToShow ? void 0 : (t === !1 && l.asNavFor(e), i = e, a = l.getLeft(i), s = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? s : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (0 > e || e > l.getDotCount() * l.options.slidesToScroll) ? void(l.options.fade === !1 && (i = l.currentSlide, n !== !0 ? l.animateSlide(s, function() {
            l.postSlide(i)
        }) : l.postSlide(i))) : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > e || e > l.slideCount - l.options.slidesToScroll) ? void(l.options.fade === !1 && (i = l.currentSlide, n !== !0 ? l.animateSlide(s, function() {
            l.postSlide(i)
        }) : l.postSlide(i))) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer), o = 0 > i ? 0 !== l.slideCount % l.options.slidesToScroll ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + i : i >= l.slideCount ? 0 !== l.slideCount % l.options.slidesToScroll ? 0 : i - l.slideCount : i, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, o]), r = l.currentSlide, l.currentSlide = o, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? (n !== !0 ? l.fadeSlide(o, function() {
            l.postSlide(o)
        }) : l.postSlide(o), void l.animateHeight()) : void(n !== !0 ? l.animateSlide(a, function() {
            l.postSlide(o)
        }) : l.postSlide(o))))
    }, t.prototype.startLoad = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function() {
        var e, t, n, i, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), i = Math.round(180 * n / Math.PI), 0 > i && (i = 360 - Math.abs(i)), 45 >= i && i >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= i && i >= 315 ? o.options.rtl === !1 ? "left" : "right" : i >= 135 && 225 >= i ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? i >= 35 && 135 >= i ? "left" : "right" : "vertical"
    }, t.prototype.swipeEnd = function() {
        var e, t = this;
        if (t.dragging = !1, t.shouldClick = t.touchObject.swipeLength > 10 ? !1 : !0, void 0 === t.touchObject.curX) return !1;
        if (t.touchObject.edgeHit === !0 && t.$slider.trigger("edge", [t, t.swipeDirection()]), t.touchObject.swipeLength >= t.touchObject.minSwipe) switch (t.swipeDirection()) {
            case "left":
                e = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide + t.getSlideCount()) : t.currentSlide + t.getSlideCount(), t.slideHandler(e), t.currentDirection = 0, t.touchObject = {}, t.$slider.trigger("swipe", [t, "left"]);
                break;
            case "right":
                e = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide - t.getSlideCount()) : t.currentSlide - t.getSlideCount(), t.slideHandler(e), t.currentDirection = 1, t.touchObject = {}, t.$slider.trigger("swipe", [t, "right"])
        } else t.touchObject.startX !== t.touchObject.curX && (t.slideHandler(t.currentSlide), t.touchObject = {})
    }, t.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function(e) {
        var t, n, i, o, r, s = this;
        return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !s.dragging || r && 1 !== r.length ? !1 : (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), s.options.verticalSwiping === !0 && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), n = s.swipeDirection(), "vertical" !== n ? (void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && e.preventDefault(), o = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), s.options.verticalSwiping === !0 && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1), i = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, s.options.infinite === !1 && (0 === s.currentSlide && "right" === n || s.currentSlide >= s.getDotCount() && "left" === n) && (i = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), s.swipeLeft = s.options.vertical === !1 ? t + i * o : t + i * (s.$list.height() / s.listWidth) * o, s.options.verticalSwiping === !0 && (s.swipeLeft = t + i * o), s.options.fade === !0 || s.options.touchMove === !1 ? !1 : s.animating === !0 ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft)) : void 0)
    }, t.prototype.swipeStart = function(e) {
        var t, n = this;
        return 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(n.dragging = !0))
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function() {
        var e = this;
        e.destroy()
    }, t.prototype.updateArrows = function() {
        var e, t = this;
        e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.options.infinite !== !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.removeClass("slick-disabled"), t.$nextArrow.removeClass("slick-disabled"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled"), t.$nextArrow.removeClass("slick-disabled")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled"), t.$prevArrow.removeClass("slick-disabled")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled"), t.$prevArrow.removeClass("slick-disabled")))
    }, t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, t.prototype.visibility = function() {
        var e = this;
        document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) : (e.paused = !1, e.autoPlay())
    }, e.fn.slick = function() {
        var e, n = this,
            i = arguments[0],
            o = Array.prototype.slice.call(arguments, 1),
            r = n.length,
            s = 0;
        for (s; r > s; s++)
            if ("object" == typeof i || "undefined" == typeof i ? n[s].slick = new t(n[s], i) : e = n[s].slick[i].apply(n[s].slick, o), "undefined" != typeof e) return e;
        return n
    }
}), ! function(e) {
    e.slidebars = function(t) {
        function n() {
            !c.disableOver || "number" == typeof c.disableOver && c.disableOver >= k ? (x = !0, e("html").addClass("sb-init"), c.hideControlClasses && T.removeClass("sb-hide"), i()) : "number" == typeof c.disableOver && c.disableOver < k && (x = !1, e("html").removeClass("sb-init"), c.hideControlClasses && T.addClass("sb-hide"), v.css("minHeight", ""), (y || w) && s())
        }

        function i() {
            v.css("minHeight", "");
            var t = parseInt(v.css("height"), 10),
                n = parseInt(e("html").css("height"), 10);
            n > t && v.css("minHeight", e("html").css("height")), m && m.hasClass("sb-width-custom") && m.css("width", m.attr("data-sb-width")), b && b.hasClass("sb-width-custom") && b.css("width", b.attr("data-sb-width")), m && (m.hasClass("sb-style-push") || m.hasClass("sb-style-overlay")) && m.css("marginLeft", "-" + m.css("width")), b && (b.hasClass("sb-style-push") || b.hasClass("sb-style-overlay")) && b.css("marginRight", "-" + b.css("width")), c.scrollLock && e("html").addClass("sb-scroll-lock")
        }

        function o(e, t, n) {
            function o() {
                r.removeAttr("style"), i()
            }
            var r;
            if (r = e.hasClass("sb-style-push") ? v.add(e).add(A) : e.hasClass("sb-style-overlay") ? e : v.add(A), "translate" === C) "0px" === t ? o() : r.css("transform", "translate( " + t + " )");
            else if ("side" === C) "0px" === t ? o() : ("-" === t[0] && (t = t.substr(1)), r.css(n, "0px"), setTimeout(function() {
                r.css(n, t)
            }, 1));
            else if ("jQuery" === C) {
                "-" === t[0] && (t = t.substr(1));
                var s = {};
                s[n] = t, r.stop().animate(s, 400)
            }
        }

        function r(t) {
            function n() {
                x && "left" === t && m ? (e("html").addClass("sb-active sb-active-left"), m.addClass("sb-active"), o(m, m.css("width"), "left"), setTimeout(function() {
                    y = !0
                }, 400)) : x && "right" === t && b && (e("html").addClass("sb-active sb-active-right"), b.addClass("sb-active"), o(b, "-" + b.css("width"), "right"), setTimeout(function() {
                    w = !0
                }, 400))
            }
            "left" === t && m && w || "right" === t && b && y ? (s(), setTimeout(n, 400)) : n()
        }

        function s(t, n) {
            (y || w) && (y && (o(m, "0px", "left"), y = !1), w && (o(b, "0px", "right"), w = !1), setTimeout(function() {
                e("html").removeClass("sb-active sb-active-left sb-active-right"), m && m.removeClass("sb-active"), b && b.removeClass("sb-active"), "undefined" != typeof t && (void 0 === typeof n && (n = "_self"), window.open(t, n))
            }, 400))
        }

        function a(e) {
            "left" === e && m && (y ? s() : r("left")), "right" === e && b && (w ? s() : r("right"))
        }

        function l(e, t) {
            e.stopPropagation(), e.preventDefault(), "touchend" === e.type && t.off("click")
        }
        var c = e.extend({
                siteClose: !0,
                scrollLock: !1,
                disableOver: !1,
                hideControlClasses: !1
            }, t),
            d = document.createElement("div").style,
            u = !1,
            p = !1;
        ("" === d.MozTransition || "" === d.WebkitTransition || "" === d.OTransition || "" === d.transition) && (u = !0), ("" === d.MozTransform || "" === d.WebkitTransform || "" === d.OTransform || "" === d.transform) && (p = !0);
        var f = navigator.userAgent,
            h = !1,
            g = !1;
        /Android/.test(f) ? h = f.substr(f.indexOf("Android") + 8, 3) : /(iPhone|iPod|iPad)/.test(f) && (g = f.substr(f.indexOf("OS ") + 3, 3).replace("_", ".")), (h && 3 > h || g && 5 > g) && e("html").addClass("sb-static");
        var v = e("#sb-site, .sb-site-container");
        if (e(".sb-left").length) var m = e(".sb-left"),
            y = !1;
        if (e(".sb-right").length) var b = e(".sb-right"),
            w = !1;
        var x = !1,
            k = e(window).width(),
            T = e(".sb-toggle-left, .sb-toggle-right, .sb-open-left, .sb-open-right, .sb-close"),
            A = e(".sb-slide");
        n(), e(window).resize(function() {
            var t = e(window).width();
            k !== t && (k = t, n(), y && r("left"), w && r("right"))
        });
        var C;
        u && p ? (C = "translate", h && 4.4 > h && (C = "side")) : C = "jQuery", this.slidebars = {
            open: r,
            close: s,
            toggle: a,
            init: function() {
                return x
            },
            active: function(e) {
                return "left" === e && m ? y : "right" === e && b ? w : void 0
            },
            destroy: function(e) {
                "left" === e && m && (y && s(), setTimeout(function() {
                    m.remove(), m = !1
                }, 400)), "right" === e && b && (w && s(), setTimeout(function() {
                    b.remove(), b = !1
                }, 400))
            }
        }, e(".sb-toggle-left").on("touchend click", function(t) {
            l(t, e(this)), a("left")
        }), e(".sb-toggle-right").on("touchend click", function(t) {
            l(t, e(this)), a("right")
        }), e(".sb-open-left").on("touchend click", function(t) {
            l(t, e(this)), r("left")
        }), e(".sb-open-right").on("touchend click", function(t) {
            l(t, e(this)), r("right")
        }), e(".sb-close").on("touchend click", function(t) {
            if (e(this).is("a") || e(this).children().is("a")) {
                if ("click" === t.type) {
                    t.stopPropagation(), t.preventDefault();
                    var n = e(this).is("a") ? e(this) : e(this).find("a"),
                        i = n.attr("href"),
                        o = n.attr("target") ? n.attr("target") : "_self";
                    s(i, o)
                }
            } else l(t, e(this)), s()
        }), v.on("touchend click", function(t) {
            c.siteClose && (y || w) && (l(t, e(this)), s())
        })
    }
}(jQuery), ! function(e) {
    e.fn.onScreen = function(t) {
        var n = {
            container: window,
            direction: "vertical",
            toggleClass: null,
            doIn: null,
            doOut: null,
            tolerance: 0,
            throttle: null,
            lazyAttr: null,
            lazyPlaceholder: "data:image/gif;base64,R0lGODlhEAAFAIAAAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCQAAACwAAAAAEAAFAAACCIyPqcvtD00BACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIQTGCiywKPmjxUNhjtMlWrAgAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFEiyUf6wCEBHvLPemIHdTzCMDegkACH5BAkJAAYALAAAAAAQAAUAgoSChLS2tIyKjLy+vIyOjMTCxP///wAAAAMUWCQ09jAaAiqQmFosdeXRUAkBCCUAIfkECQkACAAsAAAAABAABQCDvLq83N7c3Nrc9Pb0xMLE/P78vL68/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCEwkCnKGbegvQn4RjGMx8F1HxBi5Il4oEiap2DcVYlpZwQAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCDwnCGHEcIMxPn4VAGMQNBx0zQEZHkiYNiap5RaBKG9EQAh+QQJCQAJACwAAAAAEAAFAIOEgoTMysyMjozs6uyUlpSMiozMzsyUkpTs7uz///8AAAAAAAAAAAAAAAAAAAAAAAAEGTBJiYgoBM09DfhAwHEeKI4dGKLTIHzCwEUAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCAQSTmMEGaco8+UBSACwWBqHxKOJYd+q1iaXFoRRMbtEQAh+QQJCQAIACwAAAAAEAAFAIO8urzc3tzc2tz09vTEwsT8/vy8vrz8+vz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAEIhBJWc6wJZAtJh3gcRBAaXiIZV2kiRbgNZbA6VXiUAhGL0QAIfkECQkABgAsAAAAABAABQCChIKEtLa0jIqMvL68jI6MxMLE////AAAAAxRoumxFgoxGCbiANos145e3DJcQJAAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFFi6XCQwtCmAHbPVm9kGWKcEQxkkACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIRlI8SAZsPYnuJMUCRnNksWwAAOw==",
            debug: !1
        };
        return "remove" !== t && e.extend(n, t), this.each(function() {
            function i() {
                e(k).off("scroll.onScreen resize.onScreen"), e(window).off("resize.onScreen")
            }

            function o() {
                return C ? w < v - n.tolerance && u < w + y - n.tolerance : w < h - n.tolerance && w > -y + n.tolerance
            }

            function r() {
                return C ? w + (y - n.tolerance) < u || w > v - n.tolerance : w > h - n.tolerance || -y + n.tolerance > w
            }

            function s() {
                return C ? x < m - n.tolerance && p < x + b - n.tolerance : x < g - n.tolerance && x > -b + n.tolerance
            }

            function a() {
                return C ? x + (b - n.tolerance) < p || x > m - n.tolerance : x > g - n.tolerance || -b + n.tolerance > x
            }

            function l() {
                return T ? !1 : "horizontal" === n.direction ? s() : o()
            }

            function c() {
                return T ? "horizontal" === n.direction ? a() : r() : !1
            }

            function d(e, t, n) {
                var i, o, r;
                return function() {
                    o = arguments, r = !0, n = n || this, i || ! function() {
                        r ? (e.apply(n, o), r = !1, i = setTimeout(arguments.callee, t)) : i = null
                    }()
                }
            }
            var u, p, f, h, g, v, m, y, b, w, x, k = this,
                T = !1,
                A = e(this),
                C = e.isWindow(n.container);
            if ("remove" === t) return void i();
            var S = function() {
                if (C || "static" !== e(n.container).css("position") || e(n.container).css("position", "relative"), f = e(n.container), h = f.height(), g = f.width(), v = f.scrollTop() + h, m = f.scrollLeft() + g, y = A.outerHeight(!0), b = A.outerWidth(!0), C) {
                    var t = A.offset();
                    w = t.top, x = t.left
                } else {
                    var i = A.position();
                    w = i.top, x = i.left
                }
                if (u = f.scrollTop(), p = f.scrollLeft(), n.debug, l()) {
                    if (n.toggleClass && A.addClass(n.toggleClass), e.isFunction(n.doIn) && n.doIn.call(A[0]), n.lazyAttr && "IMG" === A.prop("tagName")) {
                        var o = A.attr(n.lazyAttr);
                        o !== A.prop("src") && (A.css({
                            background: "url(" + n.lazyPlaceholder + ") 50% 50% no-repeat",
                            minHeight: "5px",
                            minWidth: "16px"
                        }), A.prop("src", o).load(function() {
                            e(this).css({
                                background: "none"
                            })
                        }))
                    }
                    T = !0
                } else c() && (n.toggleClass && A.removeClass(n.toggleClass), e.isFunction(n.doOut) && n.doOut.call(A[0]), T = !1)
            };
            window.location.hash ? d(S, 50) : S(), n.throttle && (S = d(S, n.throttle)), e(n.container).on("scroll.onScreen resize.onScreen", S), C || e(window).on("resize.onScreen", S), "object" == typeof module && module && "object" == typeof module.exports ? module.exports = jQuery : "function" == typeof define && define.amd && define("jquery-onscreen", [], function() {
                return jQuery
            })
        })
    }
}(jQuery),
function(e) {
    var t = function(t, n) {
            t.data("flipped", !0);
            var o = "rotate" + t.data("axis");
            t.find(t.data("front")).css({
                transform: o + (t.data("reverse") ? "(-180deg)" : "(180deg)"),
                "z-index": "0"
            }), t.find(t.data("back")).css({
                transform: o + "(0deg)",
                "z-index": "1"
            }), t.one(i(), function() {
                e(this).trigger("flip:done"), void 0 !== n && n.call(this)
            })
        },
        n = function(t, n) {
            t.data("flipped", !1);
            var o = "rotate" + t.data("axis");
            t.find(t.data("front")).css({
                transform: o + "(0deg)",
                "z-index": "1"
            }), t.find(t.data("back")).css({
                transform: o + (t.data("reverse") ? "(180deg)" : "(-180deg)"),
                "z-index": "0"
            }), t.one(i(), function() {
                e(this).trigger("flip:done"), void 0 !== n && n.call(this)
            })
        },
        i = function() {
            var e, t = document.createElement("fakeelement"),
                n = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd"
                };
            for (e in n)
                if (void 0 !== t.style[e]) return n[e]
        };
    e.fn.flip = function(i, r) {
        return "function" == typeof i && (r = i), this.each(function() {
            var s = e(this);
            if (void 0 === i || "boolean" != typeof i && "string" != typeof i)
                if (s.data("initiated")) !i || void 0 === i.axis && void 0 === i.reverse || o.call(this, i, function() {
                    s.trigger("flip:change"), void 0 !== r && r.call(this)
                });
                else {
                    s.data("initiated", !0);
                    var a = e.extend({
                        axis: "y",
                        reverse: !1,
                        trigger: "click",
                        speed: 500,
                        forceHeight: !1,
                        forceWidth: !1,
                        autoSize: !0,
                        front: "auto",
                        back: "auto"
                    }, i);
                    "auto" == a.front ? a.front = s.find(".front").length > 0 ? ".front" : "div:first-child" : "autostrict" == a.front && (a.front = "div:first-child"), "auto" == a.back ? a.back = s.find(".back").length > 0 ? ".back" : "div:first-child + div" : "autostrict" == a.back && (a.back = "div:first-child + div"), s.data("reverse", a.reverse), s.data("axis", a.axis), s.data("front", a.front), s.data("back", a.back);
                    var l = "rotate" + ("x" == a.axis.toLowerCase() ? "x" : "y"),
                        c = 2 * s["outer" + ("rotatex" == l ? "Height" : "Width")]();
                    s.find(s.data("back")).css({
                        transform: l + "(" + (a.reverse ? "180deg" : "-180deg") + ")"
                    }), s.css({
                        perspective: c,
                        position: "relative"
                    });
                    var d = a.speed / 1e3 || .5,
                        u = s.find(a.front).add(a.back, s);
                    if (a.forceHeight ? u.outerHeight(s.height()) : a.autoSize && u.css({
                            height: "100%"
                        }), a.forceWidth ? u.outerWidth(s.width()) : a.autoSize && u.css({
                            width: "100%"
                        }), u.css({
                            "backface-visibility": "hidden",
                            "transform-style": "preserve-3d",
                            position: "absolute",
                            "z-index": "1"
                        }), u.find("*").css({
                            "backface-visibility": "hidden"
                        }), s.find(s.data("back")).css({
                            transform: l + "(" + (a.reverse ? "180deg" : "-180deg") + ")",
                            "z-index": "0"
                        }), (window.chrome || window.Intl && Intl.v8BreakIterator) && "CSS" in window && s.css({
                            "-webkit-transform-style": "preserve-3d"
                        }), setTimeout(function() {
                            u.css({
                                transition: "all " + d + "s ease-out"
                            }), void 0 !== r && r.call(this)
                        }, 20), "click" == a.trigger.toLowerCase()) s.on(e.fn.tap ? "tap" : "click", function(i) {
                        i || (i = window.event), s.find(e(i.target).closest('button, a, input[type="submit"]')).length || (s.data("flipped") ? n(s) : t(s))
                    });
                    else if ("hover" == a.trigger.toLowerCase()) {
                        var p = function() {
                                s.unbind("mouseleave", f), t(s), setTimeout(function() {
                                    s.bind("mouseleave", f), s.is(":hover") || n(s)
                                }, a.speed + 150)
                            },
                            f = function() {
                                n(s)
                            };
                        s.mouseenter(p), s.mouseleave(f)
                    }
                } else "toggle" == i && (i = !s.data("flipped")), i ? t(s, r) : n(s, r)
        }), this
    };
    var o = function(t, n) {
        var i = !1;
        if (void 0 !== t.axis && e(this).data("axis") != t.axis.toLowerCase() && (e(this).data("axis", t.axis.toLowerCase()), i = !0), void 0 !== t.reverse && e(this).data("reverse") != t.reverse && (e(this).data("reverse", t.reverse), i = !0), i) {
            var o = e(this).find(e(this).data("front")).add(e(this).data("back"), e(this)),
                r = o.css("transition");
            o.css({
                transition: "none"
            });
            var s = "rotate" + e(this).data("axis");
            e(this).data("flipped") ? e(this).find(e(this).data("front")).css({
                transform: s + (e(this).data("reverse") ? "(-180deg)" : "(180deg)"),
                "z-index": "0"
            }) : e(this).find(e(this).data("back")).css({
                transform: s + "(" + (e(this).data("reverse") ? "180deg" : "-180deg") + ")",
                "z-index": "0"
            }), setTimeout(function() {
                o.css({
                    transition: r
                }), n.call(this)
            }.bind(this), 0)
        } else setTimeout(n.bind(this), 0)
    }
}(jQuery), ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    var t, n = navigator.userAgent,
        i = /iphone/i.test(n),
        o = /chrome/i.test(n),
        r = /android/i.test(n);
    e.mask = {
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, e.fn.extend({
        caret: function(e, t) {
            var n;
            return 0 === this.length || this.is(":hidden") ? void 0 : "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && (n = this.createTextRange(), n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select())
            })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), {
                begin: e,
                end: t
            })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(n, s) {
            var a, l, c, d, u, p, f, h;
            if (!n && this.length > 0) {
                a = e(this[0]);
                var g = a.data(e.mask.dataName);
                return g ? g() : void 0
            }
            return s = e.extend({
                autoclear: e.mask.autoclear,
                placeholder: e.mask.placeholder,
                completed: null
            }, s), l = e.mask.definitions, c = [], d = f = n.length, u = null, e.each(n.split(""), function(e, t) {
                "?" == t ? (f--, d = e) : l[t] ? (c.push(new RegExp(l[t])), null === u && (u = c.length - 1), d > e && (p = c.length - 1)) : c.push(null)
            }), this.trigger("unmask").each(function() {
                function a() {
                    if (s.completed) {
                        for (var e = u; p >= e; e++)
                            if (c[e] && $[e] === g(e)) return;
                        s.completed.call(E)
                    }
                }

                function g(e) {
                    return s.placeholder.charAt(e < s.placeholder.length ? e : 0)
                }

                function v(e) {
                    for (; ++e < f && !c[e];);
                    return e
                }

                function m(e) {
                    for (; --e >= 0 && !c[e];);
                    return e
                }

                function y(e, t) {
                    var n, i;
                    if (!(0 > e)) {
                        for (n = e, i = v(t); f > n; n++)
                            if (c[n]) {
                                if (!(f > i && c[n].test($[i]))) break;
                                $[n] = $[i], $[i] = g(i), i = v(i)
                            }
                        C(), E.caret(Math.max(u, e))
                    }
                }

                function b(e) {
                    var t, n, i, o;
                    for (t = e, n = g(e); f > t; t++)
                        if (c[t]) {
                            if (i = v(t), o = $[t], $[t] = n, !(f > i && c[i].test(o))) break;
                            n = o
                        }
                }

                function w() {
                    var e = E.val(),
                        t = E.caret();
                    if (e.length < h.length) {
                        for (S(!0); t.begin > 0 && !c[t.begin - 1];) t.begin--;
                        if (0 === t.begin)
                            for (; t.begin < u && !c[t.begin];) t.begin++;
                        E.caret(t.begin, t.begin)
                    } else {
                        for (S(!0); t.begin < f && !c[t.begin];) t.begin++;
                        E.caret(t.begin, t.begin)
                    }
                    a()
                }

                function x() {
                    S(), E.val() != H && E.change()
                }

                function k(e) {
                    if (!E.prop("readonly")) {
                        var t, n, o, r = e.which || e.keyCode;
                        h = E.val(), 8 === r || 46 === r || i && 127 === r ? (t = E.caret(), n = t.begin, o = t.end, o - n === 0 && (n = 46 !== r ? m(n) : o = v(n - 1), o = 46 === r ? v(o) : o), A(n, o), y(n, o - 1), e.preventDefault()) : 13 === r ? x.call(this, e) : 27 === r && (E.val(H), E.caret(0, S()), e.preventDefault())
                    }
                }

                function T(t) {
                    if (!E.prop("readonly")) {
                        var n, i, o, s = t.which || t.keyCode,
                            l = E.caret();
                        if (!(t.ctrlKey || t.altKey || t.metaKey || 32 > s) && s && 13 !== s) {
                            if (l.end - l.begin !== 0 && (A(l.begin, l.end), y(l.begin, l.end - 1)), n = v(l.begin - 1), f > n && (i = String.fromCharCode(s), c[n].test(i))) {
                                if (b(n), $[n] = i, C(), o = v(n), r) {
                                    var d = function() {
                                        e.proxy(e.fn.caret, E, o)()
                                    };
                                    setTimeout(d, 0)
                                } else E.caret(o);
                                l.begin <= p && a()
                            }
                            t.preventDefault()
                        }
                    }
                }

                function A(e, t) {
                    var n;
                    for (n = e; t > n && f > n; n++) c[n] && ($[n] = g(n))
                }

                function C() {
                    E.val($.join(""))
                }

                function S(e) {
                    var t, n, i, o = E.val(),
                        r = -1;
                    for (t = 0, i = 0; f > t; t++)
                        if (c[t]) {
                            for ($[t] = g(t); i++ < o.length;)
                                if (n = o.charAt(i - 1), c[t].test(n)) {
                                    $[t] = n, r = t;
                                    break
                                }
                            if (i > o.length) {
                                A(t + 1, f);
                                break
                            }
                        } else $[t] === o.charAt(i) && i++, d > t && (r = t);
                    return e ? C() : d > r + 1 ? s.autoclear || $.join("") === N ? (E.val() && E.val(""), A(0, f)) : C() : (C(), E.val(E.val().substring(0, r + 1))), d ? t : u
                }
                var E = e(this),
                    $ = e.map(n.split(""), function(e, t) {
                        return "?" != e ? l[e] ? g(t) : e : void 0
                    }),
                    N = $.join(""),
                    H = E.val();
                E.data(e.mask.dataName, function() {
                    return e.map($, function(e, t) {
                        return c[t] && e != g(t) ? e : null
                    }).join("")
                }), E.one("unmask", function() {
                    E.off(".mask").removeData(e.mask.dataName)
                }).on("focus.mask", function() {
                    if (!E.prop("readonly")) {
                        clearTimeout(t);
                        var e;
                        H = E.val(), e = S(), t = setTimeout(function() {
                            C(), e == n.replace("?", "").length ? E.caret(0, e) : E.caret(e)
                        }, 10)
                    }
                }).on("blur.mask", x).on("keydown.mask", k).on("keypress.mask", T).on("input.mask paste.mask", function() {
                    E.prop("readonly") || setTimeout(function() {
                        var e = S(!0);
                        E.caret(e), a()
                    }, 0)
                }), o && r && E.off("input.mask").on("input.mask", w), S()
            })
        }
    })
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, function(e) {
    function t(e) {
        if (e in u.style) return e;
        for (var t = ["Moz", "Webkit", "O", "ms"], n = e.charAt(0).toUpperCase() + e.substr(1), i = 0; i < t.length; ++i) {
            var o = t[i] + n;
            if (o in u.style) return o
        }
    }

    function n() {
        return u.style[p.transform] = "", u.style[p.transform] = "rotateY(90deg)", "" !== u.style[p.transform]
    }

    function i(e) {
        return "string" == typeof e && this.parse(e), this
    }

    function o(e, t, n) {
        t === !0 ? e.queue(n) : t ? e.queue(t, n) : e.each(function() {
            n.call(this)
        })
    }

    function r(t) {
        var n = [];
        return e.each(t, function(t) {
            t = e.camelCase(t), t = e.transit.propertyMap[t] || e.cssProps[t] || t, t = l(t), p[t] && (t = l(p[t])), -1 === e.inArray(t, n) && n.push(t)
        }), n
    }

    function s(t, n, i, o) {
        var s = r(t);
        e.cssEase[i] && (i = e.cssEase[i]);
        var a = "" + d(n) + " " + i;
        parseInt(o, 10) > 0 && (a += " " + d(o));
        var l = [];
        return e.each(s, function(e, t) {
            l.push(t + " " + a)
        }), l.join(", ")
    }

    function a(t, n) {
        n || (e.cssNumber[t] = !0), e.transit.propertyMap[t] = p.transform, e.cssHooks[t] = {
            get: function(n) {
                var i = e(n).css("transit:transform");
                return i.get(t)
            },
            set: function(n, i) {
                var o = e(n).css("transit:transform");
                o.setFromString(t, i), e(n).css({
                    "transit:transform": o
                })
            }
        }
    }

    function l(e) {
        return e.replace(/([A-Z])/g, function(e) {
            return "-" + e.toLowerCase()
        })
    }

    function c(e, t) {
        return "string" != typeof e || e.match(/^[\-0-9\.]+$/) ? "" + e + t : e
    }

    function d(t) {
        var n = t;
        return "string" != typeof n || n.match(/^[\-0-9\.]+/) || (n = e.fx.speeds[n] || e.fx.speeds._default), c(n, "ms")
    }
    e.transit = {
        version: "0.9.12",
        propertyMap: {
            marginLeft: "margin",
            marginRight: "margin",
            marginBottom: "margin",
            marginTop: "margin",
            paddingLeft: "padding",
            paddingRight: "padding",
            paddingBottom: "padding",
            paddingTop: "padding"
        },
        enabled: !0,
        useTransitionEnd: !1
    };
    var u = document.createElement("div"),
        p = {},
        f = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
    p.transition = t("transition"), p.transitionDelay = t("transitionDelay"), p.transform = t("transform"), p.transformOrigin = t("transformOrigin"), p.filter = t("Filter"), p.transform3d = n();
    var h = {
            transition: "transitionend",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            WebkitTransition: "webkitTransitionEnd",
            msTransition: "MSTransitionEnd"
        },
        g = p.transitionEnd = h[p.transition] || null;
    for (var v in p) p.hasOwnProperty(v) && "undefined" == typeof e.support[v] && (e.support[v] = p[v]);
    return u = null, e.cssEase = {
        _default: "ease",
        "in": "ease-in",
        out: "ease-out",
        "in-out": "ease-in-out",
        snap: "cubic-bezier(0,1,.5,1)",
        easeInCubic: "cubic-bezier(.550,.055,.675,.190)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    }, e.cssHooks["transit:transform"] = {
        get: function(t) {
            return e(t).data("transform") || new i
        },
        set: function(t, n) {
            var o = n;
            o instanceof i || (o = new i(o)), t.style[p.transform] = "WebkitTransform" !== p.transform || f ? o.toString() : o.toString(!0), e(t).data("transform", o)
        }
    }, e.cssHooks.transform = {
        set: e.cssHooks["transit:transform"].set
    }, e.cssHooks.filter = {
        get: function(e) {
            return e.style[p.filter]
        },
        set: function(e, t) {
            e.style[p.filter] = t
        }
    }, e.fn.jquery < "1.8" && (e.cssHooks.transformOrigin = {
        get: function(e) {
            return e.style[p.transformOrigin]
        },
        set: function(e, t) {
            e.style[p.transformOrigin] = t
        }
    }, e.cssHooks.transition = {
        get: function(e) {
            return e.style[p.transition]
        },
        set: function(e, t) {
            e.style[p.transition] = t
        }
    }), a("scale"), a("scaleX"), a("scaleY"), a("translate"), a("rotate"), a("rotateX"), a("rotateY"), a("rotate3d"), a("perspective"), a("skewX"), a("skewY"), a("x", !0), a("y", !0), i.prototype = {
        setFromString: function(e, t) {
            var n = "string" == typeof t ? t.split(",") : t.constructor === Array ? t : [t];
            n.unshift(e), i.prototype.set.apply(this, n)
        },
        set: function(e) {
            var t = Array.prototype.slice.apply(arguments, [1]);
            this.setter[e] ? this.setter[e].apply(this, t) : this[e] = t.join(",")
        },
        get: function(e) {
            return this.getter[e] ? this.getter[e].apply(this) : this[e] || 0
        },
        setter: {
            rotate: function(e) {
                this.rotate = c(e, "deg")
            },
            rotateX: function(e) {
                this.rotateX = c(e, "deg")
            },
            rotateY: function(e) {
                this.rotateY = c(e, "deg")
            },
            scale: function(e, t) {
                void 0 === t && (t = e), this.scale = e + "," + t
            },
            skewX: function(e) {
                this.skewX = c(e, "deg")
            },
            skewY: function(e) {
                this.skewY = c(e, "deg")
            },
            perspective: function(e) {
                this.perspective = c(e, "px")
            },
            x: function(e) {
                this.set("translate", e, null)
            },
            y: function(e) {
                this.set("translate", null, e)
            },
            translate: function(e, t) {
                void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), null !== e && void 0 !== e && (this._translateX = c(e, "px")), null !== t && void 0 !== t && (this._translateY = c(t, "px")), this.translate = this._translateX + "," + this._translateY
            }
        },
        getter: {
            x: function() {
                return this._translateX || 0
            },
            y: function() {
                return this._translateY || 0
            },
            scale: function() {
                var e = (this.scale || "1,1").split(",");
                return e[0] && (e[0] = parseFloat(e[0])), e[1] && (e[1] = parseFloat(e[1])), e[0] === e[1] ? e[0] : e
            },
            rotate3d: function() {
                for (var e = (this.rotate3d || "0,0,0,0deg").split(","), t = 0; 3 >= t; ++t) e[t] && (e[t] = parseFloat(e[t]));
                return e[3] && (e[3] = c(e[3], "deg")), e
            }
        },
        parse: function(e) {
            var t = this;
            e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(e, n, i) {
                t.setFromString(n, i)
            })
        },
        toString: function(e) {
            var t = [];
            for (var n in this)
                if (this.hasOwnProperty(n)) {
                    if (!p.transform3d && ("rotateX" === n || "rotateY" === n || "perspective" === n || "transformOrigin" === n)) continue;
                    "_" !== n[0] && t.push(e && "scale" === n ? n + "3d(" + this[n] + ",1)" : e && "translate" === n ? n + "3d(" + this[n] + ",0)" : n + "(" + this[n] + ")")
                }
            return t.join(" ")
        }
    }, e.fn.transition = e.fn.transit = function(t, n, i, r) {
        var a = this,
            l = 0,
            c = !0,
            u = e.extend(!0, {}, t);
        "function" == typeof n && (r = n, n = void 0), "object" == typeof n && (i = n.easing, l = n.delay || 0, c = "undefined" == typeof n.queue ? !0 : n.queue, r = n.complete, n = n.duration), "function" == typeof i && (r = i, i = void 0), "undefined" != typeof u.easing && (i = u.easing, delete u.easing), "undefined" != typeof u.duration && (n = u.duration, delete u.duration), "undefined" != typeof u.complete && (r = u.complete, delete u.complete), "undefined" != typeof u.queue && (c = u.queue, delete u.queue), "undefined" != typeof u.delay && (l = u.delay, delete u.delay), "undefined" == typeof n && (n = e.fx.speeds._default), "undefined" == typeof i && (i = e.cssEase._default), n = d(n);
        var f = s(u, n, i, l),
            h = e.transit.enabled && p.transition,
            v = h ? parseInt(n, 10) + parseInt(l, 10) : 0;
        if (0 === v) {
            var m = function(e) {
                a.css(u), r && r.apply(a), e && e()
            };
            return o(a, c, m), a
        }
        var y = {},
            b = function(t) {
                var n = !1,
                    i = function() {
                        n && a.unbind(g, i), v > 0 && a.each(function() {
                            this.style[p.transition] = y[this] || null
                        }), "function" == typeof r && r.apply(a), "function" == typeof t && t()
                    };
                v > 0 && g && e.transit.useTransitionEnd ? (n = !0, a.bind(g, i)) : window.setTimeout(i, v), a.each(function() {
                    v > 0 && (this.style[p.transition] = f), e(this).css(u)
                })
            },
            w = function(e) {
                this.offsetWidth, b(e)
            };
        return o(a, c, w), this
    }, e.transit.getTransitionValue = s, e
});
var Dash = {};
! function(e, t, n, i) {
    function o(e, t) {
        if (e) {
            var o = i(e).offset().top,
                s = i(n).scrollTop();
            o > 0 && ("value " + (o - r)), s > o - r ? i(".nav-content-container").hasClass("background-animated-in") || i(".nav-content-container").removeClass("background-animated-out").addClass("background-animated-in") : i(".nav-content-container").hasClass("background-animated-in") && i(".nav-content-container").removeClass("background-animated-in").addClass("background-animated-out"), t && t(s, r)
        }
    }
    var r = i(".nav-bar").height(),
        s = i("#dialog_background"),
        a = i("#dialog_container");
    e.initAll = function(n, s, a, l) {
        i(t).bind("load", function() {
            r = i(".nav-bar").height(), e.initDialog(), e.initSections(n), e.initFooter(), e.initNavScrollListener(s, a), o(a), e.initNavMenu(), i("body").addClass("animated fadeIn")
        }), i(t).bind("resize", function() {
            e.initSections(n), e.initFooter(), e.initNavScrollListener(s, a), e.initDialog(), o(a), l && l()
        }), i(t).bind("orientationchange", function() {
            e.initSections(n), e.initFooter(), e.initDialog(), e.initNavScrollListener(s, a), o(a)
        })
    }, e.initDialog = function() {
        s = i("#dialog_background"), a = i("#dialog_container");
        var e = i(t).height() / 2,
            n = i(t).width() / 2;
        i(".dialog-container").css({
            top: e,
            left: n
        })
    }, e.dialogAllowed = function() {
        return a.width() > 0
    }, e.showDialog = function(t, n) {
        e.dialogAllowed() && (a.html("").html(t).show(), s.show(), s.off("click").on("click", function() {
            s.hide(), a.hide(), s.off("click"), n && n()
        }))
    }, e.initFooter = function() {
        var e = i("#footer");
        if (!(e.length < 0) && e.is(":visible")) {
            var n = (i(".content").outerHeight(), i(t).height()),
                o = i(".avoid-nav-bar"),
                r = 0,
                s = 0;
            s = e.outerHeight(), o.length > 0 && (r = i(".nav-bar").outerHeight());
            var a = s + r,
                l = Math.abs(n - a);
            i(".content").css("min-height", l)
        }
    }, e.initNavMenu = function() {
        new i.slidebars
    }, e.initSections = function(e) {
        var n = i(t).height(),
            o = i(t).width(),
            r = i(".avoid-nav-bar"),
            s = 0;
        r.length > 0 && (s = i(".nav-bar").outerHeight()), n -= s, i(".section").height(n).width(o), i(".section").find(".section-sub").each(function() {
            var e = i(this).parent().outerHeight(),
                t = e;
            console.log("parent height " + e), i(this).parent().children().each(function() {
                i(this).is("[data-dash-remaining-space]") ? console.log("ignored height " + i(this).outerHeight()) : (console.log(i(this) + "subtracted height " + i(this).outerHeight()), t -= i(this).outerHeight())
            }), i(this).height(t)
        }), e && e(), i(".section-text-fade-container").onScreen({
            container: t,
            direction: "vertical",
            doIn: function() {
                i(this).addClass("animated fadeInUp")
            },
            doOut: function() {},
            tolerance: 200,
            throttle: 50
        })
    }, e.initNavScrollListener = function(e, t) {
        i(n).off("scroll").on("scroll", function() {
            o(t, e)
        })
    }, e.ui = {
        remainingSpace: function() {
            var e = (i(".content").outerHeight(), i(t).height()),
                n = i("#footer"),
                o = i(".avoid-nav-bar"),
                r = 0,
                s = 0;
            n.length > 0 && (s = n.outerHeight()), o.length > 0 && (r = i(".nav-bar").outerHeight()); {
                var a = s + r;
                Math.abs(e - a)
            }
            i(".content").children().each(function() {
                i(this).is("[data-dash-remaining-space]") ? console.log("ignored height " + i(this).outerHeight()) : (console.log(i(this) + "subtracted height " + i(this).outerHeight()), maxHeight -= i(this).outerHeight())
            }), i(this).height(maxHeight)
        }
    }, e.api = {
        domain: "/api/",
        postRequest: function(t, n, o, r) {
            return i.ajax({
                url: e.api.domain + t,
                method: "POST",
                data: i(n).serialize(),
                success: function(e) {
                    o && o(e)
                },
                error: function(e) {
                    r && r(e)
                }
            })
        },
        getRequest: function(t, n, o) {
            return i.ajax({
                url: e.api.domain + t,
                success: function(e) {
                    n && n(e)
                },
                error: function() {
                    o && o()
                }
            })
        }
    }, e.elementVisible = function(e) {
        var n = i(t).scrollTop(),
            o = n + i(t).height(),
            r = i(e).offset().top,
            s = r + i(e).height();
        return o >= s && r >= n
    }, e.list = {
        initFooter: function(e, t) {
            e.onScreen({
                doIn: function() {
                    t && t()
                },
                tolerance: -100
            })
        },
        initContents: function(e, t, n) {
            if (!n)
                if (t) {
                    var o = i(e).attr("data-dash-anim-delay");
                    i(e).addClass("moveUp").css({
                        "-webkit-animation-delay": o + "ms",
                        "animation-delay": o + "ms"
                    })
                } else e.onScreen({
                    doIn: function() {
                        var e = i(this).attr("data-dash-anim-delay");
                        i(this).hasClass("prevent-move") || i(this).addClass("moveUp").css({
                            "-webkit-animation-delay": e + "ms",
                            "animation-delay": e + "ms"
                        })
                    },
                    tolerance: -300
                })
        }
    }
}(Dash, window, document, jQuery);