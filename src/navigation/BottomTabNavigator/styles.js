import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    tabBarStyle:{
        height: height * .1,
        borderRadius: 25,
        backgroundColor: COLORS.white,
        elevation: 10,
    },
    
    home:{
        width: width * .11,
        height:height * .065,
    },
    holiday:{
        width: width * .125,
        height:height * .06,
    },
    rectangle:{
        width: width * .24,
        height:height * .12,
        justifyContent:'center',
        alignItems:'center',
        marginBottom: height * .056,
    },
    exit:{
        width: width * .08,
        height:height * .04,
    },
  

   
  })