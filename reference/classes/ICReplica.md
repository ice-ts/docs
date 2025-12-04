[**API Reference**](../index.md)

***

# Class: ICReplica

Defined in: [services/ic-replica.ts:140](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/ic-replica.ts#L140)

Implementation of the Replica for the Internet Computer (Mainnet) or standard `dfx` local replica.

## Implements

- [`Replica`](../type-aliases/Replica.md)

## Constructors

### Constructor

> **new ICReplica**(`opts`): `ICReplica`

Defined in: [services/ic-replica.ts:172](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/ic-replica.ts#L172)

Creates a new ICReplica instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | \{ `host`: `string`; `isDev?`: `boolean`; `manual?`: `boolean`; `port`: `number`; \} | - |
| `opts.host` | `string` | The host URL of the replica (e.g. "https://ic0.app"). |
| `opts.isDev?` | `boolean` | Whether this is a development environment (local) or production (mainnet). |
| `opts.manual?` | `boolean` | If true, assumes the replica is already running (always true for mainnet). |
| `opts.port` | `number` | The port number. |

#### Returns

`ICReplica`

## Properties

### ctx?

> `optional` **ctx**: [`ICEGlobalArgs`](../type-aliases/ICEGlobalArgs.md)

Defined in: [services/ic-replica.ts:145](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/ic-replica.ts#L145)

***

### host

> `readonly` **host**: `string` = `"http://0.0.0.0"`

Defined in: [services/ic-replica.ts:141](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/ic-replica.ts#L141)

The host URL of the replica.

#### Implementation of

`Replica.host`

***

### isDev

> `readonly` **isDev**: `boolean`

Defined in: [services/ic-replica.ts:144](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/ic-replica.ts#L144)

***

### manual?

> `readonly` `optional` **manual**: `boolean`

Defined in: [services/ic-replica.ts:143](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/ic-replica.ts#L143)

***

### port

> `readonly` **port**: `number` = `8080`

Defined in: [services/ic-replica.ts:142](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/ic-replica.ts#L142)

The port number of the replica.

#### Implementation of

`Replica.port`

***

### proc?

> `optional` **proc**: `ChildProcess`

Defined in: [services/ic-replica.ts:146](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/ic-replica.ts#L146)

## Methods

### createActor()

> **createActor**\<`_SERVICE`\>(`params`): `Promise`\<`ActorSubclass`\<`_SERVICE`\>\>

Defined in: [services/ic-replica.ts:691](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/ic-replica.ts#L691)

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

Defined in: [services/ic-replica.ts:517](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/ic-replica.ts#L517)

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

Defined in: [services/ic-replica.ts:295](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/ic-replica.ts#L295)

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

Defined in: [services/ic-replica.ts:272](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/ic-replica.ts#L272)

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

Defined in: [services/ic-replica.ts:702](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/ic-replica.ts#L702)

Gets the subnet topology.

#### Returns

`Promise`\<`SubnetTopology`[]\>

#### Implementation of

`Replica.getTopology`

***

### installCode()

> **installCode**(`params`): `Promise`\<`void`\>

Defined in: [services/ic-replica.ts:416](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/ic-replica.ts#L416)

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

Defined in: [services/ic-replica.ts:674](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/ic-replica.ts#L674)

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

Defined in: [services/ic-replica.ts:707](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/ic-replica.ts#L707)

Starts the replica.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`ICEGlobalArgs`](../type-aliases/ICEGlobalArgs.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

`Replica.start`

***

### stop()

> **stop**(`args?`): `Promise`\<`void`\>

Defined in: [services/ic-replica.ts:728](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/ic-replica.ts#L728)

Stops the replica.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args?` | [`StopOptions`](../interfaces/StopOptions.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

`Replica.stop`

***

### stopCanister()

> **stopCanister**(`params`): `Promise`\<`void`\>

Defined in: [services/ic-replica.ts:657](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/ic-replica.ts#L657)

Stops a running canister.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`GetCanisterStatusParams`](../interfaces/GetCanisterStatusParams.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

`Replica.stopCanister`
