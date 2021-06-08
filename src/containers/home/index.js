import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import CartButton from '../../components/tabs/cart-button';
import ContactUs from './contact-us';
import Products from './products';
import AboutUs from './about-us';
import Cart from './cart';
import React from 'react';

const Home = () => {

	return (
		<div>
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
					</Switch>
				</div>
			</Router>
		</div>
	)
};

export default Home;
