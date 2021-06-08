import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import CartButton from '../components/tabs/cart-button';
import SignIn from './authentication/sign-in';
import SignUp from './authentication/sign-up';
import ContactUs from './home/contact-us';
import Products from './home/products';
import AboutUs from './home/about-us';
import Cart from './home/cart';
import React, { useEffect } from 'react';

const App = () => {

	// TODO: call checkLoginStatus in useEffect
	useEffect(() => {
		document.checkLoginStatus()
	}

	)
	// TODO: check isLoggedIn and show loading

	return (
		<header>
			<div className={'header-div'}>
                <span>
                    <h1>E-commerse</h1>
                </span>
			</div>
			<Router>
				<div>
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

					<Switch>
						<Route
							exact
							path='/'
							render={() => {
								return isLoggedIn ?
									<Redirect to='/products'/> :
									<Redirect to='/signIn'/>
							}}
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
