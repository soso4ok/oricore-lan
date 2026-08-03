const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'load', timeout: 15000 });
    // Wait extra time for animations and canvas to fully render
    await new Promise(r => setTimeout(r, 3000));
    
    // Save to root directory
    await page.screenshot({ path: 'screenshot.png' });
    console.log('Screenshot saved to screenshot.png (16:9)');
    
    // Save to public directory as well
    await page.screenshot({ path: 'public/screenshot.png' });
    console.log('Screenshot saved to public/screenshot.png (16:9)');
  } catch(e) {
    console.error(e);
  }
  await browser.close();
})();

