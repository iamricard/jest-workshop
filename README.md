# Jest workshop

## Stateless component

1. Run `npm t`.
2. Peek in `src/__tests__/__snapshots__/stateless-test.js.snapshot`.
3. Add a way to pass a className as a prop, while keeping the previous
className and run `npm t` again. What happens?
4. Add tests to cover new functionality.
5. Take another peek at the snapshot file, what's new?
6. Remove `isRequired` from the children's `propTypes`  definition, and
instead provide a default value. Adjust your tests accordingly.
7. Now would be a good time to check our test coverage for the first time,
run `npm t -- --coverage`. If you want a more detailed report write
`open coverage/lcov-report/index.html` in your terminal.

**Hint**: To keep tests running try using `npm t -- --verbose --watch
--notify`. Cool, huh?

**Hint 2**: Adding `PropTypes` to your components might seem cumbersome
and tedious, and one could think it reminds you of `Java` times where you
would have to add types to **EVERYTHING**. In this case it's worth it
though. Try adding a new propTypes and make it be required and run the
tests. What happens if you forget to pass it? What if you pass the wrong
type?

**Note**: Coverage is only collected from files that are used in tests.

## Stateful component

Now that you know how to add snapshot tests, it's time to Take a look at
how to do some more complex tests. We'll be assisted by Airbnb's testing
framework [enzyme](https://git.io/vXbiD). But before that we'll Traverse
the tree manually, this works well for small components (which should be
most of your components anyway):

1. Add a snapshot test.
2. The component you are provided is a simple drawer: it has a button which,
when clicked, shows the children provided to it. Take a look at it,
familiarize yourself with the component.
3. Provide a default value for label. Test for that.
4. Time to test for different states:
  * Traverse the tree created by the `toJSON` method and find the `button`,
then click it. **Hint**: `.props`.
  * Then call `toJSON` again, you should
get a new tree. A snapshot before and after would be helpful.
5. This can get cumbersome for larger components. Try exploring the enzyme
API, how would you test the same behavior. No snapshot testing this time.
6. Go back to previous tests and see how you could provide similar test
coverage via enzyme.

## Non-react JS

Yes! We can test things that are not React, we'll see a couple of examples:

1. Reducers
2. DOM manipulation libraries

### Reducers

One cool thing we can do is use snapshot testing to test our reducers! After
all our snapshots store JSON, and our reducers return a an object representing
our state... Perfect match!

We've provided an example reducer. If you've done
[redux's tutorial](http://redux.js.org/)  it should look familiar. You can find
it under `src/reducer.js`.

1. Use `npm t -- --coverage` to make sure every patch has been covered. You
can use either _normal_ assertions or snapshot testing, whichever you're
more comfortable with.
  * Jest has built-in assertions: [docs](https://git.io/vXNai).

### DOM

This is all very nice, but here at XING most teams use jQuery or Backbone. Not
to worry. You can also use the Jest test runner to help you test dom APIs. Jest
ships with [jsdom](https://github.com/tmpvar/jsdom) which makes that incredibly
simple! If you'd like to see how we've setup or `jsdom` (beyond what's already
build-in), you go over `config/polyfills.js`.

1. Try creating a test that covers the event handler added on `#add-div`.

2. We have two ways of testing `src/dom.js`'s `#make-request`'s event handler:
  * Mock the back-end response with a tool such a [nock](npm.im/nock)
  * Mock the module entirely using [Jest mocks](https://git.io/vXNX8)
