// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = O;
exports.hydrate = S;
exports.h = exports.createElement = v;
exports.Fragment = p;
exports.createRef = y;
exports.Component = d;
exports.cloneElement = q;
exports.createContext = B;
exports.toChildArray = b;
exports.__u = L;
exports.options = exports.isValidElement = void 0;
var n,
    l,
    u,
    i,
    t,
    o,
    r,
    f = {},
    e = [],
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
exports.isValidElement = l;
exports.options = n;

function s(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function a(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function v(n, l, u) {
  var i,
      t,
      o,
      r = arguments,
      f = {};

  for (o in l) "key" == o ? i = l[o] : "ref" == o ? t = l[o] : f[o] = l[o];

  if (arguments.length > 3) for (u = [u], o = 3; o < arguments.length; o++) u.push(r[o]);
  if (null != u && (f.children = u), "function" == typeof n && null != n.defaultProps) for (o in n.defaultProps) void 0 === f[o] && (f[o] = n.defaultProps[o]);
  return h(n, f, i, t, null);
}

function h(l, u, i, t, o) {
  var r = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == o ? ++n.__v : o
  };
  return null != n.vnode && n.vnode(r), r;
}

function y() {
  return {
    current: null
  };
}

function p(n) {
  return n.children;
}

function d(n, l) {
  this.props = n, this.context = l;
}

function _(n, l) {
  if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? _(n) : null;
}

function w(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return w(n);
  }
}

function k(l) {
  (!l.__d && (l.__d = !0) && u.push(l) && !g.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(g);
}

function g() {
  for (var n; g.__r = u.length;) n = u.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }), u = [], n.some(function (n) {
    var l, u, i, t, o, r, f;
    n.__d && (r = (o = (l = n).__v).__e, (f = l.__P) && (u = [], (i = s({}, o)).__v = o.__v + 1, t = $(f, o, i, l.__n, void 0 !== f.ownerSVGElement, null != o.__h ? [r] : null, u, null == r ? _(o) : r, o.__h), j(u, o), t != r && w(o)));
  });
}

function m(n, l, u, i, t, o, r, c, s, v) {
  var y,
      d,
      w,
      k,
      g,
      m,
      b,
      A = i && i.__k || e,
      P = A.length;

  for (s == f && (s = null != r ? r[0] : P ? _(i, 0) : null), u.__k = [], y = 0; y < l.length; y++) if (null != (k = u.__k[y] = null == (k = l[y]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k ? h(null, k, null, null, k) : Array.isArray(k) ? h(p, {
    children: k
  }, null, null, null) : null != k.__e || null != k.__c ? h(k.type, k.props, k.key, null, k.__v) : k)) {
    if (k.__ = u, k.__b = u.__b + 1, null === (w = A[y]) || w && k.key == w.key && k.type === w.type) A[y] = void 0;else for (d = 0; d < P; d++) {
      if ((w = A[d]) && k.key == w.key && k.type === w.type) {
        A[d] = void 0;
        break;
      }

      w = null;
    }
    g = $(n, k, w = w || f, t, o, r, c, s, v), (d = k.ref) && w.ref != d && (b || (b = []), w.ref && b.push(w.ref, null, k), b.push(d, k.__c || g, k)), null != g ? (null == m && (m = g), s = x(n, k, w, A, r, g, s), v || "option" != u.type ? "function" == typeof u.type && (u.__d = s) : n.value = "") : s && w.__e == s && s.parentNode != n && (s = _(w));
  }

  if (u.__e = m, null != r && "function" != typeof u.type) for (y = r.length; y--;) null != r[y] && a(r[y]);

  for (y = P; y--;) null != A[y] && L(A[y], A[y]);

  if (b) for (y = 0; y < b.length; y++) I(b[y], b[++y], b[++y]);
}

function b(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    b(n, l);
  }) : l.push(n)), l;
}

function x(n, l, u, i, t, o, r) {
  var f, e, c;
  if (void 0 !== l.__d) f = l.__d, l.__d = void 0;else if (t == u || o != r || null == o.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(o), f = null;else {
    for (e = r, c = 0; (e = e.nextSibling) && c < i.length; c += 2) if (e == o) break n;

    n.insertBefore(o, r), f = r;
  }
  return void 0 !== f ? f : o.nextSibling;
}

function A(n, l, u, i, t) {
  var o;

  for (o in u) "children" === o || "key" === o || o in l || C(n, o, null, u[o], i);

  for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || C(n, o, l[o], u[o], i);
}

function P(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || c.test(l) ? u : u + "px";
}

function C(n, l, u, i, t) {
  var o, r, f;
  if (t && "className" == l && (l = "class"), "style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || P(n.style, l, "");
      if (u) for (l in u) i && u[l] === i[l] || P(n.style, l, u[l]);
    }
  } else "o" === l[0] && "n" === l[1] ? (o = l !== (l = l.replace(/Capture$/, "")), (r = l.toLowerCase()) in n && (l = r), l = l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, f = o ? N : z, u ? i || n.addEventListener(l, f, o) : n.removeEventListener(l, f, o)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && "size" !== l && "download" !== l && "href" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function z(l) {
  this.l[l.type + !1](n.event ? n.event(l) : l);
}

function N(l) {
  this.l[l.type + !0](n.event ? n.event(l) : l);
}

function T(n, l, u) {
  var i, t;

  for (i = 0; i < n.__k.length; i++) (t = n.__k[i]) && (t.__ = n, t.__e && ("function" == typeof t.type && t.__k.length > 1 && T(t, l, u), l = x(u, t, t, n.__k, null, t.__e, l), "function" == typeof n.type && (n.__d = l)));
}

function $(l, u, i, t, o, r, f, e, c) {
  var a,
      v,
      h,
      y,
      _,
      w,
      k,
      g,
      b,
      x,
      A,
      P = u.type;

  if (void 0 !== u.constructor) return null;
  null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof P) {
      if (g = u.props, b = (a = P.contextType) && t[a.__c], x = a ? b ? b.props.value : a.__ : t, i.__c ? k = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(g, x) : (u.__c = v = new d(g, x), v.constructor = P, v.render = M), b && b.sub(v), v.props = g, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = s({}, v.__s)), s(v.__s, P.getDerivedStateFromProps(g, v.__s))), y = v.props, _ = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && g !== y && null != v.componentWillReceiveProps && v.componentWillReceiveProps(g, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(g, v.__s, x) || u.__v === i.__v) {
          v.props = g, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v), T(u, e, l);
          break n;
        }

        null != v.componentWillUpdate && v.componentWillUpdate(g, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {
          v.componentDidUpdate(y, _, w);
        });
      }
      v.context = x, v.props = g, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), v.state = v.__s, null != v.getChildContext && (t = s(s({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (w = v.getSnapshotBeforeUpdate(y, _)), A = null != a && a.type == p && null == a.key ? a.props.children : a, m(l, Array.isArray(A) ? A : [A], u, i, t, o, r, f, e, c), v.base = u.__e, u.__h = null, v.__h.length && f.push(v), k && (v.__E = v.__ = null), v.__e = !1;
    } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = H(i.__e, u, i, t, o, r, f, c);

    (a = n.diffed) && a(u);
  } catch (l) {
    u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), n.__e(l, u, i);
  }

  return u.__e;
}

