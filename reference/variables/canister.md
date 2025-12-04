[**API Reference**](../index.md)

***

# Variable: canister

> `const` **canister**: `object`

Defined in: docs-entry.ts:778

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `custom()` | (`config`) => [`CustomCanisterBuilder`](../interfaces/CustomCanisterBuilder.md) | Creates a builder for Custom (pre-compiled Wasm) canisters. **See** - [CustomCanisterBuilder](../interfaces/CustomCanisterBuilder.md) for builder methods. - [CustomCanisterConfig](../interfaces/CustomCanisterConfig.md) for configuration options. | docs-entry.ts:801 |
| `motoko()` | (`config`) => [`MotokoCanisterBuilder`](../interfaces/MotokoCanisterBuilder.md) | Creates a builder for Motoko canisters. **See** - [MotokoCanisterBuilder](../interfaces/MotokoCanisterBuilder.md) for builder methods. - [MotokoCanisterConfig](../interfaces/MotokoCanisterConfig.md) for configuration options. | docs-entry.ts:785 |
| `remote()` | (`config`) => [`RemoteCanisterBuilder`](../interfaces/RemoteCanisterBuilder.md) | Creates a builder for Remote canisters. **See** - [RemoteCanisterBuilder](../interfaces/RemoteCanisterBuilder.md) for builder methods. - [RemoteCanisterConfig](../interfaces/RemoteCanisterConfig.md) for configuration options. | docs-entry.ts:809 |
| `rust()` | (`config`) => [`RustCanisterBuilder`](../interfaces/RustCanisterBuilder.md) | Creates a builder for Rust canisters. **See** - [RustCanisterBuilder](../interfaces/RustCanisterBuilder.md) for builder methods. - [RustCanisterConfig](../interfaces/RustCanisterConfig.md) for configuration options. | docs-entry.ts:793 |
