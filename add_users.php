<?php
include "link.php";
$data = json_decode(file_get_contents('php://input'));
var_dump($data);
$name = $data->name;
$surname = $data->surname;
$login = $data->login;
$password = password_hash($data->password, PASSWORD_DEFAULT);
$request = "INSERT INTO `users`(`name`, `surname`, `login`, `password`)
VALUES ('" . $name . "','" . $surname . "','" . $login . "','" . $password . "')";
mysqli_query($link, $request) or die(mysqli_error($link));
echo 'ok';
