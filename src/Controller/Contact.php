<?php

require_once '../Entity/Mailing.php';

switch ($_POST['request']) {

   case 'contact':
      $data = $_POST['values'];
      $mail = new Mailing();
      $mail->setContact_Job($data);
      $msg = "Votre demande de contact a bien été prise en compte, je reviens vers vous très rapidement !";
      $status = 1;

      echo json_encode(array('msg' => $msg, 'status' => $status));
      break;
}
