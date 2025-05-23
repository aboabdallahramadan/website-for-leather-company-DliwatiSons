(function (c) {
    c.fn.hoverIntent = function (e, t, n) {
        function r(e2) {
            o = e2.pageX, i = e2.pageY;
        }
        var o, i, a, u, s = {
            interval: 100,
            sensitivity: 6,
            timeout: 50
        },
            s = typeof e == "object" ? c.extend(s, e) : c.isFunction(t) ? c.extend(s, {
                over: e,
                out: t,
                selector: n
            }) : c.extend(s, {
                over: e,
                out: e,
                selector: t
            }),
            l = function (e2, t2) {
                if (t2.hoverIntent_t = clearTimeout(t2.hoverIntent_t), Math.sqrt((a - o) * (a - o) + (u - i) * (u - i)) < s.sensitivity) return c(t2).off("mousemove.hoverIntent", r), t2.hoverIntent_s = !0, s.over.apply(t2, [e2]);
                a = o, u = i, t2.hoverIntent_t = setTimeout(function () {
                    l(e2, t2);
                }, s.interval);
            },
            t = function (e2) {
                var n2 = c.extend({}, e2),
                    o2 = this;
                o2.hoverIntent_t && (o2.hoverIntent_t = clearTimeout(o2.hoverIntent_t)), e2.type === "mouseenter" ? (a = n2.pageX, u = n2.pageY, c(o2).on("mousemove.hoverIntent", r), o2.hoverIntent_s || (o2.hoverIntent_t = setTimeout(function () {
                    l(n2, o2);
                }, s.interval))) : (c(o2).off("mousemove.hoverIntent", r), o2.hoverIntent_s && (o2.hoverIntent_t = setTimeout(function () {
                    var e3, t2;
                    e3 = n2, (t2 = o2).hoverIntent_t = clearTimeout(t2.hoverIntent_t), t2.hoverIntent_s = !1, s.out.apply(t2, [e3]);
                }, s.timeout)));
            };
        return this.on({
            "mouseenter.hoverIntent": t,
            "mouseleave.hoverIntent": t
        }, s.selector);
    };
})(jQuery), Shopify.Image = {
    preload: function (e, t) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            this.loadImage(this.getSizedImageUrl(o, t));
        }
    },
    loadImage: function (e) {
        new Image().src = e;
    },
    switchImage: function (e, t, n) {
        var o;
        e && t && (o = this.imageSize(t.src), o = this.getSizedImageUrl(e.src, o), n ? n(o, e, t) : t.src = o);
    },
    imageSize: function (e) {
        return e = e.match(/_(1024x1024|2048x2048|pico|icon|thumb|small|compact|medium|large|grande)\./), e != null ? e[1] : null;
    },
    getSizedImageUrl: function (e, t) {
        if (t == null) return e;
        if (t == "master") return this.removeProtocol(e);
        var n = e.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
        return n == null ? null : (e = e.split(n[0]), n = n[0], this.removeProtocol(e[0] + "_" + t + n));
    },
    removeProtocol: function (e) {
        return e.replace(/http(s)?:/, "");
    }
},
    function (e, t) {
        typeof exports == "object" && typeof module != "undefined" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : ((e = e || self).Vimeo = e.Vimeo || {}, e.Vimeo.Player = t());
    }(this, function () {
        "use strict";

        function e(e2, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
                var o2 = t2[n2];
                o2.enumerable = o2.enumerable || !1, o2.configurable = !0, "value" in o2 && (o2.writable = !0), Object.defineProperty(e2, o2.key, o2);
            }
        }
        var t = typeof global != "undefined" && {}.toString.call(global) === "[object global]";

        function i(e2, t2) {
            return e2.indexOf(t2.toLowerCase()) === 0 ? e2 : "".concat(t2.toLowerCase()).concat(e2.substr(0, 1).toUpperCase()).concat(e2.substr(1));
        }

        function l(e2) {
            return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e2);
        }

        function c(e2) {
            var t2 = 0 < arguments.length && e2 !== void 0 ? e2 : {},
                n2 = t2.id,
                e2 = t2.url,
                t2 = n2 || e2;
            if (!t2) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
            if (e2 = t2, !isNaN(parseFloat(e2)) && isFinite(e2) && Math.floor(e2) == e2) return "https://vimeo.com/".concat(t2);
            if (l(t2)) return t2.replace("http:", "https:");
            throw n2 ? new TypeError("\u201C".concat(n2, "\u201D is not a valid video id.")) : new TypeError("\u201C".concat(t2, "\u201D is not a vimeo.com url."));
        }
        var n = Array.prototype.indexOf !== void 0,
            o = typeof window != "undefined" && window.postMessage !== void 0;
        if (!(t || n && o)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
        var r, a, u = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};

        function s() {
            if (this === void 0) throw new TypeError("Constructor WeakMap requires 'new'");
            if (a(this, "_id", "_WeakMap_" + f() + "." + f()), 0 < arguments.length) throw new TypeError("WeakMap iterable is not supported");
        }

        function d(e2, t2) {
            if (!h(e2) || !r.call(e2, "_id")) throw new TypeError(t2 + " method called on incompatible receiver " + typeof e2);
        }

        function f() {
            return Math.random().toString().substring(2);
        }

        function h(e2) {
            return Object(e2) === e2;
        } (p = typeof self != "undefined" ? self : typeof window != "undefined" ? window : u).WeakMap || (r = Object.prototype.hasOwnProperty, a = function (e2, t2, n2) {
            Object.defineProperty ? Object.defineProperty(e2, t2, {
                configurable: !0,
                writable: !0,
                value: n2
            }) : e2[t2] = n2;
        }, p.WeakMap = (a(s.prototype, "delete", function (e2) {
            if (d(this, "delete"), !h(e2)) return !1;
            var t2 = e2[this._id];
            return !(!t2 || t2[0] !== e2 || (delete e2[this._id], 0));
        }), a(s.prototype, "get", function (e2) {
            if (d(this, "get"), h(e2)) {
                var t2 = e2[this._id];
                return t2 && t2[0] === e2 ? t2[1] : void 0;
            }
        }), a(s.prototype, "has", function (e2) {
            if (d(this, "has"), !h(e2)) return !1;
            var t2 = e2[this._id];
            return !(!t2 || t2[0] !== e2);
        }), a(s.prototype, "set", function (e2, t2) {
            if (d(this, "set"), !h(e2)) throw new TypeError("Invalid value used as weak map key");
            var n2 = e2[this._id];
            return n2 && n2[0] === e2 ? n2[1] = t2 : a(e2, this._id, [e2, t2]), this;
        }), a(s, "_polyfill", !0), s));
        var p, y = (n = j = {
            exports: {}
        }, o = function () {
            var e2, n2, o2, r2, i2, a2, u2 = Object.prototype.toString,
                s2 = typeof setImmediate != "undefined" ? function (e3) {
                    return setImmediate(e3);
                } : setTimeout;
            try {
                Object.defineProperty({}, "x", {}), e2 = function (e3, t3, n3, o3) {
                    return Object.defineProperty(e3, t3, {
                        value: n3,
                        writable: !0,
                        configurable: o3 !== !1
                    });
                };
            } catch (u3) {
                e2 = function (e3, t3, n3) {
                    return e3[t3] = n3, e3;
                };
            }

            function l2(e3, t3) {
                o2.add(e3, t3), n2 = n2 || s2(o2.drain);
            }

            function c2(e3) {
                var t3, n3 = typeof e3;
                return e3 == null || n3 != "object" && n3 != "function" || (t3 = e3.then), typeof t3 == "function" && t3;
            }

            function d2() {
                for (var e3 = 0; e3 < this.chain.length; e3++)(function (e4, t3, n3) {
                    var o3, r3;
                    try {
                        t3 === !1 ? n3.reject(e4.msg) : (o3 = t3 === !0 ? e4.msg : t3.call(void 0, e4.msg)) === n3.promise ? n3.reject(TypeError("Promise-chain cycle")) : (r3 = c2(o3)) ? r3.call(o3, n3.resolve, n3.reject) : n3.resolve(o3);
                    } catch (e5) {
                        n3.reject(e5);
                    }
                })(this, this.state === 1 ? this.chain[e3].success : this.chain[e3].failure, this.chain[e3]);
                this.chain.length = 0;
            }

            function f2(e3) {
                var t3 = this;
                t3.triggered || (t3.triggered = !0, t3.def && (t3 = t3.def), t3.msg = e3, t3.state = 2, 0 < t3.chain.length && l2(d2, t3));
            }

            function h2(e3, n3, o3, r3) {
                for (var t3 = 0; t3 < n3.length; t3++)(function (t4) {
                    e3.resolve(n3[t4]).then(function (e4) {
                        o3(t4, e4);
                    }, r3);
                })(t3);
            }

            function p2(e3) {
                this.def = e3, this.triggered = !1;
            }

            function t2(e3) {
                this.promise = e3, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0;
            }

            function y2(e3) {
                if (typeof e3 != "function") throw TypeError("Not a function");
                if (this.__NPO__ !== 0) throw TypeError("Not a promise");
                this.__NPO__ = 1;
                var o3 = new t2(this);
                this.then = function (e4, t3) {
                    var n3 = {
                        success: typeof e4 != "function" || e4,
                        failure: typeof t3 == "function" && t3
                    };
                    return n3.promise = new this.constructor(function (e5, t4) {
                        if (typeof e5 != "function" || typeof t4 != "function") throw TypeError("Not a function");
                        n3.resolve = e5, n3.reject = t4;
                    }), o3.chain.push(n3), o3.state !== 0 && l2(d2, o3), n3.promise;
                }, this.catch = function (e4) {
                    return this.then(void 0, e4);
                };
                try {
                    e3.call(void 0, function (e4) {
                        (function e5(n3) {
                            var o4, r3 = this;
                            if (!r3.triggered) {
                                r3.triggered = !0, r3.def && (r3 = r3.def);
                                try {
                                    (o4 = c2(n3)) ? l2(function () {
                                        var t3 = new p2(r3);
                                        try {
                                            o4.call(n3, function () {
                                                e5.apply(t3, arguments);
                                            }, function () {
                                                f2.apply(t3, arguments);
                                            });
                                        } catch (e6) {
                                            f2.call(t3, e6);
                                        }
                                    }) : (r3.msg = n3, r3.state = 1, 0 < r3.chain.length && l2(d2, r3));
                                } catch (e6) {
                                    f2.call(new p2(r3), e6);
                                }
                            }
                        }).call(o3, e4);
                    }, function (e4) {
                        f2.call(o3, e4);
                    });
                } catch (e4) {
                    f2.call(o3, e4);
                }
            }

            function v2(e3, t3) {
                this.fn = e3, this.self = t3, this.next = void 0;
            }
            var m2 = e2({}, "constructor", y2, !(o2 = {
                add: function (e3, t3) {
                    a2 = new v2(e3, t3), i2 ? i2.next = a2 : r2 = a2, i2 = a2, a2 = void 0;
                },
                drain: function () {
                    var e3 = r2;
                    for (r2 = i2 = n2 = void 0; e3;) e3.fn.call(e3.self), e3 = e3.next;
                }
            }));
            return e2(y2.prototype = m2, "__NPO__", 0, !1), e2(y2, "resolve", function (n3) {
                return n3 && typeof n3 == "object" && n3.__NPO__ === 1 ? n3 : new this(function (e3, t3) {
                    if (typeof e3 != "function" || typeof t3 != "function") throw TypeError("Not a function");
                    e3(n3);
                });
            }), e2(y2, "reject", function (n3) {
                return new this(function (e3, t3) {
                    if (typeof e3 != "function" || typeof t3 != "function") throw TypeError("Not a function");
                    t3(n3);
                });
            }), e2(y2, "all", function (t3) {
                var a3 = this;
                return u2.call(t3) != "[object Array]" ? a3.reject(TypeError("Not an array")) : t3.length === 0 ? a3.resolve([]) : new a3(function (n3, e3) {
                    if (typeof n3 != "function" || typeof e3 != "function") throw TypeError("Not a function");
                    var o3 = t3.length,
                        r3 = Array(o3),
                        i3 = 0;
                    h2(a3, t3, function (e4, t4) {
                        r3[e4] = t4, ++i3 === o3 && n3(r3);
                    }, e3);
                });
            }), e2(y2, "race", function (t3) {
                var o3 = this;
                return u2.call(t3) != "[object Array]" ? o3.reject(TypeError("Not an array")) : new o3(function (n3, e3) {
                    if (typeof n3 != "function" || typeof e3 != "function") throw TypeError("Not a function");
                    h2(o3, t3, function (e4, t4) {
                        n3(t4);
                    }, e3);
                });
            }), y2;
        }, (p = u)[u = "Promise"] = p[u] || o(), n.exports && (n.exports = p[u]), j.exports),
            v = new WeakMap;

        function m(e2, t2, n2) {
            var o2 = v.get(e2.element) || {};
            t2 in o2 || (o2[t2] = []), o2[t2].push(n2), v.set(e2.element, o2);
        }

        function g(e2, t2) {
            return (v.get(e2.element) || {})[t2] || [];
        }

        function w(e2, t2, n2) {
            var o2 = v.get(e2.element) || {};
            return o2[t2] ? n2 ? (n2 = o2[t2].indexOf(n2), n2 !== -1 && o2[t2].splice(n2, 1), v.set(e2.element, o2), o2[t2] && o2[t2].length === 0) : (o2[t2] = [], v.set(e2.element, o2), 1) : 1;
        }
        var b = ["autopause", "autoplay", "background", "byline", "color", "height", "id", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "title", "transparent", "url", "width"];

        function T(o2, e2) {
            return e2 = 1 < arguments.length && e2 !== void 0 ? e2 : {}, b.reduce(function (e3, t2) {
                var n2 = o2.getAttribute("data-vimeo-".concat(t2));
                return !n2 && n2 !== "" || (e3[t2] = n2 === "" ? 1 : n2), e3;
            }, e2);
        }

        function k(e2, t2) {
            var n2 = e2.html;
            if (!t2) throw new TypeError("An element must be provided");
            return t2.getAttribute("data-vimeo-initialized") !== null ? t2.querySelector("iframe") : (e2 = document.createElement("div"), e2.innerHTML = n2, t2.appendChild(e2.firstChild), t2.setAttribute("data-vimeo-initialized", "true"), t2.querySelector("iframe"));
        }

        function _2(i2, e2, t2) {
            var a2 = 1 < arguments.length && e2 !== void 0 ? e2 : {},
                u2 = 2 < arguments.length ? t2 : void 0;
            return new Promise(function (t3, n2) {
                if (!l(i2)) throw new TypeError("\u201C".concat(i2, "\u201D is not a vimeo.com url."));
                var e3, o2 = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(i2), "&domain=").concat(window.location.hostname);
                for (e3 in a2) a2.hasOwnProperty(e3) && (o2 += "&".concat(e3, "=").concat(encodeURIComponent(a2[e3])));
                var r2 = new ("XDomainRequest" in window ? XDomainRequest : XMLHttpRequest);
                r2.open("GET", o2, !0), r2.onload = function () {
                    if (r2.status !== 404)
                        if (r2.status !== 403) try {
                            var e4 = JSON.parse(r2.responseText);
                            if (e4.domain_status_code === 403) return k(e4, u2), void n2(new Error("\u201C".concat(i2, "\u201D is not embeddable.")));
                            t3(e4);
                        } catch (e5) {
                            n2(e5);
                        } else n2(new Error("\u201C".concat(i2, "\u201D is not embeddable.")));
                    else n2(new Error("\u201C".concat(i2, "\u201D was not found.")));
                }, r2.onerror = function () {
                    var e4 = r2.status ? " (".concat(r2.status, ")") : "";
                    n2(new Error("There was an error fetching the embed code from Vimeo".concat(e4, ".")));
                }, r2.send();
            });
        }

        function E(e2) {
            if (typeof e2 == "string") try {
                e2 = JSON.parse(e2);
            } catch (e3) {
                return console.warn(e3), {};
            }
            return e2;
        }

        function I(e2, t2, n2) {
            e2.element.contentWindow && e2.element.contentWindow.postMessage && (t2 = {
                method: t2
            }, n2 !== void 0 && (t2.value = n2), 8 <= (n2 = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"))) && n2 < 10 && (t2 = JSON.stringify(t2)), e2.element.contentWindow.postMessage(t2, e2.origin));
        }
        var P = new WeakMap,
            x = new WeakMap,
            j = (e(S.prototype, [{
                key: "callMethod",
                value: function (n2) {
                    var o2 = this,
                        r2 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
                    return new y(function (e2, t2) {
                        return o2.ready().then(function () {
                            m(o2, n2, {
                                resolve: e2,
                                reject: t2
                            }), I(o2, n2, r2);
                        }).catch(t2);
                    });
                }
            }, {
                key: "get",
                value: function (n2) {
                    var o2 = this;
                    return new y(function (e2, t2) {
                        return n2 = i(n2, "get"), o2.ready().then(function () {
                            m(o2, n2, {
                                resolve: e2,
                                reject: t2
                            }), I(o2, n2);
                        }).catch(t2);
                    });
                }
            }, {
                key: "set",
                value: function (n2, o2) {
                    var r2 = this;
                    return new y(function (e2, t2) {
                        if (n2 = i(n2, "set"), o2 == null) throw new TypeError("There must be a value to set.");
                        return r2.ready().then(function () {
                            m(r2, n2, {
                                resolve: e2,
                                reject: t2
                            }), I(r2, n2, o2);
                        }).catch(t2);
                    });
                }
            }, {
                key: "on",
                value: function (e2, t2) {
                    if (!e2) throw new TypeError("You must pass an event name.");
                    if (!t2) throw new TypeError("You must pass a callback function.");
                    if (typeof t2 != "function") throw new TypeError("The callback must be a function.");
                    g(this, "event:".concat(e2)).length === 0 && this.callMethod("addEventListener", e2).catch(function () { }), m(this, "event:".concat(e2), t2);
                }
            }, {
                key: "off",
                value: function (e2, t2) {
                    if (!e2) throw new TypeError("You must pass an event name.");
                    if (t2 && typeof t2 != "function") throw new TypeError("The callback must be a function.");
                    w(this, "event:".concat(e2), t2) && this.callMethod("removeEventListener", e2).catch(function (e3) { });
                }
            }, {
                key: "loadVideo",
                value: function (e2) {
                    return this.callMethod("loadVideo", e2);
                }
            }, {
                key: "ready",
                value: function () {
                    var e2 = x.get(this) || new y(function (e3, t2) {
                        t2(new Error("Unknown player. Probably unloaded."));
                    });
                    return y.resolve(e2);
                }
            }, {
                key: "addCuePoint",
                value: function (e2) {
                    var t2 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
                    return this.callMethod("addCuePoint", {
                        time: e2,
                        data: t2
                    });
                }
            }, {
                key: "removeCuePoint",
                value: function (e2) {
                    return this.callMethod("removeCuePoint", e2);
                }
            }, {
                key: "enableTextTrack",
                value: function (e2, t2) {
                    if (!e2) throw new TypeError("You must pass a language.");
                    return this.callMethod("enableTextTrack", {
                        language: e2,
                        kind: t2
                    });
                }
            }, {
                key: "disableTextTrack",
                value: function () {
                    return this.callMethod("disableTextTrack");
                }
            }, {
                key: "pause",
                value: function () {
                    return this.callMethod("pause");
                }
            }, {
                key: "play",
                value: function () {
                    return this.callMethod("play");
                }
            }, {
                key: "unload",
                value: function () {
                    return this.callMethod("unload");
                }
            }, {
                key: "destroy",
                value: function () {
                    var t2 = this;
                    return new y(function (e2) {
                        x.delete(t2), P.delete(t2.element), t2._originalElement && (P.delete(t2._originalElement), t2._originalElement.removeAttribute("data-vimeo-initialized")), t2.element && t2.element.nodeName === "IFRAME" && t2.element.parentNode && t2.element.parentNode.removeChild(t2.element), e2();
                    });
                }
            }, {
                key: "getAutopause",
                value: function () {
                    return this.get("autopause");
                }
            }, {
                key: "setAutopause",
                value: function (e2) {
                    return this.set("autopause", e2);
                }
            }, {
                key: "getBuffered",
                value: function () {
                    return this.get("buffered");
                }
            }, {
                key: "getColor",
                value: function () {
                    return this.get("color");
                }
            }, {
                key: "setColor",
                value: function (e2) {
                    return this.set("color", e2);
                }
            }, {
                key: "getCuePoints",
                value: function () {
                    return this.get("cuePoints");
                }
            }, {
                key: "getCurrentTime",
                value: function () {
                    return this.get("currentTime");
                }
            }, {
                key: "setCurrentTime",
                value: function (e2) {
                    return this.set("currentTime", e2);
                }
            }, {
                key: "getDuration",
                value: function () {
                    return this.get("duration");
                }
            }, {
                key: "getEnded",
                value: function () {
                    return this.get("ended");
                }
            }, {
                key: "getLoop",
                value: function () {
                    return this.get("loop");
                }
            }, {
                key: "setLoop",
                value: function (e2) {
                    return this.set("loop", e2);
                }
            }, {
                key: "getPaused",
                value: function () {
                    return this.get("paused");
                }
            }, {
                key: "getPlaybackRate",
                value: function () {
                    return this.get("playbackRate");
                }
            }, {
                key: "setPlaybackRate",
                value: function (e2) {
                    return this.set("playbackRate", e2);
                }
            }, {
                key: "getPlayed",
                value: function () {
                    return this.get("played");
                }
            }, {
                key: "getSeekable",
                value: function () {
                    return this.get("seekable");
                }
            }, {
                key: "getSeeking",
                value: function () {
                    return this.get("seeking");
                }
            }, {
                key: "getTextTracks",
                value: function () {
                    return this.get("textTracks");
                }
            }, {
                key: "getVideoEmbedCode",
                value: function () {
                    return this.get("videoEmbedCode");
                }
            }, {
                key: "getVideoId",
                value: function () {
                    return this.get("videoId");
                }
            }, {
                key: "getVideoTitle",
                value: function () {
                    return this.get("videoTitle");
                }
            }, {
                key: "getVideoWidth",
                value: function () {
                    return this.get("videoWidth");
                }
            }, {
                key: "getVideoHeight",
                value: function () {
                    return this.get("videoHeight");
                }
            }, {
                key: "getVideoUrl",
                value: function () {
                    return this.get("videoUrl");
                }
            }, {
                key: "getVolume",
                value: function () {
                    return this.get("volume");
                }
            }, {
                key: "setVolume",
                value: function (e2) {
                    return this.set("volume", e2);
                }
            }]), S);

        function S(r2) {
            var e2, s2 = this,
                t2 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
            if (function (e3) {
                if (!(e3 instanceof S)) throw new TypeError("Cannot call a class as a function");
            }(this), window.jQuery && r2 instanceof jQuery && (1 < r2.length && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), r2 = r2[0]), typeof document != "undefined" && typeof r2 == "string" && (r2 = document.getElementById(r2)), e2 = r2, !(e2 && e2.nodeType === 1 && "nodeName" in e2 && e2.ownerDocument && e2.ownerDocument.defaultView)) throw new TypeError("You must pass either a valid element or a valid id.");
            var n2 = r2.ownerDocument.defaultView;
            if (r2.nodeName === "IFRAME" || (o2 = r2.querySelector("iframe")) && (r2 = o2), r2.nodeName === "IFRAME" && !l(r2.getAttribute("src") || "")) throw new Error("The player element passed isn\u2019t a Vimeo embed.");
            if (P.has(r2)) return P.get(r2);
            this.element = r2, this.origin = "*";
            var o2 = new y(function (a2, u2) {
                var e3 = function (e4) {
                    if (l(e4.origin) && s2.element.contentWindow === e4.source) {
                        s2.origin === "*" && (s2.origin = e4.origin);
                        var t3 = E(e4.data);
                        if (t3 && t3.event === "error" && t3.data && t3.data.method === "ready") {
                            var n3 = new Error(t3.data.message);
                            return n3.name = t3.data.name, void u2(n3);
                        }
                        if (e4 = t3 && t3.event === "ready", n3 = t3 && t3.method === "ping", e4 || n3) return s2.element.setAttribute("data-ready", "true"), void a2();
                        o3 = s2, n3 = [], (r3 = E(r3 = t3)).event ? (r3.event === "error" && g(o3, r3.data.method).forEach(function (e5) {
                            var t4 = new Error(r3.data.message);
                            t4.name = r3.data.name, e5.reject(t4), w(o3, r3.data.method, e5);
                        }), n3 = g(o3, "event:".concat(r3.event)), i2 = r3.data) : !r3.method || (t3 = function (e5, t4) {
                            var n4 = g(e5, t4);
                            return n4.length < 1 ? !1 : (n4 = n4.shift(), w(e5, t4, n4), n4);
                        }(o3, r3.method)) && (n3.push(t3), i2 = r3.value), n3.forEach(function (e5) {
                            try {
                                if (typeof e5 == "function") return void e5.call(o3, i2);
                                e5.resolve(i2);
                            } catch (e6) { }
                        });
                    }
                    var o3, r3, i2;
                };
                n2.addEventListener ? n2.addEventListener("message", e3, !1) : n2.attachEvent && n2.attachEvent("onmessage", e3), s2.element.nodeName !== "IFRAME" && _2(c(e3 = T(r2, t2)), e3, r2).then(function (e4) {
                    var t3, n3, o3 = k(e4, r2);
                    return s2.element = o3, t3 = s2._originalElement = r2, n3 = o3, o3 = v.get(t3), v.set(n3, o3), v.delete(t3), P.set(s2.element, s2), e4;
                }).catch(u2);
            });
            return x.set(this, o2), P.set(this.element, this), this.element.nodeName === "IFRAME" && I(this, "ping"), this;
        }
        return t || (function (e2) {
            function n2(e3) {
                "console" in window && console.error && console.error("There was an error creating an embed: ".concat(e3));
            }
            e2 = 0 < arguments.length && e2 !== void 0 ? e2 : document, e2 = [].slice.call(e2.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")), e2.forEach(function (t2) {
                try {
                    if (t2.getAttribute("data-vimeo-defer") !== null) return;
                    var e3 = T(t2);
                    _2(c(e3), e3, t2).then(function (e4) {
                        return k(e4, t2);
                    }).catch(n2);
                } catch (e4) {
                    n2(e4);
                }
            });
        }(), function (e2) {
            var o2 = 0 < arguments.length && e2 !== void 0 ? e2 : document;
            window.VimeoPlayerResizeEmbeds_ || (window.VimeoPlayerResizeEmbeds_ = !0, e2 = function (e3) {
                if (l(e3.origin) && e3.data && e3.data.event === "spacechange") {
                    for (var t2 = o2.querySelectorAll("iframe"), n2 = 0; n2 < t2.length; n2++)
                        if (t2[n2].contentWindow === e3.source) {
                            t2[n2].parentElement.style.paddingBottom = "".concat(e3.data.data[0].bottom, "px");
                            break;
                        }
                }
            }, window.addEventListener ? window.addEventListener("message", e2, !1) : window.attachEvent && window.attachEvent("onmessage", e2));
        }()), j;
    }), jQuery.cookie = function (e, t, n) {
        if (t === void 0) {
            var o = null;
            if (document.cookie && document.cookie != "")
                for (var r = document.cookie.split(";"), i = 0; i < r.length; i++) {
                    var a = jQuery.trim(r[i]);
                    if (a.substring(0, e.length + 1) == e + "=") {
                        o = decodeURIComponent(a.substring(e.length + 1));
                        break;
                    }
                }
            return o;
        }
        n = n || {}, t === null && (t = "", n.expires = -1);
        var u = "";
        n.expires && (typeof n.expires == "number" || n.expires.toUTCString) && (typeof n.expires == "number" ? (l = new Date).setTime(l.getTime() + 24 * n.expires * 60 * 60 * 1e3) : l = n.expires, u = "; expires=" + l.toUTCString());
        var s = n.path ? "; path=" + n.path : "",
            l = n.domain ? "; domain=" + n.domain : "",
            n = n.secure ? "; secure" : "";
        document.cookie = [e, "=", encodeURIComponent(t), u, s, l, n].join("");
    },
    function (e) {
        "use strict";
        typeof define == "function" && define.amd ? define(["jquery"], e) : typeof module != "undefined" && module.exports ? module.exports = e(require("jquery")) : e(jQuery);
    }(function (a) {
        function u(e) {
            return parseFloat(e) || 0;
        }

        function s(e) {
            var e = a(e),
                o2 = null,
                r2 = [];
            return e.each(function () {
                var e2 = a(this),
                    t = e2.offset().top - u(e2.css("margin-top")),
                    n = 0 < r2.length ? r2[r2.length - 1] : null;
                n !== null && Math.floor(Math.abs(o2 - t)) <= 1 ? r2[r2.length - 1] = n.add(e2) : r2.push(e2), o2 = t;
            }), r2;
        }

        function l(e) {
            var t = {
                byRow: !0,
                property: "height",
                target: null,
                remove: !1
            };
            return typeof e == "object" ? a.extend(t, e) : (typeof e == "boolean" ? t.byRow = e : e === "remove" && (t.remove = !0), t);
        }
        var o = -1,
            r = -1,
            c = a.fn.matchHeight = function (e) {
                if (e = l(e), e.remove) {
                    var n = this;
                    return this.css(e.property, ""), a.each(c._groups, function (e2, t) {
                        t.elements = t.elements.not(n);
                    }), this;
                }
                return this.length <= 1 && !e.target || (c._groups.push({
                    elements: this,
                    options: e
                }), c._apply(this, e)), this;
            };
        c.version = "master", c._groups = [], c._throttle = 80, c._maintainScroll = !0, c._beforeUpdate = null, c._afterUpdate = null, c._rows = s, c._parse = u, c._parseOptions = l, c._apply = function (e, t) {
            var r2 = l(t),
                n = a(e),
                o2 = [n],
                i2 = a(window).scrollTop(),
                t = a("html").outerHeight(!0),
                e = n.parents().filter(":hidden");
            return e.each(function () {
                var e2 = a(this);
                e2.data("style-cache", e2.attr("style"));
            }), e.css("display", "block"), r2.byRow && !r2.target && (n.each(function () {
                var e2 = a(this),
                    t2 = e2.css("display");
                t2 !== "inline-block" && t2 !== "flex" && t2 !== "inline-flex" && (t2 = "block"), e2.data("style-cache", e2.attr("style")), e2.css({
                    display: t2,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
                    height: "100px",
                    overflow: "hidden"
                });
            }), o2 = s(n), n.each(function () {
                var e2 = a(this);
                e2.attr("style", e2.data("style-cache") || "");
            })), a.each(o2, function (e2, t2) {
                var t2 = a(t2),
                    o3 = 0;
                if (r2.target) o3 = r2.target.outerHeight(!1);
                else {
                    if (r2.byRow && t2.length <= 1) return void t2.css(r2.property, "");
                    t2.each(function () {
                        var e3 = a(this),
                            t3 = e3.attr("style"),
                            n2 = e3.css("display");
                        n2 !== "inline-block" && n2 !== "flex" && n2 !== "inline-flex" && (n2 = "block"), n2 = {
                            display: n2
                        }, n2[r2.property] = "", e3.css(n2), e3.outerHeight(!1) > o3 && (o3 = e3.outerHeight(!1)), t3 ? e3.attr("style", t3) : e3.css("display", "");
                    });
                }
                t2.each(function () {
                    var e3 = a(this),
                        t3 = 0;
                    r2.target && e3.is(r2.target) || (e3.css("box-sizing") !== "border-box" && (t3 += u(e3.css("border-top-width")) + u(e3.css("border-bottom-width")), t3 += u(e3.css("padding-top")) + u(e3.css("padding-bottom"))), e3.css(r2.property, o3 - t3 + "px"));
                });
            }), e.each(function () {
                var e2 = a(this);
                e2.attr("style", e2.data("style-cache") || null);
            }), c._maintainScroll && a(window).scrollTop(i2 / t * a("html").outerHeight(!0)), this;
        }, c._applyDataApi = function () {
            var n = {};
            a("[data-match-height], [data-mh]").each(function () {
                var e = a(this),
                    t = e.attr("data-mh") || e.attr("data-match-height");
                t in n ? n[t] = n[t].add(e) : n[t] = e;
            }), a.each(n, function () {
                this.matchHeight(!0);
            });
        };

        function i(e) {
            c._beforeUpdate && c._beforeUpdate(e, c._groups), a.each(c._groups, function (e2) {
                var t = this;
                t.elements.length && setTimeout(function () {
                    c._apply(t.elements, t.options);
                }, 500);
            }), c._afterUpdate && c._afterUpdate(e, c._groups);
        }
        c._update = function (e, t) {
            if (t && t.type === "resize") {
                var n = a(window).width();
                if (n === o) return;
                o = n;
            }
            e ? r === -1 && (r = setTimeout(function () {
                i(t), r = -1;
            }, c._throttle)) : i(t);
        }, a(c._applyDataApi), a(window).bind("load", function (e) {
            c._update(!1, e);
        }), a(window).bind("resize orientationchange", function (e) {
            c._update(!0, e);
        });
    }), typeof Object.create != "function" && (Object.create = function (e) {
        function t() { }
        return t.prototype = e, new t;
    }),
    function (a, u, i) {
        YTPlayer = {
            player: null,
            defaults: {
                ratio: 16 / 9,
                videoId: "LSmgKRx5pBo",
                mute: !0,
                repeat: !0,
                width: a(u).width(),
                playButtonClass: "YTPlayer-play",
                pauseButtonClass: "YTPlayer-pause",
                muteButtonClass: "YTPlayer-mute",
                volumeUpClass: "YTPlayer-volume-up",
                volumeDownClass: "YTPlayer-volume-down",
                start: 0,
                pauseOnScroll: !1,
                fitToBackground: !0,
                playerVars: {
                    iv_load_policy: 3,
                    modestbranding: 1,
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    wmode: "opaque",
                    branding: 0,
                    autohide: 0
                },
                events: null
            },
            init: function (e, t) {
                var n, o, r = this;
                return r.userOptions = t, r.$body = a("body"), r.$node = a(e), r.$window = a(u), r.defaults.events = {
                    onReady: function (e2) {
                        r.onPlayerReady(e2), r.options.pauseOnScroll && r.pauseOnScroll(), typeof r.options.callback == "function" && r.options.callback.call(this);
                    },
                    onStateChange: function (e2) {
                        e2.data === 1 ? (r.$node.find("img").fadeOut(400), r.$node.addClass("loaded")) : e2.data === 0 && r.options.repeat && r.player.seekTo(r.options.start);
                    }
                }, r.options = a.extend(!0, {}, r.defaults, r.userOptions), r.options.height = Math.ceil(r.options.width / r.options.ratio), r.ID = new Date().getTime(), r.holderID = "YTPlayer-ID-" + r.ID, r.options.fitToBackground ? r.createBackgroundVideo() : r.createContainerVideo(), r.$window.on("resize.YTplayer" + r.ID, function () {
                    r.resize(r);
                }), n = r.onYouTubeIframeAPIReady.bind(r), (t = i.createElement("script")).id = "youtube-sdk", e = i.getElementsByTagName("head")[0], u.location.origin == "file://" ? t.src = "http://www.youtube.com/iframe_api" : t.src = "//www.youtube.com/iframe_api", e.appendChild(t), console.log(t), t = e = null, o = n, typeof YT == "undefined" && u.loadingPlayer === void 0 ? (u.loadingPlayer = !0, u.dfd = a.Deferred(), u.onYouTubeIframeAPIReady = function () {
                    u.onYouTubeIframeAPIReady = null, u.dfd.resolve("done"), o();
                }) : typeof YT == "object" ? o() : u.dfd.done(function (e2) {
                    o();
                }), r.resize(r), r;
            },
            pauseOnScroll: function () {
                var e = this;
                e.$window.on("scroll.YTplayer" + e.ID, function () {
                    e.player.getPlayerState() === 1 && e.player.pauseVideo();
                }), e.$window.scrollStopped(function () {
                    e.player.getPlayerState() === 2 && e.player.playVideo();
                });
            },
            createContainerVideo: function () {
                var e = a('<div id="ytplayer-container' + this.ID + '" >                                    <div id="' + this.holderID + '" class="ytplayer-player-inline"></div>                                     </div>                                     <div id="ytplayer-shield" class="ytplayer-shield"></div>');
                this.$node.append(e), this.$YTPlayerString = e;
            },
            createBackgroundVideo: function () {
                var e = a('<div id="ytplayer-container' + this.ID + '" class="ytplayer-container background">                                    <div id="' + this.holderID + '" class="ytplayer-player"></div>                                    </div>                                    <div id="ytplayer-shield" class="ytplayer-shield"></div>');
                this.$node.append(e), this.$YTPlayerString = e;
            },
            resize: function (e) {
                var t = a(u);
                e.options.fitToBackground || (t = e.$node);
                var n, o = t.width(),
                    r = t.height(),
                    i2 = a("#" + e.holderID);
                o / e.options.ratio < r ? (n = Math.ceil(r * e.options.ratio), i2.width(n).height(r).css({
                    left: (o - n) / 2,
                    top: 0
                })) : (e = Math.ceil(o / e.options.ratio), i2.width(o).height(e).css({
                    left: 0,
                    top: (r - e) / 2
                })), t = i2 = null;
            },
            onYouTubeIframeAPIReady: function () {
                theme.ProductVideo.youtubeApiLoaded = !0, theme.ProductVideo.loadVideos(theme.ProductVideo.hosts.youtube), this.player = new u.YT.Player(this.holderID, this.options);
            },
            onPlayerReady: function (e) {
                this.options.mute && e.target.mute();
            },
            getPlayer: function () {
                return this.player;
            },
            destroy: function () {
                var e = this;
                e.$node.removeData("yt-init").removeData("ytPlayer").removeClass("loaded"), e.$YTPlayerString.remove(), a(u).off("resize.YTplayer" + e.ID), a(u).off("scroll.YTplayer" + e.ID), e.$body = null, e.$node = null, e.$YTPlayerString = null, e.player.destroy(), e.player = null;
            }
        }, a.fn.scrollStopped = function (e) {
            var t = a(this),
                n = this;
            t.scroll(function () {
                t.data("scrollTimeout") && clearTimeout(t.data("scrollTimeout")), t.data("scrollTimeout", setTimeout(e, 250, n));
            });
        }, a.fn.YTPlayer = function (t) {
            return this.each(function () {
                a(this).data("yt-init", !0);
                var e = Object.create(YTPlayer);
                e.init(this, t), a.data(this, "ytPlayer", e);
            });
        };
    }(jQuery, window, document);

