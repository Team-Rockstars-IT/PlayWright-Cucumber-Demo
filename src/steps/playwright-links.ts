// MIT License

// Copyright 2022 Team Rockstars IT

// Permission is hereby granted, free of charge, to any person obtaining a copy of 
// this software and associated documentation files (the "Software"), to deal in 
// the Software without restriction, including without limitation the rights to 
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
// of the Software, and to permit persons to whom the Software is furnished to 
// do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be 
// included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
//  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
// TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE 
// USE OR OTHER DEALINGS IN THE SOFTWARE.

import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given('User opens Playwright tool url:{string}', async function (url: string) {
    // Write code here that turns the phrase above into concrete actions
    await global.page.goto(url);
  });

When('website contains menu links {string}', async function (link : string) {
    // Write code here that turns the phrase above into concrete actions
    const lnkAPI = await global.page.locator('a:has-text(' + link +')');
    expect(lnkAPI).toHaveText('API');
    
  });

  Then('website link API can be opened', async function () {
    // Write code here that turns the phrase above into concrete actions
    const lnkAPI = await global.page.locator('a:has-text("API")');
    expect(lnkAPI).toHaveText('API');
  });