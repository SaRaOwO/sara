const API_KEY = process.env.TOPGG_API;
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