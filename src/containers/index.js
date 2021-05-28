import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import ContactUs from './contact-us';
import Products from './products';
import AboutUs from './about-us';
import React from 'react';
import SignUp from './components/singup/Signup';
import SignIn from './components/signin/SignIn';
import Account from './components/account/Account';


const App = () => {

	return (
		<header>
			<div className={'header-div'}>
                <span>
                    <h1>E-commerse</h1>
                </span>
			</div>
		<div className ={'menubar-signin'}>
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
						</ul>
					</div>

					<Switch>
						<Route path='/products'>
							<Products count={1}/>
						</Route>
						<Route path='/aboutUs'>
							<AboutUs/>
						</Route>
						<Route path='/contactUs'>
							<ContactUs/>
						</Route>
					</Switch>
				</div>
			</Router>
			<Router>
				<div>
					<div className='menubar2'>
						<ul>
							<li>
								<Link to='/products'>SignIn</Link>
							</li>
							<li>
								<Link to='/aboutUs'>SignUp</Link>
							</li>
							<li>
								<Link to='/contactUs'>Account</Link>
							</li>
						</ul>
					</div>

					<Switch>
						<Route path='/SignIn'>
							<SignIn/>
						</Route>
						<Route path='/SignUp'>
							<SignUp/>
						</Route>
						<Route path='/Account'>
							<Account/>
						</Route>
					</Switch>
				</div>
			</Router>
		</div>	
		</header>
	)
}

export default App;
