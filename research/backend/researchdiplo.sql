-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 11-05-2023 a las 19:02:34
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `researchdiplo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `criptidos`
--

DROP TABLE IF EXISTS `criptidos`;
CREATE TABLE IF NOT EXISTS `criptidos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `img_id` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `clase` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `estado` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `criptidos`
--

INSERT INTO `criptidos` (`id`, `nombre`, `img_id`, `clase`, `estado`) VALUES
(1, 'Kyogre', 'nodmzz9ejuupjikyyrti', 'Neutro', 'En cautiverio'),
(3, 'Kraken', 'gyvdarenyysvjuyexabd', 'Agresivo', 'Aislado'),
(4, 'Megalodon', 'odkvasljqdepo8b2hd7h', 'Agresivo', 'Profugo'),
(5, 'Groudon', NULL, 'Agresivo', 'En cautiverio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(3, 'facundo', 'ccd90b150209c6a9f4ebb350f9acbaea'),
(4, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
