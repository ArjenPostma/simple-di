# My DI Package

A simple dependency injection system for TypeScript and Bun.

## Installation

```bash
bun install ap-simple-di
```

## Usage

```typescript
import { Injectable, Inject } from 'ap-simple-di';

@Injectable()
class ServiceA {
  doSomething() {
    console.log('Service A is doing something');
  }
}

class ServiceB {
  @Inject(ServiceA) private serviceA!: ServiceA;

  doSomethingElse() {
    this.serviceA.doSomething();
    console.log('Service B is doing something else');
  }
}

// Usage
const serviceB = new ServiceB();
serviceB.doSomethingElse();
```

## API

### `@Injectable()`

Class decorator to register a class as injectable.

### `@Inject(key)`

Property decorator to inject a dependency.

### `Container`

The dependency injection container class.

## License

MIT