const puppeteer = require('puppeteer');

describe('Partner Eng Times', () => {
  test('fires Pixel', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', request => {
      if (request.resourceType() === 'image') {
         console.log(request.url());
        request.abort();
      }
      else
        request.continue();
    });
    await page.goto('https://stonehenge-sites-basic.herokuapp.com/');
    //await page.screenshot({path: 'stonehenge.png', fullPage: true});

    await browser.close();
  });
});
