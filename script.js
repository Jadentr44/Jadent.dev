document.getElementById("toggleMenu").addEventListener('click',function(){
if(document.getElementById("list").classList.contains("hidden")){
  document.getElementById("list").classList.remove("hidden")
}else{
  document.getElementById("list").classList.add("hidden")

}
})