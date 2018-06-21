function attachEvents() {

    let $lis = $("li");

    $lis.on("click", function () {
        let $self = $(this);

        if ($self.hasClass("selected")) {
            $self.removeClass("selected");
            $self.css("backgroundColor", "white");
        } else {
            $self.css("backgroundColor", "#DDD");
            $self.addClass("selected");
        }
    });

    let showTownsButton = $("button#showTownsButton");

    showTownsButton.on("click", function () {

        let resultDiv = $("div#selectedTowns");

        resultDiv.text(function () {
            let liClassSelected = $("li.selected");
            let towns = [];

            for (let key in liClassSelected.get()) {
                towns.push(liClassSelected[key].textContent);
            }
            let formatedTowns = towns.join(", ");
            return "Selected towns: " + formatedTowns;
        });

    });



}
