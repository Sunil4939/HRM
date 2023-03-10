import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#E5E5E5',
    paddingHorizontal: width * .03,
  },
  Box:{
    borderRadius:20,
    backgroundColor: COLORS.white,
    shadowColor:'rgba(0, 0, 0, 0.28)',
    elevation:10,
    alignItems:'center',
    marginTop: height * .02,
    paddingTop: height * .015,
  },
  Box1:{
    borderRadius:20,
    backgroundColor: '#FFFBE8',
    shadowColor:'rgba(0, 0, 0, 0.28)',
    elevation:10,
    marginTop: height * .02,
  },
  profileBox:{
    backgroundColor: '#FFD4B5',
    padding:1,
    borderRadius: 50,
    shadowColor:'rgba(0, 0, 0, 0.28)',
    elevation:10,
    marginBottom: height * .08,
    justifyContent: 'center',
    alignItems:'center',
    position:'absolute',
    top:height * -.03,
  },
  profile:{
    width: width * .2,
    height: height * .1,
  },
  name:{
    fontFamily: 'Poppins Regular 400',
    fontSize: 24,
    lineHeight: 34,
    color: COLORS.black,
    marginTop: height * .06,
  },
  email:{
    fontFamily: 'Poppins Light 300',
    fontSize: 12,
    lineHeight: 15,
    color: COLORS.black,
  },
  emId:{
    fontFamily: 'Poppins Bold 700',
    fontSize: 13,
    lineHeight: 15,
    color: COLORS.black,
    marginVertical: height * .02,
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical: height * .02,
  },
  row4:{
    flexDirection:'row',
  },
  row1:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    justifyContent:'space-around',
    marginBottom: height * .02,
  },
  bag:{
    width: width * .06,
    height: height * .03,
    marginRight: width * .02,
    marginTop: -5,
  },
  txt:{
    fontFamily: 'Poppins Regular 400',
    fontSize: 16,
    lineHeight: 21,
    color: COLORS.black,
  },
  btn:{
    backgroundColor: COLORS.black,
    borderRadius:5,
    marginVertical: height * .05,
    paddingHorizontal: width * .05,
    paddingVertical: height * .02,
  },
  btnTxt:{
    fontFamily: 'Poppins Bold 700',
    fontSize: 13,
    lineHeight: 15,
    color: COLORS.white,
    marginBottom: -2,
  },
  overview:{
    fontFamily: 'Poppins SemiBold 600',
    fontSize: 12,
    lineHeight: 15,
    color: '#524343',
    textAlign:'center',
    marginBottom: -10,
  },
  alertBox:{
    borderRadius:20,
    backgroundColor: COLORS.white,
    shadowColor:'rgba(0, 0, 0, 0.28)',
    elevation:10,
    alignItems:'center',
    marginTop: height * .01,
    marginBottom: height * .02,
    marginHorizontal: width * .04,
    paddingVertical: height * .01,
    paddingHorizontal: width * .04,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  rightBox:{
    width: width * .58,
  },
  alertTxtBox:{
    marginLeft: width * .02,
  },
  meeting:{
    width: width * .16,
    height: height * .08,
  },
  alertTitle:{
    fontFamily: 'Poppins Bold 700',
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.black,
    marginVertical: height * .003,
  },
  alertSubTitle:{
    fontFamily: 'Poppins Regular 400',
    fontSize: 10,
    lineHeight: 12,
    color: '#9E9E9E',
  },
  profile1Box:{
    padding: 5,
    backgroundColor: '#8CDCE1',
    borderRadius: 50,
  },
  profile1:{
    width: width * .13,
    height: height * .07,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  cake:{
    width: width * .16,
    height: height * .08,
  },
  leaveTxt:{
    fontFamily: 'Poppins SemiBold 600',
    fontSize: 18,
    lineHeight: 27,
    color: COLORS.black,
    textAlign:'center',
  },
})