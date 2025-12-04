[**API Reference**](../index.md)

***

# Interface: CustomCanisterScope

Defined in: docs-entry.ts:691

A Custom (pre-compiled Wasm) canister scope containing all available tasks.
Created by calling `.make()` on a [CustomCanisterBuilder](CustomCanisterBuilder.md).

## Properties

### \_tag

> **\_tag**: `"scope"`

Defined in: docs-entry.ts:692

***

### children

> **children**: `object`

Defined in: docs-entry.ts:693

#### bindings

> **bindings**: [`Task`](../type-aliases/Task.md)

Generates TypeScript/JavaScript bindings from the Candid file.

#### build

> **build**: [`Task`](../type-aliases/Task.md)

Validates the Wasm file exists (no compilation needed).

#### config

> **config**: [`Task`](../type-aliases/Task.md)

Returns the canister configuration.

#### create

> **create**: [`Task`](../type-aliases/Task.md)

Creates the canister on the replica (allocates canister ID).

#### deploy

> **deploy**: [`Task`](../type-aliases/Task.md)

Smart deployment: creates and installs in one step.

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
