const request = require('supertest')
const expect = require('chai').expect
const app = require('../app')
const User = require('../models/user')

describe('Getting users', () => {
    it('should return the name and ids of all users', async () => {
        const res = await request(app)
            .get('/api/users')
        expect(res.statusCode).equals(200)
        expect(res.body).to.have.property('data').to.deep.include({id: 1, name: "Mo"}) 
         expect(res.body).to.have.property('data').to.deep.include({id: 1, name: "Jack"}) 
        expect(res.body).to.have.property('data').to.deep.include({id: 2, name: "Sam"}) 
    })
    it('should return the name and id of a certain user', async () => {
        const res = await request(app)
            .get('/api/users/1')
        expect(res.statusCode).equals(200)
        expect(res.body).to.have.property('data').to.deep.equal({id: 1, name: "Sarah"}) 
    })
})

exports.init = async function() {
    try {
        await mongoose.connect(env.db, {useNewUrlParser: true, useUnifiedTopology: true});
    } catch (error) {
        console.log(error)
    }
}