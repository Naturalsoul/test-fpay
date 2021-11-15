const request = require('supertest');
const app = require('../index');
const expect = require('chai').expect;

describe('Test prime numbers', () => {
    it('Should return prime numbers', (done) => {
        request(app)
            .post('/api/data/primes')
            .send({ initialNumber: 15 })
            .end(
                (err, res) => {
                    if (err) throw err;
                    expect(res.body).to.have.property('status', true);
                    expect(res.body).to.have.property('primeNumbers').and.to.have.length;
                    done();
                }
            );
    });
    
    it('Should return error message', (done) => {
        request(app)
            .post('/api/data/primes')
            .send({ initialNumber: 1 })
            .end(
                (err, res) => {
                    if (err) throw err;
                    expect(res.body).to.have.property('status', false);
                    expect(res.body).to.have.property('message');
                    expect(res.body).to.not.have.property('primeNumbers');
                    done();
                }
            );
    });

    it('Should return bad request', (done) => {
        request(app)
            .post('/api/data/primes')
            .send({})
            .end(
                (err, res) => {
                    if (err) throw err;
                    expect(res).to.have.property('status', 400);
                    expect(res.body).to.have.property('status', false);
                    done();
                }
            );
    });
});