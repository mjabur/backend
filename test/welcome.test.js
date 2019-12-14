const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index');

describe('Welcome page', () => {
  it('should return Hello when asked for message 1', async() => {
    const res = await request(app) .get('/welcome/1');
    expect(res.statusCode).equals(200);
    expect(res.body).to.have.property('message', 'Hello');
  });
  it('should return Bye when asked for message 2', async() => {
    const res = await request(app) .get('/welcome/2');
    expect(res.statusCode).equals(200);
    expect(res.body).to.have.property('message', 'Bye');
    
  });
});