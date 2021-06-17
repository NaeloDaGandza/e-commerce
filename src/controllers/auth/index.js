import {setLoggedIn} from '../../store/actions';
import store from '../../store';

const AuthCtrl = {};

const username1 = 'Admin';
const password1 = '123';
const token = 'asdasd123123sadae12313ads';

AuthCtrl.checkLoginStatus = () => {
	setTimeout(() => {
		const token = localStorage.getItem('token');

		if (token) {
			store.dispatch(setLoggedIn(true));
		} else {
			store.dispatch(setLoggedIn(false));
		}
	}, []);
};

AuthCtrl.signIn = (username, password) => {
	if (username === username1 && password === password1) {
		localStorage.setItem('token', token);

		store.dispatch(setLoggedIn(true));
	} else {
		// TODO: Handle validations
		AuthCtrl.signOut = () => {
			localStorage.removeItem('token');
			store.dispatch(setLoggedIn(false));
		}
		alert('Invalid username/password');
	}
};

export default AuthCtrl;
