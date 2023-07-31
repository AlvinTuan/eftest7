export interface SurveyProperties {
    username: string
    civilwars: string
    libertyordeath: string
    magnacarta: string
}

export interface Survey {
    survey: SurveyProperties
}

export const initialState: Survey = {
    survey: { username: '', civilwars: '', libertyordeath: '', magnacarta: '' }
}
