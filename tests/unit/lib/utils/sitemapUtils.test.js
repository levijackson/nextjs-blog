import { formatDate, getPriority, getUrl } from '../../../../lib/utils/sitemapUtils';

test('getPriority() - default page (not posts or blog)', () => {
    expect(getPriority('/about/')).toBe('0.5');
});

test('getPriority() - post priority is higher', () => {
    expect(getPriority('/posts/foo-bar/')).toBe('0.8');
});

test('getUrl() - strips out .md', () => {
    expect(getUrl('posts/levi-test.md')).toBe('/posts/levi-test/');
});

test('getUrl() - strips out .js', () => {
    expect(getUrl('posts/levi-test.js')).toBe('/posts/levi-test/');
});

test('getUrl() - strips out "pages"', () => {
    expect(getUrl('pages/levi-test')).toBe('/levi-test/');
});

test('formatDate() - can format date', () => {
    expect(formatDate('2020-12-28 10:00:00', 'yyyy-MM-dd')).toBe('2020-12-28');
});
