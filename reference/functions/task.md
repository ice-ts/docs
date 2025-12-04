[**API Reference**](../index.md)

***

# Function: task()

> **task**(`description`): `TaskBuilder`\<[`Task`](../type-aliases/Task.md), \{ \}, `TaskCtx`\>

Defined in: [builders/task.ts:533](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/builders/task.ts#L533)

Creates a new task builder.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `description` | `string` | `""` | A brief description of what the task does. |

## Returns

`TaskBuilder`\<[`Task`](../type-aliases/Task.md), \{ \}, `TaskCtx`\>

A [TaskBuilder](../interfaces/TaskBuilder.md) to configure the task.

## Example

```typescript
import { task } from "@ice.ts/runner"

export const myTask = task("My useful task")
  .params({ name: { type: "string" } })
  .run(({ args }) => console.log(args.name))
  .make()
```
