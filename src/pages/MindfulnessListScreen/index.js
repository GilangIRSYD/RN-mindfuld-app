import React, { Component } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import CAppBar from '../../globalCOmponents/CAppBar'
import CMargin from '../../globalCOmponents/CMargin'
import { Light, SylSafeAreaView, SylText } from '../../utils/Constant'
import CCardMindfuld from '../MindfulnessScreen/components/cCardMindfuld'

export class MindfulnessListScreen extends Component {

    onBackPress = () => {
        this.props.navigation.goBack()
    }

    onSittingPress = () => {
        this.props.navigation.navigate("MindfulnessScreen",{type:"MS"})
    }

    onWalkingPress = () => {
        this.props.navigation.navigate("MindfulnessScreen",{type:"MW"})
    }

    onEatingPress = () => {
        this.props.navigation.navigate("MindfulnessScreen",{type:"ME"})
    }

    render() {
        return (
            <SafeAreaView style={SylSafeAreaView}>
                <CAppBar
                    onBackPress={this.onBackPress}
                    title="Mindfulness"
                />
                <View style={{paddingVertical:24,paddingHorizontal:16}}>
                    <Text style={[SylText,{fontFamily:Light}]}>Pilih jenis meditasi</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <CCardMindfuld
                        title="Mindful Sitting"
                        onPress={this.onSittingPress}
                    />
                    <CCardMindfuld
                        title="Mindful Walking"
                        onPress={this.onWalkingPress}
                    />
                    <CCardMindfuld
                        title="Mindful Eating"
                        onPress={this.onEatingPress}
                    />
                    <CMargin height={64}/>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

export default MindfulnessListScreen
