document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling to sections
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight list items on hover
    const listItems = document.querySelectorAll("#tribute-info li");
    listItems.forEach(item => {
        item.addEventListener("mouseover", function () {
            this.style.backgroundColor = "#0074E4";
            this.style.color = "#F5F5F5";
        });
        item.addEventListener("mouseout", function () {
            this.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            this.style.color = "#FFFFFF";
        });
    });

    // Display alert when clicking external links
    const externalLinks = document.querySelectorAll("a[target='_blank']");
    externalLinks.forEach(link => {
        link.addEventListener("click", function () {
            alert("You are now leaving the Nikola Tesla tribute page.");
        });
    });
});
