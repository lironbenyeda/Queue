export default class QuestionAPI{
    static getQuestions(){
        return new Promise((resolve)=>{
            resolve([
                {
                    question: 'מה ייתן המעבר לנגב?',
                    rank: 5,
                    answers: [{
                      answer: 'תשובה של אלמ',
                      date: new Date(),
                      user: 'מירון'
            
                    }],
                    date: new Date(),
                    isAnswered: false
            
                  },
                  {
                    question: 'למה שלא נפתח את זה ביחידה?',
                    rank: 100,
                    answers: [{
                      answer: 'תשובה של אלמ',
                      date: new Date(),
                      user: 'מירון'
            
                    }],
                    date: new Date(),
                    isAnswered: false
            
                  },
                  {
                    question: 'שיטה מעולה לתת לעם להגיד את דברו',
                    rank: 5,
                    answers: [{
                      answer: 'תשובה של אלמ',
                      date: new Date(),
                      user: 'מירון'
            
                    }],
                    date: new Date(),
                    isAnswered: false
            
                  },
                  {
                    question: '8 מה?',
                    rank: 5,
                    answers: [{
                      answer: 'תשובה של אלמ',
                      date: new Date(),
                      user: 'מירון'
            
                    }],
                    date: new Date(),
                    isAnswered: true
            
                  },
                  {
                    question: 'יאללה בית"ר',
                    rank: 1000000,
                    answers: [{
                      answer: 'תשובה של אלמ',
                      date: new Date(),
                      user: 'מירון'
            
                    }],
                    date: new Date(),
                    isAnswered: false
            
                  },                

            ])
        })
    }
}