<?php
$link = mysqli_connect("localhost", "root", "", "shop");
$result = mysqli_query($link, "SELECT * FROM `users`");
$users = array();
while ($row = mysqli_fetch_assoc($result))
	$users[] = $row;
echo (json_encode($users, true));
