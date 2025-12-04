[**API Reference**](../index.md)

***

# Type Alias: Scope

> **Scope** = `object`

Defined in: [types/types.ts:255](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L255)

A logical grouping of tasks and other scopes.

## Properties

### \_tag

> **\_tag**: `"scope"`

Defined in: [types/types.ts:256](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L256)

***

### children

> **children**: `Record`\<`string`, [`TaskTreeNode`](TaskTreeNode.md)\>

Defined in: [types/types.ts:261](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L261)

***

### defaultTask?

> `optional` **defaultTask**: `string`

Defined in: [types/types.ts:263](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L263)

***

### description

> **description**: `string`

Defined in: [types/types.ts:260](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L260)

***

### id

> `readonly` **id**: `symbol`

Defined in: [types/types.ts:257](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L257)

***

### tags

> **tags**: [`IceTag`](IceTag.md)[]

Defined in: [types/types.ts:259](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L259)
