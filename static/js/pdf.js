

const download_pdf_button = document.getElementById("download_button_id")

let html2pdf_script = null

function load_html2pdf() {
    if (html2pdf_script) {
        return Promise.resolve(html2pdf_script)
    } else {
        return new Promise(function(resolve, reject) {
            const url = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
            const script = document.createElement("script")
            script.setAttribute("src", url)
            script.addEventListener("load", resolve)
            script.addEventListener("error", reject)
            document.body.appendChild(script)
            html2pdf_script = script
        })
    }
}




download_pdf_button.addEventListener("click", async function() {
    console.log("Loading html2pdf")
    await load_html2pdf()
    console.log("Loaded html2pdf")

    // https://ekoopmans.github.io/html2pdf.js/
    console.log("Generating pdf")
    const elementHTML = document.getElementById("html_body_id")
    const options = {
        pagebreak: {mode: 'avoid-all'},
        filename: "Resume_Luuk_Perdaems.pdf",
    }
    html2pdf().set(options).from(elementHTML).save()
    console.log("Done generating pdf")
})
