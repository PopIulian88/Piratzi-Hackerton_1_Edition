import {StyleSheet} from "react-native";

const shopCardStyles = StyleSheet.create({
    foodBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    foodText: {
        fontSize: 18,
        color: "white",
    },

    foodPhoto: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        borderRadius: 10,
    },
});

export {shopCardStyles};