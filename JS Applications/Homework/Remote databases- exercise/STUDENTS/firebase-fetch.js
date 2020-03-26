export const apiKey=`https://liststudents-2.firebaseio.com/`;

export const getAllStudents=()=>{
    return fetch(apiKey+'.json').then(X=>X.json());
}