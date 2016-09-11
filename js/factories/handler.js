(function(){

    angular
        .module("quizAplication")
        .factory("handler", Handler);

        Handler.$inject  = ['data'];

        function Handler(data){

            var quizObj = {
                quizActive: false,
                resultsActive: false,
                selectedQuiz: null,
                correctAnswers: [],
                numCorrect: 0,
                ChangeState: ChangeState, //Named function below
                setSelectedQuiz: setSelectedQuiz, //Named function below
                markQuiz: markQuiz //Named function below
            };

            return quizObj;

            function ChangeState(type, state){
                if(type === "quiz"){
                    quizObj.quizActive = state;
                }else if(type === "results"){
                    quizObj.resultsActive = state;
                }else{
                    return false;
                }

            }

            function setSelectedQuiz(quiz){
                quizObj.selectedQuiz = quiz.questions;
                quizObj.correctAnswers = quiz.correctAnswers;
            }


            function markQuiz(){

                for(var i = 0; i < quizObj.correctAnswers.length; i++){

                    if(quizObj.selectedQuiz[i].selected === quizObj.correctAnswers[i]){

                        quizObj.selectedQuiz[i].correct = true;
                        quizObj.numCorrect++;

                    }else{

                        quizObj.selectedQuiz[i].correct = false;
                    }
                }

            }



        }
})();
