import { TextInput } from "react-native";

import { styles } from "./styles";

interface props {
    placeholder: string
}

export default function Input({placeholder}: props) {
    return (
        <TextInput 
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={"#808080"}
        
        />
    )
}