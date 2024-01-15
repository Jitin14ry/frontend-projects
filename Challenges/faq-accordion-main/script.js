let lines = document.querySelectorAll(".line");

let activeIndex = -1 ;

lines.forEach((line , index) => {
  line.addEventListener("click", (e) => {
    // lines.forEach((l) => {
    //   if (l !== line) {
    //     l.classList.remove("show");
    //   }
    // });

    if(lines[activeIndex] == line){
      activeIndex = -1 ;
      line.classList.remove("show")
    }
    else{
      lines[activeIndex]?.classList.remove("show")
      activeIndex = index ; 
      line.classList.add("show")
    }

    // line.classList.toggle("show");
  });
});
