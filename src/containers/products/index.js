import Loading from '../../components/shared/loading';
import ProductsCtrl from '../../controllers/products';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../store/actions';
import React, {useEffect} from 'react';

const Products = () => {

	const products = useSelector((state) => (
		state.products
	));

	const dispatch = useDispatch();

	useEffect(() => {
		ProductsCtrl.getProducts();
	}, [])

	if (products === null) {
		return <Loading/>;
	}

	return (
		<div  className = {'product-card'}>
			{products.map(product => (
				<div key={product.id}>
					<img src={product.imageUrl} width='250px' height='250px'/>
					<h5>{product.title}</h5>
					<p>{product.description}</p>
					<button onClick={() => {
						dispatch(addToCart(product))
					}}>
						Add to cart
					</button>
				</div>
			))}
		</div>
	)
}

export default Products;
