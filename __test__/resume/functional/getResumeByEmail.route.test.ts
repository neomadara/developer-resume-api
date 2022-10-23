import request from "supertest";
import app from "../../../app";

describe('Resume Module', () => {
  it('Should have an email in their query params', async () => {
    const res = await request(app).get("/resume/yiq13jka.ndhkja1286")

    expect(res.status).toEqual(409)
    expect(res.body).toHaveProperty('issues')
  })
  it('Should return an object with the resume information', () => {})
})
