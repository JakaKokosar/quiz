(function(){

    angular
        .module('quizAplication')
        .controller('selectQuiz', listQuizzes)

        listQuizzes.$inject = ['handler', 'data'];

        function listQuizzes(handler, data){

            this.data = data.allQuizzes;
            this.search = "";
            this.handler = handler;
            this.activateQuiz = activateQuiz;

            function activateQuiz(selected){
                handler.ChangeState("quiz", true);
                handler.setSelectedQuiz(selected);
            }
        }
})();
