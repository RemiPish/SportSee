class UserPerformance {
    constructor(data) {
        this.id = data.data.userId;
        this.kind = data.data.kind;
        this.data = [];
        for (let i = 0; i < data.data.data.length; i++) 
        {
            this.data.push({
                value: data.data.data[i].value,
                kind: data.data.data[i].kind,
            });
        }
    }
}

export default UserPerformance;