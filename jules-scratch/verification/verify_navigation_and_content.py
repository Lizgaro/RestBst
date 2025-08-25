from playwright.sync_api import sync_playwright, expect

def run_verification(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    try:
        # 1. Navigate to the app
        page.goto("http://localhost:3000")

        # 2. Check main page title
        expect(page).to_have_title("Emergent | Fullstack App")

        # 3. Navigate to QR/NFC Menu page and take screenshot
        page.get_by_role("button", name="QR/NFC-меню").click()
        expect(page.get_by_role("heading", name="QR/NFC-меню RestBest")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/qr-menu-page.png")

        # 4. Navigate to Pricing page and take screenshot
        page.get_by_role("button", name="Цены").click()
        expect(page.get_by_role("heading", name="Все функции в одном тарифе")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/pricing-page.png")

        # 5. Navigate back to Features page
        page.get_by_role("button", name="Возможности").click()

        # 6. Verify the gift section text
        gift_section_heading = page.get_by_role("heading", name="Получить промокод на 15000 рублей")
        expect(gift_section_heading).to_be_visible()

        # 7. Verify the login button is gone
        login_button_locator = page.locator('button:has-text("Войти")')
        expect(login_button_locator).to_have_count(0)

        # 8. Take a screenshot of the main page
        page.screenshot(path="jules-scratch/verification/main-page.png")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run_verification(playwright)
