import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {homeStyles} from "../style/homeStyles";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Button } from 'react-native';
import {shopStyles} from "../style/shopStyles";
import Spacer from "../Components/Spacer";



export default function Shop() {
    return (
        <View style={shopStyles.container}><Spacer/><Spacer/>
            <Spacer/><Spacer/>
            <Text style={shopStyles.textStyle}>You have only</Text>
            <Text style={shopStyles.textStyle}>30</Text>
            <Text style={shopStyles.textStyle}>days until you get a free month of</Text>
            <Spacer/><Spacer/>
            <Image style={shopStyles.imageContainer}
                source={require('../assets/img.png')}></Image>
            <Spacer/><Spacer/><Spacer/><Spacer/>
            <Image style={shopStyles.imageContainer}
                source={require('../assets/netflix2.jpeg')}></Image>
        </View>
    )


}