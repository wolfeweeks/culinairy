import {
	C as we,
	S as w,
	i as x,
	s as $,
	D as p,
	k as y,
	a as z,
	l as V,
	m as B,
	h as v,
	c as j,
	n as c,
	b as O,
	E as A,
	F as N,
	G as q,
	H as K,
	g as P,
	d as F,
	I as Z,
	J,
	K as Q,
	L as U,
	v as W,
	f as X,
	M as Ke,
	N as G,
	q as re,
	r as oe,
	O as fe,
	P as ae,
	w as de,
	Q as xe,
	R as $e,
	e as ee,
	T as be,
	U as et,
	V as tt,
	W as ve,
	X as he,
	Y as _e,
	o as lt,
	Z as st,
	y as te,
	z as le,
	A as se,
	B as ie,
	_ as it,
	$ as at,
	a0 as rt,
	a1 as ot,
	u as nt
} from '../chunks/index.2924c971.js';
import { w as Ge } from '../chunks/index.3135a299.js';
import { S as ke, R as ft } from '../chunks/stores.4a9da6ad.js';
const ct = !0,
	bl = Object.freeze(
		Object.defineProperty({ __proto__: null, prerender: ct }, Symbol.toStringTag, {
			value: 'Module'
		})
	);
const ue = {};
function Le(l) {
	return l === 'local' ? localStorage : sessionStorage;
}
function me(l, e, t) {
	const i = (t == null ? void 0 : t.serializer) ?? JSON,
		r = (t == null ? void 0 : t.storage) ?? 'local';
	function s(a, o) {
		Le(r).setItem(a, i.stringify(o));
	}
	if (!ue[l]) {
		const a = Ge(e, (g) => {
				const h = Le(r).getItem(l);
				h && g(i.parse(h));
				{
					const m = (I) => {
						I.key === l && g(I.newValue ? i.parse(I.newValue) : null);
					};
					return (
						window.addEventListener('storage', m), () => window.removeEventListener('storage', m)
					);
				}
			}),
			{ subscribe: o, set: f } = a;
		ue[l] = {
			set(g) {
				s(l, g), f(g);
			},
			update(g) {
				const h = g(we(a));
				s(l, h), f(h);
			},
			subscribe: o
		};
	}
	return ue[l];
}
const ut = me('modeOsPrefers', !1),
	dt = me('modeUserPrefers', void 0),
	ge = me('modeCurrent', !1);
function ht() {
	const l = window.matchMedia('(prefers-color-scheme: light)').matches;
	return ut.set(l), l;
}
function gt(l) {
	dt.set(l);
}
function Se(l) {
	const e = document.documentElement.classList,
		t = 'dark';
	l === !0 ? e.remove(t) : e.add(t), ge.set(l);
}
function _t() {
	const l = document.documentElement.classList,
		e = localStorage.getItem('modeUserPrefers') === 'false',
		t = !('modeUserPrefers' in localStorage),
		i = window.matchMedia('(prefers-color-scheme: dark)').matches;
	e || (t && i) ? l.add('dark') : l.remove('dark');
}
const mt = (l) => ({}),
	Ee = (l) => ({}),
	bt = (l) => ({}),
	De = (l) => ({});
function vt(l) {
	let e, t, i, r, s, a, o, f, g, h, m;
	const I = l[13].lead,
		_ = p(I, l, l[12], De),
		M = l[13].default,
		C = p(M, l, l[12], null),
		d = l[13].trail,
		n = p(d, l, l[12], Ee);
	return {
		c() {
			(e = y('div')),
				(t = y('div')),
				_ && _.c(),
				(r = z()),
				(s = y('div')),
				C && C.c(),
				(o = z()),
				(f = y('div')),
				n && n.c(),
				this.h();
		},
		l(u) {
			e = V(u, 'DIV', { class: !0, 'data-testid': !0 });
			var k = B(e);
			t = V(k, 'DIV', { class: !0 });
			var S = B(t);
			_ && _.l(S), S.forEach(v), (r = j(k)), (s = V(k, 'DIV', { class: !0 }));
			var b = B(s);
			C && C.l(b), b.forEach(v), (o = j(k)), (f = V(k, 'DIV', { class: !0 }));
			var E = B(f);
			n && n.l(E), E.forEach(v), k.forEach(v), this.h();
		},
		h() {
			c(t, 'class', (i = 'app-bar-lead ' + l[0])),
				c(s, 'class', (a = 'app-bar-default ' + l[1])),
				c(f, 'class', (g = 'app-bar-trail ' + l[2])),
				c(e, 'class', (h = 'app-rail ' + l[3])),
				c(e, 'data-testid', 'app-rail');
		},
		m(u, k) {
			O(u, e, k),
				A(e, t),
				_ && _.m(t, null),
				A(e, r),
				A(e, s),
				C && C.m(s, null),
				A(e, o),
				A(e, f),
				n && n.m(f, null),
				(m = !0);
		},
		p(u, [k]) {
			_ && _.p && (!m || k & 4096) && N(_, I, u, u[12], m ? K(I, u[12], k, bt) : q(u[12]), De),
				(!m || (k & 1 && i !== (i = 'app-bar-lead ' + u[0]))) && c(t, 'class', i),
				C &&
					C.p &&
					(!m || k & 4096) &&
					N(C, M, u, u[12], m ? K(M, u[12], k, null) : q(u[12]), null),
				(!m || (k & 2 && a !== (a = 'app-bar-default ' + u[1]))) && c(s, 'class', a),
				n && n.p && (!m || k & 4096) && N(n, d, u, u[12], m ? K(d, u[12], k, mt) : q(u[12]), Ee),
				(!m || (k & 4 && g !== (g = 'app-bar-trail ' + u[2]))) && c(f, 'class', g),
				(!m || (k & 8 && h !== (h = 'app-rail ' + u[3]))) && c(e, 'class', h);
		},
		i(u) {
			m || (P(_, u), P(C, u), P(n, u), (m = !0));
		},
		o(u) {
			F(_, u), F(C, u), F(n, u), (m = !1);
		},
		d(u) {
			u && v(e), _ && _.d(u), C && C.d(u), n && n.d(u);
		}
	};
}
const kt = 'grid grid-rows-[auto_1fr_auto] overflow-y-auto';
function Lt(l, e, t) {
	let i,
		{ $$slots: r = {}, $$scope: s } = e,
		{ selected: a = Ge(void 0) } = e,
		{ background: o = 'bg-surface-100-800-token' } = e,
		{ border: f = '' } = e,
		{ active: g = 'bg-primary-active-token' } = e,
		{ hover: h = 'bg-primary-hover-token' } = e,
		{ width: m = 'w-[70px] sm:w-20' } = e,
		{ height: I = 'h-full' } = e,
		{ gap: _ = 'gap-0' } = e,
		{ regionLead: M = '' } = e,
		{ regionDefault: C = '' } = e,
		{ regionTrail: d = '' } = e;
	return (
		Z('selected', a),
		Z('active', g),
		Z('hover', h),
		(l.$$set = (n) => {
			t(14, (e = J(J({}, e), Q(n)))),
				'selected' in n && t(4, (a = n.selected)),
				'background' in n && t(5, (o = n.background)),
				'border' in n && t(6, (f = n.border)),
				'active' in n && t(7, (g = n.active)),
				'hover' in n && t(8, (h = n.hover)),
				'width' in n && t(9, (m = n.width)),
				'height' in n && t(10, (I = n.height)),
				'gap' in n && t(11, (_ = n.gap)),
				'regionLead' in n && t(0, (M = n.regionLead)),
				'regionDefault' in n && t(1, (C = n.regionDefault)),
				'regionTrail' in n && t(2, (d = n.regionTrail)),
				'$$scope' in n && t(12, (s = n.$$scope));
		}),
		(l.$$.update = () => {
			t(3, (i = `${kt} ${o} ${f} ${m} ${I} ${_} ${e.class || ''}`));
		}),
		(e = Q(e)),
		[M, C, d, i, a, o, f, g, h, m, I, _, s, r]
	);
}
class St extends w {
	constructor(e) {
		super(),
			x(this, e, Lt, vt, $, {
				selected: 4,
				background: 5,
				border: 6,
				active: 7,
				hover: 8,
				width: 9,
				height: 10,
				gap: 11,
				regionLead: 0,
				regionDefault: 1,
				regionTrail: 2
			});
	}
}
const Et = (l) => ({}),
	Pe = (l) => ({}),
	Dt = (l) => ({}),
	Ie = (l) => ({}),
	Pt = (l) => ({}),
	He = (l) => ({}),
	It = (l) => ({}),
	Ce = (l) => ({}),
	Ht = (l) => ({}),
	Re = (l) => ({}),
	Ct = (l) => ({}),
	Fe = (l) => ({});
