import { ListPipe } from './list.pipe';

describe('ListPipe', () => {
  it('create an instance', () => {
    const pipe = new ListPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return an array', () => {
    const pipe = new ListPipe();
    expect(pipe.transform('a,b,c')).toEqual(['a', 'b', 'c']);
  });
});
