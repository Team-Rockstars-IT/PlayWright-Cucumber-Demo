import {BeforeAll, Before, After, AfterAll} from '@cucumber/cucumber';
import { chromium } from "@playwright/test";


BeforeAll(async() =>{
    global.browser = await chromium.launch({
        headless: false
    })
});

AfterAll(async() => {
    await global.browser.close();
})


Before(async() => {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
})

After (async() =>{
    await global.page.close();
})