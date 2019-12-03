<?php

$recepient = "mrlittlewell@gmail.com";
$sitename = "BF Kitchen";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$mail = trim($_POST["email"]);


$message = "Имя: $name
 \nТелефон: $phone
 \nEmail: $mail";

$pagetitle = "Перезвоните мне \"$phone\", \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");