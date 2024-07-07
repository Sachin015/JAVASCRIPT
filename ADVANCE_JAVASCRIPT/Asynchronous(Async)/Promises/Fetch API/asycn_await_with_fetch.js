
async function fetchData() {
    try {
        const response = await fetch("https://api.github.com/users/hiteshchoudhary");
        
        // Check if response is successful
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


