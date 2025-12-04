[**API Reference**](../index.md)

***

# Interface: RemoteCanisterBuilder

Defined in: docs-entry.ts:580

A builder for configuring Remote canisters (already deployed elsewhere).
Use this to reference canisters that are deployed on mainnet or another network.

## Configuration

Pass a [RemoteCanisterConfig](RemoteCanisterConfig.md) to `canister.remote()`:

| Property | Type | Description |
|----------|------|-------------|
| `canisterId` | `string` | The canister ID of the remote canister |
| `candid` | `string` | Path to the Candid interface file |

## Example

```typescript
export const nns = canister.remote({
  canisterId: "rrkah-fqaaa-aaaaa-aaaaq-cai",
  candid: "nns.did"
}).make()
```

## Methods

### as()

> **as**\<`T`\>(): `RemoteCanisterBuilder`

Defined in: docs-entry.ts:586

Override the canister's service type for typed actor calls.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The service interface type. |

#### Returns

`RemoteCanisterBuilder`

The builder for chaining.

***

### make()

> **make**(): [`RemoteCanisterScope`](RemoteCanisterScope.md)

Defined in: docs-entry.ts:592

Finalize and create the canister scope.

#### Returns

[`RemoteCanisterScope`](RemoteCanisterScope.md)

The canister scope with the remote reference.
