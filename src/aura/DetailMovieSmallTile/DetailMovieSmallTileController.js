({
    openMovieDetail : function(component, event, helper){
        var appEvent = $A.get("e.c:passDataToResultDetail");
        appEvent.setParams({
            "searchType" : "Movie",
            "recordId" : component.get("v.otherMovieTile.id"),
            "recordData" : component.get("v.otherMovieTile")
            });
        appEvent.fire();
    }
})