import request from 'supertest'
// import { expect } from 'chai'
import app from '../app/app.js'


describe('A gyökér útvonal tesztelése', () => {
    it('GET /', (done) => {
        request(app).get('/')
            .expect('Helló')
            .end(done)
    })
    it('GET /', () => {
        return request(app).get('/')
            .expect('Helló')
    })
})
