import {Request, Response} from "express";
import {MessageDto} from "../dto/messages.dto.js";

//nodemailer
import transporter from "../utilits/nodemailer.js";

class MessagesController{

    static async send(req: Request, res: Response){
        const message: MessageDto = req.body;
        console.log("message is here", message);
        try{
            const info = await transporter.sendMail({
                from: "'my website' <bakirovartem69@gmail.com>",
                to: "bakirovartem69@gmail.com",
                subject: "new message from your website",
                text: `new message from ${message.email} ${message.name} text: ${message.message}`,
            });
            console.log("info", info);
            res.status(200).json({message: "message has been sent", data: info});
        } catch(error){
            console.error("error", error);
            res.status(500).json({message: ""})
        }


    }
}

export default MessagesController;