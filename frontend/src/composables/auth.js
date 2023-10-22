
import { utils } from 'src/utils';
import { useAuthStore } from 'src/stores/auth';

const publicPages = ['/', '/index', '/error']; //public pages which do not need authentation
const excludedRoutes = []; //public pages which do not need authentation
const roleAbilities = {
  "admin": [],
  "user": []
};

export function useAuth() {
	const store = useAuthStore();

	const user = store.state.user;
	const userRole = store.state.userRole;

	let isLoggedIn = false;
	let userName = '';
	let userEmail = '';
	let userId = '';
	let userPhoto = '';
	let userPhone = '';
	
	setUserData();

	function setUserData(){
		if(user){
			isLoggedIn = true;
			userName = user.usuario;
			userId = user.id;
			userEmail = user.email;
			userPhoto = user.foto;
			userPhone = user.telefono;
		}
	}

	async function getUserData(){
		const token = store.getLoginToken();
		//Token is available, user might still be logged in
		if (token) {
			try {
				//fetch user data for the first time and saves in the store
				await store.getUserData();
			}
			catch (e) {
				store.logout(); //token must have expired
			}
		}
		return { 
			user: store.state.user, 
			userRole: store.state.userRole, 
			userPages: store.state.userPages 
		};
	}

	function login(payload) {
		return store.login(payload);
	}

	function saveLoginData(loginData, rememberUser) {
		const payload =  { loginData, rememberUser };
		store.saveLoginData(payload);
	}
	
	function logout() {
		store.logout();
	}

	const pageRequiredAuth = function(path){
		let pagePath = utils.getPagePath(path);
		let routePath = utils.getRoutePath(path);
		let authRequired = true;
		if(publicPages.includes(pagePath) || excludedRoutes.includes(routePath)){
			authRequired = false;
		}
		return authRequired
	}

	const canView = function(path){
		if(path){
			let routePath = utils.getRoutePath(path);
			const userPages = store.state.userPages;
			return userPages.includes(routePath) || excludedRoutes.includes(routePath);
		}
		return true;
	}

	const canManage = function(page, userRecId){
		if(userRole){
			let userRoleAbilities = roleAbilities[userRole.toLowerCase()] || [];
			if (userRoleAbilities.includes(page)){
				return true;
			}
		}
		return userRecId == userId;
	}

	function isOwner(userRecId) {
		if(user){
			return userRecId == userId;
		}
		return false;
	}

	

	return {
		store,
		isLoggedIn,
		user,
		userName,
		userId,
		userEmail,
		userPhone,
		userPhoto,
		userRole,
		getUserData,
		login,
		logout,
		saveLoginData,
		pageRequiredAuth,
		canView,
		canManage,
		isOwner,
		
	}
}
