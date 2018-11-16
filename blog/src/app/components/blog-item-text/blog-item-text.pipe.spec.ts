import { SummaryPipe } from './blog-item-text.pipe';

describe('SummaryPipe', () => {
  it('create an instance', () => {
    const pipe = new SummaryPipe();
    expect(pipe).toBeTruthy();
  });
});
