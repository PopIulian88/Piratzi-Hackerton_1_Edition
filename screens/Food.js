import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {foodStyles} from "../style/foodStyles";
import Spacer from "../Components/Spacer";
import ShopCard from "../Components/ShopCard";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {VeganMuffins} from "../Retete";


export default function Food() {
    return (
        <View style={foodStyles.container}>
            <ScrollView style={foodStyles.scrollView}>

                <View style={foodStyles.welcomeTextContainer}>
                    <Text style={foodStyles.welcomeText}>Here are some healthy food ideas you might want to try!</Text>
                </View>

                <View>
                    <View style={foodStyles.sectionBar}>
                        <Ionicons name="arrow-forward" size={40} color= "#5CBF39"/>
                        <Text style={foodStyles.sectionText}>  Breackfast</Text>
                    </View>

                    <Spacer/>
                    <ShopCard Name={"1. Vegan Muffins"} Poza={require("../Photo/BrioseVegane.jpg")} Reteta={VeganMuffins}/>


                </View>
            </ScrollView>
        </View>
    )
}