const { json } = require('body-parser');
const request = require('supertest');
const { response } = require('../../src/app');
const app = require('../../src/app');
const Postage = require('../../src/db/models/postage')
const Ups = require('../../src/db/models/UPS')
const User = require('../../src/db/models/user')

let postAnom, postCommon, createdUser;
const user = {
    user_name: 'Sojin',
    user_email: 'sojin@vc.com',
    user_password: 'teste123'
}

const posts = [{
        fk_user_id: null,
        post_place: 'FGA',
        post_category: 'Segurança',
        post_title: 'Postagem Anônima',
        post_description: 'Mollit ipsum consectetur aliquip qui tempor excepteur. Elit enim do sit incididunt elit laborum fugiat labore adipisicing magna aute dolore. Velit ipsum consectetur labore ullamco ea eu deseruntl aborum ut.'
    },
    {
        fk_user_id: '7eaddfeaf110e8001879a325',
        post_place: 'FGA',
        post_category: 'Limpeza',
        post_title: 'Postagem comum',
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
    createdUser = await User.create(user)
    posts[1].fk_user_id = createdUser._id
    posts[2].fk_user_id = createdUser._id
    postAnom = await Postage.create(posts[0])
    postCommon = await Postage.create(posts[1])
    await Postage.create(posts[2])
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
        fk_user_id: createdUser._id,
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
    expect(response.body).toHaveLength(3)
    done()
})

it('List common posts', async (done) => {
    const response = await request(app).get('/postage/list_common')
    .expect(200)
    expect(response.body.posts).toHaveLength(2)
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

it('List one post by id logged', async (done) => {
    await request(app).get(`/postage/list_one_logged/${postCommon._id}/${postCommon.fk_user_id}`)
    .expect(200)
    done()
})

it('List all posts with UPS', async (done) => {
    const ups = {
        fk_user_id: postCommon.fk_user_id,
        fk_postage_id: postCommon._id
    }
    const createdUps = await Ups.create(ups)

    const response = await request(app).get(`/postage/list_all_with_UPS/${createdUps.fk_user_id}`)
    .expect(200)
    expect(response.body).toHaveLength(2)
    done()
})

it('Delete all posts', async (done) => {
    await request(app).delete('/postage/delete_all')
    .expect(200)
    done()
})

it('Update post status', async (done) => {
    await request(app).put(`/postage/update_status/${postCommon._id}`)
    .send({post_status: 'Resolvido'})
    .expect(200)

    const res = await request(app).get(`/postage/list_one/${postCommon._id}`)
    expect(res.status).toBe(200)
    expect(res.body.post_status).toBe('Resolvido')
    done()
})

it('Invalid update post status', async (done) => {
    await request(app).put(`/postage/update_status/${postCommon._id}`)
    .send({post_status: 'Foo'})
    .expect(400)
    done()
})

it('Delete one post', async (done) => {
    const response =  await request(app).put('/postage/delete_one')
    .send({
        fk_user_id: postCommon.fk_user_id,
        fk_postage_id: postCommon._id
    })
    .expect(200)
    expect(response.text).toBe('Postage successfully deleted!')
    done()
})

it('Update one post', async (done) => {
    await request(app).put('/postage/update_one')
    .send({
        fk_user_id: postCommon.fk_user_id,
        fk_postage_id: postCommon._id,
        post_title: 'Modificando o título',
    })
    .expect(200)
    done()
})

it('List UPC by postage id', async (done) => {
    await request(app).get(`/postage/list_UPC/${postCommon._id}`)
    .expect(200)
    done()
})

afterAll((done) => {
    console.log("All postage tests are done.")
    done()
});

afterEach(async(done) => {
    await Postage.deleteMany({})
    await User.deleteMany({})
    done()
})