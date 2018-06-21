function extractText() {

    let allLiContent = $("ul").text();
    let resultDiv = $("#result");
    resultDiv.append(allLiContent);
}
