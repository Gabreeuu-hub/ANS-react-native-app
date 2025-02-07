import { Button, Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";



export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxTop:{
        width: '100%',
        height: Dimensions.get('window').height/3,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxMid:{
        width: '100%',
        height: Dimensions.get('window').height/4,
        // backgroundColor: 'green',
        paddingHorizontal: 37
    },
    boxBottom:{
        width: '100%',
        height: Dimensions.get('window').height/3,
        // backgroundColor: 'blue',
        alignItems: 'center',
    },
    logo:{
        width: 120,
        height: 120
    },
    text:{
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 18
    },
    tittleInput:{
        marginLeft:5,
        color:themes.colors.gray,
        marginTop: 20
    },
    boxInput:{
        width: '100%',
        height: 40,
        borderWidth:1,
        borderRadius:30,
        marginTop:10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal:5,
        backgroundColor: themes.colors.light_gray,
        borderColor: themes.colors.light_gray,
    },
    input:{
        height: '100%',
        width: '90%',
        // backgroundColor: 'red',
        borderRadius:30,
        paddingLeft: 5,
    },
    button:{
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
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
    txtButton:{
        fontSize:16,
        color: '#FFFF'
    },
    txtBottom:{
        fontSize: 16,
        color:themes.colors.gray,
    },
    txtBottomCreate:{
    fontSize: 16,
    color:themes.colors.primary,
}
})