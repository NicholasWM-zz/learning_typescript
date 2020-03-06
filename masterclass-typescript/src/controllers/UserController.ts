import {Response, Request} from 'express'
import EmailService from '../services/EmailService'
const users = [
    {nome: 'Diego', email:'osnfoisafn@fjd.com'}
]

export default {
    async index(req: Request, res: Response){
        return res.json(users)
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService();

        emailService.sendMail({
            to:{
                name:'Nicholas',
                email:'ownefg@ofd.com'
            },
            message:{
                subject:'Seja bem vindo',
                body:'Seja bem vindo'
            }
        })
        return res.send();
    }

};
