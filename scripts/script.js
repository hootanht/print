let printBtn = document.getElementById("printBtn");
let printArea = document.getElementById("printArea");
printBtn.addEventListener("click", () => {
    printArea.focus();
    printArea.contentWindow.print();
});