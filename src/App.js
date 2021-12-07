import React, { useState, useEffect } from 'react';
import FlashcardList from './FlashcardList';
import './app.css';

// api import 
import axios from 'axios';

function App() {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

    useEffect(() => {
        axios
            .get('https://opentdb.com/api.php?amount=10')
            .then(res => {
                setFlashcards(res.data.results.map((questionItem, index) => {
                    const answer = decodeString(questionItem.correct_answer);
                    const options = [
                        ...questionItem.incorrect_answers.map(a => decodeString(a)), 
                        answer
                    ]
                    return {
                        id: `${index}-${Date.now()}`,
                        question: decodeString(questionItem.question),
                        answer: questionItem.correct_answer,
                        options: options.sort(() => Math.random() - .5)
                    }
                }))
            })
    }, []);

function decodeString(str) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str
    return textArea.value;
}

  return (
    <FlashcardList flashcards={flashcards} />
  )
}

const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        question: 'What is your name?',
        answer: 'Cual es su nombre?',
        options: [
            'Cual es su nombre?',
            'Mucho gusto',
            'Buenos Dias',
            'Quieres comida?'
        ]
    },
    {
        id: 2,
        question: 'Where are you from?',
        answer: 'De donde eres?',
        options: [
            'Te conozco?',
            'Encantado',
            'De donde eres?',
            'Quieren comida?'
        ]
    },
    {
        id: 3,
        question: 'What would you like to eat?',
        answer: 'Qué te gustaría comer?',
        options: [
            'Qué te gustaría comer?',
            'Mucho gusto?',
            'Encantado',
            'Buenas tardes?'
        ]
    }
]


export default App;
