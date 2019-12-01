export interface Todolist {
    _id: string;
    days: string;
    name: string;
    description: string;
    season: string;
    oneDayListId: string;
    imgurl: string;
    likes: string;
}

export interface AjaxResponse<T> {
    success: boolean,
    errorMessage?: string,
    data: T
}