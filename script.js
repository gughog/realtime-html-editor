let codeArea = document.getElementById('code_area')

codeArea.addEventListener('keyup', function(){
    let codes = codeArea.value
    let output = document.getElementById('code_output')
    output.srcdoc = codes
})