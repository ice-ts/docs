[**API Reference**](../index.md)

***

# Interface: MotokoCanisterScope

Defined in: docs-entry.ts:627

A Motoko canister scope containing all available tasks.
Created by calling `.make()` on a [MotokoCanisterBuilder](MotokoCanisterBuilder.md).

## Available Tasks

| Task | Description |
|------|-------------|
| `deploy` | Smart deployment: creates, builds, and installs in one step |
| `build` | Compiles the Motoko source to Wasm |
| `install` | Installs or upgrades the Wasm code |
| `create` | Creates the canister on the replica |
| `bindings` | Generates TypeScript/JavaScript bindings |
| `status` | Returns the current canister status |
| `stop` | Stops the canister |
| `remove` | Removes/deletes the canister |

## Example

```typescript
// Run a specific task
await ctx.runTask(backend.children.deploy)

// Access task results
const result = await ctx.runTask(backend.children.build)
```

## Properties

### \_tag

> **\_tag**: `"scope"`

Defined in: docs-entry.ts:628

***

### children

> **children**: `object`

Defined in: docs-entry.ts:629

#### bindings

> **bindings**: [`Task`](../type-aliases/Task.md)

Generates TypeScript/JavaScript bindings from the Candid file.

#### build

> **build**: [`Task`](../type-aliases/Task.md)

Compiles the Motoko source to Wasm.

#### config

> **config**: [`Task`](../type-aliases/Task.md)

Returns the canister configuration.

#### create

> **create**: [`Task`](../type-aliases/Task.md)

Creates the canister on the replica (allocates canister ID).

#### deploy

> **deploy**: [`Task`](../type-aliases/Task.md)

Smart deployment: creates, builds, and installs in one step.

#### install

> **install**: [`Task`](../type-aliases/Task.md)

Installs or upgrades the Wasm code on the canister.

#### install\_args

> **install\_args**: [`Task`](../type-aliases/Task.md)

Computes and returns the install arguments.

#### remove

> **remove**: [`Task`](../type-aliases/Task.md)

Removes/deletes the canister from the replica.

#### status

> **status**: [`Task`](../type-aliases/Task.md)

Returns the current canister status (running, stopped, etc.).

#### stop

> **stop**: [`Task`](../type-aliases/Task.md)

Stops the canister.
