[**API Reference**](../index.md)

***

# Interface: TaskParam

Defined in: docs-entry.ts:169

Base interface for task parameters.
Parameters define the inputs a task can accept from the CLI or programmatically.

## Example

```typescript
task("greet")
  .params({
    name: { type: "string", description: "Who to greet" },
    count: { type: "number", default: 1 }
  })
  .run(async ({ args }) => {
    for (let i = 0; i < args.count; i++) {
      console.log(`Hello, ${args.name}!`)
    }
  })
  .make()
```

## Extended by

- [`NamedParam`](NamedParam.md)
- [`PositionalParam`](PositionalParam.md)

## Properties

### default?

> `optional` **default**: `unknown`

Defined in: docs-entry.ts:177

Default value if not provided.

***

### description?

> `optional` **description**: `string`

Defined in: docs-entry.ts:175

Human-readable description for help text.

***

### isOptional

> **isOptional**: `boolean`

Defined in: docs-entry.ts:179

Whether this parameter is optional.

***

### isVariadic

> **isVariadic**: `boolean`

Defined in: docs-entry.ts:181

Whether this parameter accepts multiple values.

***

### name

> **name**: `string`

Defined in: docs-entry.ts:173

The parameter name (used in CLI as --name or positionally).

***

### type

> **type**: `object` \| [`BuiltInTaskType`](../type-aliases/BuiltInTaskType.md)

Defined in: docs-entry.ts:171

The type or schema for validation and parsing.
