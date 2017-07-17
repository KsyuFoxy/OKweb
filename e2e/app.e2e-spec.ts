import { WebOKPage } from './app.po';

describe('web-ok App', () => {
  let page: WebOKPage;

  beforeEach(() => {
    page = new WebOKPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
