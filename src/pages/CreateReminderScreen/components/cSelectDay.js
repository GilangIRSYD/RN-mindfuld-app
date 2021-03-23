import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Checkbox from "@react-native-community/checkbox";
import { AccentColor, SylText } from '../../../utils/Constant';


const CSelectDay = ({day="Senin",callback,isChecked=false}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(isChecked);

  const onValueChange = (value) => {
    setToggleCheckBox(value)
    callback(value)
  }
  return (
    <View style={{flexDirection:'row',alignItems:'center',marginBottom: 12}}>
      <Checkbox
        value={toggleCheckBox}
        onValueChange={newValue => onValueChange(newValue)}
        tintColors={AccentColor}
      />
      <Text style={[SylText,{marginStart:12}]}>{day}</Text>
    </View>
  );
};

export default React.memo(CSelectDay);
