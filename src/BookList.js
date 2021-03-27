import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import React from 'react';
import { withNavigation, StackActions, NavigationActions } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Header from '../src/component/Header';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import color from '../src/component/Color';
import { Toast } from 'native-base';

class BookList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    name: 'The Book Thief',
                    author: 'Markus Zusak',
                    imgUrl:
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522157426l/19063._SY475_.jpg'
                },
                {
                    id: 2,
                    name: 'Sapiens',
                    author: 'Yuval Noah Harari',
                    imgUrl:
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1420585954l/23692271.jpg'
                },
                {
                    id: 3,
                    name: 'Crime and Punishment',
                    author: 'Fyodor Dostoyevsky',
                    imgUrl:
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1382846449l/7144.jpg'
                },
                {
                    id: 4,
                    name: 'No Longer Human',
                    author: 'Osamu Dazai',
                    imgUrl:
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1422638843l/194746.jpg'
                },
                {
                    id: 5,
                    name: 'Atomic Habits',
                    author: 'James Clear',
                    imgUrl:
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535115320l/40121378._SY475_.jpg'
                },
                {
                    id: 7,
                    name: 'Dune',
                    author: 'Frank Herbert',
                    imgUrl:
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1434908555l/234225._SY475_.jpg'
                },
                {
                    id: 8,
                    name: 'Atlas Shrugged',
                    author: 'Ayn Rand',
                    imgUrl:
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405868167l/662.jpg'
                }
            ]
        }
    }


    addToCart(item) {
        var checkCart = _.find(this.props.cartItems, function (o) { return o.id == item.id });
        if (checkCart) {
            this.getMessage("This book is already there in cart")
        }
        else {
            this.props.addBookToCart(item)
            this.getMessage("Book added to cart")
        }
    }

    getMessage(message) {
        Toast.show({
            text: message,
            duration: 1000
        })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F8F8F8' }}>
                <Header cartCount={this.props.cartItems.length} cartIcon={() => { this.props.navigation.navigate("Cart") }} label="Book Shop" />
                <View style={{ flexDirection: 'column', margin: wp('2%'), marginBottom: hp('13%') }}>
                    {
                        this.state.books.length > 0 ?
                            <FlatList
                                data={this.state.books}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={styles.card}>
                                            <Image
                                                style={styles.imageStyle}
                                                resizeMode='contain'
                                                source={{
                                                    uri: item.imgUrl,
                                                }} />
                                            <View style={{ margin: hp('3%'), flexDirection: 'row' }}>
                                                <View style={{ flexDirection: 'column', width: wp('58%'), }}>
                                                    <View style={{ flexDirection: 'row' }}>

                                                        <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold' }}>{item.name}</Text>
                                                    </View>
                                                    <View style={{ flexDirection: 'row' }}>

                                                        <Text style={{ color: color.grayColor, fontSize: hp('2%') }}>{item.author}</Text>
                                                    </View>
                                                </View>
                                                <TouchableOpacity onPress={() => { this.addToCart(item) }} style={{ width: wp('10%'), height: hp('6%'), alignItems: 'flex-end' }}>
                                                    <Image style={[{ width: wp('6%'), height: wp('6%'), tintColor: 'blue' }]}
                                                        source={require('../src/images/add.png')} />
                                                </TouchableOpacity>

                                            </View>

                                        </View>
                                    )
                                }}
                                keyExtractor={item => item.id.toString()}
                            /> : <View style={{ height: hp('100%'), justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: hp('2%'), fontWeight: 'bold' }}>There are no items in your cart</Text>
                            </View>
                    }

                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBookToCart: (book) => dispatch({ type: 'AddBook_To_Cart', payload: book })
    }
}

const styles = StyleSheet.create({
    card: {
        borderRadius: hp('2%'),
        backgroundColor: 'white',
        marginTop: hp('2%'),
        flexDirection: 'row',
        width: wp('95%'),
    },
    imageStyle: {
        margin: hp('2%'),
        width: wp('10%'),
        height: hp('10%')
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(BookList);