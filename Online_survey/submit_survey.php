<?php
include 'db_connection.php';

$title = $_POST['title'];
$description = $_POST['description'];
$creation_date = date('Y-m-d H:i:s');
$questions = $_POST['questions'];

// Insert survey
$stmt = $conn->prepare("INSERT INTO surveys (title, description, creation_date) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $title, $description, $creation_date);
$stmt->execute();
$survey_id = $stmt->insert_id;
$stmt->close();

// Insert questions and options
foreach ($questions as $question) {
    $stmt = $conn->prepare("INSERT INTO questions (survey_id, question_text, question_type) VALUES (?, ?, ?)");
    $stmt->bind_param("iss", $survey_id, $question['text'], $question['type']);
    $stmt->execute();
    $question_id = $stmt->insert_id;

    if ($question['type'] == 'multiple_choice' || $question['type'] == 'dropdown') {
        foreach ($question['options'] as $option) {
            $stmt = $conn->prepare("INSERT INTO options (question_id, option_text) VALUES (?, ?)");
            $stmt->bind_param("is", $question_id, $option);
            $stmt->execute();
        }
    }
    $stmt->close();
}

echo "Survey created successfully!";
$conn->close();
?>
