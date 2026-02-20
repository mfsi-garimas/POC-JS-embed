(function () {
    console.log("LLM Script Loaded");

    const btn = document.createElement("button");
    btn.innerText = "LLM Injected Button";
    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.right = "20px";
    btn.style.padding = "10px";

    btn.addEventListener("click", function () {
        alert("LLM Embedded Script Working!");
    });

    document.body.appendChild(btn);
})();