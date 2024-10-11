# Generated codes
## Access generated code:
```bash
git submodule update --remote --merge
```
Where schemas are located:
```bash
src/generated/typescript/schema/models/index
```

## Scripts
To generate TypeScript:

```bash
npm start --typescript
```

## Update the submodules when the generated code changes.

Whenever you regenerate the code in the ideariver.generated repository, you can update the submodule references in your ideariver.core repositories by running:

```bash
git submodule update --remote
```

Commit the changes: After updating the submodules, commit the changes in your ideariver.core repository.

```bash
git commit -am "Updated generated code"
git push
```

## TypeScript:

After running the script, TypeScript DTOs will be generated in the ./generated/typescript/{schema-name}/ folder.
Example:

```bash

/generated
  /typescript
    /schema1
      /models
      ...
    /schema2
      /models
      ...
```

DTO Files: Typically, these will be inside the models folder within each schema’s output directory.

## Python:

For Python, the DTOs will be generated in the ./generated/python/{schema-name}/ folder.
Example:

```bash

/generated
  /python
    /schema1
      /openapi_client
        /models
            schema
      ...
    /schema2
      /openapi_client
      ...
```

DTO Files: Python models are usually located in the openapi_client folder.

## C#:

C# DTOs will be generated in the ./generated/csharp/{schema-name}/ folder.
Example:

```bash
/generated
  /csharp
    /schema1
      /src
        /Org.schema
            /models
                /schema
        ...
    /schema2
      /src
        /models
        ...
```

DTO Files: C# models are typically located in the src/models folder.

## C++:

For C++, the generated DTOs will be found in ./generated/cpp/{schema-name}/.
Example:

```bash
/generated
  /cpp
    /src
      /model
        /schema
        ...
```

DTO Files: In C++, models are usually in the client/model folder.