function j(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function H(n, l, u, i, t, o, r, c) {
  var s,
      a,
      v,
      h,
      y,
      p = u.props,
      d = l.props;
  if (t = "svg" === l.type || t, null != o) for (s = 0; s < o.length; s++) if (null != (a = o[s]) && ((null === l.type ? 3 === a.nodeType : a.localName === l.type) || n == a)) {
    n = a, o[s] = null;
    break;
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(d);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type, d.is && {
      is: d.is
    }), o = null, c = !1;
  }

  if (null === l.type) p === d || c && n.data === d || (n.data = d);else {
    if (null != o && (o = e.slice.call(n.childNodes)), v = (p = u.props || f).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !c) {
      if (null != o) for (p = {}, y = 0; y < n.attributes.length; y++) p[n.attributes[y].name] = n.attributes[y].value;
      (h || v) && (h && (v && h.__html == v.__html || h.__html === n.innerHTML) || (n.innerHTML = h && h.__html || ""));
    }

    A(n, d, p, t, c), h ? l.__k = [] : (s = l.props.children, m(n, Array.isArray(s) ? s : [s], l, u, i, "foreignObject" !== l.type && t, o, r, f, c)), c || ("value" in d && void 0 !== (s = d.value) && (s !== n.value || "progress" === l.type && !s) && C(n, "value", s, p.value, !1), "checked" in d && void 0 !== (s = d.checked) && s !== n.checked && C(n, "checked", s, p.checked, !1));
  }
  return n;
}

function I(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}

function L(l, u, i) {
  var t, o, r;

  if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || I(t, null, u)), i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }

  if (t = l.__k) for (r = 0; r < t.length; r++) t[r] && L(t[r], u, i);
  null != o && a(o);
}

function M(n, l, u) {
  return this.constructor(n, u);
}

function O(l, u, i) {
  var t, r, c;
  n.__ && n.__(l, u), r = (t = i === o) ? null : i && i.__k || u.__k, l = v(p, null, [l]), c = [], $(u, (t ? u : i || u).__k = l, r || f, f, void 0 !== u.ownerSVGElement, i && !t ? [i] : r ? null : u.childNodes.length ? e.slice.call(u.childNodes) : null, c, i || f, t), j(c, l);
}

function S(n, l) {
  O(n, l, o);
}

function q(n, l, u) {
  var i,
      t,
      o,
      r = arguments,
      f = s({}, n.props);

  for (o in l) "key" == o ? i = l[o] : "ref" == o ? t = l[o] : f[o] = l[o];

  if (arguments.length > 3) for (u = [u], o = 3; o < arguments.length; o++) u.push(r[o]);
  return null != u && (f.children = u), h(n.type, f, i || n.key, t || n.ref, null);
}

function B(n, l) {
  var u = {
    __c: l = "__cC" + r++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n, u, i) {
      return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
        return i;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(k);
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}

exports.options = n = {
  __e: function (n, l) {
    for (var u, i, t, o = l.__h; l = l.__;) if ((u = l.__c) && !u.__) try {
      if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return l.__h = o, u.__E = u;
    } catch (l) {
      n = l;
    }

    throw n;
  },
  __v: 0
}, exports.isValidElement = l = function (n) {
  return null != n && void 0 === n.constructor;
}, d.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(s({}, u), this.props)), n && s(u, n), null != n && this.__v && (l && this.__h.push(l), k(this));
}, d.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), k(this));
}, d.prototype.render = p, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, o = f, r = 0;
},{}],"node_modules/htm/dist/htm.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var n = function (t, s, r, e) {
  var u;
  s[0] = 0;

  for (var h = 1; h < s.length; h++) {
    var p = s[h++],
        a = s[h] ? (s[0] |= p ? 1 : 2, r[s[h++]]) : s[++h];
    3 === p ? e[0] = a : 4 === p ? e[1] = Object.assign(e[1] || {}, a) : 5 === p ? (e[1] = e[1] || {})[s[++h]] = a : 6 === p ? e[1][s[++h]] += a + "" : p ? (u = t.apply(a, n(t, a, r, ["", null])), e.push(u), a[0] ? s[0] |= 2 : (s[h - 2] = 0, s[h] = u)) : e.push(a);
  }

  return e;
},
    t = new Map();

