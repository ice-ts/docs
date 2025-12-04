[**API Reference**](../index.md)

***

# Type Alias: Task\<A, D, P\>

> **Task**\<`A`, `D`, `P`\> = `object`

Defined in: [types/types.ts:205](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L205)

Represents an executable task.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `A` | `unknown` |
| `D` *extends* `Record`\<`string`, `Task`\> | `object` |
| `P` *extends* `Record`\<`string`, `Task`\> | `object` |

## Properties

### \_tag

> **\_tag**: `"task"`

Defined in: [types/types.ts:210](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L210)

***

### dependencies

> **dependencies**: `P`

Defined in: [types/types.ts:216](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L216)

***

### dependsOn

> **dependsOn**: `D`

Defined in: [types/types.ts:215](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L215)

***

### description

> **description**: `string`

Defined in: [types/types.ts:213](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L213)

***

### effect()

> **effect**: (`ctx`) => `Promise`\<`A` \| `TaskCancelled`\>

Defined in: [types/types.ts:212](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L212)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | `TaskCtx` |

#### Returns

`Promise`\<`A` \| `TaskCancelled`\>

***

### id

> `readonly` **id**: `symbol`

Defined in: [types/types.ts:211](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L211)

***

### namedParams

> **namedParams**: `Record`\<`string`, `NamedParam`\>

Defined in: [types/types.ts:217](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L217)

***

### params

> **params**: `Record`\<`string`, `TaskParam`\>

Defined in: [types/types.ts:219](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L219)

***

### positionalParams

> **positionalParams**: `PositionalParam`[]

Defined in: [types/types.ts:218](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L218)

***

### tags

> **tags**: [`IceTag`](IceTag.md)[]

Defined in: [types/types.ts:214](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L214)
