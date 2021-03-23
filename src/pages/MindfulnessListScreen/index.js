import React, { Component } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import CAppBar from '../../globalCOmponents/CAppBar'
import CMargin from '../../globalCOmponents/CMargin'
import { Light, SylHeadText, SylSafeAreaView, SylText } from '../../utils/Constant'
import CCardMindfuld from '../MindfulnessScreen/components/cCardMindfuld'

export class MindfulnessListScreen extends Component {

    onBackPress = () => {
        this.props.navigation.goBack()
    }

    onSittingPress = () => {

    }

    onWalkingPress = () => {
        
    }

    onEatingPress = () => {
        
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
