let questions = [];

function showSurveyForm() {
  document.getElementById("surveyForm").style.display = "block";
}

function addOptions() {
  const questionType = document.getElementById("questionType").value;
  const optionsContainer = document.getElementById("optionsContainer");

  if (questionType === "multiple-choice" || questionType === "dropdown") {
    optionsContainer.style.display = "block";
  } else {
    optionsContainer.style.display = "none";
  }
}

function addOptionField() {
  const newOption = document.createElement("input");
  newOption.type = "text";
  newOption.className = "option-input";
  newOption.placeholder = "Enter option";
  document.getElementById("optionsList").appendChild(newOption);
}

function addQuestion() {
  const questionText = document.getElementById("questionText").value;
  const questionType = document.getElementById("questionType").value;

  const question = {
    text: questionText,
    type: questionType,
    options: []
  };

  if (questionType === "multiple-choice" || questionType === "dropdown") {
    const optionInputs = document.querySelectorAll("#optionsList .option-input");
    optionInputs.forEach(input => {
      if (input.value) question.options.push(input.value);
    });
  }

  questions.push(question);
  displayQuestions();
  resetForm();
}

function displayQuestions() {
  const questionList = document.getElementById("questionList");
  questionList.innerHTML = "";

  questions.forEach((question, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${index + 1}. ${question.text}</strong>`;

    if (question.type === "multiple-choice") {
      question.options.forEach(option => {
        const optionElement = document.createElement("div");
        optionElement.innerHTML = `<input type="radio" name="question${index}"> ${option}`;
        listItem.appendChild(optionElement);
      });
    } else if (question.type === "dropdown") {
      const selectElement = document.createElement("select");
      question.options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.textContent = option;
        selectElement.appendChild(optionElement);
      });
      listItem.appendChild(selectElement);
    } else if (question.type === "rating") {
      const starContainer = document.createElement("div");
      starContainer.classList.add("star-rating");
      for (let i = 0; i < 5; i++) {
        const star = document.createElement("i");
        star.classList.add("fas", "fa-star");
        starContainer.appendChild(star);
      }
      listItem.appendChild(starContainer);
    }

    questionList.appendChild(listItem);
  });
}

function resetForm() {
  document.getElementById("createSurveyForm").reset();
  document.getElementById("optionsList").innerHTML = "";
  document.getElementById("optionsContainer").style.display = "none";
}

function generateShareLink() {
  const surveyData = JSON.stringify(questions);
  const surveyLink = `https://example.com/survey-preview?data=${encodeURIComponent(surveyData)}`;
  
  document.getElementById("shareLink").value = surveyLink;
  document.getElementById("sharePopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("sharePopup").style.display = "none";
}
// Show Survey Form function
function showSurveyForm() {
    document.getElementById("surveyForm").style.display = "block";
  }
  
  // Redirect to Previous Surveys Page
  function goToPreviousSurveys() {
    window.location.href = "previous_surveys.html";
  }
  
  // Redirect Back to Survey Creation Page
  function goBack() {
    window.location.href = "survey_creation.html";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const surveyList = document.getElementById("survey-list");
    const questionCreator = document.getElementById("question-creator");
    const submitSurveyBtn = document.getElementById("submit-survey");
  
    // Placeholder data to represent survey questions added
    let questionsAdded = false;
  
    // Show submit button only when questions are added
    function checkQuestions() {
      if (questionsAdded) {
        questionCreator.classList.add("active");
      }
    }
  
    submitSurveyBtn.addEventListener("click", () => {
      alert("Survey submitted successfully!");
      // Logic for handling survey submission would go here.
    });
  
    surveyList.addEventListener("click", (e) => {
      if (e.target.classList.contains("answer-btn")) {
        alert("Survey answer feature would be implemented here.");
        // Logic for handling answering a survey
      }
    });
  });
  function addQuestion() {
    // Existing code to add questions
    // ...
  
    // Show the Submit Survey button when a question is added
    document.getElementById("submitSurveyButton").style.display = "block";
  }
  
  function submitSurvey() {
    alert("Survey submitted successfully!");
    // Clear form, questions list, and hide the submit button
    document.getElementById("questionList").innerHTML = "";
    document.getElementById("submitSurveyButton").style.display = "none";
    document.getElementById("createSurveyForm").reset();
  }
  let surveys = []; // Array to store created surveys
  let currentSurvey = { questions: [] }; // Object to hold the current survey's questions
  
  function showSurveyForm() {
    document.getElementById("surveyForm").style.display = "block";
  }
  
  function addQuestion() {
    const questionText = document.getElementById("questionText").value;
    const questionType = document.getElementById("questionType").value;
    const options = Array.from(document.querySelectorAll("#optionsList input")).map(input => input.value);
  
    const question = { questionText, questionType, options };
    currentSurvey.questions.push(question);
  
    const questionList = document.getElementById("questionList");
    const questionItem = document.createElement("li");
    questionItem.textContent = questionText;
    questionList.appendChild(questionItem);
  
    document.getElementById("submitSurveyButton").style.display = "block";
    document.getElementById("createSurveyForm").reset();
    document.getElementById("optionsContainer").style.display = "none";
  }
  
  function addOptions() {
    const questionType = document.getElementById("questionType").value;
    const optionsContainer = document.getElementById("optionsContainer");
  
    if (questionType === "multiple-choice" || questionType === "dropdown") {
      optionsContainer.style.display = "block";
    } else {
      optionsContainer.style.display = "none";
    }
  }
  
  function addOptionField() {
    const optionsList = document.getElementById("optionsList");
    const optionInput = document.createElement("input");
    optionInput.type = "text";
    optionInput.placeholder = "Option";
    optionsList.appendChild(optionInput);
  }
  
  function submitSurvey() {
    surveys.push(currentSurvey);
    localStorage.setItem("surveys", JSON.stringify(surveys));
  
    alert("Survey submitted successfully!");
    window.location.href = "answer_survey.html";
  }
      
  