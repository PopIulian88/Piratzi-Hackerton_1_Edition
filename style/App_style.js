import {StyleSheet} from "react-native";
import {FontAwesome, Fontisto, MaterialCommunityIcons} from "@expo/vector-icons";

const App_style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    tabBarOptions: {
        activeTintColor: "white",
        inactiveTintColor: "#1A3052"
    },

    shopOption: {
        headerShown:false,

        tabBarIcon: ({focused}) => (
            <Fontisto name="netflix" size={30} color={focused? "#6496DF" : "#1A3052"} />
        )
    },

    homeOption: {
        headerShown:false,

        tabBarIcon: ({focused}) => (
            <FontAwesome name="home" size={30} color={focused? "#6496DF" : "#1A3052"} />
        )
    },

    foodOption: {
        headerShown:false,

        tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons name="food-apple" size={30} color={focused? "#6496DF" : "#1A3052"} />
        )
    },
});

export {App_style};