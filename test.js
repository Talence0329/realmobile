describe('test', () => {
  it('testtest', () => {
    browser.url('http://mobile.test.com')
    $('#contLeft > div.mb-footer > section > ul > li:nth-child(2)').waitForDisplayed()
    $('#contLeft > div.mb-footer > section > ul > li:nth-child(2)').click()
    $('#eGame > section > ul > li:nth-child(1)').waitForDisplayed()
    $('#eGame > section > ul > li:nth-child(1)').click()
    browser.pause(9000)
  })
})