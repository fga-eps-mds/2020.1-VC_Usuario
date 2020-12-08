const request = require('supertest');
const app = require('../../src/app');
const Postage = require('../../src/db/models/postage')
const User = require('../../src/db/models/user')
const data = require('../data/data')

let createdUser, postCommon

beforeEach(async () => {
    createdUser = await User.create(data.user)
    data.posts[2].fk_user_id = createdUser._id
    postCommon = await Postage.create(data.posts[2])
    data.comment.fk_postage_id = postCommon._id
});

it ('Report a postage', async (done) => {
    const res = await request(app).post('/upr/report_postage').send({
        fk_user_id: createdUser._id,
        fk_postage_id: postCommon._id
    }).expect(200)
    expect(res.text).toBe("Denuncia da postagem " + postCommon.post_title + " feita com sucesso!")

    const res2 = await request(app).post('/upr/report_postage').send({
        fk_user_id: createdUser._id,
        fk_postage_id: postCommon._id
    }).expect(400)
    done()
});

it ('Error report postage', async (done) => {
    await request(app).post('/upr/report_postage').send({
        fk_postage_id: postCommon._id
    }).expect(400)
    done()
})

it ('Test delete UPR', async(done) => {
    await request(app).delete('/upr/delete_all').expect(200)
    done()
})

it ('Test list all UPR', async(done) => {
    const res = await request(app).get('/upr/list_all')
    expect(res.status).toBe(200)
    done()
})

it ('Test create UPR', async(done) => {
    const res = await request(app).post('/upr/create').send({
        fk_user_id: createdUser._id,
        fk_postage_id: postCommon._id
    })
    expect(res.status).toBe(200)
    done()
})

afterEach(async(done) => {
    await Postage.deleteMany({})
    await User.deleteMany({})
    done()
})

afterAll((done) => {
    console.log("All UPR tests are done.")
    done();
});