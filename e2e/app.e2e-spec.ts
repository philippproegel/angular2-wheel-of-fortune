import { DgebPage } from './app.po';

describe('dgeb App', () => {
  let page: DgebPage;

  beforeEach(() => {
    page = new DgebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
