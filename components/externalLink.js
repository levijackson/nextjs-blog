import React from 'react';

const externalLink = ({ href, title, children }) => <a href={href} target="_blank" rel="noopener noreferrer" title={title}>{children}</a>;

export default externalLink;
