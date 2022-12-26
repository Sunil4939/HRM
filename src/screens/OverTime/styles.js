import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.white,
    },
    circleContainer:{
        marginVertical: height * .1,
        alignItems: "center",
        // borderWidth: 1,
        // borderRadius: 50,
    },
    circle:{
        width: width ,
        height: height * .53,
        alignItems: "center",
        justifyContent: 'center',
       
    },
    title:{
        width: width * .5,
        fontFamily: 'Poppins Medium 500',
        fontSize: 25,
        lineHeight: 30,
        color: COLORS.white,
        textAlign:'center',
        marginTop: height * .08,
    },
    btnContainer:{
        position: 'absolute',
        bottom: height * .03 ,
        right: width * .18,
    },
    btn:{
        width: width * .12,
        height: height * .06,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        elevation:10,
        borderRadius:50,
    },
    btnTxt:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 22,
        color: COLORS.black,
        textAlign:'center',
    },
    overtime:{
        width: width * .07,
        height: height * .035,
        marginTop: height * .05,
    },
    restart:{
        width: width * .07,
        height: height * .035,
    },
    text:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 18,
        color: '#949494',
        textAlign:'center',
        marginHorizontal: width * .05,
    },
    progressContent:{
        position:'absolute',
        top:height * .14,
        alignItems: "center",
    },
    progress:{
        borderWidth: 0,

    },
    time:{
        
    }
})