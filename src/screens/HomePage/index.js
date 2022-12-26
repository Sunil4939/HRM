import React from "react";
import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView } from "react-native";
import { COLORS, icons, images } from "../../constants";
import styles from "./styles";
import CircularProgress from 'react-native-circular-progress-indicator';

const HomePage = ({navigation}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}  style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.Box1}>
                {/* <View style={styles.alertBox}>
                    <Image style={styles.meeting} source={images.meeting} resizeMode="contain" />
                    <View style={styles.rightBox}>
                        <Text style={styles.alertTitle}>have a meeting today</Text>
                        <Text style={styles.alertSubTitle}>Today secheduled a meeting on 2:00 pm so every body come on time please!</Text>
                    </View>
                </View> */}
                <View style={styles.alertBox}>
                    <View style={styles.row4}>
                        <TouchableOpacity style={styles.profile1Box}>
                            <Image style={styles.profile1} source={images.profile1} resizeMode="contain" />
                        </TouchableOpacity>
                        <View style={styles.alertTxtBox}>
                            <Text style={styles.alertTitle}>Monica Gamage</Text>
                            <Text style={styles.alertSubTitle}>Today</Text>
                        </View>
                    </View>
                    <Image style={styles.cake} source={images.cake} resizeMode="contain" />
                </View>
                <Text style={styles.overview}>Montly Overview</Text>
                <View style={styles.row1}>
                    <TouchableOpacity onPress={()=> navigation.navigate('OverTime')}>
                        <CircularProgress
                            value={10}
                            radius={40}
                            progressValueColor={COLORS.black}
                            inActiveStrokeColor={'#F5F7FF'}
                            activeStrokeColor={'#82CCFF'}
                        />
                        <Text style={styles.leaveTxt}>Over Time</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('LeaveRequest')}>
                        <CircularProgress
                            value={20}
                            radius={40}
                            inActiveStrokeColor={'#F5F7FF'}
                            activeStrokeColor={'#EE6CAA'}
                            progressValueColor={COLORS.black} />
                        <Text style={styles.leaveTxt}>Leave</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Box}>
                <TouchableOpacity style={styles.profileBox} onPress={()=> navigation.navigate('MyProfile')}>
                    <Image style={styles.profile} source={images.profile} resizeMode="contain" />
                </TouchableOpacity>
                <Text style={styles.name}>Ankita Patel</Text>
                <Text style={styles.email}>bharatpatel@gmail.com</Text>
                <Text style={styles.emId}>Employee Id : 13</Text>
                <View style={styles.row}>
                    <Image style={styles.bag} source={icons.bag} resizeMode="stretch" />
                    <Text style={styles.txt}>Frontend developer</Text>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>PUNCH IN</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default HomePage;