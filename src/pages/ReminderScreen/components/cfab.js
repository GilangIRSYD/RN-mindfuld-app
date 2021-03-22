import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AccentColor, PrimaryColor} from '../../../utils/Constant';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CFab = ({onFabPress}) => {
  return (
    <TouchableOpacity
      onPress={onFabPress}
      style={{
        height: 65,
        width: 65,
        borderRadius: 40,
        backgroundColor: PrimaryColor,
        position: 'absolute',
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd:24,
        marginBottom:12
      }}>
      <View>
        <Ionicons name={'alarm-outline'} color={AccentColor} size={35} />
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(CFab);
