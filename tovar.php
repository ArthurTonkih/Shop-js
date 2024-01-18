<?php
$link = mysqli_connect("localhost", "root", "root", "shop1");
$result = mysqli_query($link, "SELECT * FROM `tovar`");
$tovar = array();
while ($row = mysqli_fetch_assoc($result))
	$tovar[] = $row;
echo (json_encode($tovar, true));
