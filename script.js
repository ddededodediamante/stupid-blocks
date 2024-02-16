// Initialize Blockly workspace
const customTheme = Blockly.Theme.defineTheme("customTheme", {
  base: Blockly.Themes.Classic,
  blockStyles: {
    logic_blocks: {
      colourPrimary: "#42A5F5",
    },
    loop_blocks: {
      colourPrimary: "#ffbb4d",
    },
    math_blocks: {
      colourPrimary: "#ba68c8",
    },
    text_blocks: {
      colourPrimary: "#66bb6a",
    },
    list_blocks: {
      colourPrimary: "#FF7043",
    },
    colour_blocks: {
      colourPrimary: "#9575CD",
    },
    variable_blocks: {
      colourPrimary: "#EC407A",
    },
    procedure_blocks: {
      colourPrimary: "#26C6DA",
    }
  },
  componentStyles: {},
  startHats: true,
});

const workspace = Blockly.inject("blocklyDiv", {
  toolbox: document.getElementById("toolbox"),
  grid: {
    spacing: 20,
    length: 3,
    colour: "#ccc",
    snap: false,
  },
  trashcan: true,
  theme: customTheme,
  renderer: "zelos",
  sounds: true,
  zoom: {
    controls: true,
    wheel: true,
    startScale: 1.0,
    maxScale: 3,
    minScale: 0.2,
    scaleSpeed: 1.2,
    pinch: true,
  },
});

let localSaveCount = 7;

function updateCode(event) {
  if (event.type == "viewport_change" || event.type == "toolbox_item_select")
    return;

  localSaveCount -= 1;

  if (localSaveCount < 0) {
    localSaveCount = 7;

    var xmlDom = Blockly.Xml.workspaceToDom(workspace);
    var xmlText = Blockly.Xml.domToText(xmlDom);

    if (xmlText == "") return;

    localStorage.setItem("recoverXmlProject", xmlText);
  }

  var code = Blockly.JavaScript.workspaceToCode(workspace);
  Blockly.JavaScript.addReservedWords("code");
  document.getElementById("generatedCodeBlockly").textContent = code;
}

function runCode() {
  try {
    var workspaceCode = Blockly.JavaScript.workspaceToCode(workspace);
    eval(workspaceCode);
  } catch (err) {
    window.alert(err);
  }
}

workspace.addChangeListener(updateCode);
updateCode({ type: "yourmum" });

// Function to save workspace to a file
function saveToFile() {
  var xmlDom = Blockly.Xml.workspaceToDom(workspace);
  var xmlText = Blockly.Xml.domToText(xmlDom);

  var fileName = prompt("Enter a file name (without extension):", "Blockly");

  if (fileName === null) {
    return;
  }

  fileName += ".sbdv"; // File format

  var blob = new Blob([xmlText], { type: "application/xml" });
  var link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
  link.remove();
}

function loadFromFile() {
  var fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = ".sbdv"; // File format

  fileInput.addEventListener("change", function (e) {
    var file = e.target.files[0];

    if (file) {
      var reader = new FileReader();

      reader.onload = function (event) {
        var xmlData = event.target.result;
        workspace.clear();

        var parser = new DOMParser();
        var xmlDom = parser.parseFromString(xmlData, "application/xml");

        Blockly.Xml.domToWorkspace(xmlDom.documentElement, workspace);

        updateCode({ type: "yourmum" });
      };

      reader.readAsText(file);
    }
  });

  fileInput.click();
  fileInput.remove();
}

function recoverProject() {
  if (
    window.confirm(
      "Are you sure? This should only be used if your project could not saved or for other cases. If you confirm, the current project will be replaced will the last attempted saved project!"
    )
  ) {
    const recoverData = localStorage.getItem("recoverXmlProject");

    if (
      recoverData == null ||
      recoverData ==
        '<xml xmlns="https://developers.google.com/blockly/xml"></xml>'
    ) {
      return window.alert("Project couldn't be recovered");
    } else {
      workspace.clear();

      var parser = new DOMParser();
      var xmlDom = parser.parseFromString(recoverData, "application/xml");

      Blockly.Xml.domToWorkspace(xmlDom.documentElement, workspace);

      updateCode({ type: "yourmum" });
    }
  }
}
