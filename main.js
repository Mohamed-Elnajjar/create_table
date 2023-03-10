const rows = document.getElementById("rows");
const cols = document.getElementById("cols");
const create_table = document.getElementById("create_table");
let show_table = document.getElementById("show_table");
let add_table = "<table style='border: 1px solid red;width:100%;'>";

let counter = 1;
create_table.addEventListener("click",function() {
	for(var i = 0; i < Number(rows.value); i++){
		add_table += "<tr style='border: 1px solid red;'>";
		for(var j = 0; j < Number(cols.value); j++){
			add_table += `<td style='border: 1px solid red;'>item ${counter++}</td>`;
		}
		add_table += "</tr>";
	}
	
	add_table += `</table>`;
	
	show_table.innerHTML = add_table;
	add_table = "<table style='border: 1px solid red;width:100%;'>";
	counter = 1;
});

