import { Ng2WebsitePage } from './app.po';

describe('ng2-website App', () => {
  let page: Ng2WebsitePage;

  beforeEach(() => {
    page = new Ng2WebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
