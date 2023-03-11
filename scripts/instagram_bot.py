from playwright.sync_api import Playwright, sync_playwright
import config

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()
    page.goto('https://www.instagram.com/accounts/login/')
    page.fill('#loginForm input[name="username"]', config.username)
    page.fill('#loginForm input[name="password"]', config.password)
    page.click('#loginForm button[type="submit"]')
    page.wait_for_selector('input[type="search"]')

page.goto('https://www.instagram.com/create')
page.wait_for_selector('input[type="file"]')
page.click('input[type="file"]')

page.set_input_files('input[type="file"]', 'photos/test.png')
page.wait_for_selector('button[type="button"][class="UP43G"]')
page.click('button[type="button"][class="UP43G"]')

page.fill('textarea[aria-label="캡션 추가..."]', 'your_caption')
page.click('button[type="submit"][class="UP43G"]')
page.wait_for_selector('a[href="/explore/"]')
browser.close()