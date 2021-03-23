import React, { Component } from 'react'
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import CAppBar from '../../globalCOmponents/CAppBar'
import { DELETE_REMINDER } from '../../redux/reducers/ReminderReducer'
import { getCurrentTimestamp, SylHeadText, SylSafeAreaView, SylText, timeFormatted } from '../../utils/Constant'
import CEmptyReminder from './components/cEmptyReminder'
import Cfab from './components/cfab'
import CItemReminder from './components/cItemReminder'
import CModalReminder from './components/cModalReminder'

export class ReminderScreen extends Component {

    state={
        isVisibleModal : false,
        itemModal : {}
    }

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
                <View style={{flex:1}}>
                    {/* <Text style={SylText}>{JSON.stringify(this.state.itemModal)}</Text> */}
                    <FlatList 
                        data={this.props.listReminder}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                        contentContainerStyle={{paddingHorizontal:16,paddingVertical:24}}
                        ListEmptyComponent={CEmptyReminder}
                    />
                    <Cfab
                        onFabPress={this.onFabPress}
                    />

                    <CModalReminder
                        isVisible={this.state.isVisibleModal}
                        title={this.state.itemModal.title}
                        time={this.state.itemModal.time}
                        selectedDay={this.state.itemModal.selectedDay}
                        onDismiss={this.onDismissModal}
                        onDelete ={this.onDeleteReminder}
                    />
                </View>
            </SafeAreaView>
        )
    }

    onDeleteReminder = () => {
        this.props.deleteReminder(this.state.itemModal.id)
        this.setState({
            ...this.state,
            isVisibleModal: false,
            itemModal : {}
        })
    }

    onDismissModal = ()=>{
        this.setState({
            ...this.state,
            isVisibleModal:false,
            itemModal:{}
        })
    }

    onItemPress = (item) => {
        this.setState({
            ...this.state,
            isVisibleModal: true,
            itemModal : item
        })
    }

    renderItem = ({item}) => {
        return(
            <CItemReminder
                title={item.title}
                time={item.time}
                daySelected={item.selectedDay}
                onPress={()=>this.onItemPress(item)}
            />
        )
    }

    keyExtractor = (item) => item.id
}

const mapStateToProps = (state) => ({
    listReminder : state.ReminderReducer.listReminder
})

const mapDispatchToProps = (dispatch) => ({
    deleteReminder : id => dispatch({type:DELETE_REMINDER,payload:id})  
})


export default connect(mapStateToProps,mapDispatchToProps)(ReminderScreen)
