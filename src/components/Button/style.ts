import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    button: {
        width: 250,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: themes.colors.primary,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
    
        elevation: 7,
      },
      txtButton: {
        fontSize: 16,
        color: "#FFFF",
      },
})