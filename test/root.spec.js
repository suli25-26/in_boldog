import request from "supertest"
import { expect } from 'chai'
import app from '../app/app.js'

describe('A gyökér tesztelése', () => {
    it('GET /', async () => {
        const res = await request(app)
            .get('/')
        expect(res.text).equal('Helló')
    })
})
