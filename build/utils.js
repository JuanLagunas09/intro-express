"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isWheather = (param) => {
    return Object.values(types_1.Wheather).includes(param);
};
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
const parseDate = (dateFromRequest) => {
    if (!dateFromRequest || !isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date: ' + dateFromRequest);
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWheather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather: ' + weatherFromRequest);
    }
    return weatherFromRequest;
};
const parseComment = (commentFromRequest) => {
    if (isString(commentFromRequest) || !commentFromRequest) {
        throw new Error('Incorrect or missing date: ' + commentFromRequest);
    }
    return commentFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility: ' + visibilityFromRequest);
    }
    return visibilityFromRequest;
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
