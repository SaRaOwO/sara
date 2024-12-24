document.addEventListener('DOMContentLoaded', function() {
    const BOT_ID = '868957277623824384';

    async function getVotes() {
        const url = `https://top-gg-worker-morning-smoke-5bf3.garciaromeroeverardo38.workers.dev`;
        
        try {
            const response = await axios.get(url);

            if (response.status === 200) {
                const votos = response.data.monthlyPoints || 0;
                document.getElementById('voteCount').innerText = votos;
            } else {
                console.error('Error:', response.status);
                document.getElementById('voteCount').innerText = '?';
            }
        } catch (error) {
            console.error('Error al obtener votos:', error);
            document.getElementById('voteCount').innerText = '?';
        }
    }

    getVotes();
    setInterval(getVotes, 300000);
});