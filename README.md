Add files via upload
why we need to send email from our website to user?
>when we send configuration message
>send OTP for login
>update personal data like password 
>sending bill from E-commerce website
>sending Newsletter mail

For sending email in Nodejs we use Nodejs mailer which is library to make sending email simple , secure and straightforward. It is unable to send mails directly so for sending email we use third-party services TRANSPOTERS like Gmail, Yaho Mail, Mail gun.For this first we need to install nodejs mailer which uses transpoter.

The transpoter use "createTransport" method of nodemailer to send mail.In this it contain the data of the sevice the data maybe port , host , auth and secure it depends on the type of server you are using

by Nubtahil Mustafa
