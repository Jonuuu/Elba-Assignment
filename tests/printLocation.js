const { By, Key, Builder } = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');

const service = new firefox.ServiceBuilder('C:/Users/Jona/geckodriver/geckodriver.exe');
const options = new firefox.Options().setBinary("C:/Program Files/Mozilla Firefox/firefox.exe");

async function example() {

  let driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).setFirefoxService(service).build();

  await driver.get("https://www.elba-tech.com/contact-us/");
  await driver.findElement(By.className("wt-cli-element")).click();


  const divElement = await driver.findElements(By.className("vc_col-sm-4"));

  for (const element of divElement) {
    const childElements = await element.findElement(By.css("div"));
    const childElementText = await childElements.getText();
    console.log(childElementText);
  }

  driver.quit();
}
example();

