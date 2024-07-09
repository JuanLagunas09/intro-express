//export type Wheather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
//export type Visibility = 'great' | 'good' | 'ok' | 'poor' | 'bad'

import { Wheather, Visibility } from './enums'

export interface DiaryEntry {
  id: number
  date: string
  weather: Wheather
  visibility: Visibility
  comment: string
}

/* export type NonSesitiveDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'> */ // genera un tipado unicamente con los campos que se le pasan de DiaryEntry

export type NonSesitiveDiaryEntry = Omit<DiaryEntry, 'comment'> // genera un tipado sin el campo comment de DiaryEntry
export type NewDiaryEntry = Omit<DiaryEntry, 'id'> // genera un tipado sin el campo id de DiaryEntry

/* interface SpecificDiaryEntry extends DiaryEntry {
    flightNumber: number; // Hereda de DiaryEntry todos los campos y añade uno nuevo
}; */
