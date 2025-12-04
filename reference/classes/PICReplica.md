[**API Reference**](../index.md)

***

# Class: PICReplica

Defined in: [services/pic/pic.ts:87](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/pic/pic.ts#L87)

Implementation of the Replica for PocketIC.
Manages a local PocketIC instance for testing and development.

## Implements

- [`Replica`](../type-aliases/Replica.md)

## Constructors

### Constructor

> **new PICReplica**(`opts`): `PICReplica`

Defined in: [services/pic/pic.ts:121](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/pic/pic.ts#L121)

Creates a new PICReplica instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | \{ `host?`: `string`; `manual?`: `boolean`; `picConfig?`: `CreateInstanceOptions`; `port`: `number`; `ttlSeconds?`: `number`; \} | - |
| `opts.host?` | `string` | The host to bind to (default: http://0.0.0.0). |
| `opts.manual?` | `boolean` | If true, assumes PocketIC is already running and connects to it. |
| `opts.picConfig?` | `CreateInstanceOptions` | Configuration for the PocketIC instance (subnets, state). |
| `opts.port` | `number` | The port to bind to. |
| `opts.ttlSeconds?` | `number` | Time-to-live for the instance. |

#### Returns

`PICReplica`

## Properties

### client?

> `optional` **client**: `PocketIcClient`

Defined in: [services/pic/pic.ts:95](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/pic/pic.ts#L95)

***

### ctx

> **ctx**: `ReplicaContext` \| `undefined`

Defined in: [services/pic/pic.ts:97](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/pic/pic.ts#L97)

***

### host

> **host**: `string`

Defined in: [services/pic/pic.ts:88](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/pic/pic.ts#L88)

The host URL of the replica.

#### Implementation of

`Replica.host`

***

### manual?

> `readonly` `optional` **manual**: `boolean`

Defined in: [services/pic/pic.ts:91](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/pic/pic.ts#L91)

***

### monitor

> **monitor**: `Monitor` \| `undefined`

Defined in: [services/pic/pic.ts:94](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/pic/pic.ts#L94)

***

### pic?

> `optional` **pic**: `PocketIc`

Defined in: [services/pic/pic.ts:96](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/pic/pic.ts#L96)

***

### picConfig

> `readonly` **picConfig**: `CreateInstanceOptions`

Defined in: [services/pic/pic.ts:92](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/pic/pic.ts#L92)

***

### port

> **port**: `number`

Defined in: [services/pic/pic.ts:89](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/pic/pic.ts#L89)

The port number of the replica.

#### Implementation of

`Replica.port`

***

### ttlSeconds

> `readonly` **ttlSeconds**: `number`

Defined in: [services/pic/pic.ts:90](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/pic/pic.ts#L90)

## Methods

### createActor()

> **createActor**\<`_SERVICE`\>(`params`): `Promise`\<`ActorSubclass`\<`_SERVICE`\>\>

Defined in: [services/pic/pic.ts:810](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/pic/pic.ts#L810)

Creates a typed actor for interacting with a canister.

#### Type Parameters

| Type Parameter |
| ------ |
| `_SERVICE` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`CreateActorParams`](../interfaces/CreateActorParams.md) |

#### Returns

`Promise`\<`ActorSubclass`\<`_SERVICE`\>\>

#### Implementation of

`Replica.createActor`

***

### createCanister()

> **createCanister**(`params`): `Promise`\<`string`\>

Defined in: [services/pic/pic.ts:478](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/pic/pic.ts#L478)

Creates a new canister, returns the canister ID.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`CreateCanisterParams`](../interfaces/CreateCanisterParams.md) |

#### Returns

`Promise`\<`string`\>

#### Implementation of

`Replica.createCanister`

***

### getCanisterInfo()

> **getCanisterInfo**(`params`): `Promise`\<`CanisterStatusResult`\>

Defined in: [services/pic/pic.ts:335](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/pic/pic.ts#L335)

Gets detailed information about a canister.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`GetCanisterStatusParams`](../interfaces/GetCanisterStatusParams.md) |

#### Returns

`Promise`\<`CanisterStatusResult`\>

#### Implementation of

`Replica.getCanisterInfo`

***

### getCanisterStatus()

> **getCanisterStatus**(`params`): `Promise`\<`CanisterStatus`\>

Defined in: [services/pic/pic.ts:316](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/pic/pic.ts#L316)

Gets the status of a canister (running, stopped, etc.).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`GetCanisterStatusParams`](../interfaces/GetCanisterStatusParams.md) |

#### Returns

`Promise`\<`CanisterStatus`\>

#### Implementation of

`Replica.getCanisterStatus`

***

### getTopology()

> **getTopology**(): `Promise`\<`SubnetTopology`[]\>

Defined in: [services/pic/pic.ts:292](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/pic/pic.ts#L292)

Gets the subnet topology.

#### Returns

`Promise`\<`SubnetTopology`[]\>

#### Implementation of

`Replica.getTopology`

***

### installCode()

> **installCode**(`params`): `Promise`\<`void`\>

Defined in: [services/pic/pic.ts:624](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/pic/pic.ts#L624)

Installs Wasm code to a canister.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`InstallCodeParams`](../interfaces/InstallCodeParams.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

`Replica.installCode`

***

### removeCanister()

> **removeCanister**(`params`): `Promise`\<`void`\>

Defined in: [services/pic/pic.ts:608](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/pic/pic.ts#L608)

Removes/deletes a canister.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`GetCanisterStatusParams`](../interfaces/GetCanisterStatusParams.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

`Replica.removeCanister`

***

### start()

> **start**(`ctx`): `Promise`\<`void`\>

Defined in: [services/pic/pic.ts:152](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/pic/pic.ts#L152)

Starts the replica.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | `ReplicaContext` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

`Replica.start`

***

### stop()

> **stop**(`args`, `ctx?`): `Promise`\<`void`\>

Defined in: [services/pic/pic.ts:252](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/pic/pic.ts#L252)

Stops the replica.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | [`StopOptions`](../interfaces/StopOptions.md) |
| `ctx?` | `ReplicaContext` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

`Replica.stop`

***

### stopCanister()

> **stopCanister**(`params`): `Promise`\<`void`\>

Defined in: [services/pic/pic.ts:592](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/pic/pic.ts#L592)

Stops a running canister.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`GetCanisterStatusParams`](../interfaces/GetCanisterStatusParams.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

`Replica.stopCanister`
