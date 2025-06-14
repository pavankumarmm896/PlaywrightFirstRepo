const{test, expect} = require("@playwright/test")
test.only("It is First Test Script", async function display({}){
expect(450).toBe(450);
})

test.skip("It is Second Test Script", async function({}) {
    expect (12.5).toBe(12.5);
})

test.beforeEach("It is Third Test Script", async({}) => {
    expect("GenTec Academy").toContain("GenTec");
} )
test.beforeAll("It is Fourth Test Script", async({}) => {
    expect("10<5").toBeFalsy();
})
test.afterEach("It is Fifth Test Script", async({}) => {
    expect("Academy").toContain("em");
} )

test.afterAll("It is Sixth Test Script", async({}) => {
    expect(true).toBeTruthy();
} )
