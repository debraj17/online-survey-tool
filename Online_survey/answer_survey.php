<?php
include 'db_connection.php';

// Fetch surveys
$result = $conn->query("SELECT * FROM surveys");

echo "<h2>Answer Survey</h2>";
echo "<ul>";
while ($survey = $result->fetch_assoc()) {
    echo "<li><a href='survey.php?id=" . $survey['id'] . "'>" . $survey['title'] . "</a></li>";
}
echo "</ul>";
$conn->close();
?>
