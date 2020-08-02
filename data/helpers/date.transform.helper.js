const months = ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септември', 'октомври', 'ноември', 'декември'];

const parseDate = (date) => {
    const month = months[date.getMonth()];
    const minutes = date.getMinutes();

    if (minutes.toString().length === 1) {
        minutes = `0${minutes}`;
    }

    return `${date.getDay()} ${month} ${date.getFullYear()} в ${date.getHours()}:${minutes} часа`;
};

module.exports = { parseDate };