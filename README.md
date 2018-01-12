# react-wireframe

[Homepage](https://a-type.github.io/react-wireframe)
[Storybook](https://a-type.github.io/react-wireframe/storybook)

Build your React app without providing a UI by filling it in with this placeholder component.

Fits two big use cases:

1. Quickly prototyping business logic or state management without worrying about interaction and display of data.
2. Working on a large team and allowing data-centric developers to build out their features behind feature flags without the aesthetics-centric developers or UX designers having to get involved until the logic is settled.

> Early development, usage may change.

## Docs

### Installing

```
npm i --save react-wireframe
```

### Default export: `Wireframe`

Wireframe is a React component that renders props which are passed to it as a browse-friendly JSON tree.

Wireframe supports advanced behaviors like editable data and interaction by passing properties to the `wireframe` prop.

Any properties not passed to `wireframe` (or `wireframeComponents`) will be considered your data, and rendered on the screen.

```javascript
<Wireframe
  foo="bar"
  wireframe={{
    // displays a name in the UI as if it were a placeholder for a real, named component
    name: 'MockedComponentName',
    // makes the JSON editable
    editable: true,
    // creates buttons which can be used to interact with the mock component
    behaviors: [
      {
        name: 'someBehavior',
        run: data => doSomethingWith(data),
      },
    ],
  }}
  wireframeComponents={{
    // override the presentational components used to render a Wireframe
    Container: CustomContainer,
    Renderer: CustomRenderer,
    Behaviors: CustomBehaviors,
    Name: CustomName,
  }}
/>
```

**Props**

#### `wireframe`

```
{
  name: String,
  editable: Boolean,
  behaviors: Array[
    {
      name: String,
      run: Function
    }
  ]
}
```

**`name`**

Defines a name for the wireframe. This helps organize your page layout and make it clear what role each wireframed component plays.

**`editable`**

Enables editing of the data within the wireframe. This does *not* have any effect on your application's data. The data which is edited in the UI is stored locally in the wireframe's component state.

With the library's default JSON renderer, you can modify any particular value, or switch to text-editing mode where the structure of the data can be changed.

> **Editing mode restrictions**
> * Top-level props cannot be changed. Any keys which are added to the root of the object will be ignored. Keys which are removed will be reset to `null`, unless they are functions, in which case they will be preserved.
> * Function props will not be displayed in plaintext edit mode.

**`behaviors`**

Behaviors are descriptions of interactivity which you may want to include in your prototype. For instance, fetching data, submitting a form, etc.

Providing behaviors will generate buttons in your Wireframe component which will trigger them when clicked.

Each behavior has a `name` (which labels the button) and a `run` function. `run` is passed one parameter; the current data stored in the Wireframe. In an editable Wireframe, that data will be exactly what you see onscreen, even if changes have been made so that the data is no longer equivalent to the passed in props. This lets a Wireframe act like a form, where you can modify values and submit them to your application state management system.

For instance, say you wanted your Wireframe to act as a form which is initially populated with data from `props`, but allows the user to change these values and submit them via a `props.submit` function. You could write a behavior like this:

```
{
  name: 'submit',
  run: ({ submit, ...data }) => submit(data),
}
```

That would take all keys except `submit` and pass them to the `submit` function when you click the button in the Wireframe. Now, you can edit any of the values onscreen and submit them through `props.submit`, triggering changes within your application's state just like a 'real' form would.

#### `wireframeComponents`

Wireframe lets you pass in presentational components to customize its look-and-feel and interactive behavior. ([Read more on this pattern](https://medium.com/@gaforres/react-redux-pattern-customizable-behavioral-components-359b4adbf380))

Each component has a contract, which you can reference to replace it.

**Container**

Props:

```
{
  children: [Node],
}
```

Container is passed multiple child components and must lay them out. The default Container is responsible for drawing the border and background, and separating / aligning the renderer and behaviors. It also controls the default wireframe behavior of inflating to fill its containing element.

**Renderer**

Props:

```
{
  data: Object,
  editable: Boolean,
  onDataChanged: Function,
}
```

Renderer is responsible for rendering the data on the screen and controling editing behavior. If `editable` is true, it should call `onDataChanged` with new data as the user edits it.

Note that Renderer is not responsible for the edit-mode restrictions discussed in the section on editing. It does not have to enforce top-level props; Wireframe itself does this.

**Behaviors**

Props:

```
{
  behaviors: [
    {
      name: String,
      run: Function,
    },
  ],
  runBehavior: Function(behavior),
}
```

Behaviors is responsible for laying out behavior controls and running behaviors when those controls are interacted with. Run a behavior by calling `runBehavior` and passing the entire behavior object; **do not** call `behavior.run()` directly, as the data is not available to Behaviors.

**Name**

Props:

```
{
  children: String
}
```

A simple component that renders the name of the Wireframe. The name passed will have the component-style `<>` brackets applied to it.

## Recommendations

### Collections

A common pattern in applications is to have a list of items within the UI. Simply wrapping the whole list in a Wireframe will give you a large JSON structure to traverse.

For the collection case, you could write a small component to iterate through each item in the list and create a container wrapping a Wireframe for that, instead. This works well if your data is [normalized](https://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html); your outer List container can connect itself to the list of item ids, and create Item containers based on each id without ever being aware of the contents of the items.

In general, you can use the size of a Wireframe to make it obvious what the scope of your container is. If you find that the amount of data in a wireframe is too unweildy, listen to intuition and consider breaking it down into smaller containers with their own wireframed components.

### Layout

`react-wireframe` does not concern itself with layout. It's recommended that you insert wireframe components into a pre-defined layout to get a good feel for how your app will feel and interact as you use them, but not really required. CSS Grid is a great place to start.