function dT_Swiper($container) {
    var id = $container.attr("data-section-id"),
        ItemsPerView = +$container.attr("data-item-per-view"),
        laptopSlides = +$container.attr("data-laptop-screen-items") || 3,
        tabletSlides = +$container.attr("data-tablet-screen-items") || 2,
        mobileSlides = +$container.attr("data-small-screen-items") || 1,
        ItemsRow = +$container.attr("data-item-row"),
        ItemsSpace = +$container.attr("data-item-space"),
        autoHeight = +$container.attr("data-auto-height") || !1,
        ItemsLimit = +$container.attr("data-blocks-limit"),
        Autoplay = +$container.attr("data-autoplay") * 1e3,
        ItemMode = +$container.data("center-mode"),
        initAutoplay = Autoplay ? {
            delay: Autoplay
        } : !1,
        ItemLoop = ItemMode;
    return new Swiper("#swiper-" + id + "-slider", {
        direction: "horizontal",
        pagination: {
            el: "#swiper-" + id + "-pagination",
            clickable: !0
        },
        navigation: {
            nextEl: "#swiper-" + id + "-next",
            prevEl: "#swiper-" + id + "-prev"
        },
        loop: ItemLoop,
        slidesPerView: ItemsPerView,
        slidesPerGroup: 1,
        slidesPerColumn: ItemsRow,
        spaceBetween: ItemsSpace,
        autoHeight: autoHeight,
        slidesPerColumnFill: "row",
        simulateTouch: !0,
        autoplay: initAutoplay,
        centeredSlides: ItemMode,
        breakpoints: {
            320: {
                slidesPerView: mobileSlides,
                spaceBetween: 20
            },
            768: {
                slidesPerView: tabletSlides,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: laptopSlides,
                spaceBetween: 20
            },
            1435: {
                slidesPerView: ItemsPerView,
                spaceBetween: ItemsSpace
            }
        }
    });
}