function _default(s) {
  var r = t.get(this);
  return r || (r = new Map(), t.set(this, r)), (r = n(this, r.get(s) || (r.set(s, r = function (n) {
    for (var t, s, r = 1, e = "", u = "", h = [0], p = function (n) {
      1 === r && (n || (e = e.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h.push(0, n, e) : 3 === r && (n || e) ? (h.push(3, n, e), r = 2) : 2 === r && "..." === e && n ? h.push(4, n, 0) : 2 === r && e && !n ? h.push(5, 0, !0, e) : r >= 5 && ((e || !n && 5 === r) && (h.push(r, 0, e, s), r = 6), n && (h.push(r, n, 0, s), r = 6)), e = "";
    }, a = 0; a < n.length; a++) {
      a && (1 === r && p(), p(a));

      for (var l = 0; l < n[a].length; l++) t = n[a][l], 1 === r ? "<" === t ? (p(), h = [h], r = 3) : e += t : 4 === r ? "--" === e && ">" === t ? (r = 1, e = "") : e = t + e[0] : u ? t === u ? u = "" : e += t : '"' === t || "'" === t ? u = t : ">" === t ? (p(), r = 1) : r && ("=" === t ? (r = 5, s = e, e = "") : "/" === t && (r < 5 || ">" === n[a][l + 1]) ? (p(), 3 === r && (h = h[0]), r = h, (h = h[0]).push(2, 0, r), r = 0) : " " === t || "\t" === t || "\n" === t || "\r" === t ? (p(), r = 2) : e += t), 3 === r && "!--" === e && (r = 4, h = h[0]);
    }

    return p(), h;
  }(s)), r), arguments, [])).length > 1 ? r : r[0];
}
},{}],"node_modules/htm/preact/index.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "h", {
  enumerable: true,
  get: function () {
    return _preact.h;
  }
});
Object.defineProperty(exports, "render", {
  enumerable: true,
  get: function () {
    return _preact.render;
  }
});
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function () {
    return _preact.Component;
  }
});
exports.html = void 0;

var _preact = require("preact");

var _htm = _interopRequireDefault(require("htm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var m = _htm.default.bind(_preact.h);

exports.html = m;
},{"preact":"node_modules/preact/dist/preact.module.js","htm":"node_modules/htm/dist/htm.module.js"}],"app/views/column.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.column = column;

var _preact = require("htm/preact");

function _templateObject() {
  const data = _taggedTemplateLiteral(["<div class='", "' data-i=", "></div>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function column(tileData, i) {
  const styleDict = {
    1: "empty",
    2: "snake",
    3: "food"
  };
  const colorStyle = styleDict[tileData];
  return (0, _preact.html)(_templateObject(), "tile " + colorStyle, i);
}
},{"htm/preact":"node_modules/htm/preact/index.module.js"}],"app/views/row.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.row = row;

var _preact = require("htm/preact");

var _column = require("./column");

