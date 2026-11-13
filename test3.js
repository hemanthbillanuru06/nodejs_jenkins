const { Builder, By } = require("selenium-webdriver");
async function testApplicationText() {
let driver = await new Builder()
.forBrowser("chrome")
.build(); 
try { await driver.get("http://localhost:5000");
let bodyText = await driver
.findElement(By.tagName("body"))
.getText();
console.log("Application Text:", bodyText); 
if (bodyText.includes("Hello")) {
console.log("TC03: PASS - Expected text found");
} else {
console.log("TC03: FAIL - Expected text not found");
}
await new Promise(resolve => setTimeout(resolve, 5000));
} finally {
await driver.quit();
}
}
testApplicationText();