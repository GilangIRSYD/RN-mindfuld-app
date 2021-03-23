import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Fredoka, PrimaryColor, SecondaryColor, SylHeadText, YellowColor } from '../utils/Constant'

const CButton = ({onButtonPress,title="BUTTON",borderRadius=8,backgroundColor=PrimaryColor,borderWidth,borderColor,paddingVertical=16,fontFamily=Fredoka,fontColor=YellowColor,disabled}) => {
    return (
        <TouchableOpacity onPress={onButtonPress} disabled={disabled}>
            <View style={{backgroundColor,borderRadius,paddingVertical,alignItems:'center',justifyContent:'center',borderWidth,borderColor}}>
                <Text style={[{fontSize:18,fontFamily,color:fontColor}]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CButton
