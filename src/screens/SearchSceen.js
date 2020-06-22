import React from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons';

const SearchScreen = ({ navigation }) => {
    return (
        <View style={styles.Container}>
            <View style={styles.VictorStyle}>
                <AntDesign name="arrowleft" 
                    size={25} color="black" 
                    style={styles.LeftArrow}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
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

            <View style={styles.Groupstyle}>
                <Image style={styles.imagestyle}
                source={require('../../assets/img/BlackGreen.png')}
                />
              <View style={styles.Imagetext}>
                <Text style={styles.Texthead}>Black Swear Jacket</Text>
                <FontAwesome name="star" size={20} color="gold" />
                <Text style={styles.Price}>$90</Text>
              </View>
            </View>
            <View style={styles.Groupstyle}>
                <Image style={styles.imagestyle}
                source={require('../../assets/img/BlueBlack.png')}
                />
              <View style={styles.Imagetext}>
                <Text style={styles.Texthead}>Blue Black Jacket</Text>
                <FontAwesome name="star" size={20} color="gold" />
                <Text style={styles.Price}>$110</Text>
              </View>
            </View>
            <View style={styles.Groupstyle}>
                <Image style={styles.imagestyle}
                source={require('../../assets/img/BlueJacket.png')}
                />
              <View style={styles.Imagetext}>
                <Text style={styles.Texthead}>Blue Swear Jacket</Text>
                <FontAwesome name="star" size={20} color="gold" />
                <Text style={styles.Price}>$75</Text>
              </View>
            </View>
            <View style={styles.Groupstyle}>
                <Image style={styles.imagestyle}
                source={require('../../assets/img/RedJacket.png')}
                />
              <View style={styles.Imagetext}>
                <Text style={styles.Texthead}>Red Track Jacket</Text>
                <FontAwesome name="star" size={20} color="gold" />
                <Text style={styles.Price}>$100</Text>
              </View>
            </View>
                
           
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'transparent'
    },
    // Imput: {
    //     fontSize: 18,
    //     borderWidth: 2,
    //     borderColor: 'white',
    //     borderRadius: 10,
    //     padding: 10,
    //     margin: 5,
    //     marginBottom: 15,
    //     marginTop: 20,
    //     backgroundColor: 'white',
    //     marginLeft: 15,
    //     marginRight: 15
    // },
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
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 4,
        backgroundColor: 'white',
        padding: 15,
        marginRight: 15
    },
    LeftArrow: {
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 4,
        backgroundColor: 'white',
        padding: 15,
        marginLeft: 15
    },
    imagestyle: {
        maxHeight: 70,
        maxWidth: 50,
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
