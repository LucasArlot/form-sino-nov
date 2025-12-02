(function () {
  const u = document.createElement('link').relList;
  if (u && u.supports && u.supports('modulepreload')) return;
  for (const b of document.querySelectorAll('link[rel="modulepreload"]')) f(b);
  new MutationObserver((b) => {
    for (const S of b)
      if (S.type === 'childList')
        for (const k of S.addedNodes) k.tagName === 'LINK' && k.rel === 'modulepreload' && f(k);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(b) {
    const S = {};
    return (
      b.integrity && (S.integrity = b.integrity),
      b.referrerPolicy && (S.referrerPolicy = b.referrerPolicy),
      b.crossOrigin === 'use-credentials'
        ? (S.credentials = 'include')
        : b.crossOrigin === 'anonymous'
          ? (S.credentials = 'omit')
          : (S.credentials = 'same-origin'),
      S
    );
  }
  function f(b) {
    if (b.ep) return;
    b.ep = !0;
    const S = s(b);
    fetch(b.href, S);
  }
})();
(function () {
  const l = document.createElement('link').relList;
  if (l && l.supports && l.supports('modulepreload')) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) s(f);
  new MutationObserver((f) => {
    for (const b of f)
      if (b.type === 'childList')
        for (const S of b.addedNodes) S.tagName === 'LINK' && S.rel === 'modulepreload' && s(S);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(f) {
    const b = {};
    return (
      f.integrity && (b.integrity = f.integrity),
      f.referrerPolicy && (b.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === 'use-credentials'
        ? (b.credentials = 'include')
        : f.crossOrigin === 'anonymous'
          ? (b.credentials = 'omit')
          : (b.credentials = 'same-origin'),
      b
    );
  }
  function s(f) {
    if (f.ep) return;
    f.ep = !0;
    const b = u(f);
    fetch(f.href, b);
  }
})();
(function () {
  const l = document.createElement('link').relList;
  if (l && l.supports && l.supports('modulepreload')) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) s(f);
  new MutationObserver((f) => {
    for (const b of f)
      if (b.type === 'childList')
        for (const S of b.addedNodes) S.tagName === 'LINK' && S.rel === 'modulepreload' && s(S);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(f) {
    const b = {};
    return (
      f.integrity && (b.integrity = f.integrity),
      f.referrerPolicy && (b.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === 'use-credentials'
        ? (b.credentials = 'include')
        : f.crossOrigin === 'anonymous'
          ? (b.credentials = 'omit')
          : (b.credentials = 'same-origin'),
      b
    );
  }
  function s(f) {
    if (f.ep) return;
    f.ep = !0;
    const b = u(f);
    fetch(f.href, b);
  }
})();
var zc = { exports: {} },
  Vr = {},
  Ic = { exports: {} },
  te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ac;
function tm() {
  if (Ac) return te;
  Ac = 1;
  var l = Symbol.for('react.element'),
    u = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    f = Symbol.for('react.strict_mode'),
    b = Symbol.for('react.profiler'),
    S = Symbol.for('react.provider'),
    k = Symbol.for('react.context'),
    h = Symbol.for('react.forward_ref'),
    g = Symbol.for('react.suspense'),
    F = Symbol.for('react.memo'),
    H = Symbol.for('react.lazy'),
    z = Symbol.iterator;
  function I(m) {
    return m === null || typeof m != 'object'
      ? null
      : ((m = (z && m[z]) || m['@@iterator']), typeof m == 'function' ? m : null);
  }
  var X = {
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
    ((this.props = m), (this.context = N), (this.refs = C), (this.updater = K || X));
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
    ((this.props = m), (this.context = N), (this.refs = C), (this.updater = K || X));
  }
  var re = (de.prototype = new ue());
  ((re.constructor = de), G(re, P.prototype), (re.isPureReactComponent = !0));
  var ae = Array.isArray,
    ge = Object.prototype.hasOwnProperty,
    fe = { current: null },
    Re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function De(m, N, K) {
    var Y,
      ee = {},
      oe = null,
      he = null;
    if (N != null)
      for (Y in (N.ref !== void 0 && (he = N.ref), N.key !== void 0 && (oe = '' + N.key), N))
        ge.call(N, Y) && !Re.hasOwnProperty(Y) && (ee[Y] = N[Y]);
    var le = arguments.length - 2;
    if (le === 1) ee.children = K;
    else if (1 < le) {
      for (var _e = Array(le), Ke = 0; Ke < le; Ke++) _e[Ke] = arguments[Ke + 2];
      ee.children = _e;
    }
    if (m && m.defaultProps)
      for (Y in ((le = m.defaultProps), le)) ee[Y] === void 0 && (ee[Y] = le[Y]);
    return { $$typeof: l, type: m, key: oe, ref: he, props: ee, _owner: fe.current };
  }
  function Ge(m, N) {
    return { $$typeof: l, type: m.type, key: N, ref: m.ref, props: m.props, _owner: m._owner };
  }
  function Be(m) {
    return typeof m == 'object' && m !== null && m.$$typeof === l;
  }
  function un(m) {
    var N = { '=': '=0', ':': '=2' };
    return (
      '$' +
      m.replace(/[=:]/g, function (K) {
        return N[K];
      })
    );
  }
  var ze = /\/+/g;
  function Ne(m, N) {
    return typeof m == 'object' && m !== null && m.key != null ? un('' + m.key) : N.toString(36);
  }
  function en(m, N, K, Y, ee) {
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
        (m = Y === '' ? '.' + Ne(he, 0) : Y),
        ae(ee)
          ? ((K = ''),
            m != null && (K = m.replace(ze, '$&/') + '/'),
            en(ee, N, K, '', function (Ke) {
              return Ke;
            }))
          : ee != null &&
            (Be(ee) &&
              (ee = Ge(
                ee,
                K +
                  (!ee.key || (he && he.key === ee.key)
                    ? ''
                    : ('' + ee.key).replace(ze, '$&/') + '/') +
                  m
              )),
            N.push(ee)),
        1
      );
    if (((he = 0), (Y = Y === '' ? '.' : Y + ':'), ae(m)))
      for (var le = 0; le < m.length; le++) {
        oe = m[le];
        var _e = Y + Ne(oe, le);
        he += en(oe, N, K, _e, ee);
      }
    else if (((_e = I(m)), typeof _e == 'function'))
      for (m = _e.call(m), le = 0; !(oe = m.next()).done; )
        ((oe = oe.value), (_e = Y + Ne(oe, le++)), (he += en(oe, N, K, _e, ee)));
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
  function ie(m, N, K) {
    if (m == null) return m;
    var Y = [],
      ee = 0;
    return (
      en(m, Y, '', '', function (oe) {
        return N.call(K, oe, ee++);
      }),
      Y
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
    A = { transition: null },
    D = { ReactCurrentDispatcher: me, ReactCurrentBatchConfig: A, ReactCurrentOwner: fe };
  function O() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (te.Children = {
      map: ie,
      forEach: function (m, N, K) {
        ie(
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
          ie(m, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (m) {
        return (
          ie(m, function (N) {
            return N;
          }) || []
        );
      },
      only: function (m) {
        if (!Be(m))
          throw Error('React.Children.only expected to receive a single React element child.');
        return m;
      },
    }),
    (te.Component = P),
    (te.Fragment = s),
    (te.Profiler = b),
    (te.PureComponent = de),
    (te.StrictMode = f),
    (te.Suspense = g),
    (te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
    (te.act = O),
    (te.cloneElement = function (m, N, K) {
      if (m == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + m + '.'
        );
      var Y = G({}, m.props),
        ee = m.key,
        oe = m.ref,
        he = m._owner;
      if (N != null) {
        if (
          (N.ref !== void 0 && ((oe = N.ref), (he = fe.current)),
          N.key !== void 0 && (ee = '' + N.key),
          m.type && m.type.defaultProps)
        )
          var le = m.type.defaultProps;
        for (_e in N)
          ge.call(N, _e) &&
            !Re.hasOwnProperty(_e) &&
            (Y[_e] = N[_e] === void 0 && le !== void 0 ? le[_e] : N[_e]);
      }
      var _e = arguments.length - 2;
      if (_e === 1) Y.children = K;
      else if (1 < _e) {
        le = Array(_e);
        for (var Ke = 0; Ke < _e; Ke++) le[Ke] = arguments[Ke + 2];
        Y.children = le;
      }
      return { $$typeof: l, type: m.type, key: ee, ref: oe, props: Y, _owner: he };
    }),
    (te.createContext = function (m) {
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
    (te.createElement = De),
    (te.createFactory = function (m) {
      var N = De.bind(null, m);
      return ((N.type = m), N);
    }),
    (te.createRef = function () {
      return { current: null };
    }),
    (te.forwardRef = function (m) {
      return { $$typeof: h, render: m };
    }),
    (te.isValidElement = Be),
    (te.lazy = function (m) {
      return { $$typeof: H, _payload: { _status: -1, _result: m }, _init: ve };
    }),
    (te.memo = function (m, N) {
      return { $$typeof: F, type: m, compare: N === void 0 ? null : N };
    }),
    (te.startTransition = function (m) {
      var N = A.transition;
      A.transition = {};
      try {
        m();
      } finally {
        A.transition = N;
      }
    }),
    (te.unstable_act = O),
    (te.useCallback = function (m, N) {
      return me.current.useCallback(m, N);
    }),
    (te.useContext = function (m) {
      return me.current.useContext(m);
    }),
    (te.useDebugValue = function () {}),
    (te.useDeferredValue = function (m) {
      return me.current.useDeferredValue(m);
    }),
    (te.useEffect = function (m, N) {
      return me.current.useEffect(m, N);
    }),
    (te.useId = function () {
      return me.current.useId();
    }),
    (te.useImperativeHandle = function (m, N, K) {
      return me.current.useImperativeHandle(m, N, K);
    }),
    (te.useInsertionEffect = function (m, N) {
      return me.current.useInsertionEffect(m, N);
    }),
    (te.useLayoutEffect = function (m, N) {
      return me.current.useLayoutEffect(m, N);
    }),
    (te.useMemo = function (m, N) {
      return me.current.useMemo(m, N);
    }),
    (te.useReducer = function (m, N, K) {
      return me.current.useReducer(m, N, K);
    }),
    (te.useRef = function (m) {
      return me.current.useRef(m);
    }),
    (te.useState = function (m) {
      return me.current.useState(m);
    }),
    (te.useSyncExternalStore = function (m, N, K) {
      return me.current.useSyncExternalStore(m, N, K);
    }),
    (te.useTransition = function () {
      return me.current.useTransition();
    }),
    (te.version = '18.3.1'),
    te
  );
}
var Wc;
function Yo() {
  return (Wc || ((Wc = 1), (Ic.exports = tm())), Ic.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oc;
function am() {
  if (Oc) return Vr;
  Oc = 1;
  var l = Yo(),
    u = Symbol.for('react.element'),
    s = Symbol.for('react.fragment'),
    f = Object.prototype.hasOwnProperty,
    b = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(h, g, F) {
    var H,
      z = {},
      I = null,
      X = null;
    (F !== void 0 && (I = '' + F),
      g.key !== void 0 && (I = '' + g.key),
      g.ref !== void 0 && (X = g.ref));
    for (H in g) f.call(g, H) && !S.hasOwnProperty(H) && (z[H] = g[H]);
    if (h && h.defaultProps) for (H in ((g = h.defaultProps), g)) z[H] === void 0 && (z[H] = g[H]);
    return { $$typeof: u, type: h, key: I, ref: X, props: z, _owner: b.current };
  }
  return ((Vr.Fragment = s), (Vr.jsx = k), (Vr.jsxs = k), Vr);
}
var $c;
function om() {
  return ($c || (($c = 1), (zc.exports = am())), zc.exports);
}
var t = om(),
  W = Yo(),
  oa = {},
  Go = { exports: {} },
  cn = {},
  Bc = { exports: {} },
  Uc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qc;
function sm() {
  return (
    qc ||
      ((qc = 1),
      (function (l) {
        function u(A, D) {
          var O = A.length;
          A.push(D);
          e: for (; 0 < O; ) {
            var m = (O - 1) >>> 1,
              N = A[m];
            if (0 < b(N, D)) ((A[m] = D), (A[O] = N), (O = m));
            else break e;
          }
        }
        function s(A) {
          return A.length === 0 ? null : A[0];
        }
        function f(A) {
          if (A.length === 0) return null;
          var D = A[0],
            O = A.pop();
          if (O !== D) {
            A[0] = O;
            e: for (var m = 0, N = A.length, K = N >>> 1; m < K; ) {
              var Y = 2 * (m + 1) - 1,
                ee = A[Y],
                oe = Y + 1,
                he = A[oe];
              if (0 > b(ee, O))
                oe < N && 0 > b(he, ee)
                  ? ((A[m] = he), (A[oe] = O), (m = oe))
                  : ((A[m] = ee), (A[Y] = O), (m = Y));
              else if (oe < N && 0 > b(he, O)) ((A[m] = he), (A[oe] = O), (m = oe));
              else break e;
            }
          }
          return D;
        }
        function b(A, D) {
          var O = A.sortIndex - D.sortIndex;
          return O !== 0 ? O : A.id - D.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var S = performance;
          l.unstable_now = function () {
            return S.now();
          };
        } else {
          var k = Date,
            h = k.now();
          l.unstable_now = function () {
            return k.now() - h;
          };
        }
        var g = [],
          F = [],
          H = 1,
          z = null,
          I = 3,
          X = !1,
          G = !1,
          C = !1,
          P = typeof setTimeout == 'function' ? setTimeout : null,
          ue = typeof clearTimeout == 'function' ? clearTimeout : null,
          de = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function re(A) {
          for (var D = s(F); D !== null; ) {
            if (D.callback === null) f(F);
            else if (D.startTime <= A) (f(F), (D.sortIndex = D.expirationTime), u(g, D));
            else break;
            D = s(F);
          }
        }
        function ae(A) {
          if (((C = !1), re(A), !G))
            if (s(g) !== null) ((G = !0), ve(ge));
            else {
              var D = s(F);
              D !== null && me(ae, D.startTime - A);
            }
        }
        function ge(A, D) {
          ((G = !1), C && ((C = !1), ue(De), (De = -1)), (X = !0));
          var O = I;
          try {
            for (re(D), z = s(g); z !== null && (!(z.expirationTime > D) || (A && !un())); ) {
              var m = z.callback;
              if (typeof m == 'function') {
                ((z.callback = null), (I = z.priorityLevel));
                var N = m(z.expirationTime <= D);
                ((D = l.unstable_now()),
                  typeof N == 'function' ? (z.callback = N) : z === s(g) && f(g),
                  re(D));
              } else f(g);
              z = s(g);
            }
            if (z !== null) var K = !0;
            else {
              var Y = s(F);
              (Y !== null && me(ae, Y.startTime - D), (K = !1));
            }
            return K;
          } finally {
            ((z = null), (I = O), (X = !1));
          }
        }
        var fe = !1,
          Re = null,
          De = -1,
          Ge = 5,
          Be = -1;
        function un() {
          return !(l.unstable_now() - Be < Ge);
        }
        function ze() {
          if (Re !== null) {
            var A = l.unstable_now();
            Be = A;
            var D = !0;
            try {
              D = Re(!0, A);
            } finally {
              D ? Ne() : ((fe = !1), (Re = null));
            }
          } else fe = !1;
        }
        var Ne;
        if (typeof de == 'function')
          Ne = function () {
            de(ze);
          };
        else if (typeof MessageChannel < 'u') {
          var en = new MessageChannel(),
            ie = en.port2;
          ((en.port1.onmessage = ze),
            (Ne = function () {
              ie.postMessage(null);
            }));
        } else
          Ne = function () {
            P(ze, 0);
          };
        function ve(A) {
          ((Re = A), fe || ((fe = !0), Ne()));
        }
        function me(A, D) {
          De = P(function () {
            A(l.unstable_now());
          }, D);
        }
        ((l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function (A) {
            A.callback = null;
          }),
          (l.unstable_continueExecution = function () {
            G || X || ((G = !0), ve(ge));
          }),
          (l.unstable_forceFrameRate = function (A) {
            0 > A || 125 < A
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Ge = 0 < A ? Math.floor(1e3 / A) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return I;
          }),
          (l.unstable_getFirstCallbackNode = function () {
            return s(g);
          }),
          (l.unstable_next = function (A) {
            switch (I) {
              case 1:
              case 2:
              case 3:
                var D = 3;
                break;
              default:
                D = I;
            }
            var O = I;
            I = D;
            try {
              return A();
            } finally {
              I = O;
            }
          }),
          (l.unstable_pauseExecution = function () {}),
          (l.unstable_requestPaint = function () {}),
          (l.unstable_runWithPriority = function (A, D) {
            switch (A) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                A = 3;
            }
            var O = I;
            I = A;
            try {
              return D();
            } finally {
              I = O;
            }
          }),
          (l.unstable_scheduleCallback = function (A, D, O) {
            var m = l.unstable_now();
            switch (
              (typeof O == 'object' && O !== null
                ? ((O = O.delay), (O = typeof O == 'number' && 0 < O ? m + O : m))
                : (O = m),
              A)
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
              (N = O + N),
              (A = {
                id: H++,
                callback: D,
                priorityLevel: A,
                startTime: O,
                expirationTime: N,
                sortIndex: -1,
              }),
              O > m
                ? ((A.sortIndex = O),
                  u(F, A),
                  s(g) === null &&
                    A === s(F) &&
                    (C ? (ue(De), (De = -1)) : (C = !0), me(ae, O - m)))
                : ((A.sortIndex = N), u(g, A), G || X || ((G = !0), ve(ge))),
              A
            );
          }),
          (l.unstable_shouldYield = un),
          (l.unstable_wrapCallback = function (A) {
            var D = I;
            return function () {
              var O = I;
              I = D;
              try {
                return A.apply(this, arguments);
              } finally {
                I = O;
              }
            };
          }));
      })(Uc)),
    Uc
  );
}
var Vc;
function lm() {
  return (Vc || ((Vc = 1), (Bc.exports = sm())), Bc.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hc;
function cm() {
  if (Hc) return cn;
  Hc = 1;
  var l = Yo(),
    u = lm();
  function s(e) {
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
  var f = new Set(),
    b = {};
  function S(e, n) {
    (k(e, n), k(e + 'Capture', n));
  }
  function k(e, n) {
    for (b[e] = n, e = 0; e < n.length; e++) f.add(n[e]);
  }
  var h = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    g = Object.prototype.hasOwnProperty,
    F =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    H = {},
    z = {};
  function I(e) {
    return g.call(z, e) ? !0 : g.call(H, e) ? !1 : F.test(e) ? (z[e] = !0) : ((H[e] = !0), !1);
  }
  function X(e, n, i, r) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof n) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return r
          ? !1
          : i !== null
            ? !i.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function G(e, n, i, r) {
    if (n === null || typeof n > 'u' || X(e, n, i, r)) return !0;
    if (r) return !1;
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
  function C(e, n, i, r, a, o, c) {
    ((this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = r),
      (this.attributeNamespace = a),
      (this.mustUseProperty = i),
      (this.propertyName = e),
      (this.type = n),
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
      var n = e[0];
      P[n] = new C(n, 1, !1, e[1], null, !1, !1);
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
      var n = e.replace(ue, de);
      P[n] = new C(n, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var n = e.replace(ue, de);
        P[n] = new C(n, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var n = e.replace(ue, de);
      P[n] = new C(n, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      P[e] = new C(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (P.xlinkHref = new C('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      P[e] = new C(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function re(e, n, i, r) {
    var a = P.hasOwnProperty(n) ? P[n] : null;
    (a !== null
      ? a.type !== 0
      : r || !(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
      (G(n, i, a, r) && (i = null),
      r || a === null
        ? I(n) && (i === null ? e.removeAttribute(n) : e.setAttribute(n, '' + i))
        : a.mustUseProperty
          ? (e[a.propertyName] = i === null ? (a.type === 3 ? !1 : '') : i)
          : ((n = a.attributeName),
            (r = a.attributeNamespace),
            i === null
              ? e.removeAttribute(n)
              : ((a = a.type),
                (i = a === 3 || (a === 4 && i === !0) ? '' : '' + i),
                r ? e.setAttributeNS(r, n, i) : e.setAttribute(n, i))));
  }
  var ae = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ge = Symbol.for('react.element'),
    fe = Symbol.for('react.portal'),
    Re = Symbol.for('react.fragment'),
    De = Symbol.for('react.strict_mode'),
    Ge = Symbol.for('react.profiler'),
    Be = Symbol.for('react.provider'),
    un = Symbol.for('react.context'),
    ze = Symbol.for('react.forward_ref'),
    Ne = Symbol.for('react.suspense'),
    en = Symbol.for('react.suspense_list'),
    ie = Symbol.for('react.memo'),
    ve = Symbol.for('react.lazy'),
    me = Symbol.for('react.offscreen'),
    A = Symbol.iterator;
  function D(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (A && e[A]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var O = Object.assign,
    m;
  function N(e) {
    if (m === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        m = (n && n[1]) || '';
      }
    return (
      `
` +
      m +
      e
    );
  }
  var K = !1;
  function Y(e, n) {
    if (!e || K) return '';
    K = !0;
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
          } catch (w) {
            var r = w;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (w) {
            r = w;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (w) {
          r = w;
        }
        e();
      }
    } catch (w) {
      if (w && r && typeof w.stack == 'string') {
        for (
          var a = w.stack.split(`
`),
            o = r.stack.split(`
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
                  var p =
                    `
` + a[c].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      p.includes('<anonymous>') &&
                      (p = p.replace('<anonymous>', e.displayName)),
                    p
                  );
                }
              while (1 <= c && 0 <= d);
            break;
          }
      }
    } finally {
      ((K = !1), (Error.prepareStackTrace = i));
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
        return ((e = Y(e.type, !1)), e);
      case 11:
        return ((e = Y(e.type.render, !1)), e);
      case 1:
        return ((e = Y(e.type, !0)), e);
      default:
        return '';
    }
  }
  function oe(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case Re:
        return 'Fragment';
      case fe:
        return 'Portal';
      case Ge:
        return 'Profiler';
      case De:
        return 'StrictMode';
      case Ne:
        return 'Suspense';
      case en:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case un:
          return (e.displayName || 'Context') + '.Consumer';
        case Be:
          return (e._context.displayName || 'Context') + '.Provider';
        case ze:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case ie:
          return ((n = e.displayName || null), n !== null ? n : oe(e.type) || 'Memo');
        case ve:
          ((n = e._payload), (e = e._init));
          try {
            return oe(e(n));
          } catch {}
      }
    return null;
  }
  function he(e) {
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
        return oe(n);
      case 8:
        return n === De ? 'StrictMode' : 'Mode';
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
  function _e(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (n === 'checkbox' || n === 'radio');
  }
  function Ke(e) {
    var n = _e(e) ? 'checked' : 'value',
      i = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      r = '' + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof i < 'u' &&
      typeof i.get == 'function' &&
      typeof i.set == 'function'
    ) {
      var a = i.get,
        o = i.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (c) {
            ((r = '' + c), o.call(this, c));
          },
        }),
        Object.defineProperty(e, n, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (c) {
            r = '' + c;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[n]);
          },
        }
      );
    }
  }
  function Si(e) {
    e._valueTracker || (e._valueTracker = Ke(e));
  }
  function ir(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var i = n.getValue(),
      r = '';
    return (
      e && (r = _e(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== i ? (n.setValue(e), !0) : !1
    );
  }
  function Ci(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Vn(e, n) {
    var i = n.checked;
    return O({}, n, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: i ?? e._wrapperState.initialChecked,
    });
  }
  function Qr(e, n) {
    var i = n.defaultValue == null ? '' : n.defaultValue,
      r = n.checked != null ? n.checked : n.defaultChecked;
    ((i = le(n.value != null ? n.value : i)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: i,
        controlled:
          n.type === 'checkbox' || n.type === 'radio' ? n.checked != null : n.value != null,
      }));
  }
  function Zr(e, n) {
    ((n = n.checked), n != null && re(e, 'checked', n, !1));
  }
  function Pi(e, n) {
    Zr(e, n);
    var i = le(n.value),
      r = n.type;
    if (i != null)
      r === 'number'
        ? ((i === 0 && e.value === '') || e.value != i) && (e.value = '' + i)
        : e.value !== '' + i && (e.value = '' + i);
    else if (r === 'submit' || r === 'reset') {
      e.removeAttribute('value');
      return;
    }
    (n.hasOwnProperty('value')
      ? Ti(e, n.type, i)
      : n.hasOwnProperty('defaultValue') && Ti(e, n.type, le(n.defaultValue)),
      n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked));
  }
  function rr(e, n, i) {
    if (n.hasOwnProperty('value') || n.hasOwnProperty('defaultValue')) {
      var r = n.type;
      if (!((r !== 'submit' && r !== 'reset') || (n.value !== void 0 && n.value !== null))) return;
      ((n = '' + e._wrapperState.initialValue),
        i || n === e.value || (e.value = n),
        (e.defaultValue = n));
    }
    ((i = e.name),
      i !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      i !== '' && (e.name = i));
  }
  function Ti(e, n, i) {
    (n !== 'number' || Ci(e.ownerDocument) !== e) &&
      (i == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + i && (e.defaultValue = '' + i));
  }
  var Hn = Array.isArray;
  function zn(e, n, i, r) {
    if (((e = e.options), n)) {
      n = {};
      for (var a = 0; a < i.length; a++) n['$' + i[a]] = !0;
      for (i = 0; i < e.length; i++)
        ((a = n.hasOwnProperty('$' + e[i].value)),
          e[i].selected !== a && (e[i].selected = a),
          a && r && (e[i].defaultSelected = !0));
    } else {
      for (i = '' + le(i), n = null, a = 0; a < e.length; a++) {
        if (e[a].value === i) {
          ((e[a].selected = !0), r && (e[a].defaultSelected = !0));
          return;
        }
        n !== null || e[a].disabled || (n = e[a]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Ei(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(s(91));
    return O({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function Li(e, n) {
    var i = n.value;
    if (i == null) {
      if (((i = n.children), (n = n.defaultValue), i != null)) {
        if (n != null) throw Error(s(92));
        if (Hn(i)) {
          if (1 < i.length) throw Error(s(93));
          i = i[0];
        }
        n = i;
      }
      (n == null && (n = ''), (i = n));
    }
    e._wrapperState = { initialValue: le(i) };
  }
  function Ue(e, n) {
    var i = le(n.value),
      r = le(n.defaultValue);
    (i != null &&
      ((i = '' + i),
      i !== e.value && (e.value = i),
      n.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
      r != null && (e.defaultValue = '' + r));
  }
  function j(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== '' && n !== null && (e.value = n);
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
  function Mi(e, n) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? Qe(n)
      : e === 'http://www.w3.org/2000/svg' && n === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var qe,
    Ee = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (n, i, r, a) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(n, i, r, a);
            });
          }
        : e;
    })(function (e, n) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = n;
      else {
        for (
          qe = qe || document.createElement('div'),
            qe.innerHTML = '<svg>' + n.valueOf().toString() + '</svg>',
            n = qe.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
      }
    });
  function ye(e, n) {
    if (n) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Tn = {
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
    Xr = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Tn).forEach(function (e) {
    Xr.forEach(function (n) {
      ((n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Tn[n] = Tn[e]));
    });
  });
  function tr(e, n, i) {
    return n == null || typeof n == 'boolean' || n === ''
      ? ''
      : i || typeof n != 'number' || n === 0 || (Tn.hasOwnProperty(e) && Tn[e])
        ? ('' + n).trim()
        : n + 'px';
  }
  function Jr(e, n) {
    e = e.style;
    for (var i in n)
      if (n.hasOwnProperty(i)) {
        var r = i.indexOf('--') === 0,
          a = tr(i, n[i], r);
        (i === 'float' && (i = 'cssFloat'), r ? e.setProperty(i, a) : (e[i] = a));
      }
  }
  var ca = O(
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
  function ar(e, n) {
    if (n) {
      if (ca[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(s(60));
        if (
          typeof n.dangerouslySetInnerHTML != 'object' ||
          !('__html' in n.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (n.style != null && typeof n.style != 'object') throw Error(s(62));
    }
  }
  function or(e, n) {
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
  var hn = null;
  function sr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var lr = null,
    y = null,
    L = null;
  function J(e) {
    if ((e = Er(e))) {
      if (typeof lr != 'function') throw Error(s(280));
      var n = e.stateNode;
      n && ((n = bt(n)), lr(e.stateNode, e.type, n));
    }
  }
  function be(e) {
    y ? (L ? L.push(e) : (L = [e])) : (y = e);
  }
  function En() {
    if (y) {
      var e = y,
        n = L;
      if (((L = y = null), J(e), n)) for (e = 0; e < n.length; e++) J(n[e]);
    }
  }
  function ns(e, n) {
    return e(n);
  }
  function is() {}
  var ua = !1;
  function rs(e, n, i) {
    if (ua) return e(n, i);
    ua = !0;
    try {
      return ns(e, n, i);
    } finally {
      ((ua = !1), (y !== null || L !== null) && (is(), En()));
    }
  }
  function cr(e, n) {
    var i = e.stateNode;
    if (i === null) return null;
    var r = bt(i);
    if (r === null) return null;
    i = r[n];
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
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != 'function') throw Error(s(231, n, typeof i));
    return i;
  }
  var da = !1;
  if (h)
    try {
      var ur = {};
      (Object.defineProperty(ur, 'passive', {
        get: function () {
          da = !0;
        },
      }),
        window.addEventListener('test', ur, ur),
        window.removeEventListener('test', ur, ur));
    } catch {
      da = !1;
    }
  function uu(e, n, i, r, a, o, c, d, p) {
    var w = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(i, w);
    } catch (E) {
      this.onError(E);
    }
  }
  var dr = !1,
    Yr = null,
    et = !1,
    ma = null,
    du = {
      onError: function (e) {
        ((dr = !0), (Yr = e));
      },
    };
  function mu(e, n, i, r, a, o, c, d, p) {
    ((dr = !1), (Yr = null), uu.apply(du, arguments));
  }
  function pu(e, n, i, r, a, o, c, d, p) {
    if ((mu.apply(this, arguments), dr)) {
      if (dr) {
        var w = Yr;
        ((dr = !1), (Yr = null));
      } else throw Error(s(198));
      et || ((et = !0), (ma = w));
    }
  }
  function pi(e) {
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
  function ts(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if ((n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)), n !== null))
        return n.dehydrated;
    }
    return null;
  }
  function as(e) {
    if (pi(e) !== e) throw Error(s(188));
  }
  function fu(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = pi(e)), n === null)) throw Error(s(188));
      return n !== e ? null : e;
    }
    for (var i = e, r = n; ; ) {
      var a = i.return;
      if (a === null) break;
      var o = a.alternate;
      if (o === null) {
        if (((r = a.return), r !== null)) {
          i = r;
          continue;
        }
        break;
      }
      if (a.child === o.child) {
        for (o = a.child; o; ) {
          if (o === i) return (as(a), e);
          if (o === r) return (as(a), n);
          o = o.sibling;
        }
        throw Error(s(188));
      }
      if (i.return !== r.return) ((i = a), (r = o));
      else {
        for (var c = !1, d = a.child; d; ) {
          if (d === i) {
            ((c = !0), (i = a), (r = o));
            break;
          }
          if (d === r) {
            ((c = !0), (r = a), (i = o));
            break;
          }
          d = d.sibling;
        }
        if (!c) {
          for (d = o.child; d; ) {
            if (d === i) {
              ((c = !0), (i = o), (r = a));
              break;
            }
            if (d === r) {
              ((c = !0), (r = o), (i = a));
              break;
            }
            d = d.sibling;
          }
          if (!c) throw Error(s(189));
        }
      }
      if (i.alternate !== r) throw Error(s(190));
    }
    if (i.tag !== 3) throw Error(s(188));
    return i.stateNode.current === i ? e : n;
  }
  function os(e) {
    return ((e = fu(e)), e !== null ? ss(e) : null);
  }
  function ss(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = ss(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var ls = u.unstable_scheduleCallback,
    cs = u.unstable_cancelCallback,
    hu = u.unstable_shouldYield,
    gu = u.unstable_requestPaint,
    Le = u.unstable_now,
    vu = u.unstable_getCurrentPriorityLevel,
    pa = u.unstable_ImmediatePriority,
    us = u.unstable_UserBlockingPriority,
    nt = u.unstable_NormalPriority,
    yu = u.unstable_LowPriority,
    ds = u.unstable_IdlePriority,
    it = null,
    Ln = null;
  function _u(e) {
    if (Ln && typeof Ln.onCommitFiberRoot == 'function')
      try {
        Ln.onCommitFiberRoot(it, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var wn = Math.clz32 ? Math.clz32 : wu,
    xu = Math.log,
    bu = Math.LN2;
  function wu(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((xu(e) / bu) | 0)) | 0);
  }
  var rt = 64,
    tt = 4194304;
  function mr(e) {
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
  function at(e, n) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var r = 0,
      a = e.suspendedLanes,
      o = e.pingedLanes,
      c = i & 268435455;
    if (c !== 0) {
      var d = c & ~a;
      d !== 0 ? (r = mr(d)) : ((o &= c), o !== 0 && (r = mr(o)));
    } else ((c = i & ~a), c !== 0 ? (r = mr(c)) : o !== 0 && (r = mr(o)));
    if (r === 0) return 0;
    if (
      n !== 0 &&
      n !== r &&
      (n & a) === 0 &&
      ((a = r & -r), (o = n & -n), a >= o || (a === 16 && (o & 4194240) !== 0))
    )
      return n;
    if (((r & 4) !== 0 && (r |= i & 16), (n = e.entangledLanes), n !== 0))
      for (e = e.entanglements, n &= r; 0 < n; )
        ((i = 31 - wn(n)), (a = 1 << i), (r |= e[i]), (n &= ~a));
    return r;
  }
  function ku(e, n) {
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
  function Nu(e, n) {
    for (
      var i = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes;
      0 < o;

    ) {
      var c = 31 - wn(o),
        d = 1 << c,
        p = a[c];
      (p === -1
        ? ((d & i) === 0 || (d & r) !== 0) && (a[c] = ku(d, n))
        : p <= n && (e.expiredLanes |= d),
        (o &= ~d));
    }
  }
  function fa(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function ms() {
    var e = rt;
    return ((rt <<= 1), (rt & 4194240) === 0 && (rt = 64), e);
  }
  function ha(e) {
    for (var n = [], i = 0; 31 > i; i++) n.push(e);
    return n;
  }
  function pr(e, n, i) {
    ((e.pendingLanes |= n),
      n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (n = 31 - wn(n)),
      (e[n] = i));
  }
  function ju(e, n) {
    var i = e.pendingLanes & ~n;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= n),
      (e.mutableReadLanes &= n),
      (e.entangledLanes &= n),
      (n = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < i; ) {
      var a = 31 - wn(i),
        o = 1 << a;
      ((n[a] = 0), (r[a] = -1), (e[a] = -1), (i &= ~o));
    }
  }
  function ga(e, n) {
    var i = (e.entangledLanes |= n);
    for (e = e.entanglements; i; ) {
      var r = 31 - wn(i),
        a = 1 << r;
      ((a & n) | (e[r] & n) && (e[r] |= n), (i &= ~a));
    }
  }
  var pe = 0;
  function ps(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var fs,
    va,
    hs,
    gs,
    vs,
    ya = !1,
    ot = [],
    Gn = null,
    Kn = null,
    Qn = null,
    fr = new Map(),
    hr = new Map(),
    Zn = [],
    Su =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function ys(e, n) {
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
        fr.delete(n.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        hr.delete(n.pointerId);
    }
  }
  function gr(e, n, i, r, a, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: n,
          domEventName: i,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [a],
        }),
        n !== null && ((n = Er(n)), n !== null && va(n)),
        e)
      : ((e.eventSystemFlags |= r),
        (n = e.targetContainers),
        a !== null && n.indexOf(a) === -1 && n.push(a),
        e);
  }
  function Cu(e, n, i, r, a) {
    switch (n) {
      case 'focusin':
        return ((Gn = gr(Gn, e, n, i, r, a)), !0);
      case 'dragenter':
        return ((Kn = gr(Kn, e, n, i, r, a)), !0);
      case 'mouseover':
        return ((Qn = gr(Qn, e, n, i, r, a)), !0);
      case 'pointerover':
        var o = a.pointerId;
        return (fr.set(o, gr(fr.get(o) || null, e, n, i, r, a)), !0);
      case 'gotpointercapture':
        return ((o = a.pointerId), hr.set(o, gr(hr.get(o) || null, e, n, i, r, a)), !0);
    }
    return !1;
  }
  function _s(e) {
    var n = fi(e.target);
    if (n !== null) {
      var i = pi(n);
      if (i !== null) {
        if (((n = i.tag), n === 13)) {
          if (((n = ts(i)), n !== null)) {
            ((e.blockedOn = n),
              vs(e.priority, function () {
                hs(i);
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
  function st(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var i = xa(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var r = new i.constructor(i.type, i);
        ((hn = r), i.target.dispatchEvent(r), (hn = null));
      } else return ((n = Er(i)), n !== null && va(n), (e.blockedOn = i), !1);
      n.shift();
    }
    return !0;
  }
  function xs(e, n, i) {
    st(e) && i.delete(n);
  }
  function Pu() {
    ((ya = !1),
      Gn !== null && st(Gn) && (Gn = null),
      Kn !== null && st(Kn) && (Kn = null),
      Qn !== null && st(Qn) && (Qn = null),
      fr.forEach(xs),
      hr.forEach(xs));
  }
  function vr(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      ya || ((ya = !0), u.unstable_scheduleCallback(u.unstable_NormalPriority, Pu)));
  }
  function yr(e) {
    function n(a) {
      return vr(a, e);
    }
    if (0 < ot.length) {
      vr(ot[0], e);
      for (var i = 1; i < ot.length; i++) {
        var r = ot[i];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Gn !== null && vr(Gn, e),
        Kn !== null && vr(Kn, e),
        Qn !== null && vr(Qn, e),
        fr.forEach(n),
        hr.forEach(n),
        i = 0;
      i < Zn.length;
      i++
    )
      ((r = Zn[i]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Zn.length && ((i = Zn[0]), i.blockedOn === null); )
      (_s(i), i.blockedOn === null && Zn.shift());
  }
  var Ri = ae.ReactCurrentBatchConfig,
    lt = !0;
  function Tu(e, n, i, r) {
    var a = pe,
      o = Ri.transition;
    Ri.transition = null;
    try {
      ((pe = 1), _a(e, n, i, r));
    } finally {
      ((pe = a), (Ri.transition = o));
    }
  }
  function Eu(e, n, i, r) {
    var a = pe,
      o = Ri.transition;
    Ri.transition = null;
    try {
      ((pe = 4), _a(e, n, i, r));
    } finally {
      ((pe = a), (Ri.transition = o));
    }
  }
  function _a(e, n, i, r) {
    if (lt) {
      var a = xa(e, n, i, r);
      if (a === null) (Ia(e, n, r, ct, i), ys(e, r));
      else if (Cu(a, e, n, i, r)) r.stopPropagation();
      else if ((ys(e, r), n & 4 && -1 < Su.indexOf(e))) {
        for (; a !== null; ) {
          var o = Er(a);
          if (
            (o !== null && fs(o), (o = xa(e, n, i, r)), o === null && Ia(e, n, r, ct, i), o === a)
          )
            break;
          a = o;
        }
        a !== null && r.stopPropagation();
      } else Ia(e, n, r, null, i);
    }
  }
  var ct = null;
  function xa(e, n, i, r) {
    if (((ct = null), (e = sr(r)), (e = fi(e)), e !== null))
      if (((n = pi(e)), n === null)) e = null;
      else if (((i = n.tag), i === 13)) {
        if (((e = ts(n)), e !== null)) return e;
        e = null;
      } else if (i === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else n !== e && (e = null);
    return ((ct = e), null);
  }
  function bs(e) {
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
          case pa:
            return 1;
          case us:
            return 4;
          case nt:
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
  var Xn = null,
    ba = null,
    ut = null;
  function ws() {
    if (ut) return ut;
    var e,
      n = ba,
      i = n.length,
      r,
      a = 'value' in Xn ? Xn.value : Xn.textContent,
      o = a.length;
    for (e = 0; e < i && n[e] === a[e]; e++);
    var c = i - e;
    for (r = 1; r <= c && n[i - r] === a[o - r]; r++);
    return (ut = a.slice(e, 1 < r ? 1 - r : void 0));
  }
  function dt(e) {
    var n = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && n === 13 && (e = 13)) : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function mt() {
    return !0;
  }
  function ks() {
    return !1;
  }
  function dn(e) {
    function n(i, r, a, o, c) {
      ((this._reactName = i),
        (this._targetInst = a),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = c),
        (this.currentTarget = null));
      for (var d in e) e.hasOwnProperty(d) && ((i = e[d]), (this[d] = i ? i(o) : o[d]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? mt
          : ks),
        (this.isPropagationStopped = ks),
        this
      );
    }
    return (
      O(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != 'unknown' && (i.returnValue = !1),
            (this.isDefaultPrevented = mt));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != 'unknown' && (i.cancelBubble = !0),
            (this.isPropagationStopped = mt));
        },
        persist: function () {},
        isPersistent: mt,
      }),
      n
    );
  }
  var Di = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    wa = dn(Di),
    _r = O({}, Di, { view: 0, detail: 0 }),
    Lu = dn(_r),
    ka,
    Na,
    xr,
    pt = O({}, _r, {
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
          : (e !== xr &&
              (xr && e.type === 'mousemove'
                ? ((ka = e.screenX - xr.screenX), (Na = e.screenY - xr.screenY))
                : (Na = ka = 0),
              (xr = e)),
            ka);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Na;
      },
    }),
    Ns = dn(pt),
    Mu = O({}, pt, { dataTransfer: 0 }),
    Ru = dn(Mu),
    Du = O({}, _r, { relatedTarget: 0 }),
    ja = dn(Du),
    Fu = O({}, Di, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zu = dn(Fu),
    Iu = O({}, Di, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Au = dn(Iu),
    Wu = O({}, Di, { data: 0 }),
    js = dn(Wu),
    Ou = {
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
    $u = {
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
    Bu = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Uu(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = Bu[e]) ? !!n[e] : !1;
  }
  function Sa() {
    return Uu;
  }
  var qu = O({}, _r, {
      key: function (e) {
        if (e.key) {
          var n = Ou[e.key] || e.key;
          if (n !== 'Unidentified') return n;
        }
        return e.type === 'keypress'
          ? ((e = dt(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? $u[e.keyCode] || 'Unidentified'
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
        return e.type === 'keypress' ? dt(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? dt(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Vu = dn(qu),
    Hu = O({}, pt, {
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
    Ss = dn(Hu),
    Gu = O({}, _r, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Sa,
    }),
    Ku = dn(Gu),
    Qu = O({}, Di, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Zu = dn(Qu),
    Xu = O({}, pt, {
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
    Ju = dn(Xu),
    Yu = [9, 13, 27, 32],
    Ca = h && 'CompositionEvent' in window,
    br = null;
  h && 'documentMode' in document && (br = document.documentMode);
  var ed = h && 'TextEvent' in window && !br,
    Cs = h && (!Ca || (br && 8 < br && 11 >= br)),
    Ps = ' ',
    Ts = !1;
  function Es(e, n) {
    switch (e) {
      case 'keyup':
        return Yu.indexOf(n.keyCode) !== -1;
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
  function Ls(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var Fi = !1;
  function nd(e, n) {
    switch (e) {
      case 'compositionend':
        return Ls(n);
      case 'keypress':
        return n.which !== 32 ? null : ((Ts = !0), Ps);
      case 'textInput':
        return ((e = n.data), e === Ps && Ts ? null : e);
      default:
        return null;
    }
  }
  function id(e, n) {
    if (Fi)
      return e === 'compositionend' || (!Ca && Es(e, n))
        ? ((e = ws()), (ut = ba = Xn = null), (Fi = !1), e)
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
        return Cs && n.locale !== 'ko' ? null : n.data;
      default:
        return null;
    }
  }
  var rd = {
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
  function Ms(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === 'input' ? !!rd[e.type] : n === 'textarea';
  }
  function Rs(e, n, i, r) {
    (be(r),
      (n = yt(n, 'onChange')),
      0 < n.length &&
        ((i = new wa('onChange', 'change', null, i, r)), e.push({ event: i, listeners: n })));
  }
  var wr = null,
    kr = null;
  function td(e) {
    Xs(e, 0);
  }
  function ft(e) {
    var n = Oi(e);
    if (ir(n)) return e;
  }
  function ad(e, n) {
    if (e === 'change') return n;
  }
  var Ds = !1;
  if (h) {
    var Pa;
    if (h) {
      var Ta = 'oninput' in document;
      if (!Ta) {
        var Fs = document.createElement('div');
        (Fs.setAttribute('oninput', 'return;'), (Ta = typeof Fs.oninput == 'function'));
      }
      Pa = Ta;
    } else Pa = !1;
    Ds = Pa && (!document.documentMode || 9 < document.documentMode);
  }
  function zs() {
    wr && (wr.detachEvent('onpropertychange', Is), (kr = wr = null));
  }
  function Is(e) {
    if (e.propertyName === 'value' && ft(kr)) {
      var n = [];
      (Rs(n, kr, e, sr(e)), rs(td, n));
    }
  }
  function od(e, n, i) {
    e === 'focusin'
      ? (zs(), (wr = n), (kr = i), wr.attachEvent('onpropertychange', Is))
      : e === 'focusout' && zs();
  }
  function sd(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return ft(kr);
  }
  function ld(e, n) {
    if (e === 'click') return ft(n);
  }
  function cd(e, n) {
    if (e === 'input' || e === 'change') return ft(n);
  }
  function ud(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var kn = typeof Object.is == 'function' ? Object.is : ud;
  function Nr(e, n) {
    if (kn(e, n)) return !0;
    if (typeof e != 'object' || e === null || typeof n != 'object' || n === null) return !1;
    var i = Object.keys(e),
      r = Object.keys(n);
    if (i.length !== r.length) return !1;
    for (r = 0; r < i.length; r++) {
      var a = i[r];
      if (!g.call(n, a) || !kn(e[a], n[a])) return !1;
    }
    return !0;
  }
  function As(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ws(e, n) {
    var i = As(e);
    e = 0;
    for (var r; i; ) {
      if (i.nodeType === 3) {
        if (((r = e + i.textContent.length), e <= n && r >= n)) return { node: i, offset: n - e };
        e = r;
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
      i = As(i);
    }
  }
  function Os(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? Os(e, n.parentNode)
            : 'contains' in e
              ? e.contains(n)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function $s() {
    for (var e = window, n = Ci(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == 'string';
      } catch {
        i = !1;
      }
      if (i) e = n.contentWindow;
      else break;
      n = Ci(e.document);
    }
    return n;
  }
  function Ea(e) {
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
    var n = $s(),
      i = e.focusedElem,
      r = e.selectionRange;
    if (n !== i && i && i.ownerDocument && Os(i.ownerDocument.documentElement, i)) {
      if (r !== null && Ea(i)) {
        if (((n = r.start), (e = r.end), e === void 0 && (e = n), 'selectionStart' in i))
          ((i.selectionStart = n), (i.selectionEnd = Math.min(e, i.value.length)));
        else if (
          ((e = ((n = i.ownerDocument || document) && n.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var a = i.textContent.length,
            o = Math.min(r.start, a);
          ((r = r.end === void 0 ? o : Math.min(r.end, a)),
            !e.extend && o > r && ((a = r), (r = o), (o = a)),
            (a = Ws(i, o)));
          var c = Ws(i, r);
          a &&
            c &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== c.node ||
              e.focusOffset !== c.offset) &&
            ((n = n.createRange()),
            n.setStart(a.node, a.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(n), e.extend(c.node, c.offset))
              : (n.setEnd(c.node, c.offset), e.addRange(n)));
        }
      }
      for (n = [], e = i; (e = e.parentNode); )
        e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof i.focus == 'function' && i.focus(), i = 0; i < n.length; i++)
        ((e = n[i]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
  }
  var md = h && 'documentMode' in document && 11 >= document.documentMode,
    zi = null,
    La = null,
    jr = null,
    Ma = !1;
  function Bs(e, n, i) {
    var r = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Ma ||
      zi == null ||
      zi !== Ci(r) ||
      ((r = zi),
      'selectionStart' in r && Ea(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (jr && Nr(jr, r)) ||
        ((jr = r),
        (r = yt(La, 'onSelect')),
        0 < r.length &&
          ((n = new wa('onSelect', 'select', null, n, i)),
          e.push({ event: n, listeners: r }),
          (n.target = zi))));
  }
  function ht(e, n) {
    var i = {};
    return (
      (i[e.toLowerCase()] = n.toLowerCase()),
      (i['Webkit' + e] = 'webkit' + n),
      (i['Moz' + e] = 'moz' + n),
      i
    );
  }
  var Ii = {
      animationend: ht('Animation', 'AnimationEnd'),
      animationiteration: ht('Animation', 'AnimationIteration'),
      animationstart: ht('Animation', 'AnimationStart'),
      transitionend: ht('Transition', 'TransitionEnd'),
    },
    Ra = {},
    Us = {};
  h &&
    ((Us = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Ii.animationend.animation,
      delete Ii.animationiteration.animation,
      delete Ii.animationstart.animation),
    'TransitionEvent' in window || delete Ii.transitionend.transition);
  function gt(e) {
    if (Ra[e]) return Ra[e];
    if (!Ii[e]) return e;
    var n = Ii[e],
      i;
    for (i in n) if (n.hasOwnProperty(i) && i in Us) return (Ra[e] = n[i]);
    return e;
  }
  var qs = gt('animationend'),
    Vs = gt('animationiteration'),
    Hs = gt('animationstart'),
    Gs = gt('transitionend'),
    Ks = new Map(),
    Qs =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Jn(e, n) {
    (Ks.set(e, n), S(n, [e]));
  }
  for (var Da = 0; Da < Qs.length; Da++) {
    var Fa = Qs[Da],
      pd = Fa.toLowerCase(),
      fd = Fa[0].toUpperCase() + Fa.slice(1);
    Jn(pd, 'on' + fd);
  }
  (Jn(qs, 'onAnimationEnd'),
    Jn(Vs, 'onAnimationIteration'),
    Jn(Hs, 'onAnimationStart'),
    Jn('dblclick', 'onDoubleClick'),
    Jn('focusin', 'onFocus'),
    Jn('focusout', 'onBlur'),
    Jn(Gs, 'onTransitionEnd'),
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
  var Sr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    hd = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Sr));
  function Zs(e, n, i) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = i), pu(r, n, void 0, e), (e.currentTarget = null));
  }
  function Xs(e, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var r = e[i],
        a = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (n)
          for (var c = r.length - 1; 0 <= c; c--) {
            var d = r[c],
              p = d.instance,
              w = d.currentTarget;
            if (((d = d.listener), p !== o && a.isPropagationStopped())) break e;
            (Zs(a, d, w), (o = p));
          }
        else
          for (c = 0; c < r.length; c++) {
            if (
              ((d = r[c]),
              (p = d.instance),
              (w = d.currentTarget),
              (d = d.listener),
              p !== o && a.isPropagationStopped())
            )
              break e;
            (Zs(a, d, w), (o = p));
          }
      }
    }
    if (et) throw ((e = ma), (et = !1), (ma = null), e);
  }
  function we(e, n) {
    var i = n[Ua];
    i === void 0 && (i = n[Ua] = new Set());
    var r = e + '__bubble';
    i.has(r) || (Js(n, e, 2, !1), i.add(r));
  }
  function za(e, n, i) {
    var r = 0;
    (n && (r |= 4), Js(i, e, r, n));
  }
  var vt = '_reactListening' + Math.random().toString(36).slice(2);
  function Cr(e) {
    if (!e[vt]) {
      ((e[vt] = !0),
        f.forEach(function (i) {
          i !== 'selectionchange' && (hd.has(i) || za(i, !1, e), za(i, !0, e));
        }));
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[vt] || ((n[vt] = !0), za('selectionchange', !1, n));
    }
  }
  function Js(e, n, i, r) {
    switch (bs(n)) {
      case 1:
        var a = Tu;
        break;
      case 4:
        a = Eu;
        break;
      default:
        a = _a;
    }
    ((i = a.bind(null, n, i, e)),
      (a = void 0),
      !da || (n !== 'touchstart' && n !== 'touchmove' && n !== 'wheel') || (a = !0),
      r
        ? a !== void 0
          ? e.addEventListener(n, i, { capture: !0, passive: a })
          : e.addEventListener(n, i, !0)
        : a !== void 0
          ? e.addEventListener(n, i, { passive: a })
          : e.addEventListener(n, i, !1));
  }
  function Ia(e, n, i, r, a) {
    var o = r;
    if ((n & 1) === 0 && (n & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var c = r.tag;
        if (c === 3 || c === 4) {
          var d = r.stateNode.containerInfo;
          if (d === a || (d.nodeType === 8 && d.parentNode === a)) break;
          if (c === 4)
            for (c = r.return; c !== null; ) {
              var p = c.tag;
              if (
                (p === 3 || p === 4) &&
                ((p = c.stateNode.containerInfo),
                p === a || (p.nodeType === 8 && p.parentNode === a))
              )
                return;
              c = c.return;
            }
          for (; d !== null; ) {
            if (((c = fi(d)), c === null)) return;
            if (((p = c.tag), p === 5 || p === 6)) {
              r = o = c;
              continue e;
            }
            d = d.parentNode;
          }
        }
        r = r.return;
      }
    rs(function () {
      var w = o,
        E = sr(i),
        M = [];
      e: {
        var T = Ks.get(e);
        if (T !== void 0) {
          var $ = wa,
            U = e;
          switch (e) {
            case 'keypress':
              if (dt(i) === 0) break e;
            case 'keydown':
            case 'keyup':
              $ = Vu;
              break;
            case 'focusin':
              ((U = 'focus'), ($ = ja));
              break;
            case 'focusout':
              ((U = 'blur'), ($ = ja));
              break;
            case 'beforeblur':
            case 'afterblur':
              $ = ja;
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
              $ = Ns;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              $ = Ru;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              $ = Ku;
              break;
            case qs:
            case Vs:
            case Hs:
              $ = zu;
              break;
            case Gs:
              $ = Zu;
              break;
            case 'scroll':
              $ = Lu;
              break;
            case 'wheel':
              $ = Ju;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              $ = Au;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              $ = Ss;
          }
          var q = (n & 4) !== 0,
            Me = !q && e === 'scroll',
            _ = q ? (T !== null ? T + 'Capture' : null) : T;
          q = [];
          for (var v = w, x; v !== null; ) {
            x = v;
            var R = x.stateNode;
            if (
              (x.tag === 5 &&
                R !== null &&
                ((x = R), _ !== null && ((R = cr(v, _)), R != null && q.push(Pr(v, R, x)))),
              Me)
            )
              break;
            v = v.return;
          }
          0 < q.length && ((T = new $(T, U, null, i, E)), M.push({ event: T, listeners: q }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (
            ((T = e === 'mouseover' || e === 'pointerover'),
            ($ = e === 'mouseout' || e === 'pointerout'),
            T && i !== hn && (U = i.relatedTarget || i.fromElement) && (fi(U) || U[In]))
          )
            break e;
          if (
            ($ || T) &&
            ((T =
              E.window === E
                ? E
                : (T = E.ownerDocument)
                  ? T.defaultView || T.parentWindow
                  : window),
            $
              ? ((U = i.relatedTarget || i.toElement),
                ($ = w),
                (U = U ? fi(U) : null),
                U !== null &&
                  ((Me = pi(U)), U !== Me || (U.tag !== 5 && U.tag !== 6)) &&
                  (U = null))
              : (($ = null), (U = w)),
            $ !== U)
          ) {
            if (
              ((q = Ns),
              (R = 'onMouseLeave'),
              (_ = 'onMouseEnter'),
              (v = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((q = Ss), (R = 'onPointerLeave'), (_ = 'onPointerEnter'), (v = 'pointer')),
              (Me = $ == null ? T : Oi($)),
              (x = U == null ? T : Oi(U)),
              (T = new q(R, v + 'leave', $, i, E)),
              (T.target = Me),
              (T.relatedTarget = x),
              (R = null),
              fi(E) === w &&
                ((q = new q(_, v + 'enter', U, i, E)),
                (q.target = x),
                (q.relatedTarget = Me),
                (R = q)),
              (Me = R),
              $ && U)
            )
              n: {
                for (q = $, _ = U, v = 0, x = q; x; x = Ai(x)) v++;
                for (x = 0, R = _; R; R = Ai(R)) x++;
                for (; 0 < v - x; ) ((q = Ai(q)), v--);
                for (; 0 < x - v; ) ((_ = Ai(_)), x--);
                for (; v--; ) {
                  if (q === _ || (_ !== null && q === _.alternate)) break n;
                  ((q = Ai(q)), (_ = Ai(_)));
                }
                q = null;
              }
            else q = null;
            ($ !== null && Ys(M, T, $, q, !1), U !== null && Me !== null && Ys(M, Me, U, q, !0));
          }
        }
        e: {
          if (
            ((T = w ? Oi(w) : window),
            ($ = T.nodeName && T.nodeName.toLowerCase()),
            $ === 'select' || ($ === 'input' && T.type === 'file'))
          )
            var V = ad;
          else if (Ms(T))
            if (Ds) V = cd;
            else {
              V = sd;
              var Q = od;
            }
          else
            ($ = T.nodeName) &&
              $.toLowerCase() === 'input' &&
              (T.type === 'checkbox' || T.type === 'radio') &&
              (V = ld);
          if (V && (V = V(e, w))) {
            Rs(M, V, i, E);
            break e;
          }
          (Q && Q(e, T, w),
            e === 'focusout' &&
              (Q = T._wrapperState) &&
              Q.controlled &&
              T.type === 'number' &&
              Ti(T, 'number', T.value));
        }
        switch (((Q = w ? Oi(w) : window), e)) {
          case 'focusin':
            (Ms(Q) || Q.contentEditable === 'true') && ((zi = Q), (La = w), (jr = null));
            break;
          case 'focusout':
            jr = La = zi = null;
            break;
          case 'mousedown':
            Ma = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Ma = !1), Bs(M, i, E));
            break;
          case 'selectionchange':
            if (md) break;
          case 'keydown':
          case 'keyup':
            Bs(M, i, E);
        }
        var Z;
        if (Ca)
          e: {
            switch (e) {
              case 'compositionstart':
                var ne = 'onCompositionStart';
                break e;
              case 'compositionend':
                ne = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                ne = 'onCompositionUpdate';
                break e;
            }
            ne = void 0;
          }
        else
          Fi
            ? Es(e, i) && (ne = 'onCompositionEnd')
            : e === 'keydown' && i.keyCode === 229 && (ne = 'onCompositionStart');
        (ne &&
          (Cs &&
            i.locale !== 'ko' &&
            (Fi || ne !== 'onCompositionStart'
              ? ne === 'onCompositionEnd' && Fi && (Z = ws())
              : ((Xn = E), (ba = 'value' in Xn ? Xn.value : Xn.textContent), (Fi = !0))),
          (Q = yt(w, ne)),
          0 < Q.length &&
            ((ne = new js(ne, e, null, i, E)),
            M.push({ event: ne, listeners: Q }),
            Z ? (ne.data = Z) : ((Z = Ls(i)), Z !== null && (ne.data = Z)))),
          (Z = ed ? nd(e, i) : id(e, i)) &&
            ((w = yt(w, 'onBeforeInput')),
            0 < w.length &&
              ((E = new js('onBeforeInput', 'beforeinput', null, i, E)),
              M.push({ event: E, listeners: w }),
              (E.data = Z))));
      }
      Xs(M, n);
    });
  }
  function Pr(e, n, i) {
    return { instance: e, listener: n, currentTarget: i };
  }
  function yt(e, n) {
    for (var i = n + 'Capture', r = []; e !== null; ) {
      var a = e,
        o = a.stateNode;
      (a.tag === 5 &&
        o !== null &&
        ((a = o),
        (o = cr(e, i)),
        o != null && r.unshift(Pr(e, o, a)),
        (o = cr(e, n)),
        o != null && r.push(Pr(e, o, a))),
        (e = e.return));
    }
    return r;
  }
  function Ai(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ys(e, n, i, r, a) {
    for (var o = n._reactName, c = []; i !== null && i !== r; ) {
      var d = i,
        p = d.alternate,
        w = d.stateNode;
      if (p !== null && p === r) break;
      (d.tag === 5 &&
        w !== null &&
        ((d = w),
        a
          ? ((p = cr(i, o)), p != null && c.unshift(Pr(i, p, d)))
          : a || ((p = cr(i, o)), p != null && c.push(Pr(i, p, d)))),
        (i = i.return));
    }
    c.length !== 0 && e.push({ event: n, listeners: c });
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
  function _t(e, n, i) {
    if (((n = el(n)), el(e) !== n && i)) throw Error(s(425));
  }
  function xt() {}
  var Aa = null,
    Wa = null;
  function Oa(e, n) {
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
  var $a = typeof setTimeout == 'function' ? setTimeout : void 0,
    yd = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    nl = typeof Promise == 'function' ? Promise : void 0,
    _d =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof nl < 'u'
          ? function (e) {
              return nl.resolve(null).then(e).catch(xd);
            }
          : $a;
  function xd(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ba(e, n) {
    var i = n,
      r = 0;
    do {
      var a = i.nextSibling;
      if ((e.removeChild(i), a && a.nodeType === 8))
        if (((i = a.data), i === '/$')) {
          if (r === 0) {
            (e.removeChild(a), yr(n));
            return;
          }
          r--;
        } else (i !== '$' && i !== '$?' && i !== '$!') || r++;
      i = a;
    } while (i);
    yr(n);
  }
  function Yn(e) {
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
  function il(e) {
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
  var Wi = Math.random().toString(36).slice(2),
    Mn = '__reactFiber$' + Wi,
    Tr = '__reactProps$' + Wi,
    In = '__reactContainer$' + Wi,
    Ua = '__reactEvents$' + Wi,
    bd = '__reactListeners$' + Wi,
    wd = '__reactHandles$' + Wi;
  function fi(e) {
    var n = e[Mn];
    if (n) return n;
    for (var i = e.parentNode; i; ) {
      if ((n = i[In] || i[Mn])) {
        if (((i = n.alternate), n.child !== null || (i !== null && i.child !== null)))
          for (e = il(e); e !== null; ) {
            if ((i = e[Mn])) return i;
            e = il(e);
          }
        return n;
      }
      ((e = i), (i = e.parentNode));
    }
    return null;
  }
  function Er(e) {
    return (
      (e = e[Mn] || e[In]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Oi(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function bt(e) {
    return e[Tr] || null;
  }
  var qa = [],
    $i = -1;
  function ei(e) {
    return { current: e };
  }
  function ke(e) {
    0 > $i || ((e.current = qa[$i]), (qa[$i] = null), $i--);
  }
  function xe(e, n) {
    ($i++, (qa[$i] = e.current), (e.current = n));
  }
  var ni = {},
    Ze = ei(ni),
    tn = ei(!1),
    hi = ni;
  function Bi(e, n) {
    var i = e.type.contextTypes;
    if (!i) return ni;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
      return r.__reactInternalMemoizedMaskedChildContext;
    var a = {},
      o;
    for (o in i) a[o] = n[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = n),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      a
    );
  }
  function an(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function wt() {
    (ke(tn), ke(Ze));
  }
  function rl(e, n, i) {
    if (Ze.current !== ni) throw Error(s(168));
    (xe(Ze, n), xe(tn, i));
  }
  function tl(e, n, i) {
    var r = e.stateNode;
    if (((n = n.childContextTypes), typeof r.getChildContext != 'function')) return i;
    r = r.getChildContext();
    for (var a in r) if (!(a in n)) throw Error(s(108, he(e) || 'Unknown', a));
    return O({}, i, r);
  }
  function kt(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ni),
      (hi = Ze.current),
      xe(Ze, e),
      xe(tn, tn.current),
      !0
    );
  }
  function al(e, n, i) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    (i
      ? ((e = tl(e, n, hi)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ke(tn),
        ke(Ze),
        xe(Ze, e))
      : ke(tn),
      xe(tn, i));
  }
  var An = null,
    Nt = !1,
    Va = !1;
  function ol(e) {
    An === null ? (An = [e]) : An.push(e);
  }
  function kd(e) {
    ((Nt = !0), ol(e));
  }
  function ii() {
    if (!Va && An !== null) {
      Va = !0;
      var e = 0,
        n = pe;
      try {
        var i = An;
        for (pe = 1; e < i.length; e++) {
          var r = i[e];
          do r = r(!0);
          while (r !== null);
        }
        ((An = null), (Nt = !1));
      } catch (a) {
        throw (An !== null && (An = An.slice(e + 1)), ls(pa, ii), a);
      } finally {
        ((pe = n), (Va = !1));
      }
    }
    return null;
  }
  var Ui = [],
    qi = 0,
    jt = null,
    St = 0,
    gn = [],
    vn = 0,
    gi = null,
    Wn = 1,
    On = '';
  function vi(e, n) {
    ((Ui[qi++] = St), (Ui[qi++] = jt), (jt = e), (St = n));
  }
  function sl(e, n, i) {
    ((gn[vn++] = Wn), (gn[vn++] = On), (gn[vn++] = gi), (gi = e));
    var r = Wn;
    e = On;
    var a = 32 - wn(r) - 1;
    ((r &= ~(1 << a)), (i += 1));
    var o = 32 - wn(n) + a;
    if (30 < o) {
      var c = a - (a % 5);
      ((o = (r & ((1 << c) - 1)).toString(32)),
        (r >>= c),
        (a -= c),
        (Wn = (1 << (32 - wn(n) + a)) | (i << a) | r),
        (On = o + e));
    } else ((Wn = (1 << o) | (i << a) | r), (On = e));
  }
  function Ha(e) {
    e.return !== null && (vi(e, 1), sl(e, 1, 0));
  }
  function Ga(e) {
    for (; e === jt; ) ((jt = Ui[--qi]), (Ui[qi] = null), (St = Ui[--qi]), (Ui[qi] = null));
    for (; e === gi; )
      ((gi = gn[--vn]),
        (gn[vn] = null),
        (On = gn[--vn]),
        (gn[vn] = null),
        (Wn = gn[--vn]),
        (gn[vn] = null));
  }
  var mn = null,
    pn = null,
    je = !1,
    Nn = null;
  function ll(e, n) {
    var i = bn(5, null, null, 0);
    ((i.elementType = 'DELETED'),
      (i.stateNode = n),
      (i.return = e),
      (n = e.deletions),
      n === null ? ((e.deletions = [i]), (e.flags |= 16)) : n.push(i));
  }
  function cl(e, n) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return (
          (n = n.nodeType !== 1 || i.toLowerCase() !== n.nodeName.toLowerCase() ? null : n),
          n !== null ? ((e.stateNode = n), (mn = e), (pn = Yn(n.firstChild)), !0) : !1
        );
      case 6:
        return (
          (n = e.pendingProps === '' || n.nodeType !== 3 ? null : n),
          n !== null ? ((e.stateNode = n), (mn = e), (pn = null), !0) : !1
        );
      case 13:
        return (
          (n = n.nodeType !== 8 ? null : n),
          n !== null
            ? ((i = gi !== null ? { id: Wn, overflow: On } : null),
              (e.memoizedState = { dehydrated: n, treeContext: i, retryLane: 1073741824 }),
              (i = bn(18, null, null, 0)),
              (i.stateNode = n),
              (i.return = e),
              (e.child = i),
              (mn = e),
              (pn = null),
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
      var n = pn;
      if (n) {
        var i = n;
        if (!cl(e, n)) {
          if (Ka(e)) throw Error(s(418));
          n = Yn(i.nextSibling);
          var r = mn;
          n && cl(e, n) ? ll(r, i) : ((e.flags = (e.flags & -4097) | 2), (je = !1), (mn = e));
        }
      } else {
        if (Ka(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (je = !1), (mn = e));
      }
    }
  }
  function ul(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    mn = e;
  }
  function Ct(e) {
    if (e !== mn) return !1;
    if (!je) return (ul(e), (je = !0), !1);
    var n;
    if (
      ((n = e.tag !== 3) &&
        !(n = e.tag !== 5) &&
        ((n = e.type), (n = n !== 'head' && n !== 'body' && !Oa(e.type, e.memoizedProps))),
      n && (n = pn))
    ) {
      if (Ka(e)) throw (dl(), Error(s(418)));
      for (; n; ) (ll(e, n), (n = Yn(n.nextSibling)));
    }
    if ((ul(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(s(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === '/$') {
              if (n === 0) {
                pn = Yn(e.nextSibling);
                break e;
              }
              n--;
            } else (i !== '$' && i !== '$!' && i !== '$?') || n++;
          }
          e = e.nextSibling;
        }
        pn = null;
      }
    } else pn = mn ? Yn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function dl() {
    for (var e = pn; e; ) e = Yn(e.nextSibling);
  }
  function Vi() {
    ((pn = mn = null), (je = !1));
  }
  function Za(e) {
    Nn === null ? (Nn = [e]) : Nn.push(e);
  }
  var Nd = ae.ReactCurrentBatchConfig;
  function Lr(e, n, i) {
    if (((e = i.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (i._owner) {
        if (((i = i._owner), i)) {
          if (i.tag !== 1) throw Error(s(309));
          var r = i.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var a = r,
          o = '' + e;
        return n !== null && n.ref !== null && typeof n.ref == 'function' && n.ref._stringRef === o
          ? n.ref
          : ((n = function (c) {
              var d = a.refs;
              c === null ? delete d[o] : (d[o] = c);
            }),
            (n._stringRef = o),
            n);
      }
      if (typeof e != 'string') throw Error(s(284));
      if (!i._owner) throw Error(s(290, e));
    }
    return e;
  }
  function Pt(e, n) {
    throw (
      (e = Object.prototype.toString.call(n)),
      Error(
        s(31, e === '[object Object]' ? 'object with keys {' + Object.keys(n).join(', ') + '}' : e)
      )
    );
  }
  function ml(e) {
    var n = e._init;
    return n(e._payload);
  }
  function pl(e) {
    function n(_, v) {
      if (e) {
        var x = _.deletions;
        x === null ? ((_.deletions = [v]), (_.flags |= 16)) : x.push(v);
      }
    }
    function i(_, v) {
      if (!e) return null;
      for (; v !== null; ) (n(_, v), (v = v.sibling));
      return null;
    }
    function r(_, v) {
      for (_ = new Map(); v !== null; )
        (v.key !== null ? _.set(v.key, v) : _.set(v.index, v), (v = v.sibling));
      return _;
    }
    function a(_, v) {
      return ((_ = ui(_, v)), (_.index = 0), (_.sibling = null), _);
    }
    function o(_, v, x) {
      return (
        (_.index = x),
        e
          ? ((x = _.alternate),
            x !== null ? ((x = x.index), x < v ? ((_.flags |= 2), v) : x) : ((_.flags |= 2), v))
          : ((_.flags |= 1048576), v)
      );
    }
    function c(_) {
      return (e && _.alternate === null && (_.flags |= 2), _);
    }
    function d(_, v, x, R) {
      return v === null || v.tag !== 6
        ? ((v = $o(x, _.mode, R)), (v.return = _), v)
        : ((v = a(v, x)), (v.return = _), v);
    }
    function p(_, v, x, R) {
      var V = x.type;
      return V === Re
        ? E(_, v, x.props.children, R, x.key)
        : v !== null &&
            (v.elementType === V ||
              (typeof V == 'object' && V !== null && V.$$typeof === ve && ml(V) === v.type))
          ? ((R = a(v, x.props)), (R.ref = Lr(_, v, x)), (R.return = _), R)
          : ((R = Jt(x.type, x.key, x.props, null, _.mode, R)),
            (R.ref = Lr(_, v, x)),
            (R.return = _),
            R);
    }
    function w(_, v, x, R) {
      return v === null ||
        v.tag !== 4 ||
        v.stateNode.containerInfo !== x.containerInfo ||
        v.stateNode.implementation !== x.implementation
        ? ((v = Bo(x, _.mode, R)), (v.return = _), v)
        : ((v = a(v, x.children || [])), (v.return = _), v);
    }
    function E(_, v, x, R, V) {
      return v === null || v.tag !== 7
        ? ((v = ji(x, _.mode, R, V)), (v.return = _), v)
        : ((v = a(v, x)), (v.return = _), v);
    }
    function M(_, v, x) {
      if ((typeof v == 'string' && v !== '') || typeof v == 'number')
        return ((v = $o('' + v, _.mode, x)), (v.return = _), v);
      if (typeof v == 'object' && v !== null) {
        switch (v.$$typeof) {
          case ge:
            return (
              (x = Jt(v.type, v.key, v.props, null, _.mode, x)),
              (x.ref = Lr(_, null, v)),
              (x.return = _),
              x
            );
          case fe:
            return ((v = Bo(v, _.mode, x)), (v.return = _), v);
          case ve:
            var R = v._init;
            return M(_, R(v._payload), x);
        }
        if (Hn(v) || D(v)) return ((v = ji(v, _.mode, x, null)), (v.return = _), v);
        Pt(_, v);
      }
      return null;
    }
    function T(_, v, x, R) {
      var V = v !== null ? v.key : null;
      if ((typeof x == 'string' && x !== '') || typeof x == 'number')
        return V !== null ? null : d(_, v, '' + x, R);
      if (typeof x == 'object' && x !== null) {
        switch (x.$$typeof) {
          case ge:
            return x.key === V ? p(_, v, x, R) : null;
          case fe:
            return x.key === V ? w(_, v, x, R) : null;
          case ve:
            return ((V = x._init), T(_, v, V(x._payload), R));
        }
        if (Hn(x) || D(x)) return V !== null ? null : E(_, v, x, R, null);
        Pt(_, x);
      }
      return null;
    }
    function $(_, v, x, R, V) {
      if ((typeof R == 'string' && R !== '') || typeof R == 'number')
        return ((_ = _.get(x) || null), d(v, _, '' + R, V));
      if (typeof R == 'object' && R !== null) {
        switch (R.$$typeof) {
          case ge:
            return ((_ = _.get(R.key === null ? x : R.key) || null), p(v, _, R, V));
          case fe:
            return ((_ = _.get(R.key === null ? x : R.key) || null), w(v, _, R, V));
          case ve:
            var Q = R._init;
            return $(_, v, x, Q(R._payload), V);
        }
        if (Hn(R) || D(R)) return ((_ = _.get(x) || null), E(v, _, R, V, null));
        Pt(v, R);
      }
      return null;
    }
    function U(_, v, x, R) {
      for (
        var V = null, Q = null, Z = v, ne = (v = 0), $e = null;
        Z !== null && ne < x.length;
        ne++
      ) {
        Z.index > ne ? (($e = Z), (Z = null)) : ($e = Z.sibling);
        var ce = T(_, Z, x[ne], R);
        if (ce === null) {
          Z === null && (Z = $e);
          break;
        }
        (e && Z && ce.alternate === null && n(_, Z),
          (v = o(ce, v, ne)),
          Q === null ? (V = ce) : (Q.sibling = ce),
          (Q = ce),
          (Z = $e));
      }
      if (ne === x.length) return (i(_, Z), je && vi(_, ne), V);
      if (Z === null) {
        for (; ne < x.length; ne++)
          ((Z = M(_, x[ne], R)),
            Z !== null && ((v = o(Z, v, ne)), Q === null ? (V = Z) : (Q.sibling = Z), (Q = Z)));
        return (je && vi(_, ne), V);
      }
      for (Z = r(_, Z); ne < x.length; ne++)
        (($e = $(Z, _, ne, x[ne], R)),
          $e !== null &&
            (e && $e.alternate !== null && Z.delete($e.key === null ? ne : $e.key),
            (v = o($e, v, ne)),
            Q === null ? (V = $e) : (Q.sibling = $e),
            (Q = $e)));
      return (
        e &&
          Z.forEach(function (di) {
            return n(_, di);
          }),
        je && vi(_, ne),
        V
      );
    }
    function q(_, v, x, R) {
      var V = D(x);
      if (typeof V != 'function') throw Error(s(150));
      if (((x = V.call(x)), x == null)) throw Error(s(151));
      for (
        var Q = (V = null), Z = v, ne = (v = 0), $e = null, ce = x.next();
        Z !== null && !ce.done;
        ne++, ce = x.next()
      ) {
        Z.index > ne ? (($e = Z), (Z = null)) : ($e = Z.sibling);
        var di = T(_, Z, ce.value, R);
        if (di === null) {
          Z === null && (Z = $e);
          break;
        }
        (e && Z && di.alternate === null && n(_, Z),
          (v = o(di, v, ne)),
          Q === null ? (V = di) : (Q.sibling = di),
          (Q = di),
          (Z = $e));
      }
      if (ce.done) return (i(_, Z), je && vi(_, ne), V);
      if (Z === null) {
        for (; !ce.done; ne++, ce = x.next())
          ((ce = M(_, ce.value, R)),
            ce !== null &&
              ((v = o(ce, v, ne)), Q === null ? (V = ce) : (Q.sibling = ce), (Q = ce)));
        return (je && vi(_, ne), V);
      }
      for (Z = r(_, Z); !ce.done; ne++, ce = x.next())
        ((ce = $(Z, _, ne, ce.value, R)),
          ce !== null &&
            (e && ce.alternate !== null && Z.delete(ce.key === null ? ne : ce.key),
            (v = o(ce, v, ne)),
            Q === null ? (V = ce) : (Q.sibling = ce),
            (Q = ce)));
      return (
        e &&
          Z.forEach(function (rm) {
            return n(_, rm);
          }),
        je && vi(_, ne),
        V
      );
    }
    function Me(_, v, x, R) {
      if (
        (typeof x == 'object' &&
          x !== null &&
          x.type === Re &&
          x.key === null &&
          (x = x.props.children),
        typeof x == 'object' && x !== null)
      ) {
        switch (x.$$typeof) {
          case ge:
            e: {
              for (var V = x.key, Q = v; Q !== null; ) {
                if (Q.key === V) {
                  if (((V = x.type), V === Re)) {
                    if (Q.tag === 7) {
                      (i(_, Q.sibling), (v = a(Q, x.props.children)), (v.return = _), (_ = v));
                      break e;
                    }
                  } else if (
                    Q.elementType === V ||
                    (typeof V == 'object' && V !== null && V.$$typeof === ve && ml(V) === Q.type)
                  ) {
                    (i(_, Q.sibling),
                      (v = a(Q, x.props)),
                      (v.ref = Lr(_, Q, x)),
                      (v.return = _),
                      (_ = v));
                    break e;
                  }
                  i(_, Q);
                  break;
                } else n(_, Q);
                Q = Q.sibling;
              }
              x.type === Re
                ? ((v = ji(x.props.children, _.mode, R, x.key)), (v.return = _), (_ = v))
                : ((R = Jt(x.type, x.key, x.props, null, _.mode, R)),
                  (R.ref = Lr(_, v, x)),
                  (R.return = _),
                  (_ = R));
            }
            return c(_);
          case fe:
            e: {
              for (Q = x.key; v !== null; ) {
                if (v.key === Q)
                  if (
                    v.tag === 4 &&
                    v.stateNode.containerInfo === x.containerInfo &&
                    v.stateNode.implementation === x.implementation
                  ) {
                    (i(_, v.sibling), (v = a(v, x.children || [])), (v.return = _), (_ = v));
                    break e;
                  } else {
                    i(_, v);
                    break;
                  }
                else n(_, v);
                v = v.sibling;
              }
              ((v = Bo(x, _.mode, R)), (v.return = _), (_ = v));
            }
            return c(_);
          case ve:
            return ((Q = x._init), Me(_, v, Q(x._payload), R));
        }
        if (Hn(x)) return U(_, v, x, R);
        if (D(x)) return q(_, v, x, R);
        Pt(_, x);
      }
      return (typeof x == 'string' && x !== '') || typeof x == 'number'
        ? ((x = '' + x),
          v !== null && v.tag === 6
            ? (i(_, v.sibling), (v = a(v, x)), (v.return = _), (_ = v))
            : (i(_, v), (v = $o(x, _.mode, R)), (v.return = _), (_ = v)),
          c(_))
        : i(_, v);
    }
    return Me;
  }
  var Hi = pl(!0),
    fl = pl(!1),
    Tt = ei(null),
    Et = null,
    Gi = null,
    Xa = null;
  function Ja() {
    Xa = Gi = Et = null;
  }
  function Ya(e) {
    var n = Tt.current;
    (ke(Tt), (e._currentValue = n));
  }
  function eo(e, n, i) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
          : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function Ki(e, n) {
    ((Et = e),
      (Xa = Gi = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & n) !== 0 && (on = !0), (e.firstContext = null)));
  }
  function yn(e) {
    var n = e._currentValue;
    if (Xa !== e)
      if (((e = { context: e, memoizedValue: n, next: null }), Gi === null)) {
        if (Et === null) throw Error(s(308));
        ((Gi = e), (Et.dependencies = { lanes: 0, firstContext: e }));
      } else Gi = Gi.next = e;
    return n;
  }
  var yi = null;
  function no(e) {
    yi === null ? (yi = [e]) : yi.push(e);
  }
  function hl(e, n, i, r) {
    var a = n.interleaved;
    return (
      a === null ? ((i.next = i), no(n)) : ((i.next = a.next), (a.next = i)),
      (n.interleaved = i),
      $n(e, r)
    );
  }
  function $n(e, n) {
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
  var ri = !1;
  function io(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function gl(e, n) {
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
  function ti(e, n, i) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (se & 2) !== 0)) {
      var a = r.pending;
      return (
        a === null ? (n.next = n) : ((n.next = a.next), (a.next = n)),
        (r.pending = n),
        $n(e, i)
      );
    }
    return (
      (a = r.interleaved),
      a === null ? ((n.next = n), no(r)) : ((n.next = a.next), (a.next = n)),
      (r.interleaved = n),
      $n(e, i)
    );
  }
  function Lt(e, n, i) {
    if (((n = n.updateQueue), n !== null && ((n = n.shared), (i & 4194240) !== 0))) {
      var r = n.lanes;
      ((r &= e.pendingLanes), (i |= r), (n.lanes = i), ga(e, i));
    }
  }
  function vl(e, n) {
    var i = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), i === r)) {
      var a = null,
        o = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var c = {
            eventTime: i.eventTime,
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          };
          (o === null ? (a = o = c) : (o = o.next = c), (i = i.next));
        } while (i !== null);
        o === null ? (a = o = n) : (o = o.next = n);
      } else a = o = n;
      ((i = {
        baseState: r.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = i));
      return;
    }
    ((e = i.lastBaseUpdate),
      e === null ? (i.firstBaseUpdate = n) : (e.next = n),
      (i.lastBaseUpdate = n));
  }
  function Mt(e, n, i, r) {
    var a = e.updateQueue;
    ri = !1;
    var o = a.firstBaseUpdate,
      c = a.lastBaseUpdate,
      d = a.shared.pending;
    if (d !== null) {
      a.shared.pending = null;
      var p = d,
        w = p.next;
      ((p.next = null), c === null ? (o = w) : (c.next = w), (c = p));
      var E = e.alternate;
      E !== null &&
        ((E = E.updateQueue),
        (d = E.lastBaseUpdate),
        d !== c && (d === null ? (E.firstBaseUpdate = w) : (d.next = w), (E.lastBaseUpdate = p)));
    }
    if (o !== null) {
      var M = a.baseState;
      ((c = 0), (E = w = p = null), (d = o));
      do {
        var T = d.lane,
          $ = d.eventTime;
        if ((r & T) === T) {
          E !== null &&
            (E = E.next =
              {
                eventTime: $,
                lane: 0,
                tag: d.tag,
                payload: d.payload,
                callback: d.callback,
                next: null,
              });
          e: {
            var U = e,
              q = d;
            switch (((T = n), ($ = i), q.tag)) {
              case 1:
                if (((U = q.payload), typeof U == 'function')) {
                  M = U.call($, M, T);
                  break e;
                }
                M = U;
                break e;
              case 3:
                U.flags = (U.flags & -65537) | 128;
              case 0:
                if (
                  ((U = q.payload), (T = typeof U == 'function' ? U.call($, M, T) : U), T == null)
                )
                  break e;
                M = O({}, M, T);
                break e;
              case 2:
                ri = !0;
            }
          }
          d.callback !== null &&
            d.lane !== 0 &&
            ((e.flags |= 64), (T = a.effects), T === null ? (a.effects = [d]) : T.push(d));
        } else
          (($ = {
            eventTime: $,
            lane: T,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null,
          }),
            E === null ? ((w = E = $), (p = M)) : (E = E.next = $),
            (c |= T));
        if (((d = d.next), d === null)) {
          if (((d = a.shared.pending), d === null)) break;
          ((T = d),
            (d = T.next),
            (T.next = null),
            (a.lastBaseUpdate = T),
            (a.shared.pending = null));
        }
      } while (!0);
      if (
        (E === null && (p = M),
        (a.baseState = p),
        (a.firstBaseUpdate = w),
        (a.lastBaseUpdate = E),
        (n = a.shared.interleaved),
        n !== null)
      ) {
        a = n;
        do ((c |= a.lane), (a = a.next));
        while (a !== n);
      } else o === null && (a.shared.lanes = 0);
      ((bi |= c), (e.lanes = c), (e.memoizedState = M));
    }
  }
  function yl(e, n, i) {
    if (((e = n.effects), (n.effects = null), e !== null))
      for (n = 0; n < e.length; n++) {
        var r = e[n],
          a = r.callback;
        if (a !== null) {
          if (((r.callback = null), (r = i), typeof a != 'function')) throw Error(s(191, a));
          a.call(r);
        }
      }
  }
  var Mr = {},
    Rn = ei(Mr),
    Rr = ei(Mr),
    Dr = ei(Mr);
  function _i(e) {
    if (e === Mr) throw Error(s(174));
    return e;
  }
  function ro(e, n) {
    switch ((xe(Dr, n), xe(Rr, e), xe(Rn, Mr), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Mi(null, '');
        break;
      default:
        ((e = e === 8 ? n.parentNode : n),
          (n = e.namespaceURI || null),
          (e = e.tagName),
          (n = Mi(n, e)));
    }
    (ke(Rn), xe(Rn, n));
  }
  function Qi() {
    (ke(Rn), ke(Rr), ke(Dr));
  }
  function _l(e) {
    _i(Dr.current);
    var n = _i(Rn.current),
      i = Mi(n, e.type);
    n !== i && (xe(Rr, e), xe(Rn, i));
  }
  function to(e) {
    Rr.current === e && (ke(Rn), ke(Rr));
  }
  var Se = ei(0);
  function Rt(e) {
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
  var ao = [];
  function oo() {
    for (var e = 0; e < ao.length; e++) ao[e]._workInProgressVersionPrimary = null;
    ao.length = 0;
  }
  var Dt = ae.ReactCurrentDispatcher,
    so = ae.ReactCurrentBatchConfig,
    xi = 0,
    Ce = null,
    Ie = null,
    We = null,
    Ft = !1,
    Fr = !1,
    zr = 0,
    jd = 0;
  function Xe() {
    throw Error(s(321));
  }
  function lo(e, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < e.length; i++) if (!kn(e[i], n[i])) return !1;
    return !0;
  }
  function co(e, n, i, r, a, o) {
    if (
      ((xi = o),
      (Ce = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (Dt.current = e === null || e.memoizedState === null ? Td : Ed),
      (e = i(r, a)),
      Fr)
    ) {
      o = 0;
      do {
        if (((Fr = !1), (zr = 0), 25 <= o)) throw Error(s(301));
        ((o += 1), (We = Ie = null), (n.updateQueue = null), (Dt.current = Ld), (e = i(r, a)));
      } while (Fr);
    }
    if (
      ((Dt.current = At),
      (n = Ie !== null && Ie.next !== null),
      (xi = 0),
      (We = Ie = Ce = null),
      (Ft = !1),
      n)
    )
      throw Error(s(300));
    return e;
  }
  function uo() {
    var e = zr !== 0;
    return ((zr = 0), e);
  }
  function Dn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (We === null ? (Ce.memoizedState = We = e) : (We = We.next = e), We);
  }
  function _n() {
    if (Ie === null) {
      var e = Ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ie.next;
    var n = We === null ? Ce.memoizedState : We.next;
    if (n !== null) ((We = n), (Ie = e));
    else {
      if (e === null) throw Error(s(310));
      ((Ie = e),
        (e = {
          memoizedState: Ie.memoizedState,
          baseState: Ie.baseState,
          baseQueue: Ie.baseQueue,
          queue: Ie.queue,
          next: null,
        }),
        We === null ? (Ce.memoizedState = We = e) : (We = We.next = e));
    }
    return We;
  }
  function Ir(e, n) {
    return typeof n == 'function' ? n(e) : n;
  }
  function mo(e) {
    var n = _n(),
      i = n.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = e;
    var r = Ie,
      a = r.baseQueue,
      o = i.pending;
    if (o !== null) {
      if (a !== null) {
        var c = a.next;
        ((a.next = o.next), (o.next = c));
      }
      ((r.baseQueue = a = o), (i.pending = null));
    }
    if (a !== null) {
      ((o = a.next), (r = r.baseState));
      var d = (c = null),
        p = null,
        w = o;
      do {
        var E = w.lane;
        if ((xi & E) === E)
          (p !== null &&
            (p = p.next =
              {
                lane: 0,
                action: w.action,
                hasEagerState: w.hasEagerState,
                eagerState: w.eagerState,
                next: null,
              }),
            (r = w.hasEagerState ? w.eagerState : e(r, w.action)));
        else {
          var M = {
            lane: E,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null,
          };
          (p === null ? ((d = p = M), (c = r)) : (p = p.next = M), (Ce.lanes |= E), (bi |= E));
        }
        w = w.next;
      } while (w !== null && w !== o);
      (p === null ? (c = r) : (p.next = d),
        kn(r, n.memoizedState) || (on = !0),
        (n.memoizedState = r),
        (n.baseState = c),
        (n.baseQueue = p),
        (i.lastRenderedState = r));
    }
    if (((e = i.interleaved), e !== null)) {
      a = e;
      do ((o = a.lane), (Ce.lanes |= o), (bi |= o), (a = a.next));
      while (a !== e);
    } else a === null && (i.lanes = 0);
    return [n.memoizedState, i.dispatch];
  }
  function po(e) {
    var n = _n(),
      i = n.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = e;
    var r = i.dispatch,
      a = i.pending,
      o = n.memoizedState;
    if (a !== null) {
      i.pending = null;
      var c = (a = a.next);
      do ((o = e(o, c.action)), (c = c.next));
      while (c !== a);
      (kn(o, n.memoizedState) || (on = !0),
        (n.memoizedState = o),
        n.baseQueue === null && (n.baseState = o),
        (i.lastRenderedState = o));
    }
    return [o, r];
  }
  function xl() {}
  function bl(e, n) {
    var i = Ce,
      r = _n(),
      a = n(),
      o = !kn(r.memoizedState, a);
    if (
      (o && ((r.memoizedState = a), (on = !0)),
      (r = r.queue),
      fo(Nl.bind(null, i, r, e), [e]),
      r.getSnapshot !== n || o || (We !== null && We.memoizedState.tag & 1))
    ) {
      if (((i.flags |= 2048), Ar(9, kl.bind(null, i, r, a, n), void 0, null), Oe === null))
        throw Error(s(349));
      (xi & 30) !== 0 || wl(i, n, a);
    }
    return a;
  }
  function wl(e, n, i) {
    ((e.flags |= 16384),
      (e = { getSnapshot: n, value: i }),
      (n = Ce.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }), (Ce.updateQueue = n), (n.stores = [e]))
        : ((i = n.stores), i === null ? (n.stores = [e]) : i.push(e)));
  }
  function kl(e, n, i, r) {
    ((n.value = i), (n.getSnapshot = r), jl(n) && Sl(e));
  }
  function Nl(e, n, i) {
    return i(function () {
      jl(n) && Sl(e);
    });
  }
  function jl(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var i = n();
      return !kn(e, i);
    } catch {
      return !0;
    }
  }
  function Sl(e) {
    var n = $n(e, 1);
    n !== null && Pn(n, e, 1, -1);
  }
  function Cl(e) {
    var n = Dn();
    return (
      typeof e == 'function' && (e = e()),
      (n.memoizedState = n.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ir,
        lastRenderedState: e,
      }),
      (n.queue = e),
      (e = e.dispatch = Pd.bind(null, Ce, e)),
      [n.memoizedState, e]
    );
  }
  function Ar(e, n, i, r) {
    return (
      (e = { tag: e, create: n, destroy: i, deps: r, next: null }),
      (n = Ce.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (Ce.updateQueue = n),
          (n.lastEffect = e.next = e))
        : ((i = n.lastEffect),
          i === null
            ? (n.lastEffect = e.next = e)
            : ((r = i.next), (i.next = e), (e.next = r), (n.lastEffect = e))),
      e
    );
  }
  function Pl() {
    return _n().memoizedState;
  }
  function zt(e, n, i, r) {
    var a = Dn();
    ((Ce.flags |= e), (a.memoizedState = Ar(1 | n, i, void 0, r === void 0 ? null : r)));
  }
  function It(e, n, i, r) {
    var a = _n();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ie !== null) {
      var c = Ie.memoizedState;
      if (((o = c.destroy), r !== null && lo(r, c.deps))) {
        a.memoizedState = Ar(n, i, o, r);
        return;
      }
    }
    ((Ce.flags |= e), (a.memoizedState = Ar(1 | n, i, o, r)));
  }
  function Tl(e, n) {
    return zt(8390656, 8, e, n);
  }
  function fo(e, n) {
    return It(2048, 8, e, n);
  }
  function El(e, n) {
    return It(4, 2, e, n);
  }
  function Ll(e, n) {
    return It(4, 4, e, n);
  }
  function Ml(e, n) {
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
  function Rl(e, n, i) {
    return ((i = i != null ? i.concat([e]) : null), It(4, 4, Ml.bind(null, n, e), i));
  }
  function ho() {}
  function Dl(e, n) {
    var i = _n();
    n = n === void 0 ? null : n;
    var r = i.memoizedState;
    return r !== null && n !== null && lo(n, r[1]) ? r[0] : ((i.memoizedState = [e, n]), e);
  }
  function Fl(e, n) {
    var i = _n();
    n = n === void 0 ? null : n;
    var r = i.memoizedState;
    return r !== null && n !== null && lo(n, r[1])
      ? r[0]
      : ((e = e()), (i.memoizedState = [e, n]), e);
  }
  function zl(e, n, i) {
    return (xi & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (on = !0)), (e.memoizedState = i))
      : (kn(i, n) || ((i = ms()), (Ce.lanes |= i), (bi |= i), (e.baseState = !0)), n);
  }
  function Sd(e, n) {
    var i = pe;
    ((pe = i !== 0 && 4 > i ? i : 4), e(!0));
    var r = so.transition;
    so.transition = {};
    try {
      (e(!1), n());
    } finally {
      ((pe = i), (so.transition = r));
    }
  }
  function Il() {
    return _n().memoizedState;
  }
  function Cd(e, n, i) {
    var r = li(e);
    if (((i = { lane: r, action: i, hasEagerState: !1, eagerState: null, next: null }), Al(e)))
      Wl(n, i);
    else if (((i = hl(e, n, i, r)), i !== null)) {
      var a = rn();
      (Pn(i, e, r, a), Ol(i, n, r));
    }
  }
  function Pd(e, n, i) {
    var r = li(e),
      a = { lane: r, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (Al(e)) Wl(n, a);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = n.lastRenderedReducer), o !== null)
      )
        try {
          var c = n.lastRenderedState,
            d = o(c, i);
          if (((a.hasEagerState = !0), (a.eagerState = d), kn(d, c))) {
            var p = n.interleaved;
            (p === null ? ((a.next = a), no(n)) : ((a.next = p.next), (p.next = a)),
              (n.interleaved = a));
            return;
          }
        } catch {
        } finally {
        }
      ((i = hl(e, n, a, r)), i !== null && ((a = rn()), Pn(i, e, r, a), Ol(i, n, r)));
    }
  }
  function Al(e) {
    var n = e.alternate;
    return e === Ce || (n !== null && n === Ce);
  }
  function Wl(e, n) {
    Fr = Ft = !0;
    var i = e.pending;
    (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)), (e.pending = n));
  }
  function Ol(e, n, i) {
    if ((i & 4194240) !== 0) {
      var r = n.lanes;
      ((r &= e.pendingLanes), (i |= r), (n.lanes = i), ga(e, i));
    }
  }
  var At = {
      readContext: yn,
      useCallback: Xe,
      useContext: Xe,
      useEffect: Xe,
      useImperativeHandle: Xe,
      useInsertionEffect: Xe,
      useLayoutEffect: Xe,
      useMemo: Xe,
      useReducer: Xe,
      useRef: Xe,
      useState: Xe,
      useDebugValue: Xe,
      useDeferredValue: Xe,
      useTransition: Xe,
      useMutableSource: Xe,
      useSyncExternalStore: Xe,
      useId: Xe,
      unstable_isNewReconciler: !1,
    },
    Td = {
      readContext: yn,
      useCallback: function (e, n) {
        return ((Dn().memoizedState = [e, n === void 0 ? null : n]), e);
      },
      useContext: yn,
      useEffect: Tl,
      useImperativeHandle: function (e, n, i) {
        return ((i = i != null ? i.concat([e]) : null), zt(4194308, 4, Ml.bind(null, n, e), i));
      },
      useLayoutEffect: function (e, n) {
        return zt(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        return zt(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var i = Dn();
        return ((n = n === void 0 ? null : n), (e = e()), (i.memoizedState = [e, n]), e);
      },
      useReducer: function (e, n, i) {
        var r = Dn();
        return (
          (n = i !== void 0 ? i(n) : n),
          (r.memoizedState = r.baseState = n),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (r.queue = e),
          (e = e.dispatch = Cd.bind(null, Ce, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = Dn();
        return ((e = { current: e }), (n.memoizedState = e));
      },
      useState: Cl,
      useDebugValue: ho,
      useDeferredValue: function (e) {
        return (Dn().memoizedState = e);
      },
      useTransition: function () {
        var e = Cl(!1),
          n = e[0];
        return ((e = Sd.bind(null, e[1])), (Dn().memoizedState = e), [n, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, n, i) {
        var r = Ce,
          a = Dn();
        if (je) {
          if (i === void 0) throw Error(s(407));
          i = i();
        } else {
          if (((i = n()), Oe === null)) throw Error(s(349));
          (xi & 30) !== 0 || wl(r, n, i);
        }
        a.memoizedState = i;
        var o = { value: i, getSnapshot: n };
        return (
          (a.queue = o),
          Tl(Nl.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          Ar(9, kl.bind(null, r, o, i, n), void 0, null),
          i
        );
      },
      useId: function () {
        var e = Dn(),
          n = Oe.identifierPrefix;
        if (je) {
          var i = On,
            r = Wn;
          ((i = (r & ~(1 << (32 - wn(r) - 1))).toString(32) + i),
            (n = ':' + n + 'R' + i),
            (i = zr++),
            0 < i && (n += 'H' + i.toString(32)),
            (n += ':'));
        } else ((i = jd++), (n = ':' + n + 'r' + i.toString(32) + ':'));
        return (e.memoizedState = n);
      },
      unstable_isNewReconciler: !1,
    },
    Ed = {
      readContext: yn,
      useCallback: Dl,
      useContext: yn,
      useEffect: fo,
      useImperativeHandle: Rl,
      useInsertionEffect: El,
      useLayoutEffect: Ll,
      useMemo: Fl,
      useReducer: mo,
      useRef: Pl,
      useState: function () {
        return mo(Ir);
      },
      useDebugValue: ho,
      useDeferredValue: function (e) {
        var n = _n();
        return zl(n, Ie.memoizedState, e);
      },
      useTransition: function () {
        var e = mo(Ir)[0],
          n = _n().memoizedState;
        return [e, n];
      },
      useMutableSource: xl,
      useSyncExternalStore: bl,
      useId: Il,
      unstable_isNewReconciler: !1,
    },
    Ld = {
      readContext: yn,
      useCallback: Dl,
      useContext: yn,
      useEffect: fo,
      useImperativeHandle: Rl,
      useInsertionEffect: El,
      useLayoutEffect: Ll,
      useMemo: Fl,
      useReducer: po,
      useRef: Pl,
      useState: function () {
        return po(Ir);
      },
      useDebugValue: ho,
      useDeferredValue: function (e) {
        var n = _n();
        return Ie === null ? (n.memoizedState = e) : zl(n, Ie.memoizedState, e);
      },
      useTransition: function () {
        var e = po(Ir)[0],
          n = _n().memoizedState;
        return [e, n];
      },
      useMutableSource: xl,
      useSyncExternalStore: bl,
      useId: Il,
      unstable_isNewReconciler: !1,
    };
  function jn(e, n) {
    if (e && e.defaultProps) {
      ((n = O({}, n)), (e = e.defaultProps));
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    return n;
  }
  function go(e, n, i, r) {
    ((n = e.memoizedState),
      (i = i(r, n)),
      (i = i == null ? n : O({}, n, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i));
  }
  var Wt = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? pi(e) === e : !1;
    },
    enqueueSetState: function (e, n, i) {
      e = e._reactInternals;
      var r = rn(),
        a = li(e),
        o = Bn(r, a);
      ((o.payload = n),
        i != null && (o.callback = i),
        (n = ti(e, o, a)),
        n !== null && (Pn(n, e, a, r), Lt(n, e, a)));
    },
    enqueueReplaceState: function (e, n, i) {
      e = e._reactInternals;
      var r = rn(),
        a = li(e),
        o = Bn(r, a);
      ((o.tag = 1),
        (o.payload = n),
        i != null && (o.callback = i),
        (n = ti(e, o, a)),
        n !== null && (Pn(n, e, a, r), Lt(n, e, a)));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var i = rn(),
        r = li(e),
        a = Bn(i, r);
      ((a.tag = 2),
        n != null && (a.callback = n),
        (n = ti(e, a, r)),
        n !== null && (Pn(n, e, r, i), Lt(n, e, r)));
    },
  };
  function $l(e, n, i, r, a, o, c) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, o, c)
        : n.prototype && n.prototype.isPureReactComponent
          ? !Nr(i, r) || !Nr(a, o)
          : !0
    );
  }
  function Bl(e, n, i) {
    var r = !1,
      a = ni,
      o = n.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = yn(o))
        : ((a = an(n) ? hi : Ze.current),
          (r = n.contextTypes),
          (o = (r = r != null) ? Bi(e, a) : ni)),
      (n = new n(i, o)),
      (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = Wt),
      (e.stateNode = n),
      (n._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      n
    );
  }
  function Ul(e, n, i, r) {
    ((e = n.state),
      typeof n.componentWillReceiveProps == 'function' && n.componentWillReceiveProps(i, r),
      typeof n.UNSAFE_componentWillReceiveProps == 'function' &&
        n.UNSAFE_componentWillReceiveProps(i, r),
      n.state !== e && Wt.enqueueReplaceState(n, n.state, null));
  }
  function vo(e, n, i, r) {
    var a = e.stateNode;
    ((a.props = i), (a.state = e.memoizedState), (a.refs = {}), io(e));
    var o = n.contextType;
    (typeof o == 'object' && o !== null
      ? (a.context = yn(o))
      : ((o = an(n) ? hi : Ze.current), (a.context = Bi(e, o))),
      (a.state = e.memoizedState),
      (o = n.getDerivedStateFromProps),
      typeof o == 'function' && (go(e, n, o, i), (a.state = e.memoizedState)),
      typeof n.getDerivedStateFromProps == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function' ||
        (typeof a.UNSAFE_componentWillMount != 'function' &&
          typeof a.componentWillMount != 'function') ||
        ((n = a.state),
        typeof a.componentWillMount == 'function' && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == 'function' && a.UNSAFE_componentWillMount(),
        n !== a.state && Wt.enqueueReplaceState(a, a.state, null),
        Mt(e, i, a, r),
        (a.state = e.memoizedState)),
      typeof a.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function Zi(e, n) {
    try {
      var i = '',
        r = n;
      do ((i += ee(r)), (r = r.return));
      while (r);
      var a = i;
    } catch (o) {
      a =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: n, stack: a, digest: null };
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
  var Md = typeof WeakMap == 'function' ? WeakMap : Map;
  function ql(e, n, i) {
    ((i = Bn(-1, i)), (i.tag = 3), (i.payload = { element: null }));
    var r = n.value;
    return (
      (i.callback = function () {
        (Ht || ((Ht = !0), (Ro = r)), _o(e, n));
      }),
      i
    );
  }
  function Vl(e, n, i) {
    ((i = Bn(-1, i)), (i.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var a = n.value;
      ((i.payload = function () {
        return r(a);
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
            typeof r != 'function' && (oi === null ? (oi = new Set([this])) : oi.add(this)));
          var c = n.stack;
          this.componentDidCatch(n.value, { componentStack: c !== null ? c : '' });
        }),
      i
    );
  }
  function Hl(e, n, i) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Md();
      var a = new Set();
      r.set(n, a);
    } else ((a = r.get(n)), a === void 0 && ((a = new Set()), r.set(n, a)));
    a.has(i) || (a.add(i), (e = Hd.bind(null, e, n, i)), n.then(e, e));
  }
  function Gl(e) {
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
  function Kl(e, n, i, r, a) {
    return (e.mode & 1) === 0
      ? (e === n
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (i.flags |= 131072),
            (i.flags &= -52805),
            i.tag === 1 &&
              (i.alternate === null ? (i.tag = 17) : ((n = Bn(-1, 1)), (n.tag = 2), ti(i, n, 1))),
            (i.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = a), e);
  }
  var Rd = ae.ReactCurrentOwner,
    on = !1;
  function nn(e, n, i, r) {
    n.child = e === null ? fl(n, null, i, r) : Hi(n, e.child, i, r);
  }
  function Ql(e, n, i, r, a) {
    i = i.render;
    var o = n.ref;
    return (
      Ki(n, a),
      (r = co(e, n, i, r, o, a)),
      (i = uo()),
      e !== null && !on
        ? ((n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~a), Un(e, n, a))
        : (je && i && Ha(n), (n.flags |= 1), nn(e, n, r, a), n.child)
    );
  }
  function Zl(e, n, i, r, a) {
    if (e === null) {
      var o = i.type;
      return typeof o == 'function' &&
        !Oo(o) &&
        o.defaultProps === void 0 &&
        i.compare === null &&
        i.defaultProps === void 0
        ? ((n.tag = 15), (n.type = o), Xl(e, n, o, r, a))
        : ((e = Jt(i.type, null, r, n, n.mode, a)), (e.ref = n.ref), (e.return = n), (n.child = e));
    }
    if (((o = e.child), (e.lanes & a) === 0)) {
      var c = o.memoizedProps;
      if (((i = i.compare), (i = i !== null ? i : Nr), i(c, r) && e.ref === n.ref))
        return Un(e, n, a);
    }
    return ((n.flags |= 1), (e = ui(o, r)), (e.ref = n.ref), (e.return = n), (n.child = e));
  }
  function Xl(e, n, i, r, a) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Nr(o, r) && e.ref === n.ref)
        if (((on = !1), (n.pendingProps = r = o), (e.lanes & a) !== 0))
          (e.flags & 131072) !== 0 && (on = !0);
        else return ((n.lanes = e.lanes), Un(e, n, a));
    }
    return xo(e, n, i, r, a);
  }
  function Jl(e, n, i) {
    var r = n.pendingProps,
      a = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
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
          (r = o !== null ? o.baseLanes : i),
          xe(Ji, fn),
          (fn |= r));
      }
    else
      (o !== null ? ((r = o.baseLanes | i), (n.memoizedState = null)) : (r = i),
        xe(Ji, fn),
        (fn |= r));
    return (nn(e, n, a, i), n.child);
  }
  function Yl(e, n) {
    var i = n.ref;
    ((e === null && i !== null) || (e !== null && e.ref !== i)) &&
      ((n.flags |= 512), (n.flags |= 2097152));
  }
  function xo(e, n, i, r, a) {
    var o = an(i) ? hi : Ze.current;
    return (
      (o = Bi(n, o)),
      Ki(n, a),
      (i = co(e, n, i, r, o, a)),
      (r = uo()),
      e !== null && !on
        ? ((n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~a), Un(e, n, a))
        : (je && r && Ha(n), (n.flags |= 1), nn(e, n, i, a), n.child)
    );
  }
  function ec(e, n, i, r, a) {
    if (an(i)) {
      var o = !0;
      kt(n);
    } else o = !1;
    if ((Ki(n, a), n.stateNode === null)) ($t(e, n), Bl(n, i, r), vo(n, i, r, a), (r = !0));
    else if (e === null) {
      var c = n.stateNode,
        d = n.memoizedProps;
      c.props = d;
      var p = c.context,
        w = i.contextType;
      typeof w == 'object' && w !== null
        ? (w = yn(w))
        : ((w = an(i) ? hi : Ze.current), (w = Bi(n, w)));
      var E = i.getDerivedStateFromProps,
        M = typeof E == 'function' || typeof c.getSnapshotBeforeUpdate == 'function';
      (M ||
        (typeof c.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof c.componentWillReceiveProps != 'function') ||
        ((d !== r || p !== w) && Ul(n, c, r, w)),
        (ri = !1));
      var T = n.memoizedState;
      ((c.state = T),
        Mt(n, r, c, a),
        (p = n.memoizedState),
        d !== r || T !== p || tn.current || ri
          ? (typeof E == 'function' && (go(n, i, E, r), (p = n.memoizedState)),
            (d = ri || $l(n, i, d, r, T, p, w))
              ? (M ||
                  (typeof c.UNSAFE_componentWillMount != 'function' &&
                    typeof c.componentWillMount != 'function') ||
                  (typeof c.componentWillMount == 'function' && c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == 'function' &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == 'function' && (n.flags |= 4194308))
              : (typeof c.componentDidMount == 'function' && (n.flags |= 4194308),
                (n.memoizedProps = r),
                (n.memoizedState = p)),
            (c.props = r),
            (c.state = p),
            (c.context = w),
            (r = d))
          : (typeof c.componentDidMount == 'function' && (n.flags |= 4194308), (r = !1)));
    } else {
      ((c = n.stateNode),
        gl(e, n),
        (d = n.memoizedProps),
        (w = n.type === n.elementType ? d : jn(n.type, d)),
        (c.props = w),
        (M = n.pendingProps),
        (T = c.context),
        (p = i.contextType),
        typeof p == 'object' && p !== null
          ? (p = yn(p))
          : ((p = an(i) ? hi : Ze.current), (p = Bi(n, p))));
      var $ = i.getDerivedStateFromProps;
      ((E = typeof $ == 'function' || typeof c.getSnapshotBeforeUpdate == 'function') ||
        (typeof c.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof c.componentWillReceiveProps != 'function') ||
        ((d !== M || T !== p) && Ul(n, c, r, p)),
        (ri = !1),
        (T = n.memoizedState),
        (c.state = T),
        Mt(n, r, c, a));
      var U = n.memoizedState;
      d !== M || T !== U || tn.current || ri
        ? (typeof $ == 'function' && (go(n, i, $, r), (U = n.memoizedState)),
          (w = ri || $l(n, i, w, r, T, U, p) || !1)
            ? (E ||
                (typeof c.UNSAFE_componentWillUpdate != 'function' &&
                  typeof c.componentWillUpdate != 'function') ||
                (typeof c.componentWillUpdate == 'function' && c.componentWillUpdate(r, U, p),
                typeof c.UNSAFE_componentWillUpdate == 'function' &&
                  c.UNSAFE_componentWillUpdate(r, U, p)),
              typeof c.componentDidUpdate == 'function' && (n.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == 'function' && (n.flags |= 1024))
            : (typeof c.componentDidUpdate != 'function' ||
                (d === e.memoizedProps && T === e.memoizedState) ||
                (n.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != 'function' ||
                (d === e.memoizedProps && T === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = r),
              (n.memoizedState = U)),
          (c.props = r),
          (c.state = U),
          (c.context = p),
          (r = w))
        : (typeof c.componentDidUpdate != 'function' ||
            (d === e.memoizedProps && T === e.memoizedState) ||
            (n.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != 'function' ||
            (d === e.memoizedProps && T === e.memoizedState) ||
            (n.flags |= 1024),
          (r = !1));
    }
    return bo(e, n, i, r, o, a);
  }
  function bo(e, n, i, r, a, o) {
    Yl(e, n);
    var c = (n.flags & 128) !== 0;
    if (!r && !c) return (a && al(n, i, !1), Un(e, n, o));
    ((r = n.stateNode), (Rd.current = n));
    var d = c && typeof i.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (n.flags |= 1),
      e !== null && c
        ? ((n.child = Hi(n, e.child, null, o)), (n.child = Hi(n, null, d, o)))
        : nn(e, n, d, o),
      (n.memoizedState = r.state),
      a && al(n, i, !0),
      n.child
    );
  }
  function nc(e) {
    var n = e.stateNode;
    (n.pendingContext
      ? rl(e, n.pendingContext, n.pendingContext !== n.context)
      : n.context && rl(e, n.context, !1),
      ro(e, n.containerInfo));
  }
  function ic(e, n, i, r, a) {
    return (Vi(), Za(a), (n.flags |= 256), nn(e, n, i, r), n.child);
  }
  var wo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ko(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function rc(e, n, i) {
    var r = n.pendingProps,
      a = Se.current,
      o = !1,
      c = (n.flags & 128) !== 0,
      d;
    if (
      ((d = c) || (d = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
      d ? ((o = !0), (n.flags &= -129)) : (e === null || e.memoizedState !== null) && (a |= 1),
      xe(Se, a & 1),
      e === null)
    )
      return (
        Qa(n),
        (e = n.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((n.mode & 1) === 0
              ? (n.lanes = 1)
              : e.data === '$!'
                ? (n.lanes = 8)
                : (n.lanes = 1073741824),
            null)
          : ((c = r.children),
            (e = r.fallback),
            o
              ? ((r = n.mode),
                (o = n.child),
                (c = { mode: 'hidden', children: c }),
                (r & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = c))
                  : (o = Yt(c, r, 0, null)),
                (e = ji(e, r, i, null)),
                (o.return = n),
                (e.return = n),
                (o.sibling = e),
                (n.child = o),
                (n.child.memoizedState = ko(i)),
                (n.memoizedState = wo),
                e)
              : No(n, c))
      );
    if (((a = e.memoizedState), a !== null && ((d = a.dehydrated), d !== null)))
      return Dd(e, n, c, r, d, a, i);
    if (o) {
      ((o = r.fallback), (c = n.mode), (a = e.child), (d = a.sibling));
      var p = { mode: 'hidden', children: r.children };
      return (
        (c & 1) === 0 && n.child !== a
          ? ((r = n.child), (r.childLanes = 0), (r.pendingProps = p), (n.deletions = null))
          : ((r = ui(a, p)), (r.subtreeFlags = a.subtreeFlags & 14680064)),
        d !== null ? (o = ui(d, o)) : ((o = ji(o, c, i, null)), (o.flags |= 2)),
        (o.return = n),
        (r.return = n),
        (r.sibling = o),
        (n.child = r),
        (r = o),
        (o = n.child),
        (c = e.child.memoizedState),
        (c =
          c === null
            ? ko(i)
            : { baseLanes: c.baseLanes | i, cachePool: null, transitions: c.transitions }),
        (o.memoizedState = c),
        (o.childLanes = e.childLanes & ~i),
        (n.memoizedState = wo),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = ui(o, { mode: 'visible', children: r.children })),
      (n.mode & 1) === 0 && (r.lanes = i),
      (r.return = n),
      (r.sibling = null),
      e !== null &&
        ((i = n.deletions), i === null ? ((n.deletions = [e]), (n.flags |= 16)) : i.push(e)),
      (n.child = r),
      (n.memoizedState = null),
      r
    );
  }
  function No(e, n) {
    return (
      (n = Yt({ mode: 'visible', children: n }, e.mode, 0, null)),
      (n.return = e),
      (e.child = n)
    );
  }
  function Ot(e, n, i, r) {
    return (
      r !== null && Za(r),
      Hi(n, e.child, null, i),
      (e = No(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function Dd(e, n, i, r, a, o, c) {
    if (i)
      return n.flags & 256
        ? ((n.flags &= -257), (r = yo(Error(s(422)))), Ot(e, n, c, r))
        : n.memoizedState !== null
          ? ((n.child = e.child), (n.flags |= 128), null)
          : ((o = r.fallback),
            (a = n.mode),
            (r = Yt({ mode: 'visible', children: r.children }, a, 0, null)),
            (o = ji(o, a, c, null)),
            (o.flags |= 2),
            (r.return = n),
            (o.return = n),
            (r.sibling = o),
            (n.child = r),
            (n.mode & 1) !== 0 && Hi(n, e.child, null, c),
            (n.child.memoizedState = ko(c)),
            (n.memoizedState = wo),
            o);
    if ((n.mode & 1) === 0) return Ot(e, n, c, null);
    if (a.data === '$!') {
      if (((r = a.nextSibling && a.nextSibling.dataset), r)) var d = r.dgst;
      return ((r = d), (o = Error(s(419))), (r = yo(o, r, void 0)), Ot(e, n, c, r));
    }
    if (((d = (c & e.childLanes) !== 0), on || d)) {
      if (((r = Oe), r !== null)) {
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
        ((a = (a & (r.suspendedLanes | c)) !== 0 ? 0 : a),
          a !== 0 && a !== o.retryLane && ((o.retryLane = a), $n(e, a), Pn(r, e, a, -1)));
      }
      return (Wo(), (r = yo(Error(s(421)))), Ot(e, n, c, r));
    }
    return a.data === '$?'
      ? ((n.flags |= 128), (n.child = e.child), (n = Gd.bind(null, e)), (a._reactRetry = n), null)
      : ((e = o.treeContext),
        (pn = Yn(a.nextSibling)),
        (mn = n),
        (je = !0),
        (Nn = null),
        e !== null &&
          ((gn[vn++] = Wn),
          (gn[vn++] = On),
          (gn[vn++] = gi),
          (Wn = e.id),
          (On = e.overflow),
          (gi = n)),
        (n = No(n, r.children)),
        (n.flags |= 4096),
        n);
  }
  function tc(e, n, i) {
    e.lanes |= n;
    var r = e.alternate;
    (r !== null && (r.lanes |= n), eo(e.return, n, i));
  }
  function jo(e, n, i, r, a) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: i,
          tailMode: a,
        })
      : ((o.isBackwards = n),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = i),
        (o.tailMode = a));
  }
  function ac(e, n, i) {
    var r = n.pendingProps,
      a = r.revealOrder,
      o = r.tail;
    if ((nn(e, n, r.children, i), (r = Se.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (n.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && tc(e, i, n);
          else if (e.tag === 19) tc(e, i, n);
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
      r &= 1;
    }
    if ((xe(Se, r), (n.mode & 1) === 0)) n.memoizedState = null;
    else
      switch (a) {
        case 'forwards':
          for (i = n.child, a = null; i !== null; )
            ((e = i.alternate), e !== null && Rt(e) === null && (a = i), (i = i.sibling));
          ((i = a),
            i === null ? ((a = n.child), (n.child = null)) : ((a = i.sibling), (i.sibling = null)),
            jo(n, !1, a, i, o));
          break;
        case 'backwards':
          for (i = null, a = n.child, n.child = null; a !== null; ) {
            if (((e = a.alternate), e !== null && Rt(e) === null)) {
              n.child = a;
              break;
            }
            ((e = a.sibling), (a.sibling = i), (i = a), (a = e));
          }
          jo(n, !0, i, null, o);
          break;
        case 'together':
          jo(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function $t(e, n) {
    (n.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
  }
  function Un(e, n, i) {
    if (
      (e !== null && (n.dependencies = e.dependencies), (bi |= n.lanes), (i & n.childLanes) === 0)
    )
      return null;
    if (e !== null && n.child !== e.child) throw Error(s(153));
    if (n.child !== null) {
      for (e = n.child, i = ui(e, e.pendingProps), n.child = i, i.return = n; e.sibling !== null; )
        ((e = e.sibling), (i = i.sibling = ui(e, e.pendingProps)), (i.return = n));
      i.sibling = null;
    }
    return n.child;
  }
  function Fd(e, n, i) {
    switch (n.tag) {
      case 3:
        (nc(n), Vi());
        break;
      case 5:
        _l(n);
        break;
      case 1:
        an(n.type) && kt(n);
        break;
      case 4:
        ro(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context,
          a = n.memoizedProps.value;
        (xe(Tt, r._currentValue), (r._currentValue = a));
        break;
      case 13:
        if (((r = n.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (xe(Se, Se.current & 1), (n.flags |= 128), null)
            : (i & n.child.childLanes) !== 0
              ? rc(e, n, i)
              : (xe(Se, Se.current & 1), (e = Un(e, n, i)), e !== null ? e.sibling : null);
        xe(Se, Se.current & 1);
        break;
      case 19:
        if (((r = (i & n.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return ac(e, n, i);
          n.flags |= 128;
        }
        if (
          ((a = n.memoizedState),
          a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          xe(Se, Se.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((n.lanes = 0), Jl(e, n, i));
    }
    return Un(e, n, i);
  }
  var oc, So, sc, lc;
  ((oc = function (e, n) {
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
    (So = function () {}),
    (sc = function (e, n, i, r) {
      var a = e.memoizedProps;
      if (a !== r) {
        ((e = n.stateNode), _i(Rn.current));
        var o = null;
        switch (i) {
          case 'input':
            ((a = Vn(e, a)), (r = Vn(e, r)), (o = []));
            break;
          case 'select':
            ((a = O({}, a, { value: void 0 })), (r = O({}, r, { value: void 0 })), (o = []));
            break;
          case 'textarea':
            ((a = Ei(e, a)), (r = Ei(e, r)), (o = []));
            break;
          default:
            typeof a.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = xt);
        }
        ar(i, r);
        var c;
        i = null;
        for (w in a)
          if (!r.hasOwnProperty(w) && a.hasOwnProperty(w) && a[w] != null)
            if (w === 'style') {
              var d = a[w];
              for (c in d) d.hasOwnProperty(c) && (i || (i = {}), (i[c] = ''));
            } else
              w !== 'dangerouslySetInnerHTML' &&
                w !== 'children' &&
                w !== 'suppressContentEditableWarning' &&
                w !== 'suppressHydrationWarning' &&
                w !== 'autoFocus' &&
                (b.hasOwnProperty(w) ? o || (o = []) : (o = o || []).push(w, null));
        for (w in r) {
          var p = r[w];
          if (
            ((d = a != null ? a[w] : void 0),
            r.hasOwnProperty(w) && p !== d && (p != null || d != null))
          )
            if (w === 'style')
              if (d) {
                for (c in d)
                  !d.hasOwnProperty(c) ||
                    (p && p.hasOwnProperty(c)) ||
                    (i || (i = {}), (i[c] = ''));
                for (c in p) p.hasOwnProperty(c) && d[c] !== p[c] && (i || (i = {}), (i[c] = p[c]));
              } else (i || (o || (o = []), o.push(w, i)), (i = p));
            else
              w === 'dangerouslySetInnerHTML'
                ? ((p = p ? p.__html : void 0),
                  (d = d ? d.__html : void 0),
                  p != null && d !== p && (o = o || []).push(w, p))
                : w === 'children'
                  ? (typeof p != 'string' && typeof p != 'number') || (o = o || []).push(w, '' + p)
                  : w !== 'suppressContentEditableWarning' &&
                    w !== 'suppressHydrationWarning' &&
                    (b.hasOwnProperty(w)
                      ? (p != null && w === 'onScroll' && we('scroll', e), o || d === p || (o = []))
                      : (o = o || []).push(w, p));
        }
        i && (o = o || []).push('style', i);
        var w = o;
        (n.updateQueue = w) && (n.flags |= 4);
      }
    }),
    (lc = function (e, n, i, r) {
      i !== r && (n.flags |= 4);
    }));
  function Wr(e, n) {
    if (!je)
      switch (e.tailMode) {
        case 'hidden':
          n = e.tail;
          for (var i = null; n !== null; ) (n.alternate !== null && (i = n), (n = n.sibling));
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case 'collapsed':
          i = e.tail;
          for (var r = null; i !== null; ) (i.alternate !== null && (r = i), (i = i.sibling));
          r === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Je(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      r = 0;
    if (n)
      for (var a = e.child; a !== null; )
        ((i |= a.lanes | a.childLanes),
          (r |= a.subtreeFlags & 14680064),
          (r |= a.flags & 14680064),
          (a.return = e),
          (a = a.sibling));
    else
      for (a = e.child; a !== null; )
        ((i |= a.lanes | a.childLanes),
          (r |= a.subtreeFlags),
          (r |= a.flags),
          (a.return = e),
          (a = a.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = i), n);
  }
  function zd(e, n, i) {
    var r = n.pendingProps;
    switch ((Ga(n), n.tag)) {
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
        return (Je(n), null);
      case 1:
        return (an(n.type) && wt(), Je(n), null);
      case 3:
        return (
          (r = n.stateNode),
          Qi(),
          ke(tn),
          ke(Ze),
          oo(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ct(n)
              ? (n.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), Nn !== null && (zo(Nn), (Nn = null)))),
          So(e, n),
          Je(n),
          null
        );
      case 5:
        to(n);
        var a = _i(Dr.current);
        if (((i = n.type), e !== null && n.stateNode != null))
          (sc(e, n, i, r, a), e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152)));
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(s(166));
            return (Je(n), null);
          }
          if (((e = _i(Rn.current)), Ct(n))) {
            ((r = n.stateNode), (i = n.type));
            var o = n.memoizedProps;
            switch (((r[Mn] = n), (r[Tr] = o), (e = (n.mode & 1) !== 0), i)) {
              case 'dialog':
                (we('cancel', r), we('close', r));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                we('load', r);
                break;
              case 'video':
              case 'audio':
                for (a = 0; a < Sr.length; a++) we(Sr[a], r);
                break;
              case 'source':
                we('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                (we('error', r), we('load', r));
                break;
              case 'details':
                we('toggle', r);
                break;
              case 'input':
                (Qr(r, o), we('invalid', r));
                break;
              case 'select':
                ((r._wrapperState = { wasMultiple: !!o.multiple }), we('invalid', r));
                break;
              case 'textarea':
                (Li(r, o), we('invalid', r));
            }
            (ar(i, o), (a = null));
            for (var c in o)
              if (o.hasOwnProperty(c)) {
                var d = o[c];
                c === 'children'
                  ? typeof d == 'string'
                    ? r.textContent !== d &&
                      (o.suppressHydrationWarning !== !0 && _t(r.textContent, d, e),
                      (a = ['children', d]))
                    : typeof d == 'number' &&
                      r.textContent !== '' + d &&
                      (o.suppressHydrationWarning !== !0 && _t(r.textContent, d, e),
                      (a = ['children', '' + d]))
                  : b.hasOwnProperty(c) && d != null && c === 'onScroll' && we('scroll', r);
              }
            switch (i) {
              case 'input':
                (Si(r), rr(r, o, !0));
                break;
              case 'textarea':
                (Si(r), j(r));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof o.onClick == 'function' && (r.onclick = xt);
            }
            ((r = a), (n.updateQueue = r), r !== null && (n.flags |= 4));
          } else {
            ((c = a.nodeType === 9 ? a : a.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = Qe(i)),
              e === 'http://www.w3.org/1999/xhtml'
                ? i === 'script'
                  ? ((e = c.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == 'string'
                    ? (e = c.createElement(i, { is: r.is }))
                    : ((e = c.createElement(i)),
                      i === 'select' &&
                        ((c = e), r.multiple ? (c.multiple = !0) : r.size && (c.size = r.size)))
                : (e = c.createElementNS(e, i)),
              (e[Mn] = n),
              (e[Tr] = r),
              oc(e, n, !1, !1),
              (n.stateNode = e));
            e: {
              switch (((c = or(i, r)), i)) {
                case 'dialog':
                  (we('cancel', e), we('close', e), (a = r));
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  (we('load', e), (a = r));
                  break;
                case 'video':
                case 'audio':
                  for (a = 0; a < Sr.length; a++) we(Sr[a], e);
                  a = r;
                  break;
                case 'source':
                  (we('error', e), (a = r));
                  break;
                case 'img':
                case 'image':
                case 'link':
                  (we('error', e), we('load', e), (a = r));
                  break;
                case 'details':
                  (we('toggle', e), (a = r));
                  break;
                case 'input':
                  (Qr(e, r), (a = Vn(e, r)), we('invalid', e));
                  break;
                case 'option':
                  a = r;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (a = O({}, r, { value: void 0 })),
                    we('invalid', e));
                  break;
                case 'textarea':
                  (Li(e, r), (a = Ei(e, r)), we('invalid', e));
                  break;
                default:
                  a = r;
              }
              (ar(i, a), (d = a));
              for (o in d)
                if (d.hasOwnProperty(o)) {
                  var p = d[o];
                  o === 'style'
                    ? Jr(e, p)
                    : o === 'dangerouslySetInnerHTML'
                      ? ((p = p ? p.__html : void 0), p != null && Ee(e, p))
                      : o === 'children'
                        ? typeof p == 'string'
                          ? (i !== 'textarea' || p !== '') && ye(e, p)
                          : typeof p == 'number' && ye(e, '' + p)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (b.hasOwnProperty(o)
                            ? p != null && o === 'onScroll' && we('scroll', e)
                            : p != null && re(e, o, p, c));
                }
              switch (i) {
                case 'input':
                  (Si(e), rr(e, r, !1));
                  break;
                case 'textarea':
                  (Si(e), j(e));
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + le(r.value));
                  break;
                case 'select':
                  ((e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? zn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null && zn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof a.onClick == 'function' && (e.onclick = xt);
              }
              switch (i) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  r = !!r.autoFocus;
                  break e;
                case 'img':
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (n.flags |= 4);
          }
          n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
        }
        return (Je(n), null);
      case 6:
        if (e && n.stateNode != null) lc(e, n, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && n.stateNode === null) throw Error(s(166));
          if (((i = _i(Dr.current)), _i(Rn.current), Ct(n))) {
            if (
              ((r = n.stateNode),
              (i = n.memoizedProps),
              (r[Mn] = n),
              (o = r.nodeValue !== i) && ((e = mn), e !== null))
            )
              switch (e.tag) {
                case 3:
                  _t(r.nodeValue, i, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    _t(r.nodeValue, i, (e.mode & 1) !== 0);
              }
            o && (n.flags |= 4);
          } else
            ((r = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(r)),
              (r[Mn] = n),
              (n.stateNode = r));
        }
        return (Je(n), null);
      case 13:
        if (
          (ke(Se),
          (r = n.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (je && pn !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0)
            (dl(), Vi(), (n.flags |= 98560), (o = !1));
          else if (((o = Ct(n)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (((o = n.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(s(317));
              o[Mn] = n;
            } else (Vi(), (n.flags & 128) === 0 && (n.memoizedState = null), (n.flags |= 4));
            (Je(n), (o = !1));
          } else (Nn !== null && (zo(Nn), (Nn = null)), (o = !0));
          if (!o) return n.flags & 65536 ? n : null;
        }
        return (n.flags & 128) !== 0
          ? ((n.lanes = i), n)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((n.child.flags |= 8192),
              (n.mode & 1) !== 0 &&
                (e === null || (Se.current & 1) !== 0 ? Ae === 0 && (Ae = 3) : Wo())),
            n.updateQueue !== null && (n.flags |= 4),
            Je(n),
            null);
      case 4:
        return (Qi(), So(e, n), e === null && Cr(n.stateNode.containerInfo), Je(n), null);
      case 10:
        return (Ya(n.type._context), Je(n), null);
      case 17:
        return (an(n.type) && wt(), Je(n), null);
      case 19:
        if ((ke(Se), (o = n.memoizedState), o === null)) return (Je(n), null);
        if (((r = (n.flags & 128) !== 0), (c = o.rendering), c === null))
          if (r) Wr(o, !1);
          else {
            if (Ae !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = n.child; e !== null; ) {
                if (((c = Rt(e)), c !== null)) {
                  for (
                    n.flags |= 128,
                      Wr(o, !1),
                      r = c.updateQueue,
                      r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                      n.subtreeFlags = 0,
                      r = i,
                      i = n.child;
                    i !== null;

                  )
                    ((o = i),
                      (e = r),
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
                      (i = i.sibling));
                  return (xe(Se, (Se.current & 1) | 2), n.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Le() > Yi &&
              ((n.flags |= 128), (r = !0), Wr(o, !1), (n.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Rt(c)), e !== null)) {
              if (
                ((n.flags |= 128),
                (r = !0),
                (i = e.updateQueue),
                i !== null && ((n.updateQueue = i), (n.flags |= 4)),
                Wr(o, !0),
                o.tail === null && o.tailMode === 'hidden' && !c.alternate && !je)
              )
                return (Je(n), null);
            } else
              2 * Le() - o.renderingStartTime > Yi &&
                i !== 1073741824 &&
                ((n.flags |= 128), (r = !0), Wr(o, !1), (n.lanes = 4194304));
          o.isBackwards
            ? ((c.sibling = n.child), (n.child = c))
            : ((i = o.last), i !== null ? (i.sibling = c) : (n.child = c), (o.last = c));
        }
        return o.tail !== null
          ? ((n = o.tail),
            (o.rendering = n),
            (o.tail = n.sibling),
            (o.renderingStartTime = Le()),
            (n.sibling = null),
            (i = Se.current),
            xe(Se, r ? (i & 1) | 2 : i & 1),
            n)
          : (Je(n), null);
      case 22:
      case 23:
        return (
          Ao(),
          (r = n.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
          r && (n.mode & 1) !== 0
            ? (fn & 1073741824) !== 0 && (Je(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : Je(n),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function Id(e, n) {
    switch ((Ga(n), n.tag)) {
      case 1:
        return (
          an(n.type) && wt(),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          Qi(),
          ke(tn),
          ke(Ze),
          oo(),
          (e = n.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 5:
        return (to(n), null);
      case 13:
        if ((ke(Se), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
          if (n.alternate === null) throw Error(s(340));
          Vi();
        }
        return ((e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null);
      case 19:
        return (ke(Se), null);
      case 4:
        return (Qi(), null);
      case 10:
        return (Ya(n.type._context), null);
      case 22:
      case 23:
        return (Ao(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Bt = !1,
    Ye = !1,
    Ad = typeof WeakSet == 'function' ? WeakSet : Set,
    B = null;
  function Xi(e, n) {
    var i = e.ref;
    if (i !== null)
      if (typeof i == 'function')
        try {
          i(null);
        } catch (r) {
          Te(e, n, r);
        }
      else i.current = null;
  }
  function cc(e, n, i) {
    try {
      i();
    } catch (r) {
      Te(e, n, r);
    }
  }
  var uc = !1;
  function Wd(e, n) {
    if (((Aa = lt), (e = $s()), Ea(e))) {
      if ('selectionStart' in e) var i = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          i = ((i = e.ownerDocument) && i.defaultView) || window;
          var r = i.getSelection && i.getSelection();
          if (r && r.rangeCount !== 0) {
            i = r.anchorNode;
            var a = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              (i.nodeType, o.nodeType);
            } catch {
              i = null;
              break e;
            }
            var c = 0,
              d = -1,
              p = -1,
              w = 0,
              E = 0,
              M = e,
              T = null;
            n: for (;;) {
              for (
                var $;
                M !== i || (a !== 0 && M.nodeType !== 3) || (d = c + a),
                  M !== o || (r !== 0 && M.nodeType !== 3) || (p = c + r),
                  M.nodeType === 3 && (c += M.nodeValue.length),
                  ($ = M.firstChild) !== null;

              )
                ((T = M), (M = $));
              for (;;) {
                if (M === e) break n;
                if (
                  (T === i && ++w === a && (d = c),
                  T === o && ++E === r && (p = c),
                  ($ = M.nextSibling) !== null)
                )
                  break;
                ((M = T), (T = M.parentNode));
              }
              M = $;
            }
            i = d === -1 || p === -1 ? null : { start: d, end: p };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Wa = { focusedElem: e, selectionRange: i }, lt = !1, B = n; B !== null; )
      if (((n = B), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = n), (B = e));
      else
        for (; B !== null; ) {
          n = B;
          try {
            var U = n.alternate;
            if ((n.flags & 1024) !== 0)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (U !== null) {
                    var q = U.memoizedProps,
                      Me = U.memoizedState,
                      _ = n.stateNode,
                      v = _.getSnapshotBeforeUpdate(
                        n.elementType === n.type ? q : jn(n.type, q),
                        Me
                      );
                    _.__reactInternalSnapshotBeforeUpdate = v;
                  }
                  break;
                case 3:
                  var x = n.stateNode.containerInfo;
                  x.nodeType === 1
                    ? (x.textContent = '')
                    : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (R) {
            Te(n, n.return, R);
          }
          if (((e = n.sibling), e !== null)) {
            ((e.return = n.return), (B = e));
            break;
          }
          B = n.return;
        }
    return ((U = uc), (uc = !1), U);
  }
  function Or(e, n, i) {
    var r = n.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var a = (r = r.next);
      do {
        if ((a.tag & e) === e) {
          var o = a.destroy;
          ((a.destroy = void 0), o !== void 0 && cc(n, i, o));
        }
        a = a.next;
      } while (a !== r);
    }
  }
  function Ut(e, n) {
    if (((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)) {
      var i = (n = n.next);
      do {
        if ((i.tag & e) === e) {
          var r = i.create;
          i.destroy = r();
        }
        i = i.next;
      } while (i !== n);
    }
  }
  function Co(e) {
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
  function dc(e) {
    var n = e.alternate;
    (n !== null && ((e.alternate = null), dc(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((n = e.stateNode),
        n !== null && (delete n[Mn], delete n[Tr], delete n[Ua], delete n[bd], delete n[wd])),
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
  function pc(e) {
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
  function Po(e, n, i) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        n
          ? i.nodeType === 8
            ? i.parentNode.insertBefore(e, n)
            : i.insertBefore(e, n)
          : (i.nodeType === 8
              ? ((n = i.parentNode), n.insertBefore(e, i))
              : ((n = i), n.appendChild(e)),
            (i = i._reactRootContainer),
            i != null || n.onclick !== null || (n.onclick = xt)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Po(e, n, i), e = e.sibling; e !== null; ) (Po(e, n, i), (e = e.sibling));
  }
  function To(e, n, i) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), n ? i.insertBefore(e, n) : i.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (To(e, n, i), e = e.sibling; e !== null; ) (To(e, n, i), (e = e.sibling));
  }
  var Ve = null,
    Sn = !1;
  function ai(e, n, i) {
    for (i = i.child; i !== null; ) (fc(e, n, i), (i = i.sibling));
  }
  function fc(e, n, i) {
    if (Ln && typeof Ln.onCommitFiberUnmount == 'function')
      try {
        Ln.onCommitFiberUnmount(it, i);
      } catch {}
    switch (i.tag) {
      case 5:
        Ye || Xi(i, n);
      case 6:
        var r = Ve,
          a = Sn;
        ((Ve = null),
          ai(e, n, i),
          (Ve = r),
          (Sn = a),
          Ve !== null &&
            (Sn
              ? ((e = Ve),
                (i = i.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i))
              : Ve.removeChild(i.stateNode)));
        break;
      case 18:
        Ve !== null &&
          (Sn
            ? ((e = Ve),
              (i = i.stateNode),
              e.nodeType === 8 ? Ba(e.parentNode, i) : e.nodeType === 1 && Ba(e, i),
              yr(e))
            : Ba(Ve, i.stateNode));
        break;
      case 4:
        ((r = Ve),
          (a = Sn),
          (Ve = i.stateNode.containerInfo),
          (Sn = !0),
          ai(e, n, i),
          (Ve = r),
          (Sn = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ye && ((r = i.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          a = r = r.next;
          do {
            var o = a,
              c = o.destroy;
            ((o = o.tag),
              c !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && cc(i, n, c),
              (a = a.next));
          } while (a !== r);
        }
        ai(e, n, i);
        break;
      case 1:
        if (!Ye && (Xi(i, n), (r = i.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            ((r.props = i.memoizedProps), (r.state = i.memoizedState), r.componentWillUnmount());
          } catch (d) {
            Te(i, n, d);
          }
        ai(e, n, i);
        break;
      case 21:
        ai(e, n, i);
        break;
      case 22:
        i.mode & 1
          ? ((Ye = (r = Ye) || i.memoizedState !== null), ai(e, n, i), (Ye = r))
          : ai(e, n, i);
        break;
      default:
        ai(e, n, i);
    }
  }
  function hc(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      (i === null && (i = e.stateNode = new Ad()),
        n.forEach(function (r) {
          var a = Kd.bind(null, e, r);
          i.has(r) || (i.add(r), r.then(a, a));
        }));
    }
  }
  function Cn(e, n) {
    var i = n.deletions;
    if (i !== null)
      for (var r = 0; r < i.length; r++) {
        var a = i[r];
        try {
          var o = e,
            c = n,
            d = c;
          e: for (; d !== null; ) {
            switch (d.tag) {
              case 5:
                ((Ve = d.stateNode), (Sn = !1));
                break e;
              case 3:
                ((Ve = d.stateNode.containerInfo), (Sn = !0));
                break e;
              case 4:
                ((Ve = d.stateNode.containerInfo), (Sn = !0));
                break e;
            }
            d = d.return;
          }
          if (Ve === null) throw Error(s(160));
          (fc(o, c, a), (Ve = null), (Sn = !1));
          var p = a.alternate;
          (p !== null && (p.return = null), (a.return = null));
        } catch (w) {
          Te(a, n, w);
        }
      }
    if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) (gc(n, e), (n = n.sibling));
  }
  function gc(e, n) {
    var i = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Cn(n, e), Fn(e), r & 4)) {
          try {
            (Or(3, e, e.return), Ut(3, e));
          } catch (q) {
            Te(e, e.return, q);
          }
          try {
            Or(5, e, e.return);
          } catch (q) {
            Te(e, e.return, q);
          }
        }
        break;
      case 1:
        (Cn(n, e), Fn(e), r & 512 && i !== null && Xi(i, i.return));
        break;
      case 5:
        if ((Cn(n, e), Fn(e), r & 512 && i !== null && Xi(i, i.return), e.flags & 32)) {
          var a = e.stateNode;
          try {
            ye(a, '');
          } catch (q) {
            Te(e, e.return, q);
          }
        }
        if (r & 4 && ((a = e.stateNode), a != null)) {
          var o = e.memoizedProps,
            c = i !== null ? i.memoizedProps : o,
            d = e.type,
            p = e.updateQueue;
          if (((e.updateQueue = null), p !== null))
            try {
              (d === 'input' && o.type === 'radio' && o.name != null && Zr(a, o), or(d, c));
              var w = or(d, o);
              for (c = 0; c < p.length; c += 2) {
                var E = p[c],
                  M = p[c + 1];
                E === 'style'
                  ? Jr(a, M)
                  : E === 'dangerouslySetInnerHTML'
                    ? Ee(a, M)
                    : E === 'children'
                      ? ye(a, M)
                      : re(a, E, M, w);
              }
              switch (d) {
                case 'input':
                  Pi(a, o);
                  break;
                case 'textarea':
                  Ue(a, o);
                  break;
                case 'select':
                  var T = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!o.multiple;
                  var $ = o.value;
                  $ != null
                    ? zn(a, !!o.multiple, $, !1)
                    : T !== !!o.multiple &&
                      (o.defaultValue != null
                        ? zn(a, !!o.multiple, o.defaultValue, !0)
                        : zn(a, !!o.multiple, o.multiple ? [] : '', !1));
              }
              a[Tr] = o;
            } catch (q) {
              Te(e, e.return, q);
            }
        }
        break;
      case 6:
        if ((Cn(n, e), Fn(e), r & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((a = e.stateNode), (o = e.memoizedProps));
          try {
            a.nodeValue = o;
          } catch (q) {
            Te(e, e.return, q);
          }
        }
        break;
      case 3:
        if ((Cn(n, e), Fn(e), r & 4 && i !== null && i.memoizedState.isDehydrated))
          try {
            yr(n.containerInfo);
          } catch (q) {
            Te(e, e.return, q);
          }
        break;
      case 4:
        (Cn(n, e), Fn(e));
        break;
      case 13:
        (Cn(n, e),
          Fn(e),
          (a = e.child),
          a.flags & 8192 &&
            ((o = a.memoizedState !== null),
            (a.stateNode.isHidden = o),
            !o || (a.alternate !== null && a.alternate.memoizedState !== null) || (Mo = Le())),
          r & 4 && hc(e));
        break;
      case 22:
        if (
          ((E = i !== null && i.memoizedState !== null),
          e.mode & 1 ? ((Ye = (w = Ye) || E), Cn(n, e), (Ye = w)) : Cn(n, e),
          Fn(e),
          r & 8192)
        ) {
          if (
            ((w = e.memoizedState !== null), (e.stateNode.isHidden = w) && !E && (e.mode & 1) !== 0)
          )
            for (B = e, E = e.child; E !== null; ) {
              for (M = B = E; B !== null; ) {
                switch (((T = B), ($ = T.child), T.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Or(4, T, T.return);
                    break;
                  case 1:
                    Xi(T, T.return);
                    var U = T.stateNode;
                    if (typeof U.componentWillUnmount == 'function') {
                      ((r = T), (i = T.return));
                      try {
                        ((n = r),
                          (U.props = n.memoizedProps),
                          (U.state = n.memoizedState),
                          U.componentWillUnmount());
                      } catch (q) {
                        Te(r, i, q);
                      }
                    }
                    break;
                  case 5:
                    Xi(T, T.return);
                    break;
                  case 22:
                    if (T.memoizedState !== null) {
                      _c(M);
                      continue;
                    }
                }
                $ !== null ? (($.return = T), (B = $)) : _c(M);
              }
              E = E.sibling;
            }
          e: for (E = null, M = e; ; ) {
            if (M.tag === 5) {
              if (E === null) {
                E = M;
                try {
                  ((a = M.stateNode),
                    w
                      ? ((o = a.style),
                        typeof o.setProperty == 'function'
                          ? o.setProperty('display', 'none', 'important')
                          : (o.display = 'none'))
                      : ((d = M.stateNode),
                        (p = M.memoizedProps.style),
                        (c = p != null && p.hasOwnProperty('display') ? p.display : null),
                        (d.style.display = tr('display', c))));
                } catch (q) {
                  Te(e, e.return, q);
                }
              }
            } else if (M.tag === 6) {
              if (E === null)
                try {
                  M.stateNode.nodeValue = w ? '' : M.memoizedProps;
                } catch (q) {
                  Te(e, e.return, q);
                }
            } else if (
              ((M.tag !== 22 && M.tag !== 23) || M.memoizedState === null || M === e) &&
              M.child !== null
            ) {
              ((M.child.return = M), (M = M.child));
              continue;
            }
            if (M === e) break e;
            for (; M.sibling === null; ) {
              if (M.return === null || M.return === e) break e;
              (E === M && (E = null), (M = M.return));
            }
            (E === M && (E = null), (M.sibling.return = M.return), (M = M.sibling));
          }
        }
        break;
      case 19:
        (Cn(n, e), Fn(e), r & 4 && hc(e));
        break;
      case 21:
        break;
      default:
        (Cn(n, e), Fn(e));
    }
  }
  function Fn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var i = e.return; i !== null; ) {
            if (mc(i)) {
              var r = i;
              break e;
            }
            i = i.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var a = r.stateNode;
            r.flags & 32 && (ye(a, ''), (r.flags &= -33));
            var o = pc(e);
            To(e, o, a);
            break;
          case 3:
          case 4:
            var c = r.stateNode.containerInfo,
              d = pc(e);
            Po(e, d, c);
            break;
          default:
            throw Error(s(161));
        }
      } catch (p) {
        Te(e, e.return, p);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Od(e, n, i) {
    ((B = e), vc(e));
  }
  function vc(e, n, i) {
    for (var r = (e.mode & 1) !== 0; B !== null; ) {
      var a = B,
        o = a.child;
      if (a.tag === 22 && r) {
        var c = a.memoizedState !== null || Bt;
        if (!c) {
          var d = a.alternate,
            p = (d !== null && d.memoizedState !== null) || Ye;
          d = Bt;
          var w = Ye;
          if (((Bt = c), (Ye = p) && !w))
            for (B = a; B !== null; )
              ((c = B),
                (p = c.child),
                c.tag === 22 && c.memoizedState !== null
                  ? xc(a)
                  : p !== null
                    ? ((p.return = c), (B = p))
                    : xc(a));
          for (; o !== null; ) ((B = o), vc(o), (o = o.sibling));
          ((B = a), (Bt = d), (Ye = w));
        }
        yc(e);
      } else (a.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = a), (B = o)) : yc(e);
    }
  }
  function yc(e) {
    for (; B !== null; ) {
      var n = B;
      if ((n.flags & 8772) !== 0) {
        var i = n.alternate;
        try {
          if ((n.flags & 8772) !== 0)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                Ye || Ut(5, n);
                break;
              case 1:
                var r = n.stateNode;
                if (n.flags & 4 && !Ye)
                  if (i === null) r.componentDidMount();
                  else {
                    var a =
                      n.elementType === n.type ? i.memoizedProps : jn(n.type, i.memoizedProps);
                    r.componentDidUpdate(a, i.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = n.updateQueue;
                o !== null && yl(n, o, r);
                break;
              case 3:
                var c = n.updateQueue;
                if (c !== null) {
                  if (((i = null), n.child !== null))
                    switch (n.child.tag) {
                      case 5:
                        i = n.child.stateNode;
                        break;
                      case 1:
                        i = n.child.stateNode;
                    }
                  yl(n, c, i);
                }
                break;
              case 5:
                var d = n.stateNode;
                if (i === null && n.flags & 4) {
                  i = d;
                  var p = n.memoizedProps;
                  switch (n.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      p.autoFocus && i.focus();
                      break;
                    case 'img':
                      p.src && (i.src = p.src);
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
                  var w = n.alternate;
                  if (w !== null) {
                    var E = w.memoizedState;
                    if (E !== null) {
                      var M = E.dehydrated;
                      M !== null && yr(M);
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
          Ye || (n.flags & 512 && Co(n));
        } catch (T) {
          Te(n, n.return, T);
        }
      }
      if (n === e) {
        B = null;
        break;
      }
      if (((i = n.sibling), i !== null)) {
        ((i.return = n.return), (B = i));
        break;
      }
      B = n.return;
    }
  }
  function _c(e) {
    for (; B !== null; ) {
      var n = B;
      if (n === e) {
        B = null;
        break;
      }
      var i = n.sibling;
      if (i !== null) {
        ((i.return = n.return), (B = i));
        break;
      }
      B = n.return;
    }
  }
  function xc(e) {
    for (; B !== null; ) {
      var n = B;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var i = n.return;
            try {
              Ut(4, n);
            } catch (p) {
              Te(n, i, p);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var a = n.return;
              try {
                r.componentDidMount();
              } catch (p) {
                Te(n, a, p);
              }
            }
            var o = n.return;
            try {
              Co(n);
            } catch (p) {
              Te(n, o, p);
            }
            break;
          case 5:
            var c = n.return;
            try {
              Co(n);
            } catch (p) {
              Te(n, c, p);
            }
        }
      } catch (p) {
        Te(n, n.return, p);
      }
      if (n === e) {
        B = null;
        break;
      }
      var d = n.sibling;
      if (d !== null) {
        ((d.return = n.return), (B = d));
        break;
      }
      B = n.return;
    }
  }
  var $d = Math.ceil,
    qt = ae.ReactCurrentDispatcher,
    Eo = ae.ReactCurrentOwner,
    xn = ae.ReactCurrentBatchConfig,
    se = 0,
    Oe = null,
    Fe = null,
    He = 0,
    fn = 0,
    Ji = ei(0),
    Ae = 0,
    $r = null,
    bi = 0,
    Vt = 0,
    Lo = 0,
    Br = null,
    sn = null,
    Mo = 0,
    Yi = 1 / 0,
    qn = null,
    Ht = !1,
    Ro = null,
    oi = null,
    Gt = !1,
    si = null,
    Kt = 0,
    Ur = 0,
    Do = null,
    Qt = -1,
    Zt = 0;
  function rn() {
    return (se & 6) !== 0 ? Le() : Qt !== -1 ? Qt : (Qt = Le());
  }
  function li(e) {
    return (e.mode & 1) === 0
      ? 1
      : (se & 2) !== 0 && He !== 0
        ? He & -He
        : Nd.transition !== null
          ? (Zt === 0 && (Zt = ms()), Zt)
          : ((e = pe), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : bs(e.type))), e);
  }
  function Pn(e, n, i, r) {
    if (50 < Ur) throw ((Ur = 0), (Do = null), Error(s(185)));
    (pr(e, i, r),
      ((se & 2) === 0 || e !== Oe) &&
        (e === Oe && ((se & 2) === 0 && (Vt |= i), Ae === 4 && ci(e, He)),
        ln(e, r),
        i === 1 && se === 0 && (n.mode & 1) === 0 && ((Yi = Le() + 500), Nt && ii())));
  }
  function ln(e, n) {
    var i = e.callbackNode;
    Nu(e, n);
    var r = at(e, e === Oe ? He : 0);
    if (r === 0) (i !== null && cs(i), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((n = r & -r), e.callbackPriority !== n)) {
      if ((i != null && cs(i), n === 1))
        (e.tag === 0 ? kd(wc.bind(null, e)) : ol(wc.bind(null, e)),
          _d(function () {
            (se & 6) === 0 && ii();
          }),
          (i = null));
      else {
        switch (ps(r)) {
          case 1:
            i = pa;
            break;
          case 4:
            i = us;
            break;
          case 16:
            i = nt;
            break;
          case 536870912:
            i = ds;
            break;
          default:
            i = nt;
        }
        i = Ec(i, bc.bind(null, e));
      }
      ((e.callbackPriority = n), (e.callbackNode = i));
    }
  }
  function bc(e, n) {
    if (((Qt = -1), (Zt = 0), (se & 6) !== 0)) throw Error(s(327));
    var i = e.callbackNode;
    if (er() && e.callbackNode !== i) return null;
    var r = at(e, e === Oe ? He : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || n) n = Xt(e, r);
    else {
      n = r;
      var a = se;
      se |= 2;
      var o = Nc();
      (Oe !== e || He !== n) && ((qn = null), (Yi = Le() + 500), ki(e, n));
      do
        try {
          qd();
          break;
        } catch (d) {
          kc(e, d);
        }
      while (!0);
      (Ja(), (qt.current = o), (se = a), Fe !== null ? (n = 0) : ((Oe = null), (He = 0), (n = Ae)));
    }
    if (n !== 0) {
      if ((n === 2 && ((a = fa(e)), a !== 0 && ((r = a), (n = Fo(e, a)))), n === 1))
        throw ((i = $r), ki(e, 0), ci(e, r), ln(e, Le()), i);
      if (n === 6) ci(e, r);
      else {
        if (
          ((a = e.current.alternate),
          (r & 30) === 0 &&
            !Bd(a) &&
            ((n = Xt(e, r)),
            n === 2 && ((o = fa(e)), o !== 0 && ((r = o), (n = Fo(e, o)))),
            n === 1))
        )
          throw ((i = $r), ki(e, 0), ci(e, r), ln(e, Le()), i);
        switch (((e.finishedWork = a), (e.finishedLanes = r), n)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Ni(e, sn, qn);
            break;
          case 3:
            if ((ci(e, r), (r & 130023424) === r && ((n = Mo + 500 - Le()), 10 < n))) {
              if (at(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & r) !== r)) {
                (rn(), (e.pingedLanes |= e.suspendedLanes & a));
                break;
              }
              e.timeoutHandle = $a(Ni.bind(null, e, sn, qn), n);
              break;
            }
            Ni(e, sn, qn);
            break;
          case 4:
            if ((ci(e, r), (r & 4194240) === r)) break;
            for (n = e.eventTimes, a = -1; 0 < r; ) {
              var c = 31 - wn(r);
              ((o = 1 << c), (c = n[c]), c > a && (a = c), (r &= ~o));
            }
            if (
              ((r = a),
              (r = Le() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * $d(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = $a(Ni.bind(null, e, sn, qn), r);
              break;
            }
            Ni(e, sn, qn);
            break;
          case 5:
            Ni(e, sn, qn);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (ln(e, Le()), e.callbackNode === i ? bc.bind(null, e) : null);
  }
  function Fo(e, n) {
    var i = Br;
    return (
      e.current.memoizedState.isDehydrated && (ki(e, n).flags |= 256),
      (e = Xt(e, n)),
      e !== 2 && ((n = sn), (sn = i), n !== null && zo(n)),
      e
    );
  }
  function zo(e) {
    sn === null ? (sn = e) : sn.push.apply(sn, e);
  }
  function Bd(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var i = n.updateQueue;
        if (i !== null && ((i = i.stores), i !== null))
          for (var r = 0; r < i.length; r++) {
            var a = i[r],
              o = a.getSnapshot;
            a = a.value;
            try {
              if (!kn(o(), a)) return !1;
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
  function ci(e, n) {
    for (
      n &= ~Lo, n &= ~Vt, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes;
      0 < n;

    ) {
      var i = 31 - wn(n),
        r = 1 << i;
      ((e[i] = -1), (n &= ~r));
    }
  }
  function wc(e) {
    if ((se & 6) !== 0) throw Error(s(327));
    er();
    var n = at(e, 0);
    if ((n & 1) === 0) return (ln(e, Le()), null);
    var i = Xt(e, n);
    if (e.tag !== 0 && i === 2) {
      var r = fa(e);
      r !== 0 && ((n = r), (i = Fo(e, r)));
    }
    if (i === 1) throw ((i = $r), ki(e, 0), ci(e, n), ln(e, Le()), i);
    if (i === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = n),
      Ni(e, sn, qn),
      ln(e, Le()),
      null
    );
  }
  function Io(e, n) {
    var i = se;
    se |= 1;
    try {
      return e(n);
    } finally {
      ((se = i), se === 0 && ((Yi = Le() + 500), Nt && ii()));
    }
  }
  function wi(e) {
    si !== null && si.tag === 0 && (se & 6) === 0 && er();
    var n = se;
    se |= 1;
    var i = xn.transition,
      r = pe;
    try {
      if (((xn.transition = null), (pe = 1), e)) return e();
    } finally {
      ((pe = r), (xn.transition = i), (se = n), (se & 6) === 0 && ii());
    }
  }
  function Ao() {
    ((fn = Ji.current), ke(Ji));
  }
  function ki(e, n) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var i = e.timeoutHandle;
    if ((i !== -1 && ((e.timeoutHandle = -1), yd(i)), Fe !== null))
      for (i = Fe.return; i !== null; ) {
        var r = i;
        switch ((Ga(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && wt());
            break;
          case 3:
            (Qi(), ke(tn), ke(Ze), oo());
            break;
          case 5:
            to(r);
            break;
          case 4:
            Qi();
            break;
          case 13:
            ke(Se);
            break;
          case 19:
            ke(Se);
            break;
          case 10:
            Ya(r.type._context);
            break;
          case 22:
          case 23:
            Ao();
        }
        i = i.return;
      }
    if (
      ((Oe = e),
      (Fe = e = ui(e.current, null)),
      (He = fn = n),
      (Ae = 0),
      ($r = null),
      (Lo = Vt = bi = 0),
      (sn = Br = null),
      yi !== null)
    ) {
      for (n = 0; n < yi.length; n++)
        if (((i = yi[n]), (r = i.interleaved), r !== null)) {
          i.interleaved = null;
          var a = r.next,
            o = i.pending;
          if (o !== null) {
            var c = o.next;
            ((o.next = a), (r.next = c));
          }
          i.pending = r;
        }
      yi = null;
    }
    return e;
  }
  function kc(e, n) {
    do {
      var i = Fe;
      try {
        if ((Ja(), (Dt.current = At), Ft)) {
          for (var r = Ce.memoizedState; r !== null; ) {
            var a = r.queue;
            (a !== null && (a.pending = null), (r = r.next));
          }
          Ft = !1;
        }
        if (
          ((xi = 0),
          (We = Ie = Ce = null),
          (Fr = !1),
          (zr = 0),
          (Eo.current = null),
          i === null || i.return === null)
        ) {
          ((Ae = 1), ($r = n), (Fe = null));
          break;
        }
        e: {
          var o = e,
            c = i.return,
            d = i,
            p = n;
          if (
            ((n = He),
            (d.flags |= 32768),
            p !== null && typeof p == 'object' && typeof p.then == 'function')
          ) {
            var w = p,
              E = d,
              M = E.tag;
            if ((E.mode & 1) === 0 && (M === 0 || M === 11 || M === 15)) {
              var T = E.alternate;
              T
                ? ((E.updateQueue = T.updateQueue),
                  (E.memoizedState = T.memoizedState),
                  (E.lanes = T.lanes))
                : ((E.updateQueue = null), (E.memoizedState = null));
            }
            var $ = Gl(c);
            if ($ !== null) {
              (($.flags &= -257), Kl($, c, d, o, n), $.mode & 1 && Hl(o, w, n), (n = $), (p = w));
              var U = n.updateQueue;
              if (U === null) {
                var q = new Set();
                (q.add(p), (n.updateQueue = q));
              } else U.add(p);
              break e;
            } else {
              if ((n & 1) === 0) {
                (Hl(o, w, n), Wo());
                break e;
              }
              p = Error(s(426));
            }
          } else if (je && d.mode & 1) {
            var Me = Gl(c);
            if (Me !== null) {
              ((Me.flags & 65536) === 0 && (Me.flags |= 256), Kl(Me, c, d, o, n), Za(Zi(p, d)));
              break e;
            }
          }
          ((o = p = Zi(p, d)),
            Ae !== 4 && (Ae = 2),
            Br === null ? (Br = [o]) : Br.push(o),
            (o = c));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536), (n &= -n), (o.lanes |= n));
                var _ = ql(o, p, n);
                vl(o, _);
                break e;
              case 1:
                d = p;
                var v = o.type,
                  x = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof v.getDerivedStateFromError == 'function' ||
                    (x !== null &&
                      typeof x.componentDidCatch == 'function' &&
                      (oi === null || !oi.has(x))))
                ) {
                  ((o.flags |= 65536), (n &= -n), (o.lanes |= n));
                  var R = Vl(o, d, n);
                  vl(o, R);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Sc(i);
      } catch (V) {
        ((n = V), Fe === i && i !== null && (Fe = i = i.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Nc() {
    var e = qt.current;
    return ((qt.current = At), e === null ? At : e);
  }
  function Wo() {
    ((Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4),
      Oe === null || ((bi & 268435455) === 0 && (Vt & 268435455) === 0) || ci(Oe, He));
  }
  function Xt(e, n) {
    var i = se;
    se |= 2;
    var r = Nc();
    (Oe !== e || He !== n) && ((qn = null), ki(e, n));
    do
      try {
        Ud();
        break;
      } catch (a) {
        kc(e, a);
      }
    while (!0);
    if ((Ja(), (se = i), (qt.current = r), Fe !== null)) throw Error(s(261));
    return ((Oe = null), (He = 0), Ae);
  }
  function Ud() {
    for (; Fe !== null; ) jc(Fe);
  }
  function qd() {
    for (; Fe !== null && !hu(); ) jc(Fe);
  }
  function jc(e) {
    var n = Tc(e.alternate, e, fn);
    ((e.memoizedProps = e.pendingProps), n === null ? Sc(e) : (Fe = n), (Eo.current = null));
  }
  function Sc(e) {
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
          ((Ae = 6), (Fe = null));
          return;
        }
      }
      if (((n = n.sibling), n !== null)) {
        Fe = n;
        return;
      }
      Fe = n = e;
    } while (n !== null);
    Ae === 0 && (Ae = 5);
  }
  function Ni(e, n, i) {
    var r = pe,
      a = xn.transition;
    try {
      ((xn.transition = null), (pe = 1), Vd(e, n, i, r));
    } finally {
      ((xn.transition = a), (pe = r));
    }
    return null;
  }
  function Vd(e, n, i, r) {
    do er();
    while (si !== null);
    if ((se & 6) !== 0) throw Error(s(327));
    i = e.finishedWork;
    var a = e.finishedLanes;
    if (i === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current)) throw Error(s(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var o = i.lanes | i.childLanes;
    if (
      (ju(e, o),
      e === Oe && ((Fe = Oe = null), (He = 0)),
      ((i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0) ||
        Gt ||
        ((Gt = !0),
        Ec(nt, function () {
          return (er(), null);
        })),
      (o = (i.flags & 15990) !== 0),
      (i.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = xn.transition), (xn.transition = null));
      var c = pe;
      pe = 1;
      var d = se;
      ((se |= 4),
        (Eo.current = null),
        Wd(e, i),
        gc(i, e),
        dd(Wa),
        (lt = !!Aa),
        (Wa = Aa = null),
        (e.current = i),
        Od(i),
        gu(),
        (se = d),
        (pe = c),
        (xn.transition = o));
    } else e.current = i;
    if (
      (Gt && ((Gt = !1), (si = e), (Kt = a)),
      (o = e.pendingLanes),
      o === 0 && (oi = null),
      _u(i.stateNode),
      ln(e, Le()),
      n !== null)
    )
      for (r = e.onRecoverableError, i = 0; i < n.length; i++)
        ((a = n[i]), r(a.value, { componentStack: a.stack, digest: a.digest }));
    if (Ht) throw ((Ht = !1), (e = Ro), (Ro = null), e);
    return (
      (Kt & 1) !== 0 && e.tag !== 0 && er(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === Do ? Ur++ : ((Ur = 0), (Do = e))) : (Ur = 0),
      ii(),
      null
    );
  }
  function er() {
    if (si !== null) {
      var e = ps(Kt),
        n = xn.transition,
        i = pe;
      try {
        if (((xn.transition = null), (pe = 16 > e ? 16 : e), si === null)) var r = !1;
        else {
          if (((e = si), (si = null), (Kt = 0), (se & 6) !== 0)) throw Error(s(331));
          var a = se;
          for (se |= 4, B = e.current; B !== null; ) {
            var o = B,
              c = o.child;
            if ((B.flags & 16) !== 0) {
              var d = o.deletions;
              if (d !== null) {
                for (var p = 0; p < d.length; p++) {
                  var w = d[p];
                  for (B = w; B !== null; ) {
                    var E = B;
                    switch (E.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Or(8, E, o);
                    }
                    var M = E.child;
                    if (M !== null) ((M.return = E), (B = M));
                    else
                      for (; B !== null; ) {
                        E = B;
                        var T = E.sibling,
                          $ = E.return;
                        if ((dc(E), E === w)) {
                          B = null;
                          break;
                        }
                        if (T !== null) {
                          ((T.return = $), (B = T));
                          break;
                        }
                        B = $;
                      }
                  }
                }
                var U = o.alternate;
                if (U !== null) {
                  var q = U.child;
                  if (q !== null) {
                    U.child = null;
                    do {
                      var Me = q.sibling;
                      ((q.sibling = null), (q = Me));
                    } while (q !== null);
                  }
                }
                B = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && c !== null) ((c.return = o), (B = c));
            else
              e: for (; B !== null; ) {
                if (((o = B), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Or(9, o, o.return);
                  }
                var _ = o.sibling;
                if (_ !== null) {
                  ((_.return = o.return), (B = _));
                  break e;
                }
                B = o.return;
              }
          }
          var v = e.current;
          for (B = v; B !== null; ) {
            c = B;
            var x = c.child;
            if ((c.subtreeFlags & 2064) !== 0 && x !== null) ((x.return = c), (B = x));
            else
              e: for (c = v; B !== null; ) {
                if (((d = B), (d.flags & 2048) !== 0))
                  try {
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ut(9, d);
                    }
                  } catch (V) {
                    Te(d, d.return, V);
                  }
                if (d === c) {
                  B = null;
                  break e;
                }
                var R = d.sibling;
                if (R !== null) {
                  ((R.return = d.return), (B = R));
                  break e;
                }
                B = d.return;
              }
          }
          if (((se = a), ii(), Ln && typeof Ln.onPostCommitFiberRoot == 'function'))
            try {
              Ln.onPostCommitFiberRoot(it, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((pe = i), (xn.transition = n));
      }
    }
    return !1;
  }
  function Cc(e, n, i) {
    ((n = Zi(i, n)),
      (n = ql(e, n, 1)),
      (e = ti(e, n, 1)),
      (n = rn()),
      e !== null && (pr(e, 1, n), ln(e, n)));
  }
  function Te(e, n, i) {
    if (e.tag === 3) Cc(e, e, i);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Cc(n, e, i);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (oi === null || !oi.has(r)))
          ) {
            ((e = Zi(i, e)),
              (e = Vl(n, e, 1)),
              (n = ti(n, e, 1)),
              (e = rn()),
              n !== null && (pr(n, 1, e), ln(n, e)));
            break;
          }
        }
        n = n.return;
      }
  }
  function Hd(e, n, i) {
    var r = e.pingCache;
    (r !== null && r.delete(n),
      (n = rn()),
      (e.pingedLanes |= e.suspendedLanes & i),
      Oe === e &&
        (He & i) === i &&
        (Ae === 4 || (Ae === 3 && (He & 130023424) === He && 500 > Le() - Mo)
          ? ki(e, 0)
          : (Lo |= i)),
      ln(e, n));
  }
  function Pc(e, n) {
    n === 0 &&
      ((e.mode & 1) === 0
        ? (n = 1)
        : ((n = tt), (tt <<= 1), (tt & 130023424) === 0 && (tt = 4194304)));
    var i = rn();
    ((e = $n(e, n)), e !== null && (pr(e, n, i), ln(e, i)));
  }
  function Gd(e) {
    var n = e.memoizedState,
      i = 0;
    (n !== null && (i = n.retryLane), Pc(e, i));
  }
  function Kd(e, n) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          a = e.memoizedState;
        a !== null && (i = a.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    (r !== null && r.delete(n), Pc(e, i));
  }
  var Tc;
  Tc = function (e, n, i) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || tn.current) on = !0;
      else {
        if ((e.lanes & i) === 0 && (n.flags & 128) === 0) return ((on = !1), Fd(e, n, i));
        on = (e.flags & 131072) !== 0;
      }
    else ((on = !1), je && (n.flags & 1048576) !== 0 && sl(n, St, n.index));
    switch (((n.lanes = 0), n.tag)) {
      case 2:
        var r = n.type;
        ($t(e, n), (e = n.pendingProps));
        var a = Bi(n, Ze.current);
        (Ki(n, i), (a = co(null, n, r, e, a, i)));
        var o = uo();
        return (
          (n.flags |= 1),
          typeof a == 'object' &&
          a !== null &&
          typeof a.render == 'function' &&
          a.$$typeof === void 0
            ? ((n.tag = 1),
              (n.memoizedState = null),
              (n.updateQueue = null),
              an(r) ? ((o = !0), kt(n)) : (o = !1),
              (n.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
              io(n),
              (a.updater = Wt),
              (n.stateNode = a),
              (a._reactInternals = n),
              vo(n, r, e, i),
              (n = bo(null, n, r, !0, o, i)))
            : ((n.tag = 0), je && o && Ha(n), nn(null, n, a, i), (n = n.child)),
          n
        );
      case 16:
        r = n.elementType;
        e: {
          switch (
            ($t(e, n),
            (e = n.pendingProps),
            (a = r._init),
            (r = a(r._payload)),
            (n.type = r),
            (a = n.tag = Zd(r)),
            (e = jn(r, e)),
            a)
          ) {
            case 0:
              n = xo(null, n, r, e, i);
              break e;
            case 1:
              n = ec(null, n, r, e, i);
              break e;
            case 11:
              n = Ql(null, n, r, e, i);
              break e;
            case 14:
              n = Zl(null, n, r, jn(r.type, e), i);
              break e;
          }
          throw Error(s(306, r, ''));
        }
        return n;
      case 0:
        return (
          (r = n.type),
          (a = n.pendingProps),
          (a = n.elementType === r ? a : jn(r, a)),
          xo(e, n, r, a, i)
        );
      case 1:
        return (
          (r = n.type),
          (a = n.pendingProps),
          (a = n.elementType === r ? a : jn(r, a)),
          ec(e, n, r, a, i)
        );
      case 3:
        e: {
          if ((nc(n), e === null)) throw Error(s(387));
          ((r = n.pendingProps),
            (o = n.memoizedState),
            (a = o.element),
            gl(e, n),
            Mt(n, r, null, i));
          var c = n.memoizedState;
          if (((r = c.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: c.cache,
                pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
                transitions: c.transitions,
              }),
              (n.updateQueue.baseState = o),
              (n.memoizedState = o),
              n.flags & 256)
            ) {
              ((a = Zi(Error(s(423)), n)), (n = ic(e, n, r, i, a)));
              break e;
            } else if (r !== a) {
              ((a = Zi(Error(s(424)), n)), (n = ic(e, n, r, i, a)));
              break e;
            } else
              for (
                pn = Yn(n.stateNode.containerInfo.firstChild),
                  mn = n,
                  je = !0,
                  Nn = null,
                  i = fl(n, null, r, i),
                  n.child = i;
                i;

              )
                ((i.flags = (i.flags & -3) | 4096), (i = i.sibling));
          else {
            if ((Vi(), r === a)) {
              n = Un(e, n, i);
              break e;
            }
            nn(e, n, r, i);
          }
          n = n.child;
        }
        return n;
      case 5:
        return (
          _l(n),
          e === null && Qa(n),
          (r = n.type),
          (a = n.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (c = a.children),
          Oa(r, a) ? (c = null) : o !== null && Oa(r, o) && (n.flags |= 32),
          Yl(e, n),
          nn(e, n, c, i),
          n.child
        );
      case 6:
        return (e === null && Qa(n), null);
      case 13:
        return rc(e, n, i);
      case 4:
        return (
          ro(n, n.stateNode.containerInfo),
          (r = n.pendingProps),
          e === null ? (n.child = Hi(n, null, r, i)) : nn(e, n, r, i),
          n.child
        );
      case 11:
        return (
          (r = n.type),
          (a = n.pendingProps),
          (a = n.elementType === r ? a : jn(r, a)),
          Ql(e, n, r, a, i)
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
            ((r = n.type._context),
            (a = n.pendingProps),
            (o = n.memoizedProps),
            (c = a.value),
            xe(Tt, r._currentValue),
            (r._currentValue = c),
            o !== null)
          )
            if (kn(o.value, c)) {
              if (o.children === a.children && !tn.current) {
                n = Un(e, n, i);
                break e;
              }
            } else
              for (o = n.child, o !== null && (o.return = n); o !== null; ) {
                var d = o.dependencies;
                if (d !== null) {
                  c = o.child;
                  for (var p = d.firstContext; p !== null; ) {
                    if (p.context === r) {
                      if (o.tag === 1) {
                        ((p = Bn(-1, i & -i)), (p.tag = 2));
                        var w = o.updateQueue;
                        if (w !== null) {
                          w = w.shared;
                          var E = w.pending;
                          (E === null ? (p.next = p) : ((p.next = E.next), (E.next = p)),
                            (w.pending = p));
                        }
                      }
                      ((o.lanes |= i),
                        (p = o.alternate),
                        p !== null && (p.lanes |= i),
                        eo(o.return, i, n),
                        (d.lanes |= i));
                      break;
                    }
                    p = p.next;
                  }
                } else if (o.tag === 10) c = o.type === n.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((c = o.return), c === null)) throw Error(s(341));
                  ((c.lanes |= i),
                    (d = c.alternate),
                    d !== null && (d.lanes |= i),
                    eo(c, i, n),
                    (c = o.sibling));
                } else c = o.child;
                if (c !== null) c.return = o;
                else
                  for (c = o; c !== null; ) {
                    if (c === n) {
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
          (nn(e, n, a.children, i), (n = n.child));
        }
        return n;
      case 9:
        return (
          (a = n.type),
          (r = n.pendingProps.children),
          Ki(n, i),
          (a = yn(a)),
          (r = r(a)),
          (n.flags |= 1),
          nn(e, n, r, i),
          n.child
        );
      case 14:
        return ((r = n.type), (a = jn(r, n.pendingProps)), (a = jn(r.type, a)), Zl(e, n, r, a, i));
      case 15:
        return Xl(e, n, n.type, n.pendingProps, i);
      case 17:
        return (
          (r = n.type),
          (a = n.pendingProps),
          (a = n.elementType === r ? a : jn(r, a)),
          $t(e, n),
          (n.tag = 1),
          an(r) ? ((e = !0), kt(n)) : (e = !1),
          Ki(n, i),
          Bl(n, r, a),
          vo(n, r, a, i),
          bo(null, n, r, !0, e, i)
        );
      case 19:
        return ac(e, n, i);
      case 22:
        return Jl(e, n, i);
    }
    throw Error(s(156, n.tag));
  };
  function Ec(e, n) {
    return ls(e, n);
  }
  function Qd(e, n, i, r) {
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
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function bn(e, n, i, r) {
    return new Qd(e, n, i, r);
  }
  function Oo(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Zd(e) {
    if (typeof e == 'function') return Oo(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ze)) return 11;
      if (e === ie) return 14;
    }
    return 2;
  }
  function ui(e, n) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = bn(e.tag, n, e.key, e.mode)),
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
  function Jt(e, n, i, r, a, o) {
    var c = 2;
    if (((r = e), typeof e == 'function')) Oo(e) && (c = 1);
    else if (typeof e == 'string') c = 5;
    else
      e: switch (e) {
        case Re:
          return ji(i.children, a, o, n);
        case De:
          ((c = 8), (a |= 8));
          break;
        case Ge:
          return ((e = bn(12, i, n, a | 2)), (e.elementType = Ge), (e.lanes = o), e);
        case Ne:
          return ((e = bn(13, i, n, a)), (e.elementType = Ne), (e.lanes = o), e);
        case en:
          return ((e = bn(19, i, n, a)), (e.elementType = en), (e.lanes = o), e);
        case me:
          return Yt(i, a, o, n);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Be:
                c = 10;
                break e;
              case un:
                c = 9;
                break e;
              case ze:
                c = 11;
                break e;
              case ie:
                c = 14;
                break e;
              case ve:
                ((c = 16), (r = null));
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ''));
      }
    return ((n = bn(c, i, n, a)), (n.elementType = e), (n.type = r), (n.lanes = o), n);
  }
  function ji(e, n, i, r) {
    return ((e = bn(7, e, r, n)), (e.lanes = i), e);
  }
  function Yt(e, n, i, r) {
    return (
      (e = bn(22, e, r, n)),
      (e.elementType = me),
      (e.lanes = i),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function $o(e, n, i) {
    return ((e = bn(6, e, null, n)), (e.lanes = i), e);
  }
  function Bo(e, n, i) {
    return (
      (n = bn(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = i),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  function Xd(e, n, i, r, a) {
    ((this.tag = n),
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
      (this.identifierPrefix = r),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Uo(e, n, i, r, a, o, c, d, p) {
    return (
      (e = new Xd(e, n, i, d, p)),
      n === 1 ? ((n = 1), o === !0 && (n |= 8)) : (n = 0),
      (o = bn(3, null, null, n)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      io(o),
      e
    );
  }
  function Jd(e, n, i) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: fe,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: n,
      implementation: i,
    };
  }
  function Lc(e) {
    if (!e) return ni;
    e = e._reactInternals;
    e: {
      if (pi(e) !== e || e.tag !== 1) throw Error(s(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (an(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var i = e.type;
      if (an(i)) return tl(e, i, n);
    }
    return n;
  }
  function Mc(e, n, i, r, a, o, c, d, p) {
    return (
      (e = Uo(i, r, !0, e, a, o, c, d, p)),
      (e.context = Lc(null)),
      (i = e.current),
      (r = rn()),
      (a = li(i)),
      (o = Bn(r, a)),
      (o.callback = n ?? null),
      ti(i, o, a),
      (e.current.lanes = a),
      pr(e, a, r),
      ln(e, r),
      e
    );
  }
  function ea(e, n, i, r) {
    var a = n.current,
      o = rn(),
      c = li(a);
    return (
      (i = Lc(i)),
      n.context === null ? (n.context = i) : (n.pendingContext = i),
      (n = Bn(o, c)),
      (n.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (n.callback = r),
      (e = ti(a, n, c)),
      e !== null && (Pn(e, a, c, o), Lt(e, a, c)),
      c
    );
  }
  function na(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Rc(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function qo(e, n) {
    (Rc(e, n), (e = e.alternate) && Rc(e, n));
  }
  function Yd() {
    return null;
  }
  var Dc =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Vo(e) {
    this._internalRoot = e;
  }
  ((ia.prototype.render = Vo.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(s(409));
      ea(e, n, null, null);
    }),
    (ia.prototype.unmount = Vo.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          (wi(function () {
            ea(null, e, null, null);
          }),
            (n[In] = null));
        }
      }));
  function ia(e) {
    this._internalRoot = e;
  }
  ia.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = gs();
      e = { blockedOn: null, target: e, priority: n };
      for (var i = 0; i < Zn.length && n !== 0 && n < Zn[i].priority; i++);
      (Zn.splice(i, 0, e), i === 0 && _s(e));
    }
  };
  function Ho(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function ra(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Fc() {}
  function em(e, n, i, r, a) {
    if (a) {
      if (typeof r == 'function') {
        var o = r;
        r = function () {
          var w = na(c);
          o.call(w);
        };
      }
      var c = Mc(n, r, e, 0, null, !1, !1, '', Fc);
      return (
        (e._reactRootContainer = c),
        (e[In] = c.current),
        Cr(e.nodeType === 8 ? e.parentNode : e),
        wi(),
        c
      );
    }
    for (; (a = e.lastChild); ) e.removeChild(a);
    if (typeof r == 'function') {
      var d = r;
      r = function () {
        var w = na(p);
        d.call(w);
      };
    }
    var p = Uo(e, 0, !1, null, null, !1, !1, '', Fc);
    return (
      (e._reactRootContainer = p),
      (e[In] = p.current),
      Cr(e.nodeType === 8 ? e.parentNode : e),
      wi(function () {
        ea(n, p, i, r);
      }),
      p
    );
  }
  function ta(e, n, i, r, a) {
    var o = i._reactRootContainer;
    if (o) {
      var c = o;
      if (typeof a == 'function') {
        var d = a;
        a = function () {
          var p = na(c);
          d.call(p);
        };
      }
      ea(n, c, e, a);
    } else c = em(i, n, e, a, r);
    return na(c);
  }
  ((fs = function (e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var i = mr(n.pendingLanes);
          i !== 0 && (ga(n, i | 1), ln(n, Le()), (se & 6) === 0 && ((Yi = Le() + 500), ii()));
        }
        break;
      case 13:
        (wi(function () {
          var r = $n(e, 1);
          if (r !== null) {
            var a = rn();
            Pn(r, e, 1, a);
          }
        }),
          qo(e, 1));
    }
  }),
    (va = function (e) {
      if (e.tag === 13) {
        var n = $n(e, 134217728);
        if (n !== null) {
          var i = rn();
          Pn(n, e, 134217728, i);
        }
        qo(e, 134217728);
      }
    }),
    (hs = function (e) {
      if (e.tag === 13) {
        var n = li(e),
          i = $n(e, n);
        if (i !== null) {
          var r = rn();
          Pn(i, e, n, r);
        }
        qo(e, n);
      }
    }),
    (gs = function () {
      return pe;
    }),
    (vs = function (e, n) {
      var i = pe;
      try {
        return ((pe = e), n());
      } finally {
        pe = i;
      }
    }),
    (lr = function (e, n, i) {
      switch (n) {
        case 'input':
          if ((Pi(e, i), (n = i.name), i.type === 'radio' && n != null)) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll('input[name=' + JSON.stringify('' + n) + '][type="radio"]'),
                n = 0;
              n < i.length;
              n++
            ) {
              var r = i[n];
              if (r !== e && r.form === e.form) {
                var a = bt(r);
                if (!a) throw Error(s(90));
                (ir(r), Pi(r, a));
              }
            }
          }
          break;
        case 'textarea':
          Ue(e, i);
          break;
        case 'select':
          ((n = i.value), n != null && zn(e, !!i.multiple, n, !1));
      }
    }),
    (ns = Io),
    (is = wi));
  var nm = { usingClientEntryPoint: !1, Events: [Er, Oi, bt, be, En, Io] },
    qr = {
      findFiberByHostInstance: fi,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    im = {
      bundleType: qr.bundleType,
      version: qr.version,
      rendererPackageName: qr.rendererPackageName,
      rendererConfig: qr.rendererConfig,
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
      findFiberByHostInstance: qr.findFiberByHostInstance || Yd,
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
        ((it = aa.inject(im)), (Ln = aa));
      } catch {}
  }
  return (
    (cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nm),
    (cn.createPortal = function (e, n) {
      var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ho(n)) throw Error(s(200));
      return Jd(e, n, null, i);
    }),
    (cn.createRoot = function (e, n) {
      if (!Ho(e)) throw Error(s(299));
      var i = !1,
        r = '',
        a = Dc;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
        (n = Uo(e, 1, !1, null, null, i, !1, r, a)),
        (e[In] = n.current),
        Cr(e.nodeType === 8 ? e.parentNode : e),
        new Vo(n)
      );
    }),
    (cn.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var n = e._reactInternals;
      if (n === void 0)
        throw typeof e.render == 'function'
          ? Error(s(188))
          : ((e = Object.keys(e).join(',')), Error(s(268, e)));
      return ((e = os(n)), (e = e === null ? null : e.stateNode), e);
    }),
    (cn.flushSync = function (e) {
      return wi(e);
    }),
    (cn.hydrate = function (e, n, i) {
      if (!ra(n)) throw Error(s(200));
      return ta(null, e, n, !0, i);
    }),
    (cn.hydrateRoot = function (e, n, i) {
      if (!Ho(e)) throw Error(s(405));
      var r = (i != null && i.hydratedSources) || null,
        a = !1,
        o = '',
        c = Dc;
      if (
        (i != null &&
          (i.unstable_strictMode === !0 && (a = !0),
          i.identifierPrefix !== void 0 && (o = i.identifierPrefix),
          i.onRecoverableError !== void 0 && (c = i.onRecoverableError)),
        (n = Mc(n, null, e, 1, i ?? null, a, !1, o, c)),
        (e[In] = n.current),
        Cr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((i = r[e]),
            (a = i._getVersion),
            (a = a(i._source)),
            n.mutableSourceEagerHydrationData == null
              ? (n.mutableSourceEagerHydrationData = [i, a])
              : n.mutableSourceEagerHydrationData.push(i, a));
      return new ia(n);
    }),
    (cn.render = function (e, n, i) {
      if (!ra(n)) throw Error(s(200));
      return ta(null, e, n, !1, i);
    }),
    (cn.unmountComponentAtNode = function (e) {
      if (!ra(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (wi(function () {
            ta(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[In] = null));
            });
          }),
          !0)
        : !1;
    }),
    (cn.unstable_batchedUpdates = Io),
    (cn.unstable_renderSubtreeIntoContainer = function (e, n, i, r) {
      if (!ra(i)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return ta(e, n, i, !1, r);
    }),
    (cn.version = '18.3.1-next-f1338f8080-20240426'),
    cn
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
const pm = {
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
  nu = W.createContext(void 0),
  fm = ({ children: l }) => {
    const [u, s] = W.useState(pm),
      f = W.useCallback((S) => {
        const { name: k, value: h, type: g } = S.target,
          F = S.target.checked;
        s((H) => ({ ...H, [k]: g === 'checkbox' ? F : h }));
      }, []),
      b = { formData: u, setFormData: s, handleInputChange: f };
    return t.jsx(nu.Provider, { value: b, children: l });
  };
function hm() {
  const l = W.useContext(nu);
  if (!l) throw new Error('useSimpleForm must be used inside <SimpleFormProvider>');
  return l;
}
const gm = ({
  formData: l,
  setFormData: u,
  t: s,
  stepLabel: f,
  shippingOnly: b = !1,
  isQuickQuote: S = !1,
  setIsQuickQuote: k,
}) => {
  const h = (g) => {
    u((F) => ({
      ...F,
      servicesRequested: { ...F.servicesRequested, [g]: !F.servicesRequested[g] },
    }));
  };
  return t.jsxs('section', {
    className: 'sino-simple-form__section sino-simple-form__section--services',
    children: [
      t.jsxs('header', {
        className: 'sino-simple-form__header',
        children: [
          t.jsxs('div', {
            className: 'sino-simple-form__header-top',
            children: [
              t.jsx('p', {
                className: 'sino-simple-form__eyebrow',
                children: b
                  ? s('simpleEyebrowShippingOnly', 'Shipping from China')
                  : s('simpleEyebrowMulti', 'Projects with China'),
              }),
              S &&
                t.jsx('span', {
                  className: 'sino-simple-form__quick-quote-badge',
                  children: s('quickQuoteBadge', 'Quick quote'),
                }),
            ],
          }),
          t.jsx('h1', {
            className: 'sino-simple-form__title',
            children: s('simpleTitle', 'Plan your project with China in one request'),
          }),
          t.jsx('p', {
            className: 'sino-simple-form__subtitle',
            children: b
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
            t.jsx('div', {
              className: 'sino-simple-form__quick-quote-toggle',
              children: t.jsxs('label', {
                className: 'sino-simple-form__quick-quote-toggle-label',
                children: [
                  t.jsx('input', {
                    type: 'checkbox',
                    checked: S,
                    onChange: (g) => k(g.target.checked),
                    className: 'sino-simple-form__quick-quote-toggle-input',
                  }),
                  t.jsx('span', { className: 'sino-simple-form__quick-quote-toggle-slider' }),
                  t.jsx('span', {
                    className: 'sino-simple-form__quick-quote-toggle-text',
                    children: s('quickQuoteToggle', 'Quick quote mode (essential fields only)'),
                  }),
                ],
              }),
            }),
          t.jsx('p', {
            className: 'sino-simple-form__hint',
            children: s(
              'simpleRequiredHint',
              'Fields marked with * are required. The rest can stay approximate or empty for now.'
            ),
          }),
        ],
      }),
      t.jsxs('h2', {
        className: 'sino-simple-form__section-title',
        children: [
          t.jsx('span', { className: 'sino-simple-form__section-step', children: f ?? 'Step 0' }),
          t.jsx('span', {
            children: s('simpleServicesStepTitle', 'What do you need help with from China?'),
          }),
        ],
      }),
      t.jsx('p', {
        className: 'sino-simple-form__hint',
        children: s(
          'simpleServicesStepHint',
          'Select all that apply (most people pick 1–3 options). Shipping remains the core module and we tailor the rest around your needs.'
        ),
      }),
      t.jsx('div', {
        className: 'sino-simple-form__fields sino-simple-form__fields--rows',
        children: t.jsx('div', {
          className: 'sino-simple-form__field',
          children: t.jsx('div', {
            className: 'sino-simple-form__chips sino-simple-form__chips--wrap',
            children: [
              {
                key: 'shipping',
                label: s('serviceShipping', 'Ship goods from China'),
                icon: t.jsxs('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    t.jsx('path', {
                      d: 'M2 17h20M5 17V7l8-4v10M19 17V7l-6 4M7 11h6M7 7h6',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    t.jsx('circle', {
                      cx: '7',
                      cy: '17',
                      r: '2',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                    }),
                    t.jsx('circle', {
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
                icon: t.jsxs('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    t.jsx('circle', {
                      cx: '11',
                      cy: '11',
                      r: '8',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    t.jsx('path', {
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
                icon: t.jsxs('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    t.jsx('path', {
                      d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    t.jsx('polyline', {
                      points: '3.27 6.96 12 12.01 20.73 6.96',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    t.jsx('line', {
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
                icon: t.jsxs('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    t.jsx('path', {
                      d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    t.jsx('polyline', {
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
                icon: t.jsxs('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    t.jsx('path', {
                      d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    t.jsx('polyline', {
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
                icon: t.jsxs('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    t.jsx('rect', {
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
                    t.jsx('line', {
                      x1: '16',
                      y1: '2',
                      x2: '16',
                      y2: '6',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    t.jsx('line', {
                      x1: '8',
                      y1: '2',
                      x2: '8',
                      y2: '6',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    t.jsx('line', {
                      x1: '3',
                      y1: '10',
                      x2: '21',
                      y2: '10',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    t.jsx('path', {
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
                icon: t.jsxs('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    t.jsx('circle', {
                      cx: '12',
                      cy: '12',
                      r: '10',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    t.jsx('line', {
                      x1: '12',
                      y1: '8',
                      x2: '12',
                      y2: '16',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    t.jsx('line', {
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
            ].map((g) =>
              t.jsxs(
                'button',
                {
                  type: 'button',
                  className: `sino-simple-chip sino-simple-chip--service-${g.key}${l.servicesRequested[g.key] ? ' sino-simple-chip--active' : ''}`,
                  onClick: () => h(g.key),
                  'aria-pressed': l.servicesRequested[g.key] ? 'true' : 'false',
                  'aria-label': `${g.label}${l.servicesRequested[g.key] ? ', selected' : ', not selected'}`,
                  onKeyDown: (F) => {
                    (F.key === 'Enter' || F.key === ' ') && (F.preventDefault(), h(g.key));
                  },
                  children: [
                    t.jsx('span', {
                      className: 'sino-simple-chip__icon',
                      'aria-hidden': 'true',
                      children: g.icon,
                    }),
                    t.jsx('span', { className: 'sino-simple-chip__label', children: g.label }),
                  ],
                },
                g.key
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
function iu(l, u) {
  const s = vm(l);
  if (s.length === 0)
    return l === 'services'
      ? { filled: 1, total: 1, percentage: 100 }
      : { filled: 0, total: 0, percentage: 0 };
  let f = 0,
    b = 0;
  for (const k of s)
    if (
      k === 'sourcing' ||
      k === 'warehousing' ||
      k === 'dropshipping' ||
      k === 'qc' ||
      k === 'chinaVisit'
    ) {
      const h = u[k];
      if (h && typeof h == 'object' && !Array.isArray(h)) {
        const g = Object.entries(h);
        for (const [, F] of g) (b++, sa(F) && f++);
        g.length;
      }
    } else if (k === 'totalWeight') (b++, sa(u.totalWeight) && f++);
    else {
      b++;
      const h = u[k];
      sa(h) && f++;
    }
  const S = b > 0 ? Math.round((f / b) * 100) : 0;
  return { filled: f, total: b, percentage: S };
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
const Zo = ({ stepId: l, formData: u, currentStepIndex: s, totalSteps: f, t: b }) => {
    const S = iu(l, u),
      k = ym(l, b);
    return l === 'services' || S.total === 0
      ? null
      : t.jsxs('div', {
          className: 'sino-simple-form__step-progress-indicator',
          children: [
            t.jsxs('div', {
              className: 'sino-simple-form__step-progress-header',
              children: [
                t.jsx('span', { className: 'sino-simple-form__step-progress-label', children: k }),
                t.jsxs('span', {
                  className: 'sino-simple-form__step-progress-count',
                  children: [S.filled, '/', S.total, ' ', b('stepProgressFields', 'fields')],
                }),
              ],
            }),
            t.jsx('div', {
              className: 'sino-simple-form__step-progress-bar-container',
              children: t.jsx('div', {
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
  _m = ({ t: l, count: u = 2 }) => {
    const s = W.useMemo(
      () => [...Qc].sort(() => Math.random() - 0.5).slice(0, Math.min(u, Qc.length)),
      [u]
    );
    return s.length === 0
      ? null
      : t.jsx('div', {
          className: 'sino-simple-form__testimonials',
          role: 'complementary',
          'aria-label': l('testimonialsAriaLabel', 'Customer testimonials'),
          children: s.map((f, b) =>
            t.jsx(
              'div',
              {
                className: 'sino-simple-form__testimonial',
                children: t.jsxs('div', {
                  className: 'sino-simple-form__testimonial-content',
                  children: [
                    t.jsxs('p', {
                      className: 'sino-simple-form__testimonial-text',
                      children: ['"', f.text, '"'],
                    }),
                    t.jsxs('p', {
                      className: 'sino-simple-form__testimonial-author',
                      children: [f.name, ' — ', f.location],
                    }),
                  ],
                }),
              },
              `${f.name}-${b}`
            )
          ),
        });
  },
  xm = ({
    formData: l,
    setFormData: u,
    t: s,
    isFilled: f,
    onChange: b,
    onBlur: S,
    fieldErrors: k,
    fieldTouched: h,
    firstNameRef: g,
    emailRef: F,
    phoneRef: H,
    stepLabel: z,
    currentStepIndex: I,
    totalSteps: X,
  }) =>
    t.jsxs('section', {
      className: 'sino-simple-form__section sino-simple-form__section--contact',
      children: [
        t.jsxs('h2', {
          className: 'sino-simple-form__section-title',
          children: [
            t.jsx('span', { className: 'sino-simple-form__section-step', children: z ?? 'Step 4' }),
            t.jsx('span', { children: s('simpleStep5Title', 'Your details') }),
          ],
        }),
        t.jsx(Zo, { stepId: 'contact', formData: l, currentStepIndex: I, totalSteps: X, t: s }),
        t.jsx('p', {
          className: 'sino-simple-form__hint',
          children: s(
            'simpleStep5Hint',
            'Use a work email and a phone with WhatsApp if possible – it makes the follow-up much smoother. Not sure about every detail yet? That is normal – we will help you structure the shipment.'
          ),
        }),
        t.jsx(_m, { t: s, count: 2 }),
        t.jsxs('div', {
          className: 'sino-simple-form__group',
          children: [
            t.jsx('p', {
              className: 'sino-simple-form__group-title',
              children: s('aboutYouTitle', 'About you'),
            }),
            t.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--rows',
              children: [
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsx('label', {
                      className: 'sino-simple-form__label',
                      children: s('customerType', 'Are you a company or an individual?'),
                    }),
                    t.jsx('div', {
                      className: 'sino-simple-form__chips',
                      children: [
                        { value: 'company', label: s('customerTypeCompany', 'Company') },
                        { value: 'individual', label: s('customerTypeIndividual', 'Individual') },
                      ].map((G) =>
                        t.jsx(
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
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsx('label', {
                      className: 'sino-simple-form__label',
                      children: s('shipperType', 'How often do you ship from China?'),
                    }),
                    t.jsx('div', {
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
                        t.jsx(
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
        t.jsx('p', {
          className: 'sino-simple-form__group-title',
          children: s('contactDetailsTitle', 'How we contact you'),
        }),
        t.jsxs('div', {
          className: 'sino-simple-form__fields sino-simple-form__fields--rows',
          children: [
            t.jsxs('div', {
              className: `sino-simple-form__field${h.firstName && k.firstName ? ' sino-simple-form__field--error' : ''}${h.firstName && !k.firstName && f(l.firstName) ? ' sino-simple-form__field--success' : ''}`,
              children: [
                t.jsxs('label', {
                  className: 'sino-simple-form__label',
                  htmlFor: 'firstName',
                  children: [
                    s('firstName', 'First name'),
                    t.jsx('span', {
                      className: 'sino-simple-form__required',
                      'aria-label': 'required',
                      children: '*',
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field-wrapper',
                  children: [
                    t.jsx('input', {
                      className: `sino-simple-form__input${k.firstName ? ' sino-simple-form__input--error' : ''}${h.firstName && !k.firstName && f(l.firstName) ? ' sino-simple-form__input--success' : ''}`,
                      type: 'text',
                      name: 'firstName',
                      id: 'firstName',
                      ref: g,
                      value: l.firstName,
                      onChange: b,
                      onBlur: () => S('firstName', l.firstName),
                      placeholder: s('firstNamePlaceholder', 'John'),
                      'aria-label': s('firstName', 'First name'),
                      'aria-describedby': k.firstName
                        ? 'firstName-error'
                        : h.firstName && !k.firstName && f(l.firstName)
                          ? 'firstName-success'
                          : void 0,
                      'aria-invalid': k.firstName ? 'true' : 'false',
                      'aria-required': 'true',
                    }),
                    h.firstName &&
                      t.jsxs(t.Fragment, {
                        children: [
                          k.firstName &&
                            t.jsx('span', {
                              className:
                                'sino-simple-form__field-icon sino-simple-form__field-icon--error',
                              'aria-hidden': 'true',
                              children: t.jsxs('svg', {
                                width: '20',
                                height: '20',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                  t.jsx('circle', {
                                    cx: '12',
                                    cy: '12',
                                    r: '10',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                  }),
                                  t.jsx('line', {
                                    x1: '12',
                                    y1: '8',
                                    x2: '12',
                                    y2: '12',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                    strokeLinecap: 'round',
                                  }),
                                  t.jsx('line', {
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
                            f(l.firstName) &&
                            t.jsx('span', {
                              className:
                                'sino-simple-form__field-icon sino-simple-form__field-icon--success',
                              'aria-hidden': 'true',
                              children: t.jsxs('svg', {
                                width: '20',
                                height: '20',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                  t.jsx('circle', {
                                    cx: '12',
                                    cy: '12',
                                    r: '10',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                  }),
                                  t.jsx('path', {
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
                  t.jsx('p', {
                    id: 'firstName-error',
                    className: 'sino-simple-form__field-error',
                    role: 'alert',
                    'aria-live': 'polite',
                    children: k.firstName,
                  }),
                h.firstName &&
                  !k.firstName &&
                  f(l.firstName) &&
                  t.jsx('p', {
                    id: 'firstName-success',
                    className: 'sino-simple-form__sr-only',
                    'aria-live': 'polite',
                    children: s('fieldValid', 'Field is valid'),
                  }),
              ],
            }),
            t.jsxs('div', {
              className: 'sino-simple-form__field',
              children: [
                t.jsx('label', {
                  className: 'sino-simple-form__label',
                  htmlFor: 'lastName',
                  children: s('lastName', 'Last name'),
                }),
                t.jsx('input', {
                  className: 'sino-simple-form__input',
                  type: 'text',
                  name: 'lastName',
                  id: 'lastName',
                  value: l.lastName,
                  onChange: b,
                  placeholder: s('lastNamePlaceholder', 'Doe'),
                }),
              ],
            }),
            t.jsxs('div', {
              className: 'sino-simple-form__field',
              children: [
                t.jsxs('label', {
                  className: 'sino-simple-form__label',
                  htmlFor: 'companyName',
                  children: [
                    s('companyName', 'Company name'),
                    t.jsx('span', {
                      className: 'sino-simple-form__label-hint',
                      children: s('ifApplicable', 'if applicable'),
                    }),
                  ],
                }),
                t.jsx('input', {
                  className: 'sino-simple-form__input',
                  type: 'text',
                  name: 'companyName',
                  id: 'companyName',
                  value: l.companyName,
                  onChange: b,
                  placeholder: s('companyNamePlaceholder', 'Your company'),
                }),
              ],
            }),
            t.jsxs('div', {
              className: `sino-simple-form__field${h.email && k.email ? ' sino-simple-form__field--error' : ''}${h.email && !k.email && f(l.email) ? ' sino-simple-form__field--success' : ''}`,
              children: [
                t.jsxs('label', {
                  className: 'sino-simple-form__label',
                  htmlFor: 'email',
                  children: [
                    s('email', 'Work email'),
                    t.jsx('span', {
                      className: 'sino-simple-form__required',
                      'aria-label': 'required',
                      children: '*',
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field-wrapper',
                  children: [
                    t.jsx('input', {
                      className: `sino-simple-form__input${k.email ? ' sino-simple-form__input--error' : ''}${h.email && !k.email && f(l.email) ? ' sino-simple-form__input--success' : ''}`,
                      type: 'email',
                      name: 'email',
                      id: 'email',
                      ref: F,
                      value: l.email,
                      onChange: b,
                      onBlur: () => S('email', l.email),
                      placeholder: s('emailPlaceholder', 'you@example.com'),
                      'aria-label': s('email', 'Work email'),
                      'aria-describedby': k.email
                        ? 'email-error'
                        : h.email && !k.email && f(l.email)
                          ? 'email-success'
                          : void 0,
                      'aria-invalid': k.email ? 'true' : 'false',
                      'aria-required': 'true',
                    }),
                    h.email &&
                      t.jsxs(t.Fragment, {
                        children: [
                          k.email &&
                            t.jsx('span', {
                              className:
                                'sino-simple-form__field-icon sino-simple-form__field-icon--error',
                              'aria-hidden': 'true',
                              children: t.jsxs('svg', {
                                width: '20',
                                height: '20',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                  t.jsx('circle', {
                                    cx: '12',
                                    cy: '12',
                                    r: '10',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                  }),
                                  t.jsx('line', {
                                    x1: '12',
                                    y1: '8',
                                    x2: '12',
                                    y2: '12',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                    strokeLinecap: 'round',
                                  }),
                                  t.jsx('line', {
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
                            f(l.email) &&
                            t.jsx('span', {
                              className:
                                'sino-simple-form__field-icon sino-simple-form__field-icon--success',
                              'aria-hidden': 'true',
                              children: t.jsxs('svg', {
                                width: '20',
                                height: '20',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                  t.jsx('circle', {
                                    cx: '12',
                                    cy: '12',
                                    r: '10',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                  }),
                                  t.jsx('path', {
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
                  t.jsx('p', {
                    id: 'email-error',
                    className: 'sino-simple-form__field-error',
                    role: 'alert',
                    'aria-live': 'polite',
                    children: k.email,
                  }),
                h.email &&
                  !k.email &&
                  f(l.email) &&
                  t.jsx('p', {
                    id: 'email-success',
                    className: 'sino-simple-form__sr-only',
                    'aria-live': 'polite',
                    children: s('fieldValid', 'Field is valid'),
                  }),
              ],
            }),
            t.jsxs('div', {
              className: `sino-simple-form__field${h.phone && k.phone ? ' sino-simple-form__field--error' : ''}${h.phone && !k.phone && f(l.phone) ? ' sino-simple-form__field--success' : ''}`,
              children: [
                t.jsxs('label', {
                  className: 'sino-simple-form__label',
                  htmlFor: 'phone',
                  children: [
                    s('phone', 'Phone number (with country code)'),
                    t.jsx('span', {
                      className: 'sino-simple-form__required',
                      'aria-label': 'required',
                      children: '*',
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field-wrapper',
                  children: [
                    t.jsx('input', {
                      className: `sino-simple-form__input${k.phone ? ' sino-simple-form__input--error' : ''}${h.phone && !k.phone && f(l.phone) ? ' sino-simple-form__input--success' : ''}`,
                      type: 'tel',
                      name: 'phone',
                      id: 'phone',
                      ref: H,
                      value: l.phone,
                      onChange: b,
                      onBlur: () => S('phone', l.phone),
                      placeholder: s('phonePlaceholder', '+33…'),
                      'aria-label': s('phone', 'Phone number (with country code)'),
                      'aria-describedby': k.phone
                        ? 'phone-error'
                        : h.phone && !k.phone && f(l.phone)
                          ? 'phone-success'
                          : void 0,
                      'aria-invalid': k.phone ? 'true' : 'false',
                      'aria-required': 'true',
                    }),
                    h.phone &&
                      t.jsxs(t.Fragment, {
                        children: [
                          k.phone &&
                            t.jsx('span', {
                              className:
                                'sino-simple-form__field-icon sino-simple-form__field-icon--error',
                              'aria-hidden': 'true',
                              children: t.jsxs('svg', {
                                width: '20',
                                height: '20',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                  t.jsx('circle', {
                                    cx: '12',
                                    cy: '12',
                                    r: '10',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                  }),
                                  t.jsx('line', {
                                    x1: '12',
                                    y1: '8',
                                    x2: '12',
                                    y2: '12',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                    strokeLinecap: 'round',
                                  }),
                                  t.jsx('line', {
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
                            f(l.phone) &&
                            t.jsx('span', {
                              className:
                                'sino-simple-form__field-icon sino-simple-form__field-icon--success',
                              'aria-hidden': 'true',
                              children: t.jsxs('svg', {
                                width: '20',
                                height: '20',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                  t.jsx('circle', {
                                    cx: '12',
                                    cy: '12',
                                    r: '10',
                                    stroke: 'currentColor',
                                    strokeWidth: '2',
                                  }),
                                  t.jsx('path', {
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
                  t.jsx('p', {
                    id: 'phone-error',
                    className: 'sino-simple-form__field-error',
                    role: 'alert',
                    'aria-live': 'polite',
                    children: k.phone,
                  }),
                h.phone &&
                  !k.phone &&
                  f(l.phone) &&
                  t.jsx('p', {
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
  Kr = [
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
  bm = [
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
    s = Kr.find((z) => z.code === l.country);
  s && (u.country = s.name);
  const f = [...bm, ...wm, ...km].find((z) => z.code === l.origin);
  f && (u.origin = f.name);
  const b = new Date(),
    S = b.toLocaleDateString('en-CA', { timeZone: 'Asia/Hong_Kong' }),
    k = b.toLocaleTimeString('en-GB', { timeZone: 'Asia/Hong_Kong', hourCycle: 'h23' }),
    h = `${S}T${k}+08:00`,
    g = `form-${l.country || 'N/A'}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    F = [];
  (l.servicesRequested.shipping && F.push('Shipping from China'),
    l.servicesRequested.sourcing && F.push('Product Sourcing'),
    l.servicesRequested.dropshipping && F.push('Dropshipping & Fulfillment'),
    l.servicesRequested.warehousing && F.push('Warehousing & Consolidation'),
    l.servicesRequested.qc && F.push('Quality Control'),
    l.servicesRequested.chinaVisits && F.push('China Business Visit'),
    l.servicesRequested.other && F.push('Other Project'));
  const H = {
    submissionId: g,
    timestamp: h,
    servicesList: F,
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
      originPortOfLoading: f ? f.name : u.origin,
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
  return { submissionId: g, timestamp: h, payload: H };
}
async function jm(l, u) {
  const s =
    typeof window < 'u' && window.location.hostname === 'localhost'
      ? '/api/n8n'
      : 'https://n8n.srv783609.hstgr.cloud/webhook/5e52c71e-b113-4b3c-8c7d-91c78496ea91';
  console.log('[submitFormData] Starting submission with payload:', {
    submissionId: l.submissionId,
    hasEmail: !!l.email,
    hasPhone: !!l.phone,
  });
  try {
    const f = await fetch(s, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(l),
    });
    if (!f.ok) {
      let b = '';
      try {
        b = await f.text();
      } catch {
        b = 'Unknown error';
      }
      const S = f.status;
      console.error('[submitFormData] Webhook failed:', S, b);
      const k = `We could not send your quote request (status ${S}). Please try again in a few minutes or contact us directly.`;
      throw (u && u(k), new Error(k));
    }
    return (
      console.log('[submitFormData] Webhook succeeded:', f.status),
      console.log('[submitFormData] Submission successful, submissionId:', l.submissionId),
      l.submissionId
    );
  } catch (f) {
    if (
      (console.error('[submitFormData] Unexpected error during submission:', f),
      f instanceof Error && f.message.includes('status'))
    )
      throw f;
    if (f instanceof Error && f.name === 'TypeError' && f.message.includes('fetch')) {
      const S =
        'Network error: Could not reach our servers. Please check your internet connection and try again.';
      throw (console.error('[submitFormData] Network error:', f), u && u(S), new Error(S));
    }
    const b =
      'Something went wrong while sending your request. Please try again in a moment or contact us directly.';
    throw (u && u(b), new Error(b));
  }
}
function ru(l) {
  var u;
  if (!l || typeof l != 'string') return { valid: !1, error: 'Email is required' };
  const s = l.trim();
  if (s.length === 0) return { valid: !1, error: 'Email is required' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s))
    return { valid: !1, error: 'Please enter a valid email address' };
  const f = (u = s.split('@')[1]) == null ? void 0 : u.toLowerCase();
  if (f) {
    const b = {
      'gmial.com': 'gmail.com',
      'gmai.com': 'gmail.com',
      'gmal.com': 'gmail.com',
      'yaho.com': 'yahoo.com',
      'hotmial.com': 'hotmail.com',
    };
    if (b[f]) return { valid: !1, error: `Did you mean ${s.split('@')[0]}@${b[f]}?` };
  }
  return { valid: !0 };
}
function tu(l) {
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
  const f = s.substring(1);
  return /^\d+$/.test(f)
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
function Xo(l) {
  if (!l || typeof l != 'string') return { valid: !1, error: 'Destination country is required' };
  const u = l.trim();
  return u.length === 0
    ? { valid: !1, error: 'Destination country is required' }
    : /^[A-Z]{2,3}$/i.test(u)
      ? Kr.find((s) => s.code.toUpperCase() === u.toUpperCase())
        ? { valid: !0 }
        : { valid: !1, error: 'Please enter a valid country code' }
      : u.length <= 2
        ? { valid: !1, error: 'Country name is too short' }
        : { valid: !0 };
}
function Jo(l) {
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
    f = parseFloat(s);
  return isNaN(f)
    ? { valid: !1, error: 'Please enter a valid weight (numbers only)' }
    : f <= 0
      ? { valid: !1, error: 'Weight must be greater than 0' }
      : f > 1e6
        ? { valid: !1, error: 'Weight seems too high. Please check and try again' }
        : { valid: !0 };
}
function es(l, u) {
  const s = {};
  switch (l) {
    case 'services':
      break;
    case 'shippingRoute':
      ((s.country = Xo(u.country)), (s.destCity = Jo(u.destCity)));
      break;
    case 'shippingCargo':
      s.totalWeight = ou(u.totalWeight);
      break;
    case 'contact':
      ((s.firstName = au(u.firstName, 'First name')),
        (s.email = ru(u.email)),
        (s.phone = tu(u.phone)));
      break;
  }
  return s;
}
function Sm(l, u) {
  const s = es(l, u);
  return Object.values(s).every((f) => f.valid);
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
  Tm = [
    { code: 'ZIH', name: 'Zhengzhou Rail Terminal', type: 'rail' },
    { code: 'CQN', name: 'Chongqing Rail Terminal', type: 'rail' },
    { code: 'XIY', name: "Xi'an Rail Terminal", type: 'rail' },
    { code: 'WUH', name: 'Wuhan Rail Terminal', type: 'rail' },
    { code: 'CDU', name: 'Chengdu Rail Terminal', type: 'rail' },
  ],
  Em = ({ formData: l, t: u, selectedServiceLabels: s, orderedSteps: f, onEditStep: b }) => {
    var S;
    const k = (I) => {
        if (!I) return '';
        const X = Kr.find((G) => G.code === I || G.name === I);
        return X ? X.name : I;
      },
      h = (I) => {
        if (!I) return '';
        const X = [...Cm, ...Pm, ...Tm].find((G) => G.code === I);
        return X ? X.name : I;
      },
      g = (I) =>
        I
          ? {
              Sea: u('modeSea', 'Sea'),
              Air: u('modeAir', 'Air'),
              Rail: u('modeRail', 'Rail'),
              Express: u('modeExpress', 'Express'),
              not_sure: u('modeNotSure', "I'm not sure"),
            }[I] || I
          : '',
      F = (I) => {
        if (!I) return '';
        const X = String(I).trim();
        return X ? `${X} kg` : '';
      },
      H = (I) => f.indexOf(I),
      z =
        ((S = l.servicesRequested) == null ? void 0 : S.shipping) === void 0
          ? !0
          : l.servicesRequested.shipping;
    return t.jsxs('div', {
      className: 'sino-simple-form__review-section',
      children: [
        t.jsx('h3', {
          className: 'sino-simple-form__review-title',
          children: u('reviewTitle', 'Review your request'),
        }),
        t.jsx('p', {
          className: 'sino-simple-form__review-subtitle',
          children: u('reviewSubtitle', 'Please review the information below before submitting.'),
        }),
        t.jsxs('div', {
          className: 'sino-simple-form__review-items',
          children: [
            s.length > 0 &&
              t.jsxs('div', {
                className: 'sino-simple-form__review-item',
                children: [
                  t.jsxs('div', {
                    className: 'sino-simple-form__review-item-header',
                    children: [
                      t.jsx('span', {
                        className: 'sino-simple-form__review-item-label',
                        children: u('reviewServices', 'Services'),
                      }),
                      t.jsx('button', {
                        type: 'button',
                        className: 'sino-simple-form__review-edit-button',
                        onClick: () => b(H('services')),
                        'aria-label': u('reviewEditServices', 'Edit services'),
                        children: u('reviewEdit', 'Edit'),
                      }),
                    ],
                  }),
                  t.jsx('div', {
                    className: 'sino-simple-form__review-item-content',
                    children: s.join(', '),
                  }),
                ],
              }),
            z &&
              (l.country || l.destCity || l.mode || l.origin) &&
              t.jsxs('div', {
                className: 'sino-simple-form__review-item',
                children: [
                  t.jsxs('div', {
                    className: 'sino-simple-form__review-item-header',
                    children: [
                      t.jsx('span', {
                        className: 'sino-simple-form__review-item-label',
                        children: u('reviewRoute', 'Route'),
                      }),
                      t.jsx('button', {
                        type: 'button',
                        className: 'sino-simple-form__review-edit-button',
                        onClick: () => b(H('shippingRoute')),
                        'aria-label': u('reviewEditRoute', 'Edit route'),
                        children: u('reviewEdit', 'Edit'),
                      }),
                    ],
                  }),
                  t.jsxs('div', {
                    className: 'sino-simple-form__review-item-content',
                    children: [
                      t.jsx('div', {
                        className: 'sino-simple-form__review-item-row',
                        children:
                          l.country &&
                          t.jsxs('div', {
                            children: [
                              t.jsxs('strong', {
                                children: [u('reviewDestination', 'Destination'), ':'],
                              }),
                              ' ',
                              k(l.country),
                              l.destCity && `, ${l.destCity}`,
                            ],
                          }),
                      }),
                      l.mode &&
                        t.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            t.jsxs('strong', { children: [u('reviewMode', 'Mode'), ':'] }),
                            ' ',
                            g(l.mode),
                          ],
                        }),
                      l.origin &&
                        t.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            t.jsxs('strong', { children: [u('reviewOrigin', 'Origin'), ':'] }),
                            ' ',
                            h(l.origin),
                            l.city && `, ${l.city}`,
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            z &&
              (l.totalWeight || l.goodsDescription || l.numberOfUnits) &&
              t.jsxs('div', {
                className: 'sino-simple-form__review-item',
                children: [
                  t.jsxs('div', {
                    className: 'sino-simple-form__review-item-header',
                    children: [
                      t.jsx('span', {
                        className: 'sino-simple-form__review-item-label',
                        children: u('reviewCargo', 'Cargo'),
                      }),
                      t.jsx('button', {
                        type: 'button',
                        className: 'sino-simple-form__review-edit-button',
                        onClick: () => b(H('shippingCargo')),
                        'aria-label': u('reviewEditCargo', 'Edit cargo'),
                        children: u('reviewEdit', 'Edit'),
                      }),
                    ],
                  }),
                  t.jsxs('div', {
                    className: 'sino-simple-form__review-item-content',
                    children: [
                      l.goodsDescription &&
                        t.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            t.jsxs('strong', {
                              children: [u('reviewDescription', 'Description'), ':'],
                            }),
                            ' ',
                            l.goodsDescription,
                          ],
                        }),
                      l.totalWeight &&
                        t.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            t.jsxs('strong', { children: [u('reviewWeight', 'Weight'), ':'] }),
                            ' ',
                            F(l.totalWeight),
                          ],
                        }),
                      l.numberOfUnits &&
                        t.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            t.jsxs('strong', { children: [u('reviewUnits', 'Units'), ':'] }),
                            ' ',
                            l.numberOfUnits,
                          ],
                        }),
                      l.areGoodsReady &&
                        t.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            t.jsxs('strong', { children: [u('reviewReady', 'Ready'), ':'] }),
                            ' ',
                            u(`goodsReady${l.areGoodsReady}`, l.areGoodsReady),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            (l.firstName || l.email || l.phone) &&
              t.jsxs('div', {
                className: 'sino-simple-form__review-item',
                children: [
                  t.jsxs('div', {
                    className: 'sino-simple-form__review-item-header',
                    children: [
                      t.jsx('span', {
                        className: 'sino-simple-form__review-item-label',
                        children: u('reviewContact', 'Contact'),
                      }),
                      t.jsx('button', {
                        type: 'button',
                        className: 'sino-simple-form__review-edit-button',
                        onClick: () => b(H('contact')),
                        'aria-label': u('reviewEditContact', 'Edit contact'),
                        children: u('reviewEdit', 'Edit'),
                      }),
                    ],
                  }),
                  t.jsxs('div', {
                    className: 'sino-simple-form__review-item-content',
                    children: [
                      l.firstName &&
                        t.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            t.jsxs('strong', { children: [u('reviewName', 'Name'), ':'] }),
                            ' ',
                            l.firstName,
                            l.lastName && ` ${l.lastName}`,
                          ],
                        }),
                      l.email &&
                        t.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            t.jsxs('strong', { children: [u('reviewEmail', 'Email'), ':'] }),
                            ' ',
                            l.email,
                          ],
                        }),
                      l.phone &&
                        t.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            t.jsxs('strong', { children: [u('reviewPhone', 'Phone'), ':'] }),
                            ' ',
                            l.phone,
                          ],
                        }),
                      l.companyName &&
                        t.jsxs('div', {
                          className: 'sino-simple-form__review-item-row',
                          children: [
                            t.jsxs('strong', { children: [u('reviewCompany', 'Company'), ':'] }),
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
  Lm = ({
    formData: l,
    t: u,
    selectedServiceLabels: s,
    submitError: f,
    setSubmitError: b,
    isSubmitting: S,
    setIsSubmitting: k,
    scrollToFirstError: h,
    onSubmissionSuccess: g,
    setFieldErrors: F,
    setFieldTouched: H,
    orderedSteps: z,
    onEditStep: I,
  }) =>
    t.jsx('section', {
      className: 'sino-simple-form__section sino-simple-form__section--footer',
      children: t.jsxs('div', {
        className: 'sino-simple-form__footer',
        children: [
          t.jsx(Em, {
            formData: l,
            t: u,
            selectedServiceLabels: s,
            orderedSteps: z,
            onEditStep: I,
          }),
          t.jsxs('div', {
            className: 'sino-simple-form__footer-text',
            children: [
              t.jsx('p', {
                className: 'sino-simple-form__footer-title',
                children: u('simpleFooterTitle', 'Ready to get your plan?'),
              }),
              t.jsx('p', {
                id: 'sino-simple-form__footer-subtitle',
                className: 'sino-simple-form__footer-subtitle',
                children: u(
                  'simpleFooterSubtitle',
                  'A SINO expert (not a bot) will email you a first quote within 24h (Mon–Fri).'
                ),
              }),
              t.jsx('p', {
                className: 'sino-simple-form__footer-trust',
                children: u(
                  'simpleFooterTrust',
                  'No spam. Just one clear plan, with transparent pricing and timelines.'
                ),
              }),
            ],
          }),
          t.jsxs('div', {
            className: 'sino-simple-form__footer-actions',
            children: [
              f && t.jsx('p', { className: 'sino-simple-form__footer-error', children: f }),
              t.jsx('button', {
                type: 'button',
                className: 'sino-simple-form__cta-button',
                'aria-label': u('getQuoteAria', 'Submit form to get your quote'),
                'aria-describedby': 'sino-simple-form__footer-subtitle',
                onClick: async () => {
                  var X;
                  if (S) return;
                  console.log(
                    '[SimpleFooterSection] Button clicked, validating all required fields...'
                  );
                  const G =
                      ((X = l.servicesRequested) == null ? void 0 : X.shipping) === void 0
                        ? !0
                        : l.servicesRequested.shipping,
                    C = [];
                  (G && C.push('shippingRoute', 'shippingCargo'), C.push('contact'));
                  const P = {},
                    ue = {};
                  for (const re of C) {
                    const ae = es(re, l);
                    Object.entries(ae).forEach(([ge, fe]) => {
                      !fe.valid && fe.error && ((P[ge] = fe.error), (ue[ge] = !0));
                    });
                  }
                  if ((F(P), H((re) => ({ ...re, ...ue })), Object.keys(P).length > 0)) {
                    const re = Object.keys(P);
                    console.error('[SimpleFooterSection] Validation failed for fields:', re);
                    const ae = re.length,
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
                    (b(ge),
                      setTimeout(() => {
                        h();
                      }, 100));
                    return;
                  }
                  (console.log(
                    '[SimpleFooterSection] All validations passed, starting submission...'
                  ),
                    b(null),
                    k(!0));
                  let de = !1;
                  try {
                    console.log('[SimpleFooterSection] Preparing submission payload...');
                    const { submissionId: re, payload: ae } = Nm(l);
                    (console.log('[SimpleFooterSection] Payload prepared, submissionId:', re),
                      console.log('[SimpleFooterSection] Submitting to webhooks...'));
                    const ge = await jm(ae, (fe) => {
                      (console.error('[SimpleFooterSection] Error callback triggered:', fe),
                        (de = !0),
                        b(fe));
                    });
                    (console.log(
                      '[SimpleFooterSection] Submission successful, calling onSubmissionSuccess with:',
                      ge
                    ),
                      g(ge));
                  } catch (re) {
                    if (
                      (console.error('[SimpleFooterSection] Submission error caught:', re),
                      !de && re instanceof Error)
                    ) {
                      const ae = re.message || 'An error occurred. Please try again.';
                      (console.error('[SimpleFooterSection] Setting error message:', ae), b(ae));
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
              t.jsx('p', {
                className: 'sino-simple-form__footer-note',
                children: u(
                  'simpleFooterNote',
                  'By submitting, you agree that SINO Shipping may contact you about this request.'
                ),
              }),
            ],
          }),
          t.jsxs('div', {
            className: 'sino-simple-form__footer-trust-badges',
            children: [
              t.jsxs('a', {
                href: 'https://www.sino-shipping.com/privacy-policy',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'sino-simple-form__footer-trust-badge',
                'aria-label': u('trustBadgeGDPR', 'GDPR Compliant'),
                children: [
                  t.jsxs('svg', {
                    width: '20',
                    height: '20',
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                      t.jsx('rect', {
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
                      t.jsx('path', {
                        d: 'M9 12l2 2 4-4',
                        stroke: 'currentColor',
                        strokeWidth: '2',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      }),
                    ],
                  }),
                  t.jsx('span', {
                    className: 'sino-simple-form__footer-trust-badge-text',
                    children: u('trustBadgeGDPR', 'GDPR Compliant'),
                  }),
                ],
              }),
              t.jsxs('div', {
                className: 'sino-simple-form__footer-trust-badge',
                'aria-label': u('trustBadgeSecure', 'Secure & Encrypted'),
                children: [
                  t.jsxs('svg', {
                    width: '20',
                    height: '20',
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                      t.jsx('rect', {
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
                      t.jsx('path', {
                        d: 'M7 11V7a5 5 0 0 1 10 0v4',
                        stroke: 'currentColor',
                        strokeWidth: '2',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      }),
                    ],
                  }),
                  t.jsx('span', {
                    className: 'sino-simple-form__footer-trust-badge-text',
                    children: u('trustBadgeSecure', 'Secure & Encrypted'),
                  }),
                ],
              }),
              t.jsxs('div', {
                className: 'sino-simple-form__footer-trust-badge',
                'aria-label': u('trustBadgeNoSpam', 'No Spam Guarantee'),
                children: [
                  t.jsxs('svg', {
                    width: '20',
                    height: '20',
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                      t.jsx('path', {
                        d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
                        stroke: 'currentColor',
                        strokeWidth: '2',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      }),
                      t.jsx('line', {
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
                  t.jsx('span', {
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
function Mm(l, u, s, f) {
  if (u - (l + 1) <= 0) return { minutes: 0, message: 'Almost done!', isAlmostDone: !0 };
  const b = {
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
  for (let g = l + 1; g < s.length; g++) {
    const F = s[g],
      H = b[F] || 90,
      z = iu(F, f),
      I = z.total > 0 ? z.filled / z.total : 0,
      X = H * (1 - I * 0.5);
    S += X;
  }
  const k = Math.ceil(S / 60);
  let h;
  return (
    k <= 1
      ? (h = 'Almost done!')
      : k <= 2
        ? (h = `~${k} minute${k > 1 ? 's' : ''} remaining`)
        : (h = `~${k} minutes remaining`),
    { minutes: k, message: h, isAlmostDone: k <= 1 }
  );
}
const Rm = ({ currentStepIndex: l, totalSteps: u, orderedSteps: s, formData: f, t: b }) => {
    const S = W.useMemo(() => Mm(l, u, s, f), [l, u, s, f]);
    return t.jsxs('div', {
      className: `sino-simple-form__time-estimate${S.isAlmostDone ? ' sino-simple-form__time-estimate--almost-done' : ''}`,
      role: 'status',
      'aria-live': 'polite',
      children: [
        t.jsx('div', {
          className: 'sino-simple-form__time-estimate-icon',
          children: t.jsxs('svg', {
            width: '16',
            height: '16',
            viewBox: '0 0 24 24',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              t.jsx('circle', {
                cx: '12',
                cy: '12',
                r: '10',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
              t.jsx('polyline', {
                points: '12 6 12 12 16 14',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            ],
          }),
        }),
        t.jsx('span', {
          className: 'sino-simple-form__time-estimate-text',
          children: S.isAlmostDone
            ? b('timeEstimateAlmostDone', S.message)
            : b('timeEstimateRemaining', S.message),
        }),
      ],
    });
  },
  Dm = ({
    currentStep: l,
    totalSteps: u,
    onNext: s,
    onPrevious: f,
    isFirstStep: b,
    isLastStep: S,
    orderedSteps: k,
    formData: h,
    t: g,
  }) =>
    t.jsxs('div', {
      className: 'sino-simple-form__step-navigation',
      children: [
        t.jsx('div', {
          className: 'sino-simple-form__step-progress',
          children: t.jsx('div', {
            className: 'sino-simple-form__step-progress-bar',
            children: t.jsx('div', {
              className: 'sino-simple-form__step-progress-fill',
              style: { width: `${((l + 1) / u) * 100}%` },
            }),
          }),
        }),
        t.jsx(Rm, { currentStepIndex: l, totalSteps: u, orderedSteps: k, formData: h, t: g }),
        t.jsxs('div', {
          className: 'sino-simple-form__step-buttons',
          children: [
            !b &&
              t.jsxs('button', {
                type: 'button',
                className: 'sino-simple-form__step-button sino-simple-form__step-button--previous',
                onClick: f,
                'aria-label': g('previousStepAria', `Go to previous step, step ${l} of ${u}`),
                onKeyDown: (F) => {
                  (F.key === 'Enter' || F.key === ' ') && (F.preventDefault(), f());
                },
                children: [
                  t.jsx('span', {
                    className: 'sino-simple-form__step-button-arrow',
                    'aria-hidden': 'true',
                    children: '←',
                  }),
                  g('previousStep', 'Previous'),
                ],
              }),
            !S &&
              t.jsxs('button', {
                type: 'button',
                className: 'sino-simple-form__step-button sino-simple-form__step-button--next',
                onClick: s,
                'aria-label': g('nextStepAria', `Go to next step, step ${l + 2} of ${u}`),
                onKeyDown: (F) => {
                  (F.key === 'Enter' || F.key === ' ') && (F.preventDefault(), s());
                },
                children: [
                  g('nextStep', 'Next'),
                  t.jsx('span', {
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
  Fm = {
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
  Zc = ({
    id: l,
    name: u,
    value: s,
    onChange: f,
    onBlur: b,
    onSelect: S,
    onSelectWithValidation: k,
    placeholder: h,
    options: g,
    isLoading: F = !1,
    className: H = '',
    inputRef: z,
    error: I,
    touched: X,
    isValid: G,
    maxResults: C = 10,
  }) => {
    const [P, ue] = W.useState(!1),
      [de, re] = W.useState(-1),
      [ae, ge] = W.useState(''),
      [fe, Re] = W.useState(!1),
      De = W.useRef(null),
      Ge = W.useRef(null),
      Be = W.useRef(null),
      un = W.useRef(!1),
      ze = g.length > 0 && g[0].flag !== void 0;
    W.useEffect(() => {
      if (!s) {
        ge('');
        return;
      }
      if (ze) {
        const m = g.find((N) => N.value === s);
        ge(m ? m.label : s);
      } else ge(s);
    }, [s, g, ze]);
    const Ne = g
      .filter((m) => {
        if (!ae.trim()) return !1;
        const N = ae.toLowerCase();
        return (
          m.label.toLowerCase().includes(N) ||
          m.value.toLowerCase().includes(N) ||
          (ze && m.value.toLowerCase() === N)
        );
      })
      .slice(0, C);
    (W.useEffect(
      () => (
        ae.trim() && P
          ? (Re(!0),
            Be.current && clearTimeout(Be.current),
            (Be.current = setTimeout(() => {
              Re(!1);
            }, 300)))
          : Re(!1),
        () => {
          Be.current && clearTimeout(Be.current);
        }
      ),
      [ae, P]
    ),
      W.useEffect(() => {
        const m = (N) => {
          De.current && !De.current.contains(N.target) && (ue(!1), re(-1));
        };
        if (P)
          return (
            document.addEventListener('mousedown', m),
            () => document.removeEventListener('mousedown', m)
          );
      }, [P]));
    const en = (m) => {
        const N = m.target.value;
        (ge(N), f(m), ue(!0), re(-1));
      },
      ie = () => {
        Ne.length > 0 && ue(!0);
      },
      ve = (m) => {
        ((un.current = !0), ge(m.label), ue(!1), re(-1), k && k(m.value));
        const N = { target: { name: u, value: m.value } };
        (f(N),
          S && S(m.value),
          setTimeout(() => {
            un.current = !1;
          }, 300));
      },
      me = (m) => {
        var N;
        if (!P || Ne.length === 0) {
          m.key === 'ArrowDown' && Ne.length > 0 && (ue(!0), re(0));
          return;
        }
        switch (m.key) {
          case 'ArrowDown':
            (m.preventDefault(),
              re((K) => {
                const Y = K < Ne.length - 1 ? K + 1 : K;
                if (Ge.current && Y >= 0) {
                  const ee = Ge.current.children[Y];
                  ee && ee.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                }
                return Y;
              }));
            break;
          case 'ArrowUp':
            (m.preventDefault(),
              re((K) => {
                const Y = K > 0 ? K - 1 : -1;
                if (Ge.current && Y >= 0) {
                  const ee = Ge.current.children[Y];
                  ee && ee.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                }
                return Y;
              }));
            break;
          case 'Enter':
            (m.preventDefault(), de >= 0 && de < Ne.length && ve(Ne[de]));
            break;
          case 'Escape':
            (m.preventDefault(), ue(!1), re(-1), (N = z.current) == null || N.focus());
            break;
          case 'Tab':
            (ue(!1), re(-1));
            break;
        }
      },
      A = F || fe,
      D = A && ae.trim() && P,
      O = A && !(X && !I && G);
    return t.jsxs('div', {
      ref: De,
      className: 'sino-simple-form__autocomplete-wrapper',
      children: [
        t.jsxs('div', {
          className: 'sino-simple-form__autocomplete-input-wrapper',
          children: [
            t.jsx('input', {
              ref: z,
              id: l,
              name: u,
              type: 'text',
              value: ae,
              onChange: en,
              onFocus: ie,
              onBlur: () => {
                setTimeout(() => {
                  (un.current || b(), ue(!1), re(-1));
                }, 200);
              },
              onKeyDown: me,
              placeholder: h,
              className: `sino-simple-form__input${I ? ' sino-simple-form__input--error' : ''}${X && !I && G ? ' sino-simple-form__input--success' : ''}${A && !(X && !I && G) ? ' sino-simple-form__input--loading' : ''}${H ? ` ${H}` : ''}`,
              autoComplete: 'off',
              'aria-autocomplete': 'list',
              'aria-expanded': P,
              'aria-haspopup': 'listbox',
              'aria-controls': `${l}-listbox`,
              'aria-label': h,
              'aria-describedby': I ? `${l}-error` : X && !I && G ? `${l}-success` : void 0,
              'aria-invalid': I ? 'true' : 'false',
              'aria-activedescendant': de >= 0 ? `${l}-option-${de}` : void 0,
            }),
            O &&
              t.jsx('span', {
                className: 'sino-simple-form__autocomplete-spinner',
                'aria-hidden': 'true',
                children: t.jsxs('svg', {
                  width: '16',
                  height: '16',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    t.jsx('circle', {
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
                    t.jsx('circle', {
                      cx: '12',
                      cy: '12',
                      r: '10',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeDasharray: '32',
                      strokeDashoffset: '24',
                      children: t.jsx('animateTransform', {
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
          (Ne.length > 0 || D) &&
          t.jsx('ul', {
            ref: Ge,
            id: `${l}-listbox`,
            className: 'sino-simple-form__autocomplete-list',
            role: 'listbox',
            children: D
              ? t.jsxs(t.Fragment, {
                  children: [
                    Array.from({ length: 3 }).map((m, N) =>
                      t.jsxs(
                        'li',
                        {
                          className: 'sino-simple-form__autocomplete-skeleton',
                          role: 'option',
                          children: [
                            ze &&
                              t.jsx('span', {
                                className: 'sino-simple-form__autocomplete-skeleton-flag',
                              }),
                            t.jsx('span', {
                              className: 'sino-simple-form__autocomplete-skeleton-text',
                            }),
                          ],
                        },
                        `skeleton-${N}`
                      )
                    ),
                    t.jsx('li', {
                      className: 'sino-simple-form__autocomplete-loading',
                      children: t.jsx('span', {
                        className: 'sino-simple-form__autocomplete-loading-text',
                        children: ze ? 'Loading countries...' : 'Loading suggestions...',
                      }),
                    }),
                  ],
                })
              : Ne.map((m, N) =>
                  t.jsxs(
                    'li',
                    {
                      id: `${l}-option-${N}`,
                      className: `sino-simple-form__autocomplete-option${de === N ? ' sino-simple-form__autocomplete-option--highlighted' : ''}`,
                      role: 'option',
                      'aria-selected': de === N,
                      onClick: () => ve(m),
                      onMouseEnter: () => re(N),
                      onKeyDown: (K) => {
                        (K.key === 'Enter' || K.key === ' ') && (K.preventDefault(), ve(m));
                      },
                      tabIndex: -1,
                      children: [
                        m.flag &&
                          t.jsx('span', {
                            className: 'sino-simple-form__autocomplete-flag',
                            'aria-hidden': 'true',
                            children: m.flag,
                          }),
                        t.jsx('span', {
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
  zm = () => Kr.map((l) => ({ value: l.code, label: l.name, flag: l.flag })),
  Im = (l) => (Fm[l] || []).map((u) => ({ value: u, label: u }));
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
function Am(l, u, s) {
  if (!l || !s || s <= 0) return { value: null, formatted: '' };
  const f = la(l.length),
    b = la(l.width),
    S = la(l.height);
  if (!f || !b || !S) return { value: null, formatted: '' };
  const k = Ko(f),
    h = Ko(b),
    g = Ko(S),
    F = k * h * g * s,
    H = F.toFixed(3).replace(/\.?0+$/, '');
  return { value: F, formatted: `${H} CBM` };
}
function Wm(l, u, s) {
  if (!l || !s || s <= 0) return { value: null, formatted: '' };
  const f = la(l);
  if (!f) return { value: null, formatted: '' };
  const b = f * s,
    S = u,
    k = b.toLocaleString('en-US', { maximumFractionDigits: 2, useGrouping: !0 });
  return { value: b, formatted: `${k} ${S}` };
}
function Om(l) {
  const u = Am(l.dimensions, 'CM', l.numberOfUnits),
    s = Wm(l.weightPerUnit, 'KG', l.numberOfUnits);
  return { totalVolume: u, totalWeightFromUnits: s };
}
const $m = ({ formData: l, setFormData: u, t: s }) => {
    const f = W.useMemo(() => Om(l), [l.dimensions, l.numberOfUnits, l.weightPerUnit]),
      b = f.totalVolume.value !== null || f.totalWeightFromUnits.value !== null,
      S = W.useRef(!1);
    return (
      W.useEffect(() => {
        if (f.totalWeightFromUnits.value !== null && !S.current) {
          const k = l.totalWeight,
            h = Math.round(f.totalWeightFromUnits.value).toString();
          if (!k || k.trim() === '') {
            S.current = !0;
            const g = setTimeout(() => {
              (u((F) =>
                !F.totalWeight || F.totalWeight.trim() === '' ? { ...F, totalWeight: h } : F
              ),
                (S.current = !1));
            }, 1e3);
            return () => {
              (clearTimeout(g), (S.current = !1));
            };
          }
        }
      }, [f.totalWeightFromUnits.value, l.totalWeight, u]),
      b
        ? t.jsxs('div', {
            className: 'sino-simple-form__cargo-calculations',
            children: [
              t.jsx('div', {
                className: 'sino-simple-form__cargo-calculations-header',
                children: t.jsx('span', {
                  className: 'sino-simple-form__cargo-calculations-title',
                  children: s('cargoCalculationsTitle', 'Calculated values'),
                }),
              }),
              t.jsxs('div', {
                className: 'sino-simple-form__cargo-calculations-items',
                children: [
                  f.totalVolume.value !== null &&
                    t.jsxs('div', {
                      className: 'sino-simple-form__cargo-calculation-item',
                      children: [
                        t.jsxs('span', {
                          className: 'sino-simple-form__cargo-calculation-label',
                          children: [s('cargoCalculatedVolume', 'Total volume'), ':'],
                        }),
                        t.jsx('span', {
                          className: 'sino-simple-form__cargo-calculation-value',
                          children: f.totalVolume.formatted,
                        }),
                      ],
                    }),
                  f.totalWeightFromUnits.value !== null &&
                    t.jsxs('div', {
                      className: 'sino-simple-form__cargo-calculation-item',
                      children: [
                        t.jsxs('span', {
                          className: 'sino-simple-form__cargo-calculation-label',
                          children: [s('cargoCalculatedWeight', 'Total weight (from units)'), ':'],
                        }),
                        t.jsx('span', {
                          className: 'sino-simple-form__cargo-calculation-value',
                          children: f.totalWeightFromUnits.formatted,
                        }),
                      ],
                    }),
                ],
              }),
              t.jsx('p', {
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
  Xc = 'sinoSimpleFormSocialProofWidgetCollapsed',
  Bm = ({ t: l }) => {
    const [u, s] = W.useState(!1),
      [f, b] = W.useState(!1);
    W.useEffect(() => {
      if (typeof window > 'u') return;
      try {
        window.localStorage.getItem(Xc) === 'true' && b(!0);
      } catch {}
      const k = setTimeout(() => {
        s(!0);
      }, 500);
      return () => clearTimeout(k);
    }, []);
    const S = () => {
      const k = !f;
      if ((b(k), typeof window < 'u'))
        try {
          window.localStorage.setItem(Xc, String(k));
        } catch {}
    };
    return t.jsx('div', {
      className: `sino-simple-form__social-proof-widget${u ? ' sino-simple-form__social-proof-widget--visible' : ''}${f ? ' sino-simple-form__social-proof-widget--collapsed' : ''}`,
      role: 'complementary',
      'aria-label': l('socialProofAriaLabel', 'Social proof and trust indicators'),
      children: t.jsxs('div', {
        className: 'sino-simple-form__social-proof-widget-content',
        children: [
          t.jsxs('div', {
            className: 'sino-simple-form__social-proof-widget-header',
            children: [
              t.jsx('span', {
                className: 'sino-simple-form__social-proof-widget-title',
                children: l('socialProofTitle', 'Trusted by'),
              }),
              t.jsx('button', {
                type: 'button',
                className: 'sino-simple-form__social-proof-widget-toggle',
                onClick: S,
                'aria-label': f
                  ? l('expandWidget', 'Expand widget')
                  : l('collapseWidget', 'Collapse widget'),
                title: f
                  ? l('expandWidget', 'Expand widget')
                  : l('collapseWidget', 'Collapse widget'),
                'aria-expanded': !f,
                children: t.jsx('svg', {
                  width: '16',
                  height: '16',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: `sino-simple-form__social-proof-widget-toggle-icon${f ? ' sino-simple-form__social-proof-widget-toggle-icon--collapsed' : ''}`,
                  children: t.jsx('polyline', {
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
          !f &&
            t.jsxs('div', {
              className: 'sino-simple-form__social-proof-widget-items',
              children: [
                t.jsxs('div', {
                  className: 'sino-simple-form__social-proof-widget-item',
                  children: [
                    t.jsx('div', {
                      className: 'sino-simple-form__social-proof-widget-icon',
                      children: t.jsxs('svg', {
                        width: '20',
                        height: '20',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: [
                          t.jsx('path', {
                            d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                          t.jsx('circle', {
                            cx: '9',
                            cy: '7',
                            r: '4',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                          t.jsx('path', {
                            d: 'M23 21v-2a4 4 0 0 0-3-3.87',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                          t.jsx('path', {
                            d: 'M16 3.13a4 4 0 0 1 0 7.75',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                        ],
                      }),
                    }),
                    t.jsxs('div', {
                      className: 'sino-simple-form__social-proof-widget-text',
                      children: [
                        t.jsx('strong', {
                          className: 'sino-simple-form__social-proof-widget-value',
                          children: '55,000+',
                        }),
                        t.jsx('span', {
                          className: 'sino-simple-form__social-proof-widget-label',
                          children: l('socialProofCustomers', 'Satisfied Customers'),
                        }),
                      ],
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__social-proof-widget-item',
                  children: [
                    t.jsx('div', {
                      className: 'sino-simple-form__social-proof-widget-icon',
                      children: t.jsx('svg', {
                        width: '20',
                        height: '20',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: t.jsx('polygon', {
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
                    t.jsxs('div', {
                      className: 'sino-simple-form__social-proof-widget-text',
                      children: [
                        t.jsx('strong', {
                          className: 'sino-simple-form__social-proof-widget-value',
                          children: '4.8/5',
                        }),
                        t.jsx('span', {
                          className: 'sino-simple-form__social-proof-widget-label',
                          children: l('socialProofRating', 'Customer Satisfaction'),
                        }),
                      ],
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__social-proof-widget-item',
                  children: [
                    t.jsx('div', {
                      className: 'sino-simple-form__social-proof-widget-icon',
                      children: t.jsxs('svg', {
                        width: '20',
                        height: '20',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: [
                          t.jsx('circle', {
                            cx: '12',
                            cy: '12',
                            r: '10',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                          t.jsx('polyline', {
                            points: '12 6 12 12 16 14',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                        ],
                      }),
                    }),
                    t.jsxs('div', {
                      className: 'sino-simple-form__social-proof-widget-text',
                      children: [
                        t.jsx('strong', {
                          className: 'sino-simple-form__social-proof-widget-value',
                          children: '24h',
                        }),
                        t.jsx('span', {
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
    stepLabel: f,
    showSourcingAdvanced: b,
    setShowSourcingAdvanced: S,
    isQuickQuote: k = !1,
  }) =>
    t.jsx(t.Fragment, {
      children:
        l.servicesRequested.sourcing &&
        t.jsxs('section', {
          className: 'sino-simple-form__section sino-simple-form__section--service-sourcing',
          children: [
            t.jsxs('h2', {
              className: 'sino-simple-form__section-title',
              children: [
                t.jsx('span', {
                  className: 'sino-simple-form__section-step',
                  children: f ?? 'Step 1',
                }),
                t.jsx('span', { children: s('simpleSourcingTitle', 'Product sourcing') }),
              ],
            }),
            t.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--rows',
              children: [
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'sourcingProductDescription',
                      children: [
                        s('sourcingProductDescription', 'What product are you looking for?'),
                        t.jsx('span', {
                          className: 'sino-simple-form__required',
                          'aria-label': 'required',
                          children: '*',
                        }),
                      ],
                    }),
                    t.jsx('textarea', {
                      id: 'sourcingProductDescription',
                      className: 'sino-simple-form__input sino-simple-form__input--textarea',
                      name: 'sourcingProductDescription',
                      value: l.sourcing.productDescription,
                      onChange: (h) =>
                        u((g) => ({
                          ...g,
                          sourcing: { ...g.sourcing, productDescription: h.target.value },
                        })),
                      placeholder: s(
                        'sourcingProductDescriptionPlaceholder',
                        'Briefly describe the product, specs, or categories you need.'
                      ),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'sourcingReferenceLink',
                      children: [
                        s('sourcingReferenceLink', 'Reference link'),
                        t.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: s('ifAny', 'if any'),
                        }),
                      ],
                    }),
                    t.jsx('input', {
                      id: 'sourcingReferenceLink',
                      className: 'sino-simple-form__input',
                      type: 'url',
                      value: l.sourcing.referenceLink,
                      onChange: (h) =>
                        u((g) => ({
                          ...g,
                          sourcing: { ...g.sourcing, referenceLink: h.target.value },
                        })),
                      placeholder: s(
                        'sourcingReferenceLinkPlaceholder',
                        'Alibaba, 1688, Taobao, or any reference URL.'
                      ),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'sourcingTargetPrice',
                      children: s('sourcingTargetPrice', 'Target price per unit'),
                    }),
                    t.jsxs('div', {
                      className: 'sino-simple-form__fields sino-simple-form__fields--inline',
                      children: [
                        t.jsx('input', {
                          id: 'sourcingTargetPrice',
                          className: 'sino-simple-form__input',
                          type: 'number',
                          min: 0,
                          value: l.sourcing.targetPrice ?? '',
                          onChange: (h) =>
                            u((g) => ({
                              ...g,
                              sourcing: {
                                ...g.sourcing,
                                targetPrice: h.target.value ? Number(h.target.value) : null,
                              },
                            })),
                          placeholder: s('sourcingTargetPricePlaceholder', 'e.g. 5.50'),
                        }),
                        t.jsx('input', {
                          className: 'sino-simple-form__input',
                          type: 'text',
                          value: l.sourcing.targetCurrency,
                          onChange: (h) =>
                            u((g) => ({
                              ...g,
                              sourcing: { ...g.sourcing, targetCurrency: h.target.value },
                            })),
                          placeholder: s('sourcingTargetCurrencyPlaceholder', 'USD, EUR…'),
                        }),
                      ],
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'sourcingMoq',
                      children: s('sourcingMoq', 'Expected order quantity (MOQ)'),
                    }),
                    t.jsx('input', {
                      id: 'sourcingMoq',
                      className: 'sino-simple-form__input',
                      type: 'number',
                      min: 0,
                      value: l.sourcing.moq ?? '',
                      onChange: (h) =>
                        u((g) => ({
                          ...g,
                          sourcing: {
                            ...g.sourcing,
                            moq: h.target.value ? Number(h.target.value) : null,
                          },
                        })),
                      placeholder: s('sourcingMoqPlaceholder', 'Approximate number of units'),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'sourcingPlatform',
                      children: s('sourcingPlatform', 'Which market/platform is this for?'),
                    }),
                    t.jsx('input', {
                      id: 'sourcingPlatform',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: l.sourcing.platform,
                      onChange: (h) =>
                        u((g) => ({ ...g, sourcing: { ...g.sourcing, platform: h.target.value } })),
                      placeholder: s(
                        'sourcingPlatformPlaceholder',
                        'Amazon FBA, Shopify store, wholesale, etc.'
                      ),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsx('label', {
                      className: 'sino-simple-form__label',
                      children: s('sourcingHasSupplier', 'Do you already have a supplier?'),
                    }),
                    t.jsx('div', {
                      className: 'sino-simple-form__chips',
                      children: [
                        { value: !0, label: s('sourcingHasSupplierYes', 'Yes') },
                        { value: !1, label: s('sourcingHasSupplierNo', 'No') },
                      ].map((h) =>
                        t.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.sourcing.hasSupplier === h.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              u((g) => ({
                                ...g,
                                sourcing: {
                                  ...g.sourcing,
                                  hasSupplier: g.sourcing.hasSupplier === h.value ? null : h.value,
                                },
                              })),
                            children: h.label,
                          },
                          String(h.value)
                        )
                      ),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'sourcingTargetMarkets',
                      children: s('sourcingTargetMarkets', 'Which markets are you selling to?'),
                    }),
                    t.jsx('input', {
                      id: 'sourcingTargetMarkets',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: l.sourcing.targetMarkets,
                      onChange: (h) =>
                        u((g) => ({
                          ...g,
                          sourcing: { ...g.sourcing, targetMarkets: h.target.value },
                        })),
                      placeholder: s(
                        'sourcingTargetMarketsPlaceholder',
                        'e.g. EU, UK, US, Middle East…'
                      ),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'sourcingRequiredCertifications',
                      children: [
                        s('sourcingRequiredCertifications', 'Required certifications'),
                        t.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: s('ifAny', 'if any'),
                        }),
                      ],
                    }),
                    t.jsx('input', {
                      id: 'sourcingRequiredCertifications',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: l.sourcing.requiredCertifications,
                      onChange: (h) =>
                        u((g) => ({
                          ...g,
                          sourcing: { ...g.sourcing, requiredCertifications: h.target.value },
                        })),
                      placeholder: s(
                        'sourcingRequiredCertificationsPlaceholder',
                        'e.g. CE, RoHS, FDA...'
                      ),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: `sino-simple-form__subsection${b ? ' sino-simple-form__subsection--open' : ''}`,
                  children: [
                    t.jsxs('button', {
                      type: 'button',
                      className: 'sino-simple-form__subsection-toggle',
                      onClick: () => S((h) => !h),
                      children: [
                        t.jsxs('span', {
                          className: 'sino-simple-form__subsection-label',
                          children: [
                            s('sourcingAdvancedTitle', 'Advanced sourcing details (optional)'),
                            t.jsx('small', {
                              children: s(
                                'sourcingAdvancedSubtitle',
                                'Timeline, quality standards, packaging requirements.'
                              ),
                            }),
                          ],
                        }),
                        t.jsx('span', {
                          className: `sino-simple-form__subsection-chevron${b ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                          children: '▾',
                        }),
                      ],
                    }),
                    b &&
                      t.jsxs('div', {
                        className: 'sino-simple-form__fields sino-simple-form__fields--rows',
                        children: [
                          t.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              t.jsx('label', {
                                className: 'sino-simple-form__label',
                                htmlFor: 'sourcingTimeline',
                                children: s('sourcingTimeline', 'Timeline / urgency'),
                              }),
                              t.jsx('input', {
                                id: 'sourcingTimeline',
                                className: 'sino-simple-form__input',
                                type: 'text',
                                value: l.sourcing.timeline || '',
                                onChange: (h) =>
                                  u((g) => ({
                                    ...g,
                                    sourcing: { ...g.sourcing, timeline: h.target.value },
                                  })),
                                placeholder: s(
                                  'sourcingTimelinePlaceholder',
                                  'e.g. Need samples within 2 weeks, production start in 1 month…'
                                ),
                              }),
                            ],
                          }),
                          t.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              t.jsxs('label', {
                                className: 'sino-simple-form__label',
                                htmlFor: 'sourcingQualityStandards',
                                children: [
                                  s('sourcingQualityStandards', 'Quality standards'),
                                  t.jsx('span', {
                                    className: 'sino-simple-form__label-hint',
                                    children: s('ifAny', 'if any'),
                                  }),
                                ],
                              }),
                              t.jsx('input', {
                                id: 'sourcingQualityStandards',
                                className: 'sino-simple-form__input',
                                type: 'text',
                                value: l.sourcing.qualityStandards || '',
                                onChange: (h) =>
                                  u((g) => ({
                                    ...g,
                                    sourcing: { ...g.sourcing, qualityStandards: h.target.value },
                                  })),
                                placeholder: s(
                                  'sourcingQualityStandardsPlaceholder',
                                  'e.g. ISO 9001, specific quality grades…'
                                ),
                              }),
                            ],
                          }),
                          t.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              t.jsxs('label', {
                                className: 'sino-simple-form__label',
                                htmlFor: 'sourcingPackagingRequirements',
                                children: [
                                  s('sourcingPackagingRequirements', 'Packaging requirements'),
                                  t.jsx('span', {
                                    className: 'sino-simple-form__label-hint',
                                    children: s('ifAny', 'if any'),
                                  }),
                                ],
                              }),
                              t.jsx('input', {
                                id: 'sourcingPackagingRequirements',
                                className: 'sino-simple-form__input',
                                type: 'text',
                                value: l.sourcing.packagingRequirements || '',
                                onChange: (h) =>
                                  u((g) => ({
                                    ...g,
                                    sourcing: {
                                      ...g.sourcing,
                                      packagingRequirements: h.target.value,
                                    },
                                  })),
                                placeholder: s(
                                  'sourcingPackagingRequirementsPlaceholder',
                                  'e.g. Retail-ready, eco-friendly materials…'
                                ),
                              }),
                            ],
                          }),
                          t.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              t.jsx('label', {
                                className: 'sino-simple-form__label',
                                htmlFor: 'sourcingNotes',
                                children: s('sourcingAdvancedNotes', 'Any other details?'),
                              }),
                              t.jsx('textarea', {
                                id: 'sourcingNotes',
                                className:
                                  'sino-simple-form__input sino-simple-form__input--textarea',
                                value: l.sourcing.notes || '',
                                onChange: (h) =>
                                  u((g) => ({
                                    ...g,
                                    sourcing: { ...g.sourcing, notes: h.target.value },
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
  qm = ({
    formData: l,
    setFormData: u,
    t: s,
    showWarehousingAdvanced: f,
    setShowWarehousingAdvanced: b,
    stepLabel: S,
    isQuickQuote: k = !1,
  }) =>
    l.servicesRequested.warehousing
      ? t.jsxs('section', {
          className: 'sino-simple-form__section sino-simple-form__section--service-warehousing',
          children: [
            t.jsxs('h2', {
              className: 'sino-simple-form__section-title',
              children: [
                t.jsx('span', {
                  className: 'sino-simple-form__section-step',
                  children: S ?? 'Service',
                }),
                t.jsx('span', {
                  children: s('warehousingTitle', 'Warehousing & consolidation in China'),
                }),
              ],
            }),
            t.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--rows',
              children: [
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsxs('label', {
                      className: 'sino-simple-form__label',
                      children: [
                        s('warehousingDuration', 'How long do you plan to store goods in China?'),
                        t.jsx('span', {
                          className: 'sino-simple-form__required',
                          'aria-label': 'required',
                          children: '*',
                        }),
                      ],
                    }),
                    t.jsx('div', {
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
                      ].map((h) =>
                        t.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.warehousing.duration === h.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              u((g) => ({
                                ...g,
                                warehousing: {
                                  ...g.warehousing,
                                  duration: g.warehousing.duration === h.value ? '' : h.value,
                                },
                              })),
                            children: h.label,
                          },
                          h.value
                        )
                      ),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'warehousingSkuCount',
                      children: s('warehousingSkuCount', 'Approximate number of SKUs'),
                    }),
                    t.jsx('input', {
                      id: 'warehousingSkuCount',
                      className: 'sino-simple-form__input',
                      type: 'number',
                      min: 0,
                      value: l.warehousing.skuCount ?? '',
                      onChange: (h) =>
                        u((g) => ({
                          ...g,
                          warehousing: {
                            ...g.warehousing,
                            skuCount: h.target.value ? Number(h.target.value) : null,
                          },
                        })),
                      placeholder: s('warehousingSkuCountPlaceholder', 'e.g. 10–50'),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsx('label', {
                      className: 'sino-simple-form__label',
                      children: s(
                        'warehousingConsolidation',
                        'Do you need consolidation from multiple suppliers?'
                      ),
                    }),
                    t.jsx('div', {
                      className: 'sino-simple-form__chips',
                      children: [
                        { value: !0, label: s('warehousingConsolidationYes', 'Yes') },
                        { value: !1, label: s('warehousingConsolidationNo', 'No') },
                      ].map((h) =>
                        t.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.warehousing.consolidation === h.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              u((g) => ({
                                ...g,
                                warehousing: {
                                  ...g.warehousing,
                                  consolidation:
                                    g.warehousing.consolidation === h.value ? null : h.value,
                                },
                              })),
                            children: h.label,
                          },
                          String(h.value)
                        )
                      ),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: `sino-simple-form__subsection${f ? ' sino-simple-form__subsection--open' : ''}`,
                  children: [
                    t.jsxs('button', {
                      type: 'button',
                      className: 'sino-simple-form__subsection-toggle',
                      onClick: () => b((h) => !h),
                      children: [
                        t.jsxs('span', {
                          className: 'sino-simple-form__subsection-label',
                          children: [
                            s(
                              'warehousingAdvancedTitle',
                              'Advanced warehousing preferences (optional)'
                            ),
                            t.jsx('small', {
                              children: s(
                                'warehousingAdvancedSubtitle',
                                'Extra services and special requirements.'
                              ),
                            }),
                          ],
                        }),
                        t.jsx('span', {
                          className: `sino-simple-form__subsection-chevron${f ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                          children: '▾',
                        }),
                      ],
                    }),
                    f &&
                      t.jsxs('div', {
                        className: 'sino-simple-form__fields sino-simple-form__fields--rows',
                        children: [
                          t.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              t.jsxs('label', {
                                className: 'sino-simple-form__label',
                                children: [
                                  s('warehousingExtraServices', 'Extra services'),
                                  t.jsx('span', {
                                    className: 'sino-simple-form__label-hint',
                                    children: s('ifAny', 'if any'),
                                  }),
                                ],
                              }),
                              t.jsx('div', {
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
                                ].map((h) => {
                                  const g = l.warehousing.extraServices.includes(h.value);
                                  return t.jsx(
                                    'button',
                                    {
                                      type: 'button',
                                      className: `sino-simple-chip${g ? ' sino-simple-chip--active' : ''}`,
                                      onClick: () =>
                                        u((F) => {
                                          const H = F.warehousing.extraServices,
                                            z = g
                                              ? H.filter((I) => I !== h.value)
                                              : [...H, h.value];
                                          return {
                                            ...F,
                                            warehousing: { ...F.warehousing, extraServices: z },
                                          };
                                        }),
                                      children: h.label,
                                    },
                                    h.value
                                  );
                                }),
                              }),
                            ],
                          }),
                          t.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              t.jsx('label', {
                                className: 'sino-simple-form__label',
                                htmlFor: 'warehousingNotes',
                                children: s('warehousingNotes', 'Anything else we should know?'),
                              }),
                              t.jsx('textarea', {
                                id: 'warehousingNotes',
                                className:
                                  'sino-simple-form__input sino-simple-form__input--textarea',
                                value: l.warehousing.notes,
                                onChange: (h) =>
                                  u((g) => ({
                                    ...g,
                                    warehousing: { ...g.warehousing, notes: h.target.value },
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
  Vm = ({
    formData: l,
    setFormData: u,
    t: s,
    showDropshippingAdvanced: f,
    setShowDropshippingAdvanced: b,
    stepLabel: S,
    isQuickQuote: k = !1,
  }) =>
    l.servicesRequested.dropshipping
      ? t.jsxs('section', {
          className: 'sino-simple-form__section sino-simple-form__section--service-dropshipping',
          children: [
            t.jsxs('h2', {
              className: 'sino-simple-form__section-title',
              children: [
                t.jsx('span', {
                  className: 'sino-simple-form__section-step',
                  children: S ?? 'Service',
                }),
                t.jsx('span', {
                  children: s('dropshippingTitle', 'Dropshipping & fulfillment from China'),
                }),
              ],
            }),
            t.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--rows',
              children: [
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'dropshippingProducts',
                      children: [
                        s('dropshippingProducts', 'What type of products do you plan to ship?'),
                        t.jsx('span', {
                          className: 'sino-simple-form__required',
                          'aria-label': 'required',
                          children: '*',
                        }),
                      ],
                    }),
                    t.jsx('textarea', {
                      id: 'dropshippingProducts',
                      className: 'sino-simple-form__input sino-simple-form__input--textarea',
                      value: l.dropshipping.products,
                      onChange: (h) =>
                        u((g) => ({
                          ...g,
                          dropshipping: { ...g.dropshipping, products: h.target.value },
                        })),
                      placeholder: s(
                        'dropshippingProductsPlaceholder',
                        'Main categories, product types, or existing catalog link.'
                      ),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'dropshippingModel',
                      children: s('dropshippingModel', 'What is your business model?'),
                    }),
                    t.jsx('input', {
                      id: 'dropshippingModel',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: l.dropshipping.model,
                      onChange: (h) =>
                        u((g) => ({
                          ...g,
                          dropshipping: { ...g.dropshipping, model: h.target.value },
                        })),
                      placeholder: s(
                        'dropshippingModelPlaceholder',
                        'Shopify store, Amazon FBA, marketplace, D2C…'
                      ),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'dropshippingCustomerCountries',
                      children: [
                        s(
                          'dropshippingCustomerCountries',
                          'Where are your final customers located?'
                        ),
                        t.jsx('span', {
                          className: 'sino-simple-form__required',
                          'aria-label': 'required',
                          children: '*',
                        }),
                      ],
                    }),
                    t.jsx('input', {
                      id: 'dropshippingCustomerCountries',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: l.dropshipping.customerCountries,
                      onChange: (h) =>
                        u((g) => ({
                          ...g,
                          dropshipping: { ...g.dropshipping, customerCountries: h.target.value },
                        })),
                      placeholder: s(
                        'dropshippingCustomerCountriesPlaceholder',
                        'Countries or regions (e.g. US, EU, UK).'
                      ),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'dropshippingDailyOrders',
                      children: s('dropshippingDailyOrders', 'Average or expected daily orders'),
                    }),
                    t.jsx('input', {
                      id: 'dropshippingDailyOrders',
                      className: 'sino-simple-form__input',
                      type: 'number',
                      min: 0,
                      value: l.dropshipping.dailyOrders ?? '',
                      onChange: (h) =>
                        u((g) => ({
                          ...g,
                          dropshipping: {
                            ...g.dropshipping,
                            dailyOrders: h.target.value ? Number(h.target.value) : null,
                          },
                        })),
                      placeholder: s('dropshippingDailyOrdersPlaceholder', 'e.g. 20'),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsx('label', {
                      className: 'sino-simple-form__label',
                      children: s(
                        'dropshippingHasCatalog',
                        'Do you already have a main product or catalog?'
                      ),
                    }),
                    t.jsx('div', {
                      className: 'sino-simple-form__chips',
                      children: [
                        { value: !0, label: s('dropshippingHasCatalogYes', 'Yes') },
                        { value: !1, label: s('dropshippingHasCatalogNo', 'No') },
                      ].map((h) =>
                        t.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.dropshipping.hasCatalog === h.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              u((g) => ({
                                ...g,
                                dropshipping: {
                                  ...g.dropshipping,
                                  hasCatalog:
                                    g.dropshipping.hasCatalog === h.value ? null : h.value,
                                },
                              })),
                            children: h.label,
                          },
                          String(h.value)
                        )
                      ),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: `sino-simple-form__subsection${f ? ' sino-simple-form__subsection--open' : ''}`,
                  children: [
                    t.jsxs('button', {
                      type: 'button',
                      className: 'sino-simple-form__subsection-toggle',
                      onClick: () => b((h) => !h),
                      children: [
                        t.jsxs('span', {
                          className: 'sino-simple-form__subsection-label',
                          children: [
                            s(
                              'dropshippingAdvancedTitle',
                              'Advanced dropshipping details (optional)'
                            ),
                            t.jsx('small', {
                              children: s(
                                'dropshippingAdvancedSubtitle',
                                'Branding needs and additional notes.'
                              ),
                            }),
                          ],
                        }),
                        t.jsx('span', {
                          className: `sino-simple-form__subsection-chevron${f ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                          children: '▾',
                        }),
                      ],
                    }),
                    f &&
                      t.jsxs('div', {
                        className: 'sino-simple-form__fields sino-simple-form__fields--rows',
                        children: [
                          t.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              t.jsx('label', {
                                className: 'sino-simple-form__label',
                                children: s(
                                  'dropshippingBrandingNeeded',
                                  'Do you need branded packaging or inserts?'
                                ),
                              }),
                              t.jsx('div', {
                                className: 'sino-simple-form__chips',
                                children: [
                                  { value: !0, label: s('dropshippingBrandingNeededYes', 'Yes') },
                                  { value: !1, label: s('dropshippingBrandingNeededNo', 'No') },
                                ].map((h) =>
                                  t.jsx(
                                    'button',
                                    {
                                      type: 'button',
                                      className: `sino-simple-chip${l.dropshipping.brandingNeeded === h.value ? ' sino-simple-chip--active' : ''}`,
                                      onClick: () =>
                                        u((g) => ({
                                          ...g,
                                          dropshipping: {
                                            ...g.dropshipping,
                                            brandingNeeded:
                                              g.dropshipping.brandingNeeded === h.value
                                                ? null
                                                : h.value,
                                          },
                                        })),
                                      children: h.label,
                                    },
                                    String(h.value)
                                  )
                                ),
                              }),
                            ],
                          }),
                          t.jsxs('div', {
                            className: 'sino-simple-form__field',
                            children: [
                              t.jsx('label', {
                                className: 'sino-simple-form__label',
                                htmlFor: 'dropshippingNotes',
                                children: s('dropshippingNotes', 'Anything else we should know?'),
                              }),
                              t.jsx('textarea', {
                                id: 'dropshippingNotes',
                                className:
                                  'sino-simple-form__input sino-simple-form__input--textarea',
                                value: l.dropshipping.notes,
                                onChange: (h) =>
                                  u((g) => ({
                                    ...g,
                                    dropshipping: { ...g.dropshipping, notes: h.target.value },
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
  Hm = ({
    formData: l,
    setFormData: u,
    t: s,
    showQcAdvanced: f,
    setShowQcAdvanced: b,
    stepLabel: S,
    isQuickQuote: k = !1,
  }) =>
    l.servicesRequested.qc
      ? t.jsxs('section', {
          className: 'sino-simple-form__section sino-simple-form__section--service-qc',
          children: [
            t.jsxs('h2', {
              className: 'sino-simple-form__section-title',
              children: [
                t.jsx('span', {
                  className: 'sino-simple-form__section-step',
                  children: S ?? 'Service',
                }),
                t.jsx('span', { children: s('qcTitle', 'Quality control & inspections') }),
              ],
            }),
            t.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--rows',
              children: [
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsxs('label', {
                      className: 'sino-simple-form__label',
                      children: [
                        s('qcType', 'What type of inspection do you need?'),
                        t.jsx('span', {
                          className: 'sino-simple-form__required',
                          'aria-label': 'required',
                          children: '*',
                        }),
                      ],
                    }),
                    t.jsx('div', {
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
                      ].map((h) =>
                        t.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.qc.type === h.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              u((g) => ({
                                ...g,
                                qc: { ...g.qc, type: g.qc.type === h.value ? '' : h.value },
                              })),
                            children: h.label,
                          },
                          h.value
                        )
                      ),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsx('label', {
                      className: 'sino-simple-form__label',
                      children: s('qcProductionStage', 'At which stage is your production?'),
                    }),
                    t.jsx('div', {
                      className: 'sino-simple-form__chips',
                      children: [
                        { value: 'not_started', label: s('qcStageNotStarted', 'Not started') },
                        { value: 'in_progress', label: s('qcStageInProgress', 'In progress') },
                        { value: 'finished', label: s('qcStageFinished', 'Finished') },
                      ].map((h) =>
                        t.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${l.qc.productionStage === h.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              u((g) => ({
                                ...g,
                                qc: {
                                  ...g.qc,
                                  productionStage: g.qc.productionStage === h.value ? '' : h.value,
                                },
                              })),
                            children: h.label,
                          },
                          h.value
                        )
                      ),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'qcFactoryCity',
                      children: [
                        s('qcFactoryCity', 'Factory location (city in China)'),
                        t.jsx('span', {
                          className: 'sino-simple-form__required',
                          'aria-label': 'required',
                          children: '*',
                        }),
                      ],
                    }),
                    t.jsx('input', {
                      id: 'qcFactoryCity',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: l.qc.factoryCity,
                      onChange: (h) =>
                        u((g) => ({ ...g, qc: { ...g.qc, factoryCity: h.target.value } })),
                      placeholder: s('qcFactoryCityPlaceholder', 'e.g. Shenzhen, Ningbo, Yiwu…'),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'qcPreferredDate',
                      children: [
                        s('qcPreferredDate', 'Preferred inspection date'),
                        t.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: s('ifKnown', 'if known'),
                        }),
                      ],
                    }),
                    t.jsx('input', {
                      id: 'qcPreferredDate',
                      className: 'sino-simple-form__input',
                      type: 'date',
                      value: l.qc.preferredDate,
                      onChange: (h) =>
                        u((g) => ({ ...g, qc: { ...g.qc, preferredDate: h.target.value } })),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: `sino-simple-form__subsection${f ? ' sino-simple-form__subsection--open' : ''}`,
                  children: [
                    t.jsxs('button', {
                      type: 'button',
                      className: 'sino-simple-form__subsection-toggle',
                      onClick: () => b((h) => !h),
                      children: [
                        t.jsxs('span', {
                          className: 'sino-simple-form__subsection-label',
                          children: [
                            s('qcAdvancedTitle', 'Additional inspection details (optional)'),
                            t.jsx('small', {
                              children: s(
                                'qcAdvancedSubtitle',
                                'Specific checkpoints, batch sizes or constraints.'
                              ),
                            }),
                          ],
                        }),
                        t.jsx('span', {
                          className: `sino-simple-form__subsection-chevron${f ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                          children: '▾',
                        }),
                      ],
                    }),
                    f &&
                      t.jsx('div', {
                        className: 'sino-simple-form__fields sino-simple-form__fields--rows',
                        children: t.jsxs('div', {
                          className: 'sino-simple-form__field',
                          children: [
                            t.jsx('label', {
                              className: 'sino-simple-form__label',
                              htmlFor: 'qcNotes',
                              children: s('qcNotes', 'Anything else we should know?'),
                            }),
                            t.jsx('textarea', {
                              id: 'qcNotes',
                              className:
                                'sino-simple-form__input sino-simple-form__input--textarea',
                              value: l.qc.notes,
                              onChange: (h) =>
                                u((g) => ({ ...g, qc: { ...g.qc, notes: h.target.value } })),
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
    showChinaVisitLogistics: f,
    setShowChinaVisitLogistics: b,
    stepLabel: S,
  }) => {
    if (!l.servicesRequested.chinaVisits) return null;
    const k = l.chinaVisit.visitType,
      h = (C) => {
        u((P) => {
          const ue = P.chinaVisit.visitType,
            de = ue.includes(C) ? ue.filter((re) => re !== C) : [...ue, C];
          return { ...P, chinaVisit: { ...P.chinaVisit, visitType: de } };
        });
      },
      g = k.includes('Canton Fair'),
      F = k.includes('Yiwu Market'),
      H = k.includes('Factory Visits'),
      z = k.includes('Other Trade Fair'),
      I = H || z,
      X = k.length > 0,
      G =
        g && !F && !H && !z
          ? 'Guangzhou'
          : F && !g && !H && !z
            ? 'Yiwu'
            : g && F && !H && !z
              ? 'Guangzhou, Yiwu'
              : '';
    return t.jsxs('section', {
      className: 'sino-simple-form__section sino-simple-form__section--service-chinaVisits',
      children: [
        t.jsxs('h2', {
          className: 'sino-simple-form__section-title',
          children: [
            t.jsx('span', {
              className: 'sino-simple-form__section-step',
              children: S ?? 'Service',
            }),
            t.jsx('span', { children: s('chinaVisitTitle', 'China visits & trade fairs') }),
          ],
        }),
        t.jsx('p', {
          className: 'sino-simple-form__hint',
          children: s(
            'chinaVisitHint',
            'Select all that apply. We can help you plan a multi-stop trip.'
          ),
        }),
        t.jsxs('div', {
          className: 'sino-simple-form__fields sino-simple-form__fields--rows',
          children: [
            t.jsxs('div', {
              className: 'sino-simple-form__field',
              children: [
                t.jsxs('label', {
                  className: 'sino-simple-form__label',
                  children: [
                    s('chinaVisitType', 'What would you like to visit?'),
                    t.jsx('span', {
                      className: 'sino-simple-form__required',
                      'aria-label': 'required',
                      children: '*',
                    }),
                  ],
                }),
                t.jsx('div', {
                  className: 'sino-simple-form__chips sino-simple-form__chips--wrap',
                  children: [
                    { value: 'Canton Fair', label: 'Canton Fair (Guangzhou)' },
                    { value: 'Yiwu Market', label: 'Yiwu Market' },
                    { value: 'Factory Visits', label: 'Factory Visits' },
                    { value: 'Other Trade Fair', label: 'Other Trade Fair' },
                  ].map((C) => {
                    const P = k.includes(C.value);
                    return t.jsx(
                      'button',
                      {
                        type: 'button',
                        className: `sino-simple-chip${P ? ' sino-simple-chip--active' : ''}`,
                        onClick: () => h(C.value),
                        'aria-pressed': P ? 'true' : 'false',
                        children: C.label,
                      },
                      C.value
                    );
                  }),
                }),
              ],
            }),
            g &&
              t.jsxs('div', {
                className: 'sino-simple-form__field',
                children: [
                  t.jsx('label', {
                    className: 'sino-simple-form__label',
                    children: s('chinaVisitCantonPhase', 'Which phase?'),
                  }),
                  t.jsx('div', {
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
                      t.jsx(
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
                  t.jsx('p', {
                    className: 'sino-simple-form__help',
                    children: s(
                      'cantonPhaseHelp',
                      'Held in April/May and October/November each year.'
                    ),
                  }),
                ],
              }),
            z &&
              t.jsxs('div', {
                className: 'sino-simple-form__field',
                children: [
                  t.jsxs('label', {
                    className: 'sino-simple-form__label',
                    htmlFor: 'chinaVisitFairName',
                    children: [
                      s('chinaVisitFairName', 'Which trade fair?'),
                      t.jsx('span', {
                        className: 'sino-simple-form__required',
                        'aria-label': 'required',
                        children: '*',
                      }),
                    ],
                  }),
                  t.jsx('input', {
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
            H &&
              t.jsxs('div', {
                className: 'sino-simple-form__field',
                children: [
                  t.jsx('label', {
                    className: 'sino-simple-form__label',
                    htmlFor: 'chinaVisitFactoryDescription',
                    children: s('chinaVisitFactoryDescription', 'What kind of factories?'),
                  }),
                  t.jsx('textarea', {
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
            I &&
              t.jsxs('div', {
                className: 'sino-simple-form__field',
                children: [
                  t.jsxs('label', {
                    className: 'sino-simple-form__label',
                    htmlFor: 'chinaVisitMainCity',
                    children: [
                      s('chinaVisitMainCity', 'Main city or region'),
                      t.jsx('span', {
                        className: 'sino-simple-form__required',
                        'aria-label': 'required',
                        children: '*',
                      }),
                    ],
                  }),
                  t.jsx('input', {
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
              !I &&
              t.jsx('div', {
                className: 'sino-simple-form__field',
                children: t.jsxs('p', {
                  className: 'sino-simple-form__info',
                  children: [
                    '📍 ',
                    s('autoDetectedCity', 'Your trip will be based in'),
                    ': ',
                    t.jsx('strong', { children: G }),
                  ],
                }),
              }),
            X &&
              t.jsxs('div', {
                className: 'sino-simple-form__field',
                children: [
                  t.jsxs('label', {
                    className: 'sino-simple-form__label',
                    htmlFor: 'chinaVisitOtherCities',
                    children: [
                      H && !g && !F
                        ? s('chinaVisitFactoryCities', 'Cities/regions to visit')
                        : s('chinaVisitOtherCities', 'Other cities to visit'),
                      ' ',
                      !(H && !g && !F) &&
                        t.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: s('ifApplicable', 'if applicable'),
                        }),
                    ],
                  }),
                  t.jsx('input', {
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
            t.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--inline',
              children: [
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'chinaVisitStartDate',
                      children: [
                        s('chinaVisitStartDate', 'Start date'),
                        t.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: s('ifKnown', 'if known'),
                        }),
                      ],
                    }),
                    t.jsx('input', {
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
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'chinaVisitEndDate',
                      children: [
                        s('chinaVisitEndDate', 'End date'),
                        t.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: s('ifKnown', 'if known'),
                        }),
                      ],
                    }),
                    t.jsx('input', {
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
            t.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--inline',
              children: [
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'chinaVisitNumberOfDays',
                      children: s('chinaVisitNumberOfDays', 'Days on site'),
                    }),
                    t.jsx('input', {
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
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsx('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'chinaVisitNumberOfTravelers',
                      children: s('chinaVisitNumberOfTravelers', 'Travelers'),
                    }),
                    t.jsx('input', {
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
            t.jsxs('div', {
              className: `sino-simple-form__subsection${f ? ' sino-simple-form__subsection--open' : ''}`,
              children: [
                t.jsxs('button', {
                  type: 'button',
                  className: 'sino-simple-form__subsection-toggle',
                  onClick: () => b((C) => !C),
                  'aria-expanded': f,
                  children: [
                    t.jsxs('span', {
                      className: 'sino-simple-form__subsection-label',
                      children: [
                        s('chinaVisitLogisticsTitle', 'Advanced trip logistics (optional)'),
                        t.jsx('small', {
                          children: s(
                            'chinaVisitLogisticsSubtitle',
                            'Local guide, transport arrangements, hotel booking.'
                          ),
                        }),
                      ],
                    }),
                    t.jsx('span', {
                      className: `sino-simple-form__subsection-chevron${f ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                      children: '▾',
                    }),
                  ],
                }),
                f &&
                  t.jsxs('div', {
                    className: 'sino-simple-form__fields sino-simple-form__fields--rows',
                    children: [
                      t.jsxs('div', {
                        className: 'sino-simple-form__field',
                        children: [
                          t.jsx('label', {
                            className: 'sino-simple-form__label',
                            children: s('chinaVisitNeedGuide', 'Local guide / interpreter?'),
                          }),
                          t.jsx('div', {
                            className: 'sino-simple-form__chips',
                            children: [!0, !1].map((C) =>
                              t.jsx(
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
                      t.jsxs('div', {
                        className: 'sino-simple-form__field',
                        children: [
                          t.jsx('label', {
                            className: 'sino-simple-form__label',
                            children: s('chinaVisitNeedTransport', 'Local transport?'),
                          }),
                          t.jsx('div', {
                            className: 'sino-simple-form__chips',
                            children: [!0, !1].map((C) =>
                              t.jsx(
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
                      t.jsxs('div', {
                        className: 'sino-simple-form__field',
                        children: [
                          t.jsx('label', {
                            className: 'sino-simple-form__label',
                            children: s('chinaVisitNeedHotels', 'Hotel booking help?'),
                          }),
                          t.jsx('div', {
                            className: 'sino-simple-form__chips',
                            children: [!0, !1].map((C) =>
                              t.jsx(
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
                      t.jsxs('div', {
                        className: 'sino-simple-form__field',
                        children: [
                          t.jsx('label', {
                            className: 'sino-simple-form__label',
                            htmlFor: 'chinaVisitNotes',
                            children: s('chinaVisitNotes', 'Anything else?'),
                          }),
                          t.jsx('textarea', {
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
  Km = ({ formData: l, setFormData: u, t: s, stepLabel: f }) => {
    var b, S, k;
    return t.jsx(t.Fragment, {
      children:
        l.servicesRequested.other &&
        t.jsxs('section', {
          className: 'sino-simple-form__section sino-simple-form__section--service-other',
          children: [
            t.jsxs('h2', {
              className: 'sino-simple-form__section-title',
              children: [
                t.jsx('span', {
                  className: 'sino-simple-form__section-step',
                  children: f ?? 'Step',
                }),
                t.jsx('span', { children: s('simpleOtherTitle', 'Tell us about your project') }),
              ],
            }),
            t.jsx('p', {
              className: 'sino-simple-form__hint',
              children: s(
                'simpleOtherHint',
                "Describe your project in detail and we'll route it to the right specialist."
              ),
            }),
            t.jsxs('div', {
              className: 'sino-simple-form__fields sino-simple-form__fields--rows',
              children: [
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsx('label', {
                      className: 'sino-simple-form__label',
                      children: s('otherProjectType', 'What type of project is this?'),
                    }),
                    t.jsx('div', {
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
                      ].map((h) => {
                        var g, F, H;
                        return t.jsx(
                          'button',
                          {
                            type: 'button',
                            className: `sino-simple-chip${((g = l.otherProject) == null ? void 0 : g.projectType) === h.value ? ' sino-simple-chip--active' : ''}`,
                            onClick: () =>
                              u((z) => {
                                var I;
                                return {
                                  ...z,
                                  otherProject: {
                                    ...z.otherProject,
                                    projectType:
                                      ((I = z.otherProject) == null ? void 0 : I.projectType) ===
                                      h.value
                                        ? ''
                                        : h.value,
                                  },
                                };
                              }),
                            'aria-pressed':
                              ((F = l.otherProject) == null ? void 0 : F.projectType) === h.value
                                ? 'true'
                                : 'false',
                            'aria-label': `${h.label}${((H = l.otherProject) == null ? void 0 : H.projectType) === h.value ? ', selected' : ', not selected'}`,
                            onKeyDown: (z) => {
                              (z.key === 'Enter' || z.key === ' ') &&
                                (z.preventDefault(),
                                u((I) => {
                                  var X;
                                  return {
                                    ...I,
                                    otherProject: {
                                      ...I.otherProject,
                                      projectType:
                                        ((X = I.otherProject) == null ? void 0 : X.projectType) ===
                                        h.value
                                          ? ''
                                          : h.value,
                                    },
                                  };
                                }));
                            },
                            children: h.label,
                          },
                          h.value
                        );
                      }),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'otherProjectDescription',
                      children: [
                        s('otherProjectDescription', 'Describe your project'),
                        t.jsx('span', {
                          className: 'sino-simple-form__required',
                          'aria-label': 'required',
                          children: '*',
                        }),
                      ],
                    }),
                    t.jsx('textarea', {
                      id: 'otherProjectDescription',
                      className: 'sino-simple-form__input sino-simple-form__input--textarea',
                      rows: 5,
                      value: ((b = l.otherProject) == null ? void 0 : b.description) || '',
                      onChange: (h) =>
                        u((g) => ({
                          ...g,
                          otherProject: { ...g.otherProject, description: h.target.value },
                        })),
                      placeholder: s(
                        'otherProjectDescriptionPlaceholder',
                        'Tell us what you need help with: your goals, context, timeline, challenges…'
                      ),
                    }),
                    t.jsx('p', {
                      className: 'sino-simple-form__help',
                      children: s(
                        'otherProjectDescriptionHelp',
                        'The more detail you provide, the better we can assist you.'
                      ),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'otherProjectBudget',
                      children: [
                        s('otherProjectBudget', 'Estimated budget'),
                        t.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: s('ifKnown', 'if known'),
                        }),
                      ],
                    }),
                    t.jsx('input', {
                      id: 'otherProjectBudget',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: ((S = l.otherProject) == null ? void 0 : S.budget) || '',
                      onChange: (h) =>
                        u((g) => ({
                          ...g,
                          otherProject: { ...g.otherProject, budget: h.target.value },
                        })),
                      placeholder: s('otherProjectBudgetPlaceholder', 'e.g. $5,000 - $10,000'),
                    }),
                  ],
                }),
                t.jsxs('div', {
                  className: 'sino-simple-form__field',
                  children: [
                    t.jsxs('label', {
                      className: 'sino-simple-form__label',
                      htmlFor: 'otherProjectTimeline',
                      children: [
                        s('otherProjectTimeline', 'Expected timeline'),
                        t.jsx('span', {
                          className: 'sino-simple-form__label-hint',
                          children: s('ifKnown', 'if known'),
                        }),
                      ],
                    }),
                    t.jsx('input', {
                      id: 'otherProjectTimeline',
                      className: 'sino-simple-form__input',
                      type: 'text',
                      value: ((k = l.otherProject) == null ? void 0 : k.timeline) || '',
                      onChange: (h) =>
                        u((g) => ({
                          ...g,
                          otherProject: { ...g.otherProject, timeline: h.target.value },
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
  Qm = ({ submissionId: l, t: u, onStartNew: s, selectedServiceLabels: f, formData: b }) => {
    const [S, k] = W.useState(!1),
      [h, g] = W.useState(new Date());
    (W.useEffect(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const z = document.createElement('div');
      ((z.className = 'sino-simple-form__confetti-container'), document.body.appendChild(z));
      const I = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'],
        X = 50;
      for (let C = 0; C < X; C++) {
        const P = document.createElement('div');
        ((P.className = 'sino-simple-form__confetti'),
          (P.style.left = `${Math.random() * 100}%`),
          (P.style.backgroundColor = I[Math.floor(Math.random() * I.length)]),
          (P.style.animationDelay = `${Math.random() * 2}s`),
          (P.style.animationDuration = `${2 + Math.random() * 2}s`),
          z.appendChild(P));
      }
      const G = setTimeout(() => {
        z.remove();
      }, 4e3);
      return () => {
        (clearTimeout(G), z.parentNode && z.remove());
      };
    }, []),
      W.useEffect(() => {
        const z = setInterval(() => {
          g(new Date());
        }, 6e4);
        return () => clearInterval(z);
      }, []));
    const F = W.useMemo(() => {
        const z = h,
          I = z.getDay(),
          X = z.getHours(),
          G = I >= 1 && I <= 5,
          C = X >= 9 && X < 18;
        let P = 0,
          ue = 0;
        if (G && C) {
          const de = new Date(z.getTime() + 864e5).getTime() - z.getTime();
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
      }, [h]),
      H = async () => {
        try {
          (await navigator.clipboard.writeText(l), k(!0), setTimeout(() => k(!1), 2e3));
        } catch (z) {
          console.error('Failed to copy:', z);
        }
      };
    return t.jsx('section', {
      className: 'sino-simple-form__section sino-simple-form__section--confirmation',
      children: t.jsxs('div', {
        className: 'sino-simple-form__confirmation',
        children: [
          t.jsxs('div', {
            className: 'sino-simple-form__confirmation-icon',
            children: [
              t.jsxs('svg', {
                width: '64',
                height: '64',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: [
                  t.jsx('circle', {
                    cx: '12',
                    cy: '12',
                    r: '10',
                    stroke: '#22c55e',
                    strokeWidth: '2',
                    fill: 'none',
                    className: 'sino-simple-form__confirmation-circle',
                  }),
                  t.jsx('path', {
                    d: 'M8 12l2 2 4-4',
                    stroke: '#22c55e',
                    strokeWidth: '2',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    className: 'sino-simple-form__confirmation-check',
                  }),
                ],
              }),
              t.jsx('div', { className: 'sino-simple-form__confirmation-ripple' }),
            ],
          }),
          t.jsx('h1', {
            className: 'sino-simple-form__confirmation-title',
            children: u('simpleConfirmationTitle', 'Request received!'),
          }),
          t.jsx('p', {
            className: 'sino-simple-form__confirmation-subtitle',
            children: u(
              'simpleConfirmationSubtitle',
              'A SINO expert (not a bot) will email you a first quote within 24h (Mon–Fri).'
            ),
          }),
          t.jsxs('div', {
            className: 'sino-simple-form__confirmation-info-block',
            children: [
              b.email &&
                t.jsxs('div', {
                  className: 'sino-simple-form__confirmation-email',
                  children: [
                    t.jsx('div', {
                      className: 'sino-simple-form__confirmation-email-icon',
                      children: t.jsxs('svg', {
                        width: '24',
                        height: '24',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: [
                          t.jsx('path', {
                            d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                          t.jsx('polyline', {
                            points: '22,6 12,13 2,6',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          }),
                        ],
                      }),
                    }),
                    t.jsxs('div', {
                      className: 'sino-simple-form__confirmation-email-content',
                      children: [
                        t.jsx('strong', {
                          children: u('confirmationEmailTitle', 'Check your inbox'),
                        }),
                        t.jsxs('span', {
                          children: [
                            u('confirmationEmailText', 'Confirmation email sent to'),
                            ' ',
                            t.jsx('strong', { children: b.email }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              t.jsxs('div', {
                className: `sino-simple-form__confirmation-response-time ${F.status === 'active' ? 'sino-simple-form__confirmation-response-time--active' : ''}`,
                children: [
                  t.jsx('div', {
                    className: 'sino-simple-form__confirmation-response-time-icon',
                    children: t.jsxs('svg', {
                      width: '20',
                      height: '20',
                      viewBox: '0 0 24 24',
                      fill: 'none',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: [
                        t.jsx('circle', {
                          cx: '12',
                          cy: '12',
                          r: '10',
                          stroke: 'currentColor',
                          strokeWidth: '2',
                        }),
                        t.jsx('polyline', {
                          points: '12 6 12 12 16 14',
                          stroke: 'currentColor',
                          strokeWidth: '2',
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                        }),
                      ],
                    }),
                  }),
                  t.jsxs('div', {
                    className: 'sino-simple-form__confirmation-response-time-content',
                    children: [
                      t.jsx('strong', {
                        children: u('confirmationResponseTime', 'Response time: 24h (Mon–Fri)'),
                      }),
                      F.status === 'waiting' &&
                        t.jsx('span', {
                          className: 'sino-simple-form__confirmation-response-time-status',
                          children: F.isBusinessDay
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
          t.jsxs('div', {
            className: 'sino-simple-form__confirmation-badges',
            children: [
              t.jsx('div', {
                className: 'sino-simple-form__confirmation-badge',
                children: t.jsxs('div', {
                  className: 'sino-simple-form__confirmation-badge-content',
                  children: [
                    t.jsx('strong', {
                      className: 'sino-simple-form__confirmation-badge-value',
                      children: '55,000+',
                    }),
                    t.jsxs('span', {
                      className: 'sino-simple-form__confirmation-badge-label',
                      children: [
                        u('confirmationBadgeClients', 'Satisfied Customers'),
                        t.jsx('small', {
                          className: 'sino-simple-form__confirmation-badge-sublabel',
                          children: 'since 1989',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              t.jsx('div', {
                className: 'sino-simple-form__confirmation-badge',
                children: t.jsxs('div', {
                  className: 'sino-simple-form__confirmation-badge-content',
                  children: [
                    t.jsx('strong', {
                      className: 'sino-simple-form__confirmation-badge-value',
                      children: '400+',
                    }),
                    t.jsxs('span', {
                      className: 'sino-simple-form__confirmation-badge-label',
                      children: [
                        u('confirmationBadgeTeam', 'Professional Team Members'),
                        t.jsx('small', {
                          className: 'sino-simple-form__confirmation-badge-sublabel',
                          children: 'In China',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              t.jsx('div', {
                className: 'sino-simple-form__confirmation-badge',
                children: t.jsxs('div', {
                  className: 'sino-simple-form__confirmation-badge-content',
                  children: [
                    t.jsx('strong', {
                      className: 'sino-simple-form__confirmation-badge-value',
                      children: '8',
                    }),
                    t.jsxs('span', {
                      className: 'sino-simple-form__confirmation-badge-label',
                      children: [
                        u('confirmationBadgeOffices', 'Wholly Owned Offices'),
                        t.jsx('small', {
                          className: 'sino-simple-form__confirmation-badge-sublabel',
                          children: 'In China',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              t.jsx('div', {
                className: 'sino-simple-form__confirmation-badge',
                children: t.jsxs('div', {
                  className: 'sino-simple-form__confirmation-badge-content',
                  children: [
                    t.jsx('strong', {
                      className: 'sino-simple-form__confirmation-badge-value',
                      children: '519,000+',
                    }),
                    t.jsxs('span', {
                      className: 'sino-simple-form__confirmation-badge-label',
                      children: [
                        u('confirmationBadgeCFS', 'CFS Facility Nationwide'),
                        t.jsx('small', {
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
          t.jsxs('div', {
            className: 'sino-simple-form__confirmation-details-card',
            children: [
              (f.length > 0 || b.country) &&
                t.jsxs('div', {
                  className: 'sino-simple-form__confirmation-summary',
                  children: [
                    t.jsx('h3', {
                      className: 'sino-simple-form__confirmation-summary-title',
                      children: u('confirmationSummaryTitle', 'Your request summary'),
                    }),
                    t.jsxs('div', {
                      className: 'sino-simple-form__confirmation-summary-content',
                      children: [
                        f.length > 0 &&
                          t.jsxs('div', {
                            className: 'sino-simple-form__confirmation-summary-item',
                            children: [
                              t.jsx('strong', {
                                children: u('confirmationSummaryServices', 'Services:'),
                              }),
                              t.jsx('span', { children: f.join(', ') }),
                            ],
                          }),
                        b.country &&
                          t.jsxs('div', {
                            className: 'sino-simple-form__confirmation-summary-item',
                            children: [
                              t.jsx('strong', {
                                children: u('confirmationSummaryDestination', 'Destination:'),
                              }),
                              t.jsxs('span', {
                                children: [
                                  (() => {
                                    const z = Kr.find((I) => I.code === b.country);
                                    return z ? z.name : b.country;
                                  })(),
                                  b.destCity && `, ${b.destCity}`,
                                ],
                              }),
                            ],
                          }),
                        b.mode &&
                          b.mode !== 'not_sure' &&
                          t.jsxs('div', {
                            className: 'sino-simple-form__confirmation-summary-item',
                            children: [
                              t.jsx('strong', { children: u('confirmationSummaryMode', 'Mode:') }),
                              t.jsx('span', { children: b.mode }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              t.jsxs('div', {
                className: 'sino-simple-form__confirmation-details',
                children: [
                  t.jsxs('div', {
                    className: 'sino-simple-form__confirmation-id-container',
                    children: [
                      t.jsxs('p', {
                        className: 'sino-simple-form__confirmation-id',
                        children: [
                          t.jsx('strong', {
                            children: u('simpleConfirmationIdLabel', 'Reference:'),
                          }),
                          t.jsx('code', {
                            className: 'sino-simple-form__confirmation-id-code',
                            children: l,
                          }),
                        ],
                      }),
                      t.jsx('button', {
                        type: 'button',
                        className: `sino-simple-form__confirmation-copy ${S ? 'sino-simple-form__confirmation-copy--copied' : ''}`,
                        onClick: H,
                        title: S
                          ? u('confirmationCopied', 'Copied!')
                          : u('confirmationCopy', 'Copy reference'),
                        children: S
                          ? t.jsxs(t.Fragment, {
                              children: [
                                t.jsx('svg', {
                                  width: '16',
                                  height: '16',
                                  viewBox: '0 0 24 24',
                                  fill: 'none',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  children: t.jsx('path', {
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
                          : t.jsxs(t.Fragment, {
                              children: [
                                t.jsxs('svg', {
                                  width: '16',
                                  height: '16',
                                  viewBox: '0 0 24 24',
                                  fill: 'none',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  children: [
                                    t.jsx('rect', {
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
                                    t.jsx('path', {
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
                  t.jsx('p', {
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
          t.jsxs('div', {
            className: 'sino-simple-form__confirmation-timeline',
            children: [
              t.jsxs('div', {
                className: 'sino-simple-form__confirmation-timeline-item',
                children: [
                  t.jsx('div', {
                    className: 'sino-simple-form__confirmation-timeline-icon',
                    children: '1',
                  }),
                  t.jsxs('div', {
                    className: 'sino-simple-form__confirmation-timeline-content',
                    children: [
                      t.jsx('strong', {
                        children: u('confirmationStep1Title', 'Email confirmation'),
                      }),
                      t.jsx('span', {
                        children: u(
                          'confirmationStep1Desc',
                          "You'll receive a confirmation email within minutes"
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              t.jsxs('div', {
                className: 'sino-simple-form__confirmation-timeline-item',
                children: [
                  t.jsx('div', {
                    className: 'sino-simple-form__confirmation-timeline-icon',
                    children: '2',
                  }),
                  t.jsxs('div', {
                    className: 'sino-simple-form__confirmation-timeline-content',
                    children: [
                      t.jsx('strong', { children: u('confirmationStep2Title', 'Expert review') }),
                      t.jsx('span', {
                        children: u('confirmationStep2Desc', 'A SINO expert reviews your request'),
                      }),
                    ],
                  }),
                ],
              }),
              t.jsxs('div', {
                className: 'sino-simple-form__confirmation-timeline-item',
                children: [
                  t.jsx('div', {
                    className: 'sino-simple-form__confirmation-timeline-icon',
                    children: '3',
                  }),
                  t.jsxs('div', {
                    className: 'sino-simple-form__confirmation-timeline-content',
                    children: [
                      t.jsx('strong', { children: u('confirmationStep3Title', 'Your quote') }),
                      t.jsx('span', {
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
          t.jsx('div', {
            className: 'sino-simple-form__confirmation-actions',
            children: t.jsx('button', {
              type: 'button',
              className: 'sino-simple-form__cta-button sino-simple-form__cta-button--primary',
              onClick: s,
              children: u('simpleConfirmationNewRequest', 'Start a new request'),
            }),
          }),
          t.jsxs('div', {
            className: 'sino-simple-form__confirmation-secondary-section',
            children: [
              t.jsxs('div', {
                className: 'sino-simple-form__confirmation-secondary-actions',
                children: [
                  t.jsx('a', {
                    href: 'https://www.sino-shipping.com/international-shipping-knowledge-base/',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'sino-simple-form__confirmation-link',
                    children: u('confirmationBrowseGuides', 'Browse our guides'),
                  }),
                  t.jsx('a', {
                    href: 'mailto:info@sino-shipping.com',
                    className: 'sino-simple-form__confirmation-link',
                    children: u('confirmationContactSupport', 'Contact support'),
                  }),
                ],
              }),
              t.jsxs('div', {
                className: 'sino-simple-form__confirmation-social',
                children: [
                  t.jsx('p', {
                    className: 'sino-simple-form__confirmation-social-title',
                    children: u('confirmationSocialTitle', 'Check our social networks'),
                  }),
                  t.jsxs('div', {
                    className: 'sino-simple-form__confirmation-social-links',
                    children: [
                      t.jsx('a', {
                        href: 'https://hk.linkedin.com/company/sino-shipping-official',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'sino-simple-form__confirmation-social-link',
                        'aria-label': 'LinkedIn',
                        children: t.jsx('svg', {
                          width: '20',
                          height: '20',
                          viewBox: '0 0 24 24',
                          fill: 'currentColor',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: t.jsx('path', {
                            d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
                          }),
                        }),
                      }),
                      t.jsx('a', {
                        href: 'https://www.youtube.com/@SINO-Shipping',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'sino-simple-form__confirmation-social-link',
                        'aria-label': 'YouTube',
                        children: t.jsx('svg', {
                          width: '20',
                          height: '20',
                          viewBox: '0 0 24 24',
                          fill: 'currentColor',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: t.jsx('path', {
                            d: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
                          }),
                        }),
                      }),
                      t.jsx('a', {
                        href: 'https://www.instagram.com/sino.shipping/?hl=en',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'sino-simple-form__confirmation-social-link',
                        'aria-label': 'Instagram',
                        children: t.jsx('svg', {
                          width: '20',
                          height: '20',
                          viewBox: '0 0 24 24',
                          fill: 'currentColor',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: t.jsx('path', {
                            d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                          }),
                        }),
                      }),
                      t.jsx('a', {
                        href: 'https://www.tiktok.com/@sinoshipping',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'sino-simple-form__confirmation-social-link',
                        'aria-label': 'TikTok',
                        children: t.jsx('svg', {
                          width: '20',
                          height: '20',
                          viewBox: '0 0 24 24',
                          fill: 'currentColor',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: t.jsx('path', {
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
          t.jsx('div', {
            className: 'sino-simple-form__confirmation-trust',
            children: t.jsx('p', {
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
  Jc = 'sinoSimpleFormSessionId';
function Qo() {
  return `session-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
}
function Zm() {
  if (typeof window > 'u') return Qo();
  try {
    const l = window.localStorage.getItem(Jc);
    if (l) return l;
    const u = Qo();
    return (window.localStorage.setItem(Jc, u), u);
  } catch {
    return Qo();
  }
}
function Xm(l, u) {
  if (!(typeof window > 'u'))
    try {
      const s = `${su}-${l}`,
        f = { sessionId: l, formData: u, savedAt: new Date().toISOString() };
      window.localStorage.setItem(s, JSON.stringify(f));
    } catch (s) {
      console.warn('[saveFormDraft] Failed to save draft:', s);
    }
}
function Jm(l) {
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
  nr = null,
  Hr = null;
function Ym(l) {
  ((Pe = {
    sessionId: l,
    startTime: Date.now(),
    currentStep: 'services',
    stepsCompleted: [],
    totalTime: 0,
    completionRate: 0,
    problematicFields: {},
  }),
    (nr = Date.now()),
    (Hr = 'services'),
    mi('form_started', { session_id: l }));
}
function Yc(l, u, s, f) {
  if (Pe) {
    if (nr && Hr) {
      const b = Math.round((Date.now() - nr) / 1e3);
      (mi('step_completed', { step_id: l, step_index: s - 1, time_spent: b, total_steps: f }),
        Pe.stepsCompleted.push(l),
        (Pe.totalTime += b));
    }
    ((nr = Date.now()),
      (Hr = u),
      (Pe.currentStep = u),
      mi('step_changed', { from_step: l, to_step: u, step_index: s, total_steps: f }));
  }
}
function eu(l, u) {
  Pe &&
    ((Pe.problematicFields[l] = (Pe.problematicFields[l] || 0) + 1),
    mi('field_error', { field_name: l, error_message: u, error_count: Pe.problematicFields[l] }));
}
function ep(l, u) {
  mi('field_completed', { field_name: l, step_id: u });
}
function np(l, u) {
  if (!Pe) return;
  const s = Math.round((Date.now() - Pe.startTime) / 1e3),
    f = ['services', 'shippingRoute', 'shippingCargo', 'contact'],
    b = (Pe.stepsCompleted.length / f.length) * 100;
  mi('form_submitted', {
    submission_id: l,
    session_id: Pe.sessionId,
    total_time: s,
    completion_rate: b,
    steps_completed: Pe.stepsCompleted.length,
    problematic_fields: Object.keys(Pe.problematicFields),
    error_count: Object.values(Pe.problematicFields).reduce((k, h) => k + h, 0),
  });
  const S = Object.entries(Pe.problematicFields)
    .sort(([, k], [, h]) => h - k)
    .slice(0, 5);
  S.length > 0 &&
    mi('form_problematic_fields', {
      submission_id: l,
      fields: S.map(([k]) => k),
      error_counts: S.map(([, k]) => k),
    });
}
function ip() {
  if (!Pe || !Hr) return;
  const l = nr ? Math.round((Date.now() - nr) / 1e3) : 0,
    u = Math.round((Date.now() - Pe.startTime) / 1e3);
  mi('form_abandoned', {
    session_id: Pe.sessionId,
    abandoned_at_step: Hr,
    step_index: Pe.stepsCompleted.length,
    time_on_current_step: l,
    total_time: u,
    steps_completed: Pe.stepsCompleted.length,
    problematic_fields: Object.keys(Pe.problematicFields),
  });
}
function mi(l, u) {
  typeof window > 'u' ||
    (typeof window.gtag == 'function' &&
      window.gtag('event', l, { event_category: 'Simple Quote Form', ...u }),
    typeof window.plausible == 'function' && window.plausible(l, { props: u }));
}
const rp = () => {
    var l, u;
    const { formData: s, setFormData: f, handleInputChange: b } = hm(),
      [S, k] = W.useState(!1),
      [h, g] = W.useState(!1),
      [F, H] = W.useState(!1),
      [z, I] = W.useState(!0),
      [X, G] = W.useState(!0),
      [C, P] = W.useState(!0),
      [ue, de] = W.useState(!0),
      [re, ae] = W.useState(!0),
      [ge, fe] = W.useState(!0),
      [Re, De] = W.useState(!0),
      [Ge, Be] = W.useState(!1),
      [un, ze] = W.useState(null),
      [Ne, en] = W.useState(!1),
      [ie, ve] = W.useState(0),
      [me, A] = W.useState(null),
      [D, O] = W.useState({}),
      [m, N] = W.useState({}),
      [K, Y] = W.useState(!1),
      [ee, oe] = W.useState(null),
      [he, le] = W.useState(!1),
      [_e, Ke] = W.useState(''),
      [Si, ir] = W.useState(''),
      [Ci, Vn] = W.useState(!1),
      Qr = W.useMemo(() => zm(), []),
      Zr = W.useMemo(() => Im(s.country), [s.country]),
      Pi = W.useRef(null),
      rr = W.useRef(null),
      Ti = W.useRef(null),
      Hn = W.useRef(null),
      zn = W.useRef(null),
      Ei = W.useRef(null),
      Li = W.useCallback(() => {
        const y = [Hn.current, zn.current, Ei.current, Pi.current, rr.current, Ti.current].find(
          (L) => L !== null
        );
        y && (y.scrollIntoView({ block: 'center', behavior: 'smooth' }), y.focus());
      }, []),
      Ue = W.useCallback((y) => typeof y == 'string' && y.trim().length > 0, []),
      j = W.useCallback((y, L) => L, []),
      Qe = W.useCallback(
        (y) => {
          b(y);
          const L = y.target.name;
          (D[L] &&
            !m[L] &&
            O((J) => {
              const be = { ...J };
              return (delete be[L], be);
            }),
            L === 'country' ? Ke(y.target.value) : L === 'destCity' && ir(y.target.value));
        },
        [b, D, m]
      ),
      Mi =
        ((l = s.servicesRequested) == null ? void 0 : l.shipping) === void 0
          ? !0
          : s.servicesRequested.shipping,
      qe = W.useMemo(() => {
        const y = ['services'],
          L = s.servicesRequested || {};
        return (
          L.sourcing && y.push('sourcing'),
          L.warehousing && y.push('warehousing'),
          L.dropshipping && y.push('dropshipping'),
          L.qc && y.push('qc'),
          L.chinaVisits && y.push('chinaVisit'),
          Mi && (y.push('shippingRoute'), y.push('shippingCargo')),
          L.other && y.push('other'),
          y.push('contact'),
          y
        );
      }, [s.servicesRequested, Mi]),
      Ee = W.useMemo(() => qe.length, [qe]),
      ye = qe[ie] || 'services',
      Tn = W.useCallback(
        (y, L) => {
          if (!L || (typeof L == 'string' && L.trim().length === 0)) {
            N((be) => ({ ...be, [y]: !0 }));
            return;
          }
          N((be) => ({ ...be, [y]: !0 }));
          let J = { valid: !0 };
          switch (y) {
            case 'email':
              J = ru(L);
              break;
            case 'phone':
              J = tu(L);
              break;
            case 'firstName':
              J = au(L, 'First name');
              break;
            case 'country':
              J = Xo(L);
              break;
            case 'destCity':
              J = Jo(L);
              break;
            case 'totalWeight':
              J = ou(L);
              break;
          }
          !J.valid && J.error
            ? (O((be) => ({ ...be, [y]: J.error })), eu(y, J.error))
            : (O((be) => {
                const En = { ...be };
                return (delete En[y], En);
              }),
              L && typeof L == 'string' && L.trim().length > 0 && ep(y, ye));
        },
        [ye]
      ),
      Xr = W.useMemo(
        () =>
          ['shipping', 'sourcing', 'dropshipping', 'warehousing', 'qc', 'chinaVisits', 'other']
            .filter((y) => {
              var L;
              return (L = s.servicesRequested) == null ? void 0 : L[y];
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
      tr =
        ((u = s.servicesRequested) == null ? void 0 : u.shipping) === void 0
          ? !0
          : s.servicesRequested.shipping,
      Jr = ie === Ee - 1,
      ca = ie === 0,
      ar = W.useCallback(() => {
        if (!Sm(ye, s)) {
          const y = es(ye, s);
          (O((L) => {
            const J = { ...L };
            return (
              Object.entries(y).forEach(([be, En]) => {
                !En.valid && En.error ? ((J[be] = En.error), eu(be, En.error)) : delete J[be];
              }),
              J
            );
          }),
            N((L) => {
              const J = { ...L };
              return (
                Object.keys(y).forEach((be) => {
                  J[be] = !0;
                }),
                J
              );
            }),
            setTimeout(() => {
              Li();
            }, 100));
          return;
        }
        if (ie < Ee - 1) {
          const y = ie + 1,
            L = qe[y];
          (Yc(ye, L, y, Ee),
            Vn(!0),
            setTimeout(() => {
              (ve(y),
                typeof window < 'u' && window.scrollTo({ top: 0, behavior: 'smooth' }),
                setTimeout(() => Vn(!1), 50));
            }, 150));
        }
      }, [ye, s, ie, Ee, Li, qe]),
      or = W.useCallback(() => {
        if (ie > 0) {
          const y = ie - 1,
            L = qe[y];
          (Yc(ye, L, y, Ee),
            Vn(!0),
            setTimeout(() => {
              (ve(y),
                typeof window < 'u' && window.scrollTo({ top: 0, behavior: 'smooth' }),
                setTimeout(() => Vn(!1), 50));
            }, 150));
        }
      }, [ie, ye, qe, Ee]);
    (W.useEffect(() => {
      if (ie >= Ee && Ee > 0) {
        ve(Ee - 1);
        return;
      }
      const y = qe[ie];
      if (!y || y !== ye) {
        const L = qe.indexOf(ye);
        L >= 0 ? ve(L) : ie >= Ee && Ee > 0 ? ve(Ee - 1) : ie > 0 && ve(0);
      }
    }, [Ee, qe, ye, ie]),
      W.useEffect(() => {
        K
          ? (I(!1), G(!1), P(!1), de(!1), ae(!1), fe(!1), De(!1))
          : (I(!0), G(!0), P(!0), de(!0), ae(!0), fe(!0), De(!0));
      }, [K]),
      W.useEffect(() => {
        if (typeof window > 'u') return;
        const y = Zm();
        (oe(y), Ym(y));
        try {
          const L = Jm(y);
          L && f((J) => ({ ...J, ...L }));
        } catch {}
      }, []),
      W.useEffect(() => {
        if (typeof window > 'u' || me) return;
        const y = () => {
          ip();
        };
        return (
          window.addEventListener('beforeunload', y),
          () => {
            window.removeEventListener('beforeunload', y);
          }
        );
      }, [me]),
      W.useEffect(() => {
        if (typeof window > 'u' || !ee) return;
        const y = setTimeout(() => {
          try {
            const L = {
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
            Xm(ee, L);
          } catch {}
        }, 2e3);
        return () => clearTimeout(y);
      }, [s, ee]),
      W.useEffect(() => {
        if (typeof window > 'u' || !ee) return;
        const y = setTimeout(() => {
          (le(!0),
            setTimeout(() => {
              le(!1);
            }, 2e3));
        }, 5e3);
        return () => clearTimeout(y);
      }, [s, ee]));
    const hn = W.useCallback(
        (y, L) => {
          f((J) => ({ ...J, [y]: L }));
        },
        [f]
      ),
      sr = W.useCallback(
        (y) => {
          if ((A(y), np(y), typeof window < 'u' && ee))
            try {
              const L = `sinoSimpleFormDraft-${ee}`;
              (window.localStorage.removeItem(L),
                window.localStorage.removeItem('sinoSimpleFormSessionId'));
            } catch {}
        },
        [ee]
      ),
      lr = W.useCallback(() => {
        (A(null), ve(0), ze(null));
      }, []);
    return me
      ? t.jsx('div', {
          className: 'sino-simple-form',
          children: t.jsx(Qm, {
            submissionId: me,
            t: j,
            onStartNew: lr,
            selectedServiceLabels: Xr,
            formData: s,
          }),
        })
      : t.jsx('div', {
          className: 'sino-simple-form',
          children: t.jsxs('main', {
            role: 'main',
            'aria-label': j('formAriaLabel', 'Quote request form'),
            children: [
              he &&
                t.jsxs('div', {
                  className: 'sino-simple-form__save-notification',
                  role: 'status',
                  'aria-live': 'polite',
                  children: [
                    t.jsx('span', {
                      className: 'sino-simple-form__save-notification-icon',
                      'aria-hidden': 'true',
                      children: t.jsx('svg', {
                        width: '16',
                        height: '16',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: t.jsx('path', {
                          d: 'M20 6L9 17l-5-5',
                          stroke: 'currentColor',
                          strokeWidth: '2',
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                        }),
                      }),
                    }),
                    t.jsx('span', {
                      className: 'sino-simple-form__save-notification-text',
                      children: j('saveNotification', 'Your progress is saved'),
                    }),
                  ],
                }),
              !me && t.jsx(Bm, { t: j }),
              t.jsxs('div', {
                className: `sino-simple-form__step-content${Ci ? ' sino-simple-form__step-content--transitioning' : ''}`,
                children: [
                  ye === 'services' &&
                    t.jsx(gm, {
                      formData: s,
                      setFormData: f,
                      t: j,
                      stepLabel: `Step ${ie + 1}`,
                      shippingOnly: !1,
                      isQuickQuote: K,
                      setIsQuickQuote: Y,
                    }),
                  ye === 'sourcing' &&
                    t.jsx(Um, {
                      formData: s,
                      setFormData: f,
                      t: j,
                      stepLabel: `Step ${ie + 1}`,
                      showSourcingAdvanced: ue,
                      setShowSourcingAdvanced: de,
                      isQuickQuote: K,
                    }),
                  ye === 'warehousing' &&
                    t.jsx(qm, {
                      formData: s,
                      setFormData: f,
                      t: j,
                      showWarehousingAdvanced: re,
                      setShowWarehousingAdvanced: ae,
                      stepLabel: `Step ${ie + 1}`,
                    }),
                  ye === 'dropshipping' &&
                    t.jsx(Vm, {
                      formData: s,
                      setFormData: f,
                      t: j,
                      showDropshippingAdvanced: ge,
                      setShowDropshippingAdvanced: fe,
                      stepLabel: `Step ${ie + 1}`,
                    }),
                  ye === 'qc' &&
                    t.jsx(Hm, {
                      formData: s,
                      setFormData: f,
                      t: j,
                      showQcAdvanced: Re,
                      setShowQcAdvanced: De,
                      stepLabel: `Step ${ie + 1}`,
                    }),
                  ye === 'chinaVisit' &&
                    t.jsx(Gm, {
                      formData: s,
                      setFormData: f,
                      t: j,
                      showChinaVisitLogistics: Ge,
                      setShowChinaVisitLogistics: Be,
                      stepLabel: `Step ${ie + 1}`,
                    }),
                  ye === 'other' &&
                    t.jsx(Km, { formData: s, setFormData: f, t: j, stepLabel: `Step ${ie + 1}` }),
                  ye === 'shippingRoute' &&
                    tr &&
                    t.jsx(t.Fragment, {
                      children: t.jsxs('section', {
                        className:
                          'sino-simple-form__section sino-simple-form__section--service-shipping',
                        children: [
                          t.jsxs('h2', {
                            className: 'sino-simple-form__section-title',
                            children: [
                              t.jsx('span', {
                                className: 'sino-simple-form__section-step',
                                children: `Step ${ie + 1}`,
                              }),
                              t.jsx('span', {
                                children: j('shippingFromChinaTitle', 'Shipping from China'),
                              }),
                            ],
                          }),
                          t.jsx(Zo, {
                            stepId: 'shippingRoute',
                            formData: s,
                            currentStepIndex: ie,
                            totalSteps: Ee,
                            t: j,
                          }),
                          t.jsx('h3', {
                            className: 'sino-simple-form__subsection-title',
                            children: j('simpleStep1Title', 'Destination & mode'),
                          }),
                          t.jsxs('div', {
                            className: 'sino-simple-form__fields',
                            children: [
                              t.jsxs('div', {
                                className: `sino-simple-form__field sino-simple-form__field--primary${m.country && D.country ? ' sino-simple-form__field--error' : ''}${m.country && !D.country && Ue(s.country) ? ' sino-simple-form__field--success' : ''}`,
                                children: [
                                  t.jsxs('label', {
                                    className: 'sino-simple-form__label',
                                    htmlFor: 'country',
                                    children: [
                                      j('destinationCountry', 'Destination country'),
                                      t.jsx('span', {
                                        className: 'sino-simple-form__required',
                                        'aria-label': 'required',
                                        children: '*',
                                      }),
                                    ],
                                  }),
                                  t.jsxs('div', {
                                    className: 'sino-simple-form__field-wrapper',
                                    children: [
                                      t.jsx(Zc, {
                                        id: 'country',
                                        name: 'country',
                                        value: s.country,
                                        onChange: Qe,
                                        onBlur: () => {
                                          s.country &&
                                            s.country.trim().length > 0 &&
                                            Tn('country', s.country);
                                        },
                                        onSelect: (y) => {
                                          f((L) => ({ ...L, country: y }));
                                        },
                                        onSelectWithValidation: (y) => {
                                          (f((J) => ({ ...J, country: y })),
                                            Ke(y),
                                            N((J) => ({ ...J, country: !0 })));
                                          const L = Xo(y);
                                          !L.valid && L.error
                                            ? O((J) => ({ ...J, country: L.error }))
                                            : O((J) => {
                                                const be = { ...J };
                                                return (delete be.country, be);
                                              });
                                        },
                                        placeholder: j(
                                          'destinationCountryPlaceholder',
                                          'France, USA, Canada…'
                                        ),
                                        options: Qr,
                                        inputRef: Pi,
                                        error: D.country,
                                        touched: m.country,
                                        isValid: !D.country && Ue(_e || s.country),
                                        maxResults: 10,
                                      }),
                                      m.country &&
                                        t.jsxs(t.Fragment, {
                                          children: [
                                            D.country &&
                                              t.jsx('span', {
                                                className:
                                                  'sino-simple-form__field-icon sino-simple-form__field-icon--error',
                                                'aria-hidden': 'true',
                                                children: t.jsxs('svg', {
                                                  width: '20',
                                                  height: '20',
                                                  viewBox: '0 0 24 24',
                                                  fill: 'none',
                                                  xmlns: 'http://www.w3.org/2000/svg',
                                                  children: [
                                                    t.jsx('circle', {
                                                      cx: '12',
                                                      cy: '12',
                                                      r: '10',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                    }),
                                                    t.jsx('line', {
                                                      x1: '12',
                                                      y1: '8',
                                                      x2: '12',
                                                      y2: '12',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                      strokeLinecap: 'round',
                                                    }),
                                                    t.jsx('line', {
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
                                            !D.country &&
                                              Ue(s.country) &&
                                              t.jsx('span', {
                                                className:
                                                  'sino-simple-form__field-icon sino-simple-form__field-icon--success',
                                                'aria-hidden': 'true',
                                                children: t.jsxs('svg', {
                                                  width: '20',
                                                  height: '20',
                                                  viewBox: '0 0 24 24',
                                                  fill: 'none',
                                                  xmlns: 'http://www.w3.org/2000/svg',
                                                  children: [
                                                    t.jsx('circle', {
                                                      cx: '12',
                                                      cy: '12',
                                                      r: '10',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                    }),
                                                    t.jsx('path', {
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
                                  D.country &&
                                    t.jsx('p', {
                                      id: 'country-error',
                                      className: 'sino-simple-form__field-error',
                                      role: 'alert',
                                      'aria-live': 'polite',
                                      children: D.country,
                                    }),
                                  m.country &&
                                    !D.country &&
                                    Ue(s.country) &&
                                    t.jsx('p', {
                                      id: 'country-success',
                                      className: 'sino-simple-form__sr-only',
                                      'aria-live': 'polite',
                                      children: j('fieldValid', 'Field is valid'),
                                    }),
                                ],
                              }),
                              t.jsxs('div', {
                                className: `sino-simple-form__field sino-simple-form__field--primary${m.destCity && D.destCity ? ' sino-simple-form__field--error' : ''}${m.destCity && !D.destCity && Ue(s.destCity) ? ' sino-simple-form__field--success' : ''}`,
                                children: [
                                  t.jsxs('label', {
                                    className: 'sino-simple-form__label',
                                    htmlFor: 'destCity',
                                    children: [
                                      j('destinationCityOrPort', 'City or port'),
                                      t.jsx('span', {
                                        className: 'sino-simple-form__required',
                                        'aria-label': 'required',
                                        children: '*',
                                      }),
                                    ],
                                  }),
                                  t.jsxs('div', {
                                    className: 'sino-simple-form__field-wrapper',
                                    children: [
                                      t.jsx(Zc, {
                                        id: 'destCity',
                                        name: 'destCity',
                                        value: s.destCity,
                                        onChange: Qe,
                                        onBlur: () => {
                                          s.destCity &&
                                            s.destCity.trim().length > 0 &&
                                            Tn('destCity', s.destCity);
                                        },
                                        onSelectWithValidation: (y) => {
                                          (f((J) => ({ ...J, destCity: y })),
                                            ir(y),
                                            N((J) => ({ ...J, destCity: !0 })));
                                          const L = Jo(y);
                                          !L.valid && L.error
                                            ? O((J) => ({ ...J, destCity: L.error }))
                                            : O((J) => {
                                                const be = { ...J };
                                                return (delete be.destCity, be);
                                              });
                                        },
                                        placeholder: j(
                                          'destinationCityPlaceholder',
                                          'e.g. Paris, Le Havre…'
                                        ),
                                        options: Zr,
                                        inputRef: rr,
                                        error: D.destCity,
                                        touched: m.destCity,
                                        isValid: !D.destCity && Ue(Si || s.destCity),
                                        maxResults: 8,
                                      }),
                                      m.destCity &&
                                        t.jsxs(t.Fragment, {
                                          children: [
                                            D.destCity &&
                                              t.jsx('span', {
                                                className:
                                                  'sino-simple-form__field-icon sino-simple-form__field-icon--error',
                                                'aria-hidden': 'true',
                                                'aria-label': j('fieldError', 'Error'),
                                                children: t.jsxs('svg', {
                                                  width: '20',
                                                  height: '20',
                                                  viewBox: '0 0 24 24',
                                                  fill: 'none',
                                                  xmlns: 'http://www.w3.org/2000/svg',
                                                  children: [
                                                    t.jsx('circle', {
                                                      cx: '12',
                                                      cy: '12',
                                                      r: '10',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                    }),
                                                    t.jsx('line', {
                                                      x1: '12',
                                                      y1: '8',
                                                      x2: '12',
                                                      y2: '12',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                      strokeLinecap: 'round',
                                                    }),
                                                    t.jsx('line', {
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
                                            !D.destCity &&
                                              Ue(s.destCity) &&
                                              t.jsx('span', {
                                                className:
                                                  'sino-simple-form__field-icon sino-simple-form__field-icon--success',
                                                'aria-hidden': 'true',
                                                'aria-label': j('fieldValid', 'Field is valid'),
                                                children: t.jsxs('svg', {
                                                  width: '20',
                                                  height: '20',
                                                  viewBox: '0 0 24 24',
                                                  fill: 'none',
                                                  xmlns: 'http://www.w3.org/2000/svg',
                                                  children: [
                                                    t.jsx('circle', {
                                                      cx: '12',
                                                      cy: '12',
                                                      r: '10',
                                                      stroke: 'currentColor',
                                                      strokeWidth: '2',
                                                    }),
                                                    t.jsx('path', {
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
                                  D.destCity &&
                                    t.jsx('p', {
                                      id: 'destCity-error',
                                      className: 'sino-simple-form__field-error',
                                      role: 'alert',
                                      'aria-live': 'polite',
                                      children: D.destCity,
                                    }),
                                  m.destCity &&
                                    !D.destCity &&
                                    Ue(s.destCity) &&
                                    t.jsx('p', {
                                      id: 'destCity-success',
                                      className: 'sino-simple-form__sr-only',
                                      'aria-live': 'polite',
                                      children: j('fieldValid', 'Field is valid'),
                                    }),
                                ],
                              }),
                            ],
                          }),
                          t.jsxs('div', {
                            className: `sino-simple-form__subsection${z ? ' sino-simple-form__subsection--open' : ''}`,
                            children: [
                              t.jsxs('button', {
                                type: 'button',
                                className: 'sino-simple-form__subsection-toggle',
                                onClick: () => I((y) => !y),
                                'aria-expanded': z,
                                'aria-controls': 'destination-details-content',
                                'aria-label': z
                                  ? j('collapseSection', 'Collapse destination details')
                                  : j('expandSection', 'Expand destination details'),
                                onKeyDown: (y) => {
                                  (y.key === 'Enter' || y.key === ' ') &&
                                    (y.preventDefault(), I((L) => !L));
                                },
                                children: [
                                  t.jsxs('span', {
                                    className: 'sino-simple-form__subsection-label',
                                    children: [
                                      j(
                                        'destinationDetailsTitle',
                                        'Advanced delivery details (optional)'
                                      ),
                                      t.jsx('small', {
                                        children: j(
                                          'destinationDetailsSubtitle',
                                          'Helps us refine delivery but you can skip this for now.'
                                        ),
                                      }),
                                    ],
                                  }),
                                  t.jsx('span', {
                                    className: `sino-simple-form__subsection-chevron${z ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                                    children: '▾',
                                  }),
                                ],
                              }),
                              z &&
                                t.jsxs('div', {
                                  id: 'destination-details-content',
                                  className:
                                    'sino-simple-form__fields sino-simple-form__fields--rows',
                                  children: [
                                    t.jsxs('div', {
                                      className: 'sino-simple-form__field',
                                      children: [
                                        t.jsx('label', {
                                          className: 'sino-simple-form__label',
                                          children: j(
                                            'destinationLocationType',
                                            'Delivery location type'
                                          ),
                                        }),
                                        t.jsx('input', {
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
                                    t.jsxs('div', {
                                      className: 'sino-simple-form__field',
                                      children: [
                                        t.jsx('label', {
                                          className: 'sino-simple-form__label',
                                          children: j('destinationZipCode', 'ZIP / postal code'),
                                        }),
                                        t.jsx('input', {
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
                          t.jsx('div', {
                            className:
                              'sino-simple-form__fields sino-simple-form__fields--rows sino-simple-form__fields--m-top',
                            children: t.jsxs('div', {
                              className: 'sino-simple-form__field',
                              children: [
                                t.jsx('label', {
                                  className: 'sino-simple-form__label',
                                  children: j('shippingMode', 'Preferred mode'),
                                }),
                                t.jsx('div', {
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
                                    t.jsx(
                                      'button',
                                      {
                                        type: 'button',
                                        className: `sino-simple-chip${s.mode === y.value ? ' sino-simple-chip--active' : ''}`,
                                        'data-tooltip': y.tooltip,
                                        onClick: () =>
                                          f((L) => ({
                                            ...L,
                                            mode: L.mode === y.value ? '' : y.value,
                                          })),
                                        'aria-pressed': s.mode === y.value ? 'true' : 'false',
                                        'aria-label': `${y.label}${s.mode === y.value ? ', selected' : ', not selected'}. ${y.tooltip}`,
                                        onKeyDown: (L) => {
                                          (L.key === 'Enter' || L.key === ' ') &&
                                            (L.preventDefault(),
                                            f((J) => ({
                                              ...J,
                                              mode: J.mode === y.value ? '' : y.value,
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
                          t.jsx('div', {
                            className:
                              'sino-simple-form__fields sino-simple-form__fields--rows sino-simple-form__fields--m-top',
                            children: t.jsxs('div', {
                              className: 'sino-simple-form__field',
                              children: [
                                t.jsxs('label', {
                                  className: 'sino-simple-form__label',
                                  children: [
                                    j('incotermLabel', 'Trade terms (Incoterm)'),
                                    t.jsx('span', {
                                      className: 'sino-simple-form__label-hint',
                                      children: j('ifKnown', 'if known'),
                                    }),
                                  ],
                                }),
                                t.jsx('div', {
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
                                    t.jsx(
                                      'button',
                                      {
                                        type: 'button',
                                        className: `sino-simple-chip${s.incoterm === y.value ? ' sino-simple-chip--active' : ''}`,
                                        'data-tooltip': y.tooltip,
                                        'aria-pressed': s.incoterm === y.value ? 'true' : 'false',
                                        onClick: () =>
                                          f((L) => ({
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
                          t.jsx('h3', {
                            className: 'sino-simple-form__subsection-title',
                            children: j('simpleStep2Title', 'Pickup in China'),
                          }),
                          t.jsxs('div', {
                            className: 'sino-simple-form__fields sino-simple-form__fields--rows',
                            children: [
                              t.jsxs('div', {
                                className:
                                  'sino-simple-form__field sino-simple-form__field--primary',
                                children: [
                                  t.jsx('label', {
                                    className: 'sino-simple-form__label',
                                    htmlFor: 'city',
                                    children: j('originCity', 'City in China'),
                                  }),
                                  t.jsx('input', {
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
                                  t.jsx('p', {
                                    className: 'sino-simple-form__help',
                                    children: j(
                                      'originCityHelp',
                                      'City is enough for now. You can skip the pickup details below if you prefer.'
                                    ),
                                  }),
                                ],
                              }),
                              t.jsxs('div', {
                                className: `sino-simple-form__subsection${X ? ' sino-simple-form__subsection--open' : ''}`,
                                children: [
                                  t.jsxs('button', {
                                    type: 'button',
                                    className: 'sino-simple-form__subsection-toggle',
                                    onClick: () => G((y) => !y),
                                    'aria-expanded': X,
                                    'aria-controls': 'origin-details-content',
                                    'aria-label': X
                                      ? j('collapseSection', 'Collapse origin details')
                                      : j('expandSection', 'Expand origin details'),
                                    onKeyDown: (y) => {
                                      (y.key === 'Enter' || y.key === ' ') &&
                                        (y.preventDefault(), G((L) => !L));
                                    },
                                    children: [
                                      t.jsxs('span', {
                                        className: 'sino-simple-form__subsection-label',
                                        children: [
                                          j(
                                            'originDetailsTitle',
                                            'Advanced pickup details (optional)'
                                          ),
                                          t.jsx('small', {
                                            children: j(
                                              'originDetailsSubtitle',
                                              'Useful for door pickup but optional at this stage.'
                                            ),
                                          }),
                                        ],
                                      }),
                                      t.jsx('span', {
                                        className: `sino-simple-form__subsection-chevron${X ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                                        children: '▾',
                                      }),
                                    ],
                                  }),
                                  X &&
                                    t.jsxs('div', {
                                      id: 'origin-details-content',
                                      className:
                                        'sino-simple-form__fields sino-simple-form__fields--rows',
                                      children: [
                                        t.jsxs('div', {
                                          className: 'sino-simple-form__field',
                                          children: [
                                            t.jsx('label', {
                                              className: 'sino-simple-form__label',
                                              children: j(
                                                'originLocationType',
                                                'Pickup location type'
                                              ),
                                            }),
                                            t.jsx('input', {
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
                                        t.jsx('div', {
                                          className: 'sino-simple-form__field',
                                          children: t.jsx('div', {
                                            className: 'sino-simple-form__chips',
                                            children: t.jsx('button', {
                                              type: 'button',
                                              className: `sino-simple-chip${s.locationType === 'unknown' ? ' sino-simple-chip--active' : ''}`,
                                              onClick: () =>
                                                f((y) => ({ ...y, locationType: 'unknown' })),
                                              'aria-pressed':
                                                s.locationType === 'unknown' ? 'true' : 'false',
                                              'aria-label': `${j('originLocationTypeUnknown', "I'm still discussing with my supplier")}${s.locationType === 'unknown' ? ', selected' : ', not selected'}`,
                                              onKeyDown: (y) => {
                                                (y.key === 'Enter' || y.key === ' ') &&
                                                  (y.preventDefault(),
                                                  f((L) => ({ ...L, locationType: 'unknown' })));
                                              },
                                              children: j(
                                                'originLocationTypeUnknown',
                                                "I'm still discussing with my supplier"
                                              ),
                                            }),
                                          }),
                                        }),
                                        t.jsxs('div', {
                                          className: 'sino-simple-form__field',
                                          children: [
                                            t.jsx('label', {
                                              className: 'sino-simple-form__label',
                                              children: j(
                                                'originZipCode',
                                                'ZIP / postal code in China'
                                              ),
                                            }),
                                            t.jsx('input', {
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
                                        t.jsxs('div', {
                                          className: 'sino-simple-form__field',
                                          children: [
                                            t.jsxs('label', {
                                              className: 'sino-simple-form__label',
                                              children: [
                                                j('originPort', 'Port of loading'),
                                                t.jsx('span', {
                                                  className: 'sino-simple-form__label-hint',
                                                  children: j('ifKnown', 'if known'),
                                                }),
                                              ],
                                            }),
                                            t.jsx('input', {
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
                    tr &&
                    t.jsxs('section', {
                      className:
                        'sino-simple-form__section sino-simple-form__section--service-shipping',
                      children: [
                        t.jsxs('h2', {
                          className: 'sino-simple-form__section-title',
                          children: [
                            t.jsx('span', {
                              className: 'sino-simple-form__section-step',
                              children: `Step ${ie + 1}`,
                            }),
                            t.jsx('span', { children: j('simpleStep3Title', 'Cargo details') }),
                          ],
                        }),
                        t.jsx(Zo, {
                          stepId: 'shippingCargo',
                          formData: s,
                          currentStepIndex: ie,
                          totalSteps: Ee,
                          t: j,
                        }),
                        t.jsx('p', {
                          className: 'sino-simple-form__hint',
                          children: j(
                            'simpleStep3Hint',
                            'A short description, an approximate weight and a rough number of cartons/pallets is enough for a first quote.'
                          ),
                        }),
                        t.jsx('p', {
                          className: 'sino-simple-form__hint sino-simple-form__hint--secondary',
                          children: j(
                            'simpleStep3ImpactHint',
                            'These 4 fields have the biggest impact on your rates: route, mode, total weight and when the goods are ready.'
                          ),
                        }),
                        t.jsxs('div', {
                          className: 'sino-simple-form__fields sino-simple-form__fields--rows',
                          children: [
                            t.jsxs('div', {
                              className: 'sino-simple-form__field sino-simple-form__field--primary',
                              children: [
                                t.jsx('label', {
                                  className: 'sino-simple-form__label',
                                  htmlFor: 'goodsDescription',
                                  children: j('goodsDescription', 'What are you shipping?'),
                                }),
                                t.jsx('input', {
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
                            t.jsxs('div', {
                              className: `sino-simple-form__field sino-simple-form__field--primary${m.totalWeight && D.totalWeight ? ' sino-simple-form__field--error' : ''}${m.totalWeight && !D.totalWeight && Ue(s.totalWeight) ? ' sino-simple-form__field--success' : ''}`,
                              children: [
                                t.jsxs('label', {
                                  className: 'sino-simple-form__label',
                                  htmlFor: 'totalWeight',
                                  children: [
                                    j('totalWeight', 'Total Weight (kg)'),
                                    t.jsx('span', {
                                      className: 'sino-simple-form__required',
                                      'aria-label': 'required',
                                      children: '*',
                                    }),
                                  ],
                                }),
                                t.jsxs('div', {
                                  className: 'sino-simple-form__field-wrapper',
                                  children: [
                                    t.jsx('input', {
                                      className: `sino-simple-form__input${D.totalWeight ? ' sino-simple-form__input--error' : ''}${m.totalWeight && !D.totalWeight && Ue(s.totalWeight) ? ' sino-simple-form__input--success' : ''}`,
                                      type: 'text',
                                      id: 'totalWeight',
                                      name: 'totalWeight',
                                      ref: Ti,
                                      value: s.totalWeight,
                                      onChange: (y) => {
                                        (hn('totalWeight', y.target.value),
                                          D.totalWeight &&
                                            O((L) => {
                                              const J = { ...L };
                                              return (delete J.totalWeight, J);
                                            }));
                                      },
                                      onBlur: () => Tn('totalWeight', s.totalWeight),
                                      placeholder: j('totalWeightPlaceholder', 'e.g. 1 200'),
                                      'aria-label': j('totalWeight', 'Estimated total weight'),
                                      'aria-describedby': D.totalWeight
                                        ? 'totalWeight-error'
                                        : m.totalWeight && !D.totalWeight && Ue(s.totalWeight)
                                          ? 'totalWeight-success'
                                          : void 0,
                                      'aria-invalid': D.totalWeight ? 'true' : 'false',
                                      'aria-required': 'true',
                                    }),
                                    m.totalWeight &&
                                      t.jsxs(t.Fragment, {
                                        children: [
                                          D.totalWeight &&
                                            t.jsx('span', {
                                              className:
                                                'sino-simple-form__field-icon sino-simple-form__field-icon--error',
                                              'aria-hidden': 'true',
                                              children: t.jsxs('svg', {
                                                width: '20',
                                                height: '20',
                                                viewBox: '0 0 24 24',
                                                fill: 'none',
                                                xmlns: 'http://www.w3.org/2000/svg',
                                                children: [
                                                  t.jsx('circle', {
                                                    cx: '12',
                                                    cy: '12',
                                                    r: '10',
                                                    stroke: 'currentColor',
                                                    strokeWidth: '2',
                                                  }),
                                                  t.jsx('line', {
                                                    x1: '12',
                                                    y1: '8',
                                                    x2: '12',
                                                    y2: '12',
                                                    stroke: 'currentColor',
                                                    strokeWidth: '2',
                                                    strokeLinecap: 'round',
                                                  }),
                                                  t.jsx('line', {
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
                                          !D.totalWeight &&
                                            Ue(s.totalWeight) &&
                                            t.jsx('span', {
                                              className:
                                                'sino-simple-form__field-icon sino-simple-form__field-icon--success',
                                              'aria-hidden': 'true',
                                              children: t.jsxs('svg', {
                                                width: '20',
                                                height: '20',
                                                viewBox: '0 0 24 24',
                                                fill: 'none',
                                                xmlns: 'http://www.w3.org/2000/svg',
                                                children: [
                                                  t.jsx('circle', {
                                                    cx: '12',
                                                    cy: '12',
                                                    r: '10',
                                                    stroke: 'currentColor',
                                                    strokeWidth: '2',
                                                  }),
                                                  t.jsx('path', {
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
                                D.totalWeight &&
                                  t.jsx('p', {
                                    id: 'totalWeight-error',
                                    className: 'sino-simple-form__field-error',
                                    role: 'alert',
                                    'aria-live': 'polite',
                                    children: D.totalWeight,
                                  }),
                                m.totalWeight &&
                                  !D.totalWeight &&
                                  Ue(s.totalWeight) &&
                                  t.jsx('p', {
                                    id: 'totalWeight-success',
                                    className: 'sino-simple-form__sr-only',
                                    'aria-live': 'polite',
                                    children: j('fieldValid', 'Field is valid'),
                                  }),
                                t.jsx('p', {
                                  className: 'sino-simple-form__help',
                                  children: j(
                                    'totalWeightHelp',
                                    'Rough estimate is OK. We refine it together before booking.'
                                  ),
                                }),
                              ],
                            }),
                            t.jsxs('div', {
                              className: 'sino-simple-form__field',
                              children: [
                                t.jsx('label', {
                                  className: `sino-simple-form__label${F ? ' sino-simple-form__label--muted' : ''}`,
                                  htmlFor: 'numberOfUnits',
                                  children: j('numberOfUnits', 'Number of cartons / pallets'),
                                }),
                                t.jsxs('div', {
                                  className: 'sino-simple-form__field-input-group',
                                  children: [
                                    t.jsx('input', {
                                      className: 'sino-simple-form__input',
                                      type: 'number',
                                      min: 1,
                                      id: 'numberOfUnits',
                                      value: s.numberOfUnits,
                                      onChange: (y) => {
                                        (H(!1), hn('numberOfUnits', Number(y.target.value)));
                                      },
                                      placeholder: j('numberOfUnitsPlaceholder', 'e.g. 10 pallets'),
                                    }),
                                    t.jsx('div', {
                                      className: 'sino-simple-form__chips',
                                      children: t.jsx('button', {
                                        type: 'button',
                                        className: `sino-simple-chip${F ? ' sino-simple-chip--active' : ''}`,
                                        'aria-pressed': F ? 'true' : 'false',
                                        onClick: () => {
                                          (H(!0), hn('numberOfUnits', 0));
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
                            t.jsxs('div', {
                              className: 'sino-simple-form__field',
                              children: [
                                t.jsx('label', {
                                  className: `sino-simple-form__label${S ? ' sino-simple-form__label--muted' : ''}`,
                                  htmlFor: 'goodsValue',
                                  children: j('goodsValue', 'Estimated cargo value'),
                                }),
                                t.jsxs('div', {
                                  className: 'sino-simple-form__field-input-group',
                                  children: [
                                    t.jsx('input', {
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
                                    t.jsx('div', {
                                      className: 'sino-simple-form__chips',
                                      children: t.jsx('button', {
                                        type: 'button',
                                        className: `sino-simple-chip${S ? ' sino-simple-chip--active' : ''}`,
                                        'aria-pressed': S ? 'true' : 'false',
                                        onClick: () => {
                                          (k(!0), f((y) => ({ ...y, goodsValue: '' })));
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
                            t.jsxs('div', {
                              className: 'sino-simple-form__field',
                              children: [
                                t.jsx('label', {
                                  className: 'sino-simple-form__label',
                                  htmlFor: 'goodsCurrency',
                                  children: j('goodsCurrency', 'Currency'),
                                }),
                                t.jsx('input', {
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
                            t.jsxs('div', {
                              className: 'sino-simple-form__field sino-simple-form__field--primary',
                              children: [
                                t.jsx('label', {
                                  className: 'sino-simple-form__label',
                                  children: j('areGoodsReady', 'Are the goods ready?'),
                                }),
                                t.jsx('div', {
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
                                    t.jsx(
                                      'button',
                                      {
                                        type: 'button',
                                        className: `sino-simple-chip${s.areGoodsReady === y.value ? ' sino-simple-chip--active' : ''}`,
                                        'aria-pressed':
                                          s.areGoodsReady === y.value ? 'true' : 'false',
                                        onClick: () =>
                                          f((L) => ({
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
                            t.jsxs('div', {
                              className: 'sino-simple-form__field',
                              children: [
                                t.jsxs('label', {
                                  className: 'sino-simple-form__label',
                                  children: [
                                    j('annualVolumeLabel', 'Rough annual volume from China'),
                                    t.jsx('span', {
                                      className: 'sino-simple-form__label-hint',
                                      children: j('ifKnown', 'if known'),
                                    }),
                                  ],
                                }),
                                t.jsx('div', {
                                  className:
                                    'sino-simple-form__chips sino-simple-form__chips--wrap',
                                  children: [
                                    { value: '50 ~ 500', label: '50 ~ 500' },
                                    { value: '501 ~ 1000', label: '501 ~ 1000' },
                                    { value: '1001 ~ 5000', label: '1001 ~ 5000' },
                                    { value: '5001+', label: '5001+' },
                                  ].map((y) =>
                                    t.jsx(
                                      'button',
                                      {
                                        type: 'button',
                                        className: `sino-simple-chip${s.annualVolume === y.value ? ' sino-simple-chip--active' : ''}`,
                                        'aria-pressed':
                                          s.annualVolume === y.value ? 'true' : 'false',
                                        onClick: () =>
                                          f((L) => ({
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
                            t.jsxs('div', {
                              className: 'sino-simple-form__field',
                              children: [
                                t.jsx('label', {
                                  className: 'sino-simple-form__label',
                                  children: j(
                                    'isPersonalOrHazardous',
                                    'Personal effects or hazardous goods?'
                                  ),
                                }),
                                t.jsx('div', {
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
                                    t.jsx(
                                      'button',
                                      {
                                        type: 'button',
                                        className: `sino-simple-chip${s.isPersonalOrHazardous === y.value ? ' sino-simple-chip--active' : ''}`,
                                        'aria-pressed':
                                          s.isPersonalOrHazardous === y.value ? 'true' : 'false',
                                        onClick: () =>
                                          f((L) => ({ ...L, isPersonalOrHazardous: y.value })),
                                        children: y.label,
                                      },
                                      String(y.value)
                                    )
                                  ),
                                }),
                                t.jsx('p', {
                                  className: 'sino-simple-form__help',
                                  children: j(
                                    'isPersonalOrHazardousHelp',
                                    'This only helps us pick the right specialist on our side – it does not change your pricing automatically.'
                                  ),
                                }),
                              ],
                            }),
                            t.jsxs('div', {
                              className: `sino-simple-form__subsection${C ? ' sino-simple-form__subsection--open' : ''}`,
                              children: [
                                t.jsxs('button', {
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
                                      (y.preventDefault(), P((L) => !L));
                                  },
                                  children: [
                                    t.jsxs('span', {
                                      className: 'sino-simple-form__subsection-label',
                                      children: [
                                        j('simpleStep4Title', 'Advanced cargo details (optional)'),
                                        t.jsx('small', {
                                          children: j(
                                            'simpleStep4Subtitle',
                                            'Dimensions and remarks help us fine-tune the quote but are not mandatory.'
                                          ),
                                        }),
                                      ],
                                    }),
                                    t.jsx('span', {
                                      className: `sino-simple-form__subsection-chevron${C ? ' sino-simple-form__subsection-chevron--open' : ''}`,
                                      children: '▾',
                                    }),
                                  ],
                                }),
                                C &&
                                  t.jsxs('div', {
                                    id: 'advanced-details-content',
                                    className:
                                      'sino-simple-form__fields sino-simple-form__fields--rows',
                                    children: [
                                      t.jsxs('div', {
                                        className: 'sino-simple-form__field',
                                        children: [
                                          t.jsx('label', {
                                            className: `sino-simple-form__label${h ? ' sino-simple-form__label--muted' : ''}`,
                                            children: j(
                                              'dimensions',
                                              'Approximate dimensions per unit'
                                            ),
                                          }),
                                          t.jsxs('div', {
                                            className:
                                              'sino-simple-form__fields sino-simple-form__fields--inline',
                                            children: [
                                              t.jsx('input', {
                                                className: 'sino-simple-form__input',
                                                type: 'text',
                                                value: s.dimensions.length,
                                                onChange: (y) =>
                                                  hn('dimensions', {
                                                    ...s.dimensions,
                                                    length: y.target.value,
                                                  }),
                                                placeholder: j('lengthPlaceholder', 'L (cm)'),
                                              }),
                                              t.jsx('input', {
                                                className: 'sino-simple-form__input',
                                                type: 'text',
                                                value: s.dimensions.width,
                                                onChange: (y) =>
                                                  hn('dimensions', {
                                                    ...s.dimensions,
                                                    width: y.target.value,
                                                  }),
                                                placeholder: j('widthPlaceholder', 'W (cm)'),
                                              }),
                                              t.jsx('input', {
                                                className: 'sino-simple-form__input',
                                                type: 'text',
                                                value: s.dimensions.height,
                                                onChange: (y) =>
                                                  hn('dimensions', {
                                                    ...s.dimensions,
                                                    height: y.target.value,
                                                  }),
                                                placeholder: j('heightPlaceholder', 'H (cm)'),
                                              }),
                                            ],
                                          }),
                                          t.jsx('div', {
                                            className:
                                              'sino-simple-form__chips sino-simple-form__chips--wrap',
                                            children: t.jsx('button', {
                                              type: 'button',
                                              className: `sino-simple-chip${h ? ' sino-simple-chip--active' : ''}`,
                                              'aria-pressed': h ? 'true' : 'false',
                                              onClick: () => {
                                                (g(!0),
                                                  hn('dimensions', {
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
                                      t.jsxs('div', {
                                        className: 'sino-simple-form__field',
                                        children: [
                                          t.jsxs('label', {
                                            className: 'sino-simple-form__label',
                                            children: [
                                              j('weightPerUnit', 'Weight per unit'),
                                              t.jsx('span', {
                                                className: 'sino-simple-form__label-hint',
                                                children: j('ifKnown', 'if known'),
                                              }),
                                            ],
                                          }),
                                          t.jsx('input', {
                                            className: 'sino-simple-form__input',
                                            type: 'text',
                                            value: s.weightPerUnit,
                                            onChange: (y) => {
                                              hn('weightPerUnit', y.target.value);
                                            },
                                            placeholder: j(
                                              'weightPerUnitPlaceholder',
                                              'e.g. 25 kg per pallet'
                                            ),
                                          }),
                                          t.jsx('p', {
                                            className: 'sino-simple-form__help',
                                            children: j(
                                              'weightPerUnitHelp',
                                              'If you know the weight per unit, we can calculate the total weight automatically.'
                                            ),
                                          }),
                                        ],
                                      }),
                                      t.jsx($m, { formData: s, setFormData: f, t: j }),
                                      t.jsxs('div', {
                                        className: 'sino-simple-form__field',
                                        children: [
                                          t.jsx('label', {
                                            className: 'sino-simple-form__label',
                                            children: j('remarks', 'Anything we should know?'),
                                          }),
                                          t.jsx('input', {
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
                    t.jsxs(t.Fragment, {
                      children: [
                        t.jsx(xm, {
                          formData: s,
                          setFormData: f,
                          t: j,
                          isFilled: Ue,
                          onChange: Qe,
                          onBlur: Tn,
                          fieldErrors: D,
                          fieldTouched: m,
                          firstNameRef: Hn,
                          emailRef: zn,
                          phoneRef: Ei,
                          stepLabel: `Step ${ie + 1}`,
                          currentStepIndex: ie,
                          totalSteps: Ee,
                        }),
                        t.jsx(Lm, {
                          formData: s,
                          t: j,
                          selectedServiceLabels: Xr,
                          submitError: un,
                          setSubmitError: ze,
                          isSubmitting: Ne,
                          setIsSubmitting: en,
                          scrollToFirstError: Li,
                          onSubmissionSuccess: sr,
                          setFieldErrors: O,
                          setFieldTouched: N,
                          orderedSteps: qe,
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
              t.jsx(
                Dm,
                {
                  currentStep: ie,
                  totalSteps: Ee,
                  onNext: ar,
                  onPrevious: or,
                  isFirstStep: ca,
                  isLastStep: Jr,
                  orderedSteps: qe,
                  formData: s,
                  t: j,
                },
                `nav-${Ee}-${ie}-${JSON.stringify(s.servicesRequested)}`
              ),
            ],
          }),
        });
  },
  Gr = new Map();
function lu(l) {
  const u = document.getElementById(l);
  if (!u) {
    console.error(`[SinoSimpleForm] Container with id "${l}" not found`);
    return;
  }
  if (Gr.has(l)) {
    console.warn(`[SinoSimpleForm] Container "${l}" is already initialized`);
    return;
  }
  u.innerHTML = '';
  const s = mm.createRoot(u);
  (s.render(
    t.jsx(W.StrictMode, {
      children: t.jsx('div', {
        className: 'sino-simple-form-root',
        children: t.jsx(fm, { children: t.jsx(rp, {}) }),
      }),
    })
  ),
    Gr.set(l, s),
    console.log(`[SinoSimpleForm] Initialized in container "${l}"`));
}
function tp(l) {
  const u = Gr.get(l);
  if (!u) {
    console.warn(`[SinoSimpleForm] No instance found for container "${l}"`);
    return;
  }
  (u.unmount(), Gr.delete(l));
  const s = document.getElementById(l);
  (s && (s.innerHTML = ''), console.log(`[SinoSimpleForm] Destroyed instance in container "${l}"`));
}
function cu(l) {
  return Gr.has(l);
}
const ap = { init: lu, destroy: tp, isInitialized: cu };
typeof window < 'u' &&
  ((window.SinoSimpleForm = ap),
  console.log('[SinoSimpleForm] Global API initialized (simple v2)'),
  window.addEventListener('DOMContentLoaded', () => {
    const l = 'sinoform-react-root';
    document.getElementById(l) && !cu(l) && lu(l);
  }));
