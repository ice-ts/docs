[**API Reference**](../index.md)

***

# Interface: CustomCanisterBuilder

Defined in: docs-entry.ts:506

A builder for configuring Custom (pre-compiled Wasm) canisters.
Provides a fluent API to set installation arguments, upgrade arguments, and dependencies.

## Configuration

Pass a [CustomCanisterConfig](CustomCanisterConfig.md) to `canister.custom()`:

| Property | Type | Description |
|----------|------|-------------|
| `wasm` | `string` | Path to the pre-compiled Wasm file |
| `candid` | `string` | Path to the Candid interface file |
| `canisterId` | `string?` | Optional specific canister ID |
| `settings` | `CanisterSettings?` | Initial canister settings |

## Example

```typescript
export const token = canister.custom({
  wasm: "canisters/token.wasm",
  candid: "canisters/token.did"
}).make()
```

## Methods

### as()

> **as**\<`T`\>(): `CustomCanisterBuilder`

Defined in: docs-entry.ts:512

Override the canister's service type for typed actor calls.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The service interface type. |

#### Returns

`CustomCanisterBuilder`

The builder for chaining.

***

### deps()

> **deps**\<`D`\>(`deps`): `CustomCanisterBuilder`

Defined in: docs-entry.ts:542

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

`CustomCanisterBuilder`

The builder for chaining.

***

### installArgs()

> **installArgs**(`argsOrFn`): `CustomCanisterBuilder`

Defined in: docs-entry.ts:521

Set the canister installation arguments.
Accepts a plain value, a sync function, or an async function.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `argsOrFn` | `unknown`[] \| (`args`) => `unknown`[] \| `Promise`\<`unknown`[]\> | The install arguments, or a function that returns them. |

#### Returns

`CustomCanisterBuilder`

The builder for chaining.

***

### make()

> **make**(): [`CustomCanisterScope`](CustomCanisterScope.md)

Defined in: docs-entry.ts:554

Finalize and create the canister scope.

#### Returns

[`CustomCanisterScope`](CustomCanisterScope.md)

The canister scope with all configured tasks (deploy, build, install, etc.).

***

### upgradeArgs()

> **upgradeArgs**(`argsOrFn`): `CustomCanisterBuilder`

Defined in: docs-entry.ts:530

Set the canister upgrade arguments.
Accepts a plain value, a sync function, or an async function.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `argsOrFn` | `unknown`[] \| (`args`) => `unknown`[] \| `Promise`\<`unknown`[]\> | The upgrade arguments, or a function that returns them. |

#### Returns

`CustomCanisterBuilder`

The builder for chaining.
