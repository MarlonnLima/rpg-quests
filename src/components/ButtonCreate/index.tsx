import { TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./styles";

export default function ButtonCreate() {
    return (
        <TouchableOpacity style={styles.button}>
            <Image source={require("../../assets/icons/icon_plus.png")}></Image>
        </TouchableOpacity>
    )
}