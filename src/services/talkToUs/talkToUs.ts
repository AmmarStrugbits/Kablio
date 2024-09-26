//services/talkTous.ts
'use server'
import { TalkToUsData } from '@/components/TalkToUs/TalkToUs';
import * as postmark from 'postmark';

export const sendEmail = async (data: TalkToUsData) => {
    try {
        if (!process.env.POSTMARK_SERVER_API_KEY) {
            throw new Error('POSTMARK_SERVER_API_KEY is not defined');
        }
        const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_API_KEY);

        let messageBody = `Last Name: ${data.lastName}\n`;
        messageBody += `First Name: ${data.firstName}\n`;
        messageBody += `Email: ${data.email}\n`;
        if (data.phoneNumber) {
            messageBody += `Phone Number: ${data.phoneNumber}\n`;
        }
        messageBody += `Message:\n${data.message}`;

        await client.sendEmail({
            From: 'hi@kablio.com',
            To: 'hi@kablio.com',
            Subject: 'New message from Kablio',
            TextBody: messageBody
        });
    } catch (error) {
        throw error;
    }
};
