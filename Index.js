const WhiteboardTools = document.querySelectorAll(
  ".Whiteboard_Area .Whiteboard_Tools .Tool"
);

WhiteboardTools.forEach(Tool => {
    Tool.addEventListener("click", () => {
        const Type = Tool.getAttribute("data-Tool");
        ClearWhiteboardTools();
        Tool.classList.add("Active");

        console.log(Type)
    });
})

function ClearWhiteboardTools() {
    WhiteboardTools.forEach(Tool => {
        Tool.classList.remove("Active");
    });
}


const TextBlocks = document.querySelectorAll(".Whiteboard_Area .Whiteboard .Text");
const Whiteboard = document.getElementById("Whiteboard");


function CreateTextBlock() {
  Whiteboard.innerHTML += `<div class="Text" contenteditable="true">Text</div>`;
}

TextBlocks.forEach(TextBlock => {
    console.log(TextBlock);
    TextBlock.addEventListener("click", (E) => {
        if (E.shiftKey) {
            TextBlock.style.resize = "horizontal";
        } else {
            TextBlock.style.resize = "both";
        }
    });
    TextBlock.addEventListener("keypress", (E) => {
        if (E.key == "delete") {
        //   Whiteboard.remove(TextBlock);
             console.log(TextBlock)
        }
    })
})