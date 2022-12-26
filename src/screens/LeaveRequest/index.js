import React, { useState } from 'react'
import { ScrollView, View, TextInput, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import { COLORS, icons, images } from "../../constants";
import styles from "./styles";
import DateTimePicker from '@react-native-community/datetimepicker';
import SwitchToggle from "react-native-switch-toggle";
import Modal from "react-native-modal";

const LeaveRequest = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [toggle, setToggle] = useState(true)
    const [startDate, setStartDate] = useState(false);
    const [isDisplayDate1, setShow1] = useState(false);

    const [endDate, setEndDate] = useState(false);
    const [isDisplayDate2, setShow2] = useState(false);

    const selectStartDate = (event, selectedDate) => {
        const currentDate = selectedDate || startDate;
        setShow1(false);
        setStartDate(`${currentDate.getDate()} / ${currentDate.getMonth() + 1} / ${currentDate.getFullYear()} `);
    }

    const selectEndDate = (event, selectedDate) => {
        const currentDate = selectedDate || endDate;
        setShow2(false);
        setEndDate(`${currentDate.getDate()} / ${currentDate.getMonth() + 1} / ${currentDate.getFullYear()} `);
    }

    const displayDatepicker = (name) => {
        if (name == "startDate") {
            setShow1(true);
        } else {
            setShow2(true);
        }
    };
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
                <View style={styles.inputBox}>
                    <Text style={styles.labels}>Leave reason</Text>
                    <TextInput placeholder="What reason behind your holiday ?" placeholderTextColor={'#78828A'} style={styles.input} />
                </View>

                <View style={styles.inputBox}>
                    <Text style={styles.labels}>Start Date</Text>
                    <TextInput placeholder="when you go to the office ?" placeholderTextColor={'#78828A'} style={styles.input} >
                        {startDate && (
                            <>
                                {startDate}
                            </>
                        )
                        }
                    </TextInput>
                    <View style={styles.calenderBox}>
                        <TouchableOpacity style={styles.calenderBtn} onPress={() => displayDatepicker("startDate")} >
                            <Image style={styles.calender} source={icons.calender} resizeMode="contain" />
                        </TouchableOpacity>
                        {isDisplayDate1 && (
                            <DateTimePicker
                                testID="dateTimePicker1"
                                value={new Date()}
                                mode={'date'}
                                // is24Hour={true}
                                display="default"
                                onChange={selectStartDate}
                            />
                        )}
                    </View>
                </View>
                <View style={styles.inputBox}>
                    <Text style={styles.labels}>End Date</Text>
                    <TextInput placeholder="When will you come to the office ?" placeholderTextColor={'#78828A'} style={styles.input} >
                        {endDate && (
                            <>
                                {endDate}
                            </>
                        )
                        }
                    </TextInput>
                    <View style={styles.calenderBox}>
                        <TouchableOpacity style={styles.calenderBtn} onPress={() => displayDatepicker("endDate")} >
                            <Image style={styles.calender} source={icons.calender} resizeMode="contain" />
                        </TouchableOpacity>
                        {isDisplayDate2 && (
                            <DateTimePicker
                                testID="dateTimePicker2"
                                value={new Date()}
                                mode={'date'}
                                // is24Hour={true}
                                display="default"
                                onChange={selectEndDate}
                            />
                        )}
                    </View>
                </View>
                <View style={styles.rightToggle}>
                    <View style={styles.row}>
                        <Text style={styles.halfTxt}>Half day :</Text>

                        <SwitchToggle
                            switchOn={toggle}
                            onPress={() => setToggle(!toggle)}
                            circleColorOff={COLORS.white}
                            circleColorOn={COLORS.white}
                            backgroundColorOn='#332E2B'
                            backgroundColorOff='#332E2B'
                            containerStyle={styles.toggleContainer}
                            circleStyle={styles.toggleCircle}

                        />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottomBox}>
                <TextInput placeholder='Write a message...' placeholderTextColor={'#78828A'} style={styles.message} />
                <TouchableOpacity style={styles.sendBtn} onPress={() => setModalVisible(!isModalVisible)}>
                    <Image style={styles.rectangle} source={images.sendBtn} resizeMode="contain" />
                </TouchableOpacity>
            </View>
            <Modal isVisible={isModalVisible}>
                <View style={styles.successContainer}>
                    <Image source={images.meeting} style={styles.success} />
                    <Text style={styles.title}>Success</Text>
                    <Text style={styles.text}>Your request has succesfully sent</Text>
                    <TouchableOpacity style={styles.btn} onPress={() => setModalVisible(!isModalVisible)}>
                        <Text style={styles.btnTxt}>Continue</Text>
                    </TouchableOpacity>
                </View>

            </Modal>
        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default LeaveRequest;