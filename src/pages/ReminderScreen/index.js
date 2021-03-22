import React, { Component } from 'react'
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'
import CAppBar from '../../globalCOmponents/CAppBar'
import { SylHeadText, SylSafeAreaView } from '../../utils/Constant'
import CEmptyReminder from './components/cEmptyReminder'
import Cfab from './components/cfab'

export class ReminderScreen extends Component {
    onBackPress = () => {
        this.props.navigation.goBack()
    }

    onFabPress = () => {
        this.props.navigation.navigate("CreateReminderScreen")
    }

    render() {
        return (
            <SafeAreaView style={SylSafeAreaView}>
                <CAppBar
                    onBackPress={this.onBackPress}
                    title="Reminder"
                />
                <View>
                    <FlatList 
                        // data={[{id:"1"},{id:'2'}]}
                        data={[]}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                        contentContainerStyle={{paddingHorizontal:16,paddingVertical:24}}
                        ListEmptyComponent={CEmptyReminder}
                    />
                    <Cfab
                        onFabPress={this.onFabPress}
                    />
                </View>
            </SafeAreaView>
        )
    }

    renderItem = ({item}) => {
        return(
            // <CItemLog/>
            <Text>sd</Text>
        )
    }

    keyExtractor = (item) => item.id
}

export default ReminderScreen
