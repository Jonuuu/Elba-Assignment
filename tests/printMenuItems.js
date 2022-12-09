const { By, Key, Builder } = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');

const service = new firefox.ServiceBuilder('C:/Users/Jona/geckodriver/geckodriver.exe');
const options = new firefox.Options().setBinary("C:/Program Files/Mozilla Firefox/firefox.exe");


async function example() {

    let driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).setFirefoxService(service).build();

    await driver.get("https://www.elba-tech.com/");
    await driver.findElement(By.className("wt-cli-element")).click();

    const menu = await driver.findElements(By.css("li.menu-item"));
    for (const li of menu) {
        const spanElement = await li.findElement(By.css('span'));
        const spanText = await spanElement.getText();
        if (spanText.trim() !== '') {
            console.log(spanText);
        }
    }
    driver.quit();
}
example();

