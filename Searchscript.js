document.getElementById("searchExp").addEventListener("click",disable)
document.getElementById("searchText").addEventListener("click",enable)

function disable(){
	document.getElementById("case").disabled = true;  
    document.getElementById("exp").disabled = true;
	}

function enable() { 
    document.getElementById("case").disabled = false;  
    document.getElementById("exp").disabled = false;
	}

function searchFunc(){
	let input = document.getElementById("text").value;
	console.log(input)
}