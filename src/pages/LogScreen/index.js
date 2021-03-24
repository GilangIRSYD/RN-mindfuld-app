import React, { Component } from 'react'
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import CAppBar from '../../globalCOmponents/CAppBar'
import { DELETE_LOG } from '../../redux/reducers/LogReducer'
import { convertTimestamp, dayFormatted, durationFormated, SylHeadText, SylSafeAreaView, timeFormatted } from '../../utils/Constant'
import cEmptyLog from './components/cEmptyLog'
import CItemLog from './components/cItemLog'
import CModalLog from './components/cModalLog'

export class LogScreen extends Component {

    state={
        isVisibleModal:false,
        itemModal:{}
    }

    onBackPress = () => {
        this.props.navigation.goBack()
    }

    onDismiss = () => {
        this.setState({
            ...this.state,
            isVisibleModal: false
        })
    }

    onCardPress = (itemModal) => {
        this.setState({
            ...this.state,
            isVisibleModal:true,
            itemModal
        })
    }

    onDelete = () => {
        const id = this.state.itemModal.id
        this.props.deleteLog(id)
        this.setState({
            ...this.state,
            isVisibleModal: false
        })
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
                <CModalLog 
                    isVisible={this.state.isVisibleModal}
                    itemModal={this.state.itemModal}
                    onDismiss={this.onDismiss}
                    onDelete={this.onDelete}
                />
            </SafeAreaView>
        )
    }

    renderItem = ({item}) => {
        return(
            <CItemLog
                dateLog={dayFormatted(item.exitTime)}
                duration={durationFormated(item.exitTime-item.enteranceTime)}
                endLogTime={timeFormatted(item.exitTime)}
                startLogTime={timeFormatted(item.enteranceTime)}
                titleLog={item.title}
                onCardPress={()=>this.onCardPress(item)}
            />
        )
    }

    keyExtractor = (item) => item.id
}

const mapStateToProps = (state) => ({
    listLog : state.LogReducer.listLog
})

const mapDispatchToProps = dispatch => ({
    deleteLog : id => dispatch({type:DELETE_LOG,payload:id})
})


export default connect(mapStateToProps,mapDispatchToProps)(LogScreen)