function Te(l) {
	let e, t, i;
	const r = l[18].header,
		s = p(r, l, l[17], Fe);
	return {
		c() {
			(e = y('header')), s && s.c(), this.h();
		},
		l(a) {
			e = V(a, 'HEADER', { id: !0, class: !0 });
			var o = B(e);
			s && s.l(o), o.forEach(v), this.h();
		},
		h() {
			c(e, 'id', 'shell-header'), c(e, 'class', (t = 'flex-none ' + l[7]));
		},
		m(a, o) {
			O(a, e, o), s && s.m(e, null), (i = !0);
		},
		p(a, o) {
			s && s.p && (!i || o & 131072) && N(s, r, a, a[17], i ? K(r, a[17], o, Ct) : q(a[17]), Fe),
				(!i || (o & 128 && t !== (t = 'flex-none ' + a[7]))) && c(e, 'class', t);
		},
		i(a) {
			i || (P(s, a), (i = !0));
		},
		o(a) {
			F(s, a), (i = !1);
		},
		d(a) {
			a && v(e), s && s.d(a);
		}
	};
}
function Me(l) {
	let e, t;
	const i = l[18].sidebarLeft,
		r = p(i, l, l[17], Re);
	return {
		c() {
			(e = y('aside')), r && r.c(), this.h();
		},
		l(s) {
			e = V(s, 'ASIDE', { id: !0, class: !0 });
			var a = B(e);
			r && r.l(a), a.forEach(v), this.h();
		},
		h() {
			c(e, 'id', 'sidebar-left'), c(e, 'class', l[6]);
		},
		m(s, a) {
			O(s, e, a), r && r.m(e, null), (t = !0);
		},
		p(s, a) {
			r && r.p && (!t || a & 131072) && N(r, i, s, s[17], t ? K(i, s[17], a, Ht) : q(s[17]), Re),
				(!t || a & 64) && c(e, 'class', s[6]);
		},
		i(s) {
			t || (P(r, s), (t = !0));
		},
		o(s) {
			F(r, s), (t = !1);
		},
		d(s) {
			s && v(e), r && r.d(s);
		}
	};
}
function ye(l) {
	let e, t, i;
	const r = l[18].pageHeader,
		s = p(r, l, l[17], Ce),
		a = s || Rt();
	return {
		c() {
			(e = y('header')), a && a.c(), this.h();
		},
		l(o) {
			e = V(o, 'HEADER', { id: !0, class: !0 });
			var f = B(e);
			a && a.l(f), f.forEach(v), this.h();
		},
		h() {
			c(e, 'id', 'page-header'), c(e, 'class', (t = 'flex-none ' + l[4]));
		},
		m(o, f) {
			O(o, e, f), a && a.m(e, null), (i = !0);
		},
		p(o, f) {
			s && s.p && (!i || f & 131072) && N(s, r, o, o[17], i ? K(r, o[17], f, It) : q(o[17]), Ce),
				(!i || (f & 16 && t !== (t = 'flex-none ' + o[4]))) && c(e, 'class', t);
		},
		i(o) {
			i || (P(a, o), (i = !0));
		},
		o(o) {
			F(a, o), (i = !1);
		},
		d(o) {
			o && v(e), a && a.d(o);
		}
	};
}
function Rt(l) {
	let e;
	return {
		c() {
			e = re('(slot:header)');
		},
		l(t) {
			e = oe(t, '(slot:header)');
		},
		m(t, i) {
			O(t, e, i);
		},
		d(t) {
			t && v(e);
		}
	};
}
function Ve(l) {
	let e, t, i;
	const r = l[18].pageFooter,
		s = p(r, l, l[17], He),
		a = s || Ft();
	return {
		c() {
			(e = y('footer')), a && a.c(), this.h();
		},
		l(o) {
			e = V(o, 'FOOTER', { id: !0, class: !0 });
			var f = B(e);
			a && a.l(f), f.forEach(v), this.h();
		},
		h() {
			c(e, 'id', 'page-footer'), c(e, 'class', (t = 'flex-none ' + l[2]));
		},
		m(o, f) {
			O(o, e, f), a && a.m(e, null), (i = !0);
		},
		p(o, f) {
			s && s.p && (!i || f & 131072) && N(s, r, o, o[17], i ? K(r, o[17], f, Pt) : q(o[17]), He),
				(!i || (f & 4 && t !== (t = 'flex-none ' + o[2]))) && c(e, 'class', t);
		},
		i(o) {
			i || (P(a, o), (i = !0));
		},
		o(o) {
			F(a, o), (i = !1);
		},
		d(o) {
			o && v(e), a && a.d(o);
		}
	};
}
function Ft(l) {
	let e;
	return {
		c() {
			e = re('(slot:footer)');
		},
		l(t) {
			e = oe(t, '(slot:footer)');
		},
		m(t, i) {
			O(t, e, i);
		},
		d(t) {
			t && v(e);
		}
	};
}
function Be(l) {
	let e, t;
	const i = l[18].sidebarRight,
		r = p(i, l, l[17], Ie);
	return {
		c() {
			(e = y('aside')), r && r.c(), this.h();
		},
		l(s) {
			e = V(s, 'ASIDE', { id: !0, class: !0 });
			var a = B(e);
			r && r.l(a), a.forEach(v), this.h();
		},
		h() {
			c(e, 'id', 'sidebar-right'), c(e, 'class', l[5]);
		},
		m(s, a) {
			O(s, e, a), r && r.m(e, null), (t = !0);
		},
		p(s, a) {
			r && r.p && (!t || a & 131072) && N(r, i, s, s[17], t ? K(i, s[17], a, Dt) : q(s[17]), Ie),
				(!t || a & 32) && c(e, 'class', s[5]);
		},
		i(s) {
			t || (P(r, s), (t = !0));
		},
		o(s) {
			F(r, s), (t = !1);
		},
		d(s) {
			s && v(e), r && r.d(s);
		}
	};
}
function Ae(l) {
	let e, t, i;
	const r = l[18].footer,
		s = p(r, l, l[17], Pe);
	return {
		c() {
			(e = y('footer')), s && s.c(), this.h();
		},
		l(a) {
			e = V(a, 'FOOTER', { id: !0, class: !0 });
			var o = B(e);
			s && s.l(o), o.forEach(v), this.h();
		},
		h() {
			c(e, 'id', 'shell-footer'), c(e, 'class', (t = 'flex-none ' + l[1]));
		},
		m(a, o) {
			O(a, e, o), s && s.m(e, null), (i = !0);
		},
		p(a, o) {
			s && s.p && (!i || o & 131072) && N(s, r, a, a[17], i ? K(r, a[17], o, Et) : q(a[17]), Pe),
				(!i || (o & 2 && t !== (t = 'flex-none ' + a[1]))) && c(e, 'class', t);
		},
		i(a) {
			i || (P(s, a), (i = !0));
		},
		o(a) {
			F(s, a), (i = !1);
		},
		d(a) {
			a && v(e), s && s.d(a);
		}
	};
}
function Tt(l) {
	let e,
		t,
		i,
		r,
		s,
		a,
		o,
		f,
		g,
		h,
		m,
		I,
		_,
		M,
		C,
		d = l[9].header && Te(l),
		n = l[9].sidebarLeft && Me(l),
		u = l[9].pageHeader && ye(l);
	const k = l[18].default,
		S = p(k, l, l[17], null);
	let b = l[9].pageFooter && Ve(l),
		E = l[9].sidebarRight && Be(l),
		L = l[9].footer && Ae(l);
	return {
		c() {
			(e = y('div')),
				d && d.c(),
				(t = z()),
				(i = y('div')),
				n && n.c(),
				(r = z()),
				(s = y('div')),
				u && u.c(),
				(a = z()),
				(o = y('main')),
				S && S.c(),
				(g = z()),
				b && b.c(),
				(m = z()),
				E && E.c(),
				(I = z()),
				L && L.c(),
				this.h();
		},
		l(H) {
			e = V(H, 'DIV', { id: !0, class: !0, 'data-testid': !0 });
			var T = B(e);
			d && d.l(T), (t = j(T)), (i = V(T, 'DIV', { class: !0 }));
			var R = B(i);
			n && n.l(R), (r = j(R)), (s = V(R, 'DIV', { id: !0, class: !0 }));
			var Y = B(s);
			u && u.l(Y), (a = j(Y)), (o = V(Y, 'MAIN', { id: !0, class: !0 }));
			var ne = B(o);
			S && S.l(ne),
				ne.forEach(v),
				(g = j(Y)),
				b && b.l(Y),
				Y.forEach(v),
				(m = j(R)),
				E && E.l(R),
				R.forEach(v),
				(I = j(T)),
				L && L.l(T),
				T.forEach(v),
				this.h();
		},
		h() {
			c(o, 'id', 'page-content'),
				c(o, 'class', (f = 'flex-auto ' + l[3])),
				c(s, 'id', 'page'),
				c(s, 'class', (h = l[0] + ' ' + Oe)),
				c(i, 'class', 'flex-auto ' + yt),
				c(e, 'id', 'appShell'),
				c(e, 'class', l[8]),
				c(e, 'data-testid', 'app-shell');
		},
		m(H, T) {
			O(H, e, T),
				d && d.m(e, null),
				A(e, t),
				A(e, i),
				n && n.m(i, null),
				A(i, r),
				A(i, s),
				u && u.m(s, null),
				A(s, a),
				A(s, o),
				S && S.m(o, null),
				A(s, g),
				b && b.m(s, null),
				A(i, m),
				E && E.m(i, null),
				A(e, I),
				L && L.m(e, null),
				(_ = !0),
				M || ((C = U(s, 'scroll', l[19])), (M = !0));
		},
		p(H, [T]) {
			H[9].header
				? d
					? (d.p(H, T), T & 512 && P(d, 1))
					: ((d = Te(H)), d.c(), P(d, 1), d.m(e, t))
				: d &&
				  (W(),
				  F(d, 1, 1, () => {
						d = null;
				  }),
				  X()),
				H[9].sidebarLeft
					? n
						? (n.p(H, T), T & 512 && P(n, 1))
						: ((n = Me(H)), n.c(), P(n, 1), n.m(i, r))
					: n &&
					  (W(),
					  F(n, 1, 1, () => {
							n = null;
					  }),
					  X()),
				H[9].pageHeader
					? u
						? (u.p(H, T), T & 512 && P(u, 1))
						: ((u = ye(H)), u.c(), P(u, 1), u.m(s, a))
					: u &&
					  (W(),
					  F(u, 1, 1, () => {
							u = null;
					  }),
					  X()),
				S &&
					S.p &&
					(!_ || T & 131072) &&
					N(S, k, H, H[17], _ ? K(k, H[17], T, null) : q(H[17]), null),
				(!_ || (T & 8 && f !== (f = 'flex-auto ' + H[3]))) && c(o, 'class', f),
				H[9].pageFooter
					? b
						? (b.p(H, T), T & 512 && P(b, 1))
						: ((b = Ve(H)), b.c(), P(b, 1), b.m(s, null))
					: b &&
					  (W(),
					  F(b, 1, 1, () => {
							b = null;
					  }),
					  X()),
				(!_ || (T & 1 && h !== (h = H[0] + ' ' + Oe))) && c(s, 'class', h),
				H[9].sidebarRight
					? E
						? (E.p(H, T), T & 512 && P(E, 1))
						: ((E = Be(H)), E.c(), P(E, 1), E.m(i, null))
					: E &&
					  (W(),
					  F(E, 1, 1, () => {
							E = null;
					  }),
					  X()),
				H[9].footer
					? L
						? (L.p(H, T), T & 512 && P(L, 1))
						: ((L = Ae(H)), L.c(), P(L, 1), L.m(e, null))
					: L &&
					  (W(),
					  F(L, 1, 1, () => {
							L = null;
					  }),
					  X()),
				(!_ || T & 256) && c(e, 'class', H[8]);
		},
		i(H) {
			_ || (P(d), P(n), P(u), P(S, H), P(b), P(E), P(L), (_ = !0));
		},
		o(H) {
			F(d), F(n), F(u), F(S, H), F(b), F(E), F(L), (_ = !1);
		},
		d(H) {
			H && v(e),
				d && d.d(),
				n && n.d(),
				u && u.d(),
				S && S.d(H),
				b && b.d(),
				E && E.d(),
				L && L.d(),
				(M = !1),
				C();
		}
	};
}
const Mt = 'w-full h-full flex flex-col overflow-hidden',
	yt = 'w-full h-full flex overflow-hidden',
	Oe = 'flex-1 overflow-x-hidden flex flex-col',
	Vt = 'flex-none overflow-x-hidden overflow-y-auto',
	Bt = 'flex-none overflow-x-hidden overflow-y-auto';
