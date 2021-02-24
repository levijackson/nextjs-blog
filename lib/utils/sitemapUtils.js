const fs = require('fs');

const format = require('date-fns/format');

const formatDate = (dateString, dateFormat) => {
    const date = new Date(dateString);

    return format(date, dateFormat);
}

const getFileLastModTime = (path) => {
    const stats = fs.statSync(path);

    return stats.mtime;
}

const getPriority = (page) => {
    let priority = '0.5';

    if (page.includes('posts') || page.includes('blog')) {
        priority = '0.8';
    }

    return priority;
}

const getUrl = (page) => {
    let url = page
        .replace('pages', '')
        .replace('.js', '')
        .replace('.md', '');

        url = (url === '/index') ? '' : url;
    
    if (url[0] !== '/') {
        url = `/${url}`;
    }

    return `${url}/`;
}


exports.formatDate = formatDate;
exports.getFileLastModTime = getFileLastModTime;
exports.getPriority = getPriority;
exports.getUrl = getUrl;