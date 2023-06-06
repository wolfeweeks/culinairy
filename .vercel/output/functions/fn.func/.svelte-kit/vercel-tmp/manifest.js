export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.32127376.js","app":"_app/immutable/entry/app.f311e580.js","imports":["_app/immutable/entry/start.32127376.js","_app/immutable/chunks/index.fb0448de.js","_app/immutable/chunks/singletons.bed2a0a6.js","_app/immutable/chunks/index.3dad9bbf.js","_app/immutable/chunks/paths.898aa642.js","_app/immutable/entry/app.f311e580.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.fb0448de.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: () => import('../output/server/entries/endpoints/_server.ts.js')
			},
			{
				id: "/generate",
				pattern: /^\/generate\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: () => import('../output/server/entries/endpoints/generate/_server.ts.js')
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/try",
				pattern: /^\/try\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/[user]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"user","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/[user]/cookbook",
				pattern: /^\/([^/]+?)\/cookbook\/?$/,
				params: [{"name":"user","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
