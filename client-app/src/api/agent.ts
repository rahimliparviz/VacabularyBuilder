import axios, { AxiosResponse } from 'axios';
import {IWord} from '../models/IWord'

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response:AxiosResponse)=>response.data;

const requests = {
    get:(url:string)=>axios.get(url).then(responseBody),
    post:(url:string,body:{})=>axios.post(url,body).then(responseBody),
    put:(url:string,body:{})=>axios.put(url,body).then(responseBody),
    del:(url:string)=>axios.delete(url).then(responseBody),
    postForm :(url:string,file:Blob)=>{
        let formData = new FormData();
        formData.append('File',file)
        return axios.post(url,formData,{
            headers: {'Content-type': 'multipart/form-data'}
        }).then(responseBody)
    }
}

const Words = {
    list : ():Promise<IWord[]> => requests.get('/words'),
    delete:(id:string)=>requests.del(`words/${id}`),
    update:(word:IWord)=>requests.put(`words/${word.id}`,word),
    create: (word: IWord) => requests.post('/words', word),
}

export default {
    Words
}