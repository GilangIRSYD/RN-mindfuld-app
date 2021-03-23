import React, { Component } from 'react'
import { Text, View } from 'react-native'
import TrackPlayer from "react-native-track-player";
import Slider from "@react-native-community/slider";
import { Bold, formatTime, PrimaryColor, ScreenWidth, SylText, YellowColor } from '../../../utils/Constant';

export class CProgress extends TrackPlayer.ProgressComponent {

    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        const {onSeeking} = this.props
        return (
            <View>
                <View style={{paddingHorizontal:16}}>
                    <Slider 
                        maximumValue={this.state.duration}
                        minimumValue={0}
                        value={this.state.position}
                        onValueChange={onSeeking}
                        maximumTrackTintColor={PrimaryColor}
                        thumbImage={require("../../../asssets/images/thumb.png")}
                    />
                </View>
                <View style={{justifyContent:"space-between",flexDirection:"row",paddingHorizontal:12,marginTop:4}}>
                    <Text style={{fontFamily:Bold,color:YellowColor}}>{formatTime(~~(this.state.position))}</Text>
                    <Text style={{fontFamily:Bold,color:YellowColor}}>-{formatTime(~~(this.state.duration - this.state.position))}</Text>
                </View>
            </View>
        )
    }
}

export default CProgress
