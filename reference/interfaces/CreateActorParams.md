[**API Reference**](../index.md)

***

# Interface: CreateActorParams

Defined in: [services/replica.ts:355](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L355)

Parameters for creating an actor to interact with a canister.

## Properties

### canisterDID

> **canisterDID**: `object`

Defined in: [services/replica.ts:359](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L359)

The Candid interface factory (from .did.js file).

#### idlFactory

> **idlFactory**: `InterfaceFactory`

***

### canisterId

> **canisterId**: `string`

Defined in: [services/replica.ts:357](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L357)

The canister ID to create an actor for.

***

### identity

> **identity**: `Identity`

Defined in: [services/replica.ts:361](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L361)

The identity to use for calls.
