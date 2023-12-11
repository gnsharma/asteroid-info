import * as React from "react";
import { useDateRangePickerState } from "@react-stately/datepicker";
import { useDateRangePicker } from "@react-aria/datepicker";

import { Button, TextField, Dialog, Popover } from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function DateRangePicker(props: any) {
	let state = useDateRangePickerState(props);
	let ref = React.useRef<any>();
	let {
		labelProps,
		groupProps,
		startFieldProps,
		endFieldProps,
		buttonProps,
		dialogProps,
		calendarProps,
	} = useDateRangePicker(props, state, ref);

	return (
		<div style={{ display: "inline-flex", flexDirection: "column" }}>
			<span {...labelProps}>{props.label}</span>
			{/* <div {...groupProps} ref={ref} style={{ display: "flex" }}>
        <div className="field">
          <TextField variant="standard" {...startFieldProps} />
          <span style={{ padding: "0 4px" }}>–</span>
          <TextField variant="standard" {...endFieldProps} />
        </div>
        <Button {...buttonProps} onClick={() => state.setOpen(true)}>
          Icon
        </Button>
      </div>
      <Popover open={state.isOpen}>
        <Dialog {...dialogProps}>
        <DatePicker
          {...calendarProps}
          renderInput={(params) => <TextField {...params} />}
        />
        </Dialog>
      </Popover> */}
		</div>
	);
}

export default DateRangePicker;
