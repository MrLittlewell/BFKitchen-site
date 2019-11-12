JSONEditor.defaults.options.theme = 'foundation5';


// Initialize the editor
var editor = new JSONEditor(document.getElementById("editor_holder"), {
  schema: {
    type: "object",
    properties: {
      name: {
        "type": "string"
      }
    }
  }
});

// Set the value

let settings = $.getJSON('../settings.json', function (data) {
  const editJSON = data.map(item => item)
  console.log(editJSON)
  editor.setValue(
    editJSON[0]
  );
})

// Get the value
var data = editor.getValue();
console.log(data.name); // "John Smith"

// Validate
var errors = editor.validate();
if (errors.length) {
  // Not valid
}

// Listen for changes
editor.on("change", function () {
  // Do something...
});