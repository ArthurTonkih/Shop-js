<? $link = mysqli_connect('localhost', 'root', 'root', 'shop1'); ?>

<!DOCTYPE html>
<html>

<head>
	<title>SHOP-MAGAZIN</title>
	<link rel="stylesheet" type="text/css" href="style.css?<?php echo time() ?>">
	<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" href="style.css">
</head>

<body>
	<div class="header">
		<div class="social">
			<? if (!@$_COOKIE['id']) {
				echo "<a href='reg.php'>Регистрация</a>
			<a href='auth.php'>Вход</a>";
			} else {
				echo "<a href='?logout=1'>Выйти</a>";
			}
			?>
			<a href="admin/index.php">Вход в админ панель</a>
		</div>
	</div>

	<div class="navbar">
		<div class="container">
			<!-- <a href="#" class="navbar-brand">SHOP-MAGAZIN</a> -->
			<div class="navbar-wrap">
				<ul class="navbar-menu">
					<li><a href="index.php">Главная</a></li>
					<li><a href="index_users.php">Пользователи</a></li>
					<li><a href="cart.php">Корзина </a><a class="count_sum">0</a></li>
				</ul>
			</div>
		</div>
		<hr>
	</div>
	<!-- <a href="reg.php">Зарегистрироваться</a>
	<a href="reg_tovar.php">Товар</a> -->