


Feature: Playwright Website Test

    Scenario: Playwright Website links check
        Given User opens Playwright tool url:'https://playwright.dev/'
        When website contains menu links 'API'
        Then website link API can be opened
        