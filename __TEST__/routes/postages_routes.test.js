const { json } = require('body-parser');
const request = require('supertest');
const { response } = require('../../src/app');
const app = require('../../src/app');
const Postage = require('../../src/db/models/postage')
const posts = [{
        fk_user_id: '5faddfeaf110e8001879a324',
        post_place: 'FGA',
        post_category: 'Segurança',
        post_title: 'Teste com jest',
        post_description: 'Mollit ipsum consectetur aliquip qui tempor excepteur. Elit enim do sit incididunt elit laborum fugiat labore adipisicing magna aute dolore. Velit ipsum consectetur labore ullamco ea eu deseruntl aborum ut.'
    },
    {
        fk_user_id: '5faddfeaf110e8001879a324',
        post_place: 'FGA',
        post_category: 'Limpeza',
        post_title: 'Teste com jest',
        post_description: 'Mollit ipsum consectetur aliquip qui tempor excepteur.'
    },
    {
        fk_user_id: '7eaddfeaf110e8001879a324',
        post_place: 'FCE',
        post_category: 'Meio Ambiente',
        post_title: 'Everyday girls day',
        post_description: 'As maiores do kpop. Elit enim do sit incididunt elit laborum fugiat labore adipisicing magna aute dolore. Velit ipsum consectetur labore ullamco ea eu deseruntl aborum ut.'
    }
]


beforeEach(async () => {
// Para testar a listagem, como devo definir um user_id como null?
    await Postage.deleteMany({})
    posts[0].fk_user_id = null
    await Postage(posts[0]).save();
    await Postage(posts[1]).save();
    await Postage(posts[2]).save();
});

it('Anon post without image', async (done) => {
    await request(app).post('/postage/create_anon').send({
        post_place: 'DARCY',
        post_category: 'Limpeza',
        post_title: 'Dreamcatcher lendas',
        post_description: 'Dream catcher perfeitas.'
    })
    .expect(200)
    done()
})

it('Common post without image', async (done) => {
    await request(app).post('/postage/create_common').send({
        fk_user_id: '7eaddfeaf110e8001879a324',
        post_place: 'FCE',
        post_category: 'Segurança',
        post_title: 'Everyday girls day',
        post_description: 'As maiores do kpop.'
    })
    .expect(200)
    done()
})

it('List all posts', async (done) => {
    const response = await request(app).get('/postage/list_all')
    .expect(200)
    done()
})

it('List common posts', async (done) => {
    const response = await request(app).get('/postage/list_common')
    .expect(200)
    done()
})

it('List posts by category', async (done) => {
    // Como listar mais de uma postagem com base nas categorias?
    // O response.body não está retornando nenhuma postagem. Como passar a categoria que quero filtrar?
    const response = await request(app).get('/postage/list_by_category')
    .expect(200)
    // console.log(response.body)
    done()
})

it('List one post by id', async (done) => {
    // Preciso de um id de postagem para realizar a filtragem
    const response = await request(app).post('/postage/create_anon').send(posts[0])

    await request(app).get(`/postage/list_one/${response.body._id}`)
    .expect(200)
    done()
})

it('List all posts with UPS', async (done) => {
    // Como criar uma UPS para testar se essa rota funciona?
    // Retorna 404 not found

    await request(app).get(`/postage/list_all/${posts[1].fk_user_id}`)
    .expect(404)
    done()
})

afterAll((done) => {
    console.log("All postage tests is done.")
    done()
});

// afterEach(async(done) => {
//     await Postage.deleteMany({})
//     done()
// })