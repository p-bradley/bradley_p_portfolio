<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Was advised to use phpmailer as a quick alternative to a full api
// Call in the files from the folder using abspath, check for
// registration and perform the function


function submit($fname, $lname, $message, $email){
    
        $mail = new PHPMailer();

        $mail->isSMTP();
        $mail->Host = 'tls://smtp.gmail.com';
        $mail->SMTPSecure='tls';
        $mail->Port = 587;
        $mail->SMTPAuth=true;

        $mail->Username='patrickbradleydesign@gmail.com';
        $mail->Password='ftudzcercuvcmxut';

        $mail->addAddress('patrickbradleydesign@gmail.com');
        $mail->setFrom($email);
        
        $mail->isHTML(true);
        $mail->Subject="$fname $lname is trying to contact you"; 
        $mail->Body="$fname @ $email Is Sending You an Email: <br> $message";

        if(!$mail->send()){
            $submitMsg= $mail->ErrorInfo;
        }
}