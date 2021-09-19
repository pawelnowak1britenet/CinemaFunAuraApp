({
        showModal: function(component, event, helper) {
            var modalBody;
            var searchMovies = component.get("v.searchMovies");
            var item = component.get("v.item");

            $A.createComponent("c:ResultDetails", {
                searchType : searchMovies,
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
                            closeCallback: function() {console.log('Zamknieto modal')}
                        })
                    }
                 }
            );
        }
})