function At(l, e, t) {
	let i,
		r,
		s,
		a,
		o,
		f,
		g,
		h,
		{ $$slots: m = {}, $$scope: I } = e;
	const _ = Ke(m);
	let { regionPage: M = '' } = e,
		{ slotHeader: C = 'z-10' } = e,
		{ slotSidebarLeft: d = 'w-auto' } = e,
		{ slotSidebarRight: n = 'w-auto' } = e,
		{ slotPageHeader: u = '' } = e,
		{ slotPageContent: k = '' } = e,
		{ slotPageFooter: S = '' } = e,
		{ slotFooter: b = '' } = e;
	function E(L) {
		G.call(this, l, L);
	}
	return (
		(l.$$set = (L) => {
			t(20, (e = J(J({}, e), Q(L)))),
				'regionPage' in L && t(0, (M = L.regionPage)),
				'slotHeader' in L && t(10, (C = L.slotHeader)),
				'slotSidebarLeft' in L && t(11, (d = L.slotSidebarLeft)),
				'slotSidebarRight' in L && t(12, (n = L.slotSidebarRight)),
				'slotPageHeader' in L && t(13, (u = L.slotPageHeader)),
				'slotPageContent' in L && t(14, (k = L.slotPageContent)),
				'slotPageFooter' in L && t(15, (S = L.slotPageFooter)),
				'slotFooter' in L && t(16, (b = L.slotFooter)),
				'$$scope' in L && t(17, (I = L.$$scope));
		}),
		(l.$$.update = () => {
			t(8, (i = `${Mt} ${e.class ?? ''}`)),
				l.$$.dirty & 1024 && t(7, (r = `${C}`)),
				l.$$.dirty & 2048 && t(6, (s = `${Vt} ${d}`)),
				l.$$.dirty & 4096 && t(5, (a = `${Bt} ${n}`)),
				l.$$.dirty & 8192 && t(4, (o = `${u}`)),
				l.$$.dirty & 16384 && t(3, (f = `${k}`)),
				l.$$.dirty & 32768 && t(2, (g = `${S}`)),
				l.$$.dirty & 65536 && t(1, (h = `${b}`));
		}),
		(e = Q(e)),
		[M, h, g, f, o, a, s, r, i, _, C, d, n, u, k, S, b, I, m, E]
	);
}
class Ot extends w {
	constructor(e) {
		super(),
			x(this, e, At, Tt, $, {
				regionPage: 0,
				slotHeader: 10,
				slotSidebarLeft: 11,
				slotSidebarRight: 12,
				slotPageHeader: 13,
				slotPageContent: 14,
				slotPageFooter: 15,
				slotFooter: 16
			});
	}
}
function Ut(l) {
	let e, t, i;
	const r = l[9].default,
		s = p(r, l, l[8], null);
	return {
		c() {
			(e = y('div')), s && s.c(), this.h();
		},
		l(a) {
			e = V(a, 'DIV', { class: !0, role: !0, 'aria-labelledby': !0, 'data-testid': !0 });
			var o = B(e);
			s && s.l(o), o.forEach(v), this.h();
		},
		h() {
			c(e, 'class', (t = 'listbox ' + l[1])),
				c(e, 'role', 'listbox'),
				c(e, 'aria-labelledby', l[0]),
				c(e, 'data-testid', 'listbox');
		},
		m(a, o) {
			O(a, e, o), s && s.m(e, null), (i = !0);
		},
		p(a, [o]) {
			s && s.p && (!i || o & 256) && N(s, r, a, a[8], i ? K(r, a[8], o, null) : q(a[8]), null),
				(!i || (o & 2 && t !== (t = 'listbox ' + a[1]))) && c(e, 'class', t),
				(!i || o & 1) && c(e, 'aria-labelledby', a[0]);
		},
		i(a) {
			i || (P(s, a), (i = !0));
		},
		o(a) {
			F(s, a), (i = !1);
		},
		d(a) {
			a && v(e), s && s.d(a);
		}
	};
}
const zt = '';
function jt(l, e, t) {
	let i,
		{ $$slots: r = {}, $$scope: s } = e,
		{ multiple: a = !1 } = e,
		{ spacing: o = 'space-y-1' } = e,
		{ rounded: f = 'rounded-token' } = e,
		{ active: g = 'variant-filled' } = e,
		{ hover: h = 'hover:variant-soft' } = e,
		{ padding: m = 'px-4 py-2' } = e,
		{ labelledby: I = '' } = e;
	return (
		Z('multiple', a),
		Z('rounded', f),
		Z('active', g),
		Z('hover', h),
		Z('padding', m),
		(l.$$set = (_) => {
			t(10, (e = J(J({}, e), Q(_)))),
				'multiple' in _ && t(2, (a = _.multiple)),
				'spacing' in _ && t(3, (o = _.spacing)),
				'rounded' in _ && t(4, (f = _.rounded)),
				'active' in _ && t(5, (g = _.active)),
				'hover' in _ && t(6, (h = _.hover)),
				'padding' in _ && t(7, (m = _.padding)),
				'labelledby' in _ && t(0, (I = _.labelledby)),
				'$$scope' in _ && t(8, (s = _.$$scope));
		}),
		(l.$$.update = () => {
			t(1, (i = `${zt} ${o} ${f} ${e.class ?? ''}`));
		}),
		(e = Q(e)),
		[I, i, a, o, f, g, h, m, s, r]
	);
}
class pt extends w {
	constructor(e) {
		super(),
			x(this, e, jt, Ut, $, {
				multiple: 2,
				spacing: 3,
				rounded: 4,
				active: 5,
				hover: 6,
				padding: 7,
				labelledby: 0
			});
	}
}
const Nt = (l) => ({}),
	Ue = (l) => ({}),
	qt = (l) => ({}),
	ze = (l) => ({});
