export const ModalConfirm = (confirmText, onConfirm) => {
    const r = window.confirm(confirmText);
    if (r === true) {
        !!onConfirm && onConfirm();
    }
}
