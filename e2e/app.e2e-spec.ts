import { Test070526Page } from './app.po';

describe('test070526 App', () => {
  let page: Test070526Page;

  beforeEach(() => {
    page = new Test070526Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