function Kt(l) {
	let e,
		t = !1,
		i,
		r,
		s;
	return (
		(i = xe(l[29][0])),
		{
			c() {
				(e = y('input')), this.h();
			},
			l(a) {
				(e = V(a, 'INPUT', { type: !0, name: !0, tabindex: !0 })), this.h();
			},
			h() {
				c(e, 'type', 'radio'),
					c(e, 'name', l[1]),
					(e.__value = l[2]),
					(e.value = e.__value),
					c(e, 'tabindex', '-1'),
					i.p(e);
			},
			m(a, o) {
				O(a, e, o),
					l[27](e),
					(e.checked = e.__value === l[0]),
					r ||
						((s = [U(e, 'change', l[28]), U(e, 'click', l[23]), U(e, 'change', l[24])]), (r = !0));
			},
			p(a, o) {
				o[0] & 2 && c(e, 'name', a[1]),
					o[0] & 4 && ((e.__value = a[2]), (e.value = e.__value), (t = !0)),
					(t || o[0] & 1) && (e.checked = e.__value === a[0]);
			},
			d(a) {
				a && v(e), l[27](null), i.r(), (r = !1), fe(s);
			}
		}
	);
}
function Gt(l) {
	let e, t, i;
	return {
		c() {
			(e = y('input')), this.h();
		},
		l(r) {
			(e = V(r, 'INPUT', { type: !0, name: !0, tabindex: !0 })), this.h();
		},
		h() {
			c(e, 'type', 'checkbox'),
				c(e, 'name', l[1]),
				(e.__value = l[2]),
				(e.value = e.__value),
				c(e, 'tabindex', '-1');
		},
		m(r, s) {
			O(r, e, s),
				l[25](e),
				(e.checked = l[4]),
				t || ((i = [U(e, 'change', l[26]), U(e, 'click', l[21]), U(e, 'change', l[22])]), (t = !0));
		},
		p(r, s) {
			s[0] & 2 && c(e, 'name', r[1]),
				s[0] & 4 && ((e.__value = r[2]), (e.value = e.__value)),
				s[0] & 16 && (e.checked = r[4]);
		},
		d(r) {
			r && v(e), l[25](null), (t = !1), fe(i);
		}
	};
}
function je(l) {
	let e, t;
	const i = l[17].lead,
		r = p(i, l, l[16], ze);
	return {
		c() {
			(e = y('div')), r && r.c(), this.h();
		},
		l(s) {
			e = V(s, 'DIV', { class: !0 });
			var a = B(e);
			r && r.l(a), a.forEach(v), this.h();
		},
		h() {
			c(e, 'class', 'listbox-label-lead');
		},
		m(s, a) {
			O(s, e, a), r && r.m(e, null), (t = !0);
		},
		p(s, a) {
			r && r.p && (!t || a[0] & 65536) && N(r, i, s, s[16], t ? K(i, s[16], a, qt) : q(s[16]), ze);
		},
		i(s) {
			t || (P(r, s), (t = !0));
		},
		o(s) {
			F(r, s), (t = !1);
		},
		d(s) {
			s && v(e), r && r.d(s);
		}
	};
}
function pe(l) {
	let e, t;
	const i = l[17].trail,
		r = p(i, l, l[16], Ue);
	return {
		c() {
			(e = y('div')), r && r.c(), this.h();
		},
		l(s) {
			e = V(s, 'DIV', { class: !0 });
			var a = B(e);
			r && r.l(a), a.forEach(v), this.h();
		},
		h() {
			c(e, 'class', 'listbox-label-trail');
		},
		m(s, a) {
			O(s, e, a), r && r.m(e, null), (t = !0);
		},
		p(s, a) {
			r && r.p && (!t || a[0] & 65536) && N(r, i, s, s[16], t ? K(i, s[16], a, Nt) : q(s[16]), Ue);
		},
		i(s) {
			t || (P(r, s), (t = !0));
		},
		o(s) {
			F(r, s), (t = !1);
		},
		d(s) {
			s && v(e), r && r.d(s);
		}
	};
}
function Jt(l) {
	let e, t, i, r, s, a, o, f, g, h, m, I, _;
	function M(b, E) {
		return b[3] ? Gt : Kt;
	}
	let C = M(l),
		d = C(l),
		n = l[10].lead && je(l);
	const u = l[17].default,
		k = p(u, l, l[16], null);
	let S = l[10].trail && pe(l);
	return {
		c() {
			(e = y('label')),
				(t = y('div')),
				(i = y('div')),
				d.c(),
				(r = z()),
				(s = y('div')),
				n && n.c(),
				(a = z()),
				(o = y('div')),
				k && k.c(),
				(f = z()),
				S && S.c(),
				this.h();
		},
		l(b) {
			e = V(b, 'LABEL', {});
			var E = B(e);
			t = V(E, 'DIV', {
				class: !0,
				'data-testid': !0,
				role: !0,
				'aria-selected': !0,
				tabindex: !0
			});
			var L = B(t);
			i = V(L, 'DIV', { class: !0 });
			var H = B(i);
			d.l(H), H.forEach(v), (r = j(L)), (s = V(L, 'DIV', { class: !0 }));
			var T = B(s);
			n && n.l(T), (a = j(T)), (o = V(T, 'DIV', { class: !0 }));
			var R = B(o);
			k && k.l(R),
				R.forEach(v),
				(f = j(T)),
				S && S.l(T),
				T.forEach(v),
				L.forEach(v),
				E.forEach(v),
				this.h();
		},
		h() {
			c(i, 'class', 'h-0 w-0 overflow-hidden'),
				c(o, 'class', 'listbox-label-content flex-1'),
				c(s, 'class', (g = 'listbox-label ' + l[7])),
				c(t, 'class', (h = 'listbox-item ' + l[8])),
				c(t, 'data-testid', 'listbox-item'),
				c(t, 'role', 'option'),
				c(t, 'aria-selected', l[5]),
				c(t, 'tabindex', '0');
		},
		m(b, E) {
			O(b, e, E),
				A(e, t),
				A(t, i),
				d.m(i, null),
				A(t, r),
				A(t, s),
				n && n.m(s, null),
				A(s, a),
				A(s, o),
				k && k.m(o, null),
				A(s, f),
				S && S.m(s, null),
				(m = !0),
				I ||
					((_ = [
						U(t, 'keydown', l[9]),
						U(t, 'keydown', l[18]),
						U(t, 'keyup', l[19]),
						U(t, 'keypress', l[20])
					]),
					(I = !0));
		},
		p(b, E) {
			C === (C = M(b)) && d ? d.p(b, E) : (d.d(1), (d = C(b)), d && (d.c(), d.m(i, null))),
				b[10].lead
					? n
						? (n.p(b, E), E[0] & 1024 && P(n, 1))
						: ((n = je(b)), n.c(), P(n, 1), n.m(s, a))
					: n &&
					  (W(),
					  F(n, 1, 1, () => {
							n = null;
					  }),
					  X()),
				k &&
					k.p &&
					(!m || E[0] & 65536) &&
					N(k, u, b, b[16], m ? K(u, b[16], E, null) : q(b[16]), null),
				b[10].trail
					? S
						? (S.p(b, E), E[0] & 1024 && P(S, 1))
						: ((S = pe(b)), S.c(), P(S, 1), S.m(s, null))
					: S &&
					  (W(),
					  F(S, 1, 1, () => {
							S = null;
					  }),
					  X()),
				(!m || (E[0] & 128 && g !== (g = 'listbox-label ' + b[7]))) && c(s, 'class', g),
				(!m || (E[0] & 256 && h !== (h = 'listbox-item ' + b[8]))) && c(t, 'class', h),
				(!m || E[0] & 32) && c(t, 'aria-selected', b[5]);
		},
		i(b) {
			m || (P(n), P(k, b), P(S), (m = !0));
		},
		o(b) {
			F(n), F(k, b), F(S), (m = !1);
		},
		d(b) {
			b && v(e), d.d(), n && n.d(), k && k.d(b), S && S.d(), (I = !1), fe(_);
		}
	};
}
const Qt = 'cursor-pointer -outline-offset-[3px]',
	Wt = 'flex items-center space-x-4';
