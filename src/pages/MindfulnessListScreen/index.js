import React, { Component } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import CAppBar from '../../globalCOmponents/CAppBar'
import { SylHeadText, SylSafeAreaView } from '../../utils/Constant'

export class MindfulnessListScreen extends Component {
    render() {
        return (
            <SafeAreaView style={SylSafeAreaView}>
                <CAppBar/>
                <View>
                    <Text style={SylHeadText}>MindfulnessListScreen</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default MindfulnessListScreen
