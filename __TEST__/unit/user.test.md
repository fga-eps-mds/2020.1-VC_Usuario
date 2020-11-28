/* const mongoose = require('mongoose'); */
const bcrypt = require('bcrypt');
const user_model = require('../../src/db/models/user');
const user_data = {
    user_email: 'ney@vc.com',
    user_name: 'Menino Ney',
    user_password: '1234'
}

describe('User Model Test', () => {

/*     // It's just so easy to connect to the MongoDB Memory Server 
    // By using mongoose.connect
    beforeAll(async () => {
        await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    }); */
    
    it('create & save user successfully', async () => {
        const valid_user = new user_model(user_data);
        const saved_user = await valid_user.save();
        const compare_hash = await bcrypt.compare(user_data.user_password, saved_user.user_password);
        // Object Id should be defined when successfully saved to MongoDB.
        expect(saved_user._id).toBeDefined();
        expect(saved_user.user_array_UPS).toBeDefined();
        expect(saved_user.user_score).toBeDefined();
        expect(saved_user.user_name).toBe(user_data.user_name);
        expect(saved_user.user_email).toBe(user_data.user_email);
        expect(compare_hash).toBe(true);
    });

/*     afterAll(async (done) => {
        console.log("After Test User")
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        done();
    });  */
})