export interface IPubSub {
    connect(): Promise<unknown>;
    notify(topic: string, message: string): unknown;
    publish(topic: string, message: string): unknown;
}
