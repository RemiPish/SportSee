class DailyActivity {
    constructor(data) {
        this.id = data.data.userId;
        this.sessions = [];
        for (let i = 0; i < data.data.sessions.length; i++) 
        {
            this.sessions.push({
                day: data.data.sessions[i].day,
                kilogram: data.data.sessions[i].kilogram,
                calories: data.data.sessions[i].calories
            });
        }
    }
}

export default DailyActivity;