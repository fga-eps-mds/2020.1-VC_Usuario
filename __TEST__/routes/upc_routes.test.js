const request = require('supertest');
const app = require('../../src/app');
const Postage = require('../../src/db/models/postage')
const Upc = require('../../src/db/models/UPC')
const User = require('../../src/db/models/user')
const data = require('../data/data')

let postCommon, createdUser, createdComment;

beforeEach(async () => {
    createdUser = await User.create(data.user)
    data.posts[1].fk_user_id = createdUser._id
    postCommon = await Postage.create(data.posts[1])
    data.comment.fk_postage_id = postCommon._id
    createdComment = await Upc.create(data.comment)
});

it('Comment postage', async (done) => {
    const response = await request(app).post('/upc/comment_postage').send({
        fk_postage_id: postCommon._id,
        fk_user_id: createdUser._id,
        comment_descripton: 'Isso é um comentário.'
    })
    .expect(200)
    expect(response.text).toBe('Comentário à Postagem Postagem comum foi feito!')
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