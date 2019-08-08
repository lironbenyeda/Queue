import axios from 'axios'

export default class QuestionAPI{
    static getQuestions(){
        return axios.get('http://129.213.134.160/questions').then(data=>{
            return data.data
        })
    }
    static postQuestion(question){
        return axios.post('http://129.213.134.160/questions',{text:question}).then(data=>{
            return data.data
        })
    }
    static updateQuestion(question){
        return axios.put('http://129.213.134.160/questions/'+question._id,question).then(data=>{
            return data.data
        })
    }
    static getByDate(date){
        return axios.get('http://129.213.134.160/questions/?startdate='+date).then(data=>{
            return data.data
        })
    
    }
}