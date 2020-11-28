const { json } = require('body-parser');
const request = require('supertest');
const { response } = require('../../src/app');
const app = require('../../src/app');
const Postage = require('../../src/db/models/postage')
const posts = [
    {
        fk_user_id: '5faddfeaf110e8001879a324',
        post_place: 'FGA',
        post_category: 'Segurança',
        post_title: 'Teste com jest',
        post_description: 'Mollit ipsum consectetur aliquip qui tempor excepteur. Elit enim do sit incididunt elit laborum fugiat labore adipisicing magna aute dolore. Velit ipsum consectetur labore ullamco ea eu deseruntl aborum ut.'
    },
    {
        fk_user_id: '6daddfeaf110e8001879a324',
        post_place: 'DARCY',
        post_category: 'Limpeza',
        post_title: 'Dreamcatcher lendas',
        post_description: 'Dream catcher perfeitas. Elit enim do sit incididunt elit laborum fugiat labore adipisicing magna aute dolore. Velit ipsum consectetur labore ullamco ea eu deseruntl aborum ut.'
    },
    {
        fk_user_id: '7eaddfeaf110e8001879a324',
        post_place: 'FCE',
        post_category: 'Segurança',
        post_title: 'Everyday girls day',
        post_description: 'As maiores do kpop. Elit enim do sit incididunt elit laborum fugiat labore adipisicing magna aute dolore. Velit ipsum consectetur labore ullamco ea eu deseruntl aborum ut.'
    }
];

beforeEach(async () => {
// posts[0].fk_user_id = null
// Para testar a listagem, como devo definir um user_id como null?
    await Postage.create(posts);
});

it('Anon post without image', async (done) => {
    await request(app).post('/postage/create_anon').send(posts[0])
    expect(200)
    done()
})

it('Common post without image', async (done) => {
    await request(app).post('/postage/create_common').send(posts[0])
    expect(200)
    done()
})

it('List all posts', async (done) => {
    const response = await request(app).get('/postage/list_all')
    expect(response.status).toBe(200)
    done()
})

it('List common posts', async (done) => {
    const response = await request(app).get('/postage/list_common')
    expect(response.status).toBe(200)
    done()
})

// it('List posts by category', async (done) => {
//     // Como listar mais de uma postagem com base nas categorias?
//     // Preciso ter mais postagens
//     const response = await request(app).post('/postage/create_anon').send(posts[0])

//     const responseGet = await request(app).get('/postage/list_by_category')
//     expect(responseGet.body).toBe(posts[0].post_category)
//     done()
// })

// it('List one post by id', async (done) => {
//     const response = await request(app).post('/postage/create_anon').send(posts[0])

//     await request(app).get(`/postage/list_one/${response.body._id}`)
//     expect(response.body.post_category)
//     done()
// })

// it('List all posts with UPS', async (done) => {
//     const response = await request(app).post('/postage/create_anon').send(posts[0])

//     const response2 = await request(app).get(`/postage/list_all/${response.body._id}`)
//     expect(response2.status).toBe(200)
//     done()
// })

afterAll((done) => {
    console.log("All postage tests is done.")
    done()
});

afterEach(async(done) => {
    await Postage.deleteMany({})
    done()
})