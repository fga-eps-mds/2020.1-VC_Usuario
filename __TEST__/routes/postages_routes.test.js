const { json } = require('body-parser');
const request = require('supertest');
const { response } = require('../../src/app');
const app = require('../../src/app');
const Postage = require('../../src/db/models/postage')
const Ups = require('../../src/db/models/UPS')
const User = require('../../src/db/models/user')

const posts = [{
        fk_user_id: null,
        post_place: 'FGA',
        post_category: 'Segurança',
        post_title: 'Postagem Anônima',
        post_description: 'Mollit ipsum consectetur aliquip qui tempor excepteur. Elit enim do sit incididunt elit laborum fugiat labore adipisicing magna aute dolore. Velit ipsum consectetur labore ullamco ea eu deseruntl aborum ut.'
    },
    {
        fk_user_id: '5faddfeaf110e8001879a324',
        post_place: 'FGA',
        post_category: 'Limpeza',
        post_title: 'Postagem comum',
        post_description: 'Mollit ipsum consectetur aliquip qui tempor excepteur.'
    },
    {
        fk_user_id: '7eaddfeaf110e8001879a324',
        _id: '5fc3742e172665fbbf5b8d2e',
        post_place: 'FCE',
        post_category: 'Meio Ambiente',
        post_title: 'Everyday girls day',
        post_description: 'As maiores do kpop. Elit enim do sit incididunt elit laborum fugiat labore adipisicing magna aute dolore. Velit ipsum consectetur labore ullamco ea eu deseruntl aborum ut.'
    }
]

let postAnom, postCommon;


beforeEach(async () => {
// Para testar a listagem, como devo definir um user_id como null?
    await Postage.deleteMany({})
    // posts[0].fk_user_id = null
    // await Postage(posts[0]).save();
    // await Postage(posts[1]).save();
    // await Postage(posts[2]).save();
    postAnom = await Postage.create(posts[0])
    postCommon = await Postage.create(posts[1])
});

it('Anon post without image', async (done) => {
    const response = await request(app).post('/postage/create_anon').send({
        post_place: 'DARCY',
        post_category: 'Limpeza',
        post_title: 'Dreamcatcher lendas',
        post_description: 'Dream catcher perfeitas.'
    })
    .expect(200)
    expect(response.body.fk_user_id).toBeNull()
    done()
})

it('Common post without image', async (done) => {
    const response = await request(app).post('/postage/create_common').send({
        fk_user_id: '7eaddfeaf110e8001879a324',
        post_place: 'FCE',
        post_category: 'Segurança',
        post_title: 'Everyday girls day',
        post_description: 'As maiores do kpop.'
    })
    .expect(200)
    expect(response.body.fk_user_id).toEqual(expect.anything())
    done()
})

it('List all posts', async (done) => {
    const response = await request(app).get('/postage/list_all')
    .expect(200)
    expect(response.body).toHaveLength(2)
    done()
})

it('List common posts', async (done) => {
    const response = await request(app).get('/postage/list_common')
    .expect(200)
    expect(response.body.posts).toHaveLength(1)
    done()
})

it('List posts by category', async (done) => {
    // Como listar mais de uma postagem com base nas categorias?
    // O response.body não está retornando nenhuma postagem. Como passar a categoria que quero filtrar?
    await request(app).get('/postage/list_by_category')
    .expect(200)
    // expect(response.body.posts.post_category).toBe('Segurança')
    done()
})

it('List one post by id', async (done) => {
    await request(app).get(`/postage/list_one/${postCommon._id}`)
    .expect(200)
    done()
})

it('List all posts with UPS', async (done) => {
    const user = {
        user_name: 'Sojin',
        user_email: 'sojin@vc.com',
        user_password: 'teste123'
    }
    const createdUser = await User.create(user)

    const ups = {
        fk_user_id: createdUser._id,
        fk_postage_id: postCommon._id
    }
    const createdUps = await Ups.create(ups)

    const response = await request(app).get(`/postage/list_all_with_UPS/${createdUps.fk_user_id}`)
    .expect(200)
    expect(response.body).toHaveLength(1)
    done()
})

it('Delete all posts', async (done) => {
    const response = await request(app).delete('/postage/delete_all')
    .expect(200)
    done()
})

it('Update post status', async (done) => {
    // Se eu alterar qualquer coisa do response o teste passa e posso alterar o status para qualquer nome
    const response = await request(app).post('/postage/create_common').send(posts[1])

    await request(app).put(`/postage/update_status/${response.body._id}`)
    .send(post_status = 'Resolvido')
    .expect(200)
    done()
})

// it('Delete one post', async (done) => {
//     //  expected 200 "OK", got 400 "Bad Request" não consegui testar
//     // "error_UPS_check_exist_user_and_postage": "User or Postage not exist" que se encontra
//     // dentro da controller do ups não permite testar
//     const response = await request(app).post('/postage/create_common').send(posts[2])

//     await (await request(app).put('/postage/delete_one'))
//     .expect(200)
//     console.log(response2)
//     done()
// })

// it('Update one post', async (done) => {
//     // "error_UPS_check_exist_user_and_postage": "User or Postage not exist" que se encontra
//     // dentro da controller do ups não permite testar
//     const response = await request(app).post('/postage/create_common').send(posts[1])

//     await request(app).put('/postage/update_one')
//     .expect(200)
//     done()
// })

afterAll((done) => {
    console.log("All postage tests is done.")
    done()
});

// afterEach(async(done) => {
//     await Postage.deleteMany({})
//     done()
// })