function _templateObject2() {
  const data = _taggedTemplateLiteral(["\n\t\t\t", "\n\t\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral(["<div data-i=", ">\n        ", "\n    </div>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function row(tiles, i) {
  return (0, _preact.html)(_templateObject(), i, tiles.map((tile, i) => (0, _preact.html)(_templateObject2(), (0, _column.column)(tile, i))));
}
},{"htm/preact":"node_modules/htm/preact/index.module.js","./column":"app/views/column.js"}],"app/views/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = main;

var _preact = require("htm/preact");

var _row = require("./row");

function _templateObject2() {
  const data = _taggedTemplateLiteral(["\n\t\t\t", "\n\t\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral(["\n\t\t", "\n\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function main(state) {
  const {
    gameArea
  } = state;
  return (0, _preact.html)(_templateObject(), gameArea.map((tiles, i) => (0, _preact.html)(_templateObject2(), (0, _row.row)(tiles, i))));
}
},{"htm/preact":"node_modules/htm/preact/index.module.js","./row":"app/views/row.js"}],"node_modules/immer/dist/immer.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.castDraft = K;
exports.castImmutable = $;
exports.current = D;
exports.enableAllPlugins = J;
exports.enableES5 = T;
exports.enableMapSet = C;
exports.enablePatches = F;
exports.freeze = d;
exports.isDraft = t;
exports.isDraftable = r;
exports.original = e;
exports.setUseProxies = exports.setAutoFreeze = exports.produceWithPatches = exports.produce = exports.nothing = exports.immerable = exports.finishDraft = exports.createDraft = exports.applyPatches = exports.Immer = exports.default = void 0;

function n(n) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), e = 1; e < t; e++) r[e - 1] = arguments[e];

  if ("production" !== "development") {
    var i = Y[n],
        o = i ? "function" == typeof i ? i.apply(null, r) : i : "unknown error nr: " + n;
    throw Error("[Immer] " + o);
  }

  throw Error("[Immer] minified error nr: " + n + (r.length ? " " + r.map(function (n) {
    return "'" + n + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}

function t(n) {
  return !!n && !!n[Q];
}

function r(n) {
  return !!n && (function (n) {
    if (!n || "object" != typeof n) return !1;
    var t = Object.getPrototypeOf(n);
    return !t || t === Object.prototype;
  }(n) || Array.isArray(n) || !!n[L] || !!n.constructor[L] || s(n) || v(n));
}

function e(r) {
  return t(r) || n(23, r), r[Q].t;
}

function i(n, t, r) {
  void 0 === r && (r = !1), 0 === o(n) ? (r ? Object.keys : Z)(n).forEach(function (e) {
    r && "symbol" == typeof e || t(e, n[e], n);
  }) : n.forEach(function (r, e) {
    return t(e, r, n);
  });
}

function o(n) {
  var t = n[Q];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(n) ? 1 : s(n) ? 2 : v(n) ? 3 : 0;
}

function u(n, t) {
  return 2 === o(n) ? n.has(t) : Object.prototype.hasOwnProperty.call(n, t);
}

function a(n, t) {
  return 2 === o(n) ? n.get(t) : n[t];
}

function f(n, t, r) {
  var e = o(n);
  2 === e ? n.set(t, r) : 3 === e ? (n.delete(t), n.add(r)) : n[t] = r;
}

function c(n, t) {
  return n === t ? 0 !== n || 1 / n == 1 / t : n != n && t != t;
}

function s(n) {
  return X && n instanceof Map;
}

function v(n) {
  return q && n instanceof Set;
}

function p(n) {
  return n.o || n.t;
}

function l(n) {
  if (Array.isArray(n)) return Array.prototype.slice.call(n);
  var t = nn(n);
  delete t[Q];

  for (var r = Z(t), e = 0; e < r.length; e++) {
    var i = r[e],
        o = t[i];
    !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (t[i] = {
      configurable: !0,
      writable: !0,
      enumerable: o.enumerable,
      value: n[i]
    });
  }

  return Object.create(Object.getPrototypeOf(n), t);
}

function d(n, e) {
  return void 0 === e && (e = !1), y(n) || t(n) || !r(n) ? n : (o(n) > 1 && (n.set = n.add = n.clear = n.delete = h), Object.freeze(n), e && i(n, function (n, t) {
    return d(t, !0);
  }, !0), n);
}

function h() {
  n(2);
}

function y(n) {
  return null == n || "object" != typeof n || Object.isFrozen(n);
}

function b(t) {
  var r = tn[t];
  return r || n(18, t), r;
}

function m(n, t) {
  tn[n] || (tn[n] = t);
}

function _() {
  return "production" === "development" || U || n(0), U;
}

function j(n, t) {
  t && (b("Patches"), n.u = [], n.s = [], n.v = t);
}

function g(n) {
  O(n), n.p.forEach(S), n.p = null;
}

function O(n) {
  n === U && (U = n.l);
}

function w(n) {
  return U = {
    p: [],
    l: U,
    h: n,
    m: !0,
    _: 0
  };
}

function S(n) {
  var t = n[Q];
  0 === t.i || 1 === t.i ? t.j() : t.g = !0;
}

function P(t, e) {
  e._ = e.p.length;
  var i = e.p[0],
      o = void 0 !== t && t !== i;
  return e.h.O || b("ES5").S(e, t, o), o ? (i[Q].P && (g(e), n(4)), r(t) && (t = M(e, t), e.l || x(e, t)), e.u && b("Patches").M(i[Q], t, e.u, e.s)) : t = M(e, i, []), g(e), e.u && e.v(e.u, e.s), t !== H ? t : void 0;
}

function M(n, t, r) {
  if (y(t)) return t;
  var e = t[Q];
  if (!e) return i(t, function (i, o) {
    return A(n, e, t, i, o, r);
  }, !0), t;
  if (e.A !== n) return t;
  if (!e.P) return x(n, e.t, !0), e.t;

  if (!e.I) {
    e.I = !0, e.A._--;
    var o = 4 === e.i || 5 === e.i ? e.o = l(e.k) : e.o;
    i(3 === e.i ? new Set(o) : o, function (t, i) {
      return A(n, e, o, t, i, r);
    }), x(n, o, !1), r && n.u && b("Patches").R(e, r, n.u, n.s);
  }

  return e.o;
}

function A(e, i, o, a, c, s) {
  if ("production" !== "development" && c === o && n(5), t(c)) {
    var v = M(e, c, s && i && 3 !== i.i && !u(i.D, a) ? s.concat(a) : void 0);
    if (f(o, a, v), !t(v)) return;
    e.m = !1;
  }

  if (r(c) && !y(c)) {
    if (!e.h.N && e._ < 1) return;
    M(e, c), i && i.A.l || x(e, c);
  }
}

function x(n, t, r) {
  void 0 === r && (r = !1), n.h.N && n.m && d(t, r);
}

function z(n, t) {
  var r = n[Q];
  return (r ? p(r) : n)[t];
}

function I(n, t) {
  if (t in n) for (var r = Object.getPrototypeOf(n); r;) {
    var e = Object.getOwnPropertyDescriptor(r, t);
    if (e) return e;
    r = Object.getPrototypeOf(r);
  }
}

function E(n) {
  n.P || (n.P = !0, n.l && E(n.l));
}

function k(n) {
  n.o || (n.o = l(n.t));
}

function R(n, t, r) {
  var e = s(t) ? b("MapSet").T(t, r) : v(t) ? b("MapSet").F(t, r) : n.O ? function (n, t) {
    var r = Array.isArray(n),
        e = {
      i: r ? 1 : 0,
      A: t ? t.A : _(),
      P: !1,
      I: !1,
      D: {},
      l: t,
      t: n,
      k: null,
      o: null,
      j: null,
      C: !1
    },
        i = e,
        o = rn;
    r && (i = [e], o = en);
    var u = Proxy.revocable(i, o),
        a = u.revoke,
        f = u.proxy;
    return e.k = f, e.j = a, f;
  }(t, r) : b("ES5").J(t, r);
  return (r ? r.A : _()).p.push(e), e;
}

function D(e) {
  return t(e) || n(22, e), function n(t) {
    if (!r(t)) return t;
    var e,
        u = t[Q],
        c = o(t);

    if (u) {
      if (!u.P && (u.i < 4 || !b("ES5").K(u))) return u.t;
      u.I = !0, e = N(t, c), u.I = !1;
    } else e = N(t, c);

    return i(e, function (t, r) {
      u && a(u.t, t) === r || f(e, t, n(r));
    }), 3 === c ? new Set(e) : e;
  }(e);
}

function N(n, t) {
  switch (t) {
    case 2:
      return new Map(n);

    case 3:
      return Array.from(n);
  }

  return l(n);
}

function T() {
  function r(n, t) {
    var r = s[n];
    return r ? r.enumerable = t : s[n] = r = {
      configurable: !0,
      enumerable: t,
      get: function () {
        var t = this[Q];
        return "production" !== "development" && f(t), rn.get(t, n);
      },
      set: function (t) {
        var r = this[Q];
        "production" !== "development" && f(r), rn.set(r, n, t);
      }
    }, r;
  }

  function e(n) {
    for (var t = n.length - 1; t >= 0; t--) {
      var r = n[t][Q];
      if (!r.P) switch (r.i) {
        case 5:
          a(r) && E(r);
          break;

        case 4:
          o(r) && E(r);
      }
    }
  }

  function o(n) {
    for (var t = n.t, r = n.k, e = Z(r), i = e.length - 1; i >= 0; i--) {
      var o = e[i];

      if (o !== Q) {
        var a = t[o];
        if (void 0 === a && !u(t, o)) return !0;
        var f = r[o],
            s = f && f[Q];
        if (s ? s.t !== a : !c(f, a)) return !0;
      }
    }

    var v = !!t[Q];
    return e.length !== Z(t).length + (v ? 0 : 1);
  }

  function a(n) {
    var t = n.k;
    if (t.length !== n.t.length) return !0;
    var r = Object.getOwnPropertyDescriptor(t, t.length - 1);
    return !(!r || r.get);
  }

  function f(t) {
    t.g && n(3, JSON.stringify(p(t)));
  }

  var s = {};
  m("ES5", {
    J: function (n, t) {
      var e = Array.isArray(n),
          i = function (n, t) {
        if (n) {
          for (var e = Array(t.length), i = 0; i < t.length; i++) Object.defineProperty(e, "" + i, r(i, !0));

          return e;
        }

        var o = nn(t);
        delete o[Q];

        for (var u = Z(o), a = 0; a < u.length; a++) {
          var f = u[a];
          o[f] = r(f, n || !!o[f].enumerable);
        }

        return Object.create(Object.getPrototypeOf(t), o);
      }(e, n),
          o = {
        i: e ? 5 : 4,
        A: t ? t.A : _(),
        P: !1,
        I: !1,
        D: {},
        l: t,
        t: n,
        k: i,
        o: null,
        g: !1,
        C: !1
      };

      return Object.defineProperty(i, Q, {
        value: o,
        writable: !0
      }), i;
    },
    S: function (n, r, o) {
      o ? t(r) && r[Q].A === n && e(n.p) : (n.u && function n(t) {
        if (t && "object" == typeof t) {
          var r = t[Q];

          if (r) {
            var e = r.t,
                o = r.k,
                f = r.D,
                c = r.i;
            if (4 === c) i(o, function (t) {
              t !== Q && (void 0 !== e[t] || u(e, t) ? f[t] || n(o[t]) : (f[t] = !0, E(r)));
            }), i(e, function (n) {
              void 0 !== o[n] || u(o, n) || (f[n] = !1, E(r));
            });else if (5 === c) {
              if (a(r) && (E(r), f.length = !0), o.length < e.length) for (var s = o.length; s < e.length; s++) f[s] = !1;else for (var v = e.length; v < o.length; v++) f[v] = !0;

              for (var p = Math.min(o.length, e.length), l = 0; l < p; l++) void 0 === f[l] && n(o[l]);
            }
          }
        }
      }(n.p[0]), e(n.p));
    },
    K: function (n) {
      return 4 === n.i ? o(n) : a(n);
    }
  });
}

function F() {
  function e(n) {
    if (!r(n)) return n;
    if (Array.isArray(n)) return n.map(e);
    if (s(n)) return new Map(Array.from(n.entries()).map(function (n) {
      return [n[0], e(n[1])];
    }));
    if (v(n)) return new Set(Array.from(n).map(e));
    var t = Object.create(Object.getPrototypeOf(n));

    for (var i in n) t[i] = e(n[i]);

    return t;
  }

  function f(n) {
    return t(n) ? e(n) : n;
  }

  var c = "add";
  m("Patches", {
    $: function (t, r) {
      return r.forEach(function (r) {
        for (var i = r.path, u = r.op, f = t, s = 0; s < i.length - 1; s++) "object" != typeof (f = a(f, i[s])) && n(15, i.join("/"));

        var v = o(f),
            p = e(r.value),
            l = i[i.length - 1];

        switch (u) {
          case "replace":
            switch (v) {
              case 2:
                return f.set(l, p);

              case 3:
                n(16);

              default:
                return f[l] = p;
            }

          case c:
            switch (v) {
              case 1:
                return f.splice(l, 0, p);

              case 2:
                return f.set(l, p);

              case 3:
                return f.add(p);

              default:
                return f[l] = p;
            }

          case "remove":
            switch (v) {
              case 1:
                return f.splice(l, 1);

              case 2:
                return f.delete(l);

              case 3:
                return f.delete(r.value);

              default:
                return delete f[l];
            }

          default:
            n(17, u);
        }
      }), t;
    },
    R: function (n, t, r, e) {
      switch (n.i) {
        case 0:
        case 4:
        case 2:
          return function (n, t, r, e) {
            var o = n.t,
                s = n.o;
            i(n.D, function (n, i) {
              var v = a(o, n),
                  p = a(s, n),
                  l = i ? u(o, n) ? "replace" : c : "remove";

              if (v !== p || "replace" !== l) {
                var d = t.concat(n);
                r.push("remove" === l ? {
                  op: l,
                  path: d
                } : {
                  op: l,
                  path: d,
                  value: p
                }), e.push(l === c ? {
                  op: "remove",
                  path: d
                } : "remove" === l ? {
                  op: c,
                  path: d,
                  value: f(v)
                } : {
                  op: "replace",
                  path: d,
                  value: f(v)
                });
              }
            });
          }(n, t, r, e);

        case 5:
        case 1:
          return function (n, t, r, e) {
            var i = n.t,
                o = n.D,
                u = n.o;

            if (u.length < i.length) {
              var a = [u, i];
              i = a[0], u = a[1];
              var s = [e, r];
              r = s[0], e = s[1];
            }

            for (var v = 0; v < i.length; v++) if (o[v] && u[v] !== i[v]) {
              var p = t.concat([v]);
              r.push({
                op: "replace",
                path: p,
                value: f(u[v])
              }), e.push({
                op: "replace",
                path: p,
                value: f(i[v])
              });
            }

            for (var l = i.length; l < u.length; l++) {
              var d = t.concat([l]);
              r.push({
                op: c,
                path: d,
                value: f(u[l])
              });
            }

            i.length < u.length && e.push({
              op: "replace",
              path: t.concat(["length"]),
              value: i.length
            });
          }(n, t, r, e);

        case 3:
          return function (n, t, r, e) {
            var i = n.t,
                o = n.o,
                u = 0;
            i.forEach(function (n) {
              if (!o.has(n)) {
                var i = t.concat([u]);
                r.push({
                  op: "remove",
                  path: i,
                  value: n
                }), e.unshift({
                  op: c,
                  path: i,
                  value: n
                });
              }

              u++;
            }), u = 0, o.forEach(function (n) {
              if (!i.has(n)) {
                var o = t.concat([u]);
                r.push({
                  op: c,
                  path: o,
                  value: n
                }), e.unshift({
                  op: "remove",
                  path: o,
                  value: n
                });
              }

              u++;
            });
          }(n, t, r, e);
      }
    },
    M: function (n, t, r, e) {
      r.push({
        op: "replace",
        path: [],
        value: t
      }), e.push({
        op: "replace",
        path: [],
        value: n.t
      });
    }
  });
}

function C() {
  function t(n, t) {
    function r() {
      this.constructor = n;
    }

    a(n, t), n.prototype = (r.prototype = t.prototype, new r());
  }

  function e(n) {
    n.o || (n.D = new Map(), n.o = new Map(n.t));
  }

  function o(n) {
    n.o || (n.o = new Set(), n.t.forEach(function (t) {
      if (r(t)) {
        var e = R(n.A.h, t, n);
        n.p.set(t, e), n.o.add(e);
      } else n.o.add(t);
    }));
  }

  function u(t) {
    t.g && n(3, JSON.stringify(p(t)));
  }

  var a = function (n, t) {
    return (a = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (n, t) {
      n.__proto__ = t;
    } || function (n, t) {
      for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
    })(n, t);
  },
      f = function () {
    function n(n, t) {
      return this[Q] = {
        i: 2,
        l: t,
        A: t ? t.A : _(),
        P: !1,
        I: !1,
        o: void 0,
        D: void 0,
        t: n,
        k: this,
        C: !1,
        g: !1
      }, this;
    }

    t(n, Map);
    var o = n.prototype;
    return Object.defineProperty(o, "size", {
      get: function () {
        return p(this[Q]).size;
      }
    }), o.has = function (n) {
      return p(this[Q]).has(n);
    }, o.set = function (n, t) {
      var r = this[Q];
      return u(r), p(r).has(n) && p(r).get(n) === t || (e(r), E(r), r.D.set(n, !0), r.o.set(n, t), r.D.set(n, !0)), this;
    }, o.delete = function (n) {
      if (!this.has(n)) return !1;
      var t = this[Q];
      return u(t), e(t), E(t), t.D.set(n, !1), t.o.delete(n), !0;
    }, o.clear = function () {
      var n = this[Q];
      u(n), p(n).size && (e(n), E(n), n.D = new Map(), i(n.t, function (t) {
        n.D.set(t, !1);
      }), n.o.clear());
    }, o.forEach = function (n, t) {
      var r = this;
      p(this[Q]).forEach(function (e, i) {
        n.call(t, r.get(i), i, r);
      });
    }, o.get = function (n) {
      var t = this[Q];
      u(t);
      var i = p(t).get(n);
      if (t.I || !r(i)) return i;
      if (i !== t.t.get(n)) return i;
      var o = R(t.A.h, i, t);
      return e(t), t.o.set(n, o), o;
    }, o.keys = function () {
      return p(this[Q]).keys();
    }, o.values = function () {
      var n,
          t = this,
          r = this.keys();
      return (n = {})[V] = function () {
        return t.values();
      }, n.next = function () {
        var n = r.next();
        return n.done ? n : {
          done: !1,
          value: t.get(n.value)
        };
      }, n;
    }, o.entries = function () {
      var n,
          t = this,
          r = this.keys();
      return (n = {})[V] = function () {
        return t.entries();
      }, n.next = function () {
        var n = r.next();
        if (n.done) return n;
        var e = t.get(n.value);
        return {
          done: !1,
          value: [n.value, e]
        };
      }, n;
    }, o[V] = function () {
      return this.entries();
    }, n;
  }(),
      c = function () {
    function n(n, t) {
      return this[Q] = {
        i: 3,
        l: t,
        A: t ? t.A : _(),
        P: !1,
        I: !1,
        o: void 0,
        t: n,
        k: this,
        p: new Map(),
        g: !1,
        C: !1
      }, this;
    }

    t(n, Set);
    var r = n.prototype;
    return Object.defineProperty(r, "size", {
      get: function () {
        return p(this[Q]).size;
      }
    }), r.has = function (n) {
      var t = this[Q];
      return u(t), t.o ? !!t.o.has(n) || !(!t.p.has(n) || !t.o.has(t.p.get(n))) : t.t.has(n);
    }, r.add = function (n) {
      var t = this[Q];
      return u(t), this.has(n) || (o(t), E(t), t.o.add(n)), this;
    }, r.delete = function (n) {
      if (!this.has(n)) return !1;
      var t = this[Q];
      return u(t), o(t), E(t), t.o.delete(n) || !!t.p.has(n) && t.o.delete(t.p.get(n));
    }, r.clear = function () {
      var n = this[Q];
      u(n), p(n).size && (o(n), E(n), n.o.clear());
    }, r.values = function () {
      var n = this[Q];
      return u(n), o(n), n.o.values();
    }, r.entries = function () {
      var n = this[Q];
      return u(n), o(n), n.o.entries();
    }, r.keys = function () {
      return this.values();
    }, r[V] = function () {
      return this.values();
    }, r.forEach = function (n, t) {
      for (var r = this.values(), e = r.next(); !e.done;) n.call(t, e.value, e.value, this), e = r.next();
    }, n;
  }();

  m("MapSet", {
    T: function (n, t) {
      return new f(n, t);
    },
    F: function (n, t) {
      return new c(n, t);
    }
  });
}

function J() {
  T(), C(), F();
}

function K(n) {
  return n;
}

function $(n) {
  return n;
}

var G,
    U,
    W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
    X = "undefined" != typeof Map,
    q = "undefined" != typeof Set,
    B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
    H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = !0, G),
    L = W ? Symbol.for("immer-draftable") : "__$immer_draftable",
    Q = W ? Symbol.for("immer-state") : "__$immer_state",
    V = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator",
    Y = {
  0: "Illegal state",
  1: "Immer drafts cannot have computed properties",
  2: "This object has been frozen and should not be mutated",
  3: function (n) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n;
  },
  4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  5: "Immer forbids circular references",
  6: "The first or second argument to `produce` must be a function",
  7: "The third argument to `produce` must be a function or undefined",
  8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
  10: "The given draft is already finalized",
  11: "Object.defineProperty() cannot be used on an Immer draft",
  12: "Object.setPrototypeOf() cannot be used on an Immer draft",
  13: "Immer only supports deleting array indices",
  14: "Immer only supports setting array indices and the 'length' property",
  15: function (n) {
    return "Cannot apply patch, path doesn't resolve: " + n;
  },
  16: 'Sets cannot have "replace" patches.',
  17: function (n) {
    return "Unsupported patch operation: " + n;
  },
  18: function (n) {
    return "The plugin for '" + n + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n + "()` when initializing your application.";
  },
  20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",
  21: function (n) {
    return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n + "'";
  },
  22: function (n) {
    return "'current' expects a draft, got: " + n;
  },
  23: function (n) {
    return "'original' expects a draft, got: " + n;
  }
},
    Z = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (n) {
  return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
} : Object.getOwnPropertyNames,
    nn = Object.getOwnPropertyDescriptors || function (n) {
  var t = {};
  return Z(n).forEach(function (r) {
    t[r] = Object.getOwnPropertyDescriptor(n, r);
  }), t;
},
    tn = {},
    rn = {
  get: function (n, t) {
    if (t === Q) return n;
    var e = p(n);
    if (!u(e, t)) return function (n, t, r) {
      var e,
          i = I(t, r);
      return i ? "value" in i ? i.value : null === (e = i.get) || void 0 === e ? void 0 : e.call(n.k) : void 0;
    }(n, e, t);
    var i = e[t];
    return n.I || !r(i) ? i : i === z(n.t, t) ? (k(n), n.o[t] = R(n.A.h, i, n)) : i;
  },
  has: function (n, t) {
    return t in p(n);
  },
  ownKeys: function (n) {
    return Reflect.ownKeys(p(n));
  },
  set: function (n, t, r) {
    var e = I(p(n), t);
    if (null == e ? void 0 : e.set) return e.set.call(n.k, r), !0;

    if (!n.P) {
      var i = z(p(n), t),
          o = null == i ? void 0 : i[Q];
      if (o && o.t === r) return n.o[t] = r, n.D[t] = !1, !0;
      if (c(r, i) && (void 0 !== r || u(n.t, t))) return !0;
      k(n), E(n);
    }

    return n.o[t] = r, n.D[t] = !0, !0;
  },
  deleteProperty: function (n, t) {
    return void 0 !== z(n.t, t) || t in n.t ? (n.D[t] = !1, k(n), E(n)) : delete n.D[t], n.o && delete n.o[t], !0;
  },
  getOwnPropertyDescriptor: function (n, t) {
    var r = p(n),
        e = Reflect.getOwnPropertyDescriptor(r, t);
    return e ? {
      writable: !0,
      configurable: 1 !== n.i || "length" !== t,
      enumerable: e.enumerable,
      value: r[t]
    } : e;
  },
  defineProperty: function () {
    n(11);
  },
  getPrototypeOf: function (n) {
    return Object.getPrototypeOf(n.t);
  },
  setPrototypeOf: function () {
    n(12);
  }
},
    en = {};

exports.immerable = L;
exports.nothing = H;
i(rn, function (n, t) {
  en[n] = function () {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), en.deleteProperty = function (t, r) {
  return "production" !== "development" && isNaN(parseInt(r)) && n(13), rn.deleteProperty.call(this, t[0], r);
}, en.set = function (t, r, e) {
  return "production" !== "development" && "length" !== r && isNaN(parseInt(r)) && n(14), rn.set.call(this, t[0], r, e, t[0]);
};

var on = function () {
  function e(n) {
    this.O = B, this.N = !0, "boolean" == typeof (null == n ? void 0 : n.useProxies) && this.setUseProxies(n.useProxies), "boolean" == typeof (null == n ? void 0 : n.autoFreeze) && this.setAutoFreeze(n.autoFreeze), this.produce = this.produce.bind(this), this.produceWithPatches = this.produceWithPatches.bind(this);
  }

  var i = e.prototype;
  return i.produce = function (t, e, i) {
    if ("function" == typeof t && "function" != typeof e) {
      var o = e;
      e = t;
      var u = this;
      return function (n) {
        var t = this;
        void 0 === n && (n = o);

        for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];

        return u.produce(n, function (n) {
          var r;
          return (r = e).call.apply(r, [t, n].concat(i));
        });
      };
    }

    var a;

    if ("function" != typeof e && n(6), void 0 !== i && "function" != typeof i && n(7), r(t)) {
      var f = w(this),
          c = R(this, t, void 0),
          s = !0;

      try {
        a = e(c), s = !1;
      } finally {
        s ? g(f) : O(f);
      }

      return "undefined" != typeof Promise && a instanceof Promise ? a.then(function (n) {
        return j(f, i), P(n, f);
      }, function (n) {
        throw g(f), n;
      }) : (j(f, i), P(a, f));
    }

    if (!t || "object" != typeof t) {
      if ((a = e(t)) === H) return;
      return void 0 === a && (a = t), this.N && d(a, !0), a;
    }

    n(21, t);
  }, i.produceWithPatches = function (n, t) {
    var r,
        e,
        i = this;
    return "function" == typeof n ? function (t) {
      for (var r = arguments.length, e = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) e[o - 1] = arguments[o];

      return i.produceWithPatches(t, function (t) {
        return n.apply(void 0, [t].concat(e));
      });
    } : [this.produce(n, t, function (n, t) {
      r = n, e = t;
    }), r, e];
  }, i.createDraft = function (e) {
    r(e) || n(8), t(e) && (e = D(e));
    var i = w(this),
        o = R(this, e, void 0);
    return o[Q].C = !0, O(i), o;
  }, i.finishDraft = function (t, r) {
    var e = t && t[Q];
    "production" !== "development" && (e && e.C || n(9), e.I && n(10));
    var i = e.A;
    return j(i, r), P(void 0, i);
  }, i.setAutoFreeze = function (n) {
    this.N = n;
  }, i.setUseProxies = function (t) {
    t && !B && n(20), this.O = t;
  }, i.applyPatches = function (n, r) {
    var e;

    for (e = r.length - 1; e >= 0; e--) {
      var i = r[e];

      if (0 === i.path.length && "replace" === i.op) {
        n = i.value;
        break;
      }
    }

    var o = b("Patches").$;
    return t(n) ? o(n, r) : this.produce(n, function (n) {
      return o(n, r.slice(e + 1));
    });
  }, e;
}(),
    un = new on(),
    an = un.produce,
    fn = un.produceWithPatches.bind(un),
    cn = un.setAutoFreeze.bind(un),
    sn = un.setUseProxies.bind(un),
    vn = un.applyPatches.bind(un),
    pn = un.createDraft.bind(un),
    ln = un.finishDraft.bind(un);

exports.finishDraft = ln;
exports.createDraft = pn;
exports.applyPatches = vn;
exports.setUseProxies = sn;
exports.setAutoFreeze = cn;
exports.produceWithPatches = fn;
exports.produce = an;
exports.Immer = on;
var _default = an;
exports.default = _default;
},{}],"app/actions/keys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeDir = changeDir;

