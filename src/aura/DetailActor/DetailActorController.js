({

    doInit: function(component, event, helper) {
        let actorOtherMoviesList = component.get("c.getActorDetails");
        debugger;
        actorOtherMoviesList.setParams({
            "actorId" : component.get("v.recordId")
        });

        actorOtherMoviesList.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS") {
                console.log(response.getReturnValue());
                component.set("v.otherActorMoviesList", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + response.getState());
            }
        });

        $A.enqueueAction(actorOtherMoviesList);
    }

})