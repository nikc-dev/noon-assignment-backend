const app = require('./index')
const request = require('supertest')

describe('Test Suite that will test the CRUD APIs for the App', () => {
    beforeEach(() => {
    })
    it('should get initial data for the / route', async () => {
      await request(app.listen())
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
    });

    it('should create a new favItem on POST to / route', async () => {
        const res = await request(app)
          .post('/')
          .send({
            id: '001',
          })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('favsCount', 1)
      })

      it('should get favItems data for the /favs route', async () => {
        await request(app.listen())
        .get('/favs')
        .expect('Content-Type', /json/)
        .expect(200)
      });

      it('should delete a favItem on DELETE to /favs route', async () => {
        const res = await request(app)
          .delete('/favs')
          .send({
            id: '001',
          })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('favsCount', 0)
      })
  });