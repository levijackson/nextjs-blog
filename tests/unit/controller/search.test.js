import search from '../../../pages/api/search'

jest.mock('../../../lib/posts', () => {
    return {
        getPosts: jest.fn(() =>
            [
                { id: 'foo-bar' },
                { id: 'cool-blog-post' },
                { id: 'even-better-post' }
            ]
        )
    };
});

test("search filters", () => {
    const { mockRequest } = require('../mocks/request');
    const { mockResponse } = require('../mocks/response');

    const request = mockRequest();

    request.query = { q: 'foo' };

    const response = mockResponse();

    search(request, response);

    expect(response.statusValue).toBe(200);
    expect(response.jsonValue).toStrictEqual({results: [ { id: 'foo-bar' } ]});
});

test("no filters match", () => {
    const { mockRequest } = require('../mocks/request');
    const { mockResponse } = require('../mocks/response');

    const request = mockRequest();
    
    request.query = { q: '' };

    const response = mockResponse();

    search(request, response);

    expect(response.statusValue).toBe(200);
    expect(response.jsonValue).toStrictEqual({results: []});
});