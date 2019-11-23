# react-no-ssr
> React component to wrap non SSR components

When working with Server Side Rendering(SSR) enabled apps, you have to deal with client only components. This wrapper makes it simple to work with those components.

### Installation

```
yarn add @mpth/react-no-ssr
```

### Usage

`Foo` is our **client only** component:

```js
import React from 'react';
import NoSSR from '@mpth/react-no-ssr';
import Foo from '../modules/foo';

const Page = () => (
  <>
    <h2>Page</h2>
    <NoSSR>
      <Foo />
    </NoSSR>
  </>
);
```

Then, `<Foo />` component is only rendered on the client just after it's mounted.

### Render a Component on SSR

Usually, we need to add some loading text or similar until `<Foo />` component starts to render. Here's how to do it.

```js
const Loading = () => (<div>Loading...</div>);
const Page = () => (
  <>
    ....
    <NoSSR onSSR={<Loading />}>
      <Foo />
    </NoSSR>
  </>
);
```

Now `<Loading />` component will be rendered until `<Foo />` component is rendered to the DOM.
