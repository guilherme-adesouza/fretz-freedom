import React from "react";

class UiMsg {
    static error({message = '', error = ''}) {
        alert(`${message} :\n\t${JSON.stringify(error)}`);
    }

    static alert({message = ''}) {
        alert(message);
    }

    static success({message = ''}) {
        alert(message);
    }
}

export default UiMsg;
