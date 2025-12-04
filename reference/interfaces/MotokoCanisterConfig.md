[**API Reference**](../index.md)

***

# Interface: MotokoCanisterConfig

Defined in: docs-entry.ts:29

Configuration for a Motoko canister.

## Properties

### canisterId?

> `optional` **canisterId**: `string`

Defined in: docs-entry.ts:37

Optional specific canister ID. If not provided, one will be generated/managed automatically.

***

### settings?

> `optional` **settings**: [`CanisterSettings`](CanisterSettings.md)

Defined in: docs-entry.ts:41

Initial canister settings (cycles, controllers, etc.).

***

### src

> **src**: `string`

Defined in: docs-entry.ts:33

Path to the main Motoko source file (e.g. "canisters/main.mo").
