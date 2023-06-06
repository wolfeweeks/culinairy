import { S as o, i, s as r } from '../chunks/index.2924c971.js';
function c(a, t, s) {
	let { data: e } = t;
	return (
		(a.$$set = (n) => {
			'data' in n && s(0, (e = n.data));
		}),
		[e]
	);
}
class u extends o {
	constructor(t) {
		super(), i(this, t, c, null, r, { data: 0 });
	}
}
export { u as component };
