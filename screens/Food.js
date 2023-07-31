import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {foodStyles} from "../style/foodStyles";
import Spacer from "../Components/Spacer";
import ShopCard from "../Components/ShopCard";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {
    Cilantro_Lime_Chicken,
    Fresh_salmon_with_Thai,
    Oat_and_chia_porridge,
    Pasta_with_Zucchini_and_Tomatoes,
    tomatoSoup,
    VeganMuffins
} from "../Retete";


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

                    <Spacer/>
                    <ShopCard Name={"2. Oat & chia porridge"} Poza={require("../Photo/Oat_and_chia_porridge.jpg")} Reteta={Oat_and_chia_porridge}/>

                </View>
                <View>
                    <View style={foodStyles.sectionBar}>
                        <Ionicons name="arrow-forward" size={40} color= "#5CBF39"/>
                        <Text style={foodStyles.sectionText}>  Lunch</Text>
                    </View>

                    <Spacer/>
                    <ShopCard Name={"1. Fresh salmon with Thai noodle salad"} Poza={require("../Photo/Fresh_salmon_with_Thai.jpg")} Reteta={Fresh_salmon_with_Thai}/>

                    <Spacer/>
                    <ShopCard Name={"2. Roasted red pepper & tomato soup with ricotta"} Poza={require("../Photo/tomatoSoup.jpg")} Reteta={tomatoSoup}/>

                </View>

                <View>
                    <View style={foodStyles.sectionBar}>
                        <Ionicons name="arrow-forward" size={40} color= "#5CBF39"/>
                        <Text style={foodStyles.sectionText}>  Dinner</Text>
                    </View>

                    <Spacer/>
                    <ShopCard Name={"1. Pasta with Zucchini and Tomatoes"} Poza={require("../Photo/Pasta_with_Zucchini_and_Tomatoes.jpg")} Reteta={Pasta_with_Zucchini_and_Tomatoes}/>

                    <Spacer/>
                    <ShopCard Name={"2. Cilantro Lime Chicken"} Poza={require("../Photo/Cliantro_Lime_Chicken.jpg")} Reteta={Cilantro_Lime_Chicken}/>

                </View>
            </ScrollView>
        </View>
    )
}