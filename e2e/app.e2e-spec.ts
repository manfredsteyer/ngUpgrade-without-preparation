import { MigratedPage } from './app.po';

describe('migrated App', () => {
  let page: MigratedPage;

  beforeEach(() => {
    page = new MigratedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
