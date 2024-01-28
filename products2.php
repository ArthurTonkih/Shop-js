<?php
include "../link.php";
$result = mysqli_query($link, "SELECT * FROM `tovar`");
$products = array();
while($row = mysqli_fetch_assoc($result))
$products[$row['id']] = $row;
echo(json_encode($products, true));
?>
