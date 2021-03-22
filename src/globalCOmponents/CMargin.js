import React, {memo} from 'react';
import {View} from 'react-native';

function CMargin({height = 12, width = 0}) {
  // console.log("render, CMargin");
  return <View style={{marginTop: height, marginLeft: width}} />;
}
export default memo(CMargin);
