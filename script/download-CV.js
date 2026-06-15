
export function downloadVC () {
    document.getElementById("hire-me__btn").addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = "./images/Magno-Robert_CV.pdf";
        link.download = "Magno-Robert_CV.pdf";
        link.click();
    });
}