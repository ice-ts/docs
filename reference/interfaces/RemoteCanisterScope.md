[**API Reference**](../index.md)

***

# Interface: RemoteCanisterScope

Defined in: docs-entry.ts:723

A Remote canister scope for canisters already deployed elsewhere.
Created by calling `.make()` on a [RemoteCanisterBuilder](RemoteCanisterBuilder.md).

## Properties

### \_tag

> **\_tag**: `"scope"`

Defined in: docs-entry.ts:724

***

### children

> **children**: `object`

Defined in: docs-entry.ts:725

#### deploy

> **deploy**: [`Task`](../type-aliases/Task.md)

Resolves the canister ID and creates an actor for interaction.
