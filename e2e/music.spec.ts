import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with title', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('Glass Tides')
  })

  test('renders stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Total Streams')).toBeVisible()
    await expect(page.getByText('500+')).toBeVisible()
  })

  test('renders navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('link', { name: 'Releases', exact: true }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: 'Tour Dates', exact: true }).first()).toBeVisible()
  })
})

test.describe('Releases listing', () => {
  test('displays release cards', async ({ page }) => {
    await page.goto('/music')
    await expect(page.locator('h1')).toContainText('Releases')
    await expect(page.getByText('Parallax').first()).toBeVisible()
    await expect(page.getByText('Hollow Light').first()).toBeVisible()
    await expect(page.getByText('Afterimage').first()).toBeVisible()
  })
})

test.describe('Release detail', () => {
  test('shows release info', async ({ page }) => {
    await page.goto('/music/parallax')
    await expect(page.locator('h1')).toContainText('Parallax')
    await expect(page.getByText('52:14')).toBeVisible()
    await expect(page.getByText('Transgressive Records')).toBeVisible()
  })
})

test.describe('Tour dates listing', () => {
  test('displays tour date cards', async ({ page }) => {
    await page.goto('/tour')
    await expect(page.locator('h1')).toContainText('Tour Dates')
    await expect(page.getByText('Roundhouse').first()).toBeVisible()
    await expect(page.getByText('Columbiahalle').first()).toBeVisible()
  })
})

test.describe('Tour date detail', () => {
  test('shows venue and location', async ({ page }) => {
    await page.goto('/tour/london-roundhouse')
    await expect(page.locator('h1')).toContainText('Roundhouse')
    await expect(page.getByText('London').first()).toBeVisible()
  })
})

test.describe('Band listing', () => {
  test('displays band member cards', async ({ page }) => {
    await page.goto('/band')
    await expect(page.locator('h1')).toContainText('Band Members')
    await expect(page.getByText('Lena Voss').first()).toBeVisible()
    await expect(page.getByText('Tom Ashford').first()).toBeVisible()
  })
})

test.describe('Band member detail', () => {
  test('shows member role', async ({ page }) => {
    await page.goto('/band/lena-voss')
    await expect(page.locator('h1')).toContainText('Lena Voss')
    await expect(page.getByText('Vocals').first()).toBeVisible()
  })
})

test.describe('Static pages', () => {
  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: /About Glass Tides/i })).toBeVisible()
  })

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.getByRole('heading', { name: /Contact/i })).toBeVisible()
  })
})
