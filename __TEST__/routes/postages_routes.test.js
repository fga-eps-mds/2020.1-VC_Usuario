const request = require('supertest');
const app = require('../../src/app');
const Postage = require('../../src/db/models/postage')
const post = {
    fk_user_id: '5faddfeaf110e8001879a324',
    post_place: 'FGA',
    post_category: 'Segurança',
    post_title: 'Teste com jest',
    post_description: 'Mollit ipsum consectetur aliquip qui tempor excepteur. Elit enim do sit incididunt elit laborum fugiat labore adipisicing magna aute dolore. Velit ipsum consectetur labore ullamco ea eu deseruntl aborum ut.'
}

it('Anon post without image', async (done) => {
    await request(app).post('/postage/create_anon').send(post)
    .expect(200)
    done()
})

afterAll((done) => {
    console.log("All postage tests is done.")
    done();
});

afterEach(async(done) => {
    await Postage.deleteMany({})
    done()
})