function Xt(l, e, t) {
	let i,
		r,
		s,
		a,
		{ $$slots: o = {}, $$scope: f } = e;
	const g = Ke(o);
	let { group: h } = e,
		{ name: m } = e,
		{ value: I } = e,
		{ multiple: _ = ae('multiple') } = e,
		{ rounded: M = ae('rounded') } = e,
		{ active: C = ae('active') } = e,
		{ hover: d = ae('hover') } = e,
		{ padding: n = ae('padding') } = e,
		u,
		k;
	function S(D) {
		t(4, (u = D.indexOf(I) >= 0));
	}
	function b(D) {
		const ce = h.indexOf(I);
		D ? ce < 0 && (h.push(I), t(0, h)) : ce >= 0 && (h.splice(ce, 1), t(0, h));
	}
	function E(D) {
		['Enter', 'Space'].includes(D.code) && (D.preventDefault(), k.click());
	}
	const L = [[]];
	function H(D) {
		G.call(this, l, D);
	}
	function T(D) {
		G.call(this, l, D);
	}
	function R(D) {
		G.call(this, l, D);
	}
	function Y(D) {
		G.call(this, l, D);
	}
	function ne(D) {
		G.call(this, l, D);
	}
	function Je(D) {
		G.call(this, l, D);
	}
	function Qe(D) {
		G.call(this, l, D);
	}
	function We(D) {
		de[D ? 'unshift' : 'push'](() => {
			(k = D), t(6, k);
		});
	}
	function Xe() {
		(u = this.checked), t(4, u);
	}
	function Ye(D) {
		de[D ? 'unshift' : 'push'](() => {
			(k = D), t(6, k);
		});
	}
	function Ze() {
		(h = this.__value), t(0, h);
	}
	return (
		(l.$$set = (D) => {
			t(32, (e = J(J({}, e), Q(D)))),
				'group' in D && t(0, (h = D.group)),
				'name' in D && t(1, (m = D.name)),
				'value' in D && t(2, (I = D.value)),
				'multiple' in D && t(3, (_ = D.multiple)),
				'rounded' in D && t(11, (M = D.rounded)),
				'active' in D && t(12, (C = D.active)),
				'hover' in D && t(13, (d = D.hover)),
				'padding' in D && t(14, (n = D.padding)),
				'$$scope' in D && t(16, (f = D.$$scope));
		}),
		(l.$$.update = () => {
			l.$$.dirty[0] & 9 && _ && S(h),
				l.$$.dirty[0] & 24 && _ && b(u),
				l.$$.dirty[0] & 13 && t(5, (i = _ ? h.includes(I) : h === I)),
				l.$$.dirty[0] & 12320 && t(15, (r = i ? C : d)),
				t(8, (s = `${Qt} ${M} ${n} ${r} ${e.class ?? ''}`));
		}),
		t(7, (a = `${Wt}`)),
		(e = Q(e)),
		[
			h,
			m,
			I,
			_,
			u,
			i,
			k,
			a,
			s,
			E,
			g,
			M,
			C,
			d,
			n,
			r,
			f,
			o,
			H,
			T,
			R,
			Y,
			ne,
			Je,
			Qe,
			We,
			Xe,
			Ye,
			Ze,
			L
		]
	);
}
class Yt extends w {
	constructor(e) {
		super(),
			x(
				this,
				e,
				Xt,
				Jt,
				$,
				{
					group: 0,
					name: 1,
					value: 2,
					multiple: 3,
					rounded: 11,
					active: 12,
					hover: 13,
					padding: 14
				},
				null,
				[-1, -1]
			);
	}
}
function Zt(l) {
	let e,
		t = `<script nonce="%sveltekit.nonce%">(${_t.toString()})();<\/script>`,
		i,
		r,
		s,
		a,
		o,
		f,
		g,
		h,
		m,
		I,
		_,
		M,
		C;
	return {
		c() {
			(e = new $e(!1)),
				(i = ee()),
				(r = z()),
				(s = y('div')),
				(a = y('div')),
				(o = be('svg')),
				(f = be('path')),
				this.h();
		},
		l(d) {
			const n = et('svelte-qwgpj2', document.head);
			(e = tt(n, !1)),
				(i = ee()),
				n.forEach(v),
				(r = j(d)),
				(s = V(d, 'DIV', {
					class: !0,
					role: !0,
					'aria-label': !0,
					'aria-checked': !0,
					title: !0,
					tabindex: !0
				}));
			var u = B(s);
			a = V(u, 'DIV', { class: !0 });
			var k = B(a);
			o = ve(k, 'svg', { class: !0, xmlns: !0, viewBox: !0 });
			var S = B(o);
			(f = ve(S, 'path', { d: !0 })),
				B(f).forEach(v),
				S.forEach(v),
				k.forEach(v),
				u.forEach(v),
				this.h();
		},
		h() {
			(e.a = i),
				c(f, 'd', (g = l[0] ? l[4].sun : l[4].moon)),
				c(o, 'class', (h = 'lightswitch-icon ' + l[1])),
				c(o, 'xmlns', 'http://www.w3.org/2000/svg'),
				c(o, 'viewBox', '0 0 512 512'),
				c(a, 'class', (m = 'lightswitch-thumb ' + l[2])),
				c(s, 'class', (I = 'lightswitch-track ' + l[3])),
				c(s, 'role', 'switch'),
				c(s, 'aria-label', 'Light Switch'),
				c(s, 'aria-checked', l[0]),
				c(s, 'title', (_ = 'Toggle ' + (l[0] === !0 ? 'Dark' : 'Light') + ' Mode')),
				c(s, 'tabindex', '0');
		},
		m(d, n) {
			e.m(t, document.head),
				A(document.head, i),
				O(d, r, n),
				O(d, s, n),
				A(s, a),
				A(a, o),
				A(o, f),
				M ||
					((C = [
						U(s, 'click', l[5]),
						U(s, 'click', l[18]),
						U(s, 'keydown', el),
						U(s, 'keydown', l[19]),
						U(s, 'keyup', l[20]),
						U(s, 'keypress', l[21])
					]),
					(M = !0));
		},
		p(d, [n]) {
			n & 1 && g !== (g = d[0] ? d[4].sun : d[4].moon) && c(f, 'd', g),
				n & 2 && h !== (h = 'lightswitch-icon ' + d[1]) && c(o, 'class', h),
				n & 4 && m !== (m = 'lightswitch-thumb ' + d[2]) && c(a, 'class', m),
				n & 8 && I !== (I = 'lightswitch-track ' + d[3]) && c(s, 'class', I),
				n & 1 && c(s, 'aria-checked', d[0]),
				n & 1 &&
					_ !== (_ = 'Toggle ' + (d[0] === !0 ? 'Dark' : 'Light') + ' Mode') &&
					c(s, 'title', _);
		},
		i: he,
		o: he,
		d(d) {
			v(i), d && e.d(), d && v(r), d && v(s), (M = !1), fe(C);
		}
	};
}
const wt = 'cursor-pointer',
	xt = 'aspect-square scale-[0.8] flex justify-center items-center',
	$t = 'w-[70%] aspect-square';
