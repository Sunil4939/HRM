import React from "react";
import { ScrollView, Text, StatusBar, View, TouchableOpacity, Image, Dimensions } from "react-native";
import { BarChart, } from "react-native-chart-kit";
import { COLORS, icons, images } from "../../constants";
import styles from "./styles";
import {Calendar} from 'react-native-calendars';
const { width, height } = Dimensions.get('window')

const Holiday = ({ navigation }) => {
    const data = {
        labels: ["Jan", "", "Feb", "", "Mar", "", "Apr", "", "May", "", "Jun", "", "Jul", "", "Aug", "", "Sep", "", "Oct", "", "Nov", "", "Dec", "",],
        datasets: [
            {
                data: [0, 1, 2, 3, 4, 5, 6, 2, 8, 7, 0, 5, 2, 3, 4, 7, 6, 9, 8, 5, 5, 0, 7, 6,],
            }
        ]

    };
    const chartConfig = {
        backgroundGradientFrom: COLORS.white,
        backgroundGradientTo: COLORS.white,
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(149, 121, 160, ${opacity})`,
        barPercentage: 0.5,
        barRadius: 10,
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.head}>
                <Text style={styles.date}>February 28 - March 28, 2020</Text>
                <TouchableOpacity style={styles.monthBtn} >
                    <Text style={styles.month}>Month</Text>
                    <Image style={styles.down} source={icons.down} resizeMode="contain" />
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
                <BarChart
                    style={styles.graphStyle}
                    data={data}
                    width={width * 1.9}
                    height={220}
                    yAxisSuffix="k"
                    chartConfig={chartConfig}
                />
            </ScrollView>

            <View style={styles.row}>
                <View style={styles.box}>
                    <TouchableOpacity style={styles.downloadBtn}>
                        <Image style={styles.download} source={icons.download} resizeMode="contain" />
                    </TouchableOpacity>
                    <Text style={styles.text}>Download monthly report</Text>
                </View>
                <View style={styles.box}>
                    <View>
                        <Image style={styles.graph} source={icons.graph} resizeMode="contain" />
                    </View>
                    <View>
                        <View style={styles.row1}>
                            <Text style={styles.txt}>Total Days</Text>
                            <Text style={styles.number}>30</Text>
                        </View>
                        <View style={styles.row1}>
                            <Text style={styles.txt}>Present days</Text>
                            <Text style={styles.number}>99</Text>
                        </View>
                        <View style={styles.row1}>
                            <Text style={styles.txt}>Absent days</Text>
                            <Text style={styles.number}>29</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        // <View style={styles.container1}>
        //    <View style={styles.calenderBox}>
        //    <TouchableOpacity style={styles.closeBtn}>
        //         <Image source={icons.close} style={styles.close} resizeMode="contain" />
        //     </TouchableOpacity>

        //     <Calendar />

        //    </View>
        // </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default Holiday;