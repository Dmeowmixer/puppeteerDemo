const puppeteer = require('puppeteer');
const url = 'https://news.ycombinator.com';
(async ()=> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, {waituntil: 'networkidle2'});
  await page.pdf({path:'hn.pdf', format:'A4'});

  await browser.close();
})();