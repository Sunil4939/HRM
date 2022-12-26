import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: width * .04,
        paddingVertical: height * .01,
    },
    profileContainer: {
        alignItems: 'center',
    },

    profile2: {
        width: width * .246,
        height: height * .13,
        borderRadius: 50,
    },
    camera: {
        width: width * .04,
        height: height * .02,
    },
    editBtn: {
        backgroundColor: '#4F3D56',
        padding: 5,
        borderRadius: 50,
        position: 'absolute',
        bottom: height * .006,
        right: 0,
        borderWidth: 1,
        borderColor: COLORS.white,
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
    rectangle: {
        width: width * .24,
        height: height * .12,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bottomBtnContainer: {
        //  position:'absolute',
        // bottom: 0,
        // left: width * .335,
        marginTop: -14,
        alignItems: 'center',
    },
})