<?php
$token = "5960316813:AAE-dt5FKOP1xnsMOmvsludK9AjqDfiSF00";
$chat_id = -841404134;

$textMessage = "Тестовое сообщение";
$textMessage = urlencode($textMessage);

$urlQuery = "https://api.telegram.org/bot". $token ."/sendMessage?chat_id=". $chat_id ."&text=" . $textMessage;

$result = file_get_contents($urlQuery);
?>