#  v1 to v2 的迁移至南 [原文]('https://github.com/reactjs/react-transition-group/blob/master/Migration.md')

_A few notes to help with migrating from v1 to v2._

The `<CSSTransitionGroup>` 组件已经被删除. A `<CSSTransition>` 组件已经被添加到新组件 `<TransitionGroup>` 中,执行相同的任务.

### tl;dr:

- `transitionName` -> `classNames`
- `transitionEnterTimeout` and `transitionLeaveTimeout` -> `timeout={{ exit, enter }}`
- `transitionAppear` -> `appear`
- `transitionEnter` -> `enter`
- `transitionLeave` -> `exit`

## Walkthrough

先看看 [原 docs example](https://github.com/reactjs/react-transition-group/tree/v1-stable/#high-level-api-csstransitiongroup) 并进行迁移.

Starting with this CSS:

```css
.example-enter {
  opacity: 0.01;
}

.example-enter.example-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-in;
}

.example-leave {
  opacity: 1;
}

.example-leave.example-leave-active {
  opacity: 0.01;
  transition: opacity 300ms ease-in;
}
```

And this component:

```js
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: ['hello', 'world', 'click', 'me']};
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={i} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {items}
        </CSSTransitionGroup>
      </div>
    );
  }
}
```

最明显的变动是现在使用 `<TransitionGroup>` 取缔原来的 `<CSSTransitionGroup>`:

```diff
 render() {
   const items = this.state.items.map((item, i) => (
     <div key={i} onClick={() => this.handleRemove(i)}>
       {item}
     </div>
   ));

   return (
     <div>
       <button onClick={this.handleAdd}>Add Item</button>
-      <CSSTransitionGroup
-        transitionName="example"
-        transitionEnterTimeout={500}
-        transitionLeaveTimeout={300}>
+      <TransitionGroup>
         {items}
-      </CSSTransitionGroup>
+      </TransitionGroup>
     </div>
   )
 }
```

现在看到的变动还不是全部,因为我们还没有包括动画. 为了此目的我们将 wrap 每个 item 到 `<CSSTransition>`中. 首先,我们调整 CSS:

```diff
 .example-enter {
   opacity: 0.01;
 }

 .example-enter.example-enter-active {
   opacity: 1;
   transition: opacity 500ms ease-in;
 }

-.example-leave {
+.example-exit {
   opacity: 1;
 }

-.example-leave.example-leave-active {
+.example-exit.example-exit-active {
   opacity: 0.01;
   transition: opacity 300ms ease-in;
 }
```

我们将 `leave` 替换成 `exit`. v2 使用 "exit" 而不是 "leave" ,这样更适合, 因为避免英语时态的尴尬 (like with "entered" and "leaved").

现在我们添加 `<CSSTransition>` component:

```diff
 render() {
   const items = this.state.items.map((item, i) => (
+    <CSSTransition
+      key={i}
+      classNames="example"
+      timeout={{ enter: 500, exit: 300 }}
+    >
       <div onClick={() => this.handleRemove(i)}>
         {item}
       </div>
+    </CSSTransition>
   ));

   return (
     <div>
       <button onClick={this.handleAdd}>Add Item</button>
       <TransitionGroup>
         {items}
       </TransitionGroup>
     </div>
   )
 }
```

注意的是 `transitionName` 被替换成 `classNames`. `<CSSTransition>` 基本和 `<CSSTransitionGroup>`使用相同的签名. 问我们也将 `transitionEnterTimeout` 和 `transitionLeaveTimeout` 替换成唯一的 `timeout`  使用 object 容纳 prop.

> **提示:** 如果你的 enter 和 exit timeouts 一致的话你可以直接使用简短的形式,写成 `timeout={500}`.

如果你想使一切变得更 encapsulated(胶囊化), 你可以 wrap 我们的 `<CSSTransition>` 到一个单独的 component 中, 这样做之后我们可以重用:

```js
const FadeTransition = (props) => (
  <CSSTransition
    {...props}
    classNames="example"
    timeout={{ enter: 500, exit: 300 }}
  />
);
```

We can then use it like:

```diff
 render() {
   const items = this.state.items.map((item, i) => (
-    <CSSTransition
-      key={i}
-      classNames="example"
-      timeout={{ enter: 500, exit: 300 }}
-    >
+    <FadeTransition>
       <div onClick={() => this.handleRemove(i)}>
         {item}
       </div>
-    </CSSTransition>
+    </FadeTransition>
   ));

   return (
     <div>
       <button onClick={this.handleAdd}>Add Item</button>
       <TransitionGroup>
         {items}
       </TransitionGroup>
     </div>
   )
 }
```

> **Hey!** 你可能并不需要 `<CSSTransition>` 其实! The lower level `<Transition>` component 已经非常方便 ,并且可能更适用于简单或更多的自定义场景. 看看我们是怎样将  [React-Bootstrap](https://react-bootstrap.github.io/)的 [`<Collapse>`](https://github.com/react-bootstrap/react-bootstrap/pull/2676/files#diff-4f938f648d04d4859be417d6590ca7c4) 和 [`<Fade>`](https://github.com/react-bootstrap/react-bootstrap/pull/2676/files#diff-8f766132cbd9f8de55ee05d63d75abd8) components 更新到V2的.


## Wrapping `<Transition>` Components

The old `<TransitionGroup>` component managed transitions through custom static lifecycle methods on its children. In v2 we removed that API in favor of requiring that `<TransitionGroup>` be used with a `<Transition>` component, and using traditional prop passing to communicate between the two.

This means that `<TransitionGroup>`s inject their children with `<Transition>`-specific props that _must_ be passed through to the `<Transition>` component for the transition to work.

```js
const MyTransition = ({ children: child, ...props }) => (
  // NOTICE THE SPREAD! THIS IS REQUIRED!
  <Transition {...props}>
    {transitionState => React.cloneElement(child, {
      style: getStyleForTransitionState(transitionState)
    })}
  </Transition>
);

const MyList = () => (
  <TransitionGroup>
    {items.map(item => (
      <MyTransition>{item}</MyTransition>
    )}
  </TransitionGroup>
);
```

Note how `<MyTransition>` passes all props other than its own to `<Transition>`.


## Lifecycle Callbacks

As noted, child lifecycle methods have been removed. If you do need to do some work when the `<Transition>` changes from one state to another, use the lifecycle callback props.

```js
<Transition
  {...props}
  onEnter={handleEnter}
  onEntering={handleEntering}
  onEntered={handleEntered}
  onExit={handleExit}
  onExiting={handleExiting}
  onExited={handleExited}
/>
```

Each callback is called with the DOM node of the transition component. Note also that there are now _three_ states per enter/exit transition instead of the original two. See the [full documentation](https://reactcommunity.org/react-transition-group/#Transition) for more details.
