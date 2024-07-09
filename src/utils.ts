import { NewDiaryEntry } from "./types";
import { Wheather, Visibility } from './enums'

const isString = (text: any): boolean => {
    return typeof text === 'string' || text instanceof String;
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
}

const isWheather = (param: any): boolean => {
    return Object.values(Wheather).includes(param)
}

const isVisibility = (param: any): boolean => {
    return Object.values(Visibility).includes(param)
}

const parseDate = (dateFromRequest: any): string => {
    if (!dateFromRequest || !isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date: ' + dateFromRequest)
    }
    return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Wheather => {
    if (!isString(weatherFromRequest) || !isWheather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather: ' + weatherFromRequest)
    }
    return weatherFromRequest
}

const parseComment = (commentFromRequest: any): string => {
    if (!isString(commentFromRequest) || !commentFromRequest) {
        throw new Error('Incorrect or missing comment: ' + commentFromRequest)
    }
    return commentFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility: ' + visibilityFromRequest)
    }
    return visibilityFromRequest
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment)
    }
    return newEntry
}

export default toNewDiaryEntry