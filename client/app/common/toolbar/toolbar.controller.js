class ToolbarController {
  constructor() {
    this.name = 'toolbar';
    let eCount = 1;
    let hCount = 0;
    let zCount = 0;

    // $( "#elObj" ).draggable();

    /* Events fired on the drag target */

    document.addEventListener("dragstart", function(event) {
      // The dataTransfer.setData() method sets the data type and the value of the dragged data
      let dragData = '';
      if(event.target.id === 'el-h1'){
        dragData = "H1"
      } else if(event.target.id === 'el-h2'){
          dragData = "H2"
      } else if(event.target.id === 'el-h3'){
        dragData = "H3"
      }
      switch (event.target.id) {
        case 'el-h1':
          dragData = "H1"
          break;
        case 'el-h2':
          dragData = "H2"
          break;
        case 'el-h3':
          dragData = "H3"
          break;
        case 'el-h4':
          dragData = "H4"
          break;
        case 'el-h5':
          dragData = "H5"
          break;
        case 'el-h6':
          dragData = "H6"
          break;
        case 'el-text':
          dragData = "P"
          break;
        case 'el-rect':
          dragData = "SPAN"
          break;
        case 'el-circle':
          dragData = "CIRCLE"
          break;
        case 'el-button':
          dragData = "BUTTON"
          break;
        case 'el-primary':
          dragData = "PRIMARY"
          break;
        case 'el-danger':
          dragData = "DANGER"
          break;
        case 'el-input':
          dragData = "INPUT"
          break;
        case 'el-textarea':
          dragData = "TEXTAREA"
          break;
        case 'el-check':
          dragData = "CHECKBOX"
          break;
        case 'el-radio':
          dragData = "RADIO"
          break;
        case 'el-select':
          dragData = "SELECT"
          break;
        case 'el-panel':
          dragData = "PANEL"
          break;
        case 'el-image':
          dragData = "IMG"
          break;
        case 'el-icon':
          dragData = "I"
          break;
      }

      event.dataTransfer.setData("text/html", dragData);
      // console.log(event.dataTransfer);
      // event.dataTransfer.setData("text/html", event.target.id);
      // Change the opacity of the draggable element
      event.target.style.opacity = "0.1";
    });

    // While dragging the p element, change the color of the output text
    document.addEventListener("drag", function(event) {
      // document.getElementById("demo").style.color = "red";
    });

    // Output some text when finished dragging the p element and reset the opacity
    document.addEventListener("dragend", function(event) {
      // document.getElementById("demo").innerHTML = "Finished dragging the p element.";
      event.target.style.opacity = "1";
    });


    /* Events fired on the drop target */

    // When the draggable p element enters the droptarget, change the DIVS's border style
    document.addEventListener("dragenter", function(event) {
      if ( event.target.className == "droptarget" ) {
        event.target.style.border = "3px dotted red";
      }
    });

    // By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
    document.addEventListener("dragover", function(event) {
      event.preventDefault();
    });

    // When the draggable p element leaves the droptarget, reset the DIVS's border style
    document.addEventListener("dragleave", function(event) {
      if ( event.target.className == "droptarget" ) {
        event.target.style.border = "";
      }
    });

    /* On drop - Prevent the browser default handling of the data (default is open as link on drop)
       Reset the color of the output text and DIV's border color
       Get the dragged data with the dataTransfer.getData() method
       The dragged data is the id of the dragged element ("drag1")
       Append the dragged element into the drop element
    */
    document.addEventListener("drop", function(event) {
      event.preventDefault();

      let posX = event.clientX;
      let posY = event.clientY;


      if ( event.target.className == "droptarget" ) {
        event.target.style.border = "";

        let data = event.dataTransfer.getData("text/html");
        let innerData= '';
        let innerStyle = '';
        let elClass = '';

        switch (data) {
          case 'H1':
            innerData = "Heading 1";
            elClass = "el-h1-" + eCount;
            innerStyle = `position:absolute; left:${posX}px; top:${posY}px; z-index: ${zCount}`;
            break;
          case 'H2':
            innerData = "Heading 2";
            elClass = ".el-h2-" + eCount;
            innerStyle = `position:absolute; left:${posX}px; top:${posY}px; z-index: ${zCount}`;
            break;
          case 'H3':
            innerData = "Heading 3";
            elClass = ".el-h3-" + eCount;
            innerStyle = `position:absolute; left:${posX}px; top:${posY}px; z-index: ${zCount}`;
            break;
          case 'H4':
            innerData = "Heading 4";
            elClass = ".el-h4-" + eCount;
            innerStyle = `position:absolute; left:${posX}px; top:${posY}px; z-index: ${zCount}`;
            break;
          case 'H5':
            innerData = "Heading 5";
            elClass = ".el-h5-" + eCount;
            innerStyle = `position:absolute; left:${posX}px; top:${posY}px; z-index: ${zCount}`;
            break;
          case 'H6':
            innerData = "Heading 6";
            elClass = ".el-h6-" + eCount;
            innerStyle = `position:absolute; left:${posX}px; top:${posY}px; z-index: ${zCount}`;
            break;
          case 'P':
            innerData = `Lorem ipsum dolor sit amet consectetur adipisicing ${'<br>'} elit. Nulla maxime iure, optio facere possimus in aut ${'<br>'} quibusdam deleniti omnis voluptas incidunt temporibus ${'<br>'} ipsa ratione facilis modi tempore, sunt necessitatibus quia!`
            elClass = "el-p-" + eCount;
            innerStyle = `position:absolute; left:${posX}px; top:${posY}px; z-index: ${zCount}`;
            break;
          case 'SPAN':
            elClass = "el-rec-" + eCount;
            innerData = "";
            innerStyle = `position:absolute; left:${posX}px; top:${posY}px; background-color: #fff; width: 250px; height: 120px;border: 2px solid #333; z-index: ${zCount}`;
            break;
          case 'CIRCLE':
          innerData = "";
          elClass = "el-circle-" + eCount;
          innerStyle = `position:absolute; left:${posX}px; top:${posY}px; background-color: #fff; width: 150px; height: 150px;border: 2px solid #333; border-radius: 50%; z-index: ${zCount}`;
          break;
          case 'BUTTON':
            innerData = "This is a Button";
            elClass = "el-btn-normal-" + eCount;
            innerStyle = `position:absolute; left:${posX}px; top:${posY}px; z-index: ${zCount}`;
            break;
          case 'PRIMARY':
            innerData = "This is a primary button";
            elClass = "btn btn-primary el-btn-primary-" + eCount;
            innerStyle = `position:absolute; left:${posX}px; top:${posY}px; z-index: ${zCount}`;

            break;
          case 'DANGER':
            innerData = "This is a Danger Button";
            elClass = "btn btn-danger el-btn-danger-" + eCount;
            innerStyle = `position:absolute; left:${posX}px; top:${posY}px; z-index: ${zCount}`;

            break;
          case 'INPUT':
            innerData = "INPUT";
            elClass = "form-control el-input-text-" + eCount;
            innerStyle = `position:absolute; left:${posX}px; top:${posY}px; width: 250px; height: 40px; z-index: ${zCount}`;

            break;
          case 'el-textarea':
            innerData = "TEXTAREA";
            elClass = "form-control el-input-textarea" + eCount;
            innerStyle = `position:absolute; left:${posX}px; top:${posY}px; width: 250px; rows: 4; z-index: ${zCount}`;

            break;
          case 'el-check':
            innerData = "CHECKBOX";
            elClass = "form-control el-checkbox-" + eCount;
            innerStyle = `position:absolute; left:${posX}px; top:${posY}px; z-index: ${zCount}`;

            break;
          case 'el-radio':
            innerData = "RADIO";
            elClass = "form-control el-radio-" + eCount;
            innerStyle = `position:absolute; left:${posX}px; top:${posY}px; width: 250px; z-index: ${zCount}`;
            break;
          case 'el-select':
            innerData = "SELECT";
            elClass = "form-control el-select-" + eCount;
            innerStyle = `position:absolute; left:${posX}px; top:${posY}px; width: 250px; z-index: ${zCount}`;

            break;
          case 'el-panel':
            innerData = "PANEL";
            elClass = "el-panel-" + eCount;
            innerStyle = `position:absolute; left:${posX}px; top:${posY}px; background-color: #999; width: 350px; height: 250px; z-index: ${zCount}`;

            break;
          case 'el-image':
            innerData = "IMAGE";
            elClass = ".el-image-" + eCount;
            innerStyle = `position:absolute; left:${posX}px; top:${posY}px; width: 150px; height: 150px; z-index: ${zCount}`;
            break;
          case 'el-icon':
            innerData = "I";
            elClass = "fab fa-angular fa-3x .el-icon-" + eCount;
            innerStyle = `position:absolute; left:${posX}px; top:${posY}px; z-index: ${zCount}`;
            break;
        }

        document.__proto__.customCreateElement = function(tag, attributes){
          var e = document.createElement(tag);
          for(var a in attributes) e.setAttribute(a, attributes[a]);
          return e;
        }

        let node = document.customCreateElement(data, {class: elClass, id:"elObj", style: innerStyle});
        node.innerHTML = innerData;
        event.target.appendChild(node);

        eCount++;
        zCount++;

        // Insert item in the history widget
        hCount++;
        let hNode = document.customCreateElement("LI", {class: "history__item ui-state-default", style: `z-index: ${zCount}`});                // Create a <li> node
        let htextnode = document.createTextNode("Item " + hCount);
        hNode.appendChild(htextnode);
        document.getElementById("drophistory").appendChild(hNode);
      }
    });
  }

}

export default ToolbarController;
