import dayjs from 'dayjs'

function dayFormat(date: any) {
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
}
function tableDayFormat(row: any, column: any, cellValue: any, index: any) {
    return dayjs(cellValue).format('YYYY-MM-DD HH:mm:ss')
}
export {
    dayFormat,
    tableDayFormat
}