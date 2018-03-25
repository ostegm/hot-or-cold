import React from 'react'
import './MessageSection.css'

export default function MessageSection(props) {
  const guesses = props.guesses.map((guess, index) => {
    return <li key={index}>{guess}</li>
  })
  return (
    <div>
      <h2>{props.text}</h2>
      <p>Your guesses:</p>
      <ul>{guesses}</ul>
    </div>
    )
};

