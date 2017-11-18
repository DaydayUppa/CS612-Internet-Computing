webpackJsonp([1], {
    0: function (e, t, n) {
        e.exports = n(89)
    }, 87: function (e, t) {
        "use strict"
    }, 88: function (e, t, n) {
        "use strict";

        function l(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var u = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var l = t[n];
                    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(e, l.key, l)
                }
            }

            return function (t, n, l) {
                return n && e(t.prototype, n), l && e(t, l), t
            }
        }(), r = n(56), c = l(r), s = n(87), d = (l(s), c["default"].Component), f = function (e) {
            function t(e) {
                i(this, t);
                var n = a(this, Object.getPrototypeOf(t).call(this, e));
                return n.state = {list: [{title: "click to edit"}], title: ""}, n
            }

            return o(t, e), u(t, [{
                key: "addHandle", value: function (e) {
                    var t = this.state.list;
                    t = t.concat([{title: this.state.title}]), this.setState({list: t, title: ""})
                }
            }, {
                key: "changeHandle", value: function (e) {
                    this.setState({title: e.target.value})
                }
            }, {
                key: "delHandle", value: function (e) {
                    console.log(e);
                    var t = this.state.list;
                    t.splice(e, 1), this.setState()
                }
            }, {
                key: "changeItem", value: function (e, t) {
                    e.title = t.target.value, this.setState()
                }
            }, {
                key: "blurHandle", value: function (e) {
                    e.edit = !e.edit, this.setState()
                }
            }, {
                key: "toEdit", value: function (e) {
                    e.edit = !e.edit, console.log(this.refs.txtedit), this.setState()
                }
            }, {
                key: "render", value: function () {
                    var e = this;
                    return c["default"].createElement("div", null, c["default"].createElement("div", null, c["default"].createElement("input", {
                        type: "text",
                        value: this.state.title,
                        onKeyDown: function (t) {
                            13 == t.keyCode ? e.addHandle(t) : void 0
                        },
                        placeholder: "Please type in new URL",
                        onChange: this.changeHandle.bind(this)
                    }), c["default"].createElement("button", {onClick: this.addHandle.bind(this)}, "add")), c["default"].createElement("div", {className: "preview"}, this.state.title), c["default"].createElement("div", {className: "list"}, this.state.list.map(function (t, n) {
                        return c["default"].createElement("a", {
                            key: n,
                            onClick: e.toEdit.bind(e, t)
                        }, t.edit ? c["default"].createElement("input", {
                            type: "text", autoFocus: !0, onKeyDown: function (n) {
                                13 == n.keyCode ? e.toEdit(t) : void 0
                            }, onBlur: e.blurHandle.bind(e, t), onChange: e.changeItem.bind(e, t), value: t.title
                        }) : c["default"].createElement("span", null, t.title), c["default"].createElement("button", {onClick: e.delHandle.bind(e, n)}, "delete"))
                    })))
                }
            }]), t
        }(d);
        t["default"] = f
    }, 89: function (e, t, n) {
        "use strict";

        function l(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        var i = n(56), a = l(i), o = n(60), u = n(88), r = l(u);
        (0, o.render)(a["default"].createElement(r["default"], null), document.getElementById("Main"))
    }
});