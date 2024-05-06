<?php
// Include the session.php file to enforce session-based authentication
include('session.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>DATA STRUCTURE </title>

    <link rel="stylesheet" href="style.css">
    <style>
        /* Center the content */
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            flex-direction: column; /* Added to make the content stack vertically */
        }

        /* Style the h3 element */
        h3 {
            font-size: 36px; /* Adjust the font size as needed */
            color: black;
            text-align: center;
        }

        /* Style the parrot image */
        .parrot {
            margin-top: 20px; /* Added margin to separate h3 and image */
        }

        /* Style the competency buttons */
        .difficulty {
            display: flex;
            flex-direction: column; /* Stack buttons vertically */
            align-items: center; /* Center the buttons horizontally */
            margin-top: 20px; /* Added margin to separate image and buttons */
        }

        a {
  font-family: "Helvetica";
  font-weight: 700;
  color: whitesmoke;
  text-align: center;
  display: block;
  text-decoration: none;
}



.block {
  background:linear-gradient(180deg, #000000, #111111);
  position: relative;
  width: 300px;

  padding: 1rem;
  margin: 4% auto;
  border-radius: 30px;
  border: 1px solid whitesmoke;
}

.glow::before, glow::after {
  content:'';
  position:absolute;
  left: -5px;
  top: -5px;
  background: linear-gradient(45deg, #993333, #ff00ff, #6e0dd0, #099fff, #ff00 ,#993333);
  background-size: 400%;
  width: calc(100% + 10px);
  height: calc(100% + 10px);
  z-index: -1;
  animation: animate 20s linear infinite;
  
  
}

@keyframes animate {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.glow::before {
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.glow:hover::before {
  opacity: 100;
}
.navigation{
    display: flex;
}
    </style>
</head>
<body>
    <header>
        <h2 class="logo">DATA STRUCTURE</h2>
        <nav class="navigation">
            <a href="competency.php">HOME</a>
            <a href="profile.php">PROFILE</a>
            <a href="login.html" class="btnlogout">LOGOUT</a>
        </nav>
    </header>

    <h3>CHOOSE YOUR COMPETENCY</h3>

    <div class="parrot">
        <img src="parrot.png" alt="parrot" style="
    width: 113%;
    height: 95%;
" />
    </div>

    <nav class="difficulty">
        <a href="topic.php" class="block glow" >BEGINNER</a>
        <a href="topicinter.php" class="block glow">INTERMEDIATE</a>
        <a href="topicexpert.php" class="block glow">EXPERT</a>
    </nav>
 
</body>
</html>
