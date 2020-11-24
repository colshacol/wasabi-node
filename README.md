# @kensie/wasabi-node

```js
import * as wasabi from '@kensie/wasabi-node'

const [data, error] = await wasabi.saveFile({
  name: 'foo.txt',
  content: 'foo foo foo'
})

const [data, error] = await wasabi.saveFile({
  name: 'foo.mp3',
  content: 'foo foo foo'
})

const [data, error] = await wasabi.saveFile({
  name: 'foo.pdf',
  content: 'foo foo foo'
})

const [data, error] = await wasabi.saveFile({
  name: 'foo.mp3',
  content: 'foo foo foo'
})
```