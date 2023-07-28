import {StyleSheet} from "react-native";

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#1A3052",
        alignItems: 'center',

    },
    timerContainer: {
        flex: 2,
        width: "100%",
        alignItems: 'center',
    justifyContent: "center",
    },

    circleTimerContainer: {
        height: "60%",
        width: "70%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3065B3",
        borderRadius: 200,
    },

    buttonsContainer: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        alignItems: 'center',
        justifyContent: "space-around",
    }

});

export {homeStyles};