function dT_Slick($container) {
    var thumbsView = $container.attr("data-thumbsView");
    $(".thumb-v-carousel").length > 0 && $(".product-grid-item-thumb-carousel").each(function () {
        var DealThumb = $(this).find(".thumb-v-carousel ul"),
            DealSlide = $(this).find(".middle-gallery_block ul");
        $(DealSlide).not(".slick-initialized").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            fade: !0,
            asNavFor: DealThumb
        }), $(DealThumb).not(".slick-initialized").slick({
            slidesToShow: thumbsView,
            slidesToScroll: 1,
            vertical: !0,
            verticalSwiping: !0,
            draggable: !0,
            asNavFor: DealSlide,
            autoplay: !0,
            autoplaySpeed: 2e3,
            focusOnSelect: !0,
            arrows: !1
        });
    });
}
window.theme = window.theme || {}, theme.Sections = function () {
    this.constructors = {}, this.instances = [], $(document).on("shopify:section:load", this._onSectionLoad.bind(this)).on("shopify:section:unload", this._onSectionUnload.bind(this)).on("shopify:section:select", this._onSelect.bind(this)).on("shopify:section:deselect", this._onDeselect.bind(this)).on("shopify:section:reorder", this._onReorder.bind(this)).on("shopify:block:select", this._onBlockSelect.bind(this)).on("shopify:block:deselect", this._onBlockDeselect.bind(this));
}, theme.Sections.prototype = _.assignIn({}, theme.Sections.prototype, {
    _createInstance: function (container2, constructor) {
        var $container = $(container2),
            id = $container.attr("data-section-id"),
            type2 = $container.attr("data-section-type");
        if (constructor = constructor || this.constructors[type2], !_.isUndefined(constructor)) {
            var instance = _.assignIn(new constructor(container2), {
                id: id,
                type: type2,
                container: container2
            });
            this.instances.push(instance);
        }
    },
    _onSectionLoad: function (evt) {
        var container2 = $("[data-section-id]", evt.target)[0];
        container2 && this._createInstance(container2);
    },
    _onSectionUnload: function (evt) {
        this.instances = _.filter(this.instances, function (instance) {
            var isEventInstance = instance.id === evt.originalEvent.detail.sectionId;
            return isEventInstance && _.isFunction(instance.onUnload) && instance.onUnload(evt), !isEventInstance;
        });
    },
    _onSelect: function (evt) {
        var instance = _.find(this.instances, function (instance2) {
            return instance2.id === evt.originalEvent.detail.sectionId;
        });
        !_.isUndefined(instance) && _.isFunction(instance.onSelect) && instance.onSelect(evt);
    },
    _onDeselect: function (evt) {
        var instance = _.find(this.instances, function (instance2) {
            return instance2.id === evt.originalEvent.detail.sectionId;
        });
        !_.isUndefined(instance) && _.isFunction(instance.onDeselect) && instance.onDeselect(evt);
    },
    _onReorder: function (evt) {
        var instance = _.find(this.instances, function (instance2) {
            return instance2.id === evt.originalEvent.detail.sectionId;
        });
        !_.isUndefined(instance) && _.isFunction(instance.onReorder) && instance.onReorder(evt);
    },
    _onBlockSelect: function (evt) {
        var instance = _.find(this.instances, function (instance2) {
            return instance2.id === evt.originalEvent.detail.sectionId;
        });
        !_.isUndefined(instance) && _.isFunction(instance.onBlockSelect) && instance.onBlockSelect(evt);
    },
    _onBlockDeselect: function (evt) {
        var instance = _.find(this.instances, function (instance2) {
            return instance2.id === evt.originalEvent.detail.sectionId;
        });
        !_.isUndefined(instance) && _.isFunction(instance.onBlockDeselect) && instance.onBlockDeselect(evt);
    },
    register: function (type2, constructor) {
        this.constructors[type2] = constructor, $("[data-section-type=" + type2 + "]").each(function (index, container2) {
            this._createInstance(container2, constructor);
        }.bind(this));
    }
}), theme.LibraryLoader = function () {
    var types = {
        link: "link",
        script: "script"
    },
        status = {
            requested: "requested",
            loaded: "loaded"
        },
        cloudCdn = "https://cdn.shopify.com/shopifycloud/",
        libraries = {
            youtubeSdk: {
                tagId: "youtube-sdk",
                src: "https://www.youtube.com/iframe_api",
                type: types.script
            },
            plyrShopifyStyles: {
                tagId: "plyr-shopify-styles",
                src: cloudCdn + "shopify-plyr/v1.0/shopify-plyr.css",
                type: types.link
            },
            modelViewerUiStyles: {
                tagId: "shopify-model-viewer-ui-styles",
                src: cloudCdn + "model-viewer-ui/assets/v1.0/model-viewer-ui.css",
                type: types.link
            }
        };

    function load(libraryName, callback) {
        var library = libraries[libraryName];
        if (library && library.status !== status.requested) {
            if (callback = callback || function () { }, library.status === status.loaded) {
                callback();
                return;
            }
            library.status = status.requested;
            var tag;
            switch (library.type) {
                case types.script:
                    tag = createScriptTag(library, callback);
                    break;
                case types.link:
                    tag = createLinkTag(library, callback);
                    break;
            }
            tag.id = library.tagId, library.element = tag;
            var firstScriptTag = document.getElementsByTagName(library.type)[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    }

    function createScriptTag(library, callback) {
        var tag = document.createElement("script");
        return tag.src = library.src, tag.addEventListener("load", function () {
            library.status = status.loaded, callback();
        }), tag;
    }

    function createLinkTag(library, callback) {
        var tag = document.createElement("link");
        return tag.href = library.src, tag.rel = "stylesheet", tag.type = "text/css", tag.addEventListener("load", function () {
            library.status = status.loaded, callback();
        }), tag;
    }
    return {
        load: load
    };
}(), theme.ProductStatus = function () {
    function ProductStatus(container2) {
        this.container = container2;
    }
    return ProductStatus.prototype = Object.assign({}, ProductStatus.prototype, {
        updateContent: function (variantId) { }
    }), ProductStatus;
}();
var textToDownCase = function (str) {
    return str.toLowerCase().replace(/[^\w\u00C0-\u024f]+/g, "-").replace(/^-+|-+$/g, "");
},
    UrlTrigger = !1,
    home_featured_product_media = !1;

function setUnitPrice(variant2) {
    var baseUnit = "";
    return variant2.unit_price_measurement && (variant2.unit_price_measurement.reference_value !== 1 && (baseUnit += variant2.unit_price_measurement.reference_value), baseUnit += variant2.unit_price_measurement.reference_unit), Shopify.formatMoney(variant2.unit_price, DT_THEME.moneyFormat) + "/" + baseUnit;
}
theme.numberCounter = function () {
    function numberCounter(container2) {
        var $container = this.$container = $(container2),
            initInview = $container.attr("data-section-id");
        $(".inview-" + initInview + "-initialized").bind("inview", function (event, visible) {
            visible && $(".dt-sc-number-counter-value").each(function () {
                var $this = $(this),
                    max_value = $this.attr("data-value");
                $({
                    counter_value: $this.text()
                }).animate({
                    counter_value: max_value
                }, {
                    step: function () {
                        $this.text(Math.floor(this.counter_value));
                    },
                    duration: 1500,
                    easing: "swing",
                    complete: function () {
                        $this.text(this.counter_value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    }
                });
            });
        });
    }
    return numberCounter;
}(), theme.featuredCollection = function () {
    function featuredCollection(container2) {
        var $container = this.$container = $(container2);
        dT_Swiper($container);
    }
    return featuredCollection;
}(), theme.indexProductCarousel = function () {
    function indexProductCarousel(container2) {
        var $container = this.$container = $(container2),
            sectionId = "home-product-carousel-section";
        dT_Swiper($container), dt_initQuickShop(sectionId), dt_activateQuickShop();
    }
    return indexProductCarousel;
}(), theme.Brands = function () {
    function Brands(container2) {
        var $container = this.$container = $(container2),
            sectionId = "brand-logos-section";
        dT_Swiper($container);
    }
    return Brands;
}(), theme.DealCarousel = function () {
    function DealCarousel(container2) {
        var $container = this.$container = $(container2),
            sectionId = "home-product-deal-carousel-section";
        dT_Swiper($container);
    }
    return DealCarousel;
}(), theme.imageGallery = function () {
    function imageGallery(container2) {
        var $container = this.$container = $(container2),
            sectionId = "home-image-gallery";
        dT_Swiper($container);
    }
    return imageGallery;
}(), theme.instaFeed = function () {
    function instaFeed(container2) {
        var $container = this.$container = $(container2),
            sectionId = "insta-feed-section";
        dT_Swiper($container);
    }
    return instaFeed;
}(), theme.featuredBlog = function () {
    function featuredBlog(container2) {
        var $container = this.$container = $(container2),
            sectionId = "featured-blog-section";
        dT_Swiper($container);
    }
    return featuredBlog;
}(), theme.DealSlick = function () {
    function DealSlick(container2) {
        var $container = this.$container = $(container2),
            sectionId = "product-grid-item-thumb-carousel";
        dT_Slick($container);
    }
    return DealSlick;
}(), theme.Testimonials = function () {
    function Testimonials(container2) {
        var $container = this.$container = $(container2),
            sectionId = "testimonials-section";
        dT_Swiper($container);
    }
    return Testimonials;
}(), theme.productBlockCarousel = function () {
    function productBlockCarousel(container2) {
        var $container = this.$container = $(container2),
            sectionId = "home-blockCarousel-section";
        dT_Swiper($container), dt_initQuickShop(sectionId), dt_activateQuickShop();
    }
    return productBlockCarousel;
}(), theme.blogPage = function () {
    function blogPage(container2) {
        var $container = this.$container = $(container2),
            sectionId = "main-blog-template";
        dt_initQuickShop(sectionId), dt_activateQuickShop();
    }
    return blogPage;
}(), theme.isoProduct = function () {
    function isoProduct(container2) {
        var $container = this.$container = $(container2),
            sectionId = "home-isotope-products";
        dt_initQuickShop(sectionId), dt_activateQuickShop(), console.log(sectionId);
    }
    return isoProduct;
}(), theme.searchPage = function () {
    function searchPage(container2) {
        var $container = this.$container = $(container2),
            sectionId = "search-page";
        dt_initQuickShop(sectionId), dt_activateQuickShop();
    }
    return searchPage;
}(), theme.tabGrid = function () {
    function tabGrid(container2) {
        var $container = this.$container = $(container2),
            sectionId = "home-tab-grid";
        dt_initQuickShop(sectionId), dt_activateQuickShop();
    }
    return tabGrid;
}(), theme.HomeSlideshow = function () {
    function HomeSlideshow(container2) {
        var $container = this.$container = $(container2),
            sectionId = this.sectionId = $container.attr("data-section-id"),
            sliderActive = this.sliderActive = $("#home-slider-" + sectionId).length,
            sliderSpeed = $container.attr("data-animation-speed"),
            sliderAuto = $container.attr("data-autoPlay");
        if (sliderAuto == "true") var autoplay = sliderSpeed > 0 ? {
            delay: +sliderSpeed
        } : !1;
        else autoplay = "false";
        var slidesCount = $("#home-slider-" + sectionId + " .swiper-slide").length;
        if (slidesCount > 1) var loop = !1,
            simulateTouch = !0;
        else var loop = !1,
            simulateTouch = !1;
        var dtSwiper = this.dtSwiper = new Swiper("#home-slider-" + sectionId, {
            navigation: {
                nextEl: "#swiper-button-next-" + sectionId,
                prevEl: "#swiper-button-prev-" + sectionId
            },
            direction: "horizontal",
            loop: loop,
            simulateTouch: simulateTouch,
            pagination: {
                el: "#swiper-pagination-" + sectionId,
                clickable: !0
            },
            autoplay: autoplay,
            autoHeight: !0
        });
    }
    return HomeSlideshow;
}(), theme.HomeSlideshow.prototype = _.assignIn({}, theme.HomeSlideshow.prototype, {
    onBlockSelect: function (evt) {
        var sectionId = this.sectionId,
            slideIndex = $(evt.target).data("index"),
            dtSwiper = this.dtSwiper,
            dtSwiperMobile = this.dtSwiperMobile;
        dtSwiper.slideTo(slideIndex, 1500, !1), dtSwiper.autoplay.stop();
    },
    onBlockDeselect: function () {
        var sectionId = this.sectionId,
            dtSwiper = this.dtSwiper,
            dtSwiperMobile = this.dtSwiperMobile;
        dtSwiper.autoplay.start();
    }
}), theme.ProductPage = function () {
    var defaults = {
        sliderActive: !1,
        zoomEnabled: !1,
        imageSize: null,
        imageZoomSize: null,
        selectors: {
            addToCart: ".dT_AddToCart",
            addToCartText: ".dT_AddToCartText",
            optionSelector: "ProductSelect"
        }
    };

    function Product(container2) {
        var $container = this.$container = $(container2),
            sectionId = $container.attr("data-section-id"),
            TemplateType = $container.attr("data-template-style");
        this.settings = $.extend({}, defaults, {
            sectionId: sectionId,
            swiperObjects: {},
            selectors: {
                unitPrice: ".unitPrice-" + sectionId,
                originalSelectorId: "ProductSelect-" + sectionId,
                addToCart: ".dT_AddToCart",
                productPrice: "#ProductPrice-" + sectionId + " span",
                comparePrice: "#ComparePrice-" + sectionId + " span",
                addToCartText: ".dT_AddToCartText-" + sectionId,
                notifyForm: "#notify-block-" + sectionId,
                zoomEnabled: ".zoom-activate",
                variantSkuData: ".sku-table-" + sectionId,
                variantSku: ".variant-sku-" + sectionId,
                InventoryProduct: ".inventory-product-" + sectionId,
                variantInventory: ".variant-inventory-" + sectionId,
                inventoryAvailability: "[data-inventory-availability]"
            }
        }), dt_initQuickShop(sectionId), dt_activateQuickShop();
        var rteVideo = $container.find(".product-single__description.rte iframe").length || !1;
        rteVideo && $container.find(".product-single__description.rte iframe").wrap("<div class='dT-video-wrapper'></div>"), dt_Quantity(sectionId), $("#ProductJson-" + sectionId).html() && (this.productSingleObject = JSON.parse(document.getElementById("ProductJson-" + sectionId).innerHTML), this.init(TemplateType), $.fn.matchHeight._update(), this.inventoryAvailability = container2.querySelector(this.settings.selectors.inventoryAvailability), this.inventoryAvailability && this._initProductStatus());
    }
    return Product.prototype = _.assignIn({}, Product.prototype, {
        isProductStatus: function () { },
        _initProductStatus: function () {
            this.ProductStatus = new theme.ProductStatus(this.inventoryAvailability), this.ProductStatus && this.initProductVariant();
        },
        onSelect: function () {
            theme.ProductVideo.youtubeApiLoaded == !0 && theme.ProductVideo.loadVideos(theme.ProductVideo.hosts.youtube);
        },
        onUnload: function (evt) {
            theme.ProductVideo.removeSectionVideos(this.settings.sectionId);
        },
        init: function (TemplateType) {
            $(".product-template__container").data("template-style") == "product-template-default" && this.dT_init_Swiper(), $(".product-template__container").data("template-style") == "product-template-gallery" && this.dT_init_Gallery(), $(".product-template__container").data("template-style") == "product-template-carousel" && this.dT_init_Carousel(), this.dT_Overrides(), this.dT_Zoom(), this.dT_Swatches(TemplateType);
        },
        dT_Overrides: function () {
            DT_THEME.productStrings = DT_THEME.productStrings || {}, $.extend(DT_THEME.strings, DT_THEME.productStrings);
        },
        dT_Zoom: function () {
            if (typeof $.zoom == "function" && this.settings.selectors.zoomEnabled.length) {
                if ($(window).width() > 767) {
                    var imageBlock = $("#slider");
                    if (imageBlock.length) {
                        var imageSlideLinks = imageBlock.find(".zoom-img-wrap");
                        imageSlideLinks.length && imageSlideLinks.each(function () {
                            var t = $(this),
                                url = t.find("img.zoom-img").data("srczoom");
                            t.find(".zoom-img-container").zoom({
                                url: url,
                                touch: !1
                            });
                        });
                    }
                }
                $(window).resize(function () {
                    if ($(window).width() > 767) {
                        var imageBlock2 = $("#slider");
                        if (imageBlock2.length) {
                            var imageSlideLinks2 = imageBlock2.find(".zoom-img-wrap");
                            imageSlideLinks2.length && imageSlideLinks2.each(function () {
                                var t = $(this),
                                    url = t.find("img.zoom-img").data("srczoom");
                                t.find(".zoom-img-container").zoom({
                                    url: url,
                                    touch: !1
                                });
                            });
                        }
                    } else {
                        var imageBlock2 = $("#slider");
                        if (imageBlock2.length) {
                            var imageSlideLinks2 = imageBlock2.find(".zoom-img-wrap");
                            imageSlideLinks2.length && imageSlideLinks2.each(function () {
                                var t = $(this);
                                t.find(".zoom-img-container").trigger("zoom.destroy");
                            });
                        }
                    }
                });
            } else return !1;
        },
        dT_Swatches: function () {
            this.$container.find(".swatch :radio").change(function () {
                var optionIndex = jQuery(this).closest(".swatch").attr("data-option-index"),
                    optionValue = jQuery(this).val().replace(/\s{2,}/g, " "),
                    VariantColor = jQuery(this).closest(".swatch-element").data("value");
                jQuery(this).closest("form").find(".single-option-selector").eq(optionIndex).val(optionValue).trigger("change"), $(".product-template__container").data("template-style") == "product-template-gallery" && $(this).parents(".product-template__container").find(".zoom-gallery").each(function () {
                    if ($(this).data("media-alt") == VariantColor) {
                        var VariantAlt = $(this).data("media-alt");
                        $(this).addClass("show"), $(this).removeClass("hidden");
                    } else $(this).addClass("hidden"), $(this).removeClass("show");
                });
            });
            for (var productJSON = this.productSingleObject, i = 0, length = productJSON.variants.length; i < length; i++) {
                var productVariants = productJSON.variants[i];
                if (productVariants.available)
                    for (var j = 0, optlength = productVariants.options.length; j < optlength; j++) {
                        var variantOption = productVariants.options[j];
                        variantOption = textToDownCase(variantOption), this.$container.find('.swatch[data-option-index="' + j + '"] .' + variantOption).removeClass("soldout").addClass("available").find(":radio").removeAttr("disabled");
                    }
            }
        },
        dT_init_Swiper: function () {
            var windowResizeFunc = function () {
                $(window).trigger("resize");
            },
                $container = this.$container,
                sectionId = this.settings.sectionId;
            if ($container.find("[data-product-media-type-video]").each(function () {
                var $el = $(this);
                theme.ProductVideo.init($el, sectionId);
            }), $(".swiper-main-" + this.settings.sectionId + " .swiper-wrapper .swiper-slide").length > 1) var useLoop = !0;
            else var useLoop = !1;
            this.settings.swiperObjects.mySwiper = new Swiper(".swiper-main-" + this.settings.sectionId, {
                direction: "horizontal",
                pagination: {
                    el: ".swiper-pagination-" + this.settings.sectionId,
                    clickable: !0
                },
                updateOnImagesReady: !0,
                spaceBetween: 0,
                slidesPerView: 1,
                roundLengths: !0,
                simulateTouch: !1,
                onImagesReady: windowResizeFunc
            });
            var gallerySwiperThumbsVert = this.settings.swiperObjects.gallerySwiperThumbsVert = new Swiper("#swiper-gallery-thumbs-vert-" + this.settings.sectionId, {
                direction: "vertical",
                initialSlide: 2,
                spaceBetween: 10,
                slidesPerView: 5,
                loop: !1,
                loopedSlides: 5,
                freeMode: !0,
                centeredSlides: !0,
                slideToClickedSlide: !0,
                updateOnImagesReady: !1,
                onImagesReady: windowResizeFunc,
                disableAutoResize: !0,
                resizeEvent: "auto"
            });
            this.settings.swiperObjects.gallerySwiperVert = new Swiper("#swiper-gallery-vert-" + this.settings.sectionId, {
                initialSlide: 2,
                spaceBetween: 10,
                slidesPerView: 1,
                loop: !1,
                roundLengths: !0,
                simulateTouch: !1
            }), typeof this.settings.swiperObjects.gallerySwiperVert.controller != "undefined" && (this.settings.swiperObjects.gallerySwiperVert.controller.control = this.settings.swiperObjects.gallerySwiperThumbsVert, this.settings.swiperObjects.gallerySwiperThumbsVert.controller.control = this.settings.swiperObjects.gallerySwiperVert);
            var gallerySwiperThumbs = this.settings.swiperObjects.gallerySwiperThumbs = new Swiper("#swiper-gallery-thumbs-" + this.settings.sectionId, {
                loop: !1,
                spaceBetween: 10,
                slidesPerView: 4,
                freeMode: !0,
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0
            });
            this.settings.swiperObjects.gallerySwiper = new Swiper("#swiper-gallery-" + this.settings.sectionId, {
                loop: !1,
                spaceBetween: 10,
                thumbs: {
                    swiper: gallerySwiperThumbs
                }
            });
        },
        dT_init_Carousel: function () {
            var windowResizeFunc = function () {
                $(window).trigger("resize");
            },
                $container = this.$container,
                sectionId = this.settings.sectionId;
            $container.find("[data-product-media-type-video]").each(function () {
                var $el = $(this);
                theme.ProductVideo.init($el, sectionId);
            }), this.settings.swiperObjects.gallerySwiper = new Swiper("#swiper-gallery-" + this.settings.sectionId, {
                loop: !0,
                spaceBetween: 10,
                effect: "coverflow",
                grabCursor: !0,
                centeredSlides: !0,
                slidesPerView: "auto",
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            });
        },
        dT_init_Gallery: function () {
            var windowResizeFunc = function () {
                $(window).trigger("resize");
            },
                $container = this.$container,
                sectionId = this.settings.sectionId;
            $container.find("[data-product-media-type-video]").each(function () {
                var $el = $(this);
                theme.ProductVideo.init($el, sectionId);
            });
        },
        initProductVariant: function () {
            if (this.productSingleObject) {
                var self2 = this,
                    productJSON = this.productSingleObject,
                    productVariantObj = productJSON.variants;
                $(".main-product-select-" + productJSON.id + " .single-option-selector").on("change", function () {
                    for (var option1 = $(".main-product-select-" + productJSON.id + " #SingleOptionSelector-0").val() || null, option2 = $(".main-product-select-" + productJSON.id + " #SingleOptionSelector-1").val() || null, option3 = $(".main-product-select-" + productJSON.id + " #SingleOptionSelector-2").val() || null, flag = !0, i2 = 0, length = productVariantObj.length; i2 < length; i2++) {
                        var productVar = productVariantObj[i2];
                        if (productVar.option1 != null && (productVar.option1 = productVar.option1.replace(/\s{2,}/g, " ")), productVar.option2 != null && (productVar.option2 = productVar.option2.replace(/\s{2,}/g, " ")), productVar.option3 != null && (productVar.option3 = productVar.option3.replace(/\s{2,}/g, " ")), option1 == productVar.option1 && option2 == productVar.option2 && option3 == productVar.option3) {
                            flag = !1, $("#ProductSelect-" + productJSON.id).val(productVar.id), self2.productVariantCallback(productVar, productJSON.id);
                            break;
                        }
                    }
                    flag && self2.productVariantCallback(null, productJSON.id);
                });
                var selectedOptionsLength = $("#ProductSelect-" + productJSON.id + " option[selected]").length,
                    optionsLength = $("#ProductSelect-" + productJSON.id).length;
                (!selectedOptionsLength || optionsLength == 1) && self2.productVariantCallback(productJSON.variants[0], productJSON.id), productJSON.options.size == 1 && productJSON.options[0] != "Title" && $(".selector-wrapper:eq(0)").prepend("<label>" + productJSON.options[0] + "</label>"), productJSON.variants.size == 1 && productJSON.variants[0].title.indexOf("Default") + 1 && $(".selector-wrapper").hide();
                var str = window.location.href;
                if (str.indexOf("?variant=") + 1) $("#ProductTemplate-" + productJSON.id).html() && (UrlTrigger = !0), $("#FeaturedProduct").html() && (home_featured_product_media = !0), $(".main-product-select-" + productJSON.id + " .single-option-selector").first().trigger("change");
                else {
                    var found_one_in_stock = !1;
                    for (variant in productJSON.variants)
                        if (productJSON.variants[variant].available && found_one_in_stock == !1) {
                            found_one_in_stock = !0;
                            for (option in productJSON.options) {
                                var i = Object.keys(productJSON.options).indexOf(option);
                                i >= 0 && $(".main-product-select-" + productJSON.id + " .single-option-selector:eq(" + i + ")").val(productJSON.variants[variant].options[i].replace(/\s{2,}/g, " ")).trigger("change");
                            }
                            $("#ProductTemplate-" + productJSON.id).html() && (UrlTrigger = !0), $("#FeaturedProduct").html() && (home_featured_product_media = !0);
                        }
                }
                this.productVariantStyles();
            }
        },
        productVariantStyles: function () {
            $(".selector-wrapper").addClass("product-form__item"), $(".single-option-selector").addClass("product-form__input");
        },
        productVariantCallback: function (variant2, selector) {
            if (variant2 && this.ProductStatus.updateContent(variant2.id), variant2 && UrlTrigger) {
                var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?variant=" + variant2.id;
                window.history.replaceState({
                    path: newurl
                }, "", newurl);
            }
            var buy_now_btn = $(this.settings.selectors.addToCart).closest("form").find(".shopify-payment-button");
            if (variant2) {
                var indexArray = [];
                $(".main-product-select-" + selector + " .single-option-selector option:selected").each(function () {
                    indexArray.push($(this).index());
                });
                for (var form = jQuery("#ProductSelect-" + selector).closest("form"), i = 0, length = variant2.options.length; i < length; i++) {
                    var num = indexArray[i],
                        radioButtonDiv = form.find('.swatch[data-option-index="' + i + '"] div.swatch-element')[num],
                        radioButton = $(radioButtonDiv).find(":radio");
                    radioButton.size() && (radioButton.get(0).checked = !0);
                }
            }
            if (variant2) {
                if (variant2.featured_image && (UrlTrigger || home_featured_product_media)) {
                    var slideId = variant2.featured_media.id;
                    $(".product-template__container").data("template-style") == "product-template-default" && (typeof this.settings.swiperObjects.gallerySwiper.controller != "undefined" ? this.settings.swiperObjects.gallerySwiper.slideTo($("#" + slideId).index()) : typeof this.settings.swiperObjects.gallerySwiperVert.controller != "undefined" && this.settings.swiperObjects.gallerySwiperVert.slideTo($("#" + slideId).index())), $(".product-template__container").data("template-style") == "product-template-carousel" && (typeof this.settings.swiperObjects.gallerySwiper.controller != "undefined" ? this.settings.swiperObjects.gallerySwiper.slideTo($("#" + slideId).index()) : typeof this.settings.swiperObjects.gallerySwiperVert.controller != "undefined" && this.settings.swiperObjects.gallerySwiperVert.slideTo($("#" + slideId).index()));
                }
                if ($(this.settings.selectors.productPrice).html(Shopify.formatMoney(variant2.price, DT_THEME.moneyFormat)), variant2.unit_price ? $(this.settings.selectors.unitPrice).html(setUnitPrice(variant2)) : $(this.settings.selectors.unitPrice).html(""), variant2.compare_at_price > variant2.price ? ($(this.settings.selectors.comparePrice).html(Shopify.formatMoney(variant2.compare_at_price, DT_THEME.moneyFormat)).removeClass("hide"), $(this.settings.selectors.price).addClass(this.settings.selectors.saleClasses), $(this.settings.selectors.saleLabel).removeClass("hide"), $(this.settings.selectors.comparePrice).closest("li").removeClass("hide")) : ($(this.settings.selectors.comparePrice).addClass("hide"), $(this.settings.selectors.comparePrice).closest("li").addClass("hide"), $(this.settings.selectors.saleLabel).addClass("hide"), $(this.settings.selectors.price).removeClass(this.settings.selectors.saleClasses)), variant2.available ? ($(this.settings.selectors.notifyForm).hide(), $(this.settings.selectors.addToCart).prop("disabled", !1), $(this.settings.selectors.addToCartText).text(DT_THEME.strings.addToCart), buy_now_btn.show()) : ($(this.settings.selectors.notifyForm).show(), $(this.settings.selectors.addToCart).prop("disabled", !0), $(this.settings.selectors.addToCartText).text(DT_THEME.strings.soldOut), buy_now_btn.hide()), jQuery.type(variant2) !== "null") {
                    if (variantSkuData = $(this.settings.selectors.variantSkuData), variantSku = $(this.settings.selectors.variantSku), InventoryProduct = $(this.settings.selectors.InventoryProduct), variantInventory = $(this.settings.selectors.variantInventory), variant2.sku && variantSkuData ? (variantSkuData.addClass("attributes-visible").removeClass("attributes-hidden"), variantSku.html(variant2.sku), variantSkuData.is(":last-child") && variantSkuData.prev("li").removeAttr("style")) : (variantSkuData.addClass("attributes-hidden").removeClass("attributes-visible"), variantSku.html(""), variantSkuData.is(":last-child") && variantSkuData.prev("li").css("padding-bottom", "0")), InventoryProduct) {
                        InventoryProduct.addClass("attributes-visible").removeClass("attributes-hidden");
                        for (var main_product_select = $("#ProductSelect-" + selector), optionsLength = main_product_select.find("option").length, i = 0; i <= optionsLength; i++) {
                            var currentOption = main_product_select.find("option:nth-child(" + i + ")");
                            if (currentOption.val() == variant2.id) {
                                var variant_inventory_management = currentOption.attr("data-inventory_management"),
                                    variant_inventory_policy = currentOption.attr("data-inventory_policy"),
                                    variant_inventory_quantity = currentOption.attr("data-inventory_quantity");
                                break;
                            } else var variant_inventory_management = "",
                                variant_inventory_policy = "",
                                variant_inventory_quantity = "";
                        }
                        variant_inventory_management == "shopify" && variant_inventory_policy != "continue" ? variant_inventory_quantity > 0 ? (variantInventory.html("<span class=in-stock>In stock!</span>"), $(".dt-sc-qty").show()) : (variantInventory.html("<span class=out-of-stock>Sorry!  This product is currently out of stock.</span>"), $(".dt-sc-qty").hide()) : (variantInventory.html("<span class=in-stock>In stock!</span>"), $(".dt-sc-qty").show());
                    }
                }
                this.$container.find(".product-price").show(), $(this.settings.selectors.addToCart).show(), this.$container.find(".product_payments_btns").show(), variant2.available && ($(this.settings.selectors.addToCart).prop("disabled", !1), $(".dt-sc-qty").show());
            } else this.$container.find(".product-price").show(), this.$container.find(".product_payments_btns").show(), $(this.settings.selectors.addToCart).prop("disabled", !0), $(this.settings.selectors.addToCartText).text(DT_THEME.strings.unavailable), $(this.settings.selectors.comparePrice).addClass("hide"), $(this.settings.selectors.comparePrice).closest("li").addClass("hide"), $(this.settings.selectors.saleLabel).addClass("hide"), $(this.settings.selectors.price).removeClass(this.settings.selectors.saleClasses), $(this.settings.selectors.productPrice).html("Unavailable"), buy_now_btn.hide(), $(".dt-sc-qty").hide(), $(this.settings.selectors.notifyForm).show(), InventoryProduct && variantInventory.html("<span class=out-of-stock>Sold Out</span>");
        }
    }), Product;
}();
var swiperArr = [],
    container = $("#container");
theme.CollectionPage = function () {
    function CollectionPage(container2) {
        var $container = this.$container = $(container2),
            sectionId = this.sectionId = $container.attr("data-section-id"),
            container2 = $("#container"),
            mp = $.magnificPopup.instance,
            swiperCarousel2, swiperCarouselThumbs;
        dt_initQuickShop(sectionId), $(".variant-option-color").each(function () {
            $(this).children().length == 0 ? $(this).remove() : $(this).show();
        }), $(".variant-option-size").each(function () {
            $(this).children().length == 0 ? $(this).remove() : $(this).show();
        }), dt_activateQuickShop();
    }
    return CollectionPage;
}(), theme.CollectionPage.prototype = _.assignIn({}, theme.CollectionPage.prototype, {
    onSelect: function () {
        var mp = $.magnificPopup.instance;
        typeof mp != "undefined" && mp.close();
    }
});

function dt_QuickCallback(variant2, selector) {
    var productPanel = $('div.quick-shop-modal[data-id="' + selector + '"]');
    if (variant2 && variant2.featured_image) {
        var slideId = variant2.featured_media.id,
            slide = $("#" + slideId),
            slideIndex = slide.index();
        swiperCarousel = new Swiper(".quick-swiper-container"), swiperCarousel.slideTo(slideIndex);
        var slideImg = slide.find("img"),
            src = slideImg.attr("data-original");
    }
    if (variant2) {
        var indexArray = [];
        $("[data-id='" + selector + "'] .single-option-selector option:selected").each(function () {
            indexArray.push($(this).index());
        });
        for (var form = jQuery("#dt-sc-quick-ProductSelect-" + selector).closest("form"), i = 0, length = variant2.options.length; i < length; i++) {
            var num = indexArray[i],
                radioButtonDiv = form.find('.swatch[data-option-index="' + i + '"] div.swatch-element')[num],
                radioButton = $(radioButtonDiv).find(":radio");
            radioButton.size() && (radioButton.get(0).checked = !0);
        }
    }
    var addToCart = productPanel.find(".dT-AddtoCart"),
        addtoCartText = addToCart.find("span"),
        productPrice = productPanel.find(".product-price-current span"),
        unitPrice = productPanel.find(".unitPrice"),
        comparePrice = productPanel.find(".product-price-list span");
    variant2 ? (variant2.available ? (addToCart.removeClass("disabled").prop("disabled", !1).val("Add to Cart"), addtoCartText.text("Add to Cart")) : (addToCart.val("Sold Out").addClass("disabled").prop("disabled", !0), addtoCartText.html("Sold Out")), variant2.unit_price ? unitPrice.html(setUnitPrice(variant2)) : unitPrice.html(""), productPrice.length && productPrice.html(Shopify.formatMoney(variant2.price, DT_THEME.moneyFormat)), comparePrice.length && (variant2.compare_at_price > variant2.price ? (comparePrice.html(Shopify.formatMoney(variant2.compare_at_price, DT_THEME.moneyFormat)).show(), comparePrice.closest("li").show()) : (comparePrice.html(""), comparePrice.closest("li").hide(), comparePrice.hide())), productPanel.find(".product-price").show(), addToCart.show(), productPanel.find(".product_payments_btns").show(), variant2.available && addToCart.prop("disabled", !1)) : (addToCart.val("Unavailable").show().addClass("disabled").prop("disabled", !0), addtoCartText.html("Sold Out"), comparePrice.html(""), comparePrice.closest("li").hide(), comparePrice.hide(), productPrice.html("Unavailable"), productPanel.find(".product-price").show(), productPanel.find(".product_payments_btns").show());
}

function dt_initQuickShop(sectionId) {
    var sectionContainer = $("[data-section-id='" + sectionId + "']");
    sectionContainer.find(".quick-view-btn").on("click", function (e) {
        if ($(this).hasClass("quick-view-btn-opened")) $(this).removeClass("quick-view-btn-opened");
        else {
            var productId = $(this).attr("data-product-id"),
                quick_view_url = $(this).data("url"),
                btn = $(this);
            $("#quick-shop-modal-inner-" + productId).load(quick_view_url, function (resp) {
                dt_QuickShopWindow(btn, productId), dt_QuickShopWindowReady(productId, sectionId);
            });
        }
    });
}
function dt_QuickShopWindowReady(productId, sectionId) {
    var quickShopScreen = $("#product-quick-shop-" + productId);
    if ($("#dt_QuickViewJson-" + productId).html()) {
        quickShopScreen.find(".swatch :radio").on("change", function () {
            var optionIndex = jQuery(this).closest(".swatch").attr("data-option-index"),
                optionValue = jQuery(this).val().replace(/\s{2,}/g, " ");
            jQuery(this).closest("form").find(".single-option-selector").eq(optionIndex).val(optionValue).trigger("change");
        });
        var product = JSON.parse(document.getElementById("dt_QuickViewJson-" + productId).innerHTML);
        $(".quick-view-selector-" + product.id).on("change", function () {
            for (var $form = $(this).closest("form"), productVariantObj = product.variants, option1 = $form.find(".SingleOptionSelector-0").val() || null, option2 = $form.find(".SingleOptionSelector-1").val() || null, option3 = $form.find(".SingleOptionSelector-2").val() || null, flag = !0, i2 = 0, length2 = productVariantObj.length; i2 < length2; i2++) {
                var productVar = productVariantObj[i2];
                if (productVar.option1 != null && (productVar.option1 = productVar.option1.replace(/\s{2,}/g, " ")), productVar.option2 != null && (productVar.option2 = productVar.option2.replace(/\s{2,}/g, " ")), productVar.option3 != null && (productVar.option3 = productVar.option3.replace(/\s{2,}/g, " ")), option1 == productVar.option1 && option2 == productVar.option2 && option3 == productVar.option3) {
                    flag = !1, $("#dt-sc-quick-" + product.id).val(productVar.id), dt_QuickCallback(productVar, product.id);
                    break;
                }
            }
            flag && dt_QuickCallback(null, product.id), $form.find(".variant-push").val(productVar.id);
        }), product.variants.length && product.variants[0].title.indexOf("Default") >= 0 && quickShopScreen.find(".selector-wrapper").hide();
        for (var productJSON = product, i = 0, length = productJSON.variants.length; i < length; i++) {
            var productVariants = productJSON.variants[i];
            if (productVariants.available)
                for (var j = 0, optlength = productVariants.options.length; j < optlength; j++) {
                    var variantOption = productVariants.options[j];
                    variantOption = textToDownCase(variantOption), quickShopScreen.find('.swatch[data-option-index="' + j + '"] .' + variantOption).removeClass("soldout").addClass("available").find(":radio").removeAttr("disabled");
                }
        }
        var indexArray = [],
            productVariantOptions = product.variants;
        $("[data-id=" + product.id + "] .single-option-selector option:selected").each(function () {
            indexArray.push($(this).index());
        });
        var form = jQuery("#dt-sc-quick-" + product.id).closest("form"),
            variantIndex = jQuery("#dt-sc-quick-" + product.id + " option:selected").index();
        if (variantIndex >= 0)
            for (var variant2 = productVariantOptions[variantIndex], i = 0, length = variant2.options.length; i < length; i++) {
                var num = indexArray[i],
                    radioButtonDiv = form.find('.swatch[data-option-index="' + i + '"] div.swatch-element')[num],
                    radioButton = $(radioButtonDiv).find(":radio");
                radioButton.size() && (radioButton.get(0).checked = !0);
            }
        dt_Quantity(productId);
    }
}

function dt_QuickShopWindow(btn, productId) {
    var windowResizeFunc = function () {
        $(window).trigger("resize");
    };
    setTimeout(function () {
        var $container = $("#quick-shop-modal-inner-" + productId),
            sectionId = productId;
        $container.find("[data-product-media-type-video]").each(function () {
            var $el = $(this);
            theme.ProductVideo.init($el, sectionId);
        }), theme.ProductVideo.youtubeApiLoaded && theme.ProductVideo.loadVideos(theme.ProductVideo.hosts.youtube), swiperCarousel = new Swiper(".quick-swiper-" + productId, {
            direction: "horizontal",
            navigation: {
                nextEl: "#swiper-" + productId + "-next",
                prevEl: "#swiper-" + productId + "-prev"
            },
            simulateTouch: !1,
            updateOnImagesReady: !0,
            on: {
                transitionEnd: function () {
                    var slider = this,
                        index = slider.activeIndex,
                        current_index = slider.previousIndex,
                        $newMedia = $(slider.$el).find(".swiper-slide").eq(index).find("[data-product-single-media-wrapper]"),
                        $currentMedia = $(".quick-swiper-container").find("[data-product-single-media-wrapper]");
                    if ($currentMedia.trigger("mediaHidden").removeAttr("style"), $newMedia.css("visibility", "visible").trigger("mediaVisible"), theme.Helpers.isTouch()) return !1;
                    $newMedia.find("model-viewer").length ? $newMedia.find("model-viewer").focus() : $newMedia.find("[tabindex='0']").length ? $newMedia.find("[tabindex]").focus() : setTimeout(function () {
                        $newMedia.focus();
                    }, 100);
                }
            }
        });
    }, 500);
}

function dt_Quantity(sectionId) {
    $(".btn-number-" + sectionId).click(function (e) {
        e.preventDefault(), fieldName = $(this).attr("data-field"), type = $(this).attr("data-type");
        var input = $(this).closest(".product-form__item--quantity").find("input[name='quantity']"),
            currentVal = parseInt(input.val());
        isNaN(currentVal) ? input.val(0) : type == "minus" ? currentVal > 0 && input.val(currentVal - 1).change() : type == "plus" && input.val(currentVal + 1).change();
    }), $(".input-number-" + sectionId).focusin(function () {
        $(this).data("oldValue", $(this).val());
    }), $(".input-number-" + sectionId).change(function () {
        minValue = 0, maxValue = 999, valueCurrent = parseInt($(this).val()), name = $(this).attr("name"), valueCurrent >= minValue ? $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr("disabled") : $(this).val($(this).data("oldValue")), valueCurrent <= maxValue ? $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr("disabled") : $(this).val($(this).data("oldValue"));
    });
}
theme.Helpers = function () {
    var touchDevice = !1;

    function setTouch() {
        touchDevice = !0, $("body").addClass("body-touch-device");
    }

    function isTouch() {
        return touchDevice;
    }
    return {
        setTouch: setTouch,
        isTouch: isTouch
    };
}();

function onYouTubeIframeAPIReady() {
    theme.ProductVideo.loadVideos(theme.ProductVideo.hosts.youtube), theme.ProductVideo.youtubeApiLoaded = !0;
}
theme.ProductVideo = function () {
    var videos = {},
        hosts = {
            html5: "html5",
            youtube: "youtube"
        },
        selectors = {
            productMediaWrapper: "[data-product-single-media-wrapper]"
        },
        attributes = {
            enableVideoLooping: "enable-video-looping",
            videoId: "video-id"
        };

    function init(videoContainer, sectionId) {
        if (videoContainer.length) {
            var videoElement = videoContainer.find("iframe, video")[0],
                mediaId = videoContainer.data("mediaId");
            if (videoElement) {
                videos[mediaId] = {
                    mediaId: mediaId,
                    sectionId: sectionId,
                    host: hostFromVideoElement(videoElement),
                    container: videoContainer,
                    element: videoElement,
                    ready: function () {
                        createPlayer(this);
                    }
                };
                var video = videos[mediaId];
                switch (video.host) {
                    case hosts.html5:
                        window.Shopify.loadFeatures([{
                            name: "video-ui",
                            version: "1.0",
                            onLoad: setupPlyrVideos
                        }]), theme.LibraryLoader.load("plyrShopifyStyles");
                        break;
                    case hosts.youtube:
                        $("#youtube-sdk").length || theme.LibraryLoader.load("youtubeSdk");
                        break;
                }
            }
        }
    }

    function setupPlyrVideos(errors) {
        if (errors) {
            fallbackToNativeVideo();
            return;
        }
        loadVideos(hosts.html5);
    }

    function createPlayer(video) {
        if (!video.player) {
            var productMediaWrapper = video.container.closest(selectors.productMediaWrapper),
                enableLooping = productMediaWrapper.data(attributes.enableVideoLooping);
            switch (video.host) {
                case hosts.html5:
                    video.player = new Shopify.Plyr(video.element, {
                        loop: {
                            active: enableLooping
                        }
                    });
                    break;
                case hosts.youtube:
                    var videoId = productMediaWrapper.data(attributes.videoId);
                    video.player = new YT.Player(video.element, {
                        videoId: videoId,
                        events: {
                            onStateChange: function (event) {
                                event.data === 0 && enableLooping && event.target.seekTo(0);
                            }
                        }
                    });
                    break;
            }
            productMediaWrapper.on("mediaHidden xrLaunch", function () {
                video.player && (video.host === hosts.html5 && video.player.pause(), video.host === hosts.youtube && video.player.pauseVideo && video.player.pauseVideo());
            }), productMediaWrapper.on("mediaVisible", function () {
                theme.Helpers.isTouch() || video.player && (video.host === hosts.html5 && video.player.play(), video.host === hosts.youtube && video.player.playVideo && video.player.playVideo());
            });
        }
    }

    function hostFromVideoElement(video) {
        return video.tagName === "VIDEO" ? hosts.html5 : video.tagName === "IFRAME" && /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(video.src) ? hosts.youtube : null;
    }

    function loadVideos(host) {
        for (var key in videos)
            if (videos.hasOwnProperty(key)) {
                var video = videos[key];
                video.host === host && video.ready();
            }
    }

    function fallbackToNativeVideo() {
        for (var key in videos)
            if (videos.hasOwnProperty(key)) {
                var video = videos[key];
                if (video.nativeVideo) continue;
                video.host === hosts.html5 && (video.element.setAttribute("controls", "controls"), video.nativeVideo = !0);
            }
    }

    function removeSectionVideos(sectionId) {
        for (var key in videos)
            if (videos.hasOwnProperty(key)) {
                var video = videos[key];
                video.sectionId === sectionId && (video.player && video.player.destroy(), delete videos[key]);
            }
    }
    return {
        init: init,
        hosts: hosts,
        loadVideos: loadVideos,
        removeSectionVideos: removeSectionVideos
    };
}(), theme.faqBlocks = function () {
    $(document).on("click", ".dt-sc-accordion-btn", function () {
        if (!open_accordion) {
            open_accordion = !0;
            var active_accordion = $(this).index(".dt-sc-accordion-btn"),
                active_accordion_height = $(".dt-sc-accordion-content-inner").eq(active_accordion).outerHeight();
            $(".dt-sc-accordion-btn h5").removeClass("active"), $(this).find("h5").addClass("active"), $(".dt-sc-accordion-content").stop().animate({
                height: 0
            }, transition), $(".dt-sc-accordion-content").eq(active_accordion).stop().animate({
                height: active_accordion_height
            }, transition), setTimeout(function () {
                open_accordion = !1;
            }, transition);
        }
    });
    var transition = 500,
        open_accordion = !1;
}(), theme.notify = function () {
    $(document).on("click", "#notify-me", function () {
        return $("#notify-me-wrapper").fadeIn(), !1;
    });
}(), $(document).ready(function () {
    var sections = new theme.Sections;
    sections.register("product-template", theme.ProductPage), sections.register("slideshow-section", theme.HomeSlideshow), sections.register("collection-template", theme.CollectionPage), sections.register("store-availability", theme.ProductStatus), sections.register("featured-collection-section", theme.featuredCollection), sections.register("testimonials-section", theme.Testimonials), sections.register("home-image-gallery", theme.imageGallery), sections.register("brand-logos-section", theme.Brands), sections.register("insta-feed-section", theme.instaFeed), sections.register("home-product-deal-carousel-section", theme.DealCarousel), sections.register("product-grid-item-thumb-carousel", theme.DealSlick), sections.register("faq-block-section", theme.faqBlocks), sections.register("featured-blog-section", theme.featuredBlog), sections.register("home-isotope-products", theme.isoProduct), sections.register("home-product-carousel-section", theme.indexProductCarousel), sections.register("home-blockCarousel-section", theme.productBlockCarousel), sections.register("notify", theme.notify), sections.register("search-page", theme.searchPage), sections.register("main-blog-template", theme.blogPage), sections.register("home-tab-grid", theme.tabGrid), sections.register("home-tab-sidebar-collection", theme.tabGrid), sections.register("number-counter-section", theme.numberCounter), $(document).on("shopify:section:select", function (e) {
        var $target = $(e.target),
            sectionID = e.originalEvent.detail.sectionId,
            $handle = $("#shopify-section-handle-" + sectionID),
            handle_class = $handle.length ? $handle.attr("data-bg-type") : null;
        handle_class && $target.addClass(handle_class);
    });
    var selectors = {
        image: "[data-image]",
        lazyloaded: ".lazyloaded"
    };

    function onLoadHideLazysizesAnimation() {
        var alreadyLazyloaded = document.querySelectorAll(".lazyloaded");
        alreadyLazyloaded.forEach(function (image) {
            removeImageLoadingAnimation(image);
        });
    }
    onLoadHideLazysizesAnimation();
});

function removeImageLoadingAnimation(image) {
    var imageWrapper = image.hasAttribute("data-image-loading-animation") ? image : image.closest("[data-image-loading-animation]");
    imageWrapper && imageWrapper.removeAttribute("data-image-loading-animation");
}
$(document).one("touchstart", function () {
    theme.Helpers.setTouch();
}), $.cookie("announcementCookie") == "closed" && $(".announcement-bar").hide(), $(".announcement-bar a.close").bind("click", function () {
    $(".announcement-bar").css({
        height: "0",
        padding: "0",
        opacity: "0",
        "z-index": "-1"
    }), $.cookie("announcementCookie", "closed", {
        expires: 1,
        path: "/"
    });
}), $(document).ready(function ($2) {
    $2(".announcement-bar").each(function () {
        $2(this).css({
            height: $2(this).outerHeight() + "px"
        });
    });
}), $(".sticky-bar").length > 0 && ($.cookie("stickyCookie") == "closed" && $(".sticky-bar").hide(), $("#sticktClose").bind("click", function () {
    $(".sticky-bar").css({
        height: "0",
        padding: "0",
        opacity: "0",
        "z-index": "-1"
    }), $.cookie("stickyCookie", "closed", {
        expires: 1,
        path: "/"
    });
}), $(document).ready(function ($2) {
    $2(".sticky-bar").each(function () {
        $2(this).css({});
    });
}));

