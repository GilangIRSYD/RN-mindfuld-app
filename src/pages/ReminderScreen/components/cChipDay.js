import React from 'react'
import { View, Text } from 'react-native'
import { AccentColor, ScreenWidth, SecondaryColor, SylText } from '../../../utils/Constant'

const CChipDay = ({isChecked,day}) => {
    return (
        isChecked 
        ?
        <View style={{backgroundColor:AccentColor,borderRadius:50,paddingVertical:8,paddingHorizontal:24,marginHorizontal:ScreenWidth * 0.01,marginBottom:16,minWidth:100,alignItems:'center'}}>
            <Text style={[SylText,{color:SecondaryColor}]}>{day}</Text>
        </View>
        :
        <View style={{borderRadius:50,paddingVertical:8,paddingHorizontal:24,borderColor:AccentColor,borderWidth:1,marginHorizontal:ScreenWidth * 0.01,marginBottom:16,minWidth:100,alignItems:'center'}}>
            <Text style={SylText}>{day}</Text>
        </View>
    )
}

export default React.memo(CChipDay)
