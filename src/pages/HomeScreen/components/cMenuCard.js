import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { AccentColor, ScreenWidth, SecondaryColor, SylText } from '../../../utils/Constant'
import Ionicons from "react-native-vector-icons/Ionicons";
import LogoOutline from "../../../asssets/images/logo-outline.svg";

const CMenuCard = ({backgroundColor=SecondaryColor,image=false,iconName="home",onCardPress,textCard="Text Card",color=AccentColor, svg=false}) => {
    const width = (ScreenWidth - 46) / 2
    return (
        <TouchableOpacity onPress={onCardPress}>
            <View style={{backgroundColor,width,borderRadius:10, alignItems:'center',paddingVertical:24, paddingHorizontal:12}}>
                {
                    image ?
                    <Image source={require("../../../asssets/images/head_mindfuld.png")} />
                    :
                    svg ?
                    <LogoOutline height={80}/>
                    :
                    <Ionicons name={iconName} size={75} color={AccentColor} />
                }
                <Text style={[SylText,{marginTop:24,fontSize:18,color}]}>{textCard}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default React.memo(CMenuCard)
