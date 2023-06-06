import {
	S as Z,
	i as $,
	s as ee,
	k as g,
	q as A,
	a as I,
	l as m,
	m as k,
	r as B,
	h as d,
	c as R,
	n as E,
	b as X,
	E as a,
	u as Y,
	X as G,
	a2 as J,
	Y as K
} from '../chunks/index.2924c971.js';
import { S as te, R as le } from '../chunks/stores.4a9da6ad.js';
function M(o, e, s) {
	const n = o.slice();
	return (n[3] = e[s]), (n[5] = s), n;
}
function Q(o, e, s) {
	const n = o.slice();
	return (n[6] = e[s]), n;
}
function T(o) {
	let e,
		s = o[6] + '',
		n,
		u;
	return {
		c() {
			(e = g('li')), (n = A(s)), (u = I()), this.h();
		},
		l(c) {
			e = m(c, 'LI', { class: !0 });
			var i = k(e);
			(n = B(i, s)), (u = R(i)), i.forEach(d), this.h();
		},
		h() {
			E(
				e,
				'class',
				'bg-surface-200 dark:bg-secondary-700 border-token border-surface-200 dark:border-surface-100 rounded-token p-2 font-light'
			);
		},
		m(c, i) {
			X(c, e, i), a(e, n), a(e, u);
		},
		p(c, i) {
			i & 1 && s !== (s = c[6] + '') && Y(n, s);
		},
		d(c) {
			c && d(e);
		}
	};
}
function W(o) {
	let e,
		s,
		n = o[5] + 1 + '',
		u,
		c,
		i,
		S,
		b = o[3] + '',
		L,
		H;
	return {
		c() {
			(e = g('li')),
				(s = g('span')),
				(u = A(n)),
				(c = A('.')),
				(i = I()),
				(S = g('span')),
				(L = A(b)),
				(H = I()),
				this.h();
		},
		l(_) {
			e = m(_, 'LI', { class: !0 });
			var p = k(e);
			s = m(p, 'SPAN', { class: !0 });
			var v = k(s);
			(u = B(v, n)), (c = B(v, '.')), v.forEach(d), (i = R(p)), (S = m(p, 'SPAN', { class: !0 }));
			var D = k(S);
			(L = B(D, b)), D.forEach(d), (H = R(p)), p.forEach(d), this.h();
		},
		h() {
			E(s, 'class', 'text-lg font-semibold'),
				E(S, 'class', 'flex-auto'),
				E(e, 'class', 'p-3 bg-surface-200-700-token hover:bg-surface-300-600-token');
		},
		m(_, p) {
			X(_, e, p), a(e, s), a(s, u), a(s, c), a(e, i), a(e, S), a(S, L), a(e, H);
		},
		p(_, p) {
			p & 1 && b !== (b = _[3] + '') && Y(L, b);
		},
		d(_) {
			_ && d(e);
		}
	};
}
function se(o) {
	let e,
		s,
		n = o[0].name + '',
		u,
		c,
		i,
		S,
		b,
		L,
		H,
		_,
		p,
		v,
		D,
		y,
		C,
		N,
		O,
		U,
		P,
		V = o[0].ingredients,
		h = [];
	for (let l = 0; l < V.length; l += 1) h[l] = T(Q(o, V, l));
	let w = o[0].instructions,
		f = [];
	for (let l = 0; l < w.length; l += 1) f[l] = W(M(o, w, l));
	return {
		c() {
			(e = g('div')),
				(s = g('h1')),
				(u = A(n)),
				(c = I()),
				(i = g('br')),
				(S = I()),
				(b = g('h3')),
				(L = A('Ingredients:')),
				(H = I()),
				(_ = g('div')),
				(p = I()),
				(v = g('ul'));
			for (let l = 0; l < h.length; l += 1) h[l].c();
			(D = I()),
				(y = g('br')),
				(C = I()),
				(N = g('h3')),
				(O = A('Instructions:')),
				(U = I()),
				(P = g('ol'));
			for (let l = 0; l < f.length; l += 1) f[l].c();
			this.h();
		},
		l(l) {
			e = m(l, 'DIV', { class: !0 });
			var r = k(e);
			s = m(r, 'H1', { class: !0 });
			var t = k(s);
			(u = B(t, n)),
				t.forEach(d),
				(c = R(r)),
				(i = m(r, 'BR', {})),
				(S = R(r)),
				(b = m(r, 'H3', { class: !0 }));
			var x = k(b);
			(L = B(x, 'Ingredients:')),
				x.forEach(d),
				(H = R(r)),
				(_ = m(r, 'DIV', { class: !0 })),
				k(_).forEach(d),
				(p = R(r)),
				(v = m(r, 'UL', { class: !0 }));
			var j = k(v);
			for (let q = 0; q < h.length; q += 1) h[q].l(j);
			j.forEach(d), (D = R(r)), (y = m(r, 'BR', {})), (C = R(r)), (N = m(r, 'H3', { class: !0 }));
			var z = k(N);
			(O = B(z, 'Instructions:')), z.forEach(d), (U = R(r)), (P = m(r, 'OL', { class: !0 }));
			var F = k(P);
			for (let q = 0; q < f.length; q += 1) f[q].l(F);
			F.forEach(d), r.forEach(d), this.h();
		},
		h() {
			E(s, 'class', 'h1 font-bold'),
				E(b, 'class', 'h3 font-semibold'),
				E(_, 'class', 'mb-1'),
				E(v, 'class', 'grid lg:grid-cols-3 md:grid-cols-2 gap-2 md:w-[50%]'),
				E(N, 'class', 'h3 font-semibold'),
				E(P, 'class', 'list'),
				E(e, 'class', 'h-full rounded-token p-4');
		},
		m(l, r) {
			X(l, e, r),
				a(e, s),
				a(s, u),
				a(e, c),
				a(e, i),
				a(e, S),
				a(e, b),
				a(b, L),
				a(e, H),
				a(e, _),
				a(e, p),
				a(e, v);
			for (let t = 0; t < h.length; t += 1) h[t] && h[t].m(v, null);
			a(e, D), a(e, y), a(e, C), a(e, N), a(N, O), a(e, U), a(e, P);
			for (let t = 0; t < f.length; t += 1) f[t] && f[t].m(P, null);
		},
		p(l, [r]) {
			if ((r & 1 && n !== (n = l[0].name + '') && Y(u, n), r & 1)) {
				V = l[0].ingredients;
				let t;
				for (t = 0; t < V.length; t += 1) {
					const x = Q(l, V, t);
					h[t] ? h[t].p(x, r) : ((h[t] = T(x)), h[t].c(), h[t].m(v, null));
				}
				for (; t < h.length; t += 1) h[t].d(1);
				h.length = V.length;
			}
			if (r & 1) {
				w = l[0].instructions;
				let t;
				for (t = 0; t < w.length; t += 1) {
					const x = M(l, w, t);
					f[t] ? f[t].p(x, r) : ((f[t] = W(x)), f[t].c(), f[t].m(P, null));
				}
				for (; t < f.length; t += 1) f[t].d(1);
				f.length = w.length;
			}
		},
		i: G,
		o: G,
		d(l) {
			l && d(e), J(h, l), J(f, l);
		}
	};
}
function ae(o, e, s) {
	let n, u, c;
	return (
		K(o, te, (i) => s(1, (u = i))),
		K(o, le, (i) => s(2, (c = i))),
		(o.$$.update = () => {
			o.$$.dirty & 6 && s(0, (n = c[u]));
		}),
		[n, u, c]
	);
}
class oe extends Z {
	constructor(e) {
		super(), $(this, e, ae, se, ee, {});
	}
}
export { oe as component };
