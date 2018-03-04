/* eslint-disable global-require, prefer-promise-reject-errors */

const { expect } = require('chai');
const mockery = require('mockery');

function enableMockery() {
  mockery.enable({
    warnOnReplace: false,
    warnOnUnregistered: false,
    useCleanCache: true,
  });
}

afterEach(() => {
  mockery.deregisterAll();
  mockery.disable();
});

describe('getSkeletons', () => {
  it('Should return results as json.', (done) => {
    const data = { a: 1 };

    const mockResponse = {
      json: (respData) => {
        expect(respData).to.deep.equal(data);
        done();
      },
    };

    const dbMock = {
      query: () => Promise.resolve({ rows: data }),
    };

    enableMockery();
    mockery.registerMock('../lib/pg', dbMock);

    const { getSkeletons } = require('./');
    getSkeletons({}, mockResponse);
  });

  it('When an error occurs then should return 500 code and error message.', (done) => {
    const mockResponse = {
      status: (code) => {
        expect(code).to.equal(500);
        return {
          send: (msg) => {
            expect(msg).to.equal('Internal server error.');
            done();
          },
        };
      },
    };

    const dbMock = {
      query: () => Promise.reject('mock db error'),
    };

    enableMockery();
    mockery.registerMock('../lib/pg', dbMock);

    const { getSkeletons } = require('./');
    getSkeletons({}, mockResponse);
  });
});
