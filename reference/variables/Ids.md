[**API Reference**](../index.md)

***

# Variable: Ids

> `const` **Ids**: `object`

Defined in: [ids.ts:195](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/ids.ts#L195)

Utilities for managing Internet Computer identities.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="fromdfx"></a> `fromDfx()` | (`name?`) => `Promise`\<[`ICEUser`](../type-aliases/ICEUser.md)\> | Loads an identity from dfx. | [ids.ts:202](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/ids.ts#L202) |
| <a id="frompem"></a> `fromPem()` | (`pem`) => `Promise`\<[`ICEUser`](../type-aliases/ICEUser.md)\> | Creates an identity from a PEM string (Ed25519 or Secp256k1). | [ids.ts:217](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/ids.ts#L217) |
