(function () {
  const c = document.createElement('link').relList;
  if (c && c.supports && c.supports('modulepreload')) return;
  for (const N of document.querySelectorAll('link[rel="modulepreload"]')) w(N);
  new MutationObserver((N) => {
    for (const C of N)
      if (C.type === 'childList')
        for (const j of C.addedNodes) j.tagName === 'LINK' && j.rel === 'modulepreload' && w(j);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(N) {
    const C = {};
    return (
      N.integrity && (C.integrity = N.integrity),
      N.referrerPolicy && (C.referrerPolicy = N.referrerPolicy),
      N.crossOrigin === 'use-credentials'
        ? (C.credentials = 'include')
        : N.crossOrigin === 'anonymous'
          ? (C.credentials = 'omit')
          : (C.credentials = 'same-origin'),
      C
    );
  }
  function w(N) {
    if (N.ep) return;
    N.ep = !0;
    const C = a(N);
    fetch(N.href, C);
  }
})();
var Ko = { exports: {} },
  Ht = {},
  Qo = { exports: {} },
  oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vu;
function rp() {
  if (Vu) return oe;
  Vu = 1;
  var l = Symbol.for('react.element'),
    c = Symbol.for('react.portal'),
    a = Symbol.for('react.fragment'),
    w = Symbol.for('react.strict_mode'),
    N = Symbol.for('react.profiler'),
    C = Symbol.for('react.provider'),
    j = Symbol.for('react.context'),
    p = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    z = Symbol.for('react.memo'),
    K = Symbol.for('react.lazy'),
    O = Symbol.iterator;
  function b(f) {
    return f === null || typeof f != 'object'
      ? null
      : ((f = (O && f[O]) || f['@@iterator']), typeof f == 'function' ? f : null);
  }
  var Z = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Q = Object.assign,
    Y = {};
  function P(f, S, G) {
    ((this.props = f), (this.context = S), (this.refs = Y), (this.updater = G || Z));
  }
  ((P.prototype.isReactComponent = {}),
    (P.prototype.setState = function (f, S) {
      if (typeof f != 'object' && typeof f != 'function' && f != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, f, S, 'setState');
    }),
    (P.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, 'forceUpdate');
    }));
  function I() {}
  I.prototype = P.prototype;
  function me(f, S, G) {
    ((this.props = f), (this.context = S), (this.refs = Y), (this.updater = G || Z));
  }
  var pe = (me.prototype = new I());
  ((pe.constructor = me), Q(pe, P.prototype), (pe.isPureReactComponent = !0));
  var re = Array.isArray,
    ue = Object.prototype.hasOwnProperty,
    fe = { current: null },
    ve = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ie(f, S, G) {
    var ie,
      se = {},
      le = null,
      ge = null;
    if (S != null)
      for (ie in (S.ref !== void 0 && (ge = S.ref), S.key !== void 0 && (le = '' + S.key), S))
        ue.call(S, ie) && !ve.hasOwnProperty(ie) && (se[ie] = S[ie]);
    var ce = arguments.length - 2;
    if (ce === 1) se.children = G;
    else if (1 < ce) {
      for (var ye = Array(ce), Ke = 0; Ke < ce; Ke++) ye[Ke] = arguments[Ke + 2];
      se.children = ye;
    }
    if (f && f.defaultProps)
      for (ie in ((ce = f.defaultProps), ce)) se[ie] === void 0 && (se[ie] = ce[ie]);
    return { $$typeof: l, type: f, key: le, ref: ge, props: se, _owner: fe.current };
  }
  function Ge(f, S) {
    return { $$typeof: l, type: f.type, key: S, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function We(f) {
    return typeof f == 'object' && f !== null && f.$$typeof === l;
  }
  function cn(f) {
    var S = { '=': '=0', ':': '=2' };
    return (
      '$' +
      f.replace(/[=:]/g, function (G) {
        return S[G];
      })
    );
  }
  var Ae = /\/+/g;
  function X(f, S) {
    return typeof f == 'object' && f !== null && f.key != null ? cn('' + f.key) : S.toString(36);
  }
  function Te(f, S, G, ie, se) {
    var le = typeof f;
    (le === 'undefined' || le === 'boolean') && (f = null);
    var ge = !1;
    if (f === null) ge = !0;
    else
      switch (le) {
        case 'string':
        case 'number':
          ge = !0;
          break;
        case 'object':
          switch (f.$$typeof) {
            case l:
            case c:
              ge = !0;
          }
      }
    if (ge)
      return (
        (ge = f),
        (se = se(ge)),
        (f = ie === '' ? '.' + X(ge, 0) : ie),
        re(se)
          ? ((G = ''),
            f != null && (G = f.replace(Ae, '$&/') + '/'),
            Te(se, S, G, '', function (Ke) {
              return Ke;
            }))
          : se != null &&
            (We(se) &&
              (se = Ge(
                se,
                G +
                  (!se.key || (ge && ge.key === se.key)
                    ? ''
                    : ('' + se.key).replace(Ae, '$&/') + '/') +
                  f
              )),
            S.push(se)),
        1
      );
    if (((ge = 0), (ie = ie === '' ? '.' : ie + ':'), re(f)))
      for (var ce = 0; ce < f.length; ce++) {
        le = f[ce];
        var ye = ie + X(le, ce);
        ge += Te(le, S, G, ye, se);
      }
    else if (((ye = b(f)), typeof ye == 'function'))
      for (f = ye.call(f), ce = 0; !(le = f.next()).done; )
        ((le = le.value), (ye = ie + X(le, ce++)), (ge += Te(le, S, G, ye, se)));
    else if (le === 'object')
      throw (
        (S = String(f)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (S === '[object Object]' ? 'object with keys {' + Object.keys(f).join(', ') + '}' : S) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    return ge;
  }
  function Ve(f, S, G) {
    if (f == null) return f;
    var ie = [],
      se = 0;
    return (
      Te(f, ie, '', '', function (le) {
        return S.call(G, le, se++);
      }),
      ie
    );
  }
  function Re(f) {
    if (f._status === -1) {
      var S = f._result;
      ((S = S()),
        S.then(
          function (G) {
            (f._status === 0 || f._status === -1) && ((f._status = 1), (f._result = G));
          },
          function (G) {
            (f._status === 0 || f._status === -1) && ((f._status = 2), (f._result = G));
          }
        ),
        f._status === -1 && ((f._status = 0), (f._result = S)));
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var H = { current: null },
    F = { transition: null },
    V = { ReactCurrentDispatcher: H, ReactCurrentBatchConfig: F, ReactCurrentOwner: fe };
  function A() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (oe.Children = {
      map: Ve,
      forEach: function (f, S, G) {
        Ve(
          f,
          function () {
            S.apply(this, arguments);
          },
          G
        );
      },
      count: function (f) {
        var S = 0;
        return (
          Ve(f, function () {
            S++;
          }),
          S
        );
      },
      toArray: function (f) {
        return (
          Ve(f, function (S) {
            return S;
          }) || []
        );
      },
      only: function (f) {
        if (!We(f))
          throw Error('React.Children.only expected to receive a single React element child.');
        return f;
      },
    }),
    (oe.Component = P),
    (oe.Fragment = a),
    (oe.Profiler = N),
    (oe.PureComponent = me),
    (oe.StrictMode = w),
    (oe.Suspense = h),
    (oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V),
    (oe.act = A),
    (oe.cloneElement = function (f, S, G) {
      if (f == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + f + '.'
        );
      var ie = Q({}, f.props),
        se = f.key,
        le = f.ref,
        ge = f._owner;
      if (S != null) {
        if (
          (S.ref !== void 0 && ((le = S.ref), (ge = fe.current)),
          S.key !== void 0 && (se = '' + S.key),
          f.type && f.type.defaultProps)
        )
          var ce = f.type.defaultProps;
        for (ye in S)
          ue.call(S, ye) &&
            !ve.hasOwnProperty(ye) &&
            (ie[ye] = S[ye] === void 0 && ce !== void 0 ? ce[ye] : S[ye]);
      }
      var ye = arguments.length - 2;
      if (ye === 1) ie.children = G;
      else if (1 < ye) {
        ce = Array(ye);
        for (var Ke = 0; Ke < ye; Ke++) ce[Ke] = arguments[Ke + 2];
        ie.children = ce;
      }
      return { $$typeof: l, type: f.type, key: se, ref: le, props: ie, _owner: ge };
    }),
    (oe.createContext = function (f) {
      return (
        (f = {
          $$typeof: j,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (f.Provider = { $$typeof: C, _context: f }),
        (f.Consumer = f)
      );
    }),
    (oe.createElement = Ie),
    (oe.createFactory = function (f) {
      var S = Ie.bind(null, f);
      return ((S.type = f), S);
    }),
    (oe.createRef = function () {
      return { current: null };
    }),
    (oe.forwardRef = function (f) {
      return { $$typeof: p, render: f };
    }),
    (oe.isValidElement = We),
    (oe.lazy = function (f) {
      return { $$typeof: K, _payload: { _status: -1, _result: f }, _init: Re };
    }),
    (oe.memo = function (f, S) {
      return { $$typeof: z, type: f, compare: S === void 0 ? null : S };
    }),
    (oe.startTransition = function (f) {
      var S = F.transition;
      F.transition = {};
      try {
        f();
      } finally {
        F.transition = S;
      }
    }),
    (oe.unstable_act = A),
    (oe.useCallback = function (f, S) {
      return H.current.useCallback(f, S);
    }),
    (oe.useContext = function (f) {
      return H.current.useContext(f);
    }),
    (oe.useDebugValue = function () {}),
    (oe.useDeferredValue = function (f) {
      return H.current.useDeferredValue(f);
    }),
    (oe.useEffect = function (f, S) {
      return H.current.useEffect(f, S);
    }),
    (oe.useId = function () {
      return H.current.useId();
    }),
    (oe.useImperativeHandle = function (f, S, G) {
      return H.current.useImperativeHandle(f, S, G);
    }),
    (oe.useInsertionEffect = function (f, S) {
      return H.current.useInsertionEffect(f, S);
    }),
    (oe.useLayoutEffect = function (f, S) {
      return H.current.useLayoutEffect(f, S);
    }),
    (oe.useMemo = function (f, S) {
      return H.current.useMemo(f, S);
    }),
    (oe.useReducer = function (f, S, G) {
      return H.current.useReducer(f, S, G);
    }),
    (oe.useRef = function (f) {
      return H.current.useRef(f);
    }),
    (oe.useState = function (f) {
      return H.current.useState(f);
    }),
    (oe.useSyncExternalStore = function (f, S, G) {
      return H.current.useSyncExternalStore(f, S, G);
    }),
    (oe.useTransition = function () {
      return H.current.useTransition();
    }),
    (oe.version = '18.3.1'),
    oe
  );
}
var Bu;
function rl() {
  return (Bu || ((Bu = 1), (Qo.exports = rp())), Qo.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uu;
function sp() {
  if (Uu) return Ht;
  Uu = 1;
  var l = rl(),
    c = Symbol.for('react.element'),
    a = Symbol.for('react.fragment'),
    w = Object.prototype.hasOwnProperty,
    N = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(p, h, z) {
    var K,
      O = {},
      b = null,
      Z = null;
    (z !== void 0 && (b = '' + z),
      h.key !== void 0 && (b = '' + h.key),
      h.ref !== void 0 && (Z = h.ref));
    for (K in h) w.call(h, K) && !C.hasOwnProperty(K) && (O[K] = h[K]);
    if (p && p.defaultProps) for (K in ((h = p.defaultProps), h)) O[K] === void 0 && (O[K] = h[K]);
    return { $$typeof: c, type: p, key: b, ref: Z, props: O, _owner: N.current };
  }
  return ((Ht.Fragment = a), (Ht.jsx = j), (Ht.jsxs = j), Ht);
}
var $u;
function op() {
  return ($u || (($u = 1), (Ko.exports = sp())), Ko.exports);
}
var r = op(),
  W = rl(),
  ss = {},
  Yo = { exports: {} },
  un = {},
  Zo = { exports: {} },
  Xo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qu;
function lp() {
  return (
    qu ||
      ((qu = 1),
      (function (l) {
        function c(F, V) {
          var A = F.length;
          F.push(V);
          e: for (; 0 < A; ) {
            var f = (A - 1) >>> 1,
              S = F[f];
            if (0 < N(S, V)) ((F[f] = V), (F[A] = S), (A = f));
            else break e;
          }
        }
        function a(F) {
          return F.length === 0 ? null : F[0];
        }
        function w(F) {
          if (F.length === 0) return null;
          var V = F[0],
            A = F.pop();
          if (A !== V) {
            F[0] = A;
            e: for (var f = 0, S = F.length, G = S >>> 1; f < G; ) {
              var ie = 2 * (f + 1) - 1,
                se = F[ie],
                le = ie + 1,
                ge = F[le];
              if (0 > N(se, A))
                le < S && 0 > N(ge, se)
                  ? ((F[f] = ge), (F[le] = A), (f = le))
                  : ((F[f] = se), (F[ie] = A), (f = ie));
              else if (le < S && 0 > N(ge, A)) ((F[f] = ge), (F[le] = A), (f = le));
              else break e;
            }
          }
          return V;
        }
        function N(F, V) {
          var A = F.sortIndex - V.sortIndex;
          return A !== 0 ? A : F.id - V.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var C = performance;
          l.unstable_now = function () {
            return C.now();
          };
        } else {
          var j = Date,
            p = j.now();
          l.unstable_now = function () {
            return j.now() - p;
          };
        }
        var h = [],
          z = [],
          K = 1,
          O = null,
          b = 3,
          Z = !1,
          Q = !1,
          Y = !1,
          P = typeof setTimeout == 'function' ? setTimeout : null,
          I = typeof clearTimeout == 'function' ? clearTimeout : null,
          me = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function pe(F) {
          for (var V = a(z); V !== null; ) {
            if (V.callback === null) w(z);
            else if (V.startTime <= F) (w(z), (V.sortIndex = V.expirationTime), c(h, V));
            else break;
            V = a(z);
          }
        }
        function re(F) {
          if (((Y = !1), pe(F), !Q))
            if (a(h) !== null) ((Q = !0), Re(ue));
            else {
              var V = a(z);
              V !== null && H(re, V.startTime - F);
            }
        }
        function ue(F, V) {
          ((Q = !1), Y && ((Y = !1), I(Ie), (Ie = -1)), (Z = !0));
          var A = b;
          try {
            for (pe(V), O = a(h); O !== null && (!(O.expirationTime > V) || (F && !cn())); ) {
              var f = O.callback;
              if (typeof f == 'function') {
                ((O.callback = null), (b = O.priorityLevel));
                var S = f(O.expirationTime <= V);
                ((V = l.unstable_now()),
                  typeof S == 'function' ? (O.callback = S) : O === a(h) && w(h),
                  pe(V));
              } else w(h);
              O = a(h);
            }
            if (O !== null) var G = !0;
            else {
              var ie = a(z);
              (ie !== null && H(re, ie.startTime - V), (G = !1));
            }
            return G;
          } finally {
            ((O = null), (b = A), (Z = !1));
          }
        }
        var fe = !1,
          ve = null,
          Ie = -1,
          Ge = 5,
          We = -1;
        function cn() {
          return !(l.unstable_now() - We < Ge);
        }
        function Ae() {
          if (ve !== null) {
            var F = l.unstable_now();
            We = F;
            var V = !0;
            try {
              V = ve(!0, F);
            } finally {
              V ? X() : ((fe = !1), (ve = null));
            }
          } else fe = !1;
        }
        var X;
        if (typeof me == 'function')
          X = function () {
            me(Ae);
          };
        else if (typeof MessageChannel < 'u') {
          var Te = new MessageChannel(),
            Ve = Te.port2;
          ((Te.port1.onmessage = Ae),
            (X = function () {
              Ve.postMessage(null);
            }));
        } else
          X = function () {
            P(Ae, 0);
          };
        function Re(F) {
          ((ve = F), fe || ((fe = !0), X()));
        }
        function H(F, V) {
          Ie = P(function () {
            F(l.unstable_now());
          }, V);
        }
        ((l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function (F) {
            F.callback = null;
          }),
          (l.unstable_continueExecution = function () {
            Q || Z || ((Q = !0), Re(ue));
          }),
          (l.unstable_forceFrameRate = function (F) {
            0 > F || 125 < F
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Ge = 0 < F ? Math.floor(1e3 / F) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (l.unstable_getFirstCallbackNode = function () {
            return a(h);
          }),
          (l.unstable_next = function (F) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var V = 3;
                break;
              default:
                V = b;
            }
            var A = b;
            b = V;
            try {
              return F();
            } finally {
              b = A;
            }
          }),
          (l.unstable_pauseExecution = function () {}),
          (l.unstable_requestPaint = function () {}),
          (l.unstable_runWithPriority = function (F, V) {
            switch (F) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                F = 3;
            }
            var A = b;
            b = F;
            try {
              return V();
            } finally {
              b = A;
            }
          }),
          (l.unstable_scheduleCallback = function (F, V, A) {
            var f = l.unstable_now();
            switch (
              (typeof A == 'object' && A !== null
                ? ((A = A.delay), (A = typeof A == 'number' && 0 < A ? f + A : f))
                : (A = f),
              F)
            ) {
              case 1:
                var S = -1;
                break;
              case 2:
                S = 250;
                break;
              case 5:
                S = 1073741823;
                break;
              case 4:
                S = 1e4;
                break;
              default:
                S = 5e3;
            }
            return (
              (S = A + S),
              (F = {
                id: K++,
                callback: V,
                priorityLevel: F,
                startTime: A,
                expirationTime: S,
                sortIndex: -1,
              }),
              A > f
                ? ((F.sortIndex = A),
                  c(z, F),
                  a(h) === null && F === a(z) && (Y ? (I(Ie), (Ie = -1)) : (Y = !0), H(re, A - f)))
                : ((F.sortIndex = S), c(h, F), Q || Z || ((Q = !0), Re(ue))),
              F
            );
          }),
          (l.unstable_shouldYield = cn),
          (l.unstable_wrapCallback = function (F) {
            var V = b;
            return function () {
              var A = b;
              b = V;
              try {
                return F.apply(this, arguments);
              } finally {
                b = A;
              }
            };
          }));
      })(Xo)),
    Xo
  );
}
var Du;
function ap() {
  return (Du || ((Du = 1), (Zo.exports = lp())), Zo.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hu;
function up() {
  if (Hu) return un;
  Hu = 1;
  var l = rl(),
    c = ap();
  function a(e) {
    for (
      var n = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, i = 1;
      i < arguments.length;
      i++
    )
      n += '&args[]=' + encodeURIComponent(arguments[i]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      n +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var w = new Set(),
    N = {};
  function C(e, n) {
    (j(e, n), j(e + 'Capture', n));
  }
  function j(e, n) {
    for (N[e] = n, e = 0; e < n.length; e++) w.add(n[e]);
  }
  var p = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    h = Object.prototype.hasOwnProperty,
    z =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    K = {},
    O = {};
  function b(e) {
    return h.call(O, e) ? !0 : h.call(K, e) ? !1 : z.test(e) ? (O[e] = !0) : ((K[e] = !0), !1);
  }
  function Z(e, n, i, t) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof n) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return t
          ? !1
          : i !== null
            ? !i.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function Q(e, n, i, t) {
    if (n === null || typeof n > 'u' || Z(e, n, i, t)) return !0;
    if (t) return !1;
    if (i !== null)
      switch (i.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function Y(e, n, i, t, s, o, u) {
    ((this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = t),
      (this.attributeNamespace = s),
      (this.mustUseProperty = i),
      (this.propertyName = e),
      (this.type = n),
      (this.sanitizeURL = o),
      (this.removeEmptyString = u));
  }
  var P = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      P[e] = new Y(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var n = e[0];
      P[n] = new Y(n, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      P[e] = new Y(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        P[e] = new Y(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        P[e] = new Y(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      P[e] = new Y(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      P[e] = new Y(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      P[e] = new Y(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      P[e] = new Y(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var I = /[\-:]([a-z])/g;
  function me(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var n = e.replace(I, me);
      P[n] = new Y(n, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var n = e.replace(I, me);
        P[n] = new Y(n, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var n = e.replace(I, me);
      P[n] = new Y(n, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      P[e] = new Y(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (P.xlinkHref = new Y('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      P[e] = new Y(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function pe(e, n, i, t) {
    var s = P.hasOwnProperty(n) ? P[n] : null;
    (s !== null
      ? s.type !== 0
      : t || !(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
      (Q(n, i, s, t) && (i = null),
      t || s === null
        ? b(n) && (i === null ? e.removeAttribute(n) : e.setAttribute(n, '' + i))
        : s.mustUseProperty
          ? (e[s.propertyName] = i === null ? (s.type === 3 ? !1 : '') : i)
          : ((n = s.attributeName),
            (t = s.attributeNamespace),
            i === null
              ? e.removeAttribute(n)
              : ((s = s.type),
                (i = s === 3 || (s === 4 && i === !0) ? '' : '' + i),
                t ? e.setAttributeNS(t, n, i) : e.setAttribute(n, i))));
  }
  var re = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ue = Symbol.for('react.element'),
    fe = Symbol.for('react.portal'),
    ve = Symbol.for('react.fragment'),
    Ie = Symbol.for('react.strict_mode'),
    Ge = Symbol.for('react.profiler'),
    We = Symbol.for('react.provider'),
    cn = Symbol.for('react.context'),
    Ae = Symbol.for('react.forward_ref'),
    X = Symbol.for('react.suspense'),
    Te = Symbol.for('react.suspense_list'),
    Ve = Symbol.for('react.memo'),
    Re = Symbol.for('react.lazy'),
    H = Symbol.for('react.offscreen'),
    F = Symbol.iterator;
  function V(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (F && e[F]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var A = Object.assign,
    f;
  function S(e) {
    if (f === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        f = (n && n[1]) || '';
      }
    return (
      `
` +
      f +
      e
    );
  }
  var G = !1;
  function ie(e, n) {
    if (!e || G) return '';
    G = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (
          ((n = function () {
            throw Error();
          }),
          Object.defineProperty(n.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(n, []);
          } catch (x) {
            var t = x;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (x) {
            t = x;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (x) {
          t = x;
        }
        e();
      }
    } catch (x) {
      if (x && t && typeof x.stack == 'string') {
        for (
          var s = x.stack.split(`
`),
            o = t.stack.split(`
`),
            u = s.length - 1,
            d = o.length - 1;
          1 <= u && 0 <= d && s[u] !== o[d];

        )
          d--;
        for (; 1 <= u && 0 <= d; u--, d--)
          if (s[u] !== o[d]) {
            if (u !== 1 || d !== 1)
              do
                if ((u--, d--, 0 > d || s[u] !== o[d])) {
                  var m =
                    `
` + s[u].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      m.includes('<anonymous>') &&
                      (m = m.replace('<anonymous>', e.displayName)),
                    m
                  );
                }
              while (1 <= u && 0 <= d);
            break;
          }
      }
    } finally {
      ((G = !1), (Error.prepareStackTrace = i));
    }
    return (e = e ? e.displayName || e.name : '') ? S(e) : '';
  }
  function se(e) {
    switch (e.tag) {
      case 5:
        return S(e.type);
      case 16:
        return S('Lazy');
      case 13:
        return S('Suspense');
      case 19:
        return S('SuspenseList');
      case 0:
      case 2:
      case 15:
        return ((e = ie(e.type, !1)), e);
      case 11:
        return ((e = ie(e.type.render, !1)), e);
      case 1:
        return ((e = ie(e.type, !0)), e);
      default:
        return '';
    }
  }
  function le(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case ve:
        return 'Fragment';
      case fe:
        return 'Portal';
      case Ge:
        return 'Profiler';
      case Ie:
        return 'StrictMode';
      case X:
        return 'Suspense';
      case Te:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case cn:
          return (e.displayName || 'Context') + '.Consumer';
        case We:
          return (e._context.displayName || 'Context') + '.Provider';
        case Ae:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case Ve:
          return ((n = e.displayName || null), n !== null ? n : le(e.type) || 'Memo');
        case Re:
          ((n = e._payload), (e = e._init));
          try {
            return le(e(n));
          } catch {}
      }
    return null;
  }
  function ge(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (n.displayName || 'Context') + '.Consumer';
      case 10:
        return (n._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (e = n.render),
          (e = e.displayName || e.name || ''),
          n.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return n;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return le(n);
      case 8:
        return n === Ie ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == 'function') return n.displayName || n.name || null;
        if (typeof n == 'string') return n;
    }
    return null;
  }
  function ce(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function ye(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (n === 'checkbox' || n === 'radio');
  }
  function Ke(e) {
    var n = ye(e) ? 'checked' : 'value',
      i = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      t = '' + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof i < 'u' &&
      typeof i.get == 'function' &&
      typeof i.set == 'function'
    ) {
      var s = i.get,
        o = i.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (u) {
            ((t = '' + u), o.call(this, u));
          },
        }),
        Object.defineProperty(e, n, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return t;
          },
          setValue: function (u) {
            t = '' + u;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[n]);
          },
        }
      );
    }
  }
  function Ti(e) {
    e._valueTracker || (e._valueTracker = Ke(e));
  }
  function mi(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var i = n.getValue(),
      t = '';
    return (
      e && (t = ye(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = t),
      e !== i ? (n.setValue(e), !0) : !1
    );
  }
  function Ei(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function tt(e, n) {
    var i = n.checked;
    return A({}, n, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: i ?? e._wrapperState.initialChecked,
    });
  }
  function rt(e, n) {
    var i = n.defaultValue == null ? '' : n.defaultValue,
      t = n.checked != null ? n.checked : n.defaultChecked;
    ((i = ce(n.value != null ? n.value : i)),
      (e._wrapperState = {
        initialChecked: t,
        initialValue: i,
        controlled:
          n.type === 'checkbox' || n.type === 'radio' ? n.checked != null : n.value != null,
      }));
  }
  function st(e, n) {
    ((n = n.checked), n != null && pe(e, 'checked', n, !1));
  }
  function Li(e, n) {
    st(e, n);
    var i = ce(n.value),
      t = n.type;
    if (i != null)
      t === 'number'
        ? ((i === 0 && e.value === '') || e.value != i) && (e.value = '' + i)
        : e.value !== '' + i && (e.value = '' + i);
    else if (t === 'submit' || t === 'reset') {
      e.removeAttribute('value');
      return;
    }
    (n.hasOwnProperty('value')
      ? Ri(e, n.type, i)
      : n.hasOwnProperty('defaultValue') && Ri(e, n.type, ce(n.defaultValue)),
      n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked));
  }
  function ot(e, n, i) {
    if (n.hasOwnProperty('value') || n.hasOwnProperty('defaultValue')) {
      var t = n.type;
      if (!((t !== 'submit' && t !== 'reset') || (n.value !== void 0 && n.value !== null))) return;
      ((n = '' + e._wrapperState.initialValue),
        i || n === e.value || (e.value = n),
        (e.defaultValue = n));
    }
    ((i = e.name),
      i !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      i !== '' && (e.name = i));
  }
  function Ri(e, n, i) {
    (n !== 'number' || Ei(e.ownerDocument) !== e) &&
      (i == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + i && (e.defaultValue = '' + i));
  }
  var qn = Array.isArray;
  function En(e, n, i, t) {
    if (((e = e.options), n)) {
      n = {};
      for (var s = 0; s < i.length; s++) n['$' + i[s]] = !0;
      for (i = 0; i < e.length; i++)
        ((s = n.hasOwnProperty('$' + e[i].value)),
          e[i].selected !== s && (e[i].selected = s),
          s && t && (e[i].defaultSelected = !0));
    } else {
      for (i = '' + ce(i), n = null, s = 0; s < e.length; s++) {
        if (e[s].value === i) {
          ((e[s].selected = !0), t && (e[s].defaultSelected = !0));
          return;
        }
        n !== null || e[s].disabled || (n = e[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Be(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(a(91));
    return A({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function k(e, n) {
    var i = n.value;
    if (i == null) {
      if (((i = n.children), (n = n.defaultValue), i != null)) {
        if (n != null) throw Error(a(92));
        if (qn(i)) {
          if (1 < i.length) throw Error(a(93));
          i = i[0];
        }
        n = i;
      }
      (n == null && (n = ''), (i = n));
    }
    e._wrapperState = { initialValue: ce(i) };
  }
  function Qe(e, n) {
    var i = ce(n.value),
      t = ce(n.defaultValue);
    (i != null &&
      ((i = '' + i),
      i !== e.value && (e.value = i),
      n.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
      t != null && (e.defaultValue = '' + t));
  }
  function lt(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== '' && n !== null && (e.value = n);
  }
  function en(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Ee(e, n) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? en(n)
      : e === 'http://www.w3.org/2000/svg' && n === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var _e,
    fi = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (n, i, t, s) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(n, i, t, s);
            });
          }
        : e;
    })(function (e, n) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = n;
      else {
        for (
          _e = _e || document.createElement('div'),
            _e.innerHTML = '<svg>' + n.valueOf().toString() + '</svg>',
            n = _e.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
      }
    });
  function Dn(e, n) {
    if (n) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Hn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    as = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Hn).forEach(function (e) {
    as.forEach(function (n) {
      ((n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Hn[n] = Hn[e]));
    });
  });
  function Yt(e, n, i) {
    return n == null || typeof n == 'boolean' || n === ''
      ? ''
      : i || typeof n != 'number' || n === 0 || (Hn.hasOwnProperty(e) && Hn[e])
        ? ('' + n).trim()
        : n + 'px';
  }
  function Zt(e, n) {
    e = e.style;
    for (var i in n)
      if (n.hasOwnProperty(i)) {
        var t = i.indexOf('--') === 0,
          s = Yt(i, n[i], t);
        (i === 'float' && (i = 'cssFloat'), t ? e.setProperty(i, s) : (e[i] = s));
      }
  }
  var us = A(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function hn(e, n) {
    if (n) {
      if (us[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(a(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(a(60));
        if (
          typeof n.dangerouslySetInnerHTML != 'object' ||
          !('__html' in n.dangerouslySetInnerHTML)
        )
          throw Error(a(61));
      }
      if (n.style != null && typeof n.style != 'object') throw Error(a(62));
    }
  }
  function at(e, n) {
    if (e.indexOf('-') === -1) return typeof n.is == 'string';
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var ut = null;
  function bi(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Mi = null,
    y = null,
    L = null;
  function ne(e) {
    if ((e = Rt(e))) {
      if (typeof Mi != 'function') throw Error(a(280));
      var n = e.stateNode;
      n && ((n = xr(n)), Mi(e.stateNode, e.type, n));
    }
  }
  function we(e) {
    y ? (L ? L.push(e) : (L = [e])) : (y = e);
  }
  function Ln() {
    if (y) {
      var e = y,
        n = L;
      if (((L = y = null), ne(e), n)) for (e = 0; e < n.length; e++) ne(n[e]);
    }
  }
  function ol(e, n) {
    return e(n);
  }
  function ll() {}
  var cs = !1;
  function al(e, n, i) {
    if (cs) return e(n, i);
    cs = !0;
    try {
      return ol(e, n, i);
    } finally {
      ((cs = !1), (y !== null || L !== null) && (ll(), Ln()));
    }
  }
  function ct(e, n) {
    var i = e.stateNode;
    if (i === null) return null;
    var t = xr(i);
    if (t === null) return null;
    i = t[n];
    e: switch (n) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ((t = !t.disabled) ||
          ((e = e.type),
          (t = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !t));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != 'function') throw Error(a(231, n, typeof i));
    return i;
  }
  var ds = !1;
  if (p)
    try {
      var dt = {};
      (Object.defineProperty(dt, 'passive', {
        get: function () {
          ds = !0;
        },
      }),
        window.addEventListener('test', dt, dt),
        window.removeEventListener('test', dt, dt));
    } catch {
      ds = !1;
    }
  function cc(e, n, i, t, s, o, u, d, m) {
    var x = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(i, x);
    } catch (E) {
      this.onError(E);
    }
  }
  var pt = !1,
    Xt = null,
    Jt = !1,
    ps = null,
    dc = {
      onError: function (e) {
        ((pt = !0), (Xt = e));
      },
    };
  function pc(e, n, i, t, s, o, u, d, m) {
    ((pt = !1), (Xt = null), cc.apply(dc, arguments));
  }
  function mc(e, n, i, t, s, o, u, d, m) {
    if ((pc.apply(this, arguments), pt)) {
      if (pt) {
        var x = Xt;
        ((pt = !1), (Xt = null));
      } else throw Error(a(198));
      Jt || ((Jt = !0), (ps = x));
    }
  }
  function hi(e) {
    var n = e,
      i = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do ((n = e), (n.flags & 4098) !== 0 && (i = n.return), (e = n.return));
      while (e);
    }
    return n.tag === 3 ? i : null;
  }
  function ul(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if ((n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)), n !== null))
        return n.dehydrated;
    }
    return null;
  }
  function cl(e) {
    if (hi(e) !== e) throw Error(a(188));
  }
  function fc(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = hi(e)), n === null)) throw Error(a(188));
      return n !== e ? null : e;
    }
    for (var i = e, t = n; ; ) {
      var s = i.return;
      if (s === null) break;
      var o = s.alternate;
      if (o === null) {
        if (((t = s.return), t !== null)) {
          i = t;
          continue;
        }
        break;
      }
      if (s.child === o.child) {
        for (o = s.child; o; ) {
          if (o === i) return (cl(s), e);
          if (o === t) return (cl(s), n);
          o = o.sibling;
        }
        throw Error(a(188));
      }
      if (i.return !== t.return) ((i = s), (t = o));
      else {
        for (var u = !1, d = s.child; d; ) {
          if (d === i) {
            ((u = !0), (i = s), (t = o));
            break;
          }
          if (d === t) {
            ((u = !0), (t = s), (i = o));
            break;
          }
          d = d.sibling;
        }
        if (!u) {
          for (d = o.child; d; ) {
            if (d === i) {
              ((u = !0), (i = o), (t = s));
              break;
            }
            if (d === t) {
              ((u = !0), (t = o), (i = s));
              break;
            }
            d = d.sibling;
          }
          if (!u) throw Error(a(189));
        }
      }
      if (i.alternate !== t) throw Error(a(190));
    }
    if (i.tag !== 3) throw Error(a(188));
    return i.stateNode.current === i ? e : n;
  }
  function dl(e) {
    return ((e = fc(e)), e !== null ? pl(e) : null);
  }
  function pl(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = pl(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var ml = c.unstable_scheduleCallback,
    fl = c.unstable_cancelCallback,
    hc = c.unstable_shouldYield,
    gc = c.unstable_requestPaint,
    be = c.unstable_now,
    vc = c.unstable_getCurrentPriorityLevel,
    ms = c.unstable_ImmediatePriority,
    hl = c.unstable_UserBlockingPriority,
    er = c.unstable_NormalPriority,
    yc = c.unstable_LowPriority,
    gl = c.unstable_IdlePriority,
    nr = null,
    Rn = null;
  function _c(e) {
    if (Rn && typeof Rn.onCommitFiberRoot == 'function')
      try {
        Rn.onCommitFiberRoot(nr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Nn = Math.clz32 ? Math.clz32 : Nc,
    xc = Math.log,
    wc = Math.LN2;
  function Nc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((xc(e) / wc) | 0)) | 0);
  }
  var ir = 64,
    tr = 4194304;
  function mt(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function rr(e, n) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var t = 0,
      s = e.suspendedLanes,
      o = e.pingedLanes,
      u = i & 268435455;
    if (u !== 0) {
      var d = u & ~s;
      d !== 0 ? (t = mt(d)) : ((o &= u), o !== 0 && (t = mt(o)));
    } else ((u = i & ~s), u !== 0 ? (t = mt(u)) : o !== 0 && (t = mt(o)));
    if (t === 0) return 0;
    if (
      n !== 0 &&
      n !== t &&
      (n & s) === 0 &&
      ((s = t & -t), (o = n & -n), s >= o || (s === 16 && (o & 4194240) !== 0))
    )
      return n;
    if (((t & 4) !== 0 && (t |= i & 16), (n = e.entangledLanes), n !== 0))
      for (e = e.entanglements, n &= t; 0 < n; )
        ((i = 31 - Nn(n)), (s = 1 << i), (t |= e[i]), (n &= ~s));
    return t;
  }
  function jc(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function kc(e, n) {
    for (
      var i = e.suspendedLanes, t = e.pingedLanes, s = e.expirationTimes, o = e.pendingLanes;
      0 < o;

    ) {
      var u = 31 - Nn(o),
        d = 1 << u,
        m = s[u];
      (m === -1
        ? ((d & i) === 0 || (d & t) !== 0) && (s[u] = jc(d, n))
        : m <= n && (e.expiredLanes |= d),
        (o &= ~d));
    }
  }
  function fs(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function vl() {
    var e = ir;
    return ((ir <<= 1), (ir & 4194240) === 0 && (ir = 64), e);
  }
  function hs(e) {
    for (var n = [], i = 0; 31 > i; i++) n.push(e);
    return n;
  }
  function ft(e, n, i) {
    ((e.pendingLanes |= n),
      n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (n = 31 - Nn(n)),
      (e[n] = i));
  }
  function Sc(e, n) {
    var i = e.pendingLanes & ~n;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= n),
      (e.mutableReadLanes &= n),
      (e.entangledLanes &= n),
      (n = e.entanglements));
    var t = e.eventTimes;
    for (e = e.expirationTimes; 0 < i; ) {
      var s = 31 - Nn(i),
        o = 1 << s;
      ((n[s] = 0), (t[s] = -1), (e[s] = -1), (i &= ~o));
    }
  }
  function gs(e, n) {
    var i = (e.entangledLanes |= n);
    for (e = e.entanglements; i; ) {
      var t = 31 - Nn(i),
        s = 1 << t;
      ((s & n) | (e[t] & n) && (e[t] |= n), (i &= ~s));
    }
  }
  var he = 0;
  function yl(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var _l,
    vs,
    xl,
    wl,
    Nl,
    ys = !1,
    sr = [],
    Gn = null,
    Kn = null,
    Qn = null,
    ht = new Map(),
    gt = new Map(),
    Yn = [],
    Cc =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function jl(e, n) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Gn = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Kn = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Qn = null;
        break;
      case 'pointerover':
      case 'pointerout':
        ht.delete(n.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        gt.delete(n.pointerId);
    }
  }
  function vt(e, n, i, t, s, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: n,
          domEventName: i,
          eventSystemFlags: t,
          nativeEvent: o,
          targetContainers: [s],
        }),
        n !== null && ((n = Rt(n)), n !== null && vs(n)),
        e)
      : ((e.eventSystemFlags |= t),
        (n = e.targetContainers),
        s !== null && n.indexOf(s) === -1 && n.push(s),
        e);
  }
  function Pc(e, n, i, t, s) {
    switch (n) {
      case 'focusin':
        return ((Gn = vt(Gn, e, n, i, t, s)), !0);
      case 'dragenter':
        return ((Kn = vt(Kn, e, n, i, t, s)), !0);
      case 'mouseover':
        return ((Qn = vt(Qn, e, n, i, t, s)), !0);
      case 'pointerover':
        var o = s.pointerId;
        return (ht.set(o, vt(ht.get(o) || null, e, n, i, t, s)), !0);
      case 'gotpointercapture':
        return ((o = s.pointerId), gt.set(o, vt(gt.get(o) || null, e, n, i, t, s)), !0);
    }
    return !1;
  }
  function kl(e) {
    var n = gi(e.target);
    if (n !== null) {
      var i = hi(n);
      if (i !== null) {
        if (((n = i.tag), n === 13)) {
          if (((n = ul(i)), n !== null)) {
            ((e.blockedOn = n),
              Nl(e.priority, function () {
                xl(i);
              }));
            return;
          }
        } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function or(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var i = xs(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var t = new i.constructor(i.type, i);
        ((ut = t), i.target.dispatchEvent(t), (ut = null));
      } else return ((n = Rt(i)), n !== null && vs(n), (e.blockedOn = i), !1);
      n.shift();
    }
    return !0;
  }
  function Sl(e, n, i) {
    or(e) && i.delete(n);
  }
  function Tc() {
    ((ys = !1),
      Gn !== null && or(Gn) && (Gn = null),
      Kn !== null && or(Kn) && (Kn = null),
      Qn !== null && or(Qn) && (Qn = null),
      ht.forEach(Sl),
      gt.forEach(Sl));
  }
  function yt(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      ys || ((ys = !0), c.unstable_scheduleCallback(c.unstable_NormalPriority, Tc)));
  }
  function _t(e) {
    function n(s) {
      return yt(s, e);
    }
    if (0 < sr.length) {
      yt(sr[0], e);
      for (var i = 1; i < sr.length; i++) {
        var t = sr[i];
        t.blockedOn === e && (t.blockedOn = null);
      }
    }
    for (
      Gn !== null && yt(Gn, e),
        Kn !== null && yt(Kn, e),
        Qn !== null && yt(Qn, e),
        ht.forEach(n),
        gt.forEach(n),
        i = 0;
      i < Yn.length;
      i++
    )
      ((t = Yn[i]), t.blockedOn === e && (t.blockedOn = null));
    for (; 0 < Yn.length && ((i = Yn[0]), i.blockedOn === null); )
      (kl(i), i.blockedOn === null && Yn.shift());
  }
  var Fi = re.ReactCurrentBatchConfig,
    lr = !0;
  function Ec(e, n, i, t) {
    var s = he,
      o = Fi.transition;
    Fi.transition = null;
    try {
      ((he = 1), _s(e, n, i, t));
    } finally {
      ((he = s), (Fi.transition = o));
    }
  }
  function Lc(e, n, i, t) {
    var s = he,
      o = Fi.transition;
    Fi.transition = null;
    try {
      ((he = 4), _s(e, n, i, t));
    } finally {
      ((he = s), (Fi.transition = o));
    }
  }
  function _s(e, n, i, t) {
    if (lr) {
      var s = xs(e, n, i, t);
      if (s === null) (Is(e, n, t, ar, i), jl(e, t));
      else if (Pc(s, e, n, i, t)) t.stopPropagation();
      else if ((jl(e, t), n & 4 && -1 < Cc.indexOf(e))) {
        for (; s !== null; ) {
          var o = Rt(s);
          if (
            (o !== null && _l(o), (o = xs(e, n, i, t)), o === null && Is(e, n, t, ar, i), o === s)
          )
            break;
          s = o;
        }
        s !== null && t.stopPropagation();
      } else Is(e, n, t, null, i);
    }
  }
  var ar = null;
  function xs(e, n, i, t) {
    if (((ar = null), (e = bi(t)), (e = gi(e)), e !== null))
      if (((n = hi(e)), n === null)) e = null;
      else if (((i = n.tag), i === 13)) {
        if (((e = ul(n)), e !== null)) return e;
        e = null;
      } else if (i === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else n !== e && (e = null);
    return ((ar = e), null);
  }
  function Cl(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4;
      case 'message':
        switch (vc()) {
          case ms:
            return 1;
          case hl:
            return 4;
          case er:
          case yc:
            return 16;
          case gl:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Zn = null,
    ws = null,
    ur = null;
  function Pl() {
    if (ur) return ur;
    var e,
      n = ws,
      i = n.length,
      t,
      s = 'value' in Zn ? Zn.value : Zn.textContent,
      o = s.length;
    for (e = 0; e < i && n[e] === s[e]; e++);
    var u = i - e;
    for (t = 1; t <= u && n[i - t] === s[o - t]; t++);
    return (ur = s.slice(e, 1 < t ? 1 - t : void 0));
  }
  function cr(e) {
    var n = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && n === 13 && (e = 13)) : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function dr() {
    return !0;
  }
  function Tl() {
    return !1;
  }
  function dn(e) {
    function n(i, t, s, o, u) {
      ((this._reactName = i),
        (this._targetInst = s),
        (this.type = t),
        (this.nativeEvent = o),
        (this.target = u),
        (this.currentTarget = null));
      for (var d in e) e.hasOwnProperty(d) && ((i = e[d]), (this[d] = i ? i(o) : o[d]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? dr
          : Tl),
        (this.isPropagationStopped = Tl),
        this
      );
    }
    return (
      A(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != 'unknown' && (i.returnValue = !1),
            (this.isDefaultPrevented = dr));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != 'unknown' && (i.cancelBubble = !0),
            (this.isPropagationStopped = dr));
        },
        persist: function () {},
        isPersistent: dr,
      }),
      n
    );
  }
  var Oi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ns = dn(Oi),
    xt = A({}, Oi, { view: 0, detail: 0 }),
    Rc = dn(xt),
    js,
    ks,
    wt,
    pr = A({}, xt, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Cs,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== wt &&
              (wt && e.type === 'mousemove'
                ? ((js = e.screenX - wt.screenX), (ks = e.screenY - wt.screenY))
                : (ks = js = 0),
              (wt = e)),
            js);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : ks;
      },
    }),
    El = dn(pr),
    bc = A({}, pr, { dataTransfer: 0 }),
    Mc = dn(bc),
    Fc = A({}, xt, { relatedTarget: 0 }),
    Ss = dn(Fc),
    Oc = A({}, Oi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zc = dn(Oc),
    Ic = A({}, Oi, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Wc = dn(Ic),
    Ac = A({}, Oi, { data: 0 }),
    Ll = dn(Ac),
    Vc = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    Bc = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Uc = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function $c(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = Uc[e]) ? !!n[e] : !1;
  }
  function Cs() {
    return $c;
  }
  var qc = A({}, xt, {
      key: function (e) {
        if (e.key) {
          var n = Vc[e.key] || e.key;
          if (n !== 'Unidentified') return n;
        }
        return e.type === 'keypress'
          ? ((e = cr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Bc[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Cs,
      charCode: function (e) {
        return e.type === 'keypress' ? cr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? cr(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Dc = dn(qc),
    Hc = A({}, pr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Rl = dn(Hc),
    Gc = A({}, xt, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Cs,
    }),
    Kc = dn(Gc),
    Qc = A({}, Oi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Yc = dn(Qc),
    Zc = A({}, pr, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Xc = dn(Zc),
    Jc = [9, 13, 27, 32],
    Ps = p && 'CompositionEvent' in window,
    Nt = null;
  p && 'documentMode' in document && (Nt = document.documentMode);
  var ed = p && 'TextEvent' in window && !Nt,
    bl = p && (!Ps || (Nt && 8 < Nt && 11 >= Nt)),
    Ml = ' ',
    Fl = !1;
  function Ol(e, n) {
    switch (e) {
      case 'keyup':
        return Jc.indexOf(n.keyCode) !== -1;
      case 'keydown':
        return n.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function zl(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var zi = !1;
  function nd(e, n) {
    switch (e) {
      case 'compositionend':
        return zl(n);
      case 'keypress':
        return n.which !== 32 ? null : ((Fl = !0), Ml);
      case 'textInput':
        return ((e = n.data), e === Ml && Fl ? null : e);
      default:
        return null;
    }
  }
  function id(e, n) {
    if (zi)
      return e === 'compositionend' || (!Ps && Ol(e, n))
        ? ((e = Pl()), (ur = ws = Zn = null), (zi = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case 'compositionend':
        return bl && n.locale !== 'ko' ? null : n.data;
      default:
        return null;
    }
  }
  var td = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Il(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === 'input' ? !!td[e.type] : n === 'textarea';
  }
  function Wl(e, n, i, t) {
    (we(t),
      (n = vr(n, 'onChange')),
      0 < n.length &&
        ((i = new Ns('onChange', 'change', null, i, t)), e.push({ event: i, listeners: n })));
  }
  var jt = null,
    kt = null;
  function rd(e) {
    ia(e, 0);
  }
  function mr(e) {
    var n = Bi(e);
    if (mi(n)) return e;
  }
  function sd(e, n) {
    if (e === 'change') return n;
  }
  var Al = !1;
  if (p) {
    var Ts;
    if (p) {
      var Es = 'oninput' in document;
      if (!Es) {
        var Vl = document.createElement('div');
        (Vl.setAttribute('oninput', 'return;'), (Es = typeof Vl.oninput == 'function'));
      }
      Ts = Es;
    } else Ts = !1;
    Al = Ts && (!document.documentMode || 9 < document.documentMode);
  }
  function Bl() {
    jt && (jt.detachEvent('onpropertychange', Ul), (kt = jt = null));
  }
  function Ul(e) {
    if (e.propertyName === 'value' && mr(kt)) {
      var n = [];
      (Wl(n, kt, e, bi(e)), al(rd, n));
    }
  }
  function od(e, n, i) {
    e === 'focusin'
      ? (Bl(), (jt = n), (kt = i), jt.attachEvent('onpropertychange', Ul))
      : e === 'focusout' && Bl();
  }
  function ld(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return mr(kt);
  }
  function ad(e, n) {
    if (e === 'click') return mr(n);
  }
  function ud(e, n) {
    if (e === 'input' || e === 'change') return mr(n);
  }
  function cd(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var jn = typeof Object.is == 'function' ? Object.is : cd;
  function St(e, n) {
    if (jn(e, n)) return !0;
    if (typeof e != 'object' || e === null || typeof n != 'object' || n === null) return !1;
    var i = Object.keys(e),
      t = Object.keys(n);
    if (i.length !== t.length) return !1;
    for (t = 0; t < i.length; t++) {
      var s = i[t];
      if (!h.call(n, s) || !jn(e[s], n[s])) return !1;
    }
    return !0;
  }
  function $l(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ql(e, n) {
    var i = $l(e);
    e = 0;
    for (var t; i; ) {
      if (i.nodeType === 3) {
        if (((t = e + i.textContent.length), e <= n && t >= n)) return { node: i, offset: n - e };
        e = t;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = $l(i);
    }
  }
  function Dl(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? Dl(e, n.parentNode)
            : 'contains' in e
              ? e.contains(n)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function Hl() {
    for (var e = window, n = Ei(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == 'string';
      } catch {
        i = !1;
      }
      if (i) e = n.contentWindow;
      else break;
      n = Ei(e.document);
    }
    return n;
  }
  function Ls(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        n === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function dd(e) {
    var n = Hl(),
      i = e.focusedElem,
      t = e.selectionRange;
    if (n !== i && i && i.ownerDocument && Dl(i.ownerDocument.documentElement, i)) {
      if (t !== null && Ls(i)) {
        if (((n = t.start), (e = t.end), e === void 0 && (e = n), 'selectionStart' in i))
          ((i.selectionStart = n), (i.selectionEnd = Math.min(e, i.value.length)));
        else if (
          ((e = ((n = i.ownerDocument || document) && n.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var s = i.textContent.length,
            o = Math.min(t.start, s);
          ((t = t.end === void 0 ? o : Math.min(t.end, s)),
            !e.extend && o > t && ((s = t), (t = o), (o = s)),
            (s = ql(i, o)));
          var u = ql(i, t);
          s &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== s.node ||
              e.anchorOffset !== s.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((n = n.createRange()),
            n.setStart(s.node, s.offset),
            e.removeAllRanges(),
            o > t
              ? (e.addRange(n), e.extend(u.node, u.offset))
              : (n.setEnd(u.node, u.offset), e.addRange(n)));
        }
      }
      for (n = [], e = i; (e = e.parentNode); )
        e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof i.focus == 'function' && i.focus(), i = 0; i < n.length; i++)
        ((e = n[i]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
  }
  var pd = p && 'documentMode' in document && 11 >= document.documentMode,
    Ii = null,
    Rs = null,
    Ct = null,
    bs = !1;
  function Gl(e, n, i) {
    var t = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    bs ||
      Ii == null ||
      Ii !== Ei(t) ||
      ((t = Ii),
      'selectionStart' in t && Ls(t)
        ? (t = { start: t.selectionStart, end: t.selectionEnd })
        : ((t = ((t.ownerDocument && t.ownerDocument.defaultView) || window).getSelection()),
          (t = {
            anchorNode: t.anchorNode,
            anchorOffset: t.anchorOffset,
            focusNode: t.focusNode,
            focusOffset: t.focusOffset,
          })),
      (Ct && St(Ct, t)) ||
        ((Ct = t),
        (t = vr(Rs, 'onSelect')),
        0 < t.length &&
          ((n = new Ns('onSelect', 'select', null, n, i)),
          e.push({ event: n, listeners: t }),
          (n.target = Ii))));
  }
  function fr(e, n) {
    var i = {};
    return (
      (i[e.toLowerCase()] = n.toLowerCase()),
      (i['Webkit' + e] = 'webkit' + n),
      (i['Moz' + e] = 'moz' + n),
      i
    );
  }
  var Wi = {
      animationend: fr('Animation', 'AnimationEnd'),
      animationiteration: fr('Animation', 'AnimationIteration'),
      animationstart: fr('Animation', 'AnimationStart'),
      transitionend: fr('Transition', 'TransitionEnd'),
    },
    Ms = {},
    Kl = {};
  p &&
    ((Kl = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Wi.animationend.animation,
      delete Wi.animationiteration.animation,
      delete Wi.animationstart.animation),
    'TransitionEvent' in window || delete Wi.transitionend.transition);
  function hr(e) {
    if (Ms[e]) return Ms[e];
    if (!Wi[e]) return e;
    var n = Wi[e],
      i;
    for (i in n) if (n.hasOwnProperty(i) && i in Kl) return (Ms[e] = n[i]);
    return e;
  }
  var Ql = hr('animationend'),
    Yl = hr('animationiteration'),
    Zl = hr('animationstart'),
    Xl = hr('transitionend'),
    Jl = new Map(),
    ea =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Xn(e, n) {
    (Jl.set(e, n), C(n, [e]));
  }
  for (var Fs = 0; Fs < ea.length; Fs++) {
    var Os = ea[Fs],
      md = Os.toLowerCase(),
      fd = Os[0].toUpperCase() + Os.slice(1);
    Xn(md, 'on' + fd);
  }
  (Xn(Ql, 'onAnimationEnd'),
    Xn(Yl, 'onAnimationIteration'),
    Xn(Zl, 'onAnimationStart'),
    Xn('dblclick', 'onDoubleClick'),
    Xn('focusin', 'onFocus'),
    Xn('focusout', 'onBlur'),
    Xn(Xl, 'onTransitionEnd'),
    j('onMouseEnter', ['mouseout', 'mouseover']),
    j('onMouseLeave', ['mouseout', 'mouseover']),
    j('onPointerEnter', ['pointerout', 'pointerover']),
    j('onPointerLeave', ['pointerout', 'pointerover']),
    C('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    C(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    C('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    C('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    C(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    C(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var Pt =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    hd = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Pt));
  function na(e, n, i) {
    var t = e.type || 'unknown-event';
    ((e.currentTarget = i), mc(t, n, void 0, e), (e.currentTarget = null));
  }
  function ia(e, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var t = e[i],
        s = t.event;
      t = t.listeners;
      e: {
        var o = void 0;
        if (n)
          for (var u = t.length - 1; 0 <= u; u--) {
            var d = t[u],
              m = d.instance,
              x = d.currentTarget;
            if (((d = d.listener), m !== o && s.isPropagationStopped())) break e;
            (na(s, d, x), (o = m));
          }
        else
          for (u = 0; u < t.length; u++) {
            if (
              ((d = t[u]),
              (m = d.instance),
              (x = d.currentTarget),
              (d = d.listener),
              m !== o && s.isPropagationStopped())
            )
              break e;
            (na(s, d, x), (o = m));
          }
      }
    }
    if (Jt) throw ((e = ps), (Jt = !1), (ps = null), e);
  }
  function Ne(e, n) {
    var i = n[$s];
    i === void 0 && (i = n[$s] = new Set());
    var t = e + '__bubble';
    i.has(t) || (ta(n, e, 2, !1), i.add(t));
  }
  function zs(e, n, i) {
    var t = 0;
    (n && (t |= 4), ta(i, e, t, n));
  }
  var gr = '_reactListening' + Math.random().toString(36).slice(2);
  function Tt(e) {
    if (!e[gr]) {
      ((e[gr] = !0),
        w.forEach(function (i) {
          i !== 'selectionchange' && (hd.has(i) || zs(i, !1, e), zs(i, !0, e));
        }));
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[gr] || ((n[gr] = !0), zs('selectionchange', !1, n));
    }
  }
  function ta(e, n, i, t) {
    switch (Cl(n)) {
      case 1:
        var s = Ec;
        break;
      case 4:
        s = Lc;
        break;
      default:
        s = _s;
    }
    ((i = s.bind(null, n, i, e)),
      (s = void 0),
      !ds || (n !== 'touchstart' && n !== 'touchmove' && n !== 'wheel') || (s = !0),
      t
        ? s !== void 0
          ? e.addEventListener(n, i, { capture: !0, passive: s })
          : e.addEventListener(n, i, !0)
        : s !== void 0
          ? e.addEventListener(n, i, { passive: s })
          : e.addEventListener(n, i, !1));
  }
  function Is(e, n, i, t, s) {
    var o = t;
    if ((n & 1) === 0 && (n & 2) === 0 && t !== null)
      e: for (;;) {
        if (t === null) return;
        var u = t.tag;
        if (u === 3 || u === 4) {
          var d = t.stateNode.containerInfo;
          if (d === s || (d.nodeType === 8 && d.parentNode === s)) break;
          if (u === 4)
            for (u = t.return; u !== null; ) {
              var m = u.tag;
              if (
                (m === 3 || m === 4) &&
                ((m = u.stateNode.containerInfo),
                m === s || (m.nodeType === 8 && m.parentNode === s))
              )
                return;
              u = u.return;
            }
          for (; d !== null; ) {
            if (((u = gi(d)), u === null)) return;
            if (((m = u.tag), m === 5 || m === 6)) {
              t = o = u;
              continue e;
            }
            d = d.parentNode;
          }
        }
        t = t.return;
      }
    al(function () {
      var x = o,
        E = bi(i),
        R = [];
      e: {
        var T = Jl.get(e);
        if (T !== void 0) {
          var B = Ns,
            $ = e;
          switch (e) {
            case 'keypress':
              if (cr(i) === 0) break e;
            case 'keydown':
            case 'keyup':
              B = Dc;
              break;
            case 'focusin':
              (($ = 'focus'), (B = Ss));
              break;
            case 'focusout':
              (($ = 'blur'), (B = Ss));
              break;
            case 'beforeblur':
            case 'afterblur':
              B = Ss;
              break;
            case 'click':
              if (i.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              B = El;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              B = Mc;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              B = Kc;
              break;
            case Ql:
            case Yl:
            case Zl:
              B = zc;
              break;
            case Xl:
              B = Yc;
              break;
            case 'scroll':
              B = Rc;
              break;
            case 'wheel':
              B = Xc;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              B = Wc;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              B = Rl;
          }
          var q = (n & 4) !== 0,
            Me = !q && e === 'scroll',
            v = q ? (T !== null ? T + 'Capture' : null) : T;
          q = [];
          for (var g = x, _; g !== null; ) {
            _ = g;
            var M = _.stateNode;
            if (
              (_.tag === 5 &&
                M !== null &&
                ((_ = M), v !== null && ((M = ct(g, v)), M != null && q.push(Et(g, M, _)))),
              Me)
            )
              break;
            g = g.return;
          }
          0 < q.length && ((T = new B(T, $, null, i, E)), R.push({ event: T, listeners: q }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (
            ((T = e === 'mouseover' || e === 'pointerover'),
            (B = e === 'mouseout' || e === 'pointerout'),
            T && i !== ut && ($ = i.relatedTarget || i.fromElement) && (gi($) || $[zn]))
          )
            break e;
          if (
            (B || T) &&
            ((T =
              E.window === E
                ? E
                : (T = E.ownerDocument)
                  ? T.defaultView || T.parentWindow
                  : window),
            B
              ? (($ = i.relatedTarget || i.toElement),
                (B = x),
                ($ = $ ? gi($) : null),
                $ !== null &&
                  ((Me = hi($)), $ !== Me || ($.tag !== 5 && $.tag !== 6)) &&
                  ($ = null))
              : ((B = null), ($ = x)),
            B !== $)
          ) {
            if (
              ((q = El),
              (M = 'onMouseLeave'),
              (v = 'onMouseEnter'),
              (g = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((q = Rl), (M = 'onPointerLeave'), (v = 'onPointerEnter'), (g = 'pointer')),
              (Me = B == null ? T : Bi(B)),
              (_ = $ == null ? T : Bi($)),
              (T = new q(M, g + 'leave', B, i, E)),
              (T.target = Me),
              (T.relatedTarget = _),
              (M = null),
              gi(E) === x &&
                ((q = new q(v, g + 'enter', $, i, E)),
                (q.target = _),
                (q.relatedTarget = Me),
                (M = q)),
              (Me = M),
              B && $)
            )
              n: {
                for (q = B, v = $, g = 0, _ = q; _; _ = Ai(_)) g++;
                for (_ = 0, M = v; M; M = Ai(M)) _++;
                for (; 0 < g - _; ) ((q = Ai(q)), g--);
                for (; 0 < _ - g; ) ((v = Ai(v)), _--);
                for (; g--; ) {
                  if (q === v || (v !== null && q === v.alternate)) break n;
                  ((q = Ai(q)), (v = Ai(v)));
                }
                q = null;
              }
            else q = null;
            (B !== null && ra(R, T, B, q, !1), $ !== null && Me !== null && ra(R, Me, $, q, !0));
          }
        }
        e: {
          if (
            ((T = x ? Bi(x) : window),
            (B = T.nodeName && T.nodeName.toLowerCase()),
            B === 'select' || (B === 'input' && T.type === 'file'))
          )
            var D = sd;
          else if (Il(T))
            if (Al) D = ud;
            else {
              D = ld;
              var J = od;
            }
          else
            (B = T.nodeName) &&
              B.toLowerCase() === 'input' &&
              (T.type === 'checkbox' || T.type === 'radio') &&
              (D = ad);
          if (D && (D = D(e, x))) {
            Wl(R, D, i, E);
            break e;
          }
          (J && J(e, T, x),
            e === 'focusout' &&
              (J = T._wrapperState) &&
              J.controlled &&
              T.type === 'number' &&
              Ri(T, 'number', T.value));
        }
        switch (((J = x ? Bi(x) : window), e)) {
          case 'focusin':
            (Il(J) || J.contentEditable === 'true') && ((Ii = J), (Rs = x), (Ct = null));
            break;
          case 'focusout':
            Ct = Rs = Ii = null;
            break;
          case 'mousedown':
            bs = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((bs = !1), Gl(R, i, E));
            break;
          case 'selectionchange':
            if (pd) break;
          case 'keydown':
          case 'keyup':
            Gl(R, i, E);
        }
        var ee;
        if (Ps)
          e: {
            switch (e) {
              case 'compositionstart':
                var te = 'onCompositionStart';
                break e;
              case 'compositionend':
                te = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                te = 'onCompositionUpdate';
                break e;
            }
            te = void 0;
          }
        else
          zi
            ? Ol(e, i) && (te = 'onCompositionEnd')
            : e === 'keydown' && i.keyCode === 229 && (te = 'onCompositionStart');
        (te &&
          (bl &&
            i.locale !== 'ko' &&
            (zi || te !== 'onCompositionStart'
              ? te === 'onCompositionEnd' && zi && (ee = Pl())
              : ((Zn = E), (ws = 'value' in Zn ? Zn.value : Zn.textContent), (zi = !0))),
          (J = vr(x, te)),
          0 < J.length &&
            ((te = new Ll(te, e, null, i, E)),
            R.push({ event: te, listeners: J }),
            ee ? (te.data = ee) : ((ee = zl(i)), ee !== null && (te.data = ee)))),
          (ee = ed ? nd(e, i) : id(e, i)) &&
            ((x = vr(x, 'onBeforeInput')),
            0 < x.length &&
              ((E = new Ll('onBeforeInput', 'beforeinput', null, i, E)),
              R.push({ event: E, listeners: x }),
              (E.data = ee))));
      }
      ia(R, n);
    });
  }
  function Et(e, n, i) {
    return { instance: e, listener: n, currentTarget: i };
  }
  function vr(e, n) {
    for (var i = n + 'Capture', t = []; e !== null; ) {
      var s = e,
        o = s.stateNode;
      (s.tag === 5 &&
        o !== null &&
        ((s = o),
        (o = ct(e, i)),
        o != null && t.unshift(Et(e, o, s)),
        (o = ct(e, n)),
        o != null && t.push(Et(e, o, s))),
        (e = e.return));
    }
    return t;
  }
  function Ai(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ra(e, n, i, t, s) {
    for (var o = n._reactName, u = []; i !== null && i !== t; ) {
      var d = i,
        m = d.alternate,
        x = d.stateNode;
      if (m !== null && m === t) break;
      (d.tag === 5 &&
        x !== null &&
        ((d = x),
        s
          ? ((m = ct(i, o)), m != null && u.unshift(Et(i, m, d)))
          : s || ((m = ct(i, o)), m != null && u.push(Et(i, m, d)))),
        (i = i.return));
    }
    u.length !== 0 && e.push({ event: n, listeners: u });
  }
  var gd = /\r\n?/g,
    vd = /\u0000|\uFFFD/g;
  function sa(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        gd,
        `
`
      )
      .replace(vd, '');
  }
  function yr(e, n, i) {
    if (((n = sa(n)), sa(e) !== n && i)) throw Error(a(425));
  }
  function _r() {}
  var Ws = null,
    As = null;
  function Vs(e, n) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof n.children == 'string' ||
      typeof n.children == 'number' ||
      (typeof n.dangerouslySetInnerHTML == 'object' &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Bs = typeof setTimeout == 'function' ? setTimeout : void 0,
    yd = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    oa = typeof Promise == 'function' ? Promise : void 0,
    _d =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof oa < 'u'
          ? function (e) {
              return oa.resolve(null).then(e).catch(xd);
            }
          : Bs;
  function xd(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Us(e, n) {
    var i = n,
      t = 0;
    do {
      var s = i.nextSibling;
      if ((e.removeChild(i), s && s.nodeType === 8))
        if (((i = s.data), i === '/$')) {
          if (t === 0) {
            (e.removeChild(s), _t(n));
            return;
          }
          t--;
        } else (i !== '$' && i !== '$?' && i !== '$!') || t++;
      i = s;
    } while (i);
    _t(n);
  }
  function Jn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (((n = e.data), n === '$' || n === '$!' || n === '$?')) break;
        if (n === '/$') return null;
      }
    }
    return e;
  }
  function la(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === '$' || i === '$!' || i === '$?') {
          if (n === 0) return e;
          n--;
        } else i === '/$' && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Vi = Math.random().toString(36).slice(2),
    bn = '__reactFiber$' + Vi,
    Lt = '__reactProps$' + Vi,
    zn = '__reactContainer$' + Vi,
    $s = '__reactEvents$' + Vi,
    wd = '__reactListeners$' + Vi,
    Nd = '__reactHandles$' + Vi;
  function gi(e) {
    var n = e[bn];
    if (n) return n;
    for (var i = e.parentNode; i; ) {
      if ((n = i[zn] || i[bn])) {
        if (((i = n.alternate), n.child !== null || (i !== null && i.child !== null)))
          for (e = la(e); e !== null; ) {
            if ((i = e[bn])) return i;
            e = la(e);
          }
        return n;
      }
      ((e = i), (i = e.parentNode));
    }
    return null;
  }
  function Rt(e) {
    return (
      (e = e[bn] || e[zn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Bi(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function xr(e) {
    return e[Lt] || null;
  }
  var qs = [],
    Ui = -1;
  function ei(e) {
    return { current: e };
  }
  function je(e) {
    0 > Ui || ((e.current = qs[Ui]), (qs[Ui] = null), Ui--);
  }
  function xe(e, n) {
    (Ui++, (qs[Ui] = e.current), (e.current = n));
  }
  var ni = {},
    Ye = ei(ni),
    rn = ei(!1),
    vi = ni;
  function $i(e, n) {
    var i = e.type.contextTypes;
    if (!i) return ni;
    var t = e.stateNode;
    if (t && t.__reactInternalMemoizedUnmaskedChildContext === n)
      return t.__reactInternalMemoizedMaskedChildContext;
    var s = {},
      o;
    for (o in i) s[o] = n[o];
    return (
      t &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = n),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      s
    );
  }
  function sn(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function wr() {
    (je(rn), je(Ye));
  }
  function aa(e, n, i) {
    if (Ye.current !== ni) throw Error(a(168));
    (xe(Ye, n), xe(rn, i));
  }
  function ua(e, n, i) {
    var t = e.stateNode;
    if (((n = n.childContextTypes), typeof t.getChildContext != 'function')) return i;
    t = t.getChildContext();
    for (var s in t) if (!(s in n)) throw Error(a(108, ge(e) || 'Unknown', s));
    return A({}, i, t);
  }
  function Nr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ni),
      (vi = Ye.current),
      xe(Ye, e),
      xe(rn, rn.current),
      !0
    );
  }
  function ca(e, n, i) {
    var t = e.stateNode;
    if (!t) throw Error(a(169));
    (i
      ? ((e = ua(e, n, vi)),
        (t.__reactInternalMemoizedMergedChildContext = e),
        je(rn),
        je(Ye),
        xe(Ye, e))
      : je(rn),
      xe(rn, i));
  }
  var In = null,
    jr = !1,
    Ds = !1;
  function da(e) {
    In === null ? (In = [e]) : In.push(e);
  }
  function jd(e) {
    ((jr = !0), da(e));
  }
  function ii() {
    if (!Ds && In !== null) {
      Ds = !0;
      var e = 0,
        n = he;
      try {
        var i = In;
        for (he = 1; e < i.length; e++) {
          var t = i[e];
          do t = t(!0);
          while (t !== null);
        }
        ((In = null), (jr = !1));
      } catch (s) {
        throw (In !== null && (In = In.slice(e + 1)), ml(ms, ii), s);
      } finally {
        ((he = n), (Ds = !1));
      }
    }
    return null;
  }
  var qi = [],
    Di = 0,
    kr = null,
    Sr = 0,
    gn = [],
    vn = 0,
    yi = null,
    Wn = 1,
    An = '';
  function _i(e, n) {
    ((qi[Di++] = Sr), (qi[Di++] = kr), (kr = e), (Sr = n));
  }
  function pa(e, n, i) {
    ((gn[vn++] = Wn), (gn[vn++] = An), (gn[vn++] = yi), (yi = e));
    var t = Wn;
    e = An;
    var s = 32 - Nn(t) - 1;
    ((t &= ~(1 << s)), (i += 1));
    var o = 32 - Nn(n) + s;
    if (30 < o) {
      var u = s - (s % 5);
      ((o = (t & ((1 << u) - 1)).toString(32)),
        (t >>= u),
        (s -= u),
        (Wn = (1 << (32 - Nn(n) + s)) | (i << s) | t),
        (An = o + e));
    } else ((Wn = (1 << o) | (i << s) | t), (An = e));
  }
  function Hs(e) {
    e.return !== null && (_i(e, 1), pa(e, 1, 0));
  }
  function Gs(e) {
    for (; e === kr; ) ((kr = qi[--Di]), (qi[Di] = null), (Sr = qi[--Di]), (qi[Di] = null));
    for (; e === yi; )
      ((yi = gn[--vn]),
        (gn[vn] = null),
        (An = gn[--vn]),
        (gn[vn] = null),
        (Wn = gn[--vn]),
        (gn[vn] = null));
  }
  var pn = null,
    mn = null,
    ke = !1,
    kn = null;
  function ma(e, n) {
    var i = wn(5, null, null, 0);
    ((i.elementType = 'DELETED'),
      (i.stateNode = n),
      (i.return = e),
      (n = e.deletions),
      n === null ? ((e.deletions = [i]), (e.flags |= 16)) : n.push(i));
  }
  function fa(e, n) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return (
          (n = n.nodeType !== 1 || i.toLowerCase() !== n.nodeName.toLowerCase() ? null : n),
          n !== null ? ((e.stateNode = n), (pn = e), (mn = Jn(n.firstChild)), !0) : !1
        );
      case 6:
        return (
          (n = e.pendingProps === '' || n.nodeType !== 3 ? null : n),
          n !== null ? ((e.stateNode = n), (pn = e), (mn = null), !0) : !1
        );
      case 13:
        return (
          (n = n.nodeType !== 8 ? null : n),
          n !== null
            ? ((i = yi !== null ? { id: Wn, overflow: An } : null),
              (e.memoizedState = { dehydrated: n, treeContext: i, retryLane: 1073741824 }),
              (i = wn(18, null, null, 0)),
              (i.stateNode = n),
              (i.return = e),
              (e.child = i),
              (pn = e),
              (mn = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ks(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Qs(e) {
    if (ke) {
      var n = mn;
      if (n) {
        var i = n;
        if (!fa(e, n)) {
          if (Ks(e)) throw Error(a(418));
          n = Jn(i.nextSibling);
          var t = pn;
          n && fa(e, n) ? ma(t, i) : ((e.flags = (e.flags & -4097) | 2), (ke = !1), (pn = e));
        }
      } else {
        if (Ks(e)) throw Error(a(418));
        ((e.flags = (e.flags & -4097) | 2), (ke = !1), (pn = e));
      }
    }
  }
  function ha(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    pn = e;
  }
  function Cr(e) {
    if (e !== pn) return !1;
    if (!ke) return (ha(e), (ke = !0), !1);
    var n;
    if (
      ((n = e.tag !== 3) &&
        !(n = e.tag !== 5) &&
        ((n = e.type), (n = n !== 'head' && n !== 'body' && !Vs(e.type, e.memoizedProps))),
      n && (n = mn))
    ) {
      if (Ks(e)) throw (ga(), Error(a(418)));
      for (; n; ) (ma(e, n), (n = Jn(n.nextSibling)));
    }
    if ((ha(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(a(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === '/$') {
              if (n === 0) {
                mn = Jn(e.nextSibling);
                break e;
              }
              n--;
            } else (i !== '$' && i !== '$!' && i !== '$?') || n++;
          }
          e = e.nextSibling;
        }
        mn = null;
      }
    } else mn = pn ? Jn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ga() {
    for (var e = mn; e; ) e = Jn(e.nextSibling);
  }
  function Hi() {
    ((mn = pn = null), (ke = !1));
  }
  function Ys(e) {
    kn === null ? (kn = [e]) : kn.push(e);
  }
  var kd = re.ReactCurrentBatchConfig;
  function bt(e, n, i) {
    if (((e = i.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (i._owner) {
        if (((i = i._owner), i)) {
          if (i.tag !== 1) throw Error(a(309));
          var t = i.stateNode;
        }
        if (!t) throw Error(a(147, e));
        var s = t,
          o = '' + e;
        return n !== null && n.ref !== null && typeof n.ref == 'function' && n.ref._stringRef === o
          ? n.ref
          : ((n = function (u) {
              var d = s.refs;
              u === null ? delete d[o] : (d[o] = u);
            }),
            (n._stringRef = o),
            n);
      }
      if (typeof e != 'string') throw Error(a(284));
      if (!i._owner) throw Error(a(290, e));
    }
    return e;
  }
  function Pr(e, n) {
    throw (
      (e = Object.prototype.toString.call(n)),
      Error(
        a(31, e === '[object Object]' ? 'object with keys {' + Object.keys(n).join(', ') + '}' : e)
      )
    );
  }
  function va(e) {
    var n = e._init;
    return n(e._payload);
  }
  function ya(e) {
    function n(v, g) {
      if (e) {
        var _ = v.deletions;
        _ === null ? ((v.deletions = [g]), (v.flags |= 16)) : _.push(g);
      }
    }
    function i(v, g) {
      if (!e) return null;
      for (; g !== null; ) (n(v, g), (g = g.sibling));
      return null;
    }
    function t(v, g) {
      for (v = new Map(); g !== null; )
        (g.key !== null ? v.set(g.key, g) : v.set(g.index, g), (g = g.sibling));
      return v;
    }
    function s(v, g) {
      return ((v = ci(v, g)), (v.index = 0), (v.sibling = null), v);
    }
    function o(v, g, _) {
      return (
        (v.index = _),
        e
          ? ((_ = v.alternate),
            _ !== null ? ((_ = _.index), _ < g ? ((v.flags |= 2), g) : _) : ((v.flags |= 2), g))
          : ((v.flags |= 1048576), g)
      );
    }
    function u(v) {
      return (e && v.alternate === null && (v.flags |= 2), v);
    }
    function d(v, g, _, M) {
      return g === null || g.tag !== 6
        ? ((g = Uo(_, v.mode, M)), (g.return = v), g)
        : ((g = s(g, _)), (g.return = v), g);
    }
    function m(v, g, _, M) {
      var D = _.type;
      return D === ve
        ? E(v, g, _.props.children, M, _.key)
        : g !== null &&
            (g.elementType === D ||
              (typeof D == 'object' && D !== null && D.$$typeof === Re && va(D) === g.type))
          ? ((M = s(g, _.props)), (M.ref = bt(v, g, _)), (M.return = v), M)
          : ((M = Zr(_.type, _.key, _.props, null, v.mode, M)),
            (M.ref = bt(v, g, _)),
            (M.return = v),
            M);
    }
    function x(v, g, _, M) {
      return g === null ||
        g.tag !== 4 ||
        g.stateNode.containerInfo !== _.containerInfo ||
        g.stateNode.implementation !== _.implementation
        ? ((g = $o(_, v.mode, M)), (g.return = v), g)
        : ((g = s(g, _.children || [])), (g.return = v), g);
    }
    function E(v, g, _, M, D) {
      return g === null || g.tag !== 7
        ? ((g = Pi(_, v.mode, M, D)), (g.return = v), g)
        : ((g = s(g, _)), (g.return = v), g);
    }
    function R(v, g, _) {
      if ((typeof g == 'string' && g !== '') || typeof g == 'number')
        return ((g = Uo('' + g, v.mode, _)), (g.return = v), g);
      if (typeof g == 'object' && g !== null) {
        switch (g.$$typeof) {
          case ue:
            return (
              (_ = Zr(g.type, g.key, g.props, null, v.mode, _)),
              (_.ref = bt(v, null, g)),
              (_.return = v),
              _
            );
          case fe:
            return ((g = $o(g, v.mode, _)), (g.return = v), g);
          case Re:
            var M = g._init;
            return R(v, M(g._payload), _);
        }
        if (qn(g) || V(g)) return ((g = Pi(g, v.mode, _, null)), (g.return = v), g);
        Pr(v, g);
      }
      return null;
    }
    function T(v, g, _, M) {
      var D = g !== null ? g.key : null;
      if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number')
        return D !== null ? null : d(v, g, '' + _, M);
      if (typeof _ == 'object' && _ !== null) {
        switch (_.$$typeof) {
          case ue:
            return _.key === D ? m(v, g, _, M) : null;
          case fe:
            return _.key === D ? x(v, g, _, M) : null;
          case Re:
            return ((D = _._init), T(v, g, D(_._payload), M));
        }
        if (qn(_) || V(_)) return D !== null ? null : E(v, g, _, M, null);
        Pr(v, _);
      }
      return null;
    }
    function B(v, g, _, M, D) {
      if ((typeof M == 'string' && M !== '') || typeof M == 'number')
        return ((v = v.get(_) || null), d(g, v, '' + M, D));
      if (typeof M == 'object' && M !== null) {
        switch (M.$$typeof) {
          case ue:
            return ((v = v.get(M.key === null ? _ : M.key) || null), m(g, v, M, D));
          case fe:
            return ((v = v.get(M.key === null ? _ : M.key) || null), x(g, v, M, D));
          case Re:
            var J = M._init;
            return B(v, g, _, J(M._payload), D);
        }
        if (qn(M) || V(M)) return ((v = v.get(_) || null), E(g, v, M, D, null));
        Pr(g, M);
      }
      return null;
    }
    function $(v, g, _, M) {
      for (
        var D = null, J = null, ee = g, te = (g = 0), qe = null;
        ee !== null && te < _.length;
        te++
      ) {
        ee.index > te ? ((qe = ee), (ee = null)) : (qe = ee.sibling);
        var de = T(v, ee, _[te], M);
        if (de === null) {
          ee === null && (ee = qe);
          break;
        }
        (e && ee && de.alternate === null && n(v, ee),
          (g = o(de, g, te)),
          J === null ? (D = de) : (J.sibling = de),
          (J = de),
          (ee = qe));
      }
      if (te === _.length) return (i(v, ee), ke && _i(v, te), D);
      if (ee === null) {
        for (; te < _.length; te++)
          ((ee = R(v, _[te], M)),
            ee !== null &&
              ((g = o(ee, g, te)), J === null ? (D = ee) : (J.sibling = ee), (J = ee)));
        return (ke && _i(v, te), D);
      }
      for (ee = t(v, ee); te < _.length; te++)
        ((qe = B(ee, v, te, _[te], M)),
          qe !== null &&
            (e && qe.alternate !== null && ee.delete(qe.key === null ? te : qe.key),
            (g = o(qe, g, te)),
            J === null ? (D = qe) : (J.sibling = qe),
            (J = qe)));
      return (
        e &&
          ee.forEach(function (di) {
            return n(v, di);
          }),
        ke && _i(v, te),
        D
      );
    }
    function q(v, g, _, M) {
      var D = V(_);
      if (typeof D != 'function') throw Error(a(150));
      if (((_ = D.call(_)), _ == null)) throw Error(a(151));
      for (
        var J = (D = null), ee = g, te = (g = 0), qe = null, de = _.next();
        ee !== null && !de.done;
        te++, de = _.next()
      ) {
        ee.index > te ? ((qe = ee), (ee = null)) : (qe = ee.sibling);
        var di = T(v, ee, de.value, M);
        if (di === null) {
          ee === null && (ee = qe);
          break;
        }
        (e && ee && di.alternate === null && n(v, ee),
          (g = o(di, g, te)),
          J === null ? (D = di) : (J.sibling = di),
          (J = di),
          (ee = qe));
      }
      if (de.done) return (i(v, ee), ke && _i(v, te), D);
      if (ee === null) {
        for (; !de.done; te++, de = _.next())
          ((de = R(v, de.value, M)),
            de !== null &&
              ((g = o(de, g, te)), J === null ? (D = de) : (J.sibling = de), (J = de)));
        return (ke && _i(v, te), D);
      }
      for (ee = t(v, ee); !de.done; te++, de = _.next())
        ((de = B(ee, v, te, de.value, M)),
          de !== null &&
            (e && de.alternate !== null && ee.delete(de.key === null ? te : de.key),
            (g = o(de, g, te)),
            J === null ? (D = de) : (J.sibling = de),
            (J = de)));
      return (
        e &&
          ee.forEach(function (tp) {
            return n(v, tp);
          }),
        ke && _i(v, te),
        D
      );
    }
    function Me(v, g, _, M) {
      if (
        (typeof _ == 'object' &&
          _ !== null &&
          _.type === ve &&
          _.key === null &&
          (_ = _.props.children),
        typeof _ == 'object' && _ !== null)
      ) {
        switch (_.$$typeof) {
          case ue:
            e: {
              for (var D = _.key, J = g; J !== null; ) {
                if (J.key === D) {
                  if (((D = _.type), D === ve)) {
                    if (J.tag === 7) {
                      (i(v, J.sibling), (g = s(J, _.props.children)), (g.return = v), (v = g));
                      break e;
                    }
                  } else if (
                    J.elementType === D ||
                    (typeof D == 'object' && D !== null && D.$$typeof === Re && va(D) === J.type)
                  ) {
                    (i(v, J.sibling),
                      (g = s(J, _.props)),
                      (g.ref = bt(v, J, _)),
                      (g.return = v),
                      (v = g));
                    break e;
                  }
                  i(v, J);
                  break;
                } else n(v, J);
                J = J.sibling;
              }
              _.type === ve
                ? ((g = Pi(_.props.children, v.mode, M, _.key)), (g.return = v), (v = g))
                : ((M = Zr(_.type, _.key, _.props, null, v.mode, M)),
                  (M.ref = bt(v, g, _)),
                  (M.return = v),
                  (v = M));
            }
            return u(v);
          case fe:
            e: {
              for (J = _.key; g !== null; ) {
                if (g.key === J)
                  if (
                    g.tag === 4 &&
                    g.stateNode.containerInfo === _.containerInfo &&
                    g.stateNode.implementation === _.implementation
                  ) {
                    (i(v, g.sibling), (g = s(g, _.children || [])), (g.return = v), (v = g));
                    break e;
                  } else {
                    i(v, g);
                    break;
                  }
                else n(v, g);
                g = g.sibling;
              }
              ((g = $o(_, v.mode, M)), (g.return = v), (v = g));
            }
            return u(v);
          case Re:
            return ((J = _._init), Me(v, g, J(_._payload), M));
        }
        if (qn(_)) return $(v, g, _, M);
        if (V(_)) return q(v, g, _, M);
        Pr(v, _);
      }
      return (typeof _ == 'string' && _ !== '') || typeof _ == 'number'
        ? ((_ = '' + _),
          g !== null && g.tag === 6
            ? (i(v, g.sibling), (g = s(g, _)), (g.return = v), (v = g))
            : (i(v, g), (g = Uo(_, v.mode, M)), (g.return = v), (v = g)),
          u(v))
        : i(v, g);
    }
    return Me;
  }
  var Gi = ya(!0),
    _a = ya(!1),
    Tr = ei(null),
    Er = null,
    Ki = null,
    Zs = null;
  function Xs() {
    Zs = Ki = Er = null;
  }
  function Js(e) {
    var n = Tr.current;
    (je(Tr), (e._currentValue = n));
  }
  function eo(e, n, i) {
    for (; e !== null; ) {
      var t = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), t !== null && (t.childLanes |= n))
          : t !== null && (t.childLanes & n) !== n && (t.childLanes |= n),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function Qi(e, n) {
    ((Er = e),
      (Zs = Ki = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & n) !== 0 && (on = !0), (e.firstContext = null)));
  }
  function yn(e) {
    var n = e._currentValue;
    if (Zs !== e)
      if (((e = { context: e, memoizedValue: n, next: null }), Ki === null)) {
        if (Er === null) throw Error(a(308));
        ((Ki = e), (Er.dependencies = { lanes: 0, firstContext: e }));
      } else Ki = Ki.next = e;
    return n;
  }
  var xi = null;
  function no(e) {
    xi === null ? (xi = [e]) : xi.push(e);
  }
  function xa(e, n, i, t) {
    var s = n.interleaved;
    return (
      s === null ? ((i.next = i), no(n)) : ((i.next = s.next), (s.next = i)),
      (n.interleaved = i),
      Vn(e, t)
    );
  }
  function Vn(e, n) {
    e.lanes |= n;
    var i = e.alternate;
    for (i !== null && (i.lanes |= n), i = e, e = e.return; e !== null; )
      ((e.childLanes |= n),
        (i = e.alternate),
        i !== null && (i.childLanes |= n),
        (i = e),
        (e = e.return));
    return i.tag === 3 ? i.stateNode : null;
  }
  var ti = !1;
  function io(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function wa(e, n) {
    ((e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function Bn(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function ri(e, n, i) {
    var t = e.updateQueue;
    if (t === null) return null;
    if (((t = t.shared), (ae & 2) !== 0)) {
      var s = t.pending;
      return (
        s === null ? (n.next = n) : ((n.next = s.next), (s.next = n)),
        (t.pending = n),
        Vn(e, i)
      );
    }
    return (
      (s = t.interleaved),
      s === null ? ((n.next = n), no(t)) : ((n.next = s.next), (s.next = n)),
      (t.interleaved = n),
      Vn(e, i)
    );
  }
  function Lr(e, n, i) {
    if (((n = n.updateQueue), n !== null && ((n = n.shared), (i & 4194240) !== 0))) {
      var t = n.lanes;
      ((t &= e.pendingLanes), (i |= t), (n.lanes = i), gs(e, i));
    }
  }
  function Na(e, n) {
    var i = e.updateQueue,
      t = e.alternate;
    if (t !== null && ((t = t.updateQueue), i === t)) {
      var s = null,
        o = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var u = {
            eventTime: i.eventTime,
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          };
          (o === null ? (s = o = u) : (o = o.next = u), (i = i.next));
        } while (i !== null);
        o === null ? (s = o = n) : (o = o.next = n);
      } else s = o = n;
      ((i = {
        baseState: t.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: o,
        shared: t.shared,
        effects: t.effects,
      }),
        (e.updateQueue = i));
      return;
    }
    ((e = i.lastBaseUpdate),
      e === null ? (i.firstBaseUpdate = n) : (e.next = n),
      (i.lastBaseUpdate = n));
  }
  function Rr(e, n, i, t) {
    var s = e.updateQueue;
    ti = !1;
    var o = s.firstBaseUpdate,
      u = s.lastBaseUpdate,
      d = s.shared.pending;
    if (d !== null) {
      s.shared.pending = null;
      var m = d,
        x = m.next;
      ((m.next = null), u === null ? (o = x) : (u.next = x), (u = m));
      var E = e.alternate;
      E !== null &&
        ((E = E.updateQueue),
        (d = E.lastBaseUpdate),
        d !== u && (d === null ? (E.firstBaseUpdate = x) : (d.next = x), (E.lastBaseUpdate = m)));
    }
    if (o !== null) {
      var R = s.baseState;
      ((u = 0), (E = x = m = null), (d = o));
      do {
        var T = d.lane,
          B = d.eventTime;
        if ((t & T) === T) {
          E !== null &&
            (E = E.next =
              {
                eventTime: B,
                lane: 0,
                tag: d.tag,
                payload: d.payload,
                callback: d.callback,
                next: null,
              });
          e: {
            var $ = e,
              q = d;
            switch (((T = n), (B = i), q.tag)) {
              case 1:
                if ((($ = q.payload), typeof $ == 'function')) {
                  R = $.call(B, R, T);
                  break e;
                }
                R = $;
                break e;
              case 3:
                $.flags = ($.flags & -65537) | 128;
              case 0:
                if (
                  (($ = q.payload), (T = typeof $ == 'function' ? $.call(B, R, T) : $), T == null)
                )
                  break e;
                R = A({}, R, T);
                break e;
              case 2:
                ti = !0;
            }
          }
          d.callback !== null &&
            d.lane !== 0 &&
            ((e.flags |= 64), (T = s.effects), T === null ? (s.effects = [d]) : T.push(d));
        } else
          ((B = {
            eventTime: B,
            lane: T,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null,
          }),
            E === null ? ((x = E = B), (m = R)) : (E = E.next = B),
            (u |= T));
        if (((d = d.next), d === null)) {
          if (((d = s.shared.pending), d === null)) break;
          ((T = d),
            (d = T.next),
            (T.next = null),
            (s.lastBaseUpdate = T),
            (s.shared.pending = null));
        }
      } while (!0);
      if (
        (E === null && (m = R),
        (s.baseState = m),
        (s.firstBaseUpdate = x),
        (s.lastBaseUpdate = E),
        (n = s.shared.interleaved),
        n !== null)
      ) {
        s = n;
        do ((u |= s.lane), (s = s.next));
        while (s !== n);
      } else o === null && (s.shared.lanes = 0);
      ((ji |= u), (e.lanes = u), (e.memoizedState = R));
    }
  }
  function ja(e, n, i) {
    if (((e = n.effects), (n.effects = null), e !== null))
      for (n = 0; n < e.length; n++) {
        var t = e[n],
          s = t.callback;
        if (s !== null) {
          if (((t.callback = null), (t = i), typeof s != 'function')) throw Error(a(191, s));
          s.call(t);
        }
      }
  }
  var Mt = {},
    Mn = ei(Mt),
    Ft = ei(Mt),
    Ot = ei(Mt);
  function wi(e) {
    if (e === Mt) throw Error(a(174));
    return e;
  }
  function to(e, n) {
    switch ((xe(Ot, n), xe(Ft, e), xe(Mn, Mt), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Ee(null, '');
        break;
      default:
        ((e = e === 8 ? n.parentNode : n),
          (n = e.namespaceURI || null),
          (e = e.tagName),
          (n = Ee(n, e)));
    }
    (je(Mn), xe(Mn, n));
  }
  function Yi() {
    (je(Mn), je(Ft), je(Ot));
  }
  function ka(e) {
    wi(Ot.current);
    var n = wi(Mn.current),
      i = Ee(n, e.type);
    n !== i && (xe(Ft, e), xe(Mn, i));
  }
  function ro(e) {
    Ft.current === e && (je(Mn), je(Ft));
  }
  var Se = ei(0);
  function br(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (i !== null && ((i = i.dehydrated), i === null || i.data === '$?' || i.data === '$!'))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
    return null;
  }
  var so = [];
  function oo() {
    for (var e = 0; e < so.length; e++) so[e]._workInProgressVersionPrimary = null;
    so.length = 0;
  }
  var Mr = re.ReactCurrentDispatcher,
    lo = re.ReactCurrentBatchConfig,
    Ni = 0,
    Ce = null,
    Oe = null,
    Ue = null,
    Fr = !1,
    zt = !1,
    It = 0,
    Sd = 0;
  function Ze() {
    throw Error(a(321));
  }
  function ao(e, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < e.length; i++) if (!jn(e[i], n[i])) return !1;
    return !0;
  }
  function uo(e, n, i, t, s, o) {
    if (
      ((Ni = o),
      (Ce = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (Mr.current = e === null || e.memoizedState === null ? Ed : Ld),
      (e = i(t, s)),
      zt)
    ) {
      o = 0;
      do {
        if (((zt = !1), (It = 0), 25 <= o)) throw Error(a(301));
        ((o += 1), (Ue = Oe = null), (n.updateQueue = null), (Mr.current = Rd), (e = i(t, s)));
      } while (zt);
    }
    if (
      ((Mr.current = Ir),
      (n = Oe !== null && Oe.next !== null),
      (Ni = 0),
      (Ue = Oe = Ce = null),
      (Fr = !1),
      n)
    )
      throw Error(a(300));
    return e;
  }
  function co() {
    var e = It !== 0;
    return ((It = 0), e);
  }
  function Fn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Ue === null ? (Ce.memoizedState = Ue = e) : (Ue = Ue.next = e), Ue);
  }
  function _n() {
    if (Oe === null) {
      var e = Ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Oe.next;
    var n = Ue === null ? Ce.memoizedState : Ue.next;
    if (n !== null) ((Ue = n), (Oe = e));
    else {
      if (e === null) throw Error(a(310));
      ((Oe = e),
        (e = {
          memoizedState: Oe.memoizedState,
          baseState: Oe.baseState,
          baseQueue: Oe.baseQueue,
          queue: Oe.queue,
          next: null,
        }),
        Ue === null ? (Ce.memoizedState = Ue = e) : (Ue = Ue.next = e));
    }
    return Ue;
  }
  function Wt(e, n) {
    return typeof n == 'function' ? n(e) : n;
  }
  function po(e) {
    var n = _n(),
      i = n.queue;
    if (i === null) throw Error(a(311));
    i.lastRenderedReducer = e;
    var t = Oe,
      s = t.baseQueue,
      o = i.pending;
    if (o !== null) {
      if (s !== null) {
        var u = s.next;
        ((s.next = o.next), (o.next = u));
      }
      ((t.baseQueue = s = o), (i.pending = null));
    }
    if (s !== null) {
      ((o = s.next), (t = t.baseState));
      var d = (u = null),
        m = null,
        x = o;
      do {
        var E = x.lane;
        if ((Ni & E) === E)
          (m !== null &&
            (m = m.next =
              {
                lane: 0,
                action: x.action,
                hasEagerState: x.hasEagerState,
                eagerState: x.eagerState,
                next: null,
              }),
            (t = x.hasEagerState ? x.eagerState : e(t, x.action)));
        else {
          var R = {
            lane: E,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null,
          };
          (m === null ? ((d = m = R), (u = t)) : (m = m.next = R), (Ce.lanes |= E), (ji |= E));
        }
        x = x.next;
      } while (x !== null && x !== o);
      (m === null ? (u = t) : (m.next = d),
        jn(t, n.memoizedState) || (on = !0),
        (n.memoizedState = t),
        (n.baseState = u),
        (n.baseQueue = m),
        (i.lastRenderedState = t));
    }
    if (((e = i.interleaved), e !== null)) {
      s = e;
      do ((o = s.lane), (Ce.lanes |= o), (ji |= o), (s = s.next));
      while (s !== e);
    } else s === null && (i.lanes = 0);
    return [n.memoizedState, i.dispatch];
  }
  function mo(e) {
    var n = _n(),
      i = n.queue;
    if (i === null) throw Error(a(311));
    i.lastRenderedReducer = e;
    var t = i.dispatch,
      s = i.pending,
      o = n.memoizedState;
    if (s !== null) {
      i.pending = null;
      var u = (s = s.next);
      do ((o = e(o, u.action)), (u = u.next));
      while (u !== s);
      (jn(o, n.memoizedState) || (on = !0),
        (n.memoizedState = o),
        n.baseQueue === null && (n.baseState = o),
        (i.lastRenderedState = o));
    }
    return [o, t];
  }
  function Sa() {}
  function Ca(e, n) {
    var i = Ce,
      t = _n(),
      s = n(),
      o = !jn(t.memoizedState, s);
    if (
      (o && ((t.memoizedState = s), (on = !0)),
      (t = t.queue),
      fo(Ea.bind(null, i, t, e), [e]),
      t.getSnapshot !== n || o || (Ue !== null && Ue.memoizedState.tag & 1))
    ) {
      if (((i.flags |= 2048), At(9, Ta.bind(null, i, t, s, n), void 0, null), $e === null))
        throw Error(a(349));
      (Ni & 30) !== 0 || Pa(i, n, s);
    }
    return s;
  }
  function Pa(e, n, i) {
    ((e.flags |= 16384),
      (e = { getSnapshot: n, value: i }),
      (n = Ce.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }), (Ce.updateQueue = n), (n.stores = [e]))
        : ((i = n.stores), i === null ? (n.stores = [e]) : i.push(e)));
  }
  function Ta(e, n, i, t) {
    ((n.value = i), (n.getSnapshot = t), La(n) && Ra(e));
  }
  function Ea(e, n, i) {
    return i(function () {
      La(n) && Ra(e);
    });
  }
  function La(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var i = n();
      return !jn(e, i);
    } catch {
      return !0;
    }
  }
  function Ra(e) {
    var n = Vn(e, 1);
    n !== null && Tn(n, e, 1, -1);
  }
  function ba(e) {
    var n = Fn();
    return (
      typeof e == 'function' && (e = e()),
      (n.memoizedState = n.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wt,
        lastRenderedState: e,
      }),
      (n.queue = e),
      (e = e.dispatch = Td.bind(null, Ce, e)),
      [n.memoizedState, e]
    );
  }
  function At(e, n, i, t) {
    return (
      (e = { tag: e, create: n, destroy: i, deps: t, next: null }),
      (n = Ce.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (Ce.updateQueue = n),
          (n.lastEffect = e.next = e))
        : ((i = n.lastEffect),
          i === null
            ? (n.lastEffect = e.next = e)
            : ((t = i.next), (i.next = e), (e.next = t), (n.lastEffect = e))),
      e
    );
  }
  function Ma() {
    return _n().memoizedState;
  }
  function Or(e, n, i, t) {
    var s = Fn();
    ((Ce.flags |= e), (s.memoizedState = At(1 | n, i, void 0, t === void 0 ? null : t)));
  }
  function zr(e, n, i, t) {
    var s = _n();
    t = t === void 0 ? null : t;
    var o = void 0;
    if (Oe !== null) {
      var u = Oe.memoizedState;
      if (((o = u.destroy), t !== null && ao(t, u.deps))) {
        s.memoizedState = At(n, i, o, t);
        return;
      }
    }
    ((Ce.flags |= e), (s.memoizedState = At(1 | n, i, o, t)));
  }
  function Fa(e, n) {
    return Or(8390656, 8, e, n);
  }
  function fo(e, n) {
    return zr(2048, 8, e, n);
  }
  function Oa(e, n) {
    return zr(4, 2, e, n);
  }
  function za(e, n) {
    return zr(4, 4, e, n);
  }
  function Ia(e, n) {
    if (typeof n == 'function')
      return (
        (e = e()),
        n(e),
        function () {
          n(null);
        }
      );
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function Wa(e, n, i) {
    return ((i = i != null ? i.concat([e]) : null), zr(4, 4, Ia.bind(null, n, e), i));
  }
  function ho() {}
  function Aa(e, n) {
    var i = _n();
    n = n === void 0 ? null : n;
    var t = i.memoizedState;
    return t !== null && n !== null && ao(n, t[1]) ? t[0] : ((i.memoizedState = [e, n]), e);
  }
  function Va(e, n) {
    var i = _n();
    n = n === void 0 ? null : n;
    var t = i.memoizedState;
    return t !== null && n !== null && ao(n, t[1])
      ? t[0]
      : ((e = e()), (i.memoizedState = [e, n]), e);
  }
  function Ba(e, n, i) {
    return (Ni & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (on = !0)), (e.memoizedState = i))
      : (jn(i, n) || ((i = vl()), (Ce.lanes |= i), (ji |= i), (e.baseState = !0)), n);
  }
  function Cd(e, n) {
    var i = he;
    ((he = i !== 0 && 4 > i ? i : 4), e(!0));
    var t = lo.transition;
    lo.transition = {};
    try {
      (e(!1), n());
    } finally {
      ((he = i), (lo.transition = t));
    }
  }
  function Ua() {
    return _n().memoizedState;
  }
  function Pd(e, n, i) {
    var t = ai(e);
    if (((i = { lane: t, action: i, hasEagerState: !1, eagerState: null, next: null }), $a(e)))
      qa(n, i);
    else if (((i = xa(e, n, i, t)), i !== null)) {
      var s = tn();
      (Tn(i, e, t, s), Da(i, n, t));
    }
  }
  function Td(e, n, i) {
    var t = ai(e),
      s = { lane: t, action: i, hasEagerState: !1, eagerState: null, next: null };
    if ($a(e)) qa(n, s);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = n.lastRenderedReducer), o !== null)
      )
        try {
          var u = n.lastRenderedState,
            d = o(u, i);
          if (((s.hasEagerState = !0), (s.eagerState = d), jn(d, u))) {
            var m = n.interleaved;
            (m === null ? ((s.next = s), no(n)) : ((s.next = m.next), (m.next = s)),
              (n.interleaved = s));
            return;
          }
        } catch {
        } finally {
        }
      ((i = xa(e, n, s, t)), i !== null && ((s = tn()), Tn(i, e, t, s), Da(i, n, t)));
    }
  }
  function $a(e) {
    var n = e.alternate;
    return e === Ce || (n !== null && n === Ce);
  }
  function qa(e, n) {
    zt = Fr = !0;
    var i = e.pending;
    (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)), (e.pending = n));
  }
  function Da(e, n, i) {
    if ((i & 4194240) !== 0) {
      var t = n.lanes;
      ((t &= e.pendingLanes), (i |= t), (n.lanes = i), gs(e, i));
    }
  }
  var Ir = {
      readContext: yn,
      useCallback: Ze,
      useContext: Ze,
      useEffect: Ze,
      useImperativeHandle: Ze,
      useInsertionEffect: Ze,
      useLayoutEffect: Ze,
      useMemo: Ze,
      useReducer: Ze,
      useRef: Ze,
      useState: Ze,
      useDebugValue: Ze,
      useDeferredValue: Ze,
      useTransition: Ze,
      useMutableSource: Ze,
      useSyncExternalStore: Ze,
      useId: Ze,
      unstable_isNewReconciler: !1,
    },
    Ed = {
      readContext: yn,
      useCallback: function (e, n) {
        return ((Fn().memoizedState = [e, n === void 0 ? null : n]), e);
      },
      useContext: yn,
      useEffect: Fa,
      useImperativeHandle: function (e, n, i) {
        return ((i = i != null ? i.concat([e]) : null), Or(4194308, 4, Ia.bind(null, n, e), i));
      },
      useLayoutEffect: function (e, n) {
        return Or(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        return Or(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var i = Fn();
        return ((n = n === void 0 ? null : n), (e = e()), (i.memoizedState = [e, n]), e);
      },
      useReducer: function (e, n, i) {
        var t = Fn();
        return (
          (n = i !== void 0 ? i(n) : n),
          (t.memoizedState = t.baseState = n),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (t.queue = e),
          (e = e.dispatch = Pd.bind(null, Ce, e)),
          [t.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = Fn();
        return ((e = { current: e }), (n.memoizedState = e));
      },
      useState: ba,
      useDebugValue: ho,
      useDeferredValue: function (e) {
        return (Fn().memoizedState = e);
      },
      useTransition: function () {
        var e = ba(!1),
          n = e[0];
        return ((e = Cd.bind(null, e[1])), (Fn().memoizedState = e), [n, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, n, i) {
        var t = Ce,
          s = Fn();
        if (ke) {
          if (i === void 0) throw Error(a(407));
          i = i();
        } else {
          if (((i = n()), $e === null)) throw Error(a(349));
          (Ni & 30) !== 0 || Pa(t, n, i);
        }
        s.memoizedState = i;
        var o = { value: i, getSnapshot: n };
        return (
          (s.queue = o),
          Fa(Ea.bind(null, t, o, e), [e]),
          (t.flags |= 2048),
          At(9, Ta.bind(null, t, o, i, n), void 0, null),
          i
        );
      },
      useId: function () {
        var e = Fn(),
          n = $e.identifierPrefix;
        if (ke) {
          var i = An,
            t = Wn;
          ((i = (t & ~(1 << (32 - Nn(t) - 1))).toString(32) + i),
            (n = ':' + n + 'R' + i),
            (i = It++),
            0 < i && (n += 'H' + i.toString(32)),
            (n += ':'));
        } else ((i = Sd++), (n = ':' + n + 'r' + i.toString(32) + ':'));
        return (e.memoizedState = n);
      },
      unstable_isNewReconciler: !1,
    },
    Ld = {
      readContext: yn,
      useCallback: Aa,
      useContext: yn,
      useEffect: fo,
      useImperativeHandle: Wa,
      useInsertionEffect: Oa,
      useLayoutEffect: za,
      useMemo: Va,
      useReducer: po,
      useRef: Ma,
      useState: function () {
        return po(Wt);
      },
      useDebugValue: ho,
      useDeferredValue: function (e) {
        var n = _n();
        return Ba(n, Oe.memoizedState, e);
      },
      useTransition: function () {
        var e = po(Wt)[0],
          n = _n().memoizedState;
        return [e, n];
      },
      useMutableSource: Sa,
      useSyncExternalStore: Ca,
      useId: Ua,
      unstable_isNewReconciler: !1,
    },
    Rd = {
      readContext: yn,
      useCallback: Aa,
      useContext: yn,
      useEffect: fo,
      useImperativeHandle: Wa,
      useInsertionEffect: Oa,
      useLayoutEffect: za,
      useMemo: Va,
      useReducer: mo,
      useRef: Ma,
      useState: function () {
        return mo(Wt);
      },
      useDebugValue: ho,
      useDeferredValue: function (e) {
        var n = _n();
        return Oe === null ? (n.memoizedState = e) : Ba(n, Oe.memoizedState, e);
      },
      useTransition: function () {
        var e = mo(Wt)[0],
          n = _n().memoizedState;
        return [e, n];
      },
      useMutableSource: Sa,
      useSyncExternalStore: Ca,
      useId: Ua,
      unstable_isNewReconciler: !1,
    };
  function Sn(e, n) {
    if (e && e.defaultProps) {
      ((n = A({}, n)), (e = e.defaultProps));
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    return n;
  }
  function go(e, n, i, t) {
    ((n = e.memoizedState),
      (i = i(t, n)),
      (i = i == null ? n : A({}, n, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i));
  }
  var Wr = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? hi(e) === e : !1;
    },
    enqueueSetState: function (e, n, i) {
      e = e._reactInternals;
      var t = tn(),
        s = ai(e),
        o = Bn(t, s);
      ((o.payload = n),
        i != null && (o.callback = i),
        (n = ri(e, o, s)),
        n !== null && (Tn(n, e, s, t), Lr(n, e, s)));
    },
    enqueueReplaceState: function (e, n, i) {
      e = e._reactInternals;
      var t = tn(),
        s = ai(e),
        o = Bn(t, s);
      ((o.tag = 1),
        (o.payload = n),
        i != null && (o.callback = i),
        (n = ri(e, o, s)),
        n !== null && (Tn(n, e, s, t), Lr(n, e, s)));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var i = tn(),
        t = ai(e),
        s = Bn(i, t);
      ((s.tag = 2),
        n != null && (s.callback = n),
        (n = ri(e, s, t)),
        n !== null && (Tn(n, e, t, i), Lr(n, e, t)));
    },
  };
  function Ha(e, n, i, t, s, o, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(t, o, u)
        : n.prototype && n.prototype.isPureReactComponent
          ? !St(i, t) || !St(s, o)
          : !0
    );
  }
  function Ga(e, n, i) {
    var t = !1,
      s = ni,
      o = n.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = yn(o))
        : ((s = sn(n) ? vi : Ye.current),
          (t = n.contextTypes),
          (o = (t = t != null) ? $i(e, s) : ni)),
      (n = new n(i, o)),
      (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = Wr),
      (e.stateNode = n),
      (n._reactInternals = e),
      t &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = s),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      n
    );
  }
  function Ka(e, n, i, t) {
    ((e = n.state),
      typeof n.componentWillReceiveProps == 'function' && n.componentWillReceiveProps(i, t),
      typeof n.UNSAFE_componentWillReceiveProps == 'function' &&
        n.UNSAFE_componentWillReceiveProps(i, t),
      n.state !== e && Wr.enqueueReplaceState(n, n.state, null));
  }
  function vo(e, n, i, t) {
    var s = e.stateNode;
    ((s.props = i), (s.state = e.memoizedState), (s.refs = {}), io(e));
    var o = n.contextType;
    (typeof o == 'object' && o !== null
      ? (s.context = yn(o))
      : ((o = sn(n) ? vi : Ye.current), (s.context = $i(e, o))),
      (s.state = e.memoizedState),
      (o = n.getDerivedStateFromProps),
      typeof o == 'function' && (go(e, n, o, i), (s.state = e.memoizedState)),
      typeof n.getDerivedStateFromProps == 'function' ||
        typeof s.getSnapshotBeforeUpdate == 'function' ||
        (typeof s.UNSAFE_componentWillMount != 'function' &&
          typeof s.componentWillMount != 'function') ||
        ((n = s.state),
        typeof s.componentWillMount == 'function' && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount(),
        n !== s.state && Wr.enqueueReplaceState(s, s.state, null),
        Rr(e, i, s, t),
        (s.state = e.memoizedState)),
      typeof s.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function Zi(e, n) {
    try {
      var i = '',
        t = n;
      do ((i += se(t)), (t = t.return));
      while (t);
      var s = i;
    } catch (o) {
      s =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: n, stack: s, digest: null };
  }
  function yo(e, n, i) {
    return { value: e, source: null, stack: i ?? null, digest: n ?? null };
  }
  function _o(e, n) {
    try {
      console.error(n.value);
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  var bd = typeof WeakMap == 'function' ? WeakMap : Map;
  function Qa(e, n, i) {
    ((i = Bn(-1, i)), (i.tag = 3), (i.payload = { element: null }));
    var t = n.value;
    return (
      (i.callback = function () {
        (Dr || ((Dr = !0), (Fo = t)), _o(e, n));
      }),
      i
    );
  }
  function Ya(e, n, i) {
    ((i = Bn(-1, i)), (i.tag = 3));
    var t = e.type.getDerivedStateFromError;
    if (typeof t == 'function') {
      var s = n.value;
      ((i.payload = function () {
        return t(s);
      }),
        (i.callback = function () {
          _o(e, n);
        }));
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == 'function' &&
        (i.callback = function () {
          (_o(e, n),
            typeof t != 'function' && (oi === null ? (oi = new Set([this])) : oi.add(this)));
          var u = n.stack;
          this.componentDidCatch(n.value, { componentStack: u !== null ? u : '' });
        }),
      i
    );
  }
  function Za(e, n, i) {
    var t = e.pingCache;
    if (t === null) {
      t = e.pingCache = new bd();
      var s = new Set();
      t.set(n, s);
    } else ((s = t.get(n)), s === void 0 && ((s = new Set()), t.set(n, s)));
    s.has(i) || (s.add(i), (e = Hd.bind(null, e, n, i)), n.then(e, e));
  }
  function Xa(e) {
    do {
      var n;
      if (
        ((n = e.tag === 13) &&
          ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
        n)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ja(e, n, i, t, s) {
    return (e.mode & 1) === 0
      ? (e === n
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (i.flags |= 131072),
            (i.flags &= -52805),
            i.tag === 1 &&
              (i.alternate === null ? (i.tag = 17) : ((n = Bn(-1, 1)), (n.tag = 2), ri(i, n, 1))),
            (i.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = s), e);
  }
  var Md = re.ReactCurrentOwner,
    on = !1;
  function nn(e, n, i, t) {
    n.child = e === null ? _a(n, null, i, t) : Gi(n, e.child, i, t);
  }
  function eu(e, n, i, t, s) {
    i = i.render;
    var o = n.ref;
    return (
      Qi(n, s),
      (t = uo(e, n, i, t, o, s)),
      (i = co()),
      e !== null && !on
        ? ((n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~s), Un(e, n, s))
        : (ke && i && Hs(n), (n.flags |= 1), nn(e, n, t, s), n.child)
    );
  }
  function nu(e, n, i, t, s) {
    if (e === null) {
      var o = i.type;
      return typeof o == 'function' &&
        !Bo(o) &&
        o.defaultProps === void 0 &&
        i.compare === null &&
        i.defaultProps === void 0
        ? ((n.tag = 15), (n.type = o), iu(e, n, o, t, s))
        : ((e = Zr(i.type, null, t, n, n.mode, s)), (e.ref = n.ref), (e.return = n), (n.child = e));
    }
    if (((o = e.child), (e.lanes & s) === 0)) {
      var u = o.memoizedProps;
      if (((i = i.compare), (i = i !== null ? i : St), i(u, t) && e.ref === n.ref))
        return Un(e, n, s);
    }
    return ((n.flags |= 1), (e = ci(o, t)), (e.ref = n.ref), (e.return = n), (n.child = e));
  }
  function iu(e, n, i, t, s) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (St(o, t) && e.ref === n.ref)
        if (((on = !1), (n.pendingProps = t = o), (e.lanes & s) !== 0))
          (e.flags & 131072) !== 0 && (on = !0);
        else return ((n.lanes = e.lanes), Un(e, n, s));
    }
    return xo(e, n, i, t, s);
  }
  function tu(e, n, i) {
    var t = n.pendingProps,
      s = t.children,
      o = e !== null ? e.memoizedState : null;
    if (t.mode === 'hidden')
      if ((n.mode & 1) === 0)
        ((n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          xe(Ji, fn),
          (fn |= i));
      else {
        if ((i & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | i : i),
            (n.lanes = n.childLanes = 1073741824),
            (n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (n.updateQueue = null),
            xe(Ji, fn),
            (fn |= e),
            null
          );
        ((n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (t = o !== null ? o.baseLanes : i),
          xe(Ji, fn),
          (fn |= t));
      }
    else
      (o !== null ? ((t = o.baseLanes | i), (n.memoizedState = null)) : (t = i),
        xe(Ji, fn),
        (fn |= t));
    return (nn(e, n, s, i), n.child);
  }
  function ru(e, n) {
    var i = n.ref;
    ((e === null && i !== null) || (e !== null && e.ref !== i)) &&
      ((n.flags |= 512), (n.flags |= 2097152));
  }
  function xo(e, n, i, t, s) {
    var o = sn(i) ? vi : Ye.current;
    return (
      (o = $i(n, o)),
      Qi(n, s),
      (i = uo(e, n, i, t, o, s)),
      (t = co()),
      e !== null && !on
        ? ((n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~s), Un(e, n, s))
        : (ke && t && Hs(n), (n.flags |= 1), nn(e, n, i, s), n.child)
    );
  }
  function su(e, n, i, t, s) {
    if (sn(i)) {
      var o = !0;
      Nr(n);
    } else o = !1;
    if ((Qi(n, s), n.stateNode === null)) (Vr(e, n), Ga(n, i, t), vo(n, i, t, s), (t = !0));
    else if (e === null) {
      var u = n.stateNode,
        d = n.memoizedProps;
      u.props = d;
      var m = u.context,
        x = i.contextType;
      typeof x == 'object' && x !== null
        ? (x = yn(x))
        : ((x = sn(i) ? vi : Ye.current), (x = $i(n, x)));
      var E = i.getDerivedStateFromProps,
        R = typeof E == 'function' || typeof u.getSnapshotBeforeUpdate == 'function';
      (R ||
        (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof u.componentWillReceiveProps != 'function') ||
        ((d !== t || m !== x) && Ka(n, u, t, x)),
        (ti = !1));
      var T = n.memoizedState;
      ((u.state = T),
        Rr(n, t, u, s),
        (m = n.memoizedState),
        d !== t || T !== m || rn.current || ti
          ? (typeof E == 'function' && (go(n, i, E, t), (m = n.memoizedState)),
            (d = ti || Ha(n, i, d, t, T, m, x))
              ? (R ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' && (n.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' && (n.flags |= 4194308),
                (n.memoizedProps = t),
                (n.memoizedState = m)),
            (u.props = t),
            (u.state = m),
            (u.context = x),
            (t = d))
          : (typeof u.componentDidMount == 'function' && (n.flags |= 4194308), (t = !1)));
    } else {
      ((u = n.stateNode),
        wa(e, n),
        (d = n.memoizedProps),
        (x = n.type === n.elementType ? d : Sn(n.type, d)),
        (u.props = x),
        (R = n.pendingProps),
        (T = u.context),
        (m = i.contextType),
        typeof m == 'object' && m !== null
          ? (m = yn(m))
          : ((m = sn(i) ? vi : Ye.current), (m = $i(n, m))));
      var B = i.getDerivedStateFromProps;
      ((E = typeof B == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
        (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof u.componentWillReceiveProps != 'function') ||
        ((d !== R || T !== m) && Ka(n, u, t, m)),
        (ti = !1),
        (T = n.memoizedState),
        (u.state = T),
        Rr(n, t, u, s));
      var $ = n.memoizedState;
      d !== R || T !== $ || rn.current || ti
        ? (typeof B == 'function' && (go(n, i, B, t), ($ = n.memoizedState)),
          (x = ti || Ha(n, i, x, t, T, $, m) || !1)
            ? (E ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(t, $, m),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(t, $, m)),
              typeof u.componentDidUpdate == 'function' && (n.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (n.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (d === e.memoizedProps && T === e.memoizedState) ||
                (n.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (d === e.memoizedProps && T === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = t),
              (n.memoizedState = $)),
          (u.props = t),
          (u.state = $),
          (u.context = m),
          (t = x))
        : (typeof u.componentDidUpdate != 'function' ||
            (d === e.memoizedProps && T === e.memoizedState) ||
            (n.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (d === e.memoizedProps && T === e.memoizedState) ||
            (n.flags |= 1024),
          (t = !1));
    }
    return wo(e, n, i, t, o, s);
  }
  function wo(e, n, i, t, s, o) {
    ru(e, n);
    var u = (n.flags & 128) !== 0;
    if (!t && !u) return (s && ca(n, i, !1), Un(e, n, o));
    ((t = n.stateNode), (Md.current = n));
    var d = u && typeof i.getDerivedStateFromError != 'function' ? null : t.render();
    return (
      (n.flags |= 1),
      e !== null && u
        ? ((n.child = Gi(n, e.child, null, o)), (n.child = Gi(n, null, d, o)))
        : nn(e, n, d, o),
      (n.memoizedState = t.state),
      s && ca(n, i, !0),
      n.child
    );
  }
  function ou(e) {
    var n = e.stateNode;
    (n.pendingContext
      ? aa(e, n.pendingContext, n.pendingContext !== n.context)
      : n.context && aa(e, n.context, !1),
      to(e, n.containerInfo));
  }
  function lu(e, n, i, t, s) {
    return (Hi(), Ys(s), (n.flags |= 256), nn(e, n, i, t), n.child);
  }
  var No = { dehydrated: null, treeContext: null, retryLane: 0 };
  function jo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function au(e, n, i) {
    var t = n.pendingProps,
      s = Se.current,
      o = !1,
      u = (n.flags & 128) !== 0,
      d;
    if (
      ((d = u) || (d = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
      d ? ((o = !0), (n.flags &= -129)) : (e === null || e.memoizedState !== null) && (s |= 1),
      xe(Se, s & 1),
      e === null)
    )
      return (
        Qs(n),
        (e = n.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((n.mode & 1) === 0
              ? (n.lanes = 1)
              : e.data === '$!'
                ? (n.lanes = 8)
                : (n.lanes = 1073741824),
            null)
          : ((u = t.children),
            (e = t.fallback),
            o
              ? ((t = n.mode),
                (o = n.child),
                (u = { mode: 'hidden', children: u }),
                (t & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = u))
                  : (o = Xr(u, t, 0, null)),
                (e = Pi(e, t, i, null)),
                (o.return = n),
                (e.return = n),
                (o.sibling = e),
                (n.child = o),
                (n.child.memoizedState = jo(i)),
                (n.memoizedState = No),
                e)
              : ko(n, u))
      );
    if (((s = e.memoizedState), s !== null && ((d = s.dehydrated), d !== null)))
      return Fd(e, n, u, t, d, s, i);
    if (o) {
      ((o = t.fallback), (u = n.mode), (s = e.child), (d = s.sibling));
      var m = { mode: 'hidden', children: t.children };
      return (
        (u & 1) === 0 && n.child !== s
          ? ((t = n.child), (t.childLanes = 0), (t.pendingProps = m), (n.deletions = null))
          : ((t = ci(s, m)), (t.subtreeFlags = s.subtreeFlags & 14680064)),
        d !== null ? (o = ci(d, o)) : ((o = Pi(o, u, i, null)), (o.flags |= 2)),
        (o.return = n),
        (t.return = n),
        (t.sibling = o),
        (n.child = t),
        (t = o),
        (o = n.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? jo(i)
            : { baseLanes: u.baseLanes | i, cachePool: null, transitions: u.transitions }),
        (o.memoizedState = u),
        (o.childLanes = e.childLanes & ~i),
        (n.memoizedState = No),
        t
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (t = ci(o, { mode: 'visible', children: t.children })),
      (n.mode & 1) === 0 && (t.lanes = i),
      (t.return = n),
      (t.sibling = null),
      e !== null &&
        ((i = n.deletions), i === null ? ((n.deletions = [e]), (n.flags |= 16)) : i.push(e)),
      (n.child = t),
      (n.memoizedState = null),
      t
    );
  }
  function ko(e, n) {
    return (
      (n = Xr({ mode: 'visible', children: n }, e.mode, 0, null)),
      (n.return = e),
      (e.child = n)
    );
  }
  function Ar(e, n, i, t) {
    return (
      t !== null && Ys(t),
      Gi(n, e.child, null, i),
      (e = ko(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function Fd(e, n, i, t, s, o, u) {
    if (i)
      return n.flags & 256
        ? ((n.flags &= -257), (t = yo(Error(a(422)))), Ar(e, n, u, t))
        : n.memoizedState !== null
          ? ((n.child = e.child), (n.flags |= 128), null)
          : ((o = t.fallback),
            (s = n.mode),
            (t = Xr({ mode: 'visible', children: t.children }, s, 0, null)),
            (o = Pi(o, s, u, null)),
            (o.flags |= 2),
            (t.return = n),
            (o.return = n),
            (t.sibling = o),
            (n.child = t),
            (n.mode & 1) !== 0 && Gi(n, e.child, null, u),
            (n.child.memoizedState = jo(u)),
            (n.memoizedState = No),
            o);
    if ((n.mode & 1) === 0) return Ar(e, n, u, null);
    if (s.data === '$!') {
      if (((t = s.nextSibling && s.nextSibling.dataset), t)) var d = t.dgst;
      return ((t = d), (o = Error(a(419))), (t = yo(o, t, void 0)), Ar(e, n, u, t));
    }
    if (((d = (u & e.childLanes) !== 0), on || d)) {
      if (((t = $e), t !== null)) {
        switch (u & -u) {
          case 4:
            s = 2;
            break;
          case 16:
            s = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            s = 32;
            break;
          case 536870912:
            s = 268435456;
            break;
          default:
            s = 0;
        }
        ((s = (s & (t.suspendedLanes | u)) !== 0 ? 0 : s),
          s !== 0 && s !== o.retryLane && ((o.retryLane = s), Vn(e, s), Tn(t, e, s, -1)));
      }
      return (Vo(), (t = yo(Error(a(421)))), Ar(e, n, u, t));
    }
    return s.data === '$?'
      ? ((n.flags |= 128), (n.child = e.child), (n = Gd.bind(null, e)), (s._reactRetry = n), null)
      : ((e = o.treeContext),
        (mn = Jn(s.nextSibling)),
        (pn = n),
        (ke = !0),
        (kn = null),
        e !== null &&
          ((gn[vn++] = Wn),
          (gn[vn++] = An),
          (gn[vn++] = yi),
          (Wn = e.id),
          (An = e.overflow),
          (yi = n)),
        (n = ko(n, t.children)),
        (n.flags |= 4096),
        n);
  }
  function uu(e, n, i) {
    e.lanes |= n;
    var t = e.alternate;
    (t !== null && (t.lanes |= n), eo(e.return, n, i));
  }
  function So(e, n, i, t, s) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: t,
          tail: i,
          tailMode: s,
        })
      : ((o.isBackwards = n),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = t),
        (o.tail = i),
        (o.tailMode = s));
  }
  function cu(e, n, i) {
    var t = n.pendingProps,
      s = t.revealOrder,
      o = t.tail;
    if ((nn(e, n, t.children, i), (t = Se.current), (t & 2) !== 0))
      ((t = (t & 1) | 2), (n.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && uu(e, i, n);
          else if (e.tag === 19) uu(e, i, n);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      t &= 1;
    }
    if ((xe(Se, t), (n.mode & 1) === 0)) n.memoizedState = null;
    else
      switch (s) {
        case 'forwards':
          for (i = n.child, s = null; i !== null; )
            ((e = i.alternate), e !== null && br(e) === null && (s = i), (i = i.sibling));
          ((i = s),
            i === null ? ((s = n.child), (n.child = null)) : ((s = i.sibling), (i.sibling = null)),
            So(n, !1, s, i, o));
          break;
        case 'backwards':
          for (i = null, s = n.child, n.child = null; s !== null; ) {
            if (((e = s.alternate), e !== null && br(e) === null)) {
              n.child = s;
              break;
            }
            ((e = s.sibling), (s.sibling = i), (i = s), (s = e));
          }
          So(n, !0, i, null, o);
          break;
        case 'together':
          So(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function Vr(e, n) {
    (n.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
  }
  function Un(e, n, i) {
    if (
      (e !== null && (n.dependencies = e.dependencies), (ji |= n.lanes), (i & n.childLanes) === 0)
    )
      return null;
    if (e !== null && n.child !== e.child) throw Error(a(153));
    if (n.child !== null) {
      for (e = n.child, i = ci(e, e.pendingProps), n.child = i, i.return = n; e.sibling !== null; )
        ((e = e.sibling), (i = i.sibling = ci(e, e.pendingProps)), (i.return = n));
      i.sibling = null;
    }
    return n.child;
  }
  function Od(e, n, i) {
    switch (n.tag) {
      case 3:
        (ou(n), Hi());
        break;
      case 5:
        ka(n);
        break;
      case 1:
        sn(n.type) && Nr(n);
        break;
      case 4:
        to(n, n.stateNode.containerInfo);
        break;
      case 10:
        var t = n.type._context,
          s = n.memoizedProps.value;
        (xe(Tr, t._currentValue), (t._currentValue = s));
        break;
      case 13:
        if (((t = n.memoizedState), t !== null))
          return t.dehydrated !== null
            ? (xe(Se, Se.current & 1), (n.flags |= 128), null)
            : (i & n.child.childLanes) !== 0
              ? au(e, n, i)
              : (xe(Se, Se.current & 1), (e = Un(e, n, i)), e !== null ? e.sibling : null);
        xe(Se, Se.current & 1);
        break;
      case 19:
        if (((t = (i & n.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (t) return cu(e, n, i);
          n.flags |= 128;
        }
        if (
          ((s = n.memoizedState),
          s !== null && ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          xe(Se, Se.current),
          t)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((n.lanes = 0), tu(e, n, i));
    }
    return Un(e, n, i);
  }
  var du, Co, pu, mu;
  ((du = function (e, n) {
    for (var i = n.child; i !== null; ) {
      if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        ((i.child.return = i), (i = i.child));
        continue;
      }
      if (i === n) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === n) return;
        i = i.return;
      }
      ((i.sibling.return = i.return), (i = i.sibling));
    }
  }),
    (Co = function () {}),
    (pu = function (e, n, i, t) {
      var s = e.memoizedProps;
      if (s !== t) {
        ((e = n.stateNode), wi(Mn.current));
        var o = null;
        switch (i) {
          case 'input':
            ((s = tt(e, s)), (t = tt(e, t)), (o = []));
            break;
          case 'select':
            ((s = A({}, s, { value: void 0 })), (t = A({}, t, { value: void 0 })), (o = []));
            break;
          case 'textarea':
            ((s = Be(e, s)), (t = Be(e, t)), (o = []));
            break;
          default:
            typeof s.onClick != 'function' && typeof t.onClick == 'function' && (e.onclick = _r);
        }
        hn(i, t);
        var u;
        i = null;
        for (x in s)
          if (!t.hasOwnProperty(x) && s.hasOwnProperty(x) && s[x] != null)
            if (x === 'style') {
              var d = s[x];
              for (u in d) d.hasOwnProperty(u) && (i || (i = {}), (i[u] = ''));
            } else
              x !== 'dangerouslySetInnerHTML' &&
                x !== 'children' &&
                x !== 'suppressContentEditableWarning' &&
                x !== 'suppressHydrationWarning' &&
                x !== 'autoFocus' &&
                (N.hasOwnProperty(x) ? o || (o = []) : (o = o || []).push(x, null));
        for (x in t) {
          var m = t[x];
          if (
            ((d = s != null ? s[x] : void 0),
            t.hasOwnProperty(x) && m !== d && (m != null || d != null))
          )
            if (x === 'style')
              if (d) {
                for (u in d)
                  !d.hasOwnProperty(u) ||
                    (m && m.hasOwnProperty(u)) ||
                    (i || (i = {}), (i[u] = ''));
                for (u in m) m.hasOwnProperty(u) && d[u] !== m[u] && (i || (i = {}), (i[u] = m[u]));
              } else (i || (o || (o = []), o.push(x, i)), (i = m));
            else
              x === 'dangerouslySetInnerHTML'
                ? ((m = m ? m.__html : void 0),
                  (d = d ? d.__html : void 0),
                  m != null && d !== m && (o = o || []).push(x, m))
                : x === 'children'
                  ? (typeof m != 'string' && typeof m != 'number') || (o = o || []).push(x, '' + m)
                  : x !== 'suppressContentEditableWarning' &&
                    x !== 'suppressHydrationWarning' &&
                    (N.hasOwnProperty(x)
                      ? (m != null && x === 'onScroll' && Ne('scroll', e), o || d === m || (o = []))
                      : (o = o || []).push(x, m));
        }
        i && (o = o || []).push('style', i);
        var x = o;
        (n.updateQueue = x) && (n.flags |= 4);
      }
    }),
    (mu = function (e, n, i, t) {
      i !== t && (n.flags |= 4);
    }));
  function Vt(e, n) {
    if (!ke)
      switch (e.tailMode) {
        case 'hidden':
          n = e.tail;
          for (var i = null; n !== null; ) (n.alternate !== null && (i = n), (n = n.sibling));
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case 'collapsed':
          i = e.tail;
          for (var t = null; i !== null; ) (i.alternate !== null && (t = i), (i = i.sibling));
          t === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (t.sibling = null);
      }
  }
  function Xe(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      t = 0;
    if (n)
      for (var s = e.child; s !== null; )
        ((i |= s.lanes | s.childLanes),
          (t |= s.subtreeFlags & 14680064),
          (t |= s.flags & 14680064),
          (s.return = e),
          (s = s.sibling));
    else
      for (s = e.child; s !== null; )
        ((i |= s.lanes | s.childLanes),
          (t |= s.subtreeFlags),
          (t |= s.flags),
          (s.return = e),
          (s = s.sibling));
    return ((e.subtreeFlags |= t), (e.childLanes = i), n);
  }
  function zd(e, n, i) {
    var t = n.pendingProps;
    switch ((Gs(n), n.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Xe(n), null);
      case 1:
        return (sn(n.type) && wr(), Xe(n), null);
      case 3:
        return (
          (t = n.stateNode),
          Yi(),
          je(rn),
          je(Ye),
          oo(),
          t.pendingContext && ((t.context = t.pendingContext), (t.pendingContext = null)),
          (e === null || e.child === null) &&
            (Cr(n)
              ? (n.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), kn !== null && (Io(kn), (kn = null)))),
          Co(e, n),
          Xe(n),
          null
        );
      case 5:
        ro(n);
        var s = wi(Ot.current);
        if (((i = n.type), e !== null && n.stateNode != null))
          (pu(e, n, i, t, s), e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152)));
        else {
          if (!t) {
            if (n.stateNode === null) throw Error(a(166));
            return (Xe(n), null);
          }
          if (((e = wi(Mn.current)), Cr(n))) {
            ((t = n.stateNode), (i = n.type));
            var o = n.memoizedProps;
            switch (((t[bn] = n), (t[Lt] = o), (e = (n.mode & 1) !== 0), i)) {
              case 'dialog':
                (Ne('cancel', t), Ne('close', t));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Ne('load', t);
                break;
              case 'video':
              case 'audio':
                for (s = 0; s < Pt.length; s++) Ne(Pt[s], t);
                break;
              case 'source':
                Ne('error', t);
                break;
              case 'img':
              case 'image':
              case 'link':
                (Ne('error', t), Ne('load', t));
                break;
              case 'details':
                Ne('toggle', t);
                break;
              case 'input':
                (rt(t, o), Ne('invalid', t));
                break;
              case 'select':
                ((t._wrapperState = { wasMultiple: !!o.multiple }), Ne('invalid', t));
                break;
              case 'textarea':
                (k(t, o), Ne('invalid', t));
            }
            (hn(i, o), (s = null));
            for (var u in o)
              if (o.hasOwnProperty(u)) {
                var d = o[u];
                u === 'children'
                  ? typeof d == 'string'
                    ? t.textContent !== d &&
                      (o.suppressHydrationWarning !== !0 && yr(t.textContent, d, e),
                      (s = ['children', d]))
                    : typeof d == 'number' &&
                      t.textContent !== '' + d &&
                      (o.suppressHydrationWarning !== !0 && yr(t.textContent, d, e),
                      (s = ['children', '' + d]))
                  : N.hasOwnProperty(u) && d != null && u === 'onScroll' && Ne('scroll', t);
              }
            switch (i) {
              case 'input':
                (Ti(t), ot(t, o, !0));
                break;
              case 'textarea':
                (Ti(t), lt(t));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof o.onClick == 'function' && (t.onclick = _r);
            }
            ((t = s), (n.updateQueue = t), t !== null && (n.flags |= 4));
          } else {
            ((u = s.nodeType === 9 ? s : s.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = en(i)),
              e === 'http://www.w3.org/1999/xhtml'
                ? i === 'script'
                  ? ((e = u.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof t.is == 'string'
                    ? (e = u.createElement(i, { is: t.is }))
                    : ((e = u.createElement(i)),
                      i === 'select' &&
                        ((u = e), t.multiple ? (u.multiple = !0) : t.size && (u.size = t.size)))
                : (e = u.createElementNS(e, i)),
              (e[bn] = n),
              (e[Lt] = t),
              du(e, n, !1, !1),
              (n.stateNode = e));
            e: {
              switch (((u = at(i, t)), i)) {
                case 'dialog':
                  (Ne('cancel', e), Ne('close', e), (s = t));
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  (Ne('load', e), (s = t));
                  break;
                case 'video':
                case 'audio':
                  for (s = 0; s < Pt.length; s++) Ne(Pt[s], e);
                  s = t;
                  break;
                case 'source':
                  (Ne('error', e), (s = t));
                  break;
                case 'img':
                case 'image':
                case 'link':
                  (Ne('error', e), Ne('load', e), (s = t));
                  break;
                case 'details':
                  (Ne('toggle', e), (s = t));
                  break;
                case 'input':
                  (rt(e, t), (s = tt(e, t)), Ne('invalid', e));
                  break;
                case 'option':
                  s = t;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!t.multiple }),
                    (s = A({}, t, { value: void 0 })),
                    Ne('invalid', e));
                  break;
                case 'textarea':
                  (k(e, t), (s = Be(e, t)), Ne('invalid', e));
                  break;
                default:
                  s = t;
              }
              (hn(i, s), (d = s));
              for (o in d)
                if (d.hasOwnProperty(o)) {
                  var m = d[o];
                  o === 'style'
                    ? Zt(e, m)
                    : o === 'dangerouslySetInnerHTML'
                      ? ((m = m ? m.__html : void 0), m != null && fi(e, m))
                      : o === 'children'
                        ? typeof m == 'string'
                          ? (i !== 'textarea' || m !== '') && Dn(e, m)
                          : typeof m == 'number' && Dn(e, '' + m)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (N.hasOwnProperty(o)
                            ? m != null && o === 'onScroll' && Ne('scroll', e)
                            : m != null && pe(e, o, m, u));
                }
              switch (i) {
                case 'input':
                  (Ti(e), ot(e, t, !1));
                  break;
                case 'textarea':
                  (Ti(e), lt(e));
                  break;
                case 'option':
                  t.value != null && e.setAttribute('value', '' + ce(t.value));
                  break;
                case 'select':
                  ((e.multiple = !!t.multiple),
                    (o = t.value),
                    o != null
                      ? En(e, !!t.multiple, o, !1)
                      : t.defaultValue != null && En(e, !!t.multiple, t.defaultValue, !0));
                  break;
                default:
                  typeof s.onClick == 'function' && (e.onclick = _r);
              }
              switch (i) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  t = !!t.autoFocus;
                  break e;
                case 'img':
                  t = !0;
                  break e;
                default:
                  t = !1;
              }
            }
            t && (n.flags |= 4);
          }
          n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
        }
        return (Xe(n), null);
      case 6:
        if (e && n.stateNode != null) mu(e, n, e.memoizedProps, t);
        else {
          if (typeof t != 'string' && n.stateNode === null) throw Error(a(166));
          if (((i = wi(Ot.current)), wi(Mn.current), Cr(n))) {
            if (
              ((t = n.stateNode),
              (i = n.memoizedProps),
              (t[bn] = n),
              (o = t.nodeValue !== i) && ((e = pn), e !== null))
            )
              switch (e.tag) {
                case 3:
                  yr(t.nodeValue, i, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    yr(t.nodeValue, i, (e.mode & 1) !== 0);
              }
            o && (n.flags |= 4);
          } else
            ((t = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(t)),
              (t[bn] = n),
              (n.stateNode = t));
        }
        return (Xe(n), null);
      case 13:
        if (
          (je(Se),
          (t = n.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ke && mn !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0)
            (ga(), Hi(), (n.flags |= 98560), (o = !1));
          else if (((o = Cr(n)), t !== null && t.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(a(318));
              if (((o = n.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(a(317));
              o[bn] = n;
            } else (Hi(), (n.flags & 128) === 0 && (n.memoizedState = null), (n.flags |= 4));
            (Xe(n), (o = !1));
          } else (kn !== null && (Io(kn), (kn = null)), (o = !0));
          if (!o) return n.flags & 65536 ? n : null;
        }
        return (n.flags & 128) !== 0
          ? ((n.lanes = i), n)
          : ((t = t !== null),
            t !== (e !== null && e.memoizedState !== null) &&
              t &&
              ((n.child.flags |= 8192),
              (n.mode & 1) !== 0 &&
                (e === null || (Se.current & 1) !== 0 ? ze === 0 && (ze = 3) : Vo())),
            n.updateQueue !== null && (n.flags |= 4),
            Xe(n),
            null);
      case 4:
        return (Yi(), Co(e, n), e === null && Tt(n.stateNode.containerInfo), Xe(n), null);
      case 10:
        return (Js(n.type._context), Xe(n), null);
      case 17:
        return (sn(n.type) && wr(), Xe(n), null);
      case 19:
        if ((je(Se), (o = n.memoizedState), o === null)) return (Xe(n), null);
        if (((t = (n.flags & 128) !== 0), (u = o.rendering), u === null))
          if (t) Vt(o, !1);
          else {
            if (ze !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = n.child; e !== null; ) {
                if (((u = br(e)), u !== null)) {
                  for (
                    n.flags |= 128,
                      Vt(o, !1),
                      t = u.updateQueue,
                      t !== null && ((n.updateQueue = t), (n.flags |= 4)),
                      n.subtreeFlags = 0,
                      t = i,
                      i = n.child;
                    i !== null;

                  )
                    ((o = i),
                      (e = t),
                      (o.flags &= 14680066),
                      (u = o.alternate),
                      u === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = u.childLanes),
                          (o.lanes = u.lanes),
                          (o.child = u.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = u.memoizedProps),
                          (o.memoizedState = u.memoizedState),
                          (o.updateQueue = u.updateQueue),
                          (o.type = u.type),
                          (e = u.dependencies),
                          (o.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (i = i.sibling));
                  return (xe(Se, (Se.current & 1) | 2), n.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              be() > et &&
              ((n.flags |= 128), (t = !0), Vt(o, !1), (n.lanes = 4194304));
          }
        else {
          if (!t)
            if (((e = br(u)), e !== null)) {
              if (
                ((n.flags |= 128),
                (t = !0),
                (i = e.updateQueue),
                i !== null && ((n.updateQueue = i), (n.flags |= 4)),
                Vt(o, !0),
                o.tail === null && o.tailMode === 'hidden' && !u.alternate && !ke)
              )
                return (Xe(n), null);
            } else
              2 * be() - o.renderingStartTime > et &&
                i !== 1073741824 &&
                ((n.flags |= 128), (t = !0), Vt(o, !1), (n.lanes = 4194304));
          o.isBackwards
            ? ((u.sibling = n.child), (n.child = u))
            : ((i = o.last), i !== null ? (i.sibling = u) : (n.child = u), (o.last = u));
        }
        return o.tail !== null
          ? ((n = o.tail),
            (o.rendering = n),
            (o.tail = n.sibling),
            (o.renderingStartTime = be()),
            (n.sibling = null),
            (i = Se.current),
            xe(Se, t ? (i & 1) | 2 : i & 1),
            n)
          : (Xe(n), null);
      case 22:
      case 23:
        return (
          Ao(),
          (t = n.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== t && (n.flags |= 8192),
          t && (n.mode & 1) !== 0
            ? (fn & 1073741824) !== 0 && (Xe(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : Xe(n),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, n.tag));
  }
  function Id(e, n) {
    switch ((Gs(n), n.tag)) {
      case 1:
        return (
          sn(n.type) && wr(),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          Yi(),
          je(rn),
          je(Ye),
          oo(),
          (e = n.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 5:
        return (ro(n), null);
      case 13:
        if ((je(Se), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
          if (n.alternate === null) throw Error(a(340));
          Hi();
        }
        return ((e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null);
      case 19:
        return (je(Se), null);
      case 4:
        return (Yi(), null);
      case 10:
        return (Js(n.type._context), null);
      case 22:
      case 23:
        return (Ao(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Br = !1,
    Je = !1,
    Wd = typeof WeakSet == 'function' ? WeakSet : Set,
    U = null;
  function Xi(e, n) {
    var i = e.ref;
    if (i !== null)
      if (typeof i == 'function')
        try {
          i(null);
        } catch (t) {
          Le(e, n, t);
        }
      else i.current = null;
  }
  function Po(e, n, i) {
    try {
      i();
    } catch (t) {
      Le(e, n, t);
    }
  }
  var fu = !1;
  function Ad(e, n) {
    if (((Ws = lr), (e = Hl()), Ls(e))) {
      if ('selectionStart' in e) var i = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          i = ((i = e.ownerDocument) && i.defaultView) || window;
          var t = i.getSelection && i.getSelection();
          if (t && t.rangeCount !== 0) {
            i = t.anchorNode;
            var s = t.anchorOffset,
              o = t.focusNode;
            t = t.focusOffset;
            try {
              (i.nodeType, o.nodeType);
            } catch {
              i = null;
              break e;
            }
            var u = 0,
              d = -1,
              m = -1,
              x = 0,
              E = 0,
              R = e,
              T = null;
            n: for (;;) {
              for (
                var B;
                R !== i || (s !== 0 && R.nodeType !== 3) || (d = u + s),
                  R !== o || (t !== 0 && R.nodeType !== 3) || (m = u + t),
                  R.nodeType === 3 && (u += R.nodeValue.length),
                  (B = R.firstChild) !== null;

              )
                ((T = R), (R = B));
              for (;;) {
                if (R === e) break n;
                if (
                  (T === i && ++x === s && (d = u),
                  T === o && ++E === t && (m = u),
                  (B = R.nextSibling) !== null)
                )
                  break;
                ((R = T), (T = R.parentNode));
              }
              R = B;
            }
            i = d === -1 || m === -1 ? null : { start: d, end: m };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (As = { focusedElem: e, selectionRange: i }, lr = !1, U = n; U !== null; )
      if (((n = U), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = n), (U = e));
      else
        for (; U !== null; ) {
          n = U;
          try {
            var $ = n.alternate;
            if ((n.flags & 1024) !== 0)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if ($ !== null) {
                    var q = $.memoizedProps,
                      Me = $.memoizedState,
                      v = n.stateNode,
                      g = v.getSnapshotBeforeUpdate(
                        n.elementType === n.type ? q : Sn(n.type, q),
                        Me
                      );
                    v.__reactInternalSnapshotBeforeUpdate = g;
                  }
                  break;
                case 3:
                  var _ = n.stateNode.containerInfo;
                  _.nodeType === 1
                    ? (_.textContent = '')
                    : _.nodeType === 9 && _.documentElement && _.removeChild(_.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (M) {
            Le(n, n.return, M);
          }
          if (((e = n.sibling), e !== null)) {
            ((e.return = n.return), (U = e));
            break;
          }
          U = n.return;
        }
    return (($ = fu), (fu = !1), $);
  }
  function Bt(e, n, i) {
    var t = n.updateQueue;
    if (((t = t !== null ? t.lastEffect : null), t !== null)) {
      var s = (t = t.next);
      do {
        if ((s.tag & e) === e) {
          var o = s.destroy;
          ((s.destroy = void 0), o !== void 0 && Po(n, i, o));
        }
        s = s.next;
      } while (s !== t);
    }
  }
  function Ur(e, n) {
    if (((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)) {
      var i = (n = n.next);
      do {
        if ((i.tag & e) === e) {
          var t = i.create;
          i.destroy = t();
        }
        i = i.next;
      } while (i !== n);
    }
  }
  function To(e) {
    var n = e.ref;
    if (n !== null) {
      var i = e.stateNode;
      switch (e.tag) {
        case 5:
          e = i;
          break;
        default:
          e = i;
      }
      typeof n == 'function' ? n(e) : (n.current = e);
    }
  }
  function hu(e) {
    var n = e.alternate;
    (n !== null && ((e.alternate = null), hu(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((n = e.stateNode),
        n !== null && (delete n[bn], delete n[Lt], delete n[$s], delete n[wd], delete n[Nd])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function gu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function vu(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || gu(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Eo(e, n, i) {
    var t = e.tag;
    if (t === 5 || t === 6)
      ((e = e.stateNode),
        n
          ? i.nodeType === 8
            ? i.parentNode.insertBefore(e, n)
            : i.insertBefore(e, n)
          : (i.nodeType === 8
              ? ((n = i.parentNode), n.insertBefore(e, i))
              : ((n = i), n.appendChild(e)),
            (i = i._reactRootContainer),
            i != null || n.onclick !== null || (n.onclick = _r)));
    else if (t !== 4 && ((e = e.child), e !== null))
      for (Eo(e, n, i), e = e.sibling; e !== null; ) (Eo(e, n, i), (e = e.sibling));
  }
  function Lo(e, n, i) {
    var t = e.tag;
    if (t === 5 || t === 6) ((e = e.stateNode), n ? i.insertBefore(e, n) : i.appendChild(e));
    else if (t !== 4 && ((e = e.child), e !== null))
      for (Lo(e, n, i), e = e.sibling; e !== null; ) (Lo(e, n, i), (e = e.sibling));
  }
  var De = null,
    Cn = !1;
  function si(e, n, i) {
    for (i = i.child; i !== null; ) (yu(e, n, i), (i = i.sibling));
  }
  function yu(e, n, i) {
    if (Rn && typeof Rn.onCommitFiberUnmount == 'function')
      try {
        Rn.onCommitFiberUnmount(nr, i);
      } catch {}
    switch (i.tag) {
      case 5:
        Je || Xi(i, n);
      case 6:
        var t = De,
          s = Cn;
        ((De = null),
          si(e, n, i),
          (De = t),
          (Cn = s),
          De !== null &&
            (Cn
              ? ((e = De),
                (i = i.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i))
              : De.removeChild(i.stateNode)));
        break;
      case 18:
        De !== null &&
          (Cn
            ? ((e = De),
              (i = i.stateNode),
              e.nodeType === 8 ? Us(e.parentNode, i) : e.nodeType === 1 && Us(e, i),
              _t(e))
            : Us(De, i.stateNode));
        break;
      case 4:
        ((t = De),
          (s = Cn),
          (De = i.stateNode.containerInfo),
          (Cn = !0),
          si(e, n, i),
          (De = t),
          (Cn = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Je && ((t = i.updateQueue), t !== null && ((t = t.lastEffect), t !== null))) {
          s = t = t.next;
          do {
            var o = s,
              u = o.destroy;
            ((o = o.tag),
              u !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Po(i, n, u),
              (s = s.next));
          } while (s !== t);
        }
        si(e, n, i);
        break;
      case 1:
        if (!Je && (Xi(i, n), (t = i.stateNode), typeof t.componentWillUnmount == 'function'))
          try {
            ((t.props = i.memoizedProps), (t.state = i.memoizedState), t.componentWillUnmount());
          } catch (d) {
            Le(i, n, d);
          }
        si(e, n, i);
        break;
      case 21:
        si(e, n, i);
        break;
      case 22:
        i.mode & 1
          ? ((Je = (t = Je) || i.memoizedState !== null), si(e, n, i), (Je = t))
          : si(e, n, i);
        break;
      default:
        si(e, n, i);
    }
  }
  function _u(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      (i === null && (i = e.stateNode = new Wd()),
        n.forEach(function (t) {
          var s = Kd.bind(null, e, t);
          i.has(t) || (i.add(t), t.then(s, s));
        }));
    }
  }
  function Pn(e, n) {
    var i = n.deletions;
    if (i !== null)
      for (var t = 0; t < i.length; t++) {
        var s = i[t];
        try {
          var o = e,
            u = n,
            d = u;
          e: for (; d !== null; ) {
            switch (d.tag) {
              case 5:
                ((De = d.stateNode), (Cn = !1));
                break e;
              case 3:
                ((De = d.stateNode.containerInfo), (Cn = !0));
                break e;
              case 4:
                ((De = d.stateNode.containerInfo), (Cn = !0));
                break e;
            }
            d = d.return;
          }
          if (De === null) throw Error(a(160));
          (yu(o, u, s), (De = null), (Cn = !1));
          var m = s.alternate;
          (m !== null && (m.return = null), (s.return = null));
        } catch (x) {
          Le(s, n, x);
        }
      }
    if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) (xu(n, e), (n = n.sibling));
  }
  function xu(e, n) {
    var i = e.alternate,
      t = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Pn(n, e), On(e), t & 4)) {
          try {
            (Bt(3, e, e.return), Ur(3, e));
          } catch (q) {
            Le(e, e.return, q);
          }
          try {
            Bt(5, e, e.return);
          } catch (q) {
            Le(e, e.return, q);
          }
        }
        break;
      case 1:
        (Pn(n, e), On(e), t & 512 && i !== null && Xi(i, i.return));
        break;
      case 5:
        if ((Pn(n, e), On(e), t & 512 && i !== null && Xi(i, i.return), e.flags & 32)) {
          var s = e.stateNode;
          try {
            Dn(s, '');
          } catch (q) {
            Le(e, e.return, q);
          }
        }
        if (t & 4 && ((s = e.stateNode), s != null)) {
          var o = e.memoizedProps,
            u = i !== null ? i.memoizedProps : o,
            d = e.type,
            m = e.updateQueue;
          if (((e.updateQueue = null), m !== null))
            try {
              (d === 'input' && o.type === 'radio' && o.name != null && st(s, o), at(d, u));
              var x = at(d, o);
              for (u = 0; u < m.length; u += 2) {
                var E = m[u],
                  R = m[u + 1];
                E === 'style'
                  ? Zt(s, R)
                  : E === 'dangerouslySetInnerHTML'
                    ? fi(s, R)
                    : E === 'children'
                      ? Dn(s, R)
                      : pe(s, E, R, x);
              }
              switch (d) {
                case 'input':
                  Li(s, o);
                  break;
                case 'textarea':
                  Qe(s, o);
                  break;
                case 'select':
                  var T = s._wrapperState.wasMultiple;
                  s._wrapperState.wasMultiple = !!o.multiple;
                  var B = o.value;
                  B != null
                    ? En(s, !!o.multiple, B, !1)
                    : T !== !!o.multiple &&
                      (o.defaultValue != null
                        ? En(s, !!o.multiple, o.defaultValue, !0)
                        : En(s, !!o.multiple, o.multiple ? [] : '', !1));
              }
              s[Lt] = o;
            } catch (q) {
              Le(e, e.return, q);
            }
        }
        break;
      case 6:
        if ((Pn(n, e), On(e), t & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          ((s = e.stateNode), (o = e.memoizedProps));
          try {
            s.nodeValue = o;
          } catch (q) {
            Le(e, e.return, q);
          }
        }
        break;
      case 3:
        if ((Pn(n, e), On(e), t & 4 && i !== null && i.memoizedState.isDehydrated))
          try {
            _t(n.containerInfo);
          } catch (q) {
            Le(e, e.return, q);
          }
        break;
      case 4:
        (Pn(n, e), On(e));
        break;
      case 13:
        (Pn(n, e),
          On(e),
          (s = e.child),
          s.flags & 8192 &&
            ((o = s.memoizedState !== null),
            (s.stateNode.isHidden = o),
            !o || (s.alternate !== null && s.alternate.memoizedState !== null) || (Mo = be())),
          t & 4 && _u(e));
        break;
      case 22:
        if (
          ((E = i !== null && i.memoizedState !== null),
          e.mode & 1 ? ((Je = (x = Je) || E), Pn(n, e), (Je = x)) : Pn(n, e),
          On(e),
          t & 8192)
        ) {
          if (
            ((x = e.memoizedState !== null), (e.stateNode.isHidden = x) && !E && (e.mode & 1) !== 0)
          )
            for (U = e, E = e.child; E !== null; ) {
              for (R = U = E; U !== null; ) {
                switch (((T = U), (B = T.child), T.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Bt(4, T, T.return);
                    break;
                  case 1:
                    Xi(T, T.return);
                    var $ = T.stateNode;
                    if (typeof $.componentWillUnmount == 'function') {
                      ((t = T), (i = T.return));
                      try {
                        ((n = t),
                          ($.props = n.memoizedProps),
                          ($.state = n.memoizedState),
                          $.componentWillUnmount());
                      } catch (q) {
                        Le(t, i, q);
                      }
                    }
                    break;
                  case 5:
                    Xi(T, T.return);
                    break;
                  case 22:
                    if (T.memoizedState !== null) {
                      ju(R);
                      continue;
                    }
                }
                B !== null ? ((B.return = T), (U = B)) : ju(R);
              }
              E = E.sibling;
            }
          e: for (E = null, R = e; ; ) {
            if (R.tag === 5) {
              if (E === null) {
                E = R;
                try {
                  ((s = R.stateNode),
                    x
                      ? ((o = s.style),
                        typeof o.setProperty == 'function'
                          ? o.setProperty('display', 'none', 'important')
                          : (o.display = 'none'))
                      : ((d = R.stateNode),
                        (m = R.memoizedProps.style),
                        (u = m != null && m.hasOwnProperty('display') ? m.display : null),
                        (d.style.display = Yt('display', u))));
                } catch (q) {
                  Le(e, e.return, q);
                }
              }
            } else if (R.tag === 6) {
              if (E === null)
                try {
                  R.stateNode.nodeValue = x ? '' : R.memoizedProps;
                } catch (q) {
                  Le(e, e.return, q);
                }
            } else if (
              ((R.tag !== 22 && R.tag !== 23) || R.memoizedState === null || R === e) &&
              R.child !== null
            ) {
              ((R.child.return = R), (R = R.child));
              continue;
            }
            if (R === e) break e;
            for (; R.sibling === null; ) {
              if (R.return === null || R.return === e) break e;
              (E === R && (E = null), (R = R.return));
            }
            (E === R && (E = null), (R.sibling.return = R.return), (R = R.sibling));
          }
        }
        break;
      case 19:
        (Pn(n, e), On(e), t & 4 && _u(e));
        break;
      case 21:
        break;
      default:
        (Pn(n, e), On(e));
    }
  }
  function On(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var i = e.return; i !== null; ) {
            if (gu(i)) {
              var t = i;
              break e;
            }
            i = i.return;
          }
          throw Error(a(160));
        }
        switch (t.tag) {
          case 5:
            var s = t.stateNode;
            t.flags & 32 && (Dn(s, ''), (t.flags &= -33));
            var o = vu(e);
            Lo(e, o, s);
            break;
          case 3:
          case 4:
            var u = t.stateNode.containerInfo,
              d = vu(e);
            Eo(e, d, u);
            break;
          default:
            throw Error(a(161));
        }
      } catch (m) {
        Le(e, e.return, m);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Vd(e, n, i) {
    ((U = e), wu(e));
  }
  function wu(e, n, i) {
    for (var t = (e.mode & 1) !== 0; U !== null; ) {
      var s = U,
        o = s.child;
      if (s.tag === 22 && t) {
        var u = s.memoizedState !== null || Br;
        if (!u) {
          var d = s.alternate,
            m = (d !== null && d.memoizedState !== null) || Je;
          d = Br;
          var x = Je;
          if (((Br = u), (Je = m) && !x))
            for (U = s; U !== null; )
              ((u = U),
                (m = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? ku(s)
                  : m !== null
                    ? ((m.return = u), (U = m))
                    : ku(s));
          for (; o !== null; ) ((U = o), wu(o), (o = o.sibling));
          ((U = s), (Br = d), (Je = x));
        }
        Nu(e);
      } else (s.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = s), (U = o)) : Nu(e);
    }
  }
  function Nu(e) {
    for (; U !== null; ) {
      var n = U;
      if ((n.flags & 8772) !== 0) {
        var i = n.alternate;
        try {
          if ((n.flags & 8772) !== 0)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                Je || Ur(5, n);
                break;
              case 1:
                var t = n.stateNode;
                if (n.flags & 4 && !Je)
                  if (i === null) t.componentDidMount();
                  else {
                    var s =
                      n.elementType === n.type ? i.memoizedProps : Sn(n.type, i.memoizedProps);
                    t.componentDidUpdate(s, i.memoizedState, t.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = n.updateQueue;
                o !== null && ja(n, o, t);
                break;
              case 3:
                var u = n.updateQueue;
                if (u !== null) {
                  if (((i = null), n.child !== null))
                    switch (n.child.tag) {
                      case 5:
                        i = n.child.stateNode;
                        break;
                      case 1:
                        i = n.child.stateNode;
                    }
                  ja(n, u, i);
                }
                break;
              case 5:
                var d = n.stateNode;
                if (i === null && n.flags & 4) {
                  i = d;
                  var m = n.memoizedProps;
                  switch (n.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      m.autoFocus && i.focus();
                      break;
                    case 'img':
                      m.src && (i.src = m.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n.memoizedState === null) {
                  var x = n.alternate;
                  if (x !== null) {
                    var E = x.memoizedState;
                    if (E !== null) {
                      var R = E.dehydrated;
                      R !== null && _t(R);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(a(163));
            }
          Je || (n.flags & 512 && To(n));
        } catch (T) {
          Le(n, n.return, T);
        }
      }
      if (n === e) {
        U = null;
        break;
      }
      if (((i = n.sibling), i !== null)) {
        ((i.return = n.return), (U = i));
        break;
      }
      U = n.return;
    }
  }
  function ju(e) {
    for (; U !== null; ) {
      var n = U;
      if (n === e) {
        U = null;
        break;
      }
      var i = n.sibling;
      if (i !== null) {
        ((i.return = n.return), (U = i));
        break;
      }
      U = n.return;
    }
  }
  function ku(e) {
    for (; U !== null; ) {
      var n = U;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var i = n.return;
            try {
              Ur(4, n);
            } catch (m) {
              Le(n, i, m);
            }
            break;
          case 1:
            var t = n.stateNode;
            if (typeof t.componentDidMount == 'function') {
              var s = n.return;
              try {
                t.componentDidMount();
              } catch (m) {
                Le(n, s, m);
              }
            }
            var o = n.return;
            try {
              To(n);
            } catch (m) {
              Le(n, o, m);
            }
            break;
          case 5:
            var u = n.return;
            try {
              To(n);
            } catch (m) {
              Le(n, u, m);
            }
        }
      } catch (m) {
        Le(n, n.return, m);
      }
      if (n === e) {
        U = null;
        break;
      }
      var d = n.sibling;
      if (d !== null) {
        ((d.return = n.return), (U = d));
        break;
      }
      U = n.return;
    }
  }
  var Bd = Math.ceil,
    $r = re.ReactCurrentDispatcher,
    Ro = re.ReactCurrentOwner,
    xn = re.ReactCurrentBatchConfig,
    ae = 0,
    $e = null,
    Fe = null,
    He = 0,
    fn = 0,
    Ji = ei(0),
    ze = 0,
    Ut = null,
    ji = 0,
    qr = 0,
    bo = 0,
    $t = null,
    ln = null,
    Mo = 0,
    et = 1 / 0,
    $n = null,
    Dr = !1,
    Fo = null,
    oi = null,
    Hr = !1,
    li = null,
    Gr = 0,
    qt = 0,
    Oo = null,
    Kr = -1,
    Qr = 0;
  function tn() {
    return (ae & 6) !== 0 ? be() : Kr !== -1 ? Kr : (Kr = be());
  }
  function ai(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ae & 2) !== 0 && He !== 0
        ? He & -He
        : kd.transition !== null
          ? (Qr === 0 && (Qr = vl()), Qr)
          : ((e = he), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cl(e.type))), e);
  }
  function Tn(e, n, i, t) {
    if (50 < qt) throw ((qt = 0), (Oo = null), Error(a(185)));
    (ft(e, i, t),
      ((ae & 2) === 0 || e !== $e) &&
        (e === $e && ((ae & 2) === 0 && (qr |= i), ze === 4 && ui(e, He)),
        an(e, t),
        i === 1 && ae === 0 && (n.mode & 1) === 0 && ((et = be() + 500), jr && ii())));
  }
  function an(e, n) {
    var i = e.callbackNode;
    kc(e, n);
    var t = rr(e, e === $e ? He : 0);
    if (t === 0) (i !== null && fl(i), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((n = t & -t), e.callbackPriority !== n)) {
      if ((i != null && fl(i), n === 1))
        (e.tag === 0 ? jd(Cu.bind(null, e)) : da(Cu.bind(null, e)),
          _d(function () {
            (ae & 6) === 0 && ii();
          }),
          (i = null));
      else {
        switch (yl(t)) {
          case 1:
            i = ms;
            break;
          case 4:
            i = hl;
            break;
          case 16:
            i = er;
            break;
          case 536870912:
            i = gl;
            break;
          default:
            i = er;
        }
        i = Fu(i, Su.bind(null, e));
      }
      ((e.callbackPriority = n), (e.callbackNode = i));
    }
  }
  function Su(e, n) {
    if (((Kr = -1), (Qr = 0), (ae & 6) !== 0)) throw Error(a(327));
    var i = e.callbackNode;
    if (nt() && e.callbackNode !== i) return null;
    var t = rr(e, e === $e ? He : 0);
    if (t === 0) return null;
    if ((t & 30) !== 0 || (t & e.expiredLanes) !== 0 || n) n = Yr(e, t);
    else {
      n = t;
      var s = ae;
      ae |= 2;
      var o = Tu();
      ($e !== e || He !== n) && (($n = null), (et = be() + 500), Si(e, n));
      do
        try {
          qd();
          break;
        } catch (d) {
          Pu(e, d);
        }
      while (!0);
      (Xs(), ($r.current = o), (ae = s), Fe !== null ? (n = 0) : (($e = null), (He = 0), (n = ze)));
    }
    if (n !== 0) {
      if ((n === 2 && ((s = fs(e)), s !== 0 && ((t = s), (n = zo(e, s)))), n === 1))
        throw ((i = Ut), Si(e, 0), ui(e, t), an(e, be()), i);
      if (n === 6) ui(e, t);
      else {
        if (
          ((s = e.current.alternate),
          (t & 30) === 0 &&
            !Ud(s) &&
            ((n = Yr(e, t)),
            n === 2 && ((o = fs(e)), o !== 0 && ((t = o), (n = zo(e, o)))),
            n === 1))
        )
          throw ((i = Ut), Si(e, 0), ui(e, t), an(e, be()), i);
        switch (((e.finishedWork = s), (e.finishedLanes = t), n)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            Ci(e, ln, $n);
            break;
          case 3:
            if ((ui(e, t), (t & 130023424) === t && ((n = Mo + 500 - be()), 10 < n))) {
              if (rr(e, 0) !== 0) break;
              if (((s = e.suspendedLanes), (s & t) !== t)) {
                (tn(), (e.pingedLanes |= e.suspendedLanes & s));
                break;
              }
              e.timeoutHandle = Bs(Ci.bind(null, e, ln, $n), n);
              break;
            }
            Ci(e, ln, $n);
            break;
          case 4:
            if ((ui(e, t), (t & 4194240) === t)) break;
            for (n = e.eventTimes, s = -1; 0 < t; ) {
              var u = 31 - Nn(t);
              ((o = 1 << u), (u = n[u]), u > s && (s = u), (t &= ~o));
            }
            if (
              ((t = s),
              (t = be() - t),
              (t =
                (120 > t
                  ? 120
                  : 480 > t
                    ? 480
                    : 1080 > t
                      ? 1080
                      : 1920 > t
                        ? 1920
                        : 3e3 > t
                          ? 3e3
                          : 4320 > t
                            ? 4320
                            : 1960 * Bd(t / 1960)) - t),
              10 < t)
            ) {
              e.timeoutHandle = Bs(Ci.bind(null, e, ln, $n), t);
              break;
            }
            Ci(e, ln, $n);
            break;
          case 5:
            Ci(e, ln, $n);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return (an(e, be()), e.callbackNode === i ? Su.bind(null, e) : null);
  }
  function zo(e, n) {
    var i = $t;
    return (
      e.current.memoizedState.isDehydrated && (Si(e, n).flags |= 256),
      (e = Yr(e, n)),
      e !== 2 && ((n = ln), (ln = i), n !== null && Io(n)),
      e
    );
  }
  function Io(e) {
    ln === null ? (ln = e) : ln.push.apply(ln, e);
  }
  function Ud(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var i = n.updateQueue;
        if (i !== null && ((i = i.stores), i !== null))
          for (var t = 0; t < i.length; t++) {
            var s = i[t],
              o = s.getSnapshot;
            s = s.value;
            try {
              if (!jn(o(), s)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((i = n.child), n.subtreeFlags & 16384 && i !== null)) ((i.return = n), (n = i));
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        ((n.sibling.return = n.return), (n = n.sibling));
      }
    }
    return !0;
  }
  function ui(e, n) {
    for (
      n &= ~bo, n &= ~qr, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes;
      0 < n;

    ) {
      var i = 31 - Nn(n),
        t = 1 << i;
      ((e[i] = -1), (n &= ~t));
    }
  }
  function Cu(e) {
    if ((ae & 6) !== 0) throw Error(a(327));
    nt();
    var n = rr(e, 0);
    if ((n & 1) === 0) return (an(e, be()), null);
    var i = Yr(e, n);
    if (e.tag !== 0 && i === 2) {
      var t = fs(e);
      t !== 0 && ((n = t), (i = zo(e, t)));
    }
    if (i === 1) throw ((i = Ut), Si(e, 0), ui(e, n), an(e, be()), i);
    if (i === 6) throw Error(a(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = n),
      Ci(e, ln, $n),
      an(e, be()),
      null
    );
  }
  function Wo(e, n) {
    var i = ae;
    ae |= 1;
    try {
      return e(n);
    } finally {
      ((ae = i), ae === 0 && ((et = be() + 500), jr && ii()));
    }
  }
  function ki(e) {
    li !== null && li.tag === 0 && (ae & 6) === 0 && nt();
    var n = ae;
    ae |= 1;
    var i = xn.transition,
      t = he;
    try {
      if (((xn.transition = null), (he = 1), e)) return e();
    } finally {
      ((he = t), (xn.transition = i), (ae = n), (ae & 6) === 0 && ii());
    }
  }
  function Ao() {
    ((fn = Ji.current), je(Ji));
  }
  function Si(e, n) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var i = e.timeoutHandle;
    if ((i !== -1 && ((e.timeoutHandle = -1), yd(i)), Fe !== null))
      for (i = Fe.return; i !== null; ) {
        var t = i;
        switch ((Gs(t), t.tag)) {
          case 1:
            ((t = t.type.childContextTypes), t != null && wr());
            break;
          case 3:
            (Yi(), je(rn), je(Ye), oo());
            break;
          case 5:
            ro(t);
            break;
          case 4:
            Yi();
            break;
          case 13:
            je(Se);
            break;
          case 19:
            je(Se);
            break;
          case 10:
            Js(t.type._context);
            break;
          case 22:
          case 23:
            Ao();
        }
        i = i.return;
      }
    if (
      (($e = e),
      (Fe = e = ci(e.current, null)),
      (He = fn = n),
      (ze = 0),
      (Ut = null),
      (bo = qr = ji = 0),
      (ln = $t = null),
      xi !== null)
    ) {
      for (n = 0; n < xi.length; n++)
        if (((i = xi[n]), (t = i.interleaved), t !== null)) {
          i.interleaved = null;
          var s = t.next,
            o = i.pending;
          if (o !== null) {
            var u = o.next;
            ((o.next = s), (t.next = u));
          }
          i.pending = t;
        }
      xi = null;
    }
    return e;
  }
  function Pu(e, n) {
    do {
      var i = Fe;
      try {
        if ((Xs(), (Mr.current = Ir), Fr)) {
          for (var t = Ce.memoizedState; t !== null; ) {
            var s = t.queue;
            (s !== null && (s.pending = null), (t = t.next));
          }
          Fr = !1;
        }
        if (
          ((Ni = 0),
          (Ue = Oe = Ce = null),
          (zt = !1),
          (It = 0),
          (Ro.current = null),
          i === null || i.return === null)
        ) {
          ((ze = 1), (Ut = n), (Fe = null));
          break;
        }
        e: {
          var o = e,
            u = i.return,
            d = i,
            m = n;
          if (
            ((n = He),
            (d.flags |= 32768),
            m !== null && typeof m == 'object' && typeof m.then == 'function')
          ) {
            var x = m,
              E = d,
              R = E.tag;
            if ((E.mode & 1) === 0 && (R === 0 || R === 11 || R === 15)) {
              var T = E.alternate;
              T
                ? ((E.updateQueue = T.updateQueue),
                  (E.memoizedState = T.memoizedState),
                  (E.lanes = T.lanes))
                : ((E.updateQueue = null), (E.memoizedState = null));
            }
            var B = Xa(u);
            if (B !== null) {
              ((B.flags &= -257), Ja(B, u, d, o, n), B.mode & 1 && Za(o, x, n), (n = B), (m = x));
              var $ = n.updateQueue;
              if ($ === null) {
                var q = new Set();
                (q.add(m), (n.updateQueue = q));
              } else $.add(m);
              break e;
            } else {
              if ((n & 1) === 0) {
                (Za(o, x, n), Vo());
                break e;
              }
              m = Error(a(426));
            }
          } else if (ke && d.mode & 1) {
            var Me = Xa(u);
            if (Me !== null) {
              ((Me.flags & 65536) === 0 && (Me.flags |= 256), Ja(Me, u, d, o, n), Ys(Zi(m, d)));
              break e;
            }
          }
          ((o = m = Zi(m, d)),
            ze !== 4 && (ze = 2),
            $t === null ? ($t = [o]) : $t.push(o),
            (o = u));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536), (n &= -n), (o.lanes |= n));
                var v = Qa(o, m, n);
                Na(o, v);
                break e;
              case 1:
                d = m;
                var g = o.type,
                  _ = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof g.getDerivedStateFromError == 'function' ||
                    (_ !== null &&
                      typeof _.componentDidCatch == 'function' &&
                      (oi === null || !oi.has(_))))
                ) {
                  ((o.flags |= 65536), (n &= -n), (o.lanes |= n));
                  var M = Ya(o, d, n);
                  Na(o, M);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Lu(i);
      } catch (D) {
        ((n = D), Fe === i && i !== null && (Fe = i = i.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Tu() {
    var e = $r.current;
    return (($r.current = Ir), e === null ? Ir : e);
  }
  function Vo() {
    ((ze === 0 || ze === 3 || ze === 2) && (ze = 4),
      $e === null || ((ji & 268435455) === 0 && (qr & 268435455) === 0) || ui($e, He));
  }
  function Yr(e, n) {
    var i = ae;
    ae |= 2;
    var t = Tu();
    ($e !== e || He !== n) && (($n = null), Si(e, n));
    do
      try {
        $d();
        break;
      } catch (s) {
        Pu(e, s);
      }
    while (!0);
    if ((Xs(), (ae = i), ($r.current = t), Fe !== null)) throw Error(a(261));
    return (($e = null), (He = 0), ze);
  }
  function $d() {
    for (; Fe !== null; ) Eu(Fe);
  }
  function qd() {
    for (; Fe !== null && !hc(); ) Eu(Fe);
  }
  function Eu(e) {
    var n = Mu(e.alternate, e, fn);
    ((e.memoizedProps = e.pendingProps), n === null ? Lu(e) : (Fe = n), (Ro.current = null));
  }
  function Lu(e) {
    var n = e;
    do {
      var i = n.alternate;
      if (((e = n.return), (n.flags & 32768) === 0)) {
        if (((i = zd(i, n, fn)), i !== null)) {
          Fe = i;
          return;
        }
      } else {
        if (((i = Id(i, n)), i !== null)) {
          ((i.flags &= 32767), (Fe = i));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((ze = 6), (Fe = null));
          return;
        }
      }
      if (((n = n.sibling), n !== null)) {
        Fe = n;
        return;
      }
      Fe = n = e;
    } while (n !== null);
    ze === 0 && (ze = 5);
  }
  function Ci(e, n, i) {
    var t = he,
      s = xn.transition;
    try {
      ((xn.transition = null), (he = 1), Dd(e, n, i, t));
    } finally {
      ((xn.transition = s), (he = t));
    }
    return null;
  }
  function Dd(e, n, i, t) {
    do nt();
    while (li !== null);
    if ((ae & 6) !== 0) throw Error(a(327));
    i = e.finishedWork;
    var s = e.finishedLanes;
    if (i === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current)) throw Error(a(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var o = i.lanes | i.childLanes;
    if (
      (Sc(e, o),
      e === $e && ((Fe = $e = null), (He = 0)),
      ((i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0) ||
        Hr ||
        ((Hr = !0),
        Fu(er, function () {
          return (nt(), null);
        })),
      (o = (i.flags & 15990) !== 0),
      (i.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = xn.transition), (xn.transition = null));
      var u = he;
      he = 1;
      var d = ae;
      ((ae |= 4),
        (Ro.current = null),
        Ad(e, i),
        xu(i, e),
        dd(As),
        (lr = !!Ws),
        (As = Ws = null),
        (e.current = i),
        Vd(i),
        gc(),
        (ae = d),
        (he = u),
        (xn.transition = o));
    } else e.current = i;
    if (
      (Hr && ((Hr = !1), (li = e), (Gr = s)),
      (o = e.pendingLanes),
      o === 0 && (oi = null),
      _c(i.stateNode),
      an(e, be()),
      n !== null)
    )
      for (t = e.onRecoverableError, i = 0; i < n.length; i++)
        ((s = n[i]), t(s.value, { componentStack: s.stack, digest: s.digest }));
    if (Dr) throw ((Dr = !1), (e = Fo), (Fo = null), e);
    return (
      (Gr & 1) !== 0 && e.tag !== 0 && nt(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === Oo ? qt++ : ((qt = 0), (Oo = e))) : (qt = 0),
      ii(),
      null
    );
  }
  function nt() {
    if (li !== null) {
      var e = yl(Gr),
        n = xn.transition,
        i = he;
      try {
        if (((xn.transition = null), (he = 16 > e ? 16 : e), li === null)) var t = !1;
        else {
          if (((e = li), (li = null), (Gr = 0), (ae & 6) !== 0)) throw Error(a(331));
          var s = ae;
          for (ae |= 4, U = e.current; U !== null; ) {
            var o = U,
              u = o.child;
            if ((U.flags & 16) !== 0) {
              var d = o.deletions;
              if (d !== null) {
                for (var m = 0; m < d.length; m++) {
                  var x = d[m];
                  for (U = x; U !== null; ) {
                    var E = U;
                    switch (E.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Bt(8, E, o);
                    }
                    var R = E.child;
                    if (R !== null) ((R.return = E), (U = R));
                    else
                      for (; U !== null; ) {
                        E = U;
                        var T = E.sibling,
                          B = E.return;
                        if ((hu(E), E === x)) {
                          U = null;
                          break;
                        }
                        if (T !== null) {
                          ((T.return = B), (U = T));
                          break;
                        }
                        U = B;
                      }
                  }
                }
                var $ = o.alternate;
                if ($ !== null) {
                  var q = $.child;
                  if (q !== null) {
                    $.child = null;
                    do {
                      var Me = q.sibling;
                      ((q.sibling = null), (q = Me));
                    } while (q !== null);
                  }
                }
                U = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && u !== null) ((u.return = o), (U = u));
            else
              e: for (; U !== null; ) {
                if (((o = U), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bt(9, o, o.return);
                  }
                var v = o.sibling;
                if (v !== null) {
                  ((v.return = o.return), (U = v));
                  break e;
                }
                U = o.return;
              }
          }
          var g = e.current;
          for (U = g; U !== null; ) {
            u = U;
            var _ = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && _ !== null) ((_.return = u), (U = _));
            else
              e: for (u = g; U !== null; ) {
                if (((d = U), (d.flags & 2048) !== 0))
                  try {
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ur(9, d);
                    }
                  } catch (D) {
                    Le(d, d.return, D);
                  }
                if (d === u) {
                  U = null;
                  break e;
                }
                var M = d.sibling;
                if (M !== null) {
                  ((M.return = d.return), (U = M));
                  break e;
                }
                U = d.return;
              }
          }
          if (((ae = s), ii(), Rn && typeof Rn.onPostCommitFiberRoot == 'function'))
            try {
              Rn.onPostCommitFiberRoot(nr, e);
            } catch {}
          t = !0;
        }
        return t;
      } finally {
        ((he = i), (xn.transition = n));
      }
    }
    return !1;
  }
  function Ru(e, n, i) {
    ((n = Zi(i, n)),
      (n = Qa(e, n, 1)),
      (e = ri(e, n, 1)),
      (n = tn()),
      e !== null && (ft(e, 1, n), an(e, n)));
  }
  function Le(e, n, i) {
    if (e.tag === 3) Ru(e, e, i);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Ru(n, e, i);
          break;
        } else if (n.tag === 1) {
          var t = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == 'function' ||
            (typeof t.componentDidCatch == 'function' && (oi === null || !oi.has(t)))
          ) {
            ((e = Zi(i, e)),
              (e = Ya(n, e, 1)),
              (n = ri(n, e, 1)),
              (e = tn()),
              n !== null && (ft(n, 1, e), an(n, e)));
            break;
          }
        }
        n = n.return;
      }
  }
  function Hd(e, n, i) {
    var t = e.pingCache;
    (t !== null && t.delete(n),
      (n = tn()),
      (e.pingedLanes |= e.suspendedLanes & i),
      $e === e &&
        (He & i) === i &&
        (ze === 4 || (ze === 3 && (He & 130023424) === He && 500 > be() - Mo)
          ? Si(e, 0)
          : (bo |= i)),
      an(e, n));
  }
  function bu(e, n) {
    n === 0 &&
      ((e.mode & 1) === 0
        ? (n = 1)
        : ((n = tr), (tr <<= 1), (tr & 130023424) === 0 && (tr = 4194304)));
    var i = tn();
    ((e = Vn(e, n)), e !== null && (ft(e, n, i), an(e, i)));
  }
  function Gd(e) {
    var n = e.memoizedState,
      i = 0;
    (n !== null && (i = n.retryLane), bu(e, i));
  }
  function Kd(e, n) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var t = e.stateNode,
          s = e.memoizedState;
        s !== null && (i = s.retryLane);
        break;
      case 19:
        t = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    (t !== null && t.delete(n), bu(e, i));
  }
  var Mu;
  Mu = function (e, n, i) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || rn.current) on = !0;
      else {
        if ((e.lanes & i) === 0 && (n.flags & 128) === 0) return ((on = !1), Od(e, n, i));
        on = (e.flags & 131072) !== 0;
      }
    else ((on = !1), ke && (n.flags & 1048576) !== 0 && pa(n, Sr, n.index));
    switch (((n.lanes = 0), n.tag)) {
      case 2:
        var t = n.type;
        (Vr(e, n), (e = n.pendingProps));
        var s = $i(n, Ye.current);
        (Qi(n, i), (s = uo(null, n, t, e, s, i)));
        var o = co();
        return (
          (n.flags |= 1),
          typeof s == 'object' &&
          s !== null &&
          typeof s.render == 'function' &&
          s.$$typeof === void 0
            ? ((n.tag = 1),
              (n.memoizedState = null),
              (n.updateQueue = null),
              sn(t) ? ((o = !0), Nr(n)) : (o = !1),
              (n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null),
              io(n),
              (s.updater = Wr),
              (n.stateNode = s),
              (s._reactInternals = n),
              vo(n, t, e, i),
              (n = wo(null, n, t, !0, o, i)))
            : ((n.tag = 0), ke && o && Hs(n), nn(null, n, s, i), (n = n.child)),
          n
        );
      case 16:
        t = n.elementType;
        e: {
          switch (
            (Vr(e, n),
            (e = n.pendingProps),
            (s = t._init),
            (t = s(t._payload)),
            (n.type = t),
            (s = n.tag = Yd(t)),
            (e = Sn(t, e)),
            s)
          ) {
            case 0:
              n = xo(null, n, t, e, i);
              break e;
            case 1:
              n = su(null, n, t, e, i);
              break e;
            case 11:
              n = eu(null, n, t, e, i);
              break e;
            case 14:
              n = nu(null, n, t, Sn(t.type, e), i);
              break e;
          }
          throw Error(a(306, t, ''));
        }
        return n;
      case 0:
        return (
          (t = n.type),
          (s = n.pendingProps),
          (s = n.elementType === t ? s : Sn(t, s)),
          xo(e, n, t, s, i)
        );
      case 1:
        return (
          (t = n.type),
          (s = n.pendingProps),
          (s = n.elementType === t ? s : Sn(t, s)),
          su(e, n, t, s, i)
        );
      case 3:
        e: {
          if ((ou(n), e === null)) throw Error(a(387));
          ((t = n.pendingProps),
            (o = n.memoizedState),
            (s = o.element),
            wa(e, n),
            Rr(n, t, null, i));
          var u = n.memoizedState;
          if (((t = u.element), o.isDehydrated))
            if (
              ((o = {
                element: t,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (n.updateQueue.baseState = o),
              (n.memoizedState = o),
              n.flags & 256)
            ) {
              ((s = Zi(Error(a(423)), n)), (n = lu(e, n, t, i, s)));
              break e;
            } else if (t !== s) {
              ((s = Zi(Error(a(424)), n)), (n = lu(e, n, t, i, s)));
              break e;
            } else
              for (
                mn = Jn(n.stateNode.containerInfo.firstChild),
                  pn = n,
                  ke = !0,
                  kn = null,
                  i = _a(n, null, t, i),
                  n.child = i;
                i;

              )
                ((i.flags = (i.flags & -3) | 4096), (i = i.sibling));
          else {
            if ((Hi(), t === s)) {
              n = Un(e, n, i);
              break e;
            }
            nn(e, n, t, i);
          }
          n = n.child;
        }
        return n;
      case 5:
        return (
          ka(n),
          e === null && Qs(n),
          (t = n.type),
          (s = n.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (u = s.children),
          Vs(t, s) ? (u = null) : o !== null && Vs(t, o) && (n.flags |= 32),
          ru(e, n),
          nn(e, n, u, i),
          n.child
        );
      case 6:
        return (e === null && Qs(n), null);
      case 13:
        return au(e, n, i);
      case 4:
        return (
          to(n, n.stateNode.containerInfo),
          (t = n.pendingProps),
          e === null ? (n.child = Gi(n, null, t, i)) : nn(e, n, t, i),
          n.child
        );
      case 11:
        return (
          (t = n.type),
          (s = n.pendingProps),
          (s = n.elementType === t ? s : Sn(t, s)),
          eu(e, n, t, s, i)
        );
      case 7:
        return (nn(e, n, n.pendingProps, i), n.child);
      case 8:
        return (nn(e, n, n.pendingProps.children, i), n.child);
      case 12:
        return (nn(e, n, n.pendingProps.children, i), n.child);
      case 10:
        e: {
          if (
            ((t = n.type._context),
            (s = n.pendingProps),
            (o = n.memoizedProps),
            (u = s.value),
            xe(Tr, t._currentValue),
            (t._currentValue = u),
            o !== null)
          )
            if (jn(o.value, u)) {
              if (o.children === s.children && !rn.current) {
                n = Un(e, n, i);
                break e;
              }
            } else
              for (o = n.child, o !== null && (o.return = n); o !== null; ) {
                var d = o.dependencies;
                if (d !== null) {
                  u = o.child;
                  for (var m = d.firstContext; m !== null; ) {
                    if (m.context === t) {
                      if (o.tag === 1) {
                        ((m = Bn(-1, i & -i)), (m.tag = 2));
                        var x = o.updateQueue;
                        if (x !== null) {
                          x = x.shared;
                          var E = x.pending;
                          (E === null ? (m.next = m) : ((m.next = E.next), (E.next = m)),
                            (x.pending = m));
                        }
                      }
                      ((o.lanes |= i),
                        (m = o.alternate),
                        m !== null && (m.lanes |= i),
                        eo(o.return, i, n),
                        (d.lanes |= i));
                      break;
                    }
                    m = m.next;
                  }
                } else if (o.tag === 10) u = o.type === n.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((u = o.return), u === null)) throw Error(a(341));
                  ((u.lanes |= i),
                    (d = u.alternate),
                    d !== null && (d.lanes |= i),
                    eo(u, i, n),
                    (u = o.sibling));
                } else u = o.child;
                if (u !== null) u.return = o;
                else
                  for (u = o; u !== null; ) {
                    if (u === n) {
                      u = null;
                      break;
                    }
                    if (((o = u.sibling), o !== null)) {
                      ((o.return = u.return), (u = o));
                      break;
                    }
                    u = u.return;
                  }
                o = u;
              }
          (nn(e, n, s.children, i), (n = n.child));
        }
        return n;
      case 9:
        return (
          (s = n.type),
          (t = n.pendingProps.children),
          Qi(n, i),
          (s = yn(s)),
          (t = t(s)),
          (n.flags |= 1),
          nn(e, n, t, i),
          n.child
        );
      case 14:
        return ((t = n.type), (s = Sn(t, n.pendingProps)), (s = Sn(t.type, s)), nu(e, n, t, s, i));
      case 15:
        return iu(e, n, n.type, n.pendingProps, i);
      case 17:
        return (
          (t = n.type),
          (s = n.pendingProps),
          (s = n.elementType === t ? s : Sn(t, s)),
          Vr(e, n),
          (n.tag = 1),
          sn(t) ? ((e = !0), Nr(n)) : (e = !1),
          Qi(n, i),
          Ga(n, t, s),
          vo(n, t, s, i),
          wo(null, n, t, !0, e, i)
        );
      case 19:
        return cu(e, n, i);
      case 22:
        return tu(e, n, i);
    }
    throw Error(a(156, n.tag));
  };
  function Fu(e, n) {
    return ml(e, n);
  }
  function Qd(e, n, i, t) {
    ((this.tag = e),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = n),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = t),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function wn(e, n, i, t) {
    return new Qd(e, n, i, t);
  }
  function Bo(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Yd(e) {
    if (typeof e == 'function') return Bo(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Ae)) return 11;
      if (e === Ve) return 14;
    }
    return 2;
  }
  function ci(e, n) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = wn(e.tag, n, e.key, e.mode)),
          (i.elementType = e.elementType),
          (i.type = e.type),
          (i.stateNode = e.stateNode),
          (i.alternate = e),
          (e.alternate = i))
        : ((i.pendingProps = n),
          (i.type = e.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = e.flags & 14680064),
      (i.childLanes = e.childLanes),
      (i.lanes = e.lanes),
      (i.child = e.child),
      (i.memoizedProps = e.memoizedProps),
      (i.memoizedState = e.memoizedState),
      (i.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (i.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (i.sibling = e.sibling),
      (i.index = e.index),
      (i.ref = e.ref),
      i
    );
  }
  function Zr(e, n, i, t, s, o) {
    var u = 2;
    if (((t = e), typeof e == 'function')) Bo(e) && (u = 1);
    else if (typeof e == 'string') u = 5;
    else
      e: switch (e) {
        case ve:
          return Pi(i.children, s, o, n);
        case Ie:
          ((u = 8), (s |= 8));
          break;
        case Ge:
          return ((e = wn(12, i, n, s | 2)), (e.elementType = Ge), (e.lanes = o), e);
        case X:
          return ((e = wn(13, i, n, s)), (e.elementType = X), (e.lanes = o), e);
        case Te:
          return ((e = wn(19, i, n, s)), (e.elementType = Te), (e.lanes = o), e);
        case H:
          return Xr(i, s, o, n);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case We:
                u = 10;
                break e;
              case cn:
                u = 9;
                break e;
              case Ae:
                u = 11;
                break e;
              case Ve:
                u = 14;
                break e;
              case Re:
                ((u = 16), (t = null));
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ''));
      }
    return ((n = wn(u, i, n, s)), (n.elementType = e), (n.type = t), (n.lanes = o), n);
  }
  function Pi(e, n, i, t) {
    return ((e = wn(7, e, t, n)), (e.lanes = i), e);
  }
  function Xr(e, n, i, t) {
    return (
      (e = wn(22, e, t, n)),
      (e.elementType = H),
      (e.lanes = i),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Uo(e, n, i) {
    return ((e = wn(6, e, null, n)), (e.lanes = i), e);
  }
  function $o(e, n, i) {
    return (
      (n = wn(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = i),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  function Zd(e, n, i, t, s) {
    ((this.tag = n),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = hs(0)),
      (this.expirationTimes = hs(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = hs(0)),
      (this.identifierPrefix = t),
      (this.onRecoverableError = s),
      (this.mutableSourceEagerHydrationData = null));
  }
  function qo(e, n, i, t, s, o, u, d, m) {
    return (
      (e = new Zd(e, n, i, d, m)),
      n === 1 ? ((n = 1), o === !0 && (n |= 8)) : (n = 0),
      (o = wn(3, null, null, n)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: t,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      io(o),
      e
    );
  }
  function Xd(e, n, i) {
    var t = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: fe,
      key: t == null ? null : '' + t,
      children: e,
      containerInfo: n,
      implementation: i,
    };
  }
  function Ou(e) {
    if (!e) return ni;
    e = e._reactInternals;
    e: {
      if (hi(e) !== e || e.tag !== 1) throw Error(a(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (sn(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var i = e.type;
      if (sn(i)) return ua(e, i, n);
    }
    return n;
  }
  function zu(e, n, i, t, s, o, u, d, m) {
    return (
      (e = qo(i, t, !0, e, s, o, u, d, m)),
      (e.context = Ou(null)),
      (i = e.current),
      (t = tn()),
      (s = ai(i)),
      (o = Bn(t, s)),
      (o.callback = n ?? null),
      ri(i, o, s),
      (e.current.lanes = s),
      ft(e, s, t),
      an(e, t),
      e
    );
  }
  function Jr(e, n, i, t) {
    var s = n.current,
      o = tn(),
      u = ai(s);
    return (
      (i = Ou(i)),
      n.context === null ? (n.context = i) : (n.pendingContext = i),
      (n = Bn(o, u)),
      (n.payload = { element: e }),
      (t = t === void 0 ? null : t),
      t !== null && (n.callback = t),
      (e = ri(s, n, u)),
      e !== null && (Tn(e, s, u, o), Lr(e, s, u)),
      u
    );
  }
  function es(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Iu(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function Do(e, n) {
    (Iu(e, n), (e = e.alternate) && Iu(e, n));
  }
  function Jd() {
    return null;
  }
  var Wu =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ho(e) {
    this._internalRoot = e;
  }
  ((ns.prototype.render = Ho.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(a(409));
      Jr(e, n, null, null);
    }),
    (ns.prototype.unmount = Ho.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          (ki(function () {
            Jr(null, e, null, null);
          }),
            (n[zn] = null));
        }
      }));
  function ns(e) {
    this._internalRoot = e;
  }
  ns.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = wl();
      e = { blockedOn: null, target: e, priority: n };
      for (var i = 0; i < Yn.length && n !== 0 && n < Yn[i].priority; i++);
      (Yn.splice(i, 0, e), i === 0 && kl(e));
    }
  };
  function Go(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function is(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Au() {}
  function ep(e, n, i, t, s) {
    if (s) {
      if (typeof t == 'function') {
        var o = t;
        t = function () {
          var x = es(u);
          o.call(x);
        };
      }
      var u = zu(n, t, e, 0, null, !1, !1, '', Au);
      return (
        (e._reactRootContainer = u),
        (e[zn] = u.current),
        Tt(e.nodeType === 8 ? e.parentNode : e),
        ki(),
        u
      );
    }
    for (; (s = e.lastChild); ) e.removeChild(s);
    if (typeof t == 'function') {
      var d = t;
      t = function () {
        var x = es(m);
        d.call(x);
      };
    }
    var m = qo(e, 0, !1, null, null, !1, !1, '', Au);
    return (
      (e._reactRootContainer = m),
      (e[zn] = m.current),
      Tt(e.nodeType === 8 ? e.parentNode : e),
      ki(function () {
        Jr(n, m, i, t);
      }),
      m
    );
  }
  function ts(e, n, i, t, s) {
    var o = i._reactRootContainer;
    if (o) {
      var u = o;
      if (typeof s == 'function') {
        var d = s;
        s = function () {
          var m = es(u);
          d.call(m);
        };
      }
      Jr(n, u, e, s);
    } else u = ep(i, n, e, s, t);
    return es(u);
  }
  ((_l = function (e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var i = mt(n.pendingLanes);
          i !== 0 && (gs(n, i | 1), an(n, be()), (ae & 6) === 0 && ((et = be() + 500), ii()));
        }
        break;
      case 13:
        (ki(function () {
          var t = Vn(e, 1);
          if (t !== null) {
            var s = tn();
            Tn(t, e, 1, s);
          }
        }),
          Do(e, 1));
    }
  }),
    (vs = function (e) {
      if (e.tag === 13) {
        var n = Vn(e, 134217728);
        if (n !== null) {
          var i = tn();
          Tn(n, e, 134217728, i);
        }
        Do(e, 134217728);
      }
    }),
    (xl = function (e) {
      if (e.tag === 13) {
        var n = ai(e),
          i = Vn(e, n);
        if (i !== null) {
          var t = tn();
          Tn(i, e, n, t);
        }
        Do(e, n);
      }
    }),
    (wl = function () {
      return he;
    }),
    (Nl = function (e, n) {
      var i = he;
      try {
        return ((he = e), n());
      } finally {
        he = i;
      }
    }),
    (Mi = function (e, n, i) {
      switch (n) {
        case 'input':
          if ((Li(e, i), (n = i.name), i.type === 'radio' && n != null)) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll('input[name=' + JSON.stringify('' + n) + '][type="radio"]'),
                n = 0;
              n < i.length;
              n++
            ) {
              var t = i[n];
              if (t !== e && t.form === e.form) {
                var s = xr(t);
                if (!s) throw Error(a(90));
                (mi(t), Li(t, s));
              }
            }
          }
          break;
        case 'textarea':
          Qe(e, i);
          break;
        case 'select':
          ((n = i.value), n != null && En(e, !!i.multiple, n, !1));
      }
    }),
    (ol = Wo),
    (ll = ki));
  var np = { usingClientEntryPoint: !1, Events: [Rt, Bi, xr, we, Ln, Wo] },
    Dt = {
      findFiberByHostInstance: gi,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    ip = {
      bundleType: Dt.bundleType,
      version: Dt.version,
      rendererPackageName: Dt.rendererPackageName,
      rendererConfig: Dt.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: re.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = dl(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Dt.findFiberByHostInstance || Jd,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var rs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!rs.isDisabled && rs.supportsFiber)
      try {
        ((nr = rs.inject(ip)), (Rn = rs));
      } catch {}
  }
  return (
    (un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = np),
    (un.createPortal = function (e, n) {
      var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Go(n)) throw Error(a(200));
      return Xd(e, n, null, i);
    }),
    (un.createRoot = function (e, n) {
      if (!Go(e)) throw Error(a(299));
      var i = !1,
        t = '',
        s = Wu;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (t = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (n = qo(e, 1, !1, null, null, i, !1, t, s)),
        (e[zn] = n.current),
        Tt(e.nodeType === 8 ? e.parentNode : e),
        new Ho(n)
      );
    }),
    (un.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var n = e._reactInternals;
      if (n === void 0)
        throw typeof e.render == 'function'
          ? Error(a(188))
          : ((e = Object.keys(e).join(',')), Error(a(268, e)));
      return ((e = dl(n)), (e = e === null ? null : e.stateNode), e);
    }),
    (un.flushSync = function (e) {
      return ki(e);
    }),
    (un.hydrate = function (e, n, i) {
      if (!is(n)) throw Error(a(200));
      return ts(null, e, n, !0, i);
    }),
    (un.hydrateRoot = function (e, n, i) {
      if (!Go(e)) throw Error(a(405));
      var t = (i != null && i.hydratedSources) || null,
        s = !1,
        o = '',
        u = Wu;
      if (
        (i != null &&
          (i.unstable_strictMode === !0 && (s = !0),
          i.identifierPrefix !== void 0 && (o = i.identifierPrefix),
          i.onRecoverableError !== void 0 && (u = i.onRecoverableError)),
        (n = zu(n, null, e, 1, i ?? null, s, !1, o, u)),
        (e[zn] = n.current),
        Tt(e),
        t)
      )
        for (e = 0; e < t.length; e++)
          ((i = t[e]),
            (s = i._getVersion),
            (s = s(i._source)),
            n.mutableSourceEagerHydrationData == null
              ? (n.mutableSourceEagerHydrationData = [i, s])
              : n.mutableSourceEagerHydrationData.push(i, s));
      return new ns(n);
    }),
    (un.render = function (e, n, i) {
      if (!is(n)) throw Error(a(200));
      return ts(null, e, n, !1, i);
    }),
    (un.unmountComponentAtNode = function (e) {
      if (!is(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (ki(function () {
            ts(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[zn] = null));
            });
          }),
          !0)
        : !1;
    }),
    (un.unstable_batchedUpdates = Wo),
    (un.unstable_renderSubtreeIntoContainer = function (e, n, i, t) {
      if (!is(i)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return ts(e, n, i, !1, t);
    }),
    (un.version = '18.3.1-next-f1338f8080-20240426'),
    un
  );
}
var Gu;
function cp() {
  if (Gu) return Yo.exports;
  Gu = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (c) {
        console.error(c);
      }
  }
  return (l(), (Yo.exports = up()), Yo.exports);
}
var Ku;
function dp() {
  if (Ku) return ss;
  Ku = 1;
  var l = cp();
  return ((ss.createRoot = l.createRoot), (ss.hydrateRoot = l.hydrateRoot), ss);
}
var pp = dp();
const mp = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    phoneCountryCode: '+33',
    companyName: '',
    customerType: '',
    shipperType: '',
    country: '',
    destCity: '',
    destZipCode: '',
    destLocationType: '',
    origin: '',
    city: '',
    zipCode: '',
    locationType: '',
    mode: '',
    incoterm: '',
    goodsDescription: '',
    totalWeight: '',
    numberOfUnits: 1,
    dimensions: { length: '', width: '', height: '' },
    weightPerUnit: '',
    goodsValue: '',
    goodsCurrency: 'USD',
    areGoodsReady: '',
    annualVolume: '',
    isPersonalOrHazardous: !1,
    remarks: '',
    servicesRequested: {
      shipping: !0,
      sourcing: !1,
      dropshipping: !1,
      warehousing: !1,
      qc: !1,
      chinaVisits: !1,
      other: !1,
    },
    sourcing: {
      productDescription: '',
      referenceLink: '',
      targetPrice: null,
      targetCurrency: 'USD',
      moq: null,
      platform: '',
      hasSupplier: null,
      targetMarkets: '',
      requiredCertifications: '',
      timeline: '',
      qualityStandards: '',
      packagingRequirements: '',
      notes: '',
    },
    warehousing: {
      duration: '',
      skuCount: null,
      consolidation: null,
      extraServices: [],
      notes: '',
    },
    dropshipping: {
      products: '',
      model: '',
      customerCountries: '',
      dailyOrders: null,
      hasCatalog: null,
      brandingNeeded: null,
      notes: '',
    },
    qc: { type: '', productionStage: '', factoryCity: '', preferredDate: '', notes: '' },
    chinaVisit: {
      visitType: [],
      mainCity: '',
      otherCities: '',
      fairName: '',
      factoryDescription: '',
      cantonPhase: '',
      startDate: '',
      endDate: '',
      numberOfDays: null,
      numberOfTravelers: null,
      needGuide: null,
      needTransport: null,
      needHotels: null,
      notes: '',
    },
    otherProject: { projectType: '', description: '', budget: '', timeline: '' },
  },
  nc = W.createContext(void 0),
  fp = ({ children: l }) => {
    const [c, a] = W.useState(mp),
      w = W.useCallback((C) => {
        const { name: j, value: p, type: h } = C.target,
          z = C.target.checked;
        a((K) => ({ ...K, [j]: h === 'checkbox' ? z : p }));
      }, []),
      N = { formData: c, setFormData: a, handleInputChange: w };
    return r.jsx(nc.Provider, { value: N, children: l });
  };
function hp() {
  const l = W.useContext(nc);
  if (!l) throw new Error('useSimpleForm must be used inside <SimpleFormProvider>');
  return l;
}
const gp = ({
  formData: l,
  setFormData: c,
  t: a,
  stepLabel: w,
  shippingOnly: N = !1,
  isQuickQuote: C = !1,
  setIsQuickQuote: j,
}) => {
  const p = (h) => {
    c((z) => ({
      ...z,
      servicesRequested: { ...z.servicesRequested, [h]: !z.servicesRequested[h] },
    }));
  };
  return r.jsxs('section', {
    className: 'sino-simple-form__section sino-simple-form__section--services',
    children: [
      r.jsxs('header', {
        className: 'sino-simple-form__header',
        children: [
          r.jsxs('div', {
            className: 'sino-simple-form__header-top',
            children: [
              r.jsx('p', {
                className: 'sino-simple-form__eyebrow',
                children: N
                  ? a('simpleEyebrowShippingOnly', 'Shipping from China')
                  : a('simpleEyebrowMulti', 'Projects with China'),
              }),
              C &&
                r.jsx('span', {
                  className: 'sino-simple-form__quick-quote-badge',
                  children: a('quickQuoteBadge', 'Quick quote'),
                }),
            ],
          }),
          r.jsx('h1', {
            className: 'sino-simple-form__title',
            children: a('simpleTitle', 'Plan your project with China in one request'),
          }),
          r.jsx('p', {
            className: 'sino-simple-form__subtitle',
            children: N
              ? a(
                  'simpleSubtitleShippingOnly',
                  'Answer a few key questions about your route, cargo and timing to get a tailored shipping plan.'
                )
              : a(
                  'simpleSubtitleMulti',
                  "Answer a few key questions and we'll route your request to the right specialists for shipping, sourcing, QC, visits and more."
                ),
          }),
          j &&
            r.jsx('div', {
              className: 'sino-simple-form__quick-quote-toggle',
              children: r.jsxs('label', {
                className: 'sino-simple-form__quick-quote-toggle-label',
                children: [
                  r.jsx('input', {
                    type: 'checkbox',
                    checked: C,
                    onChange: (h) => j(h.target.checked),
                    className: 'sino-simple-form__quick-quote-toggle-input',
                  }),
                  r.jsx('span', { className: 'sino-simple-form__quick-quote-toggle-slider' }),
                  r.jsx('span', {
                    className: 'sino-simple-form__quick-quote-toggle-text',
                    children: a('quickQuoteToggle', 'Quick quote mode (essential fields only)'),
                  }),
                ],
              }),
            }),
          r.jsx('p', {
            className: 'sino-simple-form__hint',
            children: a(
              'simpleRequiredHint',
              'Fields marked with * are required. The rest can stay approximate or empty for now.'
            ),
          }),
        ],
      }),
      r.jsxs('h2', {
        className: 'sino-simple-form__section-title',
        children: [
          r.jsx('span', { className: 'sino-simple-form__section-step', children: w ?? 'Step 0' }),
          r.jsx('span', {
            children: a('simpleServicesStepTitle', 'What do you need help with from China?'),
          }),
        ],
      }),
      r.jsx('p', {
        className: 'sino-simple-form__hint',
        children: a(
          'simpleServicesStepHint',
          'Select all that apply (most people pick 1–3 options). Shipping remains the core module and we tailor the rest around your needs.'
        ),
      }),
      r.jsx('div', {
        className: 'sino-simple-form__fields sino-simple-form__fields--rows',
        children: r.jsx('div', {
          className: 'sino-simple-form__field',
          children: r.jsx('div', {
            className: 'sino-simple-form__chips sino-simple-form__chips--wrap',
            children: [
              {
                key: 'shipping',
                label: a('serviceShipping', 'Ship goods from China'),
                icon: r.jsxs('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    r.jsx('path', {
                      d: 'M2 17h20M5 17V7l8-4v10M19 17V7l-6 4M7 11h6M7 7h6',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    r.jsx('circle', {
                      cx: '7',
                      cy: '17',
                      r: '2',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                    }),
                    r.jsx('circle', {
                      cx: '17',
                      cy: '17',
                      r: '2',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                    }),
                  ],
                }),
              },
              {
                key: 'sourcing',
                label: a('serviceSourcing', 'Find suppliers / get product sourcing help'),
                icon: r.jsxs('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    r.jsx('circle', {
                      cx: '11',
                      cy: '11',
                      r: '8',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    r.jsx('path', {
                      d: 'm21 21-4.35-4.35',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                  ],
                }),
              },
              {
                key: 'dropshipping',
                label: a('serviceDropshipping', 'Set up dropshipping or fulfillment from China'),
                icon: r.jsxs('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    r.jsx('path', {
                      d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    r.jsx('polyline', {
                      points: '3.27 6.96 12 12.01 20.73 6.96',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    r.jsx('line', {
                      x1: '12',
                      y1: '22.08',
                      x2: '12',
                      y2: '12',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                  ],
                }),
              },
              {
                key: 'warehousing',
                label: a('serviceWarehousing', 'Store & consolidate goods in China'),
                icon: r.jsxs('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    r.jsx('path', {
                      d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    r.jsx('polyline', {
                      points: '9 22 9 12 15 12 15 22',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                  ],
                }),
              },
              {
                key: 'qc',
                label: a('serviceQc', 'Book a quality inspection'),
                icon: r.jsxs('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    r.jsx('path', {
                      d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    r.jsx('polyline', {
                      points: '22 4 12 14.01 9 11.01',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                  ],
                }),
              },
              {
                key: 'chinaVisits',
                label: a(
                  'serviceChinaVisits',
                  'Plan a visit or fair in China (Canton Fair, Yiwu…)'
                ),
                icon: r.jsxs('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    r.jsx('rect', {
                      x: '3',
                      y: '4',
                      width: '18',
                      height: '18',
                      rx: '2',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    r.jsx('line', {
                      x1: '16',
                      y1: '2',
                      x2: '16',
                      y2: '6',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    r.jsx('line', {
                      x1: '8',
                      y1: '2',
                      x2: '8',
                      y2: '6',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    r.jsx('line', {
                      x1: '3',
                      y1: '10',
                      x2: '21',
                      y2: '10',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    r.jsx('path', {
                      d: 'M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                  ],
                }),
              },
              {
                key: 'other',
                label: a('serviceOther', 'Other project (tell us more)'),
                icon: r.jsxs('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    r.jsx('circle', {
                      cx: '12',
                      cy: '12',
                      r: '10',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    r.jsx('line', {
                      x1: '12',
                      y1: '8',
                      x2: '12',
                      y2: '16',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    r.jsx('line', {
                      x1: '8',
                      y1: '12',
                      x2: '16',
                      y2: '12',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                  ],
                }),
              },
            ].map((h) =>
              r.jsxs(
                'button',
                {
                  type: 'button',
                  className: `sino-simple-chip sino-simple-chip--service-${h.key}${l.servicesRequested[h.key] ? ' sino-simple-chip--active' : ''}`,
                  onClick: () => p(h.key),
                  'aria-pressed': l.servicesRequested[h.key] ? 'true' : 'false',
                  'aria-label': `${h.label}${l.servicesRequested[h.key] ? ', selected' : ', not selected'}`,
                  onKeyDown: (z) => {
                    (z.key === 'Enter' || z.key === ' ') && (z.preventDefault(), p(h.key));
                  },
                  children: [
                    r.jsx('span', {
                      className: 'sino-simple-chip__icon',
                      'aria-hidden': 'true',
                      children: h.icon,
                    }),
                    r.jsx('span', { className: 'sino-simple-chip__label', children: h.label }),
                  ],
                },
                h.key
              )
            ),
          }),
        }),
      }),
    ],
  });
};
function os(l) {
  return l == null
    ? !1
    : typeof l == 'string'
      ? l.trim().length > 0
      : typeof l == 'number'
        ? l > 0
        : typeof l == 'boolean'
          ? !0
          : Array.isArray(l)
            ? l.length > 0
            : typeof l == 'object'
              ? Object.values(l).some((c) => os(c))
              : !1;
}
function vp(l) {
  switch (l) {
    case 'services':
      return [];
    case 'shippingRoute':
      return [
        'country',
        'destCity',
        'mode',
        'origin',
        'city',
        'destLocationType',
        'destZipCode',
        'destPort',
      ];
    case 'shippingCargo':
      return [
        'totalWeight',
        'goodsDescription',
        'goodsValue',
        'goodsCurrency',
        'shippingType',
        'numberOfUnits',
        'areGoodsReady',
        'isPersonalOrHazardous',
      ];
    case 'sourcing':
      return ['sourcing'];
    case 'warehousing':
      return ['warehousing'];
    case 'dropshipping':
      return ['dropshipping'];
    case 'qc':
      return ['qc'];
    case 'chinaVisit':
      return ['chinaVisit'];
    case 'contact':
      return [
        'firstName',
        'lastName',
        'email',
        'phone',
        'companyName',
        'customerType',
        'shipperType',
      ];
    default:
      return [];
  }
}
function ic(l, c) {
  const a = vp(l);
  if (a.length === 0)
    return l === 'services'
      ? { filled: 1, total: 1, percentage: 100 }
      : { filled: 0, total: 0, percentage: 0 };
  let w = 0,
    N = 0;
  for (const j of a)
    if (
      j === 'sourcing' ||
      j === 'warehousing' ||
      j === 'dropshipping' ||
      j === 'qc' ||
      j === 'chinaVisit'
    ) {
      const p = c[j];
      if (p && typeof p == 'object' && !Array.isArray(p)) {
        const h = Object.entries(p);
        for (const [, z] of h) (N++, os(z) && w++);
        h.length;
      }
    } else if (j === 'totalWeight') (N++, os(c.totalWeight) && w++);
    else {
      N++;
      const p = c[j];
      os(p) && w++;
    }
  const C = N > 0 ? Math.round((w / N) * 100) : 0;
  return { filled: w, total: N, percentage: C };
}
function yp(l, c) {
  switch (l) {
    case 'services':
      return c('stepServicesLabel', 'Services');
    case 'shippingRoute':
      return c('stepShippingRouteLabel', 'Route');
    case 'shippingCargo':
      return c('stepShippingCargoLabel', 'Cargo');
    case 'sourcing':
      return c('stepSourcingLabel', 'Sourcing');
    case 'warehousing':
      return c('stepWarehousingLabel', 'Warehousing');
    case 'dropshipping':
      return c('stepDropshippingLabel', 'Dropshipping');
    case 'qc':
      return c('stepQcLabel', 'Quality Control');
    case 'chinaVisit':
      return c('stepChinaVisitLabel', 'China Visit');
    case 'contact':
      return c('stepContactLabel', 'Contact');
    default:
      return l;
  }
}
const nl = ({ stepId: l, formData: c, currentStepIndex: a, totalSteps: w, t: N }) => {
    const C = ic(l, c),
      j = yp(l, N);
    return l === 'services' || C.total === 0
      ? null
      : r.jsxs('div', {
          className: 'sino-simple-form__step-progress-indicator',
          children: [
            r.jsxs('div', {
              className: 'sino-simple-form__step-progress-header',
              children: [
                r.jsx('span', { className: 'sino-simple-form__step-progress-label', children: j }),
                r.jsxs('span', {
                  className: 'sino-simple-form__step-progress-count',
                  children: [C.filled, '/', C.total, ' ', N('stepProgressFields', 'fields')],
                }),
              ],
            }),
            r.jsx('div', {
              className: 'sino-simple-form__step-progress-bar-container',
              children: r.jsx('div', {
                className: 'sino-simple-form__step-progress-bar-fill',
                style: { width: `${C.percentage}%` },
                role: 'progressbar',
                'aria-valuenow': C.percentage,
                'aria-valuemin': 0,
                'aria-valuemax': 100,
                'aria-label': `${j}: ${C.filled} of ${C.total} fields completed`,
              }),
            }),
          ],
        });
  },
  Qu = [
    { name: 'John D.', location: 'France', text: 'Got my quote in 18h, very professional' },
    { name: 'Sarah M.', location: 'Germany', text: 'Clear communication and fast response time' },
    {
      name: 'Michael K.',
      location: 'UK',
      text: 'Excellent service, helped me understand the process',
    },
  ],
  _p = ({ t: l, count: c = 2 }) => {
    const a = W.useMemo(
      () => [...Qu].sort(() => Math.random() - 0.5).slice(0, Math.min(c, Qu.length)),
      [c]
    );
    return a.length === 0
      ? null
      : r.jsx('div', {
          className: 'sino-simple-form__testimonials',
          role: 'complementary',
          'aria-label': l('testimonialsAriaLabel', 'Customer testimonials'),
          children: a.map((w, N) =>
            r.jsx(
              'div',
              {
                className: 'sino-simple-form__testimonial',
                children: r.jsxs('div', {
                  className: 'sino-simple-form__testimonial-content',
                  children: [
                    r.jsxs('p', {
                      className: 'sino-simple-form__testimonial-text',
                      children: ['"', w.text, '"'],
                    }),
                    r.jsxs('p', {
                      className: 'sino-simple-form__testimonial-author',
                      children: [w.name, ' — ', w.location],
                    }),
                  ],
                }),
              },
              `${w.name}-${N}`
            )
          ),
        });
  },
  xp = ({
    formData: l,
    setFormData: c,
    t: a,
    isFilled: w,
    onChange: N,
    onBlur: C,
    fieldErrors: j,
    fieldTouched: p,
    firstNameRef: h,
    emailRef: z,
    phoneRef: K,
    stepLabel: O,
    currentStepIndex: b,
    totalSteps: Z,
  }) =>
    r.jsxs('section', {
      className: 'sino-simple-form__section sino-simple-form__section--contact',
      children: [
        r.jsxs('h2', {
          className: 'sino-simple-form__section-title',
          children: [
            r.jsx('span', { className: 'sino-simple-form__section-step', children: O ?? 'Step 4' }),
            r.jsx('span', { children: a('simpleStep5Title', 'Your details') }),
          ],
        }),
        r.jsx(nl, { stepId: 'contact', formData: l, currentStepIndex: b, totalSteps: Z, t: a }),
        r.jsx('p', {
          className: 'sino-simple-form__hint',
          children: a(
            'simpleStep5Hint',
            'Use a work email and a phone with WhatsApp if possible – it makes the follow-up much smoother. Not sure about every detail yet? That is normal – we will help you structure the shipment.'
          ),
        }),
        r.jsx(_p, { t: a, count: 2 }),
        r.jsxs('div', {
          className: 'sino-simple-form__group',
          children: [
            r.jsx('p', {
              className: 'sino-simple-form__group-title',
              children: a('aboutYouTitle', 'About you'),
            }),
            r.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--rows',
              children: [
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsx('label', {
                      className: 'sino-simple-form__label',
                      children: a('customerType', 'Are you a company or an individual?'),
                    }),
                    r.jsx('div', {
                      className: 'sino-simple-form__chips',
                      children: [
                        { value: 'company', label: a('customerTypeCompany', 'Company') },
                        { value: 'individual', label: a('customerTypeIndividual', 'Individual') },
                      ].map((Q) =>
                        r.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.customerType === Q.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              c((Y) => ({
                                ...Y,
                                customerType: Y.customerType === Q.value ? '' : Q.value,
                              })),
                            children: Q.label,
                          },
                          Q.value
                        )
                      ),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsx('label', {
                      className: 'sino-simple-form__label',
                      children: a('shipperType', 'How often do you ship from China?'),
                    }),
                    r.jsx('div', {
                      className: 'sino-simple-form__chips sino-simple-form__chips--wrap',
                      children: [
                        { value: 'first-time', label: a('shipperFirstTime', "It's my first time") },
                        {
                          value: 'up-to-10x',
                          label: a('shipperFewTimes', 'A few times per year (up to ~10 shipments)'),
                        },
                        {
                          value: 'more-than-10x',
                          label: a('shipperMoreThan10', 'More than 10 shipments per year'),
                        },
                        { value: 'regular', label: a('shipperRegular', 'Regular shipper') },
                      ].map((Q) =>
                        r.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.shipperType === Q.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              c((Y) => ({
                                ...Y,
                                shipperType: Y.shipperType === Q.value ? '' : Q.value,
                              })),
                            'aria-pressed': l.shipperType === Q.value ? 'true' : 'false',
                            'aria-label': `${Q.label}${l.shipperType === Q.value ? ', selected' : ', not selected'}`,
                            onKeyDown: (Y) => {
                              (Y.key === 'Enter' || Y.key === ' ') &&
                                (Y.preventDefault(),
                                c((P) => ({
                                  ...P,
                                  shipperType: P.shipperType === Q.value ? '' : Q.value,
                                })));
                            },
                            children: Q.label,
                          },
                          Q.value
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        r.jsx('p', {
          className: 'sino-simple-form__group-title',
          children: a('contactDetailsTitle', 'How we contact you'),
        }),
        r.jsxs('div', {
          className: 'sino-simple-form__fields sino-simple-form__fields--rows',
          children: [
            r.jsxs('div', {
              className: `sino-simple-form__field${p.firstName && j.firstName ? ' sino-simple-form__field--error' : ''}${p.firstName && !j.firstName && w(l.firstName) ? ' sino-simple-form__field--success' : ''}`,
              children: [
                r.jsxs('label', {
                  className: 'sino-simple-form__label',
                  htmlFor: 'firstName',
                  children: [
                    a('firstName', 'First name'),
                    r.jsx('span', {
                      className: 'sino-simple-form__required',
                      'aria-label': 'required',
                      children: '*',
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field-wrapper',
                  children: [
                    r.jsx('input', {
                      className: `sino-simple-form__input${j.firstName ? ' sino-simple-form__input--error' : ''}${p.firstName && !j.firstName && w(l.firstName) ? ' sino-simple-form__input--success' : ''}`,
                      type: 'text',
                      name: 'firstName',
                      id: 'firstName',
                      ref: h,
                      value: l.firstName,
                      onChange: N,
                      onBlur: () => C('firstName', l.firstName),
                      placeholder: a('firstNamePlaceholder', 'John'),
                      'aria-label': a('firstName', 'First name'),
                      'aria-describedby': j.firstName
                        ? 'firstName-error'
                        : p.firstName && !j.firstName && w(l.firstName)
                          ? 'firstName-success'
                          : void 0,
                      'aria-invalid': j.firstName ? 'true' : 'false',
                      'aria-required': 'true',
                    }),
                    p.firstName &&
                      r.jsxs(r.Fragment, {
                        children: [
                          j.firstName &&
                            r.jsx('span', {
                              className:
                                'sino-simple-form__field-icon sino-simple-form__field-icon--error',
                              'aria-hidden': 'true',
                              children: r.jsxs('svg', {
                                width: '20',
                                height: '20',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                  r.jsx('circle', {
                                    cx: '12',
                                    cy: '12',
                                    r: '10',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                  }),
                                  r.jsx('line', {
                                    x1: '12',
                                    y1: '8',
                                    x2: '12',
                                    y2: '12',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                    strokeLinecap: 'round',
                                  }),
                                  r.jsx('line', {
                                    x1: '12',
                                    y1: '16',
                                    x2: '12.01',
                                    y2: '16',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                    strokeLinecap: 'round',
                                  }),
                                ],
                              }),
                            }),
                          !j.firstName &&
                            w(l.firstName) &&
                            r.jsx('span', {
                              className:
                                'sino-simple-form__field-icon sino-simple-form__field-icon--success',
                              'aria-hidden': 'true',
                              children: r.jsxs('svg', {
                                width: '20',
                                height: '20',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                  r.jsx('circle', {
                                    cx: '12',
                                    cy: '12',
                                    r: '10',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                  }),
                                  r.jsx('path', {
                                    d: 'M8 12l2 2 4-4',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                    strokeLinecap: 'round',
                                    strokeLinejoin: 'round',
                                  }),
                                ],
                              }),
                            }),
                        ],
                      }),
                  ],
                }),
                j.firstName &&
                  r.jsx('p', {
                    id: 'firstName-error',
                    className: 'sino-simple-form__field-error',
                    role: 'alert',
                    'aria-live': 'polite',
                    children: j.firstName,
                  }),
                p.firstName &&
                  !j.firstName &&
                  w(l.firstName) &&
                  r.jsx('p', {
                    id: 'firstName-success',
                    className: 'sino-simple-form__sr-only',
                    'aria-live': 'polite',
                    children: a('fieldValid', 'Field is valid'),
                  }),
              ],
            }),
            r.jsxs('div', {
              className: 'sino-simple-form__field',
              children: [
                r.jsx('label', {
                  className: 'sino-simple-form__label',
                  htmlFor: 'lastName',
                  children: a('lastName', 'Last name'),
                }),
                r.jsx('input', {
                  className: 'sino-simple-form__input',
                  type: 'text',
                  name: 'lastName',
                  id: 'lastName',
                  value: l.lastName,
                  onChange: N,
                  placeholder: a('lastNamePlaceholder', 'Doe'),
                }),
              ],
            }),
            r.jsxs('div', {
              className: 'sino-simple-form__field',
              children: [
                r.jsxs('label', {
                  className: 'sino-simple-form__label',
                  htmlFor: 'companyName',
                  children: [
                    a('companyName', 'Company name'),
                    r.jsx('span', {
                      className: 'sino-simple-form__label-hint',
                      children: a('ifApplicable', 'if applicable'),
                    }),
                  ],
                }),
                r.jsx('input', {
                  className: 'sino-simple-form__input',
                  type: 'text',
                  name: 'companyName',
                  id: 'companyName',
                  value: l.companyName,
                  onChange: N,
                  placeholder: a('companyNamePlaceholder', 'Your company'),
                }),
              ],
            }),
            r.jsxs('div', {
              className: `sino-simple-form__field${p.email && j.email ? ' sino-simple-form__field--error' : ''}${p.email && !j.email && w(l.email) ? ' sino-simple-form__field--success' : ''}`,
              children: [
                r.jsxs('label', {
                  className: 'sino-simple-form__label',
                  htmlFor: 'email',
                  children: [
                    a('email', 'Work email'),
                    r.jsx('span', {
                      className: 'sino-simple-form__required',
                      'aria-label': 'required',
                      children: '*',
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field-wrapper',
                  children: [
                    r.jsx('input', {
                      className: `sino-simple-form__input${j.email ? ' sino-simple-form__input--error' : ''}${p.email && !j.email && w(l.email) ? ' sino-simple-form__input--success' : ''}`,
                      type: 'email',
                      name: 'email',
                      id: 'email',
                      ref: z,
                      value: l.email,
                      onChange: N,
                      onBlur: () => C('email', l.email),
                      placeholder: a('emailPlaceholder', 'you@example.com'),
                      'aria-label': a('email', 'Work email'),
                      'aria-describedby': j.email
                        ? 'email-error'
                        : p.email && !j.email && w(l.email)
                          ? 'email-success'
                          : void 0,
                      'aria-invalid': j.email ? 'true' : 'false',
                      'aria-required': 'true',
                    }),
                    p.email &&
                      r.jsxs(r.Fragment, {
                        children: [
                          j.email &&
                            r.jsx('span', {
                              className:
                                'sino-simple-form__field-icon sino-simple-form__field-icon--error',
                              'aria-hidden': 'true',
                              children: r.jsxs('svg', {
                                width: '20',
                                height: '20',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                  r.jsx('circle', {
                                    cx: '12',
                                    cy: '12',
                                    r: '10',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                  }),
                                  r.jsx('line', {
                                    x1: '12',
                                    y1: '8',
                                    x2: '12',
                                    y2: '12',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                    strokeLinecap: 'round',
                                  }),
                                  r.jsx('line', {
                                    x1: '12',
                                    y1: '16',
                                    x2: '12.01',
                                    y2: '16',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                    strokeLinecap: 'round',
                                  }),
                                ],
                              }),
                            }),
                          !j.email &&
                            w(l.email) &&
                            r.jsx('span', {
                              className:
                                'sino-simple-form__field-icon sino-simple-form__field-icon--success',
                              'aria-hidden': 'true',
                              children: r.jsxs('svg', {
                                width: '20',
                                height: '20',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                  r.jsx('circle', {
                                    cx: '12',
                                    cy: '12',
                                    r: '10',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                  }),
                                  r.jsx('path', {
                                    d: 'M8 12l2 2 4-4',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                    strokeLinecap: 'round',
                                    strokeLinejoin: 'round',
                                  }),
                                ],
                              }),
                            }),
                        ],
                      }),
                  ],
                }),
                j.email &&
                  r.jsx('p', {
                    id: 'email-error',
                    className: 'sino-simple-form__field-error',
                    role: 'alert',
                    'aria-live': 'polite',
                    children: j.email,
                  }),
                p.email &&
                  !j.email &&
                  w(l.email) &&
                  r.jsx('p', {
                    id: 'email-success',
                    className: 'sino-simple-form__sr-only',
                    'aria-live': 'polite',
                    children: a('fieldValid', 'Field is valid'),
                  }),
              ],
            }),
            r.jsxs('div', {
              className: `sino-simple-form__field${p.phone && j.phone ? ' sino-simple-form__field--error' : ''}${p.phone && !j.phone && w(l.phone) ? ' sino-simple-form__field--success' : ''}`,
              children: [
                r.jsxs('label', {
                  className: 'sino-simple-form__label',
                  htmlFor: 'phone',
                  children: [
                    a('phone', 'Phone number (with country code)'),
                    r.jsx('span', {
                      className: 'sino-simple-form__required',
                      'aria-label': 'required',
                      children: '*',
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field-wrapper',
                  children: [
                    r.jsx('input', {
                      className: `sino-simple-form__input${j.phone ? ' sino-simple-form__input--error' : ''}${p.phone && !j.phone && w(l.phone) ? ' sino-simple-form__input--success' : ''}`,
                      type: 'tel',
                      name: 'phone',
                      id: 'phone',
                      ref: K,
                      value: l.phone,
                      onChange: N,
                      onBlur: () => C('phone', l.phone),
                      placeholder: a('phonePlaceholder', '+33…'),
                      'aria-label': a('phone', 'Phone number (with country code)'),
                      'aria-describedby': j.phone
                        ? 'phone-error'
                        : p.phone && !j.phone && w(l.phone)
                          ? 'phone-success'
                          : void 0,
                      'aria-invalid': j.phone ? 'true' : 'false',
                      'aria-required': 'true',
                    }),
                    p.phone &&
                      r.jsxs(r.Fragment, {
                        children: [
                          j.phone &&
                            r.jsx('span', {
                              className:
                                'sino-simple-form__field-icon sino-simple-form__field-icon--error',
                              'aria-hidden': 'true',
                              children: r.jsxs('svg', {
                                width: '20',
                                height: '20',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                  r.jsx('circle', {
                                    cx: '12',
                                    cy: '12',
                                    r: '10',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                  }),
                                  r.jsx('line', {
                                    x1: '12',
                                    y1: '8',
                                    x2: '12',
                                    y2: '12',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                    strokeLinecap: 'round',
                                  }),
                                  r.jsx('line', {
                                    x1: '12',
                                    y1: '16',
                                    x2: '12.01',
                                    y2: '16',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                    strokeLinecap: 'round',
                                  }),
                                ],
                              }),
                            }),
                          !j.phone &&
                            w(l.phone) &&
                            r.jsx('span', {
                              className:
                                'sino-simple-form__field-icon sino-simple-form__field-icon--success',
                              'aria-hidden': 'true',
                              children: r.jsxs('svg', {
                                width: '20',
                                height: '20',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                  r.jsx('circle', {
                                    cx: '12',
                                    cy: '12',
                                    r: '10',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                  }),
                                  r.jsx('path', {
                                    d: 'M8 12l2 2 4-4',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                    strokeLinecap: 'round',
                                    strokeLinejoin: 'round',
                                  }),
                                ],
                              }),
                            }),
                        ],
                      }),
                  ],
                }),
                j.phone &&
                  r.jsx('p', {
                    id: 'phone-error',
                    className: 'sino-simple-form__field-error',
                    role: 'alert',
                    'aria-live': 'polite',
                    children: j.phone,
                  }),
                p.phone &&
                  !j.phone &&
                  w(l.phone) &&
                  r.jsx('p', {
                    id: 'phone-success',
                    className: 'sino-simple-form__sr-only',
                    'aria-live': 'polite',
                    children: a('fieldValid', 'Field is valid'),
                  }),
              ],
            }),
          ],
        }),
      ],
    }),
  Qt = [
    { name: 'Afghanistan', code: 'AF', flag: '🇦🇫', phonePrefix: '+93' },
    { name: 'Albania', code: 'AL', flag: '🇦🇱', phonePrefix: '+355' },
    { name: 'Algeria', code: 'DZ', flag: '🇩🇿', phonePrefix: '+213' },
    { name: 'American Samoa', code: 'AS', flag: '🇦🇸', phonePrefix: '+1684' },
    { name: 'Andorra', code: 'AD', flag: '🇦🇩', phonePrefix: '+376' },
    { name: 'Angola', code: 'AO', flag: '🇦🇴', phonePrefix: '+244' },
    { name: 'Anguilla', code: 'AI', flag: '🇦🇮', phonePrefix: '+1264' },
    { name: 'Antarctica', code: 'AQ', flag: '🇦🇶', phonePrefix: '+672' },
    { name: 'Antigua and Barbuda', code: 'AG', flag: '🇦🇬', phonePrefix: '+1268' },
    { name: 'Argentina', code: 'AR', flag: '🇦🇷', phonePrefix: '+54' },
    { name: 'Armenia', code: 'AM', flag: '🇦🇲', phonePrefix: '+374' },
    { name: 'Aruba', code: 'AW', flag: '🇦🇼', phonePrefix: '+297' },
    { name: 'Australia', code: 'AU', flag: '🇦🇺', phonePrefix: '+61' },
    { name: 'Austria', code: 'AT', flag: '🇦🇹', phonePrefix: '+43' },
    { name: 'Azerbaijan', code: 'AZ', flag: '🇦🇿', phonePrefix: '+994' },
    { name: 'Bahamas', code: 'BS', flag: '🇧🇸', phonePrefix: '+1242' },
    { name: 'Bahrain', code: 'BH', flag: '🇧🇭', phonePrefix: '+973' },
    { name: 'Bangladesh', code: 'BD', flag: '🇧🇩', phonePrefix: '+880' },
    { name: 'Barbados', code: 'BB', flag: '🇧🇧', phonePrefix: '+1246' },
    { name: 'Belarus', code: 'BY', flag: '🇧🇾', phonePrefix: '+375' },
    { name: 'Belgium', code: 'BE', flag: '🇧🇪', phonePrefix: '+32' },
    { name: 'Belize', code: 'BZ', flag: '🇧🇿', phonePrefix: '+501' },
    { name: 'Benin', code: 'BJ', flag: '🇧🇯', phonePrefix: '+229' },
    { name: 'Bermuda', code: 'BM', flag: '🇧🇲', phonePrefix: '+1441' },
    { name: 'Bhutan', code: 'BT', flag: '🇧🇹', phonePrefix: '+975' },
    { name: 'Bolivia', code: 'BO', flag: '🇧🇴', phonePrefix: '+591' },
    { name: 'Bosnia and Herzegovina', code: 'BA', flag: '🇧🇦', phonePrefix: '+387' },
    { name: 'Botswana', code: 'BW', flag: '🇧🇼', phonePrefix: '+267' },
    { name: 'Bouvet Island', code: 'BV', flag: '🇧🇻', phonePrefix: '+47' },
    { name: 'Brazil', code: 'BR', flag: '🇧🇷', phonePrefix: '+55' },
    { name: 'British Indian Ocean Territory', code: 'IO', flag: '🇮🇴', phonePrefix: '+246' },
    { name: 'Brunei Darussalam', code: 'BN', flag: '🇧🇳', phonePrefix: '+673' },
    { name: 'Bulgaria', code: 'BG', flag: '🇧🇬', phonePrefix: '+359' },
    { name: 'Burkina Faso', code: 'BF', flag: '🇧🇫', phonePrefix: '+226' },
    { name: 'Burundi', code: 'BI', flag: '🇧🇮', phonePrefix: '+257' },
    { name: 'Cambodia', code: 'KH', flag: '🇰🇭', phonePrefix: '+855' },
    { name: 'Cameroon', code: 'CM', flag: '🇨🇲', phonePrefix: '+237' },
    { name: 'Canada', code: 'CA', flag: '🇨🇦', phonePrefix: '+1' },
    { name: 'Cape Verde', code: 'CV', flag: '🇨🇻', phonePrefix: '+238' },
    { name: 'Cayman Islands', code: 'KY', flag: '🇰🇾', phonePrefix: '+1345' },
    { name: 'Central African Republic', code: 'CF', flag: '🇨🇫', phonePrefix: '+236' },
    { name: 'Chad', code: 'TD', flag: '🇹🇩', phonePrefix: '+235' },
    { name: 'Chile', code: 'CL', flag: '🇨🇱', phonePrefix: '+56' },
    { name: 'China', code: 'CN', flag: '🇨🇳', phonePrefix: '+86' },
    { name: 'Christmas Island', code: 'CX', flag: '🇨🇽', phonePrefix: '+61' },
    { name: 'Cocos (Keeling) Islands', code: 'CC', flag: '🇨🇨', phonePrefix: '+61' },
    { name: 'Colombia', code: 'CO', flag: '🇨🇴', phonePrefix: '+57' },
    { name: 'Comoros', code: 'KM', flag: '🇰🇲', phonePrefix: '+269' },
    { name: 'Congo', code: 'CG', flag: '🇨🇬', phonePrefix: '+242' },
    { name: 'Congo, the Democratic Republic of the', code: 'CD', flag: '🇨🇩', phonePrefix: '+243' },
    { name: 'Cook Islands', code: 'CK', flag: '🇨🇰', phonePrefix: '+682' },
    { name: 'Costa Rica', code: 'CR', flag: '🇨🇷', phonePrefix: '+506' },
    { name: "Cote D'Ivoire", code: 'CI', flag: '🇨🇮', phonePrefix: '+225' },
    { name: 'Croatia', code: 'HR', flag: '🇭🇷', phonePrefix: '+385' },
    { name: 'Cuba', code: 'CU', flag: '🇨🇺', phonePrefix: '+53' },
    { name: 'Cyprus', code: 'CY', flag: '🇨🇾', phonePrefix: '+357' },
    { name: 'Czech Republic', code: 'CZ', flag: '🇨🇿', phonePrefix: '+420' },
    { name: 'Denmark', code: 'DK', flag: '🇩🇰', phonePrefix: '+45' },
    { name: 'Djibouti', code: 'DJ', flag: '🇩🇯', phonePrefix: '+253' },
    { name: 'Dominica', code: 'DM', flag: '🇩🇲', phonePrefix: '+1767' },
    { name: 'Dominican Republic', code: 'DO', flag: '🇩🇴', phonePrefix: '+1' },
    { name: 'Ecuador', code: 'EC', flag: '🇪🇨', phonePrefix: '+593' },
    { name: 'Egypt', code: 'EG', flag: '🇪🇬', phonePrefix: '+20' },
    { name: 'El Salvador', code: 'SV', flag: '🇸🇻', phonePrefix: '+503' },
    { name: 'Equatorial Guinea', code: 'GQ', flag: '🇬🇶', phonePrefix: '+240' },
    { name: 'Eritrea', code: 'ER', flag: '🇪🇷', phonePrefix: '+291' },
    { name: 'Estonia', code: 'EE', flag: '🇪🇪', phonePrefix: '+372' },
    { name: 'Ethiopia', code: 'ET', flag: '🇪🇹', phonePrefix: '+251' },
    { name: 'Falkland Islands (Malvinas)', code: 'FK', flag: '🇫🇰', phonePrefix: '+500' },
    { name: 'Faroe Islands', code: 'FO', flag: '🇫🇴', phonePrefix: '+298' },
    { name: 'Fiji', code: 'FJ', flag: '🇫🇯', phonePrefix: '+679' },
    { name: 'Finland', code: 'FI', flag: '🇫🇮', phonePrefix: '+358' },
    { name: 'France', code: 'FR', flag: '🇫🇷', phonePrefix: '+33' },
    { name: 'French Guiana', code: 'GF', flag: '🇬🇫', phonePrefix: '+594' },
    { name: 'French Polynesia', code: 'PF', flag: '🇵🇫', phonePrefix: '+689' },
    { name: 'French Southern Territories', code: 'TF', flag: '🇹🇫', phonePrefix: '+262' },
    { name: 'Gabon', code: 'GA', flag: '🇬🇦', phonePrefix: '+241' },
    { name: 'Gambia', code: 'GM', flag: '🇬🇲', phonePrefix: '+220' },
    { name: 'Georgia', code: 'GE', flag: '🇬🇪', phonePrefix: '+995' },
    { name: 'Germany', code: 'DE', flag: '🇩🇪', phonePrefix: '+49' },
    { name: 'Ghana', code: 'GH', flag: '🇬🇭', phonePrefix: '+233' },
    { name: 'Gibraltar', code: 'GI', flag: '🇬🇮', phonePrefix: '+350' },
    { name: 'Greece', code: 'GR', flag: '🇬🇷', phonePrefix: '+30' },
    { name: 'Greenland', code: 'GL', flag: '🇬🇱', phonePrefix: '+299' },
    { name: 'Grenada', code: 'GD', flag: '🇬🇩', phonePrefix: '+1473' },
    { name: 'Guadeloupe', code: 'GP', flag: '🇬🇵', phonePrefix: '+590' },
    { name: 'Guam', code: 'GU', flag: '🇬🇺', phonePrefix: '+1671' },
    { name: 'Guatemala', code: 'GT', flag: '🇬🇹', phonePrefix: '+502' },
    { name: 'Guinea', code: 'GN', flag: '🇬🇳', phonePrefix: '+224' },
    { name: 'Guinea-Bissau', code: 'GW', flag: '🇬🇼', phonePrefix: '+245' },
    { name: 'Guyana', code: 'GY', flag: '🇬🇾', phonePrefix: '+592' },
    { name: 'Haiti', code: 'HT', flag: '🇭🇹', phonePrefix: '+509' },
    { name: 'Heard Island and Mcdonald Islands', code: 'HM', flag: '🇭🇲', phonePrefix: '+672' },
    { name: 'Holy See (Vatican City State)', code: 'VA', flag: '🇻🇦', phonePrefix: '+379' },
    { name: 'Honduras', code: 'HN', flag: '🇭🇳', phonePrefix: '+504' },
    { name: 'Hong Kong', code: 'HK', flag: '🇭🇰', phonePrefix: '+852' },
    { name: 'Hungary', code: 'HU', flag: '🇭🇺', phonePrefix: '+36' },
    { name: 'Iceland', code: 'IS', flag: '🇮🇸', phonePrefix: '+354' },
    { name: 'India', code: 'IN', flag: '🇮🇳', phonePrefix: '+91' },
    { name: 'Indonesia', code: 'ID', flag: '🇮🇩', phonePrefix: '+62' },
    { name: 'Iran, Islamic Republic of', code: 'IR', flag: '🇮🇷', phonePrefix: '+98' },
    { name: 'Iraq', code: 'IQ', flag: '🇮🇶', phonePrefix: '+964' },
    { name: 'Ireland', code: 'IE', flag: '🇮🇪', phonePrefix: '+353' },
    { name: 'Israel', code: 'IL', flag: '🇮🇱', phonePrefix: '+972' },
    { name: 'Italy', code: 'IT', flag: '🇮🇹', phonePrefix: '+39' },
    { name: 'Jamaica', code: 'JM', flag: '🇯🇲', phonePrefix: '+1876' },
    { name: 'Japan', code: 'JP', flag: '🇯🇵', phonePrefix: '+81' },
    { name: 'Jordan', code: 'JO', flag: '🇯🇴', phonePrefix: '+962' },
    { name: 'Kazakhstan', code: 'KZ', flag: '🇰🇿', phonePrefix: '+7' },
    { name: 'Kenya', code: 'KE', flag: '🇰🇪', phonePrefix: '+254' },
    { name: 'Kiribati', code: 'KI', flag: '🇰🇮', phonePrefix: '+686' },
    { name: 'Korea, Democratic Peoples Republic of', code: 'KP', flag: '🇰🇵', phonePrefix: '+850' },
    { name: 'Korea, Republic of', code: 'KR', flag: '🇰🇷', phonePrefix: '+82' },
    { name: 'Kuwait', code: 'KW', flag: '🇰🇼', phonePrefix: '+965' },
    { name: 'Kyrgyzstan', code: 'KG', flag: '🇰🇬', phonePrefix: '+996' },
    { name: 'Lao Peoples Democratic Republic', code: 'LA', flag: '🇱🇦', phonePrefix: '+856' },
    { name: 'Latvia', code: 'LV', flag: '🇱🇻', phonePrefix: '+371' },
    { name: 'Lebanon', code: 'LB', flag: '🇱🇧', phonePrefix: '+961' },
    { name: 'Lesotho', code: 'LS', flag: '🇱🇸', phonePrefix: '+266' },
    { name: 'Liberia', code: 'LR', flag: '🇱🇷', phonePrefix: '+231' },
    { name: 'Libyan Arab Jamahiriya', code: 'LY', flag: '🇱🇾', phonePrefix: '+218' },
    { name: 'Liechtenstein', code: 'LI', flag: '🇱🇮', phonePrefix: '+423' },
    { name: 'Lithuania', code: 'LT', flag: '🇱🇹', phonePrefix: '+370' },
    { name: 'Luxembourg', code: 'LU', flag: '🇱🇺', phonePrefix: '+352' },
    { name: 'Macao', code: 'MO', flag: '🇲🇴', phonePrefix: '+853' },
    {
      name: 'Macedonia, the Former Yugoslav Republic of',
      code: 'MK',
      flag: '🇲🇰',
      phonePrefix: '+389',
    },
    { name: 'Madagascar', code: 'MG', flag: '🇲🇬', phonePrefix: '+261' },
    { name: 'Malawi', code: 'MW', flag: '🇲🇼', phonePrefix: '+265' },
    { name: 'Malaysia', code: 'MY', flag: '🇲🇾', phonePrefix: '+60' },
    { name: 'Maldives', code: 'MV', flag: '🇲🇻', phonePrefix: '+960' },
    { name: 'Mali', code: 'ML', flag: '🇲🇱', phonePrefix: '+223' },
    { name: 'Malta', code: 'MT', flag: '🇲🇹', phonePrefix: '+356' },
    { name: 'Marshall Islands', code: 'MH', flag: '🇲🇭', phonePrefix: '+692' },
    { name: 'Martinique', code: 'MQ', flag: '🇲🇶', phonePrefix: '+596' },
    { name: 'Mauritania', code: 'MR', flag: '🇲🇷', phonePrefix: '+222' },
    { name: 'Mauritius', code: 'MU', flag: '🇲🇺', phonePrefix: '+230' },
    { name: 'Mayotte', code: 'YT', flag: '🇾🇹', phonePrefix: '+262' },
    { name: 'Mexico', code: 'MX', flag: '🇲🇽', phonePrefix: '+52' },
    { name: 'Micronesia, Federated States of', code: 'FM', flag: '🇫🇲', phonePrefix: '+691' },
    { name: 'Moldova, Republic of', code: 'MD', flag: '🇲🇩', phonePrefix: '+373' },
    { name: 'Monaco', code: 'MC', flag: '🇲🇨', phonePrefix: '+377' },
    { name: 'Mongolia', code: 'MN', flag: '🇲🇳', phonePrefix: '+976' },
    { name: 'Montserrat', code: 'MS', flag: '🇲🇸', phonePrefix: '+1664' },
    { name: 'Morocco', code: 'MA', flag: '🇲🇦', phonePrefix: '+212' },
    { name: 'Mozambique', code: 'MZ', flag: '🇲🇿', phonePrefix: '+258' },
    { name: 'Myanmar', code: 'MM', flag: '🇲🇲', phonePrefix: '+95' },
    { name: 'Namibia', code: 'NA', flag: '🇳🇦', phonePrefix: '+264' },
    { name: 'Nauru', code: 'NR', flag: '🇳🇷', phonePrefix: '+674' },
    { name: 'Nepal', code: 'NP', flag: '🇳🇵', phonePrefix: '+977' },
    { name: 'Netherlands', code: 'NL', flag: '🇳🇱', phonePrefix: '+31' },
    { name: 'Netherlands Antilles', code: 'AN', flag: '🇧🇶', phonePrefix: '+599' },
    { name: 'New Caledonia', code: 'NC', flag: '🇳🇨', phonePrefix: '+687' },
    { name: 'New Zealand', code: 'NZ', flag: '🇳🇿', phonePrefix: '+64' },
    { name: 'Nicaragua', code: 'NI', flag: '🇳🇮', phonePrefix: '+505' },
    { name: 'Niger', code: 'NE', flag: '🇳🇪', phonePrefix: '+227' },
    { name: 'Nigeria', code: 'NG', flag: '🇳🇬', phonePrefix: '+234' },
    { name: 'Niue', code: 'NU', flag: '🇳🇺', phonePrefix: '+683' },
    { name: 'Norfolk Island', code: 'NF', flag: '🇳🇫', phonePrefix: '+672' },
    { name: 'Northern Mariana Islands', code: 'MP', flag: '🇲🇵', phonePrefix: '+1670' },
    { name: 'Norway', code: 'NO', flag: '🇳🇴', phonePrefix: '+47' },
    { name: 'Oman', code: 'OM', flag: '🇴🇲', phonePrefix: '+968' },
    { name: 'Pakistan', code: 'PK', flag: '🇵🇰', phonePrefix: '+92' },
    { name: 'Palau', code: 'PW', flag: '🇵🇼', phonePrefix: '+680' },
    { name: 'Palestinian Territory, Occupied', code: 'PS', flag: '🇵🇸', phonePrefix: '+970' },
    { name: 'Panama', code: 'PA', flag: '🇵🇦', phonePrefix: '+507' },
    { name: 'Papua New Guinea', code: 'PG', flag: '🇵🇬', phonePrefix: '+675' },
    { name: 'Paraguay', code: 'PY', flag: '🇵🇾', phonePrefix: '+595' },
    { name: 'Peru', code: 'PE', flag: '🇵🇪', phonePrefix: '+51' },
    { name: 'Philippines', code: 'PH', flag: '🇵🇭', phonePrefix: '+63' },
    { name: 'Pitcairn', code: 'PN', flag: '🇵🇳', phonePrefix: '+64' },
    { name: 'Poland', code: 'PL', flag: '🇵🇱', phonePrefix: '+48' },
    { name: 'Portugal', code: 'PT', flag: '🇵🇹', phonePrefix: '+351' },
    { name: 'Puerto Rico', code: 'PR', flag: '🇵🇷', phonePrefix: '+1' },
    { name: 'Qatar', code: 'QA', flag: '🇶🇦', phonePrefix: '+974' },
    { name: 'Reunion', code: 'RE', flag: '🇷🇪', phonePrefix: '+262' },
    { name: 'Romania', code: 'RO', flag: '🇷🇴', phonePrefix: '+40' },
    { name: 'Russian Federation', code: 'RU', flag: '🇷🇺', phonePrefix: '+7' },
    { name: 'Rwanda', code: 'RW', flag: '🇷🇼', phonePrefix: '+250' },
    { name: 'Saint Helena', code: 'SH', flag: '🇸🇭', phonePrefix: '+290' },
    { name: 'Saint Kitts and Nevis', code: 'KN', flag: '🇰🇳', phonePrefix: '+1869' },
    { name: 'Saint Lucia', code: 'LC', flag: '🇱🇨', phonePrefix: '+1758' },
    { name: 'Saint Martin', code: 'MF', flag: '🇲🇫', phonePrefix: '+590' },
    { name: 'Saint Pierre and Miquelon', code: 'PM', flag: '🇵🇲', phonePrefix: '+508' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC', flag: '🇻🇨', phonePrefix: '+1784' },
    { name: 'Samoa', code: 'WS', flag: '🇼🇸', phonePrefix: '+685' },
    { name: 'San Marino', code: 'SM', flag: '🇸🇲', phonePrefix: '+378' },
    { name: 'Sao Tome and Principe', code: 'ST', flag: '🇸🇹', phonePrefix: '+239' },
    { name: 'Saudi Arabia', code: 'SA', flag: '🇸🇦', phonePrefix: '+966' },
    { name: 'Senegal', code: 'SN', flag: '🇸🇳', phonePrefix: '+221' },
    { name: 'Serbia and Montenegro', code: 'RS', flag: '🇷🇸', phonePrefix: '+381' },
    { name: 'Seychelles', code: 'SC', flag: '🇸🇨', phonePrefix: '+248' },
    { name: 'Sierra Leone', code: 'SL', flag: '🇸🇱', phonePrefix: '+232' },
    { name: 'Singapore', code: 'SG', flag: '🇸🇬', phonePrefix: '+65' },
    { name: 'Slovakia', code: 'SK', flag: '🇸🇰', phonePrefix: '+421' },
    { name: 'Slovenia', code: 'SI', flag: '🇸🇮', phonePrefix: '+386' },
    { name: 'Solomon Islands', code: 'SB', flag: '🇸🇧', phonePrefix: '+677' },
    { name: 'Somalia', code: 'SO', flag: '🇸🇴', phonePrefix: '+252' },
    { name: 'South Africa', code: 'ZA', flag: '🇿🇦', phonePrefix: '+27' },
    {
      name: 'South Georgia and the South Sandwich Islands',
      code: 'GS',
      flag: '🇬🇸',
      phonePrefix: '+500',
    },
    { name: 'Spain', code: 'ES', flag: '🇪🇸', phonePrefix: '+34' },
    { name: 'Sri Lanka', code: 'LK', flag: '🇱🇰', phonePrefix: '+94' },
    { name: 'Sudan', code: 'SD', flag: '🇸🇩', phonePrefix: '+249' },
    { name: 'Suriname', code: 'SR', flag: '🇸🇷', phonePrefix: '+597' },
    { name: 'Svalbard and Jan Mayen', code: 'SJ', flag: '🇸🇯', phonePrefix: '+47' },
    { name: 'Swaziland', code: 'SZ', flag: '🇸🇿', phonePrefix: '+268' },
    { name: 'Sweden', code: 'SE', flag: '🇸🇪', phonePrefix: '+46' },
    { name: 'Switzerland', code: 'CH', flag: '🇨🇭', phonePrefix: '+41' },
    { name: 'Syrian Arab Republic', code: 'SY', flag: '🇸🇾', phonePrefix: '+963' },
    { name: 'Taiwan, Province of China', code: 'TW', flag: '🇹🇼', phonePrefix: '+886' },
    { name: 'Tajikistan', code: 'TJ', flag: '🇹🇯', phonePrefix: '+992' },
    { name: 'Tanzania, United Republic of', code: 'TZ', flag: '🇹🇿', phonePrefix: '+255' },
    { name: 'Thailand', code: 'TH', flag: '🇹🇭', phonePrefix: '+66' },
    { name: 'Timor-Leste', code: 'TL', flag: '🇹🇱', phonePrefix: '+670' },
    { name: 'Togo', code: 'TG', flag: '🇹🇬', phonePrefix: '+228' },
    { name: 'Tokelau', code: 'TK', flag: '🇹🇰', phonePrefix: '+690' },
    { name: 'Tonga', code: 'TO', flag: '🇹🇴', phonePrefix: '+676' },
    { name: 'Trinidad and Tobago', code: 'TT', flag: '🇹🇹', phonePrefix: '+1868' },
    { name: 'Tunisia', code: 'TN', flag: '🇹🇳', phonePrefix: '+216' },
    { name: 'Turkey', code: 'TR', flag: '🇹🇷', phonePrefix: '+90' },
    { name: 'Turkmenistan', code: 'TM', flag: '🇹🇲', phonePrefix: '+993' },
    { name: 'Turks and Caicos Islands', code: 'TC', flag: '🇹🇨', phonePrefix: '+1649' },
    { name: 'Tuvalu', code: 'TV', flag: '🇹🇻', phonePrefix: '+688' },
    { name: 'Uganda', code: 'UG', flag: '🇺🇬', phonePrefix: '+256' },
    { name: 'Ukraine', code: 'UA', flag: '🇺🇦', phonePrefix: '+380' },
    { name: 'United Arab Emirates', code: 'AE', flag: '🇦🇪', phonePrefix: '+971' },
    { name: 'United Kingdom', code: 'GB', flag: '🇬🇧', phonePrefix: '+44' },
    { name: 'United States', code: 'US', flag: '🇺🇸', phonePrefix: '+1' },
    { name: 'United States Minor Outlying Islands', code: 'UM', flag: '🇺🇲', phonePrefix: '+1' },
    { name: 'Uruguay', code: 'UY', flag: '🇺🇾', phonePrefix: '+598' },
    { name: 'Uzbekistan', code: 'UZ', flag: '🇺🇿', phonePrefix: '+998' },
    { name: 'Vanuatu', code: 'VU', flag: '🇻🇺', phonePrefix: '+678' },
    { name: 'Venezuela', code: 'VE', flag: '🇻🇪', phonePrefix: '+58' },
    { name: 'Viet Nam', code: 'VN', flag: '🇻🇳', phonePrefix: '+84' },
    { name: 'Virgin Islands, British', code: 'VG', flag: '🇻🇬', phonePrefix: '+1284' },
    { name: 'Virgin Islands, U.s.', code: 'VI', flag: '🇻🇮', phonePrefix: '+1340' },
    { name: 'Wallis and Futuna', code: 'WF', flag: '🇼🇫', phonePrefix: '+681' },
    { name: 'Western Sahara', code: 'EH', flag: '🇪🇭', phonePrefix: '+212' },
    { name: 'Yemen', code: 'YE', flag: '🇾🇪', phonePrefix: '+967' },
    { name: 'Zambia', code: 'ZM', flag: '🇿🇲', phonePrefix: '+260' },
    { name: 'Zimbabwe', code: 'ZW', flag: '🇿🇼', phonePrefix: '+263' },
    { name: 'Curacao', code: 'CW', flag: '🇨🇼', phonePrefix: '+599' },
  ].sort((l, c) => l.name.localeCompare(c.name)),
  wp = [
    { code: 'SHA', name: 'Shanghai', type: 'sea' },
    { code: 'SZX', name: 'Shenzhen', type: 'sea' },
    { code: 'NGB', name: 'Ningbo-Zhoushan', type: 'sea' },
    { code: 'GZH', name: 'Guangzhou', type: 'sea' },
    { code: 'QIN', name: 'Qingdao', type: 'sea' },
    { code: 'TJN', name: 'Tianjin', type: 'sea' },
    { code: 'XMN', name: 'Xiamen', type: 'sea' },
    { code: 'DLN', name: 'Dalian', type: 'sea' },
    { code: 'YTN', name: 'Yantian', type: 'sea' },
    { code: 'LYG', name: 'Lianyungang', type: 'sea' },
  ],
  Np = [
    { code: 'PEK', name: 'Beijing Capital', type: 'air' },
    { code: 'PVG', name: 'Shanghai Pudong', type: 'air' },
    { code: 'CAN', name: 'Guangzhou Baiyun', type: 'air' },
    { code: 'SZX', name: "Shenzhen Bao'an", type: 'air' },
    { code: 'CTU', name: 'Chengdu Shuangliu', type: 'air' },
    { code: 'SHA', name: 'Shanghai Hongqiao', type: 'air' },
    { code: 'KMG', name: 'Kunming Changshui', type: 'air' },
    { code: 'XIY', name: "Xi'an Xianyang", type: 'air' },
    { code: 'HGH', name: 'Hangzhou Xiaoshan', type: 'air' },
    { code: 'NKG', name: 'Nanjing Lukou', type: 'air' },
  ],
  jp = [
    { code: 'ZIH', name: 'Zhengzhou Rail Terminal', type: 'rail' },
    { code: 'CQN', name: 'Chongqing Rail Terminal', type: 'rail' },
    { code: 'XIY', name: "Xi'an Rail Terminal", type: 'rail' },
    { code: 'WUH', name: 'Wuhan Rail Terminal', type: 'rail' },
    { code: 'CDU', name: 'Chengdu Rail Terminal', type: 'rail' },
  ];
function kp(l) {
  const c = { ...l },
    a = Qt.find((Z) => Z.code === l.country);
  a && (c.country = a.name);
  const N = [...wp, ...Np, ...jp].find((Z) => Z.code === l.origin);
  N && (c.origin = N.name);
  const C = new Date(),
    j = C.toLocaleDateString('en-CA', { timeZone: 'Asia/Hong_Kong' }),
    p = C.toLocaleTimeString('en-GB', { timeZone: 'Asia/Hong_Kong', hourCycle: 'h23' }),
    h = `${j}T${p}+08:00`,
    K = `form-${l.country || 'N/A'}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    O = [];
  (l.servicesRequested.shipping && O.push('Shipping from China'),
    l.servicesRequested.sourcing && O.push('Product Sourcing'),
    l.servicesRequested.dropshipping && O.push('Dropshipping & Fulfillment'),
    l.servicesRequested.warehousing && O.push('Warehousing & Consolidation'),
    l.servicesRequested.qc && O.push('Quality Control'),
    l.servicesRequested.chinaVisits && O.push('China Business Visit'),
    l.servicesRequested.other && O.push('Other Project'));
  const b = {
    submissionId: K,
    timestamp: h,
    servicesList: O,
    contact: {
      firstName: c.firstName,
      lastName: c.lastName,
      email: c.email,
      phone: c.phone,
      phoneCountryCode: c.phoneCountryCode,
      companyName: c.companyName,
      customerType: c.customerType,
      shipperType: c.shipperType,
    },
    shippingRoute: {
      destinationCountry: a ? a.name : c.country,
      destinationCity: c.destCity,
      destinationZipCode: c.destZipCode,
      destinationLocationType: c.destLocationType,
      originCity: c.city,
      originZipCode: c.zipCode,
      originLocationType: c.locationType,
      originPortOfLoading: N ? N.name : c.origin,
      shippingMode: c.mode,
      incoterm: c.incoterm,
    },
    shippingCargo: {
      goodsDescription: c.goodsDescription,
      totalWeight: c.totalWeight,
      numberOfUnits: c.numberOfUnits,
      goodsValue: c.goodsValue,
      goodsCurrency: c.goodsCurrency,
      areGoodsReady: c.areGoodsReady,
      annualVolume: c.annualVolume,
      isPersonalOrHazardous: c.isPersonalOrHazardous,
      dimensions: c.dimensions,
      weightPerUnit: c.weightPerUnit,
      remarks: c.remarks,
    },
    servicesRequested: c.servicesRequested,
    sourcing: c.sourcing,
    warehousing: c.warehousing,
    dropshipping: c.dropshipping,
    qc: c.qc,
    chinaVisit: c.chinaVisit,
    otherProject: c.otherProject,
  };
  return { submissionId: K, timestamp: h, payload: b };
}
async function Sp(l, c) {
  const N =
    typeof window < 'u' && window.location.hostname === 'localhost'
      ? '/api/n8n'
      : 'https://n8n.srv783609.hstgr.cloud/webhook/5e52c71e-b113-4b3c-8c7d-91c78496ea91';
  console.log('[submitFormData] Starting submission with payload:', {
    submissionId: l.submissionId,
    hasEmail: !!l.email,
    hasPhone: !!l.phone,
  });
  try {
    return (
      await fetch(N, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(l),
      }),
      console.log('[submitFormData] Webhook request sent (opaque response).'),
      console.log(
        '[submitFormData] Submission successful (assumed), submissionId:',
        l.submissionId
      ),
      l.submissionId
    );
  } catch (C) {
    if (
      (console.error('[submitFormData] Unexpected error during submission:', C),
      C instanceof Error && C.message.includes('status'))
    )
      throw C;
    if (C instanceof Error && C.name === 'TypeError' && C.message.includes('fetch')) {
      const p =
        'Network error: Could not reach our servers. Please check your internet connection and try again.';
      throw (console.error('[submitFormData] Network error:', C), c && c(p), new Error(p));
    }
    const j =
      'Something went wrong while sending your request. Please try again in a moment or contact us directly.';
    throw (c && c(j), new Error(j));
  }
}
function tc(l) {
  var N;
  if (!l || typeof l != 'string') return { valid: !1, error: 'Email is required' };
  const c = l.trim();
  if (c.length === 0) return { valid: !1, error: 'Email is required' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c))
    return { valid: !1, error: 'Please enter a valid email address' };
  const w = (N = c.split('@')[1]) == null ? void 0 : N.toLowerCase();
  if (w) {
    const C = {
      'gmial.com': 'gmail.com',
      'gmai.com': 'gmail.com',
      'gmal.com': 'gmail.com',
      'yaho.com': 'yahoo.com',
      'hotmial.com': 'hotmail.com',
    };
    if (C[w]) return { valid: !1, error: `Did you mean ${c.split('@')[0]}@${C[w]}?` };
  }
  return { valid: !0 };
}
function rc(l) {
  if (!l || typeof l != 'string') return { valid: !1, error: 'Phone number is required' };
  const c = l.trim();
  if (c.length === 0) return { valid: !1, error: 'Phone number is required' };
  const a = c.replace(/[\s\-()]/g, '');
  if (!a.startsWith('+'))
    return { valid: !1, error: 'Please include country code (e.g., +33 for France, +1 for USA)' };
  if (a.length < 8)
    return {
      valid: !1,
      error: 'Phone number seems too short. Please include country code and number',
    };
  if (a.length > 20)
    return { valid: !1, error: 'Phone number seems too long. Please check and try again' };
  const w = a.substring(1);
  return /^\d+$/.test(w)
    ? { valid: !0 }
    : { valid: !1, error: 'Phone number should contain only numbers after the country code' };
}
function sc(l, c) {
  return l == null
    ? { valid: !1, error: c ? `${c} is required` : 'This field is required' }
    : typeof l != 'string'
      ? { valid: !1, error: c ? `${c} is required` : 'This field is required' }
      : l.trim().length === 0
        ? { valid: !1, error: c ? `${c} is required` : 'This field is required' }
        : { valid: !0 };
}
function il(l) {
  if (!l || typeof l != 'string') return { valid: !1, error: 'Destination country is required' };
  const c = l.trim();
  return c.length === 0
    ? { valid: !1, error: 'Destination country is required' }
    : /^[A-Z]{2,3}$/i.test(c)
      ? Qt.find((N) => N.code.toUpperCase() === c.toUpperCase())
        ? { valid: !0 }
        : { valid: !1, error: 'Please enter a valid country code' }
      : c.length <= 2
        ? { valid: !1, error: 'Country name is too short' }
        : { valid: !0 };
}
function tl(l) {
  if (!l || typeof l != 'string') return { valid: !1, error: 'City or port is required' };
  const c = l.trim();
  return c.length === 0
    ? { valid: !1, error: 'City or port is required' }
    : c.length <= 2
      ? { valid: !1, error: 'City or port name is too short' }
      : { valid: !0 };
}
function oc(l) {
  if (l == null || l === '') return { valid: !1, error: 'Total weight is required' };
  const c = typeof l == 'number' ? l.toString() : String(l).trim();
  if (c.length === 0) return { valid: !1, error: 'Total weight is required' };
  const a = c.replace(/[\s,]/g, ''),
    w = parseFloat(a);
  return isNaN(w)
    ? { valid: !1, error: 'Please enter a valid weight (numbers only)' }
    : w <= 0
      ? { valid: !1, error: 'Weight must be greater than 0' }
      : w > 1e6
        ? { valid: !1, error: 'Weight seems too high. Please check and try again' }
        : { valid: !0 };
}
function sl(l, c) {
  const a = {};
  switch (l) {
    case 'services':
      break;
    case 'shippingRoute':
      ((a.country = il(c.country)), (a.destCity = tl(c.destCity)));
      break;
    case 'shippingCargo':
      a.totalWeight = oc(c.totalWeight);
      break;
    case 'contact':
      ((a.firstName = sc(c.firstName, 'First name')),
        (a.email = tc(c.email)),
        (a.phone = rc(c.phone)));
      break;
  }
  return a;
}
function Cp(l, c) {
  const a = sl(l, c);
  return Object.values(a).every((w) => w.valid);
}
const Pp = [
    { code: 'SHA', name: 'Shanghai', type: 'sea' },
    { code: 'SZX', name: 'Shenzhen', type: 'sea' },
    { code: 'NGB', name: 'Ningbo-Zhoushan', type: 'sea' },
    { code: 'GZH', name: 'Guangzhou', type: 'sea' },
    { code: 'QIN', name: 'Qingdao', type: 'sea' },
    { code: 'TJN', name: 'Tianjin', type: 'sea' },
    { code: 'XMN', name: 'Xiamen', type: 'sea' },
    { code: 'DLN', name: 'Dalian', type: 'sea' },
    { code: 'YTN', name: 'Yantian', type: 'sea' },
    { code: 'LYG', name: 'Lianyungang', type: 'sea' },
  ],
  Tp = [
    { code: 'PEK', name: 'Beijing Capital', type: 'air' },
    { code: 'PVG', name: 'Shanghai Pudong', type: 'air' },
    { code: 'CAN', name: 'Guangzhou Baiyun', type: 'air' },
    { code: 'SZX', name: "Shenzhen Bao'an", type: 'air' },
    { code: 'CTU', name: 'Chengdu Shuangliu', type: 'air' },
    { code: 'SHA', name: 'Shanghai Hongqiao', type: 'air' },
    { code: 'KMG', name: 'Kunming Changshui', type: 'air' },
    { code: 'XIY', name: "Xi'an Xianyang", type: 'air' },
    { code: 'HGH', name: 'Hangzhou Xiaoshan', type: 'air' },
    { code: 'NKG', name: 'Nanjing Lukou', type: 'air' },
  ],
  Ep = [
    { code: 'ZIH', name: 'Zhengzhou Rail Terminal', type: 'rail' },
    { code: 'CQN', name: 'Chongqing Rail Terminal', type: 'rail' },
    { code: 'XIY', name: "Xi'an Rail Terminal", type: 'rail' },
    { code: 'WUH', name: 'Wuhan Rail Terminal', type: 'rail' },
    { code: 'CDU', name: 'Chengdu Rail Terminal', type: 'rail' },
  ],
  Lp = ({ formData: l, t: c, selectedServiceLabels: a, orderedSteps: w, onEditStep: N }) => {
    var O;
    const C = (b) => {
        if (!b) return '';
        const Z = Qt.find((Q) => Q.code === b || Q.name === b);
        return Z ? Z.name : b;
      },
      j = (b) => {
        if (!b) return '';
        const Q = [...Pp, ...Tp, ...Ep].find((Y) => Y.code === b);
        return Q ? Q.name : b;
      },
      p = (b) =>
        b
          ? {
              Sea: c('modeSea', 'Sea'),
              Air: c('modeAir', 'Air'),
              Rail: c('modeRail', 'Rail'),
              Express: c('modeExpress', 'Express'),
              not_sure: c('modeNotSure', "I'm not sure"),
            }[b] || b
          : '',
      h = (b) => {
        if (!b) return '';
        const Z = String(b).trim();
        return Z ? `${Z} kg` : '';
      },
      z = (b) => w.indexOf(b),
      K =
        ((O = l.servicesRequested) == null ? void 0 : O.shipping) === void 0
          ? !0
          : l.servicesRequested.shipping;
    return r.jsxs('div', {
      className: 'sino-simple-form__review-section',
      children: [
        r.jsx('h3', {
          className: 'sino-simple-form__review-title',
          children: c('reviewTitle', 'Review your request'),
        }),
        r.jsx('p', {
          className: 'sino-simple-form__review-subtitle',
          children: c('reviewSubtitle', 'Please review the information below before submitting.'),
        }),
        r.jsxs('div', {
          className: 'sino-simple-form__review-items',
          children: [
            a.length > 0 &&
              r.jsxs('div', {
                className: 'sino-simple-form__review-item',
                children: [
                  r.jsxs('div', {
                    className: 'sino-simple-form__review-item-header',
                    children: [
                      r.jsx('span', {
                        className: 'sino-simple-form__review-item-label',
                        children: c('reviewServices', 'Services'),
                      }),
                      r.jsx('button', {
                        type: 'button',
                        className: 'sino-simple-form__review-edit-button',
                        onClick: () => N(z('services')),
                        'aria-label': c('reviewEditServices', 'Edit services'),
                        children: c('reviewEdit', 'Edit'),
                      }),
                    ],
                  }),
                  r.jsx('div', {
                    className: 'sino-simple-form__review-item-content',
                    children: a.join(', '),
                  }),
                ],
              }),
            K &&
              (l.country || l.destCity || l.mode || l.origin) &&
              r.jsxs('div', {
                className: 'sino-simple-form__review-item',
                children: [
                  r.jsxs('div', {
                    className: 'sino-simple-form__review-item-header',
                    children: [
                      r.jsx('span', {
                        className: 'sino-simple-form__review-item-label',
                        children: c('reviewRoute', 'Route'),
                      }),
                      r.jsx('button', {
                        type: 'button',
                        className: 'sino-simple-form__review-edit-button',
                        onClick: () => N(z('shippingRoute')),
                        'aria-label': c('reviewEditRoute', 'Edit route'),
                        children: c('reviewEdit', 'Edit'),
                      }),
                    ],
                  }),
                  r.jsxs('div', {
                    className: 'sino-simple-form__review-item-content',
                    children: [
                      r.jsx('div', {
                        className: 'sino-simple-form__review-item-row',
                        children:
                          l.country &&
                          r.jsxs('div', {
                            children: [
                              r.jsxs('strong', {
                                children: [c('reviewDestination', 'Destination'), ':'],
                              }),
                              ' ',
                              C(l.country),
                              l.destCity && `, ${l.destCity}`,
                            ],
                          }),
                      }),
                      l.mode &&
                        r.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            r.jsxs('strong', { children: [c('reviewMode', 'Mode'), ':'] }),
                            ' ',
                            p(l.mode),
                          ],
                        }),
                      l.origin &&
                        r.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            r.jsxs('strong', { children: [c('reviewOrigin', 'Origin'), ':'] }),
                            ' ',
                            j(l.origin),
                            l.city && `, ${l.city}`,
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            K &&
              (l.totalWeight || l.goodsDescription || l.numberOfUnits) &&
              r.jsxs('div', {
                className: 'sino-simple-form__review-item',
                children: [
                  r.jsxs('div', {
                    className: 'sino-simple-form__review-item-header',
                    children: [
                      r.jsx('span', {
                        className: 'sino-simple-form__review-item-label',
                        children: c('reviewCargo', 'Cargo'),
                      }),
                      r.jsx('button', {
                        type: 'button',
                        className: 'sino-simple-form__review-edit-button',
                        onClick: () => N(z('shippingCargo')),
                        'aria-label': c('reviewEditCargo', 'Edit cargo'),
                        children: c('reviewEdit', 'Edit'),
                      }),
                    ],
                  }),
                  r.jsxs('div', {
                    className: 'sino-simple-form__review-item-content',
                    children: [
                      l.goodsDescription &&
                        r.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            r.jsxs('strong', {
                              children: [c('reviewDescription', 'Description'), ':'],
                            }),
                            ' ',
                            l.goodsDescription,
                          ],
                        }),
                      l.totalWeight &&
                        r.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            r.jsxs('strong', { children: [c('reviewWeight', 'Weight'), ':'] }),
                            ' ',
                            h(l.totalWeight),
                          ],
                        }),
                      l.numberOfUnits &&
                        r.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            r.jsxs('strong', { children: [c('reviewUnits', 'Units'), ':'] }),
                            ' ',
                            l.numberOfUnits,
                          ],
                        }),
                      l.areGoodsReady &&
                        r.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            r.jsxs('strong', { children: [c('reviewReady', 'Ready'), ':'] }),
                            ' ',
                            c(`goodsReady${l.areGoodsReady}`, l.areGoodsReady),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            (l.firstName || l.email || l.phone) &&
              r.jsxs('div', {
                className: 'sino-simple-form__review-item',
                children: [
                  r.jsxs('div', {
                    className: 'sino-simple-form__review-item-header',
                    children: [
                      r.jsx('span', {
                        className: 'sino-simple-form__review-item-label',
                        children: c('reviewContact', 'Contact'),
                      }),
                      r.jsx('button', {
                        type: 'button',
                        className: 'sino-simple-form__review-edit-button',
                        onClick: () => N(z('contact')),
                        'aria-label': c('reviewEditContact', 'Edit contact'),
                        children: c('reviewEdit', 'Edit'),
                      }),
                    ],
                  }),
                  r.jsxs('div', {
                    className: 'sino-simple-form__review-item-content',
                    children: [
                      l.firstName &&
                        r.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            r.jsxs('strong', { children: [c('reviewName', 'Name'), ':'] }),
                            ' ',
                            l.firstName,
                            l.lastName && ` ${l.lastName}`,
                          ],
                        }),
                      l.email &&
                        r.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            r.jsxs('strong', { children: [c('reviewEmail', 'Email'), ':'] }),
                            ' ',
                            l.email,
                          ],
                        }),
                      l.phone &&
                        r.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            r.jsxs('strong', { children: [c('reviewPhone', 'Phone'), ':'] }),
                            ' ',
                            l.phone,
                          ],
                        }),
                      l.companyName &&
                        r.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            r.jsxs('strong', { children: [c('reviewCompany', 'Company'), ':'] }),
                            ' ',
                            l.companyName,
                          ],
                        }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  Rp = ({
    formData: l,
    t: c,
    selectedServiceLabels: a,
    submitError: w,
    setSubmitError: N,
    isSubmitting: C,
    setIsSubmitting: j,
    scrollToFirstError: p,
    onSubmissionSuccess: h,
    setFieldErrors: z,
    setFieldTouched: K,
    orderedSteps: O,
    onEditStep: b,
  }) =>
    r.jsx('section', {
      className: 'sino-simple-form__section sino-simple-form__section--footer',
      children: r.jsxs('div', {
        className: 'sino-simple-form__footer',
        children: [
          r.jsx(Lp, {
            formData: l,
            t: c,
            selectedServiceLabels: a,
            orderedSteps: O,
            onEditStep: b,
          }),
          r.jsxs('div', {
            className: 'sino-simple-form__footer-text',
            children: [
              r.jsx('p', {
                className: 'sino-simple-form__footer-title',
                children: c('simpleFooterTitle', 'Ready to get your plan?'),
              }),
              r.jsx('p', {
                id: 'sino-simple-form__footer-subtitle',
                className: 'sino-simple-form__footer-subtitle',
                children: c(
                  'simpleFooterSubtitle',
                  'A SINO expert (not a bot) will email you a first quote within 24h (Mon–Fri).'
                ),
              }),
              r.jsx('p', {
                className: 'sino-simple-form__footer-trust',
                children: c(
                  'simpleFooterTrust',
                  'No spam. Just one clear plan, with transparent pricing and timelines.'
                ),
              }),
            ],
          }),
          r.jsxs('div', {
            className: 'sino-simple-form__footer-actions',
            children: [
              w && r.jsx('p', { className: 'sino-simple-form__footer-error', children: w }),
              r.jsx('button', {
                type: 'button',
                className: 'sino-simple-form__cta-button',
                'aria-label': c('getQuoteAria', 'Submit form to get your quote'),
                'aria-describedby': 'sino-simple-form__footer-subtitle',
                onClick: async () => {
                  var pe;
                  if (C) return;
                  console.log(
                    '[SimpleFooterSection] Button clicked, validating all required fields...'
                  );
                  const Z =
                      ((pe = l.servicesRequested) == null ? void 0 : pe.shipping) === void 0
                        ? !0
                        : l.servicesRequested.shipping,
                    Q = [];
                  (Z && Q.push('shippingRoute', 'shippingCargo'), Q.push('contact'));
                  const Y = {},
                    P = {};
                  for (const re of Q) {
                    const ue = sl(re, l);
                    Object.entries(ue).forEach(([fe, ve]) => {
                      !ve.valid && ve.error && ((Y[fe] = ve.error), (P[fe] = !0));
                    });
                  }
                  if ((z(Y), K((re) => ({ ...re, ...P })), Object.keys(Y).length > 0)) {
                    const re = Object.keys(Y);
                    console.error('[SimpleFooterSection] Validation failed for fields:', re);
                    const ue = re.length,
                      fe =
                        ue === 1
                          ? c(
                              'simpleSubmitErrorSingle',
                              'Please complete the required field before submitting.'
                            )
                          : c(
                              'simpleSubmitErrorMultiple',
                              `Please complete ${ue} required fields before submitting.`
                            );
                    (N(fe),
                      setTimeout(() => {
                        p();
                      }, 100));
                    return;
                  }
                  (console.log(
                    '[SimpleFooterSection] All validations passed, starting submission...'
                  ),
                    N(null),
                    j(!0));
                  let me = !1;
                  try {
                    console.log('[SimpleFooterSection] Preparing submission payload...');
                    const { submissionId: re, payload: ue } = kp(l);
                    (console.log('[SimpleFooterSection] Payload prepared, submissionId:', re),
                      console.log('[SimpleFooterSection] Submitting to webhooks...'));
                    const fe = await Sp(ue, (ve) => {
                      (console.error('[SimpleFooterSection] Error callback triggered:', ve),
                        (me = !0),
                        N(ve));
                    });
                    (console.log(
                      '[SimpleFooterSection] Submission successful, calling onSubmissionSuccess with:',
                      fe
                    ),
                      h(fe));
                  } catch (re) {
                    if (
                      (console.error('[SimpleFooterSection] Submission error caught:', re),
                      !me && re instanceof Error)
                    ) {
                      const ue = re.message || 'An error occurred. Please try again.';
                      (console.error('[SimpleFooterSection] Setting error message:', ue), N(ue));
                    }
                  } finally {
                    j(!1);
                  }
                },
                disabled: C,
                children: C
                  ? c('simpleFooterCtaLoading', 'Sending your request…')
                  : c('simpleFooterCta', 'Get my quote'),
              }),
              r.jsx('p', {
                className: 'sino-simple-form__footer-note',
                children: c(
                  'simpleFooterNote',
                  'By submitting, you agree that SINO Shipping may contact you about this request.'
                ),
              }),
            ],
          }),
          r.jsxs('div', {
            className: 'sino-simple-form__footer-trust-badges',
            children: [
              r.jsxs('a', {
                href: 'https://www.sino-shipping.com/privacy-policy',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'sino-simple-form__footer-trust-badge',
                'aria-label': c('trustBadgeGDPR', 'GDPR Compliant'),
                children: [
                  r.jsxs('svg', {
                    width: '20',
                    height: '20',
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                      r.jsx('rect', {
                        x: '3',
                        y: '3',
                        width: '18',
                        height: '18',
                        rx: '2',
                        stroke: 'currentColor',
                        strokeWidth: '2',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      }),
                      r.jsx('path', {
                        d: 'M9 12l2 2 4-4',
                        stroke: 'currentColor',
                        strokeWidth: '2',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      }),
                    ],
                  }),
                  r.jsx('span', {
                    className: 'sino-simple-form__footer-trust-badge-text',
                    children: c('trustBadgeGDPR', 'GDPR Compliant'),
                  }),
                ],
              }),
              r.jsxs('div', {
                className: 'sino-simple-form__footer-trust-badge',
                'aria-label': c('trustBadgeSecure', 'Secure & Encrypted'),
                children: [
                  r.jsxs('svg', {
                    width: '20',
                    height: '20',
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                      r.jsx('rect', {
                        x: '3',
                        y: '11',
                        width: '18',
                        height: '11',
                        rx: '2',
                        stroke: 'currentColor',
                        strokeWidth: '2',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      }),
                      r.jsx('path', {
                        d: 'M7 11V7a5 5 0 0 1 10 0v4',
                        stroke: 'currentColor',
                        strokeWidth: '2',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      }),
                    ],
                  }),
                  r.jsx('span', {
                    className: 'sino-simple-form__footer-trust-badge-text',
                    children: c('trustBadgeSecure', 'Secure & Encrypted'),
                  }),
                ],
              }),
              r.jsxs('div', {
                className: 'sino-simple-form__footer-trust-badge',
                'aria-label': c('trustBadgeNoSpam', 'No Spam Guarantee'),
                children: [
                  r.jsxs('svg', {
                    width: '20',
                    height: '20',
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                      r.jsx('path', {
                        d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
                        stroke: 'currentColor',
                        strokeWidth: '2',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      }),
                      r.jsx('line', {
                        x1: '18',
                        y1: '6',
                        x2: '18',
                        y2: '6',
                        stroke: 'currentColor',
                        strokeWidth: '2',
                        strokeLinecap: 'round',
                      }),
                    ],
                  }),
                  r.jsx('span', {
                    className: 'sino-simple-form__footer-trust-badge-text',
                    children: c('trustBadgeNoSpam', 'No Spam Guarantee'),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
function bp(l, c, a, w) {
  if (c - (l + 1) <= 0) return { minutes: 0, message: 'Almost done!', isAlmostDone: !0 };
  const C = {
    services: 15,
    shippingRoute: 45,
    shippingCargo: 60,
    contact: 30,
    sourcing: 45,
    warehousing: 45,
    dropshipping: 45,
    qc: 45,
    chinaVisit: 60,
  };
  let j = 0;
  for (let z = l + 1; z < a.length; z++) {
    const K = a[z],
      O = C[K] || 90,
      b = ic(K, w),
      Z = b.total > 0 ? b.filled / b.total : 0,
      Q = O * (1 - Z * 0.5);
    j += Q;
  }
  const p = Math.ceil(j / 60);
  let h;
  return (
    p <= 1
      ? (h = 'Almost done!')
      : p <= 2
        ? (h = `~${p} minute${p > 1 ? 's' : ''} remaining`)
        : (h = `~${p} minutes remaining`),
    { minutes: p, message: h, isAlmostDone: p <= 1 }
  );
}
const Mp = ({ currentStepIndex: l, totalSteps: c, orderedSteps: a, formData: w, t: N }) => {
    const C = W.useMemo(() => bp(l, c, a, w), [l, c, a, w]);
    return r.jsxs('div', {
      className: `sino-simple-form__time-estimate${C.isAlmostDone ? ' sino-simple-form__time-estimate--almost-done' : ''}`,
      role: 'status',
      'aria-live': 'polite',
      children: [
        r.jsx('div', {
          className: 'sino-simple-form__time-estimate-icon',
          children: r.jsxs('svg', {
            width: '16',
            height: '16',
            viewBox: '0 0 24 24',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              r.jsx('circle', {
                cx: '12',
                cy: '12',
                r: '10',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
              r.jsx('polyline', {
                points: '12 6 12 12 16 14',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            ],
          }),
        }),
        r.jsx('span', {
          className: 'sino-simple-form__time-estimate-text',
          children: C.isAlmostDone
            ? N('timeEstimateAlmostDone', C.message)
            : N('timeEstimateRemaining', C.message),
        }),
      ],
    });
  },
  Fp = ({
    currentStep: l,
    totalSteps: c,
    onNext: a,
    onPrevious: w,
    isFirstStep: N,
    isLastStep: C,
    orderedSteps: j,
    formData: p,
    t: h,
  }) =>
    r.jsxs('div', {
      className: 'sino-simple-form__step-navigation',
      children: [
        r.jsx('div', {
          className: 'sino-simple-form__step-progress',
          children: r.jsx('div', {
            className: 'sino-simple-form__step-progress-bar',
            children: r.jsx('div', {
              className: 'sino-simple-form__step-progress-fill',
              style: { width: `${((l + 1) / c) * 100}%` },
            }),
          }),
        }),
        r.jsx(Mp, { currentStepIndex: l, totalSteps: c, orderedSteps: j, formData: p, t: h }),
        r.jsxs('div', {
          className: 'sino-simple-form__step-buttons',
          children: [
            !N &&
              r.jsxs('button', {
                type: 'button',
                className: 'sino-simple-form__step-button sino-simple-form__step-button--previous',
                onClick: w,
                'aria-label': h('previousStepAria', `Go to previous step, step ${l} of ${c}`),
                onKeyDown: (z) => {
                  (z.key === 'Enter' || z.key === ' ') && (z.preventDefault(), w());
                },
                children: [
                  r.jsx('span', {
                    className: 'sino-simple-form__step-button-arrow',
                    'aria-hidden': 'true',
                    children: '←',
                  }),
                  h('previousStep', 'Previous'),
                ],
              }),
            !C &&
              r.jsxs('button', {
                type: 'button',
                className: 'sino-simple-form__step-button sino-simple-form__step-button--next',
                onClick: a,
                'aria-label': h('nextStepAria', `Go to next step, step ${l + 2} of ${c}`),
                onKeyDown: (z) => {
                  (z.key === 'Enter' || z.key === ' ') && (z.preventDefault(), a());
                },
                children: [
                  h('nextStep', 'Next'),
                  r.jsx('span', {
                    className: 'sino-simple-form__step-button-arrow',
                    'aria-hidden': 'true',
                    children: '→',
                  }),
                ],
              }),
          ],
        }),
      ],
    }),
  Op = {
    FR: [
      'Paris',
      'Lyon',
      'Marseille',
      'Toulouse',
      'Nice',
      'Nantes',
      'Strasbourg',
      'Montpellier',
      'Bordeaux',
      'Lille',
      'Le Havre',
    ],
    US: [
      'New York',
      'Los Angeles',
      'Chicago',
      'Houston',
      'Phoenix',
      'Philadelphia',
      'San Antonio',
      'San Diego',
      'Dallas',
      'San Jose',
      'Miami',
    ],
    GB: [
      'London',
      'Manchester',
      'Birmingham',
      'Glasgow',
      'Liverpool',
      'Leeds',
      'Edinburgh',
      'Bristol',
      'Cardiff',
      'Belfast',
    ],
    DE: [
      'Berlin',
      'Munich',
      'Hamburg',
      'Frankfurt',
      'Cologne',
      'Stuttgart',
      'Düsseldorf',
      'Dortmund',
      'Essen',
      'Leipzig',
    ],
    IT: [
      'Rome',
      'Milan',
      'Naples',
      'Turin',
      'Palermo',
      'Genoa',
      'Bologna',
      'Florence',
      'Bari',
      'Catania',
    ],
    ES: [
      'Madrid',
      'Barcelona',
      'Valencia',
      'Seville',
      'Zaragoza',
      'Málaga',
      'Murcia',
      'Palma',
      'Las Palmas',
      'Bilbao',
    ],
    NL: [
      'Amsterdam',
      'Rotterdam',
      'The Hague',
      'Utrecht',
      'Eindhoven',
      'Groningen',
      'Tilburg',
      'Almere',
      'Breda',
      'Nijmegen',
    ],
    BE: [
      'Brussels',
      'Antwerp',
      'Ghent',
      'Charleroi',
      'Liège',
      'Bruges',
      'Namur',
      'Leuven',
      'Mons',
      'Aalst',
    ],
    CA: [
      'Toronto',
      'Montreal',
      'Vancouver',
      'Calgary',
      'Edmonton',
      'Ottawa',
      'Winnipeg',
      'Quebec City',
      'Hamilton',
      'Kitchener',
    ],
    AU: [
      'Sydney',
      'Melbourne',
      'Brisbane',
      'Perth',
      'Adelaide',
      'Gold Coast',
      'Newcastle',
      'Canberra',
      'Sunshine Coast',
      'Wollongong',
    ],
    CN: [
      'Shanghai',
      'Beijing',
      'Guangzhou',
      'Shenzhen',
      'Chengdu',
      'Hangzhou',
      'Wuhan',
      "Xi'an",
      'Nanjing',
      'Tianjin',
    ],
    JP: [
      'Tokyo',
      'Yokohama',
      'Osaka',
      'Nagoya',
      'Sapporo',
      'Fukuoka',
      'Kobe',
      'Kawasaki',
      'Kyoto',
      'Saitama',
    ],
    KR: [
      'Seoul',
      'Busan',
      'Incheon',
      'Daegu',
      'Daejeon',
      'Gwangju',
      'Suwon',
      'Ulsan',
      'Changwon',
      'Goyang',
    ],
    IN: [
      'Mumbai',
      'Delhi',
      'Bangalore',
      'Hyderabad',
      'Ahmedabad',
      'Chennai',
      'Kolkata',
      'Surat',
      'Pune',
      'Jaipur',
    ],
    BR: [
      'São Paulo',
      'Rio de Janeiro',
      'Brasília',
      'Salvador',
      'Fortaleza',
      'Belo Horizonte',
      'Manaus',
      'Curitiba',
      'Recife',
      'Porto Alegre',
    ],
    MX: [
      'Mexico City',
      'Guadalajara',
      'Monterrey',
      'Puebla',
      'Tijuana',
      'León',
      'Juárez',
      'Torreón',
      'Querétaro',
      'San Luis Potosí',
    ],
    AR: [
      'Buenos Aires',
      'Córdoba',
      'Rosario',
      'Mendoza',
      'Tucumán',
      'La Plata',
      'Mar del Plata',
      'Salta',
      'Santa Fe',
      'San Juan',
    ],
    ZA: [
      'Johannesburg',
      'Cape Town',
      'Durban',
      'Pretoria',
      'Port Elizabeth',
      'Bloemfontein',
      'East London',
      'Kimberley',
      'Polokwane',
      'Nelspruit',
    ],
    AE: [
      'Dubai',
      'Abu Dhabi',
      'Sharjah',
      'Al Ain',
      'Ajman',
      'Ras Al Khaimah',
      'Fujairah',
      'Umm Al Quwain',
    ],
    SA: [
      'Riyadh',
      'Jeddah',
      'Mecca',
      'Medina',
      'Dammam',
      'Khobar',
      'Taif',
      'Abha',
      'Tabuk',
      'Buraydah',
    ],
    TR: [
      'Istanbul',
      'Ankara',
      'Izmir',
      'Bursa',
      'Antalya',
      'Adana',
      'Gaziantep',
      'Konya',
      'Kayseri',
      'Mersin',
    ],
    PL: [
      'Warsaw',
      'Kraków',
      'Łódź',
      'Wrocław',
      'Poznań',
      'Gdańsk',
      'Szczecin',
      'Bydgoszcz',
      'Lublin',
      'Katowice',
    ],
    SE: [
      'Stockholm',
      'Gothenburg',
      'Malmö',
      'Uppsala',
      'Västerås',
      'Örebro',
      'Linköping',
      'Helsingborg',
      'Jönköping',
      'Norrköping',
    ],
    NO: [
      'Oslo',
      'Bergen',
      'Trondheim',
      'Stavanger',
      'Bærum',
      'Kristiansand',
      'Fredrikstad',
      'Tromsø',
      'Sandnes',
      'Asker',
    ],
    DK: [
      'Copenhagen',
      'Aarhus',
      'Odense',
      'Aalborg',
      'Esbjerg',
      'Randers',
      'Kolding',
      'Horsens',
      'Vejle',
      'Roskilde',
    ],
    FI: [
      'Helsinki',
      'Espoo',
      'Tampere',
      'Vantaa',
      'Oulu',
      'Turku',
      'Jyväskylä',
      'Lahti',
      'Kuopio',
      'Pori',
    ],
    CH: [
      'Zurich',
      'Geneva',
      'Basel',
      'Bern',
      'Lausanne',
      'Winterthur',
      'Lucerne',
      'St. Gallen',
      'Lugano',
      'Biel',
    ],
    AT: [
      'Vienna',
      'Graz',
      'Linz',
      'Salzburg',
      'Innsbruck',
      'Klagenfurt',
      'Villach',
      'Wels',
      'Sankt Pölten',
      'Dornbirn',
    ],
    PT: [
      'Lisbon',
      'Porto',
      'Vila Nova de Gaia',
      'Amadora',
      'Braga',
      'Funchal',
      'Coimbra',
      'Setúbal',
      'Almada',
      'Agualva-Cacém',
    ],
    GR: [
      'Athens',
      'Thessaloniki',
      'Patras',
      'Heraklion',
      'Larissa',
      'Volos',
      'Rhodes',
      'Ioannina',
      'Chania',
      'Kavala',
    ],
    IE: [
      'Dublin',
      'Cork',
      'Limerick',
      'Galway',
      'Waterford',
      'Drogheda',
      'Dundalk',
      'Swords',
      'Bray',
      'Navan',
    ],
    NZ: [
      'Auckland',
      'Wellington',
      'Christchurch',
      'Hamilton',
      'Tauranga',
      'Napier',
      'Dunedin',
      'Palmerston North',
      'Nelson',
      'Rotorua',
    ],
    SG: ['Singapore'],
    MY: [
      'Kuala Lumpur',
      'George Town',
      'Ipoh',
      'Shah Alam',
      'Petaling Jaya',
      'Subang Jaya',
      'Johor Bahru',
      'Kota Kinabalu',
      'Kuching',
      'Kota Bharu',
    ],
    TH: [
      'Bangkok',
      'Nonthaburi',
      'Nakhon Ratchasima',
      'Chiang Mai',
      'Hat Yai',
      'Udon Thani',
      'Pak Kret',
      'Khon Kaen',
      'Nakhon Si Thammarat',
      'Ubon Ratchathani',
    ],
    VN: [
      'Ho Chi Minh City',
      'Hanoi',
      'Da Nang',
      'Haiphong',
      'Can Tho',
      'Bien Hoa',
      'Hue',
      'Nha Trang',
      'Vung Tau',
      'Quy Nhon',
    ],
    PH: [
      'Manila',
      'Quezon City',
      'Caloocan',
      'Davao City',
      'Cebu City',
      'Zamboanga City',
      'Antipolo',
      'Pasig',
      'Cagayan de Oro',
      'Valenzuela',
    ],
    ID: [
      'Jakarta',
      'Surabaya',
      'Bandung',
      'Medan',
      'Semarang',
      'Palembang',
      'Makassar',
      'Tangerang',
      'Depok',
      'South Tangerang',
    ],
  },
  Yu = ({
    id: l,
    name: c,
    value: a,
    onChange: w,
    onBlur: N,
    onSelect: C,
    onSelectWithValidation: j,
    placeholder: p,
    options: h,
    isLoading: z = !1,
    className: K = '',
    inputRef: O,
    error: b,
    touched: Z,
    isValid: Q,
    maxResults: Y = 10,
  }) => {
    const [P, I] = W.useState(!1),
      [me, pe] = W.useState(-1),
      [re, ue] = W.useState(''),
      [fe, ve] = W.useState(!1),
      Ie = W.useRef(null),
      Ge = W.useRef(null),
      We = W.useRef(null),
      cn = W.useRef(!1),
      Ae = h.length > 0 && h[0].flag !== void 0;
    W.useEffect(() => {
      if (!a) {
        ue('');
        return;
      }
      if (Ae) {
        const f = h.find((S) => S.value === a);
        ue(f ? f.label : a);
      } else ue(a);
    }, [a, h, Ae]);
    const X = h
      .filter((f) => {
        if (!re.trim()) return !1;
        const S = re.toLowerCase();
        return (
          f.label.toLowerCase().includes(S) ||
          f.value.toLowerCase().includes(S) ||
          (Ae && f.value.toLowerCase() === S)
        );
      })
      .slice(0, Y);
    (W.useEffect(
      () => (
        re.trim() && P
          ? (ve(!0),
            We.current && clearTimeout(We.current),
            (We.current = setTimeout(() => {
              ve(!1);
            }, 300)))
          : ve(!1),
        () => {
          We.current && clearTimeout(We.current);
        }
      ),
      [re, P]
    ),
      W.useEffect(() => {
        const f = (S) => {
          Ie.current && !Ie.current.contains(S.target) && (I(!1), pe(-1));
        };
        if (P)
          return (
            document.addEventListener('mousedown', f),
            () => document.removeEventListener('mousedown', f)
          );
      }, [P]));
    const Te = (f) => {
        const S = f.target.value;
        (ue(S), w(f), I(!0), pe(-1));
      },
      Ve = () => {
        X.length > 0 && I(!0);
      },
      Re = (f) => {
        ((cn.current = !0), ue(f.label), I(!1), pe(-1), j && j(f.value));
        const S = { target: { name: c, value: f.value } };
        (w(S),
          C && C(f.value),
          setTimeout(() => {
            cn.current = !1;
          }, 300));
      },
      H = (f) => {
        var S;
        if (!P || X.length === 0) {
          f.key === 'ArrowDown' && X.length > 0 && (I(!0), pe(0));
          return;
        }
        switch (f.key) {
          case 'ArrowDown':
            (f.preventDefault(),
              pe((G) => {
                const ie = G < X.length - 1 ? G + 1 : G;
                if (Ge.current && ie >= 0) {
                  const se = Ge.current.children[ie];
                  se && se.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                }
                return ie;
              }));
            break;
          case 'ArrowUp':
            (f.preventDefault(),
              pe((G) => {
                const ie = G > 0 ? G - 1 : -1;
                if (Ge.current && ie >= 0) {
                  const se = Ge.current.children[ie];
                  se && se.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                }
                return ie;
              }));
            break;
          case 'Enter':
            (f.preventDefault(), me >= 0 && me < X.length && Re(X[me]));
            break;
          case 'Escape':
            (f.preventDefault(), I(!1), pe(-1), (S = O.current) == null || S.focus());
            break;
          case 'Tab':
            (I(!1), pe(-1));
            break;
        }
      },
      F = z || fe,
      V = F && re.trim() && P,
      A = F && !(Z && !b && Q);
    return r.jsxs('div', {
      ref: Ie,
      className: 'sino-simple-form__autocomplete-wrapper',
      children: [
        r.jsxs('div', {
          className: 'sino-simple-form__autocomplete-input-wrapper',
          children: [
            r.jsx('input', {
              ref: O,
              id: l,
              name: c,
              type: 'text',
              value: re,
              onChange: Te,
              onFocus: Ve,
              onBlur: () => {
                setTimeout(() => {
                  (cn.current || N(), I(!1), pe(-1));
                }, 200);
              },
              onKeyDown: H,
              placeholder: p,
              className: `sino-simple-form__input${b ? ' sino-simple-form__input--error' : ''}${Z && !b && Q ? ' sino-simple-form__input--success' : ''}${F && !(Z && !b && Q) ? ' sino-simple-form__input--loading' : ''}${K ? ` ${K}` : ''}`,
              autoComplete: 'off',
              'aria-autocomplete': 'list',
              'aria-expanded': P,
              'aria-haspopup': 'listbox',
              'aria-controls': `${l}-listbox`,
              'aria-label': p,
              'aria-describedby': b ? `${l}-error` : Z && !b && Q ? `${l}-success` : void 0,
              'aria-invalid': b ? 'true' : 'false',
              'aria-activedescendant': me >= 0 ? `${l}-option-${me}` : void 0,
            }),
            A &&
              r.jsx('span', {
                className: 'sino-simple-form__autocomplete-spinner',
                'aria-hidden': 'true',
                children: r.jsxs('svg', {
                  width: '16',
                  height: '16',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    r.jsx('circle', {
                      cx: '12',
                      cy: '12',
                      r: '10',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeDasharray: '32',
                      strokeDashoffset: '32',
                      opacity: '0.3',
                    }),
                    r.jsx('circle', {
                      cx: '12',
                      cy: '12',
                      r: '10',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeDasharray: '32',
                      strokeDashoffset: '24',
                      children: r.jsx('animateTransform', {
                        attributeName: 'transform',
                        type: 'rotate',
                        from: '0 12 12',
                        to: '360 12 12',
                        dur: '0.8s',
                        repeatCount: 'indefinite',
                      }),
                    }),
                  ],
                }),
              }),
          ],
        }),
        P &&
          (X.length > 0 || V) &&
          r.jsx('ul', {
            ref: Ge,
            id: `${l}-listbox`,
            className: 'sino-simple-form__autocomplete-list',
            role: 'listbox',
            children: V
              ? r.jsxs(r.Fragment, {
                  children: [
                    Array.from({ length: 3 }).map((f, S) =>
                      r.jsxs(
                        'li',
                        {
                          className: 'sino-simple-form__autocomplete-skeleton',
                          role: 'option',
                          children: [
                            Ae &&
                              r.jsx('span', {
                                className: 'sino-simple-form__autocomplete-skeleton-flag',
                              }),
                            r.jsx('span', {
                              className: 'sino-simple-form__autocomplete-skeleton-text',
                            }),
                          ],
                        },
                        `skeleton-${S}`
                      )
                    ),
                    r.jsx('li', {
                      className: 'sino-simple-form__autocomplete-loading',
                      children: r.jsx('span', {
                        className: 'sino-simple-form__autocomplete-loading-text',
                        children: Ae ? 'Loading countries...' : 'Loading suggestions...',
                      }),
                    }),
                  ],
                })
              : X.map((f, S) =>
                  r.jsxs(
                    'li',
                    {
                      id: `${l}-option-${S}`,
                      className: `sino-simple-form__autocomplete-option${me === S ? ' sino-simple-form__autocomplete-option--highlighted' : ''}`,
                      role: 'option',
                      'aria-selected': me === S,
                      onClick: () => Re(f),
                      onMouseEnter: () => pe(S),
                      onKeyDown: (G) => {
                        (G.key === 'Enter' || G.key === ' ') && (G.preventDefault(), Re(f));
                      },
                      tabIndex: -1,
                      children: [
                        f.flag &&
                          r.jsx('span', {
                            className: 'sino-simple-form__autocomplete-flag',
                            'aria-hidden': 'true',
                            children: f.flag,
                          }),
                        r.jsx('span', {
                          className: 'sino-simple-form__autocomplete-label',
                          children: f.label,
                        }),
                      ],
                    },
                    f.value
                  )
                ),
          }),
      ],
    });
  },
  zp = () => Qt.map((l) => ({ value: l.code, label: l.name, flag: l.flag })),
  Ip = (l) => (Op[l] || []).map((a) => ({ value: a, label: a }));
function ls(l) {
  if (l == null || l === '') return null;
  if (typeof l == 'number') return isNaN(l) || l <= 0 ? null : l;
  const c = String(l).trim().replace(/[\s,]/g, '');
  if (c === '') return null;
  const a = parseFloat(c);
  return isNaN(a) || a <= 0 ? null : a;
}
function Jo(l, c) {
  return l / 100;
}
function Wp(l, c, a) {
  if (!l || !a || a <= 0) return { value: null, formatted: '' };
  const w = ls(l.length),
    N = ls(l.width),
    C = ls(l.height);
  if (!w || !N || !C) return { value: null, formatted: '' };
  const j = Jo(w),
    p = Jo(N),
    h = Jo(C),
    K = j * p * h * a,
    O = K.toFixed(3).replace(/\.?0+$/, '');
  return { value: K, formatted: `${O} CBM` };
}
function Ap(l, c, a) {
  if (!l || !a || a <= 0) return { value: null, formatted: '' };
  const w = ls(l);
  if (!w) return { value: null, formatted: '' };
  const N = w * a,
    C = c,
    j = N.toLocaleString('en-US', { maximumFractionDigits: 2, useGrouping: !0 });
  return { value: N, formatted: `${j} ${C}` };
}
function Vp(l) {
  const c = Wp(l.dimensions, 'CM', l.numberOfUnits),
    a = Ap(l.weightPerUnit, 'KG', l.numberOfUnits);
  return { totalVolume: c, totalWeightFromUnits: a };
}
const Bp = ({ formData: l, setFormData: c, t: a }) => {
    const w = W.useMemo(() => Vp(l), [l.dimensions, l.numberOfUnits, l.weightPerUnit]),
      N = w.totalVolume.value !== null || w.totalWeightFromUnits.value !== null,
      C = W.useRef(!1);
    return (
      W.useEffect(() => {
        if (w.totalWeightFromUnits.value !== null && !C.current) {
          const j = l.totalWeight,
            p = Math.round(w.totalWeightFromUnits.value).toString();
          if (!j || j.trim() === '') {
            C.current = !0;
            const h = setTimeout(() => {
              (c((z) =>
                !z.totalWeight || z.totalWeight.trim() === '' ? { ...z, totalWeight: p } : z
              ),
                (C.current = !1));
            }, 1e3);
            return () => {
              (clearTimeout(h), (C.current = !1));
            };
          }
        }
      }, [w.totalWeightFromUnits.value, l.totalWeight, c]),
      N
        ? r.jsxs('div', {
            className: 'sino-simple-form__cargo-calculations',
            children: [
              r.jsx('div', {
                className: 'sino-simple-form__cargo-calculations-header',
                children: r.jsx('span', {
                  className: 'sino-simple-form__cargo-calculations-title',
                  children: a('cargoCalculationsTitle', 'Calculated values'),
                }),
              }),
              r.jsxs('div', {
                className: 'sino-simple-form__cargo-calculations-items',
                children: [
                  w.totalVolume.value !== null &&
                    r.jsxs('div', {
                      className: 'sino-simple-form__cargo-calculation-item',
                      children: [
                        r.jsxs('span', {
                          className: 'sino-simple-form__cargo-calculation-label',
                          children: [a('cargoCalculatedVolume', 'Total volume'), ':'],
                        }),
                        r.jsx('span', {
                          className: 'sino-simple-form__cargo-calculation-value',
                          children: w.totalVolume.formatted,
                        }),
                      ],
                    }),
                  w.totalWeightFromUnits.value !== null &&
                    r.jsxs('div', {
                      className: 'sino-simple-form__cargo-calculation-item',
                      children: [
                        r.jsxs('span', {
                          className: 'sino-simple-form__cargo-calculation-label',
                          children: [a('cargoCalculatedWeight', 'Total weight (from units)'), ':'],
                        }),
                        r.jsx('span', {
                          className: 'sino-simple-form__cargo-calculation-value',
                          children: w.totalWeightFromUnits.formatted,
                        }),
                      ],
                    }),
                ],
              }),
              r.jsx('p', {
                className: 'sino-simple-form__cargo-calculations-hint',
                children: a(
                  'cargoCalculationsHint',
                  'These values are calculated automatically and can help you verify your inputs.'
                ),
              }),
            ],
          })
        : null
    );
  },
  Zu = 'sinoSimpleFormSocialProofWidgetCollapsed',
  Up = ({ t: l }) => {
    const [c, a] = W.useState(!1),
      [w, N] = W.useState(!1);
    W.useEffect(() => {
      if (typeof window > 'u') return;
      try {
        window.localStorage.getItem(Zu) === 'true' && N(!0);
      } catch {}
      const j = setTimeout(() => {
        a(!0);
      }, 500);
      return () => clearTimeout(j);
    }, []);
    const C = () => {
      const j = !w;
      if ((N(j), typeof window < 'u'))
        try {
          window.localStorage.setItem(Zu, String(j));
        } catch {}
    };
    return r.jsx('div', {
      className: `sino-simple-form__social-proof-widget${c ? ' sino-simple-form__social-proof-widget--visible' : ''}${w ? ' sino-simple-form__social-proof-widget--collapsed' : ''}`,
      role: 'complementary',
      'aria-label': l('socialProofAriaLabel', 'Social proof and trust indicators'),
      children: r.jsxs('div', {
        className: 'sino-simple-form__social-proof-widget-content',
        children: [
          r.jsxs('div', {
            className: 'sino-simple-form__social-proof-widget-header',
            children: [
              r.jsx('span', {
                className: 'sino-simple-form__social-proof-widget-title',
                children: l('socialProofTitle', 'Trusted by'),
              }),
              r.jsx('button', {
                type: 'button',
                className: 'sino-simple-form__social-proof-widget-toggle',
                onClick: C,
                'aria-label': w
                  ? l('expandWidget', 'Expand widget')
                  : l('collapseWidget', 'Collapse widget'),
                title: w
                  ? l('expandWidget', 'Expand widget')
                  : l('collapseWidget', 'Collapse widget'),
                'aria-expanded': !w,
                children: r.jsx('svg', {
                  width: '16',
                  height: '16',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: `sino-simple-form__social-proof-widget-toggle-icon${w ? ' sino-simple-form__social-proof-widget-toggle-icon--collapsed' : ''}`,
                  children: r.jsx('polyline', {
                    points: '18 15 12 9 6 15',
                    stroke: 'currentColor',
                    strokeWidth: '2',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }),
                }),
              }),
            ],
          }),
          !w &&
            r.jsxs('div', {
              className: 'sino-simple-form__social-proof-widget-items',
              children: [
                r.jsxs('div', {
                  className: 'sino-simple-form__social-proof-widget-item',
                  children: [
                    r.jsx('div', {
                      className: 'sino-simple-form__social-proof-widget-icon',
                      children: r.jsxs('svg', {
                        width: '20',
                        height: '20',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: [
                          r.jsx('path', {
                            d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                          r.jsx('circle', {
                            cx: '9',
                            cy: '7',
                            r: '4',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                          r.jsx('path', {
                            d: 'M23 21v-2a4 4 0 0 0-3-3.87',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                          r.jsx('path', {
                            d: 'M16 3.13a4 4 0 0 1 0 7.75',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                        ],
                      }),
                    }),
                    r.jsxs('div', {
                      className: 'sino-simple-form__social-proof-widget-text',
                      children: [
                        r.jsx('strong', {
                          className: 'sino-simple-form__social-proof-widget-value',
                          children: '55,000+',
                        }),
                        r.jsx('span', {
                          className: 'sino-simple-form__social-proof-widget-label',
                          children: l('socialProofCustomers', 'Satisfied Customers'),
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__social-proof-widget-item',
                  children: [
                    r.jsx('div', {
                      className: 'sino-simple-form__social-proof-widget-icon',
                      children: r.jsx('svg', {
                        width: '20',
                        height: '20',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: r.jsx('polygon', {
                          points:
                            '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2',
                          stroke: 'currentColor',
                          strokeWidth: '2',
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                          fill: 'currentColor',
                        }),
                      }),
                    }),
                    r.jsxs('div', {
                      className: 'sino-simple-form__social-proof-widget-text',
                      children: [
                        r.jsx('strong', {
                          className: 'sino-simple-form__social-proof-widget-value',
                          children: '4.8/5',
                        }),
                        r.jsx('span', {
                          className: 'sino-simple-form__social-proof-widget-label',
                          children: l('socialProofRating', 'Customer Satisfaction'),
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__social-proof-widget-item',
                  children: [
                    r.jsx('div', {
                      className: 'sino-simple-form__social-proof-widget-icon',
                      children: r.jsxs('svg', {
                        width: '20',
                        height: '20',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: [
                          r.jsx('circle', {
                            cx: '12',
                            cy: '12',
                            r: '10',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                          r.jsx('polyline', {
                            points: '12 6 12 12 16 14',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                        ],
                      }),
                    }),
                    r.jsxs('div', {
                      className: 'sino-simple-form__social-proof-widget-text',
                      children: [
                        r.jsx('strong', {
                          className: 'sino-simple-form__social-proof-widget-value',
                          children: '24h',
                        }),
                        r.jsx('span', {
                          className: 'sino-simple-form__social-proof-widget-label',
                          children: l('socialProofResponse', 'Response Time'),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
    });
  },
  $p = ({
    formData: l,
    setFormData: c,
    t: a,
    stepLabel: w,
    showSourcingAdvanced: N,
    setShowSourcingAdvanced: C,
    isQuickQuote: j = !1,
  }) =>
    r.jsx(r.Fragment, {
      children:
        l.servicesRequested.sourcing &&
        r.jsxs('section', {
          className: 'sino-simple-form__section sino-simple-form__section--service-sourcing',
          children: [
            r.jsxs('h2', {
              className: 'sino-simple-form__section-title',
              children: [
                r.jsx('span', {
                  className: 'sino-simple-form__section-step',
                  children: w ?? 'Step 1',
                }),
                r.jsx('span', { children: a('simpleSourcingTitle', 'Product sourcing') }),
              ],
            }),
            r.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--rows',
              children: [
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'sourcingProductDescription',
                      children: [
                        a('sourcingProductDescription', 'What product are you looking for?'),
                        r.jsx('span', {
                          className: 'sino-simple-form__required',
                          'aria-label': 'required',
                          children: '*',
                        }),
                      ],
                    }),
                    r.jsx('textarea', {
                      id: 'sourcingProductDescription',
                      className: 'sino-simple-form__input sino-simple-form__input--textarea',
                      name: 'sourcingProductDescription',
                      value: l.sourcing.productDescription,
                      onChange: (p) =>
                        c((h) => ({
                          ...h,
                          sourcing: { ...h.sourcing, productDescription: p.target.value },
                        })),
                      placeholder: a(
                        'sourcingProductDescriptionPlaceholder',
                        'Briefly describe the product, specs, or categories you need.'
                      ),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'sourcingReferenceLink',
                      children: [
                        a('sourcingReferenceLink', 'Reference link'),
                        r.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: a('ifAny', 'if any'),
                        }),
                      ],
                    }),
                    r.jsx('input', {
                      id: 'sourcingReferenceLink',
                      className: 'sino-simple-form__input',
                      type: 'url',
                      value: l.sourcing.referenceLink,
                      onChange: (p) =>
                        c((h) => ({
                          ...h,
                          sourcing: { ...h.sourcing, referenceLink: p.target.value },
                        })),
                      placeholder: a(
                        'sourcingReferenceLinkPlaceholder',
                        'Alibaba, 1688, Taobao, or any reference URL.'
                      ),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'sourcingTargetPrice',
                      children: a('sourcingTargetPrice', 'Target price per unit'),
                    }),
                    r.jsxs('div', {
                      className: 'sino-simple-form__fields sino-simple-form__fields--inline',
                      children: [
                        r.jsx('input', {
                          id: 'sourcingTargetPrice',
                          className: 'sino-simple-form__input',
                          type: 'number',
                          min: 0,
                          value: l.sourcing.targetPrice ?? '',
                          onChange: (p) =>
                            c((h) => ({
                              ...h,
                              sourcing: {
                                ...h.sourcing,
                                targetPrice: p.target.value ? Number(p.target.value) : null,
                              },
                            })),
                          placeholder: a('sourcingTargetPricePlaceholder', 'e.g. 5.50'),
                        }),
                        r.jsx('input', {
                          className: 'sino-simple-form__input',
                          type: 'text',
                          value: l.sourcing.targetCurrency,
                          onChange: (p) =>
                            c((h) => ({
                              ...h,
                              sourcing: { ...h.sourcing, targetCurrency: p.target.value },
                            })),
                          placeholder: a('sourcingTargetCurrencyPlaceholder', 'USD, EUR…'),
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'sourcingMoq',
                      children: a('sourcingMoq', 'Expected order quantity (MOQ)'),
                    }),
                    r.jsx('input', {
                      id: 'sourcingMoq',
                      className: 'sino-simple-form__input',
                      type: 'number',
                      min: 0,
                      value: l.sourcing.moq ?? '',
                      onChange: (p) =>
                        c((h) => ({
                          ...h,
                          sourcing: {
                            ...h.sourcing,
                            moq: p.target.value ? Number(p.target.value) : null,
                          },
                        })),
                      placeholder: a('sourcingMoqPlaceholder', 'Approximate number of units'),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'sourcingPlatform',
                      children: a('sourcingPlatform', 'Which market/platform is this for?'),
                    }),
                    r.jsx('input', {
                      id: 'sourcingPlatform',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: l.sourcing.platform,
                      onChange: (p) =>
                        c((h) => ({ ...h, sourcing: { ...h.sourcing, platform: p.target.value } })),
                      placeholder: a(
                        'sourcingPlatformPlaceholder',
                        'Amazon FBA, Shopify store, wholesale, etc.'
                      ),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsx('label', {
                      className: 'sino-simple-form__label',
                      children: a('sourcingHasSupplier', 'Do you already have a supplier?'),
                    }),
                    r.jsx('div', {
                      className: 'sino-simple-form__chips',
                      children: [
                        { value: !0, label: a('sourcingHasSupplierYes', 'Yes') },
                        { value: !1, label: a('sourcingHasSupplierNo', 'No') },
                      ].map((p) =>
                        r.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.sourcing.hasSupplier === p.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              c((h) => ({
                                ...h,
                                sourcing: {
                                  ...h.sourcing,
                                  hasSupplier: h.sourcing.hasSupplier === p.value ? null : p.value,
                                },
                              })),
                            children: p.label,
                          },
                          String(p.value)
                        )
                      ),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'sourcingTargetMarkets',
                      children: a('sourcingTargetMarkets', 'Which markets are you selling to?'),
                    }),
                    r.jsx('input', {
                      id: 'sourcingTargetMarkets',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: l.sourcing.targetMarkets,
                      onChange: (p) =>
                        c((h) => ({
                          ...h,
                          sourcing: { ...h.sourcing, targetMarkets: p.target.value },
                        })),
                      placeholder: a(
                        'sourcingTargetMarketsPlaceholder',
                        'e.g. EU, UK, US, Middle East…'
                      ),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'sourcingRequiredCertifications',
                      children: [
                        a('sourcingRequiredCertifications', 'Required certifications'),
                        r.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: a('ifAny', 'if any'),
                        }),
                      ],
                    }),
                    r.jsx('input', {
                      id: 'sourcingRequiredCertifications',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: l.sourcing.requiredCertifications,
                      onChange: (p) =>
                        c((h) => ({
                          ...h,
                          sourcing: { ...h.sourcing, requiredCertifications: p.target.value },
                        })),
                      placeholder: a(
                        'sourcingRequiredCertificationsPlaceholder',
                        'e.g. CE, RoHS, FDA...'
                      ),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: `sino-simple-form__subsection${N ? ' sino-simple-form__subsection--open' : ''}`,
                  children: [
                    r.jsxs('button', {
                      type: 'button',
                      className: 'sino-simple-form__subsection-toggle',
                      onClick: () => C((p) => !p),
                      children: [
                        r.jsxs('span', {
                          className: 'sino-simple-form__subsection-label',
                          children: [
                            a('sourcingAdvancedTitle', 'Advanced sourcing details (optional)'),
                            r.jsx('small', {
                              children: a(
                                'sourcingAdvancedSubtitle',
                                'Timeline, quality standards, packaging requirements.'
                              ),
                            }),
                          ],
                        }),
                        r.jsx('span', {
                          className: `sino-simple-form__subsection-chevron${N ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                          children: '▾',
                        }),
                      ],
                    }),
                    N &&
                      r.jsxs('div', {
                        className: 'sino-simple-form__fields sino-simple-form__fields--rows',
                        children: [
                          r.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              r.jsx('label', {
                                className: 'sino-simple-form__label',
                                htmlFor: 'sourcingTimeline',
                                children: a('sourcingTimeline', 'Timeline / urgency'),
                              }),
                              r.jsx('input', {
                                id: 'sourcingTimeline',
                                className: 'sino-simple-form__input',
                                type: 'text',
                                value: l.sourcing.timeline || '',
                                onChange: (p) =>
                                  c((h) => ({
                                    ...h,
                                    sourcing: { ...h.sourcing, timeline: p.target.value },
                                  })),
                                placeholder: a(
                                  'sourcingTimelinePlaceholder',
                                  'e.g. Need samples within 2 weeks, production start in 1 month…'
                                ),
                              }),
                            ],
                          }),
                          r.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              r.jsxs('label', {
                                className: 'sino-simple-form__label',
                                htmlFor: 'sourcingQualityStandards',
                                children: [
                                  a('sourcingQualityStandards', 'Quality standards'),
                                  r.jsx('span', {
                                    className: 'sino-simple-form__label-hint',
                                    children: a('ifAny', 'if any'),
                                  }),
                                ],
                              }),
                              r.jsx('input', {
                                id: 'sourcingQualityStandards',
                                className: 'sino-simple-form__input',
                                type: 'text',
                                value: l.sourcing.qualityStandards || '',
                                onChange: (p) =>
                                  c((h) => ({
                                    ...h,
                                    sourcing: { ...h.sourcing, qualityStandards: p.target.value },
                                  })),
                                placeholder: a(
                                  'sourcingQualityStandardsPlaceholder',
                                  'e.g. ISO 9001, specific quality grades…'
                                ),
                              }),
                            ],
                          }),
                          r.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              r.jsxs('label', {
                                className: 'sino-simple-form__label',
                                htmlFor: 'sourcingPackagingRequirements',
                                children: [
                                  a('sourcingPackagingRequirements', 'Packaging requirements'),
                                  r.jsx('span', {
                                    className: 'sino-simple-form__label-hint',
                                    children: a('ifAny', 'if any'),
                                  }),
                                ],
                              }),
                              r.jsx('input', {
                                id: 'sourcingPackagingRequirements',
                                className: 'sino-simple-form__input',
                                type: 'text',
                                value: l.sourcing.packagingRequirements || '',
                                onChange: (p) =>
                                  c((h) => ({
                                    ...h,
                                    sourcing: {
                                      ...h.sourcing,
                                      packagingRequirements: p.target.value,
                                    },
                                  })),
                                placeholder: a(
                                  'sourcingPackagingRequirementsPlaceholder',
                                  'e.g. Retail-ready, eco-friendly materials…'
                                ),
                              }),
                            ],
                          }),
                          r.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              r.jsx('label', {
                                className: 'sino-simple-form__label',
                                htmlFor: 'sourcingNotes',
                                children: a('sourcingAdvancedNotes', 'Any other details?'),
                              }),
                              r.jsx('textarea', {
                                id: 'sourcingNotes',
                                className:
                                  'sino-simple-form__input sino-simple-form__input--textarea',
                                value: l.sourcing.notes || '',
                                onChange: (p) =>
                                  c((h) => ({
                                    ...h,
                                    sourcing: { ...h.sourcing, notes: p.target.value },
                                  })),
                                placeholder: a(
                                  'sourcingAdvancedNotesPlaceholder',
                                  'Custom labeling, branding, sample requirements, factory audits…'
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
    }),
  qp = ({
    formData: l,
    setFormData: c,
    t: a,
    showWarehousingAdvanced: w,
    setShowWarehousingAdvanced: N,
    stepLabel: C,
    isQuickQuote: j = !1,
  }) =>
    l.servicesRequested.warehousing
      ? r.jsxs('section', {
          className: 'sino-simple-form__section sino-simple-form__section--service-warehousing',
          children: [
            r.jsxs('h2', {
              className: 'sino-simple-form__section-title',
              children: [
                r.jsx('span', {
                  className: 'sino-simple-form__section-step',
                  children: C ?? 'Service',
                }),
                r.jsx('span', {
                  children: a('warehousingTitle', 'Warehousing & consolidation in China'),
                }),
              ],
            }),
            r.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--rows',
              children: [
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsxs('label', {
                      className: 'sino-simple-form__label',
                      children: [
                        a('warehousingDuration', 'How long do you plan to store goods in China?'),
                        r.jsx('span', {
                          className: 'sino-simple-form__required',
                          'aria-label': 'required',
                          children: '*',
                        }),
                      ],
                    }),
                    r.jsx('div', {
                      className: 'sino-simple-form__chips',
                      children: [
                        {
                          value: 'lt_1_month',
                          label: a('warehousingDurationLt1', 'Less than 1 month'),
                        },
                        {
                          value: '1_3_months',
                          label: a('warehousingDuration1to3', 'Between 1 and 3 months'),
                        },
                        {
                          value: 'gt_3_months',
                          label: a('warehousingDurationGt3', 'More than 3 months'),
                        },
                      ].map((p) =>
                        r.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.warehousing.duration === p.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              c((h) => ({
                                ...h,
                                warehousing: {
                                  ...h.warehousing,
                                  duration: h.warehousing.duration === p.value ? '' : p.value,
                                },
                              })),
                            children: p.label,
                          },
                          p.value
                        )
                      ),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'warehousingSkuCount',
                      children: a('warehousingSkuCount', 'Approximate number of SKUs'),
                    }),
                    r.jsx('input', {
                      id: 'warehousingSkuCount',
                      className: 'sino-simple-form__input',
                      type: 'number',
                      min: 0,
                      value: l.warehousing.skuCount ?? '',
                      onChange: (p) =>
                        c((h) => ({
                          ...h,
                          warehousing: {
                            ...h.warehousing,
                            skuCount: p.target.value ? Number(p.target.value) : null,
                          },
                        })),
                      placeholder: a('warehousingSkuCountPlaceholder', 'e.g. 10–50'),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsx('label', {
                      className: 'sino-simple-form__label',
                      children: a(
                        'warehousingConsolidation',
                        'Do you need consolidation from multiple suppliers?'
                      ),
                    }),
                    r.jsx('div', {
                      className: 'sino-simple-form__chips',
                      children: [
                        { value: !0, label: a('warehousingConsolidationYes', 'Yes') },
                        { value: !1, label: a('warehousingConsolidationNo', 'No') },
                      ].map((p) =>
                        r.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.warehousing.consolidation === p.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              c((h) => ({
                                ...h,
                                warehousing: {
                                  ...h.warehousing,
                                  consolidation:
                                    h.warehousing.consolidation === p.value ? null : p.value,
                                },
                              })),
                            children: p.label,
                          },
                          String(p.value)
                        )
                      ),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: `sino-simple-form__subsection${w ? ' sino-simple-form__subsection--open' : ''}`,
                  children: [
                    r.jsxs('button', {
                      type: 'button',
                      className: 'sino-simple-form__subsection-toggle',
                      onClick: () => N((p) => !p),
                      children: [
                        r.jsxs('span', {
                          className: 'sino-simple-form__subsection-label',
                          children: [
                            a(
                              'warehousingAdvancedTitle',
                              'Advanced warehousing preferences (optional)'
                            ),
                            r.jsx('small', {
                              children: a(
                                'warehousingAdvancedSubtitle',
                                'Extra services and special requirements.'
                              ),
                            }),
                          ],
                        }),
                        r.jsx('span', {
                          className: `sino-simple-form__subsection-chevron${w ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                          children: '▾',
                        }),
                      ],
                    }),
                    w &&
                      r.jsxs('div', {
                        className: 'sino-simple-form__fields sino-simple-form__fields--rows',
                        children: [
                          r.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              r.jsxs('label', {
                                className: 'sino-simple-form__label',
                                children: [
                                  a('warehousingExtraServices', 'Extra services'),
                                  r.jsx('span', {
                                    className: 'sino-simple-form__label-hint',
                                    children: a('ifAny', 'if any'),
                                  }),
                                ],
                              }),
                              r.jsx('div', {
                                className: 'sino-simple-form__chips sino-simple-form__chips--wrap',
                                children: [
                                  { value: 'Repackage', label: 'Repackage' },
                                  { value: 'Shipment Tracking', label: 'Shipment Tracking' },
                                  { value: 'Inventory Management', label: 'Inventory Management' },
                                  { value: 'Quality Control', label: 'Quality Control' },
                                  { value: 'Returns Handling', label: 'Returns Handling' },
                                  { value: 'Product Photography', label: 'Product Photography' },
                                  {
                                    value: 'Product Listing Optimization',
                                    label: 'Product Listing Optimization',
                                  },
                                  {
                                    value: 'Fulfillment by Amazon (FBA) Preparation',
                                    label: 'FBA Preparation',
                                  },
                                  { value: 'Other', label: 'Other' },
                                ].map((p) => {
                                  const h = l.warehousing.extraServices.includes(p.value);
                                  return r.jsx(
                                    'button',
                                    {
                                      type: 'button',
                                      className: `sino-simple-chip${h ? ' sino-simple-chip--active' : ''}`,
                                      onClick: () =>
                                        c((z) => {
                                          const K = z.warehousing.extraServices,
                                            O = h
                                              ? K.filter((b) => b !== p.value)
                                              : [...K, p.value];
                                          return {
                                            ...z,
                                            warehousing: { ...z.warehousing, extraServices: O },
                                          };
                                        }),
                                      children: p.label,
                                    },
                                    p.value
                                  );
                                }),
                              }),
                            ],
                          }),
                          r.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              r.jsx('label', {
                                className: 'sino-simple-form__label',
                                htmlFor: 'warehousingNotes',
                                children: a('warehousingNotes', 'Anything else we should know?'),
                              }),
                              r.jsx('textarea', {
                                id: 'warehousingNotes',
                                className:
                                  'sino-simple-form__input sino-simple-form__input--textarea',
                                value: l.warehousing.notes,
                                onChange: (p) =>
                                  c((h) => ({
                                    ...h,
                                    warehousing: { ...h.warehousing, notes: p.target.value },
                                  })),
                                placeholder: a(
                                  'warehousingNotesPlaceholder',
                                  'Special handling, temperature control, rotation rules…'
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        })
      : null,
  Dp = ({
    formData: l,
    setFormData: c,
    t: a,
    showDropshippingAdvanced: w,
    setShowDropshippingAdvanced: N,
    stepLabel: C,
    isQuickQuote: j = !1,
  }) =>
    l.servicesRequested.dropshipping
      ? r.jsxs('section', {
          className: 'sino-simple-form__section sino-simple-form__section--service-dropshipping',
          children: [
            r.jsxs('h2', {
              className: 'sino-simple-form__section-title',
              children: [
                r.jsx('span', {
                  className: 'sino-simple-form__section-step',
                  children: C ?? 'Service',
                }),
                r.jsx('span', {
                  children: a('dropshippingTitle', 'Dropshipping & fulfillment from China'),
                }),
              ],
            }),
            r.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--rows',
              children: [
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'dropshippingProducts',
                      children: [
                        a('dropshippingProducts', 'What type of products do you plan to ship?'),
                        r.jsx('span', {
                          className: 'sino-simple-form__required',
                          'aria-label': 'required',
                          children: '*',
                        }),
                      ],
                    }),
                    r.jsx('textarea', {
                      id: 'dropshippingProducts',
                      className: 'sino-simple-form__input sino-simple-form__input--textarea',
                      value: l.dropshipping.products,
                      onChange: (p) =>
                        c((h) => ({
                          ...h,
                          dropshipping: { ...h.dropshipping, products: p.target.value },
                        })),
                      placeholder: a(
                        'dropshippingProductsPlaceholder',
                        'Main categories, product types, or existing catalog link.'
                      ),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'dropshippingModel',
                      children: a('dropshippingModel', 'What is your business model?'),
                    }),
                    r.jsx('input', {
                      id: 'dropshippingModel',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: l.dropshipping.model,
                      onChange: (p) =>
                        c((h) => ({
                          ...h,
                          dropshipping: { ...h.dropshipping, model: p.target.value },
                        })),
                      placeholder: a(
                        'dropshippingModelPlaceholder',
                        'Shopify store, Amazon FBA, marketplace, D2C…'
                      ),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'dropshippingCustomerCountries',
                      children: [
                        a(
                          'dropshippingCustomerCountries',
                          'Where are your final customers located?'
                        ),
                        r.jsx('span', {
                          className: 'sino-simple-form__required',
                          'aria-label': 'required',
                          children: '*',
                        }),
                      ],
                    }),
                    r.jsx('input', {
                      id: 'dropshippingCustomerCountries',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: l.dropshipping.customerCountries,
                      onChange: (p) =>
                        c((h) => ({
                          ...h,
                          dropshipping: { ...h.dropshipping, customerCountries: p.target.value },
                        })),
                      placeholder: a(
                        'dropshippingCustomerCountriesPlaceholder',
                        'Countries or regions (e.g. US, EU, UK).'
                      ),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'dropshippingDailyOrders',
                      children: a('dropshippingDailyOrders', 'Average or expected daily orders'),
                    }),
                    r.jsx('input', {
                      id: 'dropshippingDailyOrders',
                      className: 'sino-simple-form__input',
                      type: 'number',
                      min: 0,
                      value: l.dropshipping.dailyOrders ?? '',
                      onChange: (p) =>
                        c((h) => ({
                          ...h,
                          dropshipping: {
                            ...h.dropshipping,
                            dailyOrders: p.target.value ? Number(p.target.value) : null,
                          },
                        })),
                      placeholder: a('dropshippingDailyOrdersPlaceholder', 'e.g. 20'),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsx('label', {
                      className: 'sino-simple-form__label',
                      children: a(
                        'dropshippingHasCatalog',
                        'Do you already have a main product or catalog?'
                      ),
                    }),
                    r.jsx('div', {
                      className: 'sino-simple-form__chips',
                      children: [
                        { value: !0, label: a('dropshippingHasCatalogYes', 'Yes') },
                        { value: !1, label: a('dropshippingHasCatalogNo', 'No') },
                      ].map((p) =>
                        r.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.dropshipping.hasCatalog === p.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              c((h) => ({
                                ...h,
                                dropshipping: {
                                  ...h.dropshipping,
                                  hasCatalog:
                                    h.dropshipping.hasCatalog === p.value ? null : p.value,
                                },
                              })),
                            children: p.label,
                          },
                          String(p.value)
                        )
                      ),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: `sino-simple-form__subsection${w ? ' sino-simple-form__subsection--open' : ''}`,
                  children: [
                    r.jsxs('button', {
                      type: 'button',
                      className: 'sino-simple-form__subsection-toggle',
                      onClick: () => N((p) => !p),
                      children: [
                        r.jsxs('span', {
                          className: 'sino-simple-form__subsection-label',
                          children: [
                            a(
                              'dropshippingAdvancedTitle',
                              'Advanced dropshipping details (optional)'
                            ),
                            r.jsx('small', {
                              children: a(
                                'dropshippingAdvancedSubtitle',
                                'Branding needs and additional notes.'
                              ),
                            }),
                          ],
                        }),
                        r.jsx('span', {
                          className: `sino-simple-form__subsection-chevron${w ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                          children: '▾',
                        }),
                      ],
                    }),
                    w &&
                      r.jsxs('div', {
                        className: 'sino-simple-form__fields sino-simple-form__fields--rows',
                        children: [
                          r.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              r.jsx('label', {
                                className: 'sino-simple-form__label',
                                children: a(
                                  'dropshippingBrandingNeeded',
                                  'Do you need branded packaging or inserts?'
                                ),
                              }),
                              r.jsx('div', {
                                className: 'sino-simple-form__chips',
                                children: [
                                  { value: !0, label: a('dropshippingBrandingNeededYes', 'Yes') },
                                  { value: !1, label: a('dropshippingBrandingNeededNo', 'No') },
                                ].map((p) =>
                                  r.jsx(
                                    'button',
                                    {
                                      type: 'button',
                                      className: `sino-simple-chip${l.dropshipping.brandingNeeded === p.value ? ' sino-simple-chip--active' : ''}`,
                                      onClick: () =>
                                        c((h) => ({
                                          ...h,
                                          dropshipping: {
                                            ...h.dropshipping,
                                            brandingNeeded:
                                              h.dropshipping.brandingNeeded === p.value
                                                ? null
                                                : p.value,
                                          },
                                        })),
                                      children: p.label,
                                    },
                                    String(p.value)
                                  )
                                ),
                              }),
                            ],
                          }),
                          r.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              r.jsx('label', {
                                className: 'sino-simple-form__label',
                                htmlFor: 'dropshippingNotes',
                                children: a('dropshippingNotes', 'Anything else we should know?'),
                              }),
                              r.jsx('textarea', {
                                id: 'dropshippingNotes',
                                className:
                                  'sino-simple-form__input sino-simple-form__input--textarea',
                                value: l.dropshipping.notes,
                                onChange: (p) =>
                                  c((h) => ({
                                    ...h,
                                    dropshipping: { ...h.dropshipping, notes: p.target.value },
                                  })),
                                placeholder: a(
                                  'dropshippingNotesPlaceholder',
                                  'Catalog links, current 3PL setup, pain points…'
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        })
      : null,
  Hp = ({
    formData: l,
    setFormData: c,
    t: a,
    showQcAdvanced: w,
    setShowQcAdvanced: N,
    stepLabel: C,
    isQuickQuote: j = !1,
  }) =>
    l.servicesRequested.qc
      ? r.jsxs('section', {
          className: 'sino-simple-form__section sino-simple-form__section--service-qc',
          children: [
            r.jsxs('h2', {
              className: 'sino-simple-form__section-title',
              children: [
                r.jsx('span', {
                  className: 'sino-simple-form__section-step',
                  children: C ?? 'Service',
                }),
                r.jsx('span', { children: a('qcTitle', 'Quality control & inspections') }),
              ],
            }),
            r.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--rows',
              children: [
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsxs('label', {
                      className: 'sino-simple-form__label',
                      children: [
                        a('qcType', 'What type of inspection do you need?'),
                        r.jsx('span', {
                          className: 'sino-simple-form__required',
                          'aria-label': 'required',
                          children: '*',
                        }),
                      ],
                    }),
                    r.jsx('div', {
                      className: 'sino-simple-form__chips sino-simple-form__chips--wrap',
                      children: [
                        {
                          value: 'pre_production',
                          label: a('qcTypePreProduction', 'Pre-production'),
                        },
                        {
                          value: 'during_production',
                          label: a('qcTypeDuringProduction', 'During production'),
                        },
                        { value: 'pre_shipment', label: a('qcTypePreShipment', 'Pre-shipment') },
                        { value: 'factory_audit', label: a('qcTypeFactoryAudit', 'Factory audit') },
                      ].map((p) =>
                        r.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.qc.type === p.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              c((h) => ({
                                ...h,
                                qc: { ...h.qc, type: h.qc.type === p.value ? '' : p.value },
                              })),
                            children: p.label,
                          },
                          p.value
                        )
                      ),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsx('label', {
                      className: 'sino-simple-form__label',
                      children: a('qcProductionStage', 'At which stage is your production?'),
                    }),
                    r.jsx('div', {
                      className: 'sino-simple-form__chips',
                      children: [
                        { value: 'not_started', label: a('qcStageNotStarted', 'Not started') },
                        { value: 'in_progress', label: a('qcStageInProgress', 'In progress') },
                        { value: 'finished', label: a('qcStageFinished', 'Finished') },
                      ].map((p) =>
                        r.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.qc.productionStage === p.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              c((h) => ({
                                ...h,
                                qc: {
                                  ...h.qc,
                                  productionStage: h.qc.productionStage === p.value ? '' : p.value,
                                },
                              })),
                            children: p.label,
                          },
                          p.value
                        )
                      ),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'qcFactoryCity',
                      children: [
                        a('qcFactoryCity', 'Factory location (city in China)'),
                        r.jsx('span', {
                          className: 'sino-simple-form__required',
                          'aria-label': 'required',
                          children: '*',
                        }),
                      ],
                    }),
                    r.jsx('input', {
                      id: 'qcFactoryCity',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: l.qc.factoryCity,
                      onChange: (p) =>
                        c((h) => ({ ...h, qc: { ...h.qc, factoryCity: p.target.value } })),
                      placeholder: a('qcFactoryCityPlaceholder', 'e.g. Shenzhen, Ningbo, Yiwu…'),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'qcPreferredDate',
                      children: [
                        a('qcPreferredDate', 'Preferred inspection date'),
                        r.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: a('ifKnown', 'if known'),
                        }),
                      ],
                    }),
                    r.jsx('input', {
                      id: 'qcPreferredDate',
                      className: 'sino-simple-form__input',
                      type: 'date',
                      value: l.qc.preferredDate,
                      onChange: (p) =>
                        c((h) => ({ ...h, qc: { ...h.qc, preferredDate: p.target.value } })),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: `sino-simple-form__subsection${w ? ' sino-simple-form__subsection--open' : ''}`,
                  children: [
                    r.jsxs('button', {
                      type: 'button',
                      className: 'sino-simple-form__subsection-toggle',
                      onClick: () => N((p) => !p),
                      children: [
                        r.jsxs('span', {
                          className: 'sino-simple-form__subsection-label',
                          children: [
                            a('qcAdvancedTitle', 'Additional inspection details (optional)'),
                            r.jsx('small', {
                              children: a(
                                'qcAdvancedSubtitle',
                                'Specific checkpoints, batch sizes or constraints.'
                              ),
                            }),
                          ],
                        }),
                        r.jsx('span', {
                          className: `sino-simple-form__subsection-chevron${w ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                          children: '▾',
                        }),
                      ],
                    }),
                    w &&
                      r.jsx('div', {
                        className: 'sino-simple-form__fields sino-simple-form__fields--rows',
                        children: r.jsxs('div', {
                          className: 'sino-simple-form__field',
                          children: [
                            r.jsx('label', {
                              className: 'sino-simple-form__label',
                              htmlFor: 'qcNotes',
                              children: a('qcNotes', 'Anything else we should know?'),
                            }),
                            r.jsx('textarea', {
                              id: 'qcNotes',
                              className:
                                'sino-simple-form__input sino-simple-form__input--textarea',
                              value: l.qc.notes,
                              onChange: (p) =>
                                c((h) => ({ ...h, qc: { ...h.qc, notes: p.target.value } })),
                              placeholder: a(
                                'qcNotesPlaceholder',
                                'Product type, quantities, deadlines, specific checkpoints…'
                              ),
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
              ],
            }),
          ],
        })
      : null,
  Gp = ({
    formData: l,
    setFormData: c,
    t: a,
    showChinaVisitLogistics: w,
    setShowChinaVisitLogistics: N,
    stepLabel: C,
  }) => {
    if (!l.servicesRequested.chinaVisits) return null;
    const j = l.chinaVisit.visitType,
      p = (P) => {
        c((I) => {
          const me = I.chinaVisit.visitType,
            re = me.includes(P) ? me.filter((ue) => ue !== P) : [...me, P];
          return { ...I, chinaVisit: { ...I.chinaVisit, visitType: re } };
        });
      },
      h = j.includes('Canton Fair'),
      z = j.includes('Yiwu Market'),
      K = j.includes('Factory Visits'),
      O = j.includes('Other Trade Fair'),
      b = K || O,
      Z = j.length > 0,
      Y =
        h && !z && !K && !O
          ? 'Guangzhou'
          : z && !h && !K && !O
            ? 'Yiwu'
            : h && z && !K && !O
              ? 'Guangzhou, Yiwu'
              : '';
    return r.jsxs('section', {
      className: 'sino-simple-form__section sino-simple-form__section--service-chinaVisits',
      children: [
        r.jsxs('h2', {
          className: 'sino-simple-form__section-title',
          children: [
            r.jsx('span', {
              className: 'sino-simple-form__section-step',
              children: C ?? 'Service',
            }),
            r.jsx('span', { children: a('chinaVisitTitle', 'China visits & trade fairs') }),
          ],
        }),
        r.jsx('p', {
          className: 'sino-simple-form__hint',
          children: a(
            'chinaVisitHint',
            'Select all that apply. We can help you plan a multi-stop trip.'
          ),
        }),
        r.jsxs('div', {
          className: 'sino-simple-form__fields sino-simple-form__fields--rows',
          children: [
            r.jsxs('div', {
              className: 'sino-simple-form__field',
              children: [
                r.jsxs('label', {
                  className: 'sino-simple-form__label',
                  children: [
                    a('chinaVisitType', 'What would you like to visit?'),
                    r.jsx('span', {
                      className: 'sino-simple-form__required',
                      'aria-label': 'required',
                      children: '*',
                    }),
                  ],
                }),
                r.jsx('div', {
                  className: 'sino-simple-form__chips sino-simple-form__chips--wrap',
                  children: [
                    { value: 'Canton Fair', label: 'Canton Fair (Guangzhou)' },
                    { value: 'Yiwu Market', label: 'Yiwu Market' },
                    { value: 'Factory Visits', label: 'Factory Visits' },
                    { value: 'Other Trade Fair', label: 'Other Trade Fair' },
                  ].map((P) => {
                    const I = j.includes(P.value);
                    return r.jsx(
                      'button',
                      {
                        type: 'button',
                        className: `sino-simple-chip${I ? ' sino-simple-chip--active' : ''}`,
                        onClick: () => p(P.value),
                        'aria-pressed': I ? 'true' : 'false',
                        children: P.label,
                      },
                      P.value
                    );
                  }),
                }),
              ],
            }),
            h &&
              r.jsxs('div', {
                className: 'sino-simple-form__field',
                children: [
                  r.jsx('label', {
                    className: 'sino-simple-form__label',
                    children: a('chinaVisitCantonPhase', 'Which phase?'),
                  }),
                  r.jsx('div', {
                    className: 'sino-simple-form__chips sino-simple-form__chips--wrap',
                    children: [
                      {
                        value: 'Phase 1',
                        label: 'Phase 1',
                        tooltip: 'Electronics, Machinery, Vehicles, Building Materials',
                      },
                      {
                        value: 'Phase 2',
                        label: 'Phase 2',
                        tooltip: 'Consumer Goods, Gifts, Home Decor',
                      },
                      {
                        value: 'Phase 3',
                        label: 'Phase 3',
                        tooltip: 'Textiles, Shoes, Office Supplies, Food',
                      },
                    ].map((P) =>
                      r.jsx(
                        'button',
                        {
                          type: 'button',
                          className: `sino-simple-chip${l.chinaVisit.cantonPhase === P.value ? ' sino-simple-chip--active' : ''}`,
                          'data-tooltip': P.tooltip,
                          onClick: () =>
                            c((I) => ({
                              ...I,
                              chinaVisit: { ...I.chinaVisit, cantonPhase: P.value },
                            })),
                          children: P.label,
                        },
                        P.value
                      )
                    ),
                  }),
                  r.jsx('p', {
                    className: 'sino-simple-form__help',
                    children: a(
                      'cantonPhaseHelp',
                      'Held in April/May and October/November each year.'
                    ),
                  }),
                ],
              }),
            O &&
              r.jsxs('div', {
                className: 'sino-simple-form__field',
                children: [
                  r.jsxs('label', {
                    className: 'sino-simple-form__label',
                    htmlFor: 'chinaVisitFairName',
                    children: [
                      a('chinaVisitFairName', 'Which trade fair?'),
                      r.jsx('span', {
                        className: 'sino-simple-form__required',
                        'aria-label': 'required',
                        children: '*',
                      }),
                    ],
                  }),
                  r.jsx('input', {
                    id: 'chinaVisitFairName',
                    className: 'sino-simple-form__input',
                    type: 'text',
                    value: l.chinaVisit.fairName,
                    onChange: (P) =>
                      c((I) => ({
                        ...I,
                        chinaVisit: { ...I.chinaVisit, fairName: P.target.value },
                      })),
                    placeholder: 'e.g. CIFF Furniture Fair, China Beauty Expo…',
                  }),
                ],
              }),
            K &&
              r.jsxs('div', {
                className: 'sino-simple-form__field',
                children: [
                  r.jsx('label', {
                    className: 'sino-simple-form__label',
                    htmlFor: 'chinaVisitFactoryDescription',
                    children: a('chinaVisitFactoryDescription', 'What kind of factories?'),
                  }),
                  r.jsx('textarea', {
                    id: 'chinaVisitFactoryDescription',
                    className: 'sino-simple-form__input sino-simple-form__input--textarea',
                    value: l.chinaVisit.factoryDescription || '',
                    onChange: (P) =>
                      c((I) => ({
                        ...I,
                        chinaVisit: { ...I.chinaVisit, factoryDescription: P.target.value },
                      })),
                    placeholder: 'Product categories, specific suppliers, regions…',
                  }),
                ],
              }),
            b &&
              r.jsxs('div', {
                className: 'sino-simple-form__field',
                children: [
                  r.jsxs('label', {
                    className: 'sino-simple-form__label',
                    htmlFor: 'chinaVisitMainCity',
                    children: [
                      a('chinaVisitMainCity', 'Main city or region'),
                      r.jsx('span', {
                        className: 'sino-simple-form__required',
                        'aria-label': 'required',
                        children: '*',
                      }),
                    ],
                  }),
                  r.jsx('input', {
                    id: 'chinaVisitMainCity',
                    className: 'sino-simple-form__input',
                    type: 'text',
                    value: l.chinaVisit.mainCity,
                    onChange: (P) =>
                      c((I) => ({
                        ...I,
                        chinaVisit: { ...I.chinaVisit, mainCity: P.target.value },
                      })),
                    placeholder: 'Shenzhen, Dongguan, Shanghai…',
                  }),
                ],
              }),
            Y &&
              !b &&
              r.jsx('div', {
                className: 'sino-simple-form__field',
                children: r.jsxs('p', {
                  className: 'sino-simple-form__info',
                  children: [
                    '📍 ',
                    a('autoDetectedCity', 'Your trip will be based in'),
                    ': ',
                    r.jsx('strong', { children: Y }),
                  ],
                }),
              }),
            Z &&
              r.jsxs('div', {
                className: 'sino-simple-form__field',
                children: [
                  r.jsxs('label', {
                    className: 'sino-simple-form__label',
                    htmlFor: 'chinaVisitOtherCities',
                    children: [
                      K && !h && !z
                        ? a('chinaVisitFactoryCities', 'Cities/regions to visit')
                        : a('chinaVisitOtherCities', 'Other cities to visit'),
                      ' ',
                      !(K && !h && !z) &&
                        r.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: a('ifApplicable', 'if applicable'),
                        }),
                    ],
                  }),
                  r.jsx('input', {
                    id: 'chinaVisitOtherCities',
                    className: 'sino-simple-form__input',
                    type: 'text',
                    value: l.chinaVisit.otherCities,
                    onChange: (P) =>
                      c((I) => ({
                        ...I,
                        chinaVisit: { ...I.chinaVisit, otherCities: P.target.value },
                      })),
                    placeholder: 'Separated by commas',
                  }),
                ],
              }),
            r.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--inline',
              children: [
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'chinaVisitStartDate',
                      children: [
                        a('chinaVisitStartDate', 'Start date'),
                        r.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: a('ifKnown', 'if known'),
                        }),
                      ],
                    }),
                    r.jsx('input', {
                      id: 'chinaVisitStartDate',
                      className: 'sino-simple-form__input',
                      type: 'date',
                      value: l.chinaVisit.startDate,
                      onChange: (P) =>
                        c((I) => ({
                          ...I,
                          chinaVisit: { ...I.chinaVisit, startDate: P.target.value },
                        })),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'chinaVisitEndDate',
                      children: [
                        a('chinaVisitEndDate', 'End date'),
                        r.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: a('ifKnown', 'if known'),
                        }),
                      ],
                    }),
                    r.jsx('input', {
                      id: 'chinaVisitEndDate',
                      className: 'sino-simple-form__input',
                      type: 'date',
                      value: l.chinaVisit.endDate,
                      onChange: (P) =>
                        c((I) => ({
                          ...I,
                          chinaVisit: { ...I.chinaVisit, endDate: P.target.value },
                        })),
                    }),
                  ],
                }),
              ],
            }),
            r.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--inline',
              children: [
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'chinaVisitNumberOfDays',
                      children: a('chinaVisitNumberOfDays', 'Days on site'),
                    }),
                    r.jsx('input', {
                      id: 'chinaVisitNumberOfDays',
                      className: 'sino-simple-form__input',
                      type: 'number',
                      min: 1,
                      value: l.chinaVisit.numberOfDays ?? '',
                      onChange: (P) =>
                        c((I) => ({
                          ...I,
                          chinaVisit: {
                            ...I.chinaVisit,
                            numberOfDays: P.target.value ? Number(P.target.value) : null,
                          },
                        })),
                      placeholder: 'e.g. 5',
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'chinaVisitNumberOfTravelers',
                      children: a('chinaVisitNumberOfTravelers', 'Travelers'),
                    }),
                    r.jsx('input', {
                      id: 'chinaVisitNumberOfTravelers',
                      className: 'sino-simple-form__input',
                      type: 'number',
                      min: 1,
                      value: l.chinaVisit.numberOfTravelers ?? '',
                      onChange: (P) =>
                        c((I) => ({
                          ...I,
                          chinaVisit: {
                            ...I.chinaVisit,
                            numberOfTravelers: P.target.value ? Number(P.target.value) : null,
                          },
                        })),
                      placeholder: 'e.g. 2',
                    }),
                  ],
                }),
              ],
            }),
            r.jsxs('div', {
              className: `sino-simple-form__subsection${w ? ' sino-simple-form__subsection--open' : ''}`,
              children: [
                r.jsxs('button', {
                  type: 'button',
                  className: 'sino-simple-form__subsection-toggle',
                  onClick: () => N((P) => !P),
                  'aria-expanded': w,
                  children: [
                    r.jsxs('span', {
                      className: 'sino-simple-form__subsection-label',
                      children: [
                        a('chinaVisitLogisticsTitle', 'Advanced trip logistics (optional)'),
                        r.jsx('small', {
                          children: a(
                            'chinaVisitLogisticsSubtitle',
                            'Local guide, transport arrangements, hotel booking.'
                          ),
                        }),
                      ],
                    }),
                    r.jsx('span', {
                      className: `sino-simple-form__subsection-chevron${w ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                      children: '▾',
                    }),
                  ],
                }),
                w &&
                  r.jsxs('div', {
                    className: 'sino-simple-form__fields sino-simple-form__fields--rows',
                    children: [
                      r.jsxs('div', {
                        className: 'sino-simple-form__field',
                        children: [
                          r.jsx('label', {
                            className: 'sino-simple-form__label',
                            children: a('chinaVisitNeedGuide', 'Local guide / interpreter?'),
                          }),
                          r.jsx('div', {
                            className: 'sino-simple-form__chips',
                            children: [!0, !1].map((P) =>
                              r.jsx(
                                'button',
                                {
                                  type: 'button',
                                  className: `sino-simple-chip${l.chinaVisit.needGuide === P ? ' sino-simple-chip--active' : ''}`,
                                  onClick: () =>
                                    c((I) => ({
                                      ...I,
                                      chinaVisit: {
                                        ...I.chinaVisit,
                                        needGuide: I.chinaVisit.needGuide === P ? null : P,
                                      },
                                    })),
                                  children: P ? 'Yes' : 'No',
                                },
                                String(P)
                              )
                            ),
                          }),
                        ],
                      }),
                      r.jsxs('div', {
                        className: 'sino-simple-form__field',
                        children: [
                          r.jsx('label', {
                            className: 'sino-simple-form__label',
                            children: a('chinaVisitNeedTransport', 'Local transport?'),
                          }),
                          r.jsx('div', {
                            className: 'sino-simple-form__chips',
                            children: [!0, !1].map((P) =>
                              r.jsx(
                                'button',
                                {
                                  type: 'button',
                                  className: `sino-simple-chip${l.chinaVisit.needTransport === P ? ' sino-simple-chip--active' : ''}`,
                                  onClick: () =>
                                    c((I) => ({
                                      ...I,
                                      chinaVisit: {
                                        ...I.chinaVisit,
                                        needTransport: I.chinaVisit.needTransport === P ? null : P,
                                      },
                                    })),
                                  children: P ? 'Yes' : 'No',
                                },
                                String(P)
                              )
                            ),
                          }),
                        ],
                      }),
                      r.jsxs('div', {
                        className: 'sino-simple-form__field',
                        children: [
                          r.jsx('label', {
                            className: 'sino-simple-form__label',
                            children: a('chinaVisitNeedHotels', 'Hotel booking help?'),
                          }),
                          r.jsx('div', {
                            className: 'sino-simple-form__chips',
                            children: [!0, !1].map((P) =>
                              r.jsx(
                                'button',
                                {
                                  type: 'button',
                                  className: `sino-simple-chip${l.chinaVisit.needHotels === P ? ' sino-simple-chip--active' : ''}`,
                                  onClick: () =>
                                    c((I) => ({
                                      ...I,
                                      chinaVisit: {
                                        ...I.chinaVisit,
                                        needHotels: I.chinaVisit.needHotels === P ? null : P,
                                      },
                                    })),
                                  children: P ? 'Yes' : 'No',
                                },
                                String(P)
                              )
                            ),
                          }),
                        ],
                      }),
                      r.jsxs('div', {
                        className: 'sino-simple-form__field',
                        children: [
                          r.jsx('label', {
                            className: 'sino-simple-form__label',
                            htmlFor: 'chinaVisitNotes',
                            children: a('chinaVisitNotes', 'Anything else?'),
                          }),
                          r.jsx('textarea', {
                            id: 'chinaVisitNotes',
                            className: 'sino-simple-form__input sino-simple-form__input--textarea',
                            value: l.chinaVisit.notes,
                            onChange: (P) =>
                              c((I) => ({
                                ...I,
                                chinaVisit: { ...I.chinaVisit, notes: P.target.value },
                              })),
                            placeholder: 'Visa, budget, preferences…',
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Kp = ({ formData: l, setFormData: c, t: a, stepLabel: w }) => {
    var N, C, j;
    return r.jsx(r.Fragment, {
      children:
        l.servicesRequested.other &&
        r.jsxs('section', {
          className: 'sino-simple-form__section sino-simple-form__section--service-other',
          children: [
            r.jsxs('h2', {
              className: 'sino-simple-form__section-title',
              children: [
                r.jsx('span', {
                  className: 'sino-simple-form__section-step',
                  children: w ?? 'Step',
                }),
                r.jsx('span', { children: a('simpleOtherTitle', 'Tell us about your project') }),
              ],
            }),
            r.jsx('p', {
              className: 'sino-simple-form__hint',
              children: a(
                'simpleOtherHint',
                "Describe your project in detail and we'll route it to the right specialist."
              ),
            }),
            r.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--rows',
              children: [
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsx('label', {
                      className: 'sino-simple-form__label',
                      children: a('otherProjectType', 'What type of project is this?'),
                    }),
                    r.jsx('div', {
                      className: 'sino-simple-form__chips sino-simple-form__chips--wrap',
                      children: [
                        {
                          value: 'consulting',
                          label: a('otherTypeConsulting', 'Consulting / Advice'),
                        },
                        {
                          value: 'manufacturing',
                          label: a('otherTypeManufacturing', 'Manufacturing'),
                        },
                        {
                          value: 'import-export',
                          label: a('otherTypeImportExport', 'Import / Export'),
                        },
                        { value: 'partnership', label: a('otherTypePartnership', 'Partnership') },
                        { value: 'other', label: a('otherTypeOther', 'Other') },
                      ].map((p) => {
                        var h, z, K;
                        return r.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${((h = l.otherProject) == null ? void 0 : h.projectType) === p.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              c((O) => {
                                var b;
                                return {
                                  ...O,
                                  otherProject: {
                                    ...O.otherProject,
                                    projectType:
                                      ((b = O.otherProject) == null ? void 0 : b.projectType) ===
                                      p.value
                                        ? ''
                                        : p.value,
                                  },
                                };
                              }),
                            'aria-pressed':
                              ((z = l.otherProject) == null ? void 0 : z.projectType) === p.value
                                ? 'true'
                                : 'false',
                            'aria-label': `${p.label}${((K = l.otherProject) == null ? void 0 : K.projectType) === p.value ? ', selected' : ', not selected'}`,
                            onKeyDown: (O) => {
                              (O.key === 'Enter' || O.key === ' ') &&
                                (O.preventDefault(),
                                c((b) => {
                                  var Z;
                                  return {
                                    ...b,
                                    otherProject: {
                                      ...b.otherProject,
                                      projectType:
                                        ((Z = b.otherProject) == null ? void 0 : Z.projectType) ===
                                        p.value
                                          ? ''
                                          : p.value,
                                    },
                                  };
                                }));
                            },
                            children: p.label,
                          },
                          p.value
                        );
                      }),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'otherProjectDescription',
                      children: [
                        a('otherProjectDescription', 'Describe your project'),
                        r.jsx('span', {
                          className: 'sino-simple-form__required',
                          'aria-label': 'required',
                          children: '*',
                        }),
                      ],
                    }),
                    r.jsx('textarea', {
                      id: 'otherProjectDescription',
                      className: 'sino-simple-form__input sino-simple-form__input--textarea',
                      rows: 5,
                      value: ((N = l.otherProject) == null ? void 0 : N.description) || '',
                      onChange: (p) =>
                        c((h) => ({
                          ...h,
                          otherProject: { ...h.otherProject, description: p.target.value },
                        })),
                      placeholder: a(
                        'otherProjectDescriptionPlaceholder',
                        'Tell us what you need help with: your goals, context, timeline, challenges…'
                      ),
                    }),
                    r.jsx('p', {
                      className: 'sino-simple-form__help',
                      children: a(
                        'otherProjectDescriptionHelp',
                        'The more detail you provide, the better we can assist you.'
                      ),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'otherProjectBudget',
                      children: [
                        a('otherProjectBudget', 'Estimated budget'),
                        r.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: a('ifKnown', 'if known'),
                        }),
                      ],
                    }),
                    r.jsx('input', {
                      id: 'otherProjectBudget',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: ((C = l.otherProject) == null ? void 0 : C.budget) || '',
                      onChange: (p) =>
                        c((h) => ({
                          ...h,
                          otherProject: { ...h.otherProject, budget: p.target.value },
                        })),
                      placeholder: a('otherProjectBudgetPlaceholder', 'e.g. $5,000 - $10,000'),
                    }),
                  ],
                }),
                r.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    r.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'otherProjectTimeline',
                      children: [
                        a('otherProjectTimeline', 'Expected timeline'),
                        r.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: a('ifKnown', 'if known'),
                        }),
                      ],
                    }),
                    r.jsx('input', {
                      id: 'otherProjectTimeline',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: ((j = l.otherProject) == null ? void 0 : j.timeline) || '',
                      onChange: (p) =>
                        c((h) => ({
                          ...h,
                          otherProject: { ...h.otherProject, timeline: p.target.value },
                        })),
                      placeholder: a('otherProjectTimelinePlaceholder', 'e.g. Within 3 months'),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
    });
  },
  Qp = ({ submissionId: l, t: c, onStartNew: a, selectedServiceLabels: w, formData: N }) => {
    const [C, j] = W.useState(!1),
      [p, h] = W.useState(new Date());
    (W.useEffect(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const b = document.createElement('div');
      ((b.className = 'sino-simple-form__confetti-container'), document.body.appendChild(b));
      const Z = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'],
        Q = 50;
      for (let P = 0; P < Q; P++) {
        const I = document.createElement('div');
        ((I.className = 'sino-simple-form__confetti'),
          (I.style.left = `${Math.random() * 100}%`),
          (I.style.backgroundColor = Z[Math.floor(Math.random() * Z.length)]),
          (I.style.animationDelay = `${Math.random() * 2}s`),
          (I.style.animationDuration = `${2 + Math.random() * 2}s`),
          b.appendChild(I));
      }
      const Y = setTimeout(() => {
        b.remove();
      }, 4e3);
      return () => {
        (clearTimeout(Y), b.parentNode && b.remove());
      };
    }, []),
      W.useEffect(() => {
        const O = setInterval(() => {
          h(new Date());
        }, 6e4);
        return () => clearInterval(O);
      }, []));
    const z = W.useMemo(() => {
        const O = p,
          b = O.getDay(),
          Z = O.getHours(),
          Q = b >= 1 && b <= 5,
          Y = Z >= 9 && Z < 18;
        let P = 0,
          I = 0;
        if (Q && Y) {
          const pe = new Date(O.getTime() + 864e5).getTime() - O.getTime();
          ((P = Math.max(0, Math.floor(pe / (1e3 * 60 * 60)))),
            (I = Math.max(0, Math.floor((pe % (1e3 * 60 * 60)) / (1e3 * 60)))));
        }
        return {
          isBusinessDay: Q,
          isBusinessHours: Y,
          hoursRemaining: P,
          minutesRemaining: I,
          status: Q && Y ? 'active' : 'waiting',
        };
      }, [p]),
      K = async () => {
        try {
          (await navigator.clipboard.writeText(l), j(!0), setTimeout(() => j(!1), 2e3));
        } catch (O) {
          console.error('Failed to copy:', O);
        }
      };
    return r.jsx('section', {
      className: 'sino-simple-form__section sino-simple-form__section--confirmation',
      children: r.jsxs('div', {
        className: 'sino-simple-form__confirmation',
        children: [
          r.jsxs('div', {
            className: 'sino-simple-form__confirmation-icon',
            children: [
              r.jsxs('svg', {
                width: '64',
                height: '64',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: [
                  r.jsx('circle', {
                    cx: '12',
                    cy: '12',
                    r: '10',
                    stroke: '#22c55e',
                    strokeWidth: '2',
                    fill: 'none',
                    className: 'sino-simple-form__confirmation-circle',
                  }),
                  r.jsx('path', {
                    d: 'M8 12l2 2 4-4',
                    stroke: '#22c55e',
                    strokeWidth: '2',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    className: 'sino-simple-form__confirmation-check',
                  }),
                ],
              }),
              r.jsx('div', { className: 'sino-simple-form__confirmation-ripple' }),
            ],
          }),
          r.jsx('h1', {
            className: 'sino-simple-form__confirmation-title',
            children: c('simpleConfirmationTitle', 'Request received!'),
          }),
          r.jsx('p', {
            className: 'sino-simple-form__confirmation-subtitle',
            children: c(
              'simpleConfirmationSubtitle',
              'A SINO expert (not a bot) will email you a first quote within 24h (Mon–Fri).'
            ),
          }),
          r.jsxs('div', {
            className: 'sino-simple-form__confirmation-info-block',
            children: [
              N.email &&
                r.jsxs('div', {
                  className: 'sino-simple-form__confirmation-email',
                  children: [
                    r.jsx('div', {
                      className: 'sino-simple-form__confirmation-email-icon',
                      children: r.jsxs('svg', {
                        width: '24',
                        height: '24',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: [
                          r.jsx('path', {
                            d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                          r.jsx('polyline', {
                            points: '22,6 12,13 2,6',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                        ],
                      }),
                    }),
                    r.jsxs('div', {
                      className: 'sino-simple-form__confirmation-email-content',
                      children: [
                        r.jsx('strong', {
                          children: c('confirmationEmailTitle', 'Check your inbox'),
                        }),
                        r.jsxs('span', {
                          children: [
                            c('confirmationEmailText', 'Confirmation email sent to'),
                            ' ',
                            r.jsx('strong', { children: N.email }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              r.jsxs('div', {
                className: `sino-simple-form__confirmation-response-time ${z.status === 'active' ? 'sino-simple-form__confirmation-response-time--active' : ''}`,
                children: [
                  r.jsx('div', {
                    className: 'sino-simple-form__confirmation-response-time-icon',
                    children: r.jsxs('svg', {
                      width: '20',
                      height: '20',
                      viewBox: '0 0 24 24',
                      fill: 'none',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: [
                        r.jsx('circle', {
                          cx: '12',
                          cy: '12',
                          r: '10',
                          stroke: 'currentColor',
                          strokeWidth: '2',
                        }),
                        r.jsx('polyline', {
                          points: '12 6 12 12 16 14',
                          stroke: 'currentColor',
                          strokeWidth: '2',
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                        }),
                      ],
                    }),
                  }),
                  r.jsxs('div', {
                    className: 'sino-simple-form__confirmation-response-time-content',
                    children: [
                      r.jsx('strong', {
                        children: c('confirmationResponseTime', 'Response time: 24h (Mon–Fri)'),
                      }),
                      z.status === 'waiting' &&
                        r.jsx('span', {
                          className: 'sino-simple-form__confirmation-response-time-status',
                          children: z.isBusinessDay
                            ? c(
                                'confirmationResponseTimeAfterHours',
                                'Response will start during business hours'
                              )
                            : c(
                                'confirmationResponseTimeWeekend',
                                'Response will start on next business day'
                              ),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          r.jsxs('div', {
            className: 'sino-simple-form__confirmation-badges',
            children: [
              r.jsx('div', {
                className: 'sino-simple-form__confirmation-badge',
                children: r.jsxs('div', {
                  className: 'sino-simple-form__confirmation-badge-content',
                  children: [
                    r.jsx('strong', {
                      className: 'sino-simple-form__confirmation-badge-value',
                      children: '55,000+',
                    }),
                    r.jsxs('span', {
                      className: 'sino-simple-form__confirmation-badge-label',
                      children: [
                        c('confirmationBadgeClients', 'Satisfied Customers'),
                        r.jsx('small', {
                          className: 'sino-simple-form__confirmation-badge-sublabel',
                          children: 'since 1989',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              r.jsx('div', {
                className: 'sino-simple-form__confirmation-badge',
                children: r.jsxs('div', {
                  className: 'sino-simple-form__confirmation-badge-content',
                  children: [
                    r.jsx('strong', {
                      className: 'sino-simple-form__confirmation-badge-value',
                      children: '400+',
                    }),
                    r.jsxs('span', {
                      className: 'sino-simple-form__confirmation-badge-label',
                      children: [
                        c('confirmationBadgeTeam', 'Professional Team Members'),
                        r.jsx('small', {
                          className: 'sino-simple-form__confirmation-badge-sublabel',
                          children: 'In China',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              r.jsx('div', {
                className: 'sino-simple-form__confirmation-badge',
                children: r.jsxs('div', {
                  className: 'sino-simple-form__confirmation-badge-content',
                  children: [
                    r.jsx('strong', {
                      className: 'sino-simple-form__confirmation-badge-value',
                      children: '8',
                    }),
                    r.jsxs('span', {
                      className: 'sino-simple-form__confirmation-badge-label',
                      children: [
                        c('confirmationBadgeOffices', 'Wholly Owned Offices'),
                        r.jsx('small', {
                          className: 'sino-simple-form__confirmation-badge-sublabel',
                          children: 'In China',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              r.jsx('div', {
                className: 'sino-simple-form__confirmation-badge',
                children: r.jsxs('div', {
                  className: 'sino-simple-form__confirmation-badge-content',
                  children: [
                    r.jsx('strong', {
                      className: 'sino-simple-form__confirmation-badge-value',
                      children: '519,000+',
                    }),
                    r.jsxs('span', {
                      className: 'sino-simple-form__confirmation-badge-label',
                      children: [
                        c('confirmationBadgeCFS', 'CFS Facility Nationwide'),
                        r.jsx('small', {
                          className: 'sino-simple-form__confirmation-badge-sublabel',
                          children: 'm²',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          r.jsxs('div', {
            className: 'sino-simple-form__confirmation-details-card',
            children: [
              (w.length > 0 || N.country) &&
                r.jsxs('div', {
                  className: 'sino-simple-form__confirmation-summary',
                  children: [
                    r.jsx('h3', {
                      className: 'sino-simple-form__confirmation-summary-title',
                      children: c('confirmationSummaryTitle', 'Your request summary'),
                    }),
                    r.jsxs('div', {
                      className: 'sino-simple-form__confirmation-summary-content',
                      children: [
                        w.length > 0 &&
                          r.jsxs('div', {
                            className: 'sino-simple-form__confirmation-summary-item',
                            children: [
                              r.jsx('strong', {
                                children: c('confirmationSummaryServices', 'Services:'),
                              }),
                              r.jsx('span', { children: w.join(', ') }),
                            ],
                          }),
                        N.country &&
                          r.jsxs('div', {
                            className: 'sino-simple-form__confirmation-summary-item',
                            children: [
                              r.jsx('strong', {
                                children: c('confirmationSummaryDestination', 'Destination:'),
                              }),
                              r.jsxs('span', {
                                children: [
                                  (() => {
                                    const O = Qt.find((b) => b.code === N.country);
                                    return O ? O.name : N.country;
                                  })(),
                                  N.destCity && `, ${N.destCity}`,
                                ],
                              }),
                            ],
                          }),
                        N.mode &&
                          N.mode !== 'not_sure' &&
                          r.jsxs('div', {
                            className: 'sino-simple-form__confirmation-summary-item',
                            children: [
                              r.jsx('strong', { children: c('confirmationSummaryMode', 'Mode:') }),
                              r.jsx('span', { children: N.mode }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              r.jsxs('div', {
                className: 'sino-simple-form__confirmation-details',
                children: [
                  r.jsxs('div', {
                    className: 'sino-simple-form__confirmation-id-container',
                    children: [
                      r.jsxs('p', {
                        className: 'sino-simple-form__confirmation-id',
                        children: [
                          r.jsx('strong', {
                            children: c('simpleConfirmationIdLabel', 'Reference:'),
                          }),
                          r.jsx('code', {
                            className: 'sino-simple-form__confirmation-id-code',
                            children: l,
                          }),
                        ],
                      }),
                      r.jsx('button', {
                        type: 'button',
                        className: `sino-simple-form__confirmation-copy ${C ? 'sino-simple-form__confirmation-copy--copied' : ''}`,
                        onClick: K,
                        title: C
                          ? c('confirmationCopied', 'Copied!')
                          : c('confirmationCopy', 'Copy reference'),
                        children: C
                          ? r.jsxs(r.Fragment, {
                              children: [
                                r.jsx('svg', {
                                  width: '16',
                                  height: '16',
                                  viewBox: '0 0 24 24',
                                  fill: 'none',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  children: r.jsx('path', {
                                    d: 'M20 6L9 17l-5-5',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                    strokeLinecap: 'round',
                                    strokeLinejoin: 'round',
                                  }),
                                }),
                                c('confirmationCopied', 'Copied!'),
                              ],
                            })
                          : r.jsxs(r.Fragment, {
                              children: [
                                r.jsxs('svg', {
                                  width: '16',
                                  height: '16',
                                  viewBox: '0 0 24 24',
                                  fill: 'none',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  children: [
                                    r.jsx('rect', {
                                      x: '9',
                                      y: '9',
                                      width: '13',
                                      height: '13',
                                      rx: '2',
                                      ry: '2',
                                      stroke: 'currentColor',
                                      strokeWidth: '2',
                                      strokeLinecap: 'round',
                                      strokeLinejoin: 'round',
                                    }),
                                    r.jsx('path', {
                                      d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1',
                                      stroke: 'currentColor',
                                      strokeWidth: '2',
                                      strokeLinecap: 'round',
                                      strokeLinejoin: 'round',
                                    }),
                                  ],
                                }),
                                c('confirmationCopy', 'Copy'),
                              ],
                            }),
                      }),
                    ],
                  }),
                  r.jsx('p', {
                    className: 'sino-simple-form__confirmation-note',
                    children: c(
                      'simpleConfirmationNote',
                      'Keep this reference number for your records. You can use it if you need to follow up on your request.'
                    ),
                  }),
                ],
              }),
            ],
          }),
          r.jsxs('div', {
            className: 'sino-simple-form__confirmation-timeline',
            children: [
              r.jsxs('div', {
                className: 'sino-simple-form__confirmation-timeline-item',
                children: [
                  r.jsx('div', {
                    className: 'sino-simple-form__confirmation-timeline-icon',
                    children: '1',
                  }),
                  r.jsxs('div', {
                    className: 'sino-simple-form__confirmation-timeline-content',
                    children: [
                      r.jsx('strong', {
                        children: c('confirmationStep1Title', 'Email confirmation'),
                      }),
                      r.jsx('span', {
                        children: c(
                          'confirmationStep1Desc',
                          "You'll receive a confirmation email within minutes"
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              r.jsxs('div', {
                className: 'sino-simple-form__confirmation-timeline-item',
                children: [
                  r.jsx('div', {
                    className: 'sino-simple-form__confirmation-timeline-icon',
                    children: '2',
                  }),
                  r.jsxs('div', {
                    className: 'sino-simple-form__confirmation-timeline-content',
                    children: [
                      r.jsx('strong', { children: c('confirmationStep2Title', 'Expert review') }),
                      r.jsx('span', {
                        children: c('confirmationStep2Desc', 'A SINO expert reviews your request'),
                      }),
                    ],
                  }),
                ],
              }),
              r.jsxs('div', {
                className: 'sino-simple-form__confirmation-timeline-item',
                children: [
                  r.jsx('div', {
                    className: 'sino-simple-form__confirmation-timeline-icon',
                    children: '3',
                  }),
                  r.jsxs('div', {
                    className: 'sino-simple-form__confirmation-timeline-content',
                    children: [
                      r.jsx('strong', { children: c('confirmationStep3Title', 'Your quote') }),
                      r.jsx('span', {
                        children: c(
                          'confirmationStep3Desc',
                          'Personalized quote sent within 24h (Mon–Fri)'
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          r.jsx('div', {
            className: 'sino-simple-form__confirmation-actions',
            children: r.jsx('button', {
              type: 'button',
              className: 'sino-simple-form__cta-button sino-simple-form__cta-button--primary',
              onClick: a,
              children: c('simpleConfirmationNewRequest', 'Start a new request'),
            }),
          }),
          r.jsxs('div', {
            className: 'sino-simple-form__confirmation-secondary-section',
            children: [
              r.jsxs('div', {
                className: 'sino-simple-form__confirmation-secondary-actions',
                children: [
                  r.jsx('a', {
                    href: 'https://www.sino-shipping.com/international-shipping-knowledge-base/',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'sino-simple-form__confirmation-link',
                    children: c('confirmationBrowseGuides', 'Browse our guides'),
                  }),
                  r.jsx('a', {
                    href: 'mailto:info@sino-shipping.com',
                    className: 'sino-simple-form__confirmation-link',
                    children: c('confirmationContactSupport', 'Contact support'),
                  }),
                ],
              }),
              r.jsxs('div', {
                className: 'sino-simple-form__confirmation-social',
                children: [
                  r.jsx('p', {
                    className: 'sino-simple-form__confirmation-social-title',
                    children: c('confirmationSocialTitle', 'Check our social networks'),
                  }),
                  r.jsxs('div', {
                    className: 'sino-simple-form__confirmation-social-links',
                    children: [
                      r.jsx('a', {
                        href: 'https://hk.linkedin.com/company/sino-shipping-official',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'sino-simple-form__confirmation-social-link',
                        'aria-label': 'LinkedIn',
                        children: r.jsx('svg', {
                          width: '20',
                          height: '20',
                          viewBox: '0 0 24 24',
                          fill: 'currentColor',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: r.jsx('path', {
                            d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
                          }),
                        }),
                      }),
                      r.jsx('a', {
                        href: 'https://www.youtube.com/@SINO-Shipping',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'sino-simple-form__confirmation-social-link',
                        'aria-label': 'YouTube',
                        children: r.jsx('svg', {
                          width: '20',
                          height: '20',
                          viewBox: '0 0 24 24',
                          fill: 'currentColor',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: r.jsx('path', {
                            d: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
                          }),
                        }),
                      }),
                      r.jsx('a', {
                        href: 'https://www.instagram.com/sino.shipping/?hl=en',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'sino-simple-form__confirmation-social-link',
                        'aria-label': 'Instagram',
                        children: r.jsx('svg', {
                          width: '20',
                          height: '20',
                          viewBox: '0 0 24 24',
                          fill: 'currentColor',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: r.jsx('path', {
                            d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                          }),
                        }),
                      }),
                      r.jsx('a', {
                        href: 'https://www.tiktok.com/@sinoshipping',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'sino-simple-form__confirmation-social-link',
                        'aria-label': 'TikTok',
                        children: r.jsx('svg', {
                          width: '20',
                          height: '20',
                          viewBox: '0 0 24 24',
                          fill: 'currentColor',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: r.jsx('path', {
                            d: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z',
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          r.jsx('div', {
            className: 'sino-simple-form__confirmation-trust',
            children: r.jsx('p', {
              className: 'sino-simple-form__footer-trust',
              children: c(
                'simpleConfirmationTrust',
                'No spam. Just one clear plan, with transparent pricing and timelines.'
              ),
            }),
          }),
        ],
      }),
    });
  },
  lc = 'sinoSimpleFormDraft',
  Xu = 'sinoSimpleFormSessionId';
function el() {
  return `session-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
}
function Yp() {
  if (typeof window > 'u') return el();
  try {
    const l = window.localStorage.getItem(Xu);
    if (l) return l;
    const c = el();
    return (window.localStorage.setItem(Xu, c), c);
  } catch {
    return el();
  }
}
function Zp(l, c) {
  if (!(typeof window > 'u'))
    try {
      const a = `${lc}-${l}`,
        w = { sessionId: l, formData: c, savedAt: new Date().toISOString() };
      window.localStorage.setItem(a, JSON.stringify(w));
    } catch (a) {
      console.warn('[saveFormDraft] Failed to save draft:', a);
    }
}
function Xp(l) {
  if (typeof window > 'u') return null;
  try {
    const c = `${lc}-${l}`,
      a = window.localStorage.getItem(c);
    return a ? JSON.parse(a).formData : null;
  } catch {
    return null;
  }
}
let Pe = null,
  it = null,
  Gt = null;
function Jp(l) {
  ((Pe = {
    sessionId: l,
    startTime: Date.now(),
    currentStep: 'services',
    stepsCompleted: [],
    totalTime: 0,
    completionRate: 0,
    problematicFields: {},
  }),
    (it = Date.now()),
    (Gt = 'services'),
    pi('form_started', { session_id: l }));
}
function Ju(l, c, a, w) {
  if (Pe) {
    if (it && Gt) {
      const N = Math.round((Date.now() - it) / 1e3);
      (pi('step_completed', { step_id: l, step_index: a - 1, time_spent: N, total_steps: w }),
        Pe.stepsCompleted.push(l),
        (Pe.totalTime += N));
    }
    ((it = Date.now()),
      (Gt = c),
      (Pe.currentStep = c),
      pi('step_changed', { from_step: l, to_step: c, step_index: a, total_steps: w }));
  }
}
function ec(l, c) {
  Pe &&
    ((Pe.problematicFields[l] = (Pe.problematicFields[l] || 0) + 1),
    pi('field_error', { field_name: l, error_message: c, error_count: Pe.problematicFields[l] }));
}
function em(l, c) {
  pi('field_completed', { field_name: l, step_id: c });
}
function nm(l, c) {
  if (!Pe) return;
  const a = Math.round((Date.now() - Pe.startTime) / 1e3),
    w = ['services', 'shippingRoute', 'shippingCargo', 'contact'],
    N = (Pe.stepsCompleted.length / w.length) * 100;
  pi('form_submitted', {
    submission_id: l,
    session_id: Pe.sessionId,
    total_time: a,
    completion_rate: N,
    steps_completed: Pe.stepsCompleted.length,
    problematic_fields: Object.keys(Pe.problematicFields),
    error_count: Object.values(Pe.problematicFields).reduce((j, p) => j + p, 0),
  });
  const C = Object.entries(Pe.problematicFields)
    .sort(([, j], [, p]) => p - j)
    .slice(0, 5);
  C.length > 0 &&
    pi('form_problematic_fields', {
      submission_id: l,
      fields: C.map(([j]) => j),
      error_counts: C.map(([, j]) => j),
    });
}
function im() {
  if (!Pe || !Gt) return;
  const l = it ? Math.round((Date.now() - it) / 1e3) : 0,
    c = Math.round((Date.now() - Pe.startTime) / 1e3);
  pi('form_abandoned', {
    session_id: Pe.sessionId,
    abandoned_at_step: Gt,
    step_index: Pe.stepsCompleted.length,
    time_on_current_step: l,
    total_time: c,
    steps_completed: Pe.stepsCompleted.length,
    problematic_fields: Object.keys(Pe.problematicFields),
  });
}
function pi(l, c) {
  typeof window > 'u' ||
    (typeof window.gtag == 'function' &&
      window.gtag('event', l, { event_category: 'Simple Quote Form', ...c }),
    typeof window.plausible == 'function' && window.plausible(l, { props: c }));
}
const tm = () => {
    var bi, Mi;
    const { formData: l, setFormData: c, handleInputChange: a } = hp(),
      [w, N] = W.useState(!1),
      [C, j] = W.useState(!1),
      [p, h] = W.useState(!1),
      [z, K] = W.useState(!0),
      [O, b] = W.useState(!0),
      [Z, Q] = W.useState(!0),
      [Y, P] = W.useState(!0),
      [I, me] = W.useState(!0),
      [pe, re] = W.useState(!0),
      [ue, fe] = W.useState(!0),
      [ve, Ie] = W.useState(!1),
      [Ge, We] = W.useState(null),
      [cn, Ae] = W.useState(!1),
      [X, Te] = W.useState(0),
      [Ve, Re] = W.useState(null),
      [H, F] = W.useState({}),
      [V, A] = W.useState({}),
      [f, S] = W.useState(!1),
      [G, ie] = W.useState(null),
      [se, le] = W.useState(!1),
      [ge, ce] = W.useState(''),
      [ye, Ke] = W.useState(''),
      [Ti, mi] = W.useState(!1),
      Ei = W.useMemo(() => zp(), []),
      tt = W.useMemo(() => Ip(l.country), [l.country]),
      rt = W.useRef(null),
      st = W.useRef(null),
      Li = W.useRef(null),
      ot = W.useRef(null),
      Ri = W.useRef(null),
      qn = W.useRef(null),
      En = W.useCallback(() => {
        const L = [ot.current, Ri.current, qn.current, rt.current, st.current, Li.current].find(
          (ne) => ne !== null
        );
        L && (L.scrollIntoView({ block: 'center', behavior: 'smooth' }), L.focus());
      }, []),
      Be = W.useCallback((y) => typeof y == 'string' && y.trim().length > 0, []),
      k = W.useCallback((y, L) => L, []),
      Qe = W.useCallback(
        (y) => {
          a(y);
          const L = y.target.name;
          (H[L] &&
            !V[L] &&
            F((ne) => {
              const we = { ...ne };
              return (delete we[L], we);
            }),
            L === 'country' ? ce(y.target.value) : L === 'destCity' && Ke(y.target.value));
        },
        [a, H, V]
      ),
      lt =
        ((bi = l.servicesRequested) == null ? void 0 : bi.shipping) === void 0
          ? !0
          : l.servicesRequested.shipping,
      en = W.useMemo(() => {
        const y = ['services'],
          L = l.servicesRequested || {};
        return (
          L.sourcing && y.push('sourcing'),
          L.warehousing && y.push('warehousing'),
          L.dropshipping && y.push('dropshipping'),
          L.qc && y.push('qc'),
          L.chinaVisits && y.push('chinaVisit'),
          lt && (y.push('shippingRoute'), y.push('shippingCargo')),
          L.other && y.push('other'),
          y.push('contact'),
          y
        );
      }, [l.servicesRequested, lt]),
      Ee = W.useMemo(() => en.length, [en]),
      _e = en[X] || 'services',
      fi = W.useCallback(
        (y, L) => {
          if (!L || (typeof L == 'string' && L.trim().length === 0)) {
            A((we) => ({ ...we, [y]: !0 }));
            return;
          }
          A((we) => ({ ...we, [y]: !0 }));
          let ne = { valid: !0 };
          switch (y) {
            case 'email':
              ne = tc(L);
              break;
            case 'phone':
              ne = rc(L);
              break;
            case 'firstName':
              ne = sc(L, 'First name');
              break;
            case 'country':
              ne = il(L);
              break;
            case 'destCity':
              ne = tl(L);
              break;
            case 'totalWeight':
              ne = oc(L);
              break;
          }
          !ne.valid && ne.error
            ? (F((we) => ({ ...we, [y]: ne.error })), ec(y, ne.error))
            : (F((we) => {
                const Ln = { ...we };
                return (delete Ln[y], Ln);
              }),
              L && typeof L == 'string' && L.trim().length > 0 && em(y, _e));
        },
        [_e]
      ),
      Dn = W.useMemo(
        () =>
          ['shipping', 'sourcing', 'dropshipping', 'warehousing', 'qc', 'chinaVisits', 'other']
            .filter((y) => {
              var L;
              return (L = l.servicesRequested) == null ? void 0 : L[y];
            })
            .map((y) => {
              switch (y) {
                case 'shipping':
                  return k('serviceShippingSummary', 'Shipping from China');
                case 'sourcing':
                  return k('serviceSourcingSummary', 'Product sourcing');
                case 'dropshipping':
                  return k('serviceDropshippingSummary', 'Dropshipping & fulfillment');
                case 'warehousing':
                  return k('serviceWarehousingSummary', 'Warehousing & consolidation');
                case 'qc':
                  return k('serviceQcSummary', 'Quality control & inspections');
                case 'chinaVisits':
                  return k('serviceChinaVisitsSummary', 'China visits & trade fairs');
                case 'other':
                  return k('serviceOtherSummary', 'Other project');
                default:
                  return '';
              }
            })
            .filter(Boolean),
        [l.servicesRequested, k]
      ),
      Hn =
        ((Mi = l.servicesRequested) == null ? void 0 : Mi.shipping) === void 0
          ? !0
          : l.servicesRequested.shipping,
      as = X === Ee - 1,
      Yt = X === 0,
      Zt = W.useCallback(() => {
        if (!Cp(_e, l)) {
          const y = sl(_e, l);
          (F((L) => {
            const ne = { ...L };
            return (
              Object.entries(y).forEach(([we, Ln]) => {
                !Ln.valid && Ln.error ? ((ne[we] = Ln.error), ec(we, Ln.error)) : delete ne[we];
              }),
              ne
            );
          }),
            A((L) => {
              const ne = { ...L };
              return (
                Object.keys(y).forEach((we) => {
                  ne[we] = !0;
                }),
                ne
              );
            }),
            setTimeout(() => {
              En();
            }, 100));
          return;
        }
        if (X < Ee - 1) {
          const y = X + 1,
            L = en[y];
          (Ju(_e, L, y, Ee),
            mi(!0),
            setTimeout(() => {
              (Te(y),
                typeof window < 'u' && window.scrollTo({ top: 0, behavior: 'smooth' }),
                setTimeout(() => mi(!1), 50));
            }, 150));
        }
      }, [_e, l, X, Ee, En, en]),
      us = W.useCallback(() => {
        if (X > 0) {
          const y = X - 1,
            L = en[y];
          (Ju(_e, L, y, Ee),
            mi(!0),
            setTimeout(() => {
              (Te(y),
                typeof window < 'u' && window.scrollTo({ top: 0, behavior: 'smooth' }),
                setTimeout(() => mi(!1), 50));
            }, 150));
        }
      }, [X, _e, en, Ee]);
    (W.useEffect(() => {
      if (X >= Ee && Ee > 0) {
        Te(Ee - 1);
        return;
      }
      const y = en[X];
      if (!y || y !== _e) {
        const L = en.indexOf(_e);
        L >= 0 ? Te(L) : X >= Ee && Ee > 0 ? Te(Ee - 1) : X > 0 && Te(0);
      }
    }, [Ee, en, _e, X]),
      W.useEffect(() => {
        f
          ? (K(!1), b(!1), Q(!1), P(!1), me(!1), re(!1), fe(!1))
          : (K(!0), b(!0), Q(!0), P(!0), me(!0), re(!0), fe(!0));
      }, [f]),
      W.useEffect(() => {
        if (typeof window > 'u') return;
        const y = Yp();
        (ie(y), Jp(y));
        try {
          const L = Xp(y);
          L && c((ne) => ({ ...ne, ...L }));
        } catch {}
      }, []),
      W.useEffect(() => {
        if (typeof window > 'u' || Ve) return;
        const y = () => {
          im();
        };
        return (
          window.addEventListener('beforeunload', y),
          () => {
            window.removeEventListener('beforeunload', y);
          }
        );
      }, [Ve]),
      W.useEffect(() => {
        if (typeof window > 'u' || !G) return;
        const y = setTimeout(() => {
          try {
            const L = {
              country: l.country,
              origin: l.origin,
              mode: l.mode,
              email: l.email,
              phone: l.phone,
              phoneCountryCode: l.phoneCountryCode,
              customerType: l.customerType,
              locationType: l.locationType,
              city: l.city,
              zipCode: l.zipCode,
              destLocationType: l.destLocationType,
              destCity: l.destCity,
              destZipCode: l.destZipCode,
              destPort: l.destPort,
              firstName: l.firstName,
              lastName: l.lastName,
              companyName: l.companyName,
              shipperType: l.shipperType,
              totalWeight: l.totalWeight,
              numberOfUnits: l.numberOfUnits,
              dimensions: l.dimensions,
              weightPerUnit: l.weightPerUnit,
              goodsValue: l.goodsValue,
              goodsCurrency: l.goodsCurrency,
              isPersonalOrHazardous: l.isPersonalOrHazardous,
              areGoodsReady: l.areGoodsReady,
              goodsDescription: l.goodsDescription,
              specialRequirements: l.specialRequirements,
              remarks: l.remarks,
              incoterm: l.incoterm,
              annualVolume: l.annualVolume,
              servicesRequested: l.servicesRequested,
              sourcing: l.sourcing,
              warehousing: l.warehousing,
              dropshipping: l.dropshipping,
              qc: l.qc,
              chinaVisit: l.chinaVisit,
              otherProject: l.otherProject,
            };
            Zp(G, L);
          } catch {}
        }, 2e3);
        return () => clearTimeout(y);
      }, [l, G]),
      W.useEffect(() => {
        if (typeof window > 'u' || !G) return;
        const y = setTimeout(() => {
          (le(!0),
            setTimeout(() => {
              le(!1);
            }, 2e3));
        }, 5e3);
        return () => clearTimeout(y);
      }, [l, G]));
    const hn = W.useCallback(
        (y, L) => {
          c((ne) => ({ ...ne, [y]: L }));
        },
        [c]
      ),
      at = W.useCallback(
        (y) => {
          if ((Re(y), nm(y), typeof window < 'u' && G))
            try {
              const L = `sinoSimpleFormDraft-${G}`;
              (window.localStorage.removeItem(L),
                window.localStorage.removeItem('sinoSimpleFormSessionId'));
            } catch {}
        },
        [G]
      ),
      ut = W.useCallback(() => {
        (Re(null), Te(0), We(null));
      }, []);
    return Ve
      ? r.jsx('div', {
          className: 'sino-simple-form',
          children: r.jsx(Qp, {
            submissionId: Ve,
            t: k,
            onStartNew: ut,
            selectedServiceLabels: Dn,
            formData: l,
          }),
        })
      : r.jsx('div', {
          className: 'sino-simple-form',
          children: r.jsxs('main', {
            role: 'main',
            'aria-label': k('formAriaLabel', 'Quote request form'),
            children: [
              se &&
                r.jsxs('div', {
                  className: 'sino-simple-form__save-notification',
                  role: 'status',
                  'aria-live': 'polite',
                  children: [
                    r.jsx('span', {
                      className: 'sino-simple-form__save-notification-icon',
                      'aria-hidden': 'true',
                      children: r.jsx('svg', {
                        width: '16',
                        height: '16',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: r.jsx('path', {
                          d: 'M20 6L9 17l-5-5',
                          stroke: 'currentColor',
                          strokeWidth: '2',
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                        }),
                      }),
                    }),
                    r.jsx('span', {
                      className: 'sino-simple-form__save-notification-text',
                      children: k('saveNotification', 'Your progress is saved'),
                    }),
                  ],
                }),
              !Ve && r.jsx(Up, { t: k }),
              r.jsxs('div', {
                className: `sino-simple-form__step-content${Ti ? ' sino-simple-form__step-content--transitioning' : ''}`,
                children: [
                  _e === 'services' &&
                    r.jsx(gp, {
                      formData: l,
                      setFormData: c,
                      t: k,
                      stepLabel: `Step ${X + 1}`,
                      shippingOnly: !1,
                      isQuickQuote: f,
                      setIsQuickQuote: S,
                    }),
                  _e === 'sourcing' &&
                    r.jsx($p, {
                      formData: l,
                      setFormData: c,
                      t: k,
                      stepLabel: `Step ${X + 1}`,
                      showSourcingAdvanced: Y,
                      setShowSourcingAdvanced: P,
                      isQuickQuote: f,
                    }),
                  _e === 'warehousing' &&
                    r.jsx(qp, {
                      formData: l,
                      setFormData: c,
                      t: k,
                      showWarehousingAdvanced: I,
                      setShowWarehousingAdvanced: me,
                      stepLabel: `Step ${X + 1}`,
                    }),
                  _e === 'dropshipping' &&
                    r.jsx(Dp, {
                      formData: l,
                      setFormData: c,
                      t: k,
                      showDropshippingAdvanced: pe,
                      setShowDropshippingAdvanced: re,
                      stepLabel: `Step ${X + 1}`,
                    }),
                  _e === 'qc' &&
                    r.jsx(Hp, {
                      formData: l,
                      setFormData: c,
                      t: k,
                      showQcAdvanced: ue,
                      setShowQcAdvanced: fe,
                      stepLabel: `Step ${X + 1}`,
                    }),
                  _e === 'chinaVisit' &&
                    r.jsx(Gp, {
                      formData: l,
                      setFormData: c,
                      t: k,
                      showChinaVisitLogistics: ve,
                      setShowChinaVisitLogistics: Ie,
                      stepLabel: `Step ${X + 1}`,
                    }),
                  _e === 'other' &&
                    r.jsx(Kp, { formData: l, setFormData: c, t: k, stepLabel: `Step ${X + 1}` }),
                  _e === 'shippingRoute' &&
                    Hn &&
                    r.jsx(r.Fragment, {
                      children: r.jsxs('section', {
                        className:
                          'sino-simple-form__section sino-simple-form__section--service-shipping',
                        children: [
                          r.jsxs('h2', {
                            className: 'sino-simple-form__section-title',
                            children: [
                              r.jsx('span', {
                                className: 'sino-simple-form__section-step',
                                children: `Step ${X + 1}`,
                              }),
                              r.jsx('span', {
                                children: k('shippingFromChinaTitle', 'Shipping from China'),
                              }),
                            ],
                          }),
                          r.jsx(nl, {
                            stepId: 'shippingRoute',
                            formData: l,
                            currentStepIndex: X,
                            totalSteps: Ee,
                            t: k,
                          }),
                          r.jsx('h3', {
                            className: 'sino-simple-form__subsection-title',
                            children: k('simpleStep1Title', 'Destination & mode'),
                          }),
                          r.jsxs('div', {
                            className: 'sino-simple-form__fields',
                            children: [
                              r.jsxs('div', {
                                className: `sino-simple-form__field sino-simple-form__field--primary${V.country && H.country ? ' sino-simple-form__field--error' : ''}${V.country && !H.country && Be(l.country) ? ' sino-simple-form__field--success' : ''}`,
                                children: [
                                  r.jsxs('label', {
                                    className: 'sino-simple-form__label',
                                    htmlFor: 'country',
                                    children: [
                                      k('destinationCountry', 'Destination country'),
                                      r.jsx('span', {
                                        className: 'sino-simple-form__required',
                                        'aria-label': 'required',
                                        children: '*',
                                      }),
                                    ],
                                  }),
                                  r.jsxs('div', {
                                    className: 'sino-simple-form__field-wrapper',
                                    children: [
                                      r.jsx(Yu, {
                                        id: 'country',
                                        name: 'country',
                                        value: l.country,
                                        onChange: Qe,
                                        onBlur: () => {
                                          l.country &&
                                            l.country.trim().length > 0 &&
                                            fi('country', l.country);
                                        },
                                        onSelect: (y) => {
                                          c((L) => ({ ...L, country: y }));
                                        },
                                        onSelectWithValidation: (y) => {
                                          (c((ne) => ({ ...ne, country: y })),
                                            ce(y),
                                            A((ne) => ({ ...ne, country: !0 })));
                                          const L = il(y);
                                          !L.valid && L.error
                                            ? F((ne) => ({ ...ne, country: L.error }))
                                            : F((ne) => {
                                                const we = { ...ne };
                                                return (delete we.country, we);
                                              });
                                        },
                                        placeholder: k(
                                          'destinationCountryPlaceholder',
                                          'France, USA, Canada…'
                                        ),
                                        options: Ei,
                                        inputRef: rt,
                                        error: H.country,
                                        touched: V.country,
                                        isValid: !H.country && Be(ge || l.country),
                                        maxResults: 10,
                                      }),
                                      V.country &&
                                        r.jsxs(r.Fragment, {
                                          children: [
                                            H.country &&
                                              r.jsx('span', {
                                                className:
                                                  'sino-simple-form__field-icon sino-simple-form__field-icon--error',
                                                'aria-hidden': 'true',
                                                children: r.jsxs('svg', {
                                                  width: '20',
                                                  height: '20',
                                                  viewBox: '0 0 24 24',
                                                  fill: 'none',
                                                  xmlns: 'http://www.w3.org/2000/svg',
                                                  children: [
                                                    r.jsx('circle', {
                                                      cx: '12',
                                                      cy: '12',
                                                      r: '10',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                    }),
                                                    r.jsx('line', {
                                                      x1: '12',
                                                      y1: '8',
                                                      x2: '12',
                                                      y2: '12',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                      strokeLinecap: 'round',
                                                    }),
                                                    r.jsx('line', {
                                                      x1: '12',
                                                      y1: '16',
                                                      x2: '12.01',
                                                      y2: '16',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                      strokeLinecap: 'round',
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            !H.country &&
                                              Be(l.country) &&
                                              r.jsx('span', {
                                                className:
                                                  'sino-simple-form__field-icon sino-simple-form__field-icon--success',
                                                'aria-hidden': 'true',
                                                children: r.jsxs('svg', {
                                                  width: '20',
                                                  height: '20',
                                                  viewBox: '0 0 24 24',
                                                  fill: 'none',
                                                  xmlns: 'http://www.w3.org/2000/svg',
                                                  children: [
                                                    r.jsx('circle', {
                                                      cx: '12',
                                                      cy: '12',
                                                      r: '10',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                    }),
                                                    r.jsx('path', {
                                                      d: 'M8 12l2 2 4-4',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                      strokeLinecap: 'round',
                                                      strokeLinejoin: 'round',
                                                    }),
                                                  ],
                                                }),
                                              }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  H.country &&
                                    r.jsx('p', {
                                      id: 'country-error',
                                      className: 'sino-simple-form__field-error',
                                      role: 'alert',
                                      'aria-live': 'polite',
                                      children: H.country,
                                    }),
                                  V.country &&
                                    !H.country &&
                                    Be(l.country) &&
                                    r.jsx('p', {
                                      id: 'country-success',
                                      className: 'sino-simple-form__sr-only',
                                      'aria-live': 'polite',
                                      children: k('fieldValid', 'Field is valid'),
                                    }),
                                ],
                              }),
                              r.jsxs('div', {
                                className: `sino-simple-form__field sino-simple-form__field--primary${V.destCity && H.destCity ? ' sino-simple-form__field--error' : ''}${V.destCity && !H.destCity && Be(l.destCity) ? ' sino-simple-form__field--success' : ''}`,
                                children: [
                                  r.jsxs('label', {
                                    className: 'sino-simple-form__label',
                                    htmlFor: 'destCity',
                                    children: [
                                      k('destinationCityOrPort', 'City or port'),
                                      r.jsx('span', {
                                        className: 'sino-simple-form__required',
                                        'aria-label': 'required',
                                        children: '*',
                                      }),
                                    ],
                                  }),
                                  r.jsxs('div', {
                                    className: 'sino-simple-form__field-wrapper',
                                    children: [
                                      r.jsx(Yu, {
                                        id: 'destCity',
                                        name: 'destCity',
                                        value: l.destCity,
                                        onChange: Qe,
                                        onBlur: () => {
                                          l.destCity &&
                                            l.destCity.trim().length > 0 &&
                                            fi('destCity', l.destCity);
                                        },
                                        onSelectWithValidation: (y) => {
                                          (c((ne) => ({ ...ne, destCity: y })),
                                            Ke(y),
                                            A((ne) => ({ ...ne, destCity: !0 })));
                                          const L = tl(y);
                                          !L.valid && L.error
                                            ? F((ne) => ({ ...ne, destCity: L.error }))
                                            : F((ne) => {
                                                const we = { ...ne };
                                                return (delete we.destCity, we);
                                              });
                                        },
                                        placeholder: k(
                                          'destinationCityPlaceholder',
                                          'e.g. Paris, Le Havre…'
                                        ),
                                        options: tt,
                                        inputRef: st,
                                        error: H.destCity,
                                        touched: V.destCity,
                                        isValid: !H.destCity && Be(ye || l.destCity),
                                        maxResults: 8,
                                      }),
                                      V.destCity &&
                                        r.jsxs(r.Fragment, {
                                          children: [
                                            H.destCity &&
                                              r.jsx('span', {
                                                className:
                                                  'sino-simple-form__field-icon sino-simple-form__field-icon--error',
                                                'aria-hidden': 'true',
                                                'aria-label': k('fieldError', 'Error'),
                                                children: r.jsxs('svg', {
                                                  width: '20',
                                                  height: '20',
                                                  viewBox: '0 0 24 24',
                                                  fill: 'none',
                                                  xmlns: 'http://www.w3.org/2000/svg',
                                                  children: [
                                                    r.jsx('circle', {
                                                      cx: '12',
                                                      cy: '12',
                                                      r: '10',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                    }),
                                                    r.jsx('line', {
                                                      x1: '12',
                                                      y1: '8',
                                                      x2: '12',
                                                      y2: '12',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                      strokeLinecap: 'round',
                                                    }),
                                                    r.jsx('line', {
                                                      x1: '12',
                                                      y1: '16',
                                                      x2: '12.01',
                                                      y2: '16',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                      strokeLinecap: 'round',
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            !H.destCity &&
                                              Be(l.destCity) &&
                                              r.jsx('span', {
                                                className:
                                                  'sino-simple-form__field-icon sino-simple-form__field-icon--success',
                                                'aria-hidden': 'true',
                                                'aria-label': k('fieldValid', 'Field is valid'),
                                                children: r.jsxs('svg', {
                                                  width: '20',
                                                  height: '20',
                                                  viewBox: '0 0 24 24',
                                                  fill: 'none',
                                                  xmlns: 'http://www.w3.org/2000/svg',
                                                  children: [
                                                    r.jsx('circle', {
                                                      cx: '12',
                                                      cy: '12',
                                                      r: '10',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                    }),
                                                    r.jsx('path', {
                                                      d: 'M8 12l2 2 4-4',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                      strokeLinecap: 'round',
                                                      strokeLinejoin: 'round',
                                                    }),
                                                  ],
                                                }),
                                              }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  H.destCity &&
                                    r.jsx('p', {
                                      id: 'destCity-error',
                                      className: 'sino-simple-form__field-error',
                                      role: 'alert',
                                      'aria-live': 'polite',
                                      children: H.destCity,
                                    }),
                                  V.destCity &&
                                    !H.destCity &&
                                    Be(l.destCity) &&
                                    r.jsx('p', {
                                      id: 'destCity-success',
                                      className: 'sino-simple-form__sr-only',
                                      'aria-live': 'polite',
                                      children: k('fieldValid', 'Field is valid'),
                                    }),
                                ],
                              }),
                            ],
                          }),
                          r.jsxs('div', {
                            className: `sino-simple-form__subsection${z ? ' sino-simple-form__subsection--open' : ''}`,
                            children: [
                              r.jsxs('button', {
                                type: 'button',
                                className: 'sino-simple-form__subsection-toggle',
                                onClick: () => K((y) => !y),
                                'aria-expanded': z,
                                'aria-controls': 'destination-details-content',
                                'aria-label': z
                                  ? k('collapseSection', 'Collapse destination details')
                                  : k('expandSection', 'Expand destination details'),
                                onKeyDown: (y) => {
                                  (y.key === 'Enter' || y.key === ' ') &&
                                    (y.preventDefault(), K((L) => !L));
                                },
                                children: [
                                  r.jsxs('span', {
                                    className: 'sino-simple-form__subsection-label',
                                    children: [
                                      k(
                                        'destinationDetailsTitle',
                                        'Advanced delivery details (optional)'
                                      ),
                                      r.jsx('small', {
                                        children: k(
                                          'destinationDetailsSubtitle',
                                          'Helps us refine delivery but you can skip this for now.'
                                        ),
                                      }),
                                    ],
                                  }),
                                  r.jsx('span', {
                                    className: `sino-simple-form__subsection-chevron${z ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                                    children: '▾',
                                  }),
                                ],
                              }),
                              z &&
                                r.jsxs('div', {
                                  id: 'destination-details-content',
                                  className:
                                    'sino-simple-form__fields sino-simple-form__fields--rows',
                                  children: [
                                    r.jsxs('div', {
                                      className: 'sino-simple-form__field',
                                      children: [
                                        r.jsx('label', {
                                          className: 'sino-simple-form__label',
                                          children: k(
                                            'destinationLocationType',
                                            'Delivery location type'
                                          ),
                                        }),
                                        r.jsx('input', {
                                          className: 'sino-simple-form__input',
                                          type: 'text',
                                          name: 'destLocationType',
                                          value: l.destLocationType,
                                          onChange: Qe,
                                          placeholder: k(
                                            'destinationLocationTypePlaceholder',
                                            'Port, warehouse, home address…'
                                          ),
                                        }),
                                      ],
                                    }),
                                    r.jsxs('div', {
                                      className: 'sino-simple-form__field',
                                      children: [
                                        r.jsx('label', {
                                          className: 'sino-simple-form__label',
                                          children: k('destinationZipCode', 'ZIP / postal code'),
                                        }),
                                        r.jsx('input', {
                                          className: 'sino-simple-form__input',
                                          type: 'text',
                                          name: 'destZipCode',
                                          value: l.destZipCode,
                                          onChange: Qe,
                                          placeholder: k(
                                            'destinationZipCodePlaceholder',
                                            'e.g. 75001'
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          r.jsx('div', {
                            className:
                              'sino-simple-form__fields sino-simple-form__fields--rows sino-simple-form__fields--m-top',
                            children: r.jsxs('div', {
                              className: 'sino-simple-form__field',
                              children: [
                                r.jsx('label', {
                                  className: 'sino-simple-form__label',
                                  children: k('shippingMode', 'Preferred mode'),
                                }),
                                r.jsx('div', {
                                  className: 'sino-simple-form__chips',
                                  children: [
                                    {
                                      value: 'Sea',
                                      label: 'Sea',
                                      tooltip: k(
                                        'modeSeaHelp',
                                        'Best for large volumes and lower cost when you have a few weeks.'
                                      ),
                                    },
                                    {
                                      value: 'Air',
                                      label: 'Air',
                                      tooltip: k(
                                        'modeAirHelp',
                                        'Faster than sea, ideal for smaller, time-sensitive shipments.'
                                      ),
                                    },
                                    {
                                      value: 'Railway',
                                      label: 'Railway',
                                      tooltip: k(
                                        'modeRailHelp',
                                        'Balanced option Europe–China: faster than sea, cheaper than air.'
                                      ),
                                    },
                                    {
                                      value: 'Express',
                                      label: 'Express',
                                      tooltip: k(
                                        'modeExpressHelp',
                                        'Door‑to‑door courier (DHL/UPS/FedEx) for urgent small parcels.'
                                      ),
                                    },
                                  ].map((y) =>
                                    r.jsx(
                                      'button',
                                      {
                                        type: 'button',
                                        className: `sino-simple-chip${l.mode === y.value ? ' sino-simple-chip--active' : ''}`,
                                        'data-tooltip': y.tooltip,
                                        onClick: () =>
                                          c((L) => ({
                                            ...L,
                                            mode: L.mode === y.value ? '' : y.value,
                                          })),
                                        'aria-pressed': l.mode === y.value ? 'true' : 'false',
                                        'aria-label': `${y.label}${l.mode === y.value ? ', selected' : ', not selected'}. ${y.tooltip}`,
                                        onKeyDown: (L) => {
                                          (L.key === 'Enter' || L.key === ' ') &&
                                            (L.preventDefault(),
                                            c((ne) => ({
                                              ...ne,
                                              mode: ne.mode === y.value ? '' : y.value,
                                            })));
                                        },
                                        children: y.label,
                                      },
                                      y.value
                                    )
                                  ),
                                }),
                              ],
                            }),
                          }),
                          r.jsx('div', {
                            className:
                              'sino-simple-form__fields sino-simple-form__fields--rows sino-simple-form__fields--m-top',
                            children: r.jsxs('div', {
                              className: 'sino-simple-form__field',
                              children: [
                                r.jsxs('label', {
                                  className: 'sino-simple-form__label',
                                  children: [
                                    k('incotermLabel', 'Trade terms (Incoterm)'),
                                    r.jsx('span', {
                                      className: 'sino-simple-form__label-hint',
                                      children: k('ifKnown', 'if known'),
                                    }),
                                  ],
                                }),
                                r.jsx('div', {
                                  className:
                                    'sino-simple-form__chips sino-simple-form__chips--wrap',
                                  children: [
                                    {
                                      value: 'EXW (Ex Work)',
                                      label: 'EXW (Ex Work)',
                                      tooltip: k(
                                        'incotermEXWTooltip',
                                        'Ex Works: You handle everything from the factory. We pick up at the supplier.'
                                      ),
                                    },
                                    {
                                      value: 'FOB (Free On Board)',
                                      label: 'FOB (Free On Board)',
                                      tooltip: k(
                                        'incotermFOBTooltip',
                                        'Free On Board: Supplier delivers to port, you handle shipping and destination costs.'
                                      ),
                                    },
                                    {
                                      value: 'CIF (Cost Insurance and Freight)',
                                      label: 'CIF (Cost Insurance and Freight)',
                                      tooltip: k(
                                        'incotermCIFTooltip',
                                        'Cost, Insurance & Freight: Supplier pays shipping to your port, you handle destination.'
                                      ),
                                    },
                                    {
                                      value: 'CFR (Cost & Freight)',
                                      label: 'CFR (Cost & Freight)',
                                      tooltip: k(
                                        'incotermCFRTooltip',
                                        'Cost and Freight: Supplier pays shipping to your port.'
                                      ),
                                    },
                                    {
                                      value: 'DAT (Delivery at Terminal)',
                                      label: 'DAT (Delivery at Terminal)',
                                      tooltip: k(
                                        'incotermDATTooltip',
                                        'Delivered At Terminal: Delivered at a named terminal at destination.'
                                      ),
                                    },
                                    {
                                      value: "I don't know yet",
                                      label: "I don't know yet",
                                      tooltip: k(
                                        'incotermNotSureTooltip',
                                        "No problem! We'll help you choose the best option based on your needs."
                                      ),
                                    },
                                  ].map((y) =>
                                    r.jsx(
                                      'button',
                                      {
                                        type: 'button',
                                        className: `sino-simple-chip${l.incoterm === y.value ? ' sino-simple-chip--active' : ''}`,
                                        'data-tooltip': y.tooltip,
                                        'aria-pressed': l.incoterm === y.value ? 'true' : 'false',
                                        onClick: () =>
                                          c((L) => ({
                                            ...L,
                                            incoterm: L.incoterm === y.value ? '' : y.value,
                                          })),
                                        children: y.label,
                                      },
                                      y.value
                                    )
                                  ),
                                }),
                              ],
                            }),
                          }),
                          r.jsx('h3', {
                            className: 'sino-simple-form__subsection-title',
                            children: k('simpleStep2Title', 'Pickup in China'),
                          }),
                          r.jsxs('div', {
                            className: 'sino-simple-form__fields sino-simple-form__fields--rows',
                            children: [
                              r.jsxs('div', {
                                className:
                                  'sino-simple-form__field sino-simple-form__field--primary',
                                children: [
                                  r.jsx('label', {
                                    className: 'sino-simple-form__label',
                                    htmlFor: 'city',
                                    children: k('originCity', 'City in China'),
                                  }),
                                  r.jsx('input', {
                                    className: 'sino-simple-form__input',
                                    type: 'text',
                                    name: 'city',
                                    id: 'city',
                                    value: l.city,
                                    onChange: Qe,
                                    placeholder: k(
                                      'originCityPlaceholder',
                                      'e.g. Shenzhen, Guangzhou…'
                                    ),
                                  }),
                                  r.jsx('p', {
                                    className: 'sino-simple-form__help',
                                    children: k(
                                      'originCityHelp',
                                      'City is enough for now. You can skip the pickup details below if you prefer.'
                                    ),
                                  }),
                                ],
                              }),
                              r.jsxs('div', {
                                className: `sino-simple-form__subsection${O ? ' sino-simple-form__subsection--open' : ''}`,
                                children: [
                                  r.jsxs('button', {
                                    type: 'button',
                                    className: 'sino-simple-form__subsection-toggle',
                                    onClick: () => b((y) => !y),
                                    'aria-expanded': O,
                                    'aria-controls': 'origin-details-content',
                                    'aria-label': O
                                      ? k('collapseSection', 'Collapse origin details')
                                      : k('expandSection', 'Expand origin details'),
                                    onKeyDown: (y) => {
                                      (y.key === 'Enter' || y.key === ' ') &&
                                        (y.preventDefault(), b((L) => !L));
                                    },
                                    children: [
                                      r.jsxs('span', {
                                        className: 'sino-simple-form__subsection-label',
                                        children: [
                                          k(
                                            'originDetailsTitle',
                                            'Advanced pickup details (optional)'
                                          ),
                                          r.jsx('small', {
                                            children: k(
                                              'originDetailsSubtitle',
                                              'Useful for door pickup but optional at this stage.'
                                            ),
                                          }),
                                        ],
                                      }),
                                      r.jsx('span', {
                                        className: `sino-simple-form__subsection-chevron${O ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                                        children: '▾',
                                      }),
                                    ],
                                  }),
                                  O &&
                                    r.jsxs('div', {
                                      id: 'origin-details-content',
                                      className:
                                        'sino-simple-form__fields sino-simple-form__fields--rows',
                                      children: [
                                        r.jsxs('div', {
                                          className: 'sino-simple-form__field',
                                          children: [
                                            r.jsx('label', {
                                              className: 'sino-simple-form__label',
                                              children: k(
                                                'originLocationType',
                                                'Pickup location type'
                                              ),
                                            }),
                                            r.jsx('input', {
                                              className: 'sino-simple-form__input',
                                              type: 'text',
                                              name: 'locationType',
                                              value: l.locationType,
                                              onChange: Qe,
                                              placeholder: k(
                                                'originLocationTypePlaceholder',
                                                'Factory, warehouse, port…'
                                              ),
                                            }),
                                          ],
                                        }),
                                        r.jsx('div', {
                                          className: 'sino-simple-form__field',
                                          children: r.jsx('div', {
                                            className: 'sino-simple-form__chips',
                                            children: r.jsx('button', {
                                              type: 'button',
                                              className: `sino-simple-chip${l.locationType === k('originLocationTypeUnknownValue', 'To be confirmed with supplier') ? ' sino-simple-chip--active' : ''}`,
                                              onClick: () =>
                                                c((y) => ({
                                                  ...y,
                                                  locationType: k(
                                                    'originLocationTypeUnknownValue',
                                                    'To be confirmed with supplier'
                                                  ),
                                                })),
                                              'aria-pressed':
                                                l.locationType ===
                                                k(
                                                  'originLocationTypeUnknownValue',
                                                  'To be confirmed with supplier'
                                                )
                                                  ? 'true'
                                                  : 'false',
                                              'aria-label': `${k('originLocationTypeUnknown', "I'm still discussing with my supplier")}${l.locationType === k('originLocationTypeUnknownValue', 'To be confirmed with supplier') ? ', selected' : ', not selected'}`,
                                              onKeyDown: (y) => {
                                                (y.key === 'Enter' || y.key === ' ') &&
                                                  (y.preventDefault(),
                                                  c((L) => ({
                                                    ...L,
                                                    locationType: k(
                                                      'originLocationTypeUnknownValue',
                                                      'To be confirmed with supplier'
                                                    ),
                                                  })));
                                              },
                                              children: k(
                                                'originLocationTypeUnknown',
                                                "I'm still discussing with my supplier"
                                              ),
                                            }),
                                          }),
                                        }),
                                        r.jsxs('div', {
                                          className: 'sino-simple-form__field',
                                          children: [
                                            r.jsx('label', {
                                              className: 'sino-simple-form__label',
                                              children: k(
                                                'originZipCode',
                                                'ZIP / postal code in China'
                                              ),
                                            }),
                                            r.jsx('input', {
                                              className: 'sino-simple-form__input',
                                              type: 'text',
                                              name: 'zipCode',
                                              value: l.zipCode,
                                              onChange: Qe,
                                              placeholder: k(
                                                'originZipCodePlaceholder',
                                                'e.g. 518000'
                                              ),
                                            }),
                                          ],
                                        }),
                                        r.jsxs('div', {
                                          className: 'sino-simple-form__field',
                                          children: [
                                            r.jsxs('label', {
                                              className: 'sino-simple-form__label',
                                              children: [
                                                k('originPort', 'Port of loading'),
                                                r.jsx('span', {
                                                  className: 'sino-simple-form__label-hint',
                                                  children: k('ifKnown', 'if known'),
                                                }),
                                              ],
                                            }),
                                            r.jsx('input', {
                                              className: 'sino-simple-form__input',
                                              type: 'text',
                                              name: 'origin',
                                              value: l.origin,
                                              onChange: Qe,
                                              placeholder: k(
                                                'originPortPlaceholder',
                                                'e.g. Shenzhen (Yantian), Ningbo…'
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  _e === 'shippingCargo' &&
                    Hn &&
                    r.jsxs('section', {
                      className:
                        'sino-simple-form__section sino-simple-form__section--service-shipping',
                      children: [
                        r.jsxs('h2', {
                          className: 'sino-simple-form__section-title',
                          children: [
                            r.jsx('span', {
                              className: 'sino-simple-form__section-step',
                              children: `Step ${X + 1}`,
                            }),
                            r.jsx('span', { children: k('simpleStep3Title', 'Cargo details') }),
                          ],
                        }),
                        r.jsx(nl, {
                          stepId: 'shippingCargo',
                          formData: l,
                          currentStepIndex: X,
                          totalSteps: Ee,
                          t: k,
                        }),
                        r.jsx('p', {
                          className: 'sino-simple-form__hint',
                          children: k(
                            'simpleStep3Hint',
                            'A short description, an approximate weight and a rough number of cartons/pallets is enough for a first quote.'
                          ),
                        }),
                        r.jsx('p', {
                          className: 'sino-simple-form__hint sino-simple-form__hint--secondary',
                          children: k(
                            'simpleStep3ImpactHint',
                            'These 4 fields have the biggest impact on your rates: route, mode, total weight and when the goods are ready.'
                          ),
                        }),
                        r.jsxs('div', {
                          className: 'sino-simple-form__fields sino-simple-form__fields--rows',
                          children: [
                            r.jsxs('div', {
                              className: 'sino-simple-form__field sino-simple-form__field--primary',
                              children: [
                                r.jsx('label', {
                                  className: 'sino-simple-form__label',
                                  htmlFor: 'goodsDescription',
                                  children: k('goodsDescription', 'What are you shipping?'),
                                }),
                                r.jsx('input', {
                                  className: 'sino-simple-form__input',
                                  type: 'text',
                                  name: 'goodsDescription',
                                  id: 'goodsDescription',
                                  value: l.goodsDescription,
                                  onChange: Qe,
                                  placeholder: k(
                                    'goodsDescriptionPlaceholder',
                                    'e.g. electronics, furniture, clothing…'
                                  ),
                                }),
                              ],
                            }),
                            r.jsxs('div', {
                              className: `sino-simple-form__field sino-simple-form__field--primary${V.totalWeight && H.totalWeight ? ' sino-simple-form__field--error' : ''}${V.totalWeight && !H.totalWeight && Be(l.totalWeight) ? ' sino-simple-form__field--success' : ''}`,
                              children: [
                                r.jsxs('label', {
                                  className: 'sino-simple-form__label',
                                  htmlFor: 'totalWeight',
                                  children: [
                                    k('totalWeight', 'Total Weight (kg)'),
                                    r.jsx('span', {
                                      className: 'sino-simple-form__required',
                                      'aria-label': 'required',
                                      children: '*',
                                    }),
                                  ],
                                }),
                                r.jsxs('div', {
                                  className: 'sino-simple-form__field-wrapper',
                                  children: [
                                    r.jsx('input', {
                                      className: `sino-simple-form__input${H.totalWeight ? ' sino-simple-form__input--error' : ''}${V.totalWeight && !H.totalWeight && Be(l.totalWeight) ? ' sino-simple-form__input--success' : ''}`,
                                      type: 'text',
                                      id: 'totalWeight',
                                      name: 'totalWeight',
                                      ref: Li,
                                      value: l.totalWeight,
                                      onChange: (y) => {
                                        (hn('totalWeight', y.target.value),
                                          H.totalWeight &&
                                            F((L) => {
                                              const ne = { ...L };
                                              return (delete ne.totalWeight, ne);
                                            }));
                                      },
                                      onBlur: () => fi('totalWeight', l.totalWeight),
                                      placeholder: k('totalWeightPlaceholder', 'e.g. 1 200'),
                                      'aria-label': k('totalWeight', 'Estimated total weight'),
                                      'aria-describedby': H.totalWeight
                                        ? 'totalWeight-error'
                                        : V.totalWeight && !H.totalWeight && Be(l.totalWeight)
                                          ? 'totalWeight-success'
                                          : void 0,
                                      'aria-invalid': H.totalWeight ? 'true' : 'false',
                                      'aria-required': 'true',
                                    }),
                                    V.totalWeight &&
                                      r.jsxs(r.Fragment, {
                                        children: [
                                          H.totalWeight &&
                                            r.jsx('span', {
                                              className:
                                                'sino-simple-form__field-icon sino-simple-form__field-icon--error',
                                              'aria-hidden': 'true',
                                              children: r.jsxs('svg', {
                                                width: '20',
                                                height: '20',
                                                viewBox: '0 0 24 24',
                                                fill: 'none',
                                                xmlns: 'http://www.w3.org/2000/svg',
                                                children: [
                                                  r.jsx('circle', {
                                                    cx: '12',
                                                    cy: '12',
                                                    r: '10',
                                                    stroke: 'currentColor',
                                                    strokeWidth: '2',
                                                  }),
                                                  r.jsx('line', {
                                                    x1: '12',
                                                    y1: '8',
                                                    x2: '12',
                                                    y2: '12',
                                                    stroke: 'currentColor',
                                                    strokeWidth: '2',
                                                    strokeLinecap: 'round',
                                                  }),
                                                  r.jsx('line', {
                                                    x1: '12',
                                                    y1: '16',
                                                    x2: '12.01',
                                                    y2: '16',
                                                    stroke: 'currentColor',
                                                    strokeWidth: '2',
                                                    strokeLinecap: 'round',
                                                  }),
                                                ],
                                              }),
                                            }),
                                          !H.totalWeight &&
                                            Be(l.totalWeight) &&
                                            r.jsx('span', {
                                              className:
                                                'sino-simple-form__field-icon sino-simple-form__field-icon--success',
                                              'aria-hidden': 'true',
                                              children: r.jsxs('svg', {
                                                width: '20',
                                                height: '20',
                                                viewBox: '0 0 24 24',
                                                fill: 'none',
                                                xmlns: 'http://www.w3.org/2000/svg',
                                                children: [
                                                  r.jsx('circle', {
                                                    cx: '12',
                                                    cy: '12',
                                                    r: '10',
                                                    stroke: 'currentColor',
                                                    strokeWidth: '2',
                                                  }),
                                                  r.jsx('path', {
                                                    d: 'M8 12l2 2 4-4',
                                                    stroke: 'currentColor',
                                                    strokeWidth: '2',
                                                    strokeLinecap: 'round',
                                                    strokeLinejoin: 'round',
                                                  }),
                                                ],
                                              }),
                                            }),
                                        ],
                                      }),
                                  ],
                                }),
                                H.totalWeight &&
                                  r.jsx('p', {
                                    id: 'totalWeight-error',
                                    className: 'sino-simple-form__field-error',
                                    role: 'alert',
                                    'aria-live': 'polite',
                                    children: H.totalWeight,
                                  }),
                                V.totalWeight &&
                                  !H.totalWeight &&
                                  Be(l.totalWeight) &&
                                  r.jsx('p', {
                                    id: 'totalWeight-success',
                                    className: 'sino-simple-form__sr-only',
                                    'aria-live': 'polite',
                                    children: k('fieldValid', 'Field is valid'),
                                  }),
                                r.jsx('p', {
                                  className: 'sino-simple-form__help',
                                  children: k(
                                    'totalWeightHelp',
                                    'Rough estimate is OK. We refine it together before booking.'
                                  ),
                                }),
                              ],
                            }),
                            r.jsxs('div', {
                              className: 'sino-simple-form__field',
                              children: [
                                r.jsx('label', {
                                  className: `sino-simple-form__label${p ? ' sino-simple-form__label--muted' : ''}`,
                                  htmlFor: 'numberOfUnits',
                                  children: k('numberOfUnits', 'Number of cartons / pallets'),
                                }),
                                r.jsxs('div', {
                                  className: 'sino-simple-form__field-input-group',
                                  children: [
                                    r.jsx('input', {
                                      className: 'sino-simple-form__input',
                                      type: 'number',
                                      min: 1,
                                      id: 'numberOfUnits',
                                      value: l.numberOfUnits,
                                      onChange: (y) => {
                                        (h(!1), hn('numberOfUnits', Number(y.target.value)));
                                      },
                                      placeholder: k('numberOfUnitsPlaceholder', 'e.g. 10 pallets'),
                                    }),
                                    r.jsx('div', {
                                      className: 'sino-simple-form__chips',
                                      children: r.jsx('button', {
                                        type: 'button',
                                        className: `sino-simple-chip${p ? ' sino-simple-chip--active' : ''}`,
                                        'aria-pressed': p ? 'true' : 'false',
                                        onClick: () => {
                                          (h(!0), hn('numberOfUnits', 0));
                                        },
                                        children: k(
                                          'numberOfUnitsUnknown',
                                          "I don't know the exact number yet"
                                        ),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            r.jsxs('div', {
                              className: 'sino-simple-form__field',
                              children: [
                                r.jsx('label', {
                                  className: `sino-simple-form__label${w ? ' sino-simple-form__label--muted' : ''}`,
                                  htmlFor: 'goodsValue',
                                  children: k('goodsValue', 'Estimated cargo value'),
                                }),
                                r.jsxs('div', {
                                  className: 'sino-simple-form__field-input-group',
                                  children: [
                                    r.jsx('input', {
                                      className: 'sino-simple-form__input',
                                      type: 'text',
                                      name: 'goodsValue',
                                      id: 'goodsValue',
                                      value: l.goodsValue,
                                      onChange: (y) => {
                                        (N(!1), Qe(y));
                                      },
                                      placeholder: k('goodsValuePlaceholder', 'e.g. 25 000'),
                                    }),
                                    r.jsx('div', {
                                      className: 'sino-simple-form__chips',
                                      children: r.jsx('button', {
                                        type: 'button',
                                        className: `sino-simple-chip${w ? ' sino-simple-chip--active' : ''}`,
                                        'aria-pressed': w ? 'true' : 'false',
                                        onClick: () => {
                                          (N(!0), c((y) => ({ ...y, goodsValue: '' })));
                                        },
                                        children: k(
                                          'goodsValueUnknown',
                                          "I don't know the value yet"
                                        ),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            r.jsxs('div', {
                              className: 'sino-simple-form__field',
                              children: [
                                r.jsx('label', {
                                  className: 'sino-simple-form__label',
                                  htmlFor: 'goodsCurrency',
                                  children: k('goodsCurrency', 'Currency'),
                                }),
                                r.jsx('input', {
                                  className: 'sino-simple-form__input',
                                  type: 'text',
                                  name: 'goodsCurrency',
                                  id: 'goodsCurrency',
                                  value: l.goodsCurrency,
                                  onChange: Qe,
                                  placeholder: k('goodsCurrencyPlaceholder', 'USD, EUR…'),
                                }),
                              ],
                            }),
                            r.jsxs('div', {
                              className: 'sino-simple-form__field sino-simple-form__field--primary',
                              children: [
                                r.jsx('label', {
                                  className: 'sino-simple-form__label',
                                  children: k('areGoodsReady', 'Are the goods ready?'),
                                }),
                                r.jsx('div', {
                                  className:
                                    'sino-simple-form__chips sino-simple-form__chips--wrap',
                                  children: [
                                    { value: 'yes', label: k('goodsReadyNow', 'Ready now') },
                                    {
                                      value: 'no_in_1_week',
                                      label: k('goodsReady1Week', 'In ~1 week'),
                                    },
                                    {
                                      value: 'no_in_2_weeks',
                                      label: k('goodsReady2Weeks', 'In ~2 weeks'),
                                    },
                                    {
                                      value: 'no_in_1_month',
                                      label: k('goodsReady1Month', 'In ~1 month'),
                                    },
                                    {
                                      value: 'no_date_set',
                                      label: k('goodsReadyNoDate', 'No date set yet'),
                                    },
                                  ].map((y) =>
                                    r.jsx(
                                      'button',
                                      {
                                        type: 'button',
                                        className: `sino-simple-chip${l.areGoodsReady === y.value ? ' sino-simple-chip--active' : ''}`,
                                        'aria-pressed':
                                          l.areGoodsReady === y.value ? 'true' : 'false',
                                        onClick: () =>
                                          c((L) => ({
                                            ...L,
                                            areGoodsReady:
                                              L.areGoodsReady === y.value ? '' : y.value,
                                          })),
                                        children: y.label,
                                      },
                                      y.value
                                    )
                                  ),
                                }),
                              ],
                            }),
                            r.jsxs('div', {
                              className: 'sino-simple-form__field',
                              children: [
                                r.jsxs('label', {
                                  className: 'sino-simple-form__label',
                                  children: [
                                    k('annualVolumeLabel', 'Rough annual volume from China'),
                                    r.jsx('span', {
                                      className: 'sino-simple-form__label-hint',
                                      children: k('ifKnown', 'if known'),
                                    }),
                                  ],
                                }),
                                r.jsx('div', {
                                  className:
                                    'sino-simple-form__chips sino-simple-form__chips--wrap',
                                  children: [
                                    { value: '50 ~ 500', label: '50 ~ 500' },
                                    { value: '501 ~ 1000', label: '501 ~ 1000' },
                                    { value: '1001 ~ 5000', label: '1001 ~ 5000' },
                                    { value: '5001+', label: '5001+' },
                                  ].map((y) =>
                                    r.jsx(
                                      'button',
                                      {
                                        type: 'button',
                                        className: `sino-simple-chip${l.annualVolume === y.value ? ' sino-simple-chip--active' : ''}`,
                                        'aria-pressed':
                                          l.annualVolume === y.value ? 'true' : 'false',
                                        onClick: () =>
                                          c((L) => ({
                                            ...L,
                                            annualVolume: L.annualVolume === y.value ? '' : y.value,
                                          })),
                                        children: y.label,
                                      },
                                      y.value
                                    )
                                  ),
                                }),
                              ],
                            }),
                            r.jsxs('div', {
                              className: 'sino-simple-form__field',
                              children: [
                                r.jsx('label', {
                                  className: 'sino-simple-form__label',
                                  children: k(
                                    'isPersonalOrHazardous',
                                    'Personal effects or hazardous goods?'
                                  ),
                                }),
                                r.jsx('div', {
                                  className: 'sino-simple-form__chips',
                                  children: [
                                    {
                                      value: !0,
                                      label: k(
                                        'personalOrHazardousYes',
                                        'Yes, personal or hazardous'
                                      ),
                                    },
                                    {
                                      value: !1,
                                      label: k(
                                        'personalOrHazardousNo',
                                        'No, standard commercial goods'
                                      ),
                                    },
                                  ].map((y) =>
                                    r.jsx(
                                      'button',
                                      {
                                        type: 'button',
                                        className: `sino-simple-chip${l.isPersonalOrHazardous === y.value ? ' sino-simple-chip--active' : ''}`,
                                        'aria-pressed':
                                          l.isPersonalOrHazardous === y.value ? 'true' : 'false',
                                        onClick: () =>
                                          c((L) => ({ ...L, isPersonalOrHazardous: y.value })),
                                        children: y.label,
                                      },
                                      String(y.value)
                                    )
                                  ),
                                }),
                                r.jsx('p', {
                                  className: 'sino-simple-form__help',
                                  children: k(
                                    'isPersonalOrHazardousHelp',
                                    'This only helps us pick the right specialist on our side – it does not change your pricing automatically.'
                                  ),
                                }),
                              ],
                            }),
                            r.jsxs('div', {
                              className: `sino-simple-form__subsection${Z ? ' sino-simple-form__subsection--open' : ''}`,
                              children: [
                                r.jsxs('button', {
                                  type: 'button',
                                  className: 'sino-simple-form__subsection-toggle',
                                  onClick: () => Q((y) => !y),
                                  'aria-expanded': Z,
                                  'aria-controls': 'advanced-details-content',
                                  'aria-label': Z
                                    ? k('collapseSection', 'Collapse advanced cargo details')
                                    : k('expandSection', 'Expand advanced cargo details'),
                                  onKeyDown: (y) => {
                                    (y.key === 'Enter' || y.key === ' ') &&
                                      (y.preventDefault(), Q((L) => !L));
                                  },
                                  children: [
                                    r.jsxs('span', {
                                      className: 'sino-simple-form__subsection-label',
                                      children: [
                                        k('simpleStep4Title', 'Advanced cargo details (optional)'),
                                        r.jsx('small', {
                                          children: k(
                                            'simpleStep4Subtitle',
                                            'Dimensions and remarks help us fine-tune the quote but are not mandatory.'
                                          ),
                                        }),
                                      ],
                                    }),
                                    r.jsx('span', {
                                      className: `sino-simple-form__subsection-chevron${Z ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                                      children: '▾',
                                    }),
                                  ],
                                }),
                                Z &&
                                  r.jsxs('div', {
                                    id: 'advanced-details-content',
                                    className:
                                      'sino-simple-form__fields sino-simple-form__fields--rows',
                                    children: [
                                      r.jsxs('div', {
                                        className: 'sino-simple-form__field',
                                        children: [
                                          r.jsx('label', {
                                            className: `sino-simple-form__label${C ? ' sino-simple-form__label--muted' : ''}`,
                                            children: k(
                                              'dimensions',
                                              'Approximate dimensions per unit'
                                            ),
                                          }),
                                          r.jsxs('div', {
                                            className:
                                              'sino-simple-form__fields sino-simple-form__fields--inline',
                                            children: [
                                              r.jsx('input', {
                                                className: 'sino-simple-form__input',
                                                type: 'text',
                                                value: l.dimensions.length,
                                                onChange: (y) =>
                                                  hn('dimensions', {
                                                    ...l.dimensions,
                                                    length: y.target.value,
                                                  }),
                                                placeholder: k('lengthPlaceholder', 'L (cm)'),
                                              }),
                                              r.jsx('input', {
                                                className: 'sino-simple-form__input',
                                                type: 'text',
                                                value: l.dimensions.width,
                                                onChange: (y) =>
                                                  hn('dimensions', {
                                                    ...l.dimensions,
                                                    width: y.target.value,
                                                  }),
                                                placeholder: k('widthPlaceholder', 'W (cm)'),
                                              }),
                                              r.jsx('input', {
                                                className: 'sino-simple-form__input',
                                                type: 'text',
                                                value: l.dimensions.height,
                                                onChange: (y) =>
                                                  hn('dimensions', {
                                                    ...l.dimensions,
                                                    height: y.target.value,
                                                  }),
                                                placeholder: k('heightPlaceholder', 'H (cm)'),
                                              }),
                                            ],
                                          }),
                                          r.jsx('div', {
                                            className:
                                              'sino-simple-form__chips sino-simple-form__chips--wrap',
                                            children: r.jsx('button', {
                                              type: 'button',
                                              className: `sino-simple-chip${C ? ' sino-simple-chip--active' : ''}`,
                                              'aria-pressed': C ? 'true' : 'false',
                                              onClick: () => {
                                                (j(!0),
                                                  hn('dimensions', {
                                                    length: '',
                                                    width: '',
                                                    height: '',
                                                  }));
                                              },
                                              children: k(
                                                'dimensionsUnknown',
                                                "I don't know the exact dimensions yet"
                                              ),
                                            }),
                                          }),
                                        ],
                                      }),
                                      r.jsxs('div', {
                                        className: 'sino-simple-form__field',
                                        children: [
                                          r.jsxs('label', {
                                            className: 'sino-simple-form__label',
                                            children: [
                                              k('weightPerUnit', 'Weight per unit'),
                                              r.jsx('span', {
                                                className: 'sino-simple-form__label-hint',
                                                children: k('ifKnown', 'if known'),
                                              }),
                                            ],
                                          }),
                                          r.jsx('input', {
                                            className: 'sino-simple-form__input',
                                            type: 'text',
                                            value: l.weightPerUnit,
                                            onChange: (y) => {
                                              hn('weightPerUnit', y.target.value);
                                            },
                                            placeholder: k(
                                              'weightPerUnitPlaceholder',
                                              'e.g. 25 kg per pallet'
                                            ),
                                          }),
                                          r.jsx('p', {
                                            className: 'sino-simple-form__help',
                                            children: k(
                                              'weightPerUnitHelp',
                                              'If you know the weight per unit, we can calculate the total weight automatically.'
                                            ),
                                          }),
                                        ],
                                      }),
                                      r.jsx(Bp, { formData: l, setFormData: c, t: k }),
                                      r.jsxs('div', {
                                        className: 'sino-simple-form__field',
                                        children: [
                                          r.jsx('label', {
                                            className: 'sino-simple-form__label',
                                            children: k('remarks', 'Anything we should know?'),
                                          }),
                                          r.jsx('input', {
                                            className: 'sino-simple-form__input',
                                            type: 'text',
                                            name: 'remarks',
                                            value: l.remarks,
                                            onChange: Qe,
                                            placeholder: k(
                                              'remarksPlaceholder',
                                              'Fragile goods, specific deadlines, preferred routing…'
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  _e === 'contact' &&
                    r.jsxs(r.Fragment, {
                      children: [
                        r.jsx(xp, {
                          formData: l,
                          setFormData: c,
                          t: k,
                          isFilled: Be,
                          onChange: Qe,
                          onBlur: fi,
                          fieldErrors: H,
                          fieldTouched: V,
                          firstNameRef: ot,
                          emailRef: Ri,
                          phoneRef: qn,
                          stepLabel: `Step ${X + 1}`,
                          currentStepIndex: X,
                          totalSteps: Ee,
                        }),
                        r.jsx(Rp, {
                          formData: l,
                          t: k,
                          selectedServiceLabels: Dn,
                          submitError: Ge,
                          setSubmitError: We,
                          isSubmitting: cn,
                          setIsSubmitting: Ae,
                          scrollToFirstError: En,
                          onSubmissionSuccess: at,
                          setFieldErrors: F,
                          setFieldTouched: A,
                          orderedSteps: en,
                          onEditStep: (y) => {
                            (Te(y),
                              typeof window < 'u' &&
                                window.scrollTo({ top: 0, behavior: 'smooth' }));
                          },
                        }),
                      ],
                    }),
                ],
              }),
              r.jsx(
                Fp,
                {
                  currentStep: X,
                  totalSteps: Ee,
                  onNext: Zt,
                  onPrevious: us,
                  isFirstStep: Yt,
                  isLastStep: as,
                  orderedSteps: en,
                  formData: l,
                  t: k,
                },
                `nav-${Ee}-${X}-${JSON.stringify(l.servicesRequested)}`
              ),
            ],
          }),
        });
  },
  Kt = new Map();
function ac(l) {
  const c = document.getElementById(l);
  if (!c) {
    console.error(`[SinoSimpleForm] Container with id "${l}" not found`);
    return;
  }
  if (Kt.has(l)) {
    console.warn(`[SinoSimpleForm] Container "${l}" is already initialized`);
    return;
  }
  c.innerHTML = '';
  const a = pp.createRoot(c);
  (a.render(
    r.jsx(W.StrictMode, {
      children: r.jsx('div', {
        className: 'sino-simple-form-root',
        children: r.jsx(fp, { children: r.jsx(tm, {}) }),
      }),
    })
  ),
    Kt.set(l, a),
    console.log(`[SinoSimpleForm] Initialized in container "${l}"`));
}
function rm(l) {
  const c = Kt.get(l);
  if (!c) {
    console.warn(`[SinoSimpleForm] No instance found for container "${l}"`);
    return;
  }
  (c.unmount(), Kt.delete(l));
  const a = document.getElementById(l);
  (a && (a.innerHTML = ''), console.log(`[SinoSimpleForm] Destroyed instance in container "${l}"`));
}
function uc(l) {
  return Kt.has(l);
}
const sm = { init: ac, destroy: rm, isInitialized: uc };
typeof window < 'u' &&
  ((window.SinoSimpleForm = sm),
  console.log('[SinoSimpleForm] Global API initialized (simple v2)'),
  window.addEventListener('DOMContentLoaded', () => {
    const l = 'sinoform-react-root';
    document.getElementById(l) && !uc(l) && ac(l);
  }));
