import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.white,
        paddingHorizontal: width * .04,
        paddingVertical: height * .01,
    },
  
    inputBox: {
        marginTop: height * .015,
    },
    input: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 20,
        color: COLORS.black,
        borderWidth: 1,
        borderColor: '#ECF1F6',
        borderRadius: 20,
        backgroundColor: '#FDFDFD',
        paddingLeft: width * .04,
    },
    labels: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 14,
        lineHeight: 24,
        color: '#1F2C37',
    },
    calender:{
        width: width * .06,
        height: height * .03,
    },
    calenderBox:{
        position:'absolute',
        top: height * .034,
        right:0,
        height: height * .074,
        width: width * .15,
        justifyContent: 'center',
        alignItems:"center",
    },
    calenderBtn:{
        height: height * .074,
        width: width * .15,
        justifyContent: 'center',
        alignItems:"center",
    },
    toggleContainer: {
        width: width * .17,
        height: height * .04,
        borderRadius: 50,
        padding: 3,
        marginLeft:width * .03,
     },
     toggleCircle: {
        width: width * .06,
        height: height * .03,
        borderRadius: 50,
     },
    
    halfTxt:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.black,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical: height * .04,
    },
    rightToggle:{
        alignItems:'flex-end',
    },
    rectangle: {
        width: width * .2,
        height: height * .1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendBtn:{
        position:'absolute',
        top:2,
        right:0,
        height: height * .1,
    },
    message:{
        height: height * .1,
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 20,
        color: COLORS.black,
        borderRadius: 50,
        backgroundColor: COLORS.white,
        paddingLeft: width * .1,
        elevation:5,
    },
    bottomBox:{
        position:'absolute',
        width: width * .92,
        bottom:0,
        marginHorizontal: width * .04,
    },

    success:{
        width: width * .4,
        height: height * .25,
    },
    successContainer:{
        // height: height * .3,
        paddingVertical: height * .02,
        alignItems: 'center',
        backgroundColor: COLORS.white,
        elevation: 5,
        borderRadius: 16,
    },
    title: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 18,
        lineHeight: 26,
        color: '#1F2C37',
    },
    text:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 22,
        color: '#78828A',
    },
    btn:{
        width: width * .3,
        height: height * .05,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#4F3D56',
        marginVertical: height * .02,
    },
    btnTxt:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 22,
        color: COLORS.white,
    },
})