const request = require('supertest');
const app = require('../../src/app');
const Ups = require('../../src/db/models/UPS')

const ups = {
    fk_user_id: '5faddfeaf110e8001879a325',
    fk_postage_id: '5fc5830cdea241e70a64071d'
}

beforeEach(async () => {
    createdUps = await Ups.create(ups)
});

it('Create ups', async (done) => {
    await request(app).post('/ups/create').send({
        fk_user_id: '5faddfeaf110e8001879a324',
        fk_postage_id: '5fc5830cdea241e70a64071c'
    })
    .expect(200)
    done()
})

it('Erro create ups', async(done) => {
    await request(app).post('/ups/create').send({
        fk_postage_id: '5fc5830cdea241e70a64071c'
    }).expect(400)
    done()
})

it('List all ups', async (done) => {
    await request(app).get('/ups/list_all')
    .expect(200)
    done()
})

it('Delete all ups', async (done) => {
    await request(app).delete('/ups/delete_all')
    .expect(200)
    done()
})

it('Support postage', async (done) => {
    const user = await request(app).post('/user/register_user').send({
        user_name: 'UPS Test',
        user_email: 'ups@vc.com',
        user_password: 'ups123'
    }).expect(200)

    const user2 = await request(app).post('/user/register_user').send({
        user_name: 'UPS Test2',
        user_email: 'ups2@vc.com',
        user_password: 'ups123'
    }).expect(200)

    const post = await request(app).post('/postage/create_common').send({
        fk_user_id: user.body.User._id,
        post_place: 'FCE',
        post_category: 'Segurança',
        post_title: 'T-ara',
        post_description: 'As maiores do kpop.'
    }).expect(200)

    const res = await request(app).post('/ups/support_postage')
    .send({
        fk_user_id: user.body.User._id,
        fk_postage_id: post.body._id
    })
    expect(res.text).toBe('Apoio da Postagem T-ara foi modificado')

    const res2 = await request(app).post('/ups/support_postage')
    .send({
        fk_user_id: user.body.User._id,
        fk_postage_id: post.body._id
    }).expect(200)
    expect(res.text).toBe('Apoio da Postagem T-ara foi modificado')
    done()
})

afterEach(async(done) => {
    await Ups.deleteMany({})
    done()
})

afterAll((done) => {
    console.log("All UPS tests are done.")
    done();
});