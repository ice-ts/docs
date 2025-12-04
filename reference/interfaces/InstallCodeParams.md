[**API Reference**](../index.md)

***

# Interface: InstallCodeParams

Defined in: [services/replica.ts:314](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L314)

Parameters for installing code to a canister.

## Properties

### canisterId

> **canisterId**: `string`

Defined in: [services/replica.ts:316](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L316)

The canister ID to install code to.

***

### encodedArgs

> **encodedArgs**: `Uint8Array`

Defined in: [services/replica.ts:320](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L320)

Candid-encoded initialization arguments.

***

### identity

> **identity**: `Identity`

Defined in: [services/replica.ts:322](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L322)

The identity to use for the call.

***

### mode

> **mode**: `InstallModes`

Defined in: [services/replica.ts:324](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L324)

The install mode: "install", "upgrade", or "reinstall".

***

### wasm

> **wasm**: `Uint8Array`

Defined in: [services/replica.ts:318](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L318)

The compiled Wasm module bytes.
