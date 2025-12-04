[**API Reference**](../index.md)

***

# Type Alias: IceConfigLoader()\<C\>

> **IceConfigLoader**\<`C`\> = (`globalArgs`) => `Promise`\<`C`\>

Defined in: [index.ts:319](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/index.ts#L319)

The return type of the `Ice()` configuration wrapper.
A function that takes global arguments and returns a resolved configuration.

## Type Parameters

| Type Parameter |
| ------ |
| `C` *extends* [`ICEConfig`](ICEConfig.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `globalArgs` | [`ICEGlobalArgs`](ICEGlobalArgs.md) |

## Returns

`Promise`\<`C`\>
