export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.7fee0ceb.js","app":"_app/immutable/entry/app.a74946a0.js","imports":["_app/immutable/entry/start.7fee0ceb.js","_app/immutable/chunks/index.fb0448de.js","_app/immutable/chunks/singletons.6b1afe32.js","_app/immutable/chunks/index.3dad9bbf.js","_app/immutable/chunks/paths.bfc8926e.js","_app/immutable/entry/app.a74946a0.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.fb0448de.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
