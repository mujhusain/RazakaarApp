import { StyleSheet,View,Text,TouchableOpacity } from "react-native";
export const SimpleButton = ({ onPress, title,customStyles={} }) => (
    <TouchableOpacity onPress={onPress} style={[styles.button,customStyles]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 50,
        borderRadius: 12,
        borderWidth:1,
        marginVertical:"2%"
    },
    buttonText: {
        fontSize: 18,
        textAlign: "center",
        color:"gray"
    }
});