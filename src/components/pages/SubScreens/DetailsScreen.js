import React from 'react'
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
    Modal,
    LogBox
} from 'react-native'

import { COLORS, FONTS, SIZES, icons, images, data } from '../../exports'

import { TextReadMore } from "../../components";

import Animated from 'react-native-reanimated';

const DetailsScreen = ({ route, navigation, style }) => {

    const [coffee, setCoffee] = React.useState("");

    React.useEffect(() => {

        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        let { item } = route.params;

        setCoffee(item)

    })


    const [selectedCategory, setSelectedCategory] = React.useState(null)

    function onSelectCategory(category) {


        setSelectedCategory(category)
    }


    function renderHeader() {
        return (
            <View style={{ padding: SIZES.padding, marginTop: 10 }}>
                <Animated.View
                    style={[{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }, style]}>
                    <TouchableOpacity
                        style={{
                            width: 45,
                            height: 45,
                            backgroundColor: COLORS.secondary,
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={() => { navigation.goBack() }}
                    >
                        <Image
                            source={icons.backward}
                            resizeMode="contain"
                            style={{ width: 25, height: 25, tintColor: COLORS.lightGray3 }}

                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: 45,
                            height: 45,
                            backgroundColor: COLORS.secondary,
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={icons.favourite}
                            resizeMode="contain"
                            style={{ width: 20, height: 20, tintColor: COLORS.lightGray3 }}

                        />
                    </TouchableOpacity>
                </Animated.View>




            </View>
        )
    }

    function renderRestaurant() {
        return (
            <View>
                <View style={{

                    marginTop: -140,
                    backgroundColor: '#0000004D',
                    width: "100%",
                    height: 140,
                    borderRadius: 30
                }}>
                    <View style={{ flex: 1, flexDirection: 'row', width: '100%', padding: SIZES.padding }}>
                        <View style={{ width: '50%' }}>
                            <Text style={{ color: COLORS.white, fontSize: 25 }}>{coffee.name}</Text>
                            <Text style={{ color: COLORS.white }}>With Oat Milk</Text>

                            {/* rating */}
                            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={icons.star} resizeMode='contain' style={{ width: 25, height: 25 }} />
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
                                    <Text style={{ color: COLORS.white, fontSize: 20 }}>{coffee.rating}</Text>

                                </View>

                            </View>
                        </View>

                        <View style={{ flex: 1, width: '50%', justifyContent: 'center', }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <View style={{ width: 50, height: 50, backgroundColor: "#000000FF", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={icons.coffee}
                                        style={{ width: 20, height: 20, tintColor: COLORS.lightGreen }}
                                    />
                                    <Text style={{ color: COLORS.white, fontSize: 8, padding: 2 }}>Coffee</Text>
                                </View>
                                <View style={{ width: 50, height: 50, backgroundColor: "#000000FF", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={icons.drop}
                                        style={{ width: 20, height: 20, tintColor: COLORS.lightGreen }}
                                    />
                                    <Text style={{ color: COLORS.white, fontSize: 8, padding: 2 }}>Milk</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                                <View style={{ width: 120, height: 40, backgroundColor: "#000000FF", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: COLORS.white, fontSize: 10 }}>Medium Roasted</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>

            </View>
        )
    }

    function renderDescription() {
        return (
            <View style={{ padding: SIZES.padding }}>
                <View style={{ width:'100%'}}>
                    <Text style={{ color: COLORS.white, fontSize: 20,  }}>Description</Text>
                
                    <TextReadMore
                        text="A Cappuccino is a coffee-based drink made primarily from Espresso and It is one of the most popular drinks in the world, and can be prepared and presented in a variety of ways "
                        textStyle={{
                            color: COLORS.white,
                            textAlign: 'justify',
                            lineHeight: 20,
                            marginTop:5
                        }}
                        readMoreStyle={{ color:COLORS.lightGreen}}
                        
                    />
                </View>

                {/* size */}
                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: COLORS.white, fontSize: 20 }}>Size</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        {
                            data.Size.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index}
                                        style={{}}
                                        onPress={() => onSelectCategory(item)}
                                    >
                                        <View style={{
                                            borderColor: (selectedCategory?.id == item.id) ? COLORS.lightGreen : COLORS.primary,
                                            borderWidth: 1,
                                            height: 40,
                                            width: 90,
                                            backgroundColor: COLORS.secondary,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 10
                                        }}>
                                            <Text style={{ color: COLORS.white }}>{item.size}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        )
    }

    function renderButton() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '40%', marginTop: -25 }}>
                    <Text style={{ color: COLORS.white, fontSize: 15 }}>Price</Text>
                    <Text style={{ color: COLORS.white, fontSize: 25, }}><Text style={{ color: COLORS.lightGreen }}>$</Text> {coffee.amount}</Text>
                </View>
                <View style={{ width: '60%' }}>
                    <TouchableOpacity style={{ width: '90%', height: 50, backgroundColor: COLORS.lightGreen, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: COLORS.white, fontSize: 20 }}>
                            Buy Now
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <ImageBackground
                source={coffee.photo}
                resizeMode="cover"
                imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
                style={{ flex: 3, width: '100%', height: "100%" }}>
                {renderHeader()}
            </ImageBackground>
            <View style={{ flex: 2, backgroundColor: COLORS.primary, width: '100%' }}>
                {renderRestaurant()}
                <ScrollView>
                {renderDescription()}
                {renderButton()}
                <View style={{marginTop:10}} />
                </ScrollView>
            </View>

        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: "100%",
        // height: "100%",

        backgroundColor: COLORS.primary,


    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

