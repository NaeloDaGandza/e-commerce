import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import CartButton from '../components/tabs/cart-button';
import {isLoggedInSelector} from '../store/selectors';
import Loading from '../components/shared/loading';
import React, {useEffect, useRef} from 'react';
import SignIn from './authentication/sign-in';
import SignUp from './authentication/sign-up';
import AuthCtrl from '../controllers/auth';
import ContactUs from './home/contact-us';
import {useSelector} from 'react-redux';
import Products from './home/products';
import AboutUs from './home/about-us';
import Cart from './home/cart';
import SignOut from './components/signout/SignOut';

const App = () => {

	const isLoggedIn = useSelector(isLoggedInSelector);

	useEffect(() => {
		AuthCtrl.checkLoginStatus();
	}, []);

	if (isLoggedIn === null) {
		return (<Loading/>);
	}

	return (
		<header>
			<div className={'header-div'}>
                <span>
                    <h1>E-commerse</h1>
                </span>
			</div>
			<Router>
				<div>
					{isLoggedIn && (
						<div className='menubar'>
							<ul>
								<li>
									<Link to='/products'>Products</Link>
								</li>
								<li>
									<Link to='/aboutUs'>About us</Link>
								</li>
								<li>
									<Link to='/contactUs'>Contact us</Link>
								</li>
								<li>
									<CartButton/>
								</li>
							</ul>
						</div>
					)}

					<Switch>
						<Route
							exact
							path='/'
							render={() => (
								isLoggedIn ?
									<Redirect to='/products'/> :
									<Redirect to='/signIn'/>
							)}
						/>

						<Route path='/products'>
							<Products/>
						</Route>
						<Route path='/aboutUs'>
							<AboutUs/>
						</Route>
						<Route path='/contactUs'>
							<ContactUs/>
						</Route>
						<Route path='/cart'>
							<Cart/>
						</Route>
						<Route path='/signIn'>
							<SignIn/>
						</Route>
						<Route path='/signUp'>
							<SignUp/>
						</Route>
					</Switch>
				</div>
			</Router>
		</header>
	)
}

export default App;
