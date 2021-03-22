import React from 'react'
import { View, Text } from 'react-native'
import EmptyLog from "../../../asssets/images/empty_log.svg";
import { ScreenHeight, SylHeadText, SylText } from '../../../utils/Constant';

const CEmptyLog = () => {
    return (
        <View style={{height:ScreenHeight-150,alignItems:'center',justifyContent:'center'}}>
            <EmptyLog />
            <Text style={[SylHeadText,{marginTop:64}]}>Belum Ada Aktifitas</Text>
            <Text style={[SylText,{marginTop:24,textAlign:'center'}]}>Mulailah aktivitas mindfulness dan menyimpan catatan asktivitasmu disini</Text>
        </View>
    )
}

export default React.memo(CEmptyLog)
