const request = require('supertest');
const app = require('../../src/app')

it('Main route test', async done => {
    await request(app).get('/')
    .expect(200)
    .expect({"esta": "funcionando"})
    done()
})

afterAll((done) => {
    console.log("The trivial test is done.")
    done();
}); 