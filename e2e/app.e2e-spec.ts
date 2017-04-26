import { SedamPage } from './app.po';

describe('sedam App', () => {
  let page: SedamPage;

  beforeEach(() => {
    page = new SedamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
