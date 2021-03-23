import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {AccentColor, Bold, DarkBackground, PrimaryColor, SecondaryColor, YellowColor} from '../../../utils/Constant';

const CInputMindfuld = ({onSubmit,onChangeText,value}) => {
  return (
    <View
      style={{
        backgroundColor: SecondaryColor,
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 6,
        marginBottom: 12,
        flexDirection:'row',
        alignItems:'center'
      }}>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        autoFocus
        placeholder="Masukan Nama"
        style={{color: AccentColor,flex:1}}
      />
      <TouchableOpacity onPress={onSubmit}>
        <View style={{marginStart:12,paddingVertical:12}}>
          <Text style={{fontFamily:Bold,color:YellowColor}}>SUBMIT LOG</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(CInputMindfuld);
