const add = document.getElementById("add");
const boxik = document.getElementById("boxik");
const Delete = document.getElementById("Delete");

add.onclick = () => {
  const textarea = document.createElement("textarea");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");

  textarea.rows = 1;
  checkbox.type = "checkbox";

  boxik.appendChild(textarea);
  label.appendChild(checkbox);
  boxik.appendChild(label);

  checkbox.setAttribute("class", "checkbox-item");
  label.setAttribute("class", "label-item");
  textarea.setAttribute("class", "textarea-item");
};

Delete.onclick = () => {
  const checkboxItems = document.getElementsByClassName("checkbox-item");
  const labelItems = document.getElementsByClassName("label-item");
  const textarea = document.getElementsByClassName("textarea-item");
  for (let i = 0; i < checkboxItems.length; i++) {
    if (checkboxItems[i].checked) {
      checkboxItems[i].remove();
      labelItems[i].remove();
      textarea[i].remove();
    }
  }
};
//test