var _sm = require("../state-managment/sm");

async function changeDir(event) {
  if (!event) return;
  const keyDir = {
    37: "L",
    38: "U",
    39: "R",
    40: "D"
  };
  await (0, _sm.updateStatePromise)(state => {
    state.dirArr[state.dirArr.length - 1] = keyDir[event.keyCode];
  });
}
},{"../state-managment/sm":"app/state-managment/sm.js"}],"app/state-managment/sm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initState = initState;
exports.getCurrentState = getCurrentState;
exports.updateStatePromise = exports.updateState = void 0;

var _immer = require("immer");

var _index = require("../../index");

var _keys = require("../actions/keys");

let lastState;

function initState(state) {
  lastState = state;
  (0, _index.renderView)(lastState);
  requestTimeout(() => {
    move();
  }, 1000);
  document.addEventListener("keydown", e => {
    (0, _keys.changeDir)(e);
  }, false);
}

async function move() {
  let ateFood = false;
  const moveDict = {
    "D": {
      x: 0,
      y: 1
    },
    "L": {
      x: -1,
      y: 0
    },
    "R": {
      x: 1,
      y: 0
    },
    "U": {
      x: 0,
      y: -1
    }
  };
  const nextX = lastState.headPos.x + moveDict[lastState.dirArr[lastState.dirArr.length - 1]].x;
  const nextY = lastState.headPos.y + moveDict[lastState.dirArr[lastState.dirArr.length - 1]].y;

  if (!lastState.gameArea[nextY] || !lastState.gameArea[nextY][nextX]) {
    window.alert("you lost");
    return;
  }

  ;

  if (lastState.gameArea[nextY][nextX] === 2) {
    window.alert("you lost");
    return;
  }

  ;
  if (lastState.gameArea[nextY][nextX] === 3) ateFood = true;
  await updateStatePromise(state => {
    state.gameArea[nextY][nextX] = 2;
    state.dirArr.push(state.dirArr[state.dirArr.length - 1]);
    state.headPos.x = nextX;
    state.headPos.y = nextY;

    if (!ateFood) {
      const dir = state.dirArr.shift();
      const tailNextX = state.tailPos.x + moveDict[dir].x;
      const tailNextY = state.tailPos.y + moveDict[dir].y;
      state.gameArea[state.tailPos.y][state.tailPos.x] = 1;
      state.tailPos.x = tailNextX;
      state.tailPos.y = tailNextY;
    } else {
      const coord = getNewFoodSpace(lastState);
      state.gameArea[coord.y][coord.x] = 3;
    }
  });
  requestTimeout(() => {
    move();
  }, 200);
}

