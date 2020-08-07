import React, { useEffect} from 'react'
import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity } from 'react-native'
import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons';
import StarRating from '../component/StarRating';

function SearchScreen({ navigation }) {
    const Jackets = [
        {image: require('../../assets/img/BlackGreen.png'), name: 'Black Swear Jacket', rating: 'StarRating', price: '$90'},
        {image: require('../../assets/img/BlueBlack.png'), name: 'Blue Black Jacket', rating: 'StarRating', price: '$110'},
        {image: require('../../assets/img/BlueJacket.png'), name: 'Blue Swear Jacket', rating: 'StarRating', price: '$75'},
        {image: require('../../assets/img/RedJacket.png'), name: 'Red Track Jacket', rating: 'StarRating', price: '$100'},
        
    ];
    return (
        <View style={styles.Container}>
            <View style={styles.VictorStyle}>
                <AntDesign name="arrowleft" 
                    size={25} color="black" 
                    style={styles.LeftArrow}
                />
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <Feather name="shopping-cart" 
                        size={25} color="royalblue" 
                        style={styles.Shopping}
                    />
                </TouchableOpacity>
            </View>
            <View>
                
            </View>
            <Text style={styles.Headertext}>Women Jacket</Text>

            <View style={styles.InputView}>
                <View style={styles.InputText1}>
                <TextInput style={styles.InputText} placeholder='Search Jacket'></TextInput>
                </View>
                <View style={styles.FilterView}>
                  <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <Text style={styles.FilterText}>Filter</Text>
                  </TouchableOpacity>
                </View>
            </View>

            <FlatList 
                keyExtractor={(jacket) =>jacket.name}
                data={Jackets}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.Groupstyle}>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Detail', {
                                itemImage: item.image,
                                itemName: item.name,
                                itemPrice: item.price})}>
                            <Image style={styles.imagestyle}
                                source={item.image}
                            />
                        </TouchableOpacity>
                            <View style={styles.Imagetext}>
                            <Text style={styles.Texthead}>
                                {item.name}
                            </Text>
                            <StarRating />
                            <Text style={styles.Price}>{item.price}</Text>
                            </View>
                        </View>
                    );
                }}
            />   
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'transparent'
    },
    Headertext: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 15,
        marginLeft: 15,
        marginTop: 30
    },
    VictorStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    Shopping: {
        borderRadius: 60,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: 'white',
        padding: 15,
        marginRight: 15
    },
    LeftArrow: {
        borderRadius: 60,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: 'white',
        padding: 15,
        marginLeft: 15
    },
    imagestyle: {
        height: 40,
        width: 50,
        marginLeft: 15,
        padding: 35,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        borderTopWidth: 2,
        marginBottom: 20
    },
    Groupstyle: {
        flexDirection: 'row',
        marginTop: 5
    },
    Imagetext: {
        marginLeft: 10,
        marginTop: 15
    },
    Texthead: {
        fontWeight: 'bold',
        fontSize: 15
    },
    Price: {
        color: 'royalblue',
        fontWeight: 'bold'
    },
    InputView: {
        height: 60,
        backgroundColor: 'white',
        marginTop: 20,
        marginBottom: 18,
        borderRadius: 10,
        marginLeft: 15,
        marginRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    InputText1: {
        marginLeft: 15
    },
    InputText: {
        color: 'gray'
    },
    FilterView: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        marginRight: 0,
        marginLeft: 25,
        height: 30,
        width: 100,
        padding: 5
    },
    FilterText: {
        color: 'blue',
        marginLeft: 15
    },
    
});

export default SearchScreen;
