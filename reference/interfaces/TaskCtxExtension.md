[**API Reference**](../index.md)

***

# Interface: TaskCtxExtension

Defined in: [services/taskRuntime.ts:232](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/taskRuntime.ts#L232)

Interface for module augmentation to extend TaskCtx with user-specific types.

Use this to get full autocompletion for your config's `users` and `roles` in tasks.

## Example

```typescript
// ice.config.ts
import { Ice, Ids, PICReplica, InferIceConfig, task } from "@ice.ts/runner"

// Define your config
const ice = Ice({
  network: "local",
  replica: new PICReplica(),
  users: {
    alice: Ids.fromDfx("alice"),
    bob: Ids.fromDfx("bob"),
  },
})

// Augment the module so TaskCtx knows your config shape
declare module "@ice.ts/runner" {
  interface TaskCtxExtension extends InferIceConfig<typeof ice> {}
}

// Now ctx.users and ctx.roles have full autocompletion!
export const greet = task("Greet Admin")
  .run(async (ctx) => {
    // ctx.users.alice, ctx.users.bob are available
    console.log(`Alice's principal: ${ctx.users.alice.principal}`)
    console.log(`Bob's principal: ${ctx.users.bob.principal}`)
  })
  .make()

export default ice
```
