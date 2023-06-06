function M() {}
function lt(t, e) {
	for (const n in e) t[n] = e[n];
	return t;
}
function Q(t) {
	return t();
}
function W() {
	return Object.create(null);
}
function w(t) {
	t.forEach(Q);
}
function U(t) {
	return typeof t == 'function';
}
function vt(t, e) {
	return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
function ot(t) {
	return Object.keys(t).length === 0;
}
function V(t, ...e) {
	if (t == null) return M;
	const n = t.subscribe(...e);
	return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Nt(t) {
	let e;
	return V(t, (n) => (e = n))(), e;
}
function At(t, e, n) {
	t.$$.on_destroy.push(V(e, n));
}
function Mt(t, e, n, i) {
	if (t) {
		const s = X(t, e, n, i);
		return t[0](s);
	}
}
function X(t, e, n, i) {
	return t[1] && i ? lt(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function kt(t, e, n, i) {
	if (t[2] && i) {
		const s = t[2](i(n));
		if (e.dirty === void 0) return s;
		if (typeof s == 'object') {
			const o = [],
				r = Math.max(e.dirty.length, s.length);
			for (let u = 0; u < r; u += 1) o[u] = e.dirty[u] | s[u];
			return o;
		}
		return e.dirty | s;
	}
	return e.dirty;
}
function St(t, e, n, i, s, o) {
	if (s) {
		const r = X(e, n, i, o);
		t.p(r, s);
	}
}
function Ct(t) {
	if (t.ctx.length > 32) {
		const e = [],
			n = t.ctx.length / 32;
		for (let i = 0; i < n; i++) e[i] = -1;
		return e;
	}
	return -1;
}
function Ht(t) {
	const e = {};
	for (const n in t) n[0] !== '$' && (e[n] = t[n]);
	return e;
}
function Lt(t) {
	const e = {};
	for (const n in t) e[n] = !0;
	return e;
}
function jt(t, e, n) {
	return t.set(n), e;
}
let S = !1;
function ut() {
	S = !0;
}
function at() {
	S = !1;
}
function ft(t, e, n, i) {
	for (; t < e; ) {
		const s = t + ((e - t) >> 1);
		n(s) <= i ? (t = s + 1) : (e = s);
	}
	return t;
}
function _t(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let e = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const c = [];
		for (let l = 0; l < e.length; l++) {
			const f = e[l];
			f.claim_order !== void 0 && c.push(f);
		}
		e = c;
	}
	const n = new Int32Array(e.length + 1),
		i = new Int32Array(e.length);
	n[0] = -1;
	let s = 0;
	for (let c = 0; c < e.length; c++) {
		const l = e[c].claim_order,
			f = (s > 0 && e[n[s]].claim_order <= l ? s + 1 : ft(1, s, (_) => e[n[_]].claim_order, l)) - 1;
		i[c] = n[f] + 1;
		const d = f + 1;
		(n[d] = c), (s = Math.max(d, s));
	}
	const o = [],
		r = [];
	let u = e.length - 1;
	for (let c = n[s] + 1; c != 0; c = i[c - 1]) {
		for (o.push(e[c - 1]); u >= c; u--) r.push(e[u]);
		u--;
	}
	for (; u >= 0; u--) r.push(e[u]);
	o.reverse(), r.sort((c, l) => c.claim_order - l.claim_order);
	for (let c = 0, l = 0; c < r.length; c++) {
		for (; l < o.length && r[c].claim_order >= o[l].claim_order; ) l++;
		const f = l < o.length ? o[l] : null;
		t.insertBefore(r[c], f);
	}
}
function dt(t, e) {
	if (S) {
		for (
			_t(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentNode !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		e !== t.actual_end_child
			? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child)
			: (t.actual_end_child = e.nextSibling);
	} else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function ht(t, e, n) {
	t.insertBefore(e, n || null);
}
function mt(t, e, n) {
	S && !n ? dt(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function k(t) {
	t.parentNode && t.parentNode.removeChild(t);
}
function Pt(t, e) {
	for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function Y(t) {
	return document.createElement(t);
}
function Z(t) {
	return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function R(t) {
	return document.createTextNode(t);
}
function Dt() {
	return R(' ');
}
function Ot() {
	return R('');
}
function Bt(t, e, n, i) {
	return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function Gt(t, e, n) {
	n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Rt(t) {
	let e;
	return {
		p(...n) {
			(e = n), e.forEach((i) => t.push(i));
		},
		r() {
			e.forEach((n) => t.splice(t.indexOf(n), 1));
		}
	};
}
function pt(t) {
	return Array.from(t.childNodes);
}
function tt(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function et(t, e, n, i, s = !1) {
	tt(t);
	const o = (() => {
		for (let r = t.claim_info.last_index; r < t.length; r++) {
			const u = t[r];
			if (e(u)) {
				const c = n(u);
				return c === void 0 ? t.splice(r, 1) : (t[r] = c), s || (t.claim_info.last_index = r), u;
			}
		}
		for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
			const u = t[r];
			if (e(u)) {
				const c = n(u);
				return (
					c === void 0 ? t.splice(r, 1) : (t[r] = c),
					s ? c === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = r),
					u
				);
			}
		}
		return i();
	})();
	return (o.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), o;
}
function nt(t, e, n, i) {
	return et(
		t,
		(s) => s.nodeName === e,
		(s) => {
			const o = [];
			for (let r = 0; r < s.attributes.length; r++) {
				const u = s.attributes[r];
				n[u.name] || o.push(u.name);
			}
			o.forEach((r) => s.removeAttribute(r));
		},
		() => i(e)
	);
}
function qt(t, e, n) {
	return nt(t, e, n, Y);
}
function zt(t, e, n) {
	return nt(t, e, n, Z);
}
function yt(t, e) {
	return et(
		t,
		(n) => n.nodeType === 3,
		(n) => {
			const i = '' + e;
			if (n.data.startsWith(i)) {
				if (n.data.length !== i.length) return n.splitText(i.length);
			} else n.data = i;
		},
		() => R(e),
		!0
	);
}
function Ft(t) {
	return yt(t, ' ');
}
function I(t, e, n) {
	for (let i = n; i < t.length; i += 1) {
		const s = t[i];
		if (s.nodeType === 8 && s.textContent.trim() === e) return i;
	}
	return t.length;
}
function Wt(t, e) {
	const n = I(t, 'HTML_TAG_START', 0),
		i = I(t, 'HTML_TAG_END', n);
	if (n === i) return new J(void 0, e);
	tt(t);
	const s = t.splice(n, i - n + 1);
	k(s[0]), k(s[s.length - 1]);
	const o = s.slice(1, s.length - 1);
	for (const r of o)
		(r.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1);
	return new J(o, e);
}
function It(t, e) {
	(e = '' + e), t.data !== e && (t.data = e);
}
function Jt(t, e, n, i) {
	n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? 'important' : '');
}
function Kt(t, e) {
	const n = [];
	let i = 0;
	for (const s of e.childNodes)
		if (s.nodeType === 8) {
			const o = s.textContent.trim();
			o === `HEAD_${t}_END`
				? ((i -= 1), n.push(s))
				: o === `HEAD_${t}_START` && ((i += 1), n.push(s));
		} else i > 0 && n.push(s);
	return n;
}
class gt {
	constructor(e = !1) {
		(this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null);
	}
	c(e) {
		this.h(e);
	}
	m(e, n, i = null) {
		this.e ||
			(this.is_svg
				? (this.e = Z(n.nodeName))
				: (this.e = Y(n.nodeType === 11 ? 'TEMPLATE' : n.nodeName)),
			(this.t = n.tagName !== 'TEMPLATE' ? n : n.content),
			this.c(e)),
			this.i(i);
	}
	h(e) {
		(this.e.innerHTML = e),
			(this.n = Array.from(
				this.e.nodeName === 'TEMPLATE' ? this.e.content.childNodes : this.e.childNodes
			));
	}
	i(e) {
		for (let n = 0; n < this.n.length; n += 1) ht(this.t, this.n[n], e);
	}
	p(e) {
		this.d(), this.h(e), this.i(this.a);
	}
	d() {
		this.n.forEach(k);
	}
}
class J extends gt {
	constructor(e, n = !1) {
		super(n), (this.e = this.n = null), (this.l = e);
	}
	c(e) {
		this.l ? (this.n = this.l) : super.c(e);
	}
	i(e) {
		for (let n = 0; n < this.n.length; n += 1) mt(this.t, this.n[n], e);
	}
}
function Qt(t, e) {
	return new t(e);
}
let T;
function E(t) {
	T = t;
}
function C() {
	if (!T) throw new Error('Function called outside component initialization');
	return T;
}
function Ut(t) {
	C().$$.on_mount.push(t);
}
function Vt(t) {
	C().$$.after_update.push(t);
}
function Xt(t, e) {
	return C().$$.context.set(t, e), e;
}
function Yt(t) {
	return C().$$.context.get(t);
}
function Zt(t, e) {
	const n = t.$$.callbacks[e.type];
	n && n.slice().forEach((i) => i.call(this, e));
}
const b = [],
	K = [];
let $ = [];
const O = [],
	it = Promise.resolve();
let B = !1;
function st() {
	B || ((B = !0), it.then(rt));
}
function te() {
	return st(), it;
}
function G(t) {
	$.push(t);
}
function ee(t) {
	O.push(t);
}
const D = new Set();
let x = 0;
function rt() {
	if (x !== 0) return;
	const t = T;
	do {
		try {
			for (; x < b.length; ) {
				const e = b[x];
				x++, E(e), xt(e.$$);
			}
		} catch (e) {
			throw ((b.length = 0), (x = 0), e);
		}
		for (E(null), b.length = 0, x = 0; K.length; ) K.pop()();
		for (let e = 0; e < $.length; e += 1) {
			const n = $[e];
			D.has(n) || (D.add(n), n());
		}
		$.length = 0;
	} while (b.length);
	for (; O.length; ) O.pop()();
	(B = !1), D.clear(), E(t);
}
function xt(t) {
	if (t.fragment !== null) {
		t.update(), w(t.before_update);
		const e = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(G);
	}
}
function bt(t) {
	const e = [],
		n = [];
	$.forEach((i) => (t.indexOf(i) === -1 ? e.push(i) : n.push(i))), n.forEach((i) => i()), ($ = e);
}
const A = new Set();
let g;
function ne() {
	g = { r: 0, c: [], p: g };
}
function ie() {
	g.r || w(g.c), (g = g.p);
}
function ct(t, e) {
	t && t.i && (A.delete(t), t.i(e));
}
function $t(t, e, n, i) {
	if (t && t.o) {
		if (A.has(t)) return;
		A.add(t),
			g.c.push(() => {
				A.delete(t), i && (n && t.d(1), i());
			}),
			t.o(e);
	} else i && i();
}
function se(t, e) {
	$t(t, 1, 1, () => {
		e.delete(t.key);
	});
}
function re(t, e, n, i, s, o, r, u, c, l, f, d) {
	let _ = t.length,
		m = o.length,
		h = _;
	const H = {};
	for (; h--; ) H[t[h].key] = h;
	const v = [],
		L = new Map(),
		j = new Map(),
		q = [];
	for (h = m; h--; ) {
		const a = d(s, o, h),
			p = n(a);
		let y = r.get(p);
		y ? i && q.push(() => y.p(a, e)) : ((y = l(p, a)), y.c()),
			L.set(p, (v[h] = y)),
			p in H && j.set(p, Math.abs(h - H[p]));
	}
	const z = new Set(),
		F = new Set();
	function P(a) {
		ct(a, 1), a.m(u, f), r.set(a.key, a), (f = a.first), m--;
	}
	for (; _ && m; ) {
		const a = v[m - 1],
			p = t[_ - 1],
			y = a.key,
			N = p.key;
		a === p
			? ((f = a.first), _--, m--)
			: L.has(N)
			? !r.has(y) || z.has(y)
				? P(a)
				: F.has(N)
				? _--
				: j.get(y) > j.get(N)
				? (F.add(y), P(a))
				: (z.add(N), _--)
			: (c(p, r), _--);
	}
	for (; _--; ) {
		const a = t[_];
		L.has(a.key) || c(a, r);
	}
	for (; m; ) P(v[m - 1]);
	return w(q), v;
}
function ce(t, e, n) {
	const i = t.$$.props[e];
	i !== void 0 && ((t.$$.bound[i] = n), n(t.$$.ctx[i]));
}
function le(t) {
	t && t.c();
}
function oe(t, e) {
	t && t.l(e);
}
function wt(t, e, n, i) {
	const { fragment: s, after_update: o } = t.$$;
	s && s.m(e, n),
		i ||
			G(() => {
				const r = t.$$.on_mount.map(Q).filter(U);
				t.$$.on_destroy ? t.$$.on_destroy.push(...r) : w(r), (t.$$.on_mount = []);
			}),
		o.forEach(G);
}
function Et(t, e) {
	const n = t.$$;
	n.fragment !== null &&
		(bt(n.after_update),
		w(n.on_destroy),
		n.fragment && n.fragment.d(e),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function Tt(t, e) {
	t.$$.dirty[0] === -1 && (b.push(t), st(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function ue(t, e, n, i, s, o, r, u = [-1]) {
	const c = T;
	E(t);
	const l = (t.$$ = {
		fragment: null,
		ctx: [],
		props: o,
		update: M,
		not_equal: s,
		bound: W(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(e.context || (c ? c.$$.context : [])),
		callbacks: W(),
		dirty: u,
		skip_bound: !1,
		root: e.target || c.$$.root
	});
	r && r(l.root);
	let f = !1;
	if (
		((l.ctx = n
			? n(t, e.props || {}, (d, _, ...m) => {
					const h = m.length ? m[0] : _;
					return (
						l.ctx &&
							s(l.ctx[d], (l.ctx[d] = h)) &&
							(!l.skip_bound && l.bound[d] && l.bound[d](h), f && Tt(t, d)),
						_
					);
			  })
			: []),
		l.update(),
		(f = !0),
		w(l.before_update),
		(l.fragment = i ? i(l.ctx) : !1),
		e.target)
	) {
		if (e.hydrate) {
			ut();
			const d = pt(e.target);
			l.fragment && l.fragment.l(d), d.forEach(k);
		} else l.fragment && l.fragment.c();
		e.intro && ct(t.$$.fragment), wt(t, e.target, e.anchor, e.customElement), at(), rt();
	}
	E(c);
}
class ae {
	$destroy() {
		Et(this, 1), (this.$destroy = M);
	}
	$on(e, n) {
		if (!U(n)) return M;
		const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
		return (
			i.push(n),
			() => {
				const s = i.indexOf(n);
				s !== -1 && i.splice(s, 1);
			}
		);
	}
	$set(e) {
		this.$$set && !ot(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
	}
}
export {
	ce as $,
	wt as A,
	Et as B,
	Nt as C,
	Mt as D,
	dt as E,
	St as F,
	Ct as G,
	kt as H,
	Xt as I,
	lt as J,
	Ht as K,
	Bt as L,
	Lt as M,
	Zt as N,
	w as O,
	Yt as P,
	Rt as Q,
	J as R,
	ae as S,
	Z as T,
	Kt as U,
	Wt as V,
	zt as W,
	M as X,
	At as Y,
	jt as Z,
	re as _,
	Dt as a,
	ee as a0,
	se as a1,
	Pt as a2,
	mt as b,
	Ft as c,
	$t as d,
	Ot as e,
	ie as f,
	ct as g,
	k as h,
	ue as i,
	Vt as j,
	Y as k,
	qt as l,
	pt as m,
	Gt as n,
	Ut as o,
	Jt as p,
	R as q,
	yt as r,
	vt as s,
	te as t,
	It as u,
	ne as v,
	K as w,
	Qt as x,
	le as y,
	oe as z
};
