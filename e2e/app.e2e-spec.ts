import { NavigatorPage } from './app.po';

describe('navigator App', () => {
  let page: NavigatorPage;

  beforeEach(() => {
    page = new NavigatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
