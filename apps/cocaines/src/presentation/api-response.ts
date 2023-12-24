export type SuccessResponse<S> = {
    success: true;
    message: string;
    data: S;
};

export type ErrorResponse<E> = {
    success: false;
    message: string;
    error: E;
};

export type ApiResponse<S, E> = SuccessResponse<S> | ErrorResponse<E>;
