<?php

$recepient = "mrlittlewell@gmail.com";
$sitename = "BF Kitchen";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$mail = trim($_POST["email"]);
$address = trim($_POST["address"]);
$date = trim($_POST["date"]);
$delivery = trim($_POST["delivery"]);
$type = trim($_POST["type"]);
$promo = trim($_POST["promo"]);
$price = trim($_POST["price"]);
$day = trim($_POST["day"]);
$comment = trim($_POST["comment"]);

$message = "Имя: $name
 \nТелефон: $phone
 \nEmail: $mail
 \nАдрес: $address
 \nКомментарий: $comment
 \nДата: $date
 \nДоставка: $delivery
 \nОплата: $type
 \nПромокод: $promo
 \nПлан на: $day
 \nСумма: $price рублей";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");