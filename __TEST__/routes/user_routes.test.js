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
let createdUser, createdUser2;

beforeEach(async () => {
    createdUser = await User.create(user)
    createdUser2 = await User.create(user2)
});

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
    // Como passar os dados para serem atualizados? Não funciona direito
    await request(app).put(`/user/update/${createdUser._id}`).send({
        nome: 'Atualizando nome',
    })
    .expect(200)
    done()
})

it('User list', async (done) => {
    await request(app).get('/user/list_all')
    .expect(200)
    done()
})

it('User login', async (done) => {
    const response2 = await request(app).post('/user/login').send({
        email: createdUser.user_email,
        password: 'teste123'
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