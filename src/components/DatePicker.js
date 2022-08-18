import { TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React from "react";

const DatePicker = () => {
	const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

	const handleChange = (newValue) => {
		setValue(newValue);
	};
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DateTimePicker
				label="Date&Time picker"
				value={value}
				onChange={handleChange}
				renderInput={(params) => <TextField {...params} />}
			/>
		</LocalizationProvider>
	);
};

export default DatePicker;
