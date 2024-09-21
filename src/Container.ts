export class Container {
    private dependencies: Map<string, any> = new Map();

    register<T>(value: T): void {
        const key = (value as any).constructor.name;

        if(this.dependencies.has(key)) {
            return;
        }

        this.dependencies.set(key, value);
    }

    resolve<T>(key: new (...args: any[]) => T): T {
        const dependency = this.dependencies.get(key.name);

        if (!dependency) {
            throw new Error(`Dependency not found: ${key}`);
        }

        return dependency;
    }
}

export const container = new Container();