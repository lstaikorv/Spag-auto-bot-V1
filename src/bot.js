const { chromium } = require("playwright");

async function main() {
  console.log("Starting browser...");

  const browser = await chromium.launch({
    headless: true
  });

  const page = await browser.newPage();

  console.log("Opening SPaG.com...");

  await page.goto("https://www.spag.com/Child/Overview", {
    waitUntil: "domcontentloaded",
    timeout: 60000
  });

  console.log("Page title:", await page.title());
  console.log("Current URL:", page.url());

  await page.screenshot({
    path: "spag-page.png",
    fullPage: true
  });

  await browser.close();

  console.log("Browser test finished.");
}

main().catch(error => {
  console.error("BOT ERROR:");
  console.error(error);
  process.exit(1);
});
