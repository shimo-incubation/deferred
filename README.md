# deferred
A javascript library implement deferred promise proposed by Mozilla.

# usage
```sh
npm i -S @shimo/deferred
```

```typescript
import Deferred from '@shimo/deferred'

const deferred = new Deferred<void>();

async function foo() {
  await deferred.promise;
  console.log('foo');
}

function main() {
  foo();
  deferred.resolve();
}

main();
```
