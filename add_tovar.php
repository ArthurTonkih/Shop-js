<?php
include "link.php";
$data = json_decode(file_get_contents('php://input'));
var_dump($data);
$title = $data->title;
$description = $data->description;
$price = $data->price;
$request = "INSERT INTO `tovar`(`title`, `description`, `price`)
VALUES ('" . $title . "','" . $description . "','" . $price . "')";
mysqli_query($link, $request) or die(mysqli_error($link));
echo 'ok';
