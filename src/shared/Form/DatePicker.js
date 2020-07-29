import React, { useState } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text } from 'native-base';

let months = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,

};
const DateTest = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = async (event, selectedDate) => {
    let currentDate = selectedDate || date;

    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    let year = selectedDate.toString().substring(11, 15);
    let month = selectedDate.toString().substring(4, 7);
    let day = selectedDate.toString().substring(8, 10);
    console.log("day")
    let fullDate = `${day}-${months[`${month}`]}-${year}`
    // let cutomize=`${}-`
    console.log("day", fullDate)
    console.log("day", year, month, day)

  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };


  return (
    <View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>


      {show && (
        <DateTimePicker


          value={date}
          mode={mode}

          display="spinner"
          onChange={onChange}
        />
      )}
    </View>
  );
};
export default DateTest;