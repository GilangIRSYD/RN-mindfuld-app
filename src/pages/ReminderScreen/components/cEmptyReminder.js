import React from 'react'
import { View, Text } from 'react-native'
import EmptyLog from "../../../asssets/images/empty_log.svg";
import { ScreenHeight, SylHeadText, SylText } from '../../../utils/Constant';

const CEmptyReminder = () => {
    return (
        <View style={{height:ScreenHeight-150,alignItems:'center',justifyContent:'center'}}>
            <EmptyLog />
            <Text style={[SylHeadText,{marginTop:64}]}>Belum Ada Pengingat</Text>
            <Text style={[SylText,{marginTop:24,textAlign:'center'}]}>Kamu bisa menambahkan pengingat harian, dengan menekan tombol dibawah</Text>
        </View>
    )
}

export default CEmptyReminder
