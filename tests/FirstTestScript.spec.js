const{test, expect} = require("@playwright/test")
test("It is First Test Script", async function display({}){
expect(450).toBe(450);
})

test("It is Second Test Script", async function({}) {
    expect (12.5).toBe(12.5);
})

test("It is Third Test Script", async({}) => {
    expect("GenTec Academy").toContain("GenTec");
} )
test("It is Fourth Test Script", async({}) => {
    expect("10<5").toBeFalsy();
})
test("It is Fifth Test Script", async({}) => {
    expect("Academy").toContain("em");
} )

test("It is Sixth Test Script", async({}) => {
    expect(true).toBeTruthy();
} )
