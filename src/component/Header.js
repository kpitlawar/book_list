import React from "react";
import { View, Image, SafeAreaView, TouchableOpacity, StatusBar, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Header = ({
    label,
    onBack,
    cartIcon,
    cartCount
}) => {


    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} hidden={false} />

            <View style={{ flexDirection: 'row', height: hp('12%'), backgroundColor: 'white', width: "100%" }}>
                <View style={{ flex: 1, marginLeft: wp('1%'), marginRight: wp('2%'), marginTop: hp('3%') }}>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                        {
                            onBack ?
                                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: wp('2%') }} onPress={() => {
                                    onBack()
                                }}>
                                    <Image style={[{ width: wp('8%'), height: hp('10%'), aspectRatio: 1, tintColor: 'black' }]}
                                        fadeDuration={0}
                                        source={require('../images/arrow.png')} />

                                </TouchableOpacity> : null
                        }
                        <Text style={{ textAlign: onBack ? null : "left", width: onBack ? wp('70%') : wp('75%'), marginLeft: wp('2%'), color: 'black', fontSize: hp('3%'), fontWeight: "bold" }}>{label}</Text>
                        {
                            cartIcon ?
                                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: wp('2%') }} onPress={() => {
                                    cartIcon()
                                }}>
                                    <Text style={{ marginTop: hp('-1.5%'), textAlign: 'center', height: hp('5%'), width: hp('5%'), color: 'white', fontSize: hp('2%'), fontWeight: "bold", backgroundColor: 'orange', padding: wp('2%'), borderRadius: hp('5%') }}>{cartCount}</Text>
                                    <Image style={[{ width: wp('6%'), aspectRatio: 1, tintColor: 'blue' }]}
                                        fadeDuration={0}
                                        source={require('../images/cart.png')} />

                                </TouchableOpacity> : null
                        }
                    </View>

                </View>
            </View>

        </SafeAreaView>

    )
}
export default Header;
