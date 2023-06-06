import { S as s, i as r, s as l } from '../chunks/index.2924c971.js';
const u = async () => ({}),
	d = Object.freeze(
		Object.defineProperty({ __proto__: null, load: u }, Symbol.toStringTag, { value: 'Module' })
	);
function i(e, t, o) {
	let { data: a } = t;
	return (
		(e.$$set = (n) => {
			'data' in n && o(0, (a = n.data));
		}),
		[a]
	);
}
class _ extends s {
	constructor(t) {
		super(), r(this, t, i, null, l, { data: 0 });
	}
}
export { _ as component, d as universal };
