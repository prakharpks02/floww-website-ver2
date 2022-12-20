(window.webpackJsonp = window.webpackJsonp || []).push([
    [34, 4, 7, 12, 15, 22, 24, 27, 28], {
        384: function (t, e, r) {
            var content = r(386);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(81).default)("6b96f1e6", content, !0, {
                sourceMap: !1
            })
        },
        385: function (t, e, r) {
            "use strict";
            r(384)
        },
        386: function (t, e, r) {
            var l = r(80)(!1);
            l.push([t.i, ".button-primary:active{background-color:#335ecc}", ""]), t.exports = l
        },
        387: function (t, e, r) {
            "use strict";
            r.r(e);
            var l = {
                    props: {
                        hideDetails: {
                            type: Boolean,
                            default: !1
                        },
                        loading: {
                            type: Boolean,
                            default: !1
                        },
                        error: {
                            type: String,
                            default: ""
                        },
                        hint: {
                            type: String,
                            default: ""
                        },
                        hintColor: {
                            type: String,
                            default: "text-font-secondary"
                        }
                    }
                },
                n = r(13),
                component = Object(n.a)(l, (function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "relative flex flex-col"
                    }, [e("div", {
                        staticClass: "relative flex flex-col"
                    }, [e("input", t._b({
                        staticClass: "px-4 py-2 text-sm font-medium border rounded-l",
                        class: [t.error ? " border-primary-red" : "border-lines-primary ", {
                            "pr-10": t.loading
                        }],
                        on: {
                            change: function (e) {
                                return t.$emit("change", e.target.value)
                            },
                            input: function (e) {
                                return t.$emit("input", e.target.value)
                            },
                            keydown: function (e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.$emit("change", e.target.value)
                            }
                        }
                    }, "input", t.$attrs, !1)), t._v(" "), t.loading ? e("AppSpinner", {
                        staticClass: "absolute",
                        staticStyle: {
                            right: "10px",
                            top: "12px"
                        }
                    }) : t._e()], 1), t._v(" "), t.hideDetails ? t._e() : e("div", {
                        staticClass: "static bottom-0 left-0 leading-6 min-h-6"
                    }, [e("transition", {
                        attrs: {
                            name: "bounceIn",
                            mode: "out-in"
                        }
                    }, [t.error ? e("div", {
                        key: 1,
                        staticClass: "flex"
                    }, [e("AppIcon", {
                        attrs: {
                            src: "/images/icons/deny.svg"
                        }
                    }), t._v(" "), e("span", {
                        staticClass: "text-xs font-medium text-primary-red"
                    }, [t._v(t._s(t.error))])], 1) : t.hint && !t.error ? e("div", {
                        key: 2,
                        staticClass: "flex items-center"
                    }, [e("span", {
                        staticClass: "text-xs font-medium",
                        class: [t.hintColor]
                    }, [t._v(t._s(t.hint))])]) : t._e()])], 1)])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                AppSpinner: r(237).default,
                AppIcon: r(236).default
            })
        },
        388: function (t, e, r) {
            "use strict";
            r.r(e);
            r(238);
            var l = {
                    props: {
                        type: {
                            type: String,
                            default: "button"
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        },
                        small: {
                            type: Boolean,
                            default: !1
                        },
                        rounded: {
                            type: Boolean,
                            default: !1
                        }
                    }
                },
                n = (r(385), r(13)),
                component = Object(n.a)(l, (function () {
                    var t = this;
                    return (0, t._self._c)("button", t._g(t._b({
                        staticClass: "text-sm font-semibold text-white whitespace-no-wrap transition-all duration-150 border button-primary bg-primary-blue border-primary-blue",
                        class: [t.small ? "px-2 py-1" : "px-4 py-2", {
                            "cursor-not-allowed text-opacity-50": t.disabled,
                            "hover:text-white hover:bg-primary-blue-hover hover:border-primary-blue-hover": !t.disabled,
                            rounded: t.rounded
                        }],
                        attrs: {
                            type: t.type,
                            disabled: t.disabled
                        }
                    }, "button", t.$attrs, !1), t.$listeners), [t._t("default", (function () {
                        return [t._v("Button")]
                    }))], 2)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        389: function (t, e, r) {
            "use strict";
            r.r(e);
            var l = {
                    setup: function () {}
                },
                n = r(13),
                component = Object(n.a)(l, (function () {
                    var t = this,
                        e = t._self._c;
                    return e("article", {
                        staticClass: "relative"
                    }, [e("div", {
                        staticClass: "mx-auto container-1080"
                    }, [e("div", {
                        staticClass: "grid grid-cols-12 px-8 bg-white md:px-16 lg:border lg:border-gray-50 lg:p-12 lg:rounded lg:shadow-lg lg:relative",
                        staticStyle: {
                            top: "96px"
                        }
                    }, [t._m(0), t._v(" "), e("form", {
                        staticClass: "flex items-center mt-8 lg:mt-0 col-span-full lg:col-span-5",
                        attrs: {
                            id: "mc-embedded-subscribe-form",
                            action: "https://instadapp.us10.list-manage.com/subscribe/post?u=b6177a0338159bed90b46c796&id=d39fc1930e",
                            method: "post",
                            name: "mc-embedded-subscribe-form",
                            target: "_blank",
                            novalidate: ""
                        }
                    }, [e("AppInput", {
                        staticClass: "w-3/5 rounded-none",
                        attrs: {
                            id: "mce-EMAIL",
                            name: "EMAIL",
                            type: "email",
                            "hide-details": "",
                            placeholder: "Your Email"
                        }
                    }), t._v(" "), t._m(1), t._v(" "), e("AppBtnPrimary", {
                        staticClass: "w-2/5 rounded-r",
                        attrs: {
                            type: "submit"
                        }
                    }, [t._v("Step Inside")])], 1)])])])
                }), [function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "col-span-full lg:col-span-7"
                    }, [e("h2", {
                        staticClass: "text-3xl font-bold leading-8 text-center lg:text-left"
                    }, [t._v("Get your stories delivered")]), t._v(" "), e("p", {
                        staticClass: "mt-6 text-lg text-center text-font-quaternary lg:text-left"
                    }, [t._v("\n          Best way to stay connected with our progress.\n        ")])])
                }, function () {
                    var t = this._self._c;
                    return t("div", {
                        staticStyle: {
                            position: "absolute",
                            left: "-5000px"
                        },
                        attrs: {
                            "aria-hidden": "true"
                        }
                    }, [t("input", {
                        attrs: {
                            type: "text",
                            name: "b_b6177a0338159bed90b46c796_d39fc1930e",
                            tabindex: "-1",
                            value: ""
                        }
                    })])
                }], !1, null, "36cd39a0", null);
            e.default = component.exports;
            installComponents(component, {
                AppInput: r(387).default,
                AppBtnPrimary: r(388).default
            })
        },
        400: function (t, e, r) {
            var content = r(410);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(81).default)("12843f95", content, !0, {
                sourceMap: !1
            })
        },
        401: function (t, e, r) {
            var content = r(412);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(81).default)("8d7f54de", content, !0, {
                sourceMap: !1
            })
        },
        409: function (t, e, r) {
            "use strict";
            r(400)
        },
        410: function (t, e, r) {
            var l = r(80)(!1);
            l.push([t.i, "@-webkit-keyframes zoomIn-0dfd239e{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomIn-0dfd239e{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}.zoomIn-enter-active[data-v-0dfd239e],.zoomIn-leave-active[data-v-0dfd239e]{-webkit-animation-name:zoomIn-0dfd239e;animation-name:zoomIn-0dfd239e;-webkit-animation-duration:.3s;animation-duration:.3s}", ""]), t.exports = l
        },
        411: function (t, e, r) {
            "use strict";
            r(401)
        },
        412: function (t, e, r) {
            var l = r(80)(!1);
            l.push([t.i, 'ul>li[data-v-aca89e78]:before{content:"";margin-right:8px;display:inline-block;height:16px;width:16px;background-image:url(/images/icons/checked.svg);background-repeat:no-repeat}ol[data-v-aca89e78]{list-style:none;counter-reset:item}li[data-v-aca89e78]{counter-increment:item}li[data-v-aca89e78]:before{margin-right:12px;content:counter(item);font-size:12px;color:#53718c;text-align:center;display:inline-block}.block-code[data-v-aca89e78]{background-color:#202c43;top:40px}@media (min-width:768px){.block-code[data-v-aca89e78]{top:0}}@media (min-width:1080px){.block-code[data-v-aca89e78]{width:540px}}', ""]), t.exports = l
        },
        423: function (t, e, r) {
            var content = r(453);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(81).default)("56612109", content, !0, {
                sourceMap: !1
            })
        },
        430: function (t, e, r) {
            "use strict";
            r.r(e);
            var l = r(27),
                n = Object(l.a)({
                    setup: function () {
                        var t = Object(l.f)(!1),
                            e = Object(l.f)(1);
                        return Object(l.m)(t, (function (t) {
                            t || e.value++
                        })), {
                            showModalVideo: t,
                            rerender: e
                        }
                    }
                }),
                o = (r(409), r(13)),
                component = Object(o.a)(n, (function () {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("article", {
                        staticClass: "relative overflow-hidden bg-white"
                    }, [e("div", {
                        staticClass: "relative items-center justify-between text-center container-1080 md:flex md:text-left"
                    }, [t._m(0), t._v(" "), e("div", {
                        staticClass: "w-full mt-10 md:mt-0 md:w-1/2 md:ml-12"
                    }, [e("img", {
                        staticClass: "relative z-30 object-contain cursor-pointer",
                        attrs: {
                            src: "/images/homepage-video-poster.png",
                            alt: "Instadapp Protocol: Extensible Modular DeFi Middleware"
                        },
                        on: {
                            click: function (e) {
                                t.showModalVideo = !0
                            }
                        }
                    })])]), t._v(" "), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.showModalVideo,
                            expression: "showModalVideo"
                        }],
                        staticClass: "fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-opacity-30 bg-primary-dark",
                        attrs: {
                            "aria-labelledby": "modal-title",
                            role: "dialog",
                            "aria-modal": "true",
                            "aria-hidden": "true"
                        },
                        on: {
                            click: function (e) {
                                t.showModalVideo = !1
                            }
                        }
                    }, [e("transition", {
                        attrs: {
                            name: "zoomIn",
                            appear: ""
                        }
                    }, [e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.showModalVideo,
                            expression: "showModalVideo"
                        }],
                        key: t.rerender,
                        staticClass: "flex flex-grow max-w-screen-lg bg-white bg-opacity-50 shadow-lg",
                        staticStyle: {
                            height: "54vw",
                            "max-height": "75%"
                        }
                    }, [e("iframe", {
                        staticClass: "flex-1",
                        attrs: {
                            height: "100%",
                            width: "100%",
                            src: "https://www.youtube.com/embed/ljOaetVKHK8",
                            title: "YouTube video player",
                            frameborder: "0",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowfullscreen: ""
                        }
                    })])])], 1)])
                }), [function () {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        staticClass: "w-full md:w-1/2"
                    }, [e("h1", {
                        staticClass: "max-w-3xl mx-auto text-4xl font-bold leading-10 md:text-6xl md:leading-16"
                    }, [t._v("\n        Building "), e("span", {
                        staticClass: "text-primary-blue-dark"
                    }, [t._v("DeFi")]), t._v(" "), e("br"), t._v("\n        Infrastructure\n      ")]), t._v(" "), e("p", {
                        staticClass: "max-w-xl mx-auto mt-8 text-lg leading-7 text-font-quaternary"
                    }, [t._v("\n        The world's most advanced platform to start leveraging the full potential of Decentralised Finance.\n      ")]), t._v(" "), e("div", {
                        staticClass: "items-center w-full mt-12 md:flex md:mt-8"
                    }, [e("a", {
                        staticClass: "flex items-center bg-white justify-center flex-shrink-0 h-12 px-16 mt-4 font-semibold border-2 rounded-md md:mt-0 bg-trasparent border-primary-blue-dark text-primary-blue-dark hover:text-primary-blue-hover hover:border-primary-blue-hover",
                        staticStyle: {
                            "z-index": "100"
                        },
                        attrs: {
                            href: "https://gofloww.co/api-doc",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [t._v("\n          Learn more →\n        ")])])])
                }], !1, null, "0dfd239e", null);
            e.default = component.exports
        },
        431: function (t, e, r) {
            "use strict";
            r.r(e);
            var l = r(11),
                n = (r(49), r(27)),
                o = r(441),
                c = r(161),
                d = Object(n.a)({
                    setup: function () {
                        var t = Object(n.i)().$api,
                            e = Object(n.f)(0),
                            r = {
                                num: 0
                            },
                            d = Object(c.a)().formatUsd,
                            m = Object(n.f)(null);

                        function f() {
                            m.value.textContent = d(r.num, 0)
                        }
                        return Object(n.m)(e, (function (t) {
                            o.a.to(r, {
                                num: t,
                                duration: 1,
                                onUpdate: f
                            })
                        })), Object(n.e)(Object(l.a)(regeneratorRuntime.mark((function r() {
                            return regeneratorRuntime.wrap((function (r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.next = 2, t.stats.getTotalSupply();
                                    case 2:
                                        e.value = r.sent;
                                    case 3:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))), {
                            totalSupplyTweened: r,
                            totalSupplyElement: m,
                            totalSupply: e
                        }
                    }
                }),
                m = r(13),
                component = Object(m.a)(d, (function () {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("article", {
                        staticClass: "relative overflow-x-hidden"
                    }, [e("div", {
                        staticClass: "flex items-center justify-center container-1080"
                    }, [e("div", {
                        staticClass: "flex flex-col items-center"
                    }, [e("div", {
                        staticClass: "text-xl text-primary-grey-dark leading-none text-center sm:text-2xl md:text-2xl"
                    }, [t._v("\n        Total Value Locked\n      ")]), t._v(" "), e("div", {
                        ref: "totalSupplyElement",
                        staticClass: "my-6 text-3xl font-bold leading-none sm:my-8 sm:text-5xl md:text-6xl text-primary-blue"
                    }, [e("AppSpinner")], 1)])])])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                AppSpinner: r(237).default
            })
        },
        432: function (t, e, r) {
            "use strict";
            r.r(e);
            var l = {
                    setup: function () {}
                },
                n = r(13),
                component = Object(n.a)(l, (function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", [e("div", {
                        staticClass: "flex flex-col space-y-16 container-1080"
                    }, [e("div", {
                        staticClass: "flex flex-col-reverse md:flex-row justify-between items-center pb-16"
                    }, [e("div", {
                        staticClass: "flex flex-col justify-center md:items-start items-center space-y-6"
                    }, [e("img", {
                        staticClass: "h-auto w-64 md:w-40",
                        attrs: {
                            width: "100%",
                            src: "/images/logo.svg",
                            alt: "Instadapp"
                        }
                    }), t._v(" "), t._m(0), t._v(" "), e("a", {
                        staticClass: "flex items-center w-full md:w-1/2 justify-center flex-shrink-0 h-12 px-10 font-semibold text-white border-2 border-transparent rounded-md bg-primary-blue-dark hover:bg-primary-blue-hover",
                        attrs: {
                            href: "https://defi.instadapp.io/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [e("svg", {
                        staticClass: "mr-2.5 text-white hover:opacity-90",
                        attrs: {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [e("rect", {
                        attrs: {
                            width: "9",
                            height: "4",
                            rx: "1",
                            fill: "white"
                        }
                    }), t._v(" "), e("rect", {
                        attrs: {
                            y: "12",
                            width: "9",
                            height: "4",
                            rx: "1",
                            fill: "white"
                        }
                    }), t._v(" "), e("rect", {
                        attrs: {
                            x: "7",
                            y: "6",
                            width: "9",
                            height: "4",
                            rx: "1",
                            fill: "white"
                        }
                    }), t._v(" "), e("rect", {
                        attrs: {
                            x: "11",
                            width: "5",
                            height: "4",
                            rx: "1",
                            fill: "white"
                        }
                    }), t._v(" "), e("rect", {
                        attrs: {
                            x: "11",
                            y: "12",
                            width: "5",
                            height: "4",
                            rx: "1",
                            fill: "white"
                        }
                    }), t._v(" "), e("rect", {
                        attrs: {
                            y: "6",
                            width: "5",
                            height: "4",
                            rx: "1",
                            fill: "white"
                        }
                    })]), t._v("\n\n          Dashboard\n        ")])]), t._v(" "), e("img", {
                        staticClass: "h-auto w-5/6 md:w-1/2",
                        staticStyle: {
                            "z-index": "11"
                        },
                        attrs: {
                            width: "100%",
                            src: "/images/illustration-dashboard.svg",
                            alt: "Instadapp"
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "w-full h-1 bg-indigo-200 relative"
                    }, [e("div", {
                        staticClass: "absolute w-full flex justify-center items-center",
                        staticStyle: {
                            top: "-1.1rem"
                        }
                    }, [e("svg", {
                        staticClass: "bg-white w-32",
                        attrs: {
                            width: "40",
                            height: "40",
                            viewBox: "0 0 40 40",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [e("path", {
                        attrs: {
                            opacity: "0.3",
                            d: "M10 22L20 30L30 22",
                            stroke: "#3F75FF",
                            "stroke-width": "4",
                            "stroke-linecap": "round"
                        }
                    }), t._v(" "), e("path", {
                        attrs: {
                            opacity: "0.3",
                            d: "M10 10L20 18L30 10",
                            stroke: "#3F75FF",
                            "stroke-width": "4",
                            "stroke-linecap": "round"
                        }
                    })])])]), t._v(" "), e("div", {
                        staticClass: "flex flex-col md:flex-row space-y-8 md:space-y-0 justify-between items-center pt-16"
                    }, [t._m(1), t._v(" "), e("div", {
                        staticClass: "flex flex-col justify-center items-center md:items-start md:justify-start space-y-6"
                    }, [e("img", {
                        staticClass: "h-auto w-64 md:w-48",
                        attrs: {
                            width: "100%",
                            src: "/images/logo-lite.svg",
                            alt: "Instadapp"
                        }
                    }), t._v(" "), t._m(2), t._v(" "), e("a", {
                        staticClass: "flex items-center w-full md:w-1/3 justify-center flex-shrink-0 h-12 px-10 font-semibold text-white border-2 border-transparent rounded-md bg-primary-blue-dark hover:bg-primary-blue-hover",
                        attrs: {
                            href: "https://lite.instadapp.io/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [e("svg", {
                        staticClass: "mr-2",
                        attrs: {
                            width: "19",
                            height: "18",
                            viewBox: "0 0 19 18",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [e("path", {
                        attrs: {
                            d: "M18.2584 0.671475C18.2358 0.566271 18.1833 0.469829 18.1072 0.393743C18.0311 0.317657 17.9346 0.265164 17.8294 0.242575C16.697 0 15.8112 0 14.9286 0C11.2995 0 9.12271 1.9406 7.4984 4.49994H3.83414C3.5212 4.5002 3.2145 4.58743 2.94828 4.75188C2.68206 4.91633 2.46682 5.15153 2.32658 5.43121L0.588695 8.9046C0.524515 9.03327 0.49429 9.1762 0.500889 9.31983C0.507488 9.46346 0.550691 9.60302 0.626399 9.72527C0.702107 9.84751 0.807808 9.94839 0.93347 10.0183C1.05913 10.0883 1.20059 10.1249 1.34441 10.1249H4.99355L4.20338 10.9148C3.99239 11.1258 3.87387 11.4119 3.87387 11.7102C3.87387 12.0085 3.99239 12.2946 4.20338 12.5056L5.99331 14.2954C6.09781 14.3999 6.22187 14.4828 6.35842 14.5393C6.49496 14.5959 6.64131 14.625 6.78911 14.625C6.93691 14.625 7.08326 14.5959 7.2198 14.5393C7.35635 14.4828 7.48041 14.3999 7.58491 14.2954L8.37508 13.5054V17.156C8.37504 17.2997 8.41173 17.4411 8.48166 17.5667C8.5516 17.6923 8.65246 17.7979 8.77469 17.8736C8.89692 17.9493 9.03647 17.9925 9.18009 17.9991C9.32371 18.0057 9.46664 17.9756 9.59533 17.9115L13.0662 16.1752C13.3464 16.0352 13.582 15.82 13.7467 15.5536C13.9113 15.2871 13.9983 14.9801 13.9981 14.667V10.9964C16.5508 9.36866 18.4993 7.18548 18.4993 3.57534C18.5028 2.68941 18.5028 1.80349 18.2584 0.671475ZM14.0016 5.90617C13.7234 5.90617 13.4514 5.82369 13.2201 5.66917C12.9888 5.51466 12.8085 5.29503 12.702 5.03808C12.5956 4.78112 12.5677 4.49838 12.622 4.22559C12.6763 3.95281 12.8102 3.70225 13.007 3.50558C13.2037 3.30892 13.4543 3.17499 13.7272 3.12073C14 3.06647 14.2829 3.09432 14.5399 3.20075C14.7969 3.30718 15.0166 3.48742 15.1712 3.71868C15.3257 3.94993 15.4082 4.22181 15.4082 4.49994C15.4082 4.87289 15.26 5.23057 14.9962 5.49429C14.7324 5.75801 14.3747 5.90617 14.0016 5.90617Z",
                            fill: "white"
                        }
                    })]), t._v("\n          Lite\n        ")])])])])])
                }), [function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "max-w-md w-full text-gray-500"
                    }, [t._v("\n          The premier interface for DeFi Enthusiasts! Create your\n          "), e("span", {
                        staticClass: "text-primary-blue-dark"
                    }, [t._v("DeFi Smart Account")]), t._v(" and access the most popular decentralized\n          protocols and advanced strategies!\n          "), e("span", {
                        staticClass: "text-primary-blue-dark"
                    }, [t._v("Maximize your DeFi experience")]), t._v(" and get the most from your digital\n          assets.\n        ")])
                }, function () {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "w-5/6 md:w-1/2"
                    }, [t("img", {
                        staticClass: "h-auto",
                        attrs: {
                            width: "100%",
                            src: "/images/illustration-lite.svg",
                            alt: "Instadapp"
                        }
                    })])
                }, function () {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "max-w-md w-full text-gray-500"
                    }, [t._v("\n          All the Yield, none of the work! "), e("span", {
                        staticClass: "text-primary-blue-dark"
                    }, [t._v("Instadapp Lite")]), t._v(" gives all DeFi\n          users the simplest way to access\n          "), e("span", {
                        staticClass: "text-primary-blue-dark"
                    }, [t._v("the best earning DeFi strategies")]), t._v(". Simply deposit assets into\n          your preferred Instadapp strategy vault and earn yield!\n        ")])
                }], !1, null, null, null);
            e.default = component.exports
        },
        433: function (t, e, r) {
            "use strict";
            r.r(e);
            r(36);
            var l = {
                    setup: function () {
                        return {
                            blocks: [{
                                title: "DeFi Smart Accounts",
                                logo: "/images/icons/switches.svg",
                                text: "Smart contract account owned by the users to manage & optimize funds across any number of protocols"
                            }, {
                                title: "100% trustless",
                                logo: "/images/icons/dashboard.svg",
                                text: "We ensure that the system is 100% trustless and only you've access to your funds."
                            }, {
                                title: "Built for developers",
                                logo: "/images/icons/code.svg",
                                text: "Designed for developers to build extensible use-cases and models with maximum security."
                            }]
                        }
                    }
                },
                n = r(13),
                component = Object(n.a)(l, (function () {
                    var t = this,
                        e = t._self._c;
                    return e("article", {
                        staticClass: "relative bg-light-blue"
                    }, [e("div", {
                        staticClass: "container-1080 md:py-8 lg:py-2"
                    }, [e("div", {
                        staticClass: "grid grid-cols-1 gap-y-8 sm:gap-8 sm:grid-cols-3"
                    }, t._l(t.blocks, (function (r) {
                        return e("div", {
                            key: r.name,
                            staticClass: "max-w-md space-y-3"
                        }, [e("div", {}, [e("AppIcon", {
                            staticClass: "w-10 h-10",
                            attrs: {
                                src: r.logo,
                                "size-fit": ""
                            }
                        })], 1), t._v(" "), e("div", {
                            staticClass: "text-xl"
                        }, [t._v("\n          " + t._s(r.title) + "\n        ")]), t._v(" "), e("div", {
                            staticClass: "leading-7 text-font-secondary"
                        }, [t._v("\n          " + t._s(r.text) + "\n        ")])])
                    })), 0)])])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                AppIcon: r(236).default
            })
        },
        434: function (t, e, r) {
            "use strict";
            r.r(e);
            var l = {},
                n = (r(411), r(13)),
                component = Object(n.a)(l, (function () {
                    var t = this,
                        e = t._self._c;
                    return e("article", {
                        staticClass: "relative bg-primary-dark"
                    }, [e("div", {
                        staticClass: "relative container-1080"
                    }, [e("div", {
                        staticClass: "relative z-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-12"
                    }, [e("div", [e("div", {
                        staticClass: "text-sm font-bold text-primary-green"
                    }, [t._v("DESIGNED FOR DEVELOPERS")]), t._v(" "), e("h2", {
                        staticClass: "mt-4 text-4xl font-bold leading-10 text-white"
                    }, [t._v("Developer First")]), t._v(" "), e("p", {
                        staticClass: "mt-4 text-lg text-font-tertiary"
                    }, [t._v("\n          Build compelling use-cases and monetize their models to earn money by serving your users with high\n          reliability.\n        ")]), t._v(" "), t._m(0), t._v(" "), e("AppNavigateButton", {
                        staticClass: "hidden mt-6 md:inline-flex",
                        attrs: {
                            href: "https://docs.instadapp.io"
                        }
                    }, [t._v("View Our Docs")])], 1), t._v(" "), e("div", {
                        staticClass: "relative z-30 flex flex-col w-full px-8 py-10 border rounded block-code border-lines-secondary"
                    }, [t._m(1), t._v(" "), e("hr", {
                        staticClass: "my-8 border-lines-secondary"
                    }), t._v(" "), e("h6", {
                        staticClass: "text-sm text-white"
                    }, [t._v("Make DeFi better for everyone")]), t._v(" "), e("p", {
                        staticClass: "mt-4 max-w-md text-sm text-font-tertiary"
                    }, [t._v("\n          Create powerful use cases for your users with just javascript code, without worrying about smart contracts &\n          expensive audits.\n        ")]), t._v(" "), e("a", {
                        staticClass: "flex items-center mt-4",
                        staticStyle: {
                            color: "#fcc659"
                        },
                        attrs: {
                            href: "https://gofloww.co/api-doc",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [t._v("\n          Learn more\n          "), e("svg", {
                        staticClass: "ml-2",
                        attrs: {
                            width: "12",
                            height: "10",
                            viewBox: "0 0 12 10",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [e("path", {
                        attrs: {
                            d: "M6.5 1L10.5 5M10.5 5L6.5 9M10.5 5H0",
                            stroke: "#fcc659",
                            "stroke-width": "1.7"
                        }
                    })])])])])])])
                }), [function () {
                    var t = this,
                        e = t._self._c;
                    return e("ul", {
                        staticClass: "mt-6 space-y-2 text-sm leading-6 text-primary-blue"
                    }, [e("li", {
                        staticClass: "flex items-center"
                    }, [t._v("Start with your own use case")]), t._v(" "), e("li", {
                        staticClass: "flex items-center"
                    }, [t._v("Execute rapidly with Javascript")]), t._v(" "), e("li", {
                        staticClass: "flex items-center"
                    }, [t._v("Open to all developer team sizes")])])
                }, function () {
                    var t = this,
                        e = t._self._c;
                    return e("ol", {
                        staticClass: "space-y-1 text-white"
                    }, [e("li", [e("span", {
                        staticStyle: {
                            color: "#7a92f6"
                        }
                    }, [t._v("let")]), t._v(" spells = "), e("span", {
                        staticStyle: {
                            color: "#7a92f6"
                        }
                    }, [t._v("dsa.Spell()")])]), t._v(" "), e("li"), t._v(" "), e("li", [t._v("spells.add({")]), t._v(" "), e("li", [t._v("  connector: "), e("span", {
                        staticClass: "text-orange-500"
                    }, [t._v(' "maker"')]), t._v(",")]), t._v(" "), e("li", [t._v("  method: "), e("span", {
                        staticStyle: {
                            color: "#fcc659"
                        }
                    }, [t._v(' "open"')]), t._v(",")]), t._v(" "), e("li", [t._v("  args: "), e("span", {
                        staticClass: "text-orange-500"
                    }, [t._v(' ["ETH-A"]')]), t._v(",")]), t._v(" "), e("li", [t._v("})")]), t._v(" "), e("li"), t._v(" "), e("li", [t._v("spells."), e("span", {
                        staticStyle: {
                            color: "#7a92f6"
                        }
                    }, [t._v("cast()")])])])
                }], !1, null, "aca89e78", null);
            e.default = component.exports;
            installComponents(component, {
                AppNavigateButton: r(241).default
            })
        },
        452: function (t, e, r) {
            "use strict";
            r(423)
        },
        453: function (t, e, r) {
            var l = r(80)(!1);
            l.push([t.i, ".stats-wrapper{background-image:url(/images/circles.svg);background-repeat:no-repeat;background-size:cover;background-position:50%}@media (min-width:1080px){.stats-wrapper{background:transparent}}", ""]), t.exports = l
        },
        469: function (t, e, r) {
            "use strict";
            r.r(e);
            var l = r(27),
                n = Object(l.a)({
                    setup: function () {
                        Object(l.k)((function () {
                            return {
                                title: "Instadapp",
                                meta: [{
                                    hid: "twitter:site",
                                    name: "twitter:site",
                                    content: "instadapp.io"
                                }, {
                                    hid: "twitter:title",
                                    name: "twitter:title",
                                    content: "Instadapp"
                                }, {
                                    hid: "twitter:image",
                                    content: "https://defi.instadapp.io/twitter-card-logo.png"
                                }, {
                                    hid: "twitter:image:alt",
                                    content: "Instadapp"
                                }, {
                                    hid: "twitter:description",
                                    name: "twitter:description",
                                    content: "The Most Powerful DeFi Management Platform"
                                }, {
                                    hid: "twitter:card",
                                    name: "twitter:card",
                                    content: "summary"
                                }]
                            }
                        }))
                    },
                    head: {}
                }),
                o = (r(452), r(13)),
                component = Object(o.a)(n, (function () {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        staticClass: "flex flex-1 w-full mx-auto"
                    }, [e("main", {
                        staticClass: "w-full"
                    }, [e("StartBlock", {
                        staticClass: "pt-56 md:pt-48"
                    }), t._v(" "), e("div", {
                        staticClass: "relative stats-wrapper"
                    }, [e("img", {
                        staticClass: "hidden lg:block absolute inset-x-0 mx-auto z-10 pointer-events-none",
                        staticStyle: {
                            transform: "translateY(-350px)"
                        },
                        attrs: {
                            src: "/images/circles.svg"
                        }
                    }), t._v(" "), e("StatsV3Block", {
                        staticClass: "py-32 md:mt-0"
                    })], 1), t._v(" "), e("ProductsBlock", {
                        staticClass: "py-8"
                    }), t._v(" "), e("FeaturesBlock", {
                        staticClass: "py-32 lg:pb-32"
                    }), t._v(" "), e("DevelopersBlock", {
                        staticClass: "pt-16"
                    }), t._v(" "), e("SubscribeBlock", {
                        staticClass: "py-16 lg:py-0 mt-16 lg:mt-0 lg:px-24 lg:bg-primary-dark"
                    })], 1)])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                StartBlock: r(430).default,
                StatsV3Block: r(431).default,
                ProductsBlock: r(432).default,
                FeaturesBlock: r(433).default,
                DevelopersBlock: r(434).default,
                SubscribeBlock: r(389).default
            })
        }
    }
]);