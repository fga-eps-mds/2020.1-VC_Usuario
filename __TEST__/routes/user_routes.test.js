const request = require('supertest');
const app = require('../../src/app');
const User = require('../../src/db/models/user')
const data = require('../data/data')

let createdUser;

beforeEach(async () => {
    createdUser = await User.create(data.user)
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
    await request(app).post('/user/login').send({
        email: createdUser.user_email,
        password: 'teste123'
    })
    .expect(200)
    done()
})

it('User login with invalid email', async (done) => {
    await request(app).post('/user/login').send({
        email: 'invalid@email',
        password: 'teste123'
    })
    .expect(401)
    done()
})

it('User login with invalid password', async (done) => {
    await request(app).post('/user/login').send({
        email: createdUser.user_email,
        password: 'senhainvalida'
    })
    .expect(401)
    done()
})

it('User validate session', async (done) => {
    const getToken = await request(app).post('/user/login').send({
        email: createdUser.user_email,
        password: 'teste123'
    })

    await request(app).get('/user/validate_session')
    .set('Authorization', `Bearer ${getToken.body.token}`)
    .expect(200)
    done()
})

it('User validate session without token', async (done) => {
    await request(app).get('/user/validate_session')
    .expect(401)
    done()
})

it('User validate session without correct token', async (done) => {
    const getToken = await request(app).post('/user/login').send({
        email: createdUser.user_email,
        password: 'teste123'
    })

    await request(app).get('/user/validate_session')
    .set('Authorization', `${getToken.body.token}`)
    .expect(401)
    done()
})

it('User validate session with a bad formated token', async (done) => {
    const getToken = await request(app).post('/user/login').send({
        email: createdUser.user_email,
        password: 'teste123'
    })

    await request(app).get('/user/validate_session')
    .set('Authorization', `invalid ${getToken.body.token}`)
    .expect(401)
    done()
})

it('User validate session with a invalid token', async (done) => {
    const getToken = await request(app).post('/user/login').send({
        email: createdUser.user_email,
        password: 'teste123'
    })

    await request(app).get('/user/validate_session')
    .set('Authorization', `Bearer invalid`)
    .expect(401)
    done()
})

it('User list postages', async (done) => {
    await request(app).get(`/user/list_postages/${createdUser._id}`)
    .expect(200)
    done()
})

it('Delete all users', async (done) => {
    await request(app).delete('/user/delete_all')
    .expect(200)
    done()
})

it('Delete one user', async (done) => {
    const response = await request(app).delete(`/user/delete/${createdUser._id}`)
    expect(response.body).toStrictEqual({"msg": "Usuário deletado com sucesso!"})
    done()
})

it('Change user password', async (done) => {
    const response = await request(app).put(`/user/change_password/${createdUser._id}`)
    .send({
        password: 'updatedPassword'
    })
    expect(response.body).toStrictEqual({"msg": "Senha Atualizados com sucesso!"})
    done()
})

afterEach(async(done) => {
    await User.deleteMany({})
    done()
})

afterAll((done) => {
    console.log("All user tests are done.")
    done();
});