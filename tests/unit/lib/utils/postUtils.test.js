import 'regenerator-runtime/runtime';
import fs from 'fs'
import path from 'path'

import { getPostIdFromFileName, formatStaticPaths, sortPostsByDate, parsePostData } from '../../../../lib/utils/postUtils';

test('getPostIdFromFileName() - .md is removed from post file name', () => {
    expect(getPostIdFromFileName('foo-bar.md')).toBe('foo-bar');
});

test('formatStaticPaths() - static paths in correct format', () => {
    const fileNames = ['foo-bar.md', 'bar.md'];
    const paths = formatStaticPaths(fileNames);
    
    expect(paths[0].params.slug).toBe('foo-bar');
    expect(paths[1].params.slug).toBe('bar');
});

test('sortPostsByDate() - posts are sorted newest to oldest', () => {
    const posts = [
        {
            id: 'bar',
            date: '2019-12-01'
        },
        {
            id: 'foo',
            date: '2015-12-01'
        },
        {
            id: 'bah',
            date: '2020-12-01'
        },
    ];

    const sortedPosts = sortPostsByDate(posts);
    
    expect(sortedPosts[0].id).toBe('bah');
    expect(sortedPosts[1].id).toBe('bar');
    expect(sortedPosts[2].id).toBe('foo');
});

test('parsePostData() - title and date are included', () => {
    const mockContent = fs.readFileSync(path.join(process.cwd(), 'tests/unit/mocks/mock-post.md'), 'utf8');
    const postData = parsePostData(mockContent);

    expect(postData.title).toBe('Mock post');
    expect(postData.date).toBe('2015-04-20');
    expect(postData.excerpt).toBe('Test excerpt for post');
    expect(postData.content).toBe('\n# This is a test post\n\nSome content goes here.');
});


