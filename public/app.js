async function testApi(url, method = 'GET') {
    const result = document.getElementById('responseContainer');
    
    try {
        const response = await fetch(url,{method: method});
        
        
        let data;
        const contentType = response.headers.get('contentType');
        if (contentType && contentType.includes('application/json')) {
            data = await response.json();
        } else {
            data = await response.text();
        }
    
        result.textContent =`${response.status} ${response.statusText}\n${JSON.stringify(data, null, 2)}`;
    }catch (error) {
        result.textContent = `Error: ${error.message}`;  
    }

}

const buttons = document.querySelectorAll('#buttonContainer button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        this.classList.add('clicked');
    });
});