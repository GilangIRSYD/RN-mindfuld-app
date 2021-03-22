import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { AccentColor, DarkBackground, Fredoka, YellowColor } from '../../utils/Constant';
import LogoMM from "../../asssets/images/logomm.svg";
import CMargin from '../../globalCOmponents/CMargin';

export class SplashScreen extends Component {

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.replace("HomeScreen")
        }, 2000);
    }

    render() {
        return (
            <View style={{backgroundColor:DarkBackground,flex:1}}>
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <LogoMM />
                    <CMargin height={24}/>
                    <Text style={{fontFamily:"fredoka",color:YellowColor, fontSize:24}}> Mobile Mindfulness </Text>
                </View>
            </View>
        )
    }
}

export default SplashScreen
