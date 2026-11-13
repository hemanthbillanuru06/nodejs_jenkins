const { Builder } = require("selenium-webdriver"); 
async function testURL() {
let driver = await new Builder()
.forBrowser("chrome")
.build(); 
try {
await driver.get("http://localhost:5000");
let currentURL = await driver.getCurrentUrl(); 
if (currentURL === "http://localhost:5000/") { console.log("TC04: PASS - Correct URL");
} else {
console.log("TC04: FAIL ");
}
await new Promise(resolve => setTimeout(resolve, 5000));
} finally {
await driver.quit();
}
}
testURL();