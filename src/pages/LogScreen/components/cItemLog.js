import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CMargin from '../../../globalCOmponents/CMargin';
import {DarkBackground, SecondaryColor, SylHeadText, SylSubHead, SylText, YellowColor} from '../../../utils/Constant';

const CItemLog = ({titleLog="Gilang safera",dateLog="10:20:22",startLogTime="10:11",endLogTime="10:12",duration="30:00:10",onCardPress}) => {
  return (
    <TouchableOpacity onPress={onCardPress}>
      <View
        style={{
          backgroundColor: SecondaryColor,
          paddingVertical: 24,
          paddingHorizontal: 24,
          marginBottom: 24,
          borderRadius: 10,
        }}>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}>
                <Text style={[SylSubHead,{marginBottom:4,fontSize:14}]}>{titleLog}</Text>
                <Text style={[SylText,{marginBottom:12}]}>{dateLog}</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={SylText}>Duration</Text>
                <CMargin height={4}/>
                <View style={{backgroundColor:YellowColor,borderRadius:6,alignItems:'center',paddingHorizontal:18,paddingVertical:8}}>
                    <Text style={[SylText,{color:DarkBackground}]}>{duration}</Text>
                </View>
            </View>
          </View>
          <CMargin />
          <Text style={SylText}>{`Start at ${startLogTime} Until ${endLogTime}`}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default React.memo(CItemLog);
