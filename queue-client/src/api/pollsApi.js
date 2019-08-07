export default class PollApi {
    static getPolls() {
        return new Promise((resolve) => {
            resolve([
                {
                    question: 'מה ייתן המעבר לנגב?',                   
                    answers: [{
                        answer: 'תשובה של אלמ',
                        rank: 1

                    },
                    {
                        answer: 'תשובה של אלמ',
                        rank: 2

                    },
                    {
                        answer: 'תשובה של אלמ',
                        rank: 10

                    }],
                    sum:13

                },
                {
                    question: 'למה שלא נפתח את זה ביחידה?',
                    sum: 12,
                    answers: [{
                        answer: 'תשובה של אלמ',
                        rank: 5
                    },
                    {
                        answer: 'תשובה של אלמ',
                        rank: 4

                    },
                    {
                        answer: 'תשובה של אלמ',
                        rank: 3

                    }]
                }
            ])
        })
    }
}