# ideariver.core

ideariver.core is a foundational package designed for IdeaRiver as part of the Domain-Driven Design (DDD) architecture. It serves as the core of the system, containing Data Transfer Objects (DTOs) and interfaces that are completely abstract, with zero dependencies on other libraries.

This package is responsible for defining the shared contracts and entities used across the entire IdeaRiver ecosystem, without implementation details.

## Key Features

- Domain-Driven Design (DDD) Core Layer: Acts as the core layer in DDD by providing abstract types - and contracts.
- DTO and Interfaces: Contains common interfaces and DTOs that define the structure of the system.
- Zero Dependencies: This package doesn't rely on any external dependencies, making it lightweight and highly reusable across various layers of the architecture.

## Purpose

- Provides a centralized repository for core abstractions that can be used across all IdeaRiver services and applications.
- Ensures separation of concerns by keeping core logic isolated from business and infrastructure layers.

## Maintenance and Documentation

The documentation for package maintainers, including instructions on how to use, update, and manage the package, is located in the docs folder. This includes scripts, maintenance procedures, and any work instructions necessary for managing and maintaining the package.


## Installation

Install the package using npm:

```bash
npm install ideariver.core
```

## Usage

Import the DTOs or interfaces from ideariver.core into your domain or service logic:

## License

This package is licensed under the MIT License.
