[**API Reference**](../index.md)

***

# Interface: CustomCanisterConfig

Defined in: docs-entry.ts:71

Configuration for a Custom (pre-compiled Wasm) canister.

## Properties

### candid

> **candid**: `string`

Defined in: docs-entry.ts:79

Path to the Candid interface file (.did).

***

### canisterId?

> `optional` **canisterId**: `string`

Defined in: docs-entry.ts:83

Optional specific canister ID.

***

### settings?

> `optional` **settings**: [`CanisterSettings`](CanisterSettings.md)

Defined in: docs-entry.ts:87

Initial canister settings.

***

### wasm

> **wasm**: `string`

Defined in: docs-entry.ts:75

Path to the pre-compiled Wasm file.
