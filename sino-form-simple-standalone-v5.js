(function () {
  const u = document.createElement('link').relList;
  if (u && u.supports && u.supports('modulepreload')) return;
  for (const w of document.querySelectorAll('link[rel="modulepreload"]')) v(w);
  new MutationObserver((w) => {
    for (const S of w)
      if (S.type === 'childList')
        for (const k of S.addedNodes) k.tagName === 'LINK' && k.rel === 'modulepreload' && v(k);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(w) {
    const S = {};
    return (
      w.integrity && (S.integrity = w.integrity),
      w.referrerPolicy && (S.referrerPolicy = w.referrerPolicy),
      w.crossOrigin === 'use-credentials'
        ? (S.credentials = 'include')
        : w.crossOrigin === 'anonymous'
          ? (S.credentials = 'omit')
          : (S.credentials = 'same-origin'),
      S
    );
  }
  function v(w) {
    if (w.ep) return;
    w.ep = !0;
    const S = s(w);
    fetch(w.href, S);
  }
})();
(function () {
  const l = document.createElement('link').relList;
  if (l && l.supports && l.supports('modulepreload')) return;
  for (const v of document.querySelectorAll('link[rel="modulepreload"]')) s(v);
  new MutationObserver((v) => {
    for (const w of v)
      if (w.type === 'childList')
        for (const S of w.addedNodes) S.tagName === 'LINK' && S.rel === 'modulepreload' && s(S);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(v) {
    const w = {};
    return (
      v.integrity && (w.integrity = v.integrity),
      v.referrerPolicy && (w.referrerPolicy = v.referrerPolicy),
      v.crossOrigin === 'use-credentials'
        ? (w.credentials = 'include')
        : v.crossOrigin === 'anonymous'
          ? (w.credentials = 'omit')
          : (w.credentials = 'same-origin'),
      w
    );
  }
  function s(v) {
    if (v.ep) return;
    v.ep = !0;
    const w = u(v);
    fetch(v.href, w);
  }
})();
var Mc = { exports: {} },
  Hn = {},
  Wc = { exports: {} },
  ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oc;
function im() {
  if (Oc) return ie;
  Oc = 1;
  var l = Symbol.for('react.element'),
    u = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    v = Symbol.for('react.strict_mode'),
    w = Symbol.for('react.profiler'),
    S = Symbol.for('react.provider'),
    k = Symbol.for('react.context'),
    p = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    R = Symbol.for('react.memo'),
    $ = Symbol.for('react.lazy'),
    M = Symbol.iterator;
  function W(m) {
    return m === null || typeof m != 'object'
      ? null
      : ((m = (M && m[M]) || m['@@iterator']), typeof m == 'function' ? m : null);
  }
  var Z = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    G = Object.assign,
    C = {};
  function P(m, N, K) {
    ((this.props = m), (this.context = N), (this.refs = C), (this.updater = K || Z));
  }
  ((P.prototype.isReactComponent = {}),
    (P.prototype.setState = function (m, N) {
      if (typeof m != 'object' && typeof m != 'function' && m != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, m, N, 'setState');
    }),
    (P.prototype.forceUpdate = function (m) {
      this.updater.enqueueForceUpdate(this, m, 'forceUpdate');
    }));
  function ue() {}
  ue.prototype = P.prototype;
  function de(m, N, K) {
    ((this.props = m), (this.context = N), (this.refs = C), (this.updater = K || Z));
  }
  var ne = (de.prototype = new ue());
  ((ne.constructor = de), G(ne, P.prototype), (ne.isPureReactComponent = !0));
  var ae = Array.isArray,
    ge = Object.prototype.hasOwnProperty,
    pe = { current: null },
    Fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ze(m, N, K) {
    var J,
      ee = {},
      oe = null,
      he = null;
    if (N != null)
      for (J in (N.ref !== void 0 && (he = N.ref), N.key !== void 0 && (oe = '' + N.key), N))
        ge.call(N, J) && !Fe.hasOwnProperty(J) && (ee[J] = N[J]);
    var le = arguments.length - 2;
    if (le === 1) ee.children = K;
    else if (1 < le) {
      for (var be = Array(le), Ke = 0; Ke < le; Ke++) be[Ke] = arguments[Ke + 2];
      ee.children = be;
    }
    if (m && m.defaultProps)
      for (J in ((le = m.defaultProps), le)) ee[J] === void 0 && (ee[J] = le[J]);
    return { $$typeof: l, type: m, key: oe, ref: he, props: ee, _owner: pe.current };
  }
  function Ge(m, N) {
    return { $$typeof: l, type: m.type, key: N, ref: m.ref, props: m.props, _owner: m._owner };
  }
  function qe(m) {
    return typeof m == 'object' && m !== null && m.$$typeof === l;
  }
  function ct(m) {
    var N = { '=': '=0', ':': '=2' };
    return (
      '$' +
      m.replace(/[=:]/g, function (K) {
        return N[K];
      })
    );
  }
  var Me = /\/+/g;
  function Ne(m, N) {
    return typeof m == 'object' && m !== null && m.key != null ? ct('' + m.key) : N.toString(36);
  }
  function et(m, N, K, J, ee) {
    var oe = typeof m;
    (oe === 'undefined' || oe === 'boolean') && (m = null);
    var he = !1;
    if (m === null) he = !0;
    else
      switch (oe) {
        case 'string':
        case 'number':
          he = !0;
          break;
        case 'object':
          switch (m.$$typeof) {
            case l:
            case u:
              he = !0;
          }
      }
    if (he)
      return (
        (he = m),
        (ee = ee(he)),
        (m = J === '' ? '.' + Ne(he, 0) : J),
        ae(ee)
          ? ((K = ''),
            m != null && (K = m.replace(Me, '$&/') + '/'),
            et(ee, N, K, '', function (Ke) {
              return Ke;
            }))
          : ee != null &&
            (qe(ee) &&
              (ee = Ge(
                ee,
                K +
                  (!ee.key || (he && he.key === ee.key)
                    ? ''
                    : ('' + ee.key).replace(Me, '$&/') + '/') +
                  m
              )),
            N.push(ee)),
        1
      );
    if (((he = 0), (J = J === '' ? '.' : J + ':'), ae(m)))
      for (var le = 0; le < m.length; le++) {
        oe = m[le];
        var be = J + Ne(oe, le);
        he += et(oe, N, K, be, ee);
      }
    else if (((be = W(m)), typeof be == 'function'))
      for (m = be.call(m), le = 0; !(oe = m.next()).done; )
        ((oe = oe.value), (be = J + Ne(oe, le++)), (he += et(oe, N, K, be, ee)));
    else if (oe === 'object')
      throw (
        (N = String(m)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (N === '[object Object]' ? 'object with keys {' + Object.keys(m).join(', ') + '}' : N) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    return he;
  }
  function re(m, N, K) {
    if (m == null) return m;
    var J = [],
      ee = 0;
    return (
      et(m, J, '', '', function (oe) {
        return N.call(K, oe, ee++);
      }),
      J
    );
  }
  function ve(m) {
    if (m._status === -1) {
      var N = m._result;
      ((N = N()),
        N.then(
          function (K) {
            (m._status === 0 || m._status === -1) && ((m._status = 1), (m._result = K));
          },
          function (K) {
            (m._status === 0 || m._status === -1) && ((m._status = 2), (m._result = K));
          }
        ),
        m._status === -1 && ((m._status = 0), (m._result = N)));
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var me = { current: null },
    O = { transition: null },
    z = { ReactCurrentDispatcher: me, ReactCurrentBatchConfig: O, ReactCurrentOwner: pe };
  function A() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (ie.Children = {
      map: re,
      forEach: function (m, N, K) {
        re(
          m,
          function () {
            N.apply(this, arguments);
          },
          K
        );
      },
      count: function (m) {
        var N = 0;
        return (
          re(m, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (m) {
        return (
          re(m, function (N) {
            return N;
          }) || []
        );
      },
      only: function (m) {
        if (!qe(m))
          throw Error('React.Children.only expected to receive a single React element child.');
        return m;
      },
    }),
    (ie.Component = P),
    (ie.Fragment = s),
    (ie.Profiler = w),
    (ie.PureComponent = de),
    (ie.StrictMode = v),
    (ie.Suspense = h),
    (ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
    (ie.act = A),
    (ie.cloneElement = function (m, N, K) {
      if (m == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + m + '.'
        );
      var J = G({}, m.props),
        ee = m.key,
        oe = m.ref,
        he = m._owner;
      if (N != null) {
        if (
          (N.ref !== void 0 && ((oe = N.ref), (he = pe.current)),
          N.key !== void 0 && (ee = '' + N.key),
          m.type && m.type.defaultProps)
        )
          var le = m.type.defaultProps;
        for (be in N)
          ge.call(N, be) &&
            !Fe.hasOwnProperty(be) &&
            (J[be] = N[be] === void 0 && le !== void 0 ? le[be] : N[be]);
      }
      var be = arguments.length - 2;
      if (be === 1) J.children = K;
      else if (1 < be) {
        le = Array(be);
        for (var Ke = 0; Ke < be; Ke++) le[Ke] = arguments[Ke + 2];
        J.children = le;
      }
      return { $$typeof: l, type: m.type, key: ee, ref: oe, props: J, _owner: he };
    }),
    (ie.createContext = function (m) {
      return (
        (m = {
          $$typeof: k,
          _currentValue: m,
          _currentValue2: m,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (m.Provider = { $$typeof: S, _context: m }),
        (m.Consumer = m)
      );
    }),
    (ie.createElement = ze),
    (ie.createFactory = function (m) {
      var N = ze.bind(null, m);
      return ((N.type = m), N);
    }),
    (ie.createRef = function () {
      return { current: null };
    }),
    (ie.forwardRef = function (m) {
      return { $$typeof: p, render: m };
    }),
    (ie.isValidElement = qe),
    (ie.lazy = function (m) {
      return { $$typeof: $, _payload: { _status: -1, _result: m }, _init: ve };
    }),
    (ie.memo = function (m, N) {
      return { $$typeof: R, type: m, compare: N === void 0 ? null : N };
    }),
    (ie.startTransition = function (m) {
      var N = O.transition;
      O.transition = {};
      try {
        m();
      } finally {
        O.transition = N;
      }
    }),
    (ie.unstable_act = A),
    (ie.useCallback = function (m, N) {
      return me.current.useCallback(m, N);
    }),
    (ie.useContext = function (m) {
      return me.current.useContext(m);
    }),
    (ie.useDebugValue = function () {}),
    (ie.useDeferredValue = function (m) {
      return me.current.useDeferredValue(m);
    }),
    (ie.useEffect = function (m, N) {
      return me.current.useEffect(m, N);
    }),
    (ie.useId = function () {
      return me.current.useId();
    }),
    (ie.useImperativeHandle = function (m, N, K) {
      return me.current.useImperativeHandle(m, N, K);
    }),
    (ie.useInsertionEffect = function (m, N) {
      return me.current.useInsertionEffect(m, N);
    }),
    (ie.useLayoutEffect = function (m, N) {
      return me.current.useLayoutEffect(m, N);
    }),
    (ie.useMemo = function (m, N) {
      return me.current.useMemo(m, N);
    }),
    (ie.useReducer = function (m, N, K) {
      return me.current.useReducer(m, N, K);
    }),
    (ie.useRef = function (m) {
      return me.current.useRef(m);
    }),
    (ie.useState = function (m) {
      return me.current.useState(m);
    }),
    (ie.useSyncExternalStore = function (m, N, K) {
      return me.current.useSyncExternalStore(m, N, K);
    }),
    (ie.useTransition = function () {
      return me.current.useTransition();
    }),
    (ie.version = '18.3.1'),
    ie
  );
}
var Ic;
function Jo() {
  return (Ic || ((Ic = 1), (Wc.exports = im())), Wc.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ac;
function am() {
  if (Ac) return Hn;
  Ac = 1;
  var l = Jo(),
    u = Symbol.for('react.element'),
    s = Symbol.for('react.fragment'),
    v = Object.prototype.hasOwnProperty,
    w = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(p, h, R) {
    var $,
      M = {},
      W = null,
      Z = null;
    (R !== void 0 && (W = '' + R),
      h.key !== void 0 && (W = '' + h.key),
      h.ref !== void 0 && (Z = h.ref));
    for ($ in h) v.call(h, $) && !S.hasOwnProperty($) && (M[$] = h[$]);
    if (p && p.defaultProps) for ($ in ((h = p.defaultProps), h)) M[$] === void 0 && (M[$] = h[$]);
    return { $$typeof: u, type: p, key: W, ref: Z, props: M, _owner: w.current };
  }
  return ((Hn.Fragment = s), (Hn.jsx = k), (Hn.jsxs = k), Hn);
}
var Vc;
function om() {
  return (Vc || ((Vc = 1), (Mc.exports = am())), Mc.exports);
}
var i = om(),
  I = Jo(),
  oa = {},
  Go = { exports: {} },
  lt = {},
  qc = { exports: {} },
  Uc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bc;
function sm() {
  return (
    Bc ||
      ((Bc = 1),
      (function (l) {
        function u(O, z) {
          var A = O.length;
          O.push(z);
          e: for (; 0 < A; ) {
            var m = (A - 1) >>> 1,
              N = O[m];
            if (0 < w(N, z)) ((O[m] = z), (O[A] = N), (A = m));
            else break e;
          }
        }
        function s(O) {
          return O.length === 0 ? null : O[0];
        }
        function v(O) {
          if (O.length === 0) return null;
          var z = O[0],
            A = O.pop();
          if (A !== z) {
            O[0] = A;
            e: for (var m = 0, N = O.length, K = N >>> 1; m < K; ) {
              var J = 2 * (m + 1) - 1,
                ee = O[J],
                oe = J + 1,
                he = O[oe];
              if (0 > w(ee, A))
                oe < N && 0 > w(he, ee)
                  ? ((O[m] = he), (O[oe] = A), (m = oe))
                  : ((O[m] = ee), (O[J] = A), (m = J));
              else if (oe < N && 0 > w(he, A)) ((O[m] = he), (O[oe] = A), (m = oe));
              else break e;
            }
          }
          return z;
        }
        function w(O, z) {
          var A = O.sortIndex - z.sortIndex;
          return A !== 0 ? A : O.id - z.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var S = performance;
          l.unstable_now = function () {
            return S.now();
          };
        } else {
          var k = Date,
            p = k.now();
          l.unstable_now = function () {
            return k.now() - p;
          };
        }
        var h = [],
          R = [],
          $ = 1,
          M = null,
          W = 3,
          Z = !1,
          G = !1,
          C = !1,
          P = typeof setTimeout == 'function' ? setTimeout : null,
          ue = typeof clearTimeout == 'function' ? clearTimeout : null,
          de = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function ne(O) {
          for (var z = s(R); z !== null; ) {
            if (z.callback === null) v(R);
            else if (z.startTime <= O) (v(R), (z.sortIndex = z.expirationTime), u(h, z));
            else break;
            z = s(R);
          }
        }
        function ae(O) {
          if (((C = !1), ne(O), !G))
            if (s(h) !== null) ((G = !0), ve(ge));
            else {
              var z = s(R);
              z !== null && me(ae, z.startTime - O);
            }
        }
        function ge(O, z) {
          ((G = !1), C && ((C = !1), ue(ze), (ze = -1)), (Z = !0));
          var A = W;
          try {
            for (ne(z), M = s(h); M !== null && (!(M.expirationTime > z) || (O && !ct())); ) {
              var m = M.callback;
              if (typeof m == 'function') {
                ((M.callback = null), (W = M.priorityLevel));
                var N = m(M.expirationTime <= z);
                ((z = l.unstable_now()),
                  typeof N == 'function' ? (M.callback = N) : M === s(h) && v(h),
                  ne(z));
              } else v(h);
              M = s(h);
            }
            if (M !== null) var K = !0;
            else {
              var J = s(R);
              (J !== null && me(ae, J.startTime - z), (K = !1));
            }
            return K;
          } finally {
            ((M = null), (W = A), (Z = !1));
          }
        }
        var pe = !1,
          Fe = null,
          ze = -1,
          Ge = 5,
          qe = -1;
        function ct() {
          return !(l.unstable_now() - qe < Ge);
        }
        function Me() {
          if (Fe !== null) {
            var O = l.unstable_now();
            qe = O;
            var z = !0;
            try {
              z = Fe(!0, O);
            } finally {
              z ? Ne() : ((pe = !1), (Fe = null));
            }
          } else pe = !1;
        }
        var Ne;
        if (typeof de == 'function')
          Ne = function () {
            de(Me);
          };
        else if (typeof MessageChannel < 'u') {
          var et = new MessageChannel(),
            re = et.port2;
          ((et.port1.onmessage = Me),
            (Ne = function () {
              re.postMessage(null);
            }));
        } else
          Ne = function () {
            P(Me, 0);
          };
        function ve(O) {
          ((Fe = O), pe || ((pe = !0), Ne()));
        }
        function me(O, z) {
          ze = P(function () {
            O(l.unstable_now());
          }, z);
        }
        ((l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (l.unstable_continueExecution = function () {
            G || Z || ((G = !0), ve(ge));
          }),
          (l.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Ge = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return W;
          }),
          (l.unstable_getFirstCallbackNode = function () {
            return s(h);
          }),
          (l.unstable_next = function (O) {
            switch (W) {
              case 1:
              case 2:
              case 3:
                var z = 3;
                break;
              default:
                z = W;
            }
            var A = W;
            W = z;
            try {
              return O();
            } finally {
              W = A;
            }
          }),
          (l.unstable_pauseExecution = function () {}),
          (l.unstable_requestPaint = function () {}),
          (l.unstable_runWithPriority = function (O, z) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var A = W;
            W = O;
            try {
              return z();
            } finally {
              W = A;
            }
          }),
          (l.unstable_scheduleCallback = function (O, z, A) {
            var m = l.unstable_now();
            switch (
              (typeof A == 'object' && A !== null
                ? ((A = A.delay), (A = typeof A == 'number' && 0 < A ? m + A : m))
                : (A = m),
              O)
            ) {
              case 1:
                var N = -1;
                break;
              case 2:
                N = 250;
                break;
              case 5:
                N = 1073741823;
                break;
              case 4:
                N = 1e4;
                break;
              default:
                N = 5e3;
            }
            return (
              (N = A + N),
              (O = {
                id: $++,
                callback: z,
                priorityLevel: O,
                startTime: A,
                expirationTime: N,
                sortIndex: -1,
              }),
              A > m
                ? ((O.sortIndex = A),
                  u(R, O),
                  s(h) === null &&
                    O === s(R) &&
                    (C ? (ue(ze), (ze = -1)) : (C = !0), me(ae, A - m)))
                : ((O.sortIndex = N), u(h, O), G || Z || ((G = !0), ve(ge))),
              O
            );
          }),
          (l.unstable_shouldYield = ct),
          (l.unstable_wrapCallback = function (O) {
            var z = W;
            return function () {
              var A = W;
              W = z;
              try {
                return O.apply(this, arguments);
              } finally {
                W = A;
              }
            };
          }));
      })(Uc)),
    Uc
  );
}
var Hc;
function lm() {
  return (Hc || ((Hc = 1), (qc.exports = sm())), qc.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $c;
function cm() {
  if ($c) return lt;
  $c = 1;
  var l = Jo(),
    u = lm();
  function s(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 1;
      r < arguments.length;
      r++
    )
      t += '&args[]=' + encodeURIComponent(arguments[r]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var v = new Set(),
    w = {};
  function S(e, t) {
    (k(e, t), k(e + 'Capture', t));
  }
  function k(e, t) {
    for (w[e] = t, e = 0; e < t.length; e++) v.add(t[e]);
  }
  var p = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    h = Object.prototype.hasOwnProperty,
    R =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    $ = {},
    M = {};
  function W(e) {
    return h.call(M, e) ? !0 : h.call($, e) ? !1 : R.test(e) ? (M[e] = !0) : (($[e] = !0), !1);
  }
  function Z(e, t, r, n) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return n
          ? !1
          : r !== null
            ? !r.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function G(e, t, r, n) {
    if (t === null || typeof t > 'u' || Z(e, t, r, n)) return !0;
    if (n) return !1;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function C(e, t, r, n, a, o, c) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = n),
      (this.attributeNamespace = a),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = c));
  }
  var P = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      P[e] = new C(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      P[t] = new C(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      P[e] = new C(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        P[e] = new C(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        P[e] = new C(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      P[e] = new C(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      P[e] = new C(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      P[e] = new C(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      P[e] = new C(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var ue = /[\-:]([a-z])/g;
  function de(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(ue, de);
      P[t] = new C(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(ue, de);
        P[t] = new C(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(ue, de);
      P[t] = new C(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      P[e] = new C(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (P.xlinkHref = new C('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      P[e] = new C(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function ne(e, t, r, n) {
    var a = P.hasOwnProperty(t) ? P[t] : null;
    (a !== null
      ? a.type !== 0
      : n || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (G(t, r, a, n) && (r = null),
      n || a === null
        ? W(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
        : a.mustUseProperty
          ? (e[a.propertyName] = r === null ? (a.type === 3 ? !1 : '') : r)
          : ((t = a.attributeName),
            (n = a.attributeNamespace),
            r === null
              ? e.removeAttribute(t)
              : ((a = a.type),
                (r = a === 3 || (a === 4 && r === !0) ? '' : '' + r),
                n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
  }
  var ae = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ge = Symbol.for('react.element'),
    pe = Symbol.for('react.portal'),
    Fe = Symbol.for('react.fragment'),
    ze = Symbol.for('react.strict_mode'),
    Ge = Symbol.for('react.profiler'),
    qe = Symbol.for('react.provider'),
    ct = Symbol.for('react.context'),
    Me = Symbol.for('react.forward_ref'),
    Ne = Symbol.for('react.suspense'),
    et = Symbol.for('react.suspense_list'),
    re = Symbol.for('react.memo'),
    ve = Symbol.for('react.lazy'),
    me = Symbol.for('react.offscreen'),
    O = Symbol.iterator;
  function z(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (O && e[O]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var A = Object.assign,
    m;
  function N(e) {
    if (m === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        m = (t && t[1]) || '';
      }
    return (
      `
` +
      m +
      e
    );
  }
  var K = !1;
  function J(e, t) {
    if (!e || K) return '';
    K = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (x) {
            var n = x;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (x) {
            n = x;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (x) {
          n = x;
        }
        e();
      }
    } catch (x) {
      if (x && n && typeof x.stack == 'string') {
        for (
          var a = x.stack.split(`
`),
            o = n.stack.split(`
`),
            c = a.length - 1,
            d = o.length - 1;
          1 <= c && 0 <= d && a[c] !== o[d];

        )
          d--;
        for (; 1 <= c && 0 <= d; c--, d--)
          if (a[c] !== o[d]) {
            if (c !== 1 || d !== 1)
              do
                if ((c--, d--, 0 > d || a[c] !== o[d])) {
                  var f =
                    `
` + a[c].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      f.includes('<anonymous>') &&
                      (f = f.replace('<anonymous>', e.displayName)),
                    f
                  );
                }
              while (1 <= c && 0 <= d);
            break;
          }
      }
    } finally {
      ((K = !1), (Error.prepareStackTrace = r));
    }
    return (e = e ? e.displayName || e.name : '') ? N(e) : '';
  }
  function ee(e) {
    switch (e.tag) {
      case 5:
        return N(e.type);
      case 16:
        return N('Lazy');
      case 13:
        return N('Suspense');
      case 19:
        return N('SuspenseList');
      case 0:
      case 2:
      case 15:
        return ((e = J(e.type, !1)), e);
      case 11:
        return ((e = J(e.type.render, !1)), e);
      case 1:
        return ((e = J(e.type, !0)), e);
      default:
        return '';
    }
  }
  function oe(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case Fe:
        return 'Fragment';
      case pe:
        return 'Portal';
      case Ge:
        return 'Profiler';
      case ze:
        return 'StrictMode';
      case Ne:
        return 'Suspense';
      case et:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case ct:
          return (e.displayName || 'Context') + '.Consumer';
        case qe:
          return (e._context.displayName || 'Context') + '.Provider';
        case Me:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case re:
          return ((t = e.displayName || null), t !== null ? t : oe(e.type) || 'Memo');
        case ve:
          ((t = e._payload), (e = e._init));
          try {
            return oe(e(t));
          } catch {}
      }
    return null;
  }
  function he(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (t.displayName || 'Context') + '.Consumer';
      case 10:
        return (t._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return t;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return oe(t);
      case 8:
        return t === ze ? 'StrictMode' : 'Mode';
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
        if (typeof t == 'function') return t.displayName || t.name || null;
        if (typeof t == 'string') return t;
    }
    return null;
  }
  function le(e) {
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
  function be(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Ke(e) {
    var t = be(e) ? 'checked' : 'value',
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      n = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < 'u' &&
      typeof r.get == 'function' &&
      typeof r.set == 'function'
    ) {
      var a = r.get,
        o = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (c) {
            ((n = '' + c), o.call(this, c));
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (c) {
            n = '' + c;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function jr(e) {
    e._valueTracker || (e._valueTracker = Ke(e));
  }
  function tn(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      n = '';
    return (
      e && (n = be(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = n),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function Sr(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Bt(e, t) {
    var r = t.checked;
    return A({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function Qn(e, t) {
    var r = t.defaultValue == null ? '' : t.defaultValue,
      n = t.checked != null ? t.checked : t.defaultChecked;
    ((r = le(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      }));
  }
  function Yn(e, t) {
    ((t = t.checked), t != null && ne(e, 'checked', t, !1));
  }
  function Cr(e, t) {
    Yn(e, t);
    var r = le(t.value),
      n = t.type;
    if (r != null)
      n === 'number'
        ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r)
        : e.value !== '' + r && (e.value = '' + r);
    else if (n === 'submit' || n === 'reset') {
      e.removeAttribute('value');
      return;
    }
    (t.hasOwnProperty('value')
      ? Pr(e, t.type, r)
      : t.hasOwnProperty('defaultValue') && Pr(e, t.type, le(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function rn(e, t, r) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var n = t.type;
      if (!((n !== 'submit' && n !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
      ((t = '' + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((r = e.name),
      r !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== '' && (e.name = r));
  }
  function Pr(e, t, r) {
    (t !== 'number' || Sr(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + r && (e.defaultValue = '' + r));
  }
  var Ht = Array.isArray;
  function Rt(e, t, r, n) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < r.length; a++) t['$' + r[a]] = !0;
      for (r = 0; r < e.length; r++)
        ((a = t.hasOwnProperty('$' + e[r].value)),
          e[r].selected !== a && (e[r].selected = a),
          a && n && (e[r].defaultSelected = !0));
    } else {
      for (r = '' + le(r), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === r) {
          ((e[a].selected = !0), n && (e[a].defaultSelected = !0));
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Lr(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return A({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function Tr(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(s(92));
        if (Ht(r)) {
          if (1 < r.length) throw Error(s(93));
          r = r[0];
        }
        t = r;
      }
      (t == null && (t = ''), (r = t));
    }
    e._wrapperState = { initialValue: le(r) };
  }
  function Ue(e, t) {
    var r = le(t.value),
      n = le(t.defaultValue);
    (r != null &&
      ((r = '' + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      n != null && (e.defaultValue = '' + n));
  }
  function j(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function Qe(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Er(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? Qe(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var Be,
    Te = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, r, n, a) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, n, a);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
      else {
        for (
          Be = Be || document.createElement('div'),
            Be.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = Be.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function ye(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Pt = {
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
    Zn = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Pt).forEach(function (e) {
    Zn.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Pt[t] = Pt[e]));
    });
  });
  function nn(e, t, r) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : r || typeof t != 'number' || t === 0 || (Pt.hasOwnProperty(e) && Pt[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function Xn(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = r.indexOf('--') === 0,
          a = nn(r, t[r], n);
        (r === 'float' && (r = 'cssFloat'), n ? e.setProperty(r, a) : (e[r] = a));
      }
  }
  var ca = A(
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
  function an(e, t) {
    if (t) {
      if (ca[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(s(62));
    }
  }
  function on(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
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
  var pt = null;
  function sn(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ln = null,
    y = null,
    E = null;
  function X(e) {
    if ((e = Tn(e))) {
      if (typeof ln != 'function') throw Error(s(280));
      var t = e.stateNode;
      t && ((t = xi(t)), ln(e.stateNode, e.type, t));
    }
  }
  function xe(e) {
    y ? (E ? E.push(e) : (E = [e])) : (y = e);
  }
  function Lt() {
    if (y) {
      var e = y,
        t = E;
      if (((E = y = null), X(e), t)) for (e = 0; e < t.length; e++) X(t[e]);
    }
  }
  function ts(e, t) {
    return e(t);
  }
  function rs() {}
  var ua = !1;
  function ns(e, t, r) {
    if (ua) return e(t, r);
    ua = !0;
    try {
      return ts(e, t, r);
    } finally {
      ((ua = !1), (y !== null || E !== null) && (rs(), Lt()));
    }
  }
  function cn(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var n = xi(r);
    if (n === null) return null;
    r = n[t];
    e: switch (t) {
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
        ((n = !n.disabled) ||
          ((e = e.type),
          (n = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !n));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != 'function') throw Error(s(231, t, typeof r));
    return r;
  }
  var da = !1;
  if (p)
    try {
      var un = {};
      (Object.defineProperty(un, 'passive', {
        get: function () {
          da = !0;
        },
      }),
        window.addEventListener('test', un, un),
        window.removeEventListener('test', un, un));
    } catch {
      da = !1;
    }
  function uu(e, t, r, n, a, o, c, d, f) {
    var x = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, x);
    } catch (T) {
      this.onError(T);
    }
  }
  var dn = !1,
    Jn = null,
    ei = !1,
    ma = null,
    du = {
      onError: function (e) {
        ((dn = !0), (Jn = e));
      },
    };
  function mu(e, t, r, n, a, o, c, d, f) {
    ((dn = !1), (Jn = null), uu.apply(du, arguments));
  }
  function fu(e, t, r, n, a, o, c, d, f) {
    if ((mu.apply(this, arguments), dn)) {
      if (dn) {
        var x = Jn;
        ((dn = !1), (Jn = null));
      } else throw Error(s(198));
      ei || ((ei = !0), (ma = x));
    }
  }
  function mr(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function is(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function as(e) {
    if (mr(e) !== e) throw Error(s(188));
  }
  function pu(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = mr(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var r = e, n = t; ; ) {
      var a = r.return;
      if (a === null) break;
      var o = a.alternate;
      if (o === null) {
        if (((n = a.return), n !== null)) {
          r = n;
          continue;
        }
        break;
      }
      if (a.child === o.child) {
        for (o = a.child; o; ) {
          if (o === r) return (as(a), e);
          if (o === n) return (as(a), t);
          o = o.sibling;
        }
        throw Error(s(188));
      }
      if (r.return !== n.return) ((r = a), (n = o));
      else {
        for (var c = !1, d = a.child; d; ) {
          if (d === r) {
            ((c = !0), (r = a), (n = o));
            break;
          }
          if (d === n) {
            ((c = !0), (n = a), (r = o));
            break;
          }
          d = d.sibling;
        }
        if (!c) {
          for (d = o.child; d; ) {
            if (d === r) {
              ((c = !0), (r = o), (n = a));
              break;
            }
            if (d === n) {
              ((c = !0), (n = o), (r = a));
              break;
            }
            d = d.sibling;
          }
          if (!c) throw Error(s(189));
        }
      }
      if (r.alternate !== n) throw Error(s(190));
    }
    if (r.tag !== 3) throw Error(s(188));
    return r.stateNode.current === r ? e : t;
  }
  function os(e) {
    return ((e = pu(e)), e !== null ? ss(e) : null);
  }
  function ss(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ss(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ls = u.unstable_scheduleCallback,
    cs = u.unstable_cancelCallback,
    hu = u.unstable_shouldYield,
    gu = u.unstable_requestPaint,
    Ee = u.unstable_now,
    vu = u.unstable_getCurrentPriorityLevel,
    fa = u.unstable_ImmediatePriority,
    us = u.unstable_UserBlockingPriority,
    ti = u.unstable_NormalPriority,
    yu = u.unstable_LowPriority,
    ds = u.unstable_IdlePriority,
    ri = null,
    Tt = null;
  function bu(e) {
    if (Tt && typeof Tt.onCommitFiberRoot == 'function')
      try {
        Tt.onCommitFiberRoot(ri, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var xt = Math.clz32 ? Math.clz32 : wu,
    _u = Math.log,
    xu = Math.LN2;
  function wu(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((_u(e) / xu) | 0)) | 0);
  }
  var ni = 64,
    ii = 4194304;
  function mn(e) {
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
  function ai(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var n = 0,
      a = e.suspendedLanes,
      o = e.pingedLanes,
      c = r & 268435455;
    if (c !== 0) {
      var d = c & ~a;
      d !== 0 ? (n = mn(d)) : ((o &= c), o !== 0 && (n = mn(o)));
    } else ((c = r & ~a), c !== 0 ? (n = mn(c)) : o !== 0 && (n = mn(o)));
    if (n === 0) return 0;
    if (
      t !== 0 &&
      t !== n &&
      (t & a) === 0 &&
      ((a = n & -n), (o = t & -t), a >= o || (a === 16 && (o & 4194240) !== 0))
    )
      return t;
    if (((n & 4) !== 0 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= n; 0 < t; )
        ((r = 31 - xt(t)), (a = 1 << r), (n |= e[r]), (t &= ~a));
    return n;
  }
  function ku(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
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
        return t + 5e3;
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
  function Nu(e, t) {
    for (
      var r = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes;
      0 < o;

    ) {
      var c = 31 - xt(o),
        d = 1 << c,
        f = a[c];
      (f === -1
        ? ((d & r) === 0 || (d & n) !== 0) && (a[c] = ku(d, t))
        : f <= t && (e.expiredLanes |= d),
        (o &= ~d));
    }
  }
  function pa(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function ms() {
    var e = ni;
    return ((ni <<= 1), (ni & 4194240) === 0 && (ni = 64), e);
  }
  function ha(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function fn(e, t, r) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - xt(t)),
      (e[t] = r));
  }
  function ju(e, t) {
    var r = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var n = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var a = 31 - xt(r),
        o = 1 << a;
      ((t[a] = 0), (n[a] = -1), (e[a] = -1), (r &= ~o));
    }
  }
  function ga(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var n = 31 - xt(r),
        a = 1 << n;
      ((a & t) | (e[n] & t) && (e[n] |= t), (r &= ~a));
    }
  }
  var fe = 0;
  function fs(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var ps,
    va,
    hs,
    gs,
    vs,
    ya = !1,
    oi = [],
    $t = null,
    Gt = null,
    Kt = null,
    pn = new Map(),
    hn = new Map(),
    Qt = [],
    Su =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function ys(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        $t = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Gt = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Kt = null;
        break;
      case 'pointerover':
      case 'pointerout':
        pn.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        hn.delete(t.pointerId);
    }
  }
  function gn(e, t, r, n, a, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: n,
          nativeEvent: o,
          targetContainers: [a],
        }),
        t !== null && ((t = Tn(t)), t !== null && va(t)),
        e)
      : ((e.eventSystemFlags |= n),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function Cu(e, t, r, n, a) {
    switch (t) {
      case 'focusin':
        return (($t = gn($t, e, t, r, n, a)), !0);
      case 'dragenter':
        return ((Gt = gn(Gt, e, t, r, n, a)), !0);
      case 'mouseover':
        return ((Kt = gn(Kt, e, t, r, n, a)), !0);
      case 'pointerover':
        var o = a.pointerId;
        return (pn.set(o, gn(pn.get(o) || null, e, t, r, n, a)), !0);
      case 'gotpointercapture':
        return ((o = a.pointerId), hn.set(o, gn(hn.get(o) || null, e, t, r, n, a)), !0);
    }
    return !1;
  }
  function bs(e) {
    var t = fr(e.target);
    if (t !== null) {
      var r = mr(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = is(r)), t !== null)) {
            ((e.blockedOn = t),
              vs(e.priority, function () {
                hs(r);
              }));
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function si(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = _a(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var n = new r.constructor(r.type, r);
        ((pt = n), r.target.dispatchEvent(n), (pt = null));
      } else return ((t = Tn(r)), t !== null && va(t), (e.blockedOn = r), !1);
      t.shift();
    }
    return !0;
  }
  function _s(e, t, r) {
    si(e) && r.delete(t);
  }
  function Pu() {
    ((ya = !1),
      $t !== null && si($t) && ($t = null),
      Gt !== null && si(Gt) && (Gt = null),
      Kt !== null && si(Kt) && (Kt = null),
      pn.forEach(_s),
      hn.forEach(_s));
  }
  function vn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ya || ((ya = !0), u.unstable_scheduleCallback(u.unstable_NormalPriority, Pu)));
  }
  function yn(e) {
    function t(a) {
      return vn(a, e);
    }
    if (0 < oi.length) {
      vn(oi[0], e);
      for (var r = 1; r < oi.length; r++) {
        var n = oi[r];
        n.blockedOn === e && (n.blockedOn = null);
      }
    }
    for (
      $t !== null && vn($t, e),
        Gt !== null && vn(Gt, e),
        Kt !== null && vn(Kt, e),
        pn.forEach(t),
        hn.forEach(t),
        r = 0;
      r < Qt.length;
      r++
    )
      ((n = Qt[r]), n.blockedOn === e && (n.blockedOn = null));
    for (; 0 < Qt.length && ((r = Qt[0]), r.blockedOn === null); )
      (bs(r), r.blockedOn === null && Qt.shift());
  }
  var Dr = ae.ReactCurrentBatchConfig,
    li = !0;
  function Lu(e, t, r, n) {
    var a = fe,
      o = Dr.transition;
    Dr.transition = null;
    try {
      ((fe = 1), ba(e, t, r, n));
    } finally {
      ((fe = a), (Dr.transition = o));
    }
  }
  function Tu(e, t, r, n) {
    var a = fe,
      o = Dr.transition;
    Dr.transition = null;
    try {
      ((fe = 4), ba(e, t, r, n));
    } finally {
      ((fe = a), (Dr.transition = o));
    }
  }
  function ba(e, t, r, n) {
    if (li) {
      var a = _a(e, t, r, n);
      if (a === null) (Wa(e, t, n, ci, r), ys(e, n));
      else if (Cu(a, e, t, r, n)) n.stopPropagation();
      else if ((ys(e, n), t & 4 && -1 < Su.indexOf(e))) {
        for (; a !== null; ) {
          var o = Tn(a);
          if (
            (o !== null && ps(o), (o = _a(e, t, r, n)), o === null && Wa(e, t, n, ci, r), o === a)
          )
            break;
          a = o;
        }
        a !== null && n.stopPropagation();
      } else Wa(e, t, n, null, r);
    }
  }
  var ci = null;
  function _a(e, t, r, n) {
    if (((ci = null), (e = sn(n)), (e = fr(e)), e !== null))
      if (((t = mr(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = is(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((ci = e), null);
  }
  function xs(e) {
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
        switch (vu()) {
          case fa:
            return 1;
          case us:
            return 4;
          case ti:
          case yu:
            return 16;
          case ds:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Yt = null,
    xa = null,
    ui = null;
  function ws() {
    if (ui) return ui;
    var e,
      t = xa,
      r = t.length,
      n,
      a = 'value' in Yt ? Yt.value : Yt.textContent,
      o = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++);
    var c = r - e;
    for (n = 1; n <= c && t[r - n] === a[o - n]; n++);
    return (ui = a.slice(e, 1 < n ? 1 - n : void 0));
  }
  function di(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function mi() {
    return !0;
  }
  function ks() {
    return !1;
  }
  function ut(e) {
    function t(r, n, a, o, c) {
      ((this._reactName = r),
        (this._targetInst = a),
        (this.type = n),
        (this.nativeEvent = o),
        (this.target = c),
        (this.currentTarget = null));
      for (var d in e) e.hasOwnProperty(d) && ((r = e[d]), (this[d] = r ? r(o) : o[d]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? mi
          : ks),
        (this.isPropagationStopped = ks),
        this
      );
    }
    return (
      A(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
            (this.isDefaultPrevented = mi));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
            (this.isPropagationStopped = mi));
        },
        persist: function () {},
        isPersistent: mi,
      }),
      t
    );
  }
  var Fr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    wa = ut(Fr),
    bn = A({}, Fr, { view: 0, detail: 0 }),
    Eu = ut(bn),
    ka,
    Na,
    _n,
    fi = A({}, bn, {
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
      getModifierState: Sa,
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
          : (e !== _n &&
              (_n && e.type === 'mousemove'
                ? ((ka = e.screenX - _n.screenX), (Na = e.screenY - _n.screenY))
                : (Na = ka = 0),
              (_n = e)),
            ka);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Na;
      },
    }),
    Ns = ut(fi),
    Du = A({}, fi, { dataTransfer: 0 }),
    Fu = ut(Du),
    zu = A({}, bn, { relatedTarget: 0 }),
    ja = ut(zu),
    Ru = A({}, Fr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Mu = ut(Ru),
    Wu = A({}, Fr, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Ou = ut(Wu),
    Iu = A({}, Fr, { data: 0 }),
    js = ut(Iu),
    Au = {
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
    Vu = {
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
    qu = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Uu(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = qu[e]) ? !!t[e] : !1;
  }
  function Sa() {
    return Uu;
  }
  var Bu = A({}, bn, {
      key: function (e) {
        if (e.key) {
          var t = Au[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = di(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Vu[e.keyCode] || 'Unidentified'
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
      getModifierState: Sa,
      charCode: function (e) {
        return e.type === 'keypress' ? di(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? di(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Hu = ut(Bu),
    $u = A({}, fi, {
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
    Ss = ut($u),
    Gu = A({}, bn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Sa,
    }),
    Ku = ut(Gu),
    Qu = A({}, Fr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Yu = ut(Qu),
    Zu = A({}, fi, {
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
    Xu = ut(Zu),
    Ju = [9, 13, 27, 32],
    Ca = p && 'CompositionEvent' in window,
    xn = null;
  p && 'documentMode' in document && (xn = document.documentMode);
  var ed = p && 'TextEvent' in window && !xn,
    Cs = p && (!Ca || (xn && 8 < xn && 11 >= xn)),
    Ps = ' ',
    Ls = !1;
  function Ts(e, t) {
    switch (e) {
      case 'keyup':
        return Ju.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Es(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var zr = !1;
  function td(e, t) {
    switch (e) {
      case 'compositionend':
        return Es(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Ls = !0), Ps);
      case 'textInput':
        return ((e = t.data), e === Ps && Ls ? null : e);
      default:
        return null;
    }
  }
  function rd(e, t) {
    if (zr)
      return e === 'compositionend' || (!Ca && Ts(e, t))
        ? ((e = ws()), (ui = xa = Yt = null), (zr = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Cs && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var nd = {
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
  function Ds(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!nd[e.type] : t === 'textarea';
  }
  function Fs(e, t, r, n) {
    (xe(n),
      (t = yi(t, 'onChange')),
      0 < t.length &&
        ((r = new wa('onChange', 'change', null, r, n)), e.push({ event: r, listeners: t })));
  }
  var wn = null,
    kn = null;
  function id(e) {
    Zs(e, 0);
  }
  function pi(e) {
    var t = Ir(e);
    if (tn(t)) return e;
  }
  function ad(e, t) {
    if (e === 'change') return t;
  }
  var zs = !1;
  if (p) {
    var Pa;
    if (p) {
      var La = 'oninput' in document;
      if (!La) {
        var Rs = document.createElement('div');
        (Rs.setAttribute('oninput', 'return;'), (La = typeof Rs.oninput == 'function'));
      }
      Pa = La;
    } else Pa = !1;
    zs = Pa && (!document.documentMode || 9 < document.documentMode);
  }
  function Ms() {
    wn && (wn.detachEvent('onpropertychange', Ws), (kn = wn = null));
  }
  function Ws(e) {
    if (e.propertyName === 'value' && pi(kn)) {
      var t = [];
      (Fs(t, kn, e, sn(e)), ns(id, t));
    }
  }
  function od(e, t, r) {
    e === 'focusin'
      ? (Ms(), (wn = t), (kn = r), wn.attachEvent('onpropertychange', Ws))
      : e === 'focusout' && Ms();
  }
  function sd(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return pi(kn);
  }
  function ld(e, t) {
    if (e === 'click') return pi(t);
  }
  function cd(e, t) {
    if (e === 'input' || e === 'change') return pi(t);
  }
  function ud(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var wt = typeof Object.is == 'function' ? Object.is : ud;
  function Nn(e, t) {
    if (wt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (n = 0; n < r.length; n++) {
      var a = r[n];
      if (!h.call(t, a) || !wt(e[a], t[a])) return !1;
    }
    return !0;
  }
  function Os(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Is(e, t) {
    var r = Os(e);
    e = 0;
    for (var n; r; ) {
      if (r.nodeType === 3) {
        if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
        e = n;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Os(r);
    }
  }
  function As(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? As(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Vs() {
    for (var e = window, t = Sr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == 'string';
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Sr(e.document);
    }
    return t;
  }
  function Ta(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function dd(e) {
    var t = Vs(),
      r = e.focusedElem,
      n = e.selectionRange;
    if (t !== r && r && r.ownerDocument && As(r.ownerDocument.documentElement, r)) {
      if (n !== null && Ta(r)) {
        if (((t = n.start), (e = n.end), e === void 0 && (e = t), 'selectionStart' in r))
          ((r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length)));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var a = r.textContent.length,
            o = Math.min(n.start, a);
          ((n = n.end === void 0 ? o : Math.min(n.end, a)),
            !e.extend && o > n && ((a = n), (n = o), (o = a)),
            (a = Is(r, o)));
          var c = Is(r, n);
          a &&
            c &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== c.node ||
              e.focusOffset !== c.offset) &&
            ((t = t.createRange()),
            t.setStart(a.node, a.offset),
            e.removeAllRanges(),
            o > n
              ? (e.addRange(t), e.extend(c.node, c.offset))
              : (t.setEnd(c.node, c.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == 'function' && r.focus(), r = 0; r < t.length; r++)
        ((e = t[r]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
  }
  var md = p && 'documentMode' in document && 11 >= document.documentMode,
    Rr = null,
    Ea = null,
    jn = null,
    Da = !1;
  function qs(e, t, r) {
    var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Da ||
      Rr == null ||
      Rr !== Sr(n) ||
      ((n = Rr),
      'selectionStart' in n && Ta(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      (jn && Nn(jn, n)) ||
        ((jn = n),
        (n = yi(Ea, 'onSelect')),
        0 < n.length &&
          ((t = new wa('onSelect', 'select', null, t, r)),
          e.push({ event: t, listeners: n }),
          (t.target = Rr))));
  }
  function hi(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r['Webkit' + e] = 'webkit' + t),
      (r['Moz' + e] = 'moz' + t),
      r
    );
  }
  var Mr = {
      animationend: hi('Animation', 'AnimationEnd'),
      animationiteration: hi('Animation', 'AnimationIteration'),
      animationstart: hi('Animation', 'AnimationStart'),
      transitionend: hi('Transition', 'TransitionEnd'),
    },
    Fa = {},
    Us = {};
  p &&
    ((Us = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Mr.animationend.animation,
      delete Mr.animationiteration.animation,
      delete Mr.animationstart.animation),
    'TransitionEvent' in window || delete Mr.transitionend.transition);
  function gi(e) {
    if (Fa[e]) return Fa[e];
    if (!Mr[e]) return e;
    var t = Mr[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in Us) return (Fa[e] = t[r]);
    return e;
  }
  var Bs = gi('animationend'),
    Hs = gi('animationiteration'),
    $s = gi('animationstart'),
    Gs = gi('transitionend'),
    Ks = new Map(),
    Qs =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Zt(e, t) {
    (Ks.set(e, t), S(t, [e]));
  }
  for (var za = 0; za < Qs.length; za++) {
    var Ra = Qs[za],
      fd = Ra.toLowerCase(),
      pd = Ra[0].toUpperCase() + Ra.slice(1);
    Zt(fd, 'on' + pd);
  }
  (Zt(Bs, 'onAnimationEnd'),
    Zt(Hs, 'onAnimationIteration'),
    Zt($s, 'onAnimationStart'),
    Zt('dblclick', 'onDoubleClick'),
    Zt('focusin', 'onFocus'),
    Zt('focusout', 'onBlur'),
    Zt(Gs, 'onTransitionEnd'),
    k('onMouseEnter', ['mouseout', 'mouseover']),
    k('onMouseLeave', ['mouseout', 'mouseover']),
    k('onPointerEnter', ['pointerout', 'pointerover']),
    k('onPointerLeave', ['pointerout', 'pointerover']),
    S('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    S(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    S('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    S('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    S(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    S(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var Sn =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    hd = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Sn));
  function Ys(e, t, r) {
    var n = e.type || 'unknown-event';
    ((e.currentTarget = r), fu(n, t, void 0, e), (e.currentTarget = null));
  }
  function Zs(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var n = e[r],
        a = n.event;
      n = n.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var c = n.length - 1; 0 <= c; c--) {
            var d = n[c],
              f = d.instance,
              x = d.currentTarget;
            if (((d = d.listener), f !== o && a.isPropagationStopped())) break e;
            (Ys(a, d, x), (o = f));
          }
        else
          for (c = 0; c < n.length; c++) {
            if (
              ((d = n[c]),
              (f = d.instance),
              (x = d.currentTarget),
              (d = d.listener),
              f !== o && a.isPropagationStopped())
            )
              break e;
            (Ys(a, d, x), (o = f));
          }
      }
    }
    if (ei) throw ((e = ma), (ei = !1), (ma = null), e);
  }
  function we(e, t) {
    var r = t[Ua];
    r === void 0 && (r = t[Ua] = new Set());
    var n = e + '__bubble';
    r.has(n) || (Xs(t, e, 2, !1), r.add(n));
  }
  function Ma(e, t, r) {
    var n = 0;
    (t && (n |= 4), Xs(r, e, n, t));
  }
  var vi = '_reactListening' + Math.random().toString(36).slice(2);
  function Cn(e) {
    if (!e[vi]) {
      ((e[vi] = !0),
        v.forEach(function (r) {
          r !== 'selectionchange' && (hd.has(r) || Ma(r, !1, e), Ma(r, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[vi] || ((t[vi] = !0), Ma('selectionchange', !1, t));
    }
  }
  function Xs(e, t, r, n) {
    switch (xs(t)) {
      case 1:
        var a = Lu;
        break;
      case 4:
        a = Tu;
        break;
      default:
        a = ba;
    }
    ((r = a.bind(null, t, r, e)),
      (a = void 0),
      !da || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (a = !0),
      n
        ? a !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: a })
          : e.addEventListener(t, r, !0)
        : a !== void 0
          ? e.addEventListener(t, r, { passive: a })
          : e.addEventListener(t, r, !1));
  }
  function Wa(e, t, r, n, a) {
    var o = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (;;) {
        if (n === null) return;
        var c = n.tag;
        if (c === 3 || c === 4) {
          var d = n.stateNode.containerInfo;
          if (d === a || (d.nodeType === 8 && d.parentNode === a)) break;
          if (c === 4)
            for (c = n.return; c !== null; ) {
              var f = c.tag;
              if (
                (f === 3 || f === 4) &&
                ((f = c.stateNode.containerInfo),
                f === a || (f.nodeType === 8 && f.parentNode === a))
              )
                return;
              c = c.return;
            }
          for (; d !== null; ) {
            if (((c = fr(d)), c === null)) return;
            if (((f = c.tag), f === 5 || f === 6)) {
              n = o = c;
              continue e;
            }
            d = d.parentNode;
          }
        }
        n = n.return;
      }
    ns(function () {
      var x = o,
        T = sn(r),
        D = [];
      e: {
        var L = Ks.get(e);
        if (L !== void 0) {
          var V = wa,
            U = e;
          switch (e) {
            case 'keypress':
              if (di(r) === 0) break e;
            case 'keydown':
            case 'keyup':
              V = Hu;
              break;
            case 'focusin':
              ((U = 'focus'), (V = ja));
              break;
            case 'focusout':
              ((U = 'blur'), (V = ja));
              break;
            case 'beforeblur':
            case 'afterblur':
              V = ja;
              break;
            case 'click':
              if (r.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              V = Ns;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              V = Fu;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              V = Ku;
              break;
            case Bs:
            case Hs:
            case $s:
              V = Mu;
              break;
            case Gs:
              V = Yu;
              break;
            case 'scroll':
              V = Eu;
              break;
            case 'wheel':
              V = Xu;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              V = Ou;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              V = Ss;
          }
          var B = (t & 4) !== 0,
            De = !B && e === 'scroll',
            b = B ? (L !== null ? L + 'Capture' : null) : L;
          B = [];
          for (var g = x, _; g !== null; ) {
            _ = g;
            var F = _.stateNode;
            if (
              (_.tag === 5 &&
                F !== null &&
                ((_ = F), b !== null && ((F = cn(g, b)), F != null && B.push(Pn(g, F, _)))),
              De)
            )
              break;
            g = g.return;
          }
          0 < B.length && ((L = new V(L, U, null, r, T)), D.push({ event: L, listeners: B }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((L = e === 'mouseover' || e === 'pointerover'),
            (V = e === 'mouseout' || e === 'pointerout'),
            L && r !== pt && (U = r.relatedTarget || r.fromElement) && (fr(U) || U[Mt]))
          )
            break e;
          if (
            (V || L) &&
            ((L =
              T.window === T
                ? T
                : (L = T.ownerDocument)
                  ? L.defaultView || L.parentWindow
                  : window),
            V
              ? ((U = r.relatedTarget || r.toElement),
                (V = x),
                (U = U ? fr(U) : null),
                U !== null &&
                  ((De = mr(U)), U !== De || (U.tag !== 5 && U.tag !== 6)) &&
                  (U = null))
              : ((V = null), (U = x)),
            V !== U)
          ) {
            if (
              ((B = Ns),
              (F = 'onMouseLeave'),
              (b = 'onMouseEnter'),
              (g = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((B = Ss), (F = 'onPointerLeave'), (b = 'onPointerEnter'), (g = 'pointer')),
              (De = V == null ? L : Ir(V)),
              (_ = U == null ? L : Ir(U)),
              (L = new B(F, g + 'leave', V, r, T)),
              (L.target = De),
              (L.relatedTarget = _),
              (F = null),
              fr(T) === x &&
                ((B = new B(b, g + 'enter', U, r, T)),
                (B.target = _),
                (B.relatedTarget = De),
                (F = B)),
              (De = F),
              V && U)
            )
              t: {
                for (B = V, b = U, g = 0, _ = B; _; _ = Wr(_)) g++;
                for (_ = 0, F = b; F; F = Wr(F)) _++;
                for (; 0 < g - _; ) ((B = Wr(B)), g--);
                for (; 0 < _ - g; ) ((b = Wr(b)), _--);
                for (; g--; ) {
                  if (B === b || (b !== null && B === b.alternate)) break t;
                  ((B = Wr(B)), (b = Wr(b)));
                }
                B = null;
              }
            else B = null;
            (V !== null && Js(D, L, V, B, !1), U !== null && De !== null && Js(D, De, U, B, !0));
          }
        }
        e: {
          if (
            ((L = x ? Ir(x) : window),
            (V = L.nodeName && L.nodeName.toLowerCase()),
            V === 'select' || (V === 'input' && L.type === 'file'))
          )
            var H = ad;
          else if (Ds(L))
            if (zs) H = cd;
            else {
              H = sd;
              var Q = od;
            }
          else
            (V = L.nodeName) &&
              V.toLowerCase() === 'input' &&
              (L.type === 'checkbox' || L.type === 'radio') &&
              (H = ld);
          if (H && (H = H(e, x))) {
            Fs(D, H, r, T);
            break e;
          }
          (Q && Q(e, L, x),
            e === 'focusout' &&
              (Q = L._wrapperState) &&
              Q.controlled &&
              L.type === 'number' &&
              Pr(L, 'number', L.value));
        }
        switch (((Q = x ? Ir(x) : window), e)) {
          case 'focusin':
            (Ds(Q) || Q.contentEditable === 'true') && ((Rr = Q), (Ea = x), (jn = null));
            break;
          case 'focusout':
            jn = Ea = Rr = null;
            break;
          case 'mousedown':
            Da = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Da = !1), qs(D, r, T));
            break;
          case 'selectionchange':
            if (md) break;
          case 'keydown':
          case 'keyup':
            qs(D, r, T);
        }
        var Y;
        if (Ca)
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
          zr
            ? Ts(e, r) && (te = 'onCompositionEnd')
            : e === 'keydown' && r.keyCode === 229 && (te = 'onCompositionStart');
        (te &&
          (Cs &&
            r.locale !== 'ko' &&
            (zr || te !== 'onCompositionStart'
              ? te === 'onCompositionEnd' && zr && (Y = ws())
              : ((Yt = T), (xa = 'value' in Yt ? Yt.value : Yt.textContent), (zr = !0))),
          (Q = yi(x, te)),
          0 < Q.length &&
            ((te = new js(te, e, null, r, T)),
            D.push({ event: te, listeners: Q }),
            Y ? (te.data = Y) : ((Y = Es(r)), Y !== null && (te.data = Y)))),
          (Y = ed ? td(e, r) : rd(e, r)) &&
            ((x = yi(x, 'onBeforeInput')),
            0 < x.length &&
              ((T = new js('onBeforeInput', 'beforeinput', null, r, T)),
              D.push({ event: T, listeners: x }),
              (T.data = Y))));
      }
      Zs(D, t);
    });
  }
  function Pn(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function yi(e, t) {
    for (var r = t + 'Capture', n = []; e !== null; ) {
      var a = e,
        o = a.stateNode;
      (a.tag === 5 &&
        o !== null &&
        ((a = o),
        (o = cn(e, r)),
        o != null && n.unshift(Pn(e, o, a)),
        (o = cn(e, t)),
        o != null && n.push(Pn(e, o, a))),
        (e = e.return));
    }
    return n;
  }
  function Wr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Js(e, t, r, n, a) {
    for (var o = t._reactName, c = []; r !== null && r !== n; ) {
      var d = r,
        f = d.alternate,
        x = d.stateNode;
      if (f !== null && f === n) break;
      (d.tag === 5 &&
        x !== null &&
        ((d = x),
        a
          ? ((f = cn(r, o)), f != null && c.unshift(Pn(r, f, d)))
          : a || ((f = cn(r, o)), f != null && c.push(Pn(r, f, d)))),
        (r = r.return));
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var gd = /\r\n?/g,
    vd = /\u0000|\uFFFD/g;
  function el(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        gd,
        `
`
      )
      .replace(vd, '');
  }
  function bi(e, t, r) {
    if (((t = el(t)), el(e) !== t && r)) throw Error(s(425));
  }
  function _i() {}
  var Oa = null,
    Ia = null;
  function Aa(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Va = typeof setTimeout == 'function' ? setTimeout : void 0,
    yd = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    tl = typeof Promise == 'function' ? Promise : void 0,
    bd =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof tl < 'u'
          ? function (e) {
              return tl.resolve(null).then(e).catch(_d);
            }
          : Va;
  function _d(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function qa(e, t) {
    var r = t,
      n = 0;
    do {
      var a = r.nextSibling;
      if ((e.removeChild(r), a && a.nodeType === 8))
        if (((r = a.data), r === '/$')) {
          if (n === 0) {
            (e.removeChild(a), yn(t));
            return;
          }
          n--;
        } else (r !== '$' && r !== '$?' && r !== '$!') || n++;
      r = a;
    } while (r);
    yn(t);
  }
  function Xt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function rl(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === '$' || r === '$!' || r === '$?') {
          if (t === 0) return e;
          t--;
        } else r === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Or = Math.random().toString(36).slice(2),
    Et = '__reactFiber$' + Or,
    Ln = '__reactProps$' + Or,
    Mt = '__reactContainer$' + Or,
    Ua = '__reactEvents$' + Or,
    xd = '__reactListeners$' + Or,
    wd = '__reactHandles$' + Or;
  function fr(e) {
    var t = e[Et];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[Mt] || r[Et])) {
        if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
          for (e = rl(e); e !== null; ) {
            if ((r = e[Et])) return r;
            e = rl(e);
          }
        return t;
      }
      ((e = r), (r = e.parentNode));
    }
    return null;
  }
  function Tn(e) {
    return (
      (e = e[Et] || e[Mt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Ir(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function xi(e) {
    return e[Ln] || null;
  }
  var Ba = [],
    Ar = -1;
  function Jt(e) {
    return { current: e };
  }
  function ke(e) {
    0 > Ar || ((e.current = Ba[Ar]), (Ba[Ar] = null), Ar--);
  }
  function _e(e, t) {
    (Ar++, (Ba[Ar] = e.current), (e.current = t));
  }
  var er = {},
    Ye = Jt(er),
    nt = Jt(!1),
    pr = er;
  function Vr(e, t) {
    var r = e.type.contextTypes;
    if (!r) return er;
    var n = e.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
      return n.__reactInternalMemoizedMaskedChildContext;
    var a = {},
      o;
    for (o in r) a[o] = t[o];
    return (
      n &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      a
    );
  }
  function it(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function wi() {
    (ke(nt), ke(Ye));
  }
  function nl(e, t, r) {
    if (Ye.current !== er) throw Error(s(168));
    (_e(Ye, t), _e(nt, r));
  }
  function il(e, t, r) {
    var n = e.stateNode;
    if (((t = t.childContextTypes), typeof n.getChildContext != 'function')) return r;
    n = n.getChildContext();
    for (var a in n) if (!(a in t)) throw Error(s(108, he(e) || 'Unknown', a));
    return A({}, r, n);
  }
  function ki(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || er),
      (pr = Ye.current),
      _e(Ye, e),
      _e(nt, nt.current),
      !0
    );
  }
  function al(e, t, r) {
    var n = e.stateNode;
    if (!n) throw Error(s(169));
    (r
      ? ((e = il(e, t, pr)),
        (n.__reactInternalMemoizedMergedChildContext = e),
        ke(nt),
        ke(Ye),
        _e(Ye, e))
      : ke(nt),
      _e(nt, r));
  }
  var Wt = null,
    Ni = !1,
    Ha = !1;
  function ol(e) {
    Wt === null ? (Wt = [e]) : Wt.push(e);
  }
  function kd(e) {
    ((Ni = !0), ol(e));
  }
  function tr() {
    if (!Ha && Wt !== null) {
      Ha = !0;
      var e = 0,
        t = fe;
      try {
        var r = Wt;
        for (fe = 1; e < r.length; e++) {
          var n = r[e];
          do n = n(!0);
          while (n !== null);
        }
        ((Wt = null), (Ni = !1));
      } catch (a) {
        throw (Wt !== null && (Wt = Wt.slice(e + 1)), ls(fa, tr), a);
      } finally {
        ((fe = t), (Ha = !1));
      }
    }
    return null;
  }
  var qr = [],
    Ur = 0,
    ji = null,
    Si = 0,
    ht = [],
    gt = 0,
    hr = null,
    Ot = 1,
    It = '';
  function gr(e, t) {
    ((qr[Ur++] = Si), (qr[Ur++] = ji), (ji = e), (Si = t));
  }
  function sl(e, t, r) {
    ((ht[gt++] = Ot), (ht[gt++] = It), (ht[gt++] = hr), (hr = e));
    var n = Ot;
    e = It;
    var a = 32 - xt(n) - 1;
    ((n &= ~(1 << a)), (r += 1));
    var o = 32 - xt(t) + a;
    if (30 < o) {
      var c = a - (a % 5);
      ((o = (n & ((1 << c) - 1)).toString(32)),
        (n >>= c),
        (a -= c),
        (Ot = (1 << (32 - xt(t) + a)) | (r << a) | n),
        (It = o + e));
    } else ((Ot = (1 << o) | (r << a) | n), (It = e));
  }
  function $a(e) {
    e.return !== null && (gr(e, 1), sl(e, 1, 0));
  }
  function Ga(e) {
    for (; e === ji; ) ((ji = qr[--Ur]), (qr[Ur] = null), (Si = qr[--Ur]), (qr[Ur] = null));
    for (; e === hr; )
      ((hr = ht[--gt]),
        (ht[gt] = null),
        (It = ht[--gt]),
        (ht[gt] = null),
        (Ot = ht[--gt]),
        (ht[gt] = null));
  }
  var dt = null,
    mt = null,
    je = !1,
    kt = null;
  function ll(e, t) {
    var r = _t(5, null, null, 0);
    ((r.elementType = 'DELETED'),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r));
  }
  function cl(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (dt = e), (mt = Xt(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (dt = e), (mt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = hr !== null ? { id: Ot, overflow: It } : null),
              (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }),
              (r = _t(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (dt = e),
              (mt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ka(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Qa(e) {
    if (je) {
      var t = mt;
      if (t) {
        var r = t;
        if (!cl(e, t)) {
          if (Ka(e)) throw Error(s(418));
          t = Xt(r.nextSibling);
          var n = dt;
          t && cl(e, t) ? ll(n, r) : ((e.flags = (e.flags & -4097) | 2), (je = !1), (dt = e));
        }
      } else {
        if (Ka(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (je = !1), (dt = e));
      }
    }
  }
  function ul(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    dt = e;
  }
  function Ci(e) {
    if (e !== dt) return !1;
    if (!je) return (ul(e), (je = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !Aa(e.type, e.memoizedProps))),
      t && (t = mt))
    ) {
      if (Ka(e)) throw (dl(), Error(s(418)));
      for (; t; ) (ll(e, t), (t = Xt(t.nextSibling)));
    }
    if ((ul(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === '/$') {
              if (t === 0) {
                mt = Xt(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== '$' && r !== '$!' && r !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        mt = null;
      }
    } else mt = dt ? Xt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function dl() {
    for (var e = mt; e; ) e = Xt(e.nextSibling);
  }
  function Br() {
    ((mt = dt = null), (je = !1));
  }
  function Ya(e) {
    kt === null ? (kt = [e]) : kt.push(e);
  }
  var Nd = ae.ReactCurrentBatchConfig;
  function En(e, t, r) {
    if (((e = r.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(s(309));
          var n = r.stateNode;
        }
        if (!n) throw Error(s(147, e));
        var a = n,
          o = '' + e;
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === o
          ? t.ref
          : ((t = function (c) {
              var d = a.refs;
              c === null ? delete d[o] : (d[o] = c);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != 'string') throw Error(s(284));
      if (!r._owner) throw Error(s(290, e));
    }
    return e;
  }
  function Pi(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        s(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
      )
    );
  }
  function ml(e) {
    var t = e._init;
    return t(e._payload);
  }
  function fl(e) {
    function t(b, g) {
      if (e) {
        var _ = b.deletions;
        _ === null ? ((b.deletions = [g]), (b.flags |= 16)) : _.push(g);
      }
    }
    function r(b, g) {
      if (!e) return null;
      for (; g !== null; ) (t(b, g), (g = g.sibling));
      return null;
    }
    function n(b, g) {
      for (b = new Map(); g !== null; )
        (g.key !== null ? b.set(g.key, g) : b.set(g.index, g), (g = g.sibling));
      return b;
    }
    function a(b, g) {
      return ((b = cr(b, g)), (b.index = 0), (b.sibling = null), b);
    }
    function o(b, g, _) {
      return (
        (b.index = _),
        e
          ? ((_ = b.alternate),
            _ !== null ? ((_ = _.index), _ < g ? ((b.flags |= 2), g) : _) : ((b.flags |= 2), g))
          : ((b.flags |= 1048576), g)
      );
    }
    function c(b) {
      return (e && b.alternate === null && (b.flags |= 2), b);
    }
    function d(b, g, _, F) {
      return g === null || g.tag !== 6
        ? ((g = Vo(_, b.mode, F)), (g.return = b), g)
        : ((g = a(g, _)), (g.return = b), g);
    }
    function f(b, g, _, F) {
      var H = _.type;
      return H === Fe
        ? T(b, g, _.props.children, F, _.key)
        : g !== null &&
            (g.elementType === H ||
              (typeof H == 'object' && H !== null && H.$$typeof === ve && ml(H) === g.type))
          ? ((F = a(g, _.props)), (F.ref = En(b, g, _)), (F.return = b), F)
          : ((F = Xi(_.type, _.key, _.props, null, b.mode, F)),
            (F.ref = En(b, g, _)),
            (F.return = b),
            F);
    }
    function x(b, g, _, F) {
      return g === null ||
        g.tag !== 4 ||
        g.stateNode.containerInfo !== _.containerInfo ||
        g.stateNode.implementation !== _.implementation
        ? ((g = qo(_, b.mode, F)), (g.return = b), g)
        : ((g = a(g, _.children || [])), (g.return = b), g);
    }
    function T(b, g, _, F, H) {
      return g === null || g.tag !== 7
        ? ((g = Nr(_, b.mode, F, H)), (g.return = b), g)
        : ((g = a(g, _)), (g.return = b), g);
    }
    function D(b, g, _) {
      if ((typeof g == 'string' && g !== '') || typeof g == 'number')
        return ((g = Vo('' + g, b.mode, _)), (g.return = b), g);
      if (typeof g == 'object' && g !== null) {
        switch (g.$$typeof) {
          case ge:
            return (
              (_ = Xi(g.type, g.key, g.props, null, b.mode, _)),
              (_.ref = En(b, null, g)),
              (_.return = b),
              _
            );
          case pe:
            return ((g = qo(g, b.mode, _)), (g.return = b), g);
          case ve:
            var F = g._init;
            return D(b, F(g._payload), _);
        }
        if (Ht(g) || z(g)) return ((g = Nr(g, b.mode, _, null)), (g.return = b), g);
        Pi(b, g);
      }
      return null;
    }
    function L(b, g, _, F) {
      var H = g !== null ? g.key : null;
      if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number')
        return H !== null ? null : d(b, g, '' + _, F);
      if (typeof _ == 'object' && _ !== null) {
        switch (_.$$typeof) {
          case ge:
            return _.key === H ? f(b, g, _, F) : null;
          case pe:
            return _.key === H ? x(b, g, _, F) : null;
          case ve:
            return ((H = _._init), L(b, g, H(_._payload), F));
        }
        if (Ht(_) || z(_)) return H !== null ? null : T(b, g, _, F, null);
        Pi(b, _);
      }
      return null;
    }
    function V(b, g, _, F, H) {
      if ((typeof F == 'string' && F !== '') || typeof F == 'number')
        return ((b = b.get(_) || null), d(g, b, '' + F, H));
      if (typeof F == 'object' && F !== null) {
        switch (F.$$typeof) {
          case ge:
            return ((b = b.get(F.key === null ? _ : F.key) || null), f(g, b, F, H));
          case pe:
            return ((b = b.get(F.key === null ? _ : F.key) || null), x(g, b, F, H));
          case ve:
            var Q = F._init;
            return V(b, g, _, Q(F._payload), H);
        }
        if (Ht(F) || z(F)) return ((b = b.get(_) || null), T(g, b, F, H, null));
        Pi(g, F);
      }
      return null;
    }
    function U(b, g, _, F) {
      for (
        var H = null, Q = null, Y = g, te = (g = 0), Ve = null;
        Y !== null && te < _.length;
        te++
      ) {
        Y.index > te ? ((Ve = Y), (Y = null)) : (Ve = Y.sibling);
        var ce = L(b, Y, _[te], F);
        if (ce === null) {
          Y === null && (Y = Ve);
          break;
        }
        (e && Y && ce.alternate === null && t(b, Y),
          (g = o(ce, g, te)),
          Q === null ? (H = ce) : (Q.sibling = ce),
          (Q = ce),
          (Y = Ve));
      }
      if (te === _.length) return (r(b, Y), je && gr(b, te), H);
      if (Y === null) {
        for (; te < _.length; te++)
          ((Y = D(b, _[te], F)),
            Y !== null && ((g = o(Y, g, te)), Q === null ? (H = Y) : (Q.sibling = Y), (Q = Y)));
        return (je && gr(b, te), H);
      }
      for (Y = n(b, Y); te < _.length; te++)
        ((Ve = V(Y, b, te, _[te], F)),
          Ve !== null &&
            (e && Ve.alternate !== null && Y.delete(Ve.key === null ? te : Ve.key),
            (g = o(Ve, g, te)),
            Q === null ? (H = Ve) : (Q.sibling = Ve),
            (Q = Ve)));
      return (
        e &&
          Y.forEach(function (ur) {
            return t(b, ur);
          }),
        je && gr(b, te),
        H
      );
    }
    function B(b, g, _, F) {
      var H = z(_);
      if (typeof H != 'function') throw Error(s(150));
      if (((_ = H.call(_)), _ == null)) throw Error(s(151));
      for (
        var Q = (H = null), Y = g, te = (g = 0), Ve = null, ce = _.next();
        Y !== null && !ce.done;
        te++, ce = _.next()
      ) {
        Y.index > te ? ((Ve = Y), (Y = null)) : (Ve = Y.sibling);
        var ur = L(b, Y, ce.value, F);
        if (ur === null) {
          Y === null && (Y = Ve);
          break;
        }
        (e && Y && ur.alternate === null && t(b, Y),
          (g = o(ur, g, te)),
          Q === null ? (H = ur) : (Q.sibling = ur),
          (Q = ur),
          (Y = Ve));
      }
      if (ce.done) return (r(b, Y), je && gr(b, te), H);
      if (Y === null) {
        for (; !ce.done; te++, ce = _.next())
          ((ce = D(b, ce.value, F)),
            ce !== null &&
              ((g = o(ce, g, te)), Q === null ? (H = ce) : (Q.sibling = ce), (Q = ce)));
        return (je && gr(b, te), H);
      }
      for (Y = n(b, Y); !ce.done; te++, ce = _.next())
        ((ce = V(Y, b, te, ce.value, F)),
          ce !== null &&
            (e && ce.alternate !== null && Y.delete(ce.key === null ? te : ce.key),
            (g = o(ce, g, te)),
            Q === null ? (H = ce) : (Q.sibling = ce),
            (Q = ce)));
      return (
        e &&
          Y.forEach(function (nm) {
            return t(b, nm);
          }),
        je && gr(b, te),
        H
      );
    }
    function De(b, g, _, F) {
      if (
        (typeof _ == 'object' &&
          _ !== null &&
          _.type === Fe &&
          _.key === null &&
          (_ = _.props.children),
        typeof _ == 'object' && _ !== null)
      ) {
        switch (_.$$typeof) {
          case ge:
            e: {
              for (var H = _.key, Q = g; Q !== null; ) {
                if (Q.key === H) {
                  if (((H = _.type), H === Fe)) {
                    if (Q.tag === 7) {
                      (r(b, Q.sibling), (g = a(Q, _.props.children)), (g.return = b), (b = g));
                      break e;
                    }
                  } else if (
                    Q.elementType === H ||
                    (typeof H == 'object' && H !== null && H.$$typeof === ve && ml(H) === Q.type)
                  ) {
                    (r(b, Q.sibling),
                      (g = a(Q, _.props)),
                      (g.ref = En(b, Q, _)),
                      (g.return = b),
                      (b = g));
                    break e;
                  }
                  r(b, Q);
                  break;
                } else t(b, Q);
                Q = Q.sibling;
              }
              _.type === Fe
                ? ((g = Nr(_.props.children, b.mode, F, _.key)), (g.return = b), (b = g))
                : ((F = Xi(_.type, _.key, _.props, null, b.mode, F)),
                  (F.ref = En(b, g, _)),
                  (F.return = b),
                  (b = F));
            }
            return c(b);
          case pe:
            e: {
              for (Q = _.key; g !== null; ) {
                if (g.key === Q)
                  if (
                    g.tag === 4 &&
                    g.stateNode.containerInfo === _.containerInfo &&
                    g.stateNode.implementation === _.implementation
                  ) {
                    (r(b, g.sibling), (g = a(g, _.children || [])), (g.return = b), (b = g));
                    break e;
                  } else {
                    r(b, g);
                    break;
                  }
                else t(b, g);
                g = g.sibling;
              }
              ((g = qo(_, b.mode, F)), (g.return = b), (b = g));
            }
            return c(b);
          case ve:
            return ((Q = _._init), De(b, g, Q(_._payload), F));
        }
        if (Ht(_)) return U(b, g, _, F);
        if (z(_)) return B(b, g, _, F);
        Pi(b, _);
      }
      return (typeof _ == 'string' && _ !== '') || typeof _ == 'number'
        ? ((_ = '' + _),
          g !== null && g.tag === 6
            ? (r(b, g.sibling), (g = a(g, _)), (g.return = b), (b = g))
            : (r(b, g), (g = Vo(_, b.mode, F)), (g.return = b), (b = g)),
          c(b))
        : r(b, g);
    }
    return De;
  }
  var Hr = fl(!0),
    pl = fl(!1),
    Li = Jt(null),
    Ti = null,
    $r = null,
    Za = null;
  function Xa() {
    Za = $r = Ti = null;
  }
  function Ja(e) {
    var t = Li.current;
    (ke(Li), (e._currentValue = t));
  }
  function eo(e, t, r) {
    for (; e !== null; ) {
      var n = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
          : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function Gr(e, t) {
    ((Ti = e),
      (Za = $r = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (at = !0), (e.firstContext = null)));
  }
  function vt(e) {
    var t = e._currentValue;
    if (Za !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), $r === null)) {
        if (Ti === null) throw Error(s(308));
        (($r = e), (Ti.dependencies = { lanes: 0, firstContext: e }));
      } else $r = $r.next = e;
    return t;
  }
  var vr = null;
  function to(e) {
    vr === null ? (vr = [e]) : vr.push(e);
  }
  function hl(e, t, r, n) {
    var a = t.interleaved;
    return (
      a === null ? ((r.next = r), to(t)) : ((r.next = a.next), (a.next = r)),
      (t.interleaved = r),
      At(e, n)
    );
  }
  function At(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return));
    return r.tag === 3 ? r.stateNode : null;
  }
  var rr = !1;
  function ro(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function gl(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function Vt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function nr(e, t, r) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), (se & 2) !== 0)) {
      var a = n.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (n.pending = t),
        At(e, r)
      );
    }
    return (
      (a = n.interleaved),
      a === null ? ((t.next = t), to(n)) : ((t.next = a.next), (a.next = t)),
      (n.interleaved = t),
      At(e, r)
    );
  }
  function Ei(e, t, r) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
      var n = t.lanes;
      ((n &= e.pendingLanes), (r |= n), (t.lanes = r), ga(e, r));
    }
  }
  function vl(e, t) {
    var r = e.updateQueue,
      n = e.alternate;
    if (n !== null && ((n = n.updateQueue), r === n)) {
      var a = null,
        o = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var c = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          (o === null ? (a = o = c) : (o = o.next = c), (r = r.next));
        } while (r !== null);
        o === null ? (a = o = t) : (o = o.next = t);
      } else a = o = t;
      ((r = {
        baseState: n.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: o,
        shared: n.shared,
        effects: n.effects,
      }),
        (e.updateQueue = r));
      return;
    }
    ((e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t));
  }
  function Di(e, t, r, n) {
    var a = e.updateQueue;
    rr = !1;
    var o = a.firstBaseUpdate,
      c = a.lastBaseUpdate,
      d = a.shared.pending;
    if (d !== null) {
      a.shared.pending = null;
      var f = d,
        x = f.next;
      ((f.next = null), c === null ? (o = x) : (c.next = x), (c = f));
      var T = e.alternate;
      T !== null &&
        ((T = T.updateQueue),
        (d = T.lastBaseUpdate),
        d !== c && (d === null ? (T.firstBaseUpdate = x) : (d.next = x), (T.lastBaseUpdate = f)));
    }
    if (o !== null) {
      var D = a.baseState;
      ((c = 0), (T = x = f = null), (d = o));
      do {
        var L = d.lane,
          V = d.eventTime;
        if ((n & L) === L) {
          T !== null &&
            (T = T.next =
              {
                eventTime: V,
                lane: 0,
                tag: d.tag,
                payload: d.payload,
                callback: d.callback,
                next: null,
              });
          e: {
            var U = e,
              B = d;
            switch (((L = t), (V = r), B.tag)) {
              case 1:
                if (((U = B.payload), typeof U == 'function')) {
                  D = U.call(V, D, L);
                  break e;
                }
                D = U;
                break e;
              case 3:
                U.flags = (U.flags & -65537) | 128;
              case 0:
                if (
                  ((U = B.payload), (L = typeof U == 'function' ? U.call(V, D, L) : U), L == null)
                )
                  break e;
                D = A({}, D, L);
                break e;
              case 2:
                rr = !0;
            }
          }
          d.callback !== null &&
            d.lane !== 0 &&
            ((e.flags |= 64), (L = a.effects), L === null ? (a.effects = [d]) : L.push(d));
        } else
          ((V = {
            eventTime: V,
            lane: L,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null,
          }),
            T === null ? ((x = T = V), (f = D)) : (T = T.next = V),
            (c |= L));
        if (((d = d.next), d === null)) {
          if (((d = a.shared.pending), d === null)) break;
          ((L = d),
            (d = L.next),
            (L.next = null),
            (a.lastBaseUpdate = L),
            (a.shared.pending = null));
        }
      } while (!0);
      if (
        (T === null && (f = D),
        (a.baseState = f),
        (a.firstBaseUpdate = x),
        (a.lastBaseUpdate = T),
        (t = a.shared.interleaved),
        t !== null)
      ) {
        a = t;
        do ((c |= a.lane), (a = a.next));
        while (a !== t);
      } else o === null && (a.shared.lanes = 0);
      ((_r |= c), (e.lanes = c), (e.memoizedState = D));
    }
  }
  function yl(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var n = e[t],
          a = n.callback;
        if (a !== null) {
          if (((n.callback = null), (n = r), typeof a != 'function')) throw Error(s(191, a));
          a.call(n);
        }
      }
  }
  var Dn = {},
    Dt = Jt(Dn),
    Fn = Jt(Dn),
    zn = Jt(Dn);
  function yr(e) {
    if (e === Dn) throw Error(s(174));
    return e;
  }
  function no(e, t) {
    switch ((_e(zn, t), _e(Fn, e), _e(Dt, Dn), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Er(null, '');
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Er(t, e)));
    }
    (ke(Dt), _e(Dt, t));
  }
  function Kr() {
    (ke(Dt), ke(Fn), ke(zn));
  }
  function bl(e) {
    yr(zn.current);
    var t = yr(Dt.current),
      r = Er(t, e.type);
    t !== r && (_e(Fn, e), _e(Dt, r));
  }
  function io(e) {
    Fn.current === e && (ke(Dt), ke(Fn));
  }
  var Se = Jt(0);
  function Fi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!'))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var ao = [];
  function oo() {
    for (var e = 0; e < ao.length; e++) ao[e]._workInProgressVersionPrimary = null;
    ao.length = 0;
  }
  var zi = ae.ReactCurrentDispatcher,
    so = ae.ReactCurrentBatchConfig,
    br = 0,
    Ce = null,
    We = null,
    Ie = null,
    Ri = !1,
    Rn = !1,
    Mn = 0,
    jd = 0;
  function Ze() {
    throw Error(s(321));
  }
  function lo(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!wt(e[r], t[r])) return !1;
    return !0;
  }
  function co(e, t, r, n, a, o) {
    if (
      ((br = o),
      (Ce = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (zi.current = e === null || e.memoizedState === null ? Ld : Td),
      (e = r(n, a)),
      Rn)
    ) {
      o = 0;
      do {
        if (((Rn = !1), (Mn = 0), 25 <= o)) throw Error(s(301));
        ((o += 1), (Ie = We = null), (t.updateQueue = null), (zi.current = Ed), (e = r(n, a)));
      } while (Rn);
    }
    if (
      ((zi.current = Oi),
      (t = We !== null && We.next !== null),
      (br = 0),
      (Ie = We = Ce = null),
      (Ri = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function uo() {
    var e = Mn !== 0;
    return ((Mn = 0), e);
  }
  function Ft() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Ie === null ? (Ce.memoizedState = Ie = e) : (Ie = Ie.next = e), Ie);
  }
  function yt() {
    if (We === null) {
      var e = Ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = We.next;
    var t = Ie === null ? Ce.memoizedState : Ie.next;
    if (t !== null) ((Ie = t), (We = e));
    else {
      if (e === null) throw Error(s(310));
      ((We = e),
        (e = {
          memoizedState: We.memoizedState,
          baseState: We.baseState,
          baseQueue: We.baseQueue,
          queue: We.queue,
          next: null,
        }),
        Ie === null ? (Ce.memoizedState = Ie = e) : (Ie = Ie.next = e));
    }
    return Ie;
  }
  function Wn(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function mo(e) {
    var t = yt(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var n = We,
      a = n.baseQueue,
      o = r.pending;
    if (o !== null) {
      if (a !== null) {
        var c = a.next;
        ((a.next = o.next), (o.next = c));
      }
      ((n.baseQueue = a = o), (r.pending = null));
    }
    if (a !== null) {
      ((o = a.next), (n = n.baseState));
      var d = (c = null),
        f = null,
        x = o;
      do {
        var T = x.lane;
        if ((br & T) === T)
          (f !== null &&
            (f = f.next =
              {
                lane: 0,
                action: x.action,
                hasEagerState: x.hasEagerState,
                eagerState: x.eagerState,
                next: null,
              }),
            (n = x.hasEagerState ? x.eagerState : e(n, x.action)));
        else {
          var D = {
            lane: T,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null,
          };
          (f === null ? ((d = f = D), (c = n)) : (f = f.next = D), (Ce.lanes |= T), (_r |= T));
        }
        x = x.next;
      } while (x !== null && x !== o);
      (f === null ? (c = n) : (f.next = d),
        wt(n, t.memoizedState) || (at = !0),
        (t.memoizedState = n),
        (t.baseState = c),
        (t.baseQueue = f),
        (r.lastRenderedState = n));
    }
    if (((e = r.interleaved), e !== null)) {
      a = e;
      do ((o = a.lane), (Ce.lanes |= o), (_r |= o), (a = a.next));
      while (a !== e);
    } else a === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function fo(e) {
    var t = yt(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var n = r.dispatch,
      a = r.pending,
      o = t.memoizedState;
    if (a !== null) {
      r.pending = null;
      var c = (a = a.next);
      do ((o = e(o, c.action)), (c = c.next));
      while (c !== a);
      (wt(o, t.memoizedState) || (at = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (r.lastRenderedState = o));
    }
    return [o, n];
  }
  function _l() {}
  function xl(e, t) {
    var r = Ce,
      n = yt(),
      a = t(),
      o = !wt(n.memoizedState, a);
    if (
      (o && ((n.memoizedState = a), (at = !0)),
      (n = n.queue),
      po(Nl.bind(null, r, n, e), [e]),
      n.getSnapshot !== t || o || (Ie !== null && Ie.memoizedState.tag & 1))
    ) {
      if (((r.flags |= 2048), On(9, kl.bind(null, r, n, a, t), void 0, null), Ae === null))
        throw Error(s(349));
      (br & 30) !== 0 || wl(r, t, a);
    }
    return a;
  }
  function wl(e, t, r) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Ce.updateQueue = t), (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
  }
  function kl(e, t, r, n) {
    ((t.value = r), (t.getSnapshot = n), jl(t) && Sl(e));
  }
  function Nl(e, t, r) {
    return r(function () {
      jl(t) && Sl(e);
    });
  }
  function jl(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !wt(e, r);
    } catch {
      return !0;
    }
  }
  function Sl(e) {
    var t = At(e, 1);
    t !== null && Ct(t, e, 1, -1);
  }
  function Cl(e) {
    var t = Ft();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wn,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Pd.bind(null, Ce, e)),
      [t.memoizedState, e]
    );
  }
  function On(e, t, r, n) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
      (t = Ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ce.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
      e
    );
  }
  function Pl() {
    return yt().memoizedState;
  }
  function Mi(e, t, r, n) {
    var a = Ft();
    ((Ce.flags |= e), (a.memoizedState = On(1 | t, r, void 0, n === void 0 ? null : n)));
  }
  function Wi(e, t, r, n) {
    var a = yt();
    n = n === void 0 ? null : n;
    var o = void 0;
    if (We !== null) {
      var c = We.memoizedState;
      if (((o = c.destroy), n !== null && lo(n, c.deps))) {
        a.memoizedState = On(t, r, o, n);
        return;
      }
    }
    ((Ce.flags |= e), (a.memoizedState = On(1 | t, r, o, n)));
  }
  function Ll(e, t) {
    return Mi(8390656, 8, e, t);
  }
  function po(e, t) {
    return Wi(2048, 8, e, t);
  }
  function Tl(e, t) {
    return Wi(4, 2, e, t);
  }
  function El(e, t) {
    return Wi(4, 4, e, t);
  }
  function Dl(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Fl(e, t, r) {
    return ((r = r != null ? r.concat([e]) : null), Wi(4, 4, Dl.bind(null, t, e), r));
  }
  function ho() {}
  function zl(e, t) {
    var r = yt();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && lo(t, n[1]) ? n[0] : ((r.memoizedState = [e, t]), e);
  }
  function Rl(e, t) {
    var r = yt();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && lo(t, n[1])
      ? n[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function Ml(e, t, r) {
    return (br & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (at = !0)), (e.memoizedState = r))
      : (wt(r, t) || ((r = ms()), (Ce.lanes |= r), (_r |= r), (e.baseState = !0)), t);
  }
  function Sd(e, t) {
    var r = fe;
    ((fe = r !== 0 && 4 > r ? r : 4), e(!0));
    var n = so.transition;
    so.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((fe = r), (so.transition = n));
    }
  }
  function Wl() {
    return yt().memoizedState;
  }
  function Cd(e, t, r) {
    var n = sr(e);
    if (((r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }), Ol(e)))
      Il(t, r);
    else if (((r = hl(e, t, r, n)), r !== null)) {
      var a = rt();
      (Ct(r, e, n, a), Al(r, t, n));
    }
  }
  function Pd(e, t, r) {
    var n = sr(e),
      a = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (Ol(e)) Il(t, a);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var c = t.lastRenderedState,
            d = o(c, r);
          if (((a.hasEagerState = !0), (a.eagerState = d), wt(d, c))) {
            var f = t.interleaved;
            (f === null ? ((a.next = a), to(t)) : ((a.next = f.next), (f.next = a)),
              (t.interleaved = a));
            return;
          }
        } catch {
        } finally {
        }
      ((r = hl(e, t, a, n)), r !== null && ((a = rt()), Ct(r, e, n, a), Al(r, t, n)));
    }
  }
  function Ol(e) {
    var t = e.alternate;
    return e === Ce || (t !== null && t === Ce);
  }
  function Il(e, t) {
    Rn = Ri = !0;
    var r = e.pending;
    (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t));
  }
  function Al(e, t, r) {
    if ((r & 4194240) !== 0) {
      var n = t.lanes;
      ((n &= e.pendingLanes), (r |= n), (t.lanes = r), ga(e, r));
    }
  }
  var Oi = {
      readContext: vt,
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
    Ld = {
      readContext: vt,
      useCallback: function (e, t) {
        return ((Ft().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: vt,
      useEffect: Ll,
      useImperativeHandle: function (e, t, r) {
        return ((r = r != null ? r.concat([e]) : null), Mi(4194308, 4, Dl.bind(null, t, e), r));
      },
      useLayoutEffect: function (e, t) {
        return Mi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Mi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = Ft();
        return ((t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, r) {
        var n = Ft();
        return (
          (t = r !== void 0 ? r(t) : t),
          (n.memoizedState = n.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (n.queue = e),
          (e = e.dispatch = Cd.bind(null, Ce, e)),
          [n.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ft();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Cl,
      useDebugValue: ho,
      useDeferredValue: function (e) {
        return (Ft().memoizedState = e);
      },
      useTransition: function () {
        var e = Cl(!1),
          t = e[0];
        return ((e = Sd.bind(null, e[1])), (Ft().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var n = Ce,
          a = Ft();
        if (je) {
          if (r === void 0) throw Error(s(407));
          r = r();
        } else {
          if (((r = t()), Ae === null)) throw Error(s(349));
          (br & 30) !== 0 || wl(n, t, r);
        }
        a.memoizedState = r;
        var o = { value: r, getSnapshot: t };
        return (
          (a.queue = o),
          Ll(Nl.bind(null, n, o, e), [e]),
          (n.flags |= 2048),
          On(9, kl.bind(null, n, o, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = Ft(),
          t = Ae.identifierPrefix;
        if (je) {
          var r = It,
            n = Ot;
          ((r = (n & ~(1 << (32 - xt(n) - 1))).toString(32) + r),
            (t = ':' + t + 'R' + r),
            (r = Mn++),
            0 < r && (t += 'H' + r.toString(32)),
            (t += ':'));
        } else ((r = jd++), (t = ':' + t + 'r' + r.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Td = {
      readContext: vt,
      useCallback: zl,
      useContext: vt,
      useEffect: po,
      useImperativeHandle: Fl,
      useInsertionEffect: Tl,
      useLayoutEffect: El,
      useMemo: Rl,
      useReducer: mo,
      useRef: Pl,
      useState: function () {
        return mo(Wn);
      },
      useDebugValue: ho,
      useDeferredValue: function (e) {
        var t = yt();
        return Ml(t, We.memoizedState, e);
      },
      useTransition: function () {
        var e = mo(Wn)[0],
          t = yt().memoizedState;
        return [e, t];
      },
      useMutableSource: _l,
      useSyncExternalStore: xl,
      useId: Wl,
      unstable_isNewReconciler: !1,
    },
    Ed = {
      readContext: vt,
      useCallback: zl,
      useContext: vt,
      useEffect: po,
      useImperativeHandle: Fl,
      useInsertionEffect: Tl,
      useLayoutEffect: El,
      useMemo: Rl,
      useReducer: fo,
      useRef: Pl,
      useState: function () {
        return fo(Wn);
      },
      useDebugValue: ho,
      useDeferredValue: function (e) {
        var t = yt();
        return We === null ? (t.memoizedState = e) : Ml(t, We.memoizedState, e);
      },
      useTransition: function () {
        var e = fo(Wn)[0],
          t = yt().memoizedState;
        return [e, t];
      },
      useMutableSource: _l,
      useSyncExternalStore: xl,
      useId: Wl,
      unstable_isNewReconciler: !1,
    };
  function Nt(e, t) {
    if (e && e.defaultProps) {
      ((t = A({}, t)), (e = e.defaultProps));
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function go(e, t, r, n) {
    ((t = e.memoizedState),
      (r = r(n, t)),
      (r = r == null ? t : A({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r));
  }
  var Ii = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? mr(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var n = rt(),
        a = sr(e),
        o = Vt(n, a);
      ((o.payload = t),
        r != null && (o.callback = r),
        (t = nr(e, o, a)),
        t !== null && (Ct(t, e, a, n), Ei(t, e, a)));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var n = rt(),
        a = sr(e),
        o = Vt(n, a);
      ((o.tag = 1),
        (o.payload = t),
        r != null && (o.callback = r),
        (t = nr(e, o, a)),
        t !== null && (Ct(t, e, a, n), Ei(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = rt(),
        n = sr(e),
        a = Vt(r, n);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = nr(e, a, n)),
        t !== null && (Ct(t, e, n, r), Ei(t, e, n)));
    },
  };
  function Vl(e, t, r, n, a, o, c) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(n, o, c)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Nn(r, n) || !Nn(a, o)
          : !0
    );
  }
  function ql(e, t, r) {
    var n = !1,
      a = er,
      o = t.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = vt(o))
        : ((a = it(t) ? pr : Ye.current),
          (n = t.contextTypes),
          (o = (n = n != null) ? Vr(e, a) : er)),
      (t = new t(r, o)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Ii),
      (e.stateNode = t),
      (t._reactInternals = e),
      n &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Ul(e, t, r, n) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(r, n),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(r, n),
      t.state !== e && Ii.enqueueReplaceState(t, t.state, null));
  }
  function vo(e, t, r, n) {
    var a = e.stateNode;
    ((a.props = r), (a.state = e.memoizedState), (a.refs = {}), ro(e));
    var o = t.contextType;
    (typeof o == 'object' && o !== null
      ? (a.context = vt(o))
      : ((o = it(t) ? pr : Ye.current), (a.context = Vr(e, o))),
      (a.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == 'function' && (go(e, t, o, r), (a.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function' ||
        (typeof a.UNSAFE_componentWillMount != 'function' &&
          typeof a.componentWillMount != 'function') ||
        ((t = a.state),
        typeof a.componentWillMount == 'function' && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == 'function' && a.UNSAFE_componentWillMount(),
        t !== a.state && Ii.enqueueReplaceState(a, a.state, null),
        Di(e, r, a, n),
        (a.state = e.memoizedState)),
      typeof a.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function Qr(e, t) {
    try {
      var r = '',
        n = t;
      do ((r += ee(n)), (n = n.return));
      while (n);
      var a = r;
    } catch (o) {
      a =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function yo(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function bo(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var Dd = typeof WeakMap == 'function' ? WeakMap : Map;
  function Bl(e, t, r) {
    ((r = Vt(-1, r)), (r.tag = 3), (r.payload = { element: null }));
    var n = t.value;
    return (
      (r.callback = function () {
        ($i || (($i = !0), (Fo = n)), bo(e, t));
      }),
      r
    );
  }
  function Hl(e, t, r) {
    ((r = Vt(-1, r)), (r.tag = 3));
    var n = e.type.getDerivedStateFromError;
    if (typeof n == 'function') {
      var a = t.value;
      ((r.payload = function () {
        return n(a);
      }),
        (r.callback = function () {
          bo(e, t);
        }));
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == 'function' &&
        (r.callback = function () {
          (bo(e, t),
            typeof n != 'function' && (ar === null ? (ar = new Set([this])) : ar.add(this)));
          var c = t.stack;
          this.componentDidCatch(t.value, { componentStack: c !== null ? c : '' });
        }),
      r
    );
  }
  function $l(e, t, r) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new Dd();
      var a = new Set();
      n.set(t, a);
    } else ((a = n.get(t)), a === void 0 && ((a = new Set()), n.set(t, a)));
    a.has(r) || (a.add(r), (e = $d.bind(null, e, t, r)), t.then(e, e));
  }
  function Gl(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Kl(e, t, r, n, a) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null ? (r.tag = 17) : ((t = Vt(-1, 1)), (t.tag = 2), nr(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = a), e);
  }
  var Fd = ae.ReactCurrentOwner,
    at = !1;
  function tt(e, t, r, n) {
    t.child = e === null ? pl(t, null, r, n) : Hr(t, e.child, r, n);
  }
  function Ql(e, t, r, n, a) {
    r = r.render;
    var o = t.ref;
    return (
      Gr(t, a),
      (n = co(e, t, r, n, o, a)),
      (r = uo()),
      e !== null && !at
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), qt(e, t, a))
        : (je && r && $a(t), (t.flags |= 1), tt(e, t, n, a), t.child)
    );
  }
  function Yl(e, t, r, n, a) {
    if (e === null) {
      var o = r.type;
      return typeof o == 'function' &&
        !Ao(o) &&
        o.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Zl(e, t, o, n, a))
        : ((e = Xi(r.type, null, n, t, t.mode, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), (e.lanes & a) === 0)) {
      var c = o.memoizedProps;
      if (((r = r.compare), (r = r !== null ? r : Nn), r(c, n) && e.ref === t.ref))
        return qt(e, t, a);
    }
    return ((t.flags |= 1), (e = cr(o, n)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Zl(e, t, r, n, a) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Nn(o, n) && e.ref === t.ref)
        if (((at = !1), (t.pendingProps = n = o), (e.lanes & a) !== 0))
          (e.flags & 131072) !== 0 && (at = !0);
        else return ((t.lanes = e.lanes), qt(e, t, a));
    }
    return _o(e, t, r, n, a);
  }
  function Xl(e, t, r) {
    var n = t.pendingProps,
      a = n.children,
      o = e !== null ? e.memoizedState : null;
    if (n.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          _e(Zr, ft),
          (ft |= r));
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            _e(Zr, ft),
            (ft |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (n = o !== null ? o.baseLanes : r),
          _e(Zr, ft),
          (ft |= n));
      }
    else
      (o !== null ? ((n = o.baseLanes | r), (t.memoizedState = null)) : (n = r),
        _e(Zr, ft),
        (ft |= n));
    return (tt(e, t, a, r), t.child);
  }
  function Jl(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function _o(e, t, r, n, a) {
    var o = it(r) ? pr : Ye.current;
    return (
      (o = Vr(t, o)),
      Gr(t, a),
      (r = co(e, t, r, n, o, a)),
      (n = uo()),
      e !== null && !at
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), qt(e, t, a))
        : (je && n && $a(t), (t.flags |= 1), tt(e, t, r, a), t.child)
    );
  }
  function ec(e, t, r, n, a) {
    if (it(r)) {
      var o = !0;
      ki(t);
    } else o = !1;
    if ((Gr(t, a), t.stateNode === null)) (Vi(e, t), ql(t, r, n), vo(t, r, n, a), (n = !0));
    else if (e === null) {
      var c = t.stateNode,
        d = t.memoizedProps;
      c.props = d;
      var f = c.context,
        x = r.contextType;
      typeof x == 'object' && x !== null
        ? (x = vt(x))
        : ((x = it(r) ? pr : Ye.current), (x = Vr(t, x)));
      var T = r.getDerivedStateFromProps,
        D = typeof T == 'function' || typeof c.getSnapshotBeforeUpdate == 'function';
      (D ||
        (typeof c.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof c.componentWillReceiveProps != 'function') ||
        ((d !== n || f !== x) && Ul(t, c, n, x)),
        (rr = !1));
      var L = t.memoizedState;
      ((c.state = L),
        Di(t, n, c, a),
        (f = t.memoizedState),
        d !== n || L !== f || nt.current || rr
          ? (typeof T == 'function' && (go(t, r, T, n), (f = t.memoizedState)),
            (d = rr || Vl(t, r, d, n, L, f, x))
              ? (D ||
                  (typeof c.UNSAFE_componentWillMount != 'function' &&
                    typeof c.componentWillMount != 'function') ||
                  (typeof c.componentWillMount == 'function' && c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == 'function' &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof c.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = n),
                (t.memoizedState = f)),
            (c.props = n),
            (c.state = f),
            (c.context = x),
            (n = d))
          : (typeof c.componentDidMount == 'function' && (t.flags |= 4194308), (n = !1)));
    } else {
      ((c = t.stateNode),
        gl(e, t),
        (d = t.memoizedProps),
        (x = t.type === t.elementType ? d : Nt(t.type, d)),
        (c.props = x),
        (D = t.pendingProps),
        (L = c.context),
        (f = r.contextType),
        typeof f == 'object' && f !== null
          ? (f = vt(f))
          : ((f = it(r) ? pr : Ye.current), (f = Vr(t, f))));
      var V = r.getDerivedStateFromProps;
      ((T = typeof V == 'function' || typeof c.getSnapshotBeforeUpdate == 'function') ||
        (typeof c.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof c.componentWillReceiveProps != 'function') ||
        ((d !== D || L !== f) && Ul(t, c, n, f)),
        (rr = !1),
        (L = t.memoizedState),
        (c.state = L),
        Di(t, n, c, a));
      var U = t.memoizedState;
      d !== D || L !== U || nt.current || rr
        ? (typeof V == 'function' && (go(t, r, V, n), (U = t.memoizedState)),
          (x = rr || Vl(t, r, x, n, L, U, f) || !1)
            ? (T ||
                (typeof c.UNSAFE_componentWillUpdate != 'function' &&
                  typeof c.componentWillUpdate != 'function') ||
                (typeof c.componentWillUpdate == 'function' && c.componentWillUpdate(n, U, f),
                typeof c.UNSAFE_componentWillUpdate == 'function' &&
                  c.UNSAFE_componentWillUpdate(n, U, f)),
              typeof c.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof c.componentDidUpdate != 'function' ||
                (d === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != 'function' ||
                (d === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = n),
              (t.memoizedState = U)),
          (c.props = n),
          (c.state = U),
          (c.context = f),
          (n = x))
        : (typeof c.componentDidUpdate != 'function' ||
            (d === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != 'function' ||
            (d === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 1024),
          (n = !1));
    }
    return xo(e, t, r, n, o, a);
  }
  function xo(e, t, r, n, a, o) {
    Jl(e, t);
    var c = (t.flags & 128) !== 0;
    if (!n && !c) return (a && al(t, r, !1), qt(e, t, o));
    ((n = t.stateNode), (Fd.current = t));
    var d = c && typeof r.getDerivedStateFromError != 'function' ? null : n.render();
    return (
      (t.flags |= 1),
      e !== null && c
        ? ((t.child = Hr(t, e.child, null, o)), (t.child = Hr(t, null, d, o)))
        : tt(e, t, d, o),
      (t.memoizedState = n.state),
      a && al(t, r, !0),
      t.child
    );
  }
  function tc(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? nl(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && nl(e, t.context, !1),
      no(e, t.containerInfo));
  }
  function rc(e, t, r, n, a) {
    return (Br(), Ya(a), (t.flags |= 256), tt(e, t, r, n), t.child);
  }
  var wo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ko(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function nc(e, t, r) {
    var n = t.pendingProps,
      a = Se.current,
      o = !1,
      c = (t.flags & 128) !== 0,
      d;
    if (
      ((d = c) || (d = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
      d ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (a |= 1),
      _e(Se, a & 1),
      e === null)
    )
      return (
        Qa(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === '$!'
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((c = n.children),
            (e = n.fallback),
            o
              ? ((n = t.mode),
                (o = t.child),
                (c = { mode: 'hidden', children: c }),
                (n & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = c))
                  : (o = Ji(c, n, 0, null)),
                (e = Nr(e, n, r, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = ko(r)),
                (t.memoizedState = wo),
                e)
              : No(t, c))
      );
    if (((a = e.memoizedState), a !== null && ((d = a.dehydrated), d !== null)))
      return zd(e, t, c, n, d, a, r);
    if (o) {
      ((o = n.fallback), (c = t.mode), (a = e.child), (d = a.sibling));
      var f = { mode: 'hidden', children: n.children };
      return (
        (c & 1) === 0 && t.child !== a
          ? ((n = t.child), (n.childLanes = 0), (n.pendingProps = f), (t.deletions = null))
          : ((n = cr(a, f)), (n.subtreeFlags = a.subtreeFlags & 14680064)),
        d !== null ? (o = cr(d, o)) : ((o = Nr(o, c, r, null)), (o.flags |= 2)),
        (o.return = t),
        (n.return = t),
        (n.sibling = o),
        (t.child = n),
        (n = o),
        (o = t.child),
        (c = e.child.memoizedState),
        (c =
          c === null
            ? ko(r)
            : { baseLanes: c.baseLanes | r, cachePool: null, transitions: c.transitions }),
        (o.memoizedState = c),
        (o.childLanes = e.childLanes & ~r),
        (t.memoizedState = wo),
        n
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (n = cr(o, { mode: 'visible', children: n.children })),
      (t.mode & 1) === 0 && (n.lanes = r),
      (n.return = t),
      (n.sibling = null),
      e !== null &&
        ((r = t.deletions), r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = n),
      (t.memoizedState = null),
      n
    );
  }
  function No(e, t) {
    return (
      (t = Ji({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ai(e, t, r, n) {
    return (
      n !== null && Ya(n),
      Hr(t, e.child, null, r),
      (e = No(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function zd(e, t, r, n, a, o, c) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (n = yo(Error(s(422)))), Ai(e, t, c, n))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = n.fallback),
            (a = t.mode),
            (n = Ji({ mode: 'visible', children: n.children }, a, 0, null)),
            (o = Nr(o, a, c, null)),
            (o.flags |= 2),
            (n.return = t),
            (o.return = t),
            (n.sibling = o),
            (t.child = n),
            (t.mode & 1) !== 0 && Hr(t, e.child, null, c),
            (t.child.memoizedState = ko(c)),
            (t.memoizedState = wo),
            o);
    if ((t.mode & 1) === 0) return Ai(e, t, c, null);
    if (a.data === '$!') {
      if (((n = a.nextSibling && a.nextSibling.dataset), n)) var d = n.dgst;
      return ((n = d), (o = Error(s(419))), (n = yo(o, n, void 0)), Ai(e, t, c, n));
    }
    if (((d = (c & e.childLanes) !== 0), at || d)) {
      if (((n = Ae), n !== null)) {
        switch (c & -c) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
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
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        ((a = (a & (n.suspendedLanes | c)) !== 0 ? 0 : a),
          a !== 0 && a !== o.retryLane && ((o.retryLane = a), At(e, a), Ct(n, e, a, -1)));
      }
      return (Io(), (n = yo(Error(s(421)))), Ai(e, t, c, n));
    }
    return a.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Gd.bind(null, e)), (a._reactRetry = t), null)
      : ((e = o.treeContext),
        (mt = Xt(a.nextSibling)),
        (dt = t),
        (je = !0),
        (kt = null),
        e !== null &&
          ((ht[gt++] = Ot),
          (ht[gt++] = It),
          (ht[gt++] = hr),
          (Ot = e.id),
          (It = e.overflow),
          (hr = t)),
        (t = No(t, n.children)),
        (t.flags |= 4096),
        t);
  }
  function ic(e, t, r) {
    e.lanes |= t;
    var n = e.alternate;
    (n !== null && (n.lanes |= t), eo(e.return, t, r));
  }
  function jo(e, t, r, n, a) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: r,
          tailMode: a,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = n),
        (o.tail = r),
        (o.tailMode = a));
  }
  function ac(e, t, r) {
    var n = t.pendingProps,
      a = n.revealOrder,
      o = n.tail;
    if ((tt(e, t, n.children, r), (n = Se.current), (n & 2) !== 0))
      ((n = (n & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && ic(e, r, t);
          else if (e.tag === 19) ic(e, r, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      n &= 1;
    }
    if ((_e(Se, n), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (a) {
        case 'forwards':
          for (r = t.child, a = null; r !== null; )
            ((e = r.alternate), e !== null && Fi(e) === null && (a = r), (r = r.sibling));
          ((r = a),
            r === null ? ((a = t.child), (t.child = null)) : ((a = r.sibling), (r.sibling = null)),
            jo(t, !1, a, r, o));
          break;
        case 'backwards':
          for (r = null, a = t.child, t.child = null; a !== null; ) {
            if (((e = a.alternate), e !== null && Fi(e) === null)) {
              t.child = a;
              break;
            }
            ((e = a.sibling), (a.sibling = r), (r = a), (a = e));
          }
          jo(t, !0, r, null, o);
          break;
        case 'together':
          jo(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Vi(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function qt(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (_r |= t.lanes), (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, r = cr(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
        ((e = e.sibling), (r = r.sibling = cr(e, e.pendingProps)), (r.return = t));
      r.sibling = null;
    }
    return t.child;
  }
  function Rd(e, t, r) {
    switch (t.tag) {
      case 3:
        (tc(t), Br());
        break;
      case 5:
        bl(t);
        break;
      case 1:
        it(t.type) && ki(t);
        break;
      case 4:
        no(t, t.stateNode.containerInfo);
        break;
      case 10:
        var n = t.type._context,
          a = t.memoizedProps.value;
        (_e(Li, n._currentValue), (n._currentValue = a));
        break;
      case 13:
        if (((n = t.memoizedState), n !== null))
          return n.dehydrated !== null
            ? (_e(Se, Se.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? nc(e, t, r)
              : (_e(Se, Se.current & 1), (e = qt(e, t, r)), e !== null ? e.sibling : null);
        _e(Se, Se.current & 1);
        break;
      case 19:
        if (((n = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (n) return ac(e, t, r);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          _e(Se, Se.current),
          n)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Xl(e, t, r));
    }
    return qt(e, t, r);
  }
  var oc, So, sc, lc;
  ((oc = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        ((r.child.return = r), (r = r.child));
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      ((r.sibling.return = r.return), (r = r.sibling));
    }
  }),
    (So = function () {}),
    (sc = function (e, t, r, n) {
      var a = e.memoizedProps;
      if (a !== n) {
        ((e = t.stateNode), yr(Dt.current));
        var o = null;
        switch (r) {
          case 'input':
            ((a = Bt(e, a)), (n = Bt(e, n)), (o = []));
            break;
          case 'select':
            ((a = A({}, a, { value: void 0 })), (n = A({}, n, { value: void 0 })), (o = []));
            break;
          case 'textarea':
            ((a = Lr(e, a)), (n = Lr(e, n)), (o = []));
            break;
          default:
            typeof a.onClick != 'function' && typeof n.onClick == 'function' && (e.onclick = _i);
        }
        an(r, n);
        var c;
        r = null;
        for (x in a)
          if (!n.hasOwnProperty(x) && a.hasOwnProperty(x) && a[x] != null)
            if (x === 'style') {
              var d = a[x];
              for (c in d) d.hasOwnProperty(c) && (r || (r = {}), (r[c] = ''));
            } else
              x !== 'dangerouslySetInnerHTML' &&
                x !== 'children' &&
                x !== 'suppressContentEditableWarning' &&
                x !== 'suppressHydrationWarning' &&
                x !== 'autoFocus' &&
                (w.hasOwnProperty(x) ? o || (o = []) : (o = o || []).push(x, null));
        for (x in n) {
          var f = n[x];
          if (
            ((d = a != null ? a[x] : void 0),
            n.hasOwnProperty(x) && f !== d && (f != null || d != null))
          )
            if (x === 'style')
              if (d) {
                for (c in d)
                  !d.hasOwnProperty(c) ||
                    (f && f.hasOwnProperty(c)) ||
                    (r || (r = {}), (r[c] = ''));
                for (c in f) f.hasOwnProperty(c) && d[c] !== f[c] && (r || (r = {}), (r[c] = f[c]));
              } else (r || (o || (o = []), o.push(x, r)), (r = f));
            else
              x === 'dangerouslySetInnerHTML'
                ? ((f = f ? f.__html : void 0),
                  (d = d ? d.__html : void 0),
                  f != null && d !== f && (o = o || []).push(x, f))
                : x === 'children'
                  ? (typeof f != 'string' && typeof f != 'number') || (o = o || []).push(x, '' + f)
                  : x !== 'suppressContentEditableWarning' &&
                    x !== 'suppressHydrationWarning' &&
                    (w.hasOwnProperty(x)
                      ? (f != null && x === 'onScroll' && we('scroll', e), o || d === f || (o = []))
                      : (o = o || []).push(x, f));
        }
        r && (o = o || []).push('style', r);
        var x = o;
        (t.updateQueue = x) && (t.flags |= 4);
      }
    }),
    (lc = function (e, t, r, n) {
      r !== n && (t.flags |= 4);
    }));
  function In(e, t) {
    if (!je)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var r = null; t !== null; ) (t.alternate !== null && (r = t), (t = t.sibling));
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case 'collapsed':
          r = e.tail;
          for (var n = null; r !== null; ) (r.alternate !== null && (n = r), (r = r.sibling));
          n === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (n.sibling = null);
      }
  }
  function Xe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      n = 0;
    if (t)
      for (var a = e.child; a !== null; )
        ((r |= a.lanes | a.childLanes),
          (n |= a.subtreeFlags & 14680064),
          (n |= a.flags & 14680064),
          (a.return = e),
          (a = a.sibling));
    else
      for (a = e.child; a !== null; )
        ((r |= a.lanes | a.childLanes),
          (n |= a.subtreeFlags),
          (n |= a.flags),
          (a.return = e),
          (a = a.sibling));
    return ((e.subtreeFlags |= n), (e.childLanes = r), t);
  }
  function Md(e, t, r) {
    var n = t.pendingProps;
    switch ((Ga(t), t.tag)) {
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
        return (Xe(t), null);
      case 1:
        return (it(t.type) && wi(), Xe(t), null);
      case 3:
        return (
          (n = t.stateNode),
          Kr(),
          ke(nt),
          ke(Ye),
          oo(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ci(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), kt !== null && (Mo(kt), (kt = null)))),
          So(e, t),
          Xe(t),
          null
        );
      case 5:
        io(t);
        var a = yr(zn.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          (sc(e, t, r, n, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(s(166));
            return (Xe(t), null);
          }
          if (((e = yr(Dt.current)), Ci(t))) {
            ((n = t.stateNode), (r = t.type));
            var o = t.memoizedProps;
            switch (((n[Et] = t), (n[Ln] = o), (e = (t.mode & 1) !== 0), r)) {
              case 'dialog':
                (we('cancel', n), we('close', n));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                we('load', n);
                break;
              case 'video':
              case 'audio':
                for (a = 0; a < Sn.length; a++) we(Sn[a], n);
                break;
              case 'source':
                we('error', n);
                break;
              case 'img':
              case 'image':
              case 'link':
                (we('error', n), we('load', n));
                break;
              case 'details':
                we('toggle', n);
                break;
              case 'input':
                (Qn(n, o), we('invalid', n));
                break;
              case 'select':
                ((n._wrapperState = { wasMultiple: !!o.multiple }), we('invalid', n));
                break;
              case 'textarea':
                (Tr(n, o), we('invalid', n));
            }
            (an(r, o), (a = null));
            for (var c in o)
              if (o.hasOwnProperty(c)) {
                var d = o[c];
                c === 'children'
                  ? typeof d == 'string'
                    ? n.textContent !== d &&
                      (o.suppressHydrationWarning !== !0 && bi(n.textContent, d, e),
                      (a = ['children', d]))
                    : typeof d == 'number' &&
                      n.textContent !== '' + d &&
                      (o.suppressHydrationWarning !== !0 && bi(n.textContent, d, e),
                      (a = ['children', '' + d]))
                  : w.hasOwnProperty(c) && d != null && c === 'onScroll' && we('scroll', n);
              }
            switch (r) {
              case 'input':
                (jr(n), rn(n, o, !0));
                break;
              case 'textarea':
                (jr(n), j(n));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof o.onClick == 'function' && (n.onclick = _i);
            }
            ((n = a), (t.updateQueue = n), n !== null && (t.flags |= 4));
          } else {
            ((c = a.nodeType === 9 ? a : a.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = Qe(r)),
              e === 'http://www.w3.org/1999/xhtml'
                ? r === 'script'
                  ? ((e = c.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof n.is == 'string'
                    ? (e = c.createElement(r, { is: n.is }))
                    : ((e = c.createElement(r)),
                      r === 'select' &&
                        ((c = e), n.multiple ? (c.multiple = !0) : n.size && (c.size = n.size)))
                : (e = c.createElementNS(e, r)),
              (e[Et] = t),
              (e[Ln] = n),
              oc(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((c = on(r, n)), r)) {
                case 'dialog':
                  (we('cancel', e), we('close', e), (a = n));
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  (we('load', e), (a = n));
                  break;
                case 'video':
                case 'audio':
                  for (a = 0; a < Sn.length; a++) we(Sn[a], e);
                  a = n;
                  break;
                case 'source':
                  (we('error', e), (a = n));
                  break;
                case 'img':
                case 'image':
                case 'link':
                  (we('error', e), we('load', e), (a = n));
                  break;
                case 'details':
                  (we('toggle', e), (a = n));
                  break;
                case 'input':
                  (Qn(e, n), (a = Bt(e, n)), we('invalid', e));
                  break;
                case 'option':
                  a = n;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!n.multiple }),
                    (a = A({}, n, { value: void 0 })),
                    we('invalid', e));
                  break;
                case 'textarea':
                  (Tr(e, n), (a = Lr(e, n)), we('invalid', e));
                  break;
                default:
                  a = n;
              }
              (an(r, a), (d = a));
              for (o in d)
                if (d.hasOwnProperty(o)) {
                  var f = d[o];
                  o === 'style'
                    ? Xn(e, f)
                    : o === 'dangerouslySetInnerHTML'
                      ? ((f = f ? f.__html : void 0), f != null && Te(e, f))
                      : o === 'children'
                        ? typeof f == 'string'
                          ? (r !== 'textarea' || f !== '') && ye(e, f)
                          : typeof f == 'number' && ye(e, '' + f)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (w.hasOwnProperty(o)
                            ? f != null && o === 'onScroll' && we('scroll', e)
                            : f != null && ne(e, o, f, c));
                }
              switch (r) {
                case 'input':
                  (jr(e), rn(e, n, !1));
                  break;
                case 'textarea':
                  (jr(e), j(e));
                  break;
                case 'option':
                  n.value != null && e.setAttribute('value', '' + le(n.value));
                  break;
                case 'select':
                  ((e.multiple = !!n.multiple),
                    (o = n.value),
                    o != null
                      ? Rt(e, !!n.multiple, o, !1)
                      : n.defaultValue != null && Rt(e, !!n.multiple, n.defaultValue, !0));
                  break;
                default:
                  typeof a.onClick == 'function' && (e.onclick = _i);
              }
              switch (r) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  n = !!n.autoFocus;
                  break e;
                case 'img':
                  n = !0;
                  break e;
                default:
                  n = !1;
              }
            }
            n && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (Xe(t), null);
      case 6:
        if (e && t.stateNode != null) lc(e, t, e.memoizedProps, n);
        else {
          if (typeof n != 'string' && t.stateNode === null) throw Error(s(166));
          if (((r = yr(zn.current)), yr(Dt.current), Ci(t))) {
            if (
              ((n = t.stateNode),
              (r = t.memoizedProps),
              (n[Et] = t),
              (o = n.nodeValue !== r) && ((e = dt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  bi(n.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    bi(n.nodeValue, r, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            ((n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
              (n[Et] = t),
              (t.stateNode = n));
        }
        return (Xe(t), null);
      case 13:
        if (
          (ke(Se),
          (n = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (je && mt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (dl(), Br(), (t.flags |= 98560), (o = !1));
          else if (((o = Ci(t)), n !== null && n.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(s(317));
              o[Et] = t;
            } else (Br(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Xe(t), (o = !1));
          } else (kt !== null && (Mo(kt), (kt = null)), (o = !0));
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((n = n !== null),
            n !== (e !== null && e.memoizedState !== null) &&
              n &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Se.current & 1) !== 0 ? Oe === 0 && (Oe = 3) : Io())),
            t.updateQueue !== null && (t.flags |= 4),
            Xe(t),
            null);
      case 4:
        return (Kr(), So(e, t), e === null && Cn(t.stateNode.containerInfo), Xe(t), null);
      case 10:
        return (Ja(t.type._context), Xe(t), null);
      case 17:
        return (it(t.type) && wi(), Xe(t), null);
      case 19:
        if ((ke(Se), (o = t.memoizedState), o === null)) return (Xe(t), null);
        if (((n = (t.flags & 128) !== 0), (c = o.rendering), c === null))
          if (n) In(o, !1);
          else {
            if (Oe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((c = Fi(e)), c !== null)) {
                  for (
                    t.flags |= 128,
                      In(o, !1),
                      n = c.updateQueue,
                      n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      n = r,
                      r = t.child;
                    r !== null;

                  )
                    ((o = r),
                      (e = n),
                      (o.flags &= 14680066),
                      (c = o.alternate),
                      c === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = c.childLanes),
                          (o.lanes = c.lanes),
                          (o.child = c.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = c.memoizedProps),
                          (o.memoizedState = c.memoizedState),
                          (o.updateQueue = c.updateQueue),
                          (o.type = c.type),
                          (e = c.dependencies),
                          (o.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (r = r.sibling));
                  return (_e(Se, (Se.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Ee() > Xr &&
              ((t.flags |= 128), (n = !0), In(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = Fi(c)), e !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                In(o, !0),
                o.tail === null && o.tailMode === 'hidden' && !c.alternate && !je)
              )
                return (Xe(t), null);
            } else
              2 * Ee() - o.renderingStartTime > Xr &&
                r !== 1073741824 &&
                ((t.flags |= 128), (n = !0), In(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((c.sibling = t.child), (t.child = c))
            : ((r = o.last), r !== null ? (r.sibling = c) : (t.child = c), (o.last = c));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Ee()),
            (t.sibling = null),
            (r = Se.current),
            _e(Se, n ? (r & 1) | 2 : r & 1),
            t)
          : (Xe(t), null);
      case 22:
      case 23:
        return (
          Oo(),
          (n = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
          n && (t.mode & 1) !== 0
            ? (ft & 1073741824) !== 0 && (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Xe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Wd(e, t) {
    switch ((Ga(t), t.tag)) {
      case 1:
        return (
          it(t.type) && wi(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Kr(),
          ke(nt),
          ke(Ye),
          oo(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (io(t), null);
      case 13:
        if ((ke(Se), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          Br();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (ke(Se), null);
      case 4:
        return (Kr(), null);
      case 10:
        return (Ja(t.type._context), null);
      case 22:
      case 23:
        return (Oo(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var qi = !1,
    Je = !1,
    Od = typeof WeakSet == 'function' ? WeakSet : Set,
    q = null;
  function Yr(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == 'function')
        try {
          r(null);
        } catch (n) {
          Le(e, t, n);
        }
      else r.current = null;
  }
  function cc(e, t, r) {
    try {
      r();
    } catch (n) {
      Le(e, t, n);
    }
  }
  var uc = !1;
  function Id(e, t) {
    if (((Oa = li), (e = Vs()), Ta(e))) {
      if ('selectionStart' in e) var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var n = r.getSelection && r.getSelection();
          if (n && n.rangeCount !== 0) {
            r = n.anchorNode;
            var a = n.anchorOffset,
              o = n.focusNode;
            n = n.focusOffset;
            try {
              (r.nodeType, o.nodeType);
            } catch {
              r = null;
              break e;
            }
            var c = 0,
              d = -1,
              f = -1,
              x = 0,
              T = 0,
              D = e,
              L = null;
            t: for (;;) {
              for (
                var V;
                D !== r || (a !== 0 && D.nodeType !== 3) || (d = c + a),
                  D !== o || (n !== 0 && D.nodeType !== 3) || (f = c + n),
                  D.nodeType === 3 && (c += D.nodeValue.length),
                  (V = D.firstChild) !== null;

              )
                ((L = D), (D = V));
              for (;;) {
                if (D === e) break t;
                if (
                  (L === r && ++x === a && (d = c),
                  L === o && ++T === n && (f = c),
                  (V = D.nextSibling) !== null)
                )
                  break;
                ((D = L), (L = D.parentNode));
              }
              D = V;
            }
            r = d === -1 || f === -1 ? null : { start: d, end: f };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (Ia = { focusedElem: e, selectionRange: r }, li = !1, q = t; q !== null; )
      if (((t = q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (q = e));
      else
        for (; q !== null; ) {
          t = q;
          try {
            var U = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (U !== null) {
                    var B = U.memoizedProps,
                      De = U.memoizedState,
                      b = t.stateNode,
                      g = b.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? B : Nt(t.type, B),
                        De
                      );
                    b.__reactInternalSnapshotBeforeUpdate = g;
                  }
                  break;
                case 3:
                  var _ = t.stateNode.containerInfo;
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
                  throw Error(s(163));
              }
          } catch (F) {
            Le(t, t.return, F);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (q = e));
            break;
          }
          q = t.return;
        }
    return ((U = uc), (uc = !1), U);
  }
  function An(e, t, r) {
    var n = t.updateQueue;
    if (((n = n !== null ? n.lastEffect : null), n !== null)) {
      var a = (n = n.next);
      do {
        if ((a.tag & e) === e) {
          var o = a.destroy;
          ((a.destroy = void 0), o !== void 0 && cc(t, r, o));
        }
        a = a.next;
      } while (a !== n);
    }
  }
  function Ui(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var n = r.create;
          r.destroy = n();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Co(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function dc(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), dc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Et], delete t[Ln], delete t[Ua], delete t[xd], delete t[wd])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function mc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function fc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || mc(e.return)) return null;
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
  function Po(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
      ((e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = _i)));
    else if (n !== 4 && ((e = e.child), e !== null))
      for (Po(e, t, r), e = e.sibling; e !== null; ) (Po(e, t, r), (e = e.sibling));
  }
  function Lo(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6) ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
    else if (n !== 4 && ((e = e.child), e !== null))
      for (Lo(e, t, r), e = e.sibling; e !== null; ) (Lo(e, t, r), (e = e.sibling));
  }
  var He = null,
    jt = !1;
  function ir(e, t, r) {
    for (r = r.child; r !== null; ) (pc(e, t, r), (r = r.sibling));
  }
  function pc(e, t, r) {
    if (Tt && typeof Tt.onCommitFiberUnmount == 'function')
      try {
        Tt.onCommitFiberUnmount(ri, r);
      } catch {}
    switch (r.tag) {
      case 5:
        Je || Yr(r, t);
      case 6:
        var n = He,
          a = jt;
        ((He = null),
          ir(e, t, r),
          (He = n),
          (jt = a),
          He !== null &&
            (jt
              ? ((e = He),
                (r = r.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
              : He.removeChild(r.stateNode)));
        break;
      case 18:
        He !== null &&
          (jt
            ? ((e = He),
              (r = r.stateNode),
              e.nodeType === 8 ? qa(e.parentNode, r) : e.nodeType === 1 && qa(e, r),
              yn(e))
            : qa(He, r.stateNode));
        break;
      case 4:
        ((n = He),
          (a = jt),
          (He = r.stateNode.containerInfo),
          (jt = !0),
          ir(e, t, r),
          (He = n),
          (jt = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Je && ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))) {
          a = n = n.next;
          do {
            var o = a,
              c = o.destroy;
            ((o = o.tag),
              c !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && cc(r, t, c),
              (a = a.next));
          } while (a !== n);
        }
        ir(e, t, r);
        break;
      case 1:
        if (!Je && (Yr(r, t), (n = r.stateNode), typeof n.componentWillUnmount == 'function'))
          try {
            ((n.props = r.memoizedProps), (n.state = r.memoizedState), n.componentWillUnmount());
          } catch (d) {
            Le(r, t, d);
          }
        ir(e, t, r);
        break;
      case 21:
        ir(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((Je = (n = Je) || r.memoizedState !== null), ir(e, t, r), (Je = n))
          : ir(e, t, r);
        break;
      default:
        ir(e, t, r);
    }
  }
  function hc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      (r === null && (r = e.stateNode = new Od()),
        t.forEach(function (n) {
          var a = Kd.bind(null, e, n);
          r.has(n) || (r.add(n), n.then(a, a));
        }));
    }
  }
  function St(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var n = 0; n < r.length; n++) {
        var a = r[n];
        try {
          var o = e,
            c = t,
            d = c;
          e: for (; d !== null; ) {
            switch (d.tag) {
              case 5:
                ((He = d.stateNode), (jt = !1));
                break e;
              case 3:
                ((He = d.stateNode.containerInfo), (jt = !0));
                break e;
              case 4:
                ((He = d.stateNode.containerInfo), (jt = !0));
                break e;
            }
            d = d.return;
          }
          if (He === null) throw Error(s(160));
          (pc(o, c, a), (He = null), (jt = !1));
          var f = a.alternate;
          (f !== null && (f.return = null), (a.return = null));
        } catch (x) {
          Le(a, t, x);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (gc(t, e), (t = t.sibling));
  }
  function gc(e, t) {
    var r = e.alternate,
      n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((St(t, e), zt(e), n & 4)) {
          try {
            (An(3, e, e.return), Ui(3, e));
          } catch (B) {
            Le(e, e.return, B);
          }
          try {
            An(5, e, e.return);
          } catch (B) {
            Le(e, e.return, B);
          }
        }
        break;
      case 1:
        (St(t, e), zt(e), n & 512 && r !== null && Yr(r, r.return));
        break;
      case 5:
        if ((St(t, e), zt(e), n & 512 && r !== null && Yr(r, r.return), e.flags & 32)) {
          var a = e.stateNode;
          try {
            ye(a, '');
          } catch (B) {
            Le(e, e.return, B);
          }
        }
        if (n & 4 && ((a = e.stateNode), a != null)) {
          var o = e.memoizedProps,
            c = r !== null ? r.memoizedProps : o,
            d = e.type,
            f = e.updateQueue;
          if (((e.updateQueue = null), f !== null))
            try {
              (d === 'input' && o.type === 'radio' && o.name != null && Yn(a, o), on(d, c));
              var x = on(d, o);
              for (c = 0; c < f.length; c += 2) {
                var T = f[c],
                  D = f[c + 1];
                T === 'style'
                  ? Xn(a, D)
                  : T === 'dangerouslySetInnerHTML'
                    ? Te(a, D)
                    : T === 'children'
                      ? ye(a, D)
                      : ne(a, T, D, x);
              }
              switch (d) {
                case 'input':
                  Cr(a, o);
                  break;
                case 'textarea':
                  Ue(a, o);
                  break;
                case 'select':
                  var L = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!o.multiple;
                  var V = o.value;
                  V != null
                    ? Rt(a, !!o.multiple, V, !1)
                    : L !== !!o.multiple &&
                      (o.defaultValue != null
                        ? Rt(a, !!o.multiple, o.defaultValue, !0)
                        : Rt(a, !!o.multiple, o.multiple ? [] : '', !1));
              }
              a[Ln] = o;
            } catch (B) {
              Le(e, e.return, B);
            }
        }
        break;
      case 6:
        if ((St(t, e), zt(e), n & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((a = e.stateNode), (o = e.memoizedProps));
          try {
            a.nodeValue = o;
          } catch (B) {
            Le(e, e.return, B);
          }
        }
        break;
      case 3:
        if ((St(t, e), zt(e), n & 4 && r !== null && r.memoizedState.isDehydrated))
          try {
            yn(t.containerInfo);
          } catch (B) {
            Le(e, e.return, B);
          }
        break;
      case 4:
        (St(t, e), zt(e));
        break;
      case 13:
        (St(t, e),
          zt(e),
          (a = e.child),
          a.flags & 8192 &&
            ((o = a.memoizedState !== null),
            (a.stateNode.isHidden = o),
            !o || (a.alternate !== null && a.alternate.memoizedState !== null) || (Do = Ee())),
          n & 4 && hc(e));
        break;
      case 22:
        if (
          ((T = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((Je = (x = Je) || T), St(t, e), (Je = x)) : St(t, e),
          zt(e),
          n & 8192)
        ) {
          if (
            ((x = e.memoizedState !== null), (e.stateNode.isHidden = x) && !T && (e.mode & 1) !== 0)
          )
            for (q = e, T = e.child; T !== null; ) {
              for (D = q = T; q !== null; ) {
                switch (((L = q), (V = L.child), L.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    An(4, L, L.return);
                    break;
                  case 1:
                    Yr(L, L.return);
                    var U = L.stateNode;
                    if (typeof U.componentWillUnmount == 'function') {
                      ((n = L), (r = L.return));
                      try {
                        ((t = n),
                          (U.props = t.memoizedProps),
                          (U.state = t.memoizedState),
                          U.componentWillUnmount());
                      } catch (B) {
                        Le(n, r, B);
                      }
                    }
                    break;
                  case 5:
                    Yr(L, L.return);
                    break;
                  case 22:
                    if (L.memoizedState !== null) {
                      bc(D);
                      continue;
                    }
                }
                V !== null ? ((V.return = L), (q = V)) : bc(D);
              }
              T = T.sibling;
            }
          e: for (T = null, D = e; ; ) {
            if (D.tag === 5) {
              if (T === null) {
                T = D;
                try {
                  ((a = D.stateNode),
                    x
                      ? ((o = a.style),
                        typeof o.setProperty == 'function'
                          ? o.setProperty('display', 'none', 'important')
                          : (o.display = 'none'))
                      : ((d = D.stateNode),
                        (f = D.memoizedProps.style),
                        (c = f != null && f.hasOwnProperty('display') ? f.display : null),
                        (d.style.display = nn('display', c))));
                } catch (B) {
                  Le(e, e.return, B);
                }
              }
            } else if (D.tag === 6) {
              if (T === null)
                try {
                  D.stateNode.nodeValue = x ? '' : D.memoizedProps;
                } catch (B) {
                  Le(e, e.return, B);
                }
            } else if (
              ((D.tag !== 22 && D.tag !== 23) || D.memoizedState === null || D === e) &&
              D.child !== null
            ) {
              ((D.child.return = D), (D = D.child));
              continue;
            }
            if (D === e) break e;
            for (; D.sibling === null; ) {
              if (D.return === null || D.return === e) break e;
              (T === D && (T = null), (D = D.return));
            }
            (T === D && (T = null), (D.sibling.return = D.return), (D = D.sibling));
          }
        }
        break;
      case 19:
        (St(t, e), zt(e), n & 4 && hc(e));
        break;
      case 21:
        break;
      default:
        (St(t, e), zt(e));
    }
  }
  function zt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (mc(r)) {
              var n = r;
              break e;
            }
            r = r.return;
          }
          throw Error(s(160));
        }
        switch (n.tag) {
          case 5:
            var a = n.stateNode;
            n.flags & 32 && (ye(a, ''), (n.flags &= -33));
            var o = fc(e);
            Lo(e, o, a);
            break;
          case 3:
          case 4:
            var c = n.stateNode.containerInfo,
              d = fc(e);
            Po(e, d, c);
            break;
          default:
            throw Error(s(161));
        }
      } catch (f) {
        Le(e, e.return, f);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ad(e, t, r) {
    ((q = e), vc(e));
  }
  function vc(e, t, r) {
    for (var n = (e.mode & 1) !== 0; q !== null; ) {
      var a = q,
        o = a.child;
      if (a.tag === 22 && n) {
        var c = a.memoizedState !== null || qi;
        if (!c) {
          var d = a.alternate,
            f = (d !== null && d.memoizedState !== null) || Je;
          d = qi;
          var x = Je;
          if (((qi = c), (Je = f) && !x))
            for (q = a; q !== null; )
              ((c = q),
                (f = c.child),
                c.tag === 22 && c.memoizedState !== null
                  ? _c(a)
                  : f !== null
                    ? ((f.return = c), (q = f))
                    : _c(a));
          for (; o !== null; ) ((q = o), vc(o), (o = o.sibling));
          ((q = a), (qi = d), (Je = x));
        }
        yc(e);
      } else (a.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = a), (q = o)) : yc(e);
    }
  }
  function yc(e) {
    for (; q !== null; ) {
      var t = q;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Je || Ui(5, t);
                break;
              case 1:
                var n = t.stateNode;
                if (t.flags & 4 && !Je)
                  if (r === null) n.componentDidMount();
                  else {
                    var a =
                      t.elementType === t.type ? r.memoizedProps : Nt(t.type, r.memoizedProps);
                    n.componentDidUpdate(a, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && yl(t, o, n);
                break;
              case 3:
                var c = t.updateQueue;
                if (c !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  yl(t, c, r);
                }
                break;
              case 5:
                var d = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = d;
                  var f = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      f.autoFocus && r.focus();
                      break;
                    case 'img':
                      f.src && (r.src = f.src);
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
                if (t.memoizedState === null) {
                  var x = t.alternate;
                  if (x !== null) {
                    var T = x.memoizedState;
                    if (T !== null) {
                      var D = T.dehydrated;
                      D !== null && yn(D);
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
                throw Error(s(163));
            }
          Je || (t.flags & 512 && Co(t));
        } catch (L) {
          Le(t, t.return, L);
        }
      }
      if (t === e) {
        q = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        ((r.return = t.return), (q = r));
        break;
      }
      q = t.return;
    }
  }
  function bc(e) {
    for (; q !== null; ) {
      var t = q;
      if (t === e) {
        q = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        ((r.return = t.return), (q = r));
        break;
      }
      q = t.return;
    }
  }
  function _c(e) {
    for (; q !== null; ) {
      var t = q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              Ui(4, t);
            } catch (f) {
              Le(t, r, f);
            }
            break;
          case 1:
            var n = t.stateNode;
            if (typeof n.componentDidMount == 'function') {
              var a = t.return;
              try {
                n.componentDidMount();
              } catch (f) {
                Le(t, a, f);
              }
            }
            var o = t.return;
            try {
              Co(t);
            } catch (f) {
              Le(t, o, f);
            }
            break;
          case 5:
            var c = t.return;
            try {
              Co(t);
            } catch (f) {
              Le(t, c, f);
            }
        }
      } catch (f) {
        Le(t, t.return, f);
      }
      if (t === e) {
        q = null;
        break;
      }
      var d = t.sibling;
      if (d !== null) {
        ((d.return = t.return), (q = d));
        break;
      }
      q = t.return;
    }
  }
  var Vd = Math.ceil,
    Bi = ae.ReactCurrentDispatcher,
    To = ae.ReactCurrentOwner,
    bt = ae.ReactCurrentBatchConfig,
    se = 0,
    Ae = null,
    Re = null,
    $e = 0,
    ft = 0,
    Zr = Jt(0),
    Oe = 0,
    Vn = null,
    _r = 0,
    Hi = 0,
    Eo = 0,
    qn = null,
    ot = null,
    Do = 0,
    Xr = 1 / 0,
    Ut = null,
    $i = !1,
    Fo = null,
    ar = null,
    Gi = !1,
    or = null,
    Ki = 0,
    Un = 0,
    zo = null,
    Qi = -1,
    Yi = 0;
  function rt() {
    return (se & 6) !== 0 ? Ee() : Qi !== -1 ? Qi : (Qi = Ee());
  }
  function sr(e) {
    return (e.mode & 1) === 0
      ? 1
      : (se & 2) !== 0 && $e !== 0
        ? $e & -$e
        : Nd.transition !== null
          ? (Yi === 0 && (Yi = ms()), Yi)
          : ((e = fe), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : xs(e.type))), e);
  }
  function Ct(e, t, r, n) {
    if (50 < Un) throw ((Un = 0), (zo = null), Error(s(185)));
    (fn(e, r, n),
      ((se & 2) === 0 || e !== Ae) &&
        (e === Ae && ((se & 2) === 0 && (Hi |= r), Oe === 4 && lr(e, $e)),
        st(e, n),
        r === 1 && se === 0 && (t.mode & 1) === 0 && ((Xr = Ee() + 500), Ni && tr())));
  }
  function st(e, t) {
    var r = e.callbackNode;
    Nu(e, t);
    var n = ai(e, e === Ae ? $e : 0);
    if (n === 0) (r !== null && cs(r), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = n & -n), e.callbackPriority !== t)) {
      if ((r != null && cs(r), t === 1))
        (e.tag === 0 ? kd(wc.bind(null, e)) : ol(wc.bind(null, e)),
          bd(function () {
            (se & 6) === 0 && tr();
          }),
          (r = null));
      else {
        switch (fs(n)) {
          case 1:
            r = fa;
            break;
          case 4:
            r = us;
            break;
          case 16:
            r = ti;
            break;
          case 536870912:
            r = ds;
            break;
          default:
            r = ti;
        }
        r = Tc(r, xc.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = r));
    }
  }
  function xc(e, t) {
    if (((Qi = -1), (Yi = 0), (se & 6) !== 0)) throw Error(s(327));
    var r = e.callbackNode;
    if (Jr() && e.callbackNode !== r) return null;
    var n = ai(e, e === Ae ? $e : 0);
    if (n === 0) return null;
    if ((n & 30) !== 0 || (n & e.expiredLanes) !== 0 || t) t = Zi(e, n);
    else {
      t = n;
      var a = se;
      se |= 2;
      var o = Nc();
      (Ae !== e || $e !== t) && ((Ut = null), (Xr = Ee() + 500), wr(e, t));
      do
        try {
          Bd();
          break;
        } catch (d) {
          kc(e, d);
        }
      while (!0);
      (Xa(), (Bi.current = o), (se = a), Re !== null ? (t = 0) : ((Ae = null), ($e = 0), (t = Oe)));
    }
    if (t !== 0) {
      if ((t === 2 && ((a = pa(e)), a !== 0 && ((n = a), (t = Ro(e, a)))), t === 1))
        throw ((r = Vn), wr(e, 0), lr(e, n), st(e, Ee()), r);
      if (t === 6) lr(e, n);
      else {
        if (
          ((a = e.current.alternate),
          (n & 30) === 0 &&
            !qd(a) &&
            ((t = Zi(e, n)),
            t === 2 && ((o = pa(e)), o !== 0 && ((n = o), (t = Ro(e, o)))),
            t === 1))
        )
          throw ((r = Vn), wr(e, 0), lr(e, n), st(e, Ee()), r);
        switch (((e.finishedWork = a), (e.finishedLanes = n), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            kr(e, ot, Ut);
            break;
          case 3:
            if ((lr(e, n), (n & 130023424) === n && ((t = Do + 500 - Ee()), 10 < t))) {
              if (ai(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & n) !== n)) {
                (rt(), (e.pingedLanes |= e.suspendedLanes & a));
                break;
              }
              e.timeoutHandle = Va(kr.bind(null, e, ot, Ut), t);
              break;
            }
            kr(e, ot, Ut);
            break;
          case 4:
            if ((lr(e, n), (n & 4194240) === n)) break;
            for (t = e.eventTimes, a = -1; 0 < n; ) {
              var c = 31 - xt(n);
              ((o = 1 << c), (c = t[c]), c > a && (a = c), (n &= ~o));
            }
            if (
              ((n = a),
              (n = Ee() - n),
              (n =
                (120 > n
                  ? 120
                  : 480 > n
                    ? 480
                    : 1080 > n
                      ? 1080
                      : 1920 > n
                        ? 1920
                        : 3e3 > n
                          ? 3e3
                          : 4320 > n
                            ? 4320
                            : 1960 * Vd(n / 1960)) - n),
              10 < n)
            ) {
              e.timeoutHandle = Va(kr.bind(null, e, ot, Ut), n);
              break;
            }
            kr(e, ot, Ut);
            break;
          case 5:
            kr(e, ot, Ut);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (st(e, Ee()), e.callbackNode === r ? xc.bind(null, e) : null);
  }
  function Ro(e, t) {
    var r = qn;
    return (
      e.current.memoizedState.isDehydrated && (wr(e, t).flags |= 256),
      (e = Zi(e, t)),
      e !== 2 && ((t = ot), (ot = r), t !== null && Mo(t)),
      e
    );
  }
  function Mo(e) {
    ot === null ? (ot = e) : ot.push.apply(ot, e);
  }
  function qd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var n = 0; n < r.length; n++) {
            var a = r[n],
              o = a.getSnapshot;
            a = a.value;
            try {
              if (!wt(o(), a)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null)) ((r.return = t), (t = r));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function lr(e, t) {
    for (
      t &= ~Eo, t &= ~Hi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - xt(t),
        n = 1 << r;
      ((e[r] = -1), (t &= ~n));
    }
  }
  function wc(e) {
    if ((se & 6) !== 0) throw Error(s(327));
    Jr();
    var t = ai(e, 0);
    if ((t & 1) === 0) return (st(e, Ee()), null);
    var r = Zi(e, t);
    if (e.tag !== 0 && r === 2) {
      var n = pa(e);
      n !== 0 && ((t = n), (r = Ro(e, n)));
    }
    if (r === 1) throw ((r = Vn), wr(e, 0), lr(e, t), st(e, Ee()), r);
    if (r === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      kr(e, ot, Ut),
      st(e, Ee()),
      null
    );
  }
  function Wo(e, t) {
    var r = se;
    se |= 1;
    try {
      return e(t);
    } finally {
      ((se = r), se === 0 && ((Xr = Ee() + 500), Ni && tr()));
    }
  }
  function xr(e) {
    or !== null && or.tag === 0 && (se & 6) === 0 && Jr();
    var t = se;
    se |= 1;
    var r = bt.transition,
      n = fe;
    try {
      if (((bt.transition = null), (fe = 1), e)) return e();
    } finally {
      ((fe = n), (bt.transition = r), (se = t), (se & 6) === 0 && tr());
    }
  }
  function Oo() {
    ((ft = Zr.current), ke(Zr));
  }
  function wr(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), yd(r)), Re !== null))
      for (r = Re.return; r !== null; ) {
        var n = r;
        switch ((Ga(n), n.tag)) {
          case 1:
            ((n = n.type.childContextTypes), n != null && wi());
            break;
          case 3:
            (Kr(), ke(nt), ke(Ye), oo());
            break;
          case 5:
            io(n);
            break;
          case 4:
            Kr();
            break;
          case 13:
            ke(Se);
            break;
          case 19:
            ke(Se);
            break;
          case 10:
            Ja(n.type._context);
            break;
          case 22:
          case 23:
            Oo();
        }
        r = r.return;
      }
    if (
      ((Ae = e),
      (Re = e = cr(e.current, null)),
      ($e = ft = t),
      (Oe = 0),
      (Vn = null),
      (Eo = Hi = _r = 0),
      (ot = qn = null),
      vr !== null)
    ) {
      for (t = 0; t < vr.length; t++)
        if (((r = vr[t]), (n = r.interleaved), n !== null)) {
          r.interleaved = null;
          var a = n.next,
            o = r.pending;
          if (o !== null) {
            var c = o.next;
            ((o.next = a), (n.next = c));
          }
          r.pending = n;
        }
      vr = null;
    }
    return e;
  }
  function kc(e, t) {
    do {
      var r = Re;
      try {
        if ((Xa(), (zi.current = Oi), Ri)) {
          for (var n = Ce.memoizedState; n !== null; ) {
            var a = n.queue;
            (a !== null && (a.pending = null), (n = n.next));
          }
          Ri = !1;
        }
        if (
          ((br = 0),
          (Ie = We = Ce = null),
          (Rn = !1),
          (Mn = 0),
          (To.current = null),
          r === null || r.return === null)
        ) {
          ((Oe = 1), (Vn = t), (Re = null));
          break;
        }
        e: {
          var o = e,
            c = r.return,
            d = r,
            f = t;
          if (
            ((t = $e),
            (d.flags |= 32768),
            f !== null && typeof f == 'object' && typeof f.then == 'function')
          ) {
            var x = f,
              T = d,
              D = T.tag;
            if ((T.mode & 1) === 0 && (D === 0 || D === 11 || D === 15)) {
              var L = T.alternate;
              L
                ? ((T.updateQueue = L.updateQueue),
                  (T.memoizedState = L.memoizedState),
                  (T.lanes = L.lanes))
                : ((T.updateQueue = null), (T.memoizedState = null));
            }
            var V = Gl(c);
            if (V !== null) {
              ((V.flags &= -257), Kl(V, c, d, o, t), V.mode & 1 && $l(o, x, t), (t = V), (f = x));
              var U = t.updateQueue;
              if (U === null) {
                var B = new Set();
                (B.add(f), (t.updateQueue = B));
              } else U.add(f);
              break e;
            } else {
              if ((t & 1) === 0) {
                ($l(o, x, t), Io());
                break e;
              }
              f = Error(s(426));
            }
          } else if (je && d.mode & 1) {
            var De = Gl(c);
            if (De !== null) {
              ((De.flags & 65536) === 0 && (De.flags |= 256), Kl(De, c, d, o, t), Ya(Qr(f, d)));
              break e;
            }
          }
          ((o = f = Qr(f, d)),
            Oe !== 4 && (Oe = 2),
            qn === null ? (qn = [o]) : qn.push(o),
            (o = c));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var b = Bl(o, f, t);
                vl(o, b);
                break e;
              case 1:
                d = f;
                var g = o.type,
                  _ = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof g.getDerivedStateFromError == 'function' ||
                    (_ !== null &&
                      typeof _.componentDidCatch == 'function' &&
                      (ar === null || !ar.has(_))))
                ) {
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var F = Hl(o, d, t);
                  vl(o, F);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Sc(r);
      } catch (H) {
        ((t = H), Re === r && r !== null && (Re = r = r.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Nc() {
    var e = Bi.current;
    return ((Bi.current = Oi), e === null ? Oi : e);
  }
  function Io() {
    ((Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4),
      Ae === null || ((_r & 268435455) === 0 && (Hi & 268435455) === 0) || lr(Ae, $e));
  }
  function Zi(e, t) {
    var r = se;
    se |= 2;
    var n = Nc();
    (Ae !== e || $e !== t) && ((Ut = null), wr(e, t));
    do
      try {
        Ud();
        break;
      } catch (a) {
        kc(e, a);
      }
    while (!0);
    if ((Xa(), (se = r), (Bi.current = n), Re !== null)) throw Error(s(261));
    return ((Ae = null), ($e = 0), Oe);
  }
  function Ud() {
    for (; Re !== null; ) jc(Re);
  }
  function Bd() {
    for (; Re !== null && !hu(); ) jc(Re);
  }
  function jc(e) {
    var t = Lc(e.alternate, e, ft);
    ((e.memoizedProps = e.pendingProps), t === null ? Sc(e) : (Re = t), (To.current = null));
  }
  function Sc(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Md(r, t, ft)), r !== null)) {
          Re = r;
          return;
        }
      } else {
        if (((r = Wd(r, t)), r !== null)) {
          ((r.flags &= 32767), (Re = r));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Oe = 6), (Re = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Re = t;
        return;
      }
      Re = t = e;
    } while (t !== null);
    Oe === 0 && (Oe = 5);
  }
  function kr(e, t, r) {
    var n = fe,
      a = bt.transition;
    try {
      ((bt.transition = null), (fe = 1), Hd(e, t, r, n));
    } finally {
      ((bt.transition = a), (fe = n));
    }
    return null;
  }
  function Hd(e, t, r, n) {
    do Jr();
    while (or !== null);
    if ((se & 6) !== 0) throw Error(s(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(s(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var o = r.lanes | r.childLanes;
    if (
      (ju(e, o),
      e === Ae && ((Re = Ae = null), ($e = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        Gi ||
        ((Gi = !0),
        Tc(ti, function () {
          return (Jr(), null);
        })),
      (o = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = bt.transition), (bt.transition = null));
      var c = fe;
      fe = 1;
      var d = se;
      ((se |= 4),
        (To.current = null),
        Id(e, r),
        gc(r, e),
        dd(Ia),
        (li = !!Oa),
        (Ia = Oa = null),
        (e.current = r),
        Ad(r),
        gu(),
        (se = d),
        (fe = c),
        (bt.transition = o));
    } else e.current = r;
    if (
      (Gi && ((Gi = !1), (or = e), (Ki = a)),
      (o = e.pendingLanes),
      o === 0 && (ar = null),
      bu(r.stateNode),
      st(e, Ee()),
      t !== null)
    )
      for (n = e.onRecoverableError, r = 0; r < t.length; r++)
        ((a = t[r]), n(a.value, { componentStack: a.stack, digest: a.digest }));
    if ($i) throw (($i = !1), (e = Fo), (Fo = null), e);
    return (
      (Ki & 1) !== 0 && e.tag !== 0 && Jr(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === zo ? Un++ : ((Un = 0), (zo = e))) : (Un = 0),
      tr(),
      null
    );
  }
  function Jr() {
    if (or !== null) {
      var e = fs(Ki),
        t = bt.transition,
        r = fe;
      try {
        if (((bt.transition = null), (fe = 16 > e ? 16 : e), or === null)) var n = !1;
        else {
          if (((e = or), (or = null), (Ki = 0), (se & 6) !== 0)) throw Error(s(331));
          var a = se;
          for (se |= 4, q = e.current; q !== null; ) {
            var o = q,
              c = o.child;
            if ((q.flags & 16) !== 0) {
              var d = o.deletions;
              if (d !== null) {
                for (var f = 0; f < d.length; f++) {
                  var x = d[f];
                  for (q = x; q !== null; ) {
                    var T = q;
                    switch (T.tag) {
                      case 0:
                      case 11:
                      case 15:
                        An(8, T, o);
                    }
                    var D = T.child;
                    if (D !== null) ((D.return = T), (q = D));
                    else
                      for (; q !== null; ) {
                        T = q;
                        var L = T.sibling,
                          V = T.return;
                        if ((dc(T), T === x)) {
                          q = null;
                          break;
                        }
                        if (L !== null) {
                          ((L.return = V), (q = L));
                          break;
                        }
                        q = V;
                      }
                  }
                }
                var U = o.alternate;
                if (U !== null) {
                  var B = U.child;
                  if (B !== null) {
                    U.child = null;
                    do {
                      var De = B.sibling;
                      ((B.sibling = null), (B = De));
                    } while (B !== null);
                  }
                }
                q = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && c !== null) ((c.return = o), (q = c));
            else
              e: for (; q !== null; ) {
                if (((o = q), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      An(9, o, o.return);
                  }
                var b = o.sibling;
                if (b !== null) {
                  ((b.return = o.return), (q = b));
                  break e;
                }
                q = o.return;
              }
          }
          var g = e.current;
          for (q = g; q !== null; ) {
            c = q;
            var _ = c.child;
            if ((c.subtreeFlags & 2064) !== 0 && _ !== null) ((_.return = c), (q = _));
            else
              e: for (c = g; q !== null; ) {
                if (((d = q), (d.flags & 2048) !== 0))
                  try {
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ui(9, d);
                    }
                  } catch (H) {
                    Le(d, d.return, H);
                  }
                if (d === c) {
                  q = null;
                  break e;
                }
                var F = d.sibling;
                if (F !== null) {
                  ((F.return = d.return), (q = F));
                  break e;
                }
                q = d.return;
              }
          }
          if (((se = a), tr(), Tt && typeof Tt.onPostCommitFiberRoot == 'function'))
            try {
              Tt.onPostCommitFiberRoot(ri, e);
            } catch {}
          n = !0;
        }
        return n;
      } finally {
        ((fe = r), (bt.transition = t));
      }
    }
    return !1;
  }
  function Cc(e, t, r) {
    ((t = Qr(r, t)),
      (t = Bl(e, t, 1)),
      (e = nr(e, t, 1)),
      (t = rt()),
      e !== null && (fn(e, 1, t), st(e, t)));
  }
  function Le(e, t, r) {
    if (e.tag === 3) Cc(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Cc(t, e, r);
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof n.componentDidCatch == 'function' && (ar === null || !ar.has(n)))
          ) {
            ((e = Qr(r, e)),
              (e = Hl(t, e, 1)),
              (t = nr(t, e, 1)),
              (e = rt()),
              t !== null && (fn(t, 1, e), st(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function $d(e, t, r) {
    var n = e.pingCache;
    (n !== null && n.delete(t),
      (t = rt()),
      (e.pingedLanes |= e.suspendedLanes & r),
      Ae === e &&
        ($e & r) === r &&
        (Oe === 4 || (Oe === 3 && ($e & 130023424) === $e && 500 > Ee() - Do)
          ? wr(e, 0)
          : (Eo |= r)),
      st(e, t));
  }
  function Pc(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = ii), (ii <<= 1), (ii & 130023424) === 0 && (ii = 4194304)));
    var r = rt();
    ((e = At(e, t)), e !== null && (fn(e, t, r), st(e, r)));
  }
  function Gd(e) {
    var t = e.memoizedState,
      r = 0;
    (t !== null && (r = t.retryLane), Pc(e, r));
  }
  function Kd(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var n = e.stateNode,
          a = e.memoizedState;
        a !== null && (r = a.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    (n !== null && n.delete(t), Pc(e, r));
  }
  var Lc;
  Lc = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || nt.current) at = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return ((at = !1), Rd(e, t, r));
        at = (e.flags & 131072) !== 0;
      }
    else ((at = !1), je && (t.flags & 1048576) !== 0 && sl(t, Si, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var n = t.type;
        (Vi(e, t), (e = t.pendingProps));
        var a = Vr(t, Ye.current);
        (Gr(t, r), (a = co(null, t, n, e, a, r)));
        var o = uo();
        return (
          (t.flags |= 1),
          typeof a == 'object' &&
          a !== null &&
          typeof a.render == 'function' &&
          a.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              it(n) ? ((o = !0), ki(t)) : (o = !1),
              (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
              ro(t),
              (a.updater = Ii),
              (t.stateNode = a),
              (a._reactInternals = t),
              vo(t, n, e, r),
              (t = xo(null, t, n, !0, o, r)))
            : ((t.tag = 0), je && o && $a(t), tt(null, t, a, r), (t = t.child)),
          t
        );
      case 16:
        n = t.elementType;
        e: {
          switch (
            (Vi(e, t),
            (e = t.pendingProps),
            (a = n._init),
            (n = a(n._payload)),
            (t.type = n),
            (a = t.tag = Yd(n)),
            (e = Nt(n, e)),
            a)
          ) {
            case 0:
              t = _o(null, t, n, e, r);
              break e;
            case 1:
              t = ec(null, t, n, e, r);
              break e;
            case 11:
              t = Ql(null, t, n, e, r);
              break e;
            case 14:
              t = Yl(null, t, n, Nt(n.type, e), r);
              break e;
          }
          throw Error(s(306, n, ''));
        }
        return t;
      case 0:
        return (
          (n = t.type),
          (a = t.pendingProps),
          (a = t.elementType === n ? a : Nt(n, a)),
          _o(e, t, n, a, r)
        );
      case 1:
        return (
          (n = t.type),
          (a = t.pendingProps),
          (a = t.elementType === n ? a : Nt(n, a)),
          ec(e, t, n, a, r)
        );
      case 3:
        e: {
          if ((tc(t), e === null)) throw Error(s(387));
          ((n = t.pendingProps),
            (o = t.memoizedState),
            (a = o.element),
            gl(e, t),
            Di(t, n, null, r));
          var c = t.memoizedState;
          if (((n = c.element), o.isDehydrated))
            if (
              ((o = {
                element: n,
                isDehydrated: !1,
                cache: c.cache,
                pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
                transitions: c.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              ((a = Qr(Error(s(423)), t)), (t = rc(e, t, n, r, a)));
              break e;
            } else if (n !== a) {
              ((a = Qr(Error(s(424)), t)), (t = rc(e, t, n, r, a)));
              break e;
            } else
              for (
                mt = Xt(t.stateNode.containerInfo.firstChild),
                  dt = t,
                  je = !0,
                  kt = null,
                  r = pl(t, null, n, r),
                  t.child = r;
                r;

              )
                ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
          else {
            if ((Br(), n === a)) {
              t = qt(e, t, r);
              break e;
            }
            tt(e, t, n, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          bl(t),
          e === null && Qa(t),
          (n = t.type),
          (a = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (c = a.children),
          Aa(n, a) ? (c = null) : o !== null && Aa(n, o) && (t.flags |= 32),
          Jl(e, t),
          tt(e, t, c, r),
          t.child
        );
      case 6:
        return (e === null && Qa(t), null);
      case 13:
        return nc(e, t, r);
      case 4:
        return (
          no(t, t.stateNode.containerInfo),
          (n = t.pendingProps),
          e === null ? (t.child = Hr(t, null, n, r)) : tt(e, t, n, r),
          t.child
        );
      case 11:
        return (
          (n = t.type),
          (a = t.pendingProps),
          (a = t.elementType === n ? a : Nt(n, a)),
          Ql(e, t, n, a, r)
        );
      case 7:
        return (tt(e, t, t.pendingProps, r), t.child);
      case 8:
        return (tt(e, t, t.pendingProps.children, r), t.child);
      case 12:
        return (tt(e, t, t.pendingProps.children, r), t.child);
      case 10:
        e: {
          if (
            ((n = t.type._context),
            (a = t.pendingProps),
            (o = t.memoizedProps),
            (c = a.value),
            _e(Li, n._currentValue),
            (n._currentValue = c),
            o !== null)
          )
            if (wt(o.value, c)) {
              if (o.children === a.children && !nt.current) {
                t = qt(e, t, r);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var d = o.dependencies;
                if (d !== null) {
                  c = o.child;
                  for (var f = d.firstContext; f !== null; ) {
                    if (f.context === n) {
                      if (o.tag === 1) {
                        ((f = Vt(-1, r & -r)), (f.tag = 2));
                        var x = o.updateQueue;
                        if (x !== null) {
                          x = x.shared;
                          var T = x.pending;
                          (T === null ? (f.next = f) : ((f.next = T.next), (T.next = f)),
                            (x.pending = f));
                        }
                      }
                      ((o.lanes |= r),
                        (f = o.alternate),
                        f !== null && (f.lanes |= r),
                        eo(o.return, r, t),
                        (d.lanes |= r));
                      break;
                    }
                    f = f.next;
                  }
                } else if (o.tag === 10) c = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((c = o.return), c === null)) throw Error(s(341));
                  ((c.lanes |= r),
                    (d = c.alternate),
                    d !== null && (d.lanes |= r),
                    eo(c, r, t),
                    (c = o.sibling));
                } else c = o.child;
                if (c !== null) c.return = o;
                else
                  for (c = o; c !== null; ) {
                    if (c === t) {
                      c = null;
                      break;
                    }
                    if (((o = c.sibling), o !== null)) {
                      ((o.return = c.return), (c = o));
                      break;
                    }
                    c = c.return;
                  }
                o = c;
              }
          (tt(e, t, a.children, r), (t = t.child));
        }
        return t;
      case 9:
        return (
          (a = t.type),
          (n = t.pendingProps.children),
          Gr(t, r),
          (a = vt(a)),
          (n = n(a)),
          (t.flags |= 1),
          tt(e, t, n, r),
          t.child
        );
      case 14:
        return ((n = t.type), (a = Nt(n, t.pendingProps)), (a = Nt(n.type, a)), Yl(e, t, n, a, r));
      case 15:
        return Zl(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (n = t.type),
          (a = t.pendingProps),
          (a = t.elementType === n ? a : Nt(n, a)),
          Vi(e, t),
          (t.tag = 1),
          it(n) ? ((e = !0), ki(t)) : (e = !1),
          Gr(t, r),
          ql(t, n, a),
          vo(t, n, a, r),
          xo(null, t, n, !0, e, r)
        );
      case 19:
        return ac(e, t, r);
      case 22:
        return Xl(e, t, r);
    }
    throw Error(s(156, t.tag));
  };
  function Tc(e, t) {
    return ls(e, t);
  }
  function Qd(e, t, r, n) {
    ((this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function _t(e, t, r, n) {
    return new Qd(e, t, r, n);
  }
  function Ao(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Yd(e) {
    if (typeof e == 'function') return Ao(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Me)) return 11;
      if (e === re) return 14;
    }
    return 2;
  }
  function cr(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = _t(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function Xi(e, t, r, n, a, o) {
    var c = 2;
    if (((n = e), typeof e == 'function')) Ao(e) && (c = 1);
    else if (typeof e == 'string') c = 5;
    else
      e: switch (e) {
        case Fe:
          return Nr(r.children, a, o, t);
        case ze:
          ((c = 8), (a |= 8));
          break;
        case Ge:
          return ((e = _t(12, r, t, a | 2)), (e.elementType = Ge), (e.lanes = o), e);
        case Ne:
          return ((e = _t(13, r, t, a)), (e.elementType = Ne), (e.lanes = o), e);
        case et:
          return ((e = _t(19, r, t, a)), (e.elementType = et), (e.lanes = o), e);
        case me:
          return Ji(r, a, o, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case qe:
                c = 10;
                break e;
              case ct:
                c = 9;
                break e;
              case Me:
                c = 11;
                break e;
              case re:
                c = 14;
                break e;
              case ve:
                ((c = 16), (n = null));
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ''));
      }
    return ((t = _t(c, r, t, a)), (t.elementType = e), (t.type = n), (t.lanes = o), t);
  }
  function Nr(e, t, r, n) {
    return ((e = _t(7, e, n, t)), (e.lanes = r), e);
  }
  function Ji(e, t, r, n) {
    return (
      (e = _t(22, e, n, t)),
      (e.elementType = me),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Vo(e, t, r) {
    return ((e = _t(6, e, null, t)), (e.lanes = r), e);
  }
  function qo(e, t, r) {
    return (
      (t = _t(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Zd(e, t, r, n, a) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = ha(0)),
      (this.expirationTimes = ha(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ha(0)),
      (this.identifierPrefix = n),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Uo(e, t, r, n, a, o, c, d, f) {
    return (
      (e = new Zd(e, t, r, d, f)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = _t(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: n,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ro(o),
      e
    );
  }
  function Xd(e, t, r) {
    var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: pe,
      key: n == null ? null : '' + n,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function Ec(e) {
    if (!e) return er;
    e = e._reactInternals;
    e: {
      if (mr(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (it(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (it(r)) return il(e, r, t);
    }
    return t;
  }
  function Dc(e, t, r, n, a, o, c, d, f) {
    return (
      (e = Uo(r, n, !0, e, a, o, c, d, f)),
      (e.context = Ec(null)),
      (r = e.current),
      (n = rt()),
      (a = sr(r)),
      (o = Vt(n, a)),
      (o.callback = t ?? null),
      nr(r, o, a),
      (e.current.lanes = a),
      fn(e, a, n),
      st(e, n),
      e
    );
  }
  function ea(e, t, r, n) {
    var a = t.current,
      o = rt(),
      c = sr(a);
    return (
      (r = Ec(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Vt(o, c)),
      (t.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (t.callback = n),
      (e = nr(a, t, c)),
      e !== null && (Ct(e, a, c, o), Ei(e, a, c)),
      c
    );
  }
  function ta(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Fc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Bo(e, t) {
    (Fc(e, t), (e = e.alternate) && Fc(e, t));
  }
  function Jd() {
    return null;
  }
  var zc =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ho(e) {
    this._internalRoot = e;
  }
  ((ra.prototype.render = Ho.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      ea(e, t, null, null);
    }),
    (ra.prototype.unmount = Ho.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (xr(function () {
            ea(null, e, null, null);
          }),
            (t[Mt] = null));
        }
      }));
  function ra(e) {
    this._internalRoot = e;
  }
  ra.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = gs();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < Qt.length && t !== 0 && t < Qt[r].priority; r++);
      (Qt.splice(r, 0, e), r === 0 && bs(e));
    }
  };
  function $o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function na(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Rc() {}
  function em(e, t, r, n, a) {
    if (a) {
      if (typeof n == 'function') {
        var o = n;
        n = function () {
          var x = ta(c);
          o.call(x);
        };
      }
      var c = Dc(t, n, e, 0, null, !1, !1, '', Rc);
      return (
        (e._reactRootContainer = c),
        (e[Mt] = c.current),
        Cn(e.nodeType === 8 ? e.parentNode : e),
        xr(),
        c
      );
    }
    for (; (a = e.lastChild); ) e.removeChild(a);
    if (typeof n == 'function') {
      var d = n;
      n = function () {
        var x = ta(f);
        d.call(x);
      };
    }
    var f = Uo(e, 0, !1, null, null, !1, !1, '', Rc);
    return (
      (e._reactRootContainer = f),
      (e[Mt] = f.current),
      Cn(e.nodeType === 8 ? e.parentNode : e),
      xr(function () {
        ea(t, f, r, n);
      }),
      f
    );
  }
  function ia(e, t, r, n, a) {
    var o = r._reactRootContainer;
    if (o) {
      var c = o;
      if (typeof a == 'function') {
        var d = a;
        a = function () {
          var f = ta(c);
          d.call(f);
        };
      }
      ea(t, c, e, a);
    } else c = em(r, t, e, a, n);
    return ta(c);
  }
  ((ps = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = mn(t.pendingLanes);
          r !== 0 && (ga(t, r | 1), st(t, Ee()), (se & 6) === 0 && ((Xr = Ee() + 500), tr()));
        }
        break;
      case 13:
        (xr(function () {
          var n = At(e, 1);
          if (n !== null) {
            var a = rt();
            Ct(n, e, 1, a);
          }
        }),
          Bo(e, 1));
    }
  }),
    (va = function (e) {
      if (e.tag === 13) {
        var t = At(e, 134217728);
        if (t !== null) {
          var r = rt();
          Ct(t, e, 134217728, r);
        }
        Bo(e, 134217728);
      }
    }),
    (hs = function (e) {
      if (e.tag === 13) {
        var t = sr(e),
          r = At(e, t);
        if (r !== null) {
          var n = rt();
          Ct(r, e, t, n);
        }
        Bo(e, t);
      }
    }),
    (gs = function () {
      return fe;
    }),
    (vs = function (e, t) {
      var r = fe;
      try {
        return ((fe = e), t());
      } finally {
        fe = r;
      }
    }),
    (ln = function (e, t, r) {
      switch (t) {
        case 'input':
          if ((Cr(e, r), (t = r.name), r.type === 'radio' && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'),
                t = 0;
              t < r.length;
              t++
            ) {
              var n = r[t];
              if (n !== e && n.form === e.form) {
                var a = xi(n);
                if (!a) throw Error(s(90));
                (tn(n), Cr(n, a));
              }
            }
          }
          break;
        case 'textarea':
          Ue(e, r);
          break;
        case 'select':
          ((t = r.value), t != null && Rt(e, !!r.multiple, t, !1));
      }
    }),
    (ts = Wo),
    (rs = xr));
  var tm = { usingClientEntryPoint: !1, Events: [Tn, Ir, xi, xe, Lt, Wo] },
    Bn = {
      findFiberByHostInstance: fr,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    rm = {
      bundleType: Bn.bundleType,
      version: Bn.version,
      rendererPackageName: Bn.rendererPackageName,
      rendererConfig: Bn.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ae.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = os(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Bn.findFiberByHostInstance || Jd,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var aa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!aa.isDisabled && aa.supportsFiber)
      try {
        ((ri = aa.inject(rm)), (Tt = aa));
      } catch {}
  }
  return (
    (lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tm),
    (lt.createPortal = function (e, t) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!$o(t)) throw Error(s(200));
      return Xd(e, t, null, r);
    }),
    (lt.createRoot = function (e, t) {
      if (!$o(e)) throw Error(s(299));
      var r = !1,
        n = '',
        a = zc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = Uo(e, 1, !1, null, null, r, !1, n, a)),
        (e[Mt] = t.current),
        Cn(e.nodeType === 8 ? e.parentNode : e),
        new Ho(t)
      );
    }),
    (lt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(s(188))
          : ((e = Object.keys(e).join(',')), Error(s(268, e)));
      return ((e = os(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (lt.flushSync = function (e) {
      return xr(e);
    }),
    (lt.hydrate = function (e, t, r) {
      if (!na(t)) throw Error(s(200));
      return ia(null, e, t, !0, r);
    }),
    (lt.hydrateRoot = function (e, t, r) {
      if (!$o(e)) throw Error(s(405));
      var n = (r != null && r.hydratedSources) || null,
        a = !1,
        o = '',
        c = zc;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (c = r.onRecoverableError)),
        (t = Dc(t, null, e, 1, r ?? null, a, !1, o, c)),
        (e[Mt] = t.current),
        Cn(e),
        n)
      )
        for (e = 0; e < n.length; e++)
          ((r = n[e]),
            (a = r._getVersion),
            (a = a(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, a])
              : t.mutableSourceEagerHydrationData.push(r, a));
      return new ra(t);
    }),
    (lt.render = function (e, t, r) {
      if (!na(t)) throw Error(s(200));
      return ia(null, e, t, !1, r);
    }),
    (lt.unmountComponentAtNode = function (e) {
      if (!na(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (xr(function () {
            ia(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Mt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (lt.unstable_batchedUpdates = Wo),
    (lt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
      if (!na(r)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return ia(e, t, r, !1, n);
    }),
    (lt.version = '18.3.1-next-f1338f8080-20240426'),
    lt
  );
}
var Gc;
function um() {
  if (Gc) return Go.exports;
  Gc = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (u) {
        console.error(u);
      }
  }
  return (l(), (Go.exports = cm()), Go.exports);
}
var Kc;
function dm() {
  if (Kc) return oa;
  Kc = 1;
  var l = um();
  return ((oa.createRoot = l.createRoot), (oa.hydrateRoot = l.hydrateRoot), oa);
}
var mm = dm();
const fm = {
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
  tu = I.createContext(void 0),
  pm = ({ children: l }) => {
    const [u, s] = I.useState(fm),
      v = I.useCallback((S) => {
        const { name: k, value: p, type: h } = S.target,
          R = S.target.checked;
        s(($) => ({ ...$, [k]: h === 'checkbox' ? R : p }));
      }, []),
      w = { formData: u, setFormData: s, handleInputChange: v };
    return i.jsx(tu.Provider, { value: w, children: l });
  };
function hm() {
  const l = I.useContext(tu);
  if (!l) throw new Error('useSimpleForm must be used inside <SimpleFormProvider>');
  return l;
}
const gm = ({
  formData: l,
  setFormData: u,
  t: s,
  stepLabel: v,
  shippingOnly: w = !1,
  isQuickQuote: S = !1,
  setIsQuickQuote: k,
}) => {
  const p = (h) => {
    u((R) => ({
      ...R,
      servicesRequested: { ...R.servicesRequested, [h]: !R.servicesRequested[h] },
    }));
  };
  return i.jsxs('section', {
    className: 'sino-simple-form__section sino-simple-form__section--services',
    children: [
      i.jsxs('header', {
        className: 'sino-simple-form__header',
        children: [
          i.jsxs('div', {
            className: 'sino-simple-form__header-top',
            children: [
              i.jsx('p', {
                className: 'sino-simple-form__eyebrow',
                children: w
                  ? s('simpleEyebrowShippingOnly', 'Shipping from China')
                  : s('simpleEyebrowMulti', 'Projects with China'),
              }),
              S &&
                i.jsx('span', {
                  className: 'sino-simple-form__quick-quote-badge',
                  children: s('quickQuoteBadge', 'Quick quote'),
                }),
            ],
          }),
          i.jsx('h1', {
            className: 'sino-simple-form__title',
            children: s('simpleTitle', 'Plan your project with China in one request'),
          }),
          i.jsx('p', {
            className: 'sino-simple-form__subtitle',
            children: w
              ? s(
                  'simpleSubtitleShippingOnly',
                  'Answer a few key questions about your route, cargo and timing to get a tailored shipping plan.'
                )
              : s(
                  'simpleSubtitleMulti',
                  "Answer a few key questions and we'll route your request to the right specialists for shipping, sourcing, QC, visits and more."
                ),
          }),
          k &&
            i.jsx('div', {
              className: 'sino-simple-form__quick-quote-toggle',
              children: i.jsxs('label', {
                className: 'sino-simple-form__quick-quote-toggle-label',
                children: [
                  i.jsx('input', {
                    type: 'checkbox',
                    checked: S,
                    onChange: (h) => k(h.target.checked),
                    className: 'sino-simple-form__quick-quote-toggle-input',
                  }),
                  i.jsx('span', { className: 'sino-simple-form__quick-quote-toggle-slider' }),
                  i.jsx('span', {
                    className: 'sino-simple-form__quick-quote-toggle-text',
                    children: s('quickQuoteToggle', 'Quick quote mode (essential fields only)'),
                  }),
                ],
              }),
            }),
          i.jsx('p', {
            className: 'sino-simple-form__hint',
            children: s(
              'simpleRequiredHint',
              'Fields marked with * are required. The rest can stay approximate or empty for now.'
            ),
          }),
        ],
      }),
      i.jsxs('h2', {
        className: 'sino-simple-form__section-title',
        children: [
          i.jsx('span', { className: 'sino-simple-form__section-step', children: v ?? 'Step 0' }),
          i.jsx('span', {
            children: s('simpleServicesStepTitle', 'What do you need help with from China?'),
          }),
        ],
      }),
      i.jsx('p', {
        className: 'sino-simple-form__hint',
        children: s(
          'simpleServicesStepHint',
          'Select all that apply (most people pick 1–3 options). Shipping remains the core module and we tailor the rest around your needs.'
        ),
      }),
      i.jsx('div', {
        className: 'sino-simple-form__fields sino-simple-form__fields--rows',
        children: i.jsx('div', {
          className: 'sino-simple-form__field',
          children: i.jsx('div', {
            className: 'sino-simple-form__chips sino-simple-form__chips--wrap',
            children: [
              {
                key: 'shipping',
                label: s('serviceShipping', 'Ship goods from China'),
                icon: i.jsxs('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    i.jsx('path', {
                      d: 'M2 17h20M5 17V7l8-4v10M19 17V7l-6 4M7 11h6M7 7h6',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    i.jsx('circle', {
                      cx: '7',
                      cy: '17',
                      r: '2',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                    }),
                    i.jsx('circle', {
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
                label: s('serviceSourcing', 'Find suppliers / get product sourcing help'),
                icon: i.jsxs('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    i.jsx('circle', {
                      cx: '11',
                      cy: '11',
                      r: '8',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    i.jsx('path', {
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
                label: s('serviceDropshipping', 'Set up dropshipping or fulfillment from China'),
                icon: i.jsxs('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    i.jsx('path', {
                      d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    i.jsx('polyline', {
                      points: '3.27 6.96 12 12.01 20.73 6.96',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    i.jsx('line', {
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
                label: s('serviceWarehousing', 'Store & consolidate goods in China'),
                icon: i.jsxs('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    i.jsx('path', {
                      d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    i.jsx('polyline', {
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
                label: s('serviceQc', 'Book a quality inspection'),
                icon: i.jsxs('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    i.jsx('path', {
                      d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    i.jsx('polyline', {
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
                label: s(
                  'serviceChinaVisits',
                  'Plan a visit or fair in China (Canton Fair, Yiwu…)'
                ),
                icon: i.jsxs('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    i.jsx('rect', {
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
                    i.jsx('line', {
                      x1: '16',
                      y1: '2',
                      x2: '16',
                      y2: '6',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    i.jsx('line', {
                      x1: '8',
                      y1: '2',
                      x2: '8',
                      y2: '6',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    i.jsx('line', {
                      x1: '3',
                      y1: '10',
                      x2: '21',
                      y2: '10',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    i.jsx('path', {
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
                label: s('serviceOther', 'Other project (tell us more)'),
                icon: i.jsxs('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    i.jsx('circle', {
                      cx: '12',
                      cy: '12',
                      r: '10',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    i.jsx('line', {
                      x1: '12',
                      y1: '8',
                      x2: '12',
                      y2: '16',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    i.jsx('line', {
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
              i.jsxs(
                'button',
                {
                  type: 'button',
                  className: `sino-simple-chip sino-simple-chip--service-${h.key}${l.servicesRequested[h.key] ? ' sino-simple-chip--active' : ''}`,
                  onClick: () => p(h.key),
                  'aria-pressed': l.servicesRequested[h.key] ? 'true' : 'false',
                  'aria-label': `${h.label}${l.servicesRequested[h.key] ? ', selected' : ', not selected'}`,
                  onKeyDown: (R) => {
                    (R.key === 'Enter' || R.key === ' ') && (R.preventDefault(), p(h.key));
                  },
                  children: [
                    i.jsx('span', {
                      className: 'sino-simple-chip__icon',
                      'aria-hidden': 'true',
                      children: h.icon,
                    }),
                    i.jsx('span', { className: 'sino-simple-chip__label', children: h.label }),
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
function sa(l) {
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
              ? Object.values(l).some((u) => sa(u))
              : !1;
}
function vm(l) {
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
function ru(l, u) {
  const s = vm(l);
  if (s.length === 0)
    return l === 'services'
      ? { filled: 1, total: 1, percentage: 100 }
      : { filled: 0, total: 0, percentage: 0 };
  let v = 0,
    w = 0;
  for (const k of s)
    if (
      k === 'sourcing' ||
      k === 'warehousing' ||
      k === 'dropshipping' ||
      k === 'qc' ||
      k === 'chinaVisit'
    ) {
      const p = u[k];
      if (p && typeof p == 'object' && !Array.isArray(p)) {
        const h = Object.entries(p);
        for (const [, R] of h) (w++, sa(R) && v++);
        h.length;
      }
    } else if (k === 'totalWeight') (w++, sa(u.totalWeight) && v++);
    else {
      w++;
      const p = u[k];
      sa(p) && v++;
    }
  const S = w > 0 ? Math.round((v / w) * 100) : 0;
  return { filled: v, total: w, percentage: S };
}
function ym(l, u) {
  switch (l) {
    case 'services':
      return u('stepServicesLabel', 'Services');
    case 'shippingRoute':
      return u('stepShippingRouteLabel', 'Route');
    case 'shippingCargo':
      return u('stepShippingCargoLabel', 'Cargo');
    case 'sourcing':
      return u('stepSourcingLabel', 'Sourcing');
    case 'warehousing':
      return u('stepWarehousingLabel', 'Warehousing');
    case 'dropshipping':
      return u('stepDropshippingLabel', 'Dropshipping');
    case 'qc':
      return u('stepQcLabel', 'Quality Control');
    case 'chinaVisit':
      return u('stepChinaVisitLabel', 'China Visit');
    case 'contact':
      return u('stepContactLabel', 'Contact');
    default:
      return l;
  }
}
const Yo = ({ stepId: l, formData: u, currentStepIndex: s, totalSteps: v, t: w }) => {
    const S = ru(l, u),
      k = ym(l, w);
    return l === 'services' || S.total === 0
      ? null
      : i.jsxs('div', {
          className: 'sino-simple-form__step-progress-indicator',
          children: [
            i.jsxs('div', {
              className: 'sino-simple-form__step-progress-header',
              children: [
                i.jsx('span', { className: 'sino-simple-form__step-progress-label', children: k }),
                i.jsxs('span', {
                  className: 'sino-simple-form__step-progress-count',
                  children: [S.filled, '/', S.total, ' ', w('stepProgressFields', 'fields')],
                }),
              ],
            }),
            i.jsx('div', {
              className: 'sino-simple-form__step-progress-bar-container',
              children: i.jsx('div', {
                className: 'sino-simple-form__step-progress-bar-fill',
                style: { width: `${S.percentage}%` },
                role: 'progressbar',
                'aria-valuenow': S.percentage,
                'aria-valuemin': 0,
                'aria-valuemax': 100,
                'aria-label': `${k}: ${S.filled} of ${S.total} fields completed`,
              }),
            }),
          ],
        });
  },
  Qc = [
    { name: 'John D.', location: 'France', text: 'Got my quote in 18h, very professional' },
    { name: 'Sarah M.', location: 'Germany', text: 'Clear communication and fast response time' },
    {
      name: 'Michael K.',
      location: 'UK',
      text: 'Excellent service, helped me understand the process',
    },
  ],
  bm = ({ t: l, count: u = 2 }) => {
    const s = I.useMemo(
      () => [...Qc].sort(() => Math.random() - 0.5).slice(0, Math.min(u, Qc.length)),
      [u]
    );
    return s.length === 0
      ? null
      : i.jsx('div', {
          className: 'sino-simple-form__testimonials',
          role: 'complementary',
          'aria-label': l('testimonialsAriaLabel', 'Customer testimonials'),
          children: s.map((v, w) =>
            i.jsx(
              'div',
              {
                className: 'sino-simple-form__testimonial',
                children: i.jsxs('div', {
                  className: 'sino-simple-form__testimonial-content',
                  children: [
                    i.jsxs('p', {
                      className: 'sino-simple-form__testimonial-text',
                      children: ['"', v.text, '"'],
                    }),
                    i.jsxs('p', {
                      className: 'sino-simple-form__testimonial-author',
                      children: [v.name, ' — ', v.location],
                    }),
                  ],
                }),
              },
              `${v.name}-${w}`
            )
          ),
        });
  },
  _m = ({
    formData: l,
    setFormData: u,
    t: s,
    isFilled: v,
    onChange: w,
    onBlur: S,
    fieldErrors: k,
    fieldTouched: p,
    firstNameRef: h,
    emailRef: R,
    phoneRef: $,
    stepLabel: M,
    currentStepIndex: W,
    totalSteps: Z,
  }) =>
    i.jsxs('section', {
      className: 'sino-simple-form__section sino-simple-form__section--contact',
      children: [
        i.jsxs('h2', {
          className: 'sino-simple-form__section-title',
          children: [
            i.jsx('span', { className: 'sino-simple-form__section-step', children: M ?? 'Step 4' }),
            i.jsx('span', { children: s('simpleStep5Title', 'Your details') }),
          ],
        }),
        i.jsx(Yo, { stepId: 'contact', formData: l, currentStepIndex: W, totalSteps: Z, t: s }),
        i.jsx('p', {
          className: 'sino-simple-form__hint',
          children: s(
            'simpleStep5Hint',
            'Use a work email and a phone with WhatsApp if possible – it makes the follow-up much smoother. Not sure about every detail yet? That is normal – we will help you structure the shipment.'
          ),
        }),
        i.jsx(bm, { t: s, count: 2 }),
        i.jsxs('div', {
          className: 'sino-simple-form__group',
          children: [
            i.jsx('p', {
              className: 'sino-simple-form__group-title',
              children: s('aboutYouTitle', 'About you'),
            }),
            i.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--rows',
              children: [
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsx('label', {
                      className: 'sino-simple-form__label',
                      children: s('customerType', 'Are you a company or an individual?'),
                    }),
                    i.jsx('div', {
                      className: 'sino-simple-form__chips',
                      children: [
                        { value: 'company', label: s('customerTypeCompany', 'Company') },
                        { value: 'individual', label: s('customerTypeIndividual', 'Individual') },
                      ].map((G) =>
                        i.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.customerType === G.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              u((C) => ({
                                ...C,
                                customerType: C.customerType === G.value ? '' : G.value,
                              })),
                            children: G.label,
                          },
                          G.value
                        )
                      ),
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsx('label', {
                      className: 'sino-simple-form__label',
                      children: s('shipperType', 'How often do you ship from China?'),
                    }),
                    i.jsx('div', {
                      className: 'sino-simple-form__chips sino-simple-form__chips--wrap',
                      children: [
                        { value: 'first-time', label: s('shipperFirstTime', "It's my first time") },
                        {
                          value: 'up-to-10x',
                          label: s('shipperFewTimes', 'A few times per year (up to ~10 shipments)'),
                        },
                        {
                          value: 'more-than-10x',
                          label: s('shipperMoreThan10', 'More than 10 shipments per year'),
                        },
                        { value: 'regular', label: s('shipperRegular', 'Regular shipper') },
                      ].map((G) =>
                        i.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.shipperType === G.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              u((C) => ({
                                ...C,
                                shipperType: C.shipperType === G.value ? '' : G.value,
                              })),
                            'aria-pressed': l.shipperType === G.value ? 'true' : 'false',
                            'aria-label': `${G.label}${l.shipperType === G.value ? ', selected' : ', not selected'}`,
                            onKeyDown: (C) => {
                              (C.key === 'Enter' || C.key === ' ') &&
                                (C.preventDefault(),
                                u((P) => ({
                                  ...P,
                                  shipperType: P.shipperType === G.value ? '' : G.value,
                                })));
                            },
                            children: G.label,
                          },
                          G.value
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        i.jsx('p', {
          className: 'sino-simple-form__group-title',
          children: s('contactDetailsTitle', 'How we contact you'),
        }),
        i.jsxs('div', {
          className: 'sino-simple-form__fields sino-simple-form__fields--rows',
          children: [
            i.jsxs('div', {
              className: `sino-simple-form__field${p.firstName && k.firstName ? ' sino-simple-form__field--error' : ''}${p.firstName && !k.firstName && v(l.firstName) ? ' sino-simple-form__field--success' : ''}`,
              children: [
                i.jsxs('label', {
                  className: 'sino-simple-form__label',
                  htmlFor: 'firstName',
                  children: [
                    s('firstName', 'First name'),
                    i.jsx('span', {
                      className: 'sino-simple-form__required',
                      'aria-label': 'required',
                      children: '*',
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__field-wrapper',
                  children: [
                    i.jsx('input', {
                      className: `sino-simple-form__input${k.firstName ? ' sino-simple-form__input--error' : ''}${p.firstName && !k.firstName && v(l.firstName) ? ' sino-simple-form__input--success' : ''}`,
                      type: 'text',
                      name: 'firstName',
                      id: 'firstName',
                      ref: h,
                      value: l.firstName,
                      onChange: w,
                      onBlur: () => S('firstName', l.firstName),
                      placeholder: s('firstNamePlaceholder', 'John'),
                      'aria-label': s('firstName', 'First name'),
                      'aria-describedby': k.firstName
                        ? 'firstName-error'
                        : p.firstName && !k.firstName && v(l.firstName)
                          ? 'firstName-success'
                          : void 0,
                      'aria-invalid': k.firstName ? 'true' : 'false',
                      'aria-required': 'true',
                    }),
                    p.firstName &&
                      i.jsxs(i.Fragment, {
                        children: [
                          k.firstName &&
                            i.jsx('span', {
                              className:
                                'sino-simple-form__field-icon sino-simple-form__field-icon--error',
                              'aria-hidden': 'true',
                              children: i.jsxs('svg', {
                                width: '20',
                                height: '20',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                  i.jsx('circle', {
                                    cx: '12',
                                    cy: '12',
                                    r: '10',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                  }),
                                  i.jsx('line', {
                                    x1: '12',
                                    y1: '8',
                                    x2: '12',
                                    y2: '12',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                    strokeLinecap: 'round',
                                  }),
                                  i.jsx('line', {
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
                          !k.firstName &&
                            v(l.firstName) &&
                            i.jsx('span', {
                              className:
                                'sino-simple-form__field-icon sino-simple-form__field-icon--success',
                              'aria-hidden': 'true',
                              children: i.jsxs('svg', {
                                width: '20',
                                height: '20',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                  i.jsx('circle', {
                                    cx: '12',
                                    cy: '12',
                                    r: '10',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                  }),
                                  i.jsx('path', {
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
                k.firstName &&
                  i.jsx('p', {
                    id: 'firstName-error',
                    className: 'sino-simple-form__field-error',
                    role: 'alert',
                    'aria-live': 'polite',
                    children: k.firstName,
                  }),
                p.firstName &&
                  !k.firstName &&
                  v(l.firstName) &&
                  i.jsx('p', {
                    id: 'firstName-success',
                    className: 'sino-simple-form__sr-only',
                    'aria-live': 'polite',
                    children: s('fieldValid', 'Field is valid'),
                  }),
              ],
            }),
            i.jsxs('div', {
              className: 'sino-simple-form__field',
              children: [
                i.jsx('label', {
                  className: 'sino-simple-form__label',
                  htmlFor: 'lastName',
                  children: s('lastName', 'Last name'),
                }),
                i.jsx('input', {
                  className: 'sino-simple-form__input',
                  type: 'text',
                  name: 'lastName',
                  id: 'lastName',
                  value: l.lastName,
                  onChange: w,
                  placeholder: s('lastNamePlaceholder', 'Doe'),
                }),
              ],
            }),
            i.jsxs('div', {
              className: 'sino-simple-form__field',
              children: [
                i.jsxs('label', {
                  className: 'sino-simple-form__label',
                  htmlFor: 'companyName',
                  children: [
                    s('companyName', 'Company name'),
                    i.jsx('span', {
                      className: 'sino-simple-form__label-hint',
                      children: s('ifApplicable', 'if applicable'),
                    }),
                  ],
                }),
                i.jsx('input', {
                  className: 'sino-simple-form__input',
                  type: 'text',
                  name: 'companyName',
                  id: 'companyName',
                  value: l.companyName,
                  onChange: w,
                  placeholder: s('companyNamePlaceholder', 'Your company'),
                }),
              ],
            }),
            i.jsxs('div', {
              className: `sino-simple-form__field${p.email && k.email ? ' sino-simple-form__field--error' : ''}${p.email && !k.email && v(l.email) ? ' sino-simple-form__field--success' : ''}`,
              children: [
                i.jsxs('label', {
                  className: 'sino-simple-form__label',
                  htmlFor: 'email',
                  children: [
                    s('email', 'Work email'),
                    i.jsx('span', {
                      className: 'sino-simple-form__required',
                      'aria-label': 'required',
                      children: '*',
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__field-wrapper',
                  children: [
                    i.jsx('input', {
                      className: `sino-simple-form__input${k.email ? ' sino-simple-form__input--error' : ''}${p.email && !k.email && v(l.email) ? ' sino-simple-form__input--success' : ''}`,
                      type: 'email',
                      name: 'email',
                      id: 'email',
                      ref: R,
                      value: l.email,
                      onChange: w,
                      onBlur: () => S('email', l.email),
                      placeholder: s('emailPlaceholder', 'you@example.com'),
                      'aria-label': s('email', 'Work email'),
                      'aria-describedby': k.email
                        ? 'email-error'
                        : p.email && !k.email && v(l.email)
                          ? 'email-success'
                          : void 0,
                      'aria-invalid': k.email ? 'true' : 'false',
                      'aria-required': 'true',
                    }),
                    p.email &&
                      i.jsxs(i.Fragment, {
                        children: [
                          k.email &&
                            i.jsx('span', {
                              className:
                                'sino-simple-form__field-icon sino-simple-form__field-icon--error',
                              'aria-hidden': 'true',
                              children: i.jsxs('svg', {
                                width: '20',
                                height: '20',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                  i.jsx('circle', {
                                    cx: '12',
                                    cy: '12',
                                    r: '10',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                  }),
                                  i.jsx('line', {
                                    x1: '12',
                                    y1: '8',
                                    x2: '12',
                                    y2: '12',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                    strokeLinecap: 'round',
                                  }),
                                  i.jsx('line', {
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
                          !k.email &&
                            v(l.email) &&
                            i.jsx('span', {
                              className:
                                'sino-simple-form__field-icon sino-simple-form__field-icon--success',
                              'aria-hidden': 'true',
                              children: i.jsxs('svg', {
                                width: '20',
                                height: '20',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                  i.jsx('circle', {
                                    cx: '12',
                                    cy: '12',
                                    r: '10',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                  }),
                                  i.jsx('path', {
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
                k.email &&
                  i.jsx('p', {
                    id: 'email-error',
                    className: 'sino-simple-form__field-error',
                    role: 'alert',
                    'aria-live': 'polite',
                    children: k.email,
                  }),
                p.email &&
                  !k.email &&
                  v(l.email) &&
                  i.jsx('p', {
                    id: 'email-success',
                    className: 'sino-simple-form__sr-only',
                    'aria-live': 'polite',
                    children: s('fieldValid', 'Field is valid'),
                  }),
              ],
            }),
            i.jsxs('div', {
              className: `sino-simple-form__field${p.phone && k.phone ? ' sino-simple-form__field--error' : ''}${p.phone && !k.phone && v(l.phone) ? ' sino-simple-form__field--success' : ''}`,
              children: [
                i.jsxs('label', {
                  className: 'sino-simple-form__label',
                  htmlFor: 'phone',
                  children: [
                    s('phone', 'Phone number (with country code)'),
                    i.jsx('span', {
                      className: 'sino-simple-form__required',
                      'aria-label': 'required',
                      children: '*',
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__field-wrapper',
                  children: [
                    i.jsx('input', {
                      className: `sino-simple-form__input${k.phone ? ' sino-simple-form__input--error' : ''}${p.phone && !k.phone && v(l.phone) ? ' sino-simple-form__input--success' : ''}`,
                      type: 'tel',
                      name: 'phone',
                      id: 'phone',
                      ref: $,
                      value: l.phone,
                      onChange: w,
                      onBlur: () => S('phone', l.phone),
                      placeholder: s('phonePlaceholder', '+33…'),
                      'aria-label': s('phone', 'Phone number (with country code)'),
                      'aria-describedby': k.phone
                        ? 'phone-error'
                        : p.phone && !k.phone && v(l.phone)
                          ? 'phone-success'
                          : void 0,
                      'aria-invalid': k.phone ? 'true' : 'false',
                      'aria-required': 'true',
                    }),
                    p.phone &&
                      i.jsxs(i.Fragment, {
                        children: [
                          k.phone &&
                            i.jsx('span', {
                              className:
                                'sino-simple-form__field-icon sino-simple-form__field-icon--error',
                              'aria-hidden': 'true',
                              children: i.jsxs('svg', {
                                width: '20',
                                height: '20',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                  i.jsx('circle', {
                                    cx: '12',
                                    cy: '12',
                                    r: '10',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                  }),
                                  i.jsx('line', {
                                    x1: '12',
                                    y1: '8',
                                    x2: '12',
                                    y2: '12',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                    strokeLinecap: 'round',
                                  }),
                                  i.jsx('line', {
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
                          !k.phone &&
                            v(l.phone) &&
                            i.jsx('span', {
                              className:
                                'sino-simple-form__field-icon sino-simple-form__field-icon--success',
                              'aria-hidden': 'true',
                              children: i.jsxs('svg', {
                                width: '20',
                                height: '20',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                  i.jsx('circle', {
                                    cx: '12',
                                    cy: '12',
                                    r: '10',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                  }),
                                  i.jsx('path', {
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
                k.phone &&
                  i.jsx('p', {
                    id: 'phone-error',
                    className: 'sino-simple-form__field-error',
                    role: 'alert',
                    'aria-live': 'polite',
                    children: k.phone,
                  }),
                p.phone &&
                  !k.phone &&
                  v(l.phone) &&
                  i.jsx('p', {
                    id: 'phone-success',
                    className: 'sino-simple-form__sr-only',
                    'aria-live': 'polite',
                    children: s('fieldValid', 'Field is valid'),
                  }),
              ],
            }),
          ],
        }),
      ],
    }),
  Kn = [
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
  ].sort((l, u) => l.name.localeCompare(u.name)),
  xm = [
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
  wm = [
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
  km = [
    { code: 'ZIH', name: 'Zhengzhou Rail Terminal', type: 'rail' },
    { code: 'CQN', name: 'Chongqing Rail Terminal', type: 'rail' },
    { code: 'XIY', name: "Xi'an Rail Terminal", type: 'rail' },
    { code: 'WUH', name: 'Wuhan Rail Terminal', type: 'rail' },
    { code: 'CDU', name: 'Chengdu Rail Terminal', type: 'rail' },
  ];
function Nm(l) {
  const u = { ...l },
    s = Kn.find((M) => M.code === l.country);
  s && (u.country = s.name);
  const v = [...xm, ...wm, ...km].find((M) => M.code === l.origin);
  v && (u.origin = v.name);
  const w = new Date(),
    S = w.toLocaleDateString('en-CA', { timeZone: 'Asia/Hong_Kong' }),
    k = w.toLocaleTimeString('en-GB', { timeZone: 'Asia/Hong_Kong', hourCycle: 'h23' }),
    p = `${S}T${k}+08:00`,
    h = `form-${l.country || 'N/A'}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    R = [];
  (l.servicesRequested.shipping && R.push('Shipping from China'),
    l.servicesRequested.sourcing && R.push('Product Sourcing'),
    l.servicesRequested.dropshipping && R.push('Dropshipping & Fulfillment'),
    l.servicesRequested.warehousing && R.push('Warehousing & Consolidation'),
    l.servicesRequested.qc && R.push('Quality Control'),
    l.servicesRequested.chinaVisits && R.push('China Business Visit'),
    l.servicesRequested.other && R.push('Other Project'));
  const $ = {
    submissionId: h,
    timestamp: p,
    servicesList: R,
    contact: {
      firstName: u.firstName,
      lastName: u.lastName,
      email: u.email,
      phone: u.phone,
      phoneCountryCode: u.phoneCountryCode,
      companyName: u.companyName,
      customerType: u.customerType,
      shipperType: u.shipperType,
    },
    shippingRoute: {
      destinationCountry: s ? s.name : u.country,
      destinationCity: u.destCity,
      destinationZipCode: u.destZipCode,
      destinationLocationType: u.destLocationType,
      originCity: u.city,
      originZipCode: u.zipCode,
      originLocationType: u.locationType,
      originPortOfLoading: v ? v.name : u.origin,
      shippingMode: u.mode,
      incoterm: u.incoterm,
    },
    shippingCargo: {
      goodsDescription: u.goodsDescription,
      totalWeight: u.totalWeight,
      numberOfUnits: u.numberOfUnits,
      goodsValue: u.goodsValue,
      goodsCurrency: u.goodsCurrency,
      areGoodsReady: u.areGoodsReady,
      annualVolume: u.annualVolume,
      isPersonalOrHazardous: u.isPersonalOrHazardous,
      dimensions: u.dimensions,
      weightPerUnit: u.weightPerUnit,
      remarks: u.remarks,
    },
    servicesRequested: u.servicesRequested,
    sourcing: u.sourcing,
    warehousing: u.warehousing,
    dropshipping: u.dropshipping,
    qc: u.qc,
    chinaVisit: u.chinaVisit,
    otherProject: u.otherProject,
  };
  return { submissionId: h, timestamp: p, payload: $ };
}
async function jm(l, u) {
  const s =
    typeof window < 'u' &&
    (window.location.hostname === 'localhost' ||
      window.location.hostname.includes('vercel.app') ||
      window.location.hostname.includes('form-sino'))
      ? '/api/submit'
      : 'https://form-sino.vercel.app/api/submit';
  console.log('[submitFormData] Starting submission with payload:', {
    submissionId: l.submissionId,
    hasEmail: !!l.email,
    hasPhone: !!l.phone,
  });
  try {
    const v = await fetch(s, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(l),
    });
    if (!v.ok) {
      let w = '';
      try {
        w = await v.text();
      } catch {
        w = 'Unknown error';
      }
      const S = v.status;
      console.error('[submitFormData] Webhook failed:', S, w);
      const k = `We could not send your quote request (status ${S}). Please try again in a few minutes or contact us directly.`;
      throw (u && u(k), new Error(k));
    }
    return (
      console.log('[submitFormData] Webhook succeeded:', v.status),
      console.log('[submitFormData] Submission successful, submissionId:', l.submissionId),
      l.submissionId
    );
  } catch (v) {
    if (
      (console.error('[submitFormData] Unexpected error during submission:', v),
      v instanceof Error && v.message.includes('status'))
    )
      throw v;
    if (v instanceof Error && v.name === 'TypeError' && v.message.includes('fetch')) {
      const S =
        'Network error: Could not reach our servers. Please check your internet connection and try again.';
      throw (console.error('[submitFormData] Network error:', v), u && u(S), new Error(S));
    }
    const w =
      'Something went wrong while sending your request. Please try again in a moment or contact us directly.';
    throw (u && u(w), new Error(w));
  }
}
function nu(l) {
  var u;
  if (!l || typeof l != 'string') return { valid: !1, error: 'Email is required' };
  const s = l.trim();
  if (s.length === 0) return { valid: !1, error: 'Email is required' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s))
    return { valid: !1, error: 'Please enter a valid email address' };
  const v = (u = s.split('@')[1]) == null ? void 0 : u.toLowerCase();
  if (v) {
    const w = {
      'gmial.com': 'gmail.com',
      'gmai.com': 'gmail.com',
      'gmal.com': 'gmail.com',
      'yaho.com': 'yahoo.com',
      'hotmial.com': 'hotmail.com',
    };
    if (w[v]) return { valid: !1, error: `Did you mean ${s.split('@')[0]}@${w[v]}?` };
  }
  return { valid: !0 };
}
function iu(l) {
  if (!l || typeof l != 'string') return { valid: !1, error: 'Phone number is required' };
  const u = l.trim();
  if (u.length === 0) return { valid: !1, error: 'Phone number is required' };
  const s = u.replace(/[\s\-()]/g, '');
  if (!s.startsWith('+'))
    return { valid: !1, error: 'Please include country code (e.g., +33 for France, +1 for USA)' };
  if (s.length < 8)
    return {
      valid: !1,
      error: 'Phone number seems too short. Please include country code and number',
    };
  if (s.length > 20)
    return { valid: !1, error: 'Phone number seems too long. Please check and try again' };
  const v = s.substring(1);
  return /^\d+$/.test(v)
    ? { valid: !0 }
    : { valid: !1, error: 'Phone number should contain only numbers after the country code' };
}
function au(l, u) {
  return l == null
    ? { valid: !1, error: u ? `${u} is required` : 'This field is required' }
    : typeof l != 'string'
      ? { valid: !1, error: u ? `${u} is required` : 'This field is required' }
      : l.trim().length === 0
        ? { valid: !1, error: u ? `${u} is required` : 'This field is required' }
        : { valid: !0 };
}
function Zo(l) {
  if (!l || typeof l != 'string') return { valid: !1, error: 'Destination country is required' };
  const u = l.trim();
  return u.length === 0
    ? { valid: !1, error: 'Destination country is required' }
    : /^[A-Z]{2,3}$/i.test(u)
      ? Kn.find((s) => s.code.toUpperCase() === u.toUpperCase())
        ? { valid: !0 }
        : { valid: !1, error: 'Please enter a valid country code' }
      : u.length <= 2
        ? { valid: !1, error: 'Country name is too short' }
        : { valid: !0 };
}
function Xo(l) {
  if (!l || typeof l != 'string') return { valid: !1, error: 'City or port is required' };
  const u = l.trim();
  return u.length === 0
    ? { valid: !1, error: 'City or port is required' }
    : u.length <= 2
      ? { valid: !1, error: 'City or port name is too short' }
      : { valid: !0 };
}
function ou(l) {
  if (l == null || l === '') return { valid: !1, error: 'Total weight is required' };
  const u = typeof l == 'number' ? l.toString() : String(l).trim();
  if (u.length === 0) return { valid: !1, error: 'Total weight is required' };
  const s = u.replace(/[\s,]/g, ''),
    v = parseFloat(s);
  return isNaN(v)
    ? { valid: !1, error: 'Please enter a valid weight (numbers only)' }
    : v <= 0
      ? { valid: !1, error: 'Weight must be greater than 0' }
      : v > 1e6
        ? { valid: !1, error: 'Weight seems too high. Please check and try again' }
        : { valid: !0 };
}
function es(l, u) {
  const s = {};
  switch (l) {
    case 'services':
      break;
    case 'shippingRoute':
      ((s.country = Zo(u.country)), (s.destCity = Xo(u.destCity)));
      break;
    case 'shippingCargo':
      s.totalWeight = ou(u.totalWeight);
      break;
    case 'contact':
      ((s.firstName = au(u.firstName, 'First name')),
        (s.email = nu(u.email)),
        (s.phone = iu(u.phone)));
      break;
  }
  return s;
}
function Sm(l, u) {
  const s = es(l, u);
  return Object.values(s).every((v) => v.valid);
}
const Cm = [
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
  Pm = [
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
  Lm = [
    { code: 'ZIH', name: 'Zhengzhou Rail Terminal', type: 'rail' },
    { code: 'CQN', name: 'Chongqing Rail Terminal', type: 'rail' },
    { code: 'XIY', name: "Xi'an Rail Terminal", type: 'rail' },
    { code: 'WUH', name: 'Wuhan Rail Terminal', type: 'rail' },
    { code: 'CDU', name: 'Chengdu Rail Terminal', type: 'rail' },
  ],
  Tm = ({ formData: l, t: u, selectedServiceLabels: s, orderedSteps: v, onEditStep: w }) => {
    var S;
    const k = (W) => {
        if (!W) return '';
        const Z = Kn.find((G) => G.code === W || G.name === W);
        return Z ? Z.name : W;
      },
      p = (W) => {
        if (!W) return '';
        const Z = [...Cm, ...Pm, ...Lm].find((G) => G.code === W);
        return Z ? Z.name : W;
      },
      h = (W) =>
        W
          ? {
              Sea: u('modeSea', 'Sea'),
              Air: u('modeAir', 'Air'),
              Rail: u('modeRail', 'Rail'),
              Express: u('modeExpress', 'Express'),
              not_sure: u('modeNotSure', "I'm not sure"),
            }[W] || W
          : '',
      R = (W) => {
        if (!W) return '';
        const Z = String(W).trim();
        return Z ? `${Z} kg` : '';
      },
      $ = (W) => v.indexOf(W),
      M =
        ((S = l.servicesRequested) == null ? void 0 : S.shipping) === void 0
          ? !0
          : l.servicesRequested.shipping;
    return i.jsxs('div', {
      className: 'sino-simple-form__review-section',
      children: [
        i.jsx('h3', {
          className: 'sino-simple-form__review-title',
          children: u('reviewTitle', 'Review your request'),
        }),
        i.jsx('p', {
          className: 'sino-simple-form__review-subtitle',
          children: u('reviewSubtitle', 'Please review the information below before submitting.'),
        }),
        i.jsxs('div', {
          className: 'sino-simple-form__review-items',
          children: [
            s.length > 0 &&
              i.jsxs('div', {
                className: 'sino-simple-form__review-item',
                children: [
                  i.jsxs('div', {
                    className: 'sino-simple-form__review-item-header',
                    children: [
                      i.jsx('span', {
                        className: 'sino-simple-form__review-item-label',
                        children: u('reviewServices', 'Services'),
                      }),
                      i.jsx('button', {
                        type: 'button',
                        className: 'sino-simple-form__review-edit-button',
                        onClick: () => w($('services')),
                        'aria-label': u('reviewEditServices', 'Edit services'),
                        children: u('reviewEdit', 'Edit'),
                      }),
                    ],
                  }),
                  i.jsx('div', {
                    className: 'sino-simple-form__review-item-content',
                    children: s.join(', '),
                  }),
                ],
              }),
            M &&
              (l.country || l.destCity || l.mode || l.origin) &&
              i.jsxs('div', {
                className: 'sino-simple-form__review-item',
                children: [
                  i.jsxs('div', {
                    className: 'sino-simple-form__review-item-header',
                    children: [
                      i.jsx('span', {
                        className: 'sino-simple-form__review-item-label',
                        children: u('reviewRoute', 'Route'),
                      }),
                      i.jsx('button', {
                        type: 'button',
                        className: 'sino-simple-form__review-edit-button',
                        onClick: () => w($('shippingRoute')),
                        'aria-label': u('reviewEditRoute', 'Edit route'),
                        children: u('reviewEdit', 'Edit'),
                      }),
                    ],
                  }),
                  i.jsxs('div', {
                    className: 'sino-simple-form__review-item-content',
                    children: [
                      i.jsx('div', {
                        className: 'sino-simple-form__review-item-row',
                        children:
                          l.country &&
                          i.jsxs('div', {
                            children: [
                              i.jsxs('strong', {
                                children: [u('reviewDestination', 'Destination'), ':'],
                              }),
                              ' ',
                              k(l.country),
                              l.destCity && `, ${l.destCity}`,
                            ],
                          }),
                      }),
                      l.mode &&
                        i.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            i.jsxs('strong', { children: [u('reviewMode', 'Mode'), ':'] }),
                            ' ',
                            h(l.mode),
                          ],
                        }),
                      l.origin &&
                        i.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            i.jsxs('strong', { children: [u('reviewOrigin', 'Origin'), ':'] }),
                            ' ',
                            p(l.origin),
                            l.city && `, ${l.city}`,
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            M &&
              (l.totalWeight || l.goodsDescription || l.numberOfUnits) &&
              i.jsxs('div', {
                className: 'sino-simple-form__review-item',
                children: [
                  i.jsxs('div', {
                    className: 'sino-simple-form__review-item-header',
                    children: [
                      i.jsx('span', {
                        className: 'sino-simple-form__review-item-label',
                        children: u('reviewCargo', 'Cargo'),
                      }),
                      i.jsx('button', {
                        type: 'button',
                        className: 'sino-simple-form__review-edit-button',
                        onClick: () => w($('shippingCargo')),
                        'aria-label': u('reviewEditCargo', 'Edit cargo'),
                        children: u('reviewEdit', 'Edit'),
                      }),
                    ],
                  }),
                  i.jsxs('div', {
                    className: 'sino-simple-form__review-item-content',
                    children: [
                      l.goodsDescription &&
                        i.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            i.jsxs('strong', {
                              children: [u('reviewDescription', 'Description'), ':'],
                            }),
                            ' ',
                            l.goodsDescription,
                          ],
                        }),
                      l.totalWeight &&
                        i.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            i.jsxs('strong', { children: [u('reviewWeight', 'Weight'), ':'] }),
                            ' ',
                            R(l.totalWeight),
                          ],
                        }),
                      l.numberOfUnits &&
                        i.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            i.jsxs('strong', { children: [u('reviewUnits', 'Units'), ':'] }),
                            ' ',
                            l.numberOfUnits,
                          ],
                        }),
                      l.areGoodsReady &&
                        i.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            i.jsxs('strong', { children: [u('reviewReady', 'Ready'), ':'] }),
                            ' ',
                            u(`goodsReady${l.areGoodsReady}`, l.areGoodsReady),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            (l.firstName || l.email || l.phone) &&
              i.jsxs('div', {
                className: 'sino-simple-form__review-item',
                children: [
                  i.jsxs('div', {
                    className: 'sino-simple-form__review-item-header',
                    children: [
                      i.jsx('span', {
                        className: 'sino-simple-form__review-item-label',
                        children: u('reviewContact', 'Contact'),
                      }),
                      i.jsx('button', {
                        type: 'button',
                        className: 'sino-simple-form__review-edit-button',
                        onClick: () => w($('contact')),
                        'aria-label': u('reviewEditContact', 'Edit contact'),
                        children: u('reviewEdit', 'Edit'),
                      }),
                    ],
                  }),
                  i.jsxs('div', {
                    className: 'sino-simple-form__review-item-content',
                    children: [
                      l.firstName &&
                        i.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            i.jsxs('strong', { children: [u('reviewName', 'Name'), ':'] }),
                            ' ',
                            l.firstName,
                            l.lastName && ` ${l.lastName}`,
                          ],
                        }),
                      l.email &&
                        i.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            i.jsxs('strong', { children: [u('reviewEmail', 'Email'), ':'] }),
                            ' ',
                            l.email,
                          ],
                        }),
                      l.phone &&
                        i.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            i.jsxs('strong', { children: [u('reviewPhone', 'Phone'), ':'] }),
                            ' ',
                            l.phone,
                          ],
                        }),
                      l.companyName &&
                        i.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            i.jsxs('strong', { children: [u('reviewCompany', 'Company'), ':'] }),
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
  Em = ({
    formData: l,
    t: u,
    selectedServiceLabels: s,
    submitError: v,
    setSubmitError: w,
    isSubmitting: S,
    setIsSubmitting: k,
    scrollToFirstError: p,
    onSubmissionSuccess: h,
    setFieldErrors: R,
    setFieldTouched: $,
    orderedSteps: M,
    onEditStep: W,
  }) =>
    i.jsx('section', {
      className: 'sino-simple-form__section sino-simple-form__section--footer',
      children: i.jsxs('div', {
        className: 'sino-simple-form__footer',
        children: [
          i.jsx(Tm, {
            formData: l,
            t: u,
            selectedServiceLabels: s,
            orderedSteps: M,
            onEditStep: W,
          }),
          i.jsxs('div', {
            className: 'sino-simple-form__footer-text',
            children: [
              i.jsx('p', {
                className: 'sino-simple-form__footer-title',
                children: u('simpleFooterTitle', 'Ready to get your plan?'),
              }),
              i.jsx('p', {
                id: 'sino-simple-form__footer-subtitle',
                className: 'sino-simple-form__footer-subtitle',
                children: u(
                  'simpleFooterSubtitle',
                  'A SINO expert (not a bot) will email you a first quote within 24h (Mon–Fri).'
                ),
              }),
              i.jsx('p', {
                className: 'sino-simple-form__footer-trust',
                children: u(
                  'simpleFooterTrust',
                  'No spam. Just one clear plan, with transparent pricing and timelines.'
                ),
              }),
            ],
          }),
          i.jsxs('div', {
            className: 'sino-simple-form__footer-actions',
            children: [
              v && i.jsx('p', { className: 'sino-simple-form__footer-error', children: v }),
              i.jsx('button', {
                type: 'button',
                className: 'sino-simple-form__cta-button',
                'aria-label': u('getQuoteAria', 'Submit form to get your quote'),
                'aria-describedby': 'sino-simple-form__footer-subtitle',
                onClick: async () => {
                  var Z;
                  if (S) return;
                  console.log(
                    '[SimpleFooterSection] Button clicked, validating all required fields...'
                  );
                  const G =
                      ((Z = l.servicesRequested) == null ? void 0 : Z.shipping) === void 0
                        ? !0
                        : l.servicesRequested.shipping,
                    C = [];
                  (G && C.push('shippingRoute', 'shippingCargo'), C.push('contact'));
                  const P = {},
                    ue = {};
                  for (const ne of C) {
                    const ae = es(ne, l);
                    Object.entries(ae).forEach(([ge, pe]) => {
                      !pe.valid && pe.error && ((P[ge] = pe.error), (ue[ge] = !0));
                    });
                  }
                  if ((R(P), $((ne) => ({ ...ne, ...ue })), Object.keys(P).length > 0)) {
                    const ne = Object.keys(P);
                    console.error('[SimpleFooterSection] Validation failed for fields:', ne);
                    const ae = ne.length,
                      ge =
                        ae === 1
                          ? u(
                              'simpleSubmitErrorSingle',
                              'Please complete the required field before submitting.'
                            )
                          : u(
                              'simpleSubmitErrorMultiple',
                              `Please complete ${ae} required fields before submitting.`
                            );
                    (w(ge),
                      setTimeout(() => {
                        p();
                      }, 100));
                    return;
                  }
                  (console.log(
                    '[SimpleFooterSection] All validations passed, starting submission...'
                  ),
                    w(null),
                    k(!0));
                  let de = !1;
                  try {
                    console.log('[SimpleFooterSection] Preparing submission payload...');
                    const { submissionId: ne, payload: ae } = Nm(l);
                    (console.log('[SimpleFooterSection] Payload prepared, submissionId:', ne),
                      console.log('[SimpleFooterSection] Submitting to webhooks...'));
                    const ge = await jm(ae, (pe) => {
                      (console.error('[SimpleFooterSection] Error callback triggered:', pe),
                        (de = !0),
                        w(pe));
                    });
                    (console.log(
                      '[SimpleFooterSection] Submission successful, calling onSubmissionSuccess with:',
                      ge
                    ),
                      h(ge));
                  } catch (ne) {
                    if (
                      (console.error('[SimpleFooterSection] Submission error caught:', ne),
                      !de && ne instanceof Error)
                    ) {
                      const ae = ne.message || 'An error occurred. Please try again.';
                      (console.error('[SimpleFooterSection] Setting error message:', ae), w(ae));
                    }
                  } finally {
                    k(!1);
                  }
                },
                disabled: S,
                children: S
                  ? u('simpleFooterCtaLoading', 'Sending your request…')
                  : u('simpleFooterCta', 'Get my quote'),
              }),
              i.jsx('p', {
                className: 'sino-simple-form__footer-note',
                children: u(
                  'simpleFooterNote',
                  'By submitting, you agree that SINO Shipping may contact you about this request.'
                ),
              }),
            ],
          }),
          i.jsxs('div', {
            className: 'sino-simple-form__footer-trust-badges',
            children: [
              i.jsxs('a', {
                href: 'https://www.sino-shipping.com/privacy-policy',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'sino-simple-form__footer-trust-badge',
                'aria-label': u('trustBadgeGDPR', 'GDPR Compliant'),
                children: [
                  i.jsxs('svg', {
                    width: '20',
                    height: '20',
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                      i.jsx('rect', {
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
                      i.jsx('path', {
                        d: 'M9 12l2 2 4-4',
                        stroke: 'currentColor',
                        strokeWidth: '2',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      }),
                    ],
                  }),
                  i.jsx('span', {
                    className: 'sino-simple-form__footer-trust-badge-text',
                    children: u('trustBadgeGDPR', 'GDPR Compliant'),
                  }),
                ],
              }),
              i.jsxs('div', {
                className: 'sino-simple-form__footer-trust-badge',
                'aria-label': u('trustBadgeSecure', 'Secure & Encrypted'),
                children: [
                  i.jsxs('svg', {
                    width: '20',
                    height: '20',
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                      i.jsx('rect', {
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
                      i.jsx('path', {
                        d: 'M7 11V7a5 5 0 0 1 10 0v4',
                        stroke: 'currentColor',
                        strokeWidth: '2',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      }),
                    ],
                  }),
                  i.jsx('span', {
                    className: 'sino-simple-form__footer-trust-badge-text',
                    children: u('trustBadgeSecure', 'Secure & Encrypted'),
                  }),
                ],
              }),
              i.jsxs('div', {
                className: 'sino-simple-form__footer-trust-badge',
                'aria-label': u('trustBadgeNoSpam', 'No Spam Guarantee'),
                children: [
                  i.jsxs('svg', {
                    width: '20',
                    height: '20',
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                      i.jsx('path', {
                        d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
                        stroke: 'currentColor',
                        strokeWidth: '2',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      }),
                      i.jsx('line', {
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
                  i.jsx('span', {
                    className: 'sino-simple-form__footer-trust-badge-text',
                    children: u('trustBadgeNoSpam', 'No Spam Guarantee'),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
function Dm(l, u, s, v) {
  if (u - (l + 1) <= 0) return { minutes: 0, message: 'Almost done!', isAlmostDone: !0 };
  const w = {
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
  let S = 0;
  for (let h = l + 1; h < s.length; h++) {
    const R = s[h],
      $ = w[R] || 90,
      M = ru(R, v),
      W = M.total > 0 ? M.filled / M.total : 0,
      Z = $ * (1 - W * 0.5);
    S += Z;
  }
  const k = Math.ceil(S / 60);
  let p;
  return (
    k <= 1
      ? (p = 'Almost done!')
      : k <= 2
        ? (p = `~${k} minute${k > 1 ? 's' : ''} remaining`)
        : (p = `~${k} minutes remaining`),
    { minutes: k, message: p, isAlmostDone: k <= 1 }
  );
}
const Fm = ({ currentStepIndex: l, totalSteps: u, orderedSteps: s, formData: v, t: w }) => {
    const S = I.useMemo(() => Dm(l, u, s, v), [l, u, s, v]);
    return i.jsxs('div', {
      className: `sino-simple-form__time-estimate${S.isAlmostDone ? ' sino-simple-form__time-estimate--almost-done' : ''}`,
      role: 'status',
      'aria-live': 'polite',
      children: [
        i.jsx('div', {
          className: 'sino-simple-form__time-estimate-icon',
          children: i.jsxs('svg', {
            width: '16',
            height: '16',
            viewBox: '0 0 24 24',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              i.jsx('circle', {
                cx: '12',
                cy: '12',
                r: '10',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
              i.jsx('polyline', {
                points: '12 6 12 12 16 14',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            ],
          }),
        }),
        i.jsx('span', {
          className: 'sino-simple-form__time-estimate-text',
          children: S.isAlmostDone
            ? w('timeEstimateAlmostDone', S.message)
            : w('timeEstimateRemaining', S.message),
        }),
      ],
    });
  },
  zm = ({
    currentStep: l,
    totalSteps: u,
    onNext: s,
    onPrevious: v,
    isFirstStep: w,
    isLastStep: S,
    orderedSteps: k,
    formData: p,
    t: h,
  }) =>
    i.jsxs('div', {
      className: 'sino-simple-form__step-navigation',
      children: [
        i.jsx('div', {
          className: 'sino-simple-form__step-progress',
          children: i.jsx('div', {
            className: 'sino-simple-form__step-progress-bar',
            children: i.jsx('div', {
              className: 'sino-simple-form__step-progress-fill',
              style: { width: `${((l + 1) / u) * 100}%` },
            }),
          }),
        }),
        i.jsx(Fm, { currentStepIndex: l, totalSteps: u, orderedSteps: k, formData: p, t: h }),
        i.jsxs('div', {
          className: 'sino-simple-form__step-buttons',
          children: [
            !w &&
              i.jsxs('button', {
                type: 'button',
                className: 'sino-simple-form__step-button sino-simple-form__step-button--previous',
                onClick: v,
                'aria-label': h('previousStepAria', `Go to previous step, step ${l} of ${u}`),
                onKeyDown: (R) => {
                  (R.key === 'Enter' || R.key === ' ') && (R.preventDefault(), v());
                },
                children: [
                  i.jsx('span', {
                    className: 'sino-simple-form__step-button-arrow',
                    'aria-hidden': 'true',
                    children: '←',
                  }),
                  h('previousStep', 'Previous'),
                ],
              }),
            !S &&
              i.jsxs('button', {
                type: 'button',
                className: 'sino-simple-form__step-button sino-simple-form__step-button--next',
                onClick: s,
                'aria-label': h('nextStepAria', `Go to next step, step ${l + 2} of ${u}`),
                onKeyDown: (R) => {
                  (R.key === 'Enter' || R.key === ' ') && (R.preventDefault(), s());
                },
                children: [
                  h('nextStep', 'Next'),
                  i.jsx('span', {
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
  Rm = {
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
  Yc = ({
    id: l,
    name: u,
    value: s,
    onChange: v,
    onBlur: w,
    onSelect: S,
    onSelectWithValidation: k,
    placeholder: p,
    options: h,
    isLoading: R = !1,
    className: $ = '',
    inputRef: M,
    error: W,
    touched: Z,
    isValid: G,
    maxResults: C = 10,
  }) => {
    const [P, ue] = I.useState(!1),
      [de, ne] = I.useState(-1),
      [ae, ge] = I.useState(''),
      [pe, Fe] = I.useState(!1),
      ze = I.useRef(null),
      Ge = I.useRef(null),
      qe = I.useRef(null),
      ct = I.useRef(!1),
      Me = h.length > 0 && h[0].flag !== void 0;
    I.useEffect(() => {
      if (!s) {
        ge('');
        return;
      }
      if (Me) {
        const m = h.find((N) => N.value === s);
        ge(m ? m.label : s);
      } else ge(s);
    }, [s, h, Me]);
    const Ne = h
      .filter((m) => {
        if (!ae.trim()) return !1;
        const N = ae.toLowerCase();
        return (
          m.label.toLowerCase().includes(N) ||
          m.value.toLowerCase().includes(N) ||
          (Me && m.value.toLowerCase() === N)
        );
      })
      .slice(0, C);
    (I.useEffect(
      () => (
        ae.trim() && P
          ? (Fe(!0),
            qe.current && clearTimeout(qe.current),
            (qe.current = setTimeout(() => {
              Fe(!1);
            }, 300)))
          : Fe(!1),
        () => {
          qe.current && clearTimeout(qe.current);
        }
      ),
      [ae, P]
    ),
      I.useEffect(() => {
        const m = (N) => {
          ze.current && !ze.current.contains(N.target) && (ue(!1), ne(-1));
        };
        if (P)
          return (
            document.addEventListener('mousedown', m),
            () => document.removeEventListener('mousedown', m)
          );
      }, [P]));
    const et = (m) => {
        const N = m.target.value;
        (ge(N), v(m), ue(!0), ne(-1));
      },
      re = () => {
        Ne.length > 0 && ue(!0);
      },
      ve = (m) => {
        ((ct.current = !0), ge(m.label), ue(!1), ne(-1), k && k(m.value));
        const N = { target: { name: u, value: m.value } };
        (v(N),
          S && S(m.value),
          setTimeout(() => {
            ct.current = !1;
          }, 300));
      },
      me = (m) => {
        var N;
        if (!P || Ne.length === 0) {
          m.key === 'ArrowDown' && Ne.length > 0 && (ue(!0), ne(0));
          return;
        }
        switch (m.key) {
          case 'ArrowDown':
            (m.preventDefault(),
              ne((K) => {
                const J = K < Ne.length - 1 ? K + 1 : K;
                if (Ge.current && J >= 0) {
                  const ee = Ge.current.children[J];
                  ee && ee.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                }
                return J;
              }));
            break;
          case 'ArrowUp':
            (m.preventDefault(),
              ne((K) => {
                const J = K > 0 ? K - 1 : -1;
                if (Ge.current && J >= 0) {
                  const ee = Ge.current.children[J];
                  ee && ee.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                }
                return J;
              }));
            break;
          case 'Enter':
            (m.preventDefault(), de >= 0 && de < Ne.length && ve(Ne[de]));
            break;
          case 'Escape':
            (m.preventDefault(), ue(!1), ne(-1), (N = M.current) == null || N.focus());
            break;
          case 'Tab':
            (ue(!1), ne(-1));
            break;
        }
      },
      O = R || pe,
      z = O && ae.trim() && P,
      A = O && !(Z && !W && G);
    return i.jsxs('div', {
      ref: ze,
      className: 'sino-simple-form__autocomplete-wrapper',
      children: [
        i.jsxs('div', {
          className: 'sino-simple-form__autocomplete-input-wrapper',
          children: [
            i.jsx('input', {
              ref: M,
              id: l,
              name: u,
              type: 'text',
              value: ae,
              onChange: et,
              onFocus: re,
              onBlur: () => {
                setTimeout(() => {
                  (ct.current || w(), ue(!1), ne(-1));
                }, 200);
              },
              onKeyDown: me,
              placeholder: p,
              className: `sino-simple-form__input${W ? ' sino-simple-form__input--error' : ''}${Z && !W && G ? ' sino-simple-form__input--success' : ''}${O && !(Z && !W && G) ? ' sino-simple-form__input--loading' : ''}${$ ? ` ${$}` : ''}`,
              autoComplete: 'off',
              'aria-autocomplete': 'list',
              'aria-expanded': P,
              'aria-haspopup': 'listbox',
              'aria-controls': `${l}-listbox`,
              'aria-label': p,
              'aria-describedby': W ? `${l}-error` : Z && !W && G ? `${l}-success` : void 0,
              'aria-invalid': W ? 'true' : 'false',
              'aria-activedescendant': de >= 0 ? `${l}-option-${de}` : void 0,
            }),
            A &&
              i.jsx('span', {
                className: 'sino-simple-form__autocomplete-spinner',
                'aria-hidden': 'true',
                children: i.jsxs('svg', {
                  width: '16',
                  height: '16',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    i.jsx('circle', {
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
                    i.jsx('circle', {
                      cx: '12',
                      cy: '12',
                      r: '10',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeDasharray: '32',
                      strokeDashoffset: '24',
                      children: i.jsx('animateTransform', {
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
          (Ne.length > 0 || z) &&
          i.jsx('ul', {
            ref: Ge,
            id: `${l}-listbox`,
            className: 'sino-simple-form__autocomplete-list',
            role: 'listbox',
            children: z
              ? i.jsxs(i.Fragment, {
                  children: [
                    Array.from({ length: 3 }).map((m, N) =>
                      i.jsxs(
                        'li',
                        {
                          className: 'sino-simple-form__autocomplete-skeleton',
                          role: 'option',
                          children: [
                            Me &&
                              i.jsx('span', {
                                className: 'sino-simple-form__autocomplete-skeleton-flag',
                              }),
                            i.jsx('span', {
                              className: 'sino-simple-form__autocomplete-skeleton-text',
                            }),
                          ],
                        },
                        `skeleton-${N}`
                      )
                    ),
                    i.jsx('li', {
                      className: 'sino-simple-form__autocomplete-loading',
                      children: i.jsx('span', {
                        className: 'sino-simple-form__autocomplete-loading-text',
                        children: Me ? 'Loading countries...' : 'Loading suggestions...',
                      }),
                    }),
                  ],
                })
              : Ne.map((m, N) =>
                  i.jsxs(
                    'li',
                    {
                      id: `${l}-option-${N}`,
                      className: `sino-simple-form__autocomplete-option${de === N ? ' sino-simple-form__autocomplete-option--highlighted' : ''}`,
                      role: 'option',
                      'aria-selected': de === N,
                      onClick: () => ve(m),
                      onMouseEnter: () => ne(N),
                      onKeyDown: (K) => {
                        (K.key === 'Enter' || K.key === ' ') && (K.preventDefault(), ve(m));
                      },
                      tabIndex: -1,
                      children: [
                        m.flag &&
                          i.jsx('span', {
                            className: 'sino-simple-form__autocomplete-flag',
                            'aria-hidden': 'true',
                            children: m.flag,
                          }),
                        i.jsx('span', {
                          className: 'sino-simple-form__autocomplete-label',
                          children: m.label,
                        }),
                      ],
                    },
                    m.value
                  )
                ),
          }),
      ],
    });
  },
  Mm = () => Kn.map((l) => ({ value: l.code, label: l.name, flag: l.flag })),
  Wm = (l) => (Rm[l] || []).map((u) => ({ value: u, label: u }));
function la(l) {
  if (l == null || l === '') return null;
  if (typeof l == 'number') return isNaN(l) || l <= 0 ? null : l;
  const u = String(l).trim().replace(/[\s,]/g, '');
  if (u === '') return null;
  const s = parseFloat(u);
  return isNaN(s) || s <= 0 ? null : s;
}
function Ko(l, u) {
  return l / 100;
}
function Om(l, u, s) {
  if (!l || !s || s <= 0) return { value: null, formatted: '' };
  const v = la(l.length),
    w = la(l.width),
    S = la(l.height);
  if (!v || !w || !S) return { value: null, formatted: '' };
  const k = Ko(v),
    p = Ko(w),
    h = Ko(S),
    R = k * p * h * s,
    $ = R.toFixed(3).replace(/\.?0+$/, '');
  return { value: R, formatted: `${$} CBM` };
}
function Im(l, u, s) {
  if (!l || !s || s <= 0) return { value: null, formatted: '' };
  const v = la(l);
  if (!v) return { value: null, formatted: '' };
  const w = v * s,
    S = u,
    k = w.toLocaleString('en-US', { maximumFractionDigits: 2, useGrouping: !0 });
  return { value: w, formatted: `${k} ${S}` };
}
function Am(l) {
  const u = Om(l.dimensions, 'CM', l.numberOfUnits),
    s = Im(l.weightPerUnit, 'KG', l.numberOfUnits);
  return { totalVolume: u, totalWeightFromUnits: s };
}
const Vm = ({ formData: l, setFormData: u, t: s }) => {
    const v = I.useMemo(() => Am(l), [l.dimensions, l.numberOfUnits, l.weightPerUnit]),
      w = v.totalVolume.value !== null || v.totalWeightFromUnits.value !== null,
      S = I.useRef(!1);
    return (
      I.useEffect(() => {
        if (v.totalWeightFromUnits.value !== null && !S.current) {
          const k = l.totalWeight,
            p = Math.round(v.totalWeightFromUnits.value).toString();
          if (!k || k.trim() === '') {
            S.current = !0;
            const h = setTimeout(() => {
              (u((R) =>
                !R.totalWeight || R.totalWeight.trim() === '' ? { ...R, totalWeight: p } : R
              ),
                (S.current = !1));
            }, 1e3);
            return () => {
              (clearTimeout(h), (S.current = !1));
            };
          }
        }
      }, [v.totalWeightFromUnits.value, l.totalWeight, u]),
      w
        ? i.jsxs('div', {
            className: 'sino-simple-form__cargo-calculations',
            children: [
              i.jsx('div', {
                className: 'sino-simple-form__cargo-calculations-header',
                children: i.jsx('span', {
                  className: 'sino-simple-form__cargo-calculations-title',
                  children: s('cargoCalculationsTitle', 'Calculated values'),
                }),
              }),
              i.jsxs('div', {
                className: 'sino-simple-form__cargo-calculations-items',
                children: [
                  v.totalVolume.value !== null &&
                    i.jsxs('div', {
                      className: 'sino-simple-form__cargo-calculation-item',
                      children: [
                        i.jsxs('span', {
                          className: 'sino-simple-form__cargo-calculation-label',
                          children: [s('cargoCalculatedVolume', 'Total volume'), ':'],
                        }),
                        i.jsx('span', {
                          className: 'sino-simple-form__cargo-calculation-value',
                          children: v.totalVolume.formatted,
                        }),
                      ],
                    }),
                  v.totalWeightFromUnits.value !== null &&
                    i.jsxs('div', {
                      className: 'sino-simple-form__cargo-calculation-item',
                      children: [
                        i.jsxs('span', {
                          className: 'sino-simple-form__cargo-calculation-label',
                          children: [s('cargoCalculatedWeight', 'Total weight (from units)'), ':'],
                        }),
                        i.jsx('span', {
                          className: 'sino-simple-form__cargo-calculation-value',
                          children: v.totalWeightFromUnits.formatted,
                        }),
                      ],
                    }),
                ],
              }),
              i.jsx('p', {
                className: 'sino-simple-form__cargo-calculations-hint',
                children: s(
                  'cargoCalculationsHint',
                  'These values are calculated automatically and can help you verify your inputs.'
                ),
              }),
            ],
          })
        : null
    );
  },
  Zc = 'sinoSimpleFormSocialProofWidgetCollapsed',
  qm = ({ t: l }) => {
    const [u, s] = I.useState(!1),
      [v, w] = I.useState(!1);
    I.useEffect(() => {
      if (typeof window > 'u') return;
      try {
        window.localStorage.getItem(Zc) === 'true' && w(!0);
      } catch {}
      const k = setTimeout(() => {
        s(!0);
      }, 500);
      return () => clearTimeout(k);
    }, []);
    const S = () => {
      const k = !v;
      if ((w(k), typeof window < 'u'))
        try {
          window.localStorage.setItem(Zc, String(k));
        } catch {}
    };
    return i.jsx('div', {
      className: `sino-simple-form__social-proof-widget${u ? ' sino-simple-form__social-proof-widget--visible' : ''}${v ? ' sino-simple-form__social-proof-widget--collapsed' : ''}`,
      role: 'complementary',
      'aria-label': l('socialProofAriaLabel', 'Social proof and trust indicators'),
      children: i.jsxs('div', {
        className: 'sino-simple-form__social-proof-widget-content',
        children: [
          i.jsxs('div', {
            className: 'sino-simple-form__social-proof-widget-header',
            children: [
              i.jsx('span', {
                className: 'sino-simple-form__social-proof-widget-title',
                children: l('socialProofTitle', 'Trusted by'),
              }),
              i.jsx('button', {
                type: 'button',
                className: 'sino-simple-form__social-proof-widget-toggle',
                onClick: S,
                'aria-label': v
                  ? l('expandWidget', 'Expand widget')
                  : l('collapseWidget', 'Collapse widget'),
                title: v
                  ? l('expandWidget', 'Expand widget')
                  : l('collapseWidget', 'Collapse widget'),
                'aria-expanded': !v,
                children: i.jsx('svg', {
                  width: '16',
                  height: '16',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: `sino-simple-form__social-proof-widget-toggle-icon${v ? ' sino-simple-form__social-proof-widget-toggle-icon--collapsed' : ''}`,
                  children: i.jsx('polyline', {
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
          !v &&
            i.jsxs('div', {
              className: 'sino-simple-form__social-proof-widget-items',
              children: [
                i.jsxs('div', {
                  className: 'sino-simple-form__social-proof-widget-item',
                  children: [
                    i.jsx('div', {
                      className: 'sino-simple-form__social-proof-widget-icon',
                      children: i.jsxs('svg', {
                        width: '20',
                        height: '20',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: [
                          i.jsx('path', {
                            d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                          i.jsx('circle', {
                            cx: '9',
                            cy: '7',
                            r: '4',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                          i.jsx('path', {
                            d: 'M23 21v-2a4 4 0 0 0-3-3.87',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                          i.jsx('path', {
                            d: 'M16 3.13a4 4 0 0 1 0 7.75',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                        ],
                      }),
                    }),
                    i.jsxs('div', {
                      className: 'sino-simple-form__social-proof-widget-text',
                      children: [
                        i.jsx('strong', {
                          className: 'sino-simple-form__social-proof-widget-value',
                          children: '55,000+',
                        }),
                        i.jsx('span', {
                          className: 'sino-simple-form__social-proof-widget-label',
                          children: l('socialProofCustomers', 'Satisfied Customers'),
                        }),
                      ],
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__social-proof-widget-item',
                  children: [
                    i.jsx('div', {
                      className: 'sino-simple-form__social-proof-widget-icon',
                      children: i.jsx('svg', {
                        width: '20',
                        height: '20',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: i.jsx('polygon', {
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
                    i.jsxs('div', {
                      className: 'sino-simple-form__social-proof-widget-text',
                      children: [
                        i.jsx('strong', {
                          className: 'sino-simple-form__social-proof-widget-value',
                          children: '4.8/5',
                        }),
                        i.jsx('span', {
                          className: 'sino-simple-form__social-proof-widget-label',
                          children: l('socialProofRating', 'Customer Satisfaction'),
                        }),
                      ],
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__social-proof-widget-item',
                  children: [
                    i.jsx('div', {
                      className: 'sino-simple-form__social-proof-widget-icon',
                      children: i.jsxs('svg', {
                        width: '20',
                        height: '20',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: [
                          i.jsx('circle', {
                            cx: '12',
                            cy: '12',
                            r: '10',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                          i.jsx('polyline', {
                            points: '12 6 12 12 16 14',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                        ],
                      }),
                    }),
                    i.jsxs('div', {
                      className: 'sino-simple-form__social-proof-widget-text',
                      children: [
                        i.jsx('strong', {
                          className: 'sino-simple-form__social-proof-widget-value',
                          children: '24h',
                        }),
                        i.jsx('span', {
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
  Um = ({
    formData: l,
    setFormData: u,
    t: s,
    stepLabel: v,
    showSourcingAdvanced: w,
    setShowSourcingAdvanced: S,
    isQuickQuote: k = !1,
  }) =>
    i.jsx(i.Fragment, {
      children:
        l.servicesRequested.sourcing &&
        i.jsxs('section', {
          className: 'sino-simple-form__section sino-simple-form__section--service-sourcing',
          children: [
            i.jsxs('h2', {
              className: 'sino-simple-form__section-title',
              children: [
                i.jsx('span', {
                  className: 'sino-simple-form__section-step',
                  children: v ?? 'Step 1',
                }),
                i.jsx('span', { children: s('simpleSourcingTitle', 'Product sourcing') }),
              ],
            }),
            i.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--rows',
              children: [
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'sourcingProductDescription',
                      children: [
                        s('sourcingProductDescription', 'What product are you looking for?'),
                        i.jsx('span', {
                          className: 'sino-simple-form__required',
                          'aria-label': 'required',
                          children: '*',
                        }),
                      ],
                    }),
                    i.jsx('textarea', {
                      id: 'sourcingProductDescription',
                      className: 'sino-simple-form__input sino-simple-form__input--textarea',
                      name: 'sourcingProductDescription',
                      value: l.sourcing.productDescription,
                      onChange: (p) =>
                        u((h) => ({
                          ...h,
                          sourcing: { ...h.sourcing, productDescription: p.target.value },
                        })),
                      placeholder: s(
                        'sourcingProductDescriptionPlaceholder',
                        'Briefly describe the product, specs, or categories you need.'
                      ),
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'sourcingReferenceLink',
                      children: [
                        s('sourcingReferenceLink', 'Reference link'),
                        i.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: s('ifAny', 'if any'),
                        }),
                      ],
                    }),
                    i.jsx('input', {
                      id: 'sourcingReferenceLink',
                      className: 'sino-simple-form__input',
                      type: 'url',
                      value: l.sourcing.referenceLink,
                      onChange: (p) =>
                        u((h) => ({
                          ...h,
                          sourcing: { ...h.sourcing, referenceLink: p.target.value },
                        })),
                      placeholder: s(
                        'sourcingReferenceLinkPlaceholder',
                        'Alibaba, 1688, Taobao, or any reference URL.'
                      ),
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'sourcingTargetPrice',
                      children: s('sourcingTargetPrice', 'Target price per unit'),
                    }),
                    i.jsxs('div', {
                      className: 'sino-simple-form__fields sino-simple-form__fields--inline',
                      children: [
                        i.jsx('input', {
                          id: 'sourcingTargetPrice',
                          className: 'sino-simple-form__input',
                          type: 'number',
                          min: 0,
                          value: l.sourcing.targetPrice ?? '',
                          onChange: (p) =>
                            u((h) => ({
                              ...h,
                              sourcing: {
                                ...h.sourcing,
                                targetPrice: p.target.value ? Number(p.target.value) : null,
                              },
                            })),
                          placeholder: s('sourcingTargetPricePlaceholder', 'e.g. 5.50'),
                        }),
                        i.jsx('input', {
                          className: 'sino-simple-form__input',
                          type: 'text',
                          value: l.sourcing.targetCurrency,
                          onChange: (p) =>
                            u((h) => ({
                              ...h,
                              sourcing: { ...h.sourcing, targetCurrency: p.target.value },
                            })),
                          placeholder: s('sourcingTargetCurrencyPlaceholder', 'USD, EUR…'),
                        }),
                      ],
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'sourcingMoq',
                      children: s('sourcingMoq', 'Expected order quantity (MOQ)'),
                    }),
                    i.jsx('input', {
                      id: 'sourcingMoq',
                      className: 'sino-simple-form__input',
                      type: 'number',
                      min: 0,
                      value: l.sourcing.moq ?? '',
                      onChange: (p) =>
                        u((h) => ({
                          ...h,
                          sourcing: {
                            ...h.sourcing,
                            moq: p.target.value ? Number(p.target.value) : null,
                          },
                        })),
                      placeholder: s('sourcingMoqPlaceholder', 'Approximate number of units'),
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'sourcingPlatform',
                      children: s('sourcingPlatform', 'Which market/platform is this for?'),
                    }),
                    i.jsx('input', {
                      id: 'sourcingPlatform',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: l.sourcing.platform,
                      onChange: (p) =>
                        u((h) => ({ ...h, sourcing: { ...h.sourcing, platform: p.target.value } })),
                      placeholder: s(
                        'sourcingPlatformPlaceholder',
                        'Amazon FBA, Shopify store, wholesale, etc.'
                      ),
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsx('label', {
                      className: 'sino-simple-form__label',
                      children: s('sourcingHasSupplier', 'Do you already have a supplier?'),
                    }),
                    i.jsx('div', {
                      className: 'sino-simple-form__chips',
                      children: [
                        { value: !0, label: s('sourcingHasSupplierYes', 'Yes') },
                        { value: !1, label: s('sourcingHasSupplierNo', 'No') },
                      ].map((p) =>
                        i.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.sourcing.hasSupplier === p.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              u((h) => ({
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
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'sourcingTargetMarkets',
                      children: s('sourcingTargetMarkets', 'Which markets are you selling to?'),
                    }),
                    i.jsx('input', {
                      id: 'sourcingTargetMarkets',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: l.sourcing.targetMarkets,
                      onChange: (p) =>
                        u((h) => ({
                          ...h,
                          sourcing: { ...h.sourcing, targetMarkets: p.target.value },
                        })),
                      placeholder: s(
                        'sourcingTargetMarketsPlaceholder',
                        'e.g. EU, UK, US, Middle East…'
                      ),
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'sourcingRequiredCertifications',
                      children: [
                        s('sourcingRequiredCertifications', 'Required certifications'),
                        i.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: s('ifAny', 'if any'),
                        }),
                      ],
                    }),
                    i.jsx('input', {
                      id: 'sourcingRequiredCertifications',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: l.sourcing.requiredCertifications,
                      onChange: (p) =>
                        u((h) => ({
                          ...h,
                          sourcing: { ...h.sourcing, requiredCertifications: p.target.value },
                        })),
                      placeholder: s(
                        'sourcingRequiredCertificationsPlaceholder',
                        'e.g. CE, RoHS, FDA...'
                      ),
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: `sino-simple-form__subsection${w ? ' sino-simple-form__subsection--open' : ''}`,
                  children: [
                    i.jsxs('button', {
                      type: 'button',
                      className: 'sino-simple-form__subsection-toggle',
                      onClick: () => S((p) => !p),
                      children: [
                        i.jsxs('span', {
                          className: 'sino-simple-form__subsection-label',
                          children: [
                            s('sourcingAdvancedTitle', 'Advanced sourcing details (optional)'),
                            i.jsx('small', {
                              children: s(
                                'sourcingAdvancedSubtitle',
                                'Timeline, quality standards, packaging requirements.'
                              ),
                            }),
                          ],
                        }),
                        i.jsx('span', {
                          className: `sino-simple-form__subsection-chevron${w ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                          children: '▾',
                        }),
                      ],
                    }),
                    w &&
                      i.jsxs('div', {
                        className: 'sino-simple-form__fields sino-simple-form__fields--rows',
                        children: [
                          i.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              i.jsx('label', {
                                className: 'sino-simple-form__label',
                                htmlFor: 'sourcingTimeline',
                                children: s('sourcingTimeline', 'Timeline / urgency'),
                              }),
                              i.jsx('input', {
                                id: 'sourcingTimeline',
                                className: 'sino-simple-form__input',
                                type: 'text',
                                value: l.sourcing.timeline || '',
                                onChange: (p) =>
                                  u((h) => ({
                                    ...h,
                                    sourcing: { ...h.sourcing, timeline: p.target.value },
                                  })),
                                placeholder: s(
                                  'sourcingTimelinePlaceholder',
                                  'e.g. Need samples within 2 weeks, production start in 1 month…'
                                ),
                              }),
                            ],
                          }),
                          i.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              i.jsxs('label', {
                                className: 'sino-simple-form__label',
                                htmlFor: 'sourcingQualityStandards',
                                children: [
                                  s('sourcingQualityStandards', 'Quality standards'),
                                  i.jsx('span', {
                                    className: 'sino-simple-form__label-hint',
                                    children: s('ifAny', 'if any'),
                                  }),
                                ],
                              }),
                              i.jsx('input', {
                                id: 'sourcingQualityStandards',
                                className: 'sino-simple-form__input',
                                type: 'text',
                                value: l.sourcing.qualityStandards || '',
                                onChange: (p) =>
                                  u((h) => ({
                                    ...h,
                                    sourcing: { ...h.sourcing, qualityStandards: p.target.value },
                                  })),
                                placeholder: s(
                                  'sourcingQualityStandardsPlaceholder',
                                  'e.g. ISO 9001, specific quality grades…'
                                ),
                              }),
                            ],
                          }),
                          i.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              i.jsxs('label', {
                                className: 'sino-simple-form__label',
                                htmlFor: 'sourcingPackagingRequirements',
                                children: [
                                  s('sourcingPackagingRequirements', 'Packaging requirements'),
                                  i.jsx('span', {
                                    className: 'sino-simple-form__label-hint',
                                    children: s('ifAny', 'if any'),
                                  }),
                                ],
                              }),
                              i.jsx('input', {
                                id: 'sourcingPackagingRequirements',
                                className: 'sino-simple-form__input',
                                type: 'text',
                                value: l.sourcing.packagingRequirements || '',
                                onChange: (p) =>
                                  u((h) => ({
                                    ...h,
                                    sourcing: {
                                      ...h.sourcing,
                                      packagingRequirements: p.target.value,
                                    },
                                  })),
                                placeholder: s(
                                  'sourcingPackagingRequirementsPlaceholder',
                                  'e.g. Retail-ready, eco-friendly materials…'
                                ),
                              }),
                            ],
                          }),
                          i.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              i.jsx('label', {
                                className: 'sino-simple-form__label',
                                htmlFor: 'sourcingNotes',
                                children: s('sourcingAdvancedNotes', 'Any other details?'),
                              }),
                              i.jsx('textarea', {
                                id: 'sourcingNotes',
                                className:
                                  'sino-simple-form__input sino-simple-form__input--textarea',
                                value: l.sourcing.notes || '',
                                onChange: (p) =>
                                  u((h) => ({
                                    ...h,
                                    sourcing: { ...h.sourcing, notes: p.target.value },
                                  })),
                                placeholder: s(
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
  Bm = ({
    formData: l,
    setFormData: u,
    t: s,
    showWarehousingAdvanced: v,
    setShowWarehousingAdvanced: w,
    stepLabel: S,
    isQuickQuote: k = !1,
  }) =>
    l.servicesRequested.warehousing
      ? i.jsxs('section', {
          className: 'sino-simple-form__section sino-simple-form__section--service-warehousing',
          children: [
            i.jsxs('h2', {
              className: 'sino-simple-form__section-title',
              children: [
                i.jsx('span', {
                  className: 'sino-simple-form__section-step',
                  children: S ?? 'Service',
                }),
                i.jsx('span', {
                  children: s('warehousingTitle', 'Warehousing & consolidation in China'),
                }),
              ],
            }),
            i.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--rows',
              children: [
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsxs('label', {
                      className: 'sino-simple-form__label',
                      children: [
                        s('warehousingDuration', 'How long do you plan to store goods in China?'),
                        i.jsx('span', {
                          className: 'sino-simple-form__required',
                          'aria-label': 'required',
                          children: '*',
                        }),
                      ],
                    }),
                    i.jsx('div', {
                      className: 'sino-simple-form__chips',
                      children: [
                        {
                          value: 'lt_1_month',
                          label: s('warehousingDurationLt1', 'Less than 1 month'),
                        },
                        {
                          value: '1_3_months',
                          label: s('warehousingDuration1to3', 'Between 1 and 3 months'),
                        },
                        {
                          value: 'gt_3_months',
                          label: s('warehousingDurationGt3', 'More than 3 months'),
                        },
                      ].map((p) =>
                        i.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.warehousing.duration === p.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              u((h) => ({
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
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'warehousingSkuCount',
                      children: s('warehousingSkuCount', 'Approximate number of SKUs'),
                    }),
                    i.jsx('input', {
                      id: 'warehousingSkuCount',
                      className: 'sino-simple-form__input',
                      type: 'number',
                      min: 0,
                      value: l.warehousing.skuCount ?? '',
                      onChange: (p) =>
                        u((h) => ({
                          ...h,
                          warehousing: {
                            ...h.warehousing,
                            skuCount: p.target.value ? Number(p.target.value) : null,
                          },
                        })),
                      placeholder: s('warehousingSkuCountPlaceholder', 'e.g. 10–50'),
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsx('label', {
                      className: 'sino-simple-form__label',
                      children: s(
                        'warehousingConsolidation',
                        'Do you need consolidation from multiple suppliers?'
                      ),
                    }),
                    i.jsx('div', {
                      className: 'sino-simple-form__chips',
                      children: [
                        { value: !0, label: s('warehousingConsolidationYes', 'Yes') },
                        { value: !1, label: s('warehousingConsolidationNo', 'No') },
                      ].map((p) =>
                        i.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.warehousing.consolidation === p.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              u((h) => ({
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
                i.jsxs('div', {
                  className: `sino-simple-form__subsection${v ? ' sino-simple-form__subsection--open' : ''}`,
                  children: [
                    i.jsxs('button', {
                      type: 'button',
                      className: 'sino-simple-form__subsection-toggle',
                      onClick: () => w((p) => !p),
                      children: [
                        i.jsxs('span', {
                          className: 'sino-simple-form__subsection-label',
                          children: [
                            s(
                              'warehousingAdvancedTitle',
                              'Advanced warehousing preferences (optional)'
                            ),
                            i.jsx('small', {
                              children: s(
                                'warehousingAdvancedSubtitle',
                                'Extra services and special requirements.'
                              ),
                            }),
                          ],
                        }),
                        i.jsx('span', {
                          className: `sino-simple-form__subsection-chevron${v ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                          children: '▾',
                        }),
                      ],
                    }),
                    v &&
                      i.jsxs('div', {
                        className: 'sino-simple-form__fields sino-simple-form__fields--rows',
                        children: [
                          i.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              i.jsxs('label', {
                                className: 'sino-simple-form__label',
                                children: [
                                  s('warehousingExtraServices', 'Extra services'),
                                  i.jsx('span', {
                                    className: 'sino-simple-form__label-hint',
                                    children: s('ifAny', 'if any'),
                                  }),
                                ],
                              }),
                              i.jsx('div', {
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
                                  return i.jsx(
                                    'button',
                                    {
                                      type: 'button',
                                      className: `sino-simple-chip${h ? ' sino-simple-chip--active' : ''}`,
                                      onClick: () =>
                                        u((R) => {
                                          const $ = R.warehousing.extraServices,
                                            M = h
                                              ? $.filter((W) => W !== p.value)
                                              : [...$, p.value];
                                          return {
                                            ...R,
                                            warehousing: { ...R.warehousing, extraServices: M },
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
                          i.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              i.jsx('label', {
                                className: 'sino-simple-form__label',
                                htmlFor: 'warehousingNotes',
                                children: s('warehousingNotes', 'Anything else we should know?'),
                              }),
                              i.jsx('textarea', {
                                id: 'warehousingNotes',
                                className:
                                  'sino-simple-form__input sino-simple-form__input--textarea',
                                value: l.warehousing.notes,
                                onChange: (p) =>
                                  u((h) => ({
                                    ...h,
                                    warehousing: { ...h.warehousing, notes: p.target.value },
                                  })),
                                placeholder: s(
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
  Hm = ({
    formData: l,
    setFormData: u,
    t: s,
    showDropshippingAdvanced: v,
    setShowDropshippingAdvanced: w,
    stepLabel: S,
    isQuickQuote: k = !1,
  }) =>
    l.servicesRequested.dropshipping
      ? i.jsxs('section', {
          className: 'sino-simple-form__section sino-simple-form__section--service-dropshipping',
          children: [
            i.jsxs('h2', {
              className: 'sino-simple-form__section-title',
              children: [
                i.jsx('span', {
                  className: 'sino-simple-form__section-step',
                  children: S ?? 'Service',
                }),
                i.jsx('span', {
                  children: s('dropshippingTitle', 'Dropshipping & fulfillment from China'),
                }),
              ],
            }),
            i.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--rows',
              children: [
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'dropshippingProducts',
                      children: [
                        s('dropshippingProducts', 'What type of products do you plan to ship?'),
                        i.jsx('span', {
                          className: 'sino-simple-form__required',
                          'aria-label': 'required',
                          children: '*',
                        }),
                      ],
                    }),
                    i.jsx('textarea', {
                      id: 'dropshippingProducts',
                      className: 'sino-simple-form__input sino-simple-form__input--textarea',
                      value: l.dropshipping.products,
                      onChange: (p) =>
                        u((h) => ({
                          ...h,
                          dropshipping: { ...h.dropshipping, products: p.target.value },
                        })),
                      placeholder: s(
                        'dropshippingProductsPlaceholder',
                        'Main categories, product types, or existing catalog link.'
                      ),
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'dropshippingModel',
                      children: s('dropshippingModel', 'What is your business model?'),
                    }),
                    i.jsx('input', {
                      id: 'dropshippingModel',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: l.dropshipping.model,
                      onChange: (p) =>
                        u((h) => ({
                          ...h,
                          dropshipping: { ...h.dropshipping, model: p.target.value },
                        })),
                      placeholder: s(
                        'dropshippingModelPlaceholder',
                        'Shopify store, Amazon FBA, marketplace, D2C…'
                      ),
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'dropshippingCustomerCountries',
                      children: [
                        s(
                          'dropshippingCustomerCountries',
                          'Where are your final customers located?'
                        ),
                        i.jsx('span', {
                          className: 'sino-simple-form__required',
                          'aria-label': 'required',
                          children: '*',
                        }),
                      ],
                    }),
                    i.jsx('input', {
                      id: 'dropshippingCustomerCountries',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: l.dropshipping.customerCountries,
                      onChange: (p) =>
                        u((h) => ({
                          ...h,
                          dropshipping: { ...h.dropshipping, customerCountries: p.target.value },
                        })),
                      placeholder: s(
                        'dropshippingCustomerCountriesPlaceholder',
                        'Countries or regions (e.g. US, EU, UK).'
                      ),
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'dropshippingDailyOrders',
                      children: s('dropshippingDailyOrders', 'Average or expected daily orders'),
                    }),
                    i.jsx('input', {
                      id: 'dropshippingDailyOrders',
                      className: 'sino-simple-form__input',
                      type: 'number',
                      min: 0,
                      value: l.dropshipping.dailyOrders ?? '',
                      onChange: (p) =>
                        u((h) => ({
                          ...h,
                          dropshipping: {
                            ...h.dropshipping,
                            dailyOrders: p.target.value ? Number(p.target.value) : null,
                          },
                        })),
                      placeholder: s('dropshippingDailyOrdersPlaceholder', 'e.g. 20'),
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsx('label', {
                      className: 'sino-simple-form__label',
                      children: s(
                        'dropshippingHasCatalog',
                        'Do you already have a main product or catalog?'
                      ),
                    }),
                    i.jsx('div', {
                      className: 'sino-simple-form__chips',
                      children: [
                        { value: !0, label: s('dropshippingHasCatalogYes', 'Yes') },
                        { value: !1, label: s('dropshippingHasCatalogNo', 'No') },
                      ].map((p) =>
                        i.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.dropshipping.hasCatalog === p.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              u((h) => ({
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
                i.jsxs('div', {
                  className: `sino-simple-form__subsection${v ? ' sino-simple-form__subsection--open' : ''}`,
                  children: [
                    i.jsxs('button', {
                      type: 'button',
                      className: 'sino-simple-form__subsection-toggle',
                      onClick: () => w((p) => !p),
                      children: [
                        i.jsxs('span', {
                          className: 'sino-simple-form__subsection-label',
                          children: [
                            s(
                              'dropshippingAdvancedTitle',
                              'Advanced dropshipping details (optional)'
                            ),
                            i.jsx('small', {
                              children: s(
                                'dropshippingAdvancedSubtitle',
                                'Branding needs and additional notes.'
                              ),
                            }),
                          ],
                        }),
                        i.jsx('span', {
                          className: `sino-simple-form__subsection-chevron${v ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                          children: '▾',
                        }),
                      ],
                    }),
                    v &&
                      i.jsxs('div', {
                        className: 'sino-simple-form__fields sino-simple-form__fields--rows',
                        children: [
                          i.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              i.jsx('label', {
                                className: 'sino-simple-form__label',
                                children: s(
                                  'dropshippingBrandingNeeded',
                                  'Do you need branded packaging or inserts?'
                                ),
                              }),
                              i.jsx('div', {
                                className: 'sino-simple-form__chips',
                                children: [
                                  { value: !0, label: s('dropshippingBrandingNeededYes', 'Yes') },
                                  { value: !1, label: s('dropshippingBrandingNeededNo', 'No') },
                                ].map((p) =>
                                  i.jsx(
                                    'button',
                                    {
                                      type: 'button',
                                      className: `sino-simple-chip${l.dropshipping.brandingNeeded === p.value ? ' sino-simple-chip--active' : ''}`,
                                      onClick: () =>
                                        u((h) => ({
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
                          i.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              i.jsx('label', {
                                className: 'sino-simple-form__label',
                                htmlFor: 'dropshippingNotes',
                                children: s('dropshippingNotes', 'Anything else we should know?'),
                              }),
                              i.jsx('textarea', {
                                id: 'dropshippingNotes',
                                className:
                                  'sino-simple-form__input sino-simple-form__input--textarea',
                                value: l.dropshipping.notes,
                                onChange: (p) =>
                                  u((h) => ({
                                    ...h,
                                    dropshipping: { ...h.dropshipping, notes: p.target.value },
                                  })),
                                placeholder: s(
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
  $m = ({
    formData: l,
    setFormData: u,
    t: s,
    showQcAdvanced: v,
    setShowQcAdvanced: w,
    stepLabel: S,
    isQuickQuote: k = !1,
  }) =>
    l.servicesRequested.qc
      ? i.jsxs('section', {
          className: 'sino-simple-form__section sino-simple-form__section--service-qc',
          children: [
            i.jsxs('h2', {
              className: 'sino-simple-form__section-title',
              children: [
                i.jsx('span', {
                  className: 'sino-simple-form__section-step',
                  children: S ?? 'Service',
                }),
                i.jsx('span', { children: s('qcTitle', 'Quality control & inspections') }),
              ],
            }),
            i.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--rows',
              children: [
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsxs('label', {
                      className: 'sino-simple-form__label',
                      children: [
                        s('qcType', 'What type of inspection do you need?'),
                        i.jsx('span', {
                          className: 'sino-simple-form__required',
                          'aria-label': 'required',
                          children: '*',
                        }),
                      ],
                    }),
                    i.jsx('div', {
                      className: 'sino-simple-form__chips sino-simple-form__chips--wrap',
                      children: [
                        {
                          value: 'pre_production',
                          label: s('qcTypePreProduction', 'Pre-production'),
                        },
                        {
                          value: 'during_production',
                          label: s('qcTypeDuringProduction', 'During production'),
                        },
                        { value: 'pre_shipment', label: s('qcTypePreShipment', 'Pre-shipment') },
                        { value: 'factory_audit', label: s('qcTypeFactoryAudit', 'Factory audit') },
                      ].map((p) =>
                        i.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.qc.type === p.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              u((h) => ({
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
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsx('label', {
                      className: 'sino-simple-form__label',
                      children: s('qcProductionStage', 'At which stage is your production?'),
                    }),
                    i.jsx('div', {
                      className: 'sino-simple-form__chips',
                      children: [
                        { value: 'not_started', label: s('qcStageNotStarted', 'Not started') },
                        { value: 'in_progress', label: s('qcStageInProgress', 'In progress') },
                        { value: 'finished', label: s('qcStageFinished', 'Finished') },
                      ].map((p) =>
                        i.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.qc.productionStage === p.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              u((h) => ({
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
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'qcFactoryCity',
                      children: [
                        s('qcFactoryCity', 'Factory location (city in China)'),
                        i.jsx('span', {
                          className: 'sino-simple-form__required',
                          'aria-label': 'required',
                          children: '*',
                        }),
                      ],
                    }),
                    i.jsx('input', {
                      id: 'qcFactoryCity',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: l.qc.factoryCity,
                      onChange: (p) =>
                        u((h) => ({ ...h, qc: { ...h.qc, factoryCity: p.target.value } })),
                      placeholder: s('qcFactoryCityPlaceholder', 'e.g. Shenzhen, Ningbo, Yiwu…'),
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'qcPreferredDate',
                      children: [
                        s('qcPreferredDate', 'Preferred inspection date'),
                        i.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: s('ifKnown', 'if known'),
                        }),
                      ],
                    }),
                    i.jsx('input', {
                      id: 'qcPreferredDate',
                      className: 'sino-simple-form__input',
                      type: 'date',
                      value: l.qc.preferredDate,
                      onChange: (p) =>
                        u((h) => ({ ...h, qc: { ...h.qc, preferredDate: p.target.value } })),
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: `sino-simple-form__subsection${v ? ' sino-simple-form__subsection--open' : ''}`,
                  children: [
                    i.jsxs('button', {
                      type: 'button',
                      className: 'sino-simple-form__subsection-toggle',
                      onClick: () => w((p) => !p),
                      children: [
                        i.jsxs('span', {
                          className: 'sino-simple-form__subsection-label',
                          children: [
                            s('qcAdvancedTitle', 'Additional inspection details (optional)'),
                            i.jsx('small', {
                              children: s(
                                'qcAdvancedSubtitle',
                                'Specific checkpoints, batch sizes or constraints.'
                              ),
                            }),
                          ],
                        }),
                        i.jsx('span', {
                          className: `sino-simple-form__subsection-chevron${v ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                          children: '▾',
                        }),
                      ],
                    }),
                    v &&
                      i.jsx('div', {
                        className: 'sino-simple-form__fields sino-simple-form__fields--rows',
                        children: i.jsxs('div', {
                          className: 'sino-simple-form__field',
                          children: [
                            i.jsx('label', {
                              className: 'sino-simple-form__label',
                              htmlFor: 'qcNotes',
                              children: s('qcNotes', 'Anything else we should know?'),
                            }),
                            i.jsx('textarea', {
                              id: 'qcNotes',
                              className:
                                'sino-simple-form__input sino-simple-form__input--textarea',
                              value: l.qc.notes,
                              onChange: (p) =>
                                u((h) => ({ ...h, qc: { ...h.qc, notes: p.target.value } })),
                              placeholder: s(
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
  Gm = ({
    formData: l,
    setFormData: u,
    t: s,
    showChinaVisitLogistics: v,
    setShowChinaVisitLogistics: w,
    stepLabel: S,
  }) => {
    if (!l.servicesRequested.chinaVisits) return null;
    const k = l.chinaVisit.visitType,
      p = (C) => {
        u((P) => {
          const ue = P.chinaVisit.visitType,
            de = ue.includes(C) ? ue.filter((ne) => ne !== C) : [...ue, C];
          return { ...P, chinaVisit: { ...P.chinaVisit, visitType: de } };
        });
      },
      h = k.includes('Canton Fair'),
      R = k.includes('Yiwu Market'),
      $ = k.includes('Factory Visits'),
      M = k.includes('Other Trade Fair'),
      W = $ || M,
      Z = k.length > 0,
      G =
        h && !R && !$ && !M
          ? 'Guangzhou'
          : R && !h && !$ && !M
            ? 'Yiwu'
            : h && R && !$ && !M
              ? 'Guangzhou, Yiwu'
              : '';
    return i.jsxs('section', {
      className: 'sino-simple-form__section sino-simple-form__section--service-chinaVisits',
      children: [
        i.jsxs('h2', {
          className: 'sino-simple-form__section-title',
          children: [
            i.jsx('span', {
              className: 'sino-simple-form__section-step',
              children: S ?? 'Service',
            }),
            i.jsx('span', { children: s('chinaVisitTitle', 'China visits & trade fairs') }),
          ],
        }),
        i.jsx('p', {
          className: 'sino-simple-form__hint',
          children: s(
            'chinaVisitHint',
            'Select all that apply. We can help you plan a multi-stop trip.'
          ),
        }),
        i.jsxs('div', {
          className: 'sino-simple-form__fields sino-simple-form__fields--rows',
          children: [
            i.jsxs('div', {
              className: 'sino-simple-form__field',
              children: [
                i.jsxs('label', {
                  className: 'sino-simple-form__label',
                  children: [
                    s('chinaVisitType', 'What would you like to visit?'),
                    i.jsx('span', {
                      className: 'sino-simple-form__required',
                      'aria-label': 'required',
                      children: '*',
                    }),
                  ],
                }),
                i.jsx('div', {
                  className: 'sino-simple-form__chips sino-simple-form__chips--wrap',
                  children: [
                    { value: 'Canton Fair', label: 'Canton Fair (Guangzhou)' },
                    { value: 'Yiwu Market', label: 'Yiwu Market' },
                    { value: 'Factory Visits', label: 'Factory Visits' },
                    { value: 'Other Trade Fair', label: 'Other Trade Fair' },
                  ].map((C) => {
                    const P = k.includes(C.value);
                    return i.jsx(
                      'button',
                      {
                        type: 'button',
                        className: `sino-simple-chip${P ? ' sino-simple-chip--active' : ''}`,
                        onClick: () => p(C.value),
                        'aria-pressed': P ? 'true' : 'false',
                        children: C.label,
                      },
                      C.value
                    );
                  }),
                }),
              ],
            }),
            h &&
              i.jsxs('div', {
                className: 'sino-simple-form__field',
                children: [
                  i.jsx('label', {
                    className: 'sino-simple-form__label',
                    children: s('chinaVisitCantonPhase', 'Which phase?'),
                  }),
                  i.jsx('div', {
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
                    ].map((C) =>
                      i.jsx(
                        'button',
                        {
                          type: 'button',
                          className: `sino-simple-chip${l.chinaVisit.cantonPhase === C.value ? ' sino-simple-chip--active' : ''}`,
                          'data-tooltip': C.tooltip,
                          onClick: () =>
                            u((P) => ({
                              ...P,
                              chinaVisit: { ...P.chinaVisit, cantonPhase: C.value },
                            })),
                          children: C.label,
                        },
                        C.value
                      )
                    ),
                  }),
                  i.jsx('p', {
                    className: 'sino-simple-form__help',
                    children: s(
                      'cantonPhaseHelp',
                      'Held in April/May and October/November each year.'
                    ),
                  }),
                ],
              }),
            M &&
              i.jsxs('div', {
                className: 'sino-simple-form__field',
                children: [
                  i.jsxs('label', {
                    className: 'sino-simple-form__label',
                    htmlFor: 'chinaVisitFairName',
                    children: [
                      s('chinaVisitFairName', 'Which trade fair?'),
                      i.jsx('span', {
                        className: 'sino-simple-form__required',
                        'aria-label': 'required',
                        children: '*',
                      }),
                    ],
                  }),
                  i.jsx('input', {
                    id: 'chinaVisitFairName',
                    className: 'sino-simple-form__input',
                    type: 'text',
                    value: l.chinaVisit.fairName,
                    onChange: (C) =>
                      u((P) => ({
                        ...P,
                        chinaVisit: { ...P.chinaVisit, fairName: C.target.value },
                      })),
                    placeholder: 'e.g. CIFF Furniture Fair, China Beauty Expo…',
                  }),
                ],
              }),
            $ &&
              i.jsxs('div', {
                className: 'sino-simple-form__field',
                children: [
                  i.jsx('label', {
                    className: 'sino-simple-form__label',
                    htmlFor: 'chinaVisitFactoryDescription',
                    children: s('chinaVisitFactoryDescription', 'What kind of factories?'),
                  }),
                  i.jsx('textarea', {
                    id: 'chinaVisitFactoryDescription',
                    className: 'sino-simple-form__input sino-simple-form__input--textarea',
                    value: l.chinaVisit.factoryDescription || '',
                    onChange: (C) =>
                      u((P) => ({
                        ...P,
                        chinaVisit: { ...P.chinaVisit, factoryDescription: C.target.value },
                      })),
                    placeholder: 'Product categories, specific suppliers, regions…',
                  }),
                ],
              }),
            W &&
              i.jsxs('div', {
                className: 'sino-simple-form__field',
                children: [
                  i.jsxs('label', {
                    className: 'sino-simple-form__label',
                    htmlFor: 'chinaVisitMainCity',
                    children: [
                      s('chinaVisitMainCity', 'Main city or region'),
                      i.jsx('span', {
                        className: 'sino-simple-form__required',
                        'aria-label': 'required',
                        children: '*',
                      }),
                    ],
                  }),
                  i.jsx('input', {
                    id: 'chinaVisitMainCity',
                    className: 'sino-simple-form__input',
                    type: 'text',
                    value: l.chinaVisit.mainCity,
                    onChange: (C) =>
                      u((P) => ({
                        ...P,
                        chinaVisit: { ...P.chinaVisit, mainCity: C.target.value },
                      })),
                    placeholder: 'Shenzhen, Dongguan, Shanghai…',
                  }),
                ],
              }),
            G &&
              !W &&
              i.jsx('div', {
                className: 'sino-simple-form__field',
                children: i.jsxs('p', {
                  className: 'sino-simple-form__info',
                  children: [
                    '📍 ',
                    s('autoDetectedCity', 'Your trip will be based in'),
                    ': ',
                    i.jsx('strong', { children: G }),
                  ],
                }),
              }),
            Z &&
              i.jsxs('div', {
                className: 'sino-simple-form__field',
                children: [
                  i.jsxs('label', {
                    className: 'sino-simple-form__label',
                    htmlFor: 'chinaVisitOtherCities',
                    children: [
                      $ && !h && !R
                        ? s('chinaVisitFactoryCities', 'Cities/regions to visit')
                        : s('chinaVisitOtherCities', 'Other cities to visit'),
                      ' ',
                      !($ && !h && !R) &&
                        i.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: s('ifApplicable', 'if applicable'),
                        }),
                    ],
                  }),
                  i.jsx('input', {
                    id: 'chinaVisitOtherCities',
                    className: 'sino-simple-form__input',
                    type: 'text',
                    value: l.chinaVisit.otherCities,
                    onChange: (C) =>
                      u((P) => ({
                        ...P,
                        chinaVisit: { ...P.chinaVisit, otherCities: C.target.value },
                      })),
                    placeholder: 'Separated by commas',
                  }),
                ],
              }),
            i.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--inline',
              children: [
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'chinaVisitStartDate',
                      children: [
                        s('chinaVisitStartDate', 'Start date'),
                        i.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: s('ifKnown', 'if known'),
                        }),
                      ],
                    }),
                    i.jsx('input', {
                      id: 'chinaVisitStartDate',
                      className: 'sino-simple-form__input',
                      type: 'date',
                      value: l.chinaVisit.startDate,
                      onChange: (C) =>
                        u((P) => ({
                          ...P,
                          chinaVisit: { ...P.chinaVisit, startDate: C.target.value },
                        })),
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'chinaVisitEndDate',
                      children: [
                        s('chinaVisitEndDate', 'End date'),
                        i.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: s('ifKnown', 'if known'),
                        }),
                      ],
                    }),
                    i.jsx('input', {
                      id: 'chinaVisitEndDate',
                      className: 'sino-simple-form__input',
                      type: 'date',
                      value: l.chinaVisit.endDate,
                      onChange: (C) =>
                        u((P) => ({
                          ...P,
                          chinaVisit: { ...P.chinaVisit, endDate: C.target.value },
                        })),
                    }),
                  ],
                }),
              ],
            }),
            i.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--inline',
              children: [
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'chinaVisitNumberOfDays',
                      children: s('chinaVisitNumberOfDays', 'Days on site'),
                    }),
                    i.jsx('input', {
                      id: 'chinaVisitNumberOfDays',
                      className: 'sino-simple-form__input',
                      type: 'number',
                      min: 1,
                      value: l.chinaVisit.numberOfDays ?? '',
                      onChange: (C) =>
                        u((P) => ({
                          ...P,
                          chinaVisit: {
                            ...P.chinaVisit,
                            numberOfDays: C.target.value ? Number(C.target.value) : null,
                          },
                        })),
                      placeholder: 'e.g. 5',
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'chinaVisitNumberOfTravelers',
                      children: s('chinaVisitNumberOfTravelers', 'Travelers'),
                    }),
                    i.jsx('input', {
                      id: 'chinaVisitNumberOfTravelers',
                      className: 'sino-simple-form__input',
                      type: 'number',
                      min: 1,
                      value: l.chinaVisit.numberOfTravelers ?? '',
                      onChange: (C) =>
                        u((P) => ({
                          ...P,
                          chinaVisit: {
                            ...P.chinaVisit,
                            numberOfTravelers: C.target.value ? Number(C.target.value) : null,
                          },
                        })),
                      placeholder: 'e.g. 2',
                    }),
                  ],
                }),
              ],
            }),
            i.jsxs('div', {
              className: `sino-simple-form__subsection${v ? ' sino-simple-form__subsection--open' : ''}`,
              children: [
                i.jsxs('button', {
                  type: 'button',
                  className: 'sino-simple-form__subsection-toggle',
                  onClick: () => w((C) => !C),
                  'aria-expanded': v,
                  children: [
                    i.jsxs('span', {
                      className: 'sino-simple-form__subsection-label',
                      children: [
                        s('chinaVisitLogisticsTitle', 'Advanced trip logistics (optional)'),
                        i.jsx('small', {
                          children: s(
                            'chinaVisitLogisticsSubtitle',
                            'Local guide, transport arrangements, hotel booking.'
                          ),
                        }),
                      ],
                    }),
                    i.jsx('span', {
                      className: `sino-simple-form__subsection-chevron${v ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                      children: '▾',
                    }),
                  ],
                }),
                v &&
                  i.jsxs('div', {
                    className: 'sino-simple-form__fields sino-simple-form__fields--rows',
                    children: [
                      i.jsxs('div', {
                        className: 'sino-simple-form__field',
                        children: [
                          i.jsx('label', {
                            className: 'sino-simple-form__label',
                            children: s('chinaVisitNeedGuide', 'Local guide / interpreter?'),
                          }),
                          i.jsx('div', {
                            className: 'sino-simple-form__chips',
                            children: [!0, !1].map((C) =>
                              i.jsx(
                                'button',
                                {
                                  type: 'button',
                                  className: `sino-simple-chip${l.chinaVisit.needGuide === C ? ' sino-simple-chip--active' : ''}`,
                                  onClick: () =>
                                    u((P) => ({
                                      ...P,
                                      chinaVisit: {
                                        ...P.chinaVisit,
                                        needGuide: P.chinaVisit.needGuide === C ? null : C,
                                      },
                                    })),
                                  children: C ? 'Yes' : 'No',
                                },
                                String(C)
                              )
                            ),
                          }),
                        ],
                      }),
                      i.jsxs('div', {
                        className: 'sino-simple-form__field',
                        children: [
                          i.jsx('label', {
                            className: 'sino-simple-form__label',
                            children: s('chinaVisitNeedTransport', 'Local transport?'),
                          }),
                          i.jsx('div', {
                            className: 'sino-simple-form__chips',
                            children: [!0, !1].map((C) =>
                              i.jsx(
                                'button',
                                {
                                  type: 'button',
                                  className: `sino-simple-chip${l.chinaVisit.needTransport === C ? ' sino-simple-chip--active' : ''}`,
                                  onClick: () =>
                                    u((P) => ({
                                      ...P,
                                      chinaVisit: {
                                        ...P.chinaVisit,
                                        needTransport: P.chinaVisit.needTransport === C ? null : C,
                                      },
                                    })),
                                  children: C ? 'Yes' : 'No',
                                },
                                String(C)
                              )
                            ),
                          }),
                        ],
                      }),
                      i.jsxs('div', {
                        className: 'sino-simple-form__field',
                        children: [
                          i.jsx('label', {
                            className: 'sino-simple-form__label',
                            children: s('chinaVisitNeedHotels', 'Hotel booking help?'),
                          }),
                          i.jsx('div', {
                            className: 'sino-simple-form__chips',
                            children: [!0, !1].map((C) =>
                              i.jsx(
                                'button',
                                {
                                  type: 'button',
                                  className: `sino-simple-chip${l.chinaVisit.needHotels === C ? ' sino-simple-chip--active' : ''}`,
                                  onClick: () =>
                                    u((P) => ({
                                      ...P,
                                      chinaVisit: {
                                        ...P.chinaVisit,
                                        needHotels: P.chinaVisit.needHotels === C ? null : C,
                                      },
                                    })),
                                  children: C ? 'Yes' : 'No',
                                },
                                String(C)
                              )
                            ),
                          }),
                        ],
                      }),
                      i.jsxs('div', {
                        className: 'sino-simple-form__field',
                        children: [
                          i.jsx('label', {
                            className: 'sino-simple-form__label',
                            htmlFor: 'chinaVisitNotes',
                            children: s('chinaVisitNotes', 'Anything else?'),
                          }),
                          i.jsx('textarea', {
                            id: 'chinaVisitNotes',
                            className: 'sino-simple-form__input sino-simple-form__input--textarea',
                            value: l.chinaVisit.notes,
                            onChange: (C) =>
                              u((P) => ({
                                ...P,
                                chinaVisit: { ...P.chinaVisit, notes: C.target.value },
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
  Km = ({ formData: l, setFormData: u, t: s, stepLabel: v }) => {
    var w, S, k;
    return i.jsx(i.Fragment, {
      children:
        l.servicesRequested.other &&
        i.jsxs('section', {
          className: 'sino-simple-form__section sino-simple-form__section--service-other',
          children: [
            i.jsxs('h2', {
              className: 'sino-simple-form__section-title',
              children: [
                i.jsx('span', {
                  className: 'sino-simple-form__section-step',
                  children: v ?? 'Step',
                }),
                i.jsx('span', { children: s('simpleOtherTitle', 'Tell us about your project') }),
              ],
            }),
            i.jsx('p', {
              className: 'sino-simple-form__hint',
              children: s(
                'simpleOtherHint',
                "Describe your project in detail and we'll route it to the right specialist."
              ),
            }),
            i.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--rows',
              children: [
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsx('label', {
                      className: 'sino-simple-form__label',
                      children: s('otherProjectType', 'What type of project is this?'),
                    }),
                    i.jsx('div', {
                      className: 'sino-simple-form__chips sino-simple-form__chips--wrap',
                      children: [
                        {
                          value: 'consulting',
                          label: s('otherTypeConsulting', 'Consulting / Advice'),
                        },
                        {
                          value: 'manufacturing',
                          label: s('otherTypeManufacturing', 'Manufacturing'),
                        },
                        {
                          value: 'import-export',
                          label: s('otherTypeImportExport', 'Import / Export'),
                        },
                        { value: 'partnership', label: s('otherTypePartnership', 'Partnership') },
                        { value: 'other', label: s('otherTypeOther', 'Other') },
                      ].map((p) => {
                        var h, R, $;
                        return i.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${((h = l.otherProject) == null ? void 0 : h.projectType) === p.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              u((M) => {
                                var W;
                                return {
                                  ...M,
                                  otherProject: {
                                    ...M.otherProject,
                                    projectType:
                                      ((W = M.otherProject) == null ? void 0 : W.projectType) ===
                                      p.value
                                        ? ''
                                        : p.value,
                                  },
                                };
                              }),
                            'aria-pressed':
                              ((R = l.otherProject) == null ? void 0 : R.projectType) === p.value
                                ? 'true'
                                : 'false',
                            'aria-label': `${p.label}${(($ = l.otherProject) == null ? void 0 : $.projectType) === p.value ? ', selected' : ', not selected'}`,
                            onKeyDown: (M) => {
                              (M.key === 'Enter' || M.key === ' ') &&
                                (M.preventDefault(),
                                u((W) => {
                                  var Z;
                                  return {
                                    ...W,
                                    otherProject: {
                                      ...W.otherProject,
                                      projectType:
                                        ((Z = W.otherProject) == null ? void 0 : Z.projectType) ===
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
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'otherProjectDescription',
                      children: [
                        s('otherProjectDescription', 'Describe your project'),
                        i.jsx('span', {
                          className: 'sino-simple-form__required',
                          'aria-label': 'required',
                          children: '*',
                        }),
                      ],
                    }),
                    i.jsx('textarea', {
                      id: 'otherProjectDescription',
                      className: 'sino-simple-form__input sino-simple-form__input--textarea',
                      rows: 5,
                      value: ((w = l.otherProject) == null ? void 0 : w.description) || '',
                      onChange: (p) =>
                        u((h) => ({
                          ...h,
                          otherProject: { ...h.otherProject, description: p.target.value },
                        })),
                      placeholder: s(
                        'otherProjectDescriptionPlaceholder',
                        'Tell us what you need help with: your goals, context, timeline, challenges…'
                      ),
                    }),
                    i.jsx('p', {
                      className: 'sino-simple-form__help',
                      children: s(
                        'otherProjectDescriptionHelp',
                        'The more detail you provide, the better we can assist you.'
                      ),
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'otherProjectBudget',
                      children: [
                        s('otherProjectBudget', 'Estimated budget'),
                        i.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: s('ifKnown', 'if known'),
                        }),
                      ],
                    }),
                    i.jsx('input', {
                      id: 'otherProjectBudget',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: ((S = l.otherProject) == null ? void 0 : S.budget) || '',
                      onChange: (p) =>
                        u((h) => ({
                          ...h,
                          otherProject: { ...h.otherProject, budget: p.target.value },
                        })),
                      placeholder: s('otherProjectBudgetPlaceholder', 'e.g. $5,000 - $10,000'),
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    i.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'otherProjectTimeline',
                      children: [
                        s('otherProjectTimeline', 'Expected timeline'),
                        i.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: s('ifKnown', 'if known'),
                        }),
                      ],
                    }),
                    i.jsx('input', {
                      id: 'otherProjectTimeline',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: ((k = l.otherProject) == null ? void 0 : k.timeline) || '',
                      onChange: (p) =>
                        u((h) => ({
                          ...h,
                          otherProject: { ...h.otherProject, timeline: p.target.value },
                        })),
                      placeholder: s('otherProjectTimelinePlaceholder', 'e.g. Within 3 months'),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
    });
  },
  Qm = ({ submissionId: l, t: u, onStartNew: s, selectedServiceLabels: v, formData: w }) => {
    const [S, k] = I.useState(!1),
      [p, h] = I.useState(new Date());
    (I.useEffect(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const M = document.createElement('div');
      ((M.className = 'sino-simple-form__confetti-container'), document.body.appendChild(M));
      const W = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'],
        Z = 50;
      for (let C = 0; C < Z; C++) {
        const P = document.createElement('div');
        ((P.className = 'sino-simple-form__confetti'),
          (P.style.left = `${Math.random() * 100}%`),
          (P.style.backgroundColor = W[Math.floor(Math.random() * W.length)]),
          (P.style.animationDelay = `${Math.random() * 2}s`),
          (P.style.animationDuration = `${2 + Math.random() * 2}s`),
          M.appendChild(P));
      }
      const G = setTimeout(() => {
        M.remove();
      }, 4e3);
      return () => {
        (clearTimeout(G), M.parentNode && M.remove());
      };
    }, []),
      I.useEffect(() => {
        const M = setInterval(() => {
          h(new Date());
        }, 6e4);
        return () => clearInterval(M);
      }, []));
    const R = I.useMemo(() => {
        const M = p,
          W = M.getDay(),
          Z = M.getHours(),
          G = W >= 1 && W <= 5,
          C = Z >= 9 && Z < 18;
        let P = 0,
          ue = 0;
        if (G && C) {
          const de = new Date(M.getTime() + 864e5).getTime() - M.getTime();
          ((P = Math.max(0, Math.floor(de / (1e3 * 60 * 60)))),
            (ue = Math.max(0, Math.floor((de % (1e3 * 60 * 60)) / (1e3 * 60)))));
        }
        return {
          isBusinessDay: G,
          isBusinessHours: C,
          hoursRemaining: P,
          minutesRemaining: ue,
          status: G && C ? 'active' : 'waiting',
        };
      }, [p]),
      $ = async () => {
        try {
          (await navigator.clipboard.writeText(l), k(!0), setTimeout(() => k(!1), 2e3));
        } catch (M) {
          console.error('Failed to copy:', M);
        }
      };
    return i.jsx('section', {
      className: 'sino-simple-form__section sino-simple-form__section--confirmation',
      children: i.jsxs('div', {
        className: 'sino-simple-form__confirmation',
        children: [
          i.jsxs('div', {
            className: 'sino-simple-form__confirmation-icon',
            children: [
              i.jsxs('svg', {
                width: '64',
                height: '64',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: [
                  i.jsx('circle', {
                    cx: '12',
                    cy: '12',
                    r: '10',
                    stroke: '#22c55e',
                    strokeWidth: '2',
                    fill: 'none',
                    className: 'sino-simple-form__confirmation-circle',
                  }),
                  i.jsx('path', {
                    d: 'M8 12l2 2 4-4',
                    stroke: '#22c55e',
                    strokeWidth: '2',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    className: 'sino-simple-form__confirmation-check',
                  }),
                ],
              }),
              i.jsx('div', { className: 'sino-simple-form__confirmation-ripple' }),
            ],
          }),
          i.jsx('h1', {
            className: 'sino-simple-form__confirmation-title',
            children: u('simpleConfirmationTitle', 'Request received!'),
          }),
          i.jsx('p', {
            className: 'sino-simple-form__confirmation-subtitle',
            children: u(
              'simpleConfirmationSubtitle',
              'A SINO expert (not a bot) will email you a first quote within 24h (Mon–Fri).'
            ),
          }),
          i.jsxs('div', {
            className: 'sino-simple-form__confirmation-info-block',
            children: [
              w.email &&
                i.jsxs('div', {
                  className: 'sino-simple-form__confirmation-email',
                  children: [
                    i.jsx('div', {
                      className: 'sino-simple-form__confirmation-email-icon',
                      children: i.jsxs('svg', {
                        width: '24',
                        height: '24',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: [
                          i.jsx('path', {
                            d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                          i.jsx('polyline', {
                            points: '22,6 12,13 2,6',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                        ],
                      }),
                    }),
                    i.jsxs('div', {
                      className: 'sino-simple-form__confirmation-email-content',
                      children: [
                        i.jsx('strong', {
                          children: u('confirmationEmailTitle', 'Check your inbox'),
                        }),
                        i.jsxs('span', {
                          children: [
                            u('confirmationEmailText', 'Confirmation email sent to'),
                            ' ',
                            i.jsx('strong', { children: w.email }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              i.jsxs('div', {
                className: `sino-simple-form__confirmation-response-time ${R.status === 'active' ? 'sino-simple-form__confirmation-response-time--active' : ''}`,
                children: [
                  i.jsx('div', {
                    className: 'sino-simple-form__confirmation-response-time-icon',
                    children: i.jsxs('svg', {
                      width: '20',
                      height: '20',
                      viewBox: '0 0 24 24',
                      fill: 'none',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: [
                        i.jsx('circle', {
                          cx: '12',
                          cy: '12',
                          r: '10',
                          stroke: 'currentColor',
                          strokeWidth: '2',
                        }),
                        i.jsx('polyline', {
                          points: '12 6 12 12 16 14',
                          stroke: 'currentColor',
                          strokeWidth: '2',
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                        }),
                      ],
                    }),
                  }),
                  i.jsxs('div', {
                    className: 'sino-simple-form__confirmation-response-time-content',
                    children: [
                      i.jsx('strong', {
                        children: u('confirmationResponseTime', 'Response time: 24h (Mon–Fri)'),
                      }),
                      R.status === 'waiting' &&
                        i.jsx('span', {
                          className: 'sino-simple-form__confirmation-response-time-status',
                          children: R.isBusinessDay
                            ? u(
                                'confirmationResponseTimeAfterHours',
                                'Response will start during business hours'
                              )
                            : u(
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
          i.jsxs('div', {
            className: 'sino-simple-form__confirmation-badges',
            children: [
              i.jsx('div', {
                className: 'sino-simple-form__confirmation-badge',
                children: i.jsxs('div', {
                  className: 'sino-simple-form__confirmation-badge-content',
                  children: [
                    i.jsx('strong', {
                      className: 'sino-simple-form__confirmation-badge-value',
                      children: '55,000+',
                    }),
                    i.jsxs('span', {
                      className: 'sino-simple-form__confirmation-badge-label',
                      children: [
                        u('confirmationBadgeClients', 'Satisfied Customers'),
                        i.jsx('small', {
                          className: 'sino-simple-form__confirmation-badge-sublabel',
                          children: 'since 1989',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              i.jsx('div', {
                className: 'sino-simple-form__confirmation-badge',
                children: i.jsxs('div', {
                  className: 'sino-simple-form__confirmation-badge-content',
                  children: [
                    i.jsx('strong', {
                      className: 'sino-simple-form__confirmation-badge-value',
                      children: '400+',
                    }),
                    i.jsxs('span', {
                      className: 'sino-simple-form__confirmation-badge-label',
                      children: [
                        u('confirmationBadgeTeam', 'Professional Team Members'),
                        i.jsx('small', {
                          className: 'sino-simple-form__confirmation-badge-sublabel',
                          children: 'In China',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              i.jsx('div', {
                className: 'sino-simple-form__confirmation-badge',
                children: i.jsxs('div', {
                  className: 'sino-simple-form__confirmation-badge-content',
                  children: [
                    i.jsx('strong', {
                      className: 'sino-simple-form__confirmation-badge-value',
                      children: '8',
                    }),
                    i.jsxs('span', {
                      className: 'sino-simple-form__confirmation-badge-label',
                      children: [
                        u('confirmationBadgeOffices', 'Wholly Owned Offices'),
                        i.jsx('small', {
                          className: 'sino-simple-form__confirmation-badge-sublabel',
                          children: 'In China',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              i.jsx('div', {
                className: 'sino-simple-form__confirmation-badge',
                children: i.jsxs('div', {
                  className: 'sino-simple-form__confirmation-badge-content',
                  children: [
                    i.jsx('strong', {
                      className: 'sino-simple-form__confirmation-badge-value',
                      children: '519,000+',
                    }),
                    i.jsxs('span', {
                      className: 'sino-simple-form__confirmation-badge-label',
                      children: [
                        u('confirmationBadgeCFS', 'CFS Facility Nationwide'),
                        i.jsx('small', {
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
          i.jsxs('div', {
            className: 'sino-simple-form__confirmation-details-card',
            children: [
              (v.length > 0 || w.country) &&
                i.jsxs('div', {
                  className: 'sino-simple-form__confirmation-summary',
                  children: [
                    i.jsx('h3', {
                      className: 'sino-simple-form__confirmation-summary-title',
                      children: u('confirmationSummaryTitle', 'Your request summary'),
                    }),
                    i.jsxs('div', {
                      className: 'sino-simple-form__confirmation-summary-content',
                      children: [
                        v.length > 0 &&
                          i.jsxs('div', {
                            className: 'sino-simple-form__confirmation-summary-item',
                            children: [
                              i.jsx('strong', {
                                children: u('confirmationSummaryServices', 'Services:'),
                              }),
                              i.jsx('span', { children: v.join(', ') }),
                            ],
                          }),
                        w.country &&
                          i.jsxs('div', {
                            className: 'sino-simple-form__confirmation-summary-item',
                            children: [
                              i.jsx('strong', {
                                children: u('confirmationSummaryDestination', 'Destination:'),
                              }),
                              i.jsxs('span', {
                                children: [
                                  (() => {
                                    const M = Kn.find((W) => W.code === w.country);
                                    return M ? M.name : w.country;
                                  })(),
                                  w.destCity && `, ${w.destCity}`,
                                ],
                              }),
                            ],
                          }),
                        w.mode &&
                          w.mode !== 'not_sure' &&
                          i.jsxs('div', {
                            className: 'sino-simple-form__confirmation-summary-item',
                            children: [
                              i.jsx('strong', { children: u('confirmationSummaryMode', 'Mode:') }),
                              i.jsx('span', { children: w.mode }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              i.jsxs('div', {
                className: 'sino-simple-form__confirmation-details',
                children: [
                  i.jsxs('div', {
                    className: 'sino-simple-form__confirmation-id-container',
                    children: [
                      i.jsxs('p', {
                        className: 'sino-simple-form__confirmation-id',
                        children: [
                          i.jsx('strong', {
                            children: u('simpleConfirmationIdLabel', 'Reference:'),
                          }),
                          i.jsx('code', {
                            className: 'sino-simple-form__confirmation-id-code',
                            children: l,
                          }),
                        ],
                      }),
                      i.jsx('button', {
                        type: 'button',
                        className: `sino-simple-form__confirmation-copy ${S ? 'sino-simple-form__confirmation-copy--copied' : ''}`,
                        onClick: $,
                        title: S
                          ? u('confirmationCopied', 'Copied!')
                          : u('confirmationCopy', 'Copy reference'),
                        children: S
                          ? i.jsxs(i.Fragment, {
                              children: [
                                i.jsx('svg', {
                                  width: '16',
                                  height: '16',
                                  viewBox: '0 0 24 24',
                                  fill: 'none',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  children: i.jsx('path', {
                                    d: 'M20 6L9 17l-5-5',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                    strokeLinecap: 'round',
                                    strokeLinejoin: 'round',
                                  }),
                                }),
                                u('confirmationCopied', 'Copied!'),
                              ],
                            })
                          : i.jsxs(i.Fragment, {
                              children: [
                                i.jsxs('svg', {
                                  width: '16',
                                  height: '16',
                                  viewBox: '0 0 24 24',
                                  fill: 'none',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  children: [
                                    i.jsx('rect', {
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
                                    i.jsx('path', {
                                      d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1',
                                      stroke: 'currentColor',
                                      strokeWidth: '2',
                                      strokeLinecap: 'round',
                                      strokeLinejoin: 'round',
                                    }),
                                  ],
                                }),
                                u('confirmationCopy', 'Copy'),
                              ],
                            }),
                      }),
                    ],
                  }),
                  i.jsx('p', {
                    className: 'sino-simple-form__confirmation-note',
                    children: u(
                      'simpleConfirmationNote',
                      'Keep this reference number for your records. You can use it if you need to follow up on your request.'
                    ),
                  }),
                ],
              }),
            ],
          }),
          i.jsxs('div', {
            className: 'sino-simple-form__confirmation-timeline',
            children: [
              i.jsxs('div', {
                className: 'sino-simple-form__confirmation-timeline-item',
                children: [
                  i.jsx('div', {
                    className: 'sino-simple-form__confirmation-timeline-icon',
                    children: '1',
                  }),
                  i.jsxs('div', {
                    className: 'sino-simple-form__confirmation-timeline-content',
                    children: [
                      i.jsx('strong', {
                        children: u('confirmationStep1Title', 'Email confirmation'),
                      }),
                      i.jsx('span', {
                        children: u(
                          'confirmationStep1Desc',
                          "You'll receive a confirmation email within minutes"
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs('div', {
                className: 'sino-simple-form__confirmation-timeline-item',
                children: [
                  i.jsx('div', {
                    className: 'sino-simple-form__confirmation-timeline-icon',
                    children: '2',
                  }),
                  i.jsxs('div', {
                    className: 'sino-simple-form__confirmation-timeline-content',
                    children: [
                      i.jsx('strong', { children: u('confirmationStep2Title', 'Expert review') }),
                      i.jsx('span', {
                        children: u('confirmationStep2Desc', 'A SINO expert reviews your request'),
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs('div', {
                className: 'sino-simple-form__confirmation-timeline-item',
                children: [
                  i.jsx('div', {
                    className: 'sino-simple-form__confirmation-timeline-icon',
                    children: '3',
                  }),
                  i.jsxs('div', {
                    className: 'sino-simple-form__confirmation-timeline-content',
                    children: [
                      i.jsx('strong', { children: u('confirmationStep3Title', 'Your quote') }),
                      i.jsx('span', {
                        children: u(
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
          i.jsx('div', {
            className: 'sino-simple-form__confirmation-actions',
            children: i.jsx('button', {
              type: 'button',
              className: 'sino-simple-form__cta-button sino-simple-form__cta-button--primary',
              onClick: s,
              children: u('simpleConfirmationNewRequest', 'Start a new request'),
            }),
          }),
          i.jsxs('div', {
            className: 'sino-simple-form__confirmation-secondary-section',
            children: [
              i.jsxs('div', {
                className: 'sino-simple-form__confirmation-secondary-actions',
                children: [
                  i.jsx('a', {
                    href: 'https://www.sino-shipping.com/international-shipping-knowledge-base/',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'sino-simple-form__confirmation-link',
                    children: u('confirmationBrowseGuides', 'Browse our guides'),
                  }),
                  i.jsx('a', {
                    href: 'mailto:info@sino-shipping.com',
                    className: 'sino-simple-form__confirmation-link',
                    children: u('confirmationContactSupport', 'Contact support'),
                  }),
                ],
              }),
              i.jsxs('div', {
                className: 'sino-simple-form__confirmation-social',
                children: [
                  i.jsx('p', {
                    className: 'sino-simple-form__confirmation-social-title',
                    children: u('confirmationSocialTitle', 'Check our social networks'),
                  }),
                  i.jsxs('div', {
                    className: 'sino-simple-form__confirmation-social-links',
                    children: [
                      i.jsx('a', {
                        href: 'https://hk.linkedin.com/company/sino-shipping-official',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'sino-simple-form__confirmation-social-link',
                        'aria-label': 'LinkedIn',
                        children: i.jsx('svg', {
                          width: '20',
                          height: '20',
                          viewBox: '0 0 24 24',
                          fill: 'currentColor',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: i.jsx('path', {
                            d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
                          }),
                        }),
                      }),
                      i.jsx('a', {
                        href: 'https://www.youtube.com/@SINO-Shipping',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'sino-simple-form__confirmation-social-link',
                        'aria-label': 'YouTube',
                        children: i.jsx('svg', {
                          width: '20',
                          height: '20',
                          viewBox: '0 0 24 24',
                          fill: 'currentColor',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: i.jsx('path', {
                            d: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
                          }),
                        }),
                      }),
                      i.jsx('a', {
                        href: 'https://www.instagram.com/sino.shipping/?hl=en',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'sino-simple-form__confirmation-social-link',
                        'aria-label': 'Instagram',
                        children: i.jsx('svg', {
                          width: '20',
                          height: '20',
                          viewBox: '0 0 24 24',
                          fill: 'currentColor',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: i.jsx('path', {
                            d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                          }),
                        }),
                      }),
                      i.jsx('a', {
                        href: 'https://www.tiktok.com/@sinoshipping',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'sino-simple-form__confirmation-social-link',
                        'aria-label': 'TikTok',
                        children: i.jsx('svg', {
                          width: '20',
                          height: '20',
                          viewBox: '0 0 24 24',
                          fill: 'currentColor',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: i.jsx('path', {
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
          i.jsx('div', {
            className: 'sino-simple-form__confirmation-trust',
            children: i.jsx('p', {
              className: 'sino-simple-form__footer-trust',
              children: u(
                'simpleConfirmationTrust',
                'No spam. Just one clear plan, with transparent pricing and timelines.'
              ),
            }),
          }),
        ],
      }),
    });
  },
  su = 'sinoSimpleFormDraft',
  Xc = 'sinoSimpleFormSessionId';
function Qo() {
  return `session-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
}
function Ym() {
  if (typeof window > 'u') return Qo();
  try {
    const l = window.localStorage.getItem(Xc);
    if (l) return l;
    const u = Qo();
    return (window.localStorage.setItem(Xc, u), u);
  } catch {
    return Qo();
  }
}
function Zm(l, u) {
  if (!(typeof window > 'u'))
    try {
      const s = `${su}-${l}`,
        v = { sessionId: l, formData: u, savedAt: new Date().toISOString() };
      window.localStorage.setItem(s, JSON.stringify(v));
    } catch (s) {
      console.warn('[saveFormDraft] Failed to save draft:', s);
    }
}
function Xm(l) {
  if (typeof window > 'u') return null;
  try {
    const u = `${su}-${l}`,
      s = window.localStorage.getItem(u);
    return s ? JSON.parse(s).formData : null;
  } catch {
    return null;
  }
}
let Pe = null,
  en = null,
  $n = null;
function Jm(l) {
  ((Pe = {
    sessionId: l,
    startTime: Date.now(),
    currentStep: 'services',
    stepsCompleted: [],
    totalTime: 0,
    completionRate: 0,
    problematicFields: {},
  }),
    (en = Date.now()),
    ($n = 'services'),
    dr('form_started', { session_id: l }));
}
function Jc(l, u, s, v) {
  if (Pe) {
    if (en && $n) {
      const w = Math.round((Date.now() - en) / 1e3);
      (dr('step_completed', { step_id: l, step_index: s - 1, time_spent: w, total_steps: v }),
        Pe.stepsCompleted.push(l),
        (Pe.totalTime += w));
    }
    ((en = Date.now()),
      ($n = u),
      (Pe.currentStep = u),
      dr('step_changed', { from_step: l, to_step: u, step_index: s, total_steps: v }));
  }
}
function eu(l, u) {
  Pe &&
    ((Pe.problematicFields[l] = (Pe.problematicFields[l] || 0) + 1),
    dr('field_error', { field_name: l, error_message: u, error_count: Pe.problematicFields[l] }));
}
function ef(l, u) {
  dr('field_completed', { field_name: l, step_id: u });
}
function tf(l, u) {
  if (!Pe) return;
  const s = Math.round((Date.now() - Pe.startTime) / 1e3),
    v = ['services', 'shippingRoute', 'shippingCargo', 'contact'],
    w = (Pe.stepsCompleted.length / v.length) * 100;
  dr('form_submitted', {
    submission_id: l,
    session_id: Pe.sessionId,
    total_time: s,
    completion_rate: w,
    steps_completed: Pe.stepsCompleted.length,
    problematic_fields: Object.keys(Pe.problematicFields),
    error_count: Object.values(Pe.problematicFields).reduce((k, p) => k + p, 0),
  });
  const S = Object.entries(Pe.problematicFields)
    .sort(([, k], [, p]) => p - k)
    .slice(0, 5);
  S.length > 0 &&
    dr('form_problematic_fields', {
      submission_id: l,
      fields: S.map(([k]) => k),
      error_counts: S.map(([, k]) => k),
    });
}
function rf() {
  if (!Pe || !$n) return;
  const l = en ? Math.round((Date.now() - en) / 1e3) : 0,
    u = Math.round((Date.now() - Pe.startTime) / 1e3);
  dr('form_abandoned', {
    session_id: Pe.sessionId,
    abandoned_at_step: $n,
    step_index: Pe.stepsCompleted.length,
    time_on_current_step: l,
    total_time: u,
    steps_completed: Pe.stepsCompleted.length,
    problematic_fields: Object.keys(Pe.problematicFields),
  });
}
function dr(l, u) {
  typeof window > 'u' ||
    (typeof window.gtag == 'function' &&
      window.gtag('event', l, { event_category: 'Simple Quote Form', ...u }),
    typeof window.plausible == 'function' && window.plausible(l, { props: u }));
}
const nf = () => {
    var l, u;
    const { formData: s, setFormData: v, handleInputChange: w } = hm(),
      [S, k] = I.useState(!1),
      [p, h] = I.useState(!1),
      [R, $] = I.useState(!1),
      [M, W] = I.useState(!0),
      [Z, G] = I.useState(!0),
      [C, P] = I.useState(!0),
      [ue, de] = I.useState(!0),
      [ne, ae] = I.useState(!0),
      [ge, pe] = I.useState(!0),
      [Fe, ze] = I.useState(!0),
      [Ge, qe] = I.useState(!1),
      [ct, Me] = I.useState(null),
      [Ne, et] = I.useState(!1),
      [re, ve] = I.useState(0),
      [me, O] = I.useState(null),
      [z, A] = I.useState({}),
      [m, N] = I.useState({}),
      [K, J] = I.useState(!1),
      [ee, oe] = I.useState(null),
      [he, le] = I.useState(!1),
      [be, Ke] = I.useState(''),
      [jr, tn] = I.useState(''),
      [Sr, Bt] = I.useState(!1),
      Qn = I.useMemo(() => Mm(), []),
      Yn = I.useMemo(() => Wm(s.country), [s.country]),
      Cr = I.useRef(null),
      rn = I.useRef(null),
      Pr = I.useRef(null),
      Ht = I.useRef(null),
      Rt = I.useRef(null),
      Lr = I.useRef(null),
      Tr = I.useCallback(() => {
        const y = [Ht.current, Rt.current, Lr.current, Cr.current, rn.current, Pr.current].find(
          (E) => E !== null
        );
        y && (y.scrollIntoView({ block: 'center', behavior: 'smooth' }), y.focus());
      }, []),
      Ue = I.useCallback((y) => typeof y == 'string' && y.trim().length > 0, []),
      j = I.useCallback((y, E) => E, []),
      Qe = I.useCallback(
        (y) => {
          w(y);
          const E = y.target.name;
          (z[E] &&
            !m[E] &&
            A((X) => {
              const xe = { ...X };
              return (delete xe[E], xe);
            }),
            E === 'country' ? Ke(y.target.value) : E === 'destCity' && tn(y.target.value));
        },
        [w, z, m]
      ),
      Er =
        ((l = s.servicesRequested) == null ? void 0 : l.shipping) === void 0
          ? !0
          : s.servicesRequested.shipping,
      Be = I.useMemo(() => {
        const y = ['services'],
          E = s.servicesRequested || {};
        return (
          E.sourcing && y.push('sourcing'),
          E.warehousing && y.push('warehousing'),
          E.dropshipping && y.push('dropshipping'),
          E.qc && y.push('qc'),
          E.chinaVisits && y.push('chinaVisit'),
          Er && (y.push('shippingRoute'), y.push('shippingCargo')),
          E.other && y.push('other'),
          y.push('contact'),
          y
        );
      }, [s.servicesRequested, Er]),
      Te = I.useMemo(() => Be.length, [Be]),
      ye = Be[re] || 'services',
      Pt = I.useCallback(
        (y, E) => {
          if (!E || (typeof E == 'string' && E.trim().length === 0)) {
            N((xe) => ({ ...xe, [y]: !0 }));
            return;
          }
          N((xe) => ({ ...xe, [y]: !0 }));
          let X = { valid: !0 };
          switch (y) {
            case 'email':
              X = nu(E);
              break;
            case 'phone':
              X = iu(E);
              break;
            case 'firstName':
              X = au(E, 'First name');
              break;
            case 'country':
              X = Zo(E);
              break;
            case 'destCity':
              X = Xo(E);
              break;
            case 'totalWeight':
              X = ou(E);
              break;
          }
          !X.valid && X.error
            ? (A((xe) => ({ ...xe, [y]: X.error })), eu(y, X.error))
            : (A((xe) => {
                const Lt = { ...xe };
                return (delete Lt[y], Lt);
              }),
              E && typeof E == 'string' && E.trim().length > 0 && ef(y, ye));
        },
        [ye]
      ),
      Zn = I.useMemo(
        () =>
          ['shipping', 'sourcing', 'dropshipping', 'warehousing', 'qc', 'chinaVisits', 'other']
            .filter((y) => {
              var E;
              return (E = s.servicesRequested) == null ? void 0 : E[y];
            })
            .map((y) => {
              switch (y) {
                case 'shipping':
                  return j('serviceShippingSummary', 'Shipping from China');
                case 'sourcing':
                  return j('serviceSourcingSummary', 'Product sourcing');
                case 'dropshipping':
                  return j('serviceDropshippingSummary', 'Dropshipping & fulfillment');
                case 'warehousing':
                  return j('serviceWarehousingSummary', 'Warehousing & consolidation');
                case 'qc':
                  return j('serviceQcSummary', 'Quality control & inspections');
                case 'chinaVisits':
                  return j('serviceChinaVisitsSummary', 'China visits & trade fairs');
                case 'other':
                  return j('serviceOtherSummary', 'Other project');
                default:
                  return '';
              }
            })
            .filter(Boolean),
        [s.servicesRequested, j]
      ),
      nn =
        ((u = s.servicesRequested) == null ? void 0 : u.shipping) === void 0
          ? !0
          : s.servicesRequested.shipping,
      Xn = re === Te - 1,
      ca = re === 0,
      an = I.useCallback(() => {
        if (!Sm(ye, s)) {
          const y = es(ye, s);
          (A((E) => {
            const X = { ...E };
            return (
              Object.entries(y).forEach(([xe, Lt]) => {
                !Lt.valid && Lt.error ? ((X[xe] = Lt.error), eu(xe, Lt.error)) : delete X[xe];
              }),
              X
            );
          }),
            N((E) => {
              const X = { ...E };
              return (
                Object.keys(y).forEach((xe) => {
                  X[xe] = !0;
                }),
                X
              );
            }),
            setTimeout(() => {
              Tr();
            }, 100));
          return;
        }
        if (re < Te - 1) {
          const y = re + 1,
            E = Be[y];
          (Jc(ye, E, y, Te),
            Bt(!0),
            setTimeout(() => {
              (ve(y),
                typeof window < 'u' && window.scrollTo({ top: 0, behavior: 'smooth' }),
                setTimeout(() => Bt(!1), 50));
            }, 150));
        }
      }, [ye, s, re, Te, Tr, Be]),
      on = I.useCallback(() => {
        if (re > 0) {
          const y = re - 1,
            E = Be[y];
          (Jc(ye, E, y, Te),
            Bt(!0),
            setTimeout(() => {
              (ve(y),
                typeof window < 'u' && window.scrollTo({ top: 0, behavior: 'smooth' }),
                setTimeout(() => Bt(!1), 50));
            }, 150));
        }
      }, [re, ye, Be, Te]);
    (I.useEffect(() => {
      if (re >= Te && Te > 0) {
        ve(Te - 1);
        return;
      }
      const y = Be[re];
      if (!y || y !== ye) {
        const E = Be.indexOf(ye);
        E >= 0 ? ve(E) : re >= Te && Te > 0 ? ve(Te - 1) : re > 0 && ve(0);
      }
    }, [Te, Be, ye, re]),
      I.useEffect(() => {
        K
          ? (W(!1), G(!1), P(!1), de(!1), ae(!1), pe(!1), ze(!1))
          : (W(!0), G(!0), P(!0), de(!0), ae(!0), pe(!0), ze(!0));
      }, [K]),
      I.useEffect(() => {
        if (typeof window > 'u') return;
        const y = Ym();
        (oe(y), Jm(y));
        try {
          const E = Xm(y);
          E && v((X) => ({ ...X, ...E }));
        } catch {}
      }, []),
      I.useEffect(() => {
        if (typeof window > 'u' || me) return;
        const y = () => {
          rf();
        };
        return (
          window.addEventListener('beforeunload', y),
          () => {
            window.removeEventListener('beforeunload', y);
          }
        );
      }, [me]),
      I.useEffect(() => {
        if (typeof window > 'u' || !ee) return;
        const y = setTimeout(() => {
          try {
            const E = {
              country: s.country,
              origin: s.origin,
              mode: s.mode,
              email: s.email,
              phone: s.phone,
              phoneCountryCode: s.phoneCountryCode,
              customerType: s.customerType,
              locationType: s.locationType,
              city: s.city,
              zipCode: s.zipCode,
              destLocationType: s.destLocationType,
              destCity: s.destCity,
              destZipCode: s.destZipCode,
              destPort: s.destPort,
              firstName: s.firstName,
              lastName: s.lastName,
              companyName: s.companyName,
              shipperType: s.shipperType,
              totalWeight: s.totalWeight,
              numberOfUnits: s.numberOfUnits,
              dimensions: s.dimensions,
              weightPerUnit: s.weightPerUnit,
              goodsValue: s.goodsValue,
              goodsCurrency: s.goodsCurrency,
              isPersonalOrHazardous: s.isPersonalOrHazardous,
              areGoodsReady: s.areGoodsReady,
              goodsDescription: s.goodsDescription,
              specialRequirements: s.specialRequirements,
              remarks: s.remarks,
              incoterm: s.incoterm,
              annualVolume: s.annualVolume,
              servicesRequested: s.servicesRequested,
              sourcing: s.sourcing,
              warehousing: s.warehousing,
              dropshipping: s.dropshipping,
              qc: s.qc,
              chinaVisit: s.chinaVisit,
              otherProject: s.otherProject,
            };
            Zm(ee, E);
          } catch {}
        }, 2e3);
        return () => clearTimeout(y);
      }, [s, ee]),
      I.useEffect(() => {
        if (typeof window > 'u' || !ee) return;
        const y = setTimeout(() => {
          (le(!0),
            setTimeout(() => {
              le(!1);
            }, 2e3));
        }, 5e3);
        return () => clearTimeout(y);
      }, [s, ee]));
    const pt = I.useCallback(
        (y, E) => {
          v((X) => ({ ...X, [y]: E }));
        },
        [v]
      ),
      sn = I.useCallback(
        (y) => {
          if ((O(y), tf(y), typeof window < 'u' && ee))
            try {
              const E = `sinoSimpleFormDraft-${ee}`;
              (window.localStorage.removeItem(E),
                window.localStorage.removeItem('sinoSimpleFormSessionId'));
            } catch {}
        },
        [ee]
      ),
      ln = I.useCallback(() => {
        (O(null), ve(0), Me(null));
      }, []);
    return me
      ? i.jsx('div', {
          className: 'sino-simple-form',
          children: i.jsx(Qm, {
            submissionId: me,
            t: j,
            onStartNew: ln,
            selectedServiceLabels: Zn,
            formData: s,
          }),
        })
      : i.jsx('div', {
          className: 'sino-simple-form',
          children: i.jsxs('main', {
            role: 'main',
            'aria-label': j('formAriaLabel', 'Quote request form'),
            children: [
              he &&
                i.jsxs('div', {
                  className: 'sino-simple-form__save-notification',
                  role: 'status',
                  'aria-live': 'polite',
                  children: [
                    i.jsx('span', {
                      className: 'sino-simple-form__save-notification-icon',
                      'aria-hidden': 'true',
                      children: i.jsx('svg', {
                        width: '16',
                        height: '16',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: i.jsx('path', {
                          d: 'M20 6L9 17l-5-5',
                          stroke: 'currentColor',
                          strokeWidth: '2',
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                        }),
                      }),
                    }),
                    i.jsx('span', {
                      className: 'sino-simple-form__save-notification-text',
                      children: j('saveNotification', 'Your progress is saved'),
                    }),
                  ],
                }),
              !me && i.jsx(qm, { t: j }),
              i.jsxs('div', {
                className: `sino-simple-form__step-content${Sr ? ' sino-simple-form__step-content--transitioning' : ''}`,
                children: [
                  ye === 'services' &&
                    i.jsx(gm, {
                      formData: s,
                      setFormData: v,
                      t: j,
                      stepLabel: `Step ${re + 1}`,
                      shippingOnly: !1,
                      isQuickQuote: K,
                      setIsQuickQuote: J,
                    }),
                  ye === 'sourcing' &&
                    i.jsx(Um, {
                      formData: s,
                      setFormData: v,
                      t: j,
                      stepLabel: `Step ${re + 1}`,
                      showSourcingAdvanced: ue,
                      setShowSourcingAdvanced: de,
                      isQuickQuote: K,
                    }),
                  ye === 'warehousing' &&
                    i.jsx(Bm, {
                      formData: s,
                      setFormData: v,
                      t: j,
                      showWarehousingAdvanced: ne,
                      setShowWarehousingAdvanced: ae,
                      stepLabel: `Step ${re + 1}`,
                    }),
                  ye === 'dropshipping' &&
                    i.jsx(Hm, {
                      formData: s,
                      setFormData: v,
                      t: j,
                      showDropshippingAdvanced: ge,
                      setShowDropshippingAdvanced: pe,
                      stepLabel: `Step ${re + 1}`,
                    }),
                  ye === 'qc' &&
                    i.jsx($m, {
                      formData: s,
                      setFormData: v,
                      t: j,
                      showQcAdvanced: Fe,
                      setShowQcAdvanced: ze,
                      stepLabel: `Step ${re + 1}`,
                    }),
                  ye === 'chinaVisit' &&
                    i.jsx(Gm, {
                      formData: s,
                      setFormData: v,
                      t: j,
                      showChinaVisitLogistics: Ge,
                      setShowChinaVisitLogistics: qe,
                      stepLabel: `Step ${re + 1}`,
                    }),
                  ye === 'other' &&
                    i.jsx(Km, { formData: s, setFormData: v, t: j, stepLabel: `Step ${re + 1}` }),
                  ye === 'shippingRoute' &&
                    nn &&
                    i.jsx(i.Fragment, {
                      children: i.jsxs('section', {
                        className:
                          'sino-simple-form__section sino-simple-form__section--service-shipping',
                        children: [
                          i.jsxs('h2', {
                            className: 'sino-simple-form__section-title',
                            children: [
                              i.jsx('span', {
                                className: 'sino-simple-form__section-step',
                                children: `Step ${re + 1}`,
                              }),
                              i.jsx('span', {
                                children: j('shippingFromChinaTitle', 'Shipping from China'),
                              }),
                            ],
                          }),
                          i.jsx(Yo, {
                            stepId: 'shippingRoute',
                            formData: s,
                            currentStepIndex: re,
                            totalSteps: Te,
                            t: j,
                          }),
                          i.jsx('h3', {
                            className: 'sino-simple-form__subsection-title',
                            children: j('simpleStep1Title', 'Destination & mode'),
                          }),
                          i.jsxs('div', {
                            className: 'sino-simple-form__fields',
                            children: [
                              i.jsxs('div', {
                                className: `sino-simple-form__field sino-simple-form__field--primary${m.country && z.country ? ' sino-simple-form__field--error' : ''}${m.country && !z.country && Ue(s.country) ? ' sino-simple-form__field--success' : ''}`,
                                children: [
                                  i.jsxs('label', {
                                    className: 'sino-simple-form__label',
                                    htmlFor: 'country',
                                    children: [
                                      j('destinationCountry', 'Destination country'),
                                      i.jsx('span', {
                                        className: 'sino-simple-form__required',
                                        'aria-label': 'required',
                                        children: '*',
                                      }),
                                    ],
                                  }),
                                  i.jsxs('div', {
                                    className: 'sino-simple-form__field-wrapper',
                                    children: [
                                      i.jsx(Yc, {
                                        id: 'country',
                                        name: 'country',
                                        value: s.country,
                                        onChange: Qe,
                                        onBlur: () => {
                                          s.country &&
                                            s.country.trim().length > 0 &&
                                            Pt('country', s.country);
                                        },
                                        onSelect: (y) => {
                                          v((E) => ({ ...E, country: y }));
                                        },
                                        onSelectWithValidation: (y) => {
                                          (v((X) => ({ ...X, country: y })),
                                            Ke(y),
                                            N((X) => ({ ...X, country: !0 })));
                                          const E = Zo(y);
                                          !E.valid && E.error
                                            ? A((X) => ({ ...X, country: E.error }))
                                            : A((X) => {
                                                const xe = { ...X };
                                                return (delete xe.country, xe);
                                              });
                                        },
                                        placeholder: j(
                                          'destinationCountryPlaceholder',
                                          'France, USA, Canada…'
                                        ),
                                        options: Qn,
                                        inputRef: Cr,
                                        error: z.country,
                                        touched: m.country,
                                        isValid: !z.country && Ue(be || s.country),
                                        maxResults: 10,
                                      }),
                                      m.country &&
                                        i.jsxs(i.Fragment, {
                                          children: [
                                            z.country &&
                                              i.jsx('span', {
                                                className:
                                                  'sino-simple-form__field-icon sino-simple-form__field-icon--error',
                                                'aria-hidden': 'true',
                                                children: i.jsxs('svg', {
                                                  width: '20',
                                                  height: '20',
                                                  viewBox: '0 0 24 24',
                                                  fill: 'none',
                                                  xmlns: 'http://www.w3.org/2000/svg',
                                                  children: [
                                                    i.jsx('circle', {
                                                      cx: '12',
                                                      cy: '12',
                                                      r: '10',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                    }),
                                                    i.jsx('line', {
                                                      x1: '12',
                                                      y1: '8',
                                                      x2: '12',
                                                      y2: '12',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                      strokeLinecap: 'round',
                                                    }),
                                                    i.jsx('line', {
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
                                            !z.country &&
                                              Ue(s.country) &&
                                              i.jsx('span', {
                                                className:
                                                  'sino-simple-form__field-icon sino-simple-form__field-icon--success',
                                                'aria-hidden': 'true',
                                                children: i.jsxs('svg', {
                                                  width: '20',
                                                  height: '20',
                                                  viewBox: '0 0 24 24',
                                                  fill: 'none',
                                                  xmlns: 'http://www.w3.org/2000/svg',
                                                  children: [
                                                    i.jsx('circle', {
                                                      cx: '12',
                                                      cy: '12',
                                                      r: '10',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                    }),
                                                    i.jsx('path', {
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
                                  z.country &&
                                    i.jsx('p', {
                                      id: 'country-error',
                                      className: 'sino-simple-form__field-error',
                                      role: 'alert',
                                      'aria-live': 'polite',
                                      children: z.country,
                                    }),
                                  m.country &&
                                    !z.country &&
                                    Ue(s.country) &&
                                    i.jsx('p', {
                                      id: 'country-success',
                                      className: 'sino-simple-form__sr-only',
                                      'aria-live': 'polite',
                                      children: j('fieldValid', 'Field is valid'),
                                    }),
                                ],
                              }),
                              i.jsxs('div', {
                                className: `sino-simple-form__field sino-simple-form__field--primary${m.destCity && z.destCity ? ' sino-simple-form__field--error' : ''}${m.destCity && !z.destCity && Ue(s.destCity) ? ' sino-simple-form__field--success' : ''}`,
                                children: [
                                  i.jsxs('label', {
                                    className: 'sino-simple-form__label',
                                    htmlFor: 'destCity',
                                    children: [
                                      j('destinationCityOrPort', 'City or port'),
                                      i.jsx('span', {
                                        className: 'sino-simple-form__required',
                                        'aria-label': 'required',
                                        children: '*',
                                      }),
                                    ],
                                  }),
                                  i.jsxs('div', {
                                    className: 'sino-simple-form__field-wrapper',
                                    children: [
                                      i.jsx(Yc, {
                                        id: 'destCity',
                                        name: 'destCity',
                                        value: s.destCity,
                                        onChange: Qe,
                                        onBlur: () => {
                                          s.destCity &&
                                            s.destCity.trim().length > 0 &&
                                            Pt('destCity', s.destCity);
                                        },
                                        onSelectWithValidation: (y) => {
                                          (v((X) => ({ ...X, destCity: y })),
                                            tn(y),
                                            N((X) => ({ ...X, destCity: !0 })));
                                          const E = Xo(y);
                                          !E.valid && E.error
                                            ? A((X) => ({ ...X, destCity: E.error }))
                                            : A((X) => {
                                                const xe = { ...X };
                                                return (delete xe.destCity, xe);
                                              });
                                        },
                                        placeholder: j(
                                          'destinationCityPlaceholder',
                                          'e.g. Paris, Le Havre…'
                                        ),
                                        options: Yn,
                                        inputRef: rn,
                                        error: z.destCity,
                                        touched: m.destCity,
                                        isValid: !z.destCity && Ue(jr || s.destCity),
                                        maxResults: 8,
                                      }),
                                      m.destCity &&
                                        i.jsxs(i.Fragment, {
                                          children: [
                                            z.destCity &&
                                              i.jsx('span', {
                                                className:
                                                  'sino-simple-form__field-icon sino-simple-form__field-icon--error',
                                                'aria-hidden': 'true',
                                                'aria-label': j('fieldError', 'Error'),
                                                children: i.jsxs('svg', {
                                                  width: '20',
                                                  height: '20',
                                                  viewBox: '0 0 24 24',
                                                  fill: 'none',
                                                  xmlns: 'http://www.w3.org/2000/svg',
                                                  children: [
                                                    i.jsx('circle', {
                                                      cx: '12',
                                                      cy: '12',
                                                      r: '10',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                    }),
                                                    i.jsx('line', {
                                                      x1: '12',
                                                      y1: '8',
                                                      x2: '12',
                                                      y2: '12',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                      strokeLinecap: 'round',
                                                    }),
                                                    i.jsx('line', {
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
                                            !z.destCity &&
                                              Ue(s.destCity) &&
                                              i.jsx('span', {
                                                className:
                                                  'sino-simple-form__field-icon sino-simple-form__field-icon--success',
                                                'aria-hidden': 'true',
                                                'aria-label': j('fieldValid', 'Field is valid'),
                                                children: i.jsxs('svg', {
                                                  width: '20',
                                                  height: '20',
                                                  viewBox: '0 0 24 24',
                                                  fill: 'none',
                                                  xmlns: 'http://www.w3.org/2000/svg',
                                                  children: [
                                                    i.jsx('circle', {
                                                      cx: '12',
                                                      cy: '12',
                                                      r: '10',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                    }),
                                                    i.jsx('path', {
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
                                  z.destCity &&
                                    i.jsx('p', {
                                      id: 'destCity-error',
                                      className: 'sino-simple-form__field-error',
                                      role: 'alert',
                                      'aria-live': 'polite',
                                      children: z.destCity,
                                    }),
                                  m.destCity &&
                                    !z.destCity &&
                                    Ue(s.destCity) &&
                                    i.jsx('p', {
                                      id: 'destCity-success',
                                      className: 'sino-simple-form__sr-only',
                                      'aria-live': 'polite',
                                      children: j('fieldValid', 'Field is valid'),
                                    }),
                                ],
                              }),
                            ],
                          }),
                          i.jsxs('div', {
                            className: `sino-simple-form__subsection${M ? ' sino-simple-form__subsection--open' : ''}`,
                            children: [
                              i.jsxs('button', {
                                type: 'button',
                                className: 'sino-simple-form__subsection-toggle',
                                onClick: () => W((y) => !y),
                                'aria-expanded': M,
                                'aria-controls': 'destination-details-content',
                                'aria-label': M
                                  ? j('collapseSection', 'Collapse destination details')
                                  : j('expandSection', 'Expand destination details'),
                                onKeyDown: (y) => {
                                  (y.key === 'Enter' || y.key === ' ') &&
                                    (y.preventDefault(), W((E) => !E));
                                },
                                children: [
                                  i.jsxs('span', {
                                    className: 'sino-simple-form__subsection-label',
                                    children: [
                                      j(
                                        'destinationDetailsTitle',
                                        'Advanced delivery details (optional)'
                                      ),
                                      i.jsx('small', {
                                        children: j(
                                          'destinationDetailsSubtitle',
                                          'Helps us refine delivery but you can skip this for now.'
                                        ),
                                      }),
                                    ],
                                  }),
                                  i.jsx('span', {
                                    className: `sino-simple-form__subsection-chevron${M ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                                    children: '▾',
                                  }),
                                ],
                              }),
                              M &&
                                i.jsxs('div', {
                                  id: 'destination-details-content',
                                  className:
                                    'sino-simple-form__fields sino-simple-form__fields--rows',
                                  children: [
                                    i.jsxs('div', {
                                      className: 'sino-simple-form__field',
                                      children: [
                                        i.jsx('label', {
                                          className: 'sino-simple-form__label',
                                          children: j(
                                            'destinationLocationType',
                                            'Delivery location type'
                                          ),
                                        }),
                                        i.jsx('input', {
                                          className: 'sino-simple-form__input',
                                          type: 'text',
                                          name: 'destLocationType',
                                          value: s.destLocationType,
                                          onChange: Qe,
                                          placeholder: j(
                                            'destinationLocationTypePlaceholder',
                                            'Port, warehouse, home address…'
                                          ),
                                        }),
                                      ],
                                    }),
                                    i.jsxs('div', {
                                      className: 'sino-simple-form__field',
                                      children: [
                                        i.jsx('label', {
                                          className: 'sino-simple-form__label',
                                          children: j('destinationZipCode', 'ZIP / postal code'),
                                        }),
                                        i.jsx('input', {
                                          className: 'sino-simple-form__input',
                                          type: 'text',
                                          name: 'destZipCode',
                                          value: s.destZipCode,
                                          onChange: Qe,
                                          placeholder: j(
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
                          i.jsx('div', {
                            className:
                              'sino-simple-form__fields sino-simple-form__fields--rows sino-simple-form__fields--m-top',
                            children: i.jsxs('div', {
                              className: 'sino-simple-form__field',
                              children: [
                                i.jsx('label', {
                                  className: 'sino-simple-form__label',
                                  children: j('shippingMode', 'Preferred mode'),
                                }),
                                i.jsx('div', {
                                  className: 'sino-simple-form__chips',
                                  children: [
                                    {
                                      value: 'Sea',
                                      label: 'Sea',
                                      tooltip: j(
                                        'modeSeaHelp',
                                        'Best for large volumes and lower cost when you have a few weeks.'
                                      ),
                                    },
                                    {
                                      value: 'Air',
                                      label: 'Air',
                                      tooltip: j(
                                        'modeAirHelp',
                                        'Faster than sea, ideal for smaller, time-sensitive shipments.'
                                      ),
                                    },
                                    {
                                      value: 'Railway',
                                      label: 'Railway',
                                      tooltip: j(
                                        'modeRailHelp',
                                        'Balanced option Europe–China: faster than sea, cheaper than air.'
                                      ),
                                    },
                                    {
                                      value: 'Express',
                                      label: 'Express',
                                      tooltip: j(
                                        'modeExpressHelp',
                                        'Door‑to‑door courier (DHL/UPS/FedEx) for urgent small parcels.'
                                      ),
                                    },
                                  ].map((y) =>
                                    i.jsx(
                                      'button',
                                      {
                                        type: 'button',
                                        className: `sino-simple-chip${s.mode === y.value ? ' sino-simple-chip--active' : ''}`,
                                        'data-tooltip': y.tooltip,
                                        onClick: () =>
                                          v((E) => ({
                                            ...E,
                                            mode: E.mode === y.value ? '' : y.value,
                                          })),
                                        'aria-pressed': s.mode === y.value ? 'true' : 'false',
                                        'aria-label': `${y.label}${s.mode === y.value ? ', selected' : ', not selected'}. ${y.tooltip}`,
                                        onKeyDown: (E) => {
                                          (E.key === 'Enter' || E.key === ' ') &&
                                            (E.preventDefault(),
                                            v((X) => ({
                                              ...X,
                                              mode: X.mode === y.value ? '' : y.value,
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
                          i.jsx('div', {
                            className:
                              'sino-simple-form__fields sino-simple-form__fields--rows sino-simple-form__fields--m-top',
                            children: i.jsxs('div', {
                              className: 'sino-simple-form__field',
                              children: [
                                i.jsxs('label', {
                                  className: 'sino-simple-form__label',
                                  children: [
                                    j('incotermLabel', 'Trade terms (Incoterm)'),
                                    i.jsx('span', {
                                      className: 'sino-simple-form__label-hint',
                                      children: j('ifKnown', 'if known'),
                                    }),
                                  ],
                                }),
                                i.jsx('div', {
                                  className:
                                    'sino-simple-form__chips sino-simple-form__chips--wrap',
                                  children: [
                                    {
                                      value: 'EXW (Ex Work)',
                                      label: 'EXW (Ex Work)',
                                      tooltip: j(
                                        'incotermEXWTooltip',
                                        'Ex Works: You handle everything from the factory. We pick up at the supplier.'
                                      ),
                                    },
                                    {
                                      value: 'FOB (Free On Board)',
                                      label: 'FOB (Free On Board)',
                                      tooltip: j(
                                        'incotermFOBTooltip',
                                        'Free On Board: Supplier delivers to port, you handle shipping and destination costs.'
                                      ),
                                    },
                                    {
                                      value: 'CIF (Cost Insurance and Freight)',
                                      label: 'CIF (Cost Insurance and Freight)',
                                      tooltip: j(
                                        'incotermCIFTooltip',
                                        'Cost, Insurance & Freight: Supplier pays shipping to your port, you handle destination.'
                                      ),
                                    },
                                    {
                                      value: 'CFR (Cost & Freight)',
                                      label: 'CFR (Cost & Freight)',
                                      tooltip: j(
                                        'incotermCFRTooltip',
                                        'Cost and Freight: Supplier pays shipping to your port.'
                                      ),
                                    },
                                    {
                                      value: 'DAT (Delivery at Terminal)',
                                      label: 'DAT (Delivery at Terminal)',
                                      tooltip: j(
                                        'incotermDATTooltip',
                                        'Delivered At Terminal: Delivered at a named terminal at destination.'
                                      ),
                                    },
                                    {
                                      value: "I don't know yet",
                                      label: "I don't know yet",
                                      tooltip: j(
                                        'incotermNotSureTooltip',
                                        "No problem! We'll help you choose the best option based on your needs."
                                      ),
                                    },
                                  ].map((y) =>
                                    i.jsx(
                                      'button',
                                      {
                                        type: 'button',
                                        className: `sino-simple-chip${s.incoterm === y.value ? ' sino-simple-chip--active' : ''}`,
                                        'data-tooltip': y.tooltip,
                                        'aria-pressed': s.incoterm === y.value ? 'true' : 'false',
                                        onClick: () =>
                                          v((E) => ({
                                            ...E,
                                            incoterm: E.incoterm === y.value ? '' : y.value,
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
                          i.jsx('h3', {
                            className: 'sino-simple-form__subsection-title',
                            children: j('simpleStep2Title', 'Pickup in China'),
                          }),
                          i.jsxs('div', {
                            className: 'sino-simple-form__fields sino-simple-form__fields--rows',
                            children: [
                              i.jsxs('div', {
                                className:
                                  'sino-simple-form__field sino-simple-form__field--primary',
                                children: [
                                  i.jsx('label', {
                                    className: 'sino-simple-form__label',
                                    htmlFor: 'city',
                                    children: j('originCity', 'City in China'),
                                  }),
                                  i.jsx('input', {
                                    className: 'sino-simple-form__input',
                                    type: 'text',
                                    name: 'city',
                                    id: 'city',
                                    value: s.city,
                                    onChange: Qe,
                                    placeholder: j(
                                      'originCityPlaceholder',
                                      'e.g. Shenzhen, Guangzhou…'
                                    ),
                                  }),
                                  i.jsx('p', {
                                    className: 'sino-simple-form__help',
                                    children: j(
                                      'originCityHelp',
                                      'City is enough for now. You can skip the pickup details below if you prefer.'
                                    ),
                                  }),
                                ],
                              }),
                              i.jsxs('div', {
                                className: `sino-simple-form__subsection${Z ? ' sino-simple-form__subsection--open' : ''}`,
                                children: [
                                  i.jsxs('button', {
                                    type: 'button',
                                    className: 'sino-simple-form__subsection-toggle',
                                    onClick: () => G((y) => !y),
                                    'aria-expanded': Z,
                                    'aria-controls': 'origin-details-content',
                                    'aria-label': Z
                                      ? j('collapseSection', 'Collapse origin details')
                                      : j('expandSection', 'Expand origin details'),
                                    onKeyDown: (y) => {
                                      (y.key === 'Enter' || y.key === ' ') &&
                                        (y.preventDefault(), G((E) => !E));
                                    },
                                    children: [
                                      i.jsxs('span', {
                                        className: 'sino-simple-form__subsection-label',
                                        children: [
                                          j(
                                            'originDetailsTitle',
                                            'Advanced pickup details (optional)'
                                          ),
                                          i.jsx('small', {
                                            children: j(
                                              'originDetailsSubtitle',
                                              'Useful for door pickup but optional at this stage.'
                                            ),
                                          }),
                                        ],
                                      }),
                                      i.jsx('span', {
                                        className: `sino-simple-form__subsection-chevron${Z ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                                        children: '▾',
                                      }),
                                    ],
                                  }),
                                  Z &&
                                    i.jsxs('div', {
                                      id: 'origin-details-content',
                                      className:
                                        'sino-simple-form__fields sino-simple-form__fields--rows',
                                      children: [
                                        i.jsxs('div', {
                                          className: 'sino-simple-form__field',
                                          children: [
                                            i.jsx('label', {
                                              className: 'sino-simple-form__label',
                                              children: j(
                                                'originLocationType',
                                                'Pickup location type'
                                              ),
                                            }),
                                            i.jsx('input', {
                                              className: 'sino-simple-form__input',
                                              type: 'text',
                                              name: 'locationType',
                                              value: s.locationType,
                                              onChange: Qe,
                                              placeholder: j(
                                                'originLocationTypePlaceholder',
                                                'Factory, warehouse, port…'
                                              ),
                                            }),
                                          ],
                                        }),
                                        i.jsx('div', {
                                          className: 'sino-simple-form__field',
                                          children: i.jsx('div', {
                                            className: 'sino-simple-form__chips',
                                            children: i.jsx('button', {
                                              type: 'button',
                                              className: `sino-simple-chip${s.locationType === j('originLocationTypeUnknownValue', 'To be confirmed with supplier') ? ' sino-simple-chip--active' : ''}`,
                                              onClick: () =>
                                                v((y) => ({
                                                  ...y,
                                                  locationType: j(
                                                    'originLocationTypeUnknownValue',
                                                    'To be confirmed with supplier'
                                                  ),
                                                })),
                                              'aria-pressed':
                                                s.locationType ===
                                                j(
                                                  'originLocationTypeUnknownValue',
                                                  'To be confirmed with supplier'
                                                )
                                                  ? 'true'
                                                  : 'false',
                                              'aria-label': `${j('originLocationTypeUnknown', "I'm still discussing with my supplier")}${s.locationType === j('originLocationTypeUnknownValue', 'To be confirmed with supplier') ? ', selected' : ', not selected'}`,
                                              onKeyDown: (y) => {
                                                (y.key === 'Enter' || y.key === ' ') &&
                                                  (y.preventDefault(),
                                                  v((E) => ({
                                                    ...E,
                                                    locationType: j(
                                                      'originLocationTypeUnknownValue',
                                                      'To be confirmed with supplier'
                                                    ),
                                                  })));
                                              },
                                              children: j(
                                                'originLocationTypeUnknown',
                                                "I'm still discussing with my supplier"
                                              ),
                                            }),
                                          }),
                                        }),
                                        i.jsxs('div', {
                                          className: 'sino-simple-form__field',
                                          children: [
                                            i.jsx('label', {
                                              className: 'sino-simple-form__label',
                                              children: j(
                                                'originZipCode',
                                                'ZIP / postal code in China'
                                              ),
                                            }),
                                            i.jsx('input', {
                                              className: 'sino-simple-form__input',
                                              type: 'text',
                                              name: 'zipCode',
                                              value: s.zipCode,
                                              onChange: Qe,
                                              placeholder: j(
                                                'originZipCodePlaceholder',
                                                'e.g. 518000'
                                              ),
                                            }),
                                          ],
                                        }),
                                        i.jsxs('div', {
                                          className: 'sino-simple-form__field',
                                          children: [
                                            i.jsxs('label', {
                                              className: 'sino-simple-form__label',
                                              children: [
                                                j('originPort', 'Port of loading'),
                                                i.jsx('span', {
                                                  className: 'sino-simple-form__label-hint',
                                                  children: j('ifKnown', 'if known'),
                                                }),
                                              ],
                                            }),
                                            i.jsx('input', {
                                              className: 'sino-simple-form__input',
                                              type: 'text',
                                              name: 'origin',
                                              value: s.origin,
                                              onChange: Qe,
                                              placeholder: j(
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
                  ye === 'shippingCargo' &&
                    nn &&
                    i.jsxs('section', {
                      className:
                        'sino-simple-form__section sino-simple-form__section--service-shipping',
                      children: [
                        i.jsxs('h2', {
                          className: 'sino-simple-form__section-title',
                          children: [
                            i.jsx('span', {
                              className: 'sino-simple-form__section-step',
                              children: `Step ${re + 1}`,
                            }),
                            i.jsx('span', { children: j('simpleStep3Title', 'Cargo details') }),
                          ],
                        }),
                        i.jsx(Yo, {
                          stepId: 'shippingCargo',
                          formData: s,
                          currentStepIndex: re,
                          totalSteps: Te,
                          t: j,
                        }),
                        i.jsx('p', {
                          className: 'sino-simple-form__hint',
                          children: j(
                            'simpleStep3Hint',
                            'A short description, an approximate weight and a rough number of cartons/pallets is enough for a first quote.'
                          ),
                        }),
                        i.jsx('p', {
                          className: 'sino-simple-form__hint sino-simple-form__hint--secondary',
                          children: j(
                            'simpleStep3ImpactHint',
                            'These 4 fields have the biggest impact on your rates: route, mode, total weight and when the goods are ready.'
                          ),
                        }),
                        i.jsxs('div', {
                          className: 'sino-simple-form__fields sino-simple-form__fields--rows',
                          children: [
                            i.jsxs('div', {
                              className: 'sino-simple-form__field sino-simple-form__field--primary',
                              children: [
                                i.jsx('label', {
                                  className: 'sino-simple-form__label',
                                  htmlFor: 'goodsDescription',
                                  children: j('goodsDescription', 'What are you shipping?'),
                                }),
                                i.jsx('input', {
                                  className: 'sino-simple-form__input',
                                  type: 'text',
                                  name: 'goodsDescription',
                                  id: 'goodsDescription',
                                  value: s.goodsDescription,
                                  onChange: Qe,
                                  placeholder: j(
                                    'goodsDescriptionPlaceholder',
                                    'e.g. electronics, furniture, clothing…'
                                  ),
                                }),
                              ],
                            }),
                            i.jsxs('div', {
                              className: `sino-simple-form__field sino-simple-form__field--primary${m.totalWeight && z.totalWeight ? ' sino-simple-form__field--error' : ''}${m.totalWeight && !z.totalWeight && Ue(s.totalWeight) ? ' sino-simple-form__field--success' : ''}`,
                              children: [
                                i.jsxs('label', {
                                  className: 'sino-simple-form__label',
                                  htmlFor: 'totalWeight',
                                  children: [
                                    j('totalWeight', 'Total Weight (kg)'),
                                    i.jsx('span', {
                                      className: 'sino-simple-form__required',
                                      'aria-label': 'required',
                                      children: '*',
                                    }),
                                  ],
                                }),
                                i.jsxs('div', {
                                  className: 'sino-simple-form__field-wrapper',
                                  children: [
                                    i.jsx('input', {
                                      className: `sino-simple-form__input${z.totalWeight ? ' sino-simple-form__input--error' : ''}${m.totalWeight && !z.totalWeight && Ue(s.totalWeight) ? ' sino-simple-form__input--success' : ''}`,
                                      type: 'text',
                                      id: 'totalWeight',
                                      name: 'totalWeight',
                                      ref: Pr,
                                      value: s.totalWeight,
                                      onChange: (y) => {
                                        (pt('totalWeight', y.target.value),
                                          z.totalWeight &&
                                            A((E) => {
                                              const X = { ...E };
                                              return (delete X.totalWeight, X);
                                            }));
                                      },
                                      onBlur: () => Pt('totalWeight', s.totalWeight),
                                      placeholder: j('totalWeightPlaceholder', 'e.g. 1 200'),
                                      'aria-label': j('totalWeight', 'Estimated total weight'),
                                      'aria-describedby': z.totalWeight
                                        ? 'totalWeight-error'
                                        : m.totalWeight && !z.totalWeight && Ue(s.totalWeight)
                                          ? 'totalWeight-success'
                                          : void 0,
                                      'aria-invalid': z.totalWeight ? 'true' : 'false',
                                      'aria-required': 'true',
                                    }),
                                    m.totalWeight &&
                                      i.jsxs(i.Fragment, {
                                        children: [
                                          z.totalWeight &&
                                            i.jsx('span', {
                                              className:
                                                'sino-simple-form__field-icon sino-simple-form__field-icon--error',
                                              'aria-hidden': 'true',
                                              children: i.jsxs('svg', {
                                                width: '20',
                                                height: '20',
                                                viewBox: '0 0 24 24',
                                                fill: 'none',
                                                xmlns: 'http://www.w3.org/2000/svg',
                                                children: [
                                                  i.jsx('circle', {
                                                    cx: '12',
                                                    cy: '12',
                                                    r: '10',
                                                    stroke: 'currentColor',
                                                    strokeWidth: '2',
                                                  }),
                                                  i.jsx('line', {
                                                    x1: '12',
                                                    y1: '8',
                                                    x2: '12',
                                                    y2: '12',
                                                    stroke: 'currentColor',
                                                    strokeWidth: '2',
                                                    strokeLinecap: 'round',
                                                  }),
                                                  i.jsx('line', {
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
                                          !z.totalWeight &&
                                            Ue(s.totalWeight) &&
                                            i.jsx('span', {
                                              className:
                                                'sino-simple-form__field-icon sino-simple-form__field-icon--success',
                                              'aria-hidden': 'true',
                                              children: i.jsxs('svg', {
                                                width: '20',
                                                height: '20',
                                                viewBox: '0 0 24 24',
                                                fill: 'none',
                                                xmlns: 'http://www.w3.org/2000/svg',
                                                children: [
                                                  i.jsx('circle', {
                                                    cx: '12',
                                                    cy: '12',
                                                    r: '10',
                                                    stroke: 'currentColor',
                                                    strokeWidth: '2',
                                                  }),
                                                  i.jsx('path', {
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
                                z.totalWeight &&
                                  i.jsx('p', {
                                    id: 'totalWeight-error',
                                    className: 'sino-simple-form__field-error',
                                    role: 'alert',
                                    'aria-live': 'polite',
                                    children: z.totalWeight,
                                  }),
                                m.totalWeight &&
                                  !z.totalWeight &&
                                  Ue(s.totalWeight) &&
                                  i.jsx('p', {
                                    id: 'totalWeight-success',
                                    className: 'sino-simple-form__sr-only',
                                    'aria-live': 'polite',
                                    children: j('fieldValid', 'Field is valid'),
                                  }),
                                i.jsx('p', {
                                  className: 'sino-simple-form__help',
                                  children: j(
                                    'totalWeightHelp',
                                    'Rough estimate is OK. We refine it together before booking.'
                                  ),
                                }),
                              ],
                            }),
                            i.jsxs('div', {
                              className: 'sino-simple-form__field',
                              children: [
                                i.jsx('label', {
                                  className: `sino-simple-form__label${R ? ' sino-simple-form__label--muted' : ''}`,
                                  htmlFor: 'numberOfUnits',
                                  children: j('numberOfUnits', 'Number of cartons / pallets'),
                                }),
                                i.jsxs('div', {
                                  className: 'sino-simple-form__field-input-group',
                                  children: [
                                    i.jsx('input', {
                                      className: 'sino-simple-form__input',
                                      type: 'number',
                                      min: 1,
                                      id: 'numberOfUnits',
                                      value: s.numberOfUnits,
                                      onChange: (y) => {
                                        ($(!1), pt('numberOfUnits', Number(y.target.value)));
                                      },
                                      placeholder: j('numberOfUnitsPlaceholder', 'e.g. 10 pallets'),
                                    }),
                                    i.jsx('div', {
                                      className: 'sino-simple-form__chips',
                                      children: i.jsx('button', {
                                        type: 'button',
                                        className: `sino-simple-chip${R ? ' sino-simple-chip--active' : ''}`,
                                        'aria-pressed': R ? 'true' : 'false',
                                        onClick: () => {
                                          ($(!0), pt('numberOfUnits', 0));
                                        },
                                        children: j(
                                          'numberOfUnitsUnknown',
                                          "I don't know the exact number yet"
                                        ),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            i.jsxs('div', {
                              className: 'sino-simple-form__field',
                              children: [
                                i.jsx('label', {
                                  className: `sino-simple-form__label${S ? ' sino-simple-form__label--muted' : ''}`,
                                  htmlFor: 'goodsValue',
                                  children: j('goodsValue', 'Estimated cargo value'),
                                }),
                                i.jsxs('div', {
                                  className: 'sino-simple-form__field-input-group',
                                  children: [
                                    i.jsx('input', {
                                      className: 'sino-simple-form__input',
                                      type: 'text',
                                      name: 'goodsValue',
                                      id: 'goodsValue',
                                      value: s.goodsValue,
                                      onChange: (y) => {
                                        (k(!1), Qe(y));
                                      },
                                      placeholder: j('goodsValuePlaceholder', 'e.g. 25 000'),
                                    }),
                                    i.jsx('div', {
                                      className: 'sino-simple-form__chips',
                                      children: i.jsx('button', {
                                        type: 'button',
                                        className: `sino-simple-chip${S ? ' sino-simple-chip--active' : ''}`,
                                        'aria-pressed': S ? 'true' : 'false',
                                        onClick: () => {
                                          (k(!0), v((y) => ({ ...y, goodsValue: '' })));
                                        },
                                        children: j(
                                          'goodsValueUnknown',
                                          "I don't know the value yet"
                                        ),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            i.jsxs('div', {
                              className: 'sino-simple-form__field',
                              children: [
                                i.jsx('label', {
                                  className: 'sino-simple-form__label',
                                  htmlFor: 'goodsCurrency',
                                  children: j('goodsCurrency', 'Currency'),
                                }),
                                i.jsx('input', {
                                  className: 'sino-simple-form__input',
                                  type: 'text',
                                  name: 'goodsCurrency',
                                  id: 'goodsCurrency',
                                  value: s.goodsCurrency,
                                  onChange: Qe,
                                  placeholder: j('goodsCurrencyPlaceholder', 'USD, EUR…'),
                                }),
                              ],
                            }),
                            i.jsxs('div', {
                              className: 'sino-simple-form__field sino-simple-form__field--primary',
                              children: [
                                i.jsx('label', {
                                  className: 'sino-simple-form__label',
                                  children: j('areGoodsReady', 'Are the goods ready?'),
                                }),
                                i.jsx('div', {
                                  className:
                                    'sino-simple-form__chips sino-simple-form__chips--wrap',
                                  children: [
                                    { value: 'yes', label: j('goodsReadyNow', 'Ready now') },
                                    {
                                      value: 'no_in_1_week',
                                      label: j('goodsReady1Week', 'In ~1 week'),
                                    },
                                    {
                                      value: 'no_in_2_weeks',
                                      label: j('goodsReady2Weeks', 'In ~2 weeks'),
                                    },
                                    {
                                      value: 'no_in_1_month',
                                      label: j('goodsReady1Month', 'In ~1 month'),
                                    },
                                    {
                                      value: 'no_date_set',
                                      label: j('goodsReadyNoDate', 'No date set yet'),
                                    },
                                  ].map((y) =>
                                    i.jsx(
                                      'button',
                                      {
                                        type: 'button',
                                        className: `sino-simple-chip${s.areGoodsReady === y.value ? ' sino-simple-chip--active' : ''}`,
                                        'aria-pressed':
                                          s.areGoodsReady === y.value ? 'true' : 'false',
                                        onClick: () =>
                                          v((E) => ({
                                            ...E,
                                            areGoodsReady:
                                              E.areGoodsReady === y.value ? '' : y.value,
                                          })),
                                        children: y.label,
                                      },
                                      y.value
                                    )
                                  ),
                                }),
                              ],
                            }),
                            i.jsxs('div', {
                              className: 'sino-simple-form__field',
                              children: [
                                i.jsxs('label', {
                                  className: 'sino-simple-form__label',
                                  children: [
                                    j('annualVolumeLabel', 'Rough annual volume from China'),
                                    i.jsx('span', {
                                      className: 'sino-simple-form__label-hint',
                                      children: j('ifKnown', 'if known'),
                                    }),
                                  ],
                                }),
                                i.jsx('div', {
                                  className:
                                    'sino-simple-form__chips sino-simple-form__chips--wrap',
                                  children: [
                                    { value: '50 ~ 500', label: '50 ~ 500' },
                                    { value: '501 ~ 1000', label: '501 ~ 1000' },
                                    { value: '1001 ~ 5000', label: '1001 ~ 5000' },
                                    { value: '5001+', label: '5001+' },
                                  ].map((y) =>
                                    i.jsx(
                                      'button',
                                      {
                                        type: 'button',
                                        className: `sino-simple-chip${s.annualVolume === y.value ? ' sino-simple-chip--active' : ''}`,
                                        'aria-pressed':
                                          s.annualVolume === y.value ? 'true' : 'false',
                                        onClick: () =>
                                          v((E) => ({
                                            ...E,
                                            annualVolume: E.annualVolume === y.value ? '' : y.value,
                                          })),
                                        children: y.label,
                                      },
                                      y.value
                                    )
                                  ),
                                }),
                              ],
                            }),
                            i.jsxs('div', {
                              className: 'sino-simple-form__field',
                              children: [
                                i.jsx('label', {
                                  className: 'sino-simple-form__label',
                                  children: j(
                                    'isPersonalOrHazardous',
                                    'Personal effects or hazardous goods?'
                                  ),
                                }),
                                i.jsx('div', {
                                  className: 'sino-simple-form__chips',
                                  children: [
                                    {
                                      value: !0,
                                      label: j(
                                        'personalOrHazardousYes',
                                        'Yes, personal or hazardous'
                                      ),
                                    },
                                    {
                                      value: !1,
                                      label: j(
                                        'personalOrHazardousNo',
                                        'No, standard commercial goods'
                                      ),
                                    },
                                  ].map((y) =>
                                    i.jsx(
                                      'button',
                                      {
                                        type: 'button',
                                        className: `sino-simple-chip${s.isPersonalOrHazardous === y.value ? ' sino-simple-chip--active' : ''}`,
                                        'aria-pressed':
                                          s.isPersonalOrHazardous === y.value ? 'true' : 'false',
                                        onClick: () =>
                                          v((E) => ({ ...E, isPersonalOrHazardous: y.value })),
                                        children: y.label,
                                      },
                                      String(y.value)
                                    )
                                  ),
                                }),
                                i.jsx('p', {
                                  className: 'sino-simple-form__help',
                                  children: j(
                                    'isPersonalOrHazardousHelp',
                                    'This only helps us pick the right specialist on our side – it does not change your pricing automatically.'
                                  ),
                                }),
                              ],
                            }),
                            i.jsxs('div', {
                              className: `sino-simple-form__subsection${C ? ' sino-simple-form__subsection--open' : ''}`,
                              children: [
                                i.jsxs('button', {
                                  type: 'button',
                                  className: 'sino-simple-form__subsection-toggle',
                                  onClick: () => P((y) => !y),
                                  'aria-expanded': C,
                                  'aria-controls': 'advanced-details-content',
                                  'aria-label': C
                                    ? j('collapseSection', 'Collapse advanced cargo details')
                                    : j('expandSection', 'Expand advanced cargo details'),
                                  onKeyDown: (y) => {
                                    (y.key === 'Enter' || y.key === ' ') &&
                                      (y.preventDefault(), P((E) => !E));
                                  },
                                  children: [
                                    i.jsxs('span', {
                                      className: 'sino-simple-form__subsection-label',
                                      children: [
                                        j('simpleStep4Title', 'Advanced cargo details (optional)'),
                                        i.jsx('small', {
                                          children: j(
                                            'simpleStep4Subtitle',
                                            'Dimensions and remarks help us fine-tune the quote but are not mandatory.'
                                          ),
                                        }),
                                      ],
                                    }),
                                    i.jsx('span', {
                                      className: `sino-simple-form__subsection-chevron${C ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                                      children: '▾',
                                    }),
                                  ],
                                }),
                                C &&
                                  i.jsxs('div', {
                                    id: 'advanced-details-content',
                                    className:
                                      'sino-simple-form__fields sino-simple-form__fields--rows',
                                    children: [
                                      i.jsxs('div', {
                                        className: 'sino-simple-form__field',
                                        children: [
                                          i.jsx('label', {
                                            className: `sino-simple-form__label${p ? ' sino-simple-form__label--muted' : ''}`,
                                            children: j(
                                              'dimensions',
                                              'Approximate dimensions per unit'
                                            ),
                                          }),
                                          i.jsxs('div', {
                                            className:
                                              'sino-simple-form__fields sino-simple-form__fields--inline',
                                            children: [
                                              i.jsx('input', {
                                                className: 'sino-simple-form__input',
                                                type: 'text',
                                                value: s.dimensions.length,
                                                onChange: (y) =>
                                                  pt('dimensions', {
                                                    ...s.dimensions,
                                                    length: y.target.value,
                                                  }),
                                                placeholder: j('lengthPlaceholder', 'L (cm)'),
                                              }),
                                              i.jsx('input', {
                                                className: 'sino-simple-form__input',
                                                type: 'text',
                                                value: s.dimensions.width,
                                                onChange: (y) =>
                                                  pt('dimensions', {
                                                    ...s.dimensions,
                                                    width: y.target.value,
                                                  }),
                                                placeholder: j('widthPlaceholder', 'W (cm)'),
                                              }),
                                              i.jsx('input', {
                                                className: 'sino-simple-form__input',
                                                type: 'text',
                                                value: s.dimensions.height,
                                                onChange: (y) =>
                                                  pt('dimensions', {
                                                    ...s.dimensions,
                                                    height: y.target.value,
                                                  }),
                                                placeholder: j('heightPlaceholder', 'H (cm)'),
                                              }),
                                            ],
                                          }),
                                          i.jsx('div', {
                                            className:
                                              'sino-simple-form__chips sino-simple-form__chips--wrap',
                                            children: i.jsx('button', {
                                              type: 'button',
                                              className: `sino-simple-chip${p ? ' sino-simple-chip--active' : ''}`,
                                              'aria-pressed': p ? 'true' : 'false',
                                              onClick: () => {
                                                (h(!0),
                                                  pt('dimensions', {
                                                    length: '',
                                                    width: '',
                                                    height: '',
                                                  }));
                                              },
                                              children: j(
                                                'dimensionsUnknown',
                                                "I don't know the exact dimensions yet"
                                              ),
                                            }),
                                          }),
                                        ],
                                      }),
                                      i.jsxs('div', {
                                        className: 'sino-simple-form__field',
                                        children: [
                                          i.jsxs('label', {
                                            className: 'sino-simple-form__label',
                                            children: [
                                              j('weightPerUnit', 'Weight per unit'),
                                              i.jsx('span', {
                                                className: 'sino-simple-form__label-hint',
                                                children: j('ifKnown', 'if known'),
                                              }),
                                            ],
                                          }),
                                          i.jsx('input', {
                                            className: 'sino-simple-form__input',
                                            type: 'text',
                                            value: s.weightPerUnit,
                                            onChange: (y) => {
                                              pt('weightPerUnit', y.target.value);
                                            },
                                            placeholder: j(
                                              'weightPerUnitPlaceholder',
                                              'e.g. 25 kg per pallet'
                                            ),
                                          }),
                                          i.jsx('p', {
                                            className: 'sino-simple-form__help',
                                            children: j(
                                              'weightPerUnitHelp',
                                              'If you know the weight per unit, we can calculate the total weight automatically.'
                                            ),
                                          }),
                                        ],
                                      }),
                                      i.jsx(Vm, { formData: s, setFormData: v, t: j }),
                                      i.jsxs('div', {
                                        className: 'sino-simple-form__field',
                                        children: [
                                          i.jsx('label', {
                                            className: 'sino-simple-form__label',
                                            children: j('remarks', 'Anything we should know?'),
                                          }),
                                          i.jsx('input', {
                                            className: 'sino-simple-form__input',
                                            type: 'text',
                                            name: 'remarks',
                                            value: s.remarks,
                                            onChange: Qe,
                                            placeholder: j(
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
                  ye === 'contact' &&
                    i.jsxs(i.Fragment, {
                      children: [
                        i.jsx(_m, {
                          formData: s,
                          setFormData: v,
                          t: j,
                          isFilled: Ue,
                          onChange: Qe,
                          onBlur: Pt,
                          fieldErrors: z,
                          fieldTouched: m,
                          firstNameRef: Ht,
                          emailRef: Rt,
                          phoneRef: Lr,
                          stepLabel: `Step ${re + 1}`,
                          currentStepIndex: re,
                          totalSteps: Te,
                        }),
                        i.jsx(Em, {
                          formData: s,
                          t: j,
                          selectedServiceLabels: Zn,
                          submitError: ct,
                          setSubmitError: Me,
                          isSubmitting: Ne,
                          setIsSubmitting: et,
                          scrollToFirstError: Tr,
                          onSubmissionSuccess: sn,
                          setFieldErrors: A,
                          setFieldTouched: N,
                          orderedSteps: Be,
                          onEditStep: (y) => {
                            (ve(y),
                              typeof window < 'u' &&
                                window.scrollTo({ top: 0, behavior: 'smooth' }));
                          },
                        }),
                      ],
                    }),
                ],
              }),
              i.jsx(
                zm,
                {
                  currentStep: re,
                  totalSteps: Te,
                  onNext: an,
                  onPrevious: on,
                  isFirstStep: ca,
                  isLastStep: Xn,
                  orderedSteps: Be,
                  formData: s,
                  t: j,
                },
                `nav-${Te}-${re}-${JSON.stringify(s.servicesRequested)}`
              ),
            ],
          }),
        });
  },
  Gn = new Map();
function lu(l) {
  const u = document.getElementById(l);
  if (!u) {
    console.error(`[SinoSimpleForm] Container with id "${l}" not found`);
    return;
  }
  if (Gn.has(l)) {
    console.warn(`[SinoSimpleForm] Container "${l}" is already initialized`);
    return;
  }
  u.innerHTML = '';
  const s = mm.createRoot(u);
  (s.render(
    i.jsx(I.StrictMode, {
      children: i.jsx('div', {
        className: 'sino-simple-form-root',
        children: i.jsx(pm, { children: i.jsx(nf, {}) }),
      }),
    })
  ),
    Gn.set(l, s),
    console.log(`[SinoSimpleForm] Initialized in container "${l}"`));
}
function af(l) {
  const u = Gn.get(l);
  if (!u) {
    console.warn(`[SinoSimpleForm] No instance found for container "${l}"`);
    return;
  }
  (u.unmount(), Gn.delete(l));
  const s = document.getElementById(l);
  (s && (s.innerHTML = ''), console.log(`[SinoSimpleForm] Destroyed instance in container "${l}"`));
}
function cu(l) {
  return Gn.has(l);
}
const of = { init: lu, destroy: af, isInitialized: cu };
typeof window < 'u' &&
  ((window.SinoSimpleForm = of),
  console.log('[SinoSimpleForm] Global API initialized (simple v2)'),
  window.addEventListener('DOMContentLoaded', () => {
    const l = 'sinoform-react-root';
    document.getElementById(l) && !cu(l) && lu(l);
  }));
