import React, { useState } from "react";
import { ScrollView, Text, StatusBar, View, Image, ImageBackground, TouchableOpacity,  } from "react-native";
import { COLORS, icons, images } from "../../constants";
import * as Progress from 'react-native-progress';
import styles from "./styles";

const OverTime = ({ navigation }) => {
    const [timer, setTimer] = useState(false);
    let hour = 0;
    let minute = 0;
    let second = 0;
    let count;
    const start = () => {
        setTimer(true);
        count = setInterval(stopWatch, 1000);
    }
    const stop = () => {
        clearInterval(count)
        setTimer(false);
    }
    const reStart = () => {
        clearInterval(count)
        hour = 0;
        minute = 0;
        second = 0;
        start();
    }
    const stopWatch = () => {
        if (timer) {
            second++;
            console.log("second" + second)
            if (second == 60) {
                minute++;
                second = 0;
            }

            if (minute == 60) {
                hour++;
                minute = 0;
                second = 0;
            }

            // if (hour < 10) {
            //     hrString = "0" + hour;
            // }

            // if (minute < 10) {
            //     minString = "0" + minute;
            // }

            // if (second < 10) {
            //     secString = "0" + second;
            // }
            
        }
    }
   
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <TouchableOpacity style={styles.circleContainer} onPress={() => start()}>
                <ImageBackground style={styles.circle} source={images.circle} resizeMode="stretch" >
                    <Progress.Circle
                        size={240}
                        progress={0.4}
                        // indeterminate={true} 
                        unfilledColor={COLORS.black}
                        color={COLORS.white}
                        borderColor={COLORS.black}
                        borderWidth={0}
                        style={styles.progress}
                    />
                    <View style={styles.progressContent}>
                        {/* <Text style={styles.title}>Start</Text> */}
                       
                        {timer &&
                            <View>
                                <Text style={styles.title}>{hour} : {minute} : {second}</Text>
                            </View>
                        }
                        <Text style={styles.title}>Thankyou for overtime</Text>
                        <Image style={styles.overtime} source={icons.overtime} resizeMode="contain" />
                    </View>
                </ImageBackground>
                {/* <TouchableOpacity style={styles.btnContainer} onPress={() => stop()}>
                    <View style={styles.btn}>
                        <Image style={[styles.restart, {tintColor: COLORS.red}]} source={icons.restart} resizeMode="contain" />
                    </View>
                    <Text style={styles.btnTxt}>Stop</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.btnContainer} onPress={() => reStart()}>
                    <View style={styles.btn}>
                        <Image style={styles.restart} source={icons.restart} resizeMode="contain" />
                    </View>
                    <Text style={styles.btnTxt}>Restart</Text>
                </TouchableOpacity>
            </TouchableOpacity>
            <Text style={styles.text}>Your overtime is automatically convert in days donn’t worry do your hardwork.</Text>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default OverTime;