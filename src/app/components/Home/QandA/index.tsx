// @ts-nocheck
'use client';
import React, { useState } from 'react';
import { MdArrowDropDownCircle, MdArrowDropUp } from 'react-icons/md';

const faqs = [
    {
        question: 'What is Lorem?',
        answer: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        question: 'How does Lorem Ipsum work?',
        answer: 'Lorem Ipsum works by providing placeholder text for design and layout purposes, allowing designers to focus on visual elements without being distracted by meaningful content.'
    },
    {
        question: 'Why use Lorem Ipsum?',
        answer: 'Lorem Ipsum is used because it is a neutral text that does not distract from the design and allows designers to focus on the visual aspects of a project.'
    },
    {
        question: 'Where does Lorem Ipsum come from?',
        answer: 'Lorem Ipsum comes from a work by Cicero, an ancient Roman statesman, orator, and author. The text has been used in the printing industry since the 1500s.'
    },
    {
        question: 'Is Lorem Ipsum copyright-free?',
        answer: 'Yes, Lorem Ipsum is based on a public domain text, so it is not subject to copyright restrictions.'
    },
    {
        question: 'Can I generate my own Lorem Ipsum?',
        answer: 'Yes, there are many tools available online that can generate Lorem Ipsum text based on your needs and preferences.'
    },
    {
        question: 'How long should my Lorem Ipsum text be?',
        answer: 'The length of your Lorem Ipsum text should match the amount of content needed for the design or layout, typically ranging from a few sentences to several paragraphs.'
    }
];

const QuestionAndAnswer = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq py-8 px-4 ">
            <div className="container mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-22 font-semibold text-_black">Frequently Asked Questions</h2>
                </div>
                <div className="faq-list">
                    <ul className="space-y-4">
                        {faqs.map((faq, index) => (
                            <li key={index} className="border border-_gray_light rounded-lg overflow-hidden">
                                <button
                                    className="w-full border-_gray text-left px-3 py-2 flex items-center justify-between focus:outline-none"
                                    type="button"
                                    onClick={() => handleToggle(index)}
                                >
                                    <span className="text-gray-700 text-14 font-medium">{faq.question}</span>
                                    <div className="flex items-center">
                                        {openIndex === index ? (
                                            <MdArrowDropUp className="text-gray-600" />
                                        ) : (
                                            <MdArrowDropDownCircle className="text-gray-600" />
                                        )}
                                    </div>
                                </button>
                                {openIndex === index && (
                                    <div className="p-4 bg-white">
                                        <p className="text-gray-800 text-12">{faq.answer}</p>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default QuestionAndAnswer;
