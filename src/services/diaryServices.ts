import { DiaryEntry, NewDiaryEntry, NonSesitiveDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSesitiveDiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id)
    if (entry) {
        const { comment, ...others } = entry
        return others
    }

    return undefined
}

export const getNonSensitiveEntries = (): NonSesitiveDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => ({
        id, date, weather, visibility
    }))
}
export const addEntry = (
    newDiaryEntry: NewDiaryEntry
): DiaryEntry => {
    const newEntry = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...newDiaryEntry
    }

    diaries.push(newEntry)
    return newEntry
}
