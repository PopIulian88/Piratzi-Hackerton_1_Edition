import {StyleSheet} from "react-native";
import {shopCardStyles} from "../Components/ComponentsStyle/shopCardStyle";
import Poza from "../Photo/BrioseVegane.jpg";

const shopStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        fontStyle: 'italic',
    },
    imageContainer: {
        width: 400,
        height: 200,
        alignSelf: 'bottom',
    },
        container2: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        button: {
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 5,
            marginVertical: 10,
        },
        buttonText: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
        },
});


export {shopStyles};