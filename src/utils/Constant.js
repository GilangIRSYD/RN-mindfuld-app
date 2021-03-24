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
export const MindfulInstruction = "Latihan meditasi ini memerlukan waktu sekitar 10 menit. Persiapkan diri anda dan pastikan memilih tempat yang nyaman dan tenang"
export const AppExplanation = "Dalam Applikasi ini terdapat panduan untuk melakukan meditasi secara mandiri yang dapat mempermudah anda untuk latihan meditasi mindfulness"



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
    const day = calendar.getDay()
    const times = {date,month,year,hour,min,sec,day}
    return times;
}

export const getCurrentTimestamp = () => {
    const date = new Date()
    return date.getTime()
}

export const timeFormatted = (timeStamp) => {
    const {hour,min} = convertTimestamp(timeStamp)
    const hourFormatted = hour < 10 ? `0${hour}` : hour > 12 ? hour-12 < 10 ? `0${hour-12}` : hour-12 : hour
    const minFormatted = min < 10 ? `0${min}` : min
    const siklus = hour < 12 ? "AM" : "PM"

    return `${hourFormatted } : ${minFormatted} ${siklus}`
}

export const formatTime = (s) => {  
    return( s - ( s %= 60 ) ) / 60 + (9 < s ? ':' : ':0') + s ;       
}

export const durationFormated = (milisecond) => {
    
    let msec = milisecond;
    const hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    const mm = Math.floor(msec / 1000 / 60)
    msec -= mm * 1000 * 60;
    const ss = Math.floor(msec / 1000);
    msec -= ss * 1000;

    const hourFormatted = hh < 10 ? `0${hh}` : hh
    const minFormatted = mm < 10 ? `0${mm}` : mm
    const secFormatted = ss < 10 ? `0${ss}` : ss
    
    return `${hourFormatted} : ${minFormatted} : ${secFormatted}`
}

export const dayFormatted = (timestamps) => {
    const {date,month,year} = convertTimestamp(timestamps)
    return `${date}, ${month} ${year}`
}

// export const dayFormatted = (unixTimestamp) => {
//     // var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     const calendar = new Date(unixTimestamp);

//     return calendar.toLocaleString('id-ID',options)
// }