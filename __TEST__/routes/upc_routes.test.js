const request = require('supertest');
const app = require('../../src/app');
const Postage = require('../../src/db/models/postage')
const Upc = require('../../src/db/models/UPC')
const User = require('../../src/db/models/user')

let postCommon, createdUser, createdComment;
const user = {
    user_name: 'Sojin',
    user_email: 'sojin@vc.com',
    user_password: 'teste123'
}

const post = {
    fk_user_id: '7eaddfeaf110e8001879a324',
    post_place: 'FGA',
    post_category: 'Segurança',
    post_title: 'Postagem Comum',
    post_description: 'Mollit ipsum consectetur aliquip qui tempor excepteur. Elit enim do sit incididunt elit laborum fugiat labore adipisicing magna aute dolore. Velit ipsum consectetur labore ullamco ea eu deseruntl aborum ut.'
}

const comment = {
    fk_user_id: '7eaddfeaf110e8001879a324',
    fk_postage_id: '7eaddfeaf110e8001879a324',
    UPC_description: 'Isto é um comentário',
    UPC_author: 'Sojin'
}

beforeEach(async () => {
    createdUser = await User.create(user)
    post.fk_user_id = createdUser._id
    postCommon = await Postage.create(post)
    comment.fk_postage_id = postCommon._id
    createdComment = await Upc.create(comment)
});

it('Comment postage', async (done) => {
    const response = await request(app).post('/upc/comment_postage').send({
        fk_postage_id: postCommon._id,
        fk_user_id: createdUser._id,
        comment_descripton: 'Isso é um comentário.'
    })
    .expect(200)
    expect(response.text).toBe('Comentário à Postagem Postagem Comum foi feito!')
    done()
})

it('Comment postage without description', async (done) => {
    await request(app).post('/upc/comment_postage').send({
        fk_postage_id: postCommon._id,
        fk_user_id: createdUser._id,
    })
    .expect(400)
    done()
})

it('List all comments', async (done) => {
    const response = await request(app).get('/upc/list_all')
    .expect(200)
    expect(response.body).toHaveLength(1)
    done()
})

it('Delete all comments', async (done) => {
    await request(app).delete('/upc/delete_all')
    .expect(200)
    done()
})

afterEach(async(done) => {
    await Postage.deleteMany({})
    await User.deleteMany({})
    await Upc.deleteMany({})
    done()
})

afterAll((done) => {
    console.log("All UPC tests are done.")
    done();
});