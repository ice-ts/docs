[**API Reference**](../index.md)

***

# Interface: RustCanisterScope

Defined in: docs-entry.ts:659

A Rust canister scope containing all available tasks.
Created by calling `.make()` on a [RustCanisterBuilder](RustCanisterBuilder.md).

## Properties

### \_tag

> **\_tag**: `"scope"`

Defined in: docs-entry.ts:660

***

### children

> **children**: `object`

Defined in: docs-entry.ts:661

#### bindings

> **bindings**: [`Task`](../type-aliases/Task.md)

Generates TypeScript/JavaScript bindings from the Candid file.

#### build

> **build**: [`Task`](../type-aliases/Task.md)

Compiles the Rust crate to Wasm using cargo.

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
