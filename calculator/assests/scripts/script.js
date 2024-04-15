document.getElementById('calculate').addEventListener('click', (event) => {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const result = document.getElementById('result');
    
    result.value = input1.value;
})