import React, { Component } from 'react'
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import CAppBar from '../../globalCOmponents/CAppBar'
import { convertTimestamp, dayFormatted, durationFormated, SylHeadText, SylSafeAreaView, timeFormatted } from '../../utils/Constant'
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
                        data={this.props.listLog}
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
        const {date,month,year} = convertTimestamp(item.exitTime)
        return(
            <CItemLog
                dateLog={`${date}, ${month} ${year}`}
                duration={durationFormated(item.exitTime-item.enteranceTime)}
                endLogTime={timeFormatted(item.exitTime)}
                startLogTime={timeFormatted(item.enteranceTime)}
                titleLog={item.title}
            />
        )
    }

    keyExtractor = (item) => item.id
}

const mapStateToProps = (state) => ({
    listLog : state.LogReducer.listLog
})

const mapDispatchToProps = {
    
}


export default connect(mapStateToProps,mapDispatchToProps)(LogScreen)
