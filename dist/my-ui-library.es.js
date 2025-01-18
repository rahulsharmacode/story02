import Se from "react";
function Pe(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var V = { exports: {} }, H = { exports: {} }, m = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe;
function Oe() {
  if (fe) return m;
  fe = 1;
  var o = typeof Symbol == "function" && Symbol.for, C = o ? Symbol.for("react.element") : 60103, P = o ? Symbol.for("react.portal") : 60106, f = o ? Symbol.for("react.fragment") : 60107, E = o ? Symbol.for("react.strict_mode") : 60108, a = o ? Symbol.for("react.profiler") : 60114, O = o ? Symbol.for("react.provider") : 60109, y = o ? Symbol.for("react.context") : 60110, _ = o ? Symbol.for("react.async_mode") : 60111, S = o ? Symbol.for("react.concurrent_mode") : 60111, b = o ? Symbol.for("react.forward_ref") : 60112, g = o ? Symbol.for("react.suspense") : 60113, x = o ? Symbol.for("react.suspense_list") : 60120, w = o ? Symbol.for("react.memo") : 60115, M = o ? Symbol.for("react.lazy") : 60116, R = o ? Symbol.for("react.block") : 60121, I = o ? Symbol.for("react.fundamental") : 60117, q = o ? Symbol.for("react.responder") : 60118, F = o ? Symbol.for("react.scope") : 60119;
  function j(t) {
    if (typeof t == "object" && t !== null) {
      var D = t.$$typeof;
      switch (D) {
        case C:
          switch (t = t.type, t) {
            case _:
            case S:
            case f:
            case a:
            case E:
            case g:
              return t;
            default:
              switch (t = t && t.$$typeof, t) {
                case y:
                case b:
                case M:
                case w:
                case O:
                  return t;
                default:
                  return D;
              }
          }
        case P:
          return D;
      }
    }
  }
  function A(t) {
    return j(t) === S;
  }
  return m.AsyncMode = _, m.ConcurrentMode = S, m.ContextConsumer = y, m.ContextProvider = O, m.Element = C, m.ForwardRef = b, m.Fragment = f, m.Lazy = M, m.Memo = w, m.Portal = P, m.Profiler = a, m.StrictMode = E, m.Suspense = g, m.isAsyncMode = function(t) {
    return A(t) || j(t) === _;
  }, m.isConcurrentMode = A, m.isContextConsumer = function(t) {
    return j(t) === y;
  }, m.isContextProvider = function(t) {
    return j(t) === O;
  }, m.isElement = function(t) {
    return typeof t == "object" && t !== null && t.$$typeof === C;
  }, m.isForwardRef = function(t) {
    return j(t) === b;
  }, m.isFragment = function(t) {
    return j(t) === f;
  }, m.isLazy = function(t) {
    return j(t) === M;
  }, m.isMemo = function(t) {
    return j(t) === w;
  }, m.isPortal = function(t) {
    return j(t) === P;
  }, m.isProfiler = function(t) {
    return j(t) === a;
  }, m.isStrictMode = function(t) {
    return j(t) === E;
  }, m.isSuspense = function(t) {
    return j(t) === g;
  }, m.isValidElementType = function(t) {
    return typeof t == "string" || typeof t == "function" || t === f || t === S || t === a || t === E || t === g || t === x || typeof t == "object" && t !== null && (t.$$typeof === M || t.$$typeof === w || t.$$typeof === O || t.$$typeof === y || t.$$typeof === b || t.$$typeof === I || t.$$typeof === q || t.$$typeof === F || t.$$typeof === R);
  }, m.typeOf = j, m;
}
var T = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var le;
function _e() {
  return le || (le = 1, process.env.NODE_ENV !== "production" && function() {
    var o = typeof Symbol == "function" && Symbol.for, C = o ? Symbol.for("react.element") : 60103, P = o ? Symbol.for("react.portal") : 60106, f = o ? Symbol.for("react.fragment") : 60107, E = o ? Symbol.for("react.strict_mode") : 60108, a = o ? Symbol.for("react.profiler") : 60114, O = o ? Symbol.for("react.provider") : 60109, y = o ? Symbol.for("react.context") : 60110, _ = o ? Symbol.for("react.async_mode") : 60111, S = o ? Symbol.for("react.concurrent_mode") : 60111, b = o ? Symbol.for("react.forward_ref") : 60112, g = o ? Symbol.for("react.suspense") : 60113, x = o ? Symbol.for("react.suspense_list") : 60120, w = o ? Symbol.for("react.memo") : 60115, M = o ? Symbol.for("react.lazy") : 60116, R = o ? Symbol.for("react.block") : 60121, I = o ? Symbol.for("react.fundamental") : 60117, q = o ? Symbol.for("react.responder") : 60118, F = o ? Symbol.for("react.scope") : 60119;
    function j(r) {
      return typeof r == "string" || typeof r == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      r === f || r === S || r === a || r === E || r === g || r === x || typeof r == "object" && r !== null && (r.$$typeof === M || r.$$typeof === w || r.$$typeof === O || r.$$typeof === y || r.$$typeof === b || r.$$typeof === I || r.$$typeof === q || r.$$typeof === F || r.$$typeof === R);
    }
    function A(r) {
      if (typeof r == "object" && r !== null) {
        var Y = r.$$typeof;
        switch (Y) {
          case C:
            var N = r.type;
            switch (N) {
              case _:
              case S:
              case f:
              case a:
              case E:
              case g:
                return N;
              default:
                var ce = N && N.$$typeof;
                switch (ce) {
                  case y:
                  case b:
                  case M:
                  case w:
                  case O:
                    return ce;
                  default:
                    return Y;
                }
            }
          case P:
            return Y;
        }
      }
    }
    var t = _, D = S, J = y, X = O, G = C, K = b, U = f, Z = M, Q = w, L = P, ee = a, k = E, W = g, B = !1;
    function re(r) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(r) || A(r) === _;
    }
    function e(r) {
      return A(r) === S;
    }
    function n(r) {
      return A(r) === y;
    }
    function l(r) {
      return A(r) === O;
    }
    function u(r) {
      return typeof r == "object" && r !== null && r.$$typeof === C;
    }
    function i(r) {
      return A(r) === b;
    }
    function p(r) {
      return A(r) === f;
    }
    function s(r) {
      return A(r) === M;
    }
    function c(r) {
      return A(r) === w;
    }
    function d(r) {
      return A(r) === P;
    }
    function h(r) {
      return A(r) === a;
    }
    function v(r) {
      return A(r) === E;
    }
    function $(r) {
      return A(r) === g;
    }
    T.AsyncMode = t, T.ConcurrentMode = D, T.ContextConsumer = J, T.ContextProvider = X, T.Element = G, T.ForwardRef = K, T.Fragment = U, T.Lazy = Z, T.Memo = Q, T.Portal = L, T.Profiler = ee, T.StrictMode = k, T.Suspense = W, T.isAsyncMode = re, T.isConcurrentMode = e, T.isContextConsumer = n, T.isContextProvider = l, T.isElement = u, T.isForwardRef = i, T.isFragment = p, T.isLazy = s, T.isMemo = c, T.isPortal = d, T.isProfiler = h, T.isStrictMode = v, T.isSuspense = $, T.isValidElementType = j, T.typeOf = A;
  }()), T;
}
var ye;
function Ee() {
  return ye || (ye = 1, process.env.NODE_ENV === "production" ? H.exports = Oe() : H.exports = _e()), H.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var te, pe;
function Re() {
  if (pe) return te;
  pe = 1;
  var o = Object.getOwnPropertySymbols, C = Object.prototype.hasOwnProperty, P = Object.prototype.propertyIsEnumerable;
  function f(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function E() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var O = {}, y = 0; y < 10; y++)
        O["_" + String.fromCharCode(y)] = y;
      var _ = Object.getOwnPropertyNames(O).map(function(b) {
        return O[b];
      });
      if (_.join("") !== "0123456789")
        return !1;
      var S = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(b) {
        S[b] = b;
      }), Object.keys(Object.assign({}, S)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return te = E() ? Object.assign : function(a, O) {
    for (var y, _ = f(a), S, b = 1; b < arguments.length; b++) {
      y = Object(arguments[b]);
      for (var g in y)
        C.call(y, g) && (_[g] = y[g]);
      if (o) {
        S = o(y);
        for (var x = 0; x < S.length; x++)
          P.call(y, S[x]) && (_[S[x]] = y[S[x]]);
      }
    }
    return _;
  }, te;
}
var ne, de;
function ue() {
  if (de) return ne;
  de = 1;
  var o = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ne = o, ne;
}
var oe, ve;
function ge() {
  return ve || (ve = 1, oe = Function.call.bind(Object.prototype.hasOwnProperty)), oe;
}
var ie, be;
function Ce() {
  if (be) return ie;
  be = 1;
  var o = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var C = /* @__PURE__ */ ue(), P = {}, f = /* @__PURE__ */ ge();
    o = function(a) {
      var O = "Warning: " + a;
      typeof console < "u" && console.error(O);
      try {
        throw new Error(O);
      } catch {
      }
    };
  }
  function E(a, O, y, _, S) {
    if (process.env.NODE_ENV !== "production") {
      for (var b in a)
        if (f(a, b)) {
          var g;
          try {
            if (typeof a[b] != "function") {
              var x = Error(
                (_ || "React class") + ": " + y + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw x.name = "Invariant Violation", x;
            }
            g = a[b](O, b, _, y, null, C);
          } catch (M) {
            g = M;
          }
          if (g && !(g instanceof Error) && o(
            (_ || "React class") + ": type specification of " + y + " `" + b + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in P)) {
            P[g.message] = !0;
            var w = S ? S() : "";
            o(
              "Failed " + y + " type: " + g.message + (w ?? "")
            );
          }
        }
    }
  }
  return E.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (P = {});
  }, ie = E, ie;
}
var ae, me;
function xe() {
  if (me) return ae;
  me = 1;
  var o = Ee(), C = Re(), P = /* @__PURE__ */ ue(), f = /* @__PURE__ */ ge(), E = /* @__PURE__ */ Ce(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(y) {
    var _ = "Warning: " + y;
    typeof console < "u" && console.error(_);
    try {
      throw new Error(_);
    } catch {
    }
  });
  function O() {
    return null;
  }
  return ae = function(y, _) {
    var S = typeof Symbol == "function" && Symbol.iterator, b = "@@iterator";
    function g(e) {
      var n = e && (S && e[S] || e[b]);
      if (typeof n == "function")
        return n;
    }
    var x = "<<anonymous>>", w = {
      array: q("array"),
      bigint: q("bigint"),
      bool: q("boolean"),
      func: q("function"),
      number: q("number"),
      object: q("object"),
      string: q("string"),
      symbol: q("symbol"),
      any: F(),
      arrayOf: j,
      element: A(),
      elementType: t(),
      instanceOf: D,
      node: K(),
      objectOf: X,
      oneOf: J,
      oneOfType: G,
      shape: Z,
      exact: Q
    };
    function M(e, n) {
      return e === n ? e !== 0 || 1 / e === 1 / n : e !== e && n !== n;
    }
    function R(e, n) {
      this.message = e, this.data = n && typeof n == "object" ? n : {}, this.stack = "";
    }
    R.prototype = Error.prototype;
    function I(e) {
      if (process.env.NODE_ENV !== "production")
        var n = {}, l = 0;
      function u(p, s, c, d, h, v, $) {
        if (d = d || x, v = v || c, $ !== P) {
          if (_) {
            var r = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw r.name = "Invariant Violation", r;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Y = d + ":" + c;
            !n[Y] && // Avoid spamming the console because they are often not actionable except for lib authors
            l < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + v + "` prop on `" + d + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), n[Y] = !0, l++);
          }
        }
        return s[c] == null ? p ? s[c] === null ? new R("The " + h + " `" + v + "` is marked as required " + ("in `" + d + "`, but its value is `null`.")) : new R("The " + h + " `" + v + "` is marked as required in " + ("`" + d + "`, but its value is `undefined`.")) : null : e(s, c, d, h, v);
      }
      var i = u.bind(null, !1);
      return i.isRequired = u.bind(null, !0), i;
    }
    function q(e) {
      function n(l, u, i, p, s, c) {
        var d = l[u], h = k(d);
        if (h !== e) {
          var v = W(d);
          return new R(
            "Invalid " + p + " `" + s + "` of type " + ("`" + v + "` supplied to `" + i + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return I(n);
    }
    function F() {
      return I(O);
    }
    function j(e) {
      function n(l, u, i, p, s) {
        if (typeof e != "function")
          return new R("Property `" + s + "` of component `" + i + "` has invalid PropType notation inside arrayOf.");
        var c = l[u];
        if (!Array.isArray(c)) {
          var d = k(c);
          return new R("Invalid " + p + " `" + s + "` of type " + ("`" + d + "` supplied to `" + i + "`, expected an array."));
        }
        for (var h = 0; h < c.length; h++) {
          var v = e(c, h, i, p, s + "[" + h + "]", P);
          if (v instanceof Error)
            return v;
        }
        return null;
      }
      return I(n);
    }
    function A() {
      function e(n, l, u, i, p) {
        var s = n[l];
        if (!y(s)) {
          var c = k(s);
          return new R("Invalid " + i + " `" + p + "` of type " + ("`" + c + "` supplied to `" + u + "`, expected a single ReactElement."));
        }
        return null;
      }
      return I(e);
    }
    function t() {
      function e(n, l, u, i, p) {
        var s = n[l];
        if (!o.isValidElementType(s)) {
          var c = k(s);
          return new R("Invalid " + i + " `" + p + "` of type " + ("`" + c + "` supplied to `" + u + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return I(e);
    }
    function D(e) {
      function n(l, u, i, p, s) {
        if (!(l[u] instanceof e)) {
          var c = e.name || x, d = re(l[u]);
          return new R("Invalid " + p + " `" + s + "` of type " + ("`" + d + "` supplied to `" + i + "`, expected ") + ("instance of `" + c + "`."));
        }
        return null;
      }
      return I(n);
    }
    function J(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), O;
      function n(l, u, i, p, s) {
        for (var c = l[u], d = 0; d < e.length; d++)
          if (M(c, e[d]))
            return null;
        var h = JSON.stringify(e, function($, r) {
          var Y = W(r);
          return Y === "symbol" ? String(r) : r;
        });
        return new R("Invalid " + p + " `" + s + "` of value `" + String(c) + "` " + ("supplied to `" + i + "`, expected one of " + h + "."));
      }
      return I(n);
    }
    function X(e) {
      function n(l, u, i, p, s) {
        if (typeof e != "function")
          return new R("Property `" + s + "` of component `" + i + "` has invalid PropType notation inside objectOf.");
        var c = l[u], d = k(c);
        if (d !== "object")
          return new R("Invalid " + p + " `" + s + "` of type " + ("`" + d + "` supplied to `" + i + "`, expected an object."));
        for (var h in c)
          if (f(c, h)) {
            var v = e(c, h, i, p, s + "." + h, P);
            if (v instanceof Error)
              return v;
          }
        return null;
      }
      return I(n);
    }
    function G(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), O;
      for (var n = 0; n < e.length; n++) {
        var l = e[n];
        if (typeof l != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + B(l) + " at index " + n + "."
          ), O;
      }
      function u(i, p, s, c, d) {
        for (var h = [], v = 0; v < e.length; v++) {
          var $ = e[v], r = $(i, p, s, c, d, P);
          if (r == null)
            return null;
          r.data && f(r.data, "expectedType") && h.push(r.data.expectedType);
        }
        var Y = h.length > 0 ? ", expected one of type [" + h.join(", ") + "]" : "";
        return new R("Invalid " + c + " `" + d + "` supplied to " + ("`" + s + "`" + Y + "."));
      }
      return I(u);
    }
    function K() {
      function e(n, l, u, i, p) {
        return L(n[l]) ? null : new R("Invalid " + i + " `" + p + "` supplied to " + ("`" + u + "`, expected a ReactNode."));
      }
      return I(e);
    }
    function U(e, n, l, u, i) {
      return new R(
        (e || "React class") + ": " + n + " type `" + l + "." + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + i + "`."
      );
    }
    function Z(e) {
      function n(l, u, i, p, s) {
        var c = l[u], d = k(c);
        if (d !== "object")
          return new R("Invalid " + p + " `" + s + "` of type `" + d + "` " + ("supplied to `" + i + "`, expected `object`."));
        for (var h in e) {
          var v = e[h];
          if (typeof v != "function")
            return U(i, p, s, h, W(v));
          var $ = v(c, h, i, p, s + "." + h, P);
          if ($)
            return $;
        }
        return null;
      }
      return I(n);
    }
    function Q(e) {
      function n(l, u, i, p, s) {
        var c = l[u], d = k(c);
        if (d !== "object")
          return new R("Invalid " + p + " `" + s + "` of type `" + d + "` " + ("supplied to `" + i + "`, expected `object`."));
        var h = C({}, l[u], e);
        for (var v in h) {
          var $ = e[v];
          if (f(e, v) && typeof $ != "function")
            return U(i, p, s, v, W($));
          if (!$)
            return new R(
              "Invalid " + p + " `" + s + "` key `" + v + "` supplied to `" + i + "`.\nBad object: " + JSON.stringify(l[u], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var r = $(c, v, i, p, s + "." + v, P);
          if (r)
            return r;
        }
        return null;
      }
      return I(n);
    }
    function L(e) {
      switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !e;
        case "object":
          if (Array.isArray(e))
            return e.every(L);
          if (e === null || y(e))
            return !0;
          var n = g(e);
          if (n) {
            var l = n.call(e), u;
            if (n !== e.entries) {
              for (; !(u = l.next()).done; )
                if (!L(u.value))
                  return !1;
            } else
              for (; !(u = l.next()).done; ) {
                var i = u.value;
                if (i && !L(i[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ee(e, n) {
      return e === "symbol" ? !0 : n ? n["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && n instanceof Symbol : !1;
    }
    function k(e) {
      var n = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : ee(n, e) ? "symbol" : n;
    }
    function W(e) {
      if (typeof e > "u" || e === null)
        return "" + e;
      var n = k(e);
      if (n === "object") {
        if (e instanceof Date)
          return "date";
        if (e instanceof RegExp)
          return "regexp";
      }
      return n;
    }
    function B(e) {
      var n = W(e);
      switch (n) {
        case "array":
        case "object":
          return "an " + n;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + n;
        default:
          return n;
      }
    }
    function re(e) {
      return !e.constructor || !e.constructor.name ? x : e.constructor.name;
    }
    return w.checkPropTypes = E, w.resetWarningCache = E.resetWarningCache, w.PropTypes = w, w;
  }, ae;
}
var se, Te;
function we() {
  if (Te) return se;
  Te = 1;
  var o = /* @__PURE__ */ ue();
  function C() {
  }
  function P() {
  }
  return P.resetWarningCache = C, se = function() {
    function f(O, y, _, S, b, g) {
      if (g !== o) {
        var x = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw x.name = "Invariant Violation", x;
      }
    }
    f.isRequired = f;
    function E() {
      return f;
    }
    var a = {
      array: f,
      bigint: f,
      bool: f,
      func: f,
      number: f,
      object: f,
      string: f,
      symbol: f,
      any: f,
      arrayOf: E,
      element: f,
      elementType: f,
      instanceOf: E,
      node: f,
      objectOf: E,
      oneOf: E,
      oneOfType: E,
      shape: E,
      exact: E,
      checkPropTypes: P,
      resetWarningCache: C
    };
    return a.PropTypes = a, a;
  }, se;
}
var he;
function Ae() {
  if (he) return V.exports;
  if (he = 1, process.env.NODE_ENV !== "production") {
    var o = Ee(), C = !0;
    V.exports = /* @__PURE__ */ xe()(o.isElement, C);
  } else
    V.exports = /* @__PURE__ */ we()();
  return V.exports;
}
var je = /* @__PURE__ */ Ae();
const z = /* @__PURE__ */ Pe(je), Ie = ({
  primary: o = !1,
  backgroundColor: C = null,
  size: P = "medium",
  label: f,
  ...E
}) => {
  const a = o ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ Se.createElement(
    "button",
    {
      type: "button",
      className: ["storybook-button", `storybook-button--${P}`, a].join(" "),
      style: C && { backgroundColor: C },
      ...E
    },
    f
  );
};
Ie.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: z.bool,
  /** What background color to use */
  backgroundColor: z.string,
  /** How large should the button be? */
  size: z.oneOf(["small", "medium", "large"]),
  /** Button contents */
  label: z.string.isRequired,
  /** Optional click handler */
  onClick: z.func
};
export {
  Ie as Button
};
//# sourceMappingURL=my-ui-library.es.js.map
