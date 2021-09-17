({
    openActorDetail : function(component, event, helper){
        console.log('Kliknieto aktora');
        console.log(component.get("v.item.id"));
        var appEvent = $A.get("e.c:passDataToResultDetail");
               appEvent.setParams({
                   "type" : "actor",
                   "recordId" : component.get("v.item.id")
                    });
               appEvent.fire();
    }
})