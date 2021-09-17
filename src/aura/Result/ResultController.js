({
        show: function (component, event, helper) {
            alert("You clicked: " + event.getSource().get("v.label"));
            var componentToToggle = component.find("lastResult");
            $A.util.toggleClass(componentToToggle,'lastResult');
        },

        showModal: function(component, event, helper) {
            var modalBody;
            var searchMovies = component.get("v.searchMovies");
            var item = component.get("v.item");

            $A.createComponent("c:ResultDetails", {
                type : searchMovies ? 'movie' : 'actor',
                recordId : item.id,
                urlFoto : item.backdrop_path,
                item : item
                },
                function(content, status) {
                    if (status === "SUCCESS") {
                        modalBody = content;
                        component.find('overlayLib').showCustomModal({
                            body: modalBody,
                            //showCloseButton: true,
                            cssClass: "",
                            closeCallback: function() {}
                        })
                    }
                 }
            );
        }
})
