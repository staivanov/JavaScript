function initializeTable() {

    let tableBody = $("#countriesTable tbody");
    let userCountryText = $("#newCountryText").val();
    let userCapitalText = $("#newCapitalText").val();
    let tdCountry = $("<td> </td>");
    let tdCapital = $("<td> </td>");
    let tr = $("<tr> </tr>");

    tdCountry.text(userCountryText);
    tdCapital.text(userCapitalText);
    tdCountry.appendTo(tr.appendTo(tableBody));
    tdCapital.appendTo(tr.appendTo(tableBody));

    let rowUp = $("<td> <a href=\"#\"> [Up] </a> </td>").appendTo(tr.appendTo(tableBody));
    let rowDown = $("<td> <a href=\"#\"> [Down] </a> </td>").appendTo(tr.appendTo(tableBody));
    let deleteLink = $("<td> <a href=\"#\"> [Delete] </a> </td>").appendTo(tr.appendTo(tableBody));


    rowDown.on("click", function () {
        let nextTr = $(this).parent().next();
        let currentTr = $(this).parent();
        currentTr.insertAfter(nextTr);
    });

    rowUp.on("click", function () {
        let prevTr = $(this).parent().prev();
        let currentTr = $(this).parent();
        currentTr.insertBefore(prevTr);
    });

    deleteLink.on("click", function () {
        $(this).parent().remove();
    });
}


let create = $("#createLink");
create.on("click", initializeTable);

