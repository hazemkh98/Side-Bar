
const toggle=document.querySelector('.sidebar-toggle');
const closBtn=document.querySelector('.close-btn');
const sidebar=document.querySelector('.sidebar');


toggle.addEventListener("click", function(){
	if(sidebar.classList.contains("show-sidebar"))
	{
		sidebar.classList.remove("show-sidebar");
	}
	else
	{
		sidebar.classList.add("show-sidebar");
	}
})

closBtn.addEventListener("click", function(){

	sidebar.classList.remove("show-sidebar");
})