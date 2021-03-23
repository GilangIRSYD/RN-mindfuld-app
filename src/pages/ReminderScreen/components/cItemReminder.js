import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
    AccentColor,
  Bold,
    DarkBackground,
  SecondaryColor,
  SylText,
  timeFormatted,
  YellowColor,
} from '../../../utils/Constant';
import Ionicons from "react-native-vector-icons/Ionicons";

const CItemReminder = ({title, onPress, time,daySelected}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: SecondaryColor,
          marginBottom: 24,
          paddingVertical: 12,
          paddingHorizontal: 18,
          borderRadius: 6,
          flexDirection: 'row',
        }}>
        <View style={{justifyContent:'center',marginEnd:12}}>
          <Text style={{fontFamily: Bold, color: YellowColor}}>
            {timeFormatted(time)}
          </Text>
        </View>

        <View style={{backgroundColor:DarkBackground,width:2,height:45,borderRadius:2,marginEnd:12}}>
        </View>

        <View style={{justifyContent:'center',flex:1}}>
            <Text style={[SylText,{fontFamily:Bold}]}>{title}</Text>
            <Text style={[SylText]}>{daySelected.join(" ")}</Text>
        </View>

        <View style={{justifyContent:'center'}}>
            <Ionicons name="alarm-outline" color={AccentColor} size={40} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(CItemReminder);
