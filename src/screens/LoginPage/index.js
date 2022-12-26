import React,{ useState } from "react";
import { View, Text, StatusBar, ImageBackground, Image, TextInput, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { COLORS, icons, images } from "../../constants";
import styles from "./styles";

const LoginPage = ({navigation}) => {
  const [text, setText] = useState('');
  return (
    <ImageBackground source={images.loginbg} style={styles.bgImage} resizeMode="stretch">
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <KeyboardAwareScrollView >
        <Image source={images.Frame1} resizeMode="stretch" style={styles.Frame1} />
        <Text style={styles.wlc}>Hey, Welcome</Text>
        <View>
          <TextInput
            onChangeText={text => setText(text)}
            // onChange={true}
            defaultValue="johnsondoe@nomail.com" style={styles.input} />
          <Image source={icons.mail} resizeMode="contain" style={styles.mail} />
        </View>
        <View>
          <TextInput
            secureTextEntry={true}
            defaultValue="johnsondoe@nomail.com" 
            onChangeText={text => setText(text)}
            style={styles.input} />
          <Image source={icons.lock} resizeMode="contain" style={styles.lock} />
          <TouchableOpacity style={styles.showBtn} >
            <Image source={icons.show} resizeMode="contain" style={styles.show} />
          </TouchableOpacity>
        </View>
        <View style={styles.right}>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.Btn} onPress={()=> navigation.navigate('BottomTabNavigator')}>
            <Text style={styles.BtnTxt}>Continue</Text>
          </TouchableOpacity>
      </KeyboardAwareScrollView>
    </ImageBackground>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default LoginPage;