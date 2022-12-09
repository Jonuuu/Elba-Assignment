const { By, Key, Builder } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

const service = new firefox.ServiceBuilder('C:/Users/Jona/geckodriver/geckodriver.exe');
const options = new firefox.Options().setBinary('C:/Program Files/Mozilla Firefox/firefox.exe');

async function example() {
    let driver = await new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(options)
        .setFirefoxService(service)
        .build();

    await driver.get('https://www.elba-tech.com/');
    await driver.findElement(By.className('wt-cli-element')).click();

    const menuElements = await driver.findElements(By.css('li.menu-item'));
    const spanElements = await Promise.all(menuElements.map((li) => li.findElement(By.css('span'))));
    const spanText = await Promise.all(spanElements.map((span) => span.getText()));
    const sortedSpanText = spanText.sort(); // sort the text in ascending order

    sortedSpanText.forEach((text) => {
        if (text.trim() !== '') {
            console.log(text);
        }
    });

    driver.quit();
}
example();
