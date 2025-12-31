-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 31, 2025 at 05:31 PM
-- Server version: 8.4.3
-- PHP Version: 8.3.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crm`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `title_ar` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title_ar`, `title_en`, `color`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'Contact TMO', 'Contact TMO', '#9262b2', '1', '2025-07-07 17:57:22', '2025-07-07 17:57:22'),
(2, 'الاستفسارات', 'Inquiries', '#90859d', '1', '2025-07-07 18:22:07', '2025-07-07 18:22:23'),
(3, 'برنامج القادة من الصفوف الأولية', 'Leading from the Front Program', '#6a7c77', '1', '2025-07-07 18:22:51', '2025-07-07 18:22:51');

-- --------------------------------------------------------

--
-- Table structure for table `conversions`
--

CREATE TABLE `conversions` (
  `id` bigint UNSIGNED NOT NULL,
  `ticket_id` int NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `attachments` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sender` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `conversions`
--

INSERT INTO `conversions` (`id`, `ticket_id`, `description`, `attachments`, `sender`, `created_at`, `updated_at`) VALUES
(1, 1, '<p>nite</p>', '[]', '1', '2025-07-07 18:30:02', '2025-07-07 18:30:02'),
(2, 3, '<p>test</p>', '[\"\\u0627\\u0644\\u0645\\u0646\\u064a\\u0648.PNG\"]', '4', '2025-07-28 19:36:13', '2025-07-28 19:36:13'),
(3, 3, '<p>test</p>', '[\"training.PNG\"]', '4', '2025-07-28 19:36:49', '2025-07-28 19:36:49'),
(4, 6, '<p>test</p>', '[]', '4', '2025-08-14 19:58:28', '2025-08-14 19:58:28'),
(5, 7, '<p>aaaaaaaaaaaa</p>', '[\"New Microsoft Word Document.docx\"]', 'user', '2025-08-20 08:28:38', '2025-08-20 08:28:38'),
(6, 12, 'test', '[]', '4', '2025-08-20 10:10:58', '2025-08-20 10:10:58'),
(7, 12, '<p>test</p>', '[]', '4', '2025-08-20 10:11:13', '2025-08-20 10:11:13'),
(8, 12, '<p>test</p>', '[\"CSRF token mismatch fix.pdf\"]', '4', '2025-08-20 10:11:31', '2025-08-20 10:11:31'),
(9, 9, '<p>testttt</p>', '[\"628c510_36283.pdf\"]', '4', '2025-08-20 15:40:55', '2025-08-20 15:40:55'),
(10, 16, '<p>test</p>', '[]', '4', '2025-09-03 16:11:32', '2025-09-03 16:11:32'),
(11, 17, '<p>test</p>', '[]', '4', '2025-09-03 16:13:27', '2025-09-03 16:13:27'),
(12, 16, '<p>شكرا لك مهندس</p>', '[]', '5', '2025-09-03 16:16:07', '2025-09-03 16:16:07'),
(13, 14, '<p>test</p>', '[]', '4', '2025-09-03 16:16:24', '2025-09-03 16:16:24'),
(14, 16, 'تم', '[]', '4', '2025-09-03 16:16:57', '2025-09-03 16:16:57'),
(15, 18, '<p>good</p>', '[]', '4', '2025-09-03 16:20:54', '2025-09-03 16:20:54'),
(16, 18, '<p>شكرا</p>', '[]', '5', '2025-09-03 16:22:12', '2025-09-03 16:22:12'),
(17, 19, '<p>testtt</p>', '[]', '4', '2025-09-03 16:22:16', '2025-09-03 16:22:16'),
(18, 18, '<p>close</p>', '[]', '4', '2025-09-03 16:23:56', '2025-09-03 16:23:56'),
(19, 20, '<p>test</p>', '[]', '4', '2025-09-03 16:28:14', '2025-09-03 16:28:14'),
(20, 20, '<p>testtt</p>', '[]', '3', '2025-09-03 16:28:34', '2025-09-03 16:28:34'),
(21, 20, '<p>testtt</p>', '[]', '4', '2025-09-03 16:28:56', '2025-09-03 16:28:56'),
(22, 21, '<p>test</p>', '[]', '4', '2025-09-21 02:15:45', '2025-09-21 02:15:45'),
(23, 21, '<p>dddd</p>', '[]', '4', '2025-09-21 02:16:55', '2025-09-21 02:16:55'),
(24, 21, '<p>Tyt</p>', '[]', '4', '2025-09-21 02:30:34', '2025-09-21 02:30:34'),
(25, 22, '<p>testttt</p>', '[]', '4', '2025-09-21 02:37:50', '2025-09-21 02:37:50'),
(26, 22, '<p>yest</p>', '[]', '3', '2025-09-21 02:38:08', '2025-09-21 02:38:08'),
(27, 22, '<p>Done</p>', '[]', '4', '2025-09-21 02:38:18', '2025-09-21 02:38:18'),
(28, 22, '<p>ففف</p>', '[]', '4', '2025-09-23 13:47:38', '2025-09-23 13:47:38'),
(29, 25, '<p>test</p>', '[]', '4', '2025-09-25 12:52:26', '2025-09-25 12:52:26'),
(30, 25, '<p>فثسفففف</p>', '[]', '4', '2025-09-25 12:56:53', '2025-09-25 12:56:53'),
(31, 25, '<p>testtt</p>', '[]', '3', '2025-09-25 12:57:34', '2025-09-25 12:57:34'),
(32, 15, '<p>test</p>', '[]', '4', '2025-09-29 07:15:47', '2025-09-29 07:15:47'),
(33, 15, '<p>test</p>', '[]', '4', '2025-09-29 08:17:55', '2025-09-29 08:17:55'),
(34, 19, '<p>terstttt</p>', '[]', '4', '2025-09-30 09:02:37', '2025-09-30 09:02:37'),
(35, 50, '<p>testttt</p>', '[]', '4', '2025-09-30 09:04:31', '2025-09-30 09:04:31'),
(36, 50, '<p>GoodBye</p>', '[]', '4', '2025-09-30 09:05:16', '2025-09-30 09:05:16'),
(37, 16, '<p>Tessttt testttttttt</p>', '[]', '4', '2025-09-30 14:26:34', '2025-09-30 14:26:34'),
(38, 54, '<p>testt</p>', '[]', '4', '2025-10-14 02:18:19', '2025-10-14 02:18:19'),
(39, 22, 'تم الرد&nbsp;', '[]', '4', '2025-10-14 02:20:36', '2025-10-14 02:20:36'),
(40, 62, '<p>f</p>', '[]', '2', '2025-11-08 17:21:37', '2025-11-08 17:21:37'),
(41, 62, '<p>ب</p>', '[]', '2', '2025-11-08 17:27:30', '2025-11-08 17:27:30'),
(42, 62, '<p>v</p>', '[]', '2', '2025-11-08 17:29:30', '2025-11-08 17:29:30'),
(43, 62, '<p>f</p>', '[]', '2', '2025-11-08 17:33:49', '2025-11-08 17:33:49'),
(44, 62, '<p>g</p>', '[]', '2', '2025-11-08 17:35:39', '2025-11-08 17:35:39'),
(45, 62, '<p>لل</p>', '[]', '2', '2025-11-08 17:36:49', '2025-11-08 17:36:49'),
(46, 62, '<p>aa</p>', '[]', '2', '2025-11-08 17:39:47', '2025-11-08 17:39:47'),
(47, 63, '<p>rr</p>', '[]', '1', '2025-11-09 16:55:32', '2025-11-09 16:55:32'),
(48, 62, '<p>q</p>', '[]', '2', '2025-11-09 19:51:03', '2025-11-09 19:51:03'),
(49, 63, '<p>d</p>', '[\"reply_tickets\\/63\\/1765813040_sample.pdf\"]', '1', '2025-12-15 13:37:20', '2025-12-15 13:37:20');

-- --------------------------------------------------------

--
-- Table structure for table `custom_fields`
--

CREATE TABLE `custom_fields` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'text',
  `placeholder` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `width` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '6',
  `order` int NOT NULL DEFAULT '0',
  `status` int NOT NULL DEFAULT '1',
  `is_required` tinyint(1) NOT NULL DEFAULT '1',
  `custom_id` int NOT NULL,
  `created_by` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `custom_fields`
--

INSERT INTO `custom_fields` (`id`, `name`, `type`, `placeholder`, `width`, `order`, `status`, `is_required`, `custom_id`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'Name', 'text', 'Name', '6', 0, 0, 1, 1, 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(2, 'Email', 'email', 'Email', '6', 1, 0, 1, 2, 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(3, 'Category', 'select', 'Select Category', '6', 2, 0, 1, 3, 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(4, 'Sub Category', 'select', 'Select Sub Category', '6', 3, 0, 1, 4, 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(5, 'Subject', 'text', 'Subject', '6', 4, 0, 1, 5, 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(6, 'Description', 'textarea', 'Description', '12', 5, 0, 1, 6, 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(7, 'Attachments', 'file', 'You can select multiple files', '12', 6, 0, 1, 7, 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(8, 'Priority', 'select', 'Select Priority', '6', 7, 0, 1, 8, 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43');

-- --------------------------------------------------------

--
-- Table structure for table `custom_field_values`
--

CREATE TABLE `custom_field_values` (
  `id` bigint UNSIGNED NOT NULL,
  `record_id` bigint UNSIGNED NOT NULL,
  `field_id` bigint UNSIGNED NOT NULL,
  `value` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `email_templates`
--

CREATE TABLE `email_templates` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `from` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `email_templates`
--

INSERT INTO `email_templates` (`id`, `name`, `from`, `slug`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'New User', 'OURCRM', 'new_user', 1, '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(2, 'New Ticket', 'OURCRM', 'new_ticket', 1, '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(3, 'New Ticket Reply', 'OURCRM', 'new_ticket_reply', 1, '2025-07-07 15:33:42', '2025-07-07 15:33:42');

-- --------------------------------------------------------

--
-- Table structure for table `email_template_langs`
--

CREATE TABLE `email_template_langs` (
  `id` bigint UNSIGNED NOT NULL,
  `parent_id` int NOT NULL,
  `lang` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `email_template_langs`
--

INSERT INTO `email_template_langs` (`id`, `parent_id`, `lang`, `subject`, `content`, `created_at`, `updated_at`) VALUES
(1, 1, 'ar', 'Login Detail', '<p>مرحبا ، مرحبا بك في {app_name}.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>البريد الالكتروني : {email}</p>\r\n                            <p>كلمة السرية : {password}</p>\r\n                            <p>{app_url}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>شكرا</p>\r\n                            <p>{ app_name }</p>', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(2, 1, 'da', 'Login Detail', '<p>Hej, velkommen til { app_name }.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>E-mail: { email }-</p>\r\n                            <p>kodeord: { password }</p>\r\n                            <p>{app_url}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Tak.</p>\r\n                            <p>{ app_name }</p>', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(3, 1, 'de', 'Login Detail', '<p>Hallo, Willkommen bei {app_name}.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>E-Mail: {email}</p>\r\n                            <p>Kennwort: {password}</p>\r\n                            <p>{app_url}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Danke,</p>\r\n                            <p>{Anwendungsname}</p>', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(4, 1, 'en', 'Login Detail', '<p>Hello,&nbsp;<br>Welcome to {app_name}.</p><p><b>Email </b>: {email}<br><b>Password</b> : {password}</p><p>{app_url}</p><p>Thanks,<br>{app_name}</p>', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(5, 1, 'es', 'Login Detail', '<p>Hola, Bienvenido a {app_name}.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Correo electr&oacute;nico: {email}</p>\r\n                            <p>Contrase&ntilde;a: {password}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>{app_url}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Gracias,</p>\r\n                            <p>{app_name}</p>', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(6, 1, 'fr', 'Login Detail', '<p>Bonjour, Bienvenue dans { app_name }.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>E-mail: { email }</p>\r\n                            <p>Mot de passe: { password }</p>\r\n                            <p>{ adresse_url }</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Merci,</p>\r\n                            <p>{ nom_app }</p>', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(7, 1, 'it', 'Login Detail', '<p>Ciao, Benvenuti in {app_name}.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Email: {email} Password: {password}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>{app_url}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Grazie,</p>\r\n                            <p>{app_name}</p>', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(8, 1, 'ja', 'Login Detail', '<p>こんにちは、 {app_name}へようこそ。</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>E メール : {email}</p>\r\n                            <p>パスワード : {password}</p>\r\n                            <p>{app_url}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>ありがとう。</p>\r\n                            <p>{app_name}</p>', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(9, 1, 'nl', 'Login Detail', '<p>Hallo, Welkom bij { app_name }.</p>\r\n                                <p>&nbsp;</p>\r\n                                <p>E-mail: { email }</p>\r\n                                <p>Wachtwoord: { password }</p>\r\n                                <p>{ app_url }</p>\r\n                                <p>&nbsp;</p>\r\n                                <p>Bedankt.</p>\r\n                                <p>{ app_name }</p>', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(10, 1, 'pl', 'Login Detail', '<p>Witaj, Witamy w aplikacji {app_name }.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>E-mail: {email }</p>\r\n                            <p>Hasło: {password }</p>\r\n                            <p>{app_url }</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Dziękuję,</p>\r\n                            <p>{app_name }</p>', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(11, 1, 'ru', 'Login Detail', '<p>Здравствуйте, Добро пожаловать в { app_name }.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Адрес электронной почты: { email }</p>\r\n                            <p>Пароль: { password }</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>{ app_url }</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Спасибо.</p>\r\n                            <p>{ имя_программы }</p>', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(12, 1, 'pt', 'Login Detail', '<p>Ol&aacute;, Bem-vindo a {app_name}.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>E-mail: {email}</p>\r\n                            <p>Senha: {senha}</p>\r\n                            <p>{app_url}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Obrigado,</p>\r\n                            <p>{app_name}</p>\r\n                            <p>{ имя_программы }</p>', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(13, 1, 'tr', 'Login Detail', '<p>Ol, { app_name } olanağına hoş geldiniz.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>E-posta: {email}</p>\r\n                            <p>Parola: {password}</p>\r\n                            <p>{app_url}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Teşekkür ederim.</p>\r\n                            <p>{app_name}</p>\r\n                            <p>{ program_adı }</p>', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(14, 1, 'he', 'Login Detail', '<p>שלום, &nbsp;<br>ברוכים הבאים אל {app_name}.</p><p><b>דואל </b>: {הדוא \" ל}<br><b>סיסמה</b> : {password}</p><p>{app_url}</p><p>תודה,<br>{app_name}</p>', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(15, 1, 'zh', 'Login Detail', '<p>您好，<br>欢迎访问 {app_name}。</p><p><b>电子邮件 </b>: {email}<br><b>密码</b> : {password}</p><p>{app_url}</p><p>谢谢，<br>{app_name}</p>', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(16, 1, 'pt-br', 'Login Detail', '<p>Ol&aacute;, Bem-vindo a {app_name}.</p>\r\n                                <p>&nbsp;</p>\r\n                                <p>E-mail: {email}</p>\r\n                                <p>Senha: {senha}</p>\r\n                                <p>{app_url}</p>\r\n                                <p>&nbsp;</p>\r\n                                <p>Obrigado,</p>\r\n                                <p>{app_name}</p>\r\n                                <p>{ имя_программы }</p>', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(17, 2, 'ar', 'Ticket Detail', '<p>مرحبا<br>مرحبا بك في {app_name}.</p><p>{ticket_name}</p><p>{ticket_id}</p><p><b>البريد الالكتروني </b>: {email}<br></p><p>{app_url}</p><p> شكرا لك,<br>{app_name}<p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(18, 2, 'da', 'Ticket Detail', '<p>Hallo, &nbsp;<br> Velkommen til {app_name}.</p><p>{ticket_name}</p><p>{ticket_id} </p><p><b>e-mail</b>: {email}<br></p><p>{app_url}</p><p>Tak,<br>{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(19, 2, 'de', 'Ticket Detail', '<p>Hallo,<br>Willkommen bei {app_name}.</p><p>{ticket_name}</p><p>{ticket_id} </p><p><b>E-Mail</b>: {email}<br></p><p>{app_url}</p><p>Vielen Dank,<br>{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(20, 2, 'en', 'Ticket Detail', '<p>Hello,&nbsp;<br>Welcome to {app_name}.</p><p>{ticket_name} </p><p>{ticket_id} </p><p><b>Email </b>: {email}<br></p><p>{app_url}</p><p>Thanks,<br>{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(21, 2, 'es', 'Ticket Detail', '<p>Hola, &nbsp;<br>Bienvenido al {app_name}.</p><p>{ticket_name}</p><p>{ticket_id} </p><p><b> correo electrónico</b>: {email}<br></p><p>{app_url}</p><p>Gracias,<br>{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(22, 2, 'fr', 'Ticket Detail', '<p>Bonjour, &nbsp;<br>Bienvenue dans le {app_name}.</p><p>{ticket_name}</p><p>{ticket_id} </p><p><b> courrier électronique</b>: {email}<br></p><p>{app_url}</p><p>Merci,<br>{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(23, 2, 'it', 'Ticket Detail', '<p>Ciao, &nbsp;<br> Benvenuti in{app_name}.</p><p>{ticket_name}</p><p>{ticket_id} </p><p><b>Email </b>: {email}<br></p><p>{app_url}</p><p>Grazie,<br>{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(24, 2, 'ja', 'Ticket Detail', '<p>こんにちは、 &nbsp;<br>ようこそ {app_name}.</p><p>{ticket_name}</p><p>{ticket_id} </p><p><b>アンド </b>: {email}<br></p><p>{app_url}</p><p>ありがと,<br>{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(25, 2, 'nl', 'Ticket Detail', '<p>Hallo, &nbsp;<br> Welkom bij {app_name}.</p><p>{ticket_name}</p><p>{ticket_id} </p><p><b> e-mail</b>: {email}<br></p><p>{app_url}</p><p>Bedankt,<br>{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(26, 2, 'pl', 'Ticket Detail', '<p>Witaj, &nbsp;<br>Witamy w wiadomości{app_name}.</p><p>{ticket_name}</p><p>{ticket_id} </p><p><b>e-mail </b>: {email}<br></p><p>{app_url}</p><p>Dziękujemy,<br>{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(27, 2, 'ru', 'Ticket Detail', '<p>Здравствуйте, &nbsp;<br> Вас приветствует{app_name}.</p><p>{ticket_name}</p><p>{ticket_id} </p><p><b> электронная почта </b>: {email}<br></p><p>{app_url}</p><p>Спасибо,<br>{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(28, 2, 'pt', 'Ticket Detail', '<p>Olá, &nbsp;<br>Bem-vindo ao {app_name}.</p><p>{ticket_name}</p><p>{ticket_id} </p><p><b>Email </b>: {email}<br></p><p>{app_url}</p><p>Obrigado,<br>{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(29, 2, 'tr', 'Ticket Detail', '<p>Merhaba, &nbsp;<br> Hoşgeldiniz {app_name}.</p><p>{ticket_name}</p><p>{ticket_id} </p><p>E-postaya<b> </b>: {email}<br></p><p>{app_url}</p><p>Teşekkürler,<br>{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(30, 2, 'zh', 'Ticket Detail', '<p>你好，<br>欢迎 {app_name}.</p><p>{ticket_name}</p><p>{ticket_id} </p><p><b>电子邮件 </b>: {email}<br></p><p>{app_url}</p><p>谢谢,<br>{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(31, 2, 'he', 'Ticket Detail', '<p>שלום, &nbsp;<br> ברוכים הבאים{app_name}.</p><p>{ticket_name}</p><p>{ticket_id} </p><p><b>דואל </b>: {email}<br></p><p>{app_url}</p><p>תודה,<br>{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(32, 2, 'pt-br', 'Ticket Detail', '<p>Olá, &nbsp;<br>Bem-vindo ao {app_name}.</p><p>{ticket_name}</p><p>{ticket_id} </p><p><b>Email </b>: {email}<br></p><p>{app_url}</p><p>Obrigado,<br>{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(33, 3, 'ar', 'Ticket Detail', '<p>مرحبا ، مرحبا بك في { app_name }.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>{ ticket_name }</p>\r\n                            <p>{ ticket_id }</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>الوصف : { ticket_description }</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>شكرا</p>\r\n                            <p>{ app_name }</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(34, 3, 'da', 'Ticket Detail', '<p>Hej, velkommen til { app_name }.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>{ ticket_name }</p>\r\n                            <p>{ ticket_id }</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Beskrivelse: { ticket_description }</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Tak.</p>\r\n                            <p>{ app_name }</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(35, 3, 'de', 'Ticket Detail', '<p>Hallo, Willkommen bei {app_name}.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>{ticketname}</p>\r\n                            <p>{ticket_id}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Beschreibung: {ticket_description}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Danke,</p>\r\n                            <p>{Anwendungsname}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(36, 3, 'en', 'Ticket Detail', '<p>Hello,&nbsp;<br />Welcome to {app_name}.</p>\r\n                            <p>{ticket_name}</p>\r\n                            <p>{ticket_id}</p>\r\n                            <p><strong>Description</strong> : {ticket_description}</p>\r\n                            <p>Thanks,<br />{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(37, 3, 'es', 'Ticket Detail', '<p>Hola, Bienvenido a {app_name}.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>{ticket_name}</p>\r\n                            <p>{ticket_id}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Descripci&oacute;n: {ticket_description}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Gracias,</p>\r\n                            <p>{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(38, 3, 'fr', 'Ticket Detail', '<p>Hola, Bienvenido a {app_name}.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>{ticket_name}</p>\r\n                            <p>{ticket_id}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Descripci&oacute;n: {ticket_description}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Gracias,</p>\r\n                            <p>{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(39, 3, 'it', 'Ticket Detail', '<p>Ciao, Benvenuti in {app_name}.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>{ticket_name}</p>\r\n                            <p>{ticket_id}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Descrizione: {ticket_description}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Grazie,</p>\r\n                            <p>{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(40, 3, 'ja', 'Ticket Detail', '<p>こんにちは、 {app_name}へようこそ。</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>{ticket_name}</p>\r\n                            <p>{ticket_id}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>説明 : {ticket_description}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>ありがとう。</p>\r\n                            <p>{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(41, 3, 'nl', 'Ticket Detail', '<p>Hallo, Welkom bij { app_name }.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>{ ticket_name }</p>\r\n                            <p>{ ticket_id }</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Beschrijving: { ticket_description }</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Bedankt.</p>\r\n                            <p>{ app_name }</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(42, 3, 'pl', 'Ticket Detail', '<p>Witaj, Witamy w aplikacji {app_name }.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>{ticket_name }</p>\r\n                            <p>{ticket_id }</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Opis: {ticket_description }</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Dziękuję,</p>\r\n                            <p>{app_name }</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(43, 3, 'ru', 'Ticket Detail', '<p>Здравствуйте, Добро пожаловать в { app_name }.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Witaj, Witamy w aplikacji {app_name }.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>{ticket_name }</p>\r\n                            <p>{ticket_id }</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Opis: {ticket_description }</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Dziękuję,</p>\r\n                            <p>{app_name }</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(44, 3, 'pt', 'Ticket Detail', '<p>Ol&aacute;, Bem-vindo a {app_name}.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>{ticket_name}</p>\r\n                            <p>{ticket_id}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Descri&ccedil;&atilde;o: {ticket_description}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Obrigado,</p>\r\n                            <p>{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(45, 3, 'tr', 'Ticket Detail', '<p>Ol, { app_name } olanağına hoş geldiniz.</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>{ticket_name}</p>\r\n                            <p>{ticket_id}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Descri &ccedil; &atlde; o: {ticket_description}</p>\r\n                            <p>&nbsp;</p>\r\n                            <p>Teşekkür ederim.</p>\r\n                            <p>{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(46, 3, 'he', 'Ticket Detail', '<p>שלום, &nbsp;<br />ברוכים הבאים ל - {app_name}.</p> <p>{ticket_name}</p>\r\n                            <p>{ticket_id}</p>\r\n                            <p><strong>תיאור</strong> : {ticket_description}</p>\r\n                            <p>תודה,<br />{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(47, 3, 'zh', 'Ticket Detail', '<p>您好，<br />欢迎访问 {app_name}。</p> <p>{ticket_name}</p>\r\n                            <p>{ticket_id}</p>\r\n                            <p><strong>描述</strong> : {ticket_description}</p>\r\n                             <p>感谢，<br />{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(48, 3, 'pt-br', 'Ticket Detail', '<p>Olá,&nbsp;<br />Bem-vindo ao {app_name}.</p>\r\n                                <p>{ticket_name}</p>\r\n                                <p>{ticket_id}</p>\r\n                                <p><strong>Descrição</strong> : {ticket_description}</p>\r\n                                <p>Obrigado,<br />{app_name}</p>', '2025-07-07 15:33:43', '2025-07-07 15:33:43');

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `id` bigint UNSIGNED NOT NULL,
  `title_ar` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_ar` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_en` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `faqs`
--

INSERT INTO `faqs` (`id`, `title_ar`, `title_en`, `description_ar`, `description_en`, `created_at`, `updated_at`) VALUES
(1, 'ما هو برنامج القيادة من الصفوف الأمامية؟', 'What is the \"Leading from the Front\" program?', '<p><span style=\"color: rgb(77, 87, 101); font-family: Cairo, sans-serif; font-size: 15px;\">يُعد هذا البرنامج مبادرة تحوّلية تهدف إلى تمكين منسوبي الجامعة من قيادة مشاريع تحسين نوعية داخل بيئة العمل الجامعية. وقد شهد البرنامج إقبالًا واسعًا، حيث تقدّم له أكثر من (١٢٠٠) متقدّم، وتم اختيار (١٦) مشاركًا من منسوبي الجامعة لتنفيذ مشاريع المرحلة الأولى. كما ستُعاد عملية الفرز والاختيار عند إطلاق مراحل ومشاريع جديدة مستقبلًا.</span><br style=\"color: rgb(77, 87, 101); font-family: Cairo, sans-serif; font-size: 15px;\"></p>', '<p style=\"direction: ltr; \"><span style=\"color: rgb(77, 87, 101); font-family: Roboto, sans-serif; font-size: 15px;\">This transformative program empowers university staff to lead improvement projects. Over 1,200 applied, and 16 participants were selected for the first phase, with more opportunities to come in future rounds.</span></p>', '2025-07-07 18:56:26', '2025-09-29 05:00:31'),
(2, 'متى سيتم إطلاق استراتيجية الجامعة؟', 'When will the KSU Strategy be launched?', '<p><span style=\"color: rgb(77, 87, 101); font-family: Cairo, sans-serif; font-size: 15px;\">من المقرر إطلاقها رسميًا في الربع الأول من عام 2026، ضمن المرحلة الثانية من التحول الجامعي.</span></p>', '<p><span style=\"color: rgb(77, 87, 101); font-family: Roboto, sans-serif; font-size: 15px;\">The official launch is scheduled for Q1 2026, during the second phase of the university transformation.</span></p>', '2025-07-07 18:57:55', '2025-09-29 05:01:27'),
(3, 'هل يشمل التحول إعادة هيكلة الوظائف أو العقود؟', 'Will the transformation affect roles or contracts?', '<p><span style=\"color: rgb(77, 87, 101); font-family: Cairo, sans-serif; font-size: 15px;\">نعم، ضمن مبادرة التمكين المؤسسي، وسيتم تقديم الدعم والتدريب المهني اللازم عبر عمادة الموارد البشرية.</span></p>', '<p><span style=\"color: rgb(77, 87, 101); font-family: Roboto, sans-serif; font-size: 15px;\">Yes, under the Corporatization initiative, with full HR support and career development plans in place.</span></p>', '2025-07-07 18:58:56', '2025-09-29 05:02:20'),
(9, 'كيف يمكنني المشاركة في برامج التحول؟', 'How can I get involved in the transformation programs?', '<p><span style=\"color: rgb(77, 87, 101); font-family: Cairo, sans-serif; font-size: 15px;\">يمكنك التسجيل كسفير، أو عبر الاستبيانات والفعاليات مثل الهاكاثون والمعارض.</span></p>', '<p><span style=\"color: rgb(77, 87, 101); font-family: Roboto, sans-serif; font-size: 15px;\">You can register as an ambassador, &nbsp;participate in surveys, or join events like hackathons and showcases.</span></p>', '2025-09-29 05:04:09', '2025-09-29 05:04:09'),
(10, 'ما الفرق بين \"برنامج تمكين سفراء التحول\" و \"برنامج القيادة من الصفوف الأمامية\" ؟', 'What\'s the difference between \"Transformation Ambassadors Acceleration Program\" and \"Leading from the Front program\"?', '<p><span style=\"color: rgb(77, 87, 101); font-family: Cairo, sans-serif; font-size: 15px;\">السفراء يمثلون صوت التحول وينقلون التجربة، بينما الصفوف الأمامية يقودون مشاريع تحسين مباشرة.</span></p>', '<p><span style=\"color: rgb(77, 87, 101); font-family: Roboto, sans-serif; font-size: 15px;\">Transformation Ambassadors Acceleration Program amplify the transformation voice and represent participation, while Frontliners lead actionable improvement projects.</span></p>', '2025-09-29 05:05:05', '2025-09-29 05:05:05'),
(11, 'هل ستتغير البرامج الأكاديمية؟', 'Will academic programs be restructured?', '<p><span style=\"color: rgb(77, 87, 101); font-family: Cairo, sans-serif; font-size: 15px;\">سيتم تحديث وتطوير البرامج بما يتماشى مع استراتيجية الجامعة الجديدة، لضمان مواءمتها مع سوق العمل.</span></p>', '<p><span style=\"color: rgb(77, 87, 101); font-family: Roboto, sans-serif; font-size: 15px;\">Yes, they will be updated to align with the new strategy and evolving labor market needs.</span></p>', '2025-09-29 05:08:39', '2025-09-29 05:08:39'),
(12, 'ما هو دور مكتب إدارة التحول؟', 'What is the role of the Transformation Management Office?', '<p><span style=\"color: rgb(77, 87, 101); font-family: Cairo, sans-serif; font-size: 15px;\">يعمل المكتب كموجه استراتيجي، وليس لديه صلاحيات تنفيذية مباشرة، ويضم أربعة أقسام تدير التغيير والمشاريع والتميز.</span></p>', '<p><div class=\"sub-content collapse show\" id=\"accordion2-483\" style=\"box-sizing: border-box; color: rgb(33, 37, 41); font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; font-size: 17.136px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><div class=\"card card-body\" style=\"box-sizing: border-box; position: relative; display: flex; flex-direction: column; min-width: 0px; overflow-wrap: break-word; background-color: unset; background-clip: border-box; border: unset; border-radius: 0.25rem; flex: 1 1 auto; padding: 0px;\"></div></div></p><div class=\"main-content\" style=\"box-sizing: border-box; color: rgb(33, 37, 41); font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; font-size: 17.136px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><h4 style=\"box-sizing: border-box; text-decoration: none; color: rgb(15, 34, 57); cursor: pointer; margin-top: 0px; margin-bottom: 0px; font-weight: 700; line-height: 25px; font-size: 22px; font-family: \"GT Walsheim Pro\", sans-serif; margin-right: 78px;\"><a class=\"icon\" data-bs-toggle=\"collapse\" href=\"https://ourksu.ksu.edu.sa/en/Faq#accordion2-483\" role=\"button\" aria-expanded=\"true\" aria-controls=\"accordion2-483\" style=\"box-sizing: border-box; text-decoration: none; color: rgb(0, 113, 179); cursor: pointer;\"><span style=\"color: rgb(77, 87, 101); font-family: Roboto, sans-serif; font-size: 15px; font-weight: 400;\">It acts as a strategic advisor without direct authority and includes four divisions: strategy, change, excellence, and project management.</span></a></h4></div>', '2025-09-29 05:09:18', '2025-09-29 05:09:18'),
(13, 'متى سيبدأ التحول في جامعة الملك سعود؟', 'When will the transformation begin?', '<p><span style=\"color: rgb(77, 87, 101); font-family: Cairo, sans-serif; font-size: 15px;\">التحول قد بدأ بالفعل، حيث صدر نظام الأساس للجامعة بتاريخ 1444/02/09هـ (5 سبتمبر 2022م)، والذي منح الجامعة شخصية اعتبارية وذمة مالية مستقلة وربطها بالهيئة الملكية لمدينة الرياض. وتبع ذلك صدور الأمر السامي بتاريخ 1445/01/07هـ (25 يونيو 2023م) بتشكيل مجلس إدارة الجامعة الذي أنشأ مكتب إدارة التحول.</span></p>', '<p><span style=\"color: rgb(77, 87, 101); font-family: Roboto, sans-serif; font-size: 15px;\">The transformation has already begun, and the basic system has been issued. Details include a start date of 09/02/1444 (corresponding to 05/09/2022) and further updates on 25/06/1445 (25/06/2023), as outlined in the document.</span></p>', '2025-09-29 05:09:57', '2025-09-29 05:09:57');

-- --------------------------------------------------------

--
-- Table structure for table `floating_chat_messages`
--

CREATE TABLE `floating_chat_messages` (
  `id` bigint UNSIGNED NOT NULL,
  `floating_chat_user_id` bigint UNSIGNED NOT NULL,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `floating_chat_users`
--

CREATE TABLE `floating_chat_users` (
  `id` bigint UNSIGNED NOT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `knowledge`
--

CREATE TABLE `knowledge` (
  `id` bigint UNSIGNED NOT NULL,
  `title_ar` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_ar` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_en` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `knowledge`
--

INSERT INTO `knowledge` (`id`, `title_ar`, `title_en`, `description_ar`, `description_en`, `category`, `created_at`, `updated_at`) VALUES
(1, 'التحول في جامعة الملك سعود: رحلة نحو التميز العالمي', 'Transforming King Saud University: A Journey to Global Excellence', '<p>نحن ننطلق في رحلة التحول من خالل »KSU Our »\r\nلالرتقاء بجامعة الملك سعود إلى قوة أكاديمية\r\nوابتكارية عالمية رائدة، بما يتماشى مع رؤية صاحب\r\nالسمو الملكي األمير محمد بن سلمان ولي العهد\r\nورئيس مجلس الوزراء .2030\r\n»KSU Our »لنا جميًًعا - الــطالب وأعـضـاء هيئة\r\nالتدريس والموظفين والمجتمع األوسع- طموحنا\r\nواضح وملهم: أن تصبح الجامعة مؤسسة أكاديمية\r\nعالمية رائــدة. هذا الطموح ليس مجرد هـدف، بل\r\nالتزام بالتميز من شأنه أن يساهم بشكل كبير في\r\nتشكيل مستقبل مدينتنا ومملكتنا وما بعدها.\r\nمًًعا، نحن رواد مستقبل جامعة الملك سعود.&nbsp;</p>', '<p>We are embarking on the transformative journey\r\nof ‘Our KSU’ to elevate King Saud University\r\ninto a leading global academic and innovation\r\npowerhouse, in alignment with His Royal Highness\r\nPrince Mohammed bin Salman, Crown Prince and\r\nPrime Minister’s Vision 2030. ‘Our KSU’ belongs\r\nto all of us — students, faculty, staff, and the\r\nbroader community — and our ambition is clear\r\nand inspiring: to become a leading, global academic\r\ninstitution. This aspiration is not just a goal, but\r\na commitment to excellence that will significantly\r\ncontribute to shaping the future of our city, our\r\nKingdom, and beyond.</p>', '1', '2025-07-07 19:11:34', '2025-07-07 19:11:34'),
(2, 'محركات التحول في جامعة الملك سعود', 'OUR KSU Transformation Drivers', '<p style=\"direction: rtl; \">&nbsp;يعتمد التحول في جامعة الملك سعود على خمس محركات رئيسية:</p><ol><li style=\"direction: rtl;\">منارة\r\nللتميز الأكاديمي\r\nوالابتكار .</li><li style=\"direction: rtl;\">الارتقاء بجامعة الملك\r\nسعود إلى مكانة\r\nعالمية مرموقة .</li><li style=\"direction: rtl;\">الارتقاء بجامعة الملك\r\nسعود إلى مكانة\r\nعالمية مرموقة .</li><li style=\"direction: rtl;\">أنتم محور مهمتنا .</li><li style=\"direction: rtl;\">التحول بقيادة\r\nالصفوف الأمامية .</li><li style=\"direction: rtl;\">تحقيق التأثير\r\nمن خلال التعاون .</li></ol><p style=\"direction: rtl; \">\r\n</p>', '<ol><li style=\"direction: ltr;\">Our KSU transformation, is built on five key drivers :</li><li style=\"direction: ltr;\">A Beacon of\r\nAcademic\r\nExcellence and\r\nInnovation.</li><li style=\"direction: ltr;\">Elevating\r\nKSU to\r\nGlobal\r\nEminence .</li><li style=\"direction: ltr;\">You\r\nat the Heart\r\nof Our\r\nTransformation.</li><li style=\"direction: ltr;\">Frontline-Led\r\nTransformation.</li><li style=\"direction: ltr;\">Achieving\r\nImpact\r\nthrough\r\nSynergy</li></ol>', '1', '2025-07-07 19:17:45', '2025-09-29 05:48:11'),
(3, 'نظرة عامة', 'Overview', '<table><tbody><tr><td>جامعة الملك سعود تخوض رحلة تحول طموحة نحو التميز الأكاديمي والابتكار، مستندة إلى رؤية 2030</td><td></td></tr></tbody></table><table><tbody><tr><td>التحول بقيادة المجتمع الجامعي: الطلاب، أعضاء هيئة التدريس، والموظفين.</td><td></td></tr></tbody></table>', '<table><tbody><tr><td>King Saud University is undergoing a bold transformation toward academic excellence and innovation, aligned with Vision 2030.</td></tr><tr><td></td></tr></tbody></table><div></div><table></table><table><tbody><tr><td>The transformation is led by the university community: students, faculty, and staff.</td></tr></tbody></table><div></div>', '1', '2025-07-09 03:39:54', '2025-07-09 03:40:29'),
(4, 'أهداف التحول', 'Transformation Objectives', '<ul><li>إشراك جميع منسوبي الجامعة في التحول<span style=\"white-space:pre\">	</span></li><li>الاستفادة من خبرات الطلاب والموظفين وأعضاء هيئة التدريس<span style=\"white-space: pre;\">	</span></li><li>تمكين القيادة من القاعدة<span style=\"white-space: pre;\">	</span></li><li>دعم التطور المستمر للجامعة<span style=\"white-space: pre;\">	</span></li></ul>', '<ul><li>&nbsp;Include all KSU members in the transformation</li><li>&nbsp;Harness the expertise of students, staff, and faculty</li><li>&nbsp;Empower bottom-up leadership</li><li>&nbsp;Enable continuous institutional evolution</li></ul>', '1', '2025-07-09 03:42:41', '2025-07-09 03:42:41'),
(5, 'مراحل التحول', 'Transformation Phases', '<table>الإشعال (Q1 2025 – Q1 2026)</table><table>جمع التغذية الراجعة، إشراك المجتمع</table><table><br></table><table>الانطلاق (Q1 2026 – Q4 2026)</table><table>إعلان الاستراتيجية، إطلاق المشاريع</table><table><br></table><table>التسريع (Q4 2026 – H1 2027)</table><table>تنفيذ التغييرات، ضمان الاستدامة</table>', '<p>**Ignite**</p><p>*Period: Q1 2025 – Q1 2026*</p><p>This phase focuses on gathering feedback and engaging the university community to build a shared vision for transformation.</p><p><br></p><p>**Take Off**</p><p>*Period: Q1 2026 – Q4 2026*</p><p>The strategy is officially launched, and key projects begin rollout to bring the vision into action.</p><p><br></p><p>**Accelerate**</p><p>*Period: Q4 2026 – H1 2027*</p><p>Efforts shift toward full implementation and ensuring sustainability of the initiatives.</p>', '1', '2025-07-09 03:45:29', '2025-07-09 03:45:29'),
(6, 'محركات التحول', 'Transformation Drivers', '<p data-start=\"118\" data-end=\"221\"><strong data-start=\"118\" data-end=\"146\">التميز الأكاديمي والبحثي</strong><br data-start=\"146\" data-end=\"149\">\r\nالارتقاء بمستوى التعليم والبحث العلمي لتحقيق الريادة والمعايير العالمية.</p><p data-start=\"223\" data-end=\"320\"><strong data-start=\"223\" data-end=\"248\">إشراك المجتمع الجامعي</strong><br data-start=\"248\" data-end=\"251\">\r\nتعزيز مشاركة الطلاب، وأعضاء هيئة التدريس، والموظفين في تطوير الجامعة.</p><p data-start=\"322\" data-end=\"419\"><strong data-start=\"322\" data-end=\"352\">القيادة من الصفوف الأمامية</strong><br data-start=\"352\" data-end=\"355\">\r\nتمكين القادة من مختلف المستويات ليكونوا جزءًا فعالًا من التغيير.</p><p>\r\n\r\n\r\n</p><p data-start=\"421\" data-end=\"522\"><strong data-start=\"421\" data-end=\"439\">التآزر المؤسسي</strong><br data-start=\"439\" data-end=\"442\">\r\nتحقيق التكامل بين مختلف الوحدات والقطاعات داخل الجامعة لتعزيز الكفاءة والفعالية.</p>', '<p data-start=\"552\" data-end=\"667\"><strong data-start=\"552\" data-end=\"588\">Academic and Research Excellence</strong><br data-start=\"588\" data-end=\"591\">\r\nAdvancing education and research to achieve leadership and global standards.</p><p data-start=\"669\" data-end=\"784\"><strong data-start=\"669\" data-end=\"693\">Community Engagement</strong><br data-start=\"693\" data-end=\"696\">\r\nEnhancing participation of students, faculty, and staff in the university’s development.</p><p data-start=\"786\" data-end=\"879\"><strong data-start=\"786\" data-end=\"812\">Leading from the Front</strong><br data-start=\"812\" data-end=\"815\">\r\nEmpowering leaders at all levels to be active drivers of change.</p><p>\r\n\r\n\r\n</p><p data-start=\"881\" data-end=\"988\"><strong data-start=\"881\" data-end=\"906\">Institutional Synergy</strong><br data-start=\"906\" data-end=\"909\">\r\nFostering integration across university units to improve efficiency and impact.</p>', '1', '2025-07-09 03:46:52', '2025-07-09 03:46:52'),
(7, 'برنامج القيادة من الصفوف الأمامية', 'Leading from the Front Program', '<p data-start=\"118\" data-end=\"237\"><strong data-start=\"118\" data-end=\"180\">أُطلق في يناير 2025 لتمكين منسوبي الجامعة من قيادة التغيير</strong><br data-start=\"180\" data-end=\"183\">\r\nبرنامج يهدف إلى إشراك مجتمع الجامعة في صياغة مستقبلها.</p><p data-start=\"239\" data-end=\"365\"><strong data-start=\"239\" data-end=\"287\">جمع أكثر من 267,000 نقطة بيانات من المشاركين</strong><br data-start=\"287\" data-end=\"290\">\r\nجهود واسعة شملت استطلاعات، ورش عمل، ومناقشات مع مختلف فئات المجتمع الجامعي.</p><p>\r\n\r\n</p><p data-start=\"367\" data-end=\"448\"><strong data-start=\"367\" data-end=\"391\">أبرز مجالات التحسين:</strong><br data-start=\"391\" data-end=\"394\">\r\nبيئة الحرم، الثقافة، الأكاديميا، البحث، تطوير الكوادر.</p>', '<p data-start=\"478\" data-end=\"629\"><strong data-start=\"478\" data-end=\"550\">Launched in January 2025 to empower the KSU community to lead change</strong><br data-start=\"550\" data-end=\"553\">\r\nA program designed to engage the university community in shaping its future.</p><p data-start=\"631\" data-end=\"782\"><strong data-start=\"631\" data-end=\"687\">Collected over 267,000 data points from participants</strong><br data-start=\"687\" data-end=\"690\">\r\nExtensive efforts included surveys, workshops, and discussions across all university groups.</p><p>\r\n\r\n</p><p data-start=\"784\" data-end=\"869\"><strong data-start=\"784\" data-end=\"810\">Key improvement areas:</strong><br data-start=\"810\" data-end=\"813\">\r\nCampus, culture, academics, research, staff development.</p>', '1', '2025-07-09 03:48:04', '2025-07-09 03:48:04'),
(8, 'الصفوف الأمامية', 'Frontliners', '<p data-start=\"107\" data-end=\"226\"><strong data-start=\"107\" data-end=\"165\">18 عضو هيئة تدريس وموظف تم اختيارهم من بين 1,200 متقدم</strong><br data-start=\"165\" data-end=\"168\">\r\nتم اختيارهم بعناية لقيادة مبادرات استراتيجية داخل الجامعة.</p><p data-start=\"228\" data-end=\"342\"><strong data-start=\"228\" data-end=\"277\">يقودون مشاريع ذات أولوية لتحسين تجربة الجامعة</strong><br data-start=\"277\" data-end=\"280\">\r\nيركزون على مبادرات تُحدث فرقًا ملموسًا في بيئة العمل والدراسة.</p><p>\r\n\r\n</p><p data-start=\"344\" data-end=\"425\"><strong data-start=\"344\" data-end=\"382\">التقديم للدفعة الثانية مغلق حاليًا</strong><br data-start=\"382\" data-end=\"385\">\r\nسيتم الإعلان عن المواعيد القادمة لاحقًا.</p>', '<p data-start=\"455\" data-end=\"583\"><strong data-start=\"455\" data-end=\"511\">18 faculty and staff selected from 1,200+ applicants</strong><br data-start=\"511\" data-end=\"514\">\r\nCarefully chosen to lead strategic initiatives within the university.</p><p data-start=\"585\" data-end=\"741\"><strong data-start=\"585\" data-end=\"651\">Leading priority projects to improve the university experience</strong><br data-start=\"651\" data-end=\"654\">\r\nFocused on initiatives that create meaningful impact in work and learning environments.</p><p>\r\n\r\n</p><p data-start=\"743\" data-end=\"864\"><strong data-start=\"743\" data-end=\"802\">Applications for the second cohort are currently closed</strong><br data-start=\"802\" data-end=\"805\">\r\nFuture application dates will be announced at a later time.</p>', '1', '2025-07-09 03:48:47', '2025-07-09 03:48:47'),
(9, 'هاكثون التحول', 'Transformation Hackathon', '<p data-start=\"85\" data-end=\"175\"><strong data-start=\"85\" data-end=\"122\">900+ مشارك، 153 فكرة، 9 فرق فائزة</strong><br data-start=\"122\" data-end=\"125\">\r\nمشاركة واسعة مع تنوع في الأفكار والمشاريع الفائزة.</p><p data-start=\"177\" data-end=\"267\"><strong data-start=\"177\" data-end=\"211\">جوائز بقيمة 450,000 ريال سعودي</strong><br data-start=\"211\" data-end=\"214\">\r\nتحفيز وتشجيع الابتكار من خلال تقديم جوائز مالية قيمة.</p><p>\r\n\r\n</p><p data-start=\"269\" data-end=\"318\"><strong data-start=\"269\" data-end=\"287\">أبرز المشاريع:</strong><br data-start=\"287\" data-end=\"290\">\r\nLexAI، منصة الابتكار، دليلة.</p>', '<p data-start=\"348\" data-end=\"460\"><strong data-start=\"348\" data-end=\"397\">900+ participants, 153 ideas, 9 winning teams</strong><br data-start=\"397\" data-end=\"400\">\r\nBroad participation with diverse ideas and winning projects.</p><p data-start=\"462\" data-end=\"554\"><strong data-start=\"462\" data-end=\"487\">SAR 450,000 in prizes</strong><br data-start=\"487\" data-end=\"490\">\r\nEncouraging innovation by awarding substantial financial prizes.</p><p>\r\n\r\n</p><p data-start=\"556\" data-end=\"613\"><strong data-start=\"556\" data-end=\"573\">Top projects:</strong><br data-start=\"573\" data-end=\"576\">\r\nLexAI, Innovation Platform, Daliylah.</p>', '1', '2025-07-09 03:49:33', '2025-07-09 03:49:33'),
(10, 'كيف تشارك؟', 'How to Get Involved؟', '<p data-start=\"93\" data-end=\"151\"><strong data-start=\"93\" data-end=\"113\">كن سفيرًا للتحول</strong><br data-start=\"113\" data-end=\"116\">\r\nشارك في قيادة التغيير داخل الجامعة.</p><p data-start=\"153\" data-end=\"227\"><strong data-start=\"153\" data-end=\"181\">انضم إلى الصفوف الأمامية</strong><br data-start=\"181\" data-end=\"184\">\r\nكن جزءًا من فرق العمل الرائدة في المبادرات.</p><p data-start=\"229\" data-end=\"291\"><strong data-start=\"229\" data-end=\"259\">شارك برأيك عبر الاستبيانات</strong><br data-start=\"259\" data-end=\"262\">\r\nساهم بملاحظاتك لتحسين الأداء.</p><p>\r\n\r\n\r\n</p><p data-start=\"293\" data-end=\"353\"><strong data-start=\"293\" data-end=\"318\">نموذج التقديم للسفراء</strong><br data-start=\"318\" data-end=\"321\">\r\n<a href=\"https://forms.office.com/r/LMHmJS9zjs\" target=\"_blank\"><u>املأ نموذج التقديم لتصبح سفيرًا.</u></a></p>', '<h3 data-start=\"360\" data-end=\"381\"><strong data-start=\"364\" data-end=\"381\"></strong></h3><p data-start=\"383\" data-end=\"474\"><strong data-start=\"383\" data-end=\"421\">Become a Transformation Ambassador</strong><br data-start=\"421\" data-end=\"424\">\r\nTake part in leading change within the university.</p><p data-start=\"476\" data-end=\"551\"><strong data-start=\"476\" data-end=\"505\">Join the Frontliner Teams</strong><br data-start=\"505\" data-end=\"508\">\r\nBe part of the pioneering initiative teams.</p><p data-start=\"553\" data-end=\"639\"><strong data-start=\"553\" data-end=\"588\">Share your feedback via surveys</strong><br data-start=\"588\" data-end=\"591\">\r\nContribute your insights to enhance performance.</p><p>\r\n\r\n\r\n\r\n</p><p data-start=\"641\" data-end=\"729\"><strong data-start=\"641\" data-end=\"672\">Ambassador Application Form</strong><br data-start=\"672\" data-end=\"675\">\r\n<a href=\"https://forms.office.com/r/LMHmJS9zjs\" target=\"_blank\"><u>Fill out the application form to become an ambassador.</u></a></p>', '1', '2025-07-09 03:51:38', '2025-07-09 03:51:38');

-- --------------------------------------------------------

--
-- Table structure for table `knowledge_base_category`
--

CREATE TABLE `knowledge_base_category` (
  `id` bigint UNSIGNED NOT NULL,
  `title_ar` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `knowledge_base_category`
--

INSERT INTO `knowledge_base_category` (`id`, `title_ar`, `title_en`, `created_at`, `updated_at`) VALUES
(1, 'عن التحول', 'About transformation', '2025-07-07 19:08:52', '2025-07-07 19:08:52');

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `id` bigint UNSIGNED NOT NULL,
  `code` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullName` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`id`, `code`, `fullName`, `created_at`, `updated_at`) VALUES
