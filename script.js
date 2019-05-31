let codeArea = document.getElementById('code_area')

codeArea.addEventListener('keyup', function(){
    let codes = codeArea.innerText
    let output = document.getElementById('code_output')
    output.srcdoc = codes
})

let codeEditor = CodeMirror(codeArea)