<?php
// Include your database connection code here
$db_host = "localhost";
$db_username = "root";
$db_password = "";
$db_name = "javaboi";

$db_connection = new mysqli($db_host, $db_username, $db_password, $db_name);

if ($db_connection->connect_error) {
    die("Connection failed: " . $db_connection->connect_error);
}

// Query to retrieve user scores
$query = "SELECT username, points FROM user_info ORDER BY points DESC";
$result = $db_connection->query($query);

if ($result->num_rows > 0) {
    $scoreboardData = array();
    while ($row = $result->fetch_assoc()) {
        $scoreboardData[] = $row;
    }
} else {
    $scoreboardData = array();
}

// Close the database connection
$db_connection->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scoreboard</title>
    <link rel="stylesheet" href="styles1.css">
    <style>
        table {
            border-collapse: collapse;
            width: 50%;
            margin: 20px auto;
        }
        th, td {
            border: 3px solid  ;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #9e0bdd;
        }
        h1 {
            padding: 15px;
        }
    </style>
</head>
<header>
        <h2 class="logo">Data structures</h2>
            <nav class="navigation">
                  <a href="competency.php">Competency</a>                
                  <a href="topic.php">Level</a>
                  <a href="login.html" class="btnlogout">LOG OUT</a> 
 
             </nav>
   </header>
<body>
    <h1>Scoreboard</h1>
    <?php if (!empty($scoreboardData)) : ?>
        <table>
            <tr>
                <th>Username</th>
                <th>Score</th>
            </tr>
            <?php foreach ($scoreboardData as $row) : ?>
                <tr>
                    <td><?php echo htmlspecialchars($row['username']); ?></td>
                    <td><?php echo $row['points']; ?></td>
                </tr>
            <?php endforeach; ?>
        </table>
    <?php else : ?>
        <p>No scores found.</p>
    <?php endif; ?>
    <style>
        /* Style for the form */
        form {
            text-align: center;
            margin-top: 20px;
        }

        /* Style for the submit button */
        input[type="submit"] {
            background-color: #f4ff;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
        }
    </style>
    <form method="post" action="overall_scoreboard.php">
        <input type="submit"  name="update_allpoints" value="overall scoreboard">
    </form>
</body>
</html>
