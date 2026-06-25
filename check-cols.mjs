import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto('http://localhost:5173');
await page.waitForSelector('text=Sobre Mim');
await page.waitForTimeout(300);

const aboutHandle = await page.evaluateHandle(() => {
  const h1 = Array.from(document.querySelectorAll('h1')).find(h => h.textContent.includes('Sobre Mim'));
  return h1.closest('main');
});
await page.screenshot({ path: 'check-cols.png', clip: await aboutHandle.asElement().boundingBox() });
await browser.close();
