import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import CAppBar from '../../globalCOmponents/CAppBar';
import IllustrationMindfuld from '../../asssets/images/ilustration_mindfuld.svg';
import {
  DarkBackground,
  PrimaryColor,
  ScreenWidth,
  SylHeadText,
  SylSafeAreaView,
  YellowColor,
} from '../../utils/Constant';
import CMenuCard from './components/cMenuCard';
import CMargin from '../../globalCOmponents/CMargin';

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={SylSafeAreaView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{paddingVertical: 24}}>
            <View style={{alignItems: 'center'}}>
              <Text style={[SylHeadText]}>Welcome to</Text>
              <Text style={[SylHeadText]}>Mobile Mindfulness</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <IllustrationMindfuld width={ScreenWidth - 24} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 24,
              }}>
              <CMenuCard
                image
                textCard={'Start Mindfulness'}
                color={YellowColor}
                backgroundColor={PrimaryColor}
                onCardPress={this.onStartMindfulness}
              />
              <CMargin width={12} />
              <CMenuCard 
                textCard={`Set a \nReminder`}
                iconName={"alarm-outline"}
                onCardPress={this.onSetReminder}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 12,
              }}>
              <CMenuCard 
                textCard={`Log \nActivity`}
                iconName={"document-text-outline"}
                onCardPress={this.onLogActivity}
              />
              <CMargin width={12} />
              <CMenuCard
                textCard={`About Mobile Mindfulnes`}
                iconName={"document-text-outline"}
                svg
                onCardPress={this.onAbout} 
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  onStartMindfulness = () => {
    this.props.navigation.navigate("MindfulnessListScreen")
  }

  onSetReminder = () => {
    this.props.navigation.navigate("ReminderScreen")
  }

  onLogActivity = () => {
    this.props.navigation.navigate("LogScreen")
  }

  onAbout = () => {
    this.props.navigation.navigate("AboutScreen")
  }
}

export default HomeScreen;
