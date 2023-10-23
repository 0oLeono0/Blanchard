<?php 
$to  = "почта"; 

$subject = "Заголовок письма"; 

$message = ' <p>Текст письма</p> </br>' . $_POST['name'] . '</br>' . $_POST['tel'];

$headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
$headers .= "From: От кого письмо <from@example.com>\r\n"; 
$headers .= "Reply-To: reply-to@example.com\r\n"; 

mail($to, $subject, $message, $headers); 
?>