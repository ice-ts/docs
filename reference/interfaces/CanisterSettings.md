[**API Reference**](../index.md)

***

# Interface: CanisterSettings

Defined in: docs-entry.ts:121

Settings for creating or updating a canister.
Used in [CreateCanisterParams](CreateCanisterParams.md) and canister configurations.

## Example

```typescript
const settings: CanisterSettings = {
  controllers: ["aaaaa-aa", "bbbbb-bb"],
  compute_allocation: 10n,
  memory_allocation: 1_000_000_000n,
  freezing_threshold: 2_592_000n, // 30 days
}
```

## Properties

### compute\_allocation?

> `optional` **compute\_allocation**: `bigint`

Defined in: docs-entry.ts:129

Compute allocation percentage (0-100). Higher means more execution priority.

***

### controllers?

> `optional` **controllers**: `string`[]

Defined in: docs-entry.ts:123

Array of principal IDs that can control this canister.

***

### cycles?

> `optional` **cycles**: `bigint`

Defined in: docs-entry.ts:135

Initial cycles to add to the canister.

***

### freezing\_threshold?

> `optional` **freezing\_threshold**: `bigint`

Defined in: docs-entry.ts:125

Freezing threshold in seconds. Canister freezes if cycles drop below this.

***

### memory\_allocation?

> `optional` **memory\_allocation**: `bigint`

Defined in: docs-entry.ts:127

Memory allocation in bytes. Reserves memory for the canister.

***

### reserved\_cycles\_limit?

> `optional` **reserved\_cycles\_limit**: `bigint`

Defined in: docs-entry.ts:131

Maximum reserved cycles limit.

***

### wasm\_memory\_limit?

> `optional` **wasm\_memory\_limit**: `bigint`

Defined in: docs-entry.ts:133

Maximum Wasm memory limit in bytes.
