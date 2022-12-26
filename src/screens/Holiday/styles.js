import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white,
    },
   
    head:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal: width * .04,
        justifyContent:'space-between',
    },
    date:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 22,
        color: '#9CA4AB',
    },
    month:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 22,
        color: '#1F2C37',
        marginBottom:-4,
    },
    down:{
        width:width * .05,
        height: height * .027,
    },
    monthBtn:{
        width: width * .25,
        height: height * .05,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#EBDBF0',
        borderRadius:12,
    },
    graphStyle:{
        backgroundColor: COLORS.white,
        marginVertical: height * .04,
        marginHorizontal: width * .04,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal: width * .04,
        justifyContent:'space-between',
    },
    box:{
        width:width * .43,
        height: height * .2,
        borderWidth:1,
        borderColor:'#E3E9ED',
        padding: width * .03,
        borderRadius:16,
        backgroundColor: COLORS.white,
        elevation: 1,
    },
    download:{
        width:width * .06,
        height: height * .03,
    },
    downloadBtn:{
        width: width * .15,
        height: height * .07,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#E2E0E4',
        borderRadius:12,
        marginBottom: height * .02,
    },
    graph:{
        width: width * .36,
        height: height * .065,
        marginBottom: height * .01,
    },
    row1:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop: height * .003,
    },
    txt:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 16,
        color: '#1F2C37',
    },
    number:{
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 12,
        lineHeight: 16,
        color: COLORS.black,
    },
    text:{
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 13,
        lineHeight: 20,
        color: '#1F2C37',
    },

    calenderBox:{
        marginHorizontal: width * .05,
        paddingVertical: height * .02,
        paddingHorizontal: width * .03,
        borderRadius: 16,
        backgroundColor: COLORS.white,
    },
   
    closeBtn:{
        width: width * .1,
        height: height * .05,
        borderRadius:50,
        borderWidth: 1,
        zIndex: 4,
        borderColor:'#E3E9ED',
        alignItems:'center',
        justifyContent:'center',
    },
    close:{
        width: width * .08,
        height: height * .04,
    },
})