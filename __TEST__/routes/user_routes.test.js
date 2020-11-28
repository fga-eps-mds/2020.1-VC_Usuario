const request = require('supertest');
const app = require('../../src/app');
const User = require('../../src/db/models/user')

it('User registration', async (done) => {
    await request(app).post('/user/register_user').send({
        user_name: 'Menino Ney',
        user_email: 'meninoney@vc.com',
        user_password: '1234'
    })
    .expect(200)    
    done()
})

afterEach(async(done) => {
    await User.deleteMany({})
    done()
})

afterAll((done) => {
    console.log("All user tests is done.")
    done();
});