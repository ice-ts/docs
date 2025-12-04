[**API Reference**](../index.md)

***

# Type Alias: ICEConfig\<U, R\>

> **ICEConfig**\<`U`, `R`\> = `object`

Defined in: [types/types.ts:45](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L45)

The core configuration object for an ICE environment.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `U` *extends* `ICEUsers` | `ICEUsers` |
| `R` *extends* `ICERoles`\<`U`\> | `ICERoles`\<`U`\> |

## Properties

### network

> **network**: `string`

Defined in: [types/types.ts:53](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L53)

A logical name for the network (e.g. "local", "ic", "staging").
Used for caching and state isolation.

***

### replica?

> `optional` **replica**: [`Replica`](Replica.md)

Defined in: [types/types.ts:57](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L57)

The replica instance to connect to.

***

### roles?

> `optional` **roles**: `R`

Defined in: [types/types.ts:66](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L66)

A map of role names to user keys.
Common roles: "deployer", "minter", "controller", "treasury".

***

### users?

> `optional` **users**: `U`

Defined in: [types/types.ts:61](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L61)

A map of named users/identities available in this environment.
