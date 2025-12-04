[**API Reference**](../index.md)

***

# Interface: MotokoCanisterBuilder

Defined in: docs-entry.ts:312

A builder for configuring Motoko canisters.
Provides a fluent API to set installation arguments, upgrade arguments, and dependencies.

## Configuration

Pass a [MotokoCanisterConfig](MotokoCanisterConfig.md) to `canister.motoko()`:

| Property | Type | Description |
|----------|------|-------------|
| `src` | `string` | Path to the main Motoko source file |
| `canisterId` | `string?` | Optional specific canister ID |
| `settings` | `CanisterSettings?` | Initial canister settings |

## Example

```typescript
export const backend = canister.motoko({
  src: "canisters/backend/main.mo"
}).installArgs(({ ctx }) => [])
  .make()
```

## Methods

### as()

> **as**\<`T`\>(): `MotokoCanisterBuilder`

Defined in: docs-entry.ts:318

Override the canister's service type for typed actor calls.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The service interface type. |

#### Returns

`MotokoCanisterBuilder`

The builder for chaining.

***

### deps()

> **deps**\<`D`\>(`deps`): `MotokoCanisterBuilder`

Defined in: docs-entry.ts:388

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

`MotokoCanisterBuilder`

The builder for chaining.

#### Example

```typescript
// Depending on a canister
export const app = canister.motoko({ src: "app/main.mo" })
  .deps({ ledger })
  .installArgs(({ deps }) => [deps.ledger.canisterId])
  .make()

// Depending on a task
const fetchConfig = task("Fetch Config")
  .run(async () => ({ adminId: "aaaaa-aa" }))
  .make()

export const backend = canister.motoko({ src: "backend/main.mo" })
  .deps({ fetchConfig })
  .installArgs(({ deps }) => [deps.fetchConfig.adminId])
  .make()
```

***

### installArgs()

> **installArgs**(`argsOrFn`): `MotokoCanisterBuilder`

Defined in: docs-entry.ts:348

Set the canister installation arguments.
Accepts a plain value, a sync function, or an async function.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `argsOrFn` | `unknown`[] \| (`args`) => `unknown`[] \| `Promise`\<`unknown`[]\> | The install arguments, or a function that returns them. |

#### Returns

`MotokoCanisterBuilder`

The builder for chaining.

#### Example

```typescript
// Plain value
canister.motoko({ src: "main.mo" })
  .installArgs([])
  .make()

// Function with context
canister.motoko({ src: "main.mo" })
  .installArgs(({ ctx }) => [ctx.roles.deployer.principal])
  .make()

// Async function
canister.motoko({ src: "main.mo" })
  .installArgs(async ({ ctx }) => {
    const data = await fetchSomeData()
    return [data]
  })
  .make()
```

***

### make()

> **make**(): [`MotokoCanisterScope`](MotokoCanisterScope.md)

Defined in: docs-entry.ts:402

Finalize and create the canister scope.

#### Returns

[`MotokoCanisterScope`](MotokoCanisterScope.md)

The canister scope with all configured tasks (deploy, build, install, etc.).

***

### upgradeArgs()

> **upgradeArgs**(`argsOrFn`): `MotokoCanisterBuilder`

Defined in: docs-entry.ts:357

Set the canister upgrade arguments.
Accepts a plain value, a sync function, or an async function.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `argsOrFn` | `unknown`[] \| (`args`) => `unknown`[] \| `Promise`\<`unknown`[]\> | The upgrade arguments, or a function that returns them. |

#### Returns

`MotokoCanisterBuilder`

The builder for chaining.
