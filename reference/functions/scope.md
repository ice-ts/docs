[**API Reference**](../index.md)

***

# Function: scope()

> **scope**(`children`): `object`

Defined in: [builders/scope.ts:28](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/builders/scope.ts#L28)

Creates a logical grouping of tasks or nested scopes.
This helps organize your ICE configuration into namespaces.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `children` | [`TaskTree`](../type-aliases/TaskTree.md) | A record mapping names to [Task](../type-aliases/Task.md) or [Scope](../type-aliases/Scope.md) objects. |

## Returns

`object`

A [Scope](../type-aliases/Scope.md) object containing the children.

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_tag` | `"scope"` | - | [builders/scope.ts:30](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/builders/scope.ts#L30) |
| `children` | [`TaskTree`](../type-aliases/TaskTree.md) | - | [builders/scope.ts:35](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/builders/scope.ts#L35) |
| `description` | `string` | `"Scope"` | [builders/scope.ts:33](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/builders/scope.ts#L33) |
| `id` | `symbol` | - | [builders/scope.ts:31](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/builders/scope.ts#L31) |
| `tags` | `never`[] | `[]` | [builders/scope.ts:32](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/builders/scope.ts#L32) |

## Example

```typescript
import { scope, task } from "@ice.ts/runner"

const reset = task().run(() => console.log("reset")).make()
const seed = task().run(() => console.log("seed")).make()

export const db = scope({
  reset,
  seed
})
// Usage: ice run db:reset
```
