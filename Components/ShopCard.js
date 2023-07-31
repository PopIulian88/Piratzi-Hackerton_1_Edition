import {Image, Text, TouchableOpacity, View} from "react-native";
import {shopCardStyles} from "./ComponentsStyle/shopCardStyle";
import {foodStyles} from "../style/foodStyles";
import {VeganMuffins} from "../Retete";

export default function ShopCard({Name = "0. Name", Reteta="Fara reteta", Poza = require("../Photo/BrioseVegane.jpg")}) {
    return (
        <TouchableOpacity style={shopCardStyles.foodBar} onPress={() => alert(Reteta)}>
            <Text style={shopCardStyles.foodText}>{Name}</Text>
            <Image style={shopCardStyles.foodPhoto} source={Poza}/>
        </TouchableOpacity>
    )
}