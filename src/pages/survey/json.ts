export const json = {
    title: '15 minute test',
    showProgressBar: 'bottom',
    showTimerPanel: 'top',
    maxTimeToFinish: 900,
    firstPageIsStarted: true,
    startSurveyText: 'Start Quiz',
    pages: [
        {
            elements: [
                {
                    type: 'html',
                    html: 'you are testing your english knowledge on <b>EFtest</b>.</br> Enter your name below and click <b>Start Quiz</b> to begin.'
                },
                {
                    type: 'text',
                    name: 'username',
                    titleLocation: 'hidden',
                    isRequired: true,
                    maxLength: 25
                }
            ]
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    name: 'civilwar',
                    title: 'When was the American Civil War?',
                    choices: ['1796-1803', '1810-1814', '1861-1865', '1939-1945'],
                    correctAnswer: '1861-1865',
                    enableIf: '{civilwar} empty'
                }
            ]
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    name: 'libertyordeath',
                    title: 'Whose quote is this: "Give me liberty, or give me death"?',
                    choicesOrder: 'random',
                    choices: ['John Hancock', 'James Madison', 'Patrick Henry', 'Samuel Adams'],
                    correctAnswer: 'Patrick Henry',
                    enableIf: '{libertyordeath} empty'
                }
            ]
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    name: 'magnacarta',
                    title: 'What is Magna Carta?',
                    choicesOrder: 'random',
                    choices: [
                        'The foundation of the British parliamentary system',
                        'The Great Seal of the monarchs of England',
                        'The French Declaration of the Rights of Man',
                        'The charter signed by the Pilgrims on the Mayflower'
                    ],
                    correctAnswer: 'The foundation of the British parliamentary system',
                    enableIf: '{magnacarta} empty'
                }
            ]
        }
    ],
    completedHtml: '<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>',
    completedHtmlOnCondition: [
        {
            expression: '{correctAnswers} == 0',
            html: '<h4>Unfortunately, none of your answers is correct. Please try again.</h4>'
        },
        {
            expression: '{correctAnswers} == {questionCount}',
            html: '<h4>Congratulations! You answered all the questions correctly!</h4>'
        }
    ]
}
