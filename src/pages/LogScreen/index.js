import React, { Component } from 'react'
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'
import CAppBar from '../../globalCOmponents/CAppBar'
import { SylHeadText, SylSafeAreaView } from '../../utils/Constant'
import cEmptyLog from './components/cEmptyLog'
import CItemLog from './components/cItemLog'

export class LogScreen extends Component {

    onBackPress = () => {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <SafeAreaView style={SylSafeAreaView}>
                <CAppBar
                    onBackPress={this.onBackPress}
                    title="Log Activity"
                />
                <View>
                    <FlatList 
                        data={[{id:"1"},{id:'2'}]}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                        contentContainerStyle={{paddingHorizontal:16,paddingVertical:24}}
                        ListEmptyComponent={cEmptyLog}
                    />
                </View>
            </SafeAreaView>
        )
    }

    renderItem = ({item}) => {
        return(
            <CItemLog/>
        )
    }

    keyExtractor = (item) => item.id
}

export default LogScreen
