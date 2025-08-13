export const client_response = (res, status, message, data = undefined) => {
    res.status(status).json({
        message,
        data
    });
}

//Set cookie
export const set_cookies = (res, refresh_token) => {
    res.cookie('refresh_token', refresh_token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 14 * 24 * 60 * 60 * 1000
    });
}

export const remove_cookies = (res) => {
    res.clearCookie('refresh_token');
}