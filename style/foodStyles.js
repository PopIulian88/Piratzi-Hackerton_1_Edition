import {StyleSheet} from "react-native";

const foodStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A3052",
        alignItems: 'center',
    },

    scrollView: {
        flex: 1,
        width: "100%",
        padding: 20,
    },

    welcomeTextContainer: {
        width: "100%",
        height: 200,
        padding: 20,

        alignItems: 'center',
        justifyContent: "center",
    },


    welcomeText: {
        textAlign: 'center',
        fontSize: 27,
        color: "white",
    },

    sectionText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },

    sectionBar: {
        flexDirection: "row",
        alignItems: "center",
    },

});

export {foodStyles};