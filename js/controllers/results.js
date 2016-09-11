(function(){

    angular
        .module('quizAplication')
        .controller('resultsCtrl', ResultsController);

        ResultsController.$inject = ['handler', 'data'];

        function ResultsController(handler, data){

            this.handler = handler;
            this.activeQuestion = 0;
            this.getAnswerClass = getAnswerClass;
            this.setActiveQuestion = setActiveQuestion;
            this.calculatePerc = calculatePerc;


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

        }


})();
