import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons';
import StarRating from '../component/StarRating'

const DetailScreen = ({ navigation }) => {
    return (
        <View>
            <View >
                <View style={styles.VictorStyle}>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <AntDesign name="arrowleft" 
                        size={25} color="black" 
                        style={styles.LeftArrow}
                    />
                </TouchableOpacity>
                    <Feather name="shopping-cart" 
                        size={25} color="royalblue" 
                        style={styles.Shopping}
                    />
                </View>
                
                <View style={styles.StyleIcon}>
                    <Image style={styles.imagestyle}
                    source={require('../../assets/img/BlueJacket.png')}
                    />
                    <Feather name="heart" 
                        size={24} color="royalblue" 
                        style={styles.Heart}
                    />
                </View>
       
            </View>
            
         
            <View>
                <Text style={styles.Texthead}>Blue Swear Jacket</Text>
                <Text style={styles.TextReview}>Review: <FontAwesome name="star" size={18} color="gold" />
                <StarRating 
                selectedStar={(rating) => this.onStarRatingPress(rating)}/>
                </Text>
            </View>
            <View style={styles.DotOne} /> 

            <View style={styles.LoremText}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque sapiente reiciendis porro debitis eveniet.</Text>
            </View>
            <View style={styles.Material}>
                <Text style={styles.TextMater}>
                    Material: 91% Ployester, 9% Elastane
                </Text>
            </View>
            <View style={styles.BoxView}>
            <View style={styles.BoxOne}><Text style={styles.OthersText}>XS</Text></View>
            <View style={styles.BoxTwo}><Text style={styles.OthersText}>S</Text></View>
            <View style={styles.BoxThree}><Text style={styles.SizeText}>M</Text></View>
            <View style={styles.BoxFour}><Text style={styles.OthersText}>L</Text></View>
            <View style={styles.BoxFive}><Text style={styles.OthersText}>XL</Text></View>
            </View>
            <View style={styles.TotalAdd}>
                <View style={styles.Amount}>
                <Text style={styles.TotalText}>Total Amount </Text>
                <Text style={styles.SumText}>$110</Text>
                </View>
                <View style={styles.AddCart}>
                  <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <Text style={styles.CartText}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    VictorStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    StyleIcon: {
        flexDirection: 'row',
        marginRight: 15,
        marginBottom: 30,
        
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
    Heart: {
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 4,
        backgroundColor: 'white',
        padding: 23,
        marginTop: 15,
        marginRight: 20,
        height: 70,
        width: 70
    },
    imagestyle: {
        resizeMode: "contain",
        marginRight: 8,
        marginLeft: 20,
        height: 200,
        width: 250
    },
    Texthead: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 20,
        marginBottom: 5
    },
    TextReview: {
        fontSize: 18,
        marginLeft: 20,
        marginBottom: 15
    },
    DotOne: {
        width: 50, 
        height: 5, 
        backgroundColor: 'royalblue', 
        borderRadius: 15, 
        marginLeft: 20,
        marginRight: 4
    },
    LoremText: {
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20
    },
    Material: {
        width: 300,
        height: 40,
        backgroundColor: 'white',
        marginTop: 15,
        padding: 10,
        
    },
    TextMater: {
        marginLeft: 15,
        color: 'royalblue'
    },
    BoxView: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 10
    },
    BoxOne: {
        width: 28,
        height: 28,
        backgroundColor: 'white',
        textAlign: 'center',
        marginRight: 15,
        borderRadius: 5,
        padding: 3
        
    },
    BoxTwo: {
        width: 28,
        height: 28,
        backgroundColor: 'white',
        textAlign: 'center',
        marginRight: 15,
        borderRadius: 5,
        padding: 3
    },
    BoxThree: {
        width: 28,
        height: 28,
        backgroundColor: 'royalblue',
        borderRadius: 5,
        padding: 3,
        textShadowColor: 6
    },
    SizeText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    BoxFour: {
        width: 28,
        height: 28,
        backgroundColor: 'white',
        textAlign: 'center',
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 5,
        padding: 4
    },
    BoxFive: {
        width: 28,
        height: 28,
        backgroundColor: 'white',
        textAlign: 'center',
        marginRight: 15,
        borderRadius: 5,
        padding: 4
    },
    OthersText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    TotalAdd: {
        height: 60,
        backgroundColor: 'royalblue',
        marginTop: 20,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    AddCart: {
        backgroundColor: 'blue',
        borderRadius: 10,
        alignItems: 'center',
        marginRight: 10,
        height: 30,
        width: 100,
        padding: 5
    },
    Amount: {
        marginLeft: 15
    },
    TotalText: {
        color: 'white'
    },
    SumText: {
        color: 'white'
    },
    CartText: {
        color: 'white'
    },
});


export default DetailScreen;
