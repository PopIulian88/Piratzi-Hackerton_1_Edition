import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {homeStyles} from "../style/homeStyles";
import { StyleSheet, Text, View } from 'react-native';


export default function Home() {
    return (
        <View style={homeStyles.container}>
            <Text> AIci e home-ul</Text>
        </View>
    )
}