import { parseISO, format } from 'date-fns'

const formatData = (dateString, dateFormat) => {
    const date = parseISO(dateString);

    return format(date, dateFormat);
}

export default formatData;