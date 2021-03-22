import React, { Component } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import CAppBar from '../../globalCOmponents/CAppBar'
import { MindfulnessDesc, ScreenWidth, SylHeadText, SylSafeAreaView, SylSubHead, SylText } from '../../utils/Constant'
import IllustrationMindfuld from "../../asssets/images/ilustration_mindfuld.svg";
import CMargin from '../../globalCOmponents/CMargin';

export class AboutScreen extends Component {

    onBackPress = () => {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <SafeAreaView style={SylSafeAreaView}>
                <CAppBar 
                    title={"About"}
                    onBackPress={this.onBackPress}
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{paddingVertical:24,paddingHorizontal:16}}>
                        <View style={{alignItems:'center'}}>
                            <IllustrationMindfuld width={ScreenWidth - 24} />
                        </View>
                        <View style={{alignItems:'center',marginTop:24}}>
                            <Text style={SylHeadText}>Apa itu Mindfulness?</Text>
                        </View>
                        <View>
                            <Text style={[SylText,{textAlign:'center',marginTop:24}]}>
                             {MindfulnessDesc}
                            </Text>
                        </View>
                        <View>
                            <Text style={[SylSubHead,{marginTop:64}]}>
                                Manfaat Mindfulness
                            </Text>
                            <CMargin/>
                            <Text style={[SylText,{marginBottom:8,marginStart:12}]}># Menghilangkan stress</Text>
                            <Text style={[SylText,{marginBottom:8,marginStart:12}]}># Meredakan rasa sakit</Text>
                            <Text style={[SylText,{marginBottom:8,marginStart:12}]}># Meningkatkan suasana hati</Text>
                            <Text style={[SylText,{marginBottom:8,marginStart:12}]}># Mengurangi rasa kesepian</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default AboutScreen
