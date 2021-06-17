import {setProducts} from '../../store/actions';
import store from '../../store';

const ProductsCtrl = {};

const products = [
	{
		id: 1,
		title: 'some title 1',
		description: 'description 1',
		imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/711RJEthqtL._AC_UL1500_.jpg'
	},
	{
		id: 2,
		title: 'some title 2',
		description: 'description 2',
		imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F08%2Fba%2F08ba5cdc2035365380ed660b024af1be036d6d82.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_bestbasics%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]'
	},
	{
		id: 3,
		title: 'some title 3',
		description: 'description 3',
		imageUrl: 'https://sportland.com/media/catalog/product/cache/e4932a31a34e41e69084883e2b608489/N/B/NB16158_500_1a17.jpg'
	},
	{
		id: 4,
		title: 'some title 4',
		description: 'description 4',
		imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F52%2F41%2F524154ed4440c6fa95df55a8c60f9894fe7d674d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_accessories_hatsandgloves%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
	}
];

ProductsCtrl.getProducts = () => {
	setTimeout(() => {
		store.dispatch(setProducts(products));
	}, 1000);
};

export default ProductsCtrl;
