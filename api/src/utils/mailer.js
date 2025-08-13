import nodemailer from 'nodemailer';

//Create transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

//Send email
export const send_email = async (to, subject, html) => {
    try {
        const mailOptions = {
            from: process.env.MAIL_USER,
            to,
            subject,
            html
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw error;
    }
}

//Send test health marketing result
export const send_test_result = async (user_name, user_email, html) => {
    const subject = `Hola ${user_name}, te envío el resultado de el test.`;
    await send_email(user_email, subject, html);
}

//Send six digits code
export const send_six_digits_code = async (user_name, user_email, code) => {
    const subject = `Hola ${user_name}, código para resetear tu contraseña.`;
    const html = `<p>El código de verificación es: ${code}</p>`;
    await send_email(user_email, subject, html);
}