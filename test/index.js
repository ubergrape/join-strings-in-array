import assert from 'assert'
import joinStringsInArray from '../src/joinStringsInArray'

const object = {}

describe(
  'joinStringsInArray without `trimLast` flag',
  () => {
    it('should join strings with default whitespace delimeter', () =>
      assert.deepEqual(
        joinStringsInArray(['a', 'b', object, 'c']),
        ['a b ', object, 'c']
      )
    )

    it('should join strings with custom delimeter', () =>
      assert.deepEqual(
        joinStringsInArray(['a', 'b', object, 'c'], '-'),
        ['a-b-', object, 'c']
      )
    )

    it('should join strings when object is first', () =>
      assert.deepEqual(
        joinStringsInArray([object, 'a', 'b', 'c']),
        [object, 'a b c']
      )
    )

    it('should join strings when object is last', () =>
      assert.deepEqual(
        joinStringsInArray(['a', 'b', 'c', object]),
        ['a b c ', object]
      )
    )
  }
)

describe(
  'joinStringsInArray with `trimLast` flag',
  () => {
    it('should join strings with default whitespace delimeter', () =>
      assert.deepEqual(
        joinStringsInArray(['a', 'b', object, 'c'], true),
        ['a b', object, 'c']
      )
    )

    it('should join strings with custom delimeter', () =>
      assert.deepEqual(
        joinStringsInArray(['a', 'b', object, 'c'], '-', true),
        ['a-b', object, 'c']
      )
    )

    it('should join strings when object is first', () =>
      assert.deepEqual(
        joinStringsInArray([object, 'a', 'b', 'c'], true),
        [object, 'a b c']
      )
    )

    it('should join strings when object is last', () =>
      assert.deepEqual(
        joinStringsInArray(['a', 'b', 'c', object], true),
        ['a b c', object]
      )
    )
  }
)
