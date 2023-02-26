<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require __DIR__.'/../../vendor/autoload.php';

class Mailing
{
   public function send($data)
   {
      $mail = new PHPMailer(true);
      try {
         //Server settings
         /*$mail->SMTPDebug = SMTP::DEBUG_SERVER;            //Enable verbose debug output*/

         //Config OVH mail
         $mail->isSMTP();                                    //Send using SMTP
         $mail->Host = 'ssl0.ovh.net';                     //Set the SMTP server to send through
         $mail->SMTPAuth = true;                             //Enable SMTP authentication
         $mail->Username = 'contact@jmgeronimi.fr';        //SMTP username
         $mail->Password = 'dS#AM8yKZw2QCh58';               //SMTP password
         $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; //Enable implicit TLS encryption
         $mail->Port = 465;                                  //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
         $mail->CharSet = 'UTF-8';                           //Format d'encodage à utiliser pour les caractères
         $mail->Encoding = 'base64';

         //Recipients
         $mail->setFrom('contact@jmgeronimi.fr', 'monPortfolio');
         $mail->addAddress($data['mail']);           //Name is optional
         if (isset($data['reply']) && !empty($data['reply'])) {
            $mail->addReplyTo($data['reply'], 'Information');
         }
         $mail->addReplyTo('no-reply@jmgeronimi.fr', 'Information');
         if (isset($data['attachment']) && !empty($data['attachment'])) {
            $mail->addAttachment("../" . $data['attachment']);
         }

         $mail->isHTML(true);     //Set email format to HTML
         $mail->Subject = $data['subject'];
         $mail->Body = $data['body'];
         $mail->send();
      } catch (Exception $e) {
         error_log("Erreur lors de l'envoi du mail. Logs:" . $mail->ErrorInfo);
      }
   }

   public function getContact($data): array
   {
      $body = $data['inputMessage'];
      $subject = "Demande d'information formulaire de contact - " . $data['inputPrenom'] . " " . $data['inputNom'];
      $mail = 'jm.geronimi@gmail.com';
      $reply = $data['inputEmail'];

      return array("subject" => $subject, "body" => $body, "mail" => $mail, "reply" => $reply);
   }

   public function setContact_Job($data)
   {
      $mail_template = $this->getContact($data);
      $this->send($mail_template);
   }
}
