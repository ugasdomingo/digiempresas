//Error handler
export const responseHandler = (
    statusCode: number,
    res: any,
    message: string,
    userInfo?: {} | null
): void => {
    console.log(message);
    res.status(statusCode).json({ message, userInfo });
};
