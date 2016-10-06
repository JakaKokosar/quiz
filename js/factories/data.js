(function(){


    angular
        .module("quizAplication")
        .factory("data", Data);

        function Data(){

            var dataObj = {
                allQuizzes: allQuizzes,
                correctAnswers: correctAnswers
            };

            return dataObj;
        }



    var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3];

    var allQuizzes  = [
        {
            naslov: "Testni kviz",
            stevilo_vprasanj: 11,
            tezavnost: "Srednje",
            picture: "pics/test.jpg",
            correctAnswers : [2, 1, 3, 0, 2, 1, 1],

            questions:[

                {
                    type: "text",
                    text: "Ali veš, kje je šolska knjižnica?",
                    possibilities: [
                        {
                            answer: "V prvem nadstropju naše šole."
                        },
                        {
                            answer: "V drugem nadstropju naše šole."
                        },
                        {
                            answer: "V pritličju."
                        },
                        {
                            answer: "V kuhinji."
                        }
                    ],
                    selected: null,
                    correct: null
                },
                {
                    type: "text",
                    text: "Ali je šolska knjižnica namenjena samo izposoji knjig?",
                    possibilities: [
                        {
                            answer: "Da"
                        },
                        {
                            answer: "Ne"
                        }
                    ],
                    selected: null,
                    correct: null
                },
                {
                    type: "image",
                    text: "Kaj od naštetega v knjižnici lahko počneš?",
                    possibilities: [
                        {
                            answer: "Jem in pijem"
                        },
                        {
                            answer: "Se skrivam med policami"
                        },
                        {
                            answer: "Se lovim"
                        },
                        {
                            answer: "Si izposojam knjige"
                        }
                    ],
                    selected: null,
                    correct: null
                },
                {
                    type: "image",
                    text: "Kdaj po urniku lahko obiščeš in si izposojaš knjige v šolski knjižnici?",
                    possibilities: [
                        {
                            answer: "Vsak dan."
                        },
                        {
                            answer: "Vsak drugi dan."
                        },
                        {
                            answer: "Samo med počitnicami."
                        },
                        {
                            answer: "V nedeljo."
                        }
                    ],
                    selected: null,
                    correct: null
                },
                {
                    type: "text",
                    text: "Kje najdeš urnik, ki ti pove, kdaj si lahko izposodiš knjige iz šolske knjižnice?",
                    possibilities: [
                        {
                            answer: "Na vratih tajništva."
                        },
                        {
                            answer: "Pri ravnateljici."
                        },
                        {
                            answer: "Na vratih knjižnice."
                        },
                        {
                            answer: "V Kuhinji."
                        }
                    ],
                    selected: null,
                    correct: null
                },
                {
                    type: "text",
                    text: "Koliko časa imaš lahko izposojene knjige?",
                    possibilities: [
                        {
                            answer: "1 teden – 7 dni"
                        },
                        {
                            answer: "3 tedne – 21 dni"
                        },
                        {
                            answer: "2 tedna – 14 dni"
                        },
                        {
                            answer: "5 dni"
                        }
                    ],
                    selected: null,
                    correct: null
                },
                {
                    type: "text",
                    text: "V knjižnici knjige",
                    possibilities: [
                        {
                            answer: "Kupimo"
                        },
                        {
                            answer: "Si jih izposodimo"
                        },
                        {
                            answer: "Uničujemo"
                        },
                        {
                            answer: "Krademo"
                        }
                    ],
                    selected: null,
                    correct: null
                }]
        }
        ];

})();
