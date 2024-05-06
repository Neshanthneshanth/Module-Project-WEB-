<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html"); // Redirect to the login page if not logged in
    exit();
}

// Assuming you have already connected to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "javaboi";

// Create a database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch user information from the database
$user_id = $_SESSION['user_id'];
$sql = "SELECT username, email,  allpoints FROM user_info WHERE user_id = $user_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    $row = $result->fetch_assoc();
    $username = $row['username'];
    $email = $row['email'];
    $allpoint = $row['allpoints'];
} else {
    echo "No user found";
}

// Close the database connection
$conn->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge" <meta name="viewport" content="width=device-width,initial-scale=1.0"> 
<title>Data structures</title>
<link rel="stylesheet" href="styles5.css">
</head>

<body>

   <header>
       <h2 class="logo">Data structures</h2>
           <nav class="navigation"> <a href="competency.php">Competency</a>
                 <a href="#">About</a>                
                 <a href="#">Contact</a>
                 <a href="login.html" class="btnlogout">LOG OUT</a>

            </nav>
  </header>
<body>
    <title>Profile</title>
    <div class="profile-container">
        <div class="profile-content">
        <img src="user.png" alt="Profile Picture" class="profile-pic">
        <h1>PROFILE</h1>
        <p>username:</P>
        <p>Email:</P>
        <p>Points:</P>
        <span class="label"> <?php echo $username; ?></span>
        <span class="label"><?php echo $email; ?></span>
        <span class="label"> <?php echo $allpoint; ?></span>

</body>
<body>
        <div class="bookmark">
</body>
<body>
        <div class="achievements">
        <div class="achievements-content">
            <h2>Achievements</h2>
           <!-- Add class "blurred" to certificate images -->
<!-- Add class "blurred" to certificate images conditionally -->
<img src="certificate_1.png" alt="certificate" class="certificate-pic <?php echo $allpoint > 10 ? '' : 'blurred'; ?>">
<img src="certificate_2.png" alt="certificate" class="certificate-pic <?php echo $allpoint > 50 ? '' : 'blurred'; ?>">
<img src="certificate_3.png" alt="certificate" class="certificate-pic <?php echo $allpoint > 100 ? '' : 'blurred'; ?>">

        </div>
    </div>
</body>
</html>