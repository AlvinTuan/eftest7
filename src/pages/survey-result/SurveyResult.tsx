/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Model, Question } from 'survey-core'
import { Survey } from 'survey-react-ui'
import 'survey-core/defaultV2.min.css'
import './SurverResult.scss'
import { json } from './json'
import { themeJson } from './theme'
import { useAppSelector } from '~/redux/hooks'

export default function SurveyResult() {
    const surveyForm = useAppSelector(state => state.surveyForm.survey)
    console.log(surveyForm);
    const survey = new Model(json)
    // You can delete the line below if you do not use a customized theme
    survey.applyTheme(themeJson)
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3))
    })
    survey.data = {
        civilwar: surveyForm.civilwars,
        libertyordeath: surveyForm.libertyordeath,
        magnacarta: surveyForm.magnacarta
    }

    survey.mode = 'display'
    survey.questionsOnPageMode = 'singlePage'
    survey.showNavigationButtons = 'none'
    survey.showProgressBar = 'off'
    survey.showTimerPanel = 'none'
    survey.maxTimeToFinishPage = 0
    survey.maxTimeToFinish = 0
    const correctStr = 'Correct'
    const inCorrectStr = 'Incorrect'

    function getTextHtml(text: string, str: string, isCorrect: boolean) {
        if (text.indexOf(str) < 0) return undefined
        return (
            text.substring(0, text.indexOf(str)) +
            "<span class='" +
            (isCorrect ? 'correctAnswer' : 'incorrectAnswer') +
            "'>" +
            str +
            '</span>'
        )
    }
    function isAnswerCorrect(q: { correctAnswer: any; isEmpty: () => any; value: any }) {
        const right = q.correctAnswer
        if (!right || q.isEmpty()) return undefined
        let left = q.value
        if (!Array.isArray(right)) return right == left
        if (!Array.isArray(left)) left = [left]
        for (let i = 0; i < left.length; i++) {
            if (right.indexOf(left[i]) < 0) return false
        }
        return true
    }

    function renderCorrectAnswer(q: Question) {
        if (!q) return
        const isCorrect = isAnswerCorrect(q)
        if (!q.prevTitle) {
            q.prevTitle = q.title
        }
        if (isCorrect === undefined) {
            q.title = q.prevTitle
        }
        q.title = q.prevTitle + ' ' + (isCorrect ? correctStr : inCorrectStr)
    }

    survey.onValueChanged.add((sender, options) => {
        renderCorrectAnswer(options.question)
    })

    survey.onTextMarkdown.add((sender, options) => {
        const text = options.text
        let html = getTextHtml(text, correctStr, true)
        if (!html) {
            html = getTextHtml(text, inCorrectStr, false)
        }
        if (html) {
            options.html = html
        }
    })

    survey.getAllQuestions().forEach((q) => renderCorrectAnswer(q))
    return <Survey model={survey} />
}