function el(l) {
	['Enter', 'Space'].includes(l.code) && (l.preventDefault(), l.currentTarget.click());
}
function tl(l, e, t) {
	let i, r, s, a, o, f, g, h;
	_e(l, ge, (R) => t(0, (h = R)));
	let { bgLight: m = 'bg-surface-50' } = e,
		{ bgDark: I = 'bg-surface-900' } = e,
		{ fillLight: _ = 'fill-surface-50' } = e,
		{ fillDark: M = 'fill-surface-900' } = e,
		{ width: C = 'w-12' } = e,
		{ height: d = 'h-6' } = e,
		{ ring: n = 'ring-[1px] ring-surface-500/30' } = e,
		{ rounded: u = 'rounded-token' } = e;
	const k = 'transition-all duration-[200ms]',
		S = {
			sun: 'M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z',
			moon: 'M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z'
		};
	function b() {
		st(ge, (h = !h), h), gt(h), Se(h);
	}
	lt(() => {
		'modeCurrent' in localStorage || Se(ht());
	});
	function E(R) {
		G.call(this, l, R);
	}
	function L(R) {
		G.call(this, l, R);
	}
	function H(R) {
		G.call(this, l, R);
	}
	function T(R) {
		G.call(this, l, R);
	}
	return (
		(l.$$set = (R) => {
			t(23, (e = J(J({}, e), Q(R)))),
				'bgLight' in R && t(6, (m = R.bgLight)),
				'bgDark' in R && t(7, (I = R.bgDark)),
				'fillLight' in R && t(8, (_ = R.fillLight)),
				'fillDark' in R && t(9, (M = R.fillDark)),
				'width' in R && t(10, (C = R.width)),
				'height' in R && t(11, (d = R.height)),
				'ring' in R && t(12, (n = R.ring)),
				'rounded' in R && t(13, (u = R.rounded));
		}),
		(l.$$.update = () => {
			l.$$.dirty & 193 && t(17, (i = h === !0 ? m : I)),
				l.$$.dirty & 193 && t(16, (r = h === !0 ? I : m)),
				l.$$.dirty & 1 && t(15, (s = h === !0 ? 'translate-x-[100%]' : '')),
				l.$$.dirty & 769 && t(14, (a = h === !0 ? _ : M)),
				t(3, (o = `${wt} ${k} ${C} ${d} ${n} ${u} ${i} ${e.class ?? ''}`)),
				l.$$.dirty & 108544 && t(2, (f = `${xt} ${k} ${d} ${u} ${r} ${s}`)),
				l.$$.dirty & 16384 && t(1, (g = `${$t} ${a}`));
		}),
		(e = Q(e)),
		[h, g, f, o, S, b, m, I, _, M, C, d, n, u, a, s, r, i, E, L, H, T]
	);
}
class ll extends w {
	constructor(e) {
		super(),
			x(this, e, tl, Zt, $, {
				bgLight: 6,
				bgDark: 7,
				fillLight: 8,
				fillDark: 9,
				width: 10,
				height: 11,
				ring: 12,
				rounded: 13
			});
	}
}
function Ne(l, e, t) {
	const i = l.slice();
	return (i[6] = e[t]), (i[8] = t), i;
}
function sl(l) {
	let e = l[6].name + '',
		t,
		i;
	return {
		c() {
			(t = re(e)), (i = z());
		},
		l(r) {
			(t = oe(r, e)), (i = j(r));
		},
		m(r, s) {
			O(r, t, s), O(r, i, s);
		},
		p(r, s) {
			s & 1 && e !== (e = r[6].name + '') && nt(t, e);
		},
		d(r) {
			r && v(t), r && v(i);
		}
	};
}
function qe(l, e) {
	let t, i, r, s;
	function a(g) {
		e[2](g);
	}
	function o() {
		return e[3](e[8]);
	}
	let f = {
		name: 'medium',
		value: e[8],
		active: 'bg-primary-500 dark:bg-primary-600',
		class: 'text-center ' + (e[1] !== e[8] ? 'hover:bg-surface-300 dark:hover:bg-surface-700' : ''),
		$$slots: { default: [sl] },
		$$scope: { ctx: e }
	};
	return (
		e[1] !== void 0 && (f.group = e[1]),
		(i = new Yt({ props: f })),
		de.push(() => at(i, 'group', a)),
		i.$on('click', o),
		{
			key: l,
			first: null,
			c() {
				(t = ee()), te(i.$$.fragment), this.h();
			},
			l(g) {
				(t = ee()), le(i.$$.fragment, g), this.h();
			},
			h() {
				this.first = t;
			},
			m(g, h) {
				O(g, t, h), se(i, g, h), (s = !0);
			},
			p(g, h) {
				e = g;
				const m = {};
				h & 1 && (m.value = e[8]),
					h & 3 &&
						(m.class =
							'text-center ' +
							(e[1] !== e[8] ? 'hover:bg-surface-300 dark:hover:bg-surface-700' : '')),
					h & 513 && (m.$$scope = { dirty: h, ctx: e }),
					!r && h & 2 && ((r = !0), (m.group = e[1]), rt(() => (r = !1))),
					i.$set(m);
			},
			i(g) {
				s || (P(i.$$.fragment, g), (s = !0));
			},
			o(g) {
				F(i.$$.fragment, g), (s = !1);
			},
			d(g) {
				g && v(t), ie(i, g);
			}
		}
	);
}
function il(l) {
	let e = [],
		t = new Map(),
		i,
		r,
		s = l[0];
	const a = (o) => o[8];
	for (let o = 0; o < s.length; o += 1) {
		let f = Ne(l, s, o),
			g = a(f);
		t.set(g, (e[o] = qe(g, f)));
	}
	return {
		c() {
			for (let o = 0; o < e.length; o += 1) e[o].c();
			i = ee();
		},
		l(o) {
			for (let f = 0; f < e.length; f += 1) e[f].l(o);
			i = ee();
		},
		m(o, f) {
			for (let g = 0; g < e.length; g += 1) e[g] && e[g].m(o, f);
			O(o, i, f), (r = !0);
		},
		p(o, f) {
			f & 3 && ((s = o[0]), W(), (e = it(e, f, a, 1, o, s, t, i.parentNode, ot, qe, i, Ne)), X());
		},
		i(o) {
			if (!r) {
				for (let f = 0; f < s.length; f += 1) P(e[f]);
				r = !0;
			}
		},
		o(o) {
			for (let f = 0; f < e.length; f += 1) F(e[f]);
			r = !1;
		},
		d(o) {
			for (let f = 0; f < e.length; f += 1) e[f].d(o);
			o && v(i);
		}
	};
}
function al(l) {
	let e, t, i, r, s;
	return (
		(r = new pt({ props: { class: 'mx-2', $$slots: { default: [il] }, $$scope: { ctx: l } } })),
		{
			c() {
				(e = y('h1')), (t = re('Cookbook')), (i = z()), te(r.$$.fragment), this.h();
			},
			l(a) {
				e = V(a, 'H1', { class: !0 });
				var o = B(e);
				(t = oe(o, 'Cookbook')), o.forEach(v), (i = j(a)), le(r.$$.fragment, a), this.h();
			},
			h() {
				c(e, 'class', 'h1 font-bold text-surface-900-50-token text-center pt-2 pb-2');
			},
			m(a, o) {
				O(a, e, o), A(e, t), O(a, i, o), se(r, a, o), (s = !0);
			},
			p(a, o) {
				const f = {};
				o & 515 && (f.$$scope = { dirty: o, ctx: a }), r.$set(f);
			},
			i(a) {
				s || (P(r.$$.fragment, a), (s = !0));
			},
			o(a) {
				F(r.$$.fragment, a), (s = !1);
			},
			d(a) {
				a && v(e), a && v(i), ie(r, a);
			}
		}
	);
}
function rl(l) {
	let e, t;
	return (
		(e = new St({
			props: {
				background: 'bg-surface-200 dark:bg-surface-800',
				width: 'w-full',
				height: 'h-full',
				class: '',
				$$slots: { default: [al] },
				$$scope: { ctx: l }
			}
		})),
		{
			c() {
				te(e.$$.fragment);
			},
			l(i) {
				le(e.$$.fragment, i);
			},
			m(i, r) {
				se(e, i, r), (t = !0);
			},
			p(i, [r]) {
				const s = {};
				r & 515 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
			},
			i(i) {
				t || (P(e.$$.fragment, i), (t = !0));
			},
			o(i) {
				F(e.$$.fragment, i), (t = !1);
			},
			d(i) {
				ie(e, i);
			}
		}
	);
}
function ol(l, e, t) {
	let i;
	_e(l, ke, (f) => t(4, (i = f)));
	let { recipes: r } = e,
		s = i;
	function a(f) {
		(s = f), t(1, s);
	}
	const o = (f) => ke.set(f);
	return (
		(l.$$set = (f) => {
			'recipes' in f && t(0, (r = f.recipes));
		}),
		[r, s, a, o]
	);
}
class nl extends w {
	constructor(e) {
		super(), x(this, e, ol, rl, $, { recipes: 0 });
	}
}
function fl(l) {
	let e;
	const t = l[2].default,
		i = p(t, l, l[3], null);
	return {
		c() {
			i && i.c();
		},
		l(r) {
			i && i.l(r);
		},
		m(r, s) {
			i && i.m(r, s), (e = !0);
		},
		p(r, s) {
			i && i.p && (!e || s & 8) && N(i, t, r, r[3], e ? K(t, r[3], s, null) : q(r[3]), null);
		},
		i(r) {
			e || (P(i, r), (e = !0));
		},
		o(r) {
			F(i, r), (e = !1);
		},
		d(r) {
			i && i.d(r);
		}
	};
}
function cl(l) {
	let e, t, i, r, s;
	return (
		(r = new ll({})),
		{
			c() {
				(e = y('h2')), (t = re('M(AI) Chef')), (i = z()), te(r.$$.fragment), this.h();
			},
			l(a) {
				e = V(a, 'H2', { class: !0 });
				var o = B(e);
				(t = oe(o, 'M(AI) Chef')), o.forEach(v), (i = j(a)), le(r.$$.fragment, a), this.h();
			},
			h() {
				c(
					e,
					'class',
					'h2 font-extrabold text-surface-900 dark:text-surface-50 text-center flex-grow'
				);
			},
			m(a, o) {
				O(a, e, o), A(e, t), O(a, i, o), se(r, a, o), (s = !0);
			},
			p: he,
			i(a) {
				s || (P(r.$$.fragment, a), (s = !0));
			},
			o(a) {
				F(r.$$.fragment, a), (s = !1);
			},
			d(a) {
				a && v(e), a && v(i), ie(r, a);
			}
		}
	);
}
function ul(l) {
	let e, t;
	return (
		(e = new nl({ props: { recipes: l[0] } })),
		{
			c() {
				te(e.$$.fragment);
			},
			l(i) {
				le(e.$$.fragment, i);
			},
			m(i, r) {
				se(e, i, r), (t = !0);
			},
			p(i, r) {
				const s = {};
				r & 1 && (s.recipes = i[0]), e.$set(s);
			},
			i(i) {
				t || (P(e.$$.fragment, i), (t = !0));
			},
			o(i) {
				F(e.$$.fragment, i), (t = !1);
			},
			d(i) {
				ie(e, i);
			}
		}
	);
}
function dl(l) {
	let e, t;
	return (
		(e = new Ot({
			props: {
				slotHeader: 'bg-primary-500 dark:bg-primary-700 p-4 flex items-center justify-center',
				slotFooter: 'fixed bottom-0 left-0 right-0 bg-primary-700 py-4',
				slotSidebarLeft: 'w-[15%]',
				slotPageContent: 'm-2',
				class: 'h-screen',
				$$slots: { sidebarLeft: [ul], header: [cl], default: [fl] },
				$$scope: { ctx: l }
			}
		})),
		{
			c() {
				te(e.$$.fragment);
			},
			l(i) {
				le(e.$$.fragment, i);
			},
			m(i, r) {
				se(e, i, r), (t = !0);
			},
			p(i, [r]) {
				const s = {};
				r & 9 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
			},
			i(i) {
				t || (P(e.$$.fragment, i), (t = !0));
			},
			o(i) {
				F(e.$$.fragment, i), (t = !1);
			},
			d(i) {
				ie(e, i);
			}
		}
	);
}
function hl(l, e, t) {
	let i, r;
	_e(l, ft, (o) => t(1, (r = o)));
	let { $$slots: s = {}, $$scope: a } = e;
	return (
		(l.$$set = (o) => {
			'$$scope' in o && t(3, (a = o.$$scope));
		}),
		(l.$$.update = () => {
			l.$$.dirty & 2 && t(0, (i = r));
		}),
		[i, r, s, a]
	);
}
class vl extends w {
	constructor(e) {
		super(), x(this, e, hl, dl, $, {});
	}
}
export { vl as component, bl as universal };
