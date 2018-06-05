import { createStackNavigator } from 'react-navigation'

import Shop from './screens/Shop'
import Product from './screens/Product'

export default createStackNavigator({
	Shop: {
		screen: Shop
	},
	Product: {
		screen: Product
	}
},
{
	initialRouteName: 'Shop',
	headerMode: 'none'
});