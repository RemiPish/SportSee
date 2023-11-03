class AverageSessions {
    constructor(data) {
        this.id = data.data.userId;
        this.sessions = [];
        for (let i = 0; i < data.data.sessions.length; i++) 
        {
            this.sessions.push({
                day: data.data.sessions[i].day,
                sessionLength: data.data.sessions[i].sessionLength,
            });
        }
    }
}

export default AverageSessions;