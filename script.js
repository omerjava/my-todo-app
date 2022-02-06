function addAgenda() {
  var item_value = document.getElementById("todo1").value;

  const elementDiv = document.createElement("div");
  const para = document.createElement("P");
  para.setAttribute("id", "paraId");
  var node = document.createTextNode(item_value);

  const checkBtn = document.createElement("button");
  checkBtn.innerHTML = "Check";
  const uncheckBtn = document.createElement("button");
  uncheckBtn.innerHTML = "Uncheck";
  uncheckBtn.style.display = "none";
  uncheckBtn.classList.add("uncheck_Btn");
  checkBtn.onclick = function check() {
    para.classList.add("strike_through");
    checkBtn.style.display = "none";
    uncheckBtn.style.display = "inline";
    uncheckBtn.onclick = function uncheck() {
      para.classList.remove("strike_through");
      uncheckBtn.style.display = "none";
      checkBtn.style.display = "inline";
    };
  };
  checkBtn.classList.add("check_Btn");

  const editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";
  editBtn.setAttribute("id", "editBtn1");
  editBtn.classList.add("edit_Btn");
  const editInput = document.createElement("input");
  var node2 = document.createTextNode("");
  editInput.classList.add("edit_Input");
  editInput.setAttribute("className", "editInput_class");
  editInput.setAttribute("id", "editId");
  var first_value = node.textContent;
  editInput.setAttribute("value", first_value);
  editInput.style.display = "none";
  const editOkBtn = document.createElement("button");
  editOkBtn.innerHTML = "OK";
  editOkBtn.style.display = "none";
  editOkBtn.classList.add("editOk");

  editBtn.onclick = function edit() {
    editInput.style.display = "inline";
    editOkBtn.style.display = "inline";

    editOkBtn.onclick = function editOk() {
      var editValue = document.getElementById("editId").value;
      para.innerHTML = editValue;
      editInput.style.display = "none";
      editOkBtn.style.display = "none";
    };
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.onclick = function () {
    elementDiv.remove();
  };
  deleteBtn.classList.add("closeBtn");

  elementDiv.classList.add("newDiv");

  const parentElement = document.getElementById("demo");
  para.appendChild(node);
  editInput.appendChild(node2);
  para.appendChild(editInput);
  para.appendChild(editOkBtn);
  elementDiv.appendChild(para);
  elementDiv.appendChild(checkBtn);
  elementDiv.appendChild(uncheckBtn);
  elementDiv.appendChild(editBtn);
  elementDiv.appendChild(deleteBtn);
  parentElement.appendChild(elementDiv);
}
