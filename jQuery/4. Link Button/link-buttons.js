function attachEvents() {
    let a = $("a");

    a.on("click", function () {

        let $self = $(this);
        if ($self.hasClass("selected")) {
            $self.removeClass("selected");
        }
        else {
            $self.addClass("selected");
        }
    });

}
