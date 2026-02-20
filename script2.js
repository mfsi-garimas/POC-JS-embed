console.log("LLM Script Loaded");

(function () {

    function init() {
        console.log("Injecting button...");

        const btn = document.createElement("button");
        btn.innerText = "LLM Injected Button";

        btn.style.position = "fixed";
        btn.style.bottom = "20px";
        btn.style.right = "20px";
        btn.style.padding = "10px";
        btn.style.zIndex = "9999";

        btn.addEventListener("click", function () {
            alert("LLM Embedded Script Working!");
        });

        document.body.appendChild(btn);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();