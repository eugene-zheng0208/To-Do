/*
TABLE OF CONTENTS
(please update both content and order of description to this table)
- Permission
- Create Todo
 */

import {
  TEXT_ADD,
  TEXT_BUTTON_ADD,
  TEXT_COLOR,
  TEXT_CONFIRM,
  TEXT_DEADLINE_PLACEHOLDER,
  TEXT_LOGIN,
  TEXT_TASK_PLACEHOLDER,
  TEXT_USERNAME_PLACEHOLDER
} from '../app/resource/text'

describe('Permission', () => {
  it('notifications', async () => {
    await device.launchApp({ permissions: { notifications: 'YES' } })
  })

  it('location', async () => {
    await device.launchApp({ permissions: { location: 'inuse' } })
  })
})

describe('Create Todo', () => {
  it('login', async () => {
    await element(by.text(TEXT_USERNAME_PLACEHOLDER)).tap()
    await element(by.text(TEXT_USERNAME_PLACEHOLDER)).typeText('Martian')
    await element(by.label('return')).tap()
    await element(by.text(TEXT_LOGIN)).tap()
  })

  it('tab', async () => {
    await element(by.id(TEXT_ADD))
      .atIndex(0)
      .tap()
  })

  it('task', async () => {
    await element(by.text(TEXT_TASK_PLACEHOLDER)).tap()
    await element(by.text(TEXT_TASK_PLACEHOLDER)).typeText('Write tests!')
  })

  it('deadline', async () => {
    await element(by.text(TEXT_DEADLINE_PLACEHOLDER)).tap()
    await element(by.text(TEXT_CONFIRM)).tap()
  })

  it('color', async () => {
    await element(by.id(TEXT_COLOR))
      .atIndex(0)
      .tap()
  })

  it('add', async () => {
    await element(by.text(TEXT_BUTTON_ADD)).tap()
  })
})
