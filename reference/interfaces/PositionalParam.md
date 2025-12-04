[**API Reference**](../index.md)

***

# Interface: PositionalParam

Defined in: docs-entry.ts:223

A positional parameter for a task.
Positional parameters are passed in order without flags on the CLI.

## Example

```typescript
task("copy")
  .params({
    source: { type: "string", isPositional: true },
    dest: { type: "string", isPositional: true }
  })
// CLI: ice run copy ./src ./dest
```

## Extends

- [`TaskParam`](TaskParam.md)

## Properties

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

> **isFlag**: `false`

Defined in: docs-entry.ts:225

Always false for positional parameters.

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
