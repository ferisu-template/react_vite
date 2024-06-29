import React from 'react';
import UseTitle from '../../components/UseTitle';

function Faq() {
  UseTitle('FAQ');

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <p>Welcome to our FAQ page. Here you can find answers to common questions.</p>
      <ul>
        <li>Question 1: What is Lorem Ipsum?</li>
        <li>Answer 1: Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
        <li>Question 2: Why do we use it?</li>
        <li>Answer 2: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</li>
        {/* Add more questions and answers as needed */}
      </ul>
    </div>
  );
}

export default Faq;
