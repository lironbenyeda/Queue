import axios from 'axios';
export default class PollApi {
    static getPolls() {
        return axios.get('http://129.213.134.160/surveys').then(res=>{
            return res.data
        })
    }
    static postPoll(poll){
        return axios.post('http://129.213.134.160/surveys',poll).then(res=>{
            return res.data
        })
    }
    static updatePoll(poll){
        return axios.put('http://129.213.134.160/surveys/'+poll._id,poll).then(res=>{
            return res.data
        })
    }
}