/**
 * DatePicker component
 * Used react-date-range library to implement date range picker with date-fns library
 */
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Box, Flex, Input } from '@chakra-ui/react';

const Datepicker = () => {
    const [display, setDisplay] = useState("none");
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    const startDateFormatted = state[0].startDate.toDateString();
    const endDateFormatted = state[0].endDate.toDateString();
    const dateRange = startDateFormatted + " - " + endDateFormatted;

    const handleToggle = () => {
        if (display === 'none') {
            setDisplay("block");
        } else {
            setDisplay("none");
        }
    }
    return (
        <>
            <Flex mt={4} onClick={handleToggle} justifyContent="space-between" style={{ border: "1px solid #eee" }}>
                <Input type="text" style={{ caretColor: "transparent", borderWidth: "0", border: "none" }} cursor="pointer" outline="none" width="255px" value={dateRange} size="sm" />
                <Box mt={1} pr={3} cursor="pointer">&#128197;</Box>
            </Flex>
            <Box style={{ display }}>
                <DateRangePicker
                    showDateDisplay={true}
                    onChange={item => setState([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={state}
                    direction="horizontal"
                />
            </Box>
        </>
    )

}

export default Datepicker;