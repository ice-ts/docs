[**API Reference**](../index.md)

***

# Interface: NamedParam

Defined in: docs-entry.ts:200

A named parameter (flag) for a task.
Named parameters are passed as `--name value` or `-n value` on the CLI.

## Example

```typescript
task("greet")
  .params({
    name: { type: "string", description: "Who to greet" },
    loud: { type: "boolean", default: false }
  })
// CLI: ice run greet --name Alice --loud
```

## Extends

- [`TaskParam`](TaskParam.md)

## Properties

### aliases?

> `optional` **aliases**: `string`[]

Defined in: docs-entry.ts:202

Alternative short names (e.g., `-n` for `--name`).

***

### default?

> `optional` **default**: `unknown`

Defined in: docs-entry.ts:177

Default value if not provided.

#### Inherited from

[`TaskParam`](TaskParam.md).[`default`](TaskParam.md#default)

***

### description?

> `optional` **description**: `string`

Defined in: docs-entry.ts:175

Human-readable description for help text.

#### Inherited from

[`TaskParam`](TaskParam.md).[`description`](TaskParam.md#description)

***

### isFlag

> **isFlag**: `true`

Defined in: docs-entry.ts:204

Always true for named parameters.

***

### isOptional

> **isOptional**: `boolean`

Defined in: docs-entry.ts:179

Whether this parameter is optional.

#### Inherited from

[`TaskParam`](TaskParam.md).[`isOptional`](TaskParam.md#isoptional)

***

### isVariadic

> **isVariadic**: `boolean`

Defined in: docs-entry.ts:181

Whether this parameter accepts multiple values.

#### Inherited from

[`TaskParam`](TaskParam.md).[`isVariadic`](TaskParam.md#isvariadic)

***

### name

> **name**: `string`

Defined in: docs-entry.ts:173

The parameter name (used in CLI as --name or positionally).

#### Inherited from

[`TaskParam`](TaskParam.md).[`name`](TaskParam.md#name)

***

### type

> **type**: `object` \| [`BuiltInTaskType`](../type-aliases/BuiltInTaskType.md)

Defined in: docs-entry.ts:171

The type or schema for validation and parsing.

#### Inherited from

[`TaskParam`](TaskParam.md).[`type`](TaskParam.md#type)
