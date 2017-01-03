import { RickyAngularProjectPage } from './app.po';

describe('ricky-angular-project App', function() {
  let page: RickyAngularProjectPage;

  beforeEach(() => {
    page = new RickyAngularProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
