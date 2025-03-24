import { ToUppercaseManuallyPipe } from './to-uppercase-manually.pipe';

describe('ToUppercaseManuallyPipe', () => {
  it('create an instance', () => {
    const pipe = new ToUppercaseManuallyPipe();
    expect(pipe).toBeTruthy();
  });
});
