import React from 'react';

import formatDate from '../lib/formatDate';

export default ({ dateString }) => {
  return <time dateTime={dateString}>{formatDate(dateString, 'LLLL d, yyyy')}</time>
}
