const init = (Contact, { getDataController }) => {
    const getAll = () => {
        return [
            {
                title: 'Адрес',
                icon: 'home',
                values: ['София 1000', 'ж.к. Гео Милев', 'улица Войников 1']
            },
            {
                title: 'Телефон',
                icon: 'call',
                values: ['(+359) 888 888 888']
            },
            {
                title: 'Електронна поща',
                icon: 'email',
                values: ['somemail@somemail.com']
            }
        ]
    };

    return { getAll };
};

module.exports = { init };