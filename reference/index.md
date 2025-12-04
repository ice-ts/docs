**API Reference**

***

# API Reference

Complete API documentation for `@ice.ts/runner`.

- **Essentials** — Core functions: `task()`, `scope()`, `Ice()`, `canister`, and the `TaskCtx` execution context.
- **Canister Definitions** — Builders and configs for Motoko, Rust, Custom, and Remote canisters.
- **Config & Environment** — Configuration types, replica interfaces, and identity utilities.

## Variables

- [canister](variables/canister.md)

## Canister Definitions

- [CustomCanisterBuilder](interfaces/CustomCanisterBuilder.md)
- [CustomCanisterConfig](interfaces/CustomCanisterConfig.md)
- [CustomCanisterScope](interfaces/CustomCanisterScope.md)
- [MotokoCanisterBuilder](interfaces/MotokoCanisterBuilder.md)
- [MotokoCanisterConfig](interfaces/MotokoCanisterConfig.md)
- [MotokoCanisterScope](interfaces/MotokoCanisterScope.md)
- [RemoteCanisterBuilder](interfaces/RemoteCanisterBuilder.md)
- [RemoteCanisterConfig](interfaces/RemoteCanisterConfig.md)
- [RemoteCanisterScope](interfaces/RemoteCanisterScope.md)
- [RustCanisterBuilder](interfaces/RustCanisterBuilder.md)
- [RustCanisterConfig](interfaces/RustCanisterConfig.md)
- [RustCanisterScope](interfaces/RustCanisterScope.md)

## Config & Environment

- [ICReplica](classes/ICReplica.md)
- [PICReplica](classes/PICReplica.md)
- [CanisterSettings](interfaces/CanisterSettings.md)
- [CreateActorParams](interfaces/CreateActorParams.md)
- [CreateCanisterParams](interfaces/CreateCanisterParams.md)
- [GetCanisterStatusParams](interfaces/GetCanisterStatusParams.md)
- [InstallCodeParams](interfaces/InstallCodeParams.md)
- [StopOptions](interfaces/StopOptions.md)
- [TaskCtxExtension](interfaces/TaskCtxExtension.md)
- [Deployment](type-aliases/Deployment.md)
- [ICEConfig](type-aliases/ICEConfig.md)
- [IceConfigLoader](type-aliases/IceConfigLoader.md)
- [ICEEnvironment](type-aliases/ICEEnvironment.md)
- [ICEGlobalArgs](type-aliases/ICEGlobalArgs.md)
- [ICEUser](type-aliases/ICEUser.md)
- [InferIceConfig](type-aliases/InferIceConfig.md)
- [Replica](type-aliases/Replica.md)
- [TaskTree](type-aliases/TaskTree.md)
- [TaskTreeNode](type-aliases/TaskTreeNode.md)
- [Ids](variables/Ids.md)

## Essentials

- [NamedParam](interfaces/NamedParam.md)
- [PositionalParam](interfaces/PositionalParam.md)
- [TaskBuilder](interfaces/TaskBuilder.md)
- [TaskCtx](interfaces/TaskCtx.md)
- [TaskParam](interfaces/TaskParam.md)
- [BuiltInTaskType](type-aliases/BuiltInTaskType.md)
- [IceTag](type-aliases/IceTag.md)
- [Scope](type-aliases/Scope.md)
- [Task](type-aliases/Task.md)
- [Ice](functions/Ice.md)
- [scope](functions/scope.md)
- [task](functions/task.md)
