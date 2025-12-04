[**API Reference**](../index.md)

***

# Type Alias: Replica

> **Replica** = `object`

Defined in: [services/replica.ts:377](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L377)

The interface for a replica connection (local or remote).

## Properties

### createActor()

> **createActor**: \<`_SERVICE`\>(`params`) => `Promise`\<`ActorSubclass`\<`_SERVICE`\>\>

Defined in: [services/replica.ts:395](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L395)

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

***

### createCanister()

> **createCanister**: (`params`) => `Promise`\<`string`\>

Defined in: [services/replica.ts:393](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L393)

Creates a new canister, returns the canister ID.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`CreateCanisterParams`](../interfaces/CreateCanisterParams.md) |

#### Returns

`Promise`\<`string`\>

***

### getCanisterInfo()

> **getCanisterInfo**: (`params`) => `Promise`\<`CanisterInfo`\>

Defined in: [services/replica.ts:387](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L387)

Gets detailed information about a canister.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`GetCanisterStatusParams`](../interfaces/GetCanisterStatusParams.md) |

#### Returns

`Promise`\<`CanisterInfo`\>

***

### getCanisterStatus()

> **getCanisterStatus**: (`params`) => `Promise`\<`CanisterStatus`\>

Defined in: [services/replica.ts:385](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L385)

Gets the status of a canister (running, stopped, etc.).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`GetCanisterStatusParams`](../interfaces/GetCanisterStatusParams.md) |

#### Returns

`Promise`\<`CanisterStatus`\>

***

### getTopology()

> **getTopology**: () => `Promise`\<`SubnetTopology`[]\>

Defined in: [services/replica.ts:397](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L397)

Gets the subnet topology.

#### Returns

`Promise`\<`SubnetTopology`[]\>

***

### host

> **host**: `string`

Defined in: [services/replica.ts:379](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L379)

The host URL of the replica.

***

### installCode()

> **installCode**: (`params`) => `Promise`\<`void`\>

Defined in: [services/replica.ts:383](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L383)

Installs Wasm code to a canister.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`InstallCodeParams`](../interfaces/InstallCodeParams.md) |

#### Returns

`Promise`\<`void`\>

***

### port

> **port**: `number`

Defined in: [services/replica.ts:381](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L381)

The port number of the replica.

***

### removeCanister()

> **removeCanister**: (`params`) => `Promise`\<`void`\>

Defined in: [services/replica.ts:391](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L391)

Removes/deletes a canister.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`GetCanisterStatusParams`](../interfaces/GetCanisterStatusParams.md) |

#### Returns

`Promise`\<`void`\>

***

### start()

> **start**: (`ctx`) => `Promise`\<`void`\>

Defined in: [services/replica.ts:399](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L399)

Starts the replica.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | `ReplicaContext` |

#### Returns

`Promise`\<`void`\>

***

### stop()

> **stop**: (`args?`, `ctx?`) => `Promise`\<`void`\>

Defined in: [services/replica.ts:401](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L401)

Stops the replica.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args?` | [`StopOptions`](../interfaces/StopOptions.md) |
| `ctx?` | `ReplicaContext` |

#### Returns

`Promise`\<`void`\>

***

### stopCanister()

> **stopCanister**: (`params`) => `Promise`\<`void`\>

Defined in: [services/replica.ts:389](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/services/replica.ts#L389)

Stops a running canister.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`GetCanisterStatusParams`](../interfaces/GetCanisterStatusParams.md) |

#### Returns

`Promise`\<`void`\>
