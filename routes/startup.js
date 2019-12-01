const MongoClient = require("mongodb").MongoClient,
    settings = require("../config/config.js"),
    Guid = require("guid")
var fullMongoUrl =
    settings.mongoConfig.serverUrl + settings.mongoConfig.database;

function runSetup() {
    MongoClient.connect(fullMongoUrl)
        .then(function (db) {
            const mydb = db.db("546Final_Group19_buddyvacation");
            return mydb.createCollection("users");
        })
        .then(function (userCollection) {
            return userCollection.count().then(function (theCount) {
                // the result of find() is a cursor to MongoDB, and we can call toArray() on it
                if (theCount > 0) {
                    return userCollection.find({}).toArray();
                }

                return userCollection
                    .insertOne({
                        _id: Guid.create().toString(),
                        username: "masterdetective123",
                        firstName: "Sherlock",
                        lastName: "Holmes",
                        profession: "Detective",
                        bio: "Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional private detective created by British author Sir Arthur Conan Doyle. Known as a \"consulting detective\" in the stories, Holmes is known for a proficiency with observation, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.",
                        hashedPassword: "$2a$16$7JKSiEmoP3GNDSalogqgPu0sUbwder7CAN/5wnvCWe6xCKAKwlTD."
                    })
                    .then(function (newDoc) {
                        return newDoc;
                    })
                    .then(function () {
                        return userCollection.insertOne({
                            _id: Guid.create().toString(),
                            username: "lemon",
                            firstName: "Elizabeth",
                            lastName: "Lemon",
                            profession: "Writer",
                            bio: "Elizabeth Miervaldis \"Liz\" Lemon is the main character of the American television series 30 Rock. She created and writes for the fictional comedy-sketch show The Girlie Show or TGS with Tracy Jordan.",
                            hashedPassword: "$2a$16$SsR2TGPD24nfBpyRlBzINeGU61AH0Yo/CbgfOlU1ajpjnPuiQaiDm"
                        });
                    })
                    .then(function () {
                        return userCollection.insertOne({
                            _id: Guid.create().toString(),
                            username: "theboywholived",
                            firstName: "Harry",
                            lastName: "Potter",
                            profession: "Student",
                            bio: "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles.",
                            hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK"
                        });
                    })
                    .then(function () {
                        return userCollection.find().toArray();
                    });
            });
        });

    return MongoClient.connect(fullMongoUrl).then(function (db) {
        const mydb = db.db("546Final_Group19_buddyvacation");
        return mydb.createCollection("todolist");
    }).then(function (todolistCollection) {
        return todolistCollection.count().then(function (theCount) {
            // the result of find() is a cursor to MongoDB, and we can call toArray() on it
            if (theCount > 0) {
                return todolistCollection.find({}).toArray();
            }

            return todolistCollection
                .insertOne({
                    _id: Guid.create().toString(),
                    days: 3,
                    name: "New York Classic Three-Day Tour",
                    description: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon …",
                    season: "four seasons",
                    oneDayListId: [],
                    imgurl: "../assets/img/newyork.jpg",
                    likes: 0
                })
                .then(function () {
                    return todolistCollection.insertOne({
                        _id: Guid.create().toString(),
                        days: 2,
                        name: "Tokyo Classic Two-Day Tour",
                        description: "okyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum ) to a reconstructed kabuki theater … ",
                        season: "four seasons",
                        oneDayListId: [],
                        imgurl: "../assets/img/tokyo.jpg",
                        likes: 0
                    });
                })
                .then(function () {
                    return todolistCollection.insertOne({
                        _id: Guid.create().toString(),
                        days: 1,
                        name: "los angeles Classic One-Day Tour",
                        description: "Los Angeles is a sprawling Southern California city and the center of the nation’s film and television industry. Near its iconic Hollywood sign, studios such as Paramount Pictures, Universal and Warner Brothers offer behind-the-scenes tours. On Hollywood Boulevard, TCL Chinese Theatre displays celebrities’ hand- and footprints, the Walk of Fame honors …",
                        season: "four seasons",
                        oneDayListId: [],
                        imgurl: "../assets/img/losangeles.jpg",
                        likes: 0
                    });
                })
                .then(function () {
                    return todolistCollection.insertOne({
                        _id: Guid.create().toString(),
                        days: 5,
                        name: "Beijing Classic Five-Day Tour",
                        description: "Beijing, China’s sprawling capital, has history stretching back 3 millennia. Yet it’s known as much for modern architecture as its ancient sites such as the grand Forbidden City complex, the imperial palace during the Ming and Qing dynasties. Nearby, the massive Tiananmen Square pedestrian plaza is the site of Mao Zedong’s mausoleum and the National …",
                        season: "four seasons",
                        oneDayListId: [],
                        imgurl: "../assets/img/beijing.jpg",
                        likes: 0
                    });
                })
                .then(function () {
                    return todolistCollection.find().toArray();
                });
        });
    });
}

// By exporting a function, we can run
var exports = (module.exports = runSetup);