(1, 'ar', 'Arabic', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(5, 'en', 'English', '2025-07-07 15:33:43', '2025-07-07 15:33:43');

-- --------------------------------------------------------

--
-- Table structure for table `login_details`
--

CREATE TABLE `login_details` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ip` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL,
  `details` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `login_details`
--

INSERT INTO `login_details` (`id`, `user_id`, `ip`, `date`, `details`, `role`, `created_by`, `created_at`, `updated_at`) VALUES
(1, '1', '10.117.242.152', '2025-07-07 18:35:39', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-07 15:35:39', '2025-07-07 15:35:39'),
(2, '1', '10.117.242.152', '2025-07-07 18:44:01', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-07 15:44:01', '2025-07-07 15:44:01'),
(3, '1', '10.117.242.152', '2025-07-07 20:41:27', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-07 17:41:27', '2025-07-07 17:41:27'),
(4, '4', '10.117.242.152', '2025-07-07 22:34:32', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-07 19:34:32', '2025-07-07 19:34:32'),
(5, '4', '10.117.242.152', '2025-07-07 22:39:50', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-07 19:39:50', '2025-07-07 19:39:50'),
(6, '4', '10.117.242.152', '2025-07-07 22:47:25', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-07 19:47:25', '2025-07-07 19:47:25'),
(7, '4', '10.117.242.152', '2025-07-07 23:03:28', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-07 20:03:28', '2025-07-07 20:03:28'),
(8, '4', '10.117.242.21', '2025-07-08 06:07:16', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-08 03:07:16', '2025-07-08 03:07:16'),
(9, '5', '10.117.242.21', '2025-07-08 06:14:58', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 4, '2025-07-08 03:14:58', '2025-07-08 03:14:58'),
(10, '7', '10.117.242.21', '2025-07-08 07:04:47', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-08 04:04:47', '2025-07-08 04:04:47'),
(11, '7', '10.117.242.21', '2025-07-08 07:06:56', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-08 04:06:56', '2025-07-08 04:06:56'),
(12, '7', '10.117.242.21', '2025-07-08 07:19:33', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-08 04:19:33', '2025-07-08 04:19:33'),
(13, '7', '10.117.242.21', '2025-07-08 07:19:56', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-08 04:19:56', '2025-07-08 04:19:56'),
(14, '5', '10.117.242.21', '2025-07-08 08:07:12', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 4, '2025-07-08 05:07:12', '2025-07-08 05:07:12'),
(15, '5', '10.117.242.21', '2025-07-09 06:24:46', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 4, '2025-07-09 03:24:46', '2025-07-09 03:24:46'),
(16, '5', '10.117.242.21', '2025-07-09 06:38:59', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 4, '2025-07-09 03:38:59', '2025-07-09 03:38:59'),
(17, '4', '10.117.242.152', '2025-07-10 13:48:13', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-10 10:48:13', '2025-07-10 10:48:13'),
(18, '3', '10.117.242.152', '2025-07-10 13:50:46', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 1, '2025-07-10 10:50:46', '2025-07-10 10:50:46'),
(19, '4', '10.117.242.152', '2025-07-10 21:52:37', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-10 18:52:37', '2025-07-10 18:52:37'),
(20, '3', '10.117.242.152', '2025-07-13 00:51:48', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 1, '2025-07-12 21:51:48', '2025-07-12 21:51:48'),
(21, '5', '10.117.242.21', '2025-07-17 07:45:31', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 4, '2025-07-17 04:45:31', '2025-07-17 04:45:31'),
(22, '4', '10.117.242.152', '2025-07-21 13:10:42', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-21 10:10:42', '2025-07-21 10:10:42'),
(23, '4', '10.117.242.152', '2025-07-21 13:15:14', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-21 10:15:14', '2025-07-21 10:15:14'),
(24, '4', '10.117.242.152', '2025-07-23 18:19:45', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-23 15:19:45', '2025-07-23 15:19:45'),
(25, '41', '10.131.242.208', '2025-07-27 12:49:56', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-27 09:49:56', '2025-07-27 09:49:56'),
(26, '4', '10.117.242.152', '2025-07-27 13:06:02', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-27 10:06:02', '2025-07-27 10:06:02'),
(27, '4', '212.57.212.113', '2025-07-28 14:54:36', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-28 11:54:36', '2025-07-28 11:54:36'),
(28, '4', '212.57.212.113', '2025-07-28 19:28:15', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-28 16:28:15', '2025-07-28 16:28:15'),
(29, '4', '212.57.212.113', '2025-07-28 19:30:56', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-28 16:30:56', '2025-07-28 16:30:56'),
(30, '4', '212.57.212.113', '2025-07-28 22:19:12', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-28 19:19:12', '2025-07-28 19:19:12'),
(31, '4', '212.57.212.113', '2025-07-28 22:25:14', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-28 19:25:14', '2025-07-28 19:25:14'),
(32, '4', '212.57.212.113', '2025-07-28 22:35:29', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-28 19:35:29', '2025-07-28 19:35:29'),
(33, '4', '212.57.212.113', '2025-07-28 22:53:40', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-07-28 19:53:40', '2025-07-28 19:53:40'),
(34, '42', '212.57.212.113', '2025-08-06 10:49:05', '{\"browser_name\":\"Edge\",\"os_name\":\"Windows\",\"browser_language\":\"ar\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-08-06 07:49:05', '2025-08-06 07:49:05'),
(35, '4', '212.57.212.113', '2025-08-06 22:28:56', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-08-06 19:28:56', '2025-08-06 19:28:56'),
(36, '4', '212.57.212.113', '2025-08-07 21:34:53', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-08-07 18:34:53', '2025-08-07 18:34:53'),
(37, '4', '212.57.212.113', '2025-08-07 21:35:10', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-08-07 18:35:10', '2025-08-07 18:35:10'),
(38, '4', '212.57.212.113', '2025-08-07 21:35:48', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-08-07 18:35:48', '2025-08-07 18:35:48'),
(39, '4', '212.57.212.113', '2025-08-07 21:37:29', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-08-07 18:37:29', '2025-08-07 18:37:29'),
(40, '4', '212.57.212.113', '2025-08-09 12:56:18', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-08-09 09:56:18', '2025-08-09 09:56:18'),
(41, '4', '10.117.242.152', '2025-08-12 16:39:14', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-08-12 13:39:14', '2025-08-12 13:39:14'),
(42, '4', '10.117.242.152', '2025-08-14 06:58:18', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-08-14 03:58:18', '2025-08-14 03:58:18'),
(43, '4', '10.117.242.152', '2025-08-14 22:33:53', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-08-14 19:33:53', '2025-08-14 19:33:53'),
(44, '4', '10.117.242.152', '2025-08-16 00:18:40', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-08-15 21:18:40', '2025-08-15 21:18:40'),
(45, '4', '212.57.212.113', '2025-08-17 10:11:55', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-08-17 07:11:55', '2025-08-17 07:11:55'),
(46, '4', '212.57.212.113', '2025-08-18 08:51:19', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-08-18 05:51:19', '2025-08-18 05:51:19'),
(47, '5', '212.57.212.113', '2025-08-18 10:08:43', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"ourcrm.ksu.edu.sa\",\"referrer_path\":\"\\/\"}', 'User', 4, '2025-08-18 07:08:43', '2025-08-18 07:08:43'),
(48, '1', '127.0.0.1', '2025-10-16 19:31:07', '{\"status\":\"fail\",\"message\":\"reserved range\",\"query\":\"127.0.0.1\",\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-10-16 16:31:07', '2025-10-16 16:31:07'),
(49, '2', '127.0.0.1', '2025-10-16 19:32:51', '{\"status\":\"fail\",\"message\":\"reserved range\",\"query\":\"127.0.0.1\",\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 1, '2025-10-16 16:32:51', '2025-10-16 16:32:51'),
(50, '2', '127.0.0.1', '2025-10-16 20:03:30', '{\"status\":\"fail\",\"message\":\"reserved range\",\"query\":\"127.0.0.1\",\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 1, '2025-10-16 17:03:30', '2025-10-16 17:03:30'),
(51, '1', '127.0.0.1', '2025-10-16 20:04:15', '{\"status\":\"fail\",\"message\":\"reserved range\",\"query\":\"127.0.0.1\",\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-10-16 17:04:15', '2025-10-16 17:04:15'),
(52, '1', '127.0.0.1', '2025-10-22 18:56:30', '{\"status\":\"fail\",\"message\":\"reserved range\",\"query\":\"127.0.0.1\",\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-10-22 15:56:30', '2025-10-22 15:56:30'),
(53, '1', '127.0.0.1', '2025-10-25 11:13:03', '{\"status\":\"fail\",\"message\":\"reserved range\",\"query\":\"127.0.0.1\",\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-10-25 08:13:03', '2025-10-25 08:13:03'),
(54, '2', '127.0.0.1', '2025-10-25 11:15:17', '{\"status\":\"fail\",\"message\":\"reserved range\",\"query\":\"127.0.0.1\",\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 1, '2025-10-25 08:15:17', '2025-10-25 08:15:17'),
(55, '1', '127.0.0.1', '2025-10-26 10:13:15', '{\"status\":\"fail\",\"message\":\"reserved range\",\"query\":\"127.0.0.1\",\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-10-26 07:13:15', '2025-10-26 07:13:15'),
(56, '1', '127.0.0.1', '2025-11-03 19:37:53', '{\"status\":\"fail\",\"message\":\"reserved range\",\"query\":\"127.0.0.1\",\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-11-03 17:37:53', '2025-11-03 17:37:53'),
(57, '1', '127.0.0.1', '2025-11-04 17:48:31', '{\"status\":\"fail\",\"message\":\"reserved range\",\"query\":\"127.0.0.1\",\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-11-04 15:48:31', '2025-11-04 15:48:31'),
(58, '1', '127.0.0.1', '2025-11-08 18:26:02', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-11-08 16:26:02', '2025-11-08 16:26:02'),
(59, '2', '127.0.0.1', '2025-11-08 18:40:04', '{\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 1, '2025-11-08 16:40:04', '2025-11-08 16:40:04'),
(60, '1', '127.0.0.1', '2025-11-09 18:21:57', '{\"status\":\"fail\",\"message\":\"reserved range\",\"query\":\"127.0.0.1\",\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-11-09 16:21:57', '2025-11-09 16:21:57'),
(61, '2', '127.0.0.1', '2025-11-09 21:48:08', '{\"status\":\"fail\",\"message\":\"reserved range\",\"query\":\"127.0.0.1\",\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 1, '2025-11-09 19:48:08', '2025-11-09 19:48:08'),
(62, '1', '127.0.0.1', '2025-11-16 12:42:47', '{\"status\":\"fail\",\"message\":\"reserved range\",\"query\":\"127.0.0.1\",\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-11-16 10:42:47', '2025-11-16 10:42:47'),
(63, '1', '127.0.0.1', '2025-11-24 13:13:49', '{\"status\":\"fail\",\"message\":\"reserved range\",\"query\":\"127.0.0.1\",\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-11-24 11:13:49', '2025-11-24 11:13:49'),
(64, '1', '127.0.0.1', '2025-12-03 18:06:27', '{\"status\":\"fail\",\"message\":\"reserved range\",\"query\":\"127.0.0.1\",\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-12-03 16:06:27', '2025-12-03 16:06:27'),
(65, '1', '127.0.0.1', '2025-12-14 17:09:17', '{\"status\":\"fail\",\"message\":\"reserved range\",\"query\":\"127.0.0.1\",\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-12-14 15:09:17', '2025-12-14 15:09:17'),
(66, '1', '127.0.0.1', '2025-12-15 15:36:54', '{\"status\":\"fail\",\"message\":\"reserved range\",\"query\":\"127.0.0.1\",\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-12-15 13:36:54', '2025-12-15 13:36:54'),
(67, '1', '127.0.0.1', '2025-12-22 23:28:20', '{\"status\":\"fail\",\"message\":\"reserved range\",\"query\":\"127.0.0.1\",\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-12-22 21:28:20', '2025-12-22 21:28:20'),
(68, '1', '127.0.0.1', '2025-12-24 10:59:17', '{\"status\":\"fail\",\"message\":\"reserved range\",\"query\":\"127.0.0.1\",\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-12-24 08:59:17', '2025-12-24 08:59:17'),
(69, '1', '127.0.0.1', '2025-12-30 11:58:43', '{\"status\":\"fail\",\"message\":\"reserved range\",\"query\":\"127.0.0.1\",\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-12-30 09:58:43', '2025-12-30 09:58:43'),
(70, '1', '127.0.0.1', '2025-12-31 17:16:42', '{\"status\":\"fail\",\"message\":\"reserved range\",\"query\":\"127.0.0.1\",\"browser_name\":\"Chrome\",\"os_name\":\"Windows\",\"browser_language\":\"en\",\"device_type\":\"desktop\",\"referrer_host\":\"127.0.0.1\",\"referrer_path\":\"\\/\"}', 'User', 0, '2025-12-31 15:16:42', '2025-12-31 15:16:42');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` bigint UNSIGNED NOT NULL,
  `from` bigint NOT NULL,
  `to` bigint NOT NULL,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_read` tinyint NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_04_13_122456_create_notifications_table', 1),
(4, '2019_04_13_124848_create_permission_tables', 1),
(5, '2019_06_29_071130_create_tickets_table', 1),
(6, '2019_07_01_043311_create_category_table', 1),
(7, '2019_07_02_043628_create_conversion_table', 1),
(8, '2019_10_14_100826_create_faqs_table', 1),
(9, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(10, '2019_12_25_042118_create_messages_table', 1),
(11, '2019_12_30_043939_create_floating_chat_users_table', 1),
(12, '2019_12_30_043950_create_floating_chat_messages_table', 1),
(13, '2021_02_23_062335_create_custom_fields_table', 1),
(14, '2021_02_24_024217_create_custom_field_values_table', 1),
(15, '2022_02_14_090622_create_knowledge_table', 1),
(16, '2022_02_14_101540_create_knowledge_base_category_table', 1),
(17, '2022_04_13_045154_create_settings_table', 1),
(18, '2022_08_05_033142_create_email_template_langs', 1),
(19, '2022_08_05_033151_create_user_email_templates', 1),
(20, '2022_08_05_033235_create_email_templates_table', 1),
(21, '2023_05_17_032508_create_user_categories_table', 1),
(22, '2023_05_17_070527_create_priorities_table', 1),
(23, '2023_05_22_123825_create_webhooks_table', 1),
(24, '2023_06_08_030228_create_notification_templates_table', 1),
(25, '2023_06_08_030250_create_notification_template_langs_table', 1),
(26, '2023_06_09_085032_create_template_table', 1),
(27, '2023_06_29_045618_create_languages_table', 1),
(28, '2023_07_21_041247_create_login_details_table', 1),
(29, '2024_02_09_045159_add_is_enable_login_to_users_table', 1),
(30, '2024_02_09_045831_update_users_table', 1),
(31, '2024_03_08_100213_add_expires_at_to_personal_access_tokens_table', 1),
(32, '2024_11_11_061407_create_sub_categories_table', 1),
(33, '2024_11_12_034345_drop_user_categories_table', 1),
(34, '2024_11_13_024900_add_category_id_and_subcategory_id_to_users_table', 1),
(35, '2024_11_13_041610_add_subcategory_to_tickets_table', 1),
(36, '2025_04_04_150145_add_role_to_users_table', 1),
(37, '2025_04_09_185229_add_type_to_users_table', 1),
(38, '2025_05_01_170419_create_sessions_table', 1),
(39, '2025_11_08_191913_add_review_to_tickets_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` int UNSIGNED NOT NULL,
  `model_type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` int UNSIGNED NOT NULL,
  `model_type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1),
(2, 'App\\Models\\User', 2),
(2, 'App\\Models\\User', 3),
(1, 'App\\Models\\User', 4),
(1, 'App\\Models\\User', 5),
(3, 'App\\Models\\User', 6),
(3, 'App\\Models\\User', 8),
(3, 'App\\Models\\User', 9),
(3, 'App\\Models\\User', 10),
(3, 'App\\Models\\User', 11),
(3, 'App\\Models\\User', 12),
(3, 'App\\Models\\User', 13),
(3, 'App\\Models\\User', 14),
(3, 'App\\Models\\User', 15),
(3, 'App\\Models\\User', 16),
(3, 'App\\Models\\User', 17),
(3, 'App\\Models\\User', 18),
(3, 'App\\Models\\User', 19),
(3, 'App\\Models\\User', 20),
(3, 'App\\Models\\User', 21),
(3, 'App\\Models\\User', 22),
(3, 'App\\Models\\User', 23),
(3, 'App\\Models\\User', 24),
(3, 'App\\Models\\User', 25),
(3, 'App\\Models\\User', 26),
(3, 'App\\Models\\User', 27),
(3, 'App\\Models\\User', 28),
(3, 'App\\Models\\User', 29),
(3, 'App\\Models\\User', 30),
(3, 'App\\Models\\User', 31),
(3, 'App\\Models\\User', 32),
(3, 'App\\Models\\User', 33),
(3, 'App\\Models\\User', 34),
(3, 'App\\Models\\User', 35),
(3, 'App\\Models\\User', 36),
(3, 'App\\Models\\User', 37),
(3, 'App\\Models\\User', 38),
(3, 'App\\Models\\User', 40),
(2, 'App\\Models\\User', 41),
(4, 'App\\Models\\User', 42);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_id` bigint UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notification_templates`
--

CREATE TABLE `notification_templates` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notification_templates`
--

INSERT INTO `notification_templates` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'New User', 'new_user', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(2, 'New Ticket', 'new_ticket', '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(3, 'New Ticket Reply', 'new_ticket_reply', '2025-07-07 15:33:43', '2025-07-07 15:33:43');

-- --------------------------------------------------------

--
-- Table structure for table `notification_template_langs`
--

CREATE TABLE `notification_template_langs` (
  `id` bigint UNSIGNED NOT NULL,
  `parent_id` int NOT NULL,
  `lang` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `variables` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notification_template_langs`
--

INSERT INTO `notification_template_langs` (`id`, `parent_id`, `lang`, `content`, `variables`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 1, 'ar', 'تم تكوين مستخدم جديد بواسطة {user_name}', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(2, 1, 'da', 'Ny bruger oprettet af {bruger_navn}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(3, 1, 'de', 'Neuer Benutzer erstellt von {Benutzername}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(4, 1, 'en', 'New User created by {user_name}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(5, 1, 'es', 'Nueva usuario creada por {nombre_usuario}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(6, 1, 'fr', 'Nouvel utilisateur créé par {Nom_utilisateur}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(7, 1, 'it', 'Nuovo utente creato da {user_name}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(8, 1, 'ja', 'によって作成された新しいユーザー{ユーザー名}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(9, 1, 'nl', 'Nieuwe gebruiker gemaakt door {gebruikersnaam}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(10, 1, 'pl', 'Nowy użytkownik utworzony przez {nazwa_użytkownika}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(11, 1, 'ru', 'Новый пользователь, созданный {имя_пользователя}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(12, 1, 'pt', 'Novo Usuário criado por {user_name}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(13, 1, 'tr', '{ user_name } tarafından oluşturulan yeni Kullanıcı.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(14, 1, 'he', ' משתמש חדש נוצר על ידי {user_name}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(15, 1, 'zh', '由 {user_name} 创建的新用户。', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(16, 1, 'pt-br', 'Novo usuário criado por {user_name}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(17, 2, 'ar', 'تم تكوين بطاقة طلب الخدمة الجديدة من {user_name}', '{\n                    \"App Name\": \"app_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(18, 2, 'da', 'Ny ticket oprettet af {bruger_navn}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(19, 2, 'de', 'Neues Ticket erstellt von {Benutzername}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(20, 2, 'en', 'New Ticket created by {user_name}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(21, 2, 'es', 'Nuevo ticket creado por {nombre_usuario}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(22, 2, 'fr', 'Nouveau ticket créé par {Nom_utilisateur}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(23, 2, 'it', 'Nuovo Ticket creato da {user_name}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(24, 2, 'ja', '新規チケットの作成者.', '{\n                    \"App Name\": \"app_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(25, 2, 'nl', 'Nieuwe ticket gemaakt door {gebruikersnaam}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(26, 2, 'pl', 'Nowy bilet utworzony przez {nazwa_użytkownika}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(27, 2, 'ru', 'Новый паспорт, созданный {имя_пользователя}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(28, 2, 'pt', 'Novo Bilhete criado por {user_name}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(29, 2, 'tr', '{ user_name } tarafından oluşturulan Yeni Bildirim Formu.', '{\n                    \"App Name\": \"app_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(30, 2, 'he', 'כרטיס חדש שנוצר על-ידי {user_name}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(31, 2, 'zh', '{user_name} 创建的新凭单。', '{\n                    \"App Name\": \"app_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(32, 2, 'pt-br', 'Novo Ticket criado por {user_name}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Email\": \"email\",\n                    \"Password\": \"password\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(33, 3, 'ar', 'رد بطاقة طلب خدمة جديد بواسطة {user_name}', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Ticket Description\" : \"ticket_description\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(34, 3, 'da', 'Ny ticket-svar af {bruger_navn}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Ticket Description\" : \"ticket_description\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(35, 3, 'de', 'Neue Ticket-Antwort von {Benutzername}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Ticket Description\" : \"ticket_description\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(36, 3, 'en', 'New Ticket Reply by {user_name}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Ticket Description\" : \"ticket_description\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(37, 3, 'es', 'Nuevo ticket de respuesta {nombre_usuario}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Ticket Description\" : \"ticket_description\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(38, 3, 'fr', 'Nouvelle réponse au ticket par {Nom_utilisateur}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Ticket Description\" : \"ticket_description\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(39, 3, 'it', 'Nuovo Ticket Reply by {user_name}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Ticket Description\" : \"ticket_description\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(40, 3, 'ja', '新規チケットの返信.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Ticket Description\" : \"ticket_description\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(41, 3, 'nl', 'Nieuw ticket antwoord door {gebruikersnaam}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Ticket Description\" : \"ticket_description\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(42, 3, 'pl', 'Nowa odpowiedź zgłoszenia przez {nazwa_użytkownika}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Ticket Description\" : \"ticket_description\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(43, 3, 'ru', 'Новый ответ на паспорт по {имя_пользователя}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Ticket Description\" : \"ticket_description\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(44, 3, 'pt', 'Nova Resposta de Bilhete por {user_name}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Ticket Description\" : \"ticket_description\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(45, 3, 'tr', 'Yeni Bildirim Formu Yanıtı { user_name } tarafından yanıtlıyor.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Ticket Description\" : \"ticket_description\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(46, 3, 'pt-br', 'Novo ticket Responder por {user_name}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Ticket Description\" : \"ticket_description\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(47, 3, 'zh', '{ user_name}的新凭单回复。', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Ticket Description\" : \"ticket_description\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(48, 3, 'he', 'תשובה כרטיס חדשה על ידי {user_name}.', '{\n                    \"App Name\": \"app_name\",\n                    \"Company Name\": \"user_name\",\n                    \"Ticket Name\": \"ticket_name\",\n                    \"Ticket Id\" : \"ticket_id\",\n                    \"Ticket Description\" : \"ticket_description\"\n                    }', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'manage-users', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(2, 'view-users', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(3, 'create-users', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(4, 'edit-users', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(5, 'delete-users', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(6, 'lang-manage', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(7, 'lang-change', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(8, 'lang-create', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(9, 'manage-tickets', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(10, 'create-tickets', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(11, 'edit-tickets', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(12, 'delete-tickets', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(13, 'manage-category', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(14, 'create-category', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(15, 'edit-category', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(16, 'delete-category', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(17, 'reply-tickets', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(18, 'manage-setting', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(19, 'manage-faq', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(20, 'create-faq', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(21, 'edit-faq', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(22, 'delete-faq', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(23, 'manage-knowledge', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(24, 'create-knowledge', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(25, 'edit-knowledge', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(26, 'delete-knowledge', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(27, 'manage-knowledgecategory', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(28, 'create-knowledgecategory', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(29, 'edit-knowledgecategory', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(30, 'delete-knowledgecategory', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(31, 'manage-company-settings', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `priorities`
--

CREATE TABLE `priorities` (
  `id` bigint UNSIGNED NOT NULL,
  `title_ar` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `priorities`
--

INSERT INTO `priorities` (`id`, `title_ar`, `title_en`, `color`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'عالية', 'high', '#ec0909', 1, '2025-07-07 18:17:33', '2025-07-07 18:17:33'),
(2, 'متوسطة', 'Medium', '#e5d848', 1, '2025-07-07 18:18:15', '2025-07-07 18:20:41'),
(3, 'منخفضة', 'Low', '#328208', 1, '2025-07-07 18:18:58', '2025-07-07 18:19:46');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(2, 'User', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(3, 'Dean', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42'),
(4, 'Supervisor', 'web', '2025-07-07 15:33:42', '2025-07-07 15:33:42');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` int UNSIGNED NOT NULL,
  `role_id` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1),
(22, 1),
(23, 1),
(24, 1),
(25, 1),
(26, 1),
(27, 1),
(28, 1),
(29, 1),
(30, 1),
(31, 1),
(2, 2),
(7, 2),
(9, 2),
(10, 2),
(11, 2),
(17, 2),
(2, 3),
(7, 3),
(9, 3),
(10, 3),
(11, 3),
(17, 3),
(6, 4),
(7, 4),
(8, 4),
(9, 4),
(10, 4),
(11, 4),
(12, 4),
(17, 4),
(18, 4),
(19, 4),
(20, 4),
(21, 4),
(22, 4),
(23, 4),
(24, 4),
(25, 4),
(26, 4),
(27, 4),
(28, 4),
(29, 4),
(30, 4);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('4tiStjQjwjnPg0mTnWTLsAzef6kYAMzIqcBAkc4R', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiSU03RTE0VEVEc3VkQ0N5OTZPZWVYUnpLZjEzS25ydVZLSGpueUU4dSI7czoyMjoiUEhQREVCVUdCQVJfU1RBQ0tfREFUQSI7YTowOnt9czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1763299262),
('g46wdtJRuiGXdEhNd9IBeAFj8SvcO7YiCWWvAQWp', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiSkdZc2t3TTRrWmxFWVdFZjdROWVSRkxWdTZodlN0dFpweVowYmIyViI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDI6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hZG1pbi90aWNrZXQvNjMvZWRpdCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7czoxNzoicGFzc3dvcmRfaGFzaF93ZWIiO3M6NjA6IiQyeSQxMCRYR08xOXpzVXMuelNRTjhOZ2ZiWWhlWEhwcmhONFJYcXd4WTBObGNoRFhVY3NJdDhiOGRRSyI7fQ==', 1765813087),
('gcmgXGnvbKbSo4W7csqwmdvA2VgPHt0agLJfGpGX', 1, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36', 'YTo3OntzOjY6Il90b2tlbiI7czo0MDoiQWJqOEtENFNYd3ltempmU095TlZYVDB0YkQ5dVdqdEVLZGlzUlgxRSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hZG1pbi9kYXNoYm9hcmQiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO3M6MTc6InBhc3N3b3JkX2hhc2hfd2ViIjtzOjYwOiIkMnkkMTAkWEdPMTl6c1VzLnpTUU44TmdmYlloZVhIcHJoTjRSWHF3eFkwTmxjaERYVWNzSXQ4YjhkUUsiO3M6NjoibG9jYWxlIjtzOjI6ImFyIjtzOjIyOiJQSFBERUJVR0JBUl9TVEFDS19EQVRBIjthOjA6e319', 1767201517),
('Hvgim3CzOB3HJBlCZy1f4P4hErzAl0205kSUDLnL', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', 'YTo3OntzOjY6Il90b2tlbiI7czo0MDoiVWFVZGFKQ0RXaXRicDJHb0dxSVJGZnNaZlhxRGlDdk5ucTFaemRLTSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzI6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hZG1pbi9jaGF0Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTtzOjE3OiJwYXNzd29yZF9oYXNoX3dlYiI7czo2MDoiJDJ5JDEwJFhHTzE5enNVcy56U1FOOE5nZmJZaGVYSHByaE40Ulhxd3hZME5sY2hEWFVjc0l0OGI4ZFFLIjtzOjY6ImxvY2FsZSI7czoyOiJhciI7czoyMjoiUEhQREVCVUdCQVJfU1RBQ0tfREFUQSI7YTowOnt9fQ==', 1763299740),
('iVpX8VEWOCYmd0Chn1xE2Sz3CbkdgoyOF0ErrMBV', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoicTNKbjRJT0V5V2pXem1VU1lPVWtnVFptdW9lekp0TGhaTkh1ZXo0USI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NjoibG9jYWxlIjtzOjI6ImFyIjt9', 1766667007),
('JF30lJnlWflkirkHkxwShwE3DHeolCZURKVry8WP', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoiczdLdldNN0lkWFliaXJMT2ZOTldwdHVBZjRUYUJLcUZEcUJ5MjNHRiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hZG1pbi9kYXNoYm9hcmQiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO3M6MTc6InBhc3N3b3JkX2hhc2hfd2ViIjtzOjYwOiIkMnkkMTAkWEdPMTl6c1VzLnpTUU44TmdmYlloZVhIcHJoTjRSWHF3eFkwTmxjaERYVWNzSXQ4YjhkUUsiO3M6MjI6IlBIUERFQlVHQkFSX1NUQUNLX0RBVEEiO2E6MDp7fX0=', 1763990295),
('MuQ9dsgDK31qVhKc4G4GtnYXZwR6gbMMFsdzTkpX', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36', 'YTo3OntzOjY6Il90b2tlbiI7czo0MDoicU42WTVJQzJwcEVQWks2ajRNVjBTdTNrMU1xYjByZXZNd1BrWjFSWSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hZG1pbi9kYXNoYm9hcmQiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO3M6MTc6InBhc3N3b3JkX2hhc2hfd2ViIjtzOjYwOiIkMnkkMTAkWEdPMTl6c1VzLnpTUU44TmdmYlloZVhIcHJoTjRSWHF3eFkwTmxjaERYVWNzSXQ4YjhkUUsiO3M6NjoibG9jYWxlIjtzOjI6ImFyIjtzOjIyOiJQSFBERUJVR0JBUl9TVEFDS19EQVRBIjthOjA6e319', 1767097550),
('NtGI1jSJMo6oRh1gv65aPTEvAXEcN6elST5BeYg2', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoialBMNVJFMGw0b1lQaHJSWlBaSHNrSWlNVlZxQkhzSFVETDN4WVBBQSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjU6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9uZXciO31zOjY6ImxvY2FsZSI7czoyOiJhciI7czoyMjoiUEhQREVCVUdCQVJfU1RBQ0tfREFUQSI7YTowOnt9fQ==', 1766582912),
('uvSSFn8BWDVJa94u54acwefukKiG5jPHB4fCoqz8', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoidDMxQ0lEZldFR2hWNWNINktVc1Z5YVJadVpJSFdxdE14ckY2VHBtViI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDI6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hZG1pbi90aWNrZXQvNjMvZWRpdCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7czoxNzoicGFzc3dvcmRfaGFzaF93ZWIiO3M6NjA6IiQyeSQxMCRYR08xOXpzVXMuelNRTjhOZ2ZiWWhlWEhwcmhONFJYcXd4WTBObGNoRFhVY3NJdDhiOGRRSyI7fQ==', 1765732387),
('XjWURfVA4fyxmUAZSMJYO5b8CiQA8Jk1pQQIWruC', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', 'YTo3OntzOjY6Il90b2tlbiI7czo0MDoiNzBDcEhrVWpTS2pZV0g3TnVzS1ZIMTJJbmpYckk0S0gwUGZDeFRpYSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Nzc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hZG1pbi90aWNrZXQ/Y2F0ZWdvcnk9MiZwcmlvcml0eT0xJnN0YXR1cz1JbiUyMFByb2dyZXNzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTtzOjE3OiJwYXNzd29yZF9oYXNoX3dlYiI7czo2MDoiJDJ5JDEwJFhHTzE5enNVcy56U1FOOE5nZmJZaGVYSHByaE40Ulhxd3hZME5sY2hEWFVjc0l0OGI4ZFFLIjtzOjY6ImxvY2FsZSI7czoyOiJhciI7czoyMjoiUEhQREVCVUdCQVJfU1RBQ0tfREFUQSI7YTowOnt9fQ==', 1764786828),
('YaqEOSpsQw0PnY50XGOhmmFUTkobw9pL8jlrPYFm', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiT0p0TEpBbHBUY01nQzlWQ1lFeElLSDRyNjJGUzFPZmdQMURCVElySCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hZG1pbi9kYXNoYm9hcmQiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO3M6MTc6InBhc3N3b3JkX2hhc2hfd2ViIjtzOjYwOiIkMnkkMTAkWEdPMTl6c1VzLnpTUU44TmdmYlloZVhIcHJoTjRSWHF3eFkwTmxjaERYVWNzSXQ4YjhkUUsiO30=', 1766446146);

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `name`, `value`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'local_storage_validation', 'jpeg,jpg,pdf,png', 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(2, 'wasabi_storage_validation', 'jpg,jpeg,png,xlsx,xls,csv,pdf', 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(3, 's3_storage_validation', 'jpg,jpeg,png,xlsx,xls,csv,pdf', 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(4, 'local_storage_max_upload_size', '2048000', 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(5, 'wasabi_max_upload_size', '2048000', 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(6, 's3_max_upload_size', '2048000', 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(7, 'storage_setting', 'local', 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(8, 'DEFAULT_LANG', 'en', 1, '2025-07-07 15:37:06', '2025-11-03 18:37:06'),
(9, 'SITE_RTL', 'off', 1, '2025-07-07 15:37:06', '2025-11-03 18:37:06'),
(10, 'FOOTER_TEXT', '© 2025 OURCRM', 1, '2025-07-07 15:37:06', '2025-11-03 18:37:06'),
(11, 'FAQ', 'on', 1, '2025-07-07 15:37:06', '2025-11-03 18:37:06'),
(12, 'Knowlwdge_Base', 'on', 1, '2025-07-07 15:37:06', '2025-11-03 18:37:06'),
(13, 'color', 'theme-5', 1, '2025-07-07 15:37:06', '2025-11-03 18:37:06'),
(14, 'color_flag', 'false', 1, '2025-07-07 15:37:06', '2025-11-03 18:37:06'),
(15, 'cust_theme_bg', 'on', 1, '2025-07-07 15:37:06', '2025-11-03 18:37:06'),
(16, 'cust_darklayout', 'off', 1, '2025-07-07 15:37:06', '2025-11-03 18:37:06'),
(17, 'logo', 'logos/logos/logo-dark.png', 1, '2025-07-07 15:37:48', '2025-07-07 15:37:48'),
(18, 'white_logo', 'logos/logos/logo-light.png', 1, '2025-07-07 15:37:48', '2025-07-07 15:37:48'),
(28, 'mail_driver', 'smtp.ksu.edu.sa', 1, '2025-07-07 15:45:13', '2025-07-07 15:45:13'),
(29, 'mail_host', 'smtp.ksu.edu.sa', 1, '2025-07-07 15:45:13', '2025-07-07 15:45:13'),
(30, 'mail_port', '587', 1, '2025-07-07 15:45:13', '2025-07-07 15:45:13'),
(31, 'mail_username', 'ourksup@ksu.edu.sa', 1, '2025-07-07 15:45:13', '2025-07-07 15:45:13'),
(32, 'mail_password', 'Andalali@Admin909808!@#', 1, '2025-07-07 15:45:13', '2025-07-07 15:45:13'),
(33, 'mail_encryption', 'TLS', 1, '2025-07-07 15:45:13', '2025-07-07 15:45:13'),
(34, 'mail_from_address', 'ourksup@ksu.edu.sa', 1, '2025-07-07 15:45:13', '2025-07-07 15:45:13'),
(35, 'mail_from_name', 'ourcrm', 1, '2025-07-07 15:45:13', '2025-07-07 15:45:13'),
(39, 'meta_image', 'meta_image.png', 1, '2025-07-07 18:42:53', '2025-07-07 18:42:53'),
(40, 'meta_keywords', 'خدمات المستفيدين مكتب إدارة التحول', 1, '2025-07-07 18:42:53', '2025-07-07 18:42:53'),
(41, 'meta_description', 'خدمات المستفيدين مكتب إدارة التحول', 1, '2025-07-07 18:42:53', '2025-07-07 18:42:53'),
(42, 'DEFAULT_LANG', 'en', 4, '2025-07-07 19:47:44', '2025-09-25 12:22:47'),
(43, 'SITE_RTL', 'on', 4, '2025-07-07 19:47:44', '2025-09-25 12:22:47'),
(44, 'FOOTER_TEXT', '© 2025 OURCRM', 4, '2025-07-07 19:47:44', '2025-09-25 12:22:47'),
(45, 'FAQ', 'on', 4, '2025-07-07 19:47:44', '2025-09-25 12:22:47'),
(46, 'Knowlwdge_Base', 'on', 4, '2025-07-07 19:47:44', '2025-09-25 12:22:47'),
(47, 'color', 'theme-6', 4, '2025-07-07 19:47:44', '2025-09-25 12:22:47'),
(48, 'color_flag', 'false', 4, '2025-07-07 19:47:44', '2025-09-25 12:22:47'),
(49, 'cust_theme_bg', 'on', 4, '2025-07-07 19:47:44', '2025-09-25 12:22:47'),
(50, 'cust_darklayout', 'off', 4, '2025-07-07 19:47:44', '2025-09-25 12:22:47'),
(60, 'DEFAULT_LANG', 'en', 5, '2025-07-08 03:15:09', '2025-07-08 03:15:09'),
(61, 'SITE_RTL', 'on', 5, '2025-07-08 03:15:09', '2025-07-08 03:15:09'),
(62, 'FOOTER_TEXT', '© 2025 OURCRM', 5, '2025-07-08 03:15:09', '2025-07-08 03:15:09'),
(63, 'FAQ', 'on', 5, '2025-07-08 03:15:09', '2025-07-08 03:15:09'),
(64, 'Knowlwdge_Base', 'on', 5, '2025-07-08 03:15:09', '2025-07-08 03:15:09'),
(65, 'color', 'theme-6', 5, '2025-07-08 03:15:09', '2025-07-08 03:15:09'),
(66, 'color_flag', 'false', 5, '2025-07-08 03:15:09', '2025-07-08 03:15:09'),
(67, 'cust_theme_bg', 'on', 5, '2025-07-08 03:15:09', '2025-07-08 03:15:09'),
(68, 'cust_darklayout', 'off', 5, '2025-07-08 03:15:09', '2025-07-08 03:15:09'),
(69, 'white_logo', 'logos/logos/logo-light.png', 4, '2025-07-10 10:48:41', '2025-07-10 10:48:41'),
(79, 'logo', 'logos/logos/logo-dark.png', 4, '2025-07-10 10:48:56', '2025-07-10 10:48:56'),
(89, 'storage_setting', 'local', 4, NULL, NULL),
(90, 'local_storage_validation', 'pdf,jpeg,jpg', 4, NULL, NULL),
(91, 'local_storage_max_upload_size', '2048000', 4, NULL, NULL),
(92, 'meta_image', 'meta_image.png', 4, '2025-07-28 19:48:14', '2025-07-28 19:48:14'),
(93, 'meta_keywords', 'خدمات المستفيدين مكتب إدارة التحول', 4, '2025-07-28 19:48:14', '2025-07-28 19:48:14'),
(94, 'meta_description', 'خدمات المستفيدين مكتب إدارة التحول', 4, '2025-07-28 19:48:14', '2025-07-28 19:48:14'),
(95, 'disable_lang', 'zh,da,es,he,it,ja,nl,pl,pt,ru,tr,pt-br,de,test', 4, NULL, NULL),
(101, 'company_name', 'إدارة مكتب التحول', 4, '2025-08-21 04:38:48', '2025-08-21 04:38:48'),
(102, 'company_address', 'جامعة الملك سعود', 4, '2025-08-21 04:38:48', '2025-08-21 04:38:48'),
(103, 'company_city', 'Al Riyadh الرياض', 4, '2025-08-21 04:38:48', '2025-08-21 04:38:48'),
(104, 'company_state', 'طريق الملك خالد', 4, '2025-08-21 04:38:48', '2025-08-21 04:38:48'),
(105, 'company_zipcode', '00000000', 4, '2025-08-21 04:38:48', '2025-08-21 04:38:48'),
(106, 'company_country', 'المملكة العربية السعودية', 4, '2025-08-21 04:38:48', '2025-08-21 04:38:48'),
(107, 'company_telephone', '+96611-80-64-444', 4, '2025-08-21 04:38:48', '2025-08-21 04:38:48'),
(108, 'timezone', 'Asia/Kuwait', 4, '2025-08-21 04:38:48', '2025-08-21 04:38:48'),
(109, 'app_url', 'https://ourcrm.ksu.edu.sa', 4, '2025-08-21 04:38:48', '2025-08-21 04:38:48'),
(143, 'mail_driver', 'smtp', 4, '2025-09-30 08:44:53', '2025-09-30 08:45:09'),
(144, 'mail_host', 'smtp.ksu.edu.sa', 4, '2025-09-30 08:44:53', '2025-09-30 08:45:09'),
(145, 'mail_port', '587', 4, '2025-09-30 08:44:53', '2025-09-30 08:45:09'),
(146, 'mail_username', 'ourksup@ksu.edu.sa', 4, '2025-09-30 08:44:53', '2025-09-30 08:45:09'),
(147, 'mail_password', 'Andalali@Admin909808!@#', 4, '2025-09-30 08:44:53', '2025-09-30 08:45:09'),
(148, 'mail_encryption', 'tls', 4, '2025-09-30 08:44:53', '2025-09-30 08:45:09'),
(149, 'mail_from_address', 'ourksup@ksu.edu.sa', 4, '2025-09-30 08:44:53', '2025-09-30 08:45:09'),
(150, 'mail_from_name', 'ourcrm', 4, '2025-09-30 08:44:53', '2025-09-30 08:45:09'),
(258, 'DEFAULT_LANG', 'en', 0, '2025-11-03 18:29:02', '2025-11-03 18:29:02'),
(259, 'SITE_RTL', 'off', 0, '2025-11-03 18:29:02', '2025-11-03 18:29:02'),
(260, 'FOOTER_TEXT', '© 2025 OURCRM', 0, '2025-11-03 18:29:02', '2025-11-03 18:29:02'),
(261, 'FAQ', 'on', 0, '2025-11-03 18:29:02', '2025-11-03 18:29:02'),
(262, 'Knowlwdge_Base', 'on', 0, '2025-11-03 18:29:02', '2025-11-03 18:29:02'),
(263, 'color', 'theme-7', 0, '2025-11-03 18:29:02', '2025-11-03 18:29:02'),
(264, 'color_flag', 'false', 0, '2025-11-03 18:29:02', '2025-11-03 18:29:02'),
(265, 'cust_theme_bg', 'on', 0, '2025-11-03 18:29:02', '2025-11-03 18:29:02'),
(266, 'cust_darklayout', 'off', 0, '2025-11-03 18:29:02', '2025-11-03 18:29:02');

-- --------------------------------------------------------

--
-- Table structure for table `sub_categories`
--

CREATE TABLE `sub_categories` (
  `id` bigint UNSIGNED NOT NULL,
  `category_id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_ar` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sub_categories`
--

INSERT INTO `sub_categories` (`id`, `category_id`, `title_ar`, `title_en`, `color`, `created_at`, `updated_at`) VALUES
(1, '1', 'Contact TMO', 'Contact TMO', '#ab29db', '2025-07-07 18:23:21', '2025-07-07 18:33:37'),
(2, '3', 'هاكثون التحول', 'Transformation Hackathon', '#e49b9b', '2025-07-07 18:25:01', '2025-07-07 18:25:01'),
(3, '3', 'سفراء التحول', 'Transformation Ambassadors', '#d0cdcd', '2025-07-07 18:27:12', '2025-07-07 18:29:26'),
(4, '2', 'الاستفسارات', 'Inquiries', '#8b8484', '2025-07-07 18:28:04', '2025-07-07 18:28:04');

-- --------------------------------------------------------

--
-- Table structure for table `template`
--

CREATE TABLE `template` (
  `id` bigint UNSIGNED NOT NULL,
  `template_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `prompt` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `module` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `field_json` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_tone` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `template`
--

INSERT INTO `template` (`id`, `template_name`, `prompt`, `module`, `field_json`, `is_tone`, `created_at`, `updated_at`) VALUES
(1, 'subject', 'generate example of  subject for bug in ecommerce base website support ticket', 'support', '{\"field\":[{\"label\":\"Ticket Description of Bug\",\"placeholder\":\"e.g.Bug Summary\",\"field_type\":\"textarea\",\"field_name\":\"description\"}]}', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(2, 'description', 'generate support ticket description of  subject for ##subject## ', 'support', '{\"field\":[{\"label\":\"Ticket Subject\",\"placeholder\":\"e.g.Error Message Displayed\",\"field_type\":\"textarea\",\"field_name\":\"subject\"}]}', 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(3, 'reply_description', 'generate a short  replay note for support ticket that topic is \'##title##\'. user must be note that \'##description##\'.', 'reply', '{\"field\":[{\"label\":\"Ticket Title\",\"placeholder\":\"Getting some issues while installation products.\",\"field_type\":\"text_box\",\"field_name\":\"title\"},{\"label\":\"Description\",\"placeholder\":\"isuue is in his console account not in our product please follow google console api key creation step\",\"field_type\":\"textarea\",\"field_name\":\"description\"}]}', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(4, 'title', 'IT company\'s web service support ticket system,please  suggested  some  number  of only topic name of Question  that asked by users repeatedlly in web service support relate to ##relate##.', 'faq', '{\"field\":[{\"label\":\"FAQ Description\",\"placeholder\":\"Installation\",\"field_type\":\"text_box\",\"field_name\":\"relate\"}]}', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(5, 'description', 'generate catchy detail user friendly description for this question topic : \'##title##\' please note that description should be usable for support ticket system', 'faq', '{\"field\":[{\"label\":\"FAQ Title\",\"placeholder\":\"Product Information\",\"field_type\":\"text_box\",\"field_name\":\"title\"}]}', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(6, 'title', 'list out category title of Knowledge in support ticket system for customer  the category title relate to the topic of \'##title##\'', 'knowledge_category', '{\"field\":[{\"label\":\"Topic\",\"placeholder\":\"Product Information\",\"field_type\":\"text_box\",\"field_name\":\"title\"}]}', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(7, 'title', 'list out  title of Knowledge base in support ticket system for customer the  title relate to the category of \'##categoty##\'', 'knowledge', '{\"field\":[{\"label\":\"Knowledge Category Title\",\"placeholder\":\"Installation\",\"field_type\":\"text_box\",\"field_name\":\"categoty\"}]}', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(8, 'description', 'generate catchy detail user friendly description for this knowledge base  title : \'##title##\' please note that description should be usable for support ticket system ', 'knowledge', '{\"field\":[{\"label\":\"Title\",\"placeholder\":\" How to Install Our Software\",\"field_type\":\"text_box\",\"field_name\":\"title\"}]}', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(9, 'name', 'list out category  of support  in website support ticket like(##retale##).', 'category', '{\"field\":[{\"label\":\" Description\",\"placeholder\":\"bug,Installation\",\"field_type\":\"text_box\",\"field_name\":\"relate\"}]}', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(10, 'note', 'generate a  note for support ticket that topic is \'##title##\'. in that note include this points \'##description##\'.', 'note', '{\"field\":[{\"label\":\"Ticket Title\",\"placeholder\":\"Getting some issues while installation products.\",\"field_type\":\"text_box\",\"field_name\":\"title\"},{\"label\":\"Description\",\"placeholder\":\"isuue is in his console account not in our product please follow google console api key creation step\",\"field_type\":\"textarea\",\"field_name\":\"description\"}]}', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(11, 'meta_keywords', 'Write SEO meta title for:\n\n ##description## \n\nWebsite name is:\n ##title## \n\nSeed words:\n ##keywords## \n\n', 'seo', '{\"field\":[{\"label\":\"Website Name\",\"placeholder\":\"e.g. Amazon, Google\",\"field_type\":\"text_box\",\"field_name\":\"title\"},{\"label\":\"Website Description\",\"placeholder\":\"e.g. Describe what your website or business do\",\"field_type\":\"textarea\",\"field_name\":\"description\"},{\"label\":\"Keywords\",\"placeholder\":\"e.g.  cloud services, databases\",\"field_type\":\"text_box\",\"field_name\":\"keywords\"}]}', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(12, 'meta_description', 'Write SEO meta description for:\n\n ##description## \n\nWebsite name is:\n ##title## \n\nSeed words:\n ##keywords## \n\n', 'seo', '{\"field\":[{\"label\":\"Website Name\",\"placeholder\":\"e.g. Amazon, Google\",\"field_type\":\"text_box\",\"field_name\":\"title\"},{\"label\":\"Website Description\",\"placeholder\":\"e.g. Describe what your website or business do\",\"field_type\":\"textarea\",\"field_name\":\"description\"},{\"label\":\"Keywords\",\"placeholder\":\"e.g.  cloud services, databases\",\"field_type\":\"text_box\",\"field_name\":\"keywords\"}]}', 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(13, 'cookie_title', 'please suggest me cookie title for this ##description## website which i can use in my website cookie', 'cookie', '{\"field\":[{\"label\":\"Website name or info\",\"placeholder\":\"e.g. example website \",\"field_type\":\"textarea\",\"field_name\":\"title\"}]}', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(14, 'cookie_description', 'please suggest me  Cookie description for this cookie title ##title##  which i can use in my website cookie', 'cookie', '{\"field\":[{\"label\":\"Cookie Title \",\"placeholder\":\"e.g. example website \",\"field_type\":\"text_box\",\"field_name\":\"title\"}]}', 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(15, 'strictly_cookie_title', 'please suggest me only Strictly Cookie Title for this ##description## website which i can use in my website cookie', 'cookie', '{\"field\":[{\"label\":\"Website name or info\",\"placeholder\":\"e.g. example website \",\"field_type\":\"textarea\",\"field_name\":\"title\"}]}', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(16, 'strictly_cookie_description', 'please suggest me Strictly Cookie description for this Strictly cookie title ##title##  which i can use in my website cookie', 'cookie', '{\"field\":[{\"label\":\"Strictly Cookie Title \",\"placeholder\":\"e.g. example website \",\"field_type\":\"text_box\",\"field_name\":\"title\"}]}', 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(17, 'more_information_description', 'I need assistance in crafting compelling content for my ##web_name## website\'s \'Contact Us\' page of my website. The page should provide relevant information to users, encourage them to reach out for inquiries, support, and feedback, and reflect the unique value proposition of my business.', 'cookie', '{\"field\":[{\"label\":\"Websit Name\",\"placeholder\":\"e.g. example website \",\"field_type\":\"text_box\",\"field_name\":\"web_name\"}]}', 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(18, 'content', 'generate email template for ##type##', 'email template', '{\"field\":[{\"label\":\"Email Type\",\"placeholder\":\"e.g. new user,new client\",\"field_type\":\"text_box\",\"field_name\":\"type\"}]}', 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(19, 'content', 'Generate a meeting notification message for an ##topic## meeting. Include the date, time, location, and a brief agenda with three key discussion points.', 'notification template', '{\"field\":[{\"label\":\"Notification Message\",\"placeholder\":\"e.g.brief explanation of the purpose or background of the notification\",\"field_type\":\"textarea\",\"field_name\":\"topic\"}]}', 0, '2025-07-07 15:33:43', '2025-07-07 15:33:43');

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE `tickets` (
  `id` bigint UNSIGNED NOT NULL,
  `ticket_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` int NOT NULL,
  `priority` int NOT NULL,
  `subject` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `review` int DEFAULT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `attachments` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `reslove_at` datetime DEFAULT NULL,
  `note` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `subcategory` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tickets`
--

INSERT INTO `tickets` (`id`, `ticket_id`, `name`, `email`, `category`, `priority`, `subject`, `status`, `review`, `description`, `created_by`, `attachments`, `reslove_at`, `note`, `created_at`, `updated_at`, `subcategory`) VALUES
(10, '1755691341', '', '', 0, 0, '', '', NULL, '', '1', '[]', NULL, NULL, '2025-08-20 09:02:21', '2025-08-20 09:02:21', NULL),
(11, '1755691782', '', '', 0, 0, '', '', NULL, '', '1', '[]', NULL, NULL, '2025-08-20 09:09:42', '2025-08-20 09:09:42', NULL),
(15, '1756926539', 'Talal Mohammad Hakami', 'thakami@KSU.EDU.SA', 1, 2, 'test', 'In Progress', NULL, '<p>testtt</p>', '4', '[]', '2025-09-03 19:09:36', NULL, '2025-09-03 16:08:59', '2025-09-29 08:17:55', '1'),
(16, '1756926632', 'Mohammed Alhadi', 'malhadi@ksu.edu.sa', 2, 2, 'استفسار عن سفراء التحول', 'On Hold', NULL, 'هل التقديم متاح', '5', '[]', NULL, NULL, '2025-09-03 16:10:32', '2025-09-30 14:26:34', '4'),
(17, '1756926785', 'Talal Mohammad Hakami', 'thakami@KSU.EDU.SA', 1, 2, 'test', 'Closed', NULL, '<p>testtt</p>', '4', '[]', '2025-09-03 19:15:00', NULL, '2025-09-03 16:13:05', '2025-09-03 16:15:47', '1'),
(18, '1756927161', '', '', 1, 1, 'الموقع', 'Closed', NULL, '<p>وين موقعكم اي مبنى</p>', '5', '[]', NULL, NULL, '2025-09-03 16:19:21', '2025-09-03 16:23:56', '1'),
(19, '1756927214', '', '', 1, 2, 'tesr', 'Resolved', NULL, '<p>test</p>', '3', '[]', NULL, NULL, '2025-09-03 16:20:14', '2025-09-03 16:22:16', '1'),
(20, '1756927646', 'Our KSU Platform', 'ourksup@ksu.edu.sa', 2, 1, 'test', 'Closed', NULL, '<p>تجربة</p>', '4', '[]', NULL, '<p>test</p>', '2025-09-03 16:27:26', '2025-09-08 01:45:14', '4'),
(22, '1758433035', 'Our KSU Platform', 'ourksup@ksu.edu.sa', 2, 2, 'test22', 'In Progress', NULL, '<p>ddddd</p>', '3', '[]', NULL, NULL, '2025-09-21 02:37:15', '2025-09-23 16:28:31', '4'),
(23, '1758656344', 'demo', 'andalali@gmail.com', 2, 1, 'test', 'New Ticket', NULL, '<p>testtt</p>', '1', '[]', NULL, NULL, '2025-09-23 16:39:04', '2025-09-23 16:39:04', '4'),
(24, '1758813026', 'Our KSU Platform', 'ourksup@ksu.edu.sa', 2, 2, 'test', 'Closed', NULL, '<p>test</p>', '3', '[]', NULL, NULL, '2025-09-25 12:10:26', '2025-09-25 12:11:02', '4'),
(25, '1758815508', '', '', 2, 1, 'test', 'On Hold', NULL, 'test', '3', '[\"arrooow.jpg\"]', NULL, NULL, '2025-09-25 12:51:48', '2025-09-25 12:56:53', '4'),
(26, '1759038084', 'demo', 'andalali@gmail.com', 2, 1, 'testtestt', 'New Ticket', NULL, '<p>testtestt</p>', '1', '[]', NULL, NULL, '2025-09-28 02:41:24', '2025-09-28 02:41:24', '4'),
(27, '1759038181', 'demo', 'andalali@gmail.com', 2, 1, 'testtestt', 'New Ticket', NULL, '<p>testtestt</p>', '1', '[]', NULL, NULL, '2025-09-28 02:43:01', '2025-09-28 02:43:01', '4'),
(28, '1759038210', 'demo', 'andalali@gmail.com', 2, 1, 'testtestt', 'New Ticket', NULL, '<p>testtestt</p>', '1', '[]', NULL, NULL, '2025-09-28 02:43:30', '2025-09-28 02:43:30', '4'),
(29, '1759038256', 'demo', 'andalali@gmail.com', 2, 1, 'testtestt', 'New Ticket', NULL, '<p>ddddddd</p>', '1', '[]', NULL, NULL, '2025-09-28 02:44:16', '2025-09-28 02:44:16', '4'),
(30, '1759055329', 'demo', 'andalali@gmail.com', 2, 1, 'test', 'New Ticket', NULL, '<p>test</p>', '1', '[]', NULL, NULL, '2025-09-28 07:28:49', '2025-09-28 07:28:49', '4'),
(31, '1759056425', 'demo', 'andalali@gmail.com', 2, 1, 'test', 'New Ticket', NULL, '<p>test</p>', '1', '[]', NULL, NULL, '2025-09-28 07:47:05', '2025-09-28 07:47:05', '4'),
(32, '1759101486', 'Talal Hakami', 'andalali@gmail.com', 2, 2, 'Test', 'New Ticket', NULL, '<p>Testyt</p>', '1', '[]', NULL, NULL, '2025-09-28 20:18:06', '2025-09-28 20:18:06', '4'),
(33, '1759123067', 'demo', 'andalali@gmail.com', 2, 1, 'test', 'New Ticket', NULL, '<p>tsetttttttttttttttttt</p>', '1', '[]', NULL, NULL, '2025-09-29 02:17:47', '2025-09-29 02:17:47', '4'),
(34, '1759132818', 'Talal Hakami', 'thakami@ksu.edu.sa', 3, 2, 'Test', 'New Ticket', NULL, '<p>Tessssssy</p>', '1', '[]', NULL, NULL, '2025-09-29 05:00:18', '2025-09-29 05:00:18', '2'),
(35, '1759142839', 'thakami', 'thakami@ksu.edu.sa', 2, 1, 'test', 'New Ticket', NULL, '<p>testtttt</p>', '1', '[]', NULL, NULL, '2025-09-29 07:47:19', '2025-09-29 07:47:19', '4'),
(36, '1759142908', 'demo', 'thakami@ksu.edu.sa', 2, 2, 'test', 'New Ticket', NULL, '<p>tsettttt</p>', '1', '[]', NULL, NULL, '2025-09-29 07:48:28', '2025-09-29 07:48:28', '4'),
(37, '1759143118', 'thakami', 'thakami@ksu.edu.sa', 2, 1, 'testtt', 'New Ticket', NULL, '<p>ourksupourksupourksupourksup</p>', '1', '[]', NULL, NULL, '2025-09-29 07:51:58', '2025-09-29 07:51:58', '4'),
(38, '1759143180', 'thakami', 'thakami@ksu.edu.sa', 2, 1, 'testtt', 'New Ticket', NULL, '<p>testtt</p>', '1', '[]', NULL, NULL, '2025-09-29 07:53:00', '2025-09-29 07:53:00', '4'),
(39, '1759143237', 'thakami', 'thakami@ksu.edu.sa', 3, 3, 'testt', 'New Ticket', NULL, '<p>testttestttestttestttestt</p>', '1', '[]', NULL, NULL, '2025-09-29 07:53:57', '2025-09-29 07:53:57', '2'),
(40, '1759143292', 'thakami', 'thakami@ksu.edu.sa', 2, 2, 'testtt', 'New Ticket', NULL, '<p>testttestttestttestt</p>', '1', '[]', NULL, NULL, '2025-09-29 07:54:52', '2025-09-29 07:54:52', '4'),
(41, '1759143331', 'thakami', 'thakami@ksu.edu.sa', 2, 2, 'testtt', 'New Ticket', NULL, '<p>testttestttestttestt</p>', '1', '[]', NULL, NULL, '2025-09-29 07:55:31', '2025-09-29 07:55:31', '4'),
(42, '1759143348', 'thakami', 'thakami@ksu.edu.sa', 2, 2, 'testtt', 'New Ticket', NULL, '<p>testttestttestttestt</p>', '1', '[]', NULL, NULL, '2025-09-29 07:55:48', '2025-09-29 07:55:48', '4'),
(43, '1759143384', 'thakami', 'thakami@ksu.edu.sa', 2, 2, 'TEST', 'New Ticket', NULL, '<p>TESTTESTTEST</p>', '1', '[]', NULL, NULL, '2025-09-29 07:56:24', '2025-09-29 07:56:24', '4'),
(44, '1759143467', 'thakami', 'thakami@ksu.edu.sa', 2, 1, 'test', 'New Ticket', NULL, '<p>test</p>', '1', '[]', NULL, NULL, '2025-09-29 07:57:47', '2025-09-29 07:57:47', '4'),
(45, '1759145273', 'Talal Hakami', 'thakami@ksu.edu.sa', 3, 2, 'Test', 'New Ticket', NULL, '<p>Tessssssy</p>', '1', '[]', NULL, NULL, '2025-09-29 08:27:53', '2025-09-29 08:27:53', '2'),
(46, '1759232239', 'thakami', 'thakami@ksu.edu.sa', 2, 1, 'testtt', 'New Ticket', NULL, '<p>testtttesttttesttttesttttesttttesttttesttttesttttesttttesttttesttttesttttesttttesttttesttttesttttesttttesttttesttttesttttesttt</p>', '1', '[]', NULL, NULL, '2025-09-30 08:37:19', '2025-09-30 08:37:19', '4'),
(47, '1759232580', 'thakami', 'thakami@ksu.edu.sa', 2, 1, 'write any things here', 'New Ticket', NULL, '<p>write any things here</p>', '1', '[]', NULL, NULL, '2025-09-30 08:43:00', '2025-09-30 08:43:00', '4'),
(48, '1759233407', 'thakami', 'thakami@ksu.edu.sa', 2, 2, 'write any things here', 'New Ticket', NULL, '<p>write any things here</p>', '1', '[]', NULL, NULL, '2025-09-30 08:56:47', '2025-09-30 08:56:47', '4'),
(49, '1759233517', 'demo', 'andalali@gmail.com', 2, 1, 'write any things here', 'New Ticket', NULL, '<p>write any things here</p>', '1', '[]', NULL, NULL, '2025-09-30 08:58:37', '2025-09-30 08:58:37', '4'),
(50, '1759233829', 'thakami', 'andalali@gmail.com', 2, 2, 'write any things here', 'In Progress', NULL, '<p>write any things here</p>', '1', '[]', NULL, NULL, '2025-09-30 09:03:49', '2025-09-30 09:04:31', '4'),
(51, '1759246105', 'Talal Hakami', 'andalali@gmail.com', 3, 2, 'Test', 'New Ticket', NULL, '<p>Testtt</p>', '1', '[]', NULL, NULL, '2025-09-30 12:28:25', '2025-09-30 12:28:25', '3'),
(52, '1759252674', '', '', 3, 1, 'Test', 'New Ticket', NULL, '<p>Test</p>', '4', '[\"EAF1F81B-59C8-4A2D-9624-2A79D4457D74.jpeg\"]', NULL, NULL, '2025-09-30 14:17:54', '2025-09-30 14:17:54', '2'),
(54, '1760419010', '', '', 2, 1, 'test', 'Closed', NULL, '<p>testttt</p>', '4', '[]', NULL, NULL, '2025-10-14 02:16:50', '2025-10-14 02:18:19', '4'),
(55, '1760529857', 'Kylee English', 'hmdymgdy@gmail.com', 3, 1, 'Non rerum nesciunt', 'New Ticket', NULL, '<p>اختبار</p>', '1', '[\"pngtree-man-avatar-image-for-profile-png-image_13001877.png\"]', NULL, NULL, '2025-10-15 09:04:18', '2025-10-15 09:04:18', '2'),
(56, '1760530002', 'Kylee English', 'hmdymgdy@gmail.com', 3, 1, 'Non rerum nesciunt', 'New Ticket', NULL, '<p>اختبار</p>', '1', '[\"pngtree-man-avatar-image-for-profile-png-image_13001877.png\"]', NULL, NULL, '2025-10-15 09:06:42', '2025-10-15 09:06:42', '2'),
(57, '1760532203', 'Kylee English', 'hmdymgdy@gmail.com', 3, 1, 'Non rerum nesciunt', 'New Ticket', NULL, '<p>اختبار</p>', '1', '[\"pngtree-man-avatar-image-for-profile-png-image_13001877.png\"]', NULL, NULL, '2025-10-15 09:43:24', '2025-10-15 09:43:24', '2'),
(58, '1760643207', '', '', 2, 2, 'test', 'New Ticket', NULL, '<p>hi</p>', '2', '[]', NULL, NULL, '2025-10-16 16:33:27', '2025-10-16 16:33:27', '4'),
(59, '1760643404', '', '', 2, 1, 'Non rerum nesciunt', 'New Ticket', NULL, '<p>hi</p>', '2', '[\"2.jpg\"]', NULL, NULL, '2025-10-16 16:36:44', '2025-10-16 16:36:44', '4'),
(60, '1760643673', 'User', 'agent@example.com', 2, 2, 'Non rerum nesciunt', 'New Ticket', NULL, '<p>hi</p>', '2', '[\"2.jpg\"]', NULL, NULL, '2025-10-16 16:41:13', '2025-10-16 16:41:13', '4'),
(61, '1760645042', 'User', 'agent@example.com', 2, 1, 'Non rerum nesciunt', 'New Ticket', NULL, 'test', '2', '[\"2.jpg\"]', NULL, NULL, '2025-10-16 17:04:02', '2025-10-16 17:04:02', '4'),
(62, '1761390949', 'User', 'agent@example.com', 2, 2, 'Non rerum nesciunt', 'Resolved', 4, '<p>dd</p>', '2', '[\"sample.pdf\"]', NULL, NULL, '2025-10-25 08:15:49', '2025-11-08 17:39:47', '4'),
(63, '1761393844', 'hamdy magdy', 'hmdymgdy@gmail.com', 2, 2, 'Non rerum nesciunt', 'New Ticket', NULL, '<p>d</p>', '1', '[\"sample.pdf\"]', NULL, NULL, '2025-10-25 09:04:04', '2025-10-25 09:04:04', '4');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `role` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `avatar` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent` int NOT NULL DEFAULT '0',
  `is_enable_login` int NOT NULL DEFAULT '1',
  `lang` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en',
  `category_id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subcategory` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `device_type` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `token` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `type` enum('user','editor','admin','supervisor') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `avatar`, `parent`, `is_enable_login`, `lang`, `category_id`, `subcategory`, `device_type`, `token`, `type`) VALUES
(1, 'Admin', 'Admin', 'andalali@gmail.com', NULL, '$2y$10$XGO19zsUs.zSQN8NgfbYheXHprhN4RXqwxY0NlchDXUcsIt8b8dQK', NULL, '2025-07-07 15:33:42', '2025-09-30 09:03:27', NULL, 0, 1, 'en', '', NULL, NULL, NULL, NULL),
(2, 'User', 'User', 'agent@example.com', NULL, '$2y$10$XGO19zsUs.zSQN8NgfbYheXHprhN4RXqwxY0NlchDXUcsIt8b8dQK', NULL, '2025-07-07 15:33:42', '2025-07-28 11:55:36', NULL, 1, 1, 'en', NULL, NULL, NULL, NULL, NULL),
(3, 'User', 'Our KSU Platform', 'ourksup@ksu.edu.sa', NULL, '$2y$10$eBw1DpsyWpkR3HNZTgtgO.Gh73xUdm2mp7WabNB3S6Ohnh14k0OOa', NULL, '2025-07-07 18:37:34', '2025-09-25 12:56:04', NULL, 1, 1, 'en', ',2', '1', NULL, NULL, NULL),
(4, 'Admin', 'Talal Mohammad Hakami', 'thakami@KSU.EDU.SA', NULL, NULL, NULL, '2025-07-07 19:34:27', '2025-07-07 19:34:27', NULL, 0, 1, 'en', NULL, NULL, NULL, NULL, NULL),
(5, 'Admin', 'Mohammed Alhadi', 'malhadi@ksu.edu.sa', NULL, '$2y$10$fksba8d5pnMcRQvAKaw3fenyoLXgNg5UMiN1yjweHhL4tCVLbEK/S', NULL, '2025-07-08 03:08:03', '2025-09-03 16:24:53', NULL, 4, 1, 'en', '2', '4,3', NULL, NULL, NULL),
(6, 'Dean', 'Saleh Alwasel', 'salwasel@KSU.EDU.SA', NULL, '$2y$10$CfLmHs.paUMh98uEsPJn6uXnZzGc.k6PPWaHK.gZdYiHpk/1Ca/hW', NULL, '2025-07-08 04:02:38', '2025-07-08 04:12:32', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(8, 'Dean', 'Mubarak Alkhatnai', 'malkhatnai@KSU.EDU.SA', NULL, '$2y$10$iYwv3baROSwO3hA6YyOvP.OHrnoHuXNeVNH105gxF6Cu7CkUn.zOK', NULL, '2025-07-08 05:08:01', '2025-07-08 05:08:01', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(9, 'Dean', 'Abdulrhman A. AL-Khnaifer', 'akhnaifer@KSU.EDU.SA', NULL, '$2y$10$is/kHjq4LqQSVc1Qmr5iluRxVHqK0kxht9Ob708LU0eI8fFqo38Gm', NULL, '2025-07-08 05:08:46', '2025-07-08 05:08:46', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(10, 'Dean', 'Hisham A. Alhadlaq', 'hhadlaq@KSU.EDU.SA', NULL, '$2y$10$HVegnfnQadxBpfLyHuQDkuoC5OZV/SBnf..qozBQXuTX2PH239ALy', NULL, '2025-07-08 05:09:26', '2025-07-08 05:09:26', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(11, 'Dean', 'Mohammed Alghamdi', 'mhalghamdi@KSU.EDU.SA', NULL, '$2y$10$9pl7vTC2iFJQZalFTEy3Ce59EgW5wkjb2fL6v0MNdURiSiXDSiue2', NULL, '2025-07-08 05:10:13', '2025-07-08 05:10:13', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(12, 'Dean', 'Nasser Binturki', 'nassert@KSU.EDU.SA', NULL, '$2y$10$aTNqqxFaFYxCCUzXhAW66OSKg6pPFMay0J1TXPi43jmO2w606PTcC', NULL, '2025-07-08 05:11:42', '2025-07-08 05:11:42', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(13, 'Dean', 'Abdulmajeed Mohammed Alqusaibi', 'aalqusaibi@KSU.EDU.SA', NULL, '$2y$10$y00vzoQngp.hbeEdHBMKC.kvybFOPEb8NKzuBZmKbSspHGJJ2i0ge', NULL, '2025-07-08 05:12:29', '2025-07-08 05:12:29', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(14, 'Dean', 'Raniah Ibrahim Aljadeed', 'raaljadeed@KSU.EDU.SA', NULL, '$2y$10$ara9mG9MHdfWASZEinhc7uw0qN34rx4L/nvOASj3o5CP8gccUuv9O', NULL, '2025-07-08 05:13:49', '2025-07-08 05:13:49', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(15, 'Dean', 'Ali Aldalbahi', 'aaldalbahi@KSU.EDU.SA', NULL, '$2y$10$uD1EwTrjQuzlDHAD8kuwkO2V0CDkISrtbCnCi9trz.v4FR40zJMAm', NULL, '2025-07-08 05:39:51', '2025-07-08 05:39:51', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(16, 'Dean', 'Hussain Nasser Alhamami', 'halhamami@KSU.EDU.SA', NULL, '$2y$10$9jKTHcI1dgwHGrzM2ZbFzOp8g2UckwJHDVgZyMZvGyAJbdWXkA4eG', NULL, '2025-07-08 05:41:09', '2025-07-08 05:41:33', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(17, 'Dean', 'Mohammed Moosa Ageli', 'mageli@KSU.EDU.SA', NULL, '$2y$10$v.BOa7ffQLvgnoFzILaExOJZUzh0ALEyVVvuwY3NhBiaxsmIWmdaC', NULL, '2025-07-08 06:46:51', '2025-07-08 06:46:51', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(18, 'Dean', 'Rima H Binsaeed', 'rbinsaeed@KSU.EDU.SA', NULL, '$2y$10$UWXnHYzFlf/IdjFgBV7V1uy05Jy0m/UxXYoyQCSbXdYIJFWfdgP52', NULL, '2025-07-08 06:59:45', '2025-07-08 06:59:45', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(19, 'Dean', 'Abdulmajeed Mobrad', 'amobrad@KSU.EDU.SA', NULL, '$2y$10$oYIB6e.ueq0xidmifT9e5uwrWBZoIDhyT1dKLgMWXdK5Q8AYACfh2', NULL, '2025-07-08 07:18:57', '2025-07-08 07:18:57', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(20, 'Dean', 'Othman M Almenaie', 'oalmenaie@KSU.EDU.SA', NULL, '$2y$10$2u6oe8oBhZrgR/fduDOZxunjfJ4V2YGIcu8vjfpH0JWeHcFTjg1MO', NULL, '2025-07-08 07:20:42', '2025-07-08 07:20:42', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(21, 'Dean', 'homalharbi@KSU.EDU.SA', 'homalharbi@KSU.EDU.SA', NULL, '$2y$10$./PuYYYMXqcWKvplYzmPQ.mLWHVGnwiURsmSF73.ILEToTcIUqq8K', NULL, '2025-07-08 07:21:50', '2025-07-08 07:21:50', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(22, 'Dean', 'Noura Alderaa', 'nalderaa@KSU.EDU.SA', NULL, '$2y$10$e22EdX7h5ctFb05dtMTWU.2VJX6bA.ZLxnJMnw.nJPqQpv2Usl5M6', NULL, '2025-07-08 07:22:23', '2025-07-08 07:22:23', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(23, 'Dean', 'Mohammed Arafah', 'arafah@KSU.EDU.SA', NULL, '$2y$10$584fj99b07ztnHSU0qSVJuUlpjFT9mDy2TeStDODuz1PsuKGq4WfS', NULL, '2025-07-08 07:22:51', '2025-07-08 07:22:51', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(24, 'Dean', 'Abdullah Almuneef', 'aalmuneef@KSU.EDU.SA', NULL, '$2y$10$JULpQ4Mb.aK7GbxP4aXNnukhYbFVZHbQnuHX7KUvOdw2hv/8a3tkS', NULL, '2025-07-08 07:23:42', '2025-07-08 07:23:42', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(25, 'Dean', 'Amer M. Alanazi', 'amalanazi@KSU.EDU.SA', NULL, '$2y$10$2IZCbn5w.nixlawLA9rMKOga1Nqo3lZLj3aNXtmdcqUAOsSTfEsFW', NULL, '2025-07-08 07:24:13', '2025-07-08 07:24:13', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(26, 'Dean', 'Abdulwahab Abalkhail', 'aabalkhail@KSU.EDU.SA', NULL, '$2y$10$fU3ZIlcDILr16wDwBx0s2uuYwfZs7MZdZIH3CP76fyY6K/b0KVWTm', NULL, '2025-07-08 07:26:57', '2025-07-08 07:26:57', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(27, 'Dean', 'May Alrashed', 'malrashed@KSU.EDU.SA', NULL, '$2y$10$9GMplK3ylR0ulH.bVnzVbeSiZbU0TzUbNHyc9dyXsSL4eZZxg1s6u', NULL, '2025-07-08 07:27:31', '2025-07-08 07:27:32', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(28, 'Dean', 'Abdulaziz Aldegheishem', 'aldeghei@KSU.EDU.SA', NULL, '$2y$10$7NpRqXFsRKfVvyvZTh6nUObxAXoPchvHaIk1thCBvlPCGTjEvP7A.', NULL, '2025-07-08 07:28:02', '2025-07-08 07:28:02', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(29, 'Dean', 'Mona Almalki', 'almmona@KSU.EDU.SA', NULL, '$2y$10$6BOsCrpBwBpTJp2PacgmvOT8JvaENvB/YaDSx8BHclt2.8Qy/DJmm', NULL, '2025-07-08 07:28:38', '2025-07-08 07:28:38', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(30, 'Dean', 'Mohammed I Alghbban', 'malghbban@KSU.EDU.SA', NULL, '$2y$10$.o5RRbXIOtVh.vZW8MK26O25AAUXmltuTUH.TAhYw1hkJvyKCVfpW', NULL, '2025-07-08 07:29:06', '2025-07-08 07:29:06', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(31, 'Dean', 'Osama Alfarraj', 'oalfarraj@KSU.EDU.SA', NULL, '$2y$10$Pk9pAaUxcioKVqS9hPPym.rZKIpopLv1.cfwil9JBdqwb0aI9GEWq', NULL, '2025-07-08 07:29:37', '2025-07-08 07:29:37', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(32, 'Dean', 'Majid Altamimi', 'mtamimi@KSU.EDU.SA', NULL, '$2y$10$nxsIawwrSrOXasHKunUqRuLGTwEJC8l/tTo8wIkfiGcOTdPSSfLaG', NULL, '2025-07-08 07:30:22', '2025-07-08 07:30:22', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(33, 'Dean', 'Ali Alqahtani', 'ahqahtani@KSU.EDU.SA', NULL, '$2y$10$vG/yGFa/uROco.Gd3t6TWeuQw/Wd57.9lQVwQQyZta5laIJqV846a', NULL, '2025-07-08 07:31:17', '2025-07-08 07:31:17', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(34, 'Dean', 'Fahad Alkhudhairy', 'falkhudhairy@KSU.EDU.SA', NULL, '$2y$10$dAdkHl.dYbJgFMEkzUraKeyWFNcOmOV8JKPot.0DWeT9nRR//fgtu', NULL, '2025-07-08 07:31:58', '2025-07-08 07:31:58', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(35, 'Dean', 'Muhamad A Alnafissa', 'malnafissa@KSU.EDU.SA', NULL, '$2y$10$hbyw65SYR7PVIXp97E86D.rRnZilVqev5492dJ6yLvg09QERj96bi', NULL, '2025-07-08 07:32:27', '2025-07-08 07:32:27', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(36, 'Dean', 'Abdullah R. Alharbi', 'arharbi@KSU.EDU.SA', NULL, '$2y$10$sqDXKyg2B3QeH1xyqAP93ehSTaT0OxHwXfQeAP412CKa3jsTqVTBa', NULL, '2025-07-08 07:32:54', '2025-07-08 07:32:54', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(37, 'Dean', 'Dr. Salman A. AlQahtani', 'salmanq@KSU.EDU.SA', NULL, '$2y$10$pwPGwy6zpfP4v2iLRhjMwOJfVj4IKAx6YVcX0heA2XSk/E7MXvUKC', NULL, '2025-07-08 07:33:52', '2025-07-08 07:33:52', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(38, 'Dean', 'Tariq Alsalhe', 'talsalhe@KSU.EDU.SA', NULL, '$2y$10$GCLJUKnLhuxh30zWkunjne17p4XQiwwTNdvzb6i8Ux2nrqeDLZmfi', NULL, '2025-07-08 07:34:19', '2025-07-08 07:34:19', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(40, 'Dean', 'Abdullah Althabt', 'aalthabt@KSU.EDU.SA', NULL, '$2y$10$h0OeS1FOEQc2R0a1pJQ2jeP2/byvODCra5tEkrHwmoArwW/ohM0F6', NULL, '2025-07-08 07:36:55', '2025-07-08 07:36:55', NULL, 5, 1, 'en', '1', '1', NULL, NULL, NULL),
(41, 'uSER', 'Hamdy Magdy Shaaban', 'hshaaban.c@KSU.EDU.SA', NULL, NULL, NULL, '2025-07-27 09:49:51', '2025-07-27 09:49:51', NULL, 0, 1, 'en', NULL, NULL, NULL, NULL, NULL),
(42, 'Supervisor', 'Eman Abdulrahman Alhotan', 'ealhotan@KSU.EDU.SA', NULL, NULL, NULL, '2025-08-06 07:48:59', '2025-08-06 19:29:55', NULL, 0, 1, 'en', '', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_email_templates`
--

CREATE TABLE `user_email_templates` (
  `id` bigint UNSIGNED NOT NULL,
  `template_id` int NOT NULL,
  `user_id` int NOT NULL,
  `is_active` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_email_templates`
--

INSERT INTO `user_email_templates` (`id`, `template_id`, `user_id`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(2, 2, 1, 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(3, 3, 1, 1, '2025-07-07 15:33:43', '2025-07-07 15:33:43'),
(4, 1, 3, 1, '2025-07-07 18:37:34', '2025-07-07 18:37:34'),
(5, 2, 3, 1, '2025-07-07 18:37:34', '2025-07-07 18:37:34'),
(6, 3, 3, 1, '2025-07-07 18:37:34', '2025-07-07 18:37:34'),
(7, 1, 5, 1, '2025-07-08 03:08:03', '2025-07-08 03:08:03'),
(8, 2, 5, 1, '2025-07-08 03:08:03', '2025-07-08 03:08:03'),
(9, 3, 5, 1, '2025-07-08 03:08:03', '2025-07-08 03:08:03'),
(10, 1, 6, 1, '2025-07-08 04:02:38', '2025-07-08 04:02:38'),
(11, 2, 6, 1, '2025-07-08 04:02:38', '2025-07-08 04:02:38'),
(12, 3, 6, 1, '2025-07-08 04:02:38', '2025-07-08 04:02:38'),
(13, 1, 8, 1, '2025-07-08 05:08:01', '2025-07-08 05:08:01'),
(14, 2, 8, 1, '2025-07-08 05:08:01', '2025-07-08 05:08:01'),
(15, 3, 8, 1, '2025-07-08 05:08:01', '2025-07-08 05:08:01'),
(16, 1, 9, 1, '2025-07-08 05:08:46', '2025-07-08 05:08:46'),
(17, 2, 9, 1, '2025-07-08 05:08:46', '2025-07-08 05:08:46'),
(18, 3, 9, 1, '2025-07-08 05:08:46', '2025-07-08 05:08:46'),
(19, 1, 10, 1, '2025-07-08 05:09:26', '2025-07-08 05:09:26'),
(20, 2, 10, 1, '2025-07-08 05:09:26', '2025-07-08 05:09:26'),
(21, 3, 10, 1, '2025-07-08 05:09:26', '2025-07-08 05:09:26'),
(22, 1, 11, 1, '2025-07-08 05:10:13', '2025-07-08 05:10:13'),
(23, 2, 11, 1, '2025-07-08 05:10:13', '2025-07-08 05:10:13'),
(24, 3, 11, 1, '2025-07-08 05:10:13', '2025-07-08 05:10:13'),
(25, 1, 12, 1, '2025-07-08 05:11:42', '2025-07-08 05:11:42'),
(26, 2, 12, 1, '2025-07-08 05:11:42', '2025-07-08 05:11:42'),
(27, 3, 12, 1, '2025-07-08 05:11:42', '2025-07-08 05:11:42'),
(28, 1, 13, 1, '2025-07-08 05:12:29', '2025-07-08 05:12:29'),
(29, 2, 13, 1, '2025-07-08 05:12:29', '2025-07-08 05:12:29'),
(30, 3, 13, 1, '2025-07-08 05:12:29', '2025-07-08 05:12:29'),
(31, 1, 14, 1, '2025-07-08 05:13:49', '2025-07-08 05:13:49'),
(32, 2, 14, 1, '2025-07-08 05:13:49', '2025-07-08 05:13:49'),
(33, 3, 14, 1, '2025-07-08 05:13:49', '2025-07-08 05:13:49'),
(34, 1, 15, 1, '2025-07-08 05:39:51', '2025-07-08 05:39:51'),
(35, 2, 15, 1, '2025-07-08 05:39:51', '2025-07-08 05:39:51'),
(36, 3, 15, 1, '2025-07-08 05:39:51', '2025-07-08 05:39:51'),
(37, 1, 16, 1, '2025-07-08 05:41:09', '2025-07-08 05:41:09'),
(38, 2, 16, 1, '2025-07-08 05:41:09', '2025-07-08 05:41:09'),
(39, 3, 16, 1, '2025-07-08 05:41:09', '2025-07-08 05:41:09'),
(40, 1, 17, 1, '2025-07-08 06:46:51', '2025-07-08 06:46:51'),
(41, 2, 17, 1, '2025-07-08 06:46:51', '2025-07-08 06:46:51'),
(42, 3, 17, 1, '2025-07-08 06:46:51', '2025-07-08 06:46:51'),
(43, 1, 18, 1, '2025-07-08 06:59:45', '2025-07-08 06:59:45'),
(44, 2, 18, 1, '2025-07-08 06:59:45', '2025-07-08 06:59:45'),
(45, 3, 18, 1, '2025-07-08 06:59:45', '2025-07-08 06:59:45'),
(46, 1, 19, 1, '2025-07-08 07:18:57', '2025-07-08 07:18:57'),
(47, 2, 19, 1, '2025-07-08 07:18:57', '2025-07-08 07:18:57'),
(48, 3, 19, 1, '2025-07-08 07:18:57', '2025-07-08 07:18:57'),
(49, 1, 20, 1, '2025-07-08 07:20:42', '2025-07-08 07:20:42'),
(50, 2, 20, 1, '2025-07-08 07:20:42', '2025-07-08 07:20:42'),
(51, 3, 20, 1, '2025-07-08 07:20:42', '2025-07-08 07:20:42'),
(52, 1, 21, 1, '2025-07-08 07:21:50', '2025-07-08 07:21:50'),
(53, 2, 21, 1, '2025-07-08 07:21:50', '2025-07-08 07:21:50'),
(54, 3, 21, 1, '2025-07-08 07:21:50', '2025-07-08 07:21:50'),
(55, 1, 22, 1, '2025-07-08 07:22:23', '2025-07-08 07:22:23'),
(56, 2, 22, 1, '2025-07-08 07:22:23', '2025-07-08 07:22:23'),
(57, 3, 22, 1, '2025-07-08 07:22:23', '2025-07-08 07:22:23'),
(58, 1, 23, 1, '2025-07-08 07:22:51', '2025-07-08 07:22:51'),
(59, 2, 23, 1, '2025-07-08 07:22:51', '2025-07-08 07:22:51'),
(60, 3, 23, 1, '2025-07-08 07:22:51', '2025-07-08 07:22:51'),
(61, 1, 24, 1, '2025-07-08 07:23:42', '2025-07-08 07:23:42'),
(62, 2, 24, 1, '2025-07-08 07:23:42', '2025-07-08 07:23:42'),
(63, 3, 24, 1, '2025-07-08 07:23:42', '2025-07-08 07:23:42'),
(64, 1, 25, 1, '2025-07-08 07:24:13', '2025-07-08 07:24:13'),
(65, 2, 25, 1, '2025-07-08 07:24:13', '2025-07-08 07:24:13'),
(66, 3, 25, 1, '2025-07-08 07:24:13', '2025-07-08 07:24:13'),
(67, 1, 26, 1, '2025-07-08 07:26:57', '2025-07-08 07:26:57'),
(68, 2, 26, 1, '2025-07-08 07:26:57', '2025-07-08 07:26:57'),
(69, 3, 26, 1, '2025-07-08 07:26:57', '2025-07-08 07:26:57'),
(70, 1, 27, 1, '2025-07-08 07:27:32', '2025-07-08 07:27:32'),
(71, 2, 27, 1, '2025-07-08 07:27:32', '2025-07-08 07:27:32'),
(72, 3, 27, 1, '2025-07-08 07:27:32', '2025-07-08 07:27:32'),
(73, 1, 28, 1, '2025-07-08 07:28:02', '2025-07-08 07:28:02'),
(74, 2, 28, 1, '2025-07-08 07:28:02', '2025-07-08 07:28:02'),
(75, 3, 28, 1, '2025-07-08 07:28:02', '2025-07-08 07:28:02'),
(76, 1, 29, 1, '2025-07-08 07:28:38', '2025-07-08 07:28:38'),
(77, 2, 29, 1, '2025-07-08 07:28:38', '2025-07-08 07:28:38'),
(78, 3, 29, 1, '2025-07-08 07:28:38', '2025-07-08 07:28:38'),
(79, 1, 30, 1, '2025-07-08 07:29:06', '2025-07-08 07:29:06'),
(80, 2, 30, 1, '2025-07-08 07:29:06', '2025-07-08 07:29:06'),
(81, 3, 30, 1, '2025-07-08 07:29:06', '2025-07-08 07:29:06'),
(82, 1, 31, 1, '2025-07-08 07:29:37', '2025-07-08 07:29:37'),
(83, 2, 31, 1, '2025-07-08 07:29:37', '2025-07-08 07:29:37'),
(84, 3, 31, 1, '2025-07-08 07:29:37', '2025-07-08 07:29:37'),
(85, 1, 32, 1, '2025-07-08 07:30:22', '2025-07-08 07:30:22'),
(86, 2, 32, 1, '2025-07-08 07:30:22', '2025-07-08 07:30:22'),
(87, 3, 32, 1, '2025-07-08 07:30:22', '2025-07-08 07:30:22'),
(88, 1, 33, 1, '2025-07-08 07:31:17', '2025-07-08 07:31:17'),
(89, 2, 33, 1, '2025-07-08 07:31:17', '2025-07-08 07:31:17'),
(90, 3, 33, 1, '2025-07-08 07:31:17', '2025-07-08 07:31:17'),
(91, 1, 34, 1, '2025-07-08 07:31:58', '2025-07-08 07:31:58'),
(92, 2, 34, 1, '2025-07-08 07:31:58', '2025-07-08 07:31:58'),
(93, 3, 34, 1, '2025-07-08 07:31:58', '2025-07-08 07:31:58'),
(94, 1, 35, 1, '2025-07-08 07:32:27', '2025-07-08 07:32:27'),
(95, 2, 35, 1, '2025-07-08 07:32:27', '2025-07-08 07:32:27'),
(96, 3, 35, 1, '2025-07-08 07:32:27', '2025-07-08 07:32:27'),
(97, 1, 36, 1, '2025-07-08 07:32:54', '2025-07-08 07:32:54'),
(98, 2, 36, 1, '2025-07-08 07:32:54', '2025-07-08 07:32:54'),
(99, 3, 36, 1, '2025-07-08 07:32:54', '2025-07-08 07:32:54'),
(100, 1, 37, 1, '2025-07-08 07:33:52', '2025-07-08 07:33:52'),
(101, 2, 37, 1, '2025-07-08 07:33:52', '2025-07-08 07:33:52'),
(102, 3, 37, 1, '2025-07-08 07:33:52', '2025-07-08 07:33:52'),
(103, 1, 38, 1, '2025-07-08 07:34:19', '2025-07-08 07:34:19'),
(104, 2, 38, 1, '2025-07-08 07:34:19', '2025-07-08 07:34:19'),
(105, 3, 38, 1, '2025-07-08 07:34:19', '2025-07-08 07:34:19'),
(106, 1, 39, 1, '2025-07-08 07:34:46', '2025-07-08 07:34:46'),
(107, 2, 39, 1, '2025-07-08 07:34:46', '2025-07-08 07:34:46'),
(108, 3, 39, 1, '2025-07-08 07:34:46', '2025-07-08 07:34:46'),
(109, 1, 40, 1, '2025-07-08 07:36:55', '2025-07-08 07:36:55'),
(110, 2, 40, 1, '2025-07-08 07:36:55', '2025-07-08 07:36:55'),
(111, 3, 40, 1, '2025-07-08 07:36:55', '2025-07-08 07:36:55');

-- --------------------------------------------------------

--
-- Table structure for table `webhooks`
--

CREATE TABLE `webhooks` (
  `id` bigint UNSIGNED NOT NULL,
  `module` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `method` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `conversions`
--
ALTER TABLE `conversions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `custom_fields`
--
ALTER TABLE `custom_fields`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `custom_field_values`
--
ALTER TABLE `custom_field_values`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `custom_field_values_record_id_field_id_unique` (`record_id`,`field_id`),
  ADD KEY `custom_field_values_field_id_foreign` (`field_id`);

--
-- Indexes for table `email_templates`
--
ALTER TABLE `email_templates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `email_template_langs`
--
ALTER TABLE `email_template_langs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `floating_chat_messages`
--
ALTER TABLE `floating_chat_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `floating_chat_messages_floating_chat_user_id_foreign` (`floating_chat_user_id`);

--
-- Indexes for table `floating_chat_users`
--
ALTER TABLE `floating_chat_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `floating_chat_users_email_unique` (`email`);

--
-- Indexes for table `knowledge`
--
ALTER TABLE `knowledge`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `knowledge_base_category`
--
ALTER TABLE `knowledge_base_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login_details`
--
ALTER TABLE `login_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`);

--
-- Indexes for table `notification_templates`
--
ALTER TABLE `notification_templates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification_template_langs`
--
ALTER TABLE `notification_template_langs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `priorities`
--
ALTER TABLE `priorities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `settings_name_created_by_unique` (`name`,`created_by`);

--
-- Indexes for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `template`
--
ALTER TABLE `template`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tickets_ticket_id_unique` (`ticket_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_email_templates`
--
ALTER TABLE `user_email_templates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `webhooks`
--
ALTER TABLE `webhooks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `conversions`
--
ALTER TABLE `conversions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `custom_fields`
--
ALTER TABLE `custom_fields`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `custom_field_values`
--
ALTER TABLE `custom_field_values`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `email_templates`
--
ALTER TABLE `email_templates`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `email_template_langs`
--
ALTER TABLE `email_template_langs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `faqs`
--
ALTER TABLE `faqs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `floating_chat_messages`
--
ALTER TABLE `floating_chat_messages`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `floating_chat_users`
--
ALTER TABLE `floating_chat_users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `knowledge`
--
ALTER TABLE `knowledge`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `knowledge_base_category`
--
ALTER TABLE `knowledge_base_category`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `login_details`
--
ALTER TABLE `login_details`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `notification_templates`
--
ALTER TABLE `notification_templates`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `notification_template_langs`
--
ALTER TABLE `notification_template_langs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `priorities`
--
ALTER TABLE `priorities`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=285;

--
-- AUTO_INCREMENT for table `sub_categories`
--
ALTER TABLE `sub_categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `template`
--
ALTER TABLE `template`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `user_email_templates`
--
ALTER TABLE `user_email_templates`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT for table `webhooks`
--
ALTER TABLE `webhooks`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `custom_field_values`
--
ALTER TABLE `custom_field_values`
  ADD CONSTRAINT `custom_field_values_field_id_foreign` FOREIGN KEY (`field_id`) REFERENCES `custom_fields` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `floating_chat_messages`
--
ALTER TABLE `floating_chat_messages`
  ADD CONSTRAINT `floating_chat_messages_floating_chat_user_id_foreign` FOREIGN KEY (`floating_chat_user_id`) REFERENCES `floating_chat_users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
