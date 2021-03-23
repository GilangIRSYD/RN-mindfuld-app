import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import CAppBar from '../../globalCOmponents/CAppBar';
import {
  convertTimestamp,
  getCurrentTimestamp,
  SecondaryColor,
  SylHeadText,
  SylSafeAreaView,
  SylSubHead,
  SylText,
  timeFormatted,
} from '../../utils/Constant';
import DateTimePicker from '@react-native-community/datetimepicker';
import CSelectDay from './components/cSelectDay';
import {connect} from 'react-redux';
import CInputReminder from './components/cInputReminder';
import CMargin from '../../globalCOmponents/CMargin';
import CButton from '../../globalCOmponents/cButton';
import {SET_REMINDER} from '../../redux/reducers/ReminderReducer';

class CreateReminderScreen extends Component {
  state = {
    date: new Date(),
    isShowTimePicker: false,
    daySelected: [],
    inputTitle: '',
  };

  onBackPress = () => {
    this.props.navigation.goBack();
  };

  onChangeTimePicker = (event, selectedDate) => {
    console.log('event selected =', event.type);
    console.log('cek timestamp', convertTimestamp(selectedDate));

    if (event.type === 'set') {
      this.setState({
        ...this.state,
        date: selectedDate,
        isShowTimePicker: false,
      });
    }
    this.setState({
      ...this.state,
      isShowTimePicker: false,
    });
  };

  onSetTimePress = () => {
    this.setState({
      ...this.state,
      isShowTimePicker: true,
    });
  };

  onChangeText = value => {
    this.setState({
      inputTitle: value,
    });
  };

  render() {
    const time = timeFormatted(this.state.date);
    return (
      <SafeAreaView style={SylSafeAreaView}>
        <CAppBar onBackPress={this.onBackPress} title={'Set Reminder'} />
        {/* <Text style={SylText}>{JSON.stringify(this.props.listReminder)}</Text> */}
        {/* <Text style={SylText}>{JSON.stringify(this.state.daySelected)}</Text> */}
        <ScrollView>
          <View style={{paddingHorizontal: 16, paddingVertical: 24}}>
            <Text style={[SylSubHead, {fontSize: 14, marginBottom: 18}]}>
              TITLE
            </Text>
            <CInputReminder
              onChangeText={value => this.onChangeText(value)}
              value={this.state.inputTitle}
            />
            <CMargin />
            <Text style={[SylSubHead, {fontSize: 14, marginBottom: 18}]}>
              SET TIME
            </Text>
            {this.state.isShowTimePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={this.state.date}
                mode={'time'}
                is24Hour
                display="default"
                onChange={this.onChangeTimePicker}
              />
            )}
            <TouchableOpacity onPress={this.onSetTimePress}>
              <View
                style={{
                  backgroundColor: SecondaryColor,
                  paddingVertical: 24,
                  paddingHorizontal: 48,
                  alignItems: 'center',
                  borderRadius: 6,
                }}>
                <Text
                  style={[
                    SylSubHead,
                    {fontSize: 32},
                  ]}>{time}</Text>
              </View>
            </TouchableOpacity>
            <Text
              style={[
                SylSubHead,
                {fontSize: 14, marginBottom: 18, marginTop: 24},
              ]}>
              Pilih hari pengingat
            </Text>

            <CSelectDay 
              callback={isChecked => this.onSeninChecked(isChecked)}
            />
            <CSelectDay
              day="Selasa"
              callback={isChecked => this.onSelasaChecked(isChecked)}
            />
            <CSelectDay
              day="Rabu"
              callback={isChecked => this.onRabuChecked(isChecked)}
            />
            <CSelectDay
              day="Kamis"
              callback={isChecked => this.onKamisChecked(isChecked)}
            />
            <CSelectDay
              day="Jum'at"
              callback={isChecked => this.onJumatChecked(isChecked)}
            />
            <CSelectDay
              day="Sabtu"
              callback={isChecked => this.onSabtuChecked(isChecked)}
            />
            <CSelectDay
              day="Minggu"
              callback={isChecked => this.onMingguChecked(isChecked)}
            />
            <CMargin />
            <CButton title="SIMPAN" onButtonPress={this.onButtonSubmitt} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  onButtonSubmitt = () => {
    if (this.validation()) {
      const reminder = {
        id: getCurrentTimestamp(),
        selectedDay: this.state.daySelected,
        time : this.state.date,
        title: this.state.inputTitle,
      };
      this.props.setReminder(reminder);
      this.props.navigation.goBack()
      ToastAndroid.show('Successfull', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Lengkapi Data', ToastAndroid.SHORT);
    }
  };

  validation = () => {
    let isValid = true;

    if (this.state.inputTitle.trim() === '') {
      isValid = false;
    }

    if (this.state.daySelected.length < 1) {
      isValid = false;
    }

    return isValid;
  };

  onSeninChecked = value => {
    const day = this.state.daySelected;
    if (value) {
      day.push('Sn');
      this.setState({
        ...this.state,
        daySelected: day,
      });
    } else {
      const removedDay = day.filter(item => item !== 'Sn');
      this.setState({
        ...this.state,
        daySelected: removedDay,
      });
    }
  };

  onSelasaChecked = value => {
    const day = this.state.daySelected;
    if (value) {
      day.push('Sl');
      this.setState({
        ...this.state,
        daySelected: day,
      });
    } else {
      const removedDay = day.filter(item => item !== 'Sl');
      this.setState({
        ...this.state,
        daySelected: removedDay,
      });
    }
  };

  onRabuChecked = value => {
    const day = this.state.daySelected;
    if (value) {
      day.push('Rb');
      this.setState({
        ...this.state,
        daySelected: day,
      });
    } else {
      const removedDay = day.filter(item => item !== 'Rb');
      this.setState({
        ...this.state,
        daySelected: removedDay,
      });
    }
  };

  onKamisChecked = value => {
    const day = this.state.daySelected;
    if (value) {
      day.push('Km');
      this.setState({
        ...this.state,
        daySelected: day,
      });
    } else {
      const removedDay = day.filter(item => item !== 'Km');
      this.setState({
        ...this.state,
        daySelected: removedDay,
      });
    }
  };

  onJumatChecked = value => {
    const day = this.state.daySelected;
    if (value) {
      day.push("Jm");
      this.setState({
        ...this.state,
        daySelected: day,
      });
    } else {
      const removedDay = day.filter(item => item !== "Jm");
      this.setState({
        ...this.state,
        daySelected: removedDay,
      });
    }
  };

  onSabtuChecked = value => {
    const day = this.state.daySelected;
    if (value) {
      day.push('Sb');
      this.setState({
        ...this.state,
        daySelected: day,
      });
    } else {
      const removedDay = day.filter(item => item !== 'Sb');
      this.setState({
        ...this.state,
        daySelected: removedDay,
      });
    }
  };

  onMingguChecked = value => {
    const day = this.state.daySelected;
    if (value) {
      day.push('Mg');
      this.setState({
        ...this.state,
        daySelected: day,
      });
    } else {
      const removedDay = day.filter(item => item !== 'Mg');
      this.setState({
        ...this.state,
        daySelected: removedDay,
      });
    }
  };
}

const mapStateToProps = state => ({
  listReminder: state.ReminderReducer.listReminder,
});

const mapDispatchToProps = dispatch => ({
  setReminder: reminder => dispatch({type: SET_REMINDER, payload: reminder}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateReminderScreen);
