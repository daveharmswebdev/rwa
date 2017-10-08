import { RwaPage } from './app.po';

describe('rwa App', () => {
  let page: RwaPage;

  beforeEach(() => {
    page = new RwaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
