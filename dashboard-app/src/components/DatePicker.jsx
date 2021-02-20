import React, { useState } from 'react';
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const DatePicker = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [endDateFormatted, setEndDateFormatted] = useState(null);
    const [startDateFormatted, setStartDateFormatted] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null)

    const hundleDateChange = (startDate, endDate) => {
        setStartDate(startDate);
        setEndDate(endDate);
        if (startDate != null) {
            setStartDateFormatted(startDate.format("D-MM-Y"));
        }
        if (endDate != null) {
            setEndDateFormatted(endDate.format("D-MM-Y"));
        }
    }

    return (
        <div>
            <DateRangePicker
                startDate={startDate}
                startDateId="start_date_id"
                endDate={endDate}
                endDateId="end_date_id"
                onDatesChange={({ startDate, endDate }) =>
                    hundleDateChange(startDate, endDate)
                }
                focusedInput={focusedInput}
                onFocusChange={(focusedInput) => setFocusedInput({ focusedInput })}
            />
        </div>
    );
}

export default DatePicker;