function getNewFoodSpace(state) {
  let emptySpaceNotFound = true;

  while (emptySpaceNotFound) {
    const x = Math.floor(Math.random() * 25);
    const y = Math.floor(Math.random() * 25);

    if (state.gameArea[y][x] === 1) {
      emptySpaceNotFound = false;
      return {
        x: x,
        y: y
      };
    }
  }
}

const updateState = function updateState(updateFucnt) {
  const nextState = (0, _immer.produce)(lastState, updateFucnt);
  (0, _index.renderView)(nextState);
  lastState = nextState;
  return true;
};

exports.updateState = updateState;

const updateStatePromise = function updateStatePromise(updateFucnt) {
  return new Promise((resolve, reject) => {
    try {
      const nextState = (0, _immer.produce)(lastState, updateFucnt);
      (0, _index.renderView)(nextState);
      lastState = nextState;
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

exports.updateStatePromise = updateStatePromise;

function getCurrentState() {
  return lastState;
}

const requestTimeout = (funct, delay) => {
  const start = new Date().getTime();

  const loop = () => {
    const diff = new Date().getTime() - start;

    if (diff >= delay) {
      funct();
      return;
    }

    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
};
},{"immer":"node_modules/immer/dist/immer.esm.js","../../index":"index.js","../actions/keys":"app/actions/keys.js"}],"index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderView = renderView;

var _preact = require("preact");

var _index = require("./app/views/index");

var _sm = require("./app/state-managment/sm");

const AREA_WIDTH = 25;
const AREA_HEIGHT = 25;
const initialState = {
  gameArea: [],
  headPos: {
    x: Math.floor(AREA_WIDTH / 2),
    y: Math.floor(AREA_HEIGHT / 2)
  },
  tailPos: {
    x: Math.floor(AREA_WIDTH / 2),
    y: Math.floor(AREA_HEIGHT / 2)
  },
  food: {
    x: Math.floor(AREA_WIDTH / 2),
    y: Math.floor(AREA_HEIGHT / 2) + 5
  },
  dirArr: ["D"] // D - down U - up L - left R - right

};

for (let i = 0; i < AREA_HEIGHT; i++) {
  initialState.gameArea[i] = [];

  for (let j = 0; j < AREA_WIDTH; j++) {
    if (initialState.headPos.x === j && initialState.headPos.y === i || initialState.tailPos.x === j && initialState.tailPos.y === i) {
      initialState.gameArea[i][j] = 2;
    } else if (initialState.food.x === j && initialState.food.y === i) {
      initialState.gameArea[i][j] = 3;
    } else {
      initialState.gameArea[i][j] = 1;
    }
  }
}

(0, _sm.initState)(initialState);

function renderView(state) {
  (0, _preact.render)((0, _index.main)(state), document.querySelector('.main'));
}
},{"preact":"node_modules/preact/dist/preact.module.js","./app/views/index":"app/views/index.js","./app/state-managment/sm":"app/state-managment/sm.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54499" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/preact-app.e31bb0bc.js.map