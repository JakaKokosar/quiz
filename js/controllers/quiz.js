(function(){

    angular
        .module('quizAplication')
        .controller('quizCtrl', QuizController);

    QuizController.$inject = ['handler'];

    function QuizController(handler){

        this.handler = handler;
        this.activeQuestion = 0;
        this.error = false;
        this.finalise = false;
        this.nextButton = "Naslednje vprašanje";
        this.questionAnswered = questionAnswered; //Named function below
        this.setActiveQuestion = setActiveQuestion; //Named function below
        this.selectAnswer = selectAnswer; //Named function below
        this.finaliseAnswers = finaliseAnswers; //Named function
        this.reset = reset; //Named function below

        var progress = 0;

        function reset(){
            handler.ChangeState("quiz", false);
            handler.numCorrect = 0;

        }

        function setActiveQuestion(index){

            this.nextButton = "Naslednje vprašanje";
            var quizLenght = handler.selectedQuiz.length - 1;

            if(index !== undefined){
                if(index === quizLenght){this.nextButton = "Zaključi kviz";}
                this.activeQuestion = index;
                return;
            }

            var found = false;


            while(!found){
                this.activeQuestion = this.activeQuestion < quizLenght ? ++this.activeQuestion : 0;

                if(this.activeQuestion === 0){
                    this.error = true;
                }

                if(handler.selectedQuiz[this.activeQuestion].selected === null){
                    found = true;
                }
            }

            if(this.activeQuestion === quizLenght){this.nextButton = "Zaključi kviz";}

        }

        function questionAnswered(){

            var quizLenght = handler.selectedQuiz.length;
            progress = 0;

            for(var x = 0; x < quizLenght; x++){
                if(handler.selectedQuiz[this.activeQuestion].selected !== null){
                    progress++;
                    if (progress >= quizLenght){
                        for(var i = 0; i < quizLenght; i++){
                            if(handler.selectedQuiz[i].selected === null){
                                this.setActiveQuestion(i);
                                console.log("set this " + i);
                                console.log("this " + this.activeQuestion);
                                return;
                            }
                        }

                        this.error = false;
                        this.finalise = true;
                        return;
                    }
                }
            }
            this.setActiveQuestion();
        }

        function selectAnswer(index){
            handler.selectedQuiz[this.activeQuestion].selected = index;
        }

        function finaliseAnswers(){

            this.finalise = false;
            this.activeQuestion = 0;
            progress = 0;

            handler.markQuiz();
            handler.ChangeState("quiz", false);
            handler.ChangeState("results", true);

        }
    }


})();






















