var div = document.getElementsByTagName("div")[0];

div.addEventListener("click", function (e) {
    if (this !== e.target) {
        if (!e.target.classList.contains("solved")) {
            //to view front of card
            if (e.target.className == "back") {
                e.target.style.display = "none";
                e.target.nextElementSibling.classList.add("view");
            }
            //to flip a card to its back
            else if (e.target.classList.contains("front")) {
                e.target.classList.remove("view");
                e.target.previousElementSibling.style.display = "inline";
            }
        }

        var opened = document.querySelectorAll(".view");
        //test every 2 opened cards
        if (opened.length == 2) {
            //if match
            if (opened[0].src == opened[1].src) {
                opened[0].classList.remove("view");
                opened[0].classList.add("solved");
                opened[1].classList.remove("view");
                opened[1].classList.add("solved");
            }
            //if doesn't match
            else {
                console.log("false");
                var open = document.querySelectorAll(".view");
                setTimeout(function () {
                    open[0].classList.remove("view");
                    open[0].previousElementSibling.style.display = "inline";
                    open[1].classList.remove("view");
                    open[1].previousElementSibling.style.display = "inline";
                }, 1000);
            }
        }
        //if all game solved
        var solved = document.querySelectorAll(".solved");
        if (solved.length == 12) {
            var p = document.getElementsByTagName("p")[0];
            p.style.display = "inline";

        }

    }
});



