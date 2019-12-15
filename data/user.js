const mongoCollections = require("../config/mongoCollections");
const user = mongoCollections.user;
const bcrypt = require("bcrypt");
const saltRounds = 16;
const ObjectID = require('mongodb').ObjectID;
module.exports = {
    async checkPassword(email, password) {
        if (typeof email != 'string' || !email) {
            throw `No people with that ${email}`;
        }
        if (typeof password != 'string' || !password) {
            throw `No people with that ${password}`;
        }
        const userCollection = await user();
        let info = {'email': email};

        try {
            const userPWD = await userCollection.find(info).toArray();
            if (userPWD === null) throw `No user with that ${email}`;
            if (userPWD.length == 0) throw `No user with that ${email}`;
            const result = await bcrypt.compare(password, userPWD[0].hashedPassword);
            if (result) {
                return userPWD[0];
            }
            throw `Password is wrong!`;
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
        const currUser = await userCollection.findOne({$or: [{username: username}, {email: email}]});
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
            const userCollection = await user();
            const userGet = await userCollection.findOne({_id: id});
            if (userGet === null)
                throw "No user with that id";
            return userGet;
        }
        else {
            id = ObjectID(id);
            const userCollection = await user();
            const userGet = await userCollection.findOne({_id: id});
            if (userGet === null)
                throw "No user with that id";
            return userGet;
        }


    },

    async addUser(firstName, lastName, email, username, hashedPassword) {
        //need error checking here
        let newUser = {
            // _id: ,
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username.toLowerCase(),
            hashedPassword: hashedPassword,
            interestPlaces: [],
            preferredFood: [],
            toDoList: [],
            postedReviews: [],
            postedRatings: [],
            preferDistance: [],
            dietaryRestrictions: [],
            imgurl: "./assets/app/media/img/users/user2.jpg"
        };
        const userCollection = await user();
        const newInsertInformation = await userCollection.insertOne(newUser);
        return newInsertInformation;
    },
    async updateUser(id, interestPlaces, preferredFood, preferDistance, dietaryRestrictions) {
        //need error checking here
        let newUser = {
            interestPlaces: interestPlaces,
            preferredFood: preferredFood,
            preferDistance: preferDistance,
            dietaryRestrictions: dietaryRestrictions
        };
        const userCollection = await user();
        const newInsertInformation = await userCollection.updateOne({_id: id}, {$set: {newUser}});
        if (newInsertInformation.modifiedCount === 0) throw `Couldn't update successfuly!`;
        return newInsertInformation;
    }

};

