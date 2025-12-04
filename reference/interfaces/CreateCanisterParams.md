[**API Reference**](../index.md)

***

# Interface: CreateCanisterParams

Defined in: [services/replica.ts:342](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L342)

Parameters for creating a canister.

## Properties

### canisterId

> **canisterId**: `string` \| `undefined`

Defined in: [services/replica.ts:344](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L344)

Optional specific canister ID. If undefined, one will be generated.

***

### identity

> **identity**: `Identity`

Defined in: [services/replica.ts:346](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L346)

The identity to use for the call (will be initial controller).

***

### settings?

> `optional` **settings**: `CanisterSettings`

Defined in: [services/replica.ts:348](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L348)

Optional canister settings (controllers, cycles, etc.).
