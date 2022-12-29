import { StyleSheet,View,Text,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
export const LoginBtn = ({ onPress, title,customStyles={} }) => (
    <TouchableOpacity onPress={onPress} style={[styles.button,customStyles]}>
      <View style={styles.icon} />
      <Text style={styles.buttonText}>{title}</Text>
      <Icon style={styles.icon} name="arrow-right" size={25} color="black" />
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#F8EEE9",
        justifyContent: "center",
        alignItems: "center",
        height: 55,
        borderRadius: 28,
        marginVertical:"2%",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:"4%",
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,
    },
    buttonText: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    icon:{
        // marginLeft:'10%'
    }
});