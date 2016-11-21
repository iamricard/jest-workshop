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

