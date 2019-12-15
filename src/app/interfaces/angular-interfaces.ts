import {Observable} from "rxjs/index";

export interface Todolist {
    _id: string;
    days: string;
    name: string;
    description: string;
    season: string;
    oneDayListId: Observable<OneDaylist[]>;
    imgurl: string;
    likes: string;
}

export interface OneDaylist {
    _id: string;
    name: string;
    day: string;
    description: string;
    location: string;
    imgurl: string;
    recommendPlaceId: string;
    distance: string;
    time: string;
    traveltime: string;
}

export interface Place {
    _id: string;
    typeOfPlace: string;
    name: string;
    description: string;
    time: string;
    tips: string;
    image: string;
    map: string;
    likes: string;
    reviews: string;
    location: string;
    tag: string;
    ticket: string;
    wiki: string;
}

export interface UserInfo {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    interestPlaces: string;
    preferredFood: string;
    toDoList: Observable<Todolist[]>;
    postedReviews: string;
    postedRatings: string;
    preferDistance: number,
    dietaryRestrictions: string
}

export interface Review {
    _id: string;
    name: string;
    description: string;
    userId: string;
    recommendedPlaceId: string;
    date: string;
}

export interface AjaxResponse<T> {
    success: boolean,
    errorMessage?: string,
    data: T
}