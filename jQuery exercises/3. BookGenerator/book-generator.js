
let counter = 1;

function createBook() {
    let fragment = document.createDocumentFragment();
    let divWrapper = $(arguments[0]),
        title = arguments[1],
        author = arguments[2],
        isbn = arguments[3],
        bookContentDiv = $("<div> </div>"),
        selectBtn = $("<button> </button>").text("Select"),
        deselectBtn = $("<button> </button>").text("Deselect");

    bookContentDiv.attr({
        id: "book" + counter
    });

    selectBtn.on("click", function () {
        bookContentDiv.css("border", "2px solid blue");
    });

    deselectBtn.on("click", function () {
        bookContentDiv.css("border", "none");
    });

    $("<p> </p>").addClass("title").text(title).appendTo(fragment);
    $("<p> </p>").addClass("author").text(author).appendTo(fragment);
    $("<p> </p>").addClass("isbn").text(isbn).appendTo(fragment);
    selectBtn.appendTo(fragment);
    deselectBtn.appendTo(fragment);
    divWrapper.append(bookContentDiv.append(fragment));
    counter++;
}
