
import { boot } from 'quasar/wrappers'
import { useAuth } from 'src/composables/auth'

export default boot(({ app, store, router }) => {
	const auth = useAuth(store);

	app.config.globalProperties.$auth = auth;
	
	
	router.beforeEach((to, from, next) => {
		const user = auth.user;
		let path = to.path;
		let authRequired = auth.pageRequiredAuth(path);
		//authenticate user
		if (authRequired && !user) {
			//user is not logged. redirect to login
			return next({ path: '/',  query: { nexturl: to.fullPath } });
		}

		if(user && to.name == "index"){
			//already logged in, show home when try to access index page
			return next({ path: "/home"});
		}

		//navigate to redirect url if available
		if(to.name == "home" && to.query.nexturl){
			return next({ path: to.query.nexturl});
		}

		//continue to specified route
		next();
	});

});
