JSONEditor.defaults.options.theme = 'foundation5';
let settings = $.getJSON('../settings.json', function (arg) {

  // Initialize the editor
  var editor = new JSONEditor(document.getElementById("editor_holder"), {
    schema: {

    }
  });

  // Set the value


  const editJSON = arg.map(item => item)
  editor.setValue(
    editJSON[0]
  );


  // Get the value
  var data = editor.getValue();
  console.log(data); // "John Smith"

  // Validate
  var errors = editor.validate();
  if (errors.length) {
    // Not valid
  }

  // Listen for changes
  editor.on("change", function () {
    // Do something...
  });
})