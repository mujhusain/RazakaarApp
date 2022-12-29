import { StyleSheet,View,Text,TouchableOpacity } from "react-native";
export const ButtonGreen = ({ onPress, title,customStyles={} }) => (
    <TouchableOpacity onPress={onPress} style={[styles.button,customStyles]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#0DCDAB",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 50,
        borderRadius: 12,
        marginVertical:"2%"
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        textAlign: "center"
    }
});