import { SecondoTutorialPage } from './app.po';

describe('secondo-tutorial App', function() {
  let page: SecondoTutorialPage;

  beforeEach(() => {
    page = new SecondoTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
