import { NightwatchBrowser } from 'nightwatch';

const ADD_TASK_GLOBAL_SEL = 'add-task-bar.global input';
const ROUTER_WRAPPER = '.route-wrapper';
const ADD_BTN = '.switch-add-to-btn';

module.exports = {
  async command(this: NightwatchBrowser, taskName: string) {
    return (
      this.waitForElementVisible(ROUTER_WRAPPER)
        .setValue('body', 'A')
        .waitForElementVisible(ADD_TASK_GLOBAL_SEL)
        .setValue(ADD_TASK_GLOBAL_SEL, taskName)
        .click(ADD_BTN)
        // .setValue(ADD_TASK_GLOBAL_SEL, this.Keys.ENTER)
        // .pause(30)
        // .setValue(ADD_TASK_GLOBAL_SEL, this.Keys.ESCAPE)
        // .pause(30)
        .waitForElementNotPresent(ADD_TASK_GLOBAL_SEL)
    );
  },
};
