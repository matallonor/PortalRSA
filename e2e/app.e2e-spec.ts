import { PortalRSAPage } from './app.po';

describe('portal-rsa App', function() {
  let page: PortalRSAPage;

  beforeEach(() => {
    page = new PortalRSAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
