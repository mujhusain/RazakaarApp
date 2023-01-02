import { StyleSheet,View,Text,TouchableOpacity } from "react-native";
import COLORS from "../../constants";
export const ButtonGreen = ({ onPress, title,customStyles={},customText={} }) => (
    <TouchableOpacity onPress={onPress} style={[styles.button,customStyles]}>
      <Text style={[styles.buttonText,customText]}>{title}</Text>
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.green,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderRadius: 12,
        marginVertical:"2%"
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 17,
        textAlign: "center"
    }
});