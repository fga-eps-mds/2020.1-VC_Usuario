const request = require('supertest');
const app = require('../../src/app');
const User = require('../../src/db/models/user')

const user = {
    user_name: 'Sojin',
    user_email: 'sojin@vc.com',
    user_password: 'teste123'
}
const user2 = {
    user_name: 'Hyeri',
    user_email: 'hyeri@vc.com',
    user_password: 'hyeri123'
}

it('User registration', async (done) => {
    await request(app).post('/user/register_user').send({
        user_name: 'Menino Ney',
        user_email: 'meninoney@vc.com',
        user_password: '1234'
    })
    .expect(200)
    done()
})

it('User update', async (done) => {
    // Como passar os dados para serem atualizados?
    const response = await request(app).post('/user/register_user').send(user)

    const res2 = await request(app).put(`/user/update/${response.body.User._id}`).send({
        user_name: 'teste',
    })
    .expect(200)
    console.log(res2.body)
    done()
})

it('User list', async (done) => {
    await request(app).post('/user/register_user').send(user)
    await request(app).post('/user/register_user').send(user2)

    await request(app).get('/user/list_all')
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