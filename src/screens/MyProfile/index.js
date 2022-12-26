import React, { useState } from "react";
import { ScrollView, Text, Image, StatusBar, View, TouchableOpacity, TextInput, } from "react-native";
import { COLORS, icons, images } from "../../constants";
import DocumentPicker from 'react-native-document-picker';
import styles from "./styles";

const MyProfile = ({ navigation }) => {
    const [singleFile, setSingleFile] = useState(images.profile2);

    const selectFile = async () => {
        const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.images],
        });
        setSingleFile(res);
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.profileContainer}>
                <View style={styles.imgBox}>
                    <Image style={styles.profile2} source={singleFile} resizeMode="contain" />
                    <TouchableOpacity style={styles.editBtn} onPress={selectFile}>
                        <Image style={styles.camera} source={icons.camera} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.labels}>Full Name</Text>
                <TextInput placeholder="Tiana Saris" placeholderTextColor={'#78828A'} style={styles.input} />
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.labels}>Email</Text>
                <TextInput placeholder="Brooklynsimmons@gmail.com" placeholderTextColor={'#78828A'} style={styles.input} />
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.labels}>Phone Number</Text>
                <TextInput placeholder="+1 3712 3789" placeholderTextColor={'#78828A'} style={styles.input} />
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.labels}>Address</Text>
                <TextInput numberOfLines={4}
                    textAlignVertical='top'
                    placeholder="711 Leavenworth Apt. # 47 San Francisco, CA 94109" placeholderTextColor={'#78828A'} style={styles.input} />
            </View>
            <View style={styles.bottomBtnContainer}>
                <TouchableOpacity >
                    <Image style={styles.rectangle} source={images.sendBtn} resizeMode="contain" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default MyProfile;