[**API Reference**](../index.md)

***

# Interface: RustCanisterBuilder

Defined in: docs-entry.ts:430

A builder for configuring Rust canisters.
Provides a fluent API to set installation arguments, upgrade arguments, and dependencies.

## Configuration

Pass a [RustCanisterConfig](RustCanisterConfig.md) to `canister.rust()`:

| Property | Type | Description |
|----------|------|-------------|
| `src` | `string` | Path to the Rust crate directory |
| `candid` | `string` | Path to the Candid interface file |
| `canisterId` | `string?` | Optional specific canister ID |
| `settings` | `CanisterSettings?` | Initial canister settings |

## Example

```typescript
export const ledger = canister.rust({
  src: "canisters/ledger",
  candid: "canisters/ledger.did"
}).make()
```

## Methods

### as()

> **as**\<`T`\>(): `RustCanisterBuilder`

Defined in: docs-entry.ts:436

Override the canister's service type for typed actor calls.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The service interface type. |

#### Returns

`RustCanisterBuilder`

The builder for chaining.

***

### deps()

> **deps**\<`D`\>(`deps`): `RustCanisterBuilder`

Defined in: docs-entry.ts:466

Declare dependencies on other canisters or tasks.
Dependencies are executed before this canister and their results are available in `installArgs`.

- **CanisterScope**: Uses its `deploy` task. Result contains `{ canisterId, actor }`.
- **Task**: Uses the task directly. Result is whatever the task returns.

#### Type Parameters

| Type Parameter |
| ------ |
| `D` *extends* `Record`\<`string`, [`Scope`](../type-aliases/Scope.md) \| [`Task`](../type-aliases/Task.md)\> |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `deps` | `D` | Record of canister scopes or tasks this canister depends on. |

#### Returns

`RustCanisterBuilder`

The builder for chaining.

***

### installArgs()

> **installArgs**(`argsOrFn`): `RustCanisterBuilder`

Defined in: docs-entry.ts:445

Set the canister installation arguments.
Accepts a plain value, a sync function, or an async function.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `argsOrFn` | `unknown`[] \| (`args`) => `unknown`[] \| `Promise`\<`unknown`[]\> | The install arguments, or a function that returns them. |

#### Returns

`RustCanisterBuilder`

The builder for chaining.

***

### make()

> **make**(): [`RustCanisterScope`](RustCanisterScope.md)

Defined in: docs-entry.ts:478

Finalize and create the canister scope.

#### Returns

[`RustCanisterScope`](RustCanisterScope.md)

The canister scope with all configured tasks (deploy, build, install, etc.).

***

### upgradeArgs()

> **upgradeArgs**(`argsOrFn`): `RustCanisterBuilder`

Defined in: docs-entry.ts:454

Set the canister upgrade arguments.
Accepts a plain value, a sync function, or an async function.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `argsOrFn` | `unknown`[] \| (`args`) => `unknown`[] \| `Promise`\<`unknown`[]\> | The upgrade arguments, or a function that returns them. |

#### Returns

`RustCanisterBuilder`

The builder for chaining.
