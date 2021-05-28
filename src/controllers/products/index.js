import {setProducts} from '../../store/actions';
import store from '../../store';

const ProductsCtrl = {};

const products = [
	{
		id: 1,
		title: 'some title 1',
		description: 'description 1',
		imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
	},
	{
		id: 2,
		title: 'some title 2',
		description: 'description 2',
		imageUrl: 'https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg'
	}
];

ProductsCtrl.getProducts = () => {
	store.dispatch(setProducts(products));
};

export default ProductsCtrl;
