import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {homeStyles} from "../style/homeStyles";
import { StyleSheet, Text, View } from 'react-native';
import {shopStyles} from "../style/shopStyles";


export default function Shop() {
    return (
        <View style={shopStyles.container}>
            <Text> AIci e Shop-ul</Text>
        </View>
    )
}