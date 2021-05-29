import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Animated,
    TextInput,
    ScrollView
} from "react-native";

import { COLORS, FONTS, SIZES, icons, images, data } from '../exports'

const Home = ({ navigation }) => {


    // Dummy Datas



    const categoryData = [
        {
            id: 1,
            name: "Cappuccino",
            icon: icons.rice_bowl,
        },
        {
            id: 2,

            name: "Espresso",
            icon: icons.noodle,
        },

        {
            id: 3,
            name: "Latte",
            icon: icons.salad,
        },
        {
            id: 4,
            name: "Flat West",
            icon: icons.hamburger,
        },



    ]




    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(data.coffeeList)



    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = data.coffeeList.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader() {
        return (

            <View style={{ padding: SIZES.padding, marginTop: 20 }}>
                <Animated.View
                    style={[{ flexDirection: 'row', justifyContent: 'space-between', }]}>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',

                            borderRadius: 50,
                            backgroundColor: COLORS.secondary,

                            width: 45,
                            height: 45
                        }}
                        onPress={() => { navigation.openDrawer() }}
                    >
                        <Image
                            source={icons.menu}
                            resizeMode="contain"
                            style={{ width: 20, height: 20, tintColor: COLORS.lightGray3 }}

                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',

                            borderRadius: 50,
                            backgroundColor: COLORS.secondary,

                            width: 45,
                            height: 45
                        }}
                       
                    >
                        <Image
                            source={icons.profile}
                            resizeMode="contain"
                            style={{ width: 25, height: 25, borderRadius:10 ,tintColor:COLORS.lightGray3}}

                        />
                    </TouchableOpacity>

                </Animated.View>
                <View style={{ marginTop: 40 }}>
                    <Text style={{ color: COLORS.white, fontSize: 25, }}>Find the best</Text>
                    <Text style={{ color: COLORS.white, fontSize: 25, ...FONTS.h1, fontWeight: 'bold' }}>coffee for you</Text>
                </View>

                {/* search */}

                <View style={{ justifyContent: 'center', alignItems: "center", marginTop: 20 }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'center',
                        alignItems: "center",
                        backgroundColor: COLORS.secondary,
                        width: "100%",
                        borderRadius: 12,
                        marginHorizontal: 20,

                        ...styles.shadow
                    }}>
                        <View style={{ marginLeft: 10 }}>
                            <Image
                                source={icons.search}
                                style={{ height: 20, width: 20, tintColor: COLORS.lightGray3 }}
                            />
                        </View>
                        <TextInput
                            placeholder="Search your fav food"
                            placeholderTextColor={COLORS.lightGray3}
                            style={{

                                fontSize: 12,
                                width: 280,
                                paddingHorizontal: 12
                            }}
                        />

                    </View>
                </View>


            </View>
        )
    }

    function renderTabCatagories() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        justifyContent: 'flex-start',
                        marginHorizontal: SIZES.padding
                    }}
                    onPress={() => onSelectCategory(item)}
                >

                    <Text
                        style={{
                            color: (selectedCategory?.id == item.id) ? COLORS.lightGreen : COLORS.white,
                            ...FONTS.body3
                        }}
                    >
                        {item.name}
                    </Text>
                    {
                        selectedCategory?.id == item.id &&
                        <View style={{ alignItems: 'center', marginTop: SIZES.base }}>
                            <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: COLORS.lightGreen  }}></View>
                        </View>
                    }


                </TouchableOpacity>
            )
        }



        return (
            <View style={{ padding: SIZES.padding }}>


                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}

                />
            </View>
        )
    }

    function renderCoffeeList() {
        const renderItem = ({ item }) => (
            <View
                style={{ padding: 17 }}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("DetailsScreen", { item }) }}
                    style={{
                        backgroundColor: COLORS.secondary,
                        width: 150,
                        height: 220,
                        borderRadius: 10,
                        ...styles.shadow
                    }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }} >

                        <Image
                            source={item.photo}
                            resizeMode="cover"
                            style={{ width: 130, height: 110, borderRadius: 10 }}
                        />

                        <View
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                backgroundColor: COLORS.transparentBlack1,
                                width: 60,
                                height: 20,
                                marginRight: 10,
                                borderBottomLeftRadius: 20,
                                borderTopRightRadius: 10

                            }}
                        >
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={icons.star} resizeMode='contain' style={{ width: 12, height: 12 }} />
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
                                    <Text style={{ color: COLORS.white, fontSize: 11 }}>{item.rating}</Text>

                                </View>

                            </View>
                        </View>
                    </View>

                    <View style={{}}>
                        <View style={{ padding: 10, }}>
                            <Text style={{ fontWeight: 'bold', color: COLORS.white, fontSize: 20 }}>{item.name}</Text>
                            <Text style={{ fontSize: 12, color: COLORS.white }}>with Oat Milk</Text>


                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                <View style={{}}>
                                    <Text style={{ color: COLORS.white, fontSize: 20, }}><Text style={{ color: COLORS.lightGreen }}>$ </Text>{item.amount}</Text>
                                </View>
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: 5,
                                        width: 30,
                                        height: 30,
                                        backgroundColor: COLORS.lightGreen,
                                        borderRadius: 10

                                    }}>

                                    <Image source={icons.plus} resizeMode='contain' style={{ width: 14, height: 14 }} />

                                </View>

                            </View>

                        </View>


                    </View>

                </TouchableOpacity>

            </View>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}


            />
        )
    }

    function renderSpecialList() {

        const renderItem = ({ item }) => (
            <View style={{}}>
                <TouchableOpacity

                    // onPress={() => { navigation.navigate("OrderDeliveryScreen", { item }) }}
                    style={{
                        backgroundColor: COLORS.secondary,
                        marginTop: 20,
                        width: "100%",
                        height: 120,
                        borderRadius: 20,
                        ...styles.shadow
                    }}>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                            <Image
                                source={item.photo}
                                resizeMode="cover"
                                style={{ width: 120, height: 100, borderRadius: 20 }}
                            />
                        </View>
                        <View style={{ width: '100%' }}>
                            <View style={{ padding: 10, marginLeft: 5 }}>
                                <View style={{ width: '55%' }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.white }}>5 Coffee Beans You Must Try</Text>
                                </View>




                            </View>


                        </View>

                    </View>

                </TouchableOpacity>
            </View>
        )

        return (
            <View style={{ flex: 1, padding: 12 }}>
                <View>
                    <Text style={{ color: COLORS.white, fontSize: 20 }}>Special for you</Text>
                </View>

                <FlatList
                    data={data.specialList}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}


                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderTabCatagories()}
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {renderCoffeeList()}
                {renderSpecialList()}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.primary
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
    }
})

export default Home;
