import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";
import QuestionForm from "./QuestionForm";


function QuestionList() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((questions) => setQuestions(questions))
  }, [])

function handleAddItem(newItem) {
  setQuestions([...questions, newItem])
}

function handleDeleteItem(deletedItem) {
  const updatedItems = questions.filter((question) =>
  question.id !==deletedItem.id)
  setQuestions(updatedItems)
}
  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <QuestionForm onAddItem={handleAddItem}/>
      <ul>
        {questions.map((question) => (
          <QuestionItem 
            key={question.id} 
            question={question}
            onDeleteItem={handleDeleteItem}
          />
        ))}
       
      </ul>
    </section>
  );
}

export default QuestionList;
