import React, { Component } from 'react'
import { Image, LogBox, SafeAreaView, ScrollView, Text, ToastAndroid, View } from 'react-native'
import CAppBar from '../../globalCOmponents/CAppBar'
import {SylSafeAreaView, SylText, MindfulInstruction, ScreenWidth, ScreenHeight, SylHeadText, Light, YellowColor, AccentColor, SecondaryColor, DarkBackground, getCurrentTimestamp, timeFormatted, durationFormated } from '../../utils/Constant'
import TrackPlayer, { ProgressComponent } from 'react-native-track-player';
import CMargin from '../../globalCOmponents/CMargin';
import CButton from '../../globalCOmponents/cButton';
import CProgress from './components/cProgress';
import CIconButton from '../../globalCOmponents/cIconButton';
import CInputMindfuld from './components/cInputMindfuld';
import { connect } from 'react-redux';
import { SET_LOG } from '../../redux/reducers/LogReducer';

LogBox.ignoreLogs(['No task registered for key TrackPlayer']);
class Mindfulness extends Component {

    state  = {
        isShowBtnFinish : false,
        isVisibleBtnSubmit : false,
        inputName:''
    }

    onBackPress = () => {
        this.props.navigation.goBack()
    }

    onChangeText = (inputName) => {
        this.setState({
            inputName
        })
    }

    initMusic = async () => {

        const {type} = await this.props.route.params
        const mindfuldName = await type === "MS" ? "Mindfuld Sitting" : type === "MW" ? "Mindfuld Walking" : "Mindfuld Eating"
        // Set up the player
        await TrackPlayer.setupPlayer();
    
        // Add a track to the queue
        await TrackPlayer.add({
            id: type,
            url: require('../../asssets/sounds/yarasulallah.mp3'),
            title: mindfuldName,
            artist: 'Keep relax and quiet',
            artwork: require("../../asssets/images/sitting.jpeg")
        });

        await TrackPlayer.updateOptions({
            stopWithApp: true,
            // capabilities: [
            //     TrackPlayer.CAPABILITY_PLAY,
            //     TrackPlayer.CAPABILITY_PAUSE,
            //     TrackPlayer.CAPABILITY_STOP,
            // ],
        })
    };

    componentDidMount(){
        this.initMusic()
        this.enteranceTime = getCurrentTimestamp()
    }

    componentWillUnmount(){
        TrackPlayer.destroy()
    }
    render() {
        const {type} = this.props.route.params
        const mindfuldName = type === "MS" ? "Mindfuld Sitting" : type === "MW" ? "Mindfuld Walking" : "Mindfuld Eating"
        return (
            <SafeAreaView style={SylSafeAreaView}>
                <CAppBar
                    onBackPress={this.onBackPress}
                    title={"Mindfuless"}
                />
                <ScrollView>
                    <View style={{paddingHorizontal:16,paddingVertical:24}}>
                        {/* <Text style={[SylText]}>{JSON.stringify(this.props.listLog)}</Text> */}
                        <Text style={[SylText,{textAlign:'center'}]}>{MindfulInstruction}</Text>
                        <View style={{alignItems:'center', marginTop:12}}>
                            <Image source={require("../../asssets/images/sitting.jpeg")} style={{height:ScreenHeight / 3, resizeMode:"contain",borderRadius:8}} />
                        </View>
                        <Text style={[{textAlign:'center', marginVertical:12, fontFamily:Light, fontSize:24,color:AccentColor}]}>{mindfuldName}</Text> 
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <CIconButton
                                title="PLAY"
                                iconName="play-outline"
                                onIconPress={this.onPlay}
                                // iconColor={}
                            />
                            <CMargin width={64}/>
                            <CIconButton
                                title="PAUSE"
                                iconName="pause-outline"
                                onIconPress={this.onPause}
                                // iconColor={}
                            />
                            <CMargin width={64}/>
                            <CIconButton
                                title="STOP"
                                iconName="stop-outline"
                                onIconPress={this.onStop}
                                // iconColor={}
                            />
                        </View>
                        <CMargin/>
                        <CProgress 
                            onSeeking={this.onSliderChange}
                        />
                        <CMargin height={32} />
                        <View>
                            {
                                !this.state.isVisibleBtnSubmit ?
                                this.state.isShowBtnFinish
                                ?
                                <CButton
                                    title="SELESAI"
                                    onButtonPress={this.onFinishMindfuld}
                                />
                                :
                                <CButton
                                    backgroundColor={SecondaryColor}
                                    fontColor={DarkBackground}
                                    title="SELESAI"
                                    disabled
                                />
                                : null
                            }
                            
                        </View>
                        {
                            this.state.isVisibleBtnSubmit &&
                            <View style={{marginBottom:14}}>
                                <CInputMindfuld
                                    onChangeText={this.onChangeText}
                                    value={this.state.inputName}
                                    onSubmit={this.onSubmitLog}
                                />
                            </View>
                        }
                        <CMargin  />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

    onSubmitLog = () => {
        if (this.state.inputName.trim() !== "") {
            const logActivity = {
                id: getCurrentTimestamp(),
                title : this.state.inputName,
                enteranceTime:this.enteranceTime,
                exitTime:this.exitTime
            }

            this.props.setLogActivity(logActivity)
            ToastAndroid.show("Successfull",ToastAndroid.SHORT)
            this.props.navigation.replace("LogScreen")
        }else {
            ToastAndroid.show("Masukkan Nama",ToastAndroid.SHORT)
        }
    }

    onFinishMindfuld = () => {
        this.onStop()
        this.setState({
            ...this.state,
            isVisibleBtnSubmit:true
        })
        TrackPlayer.destroy()
    }

    onSliderChange = (value) => {
        TrackPlayer.seekTo(value)
    }

    onPlay = () => {
        TrackPlayer.play()
        this.setState({
            isShowBtnFinish:true
        })
    }

    onStop = () => {
        TrackPlayer.stop()
        this.exitTime = getCurrentTimestamp()

        console.log("masuk",timeFormatted(this.enteranceTime));
        console.log("keluar",timeFormatted(this.exitTime));
        console.log("selisih",durationFormated(this.exitTime-this.enteranceTime))
    }

    onPause = () => {
        TrackPlayer.pause()
    }

}

const mapStateToProps = (state) => ({
    listLog : state.LogReducer.listLog
})

const mapDispatchToProps = dispatch => ({
    setLogActivity : logActivity => dispatch({type:SET_LOG,payload:logActivity}),
})


export default connect(mapStateToProps,mapDispatchToProps)(Mindfulness)
