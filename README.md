# @mpth/react-no-ssr
> React component to wrap non SSR components, speeding up the eventloop while rendering pages SSR. Works with React >= 16.5.0

When working with Server Side Rendering(SSR) enabled apps, you have to deal with client only components. This wrapper makes it simple to work with those components.
[npmjs.com/package/@mpth/react-no-ssr](https://www.npmjs.com/package/@mpth/react-no-ssr)

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
import Bar from '../modules/bar';

const Page = () => (
  <>
    <h1>Page</h1>
    <Bar />
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
    <NoSSR fallback={<Loading />}>
      <Foo />
    </NoSSR>
  </>
);
```

Now `<Loading />` component will be rendered until `<Foo />` component is rendered to the DOM.

[![Codecov Coverage](https://img.shields.io/codecov/c/github/maapteh/react-no-ssr/master.svg?style=flat-square)](https://codecov.io/gh/maapteh/react-no-ssr/)

