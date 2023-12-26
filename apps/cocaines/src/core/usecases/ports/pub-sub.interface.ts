export interface IPubSub {
    notify(topic: string, message: string): unknown;
    publish(topic: string, message: string): unknown;
}
