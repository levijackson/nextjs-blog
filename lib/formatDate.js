import { parseISO, format } from 'date-fns'

export default (dateString, dateFormat) => {
    const date = parseISO(dateString);

    return format(date, dateFormat);
}