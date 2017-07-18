import { ShopsharePage } from './app.po';

describe('shopshare App', () => {
  let page: ShopsharePage;

  beforeEach(() => {
    page = new ShopsharePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
