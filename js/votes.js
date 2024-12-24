const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg2ODk1NzI3NzYyMzgyNDM4NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNzM0ODk0OTU5fQ.iWUMFltXl6OKX9yPNY0mnhw1XZKy9QyIWIdEVe9sgq8';
const BOT_ID = '868957277623824384';


document.addEventListener('DOMContentLoaded', function() {
    async function getVotes() {

        const url = `https://top.gg/api/bots/${BOT_ID}`;
    
        const headers = {
            'Authorization': API_KEY,
        }
        try{
            const response = await axios.get(url, { headers });
    
            if (response.status === 200) {
                const votos = response.data.monthlyPoints || 0;
                document.getElementById('voteCount').innerText = votos;
            } else {
                console.error('Error:', response.status);
                document.getElementById('voteCount').innerText = '?';
            }
        }   catch (error) {
            console.error('Error al obtener votos:', error);
            document.getElementById('voteCount').innerText = '?';
        }
    }
    getVotes();
    setInterval(getVotes, 300000);
});

 // 5 minutos