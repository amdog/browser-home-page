-- MySQL dump 10.13  Distrib 5.5.28, for Win64 (x86)
--
-- Host: chatjs.top    Database: public
-- ------------------------------------------------------
-- Server version	5.5.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `all_maile`
--

DROP TABLE IF EXISTS `all_maile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `all_maile` (
  `id_maile` int(11) NOT NULL AUTO_INCREMENT,
  `who_send` int(11) NOT NULL,
  `type_` varchar(10) NOT NULL DEFAULT 'bug',
  `send_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `message_content` varchar(400) DEFAULT NULL,
  `is_response` tinyint(1) NOT NULL DEFAULT '0',
  `response_content` varchar(400) NOT NULL DEFAULT '-',
  PRIMARY KEY (`id_maile`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `all_maile`
--

LOCK TABLES `all_maile` WRITE;
/*!40000 ALTER TABLE `all_maile` DISABLE KEYS */;
INSERT INTO `all_maile` VALUES (5,1,'bug','2020-12-19 14:53:50','holle is 1',0,'-'),(6,1,'bug','2020-12-19 14:53:50','holle is 1',0,'-'),(7,1,'bug','2020-12-19 14:53:50','holle is 1',0,'-'),(8,1,'bug','2020-12-19 14:53:50','holle is 1',0,'-'),(9,1,'bug','2020-12-19 14:53:50','holle is 1',0,'-'),(10,1,'bug','2020-12-19 14:53:50','holle is 1',0,'-'),(11,1,'bug','2020-12-19 14:53:55','holle is 1',0,'-'),(12,1,'bug','2020-12-19 14:53:55','holle is 1',0,'-'),(13,1,'bug','2020-12-19 14:53:55','holle is 1',0,'-'),(14,1,'bug','2020-12-19 14:53:55','holle is 1',0,'-'),(15,1,'bug','2020-12-19 14:53:55','holle is 1',0,'-'),(16,1,'bug','2020-12-19 14:53:55','holle is 1',0,'-'),(17,1,'bug','2020-12-19 14:53:55','holle is 1',0,'-'),(18,1,'bug','2020-12-19 14:53:55','holle is 1',0,'-'),(19,1,'bug','2020-12-19 14:53:55','holle is 1',0,'-'),(20,1,'bug','2020-12-19 14:53:55','holle is 1',0,'-'),(21,1,'bug','2020-12-19 14:53:55','holle is 1',0,'-'),(22,1,'bug','2020-12-19 14:53:55','holle is 1',0,'-'),(23,1,'bug','2020-12-19 14:53:55','holle is 1',0,'-'),(24,1,'bug','2020-12-19 14:53:55','holle is 1',0,'-'),(25,1,'bug','2020-12-19 14:53:55','holle is 1',0,'-');
/*!40000 ALTER TABLE `all_maile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diary_book`
--

DROP TABLE IF EXISTS `diary_book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `diary_book` (
  `page_id` int(11) NOT NULL AUTO_INCREMENT,
  `page_content` varchar(400) DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`page_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diary_book`
--

LOCK TABLES `diary_book` WRITE;
/*!40000 ALTER TABLE `diary_book` DISABLE KEYS */;
INSERT INTO `diary_book` VALUES (1,'','2020-12-18 06:49:06'),(2,'ghg','2020-12-18 06:50:04'),(3,'67猫炉麓莽拧鈥?,'2020-12-18 06:50:58'),(4,'There are moments in life when you miss someone so much that you just want to pick them from your dreams and hug them for real! Dream what you want to dream;go where you want to go;be what you want to be,because you have only one life and one chance to do all the things you want to \n茫鈧偓茫鈧偓May you have enough happiness to make you sweet,enough trials to make you strong,enough sorrow to keep you hum','2020-12-18 06:56:40'),(5,'1231321321','2020-12-18 06:58:53'),(6,'涓枃','2020-12-18 07:04:40'),(7,'鍏洖澶?,'2020-12-18 07:10:21');
/*!40000 ALTER TABLE `diary_book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diary_info`
--

DROP TABLE IF EXISTS `diary_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `diary_info` (
  `id_` int(11) NOT NULL AUTO_INCREMENT,
  `access_token` varchar(30) NOT NULL DEFAULT '123123',
  `falid_count` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diary_info`
--

LOCK TABLES `diary_info` WRITE;
/*!40000 ALTER TABLE `diary_info` DISABLE KEYS */;
INSERT INTO `diary_info` VALUES (1,'123123',0);
/*!40000 ALTER TABLE `diary_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `linklist`
--

DROP TABLE IF EXISTS `linklist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `linklist` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `_name` varchar(30) NOT NULL,
  `links` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `linklist`
--

LOCK TABLES `linklist` WRITE;
/*!40000 ALTER TABLE `linklist` DISABLE KEYS */;
/*!40000 ALTER TABLE `linklist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `query_lushi`
--

DROP TABLE IF EXISTS `query_lushi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `query_lushi` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `content_html` varchar(500) NOT NULL,
  `_who` varchar(20) NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `query_lushi`
--

LOCK TABLES `query_lushi` WRITE;
/*!40000 ALTER TABLE `query_lushi` DISABLE KEYS */;
INSERT INTO `query_lushi` VALUES (1,'2020-12-23 14:45:11','<h2>b</h2><p>a</p><img src=\'./upload/r1_1.file\'>','r'),(2,'2020-12-24 02:40:19','<h2>t</h2><p>b</p><img src=\'./upload/r1_1.file\'>','r'),(3,'2020-12-24 02:52:37','<h2>4</h2><p>4</p><img src=\'./upload/r2_1.file\'><h2>b</h2><p>            7</p><img src=\'./upload/r2_2.file\'><h2>8</h2><p>            9</p><img src=\'./upload/r2_3.file\'>','r');
/*!40000 ALTER TABLE `query_lushi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_info` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `emaile` varchar(20) NOT NULL,
  `sign_up` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `passwd` varchar(20) NOT NULL DEFAULT '1',
  `_name` varchar(40) NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info`
--

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
INSERT INTO `user_info` VALUES (1,'','2020-12-23 08:45:07','1','a'),(2,'','2020-12-23 08:50:46','a','a'),(3,'','2020-12-23 08:50:53','a','b'),(4,'c','2020-12-23 09:09:06','c','c'),(5,'','2020-12-23 09:09:53','v','v'),(6,'','2020-12-23 09:10:33','v','r'),(7,'c','2020-12-24 07:26:48','c','er');
/*!40000 ALTER TABLE `user_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-24 16:51:43
