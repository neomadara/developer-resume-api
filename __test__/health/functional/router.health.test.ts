import request from "supertest"

import app from "../../../app"

describe('Health Route', () => {
  let res: any;
  beforeAll(async () => {
    res = await request(app).get("/healthz")
  })

  it("Should return status code 200", async () => {
    expect(res.status).toEqual(200);
  })
  it("Should return and object with the health information", async () => {
    expect(res.body.hasOwnProperty('uptime')).toBe(true)
    expect(res.body.hasOwnProperty('message')).toBe(true)
    expect(res.body.hasOwnProperty('timestamp')).toBe(true)
  })
})
