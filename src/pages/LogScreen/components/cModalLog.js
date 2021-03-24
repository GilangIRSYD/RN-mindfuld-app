import React from 'react'
import { View, Text, Modal, Image } from 'react-native'
import { DarkBackground, dayFormatted, durationFormated, Light, PrimaryColor, ScreenWidth, SecondaryColor, SylSubHead, SylText, timeFormatted, YellowColor } from '../../../utils/Constant'
import CButton from "../../../globalCOmponents/cButton";
import CMargin from '../../../globalCOmponents/CMargin';
const dummy = {
    title : "Gilang safera putrta muhammad irsyad ramadhan ",
    duration: "00:20:00",
    enteranceTime:new Date().getTime(),
    exitTime: new Date().getTime()
}

const CModalLog = ({isVisible,onDismiss,onDelete,itemModal=dummy}) => {
    return (
        <Modal
            visible={isVisible}
            transparent
            animationType="slide"
        >
            <View
                style={{backgroundColor:'#00000085',flex:1,alignItems:'center',justifyContent:'center'}}
            >
                <View style={{backgroundColor:SecondaryColor,borderRadius:10,paddingVertical:32,paddingHorizontal:24}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{maxWidth:ScreenWidth * 0.60, marginEnd:12,minWidth:ScreenWidth* 0.50}}>
                            <Text style={[SylSubHead,{marginBottom:12}]}>{itemModal.title}</Text>
                            <Text style={[SylText,{marginBottom:4}]}>Duration</Text>
                            <View style={{backgroundColor:YellowColor,borderRadius:6,alignItems:'center',paddingHorizontal:18,paddingVertical:8,alignSelf:'baseline'}}>
                                <Text style={[SylText,{color:DarkBackground}]}>{durationFormated(itemModal.exitTime-itemModal.enteranceTime)}</Text>
                            </View>
                            <Text style={[[SylText,{marginTop:12}]]}>{dayFormatted(itemModal.exitTime)}</Text>
                        </View> 
                        <View style={{justifyContent:'center'}}>
                            <Image source={require("../../../asssets/images/sitting.jpeg")} style={{height:100,width:90,resizeMode:'contain', borderRadius:10}} />
                        </View>
                    </View>
                    <View>
                        <Text style={[[SylText,{marginTop:8,fontFamily:Light}]]}>{`Start at ${timeFormatted(itemModal.enteranceTime)} Until ${timeFormatted(itemModal.exitTime)}`}</Text>
                        <CMargin height={24}/>
                        <CButton
                            title={"OK"}
                            paddingVertical={12}
                            onButtonPress={onDismiss}
                        />
                        <CMargin/>
                        <CButton
                            title={"DELETE"}
                            paddingVertical={12}
                            onButtonPress={onDelete}
                            backgroundColor={SecondaryColor}
                            borderColor={PrimaryColor}
                            borderWidth={1}
                            fontColor={PrimaryColor}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const propsAreEquals = (prev,next) => {
    return JSON.stringify(prev) === JSON.stringify(next)
}

export default React.memo(CModalLog,propsAreEquals)
