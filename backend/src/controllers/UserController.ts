import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
    { name: 'Wendel', email: 'wendeldev@gmail.com' }
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Response, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: {
                name: 'wendel luan',
                email: 'wendelluan@gmail.com'
            },
            message: {
                subject: 'Bem vindo ao sistema',
                body: 'Seja bem vindo'
            }
        });

        res.send('Olá');
    }
};
