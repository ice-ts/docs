[**API Reference**](../index.md)

***

# Function: Ice()

> **Ice**\<`C`\>(`configFn`): [`IceConfigLoader`](../type-aliases/IceConfigLoader.md)\<`C`\>

Defined in: [index.ts:301](https://github.com/MioQuispe/ICE/blob/87a82346ddf301ffa13dd7edc165b9b941aebda0/packages/runner/src/index.ts#L301)

The primary configuration wrapper for an ICE environment.
In your `ice.config.ts`, you default export the result of calling this function.

It allows you to define the network, replica connection, users (identities), and roles
available to your tasks and canisters.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `C` *extends* [`ICEConfig`](../type-aliases/ICEConfig.md) | The generic type of the configuration object (automatically inferred). |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `configFn` | (`globalArgs`) => `C` \| `Promise`\<`C`\> | A function (or object) that returns the [ICEConfig](../type-aliases/ICEConfig.md). Can be async to allow loading secrets or files. |

## Returns

[`IceConfigLoader`](../type-aliases/IceConfigLoader.md)\<`C`\>

A function that resolves the configuration, used internally by the runner.

## Example

```typescript
import { Ice, PICReplica, Ids } from "@ice.ts/runner"
import fs from "node:fs/promises"

export default Ice(async (env) => {
  // Load an identity from a PEM file
  const pem = await fs.readFile("./admin.pem", "utf8")
  const admin = await Ids.fromPem(pem)

  return {
    network: "local",
    replica: new PICReplica({ port: 8080 }),
    users: {
      admin
    },
    roles: {
      deployer: "admin"
    }
  }
})
```
