import {Selector, ClientFunction} from 'testcafe'

fixture`TDD Day Homepage`
  .page('https://tddday.com')

test('page should load and display the correct title.', async t => {
  const actual = Selector('h1').innerText;
  const expected = 'TDD DAY'
  await t.expect(actual).eql(expected)
})

const getLocation = ClientFunction(() => window.location.href)

test('User should be able to navigate to the registration page.', async t => {
  const registerButton = Selector('span').withText('REGISTER NOW')
  const expected = 'https://zoom.us/webinar/register/WN_rYdjYdXFTPiHCsiWsnq0jA'
  await t.click(registerButton)
  await t.expect(getLocation()).eql(expected)

})
