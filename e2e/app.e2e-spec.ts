import { InfiniteImagesPage } from './app.po';

describe('infinite-images App', function() {
  let page: InfiniteImagesPage;

  beforeEach(() => {
    page = new InfiniteImagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
