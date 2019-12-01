const mongoCollections = require("../config/mongoCollections");
const user = mongoCollections.user;
const bcrypt = require("bcrypt");
const saltRounds = 16;
module.exports = {
    async checkPassword(username, password) {
        if (typeof username != 'string' || !username) {
            throw `No people with that ${username}`;
        }
        if (typeof password != 'string' || !password) {
            throw `No people with that ${password}`;
        }
        const userCollection = await user();
        let info = {'username': username};

        try {
            const userPWD = await userCollection.find(info).toArray();
            if (userPWD === null) throw `No user with that ${username}`;
            if (userPWD.length == 0) throw `No user with that ${username}`;
            const result = await bcrypt.compare(password, userPWD[0].hashedPassword);
            return result;
        } catch (e) {
            throw e;
        }
    },
    async getPeopleByCookie(cookie) {
        if (typeof cookie != 'string' || !cookie) {
            throw `No user with that username: ${cookie}`;
        }
        const userCollection = await user();
        let info = {'username': cookie};

        try {
            const userPWD = await userCollection.find(info).toArray();
            if (userPWD === null) throw `No user with that ${cookie}`;
            if (userPWD.length == 0) throw `No user with that ${cookie}`;
            if (cookie === userPWD[0].username) {
                return userPWD[0];
            }
            throw `No user with that ${cookie}`;
        } catch (e) {
            throw e;
        }
    }
};

