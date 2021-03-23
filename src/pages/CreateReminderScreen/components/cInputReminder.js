import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { AccentColor, PrimaryColor, SecondaryColor } from '../../../utils/Constant'

const CInputReminder = ({onChangeText,value}) => {
    return (
        <View style={{backgroundColor:SecondaryColor,borderRadius:6,paddingHorizontal:12}}>
            <TextInput 
                placeholder="Title Reminder"
                onChangeText={onChangeText}
                value={value}
                style={{color:AccentColor}}
            />
        </View>
    )
}

export default React.memo(CInputReminder)
