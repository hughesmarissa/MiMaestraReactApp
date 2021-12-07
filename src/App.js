import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import './app.css';

function App() {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

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
