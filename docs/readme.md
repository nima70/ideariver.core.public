# Generated Codes

## Steps to Update Submodules

To update the generated submodules, run the following command:

```bash
git submodule update --remote --merge
```

## Schema Location

Schemas can be found in the following directory:

```bash
src/generated/typescript/schema/models/index
```

## Importing Generated Schemas

Manually import the schemas into your index.ts file by adding the following lines:

```typescript
export * from "./models/generated/generated/typescript/event_sourcing/models";
export * from "./models/generated/generated/typescript/plugin_metadata/models";
```
