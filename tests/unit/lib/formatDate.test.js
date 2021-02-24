import formatDate from '../../../lib/formatDate';

test('Blog date format', () => {
    expect(formatDate('2020-01-01', 'LLLL d, yyyy')).toBe('January 1, 2020');
});

test('Random date format', () => {
    expect(formatDate('2020-01-01', 'LLLL yyyy')).toBe('January 2020');
});