import Loading from '../../components/shared/loading';
import ProductsCtrl from '../../controllers/products';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../store/actions';
import React, {useEffect} from 'react';
// import icon from '../../img/carticon.png';
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
		<div className = {'prod'}>
			{products.map(product => (
				<div key={product.id} className = {'el'}>
					<img src={product.imageUrl} width='7px' height='7px'/>
					<h5>{product.title}</h5>
					<p>{product.description}</p>
					<p>{product.price}</p>
					<button onClick={() => {
						dispatch(addToCart(product))
					}}>
					</button>
					
				</div>
			))}
		</div>
	)
}

export default Products;
