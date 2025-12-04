[**API Reference**](../index.md)

***

# Interface: RustCanisterConfig

Defined in: docs-entry.ts:48

Configuration for a Rust canister.

## Properties

### candid

> **candid**: `string`

Defined in: docs-entry.ts:56

Path to the Candid interface file (.did).

***

### canisterId?

> `optional` **canisterId**: `string`

Defined in: docs-entry.ts:60

Optional specific canister ID.

***

### settings?

> `optional` **settings**: [`CanisterSettings`](CanisterSettings.md)

Defined in: docs-entry.ts:64

Initial canister settings.

***

### src

> **src**: `string`

Defined in: docs-entry.ts:52

Path to the Rust crate directory containing Cargo.toml.
