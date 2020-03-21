import * as yupOriginal from 'yup';

yupOriginal.setLocale({
    mixed: {
        required: 'Obrigatório',
    },
    number: {
        min: 'Deve ser maior que ${min}',
    },
});

export const yup = (fn) => fn(yupOriginal);
