import {Dimensions} from 'react-native';

export const PrimaryColor = '#6C63FF';
export const SecondaryColor = '#22225D';
export const AccentColor = '#E5CBE6';
export const DarkBackground = '#0F123B';
export const YellowColor = '#F9D462';

// constant value
export const ScreenHeight = Dimensions.get('window').height;
export const ScreenWidth = Dimensions.get('window').width;

//Font Family
export const Fredoka = 'fredoka';
export const Medium = 'mmedium';
export const Light = 'mlight';
export const Bold = 'mbold';

//style
export const SylSafeAreaView = {flex: 1, backgroundColor: DarkBackground};
export const SylHeadText = {fontFamily:Fredoka,color:AccentColor,fontSize:24}
export const SylText = {fontFamily:Medium,color:AccentColor,fontSize:14}
export const SylSubHead = {fontFamily:Bold,color:AccentColor,fontSize:18}



//text
export const MindfulnessDesc = "Mindfulnes adalah cara untuk memusatkan perhatian terhadap apa yang terjadi dengan sadar tanpa adanya penilaian"



// function
export const convertTimestamp = (unixTimestamp) => {
    const calendar = new Date(unixTimestamp);
    const months = ['Januari','Febuari','Maret','April','Mei','Juni','Juli','Agustus','Septempber','Oktober','November','Desember'];
    const year = calendar.getFullYear();
    const month = months[calendar.getMonth()];
    const date = calendar.getDate();
    const hour = calendar.getHours();
    const min = calendar.getMinutes();
    const sec = calendar.getSeconds();
    const times = {date,month,year,hour,min,sec}
    return times;
}

export const getCurrentTimestamp = () => {
    const date = new Date()
    return date.getTime()
}

export const timeFormatted = (timeStamp) => {
    const {hour,min} = convertTimestamp(timeStamp)
    const hourFormatted = hour < 10 ? `0${hour}` : hour
    const minFormatted = min < 10 ? `0${min}` : min
    const siklus = hour < 12 ? "AM" : "PM"

    return `${hourFormatted } : ${minFormatted} ${siklus}`
}