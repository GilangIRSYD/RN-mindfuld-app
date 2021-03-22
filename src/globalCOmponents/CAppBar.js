import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import CMargin from './CMargin'
import { AccentColor, Bold, DarkBackground, } from '../utils/Constant';

const CAppBar = ({
        title="Title Appbar",
        iconStartName="chatbubbles-outline",
        iconEndName="ellipsis-vertical",
        iconMiddleName="chatbubbles-outline",
        iconBackName="chevron-back-outline",
        fontColor=AccentColor,
        backgroundColor=DarkBackground,
        fontSize=18,
        iconBackColor=AccentColor,
        onBackPress,
        onIconEndPress,
        onIconMiddlePress,
        onIconStartPress,
        iconEndColor=AccentColor,
        iconMidlleColor= AccentColor,
        iconStartColor=AccentColor, 
        containerStyle,
        fontFamily = Bold
}) => {

    
    return (
        <View style={[styles.container,{backgroundColor, ...containerStyle}]}>
            <View style={{flexDirection: 'row',flex:1,alignItems:'center'}}>
                {
                    !!onBackPress && (
                        <TouchableOpacity onPress={onBackPress} >
                            <Ionicons color={iconBackColor} name={iconBackName} size={25} />
                        </TouchableOpacity>
                    )
                }
                <CMargin width={8} />
                <Text numberOfLines={1} style={{fontFamily,fontSize,color:fontColor}}>
                    {title}
                </Text>
            </View>
            <View style={{flexDirection: 'row-reverse'}}>
                {
                    
                    !!onIconEndPress && (
                        <TouchableOpacity style={{marginLeft:24}} onPress={onIconEndPress} >
                            <Ionicons color={iconEndColor} name={iconEndName} size={25} />
                        </TouchableOpacity>
                    )

                }
                {
                    !!onIconMiddlePress && (
                        <TouchableOpacity style={{marginLeft:24}} onPress={onIconMiddlePress} >
                            <Ionicons color={iconMidlleColor} name={iconMiddleName} size={25} />
                        </TouchableOpacity>
                    )
                }
                {
                    !!onIconStartPress && (
                        <TouchableOpacity style={{marginLeft:12}} onPress={onIconStartPress} >
                            <Ionicons color={iconStartColor} name={iconStartName} size={25} />
                        </TouchableOpacity>
                    )
                }
                
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        height: 46,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
})

const propsAreEquals = (prev,next) => {
    return JSON.stringify(prev) === JSON.stringify(next)
}
export default React.memo(CAppBar,propsAreEquals)