/* // Event listener to activate button
let text_area = document.getElementById('write_space')

text_area.addEventListener('keyup', function(){
    let written = document.getElementById('write_space').value
    document.getElementById('output').srcdoc = written

    //alert('Testing...')
}) */