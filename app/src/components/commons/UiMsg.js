import "components/commons/UiMsg.css"
import M from "materialize-css"

class UiMsg {
    static error({message = '', error = ''}) {
        M.toast({html: message || error, classes: 'rounded', displayLength: 1500});
    }

    static alert({message = ''}) {
        M.toast({html: message, classes: 'rounded', displayLength: 1500});
    }

    static success({message = ''}) {
        alert(message);
    }
}

export default UiMsg;
