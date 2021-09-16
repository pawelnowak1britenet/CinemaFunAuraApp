({
    getSearchResultsToFront: function (component, queryString, callback, searchMovies){
        let getSearchResultsAction;
        if (searchMovies){
            getSearchResultsAction = component.get("c.getMoviesList");
        } else {
            getSearchResultsAction = component.get("c.getActorsList");
        }

        //refaktor zamiast rozdzielać TUTAJ to if a Apexie,
//        część metody z ControleraJS przenieść do helperJS
        getSearchResultsAction.setParams({
            "searchQuery": queryString
        });
        getSearchResultsAction.setCallback(this, callback);
        $A.enqueueAction(getSearchResultsAction);
    }
})