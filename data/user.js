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
    },
    
    async getUserByUsernameOrEmail(username, email) {
        const userCollection = await user();
        const currUser = await userCollection.findOne({ $or: [{ username: username }, { email: email }] });
        return currUser;
    },

    async createHashedPassword(password) {
        try {
            if (!password)
                throw "Password not given";
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            return hashedPassword;
        } catch (e) {
            throw e;
        }
    },

    async getUserById(id) {
        if (!id)
            throw "You must provide a id for your post";
        else if (!ObjectID.isValid(id)) {
            if (typeof id === 'string') {//id type is 'string' you'll have to convert into ObjectID 
                id = ObjectID(id);
            }
            else {
                throw `id:${id}, Must Be STRING OR OBJECT ID`;
            }
        }

        const userCollection = await user();
        const userGet = await userCollection.findOne({ _id: ObjectID(id) });
        if (userGet === null)
            throw "No user with that id";

        return userGet;
    },

    async addUser(firstName, lastName, email, username, hashedPassword) {
        //need error checking here
        let newUser = {
            // _id: ,
            username: username.toLowerCase(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            gender: gender,
            city: city,
            state: state,
            age: age,
            password: hashedPassword,
            pollsCreated: [],
            pollsVotedIn: []
        };
        const userCollection = await user();
        const newInsertInformation = await userCollection.insertOne(newUser);
        const newId = await newInsertInformation.insertedId;
        await this.getUserById(newId);
    },
};

