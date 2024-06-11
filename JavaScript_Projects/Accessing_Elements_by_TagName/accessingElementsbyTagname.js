let allSpan = document.querySelectorAll("span");

if (allSpaAn.lenght > 0) {
    console.log("Found", allSpan.lenght, "span elements:");
    for (let span of allSpan) {
        console.log(span.textContent);
    }
}else {
    console.log("No span elements found.");
}