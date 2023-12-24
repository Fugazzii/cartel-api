import { Observable } from "rxjs";

export interface IPubSub {
    connect(): Promise<unknown>;
    notify(topic: string, message: string): Observable<string>;
    publish(topic: string, message: string): Observable<string>;
}
