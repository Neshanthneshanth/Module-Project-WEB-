-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 28, 2023 at 07:25 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `javaboi`
--

-- --------------------------------------------------------

--
-- Table structure for table `quiz_questions`
--

CREATE TABLE `quiz_questions` (
  `id` int(11) NOT NULL,
  `question` text DEFAULT NULL,
  `answer_1` text DEFAULT NULL,
  `answer_2` text DEFAULT NULL,
  `answer_3` text DEFAULT NULL,
  `answer_4` text DEFAULT NULL,
  `correct_answer` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quiz_questions`
--

INSERT INTO `quiz_questions` (`id`, `question`, `answer_1`, `answer_2`, `answer_3`, `answer_4`, `correct_answer`) VALUES
(1, 'What will be the output of the following code?int Integer = 24;char String=‘I’;System.out.print(Integer);System.out.print(String);', 'Compile Error', 'Throws Exception', 'I', '24 I', 4),
(2, 'Select the Valid Statement', 'char[] ch = new char(5)', 'char[] ch = new char[5]', 'char[] ch = a new char()', 'char[] ch = new char[]', 2),
(3, 'when an array is passed to a method, what does the method receive?', 'the reference of the array', 'a copy of the array', 'length of an array', 'copy of the first elements', 1),
(4, 'Which of the following is not a Java feature?', 'Dynamic', 'Architecture Neutral', 'Use of pointers', 'Object-oriented', 3),
(5, '_____ is used to find and fix bugs in the Java programs.', 'Dynamic', 'JRE', 'JDK', 'JDB', 4),
(6, 'Who invented Java Programming?', 'Guido van Rossum', 'James Gosling', 'Dennis Ritchie', 'Bjarne Stroustrup', 2),
(7, 'Which statement is true about Java?', 'Java is a sequence-dependent programming language', 'Java is a code dependent programming language', 'Java is a platform-dependent programming language', 'Java is a platform-independent programming language', 4),
(8, 'Which one of the following is not a Java feature?', 'Object-oriented', 'Use of pointers', 'Portable', 'Dynamic and Extensible', 2),
(9, 'Which of these cannot be used for a variable name in Java?', 'identifier & keyword', 'identifier', 'keyword', 'none of the mentioned', 3),
(10, 'What is the extension of java code files?', '.js', '.txt', '.class', '.java', 4),
(11, 'Which environment variable is used to set the java path?', 'MAVEN_Path', 'JavaPATH', 'JAVA', 'JAVA_HOME', 4),
(12, 'Which of the following is not an OOPS concept in Java?', 'Polymorphism', 'Inheritance', 'Compilation', 'Encapsulation', 3),
(13, 'What is not the use of \'this\' keyword in Java?', 'Referring to the instance variable when a local variable has the same name', 'Passing itself to the method of the same class', 'Passing itself to another method', 'Calling another constructor in constructor chaining', 2),
(14, 'Which of the following is a type of polymorphism in Java Programming?', 'Multiple polymorphism', 'Compile time polymorphism', 'Multilevel polymorphism', 'Execution time polymorphism', 2),
(15, 'What is Truncation in Java?', 'Floating-point value assigned to a Floating type', 'Floating-point value assigned to an integer type', 'Integer value assigned to floating type', 'Integer value assigned to floating type', 2),
(16, 'Which exception is thrown when Java is out of memory?', 'MemoryError', 'OutOfMemoryError', 'MemoryOutOfBoundsException', 'MemoryFullException', 2),
(17, 'Which of these are selection statements in Java?', 'break', 'continue', 'for()', 'if()', 4),
(18, 'Which of these keywords is used to define interfaces in Java?', 'intf', 'Intf', 'interface', 'Interf', 3),
(19, 'Which of the following is a superclass of every class in Java?', 'ArrayList', 'Abstract class', 'Object class', 'String', 3),
(20, 'Which of the below is not a Java Profiler?', 'JProfiler', 'Eclipse Profiler', 'JVM', 'JConsole', 3),
(21, 'Which of these packages contains the exception Stack Overflow in Java?', 'java.io', 'java.system', 'java.lang', 'java.util', 3),
(22, 'Which of these statements is incorrect about Thread?', 'start() method is used to begin execution of the thread', 'run() method is used to begin execution of a thread before start() method in special cases', 'A thread can be formed by implementing Runnable interface only', 'A thread can be formed by a class that extends Thread class', 2),
(23, 'Which statement is true about Java?', 'Java is a sequence-dependent programming language', 'Java is a code-dependent programming language', 'Java is a platform-dependent programming language', 'Java is a platform-independent programming language', 4),
(24, 'Which one of the following is not a Java feature?', 'Object-oriented', 'Use of pointers', 'Portable', 'Dynamic and Extensible', 2),
(25, 'Which of these cannot be used for a variable name in Java?', 'identifier & keyword', 'identifier', 'keyword', 'none of the mentioned', 3),
(26, 'What is the extension of java code files?', '.js', '.txt', '.class', '.java', 4),
(27, 'Which of these are selection statements in Java?', 'break', 'continue', 'for()', 'if()', 4),
(28, 'Which of these keywords is used to define interfaces in Java?', 'intf', 'Intf', 'interface', 'Interf', 3),
(29, 'Which of the following is a superclass of every class in Java?', 'ArrayList', 'Abstract class', 'Object class', 'String', 3),
(30, 'Which of the following creates a List of 3 visible items and multiple selections enabled?', 'new List(false, 3)', 'new List(3, true)', 'new List(true, 3)', 'new List(3, false)', 2);

-- --------------------------------------------------------

--
-- Table structure for table `quiz_questionsexp`
--

CREATE TABLE `quiz_questionsexp` (
  `id` int(11) NOT NULL,
  `question` text DEFAULT NULL,
  `answer_1` text DEFAULT NULL,
  `answer_2` text DEFAULT NULL,
  `answer_3` text DEFAULT NULL,
  `answer_4` text DEFAULT NULL,
  `correct_answer` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `quiz_questionsint`
--

CREATE TABLE `quiz_questionsint` (
  `id` int(11) NOT NULL,
  `question` text DEFAULT NULL,
  `answer_1` text DEFAULT NULL,
  `answer_2` text DEFAULT NULL,
  `answer_3` text DEFAULT NULL,
  `answer_4` text DEFAULT NULL,
  `correct_answer` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quiz_questionsint`
--

INSERT INTO `quiz_questionsint` (`id`, `question`, `answer_1`, `answer_2`, `answer_3`, `answer_4`, `correct_answer`) VALUES
(1, 'Which of the following is a valid long literal?', 'ABH8097', 'L990023', '904423', '0xnf029L', 4),
(2, 'What does the expression float a = 35 / 0 return?', '0', 'Not a Number', 'Infinity', 'Run time exception', 3),
(3, 'Evaluate the following Java expression, if x=3, y=5, and z=10:  ++z + y - y + z + x++', '24', '23', '20', '25', 4),
(4, 'Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?', 'javap tool', 'javaw command', 'Javadoc tool', 'javah command', 3),
(5, 'Which of the following creates a List of 3 visible items and multiple selections enabled?', 'new List(false, 3)', 'new List(3, true)', 'new List(true, 3)', 'new List(3, false)', 2),
(6, 'Which method of the Class.class is used to determine the name of a class represented by the class object as a String?', 'getClass()', 'intern()', 'getName()', 'toString()', 3),
(7, 'In which process, a local variable has the same name as one of the instance variables?', 'Serialization', 'Variable Shadowing', 'Abstraction', 'Multi-threading', 2),
(8, 'Which of the following is true about the anonymous inner class?', 'It has only methods', 'Objects can\'t be created', 'It has a fixed class name', 'It has no class name', 4),
(9, 'Which package contains the Random class?', 'java.util package', 'java.lang package', 'java.awt package', 'java.io package', 1),
(10, 'What do you mean by nameless objects?', 'An object created by using the new keyword.', 'An object of a superclass created in the subclass.', 'An object without having any name but having a reference.', 'An object that has no reference.', 4),
(11, 'Which one of the following is not an access modifier?', 'Protected', 'Void', 'Public', 'Private', 2),
(12, 'What is the numerical range of a char data type in Java?', '0 to 256', '-128 to 127', '0 to 65535', '0 to 32767', 3),
(13, 'Which class provides system independent server side implementation?', 'Server', 'ServerReader', 'Socket', 'ServerSocket', 4),
(14, 'Which of the following is true about servlets?', 'Servlets can use the full functionality of the Java class libraries', 'Servlets execute within the address space of web server, platform independent and uses the functionality of java class libraries', 'Servlets execute within the address space of web server', 'Servlets are platform-independent because they are written in java', 2),
(15, 'What will be the output of the following Java code   class Output{public static void main(String args[]) {Integer i = new Integer(257);   byte x = i.byteValue(); System.out.print(x);  } }', '257', '256', '1', '0', 3),
(16, 'What will be the output of the following Java code?  class increment {public static void main(String args[]) {  int g = 3;  System.out.print(++g * 8);    } } ', '32', '33', '24', '25', 1),
(17, 'Which of the following option leads to the portability and security of Java?', 'Bytecode is executed by JVM', 'The applet makes the Java code secure and portable', 'Use of exception handling', 'Dynamic binding between objects', 1),
(18, 'Which of the following is not a Java feature?', 'Dynamic', 'Architecture Neutral', 'Use of pointers', 'Object-oriented', 3),
(19, 'The u0021 article referred to as a', 'Unicode escape sequence', 'Octal escape', 'Hexadecimal', 'Line feed', 1),
(20, 'What is the return type of the hashCode() method in the Object class?', 'Object', 'int', 'long', 'void', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user_info`
--

CREATE TABLE `user_info` (
  `user_id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(128) NOT NULL,
  `points` int(11) NOT NULL,
  `otp` int(11) NOT NULL,
  `quiz_score` int(11) NOT NULL DEFAULT 0,
  `level3` int(255) NOT NULL,
  `level4` int(245) NOT NULL,
  `int_level1` int(255) NOT NULL,
  `int_level2` int(255) NOT NULL,
  `int_level3` int(255) NOT NULL,
  `int_level4` int(255) NOT NULL,
  `exp_level1` int(255) NOT NULL,
  `exp_level2` int(255) NOT NULL,
  `exp_level3` int(255) NOT NULL,
  `exp_level4` int(255) NOT NULL,
  `allpoints` int(255) NOT NULL,
  `beginner_score` int(255) NOT NULL,
  `intermediate_score` int(255) NOT NULL,
  `expert_score` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_info`
--

INSERT INTO `user_info` (`user_id`, `username`, `email`, `password`, `points`, `otp`, `quiz_score`, `level3`, `level4`, `int_level1`, `int_level2`, `int_level3`, `int_level4`, `exp_level1`, `exp_level2`, `exp_level3`, `exp_level4`, `allpoints`, `beginner_score`, `intermediate_score`, `expert_score`) VALUES
(1, 'karan', 'karan123@gmail.com', '123', 8, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 172, 6, 6, 0),
(23, 'kevin', 'kevin@123', '$2y$10$Kd3mUWwvDxlNtFJDf2B6KOqAX.3X3TUL3Og38UINIvFYmFC5G147m', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(37, 'c', 'c@123', '$2y$10$3/kQitdBf4MtJzkrPEycReOqeTwlWov.CBXrCeUUSfl53lHitisXW', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(38, 'd', 'dineshd123@gmail.com', '123', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(39, 'k', 'k@123', '123', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(56, 'Kira', '123', '123', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(57, 'abc', 'abc', 'abc', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(58, 'cbc', 'cbc', 'cbc', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(59, 'gopi', 'gopi@132', '4567', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `quiz_questions`
--
ALTER TABLE `quiz_questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quiz_questionsexp`
--
ALTER TABLE `quiz_questionsexp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quiz_questionsint`
--
ALTER TABLE `quiz_questionsint`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `quiz_questions`
--
ALTER TABLE `quiz_questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `quiz_questionsexp`
--
ALTER TABLE `quiz_questionsexp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `quiz_questionsint`
--
ALTER TABLE `quiz_questionsint`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `user_info`
--
ALTER TABLE `user_info`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
