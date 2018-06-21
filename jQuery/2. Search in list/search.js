function search() {
    let searchedTextValue = $("#searchText").val();
    let li = $("li");
    let result = $("#result");
    let matches = 0;

    for (let a = 0; a < li.length; a++) {

        let town = li.eq(a).text();

        if (town.search(searchedTextValue) >= 0) {
            li.eq(a).html("<b>" + town + "</b>");
            matches++;
        }

    }

    result.text(matches + " matches found");

}