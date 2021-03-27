import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import BookList from './BookList';
import Cart from './Cart';

const Navigator = createStackNavigator(
    {
        BookList,
        Cart
    },
    {
        initialRouteName: 'BookList',
        defaultNavigationOptions: {
            headerShown: false
        }
    }
);

export default createAppContainer(Navigator);