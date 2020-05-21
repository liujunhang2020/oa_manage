-- MySQL dump 10.13  Distrib 8.0.19, for macos10.15 (x86_64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	5.7.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blog_admin`
--

DROP TABLE IF EXISTS `blog_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_admin` (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_user` varchar(45) NOT NULL,
  `admin_pass` varchar(100) NOT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_admin`
--

LOCK TABLES `blog_admin` WRITE;
/*!40000 ALTER TABLE `blog_admin` DISABLE KEYS */;
INSERT INTO `blog_admin` VALUES (1,'root','65396e7a758b118b24c85d8423e56f3b');
/*!40000 ALTER TABLE `blog_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_article`
--

DROP TABLE IF EXISTS `blog_article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_article` (
  `article_id` int(11) NOT NULL AUTO_INCREMENT,
  `article_title` varchar(45) NOT NULL COMMENT '文章标题',
  `article_content` text NOT NULL,
  `article_create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `article_author_id` int(11) NOT NULL DEFAULT '1' COMMENT '文章作者id',
  `state` int(11) NOT NULL DEFAULT '1' COMMENT '1 表示文章已经发布，可以查看 2 表示文章已被删除，不能查看',
  PRIMARY KEY (`article_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_article`
--

LOCK TABLES `blog_article` WRITE;
/*!40000 ALTER TABLE `blog_article` DISABLE KEYS */;
INSERT INTO `blog_article` VALUES (1,'测试文章1','这是一段测试文字...','2020-05-12 17:13:53',1,1),(2,'测试文章2','这是一篇测试文章...','2020-05-19 17:38:31',8,1),(3,'测试文章3','这是一篇测试文章...','2020-05-19 17:39:11',6,2),(4,'测试文章hello','hello,world','2020-05-20 12:43:14',3,1),(5,'测试hahah','hello,world','2020-05-20 12:45:01',8,2);
/*!40000 ALTER TABLE `blog_article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_user`
--

DROP TABLE IF EXISTS `blog_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `user_pass` varchar(100) NOT NULL,
  `user_email` varchar(45) NOT NULL,
  `user_create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `state` int(11) NOT NULL DEFAULT '1' COMMENT '1 可用 2 为不可用',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_user`
--

LOCK TABLES `blog_user` WRITE;
/*!40000 ALTER TABLE `blog_user` DISABLE KEYS */;
INSERT INTO `blog_user` VALUES (1,'佚名','...','....','2020-05-12 17:11:17',1),(2,'测试用户','aaaaa','t1@qq.com','2020-05-19 06:55:38',1),(3,'t2','aaaaa','t2@qq.com','2020-05-19 06:55:38',1),(4,'t3','aaaaa','t3121ok@qq.com','2020-05-19 06:55:38',1),(5,'t4','aaaaa','t4@qq.com','2020-05-19 06:55:38',2),(6,'zhangsan','c834da354b7d14e5451ebc3d2748c5ff','zhangsan@qq.com','2020-05-19 14:17:39',2),(7,'xiaoming','020ee97684b617daa3b1c6989bb45f97','xiaoming@qq.com','2020-05-19 14:19:48',2),(8,'xiaohong','e90bd174a74baefe0a2433c4fe74ff96','xiaohong@qq.com','2020-05-19 14:20:24',1);
/*!40000 ALTER TABLE `blog_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-21 18:07:33
