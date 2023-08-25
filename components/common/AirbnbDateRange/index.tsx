/* eslint-disable  */
import { useState } from "react";
import {
  FocusedInputShape,
  SingleDatePicker
} from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

type dateRangeProps = {
  setStartDate: any;
  setEndDate: any;
  startDate: any;
  endDate: any;
};
const AirbnbDateRange = ({
  setStartDate,
  setEndDate,
  startDate,
  endDate,
  validateDate,
  setSelectedDate,
  selectedDate,
}: any) => {
  const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(
    null
  );

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    validateDate(date);
  };

  const handleFocusChange = (focusedInput: FocusedInputShape | null) => {
    setFocusedInput(focusedInput);
  };

  return (
    <div>
      <SingleDatePicker
        date={selectedDate}
        onDateChange={handleDateChange}
        focused={true}
        onFocusChange={() => {}}
        isOutsideRange={() => false}
        id="1"
      />
    </div>
  );
};

export default AirbnbDateRange;
