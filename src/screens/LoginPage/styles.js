import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    bgImage: {
        flex:1,
        paddingHorizontal: width * .08,
        paddingTop: height * .07,
    },
    Frame1:{
        width: width * .27,
        height: height * .14,
    },
    wlc:{
        fontFamily: 'Poppins Bold 700',
        fontSize: 28,
        lineHeight: 42,
        color: COLORS.black,
        marginVertical: height * .04,
    },
    input:{
        backgroundColor: '#E8E8E8',
        color:'#3C3C43',
        fontFamily: 'Poppins Regular 400',
        fontSize:15,
        lineHeight:22,
        borderRadius:10,
        height: height * .09,
        paddingLeft: width * .1,
        marginVertical: height * .01,
        elevation:.5,
    },
    mail:{
        width: width * .05,
        height: height * .25,
        position: 'absolute',
        bottom: height * -.07,
        left: width * .025,
    },
    lock:{
        width: width * .04,
        height: height * .03,
        position: 'absolute',
        top: height * .038,
        left: width * .027,
    },
    show:{
        width: width * .07,
        height: height * .02,
    },
    showBtn:{
        position: 'absolute',
        right: width * .027,
        top: height * .031,
        padding: width * .02,
    },
    right:{
        alignItems:'flex-end',
        marginVertical: height * .01,
    },
    forgot:{
        fontFamily: 'Poppins Medium 500',
        fontSize:13,
        lineHeight:19,
        color:'#8A8A8E',
    },
    Btn:{
        backgroundColor: '#3AB091',
        height: height * .08,
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center',
        marginVertical: height * .01,
    },
    BtnTxt:{
        fontFamily: 'Poppins Black 900',
        fontSize:17,
        lineHeight:24,
        color:COLORS.white,
    },
})