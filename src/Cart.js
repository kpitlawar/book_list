import { View, Image, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import color from '../src/component/Color';
import { withNavigation, StackActions, NavigationActions } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import React from 'react';
import Header from '../src/component/Header';
import { connect } from 'react-redux'
import { Toast } from 'native-base';

class Cart extends React.Component {

    removeItemfromCart(item) {
        this.props.removeBookfromCart(item)
        Toast.show({
            text: "Book removed from cart",
            duration: 1000
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header label="Cart" onBack={() => { this.props.navigation.goBack() }} />
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: wp('2%') }}>
                    <Text style={{ textAlign: 'center', height: hp('5%'), width: hp('5%'), color: 'white', fontSize: hp('2%'), fontWeight: "bold", backgroundColor: 'orange', padding: wp('2%'), borderRadius: hp('2%') }}>{this.props.cartItems.length}</Text>
                    <Text style={{ marginLeft: wp('3%'), color: 'black', fontWeight: 'bold', fontSize: hp('2.5%') }}>Added</Text>
                </View>
                <View style={{ marginStart: hp('1.2%') }}>


                    <View style={[{ flexDirection: 'column' }]}>
                        {
                            this.props.cartItems.length > 0 ?
                                <FlatList
                                    data={this.props.cartItems}
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
                                                    <View style={{ flexDirection: 'column', width: wp('60%'), }}>
                                                        <View style={{ flexDirection: 'row' }}>

                                                            <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold' }}>{item.name}</Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row' }}>

                                                            <Text style={{ color: color.grayColor, fontSize: hp('2%') }}>{item.author}</Text>
                                                        </View>
                                                    </View>
                                                    <TouchableOpacity onPress={() => { this.removeItemfromCart(item) }} style={{ width: wp('10%'), height: hp('6%'), alignItems: 'flex-end' }}>
                                                        <Image style={[{ width: wp('6%'), height: wp('6%'), tintColor: 'blue' }]}
                                                            source={require('../src/images/remove.png')} />
                                                    </TouchableOpacity>

                                                </View>

                                            </View>
                                        )
                                    }}
                                    keyExtractor={item => item.id.toString()}
                                /> : <View style={{ height: hp('100%'), justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: hp('2%'), fontWeight: 'bold' }}>No items in your cart</Text>
                                </View>
                        }
                    </View>
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
        removeBookfromCart: (book) => dispatch({ type: 'RemoveBook_From_Cart', payload: book })
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
        width: wp('10%'), height: hp('10%')
    },
});



export default connect(mapStateToProps, mapDispatchToProps)(Cart);