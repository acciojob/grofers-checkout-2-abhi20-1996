//your code here
let tableEl=document.getElemrntById("myTable");
let priceArr=Array.from(document..querySelectorAll("td[data-ns-test]"));
let totalPrice = 0;
for (let i = 0; i < priceArr.length; i++) {
	totalPrice+=priceArr[i];
}
let totalRow=document.creatElement("tr");
let newCell=totalRow.insertCell(0);
totalRow.setAttribute('data-ns-test', 'grandTotal');
tableEl.insertAdjacentElement('beforeend', totalRow);