import {objectToQuery} from '../../src/utils/object';

describe('Object', () => {
  it('should test for a property to be query', () => {
    const obj = {
      limit: 20,
      name: 'foo',
    };

    const url = `https://localhost:3000${objectToQuery(obj)}`;
    expect(url).toBe(
      `https://localhost:3000?limit=${obj.limit}&name=${obj.name}`,
    );
  });
});
