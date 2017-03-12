import { MulePage } from './app.po';

describe('mule App', () => {
  let page: MulePage;

  beforeEach(() => {
    page = new MulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
