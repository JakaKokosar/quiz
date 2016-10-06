(function(){

    angular
        .module('quizAplication')
        .controller('resultsCtrl', ResultsController);

        ResultsController.$inject = ['handler', 'data'];

        function ResultsController(handler, data){

            this.handler = handler;
            this.activeQuestion = 0;
            this.getAnswerClass = getAnswerClass; //Named function below
            this.setActiveQuestion = setActiveQuestion; //Named function below
            this.calculatePerc = calculatePerc; //Named function below
            this.reset = reset;


            function calculatePerc(){
                return handler.numCorrect / handler.correctAnswers.length * 100;
            }


            function setActiveQuestion(index){
                this.activeQuestion = index;
            }

            function getAnswerClass(index){
                if(index === handler.correctAnswers[this.activeQuestion]){
                    return "bg-success";
                }else if (index === handler.selectedQuiz[this.activeQuestion].selected){
                    return "bg-danger";
                }

            }

            function reset(){
                handler.ChangeState("results", false);
                handler.numCorrect = 0;
            }

        }


})();
