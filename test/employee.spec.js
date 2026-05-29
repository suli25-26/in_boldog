import request from 'supertest'
import { expect } from 'chai'
import app from '../app/app.js'

describe('/employees', () => {
    it.only('GET /employees', async () => {
        const res = await request(app)
            .get('/employees')
            .expect(200)

        expect(res.body.data).to.be.an('array')
        expect(res.body.data).to.have.lengthOf.at.least(2)
        expect(res.body.data[0]).to.have.property('name')
    })
}) 