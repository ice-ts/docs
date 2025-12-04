[**API Reference**](../index.md)

***

# Type Alias: InferIceConfig\<T\>

> **InferIceConfig**\<`T`\> = `T` *extends* (`env`) => `Promise`\<infer Config\> ? `Config` : `never`

Defined in: [types/types.ts:293](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/types/types.ts#L293)

Helper type to infer the configuration type from an `Ice` config function.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
