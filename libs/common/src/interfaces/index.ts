type IProviderToken = {
    provide: symbol;
};

type IClass<T> = IProviderToken & {
    useClass: T;
};

type IValue<T> = IProviderToken & {
    useValue: T;
};

export type IProvider<T> = IClass<T> | IValue<T>;
