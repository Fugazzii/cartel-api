export interface IUseCase<I, O> {
    execute(args: I): O;
}
