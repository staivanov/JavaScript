function increment(wrapper) {
  let content = $(wrapper);
  let fragment = document.createDocumentFragment();
  let textArea = $("<textarea class=\"counter\" disabled> </textarea>");
  textArea.val(0);
  let incrementBtn = $("<button id=\"incrementBtn\" class=\"btn\"> Increment </button>");
  let addBtn = $("<button id=\"addBtn\" class=\"btn\"> Add </button>");
  let ul = $("<ul class=\"results\"> </ul>");

  textArea.appendTo(fragment);
  incrementBtn.appendTo(fragment);
  addBtn.appendTo(fragment);
  ul.appendTo(fragment);

  incrementBtn.on("click", function () {
    let counter = textArea.val();
    counter++;
    textArea.val(counter);

  });

  addBtn.on("click", function () {
    let li = $("<li> </li>");
    let textAreaValue = textArea.val();
    li.text(textAreaValue);
    ul.append(li);
  });

  content.append(fragment);
}

