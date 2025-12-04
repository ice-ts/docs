[**API Reference**](../index.md)

***

# Interface: TaskCtx

Defined in: docs-entry.ts:856

The execution context passed to every task's `run` function and canister builder hooks.
Provides access to configuration, users, roles, replica, and utilities for orchestrating tasks.

## Examples

**Accessing TaskCtx in a task:**
```typescript
import { task } from "@ice.ts/runner"

export const deploy = task()
  .run(async (ctx) => {
    // Access network and replica
    console.log(`Deploying to ${ctx.network}`)

    // Access configured users and roles
    const deployer = ctx.roles.deployer
    console.log(`Deployer principal: ${deployer.principal}`)

    // Access paths
    console.log(`App directory: ${ctx.appDir}`)
  })
  .make()
```

**Accessing TaskCtx in canister installArgs:**
```typescript
import { canister } from "@ice.ts/runner"

export const backend = canister.motoko({
  src: "canisters/backend/main.mo"
}).installArgs(({ ctx }) => {
  // Use roles to set the admin
  const admin = ctx.roles.deployer.principal
  return [admin]
}).make()
```

## Properties

### appDir

> `readonly` **appDir**: `string`

Defined in: docs-entry.ts:956

Absolute path to the application root (where ice.config.ts lives).

***

### args

> `readonly` **args**: `Record`\<`string`, `unknown`\>

Defined in: docs-entry.ts:939

The parsed arguments for the current task.

***

### canisterIds

> `readonly` **canisterIds**: `object`

Defined in: docs-entry.ts:995

API to manage canister IDs (canister_ids.json).

#### getCanisterIds()

> **getCanisterIds**(): `Promise`\<`CanisterIds`\>

Retrieves all canister IDs.

##### Returns

`Promise`\<`CanisterIds`\>

#### removeCanisterId()

> **removeCanisterId**(`canisterName`): `Promise`\<`void`\>

Removes the canister ID for the given canister name.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `canisterName` | `string` |

##### Returns

`Promise`\<`void`\>

#### setCanisterId()

> **setCanisterId**(`params`): `Promise`\<`void`\>

Updates the canister ID for a specific canister and network.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `canisterId`: `string`; `canisterName`: `string`; `network`: `string`; \} |
| `params.canisterId` | `string` |
| `params.canisterName` | `string` |
| `params.network` | `string` |

##### Returns

`Promise`\<`void`\>

***

### deployments

> `readonly` **deployments**: `object`

Defined in: docs-entry.ts:975

API to manage deployment metadata.

#### get()

> **get**(`canisterName`, `network`): `Promise`\<[`Deployment`](../type-aliases/Deployment.md) \| `undefined`\>

Retrieves deployment info for a canister on a specific network.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `canisterName` | `string` |
| `network` | `string` |

##### Returns

`Promise`\<[`Deployment`](../type-aliases/Deployment.md) \| `undefined`\>

#### set()

> **set**(`params`): `Promise`\<`void`\>

Updates deployment info for a canister.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `canisterName`: `string`; `deployment`: `Omit`\<[`Deployment`](../type-aliases/Deployment.md), `"id"`\>; `network`: `string`; \} |
| `params.canisterName` | `string` |
| `params.deployment` | `Omit`\<[`Deployment`](../type-aliases/Deployment.md), `"id"`\> |
| `params.network` | `string` |

##### Returns

`Promise`\<`void`\>

***

### depResults

> `readonly` **depResults**: `Record`\<`string`, \{ `cacheKey?`: `string`; `result`: `unknown`; \}\>

Defined in: docs-entry.ts:949

Results of dependency tasks that have already run.

***

### iceDir

> `readonly` **iceDir**: `string`

Defined in: docs-entry.ts:961

Absolute path to the .ice directory.

***

### logLevel

> `readonly` **logLevel**: `"debug"` \| `"info"` \| `"error"`

Defined in: docs-entry.ts:968

The current log level.

***

### network

> `readonly` **network**: `string`

Defined in: docs-entry.ts:876

The logical name of the current network (e.g. "local", "ic", "staging").

***

### origin

> `readonly` **origin**: `"extension"` \| `"cli"`

Defined in: docs-entry.ts:1031

Where the task was invoked from: "cli" or "extension".

***

### prompts

> `readonly` **prompts**: `object`

Defined in: docs-entry.ts:1019

Interactive prompts for user input.

#### confirm()

> **confirm**(`options`): `Promise`\<`boolean`\>

Shows a confirmation prompt.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `ConfirmOptions` |

##### Returns

`Promise`\<`boolean`\>

***

### replica

> `readonly` **replica**: [`Replica`](../type-aliases/Replica.md)

Defined in: docs-entry.ts:881

The replica instance to interact with (PocketIC or IC mainnet).

***

### roles

> `readonly` **roles**: `Record`\<`string`, [`ICEUser`](../type-aliases/ICEUser.md)\>

Defined in: docs-entry.ts:869

The resolved roles mapped to their corresponding ICEUser.
Common roles: "deployer", "minter", "controller", "treasury".

***

### runTask()

> `readonly` **runTask**: \{\<`T`\>(`task`): `Promise`\<`TaskResult`\<`T`\>\>; \<`T`\>(`task`, `args`): `Promise`\<`TaskResult`\<`T`\>\>; \}

Defined in: docs-entry.ts:929

Helper to run another task from within a task.
Automatically handles dependencies and caching.

#### Call Signature

> \<`T`\>(`task`): `Promise`\<`TaskResult`\<`T`\>\>

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`Task`](../type-aliases/Task.md) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `task` | `T` |

##### Returns

`Promise`\<`TaskResult`\<`T`\>\>

#### Call Signature

> \<`T`\>(`task`, `args`): `Promise`\<`TaskResult`\<`T`\>\>

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`Task`](../type-aliases/Task.md) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `task` | `T` |
| `args` | `Record`\<`string`, `unknown`\> |

##### Returns

`Promise`\<`TaskResult`\<`T`\>\>

#### Type Param

The task type being run.

#### Param

The task to run.

#### Param

Optional arguments to pass to the task.

#### Returns

A promise resolving to the task's return value.

#### Examples

**Running a task without arguments:**
```typescript
export const deployAll = task()
  .run(async (ctx) => {
    // Run the backend deploy task
    const result = await ctx.runTask(backend.children.deploy)
    console.log(`Deployed to: ${result.canisterId}`)
  })
  .make()
```

**Running a task with arguments:**
```typescript
export const greet = task()
  .params({ name: { type: "string" } })
  .run(async (ctx) => {
    console.log(`Hello, ${ctx.args.name}!`)
  })
  .make()

export const greetEveryone = task()
  .run(async (ctx) => {
    await ctx.runTask(greet, { name: "Alice" })
    await ctx.runTask(greet, { name: "Bob" })
  })
  .make()
```

***

### taskPath

> `readonly` **taskPath**: `string`

Defined in: docs-entry.ts:944

The logical path of the current task (e.g. "backend:deploy").

***

### taskTree

> `readonly` **taskTree**: [`TaskTree`](../type-aliases/TaskTree.md)

Defined in: docs-entry.ts:888

The full tree of tasks and scopes defined in the config.

***

### users

> `readonly` **users**: `Record`\<`string`, [`ICEUser`](../type-aliases/ICEUser.md)\>

Defined in: docs-entry.ts:863

The configured users/identities available in this environment.
Keys are user names, values are ICEUser objects with identity, principal, and accountId.
