import React from 'react';
import {View, Text, Modal} from 'react-native';
import {AccentColor, Medium, PrimaryColor, ScreenWidth, SecondaryColor, SylSubHead, SylText, timeFormatted} from '../../../utils/Constant';
import Ionicons from "react-native-vector-icons/Ionicons";
import CChipDay from './cChipDay';
import CMargin from '../../../globalCOmponents/CMargin';
import CButton from '../../../globalCOmponents/cButton';

const CModalReminder = ({title,onDismiss,onDelete,selectedDay=[],time,isVisible=false}) => {
  return (
    <Modal visible={isVisible} transparent animationType={'slide'} onRequestClose={onDismiss}>
      <View
        style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          backgroundColor:"#00000080"
        }}>
        <View style={{
            backgroundColor:SecondaryColor,
            paddingHorizontal:16,
            paddingVertical:24,
            width: ScreenWidth - 24,
            borderRadius:20
        }}>
            <Text style={[SylText,{fontSize:18,marginStart:12,marginBottom:12}]}>{title}</Text>
            <View style={{alignItems:'center'}}>
                <Ionicons name={"alarm-outline"} color={AccentColor} size={80} />
                <Text style={[SylSubHead,{fontSize:24,marginTop:12}]}>{timeFormatted(time)}</Text>
            </View>
            <CMargin height={24}/>
            <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:'center'}}>
                <CChipDay
                    day={"Senin"}
                    isChecked={selectedDay.includes("Sn")}
                />
                <CChipDay
                    day={"Selasa"}
                    isChecked={selectedDay.includes("Sl")}
                />
                <CChipDay
                    day={"Rabu"}
                    isChecked={selectedDay.includes("Rb")}
                />
                <CChipDay
                    day={"Kamis"}
                    isChecked={selectedDay.includes("Km")}
                />
                <CChipDay
                    day={"Jum'at"}
                    isChecked={selectedDay.includes("Jm")}
                />
                <CChipDay
                    day={"Sabtu"}
                    isChecked={selectedDay.includes("Sb")}
                />
                <CChipDay
                    day={"Minggu"}
                    isChecked={selectedDay.includes("Mg")}
                />
            </View>
            <View style={{marginTop:12}}>
                <CButton
                    paddingVertical={12}
                    title={"OK"}
                    fontFamily={Medium}
                    onButtonPress={onDismiss}
                    backgroundColor={AccentColor}
                    fontColor={SecondaryColor}
                    
                />
                <CMargin/>
                <CButton
                    paddingVertical={12}
                    fontFamily={Medium}
                    title={"DELETE"}
                    onButtonPress={onDelete}
                    backgroundColor={SecondaryColor}
                    borderColor={AccentColor}
                    fontColor={AccentColor}
                    borderWidth={1}
                />
            </View>
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(CModalReminder);
