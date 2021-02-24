import React from 'react';

export default ({ href, title, children }) => {
  return <a href={href} target="_blank" rel="noopener noreferrer" title={title}>{children}</a>;
}
