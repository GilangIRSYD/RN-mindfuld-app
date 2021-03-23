import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import CMargin from '../../../globalCOmponents/CMargin'
import { SecondaryColor, SylHeadText, YellowColor } from '../../../utils/Constant'

const CCardMindfuld = ({onPress,title}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{
                backgroundColor:SecondaryColor,
                marginVertical:12,
                padding:24,
                borderRadius:8,
                flexDirection:'row',
                alignItems:'center'
            }}>
                <Image source={require("../../../asssets/images/head_mindfuld.png")} />
                <CMargin width={24}/>
                <Text style={[SylHeadText,{color:YellowColor}]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default React.memo(CCardMindfuld)
