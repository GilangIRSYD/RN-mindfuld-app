import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import { Fredoka, YellowColor } from '../utils/Constant';

const CIconButton = ({onIconPress,title="TITLE",iconName="home",iconColor=YellowColor}) => {
    return (
        <TouchableOpacity onPress={onIconPress}>
            <View style={{alignItems:'center',justifyContent:'center',paddingVertical:4}}>
                <Ionicons name={iconName} color={iconColor} size={30} />
                <Text style={{fontFamily:Fredoka,fontSize:12,color:iconColor}}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CIconButton
