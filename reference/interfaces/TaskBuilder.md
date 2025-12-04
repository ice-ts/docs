[**API Reference**](../index.md)

***

# Interface: TaskBuilder

Defined in: docs-entry.ts:249

A builder for defining ICE tasks with typed parameters, dependencies, and execution logic.

Use the [task](../functions/task.md) function to create a TaskBuilder instance.

## Example

```typescript
import { task } from "@ice.ts/runner"

export const greet = task("greet")
  .params({
    name: { type: "string", default: "World" }
  })
  .run(async ({ args }) => {
    console.log(`Hello, ${args.name}!`)
  })
  .make()
```

## Methods

### deps()

> **deps**(`deps`): `TaskBuilder`

Defined in: docs-entry.ts:263

Declares dependencies on other tasks or canisters.
Dependencies are executed before this task and their results are available in `run`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `deps` | `Record`\<`string`, [`Scope`](../type-aliases/Scope.md) \| [`Task`](../type-aliases/Task.md)\> | Record of tasks or canister scopes. |

#### Returns

`TaskBuilder`

The builder for chaining.

***

### make()

> **make**(): [`Task`](../type-aliases/Task.md)

Defined in: docs-entry.ts:285

Finalizes and creates the Task.

#### Returns

[`Task`](../type-aliases/Task.md)

The configured Task.

***

### params()

> **params**(`params`): `TaskBuilder`

Defined in: docs-entry.ts:255

Defines the parameters that this task accepts.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `Record`\<`string`, `object`\> | An object defining the parameters. |

#### Returns

`TaskBuilder`

The builder for chaining.

***

### run()

> **run**(`fn`): `TaskBuilder`

Defined in: docs-entry.ts:279

Defines the execution logic for the task.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | (`ctx`) => `Promise`\<`unknown`\> | The async function to execute. |

#### Returns

`TaskBuilder`

The builder for chaining.
