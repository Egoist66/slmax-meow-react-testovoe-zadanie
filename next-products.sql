-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июл 24 2024 г., 12:22
-- Версия сервера: 10.4.32-MariaDB
-- Версия PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `next-products`
--

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `brand_name` varchar(255) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`product_id`, `brand_name`, `name`, `price`, `description`, `image_url`) VALUES
(1, 'Nike!!', 'Кроссовки Nike Air Max', 49.99, 'Отличные кроссовки от Nike', 'https://sneakers.by/image/cache/catalog/sneakers-pics/101082/krossovki-nike-air-max-97-gs-921522-001-10-1000x800.jpg'),
(2, 'Converse', 'Кеды Converse Chuck Taylor', 39.99, 'Известные кеды от Converse', 'https://sneakers.by/image/cache/catalog/sneakers-pics/15416/kedy-converse-chuck-taylor-all-star-high-m3310c-16-695x695.jpg'),
(3, 'Adidas!', 'Кроссовки Adidas Ultraboost', 59.99, 'Современные кроссовки от Adidas', 'https://sneakers.by/image/cache/catalog/sneakers-pics/101037/krossovki-adidas-ultraboost-5-0-dna-gv8745-2-1000x800.jpg'),
(4, 'Timberland', 'Ботинки Timberland', 69.99, 'Стойкая обувь от Timberland', 'https://ike.by/wp-content/uploads/2020/11/Screenshot_52.png'),
(5, 'Vans', 'Слипоны Vans Classic', 29.99, 'Комфортные слипоны от Vans', 'https://coolshoes.by/image/cache/catalog/m_models/vans/656439343/0-1155x1155.jpg');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
