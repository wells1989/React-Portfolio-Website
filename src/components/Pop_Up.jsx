import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styles } from '../styles'
import { common_questions } from '../constants';


const PopUp = () => {
    const [expanded, setExpanded] = React.useState(false);
    const [selectedQuestion, setSelectedQuestion] = React.useState(null);
    const boxRef = React.useRef(null);
    const buttonRef = React.useRef(null);

    const handleExpand = () => {
        setExpanded(!expanded);

        if (!expanded) {
            setSelectedQuestion(null);
        }
    }

    const handleQuestionClick = (questionId) => {
        if (selectedQuestion === questionId) {
            setSelectedQuestion(null);
        } else {
            setSelectedQuestion(questionId);
        }
    };

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (boxRef.current && !boxRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
                setExpanded(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (
        <div className="fixed bottom-0 left-0 w-full h-1/8 flex justify-between bg-primary text-white p-4 z-20">
            <Button onClick={handleExpand}
                className="flex-initial"
                ref={buttonRef}
                sx={{
                    color: 'gold',
                    fontSize: 'text-xs',
                    '@media (min-width: 640px)': {
                        fontSize: 'text-base',
                    },
                }}>
                Common Questions
            </Button>
            {expanded && (
                <Box component="section"
                    className="flex-initial z-10 fixed border-solid border-2 border-white left-0 bottom-16 bg-tertiary rounded-lg w-full sm:w-1/2 md:w-1/4 h-1/3 overflow-y-auto overflow-x-auto"
                    ref={boxRef}>
                    <ul className="flex flex-col justify-between align-left m-5 cursor-pointer">
                        {common_questions.map((common_question, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <li

                                        className={`${styles.heroSubText} m-3 hover:bg-gray-900 text-xs sm:text-base md:text-base lg:text-lg ${selectedQuestion === common_question.id ? 'underline' : ''}`}
                                        onClick={() => handleQuestionClick(common_question.id)}
                                    >
                                        {common_question.question}
                                    </li>
                                    {selectedQuestion === common_question.id && (
                                        <li className="answer ml-3 text-gold flex flex-wrap flex-row text-xs md:text-base lg:text-base">
                                            {common_question.answer}
                                        </li>
                                    )}
                                </React.Fragment>
                            )
                        })}
                    </ul>
                </Box>
            )}
        </div>
    );
};

export default PopUp;