function generateNumbers() {
    
    let random1 = Math.floor(Math.random() * (60 - 34 + 1)) + 34;

    
    let random2 = Math.floor(Math.random() * (50 - 22 + 1)) + 22;

    
    let random3;
    if (Math.random() < 0.5) {
        
        random3 = (Math.random() * (2.60 - 2.50) + 2.50).toFixed(2);
    } else {
        
        random3 = (Math.random() * (3.15 - 3.00) + 3.00).toFixed(2);
    }


    document.getElementById("random1").innerText = `Number 1: ${random1}`;
    document.getElementById("random2").innerText = `Number 2: ${random2}`;
    document.getElementById("random3").innerText = `Number 3: ${random3}`;
}
