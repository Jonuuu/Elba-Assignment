# Elba-Assignment

For this project I will be using Selenium Web Drivers, JavaScript, and my preferred IDE of choice is Vs-Code. This code does three main tests : 

- Print out on Console all names of the Menu items located in the
Menu Header (Home, Products, Solutions, About, Careers),@Jona@Jona
- Sorts the Menu Items by Ascending order and prints the list on the
Console,
- 1. Prints out all Elba Offices location on the Console.

### The Setup

Before starting the testing process, we should establish e quick setup to get things of and running.

Starting with:

1. Installing the Selenium WebDriver. This can typically be done through the npm package manage.
2. Import the WebDriver into your JavaScript code and create an instance of the **`WebDriver`** class. This can be done with the following code:
    
    ```jsx
    const { By, Key, Builder } = require('selenium-webdriver');
    const firefox = require('selenium-webdriver/firefox');
    
    const service = new firefox.ServiceBuilder('C:/Users/Jona/geckodriver/geckodriver.exe');
    const options = new firefox.Options().setBinary('C:/Program Files/Mozilla Firefox/firefox.exe');
    ```
    
    The code imports the **`By`**, **`Key`**, and **`Builder`** classes from the Selenium WebDriver package, as well as the **`firefox`** module from the **`selenium-webdriver/firefox`** package.
    
    It then creates a new ServiceBuilder object using the path to the GeckoDriver executable file, and a new **`Options`** object using the path to the Firefox binary. These objects will be used to configure the Firefox browser for use with Selenium.
    
    I directly hard-coded the ServiceBuilder into the code due to some issues when first installing the Drivers, I didn’t continue to solve that issue, and focused on the Testing.
    

For testing I created a folder named Tests, which attains all the tests that I created.

### Printing the Menu Items located in Menu Header

I defined an **`async`** function named **`example()`**, which creates a new instance of the **`WebDriver`** class using the **`Builder`** class and the **`service`** and **`options`** objects created earlier.

Inside the **`example()`** function, the code uses the **`driver`** object to navigate to a [Elba Tech](http://elba-tech.com) Main Page URL.  Using the `findElement()` method, I called the className for the accept cookies button, and used the `click()` for accepting all cookies 

```jsx
async function example() {

  let driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).setFirefoxService(service).build();

  await driver.get("https://www.elba-tech.com/");
  await driver.findElement(By.className("wt-cli-element")).click();
```

Continuing with the code uses the **`driver.findElements()`** method to locate all elements on the page that match the specified CSS selector (**`li.menu-item`**), which represents a list item with the class **`menu-item`**. It then loops through each of these elements using the **`for...of`** loop, and for each element it does the following:

1. It uses the **`li.findElement()`** method to locate the first **`span`** element inside the list item.
2. It uses the **`spanElement.getText()`** method to get the text content of the **`span`** element.
3. It checks if the text content is not empty (by using the **`trim()`** method to remove any leading or trailing white-spaces, and if it is not empty, it prints the text to the console using the **`console.log()`** method.

```jsx
const menu = await driver.findElements(By.css("li.menu-item"));
  for (const li of menu) {
      const spanElement = await li.findElement(By.css('span'));
      const spanText = await spanElement.getText();
      if (spanText.trim() !== '') {
          console.log(spanText);
      }
```

 Finally, the **`driver.quit()`** method is called to close the browser and end the WebDriver session. And of course `example()` for executing the automated web testing task.

### Sorting the Menu Items by Ascending Order

Inside the **`example()`** function, the code uses the **`driver`** object to navigate to a specific URL, click on an cookies element on the page, and then do the following:

1. It uses the **`driver.findElements()`** method to locate all elements on the page that match the specified CSS selector (**`li.menu-item`**), which represents a list item with the class **`menu-item`**.
2. It uses the **`Promise.all()`** method to execute multiple asynchronous operations in parallel, and it maps each list item element to the first **`span`** element inside it using the **`li.findElement()`** method.
3. It uses the **`Promise.all()`** method again to execute multiple asynchronous operations in parallel, and it maps each **`span`** element to its text content using the **`span.getText()`** method.
4. It sorts the text content in ascending order and prints both the original and sorted text content to the console.

```jsx
async function example() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.elba-tech.com/"); 
    await driver.findElement(By.className("wt-cli-element")).click();

    const menuElements = await driver.findElements(By.css("li.menu-item"));
    const spanElements = await Promise.all(menuElements.map(li => li.findElement(By.css('span'))));
    const spanText = await Promise.all(spanElements.map(span => span.getText()));
    const sortedSpanText = spanText.sort(); // sort the text in ascending order
    
    sortedSpanText.forEach(text => {
        if (text.trim() !== '') {
            console.log(text);
        }
    });
```

Finally, the code calls the **`driver.quit()`** method to close the browser and end the WebDriver session. And of course `example()` for executing the automated web testing task.

### Printing Location of Elba’s Offices

Inside the **`example()`** function, the code uses the **`driver`** object to navigate to [Elba Tech Contact Us](https://www.elba-tech.com/contact-us/) Page where the location are stored, click on an cookies element on the page, and then do the following:

1. It uses the **`driver.findElements()`** method to locate all elements on the page that match the specified CSS selector (**`li.menu-item`**), which represents a list item with the class **`menu-item`**.
2. It loops through each of these elements using the **`for...of`** loop, and for each element it does the following:
    
    a. It uses the **`element.findElement()`** method to locate the first **`div`** element inside the **`div`** element.
    
    b. It uses the **`childElements.getText()`** method to get the text content of the **`div`** element.
    
    c. It prints the text content to the console using the **`console.log()`** method.
    
    ```jsx
    async function example() {
      let driver = await new Builder().forBrowser("firefox").build();
    
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
    ```
    

Finally, the code calls the **`driver.quit()`** method to close the browser and end the WebDriver session.And of course `example()` for executing the automated web testing task.
