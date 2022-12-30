import { StyleSheet,View,Text,TouchableOpacity } from "react-native";
import COLORS from "../../constants";
export const ButtonGreen = ({ onPress, title,customStyles={} }) => (
    <TouchableOpacity onPress={onPress} style={[styles.button,customStyles]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.green,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 50,
        borderRadius: 12,
        marginVertical:"2%"
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 18,
        textAlign: "center"
    }
});