import React from 'react';

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

const TimePickerField = ({
                       type = "text",
                       title = null,
                       placeholder = '',
                       className = '',
                       description = '',
                       field,
                       form,
                       children,
                       ...props
                   }) => {
    const {value, ...fieldProps} = field;
    return (
        <input className={`${className}`}
               type="date"
               value={formatDate(value)}
               {...fieldProps}
               {...props}/>
    );
};

export default TimePickerField;
