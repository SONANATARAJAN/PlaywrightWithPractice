const {test,expect} = require('@playwright/test')

test("My First Name",async function({page}) {
    expect(12).toBe(101)
})

test.skip("My Second test",async function({page}) {
    expect(12).toBe(12)
})

test("Third Test",async function({page}){
expect(12).toBe(12)
})

test("My Fourth test",async function({page}) {
    expect("Sona Natarajan").toContain("Sona")
    expect(true).toBeTruthy()
})
test("Fifth Test",async function({page}){
    expect(false).toBeFalsy()
})