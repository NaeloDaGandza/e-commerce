import {deleteItemFromCart, removeFromCart} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import React from 'react';

const Cart = () => {

	const cartItems = useSelector((state) => (
		state.cartItems
	));

	const dispatch = useDispatch();

	if (cartItems.length === 0) {
		return (
			<div>
				Cart is empty!
			</div>
		)
	}

	return (
		<div className ={'prod'}>
			{cartItems.map(item => (
				<div key={item.id}>
					<img src={item.imageUrl} width='100px' height='100px'/>
					<h5>{item.title}</h5>
					<p>{item.description}</p>
					<span>{item.count}</span>
					<button onClick={() => {
						dispatch(removeFromCart(item))
					}}>
						Remove item from cart
					</button>
					<button onClick={() => {
						dispatch(deleteItemFromCart(item))
					}}>
						Delete Item
					</button>
				</div>
			))}
		</div>
	);
};

export default Cart;
