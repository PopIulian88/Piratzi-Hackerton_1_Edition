import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {foodStyles} from "../style/foodStyles";
import Spacer from "../Components/Spacer";
import ShopCard from "../Components/ShopCard";


export default function Food() {
    return (
        <View style={foodStyles.container}>
            <ScrollView style={foodStyles.scrollView}>
            <Spacer height={50}/>
            <ShopCard/>

            <Spacer height={50}/>
            <ShopCard/>
            </ScrollView>
        </View>
    )
}