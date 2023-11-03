class UserInfo {
    constructor(data) {
        this.id = data.data.id;
        this.firstName = data.data.userInfos.firstName;
        this.lastName = data.data.userInfos.lastName;
        this.age = data.data.userInfos.age;

        this.score = data.data.todayScore || data.data.score || 0;
        this.calorieCount = data.data.keyData.calorieCount || 0;
        this.proteinCount = data.data.keyData.proteinCount || 0;
        this.carbohydrateCount = data.data.keyData.carbohydrateCount || 0;
        this.lipidCount = data.data.keyData.lipidCount || 0;

    }
}

export default UserInfo;