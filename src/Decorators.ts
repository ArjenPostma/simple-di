import { container } from './Container';

export function Inject<T>(key: new (...args: any[]) => T): PropertyDecorator {
    return function(target: any, propertyKey: string | symbol) {
        Object.defineProperty(target, propertyKey, {
            get: () => container.resolve(key),
            enumerable: true,
            configurable: true,
        });
    };
}

export function Injectable(): ClassDecorator {
    return function(target: any) {
        container.register(new target());
    };
}

export type InjectDecorator = typeof Inject;
export type InjectableDecorator = typeof Injectable;