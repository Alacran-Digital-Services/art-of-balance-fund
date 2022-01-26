import * as dayjs from 'dayjs'

export function generateCurrentDateTimeString() {
    return dayjs().format('DD-MM-YYYY:HH:MM:ss:SSS');
}
