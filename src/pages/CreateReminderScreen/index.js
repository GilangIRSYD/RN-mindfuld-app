import React, { Component } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import CAppBar from '../../globalCOmponents/CAppBar'
import { SylHeadText, SylSafeAreaView, SylSubHead } from '../../utils/Constant'

export class CreateReminderScreen extends Component {
    onBackPress = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <SafeAreaView style={SylSafeAreaView}>
                <CAppBar
                    onBackPress={this.onBackPress}
                    title={"Set Reminder"}
                />
                <View style={{paddingHorizontal:16,paddingVertical:24}}>
                    <Text style={[SylSubHead,{fontSize:14}]}>SET TIME</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default CreateReminderScreen
