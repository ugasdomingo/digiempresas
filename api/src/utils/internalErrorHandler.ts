export const internalErrorHandler = (error: unknown): never => {
    console.error(error);
    throw new Error('Internal server error');
};
