const MongoClient = require("mongodb").MongoClient,
    settings = require("../config/config.js"),
    Guid = require("guid")
var fullMongoUrl =
    settings.mongoConfig.serverUrl + settings.mongoConfig.database;

function runSetup() {
    var collection = MongoClient.connect(fullMongoUrl).then(function (db) {
        const mydb = db.db("546Final_Group19_buddyvacation");
        return mydb.createCollection("todolist");
    }).then(function (todolistCollection) {

        var makeDoc = function (day, name, description, location, imgurl, distance,time,traveltime) {
            return {
                _id: Guid.create().toString(),
                day: day,
                name: name,
                description: description,
                location: location,
                imgurl: imgurl,
                distance: distance,
                time:time,
                traveltime:traveltime,
                recommendPlaceId: []
            };
        };

        var addrecommendPlace = function (onedaylist, typeOfPlace, name, description, time, tips, image, map, likes, reviews, location, tag, ticket, wiki) {
            var newPlace = {
                _id: Guid.create().toString(),
                typeOfPlace: typeOfPlace,
                name: name,
                description: description,
                location: location,
                time: time,
                tips: tips,
                image: image,
                map: map,
                likes: likes,
                reviews: reviews,
                tag: tag,
                ticket: ticket,
                wiki: wiki
            };

            onedaylist.recommendPlaceId.push(newPlace);
        };

        //var listOfOnedaylists = [];

        var tokyo1 = makeDoc(
            "2-3 hours",
            "Ueno Park",
            "Ueno Park (上野公園, Ueno Kōen) is a large public park next to Ueno Station in central Tokyo. The park grounds were originally part of Kaneiji Temple, which used to be one of the city's largest and wealthiest temples and a family temple of the ruling Tokugawa clan during the Edo Period. Kaneiji stood in the northeast of the capital to protect the city from evil, much like Enryakuji Temple in Kyoto...",
            "Tokyo",
            "../assets/img/park.jpeg",
            "678 meters",
            "10:00",
            "12:30"
        );
        addrecommendPlace(
            tokyo1,
            "Nature Park",
            "Ueno Park (上野公園, Ueno Kōen)",
            "Ueno Park (上野公園, Ueno Kōen) is a large public park next to Ueno Station in central Tokyo. The park grounds were originally part of Kaneiji Temple, which used to be one of the city's largest and wealthiest temples and a family temple of the ruling Tokugawa clan during the Edo Period. Kaneiji stood in the northeast of the capital to protect the city from evil, much like Enryakuji Temple in Kyoto.<br/><br/>\n" +
            "\n" +
            "During the Boshin Civil War, which followed the Meiji Restoration in 1868, Kaneiji suffered nearly complete destruction in a battle between the victorious forces of the new Meiji government and loyalists of the overthrown shogunate. After the battle, the temple grounds were converted into one of Japan's first Western style parks and opened to the public in 1873. A statue of Saigo Takamori, one of the generals in the Battle of Ueno, stands near the park's southern entrance.<br/><br/>\n" +
            "\n" +
            "At the southwestern end of the park lies Shinobazu Pond, one of many reminders of Kaneiji Temple's former grandeur. The pond represents Lake Biwako (in a reference to Kaneiji's model, the Enryakuji Temple of Kyoto, which overlooks Lake Biwako). On an island in the middle of the pond stands Bentendo, a temple hall dedicated to the goddess of Benten.<br/><br/>\n" +
            "\n" +
            "Today Ueno Park is famous for the many museums found on its grounds, especially the Tokyo National Museum, the National Museum for Western Art, the Tokyo Metropolitan Art Museum and the National Science Museum. It is also home to Ueno Zoo, Japan's first zoological garden.<br/><br/>\n" +
            "\n" +
            "Additionally, Ueno Park is one of Tokyo's most popular and lively cherry blossom spots with more than 1000 cherry trees lining its central pathway. The cherry blossoms are usually in bloom during late March and early April and attract large numbers of hanami (cherry blossom viewing) parties.",
            "2-3 hours",
            "(Monday - Thursday, Sunday) Open 10:00AM - Closes 5:30PM\n<br><br>" +
            "(Friday, Saturday) Open 10:00AM - Closes 9:00PM",
            "../assets/img/ueno.jpg",
            "https://www.google.com/maps/place/Ueno+Onshi+Park/@35.7154769,139.7718611,17z/data=!3m1!4b1!4m5!3m4!1s0x60188e9b45906ac3:0xb1cb3623124e645a!8m2!3d35.7154769!4d139.7740551",
            "10",
            "10012",
            "Tokyo, Japan",
            "Nature, Park",
            "Free",
            "https://en.wikipedia.org/wiki/Ueno_Park"
        );
        var tokyo2 = makeDoc(
            "1-2 hours",
            "Akihabara",
            "Akihabara (秋葉原), also called Akiba after a former local shrine, is a district in central Tokyo that is famous for its many electronics shops. In more recent years, Akihabara has gained recognition as the center of Japan's otaku (diehard fan) culture, and many shops and establishments devoted to anime and manga are now dispersed among the electronic stores in the district. On Sundays, Chuo Dori, the main street through the district, is closed to car traffic from 13:00 to 18:00 (until 17:00 from October through March).",
            "Tokyo",
            "../assets/img/ak.jpeg",
            "5.6 kilometers",
            "13:45",
            "14:55"
        );
        addrecommendPlace(
            tokyo2,
            "District for electronic and otaku goods",
            "Akihabara (秋葉原)",
            "Akihabara (秋葉原), also called Akiba after a former local shrine, is a district in central Tokyo that is famous for its many electronics shops. In more recent years, Akihabara has gained recognition as the center of Japan's otaku (diehard fan) culture, and many shops and establishments devoted to anime and manga are now dispersed among the electronic stores in the district. On Sundays, Chuo Dori, the main street through the district, is closed to car traffic from 13:00 to 18:00 (until 17:00 from October through March).<br><br>\n" +
            "\n" +
            "Akihabara has been undergoing major redevelopment over the years, including the renovation and expansion of Akihabara Station and the construction of new buildings in its proximity. Among these newly opened buildings were a huge Yodobashi electronics store and the Akihabara Crossfield, a business complex with the aim of promoting Akihabara as a center for global electronics technology and trade.<br><br>\n" +
            "\n" +
            "Electronics<br><br>\n" +
            "\n" +
            "Hundreds of electronics shops, ranging from tiny one-man stalls specializing in a particular electronic component to large electronics retailers, line the main Chuo Dori street and the crowded side streets around Akihabara. They offer everything from the newest computers, cameras, televisions, mobile phones, electronics parts and home appliances to second-hand goods and electronic junk.<br><br>\n" +
            "\n" +
            "A few chain stores such as Sofmap and Laox each operate multiple specialized branches along the main roads, while small independent shops can be found in the side streets. The only mega sized store is the Yodobashi Camera complex on the east side of the station.<br><br>\n" +
            "\n" +
            "Note that some of the electronics on sale are only intended for use in Japan due to voltage and other technical differences, Japanese language documentation and limited warranties. However, several stores also feature a selection of international models intended for overseas use, and most also offer tax free shopping to foreign tourists.<br><br>\n" +
            "\n" +
            "Otaku Goods\n" +
            "\n" +
            "The character of Akihabara has constantly changed over the decades and continues to do so. In the last decade Akihabara has emerged as a center of Japanese otaku and anime culture, and dozens of stores specializing in anime, manga, retro video games, figurines, card games and other collectibles have filled the spaces between the electronics retailers.<br><br>\n" +
            "\n" +
            "In addition to shops, various other animation-related establishments have become popular in the area, particularly maid cafes where waitresses dress up and act like maids or anime characters, and manga cafes (manga kissa), a type of internet cafe where customers can read comics and watch DVDs in addition to having access to the internet.",
            "1-2 hours",
            "All day",
            "../assets/img/akh.jpg",
            "https://www.google.com/maps/place/Akihabara,+Taito+City,+Tokyo,+Japan/@35.7021725,139.772358,17z/data=!3m1!4b1!4m5!3m4!1s0x60188ea73ea6f4ff:0x5eb9f1e50fe061e3!8m2!3d35.7022589!4d139.7744733",
            "999",
            "999888",
            "Tokyo, Japan",
            "Shopping, Electronic goods, Market",
            "Free",
            "https://en.wikipedia.org/wiki/Akihabara"
        )
        ;
        var tokyo3 = makeDoc(
            "half day",
            "Sensoji Temple",
            "Sensoji (浅草寺, Sensōji, also known as Asakusa Kannon Temple) is a Buddhist temple located in Asakusa. It is one of Tokyo's most colorful and popular temples. The legend says that in the year 628, two brothers fished a statue of Kannon, the goddess of mercy, out of the Sumida River, and even though they put the statue back into the river, it always returned to them. Consequently, Sensoji was built nearby for the goddess of Kannon. The temple was completed in 645, making it Tokyo's oldest temple.",
            "Tokyo",
            "../assets/img/temple.jpeg",
            "",
            "15:00",
            ""
        );
        addrecommendPlace(
            tokyo3,
            "Large temple in the Asakusa district",
            "Sensoji (浅草寺, Sensōji, also known as Asakusa Kannon Temple)",
            "Sensoji (浅草寺, Sensōji, also known as Asakusa Kannon Temple) is a Buddhist temple located in Asakusa. It is one of Tokyo's most colorful and popular temples.<br><br>\n" +
            "\n" +
            "The legend says that in the year 628, two brothers fished a statue of Kannon, the goddess of mercy, out of the Sumida River, and even though they put the statue back into the river, it always returned to them. Consequently, Sensoji was built nearby for the goddess of Kannon. The temple was completed in 645, making it Tokyo's oldest temple.<br><br>\n" +
            "\n" +
            "When approaching the temple, visitors first enter through the Kaminarimon (Thunder Gate), the outer gate of Sensoji Temple and the symbol of Asakusa and the entire city of Tokyo.<br><br>\n" +
            "\n" +
            "A shopping street of over 200 meters, called Nakamise, leads from the outer gate to the temple's second gate, the Hozomon. Alongside typical Japanese souvenirs such as yukata and folding fans, various traditional local snacks from the Asakusa area are sold along the Nakamise. The shopping street has a history of several centuries.<br><br>\n" +
            "\n" +
            "Beyond the Hozomon Gate stands the temple's main hall and a five storied pagoda. Destroyed in the war, the buildings are relatively recent reconstructions. The Asakusa Shrine, built in the year 1649 by Tokugawa Iemitsu, stands only a few dozen meters to the left of the temple's main building.<br><br>\n" +
            "\n" +
            "Various events are held throughout the year in the Sensoji Temple area. The biggest of them is the Sanja Matsuri, the annual festival of the Asakusa Shrine, held in May. Other events are the Asakusa Samba Carnival in August and the Hagoita-ichi (Hagoita Market) at which decorated wooden paddles used in the traditional game of hanetsuki are sold.",
            "half day",
            "Main hall: 6:00 to 17:00 (from 6:30 from October to March)<br><br>\n" +
            "Temple grounds: Always open",
            "../assets/img/st.jpg",
            "https://www.google.com/maps/place/Sensō-ji/@35.7147651,139.7944613,17z/data=!3m1!4b1!4m5!3m4!1s0x60188ec1a4463df1:0x6c0d289a8292810d!8m2!3d35.7147651!4d139.7966553",
            "637323",
            "73",
            "Tokyo, Japan",
            "Temple, Shopping",
            "Free",
            "https://en.wikipedia.org/wiki/Sensō-ji"
        );

        var ny1 = makeDoc(
            "half day",
            "The Metropolitan Museum of Art",
            "The Metropolitan Museum of Art of New York City, colloquially \"the Met\", is the largest art museum in the United States. With 6,953,927 visitors to its three locations in 2018, it was the third most visited art museum in the world. ",
            "New York",
            "../assets/img/Met.jpeg",
            "534.1 meters",
            "10:00",
            "11:50"
        );
        addrecommendPlace(
            ny1,
            "The Metropolitan Museum of Art",
            "The Metropolitan Museum of Art in New York",
            "Opened in 1880, The Metropolitan Museum of Art isn’t technically NYC’s oldest museum (that distinction belongs to The New-York Historical Society, founded in 1804) but it is the largest among Gotham’s art institutions, with some impressive statistics to prove it. Taking up 11.5 acres within Central Park along Fifth Avenue, The Met measures two million square feet and receives more than 4 million visitors annually. Its collection, which spans 5,000 years of art history from pre-history to the present, boasts 36,000 objects, including 2,500 European Old Master, Impressionist and Post-Impressionist paintings, as well as the greatest collection of Egyptian art and artifacts outside Cairo—among them, the full-scale Temple of Dendur. Other major attractions include The Met’s American and Lehmann Wings; The Costume Institute; the Rooftop Garden, which offers spectacular views of the Park and the Midtown skyline; and, of course, its 29 amazing period rooms. The Met no longer offers pay-what-wish admission to anyone who isn’t a New York State resident, but even so, a stroll through the museum’s multitude of treasures is one of the greatest pleasures of being in New York.",
            "half day",
            "(Monday - Thursday, Sunday) Open 10:00AM - Closes 5:30PM\n<br><br>" +
            "(Friday, Saturday) Open 10:00AM - Closes 9:00PM",
            "../assets/img/mam.jpg",
            "https://www.google.com/maps/place/The+Metropolitan+Museum+of+Art/@40.7794366,-73.965438,17z/data=!3m2!4b1!5s0x89c25896e10b5523:0x6c1168e355509b8b!4m5!3m4!1s0x89c25896f660c26f:0x3b2fa4f4b6c6a1fa!8m2!3d40.7794366!4d-73.963244",
            "637323",
            "73",
            "1000 5th Ave on the Upper East Side, NEW YORK, NY",
            "Art, Museum",
            "$25 for adults; $17 for seniors; $12 for students.<br><br>\n" +
            "Free for Members, Patrons, and children under 12.<br><br>\n" +
            "Tickets include exhibitions and are valid for three consecutive days at all three Met locations.",
            "https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art"
        );
        var ny2 = makeDoc(
            "1-3 hours",
            "Solomon R. Guggenheim Museum",
            "The Solomon R. Guggenheim Museum, often referred to as The Guggenheim, is an art museum located at 1071 Fifth Avenue on the corner of East 89th Street in the Upper East Side neighborhood of Manhattan, New York City. ",
            "New York",
            "../assets/img/g.jpeg",
            "4.2 kilometers",
            "12:00",
            "13:45"
        );
        addrecommendPlace(
            ny2,
            "Art Museum",
            "The Architecture of the Solomon R. Guggenheim Museum",
            "From its very beginnings the Solomon R. Guggenheim Museum has been a hub for new art and new ideas. The museum was designed by renowned architect Frank Lloyd Wright to house an innovative collection of works in a unique environment. Today, the museum continues to be a landmark destination that attracts visitors from around the world.\n<br><br>" +
            "This curriculum module is designed as a resource for educators to help introduce the unique architecture and history of the Solomon R. Guggenheim Museum to students. It can be used on its own in the classroom, as preparation for a visit to the museum, or afterward as post-visit lessons. Although the primary goal of this guide is to introduce the museum’s unique architecture, many of the suggested discussions and activities can be used to explore the history, design, and use of any chosen building.",
            "1-3 hours",
            "(Monday, Wednesday - Friday, Sunday) Open 10:00AM - Closes 5:30PM\n<br><br>" +
            "(Thursday, Saturday) Open 10:00AM - Closes 8:00PM",
            "../assets/img/gu.jpg",
            "https://www.google.com/maps/place/Solomon+R.+Guggenheim+Museum/@40.7829796,-73.9611646,17z/data=!3m1!4b1!4m5!3m4!1s0x89c258a29a5e9e99:0x4a01c8df6fb3cb8!8m2!3d40.7829796!4d-73.9589706",
            "524",
            "1332",
            "1071 5TH AVE BETWEEN 88TH & 89TH ST, NEW YORK, NY",
            "Art, Architecture, Design, Museum",
            "ADULTS  $25 <br><br>\n" +
            "STUDENTS AND SENIORS WITH STUDENT ID OR 65+  $18<br><br>\n" +
            "CHILDREN UNDER 12  Free<br><br>\n" +
            "MEMBERS  Free",
            "https://en.wikipedia.org/wiki/Solomon_R._Guggenheim_Museum"
        );
        var ny3 = makeDoc(
            "1-2 hours",
            "The Morgan Library & Museum",
            "The Morgan Library & Museum – formerly the Pierpont Morgan Library – is a museum and research library located at 225 Madison Avenue at East 36th Street in the Murray Hill neighborhood of Manhattan, New York City. ",
            "New York",
            "../assets/img/morgan.jpeg",
            "5 kilometers",
            "14:10",
            "15:00"
        );
        addrecommendPlace(
            ny3,
            "Library",
            "The Morgan Library & Museum",
            "The Morgan Library & Museum houses an enormous collection of rare books and manuscripts, plus drawings and other uncommon pieces. The collection began as a labor of love by financier J.P. Morgan, and has continued to grow and expand over the years. Now newly renovated, the museum features special additions, like a large performance hall where concerts are held.",
            "1-2 hours",
            "(Tuesday - Thursday) Open 10:00AM - Closes 5:00PM\n<br><br>" +
            "(Friday) Open 10:30AM - Closes 9:00PM\n<br><br>" +
            "(Saturday) Open 10:00AM - Closes 6:00PM\n<br><br>" +
            "(Sunday) Open 11:00AM - Closes 6:00PM\n<br><br>" +
            "(Monday) Closes All Day",
            "../assets/img/ml.jpg",
            "https://www.google.com/maps/place/The+Morgan+Library+%26+Museum/@40.7492258,-73.9835911,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2590738778edf:0x3ba82e23876af8d!8m2!3d40.7492258!4d-73.9813971",
            "345534",
            "345",
            "225 Madison Avenue at 36th Street, New York, NY 10016",
            "Library, Art, Museum",
            "ADULTS  $22 <br><br>\n" +
            "STUDENTS WITH STUDENT ID  $13<br><br>\n" +
            "SENIORS OR 65  $14<br><br>\n" +
            "CHILDREN UNDER 12  Free<br><br>\n" +
            "MEMBERS  Free",
            "https://en.wikipedia.org/wiki/Morgan_Library_%26_Museum"
        );
        var ny4 = makeDoc(
            "3 hours",
            "The Museum of Modern Art",
            "The Museum of Modern Art is an art museum located in Midtown Manhattan, New York City, on 53rd Street between Fifth and Sixth Avenues. MoMA plays a major role in developing and collecting modern art, and is often identified as one of the largest and most influential museums of modern art in the world.",
            "New York",
            "../assets/img/mo.jpeg",
            "15:30",
            ""
        );
        addrecommendPlace(
            ny4,
            "The Museum of Modern Art",
            "The Museum of Modern Art",
            "In an interview in 1964, MoMA’s founding director, Alfred Barr, described what it was that distinguished his institution from other NYC art museums: “[MoMA] is a torpedo moving through time, its head the ever-advancing present, its tail the ever-receding past of 50 to 100 years ago.” His statement reflected the prevailing midcentury view that modernism represented a progressive chronicle in which the torch of important art was passed from Europe to the United States. And indeed, after opening in 1929, MoMA became key to spreading the gospel of modern art over the course of the 20th century, positioning itself as a kind of temple for only the most dedicated aficionados. Today, that approach has largely been discarded in favor of a more inclusive program that features women and artists of color, as well as lesser-known figures from global reaches beyond Europe and the United States. MoMA has become increasingly user-friendly through successive expansions—the most recent of which, in 2019, added 40,000 square feet of new exhibition space, including street-facing galleries free to the public, as well as a dedicated venue for live programming and performances. Current amenities include MoMA’s sculpture garden and cinema, as well a Michelin-starred restaurant run by Danny Meyer (don’t worry; there are also less-expensive dining options). Then there’s The MoMA Design Store, which sells furnishings and other merchandise as well as books. Still, it’s hard for MoMA to completely shake of its legacy; people still come to see famous artists such as Picasso and Matisse, after all. But through repeated renewal and re-invention, MoMA has exceeded its original role as modernism’s incubator to become one of NYC’s most important—and visited—museums.",
            "half day",
            "(Monday - Sunday) Open 10:00AM - Closes 5:30PM\n<br><br>" +
            "(Friday and the first Thursday of each month) Open 10:00AM - Closes 9:00PM",
            "../assets/img/moma.jpg",
            "https://www.google.com/maps/place/The+Metropolitan+Museum+of+Art/@40.7794366,-73.965438,17z/data=!3m2!4b1!5s0x89c25896e10b5523:0x6c1168e355509b8b!4m5!3m4!1s0x89c25896f660c26f:0x3b2fa4f4b6c6a1fa!8m2!3d40.7794366!4d-73.963244",
            "989790",
            "901",
            "11 West 53 Street, New York, NY",
            "Art, Museum",
            "ADULTS  $25 <br><br>\n" +
            "STUDENTS WITH STUDENT ID  $14<br><br>\n" +
            "SENIORS OR 65  $18<br><br>\n" +
            "CHILDREN UNDER 16 AND MEMBERS Free<br><br>\n" +
            "Visitors with disabilities  $18",
            "https://en.wikipedia.org/wiki/Museum_of_Modern_Art"
        );
        //listOfOnedaylists.push(tokyo1, tokyo2, tokyo3, ny1, ny2, ny3, ny4);

        var makeDoc2 = function (days, name, description, season, imgurl, likes) {
            return {
                _id: Guid.create().toString(),
                days: days,
                name: name,
                description: description,
                season: season,
                oneDayListId: [],
                imgurl: imgurl,
                likes: likes
            };
        };

        var addOneDayList = function (todolist, onedaylist) {
            /*var newOneDayList = {
                _id: Guid.create().toString(),
                day: day,
                name: name,
                description: description,
                location: location,
                imgurl: imgurl,
                distance: distance,
                recommendPlaceId: []
            };*/

            todolist.oneDayListId.push(onedaylist);
        };

        var listOfTodolists = [];

        var newyork = makeDoc2(
            3,
            "New York Classic Three-Day Tour",
            "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon …",
            "four seasons",
            "../assets/img/ny.jpg",
            0
        );
        addOneDayList(
            newyork,
            ny1
            /*  "half day",
              "The Metropolitan Museum of Art",
              "The Metropolitan Museum of Art of New York City, colloquially \"the Met\", is the largest art museum in the United States. With 6,953,927 visitors to its three locations in 2018, it was the third most visited art museum in the world. ",
              "",
              "../assets/img/Met.jpeg",
              "534.1 meters"*/
        );

        addOneDayList(
            newyork,
            ny2
            /*"1-3 hours",
            "Solomon R. Guggenheim Museum",
            "The Solomon R. Guggenheim Museum, often referred to as The Guggenheim, is an art museum located at 1071 Fifth Avenue on the corner of East 89th Street in the Upper East Side neighborhood of Manhattan, New York City. ",
            "",
            "../assets/img/g.jpeg",
            "4.2 kilometers"*/
        );

        addOneDayList(
            newyork,
            ny3
            /*"1-2 hours",
            "The Morgan Library & Museum",
            "The Morgan Library & Museum – formerly the Pierpont Morgan Library – is a museum and research library located at 225 Madison Avenue at East 36th Street in the Murray Hill neighborhood of Manhattan, New York City. ",
            "",
            "../assets/img/morgan.jpeg",
            "5 kilometers"*/
        );
        addOneDayList(
            newyork,
            ny4
            /*"3 hours",
            "The Museum of Modern Art",
            "The Museum of Modern Art is an art museum located in Midtown Manhattan, New York City, on 53rd Street between Fifth and Sixth Avenues. MoMA plays a major role in developing and collecting modern art, and is often identified as one of the largest and most influential museums of modern art in the world.",
            "",
            "../assets/img/mo.jpeg",
            ""*/
        );
        var tokyo = makeDoc2(
            2,
            "Tokyo Classic Two-Day Tour",
            "okyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum ) to a reconstructed kabuki theater … ",
            "four seasons",
            "../assets/img/ty.jpg",
            0
        );

        addOneDayList(
            tokyo,
            tokyo1
            /*"2-3 hours",
            "Ueno Park",
            "Ueno Park (上野公園, Ueno Kōen) is a large public park next to Ueno Station in central Tokyo. The park grounds were originally part of Kaneiji Temple, which used to be one of the city's largest and wealthiest temples and a family temple of the ruling Tokugawa clan during the Edo Period. Kaneiji stood in the northeast of the capital to protect the city from evil, much like Enryakuji Temple in Kyoto.",
            "",
            "../assets/img/park.jpeg",
            "678 meters"*/
        );

        addOneDayList(
            tokyo,
            tokyo2
            /*"1-2 hours",
            "Akihabara",
            "Akihabara (秋葉原), also called Akiba after a former local shrine, is a district in central Tokyo that is famous for its many electronics shops. In more recent years, Akihabara has gained recognition as the center of Japan's otaku (diehard fan) culture, and many shops and establishments devoted to anime and manga are now dispersed among the electronic stores in the district. On Sundays, Chuo Dori, the main street through the district, is closed to car traffic from 13:00 to 18:00 (until 17:00 from October through March).",
            "",
            "../assets/img/ak.jpeg",
            "5.6 kilometers"*/
        );

        addOneDayList(
            tokyo,
            tokyo3
            /*"half day",
            "Sensoji Temple",
            "Sensoji (浅草寺, Sensōji, also known as Asakusa Kannon Temple) is a Buddhist temple located in Asakusa. It is one of Tokyo's most colorful and popular temples. The legend says that in the year 628, two brothers fished a statue of Kannon, the goddess of mercy, out of the Sumida River, and even though they put the statue back into the river, it always returned to them. Consequently, Sensoji was built nearby for the goddess of Kannon. The temple was completed in 645, making it Tokyo's oldest temple.",
            "",
            "../assets/img/temple.jpeg",
            ""*/
        );

        listOfTodolists.push(newyork, tokyo);

        // we can use insertMany to insert an array of documents!
        return todolistCollection.insertMany(listOfTodolists).then(function () {
            return todolistCollection;
        });
    });


    /*MongoClient.connect(fullMongoUrl).then(function (db) {
        const mydb = db.db("546Final_Group19_buddyvacation");
        return mydb.createCollection("onedaylist");
    }).then(function (onedaylistCollection) {
        /!*var makeDoc = function (day, name, description, location, imgurl, distance) {
            return {
                _id: Guid.create().toString(),
                day: day,
                name: name,
                description: description,
                location: location,
                imgurl: imgurl,
                distance: distance,
                recommendPlaceId: []
            };
        };

        var addrecommendPlace = function (onedaylist, typeOfPlace, name, description, time, tips, image, map, likes, reviews, location, tag, ticket, wiki) {
            var newPlace = {
                _id: Guid.create().toString(),
                typeOfPlace: typeOfPlace,
                name: name,
                description: description,
                location: location,
                time: time,
                tips: tips,
                image: image,
                map: map,
                likes: likes,
                reviews: reviews,
                tag: tag,
                ticket: ticket,
                wiki: wiki
            };

            onedaylist.recommendPlaceId.push(newPlace);
        };

        var listOfOnedaylists = [];

        var tokyo1 = makeDoc(
            "2-3 hours",
            "Ueno Park",
            "Ueno Park (上野公園, Ueno Kōen) is a large public park next to Ueno Station in central Tokyo. The park grounds were originally part of Kaneiji Temple, which used to be one of the city's largest and wealthiest temples and a family temple of the ruling Tokugawa clan during the Edo Period. Kaneiji stood in the northeast of the capital to protect the city from evil, much like Enryakuji Temple in Kyoto...",
            "",
            "../assets/img/park.jpeg",
            "678 meters"
        );
        addrecommendPlace(
            tokyo1,
            "Nature Park",
            "Ueno Park (上野公園, Ueno Kōen)",
            "Ueno Park (上野公園, Ueno Kōen) is a large public park next to Ueno Station in central Tokyo. The park grounds were originally part of Kaneiji Temple, which used to be one of the city's largest and wealthiest temples and a family temple of the ruling Tokugawa clan during the Edo Period. Kaneiji stood in the northeast of the capital to protect the city from evil, much like Enryakuji Temple in Kyoto.<br/><br/>\n" +
            "\n" +
            "During the Boshin Civil War, which followed the Meiji Restoration in 1868, Kaneiji suffered nearly complete destruction in a battle between the victorious forces of the new Meiji government and loyalists of the overthrown shogunate. After the battle, the temple grounds were converted into one of Japan's first Western style parks and opened to the public in 1873. A statue of Saigo Takamori, one of the generals in the Battle of Ueno, stands near the park's southern entrance.<br/><br/>\n" +
            "\n" +
            "At the southwestern end of the park lies Shinobazu Pond, one of many reminders of Kaneiji Temple's former grandeur. The pond represents Lake Biwako (in a reference to Kaneiji's model, the Enryakuji Temple of Kyoto, which overlooks Lake Biwako). On an island in the middle of the pond stands Bentendo, a temple hall dedicated to the goddess of Benten.<br/><br/>\n" +
            "\n" +
            "Today Ueno Park is famous for the many museums found on its grounds, especially the Tokyo National Museum, the National Museum for Western Art, the Tokyo Metropolitan Art Museum and the National Science Museum. It is also home to Ueno Zoo, Japan's first zoological garden.<br/><br/>\n" +
            "\n" +
            "Additionally, Ueno Park is one of Tokyo's most popular and lively cherry blossom spots with more than 1000 cherry trees lining its central pathway. The cherry blossoms are usually in bloom during late March and early April and attract large numbers of hanami (cherry blossom viewing) parties.",
            "2-3 hours",
            "(Monday - Thursday, Sunday) Open 10:00AM - Closes 5:30PM\n<br><br>" +
            "(Friday, Saturday) Open 10:00AM - Closes 9:00PM",
            "../assets/img/ueno.jpg",
            "https://www.google.com/maps/place/Ueno+Onshi+Park/@35.7154769,139.7718611,17z/data=!3m1!4b1!4m5!3m4!1s0x60188e9b45906ac3:0xb1cb3623124e645a!8m2!3d35.7154769!4d139.7740551",
            "10",
            "10012",
            "Tokyo, Japan",
            "Nature, Park",
            "Free",
            "https://en.wikipedia.org/wiki/Ueno_Park"
        );
        var tokyo2 = makeDoc(
            "1-2 hours",
            "Akihabara",
            "Akihabara (秋葉原), also called Akiba after a former local shrine, is a district in central Tokyo that is famous for its many electronics shops. In more recent years, Akihabara has gained recognition as the center of Japan's otaku (diehard fan) culture, and many shops and establishments devoted to anime and manga are now dispersed among the electronic stores in the district. On Sundays, Chuo Dori, the main street through the district, is closed to car traffic from 13:00 to 18:00 (until 17:00 from October through March).",
            "",
            "../assets/img/ak.jpeg",
            "5.6 kilometers"
        );
        addrecommendPlace(
            tokyo2,
            "District for electronic and otaku goods",
            "Akihabara (秋葉原)",
            "Akihabara (秋葉原), also called Akiba after a former local shrine, is a district in central Tokyo that is famous for its many electronics shops. In more recent years, Akihabara has gained recognition as the center of Japan's otaku (diehard fan) culture, and many shops and establishments devoted to anime and manga are now dispersed among the electronic stores in the district. On Sundays, Chuo Dori, the main street through the district, is closed to car traffic from 13:00 to 18:00 (until 17:00 from October through March).<br><br>\n" +
            "\n" +
            "Akihabara has been undergoing major redevelopment over the years, including the renovation and expansion of Akihabara Station and the construction of new buildings in its proximity. Among these newly opened buildings were a huge Yodobashi electronics store and the Akihabara Crossfield, a business complex with the aim of promoting Akihabara as a center for global electronics technology and trade.<br><br>\n" +
            "\n" +
            "Electronics<br><br>\n" +
            "\n" +
            "Hundreds of electronics shops, ranging from tiny one-man stalls specializing in a particular electronic component to large electronics retailers, line the main Chuo Dori street and the crowded side streets around Akihabara. They offer everything from the newest computers, cameras, televisions, mobile phones, electronics parts and home appliances to second-hand goods and electronic junk.<br><br>\n" +
            "\n" +
            "A few chain stores such as Sofmap and Laox each operate multiple specialized branches along the main roads, while small independent shops can be found in the side streets. The only mega sized store is the Yodobashi Camera complex on the east side of the station.<br><br>\n" +
            "\n" +
            "Note that some of the electronics on sale are only intended for use in Japan due to voltage and other technical differences, Japanese language documentation and limited warranties. However, several stores also feature a selection of international models intended for overseas use, and most also offer tax free shopping to foreign tourists.<br><br>\n" +
            "\n" +
            "Otaku Goods\n" +
            "\n" +
            "The character of Akihabara has constantly changed over the decades and continues to do so. In the last decade Akihabara has emerged as a center of Japanese otaku and anime culture, and dozens of stores specializing in anime, manga, retro video games, figurines, card games and other collectibles have filled the spaces between the electronics retailers.<br><br>\n" +
            "\n" +
            "In addition to shops, various other animation-related establishments have become popular in the area, particularly maid cafes where waitresses dress up and act like maids or anime characters, and manga cafes (manga kissa), a type of internet cafe where customers can read comics and watch DVDs in addition to having access to the internet.",
            "1-2 hours",
            "All day",
            "../assets/img/akh.jpg",
            "https://www.google.com/maps/place/Akihabara,+Taito+City,+Tokyo,+Japan/@35.7021725,139.772358,17z/data=!3m1!4b1!4m5!3m4!1s0x60188ea73ea6f4ff:0x5eb9f1e50fe061e3!8m2!3d35.7022589!4d139.7744733",
            "999",
            "999888",
            "Tokyo, Japan",
            "Shopping, Electronic goods, Market",
            "Free",
            "https://en.wikipedia.org/wiki/Akihabara"
        )
        ;
        var tokyo3 = makeDoc(
            "half day",
            "Sensoji Temple",
            "Sensoji (浅草寺, Sensōji, also known as Asakusa Kannon Temple) is a Buddhist temple located in Asakusa. It is one of Tokyo's most colorful and popular temples. The legend says that in the year 628, two brothers fished a statue of Kannon, the goddess of mercy, out of the Sumida River, and even though they put the statue back into the river, it always returned to them. Consequently, Sensoji was built nearby for the goddess of Kannon. The temple was completed in 645, making it Tokyo's oldest temple.",
            "",
            "../assets/img/temple.jpeg",
            ""
        );
        addrecommendPlace(
            tokyo3,
            "Large temple in the Asakusa district",
            "Sensoji (浅草寺, Sensōji, also known as Asakusa Kannon Temple)",
            "Sensoji (浅草寺, Sensōji, also known as Asakusa Kannon Temple) is a Buddhist temple located in Asakusa. It is one of Tokyo's most colorful and popular temples.<br><br>\n" +
            "\n" +
            "The legend says that in the year 628, two brothers fished a statue of Kannon, the goddess of mercy, out of the Sumida River, and even though they put the statue back into the river, it always returned to them. Consequently, Sensoji was built nearby for the goddess of Kannon. The temple was completed in 645, making it Tokyo's oldest temple.<br><br>\n" +
            "\n" +
            "When approaching the temple, visitors first enter through the Kaminarimon (Thunder Gate), the outer gate of Sensoji Temple and the symbol of Asakusa and the entire city of Tokyo.<br><br>\n" +
            "\n" +
            "A shopping street of over 200 meters, called Nakamise, leads from the outer gate to the temple's second gate, the Hozomon. Alongside typical Japanese souvenirs such as yukata and folding fans, various traditional local snacks from the Asakusa area are sold along the Nakamise. The shopping street has a history of several centuries.<br><br>\n" +
            "\n" +
            "Beyond the Hozomon Gate stands the temple's main hall and a five storied pagoda. Destroyed in the war, the buildings are relatively recent reconstructions. The Asakusa Shrine, built in the year 1649 by Tokugawa Iemitsu, stands only a few dozen meters to the left of the temple's main building.<br><br>\n" +
            "\n" +
            "Various events are held throughout the year in the Sensoji Temple area. The biggest of them is the Sanja Matsuri, the annual festival of the Asakusa Shrine, held in May. Other events are the Asakusa Samba Carnival in August and the Hagoita-ichi (Hagoita Market) at which decorated wooden paddles used in the traditional game of hanetsuki are sold.",
            "half day",
            "Main hall: 6:00 to 17:00 (from 6:30 from October to March)<br><br>\n" +
            "Temple grounds: Always open",
            "../assets/img/st.jpg",
            "https://www.google.com/maps/place/Sensō-ji/@35.7147651,139.7944613,17z/data=!3m1!4b1!4m5!3m4!1s0x60188ec1a4463df1:0x6c0d289a8292810d!8m2!3d35.7147651!4d139.7966553",
            "637323",
            "73",
            "Tokyo, Japan",
            "Temple, Shopping",
            "Free",
            "https://en.wikipedia.org/wiki/Sensō-ji"
        );

        var ny1 = makeDoc(
            "half day",
            "The Metropolitan Museum of Art",
            "The Metropolitan Museum of Art of New York City, colloquially \"the Met\", is the largest art museum in the United States. With 6,953,927 visitors to its three locations in 2018, it was the third most visited art museum in the world. ",
            "",
            "../assets/img/Met.jpeg",
            "534.1 meters"
        );
        addrecommendPlace(
            ny1,
            "The Metropolitan Museum of Art",
            "The Metropolitan Museum of Art in New York",
            "Opened in 1880, The Metropolitan Museum of Art isn’t technically NYC’s oldest museum (that distinction belongs to The New-York Historical Society, founded in 1804) but it is the largest among Gotham’s art institutions, with some impressive statistics to prove it. Taking up 11.5 acres within Central Park along Fifth Avenue, The Met measures two million square feet and receives more than 4 million visitors annually. Its collection, which spans 5,000 years of art history from pre-history to the present, boasts 36,000 objects, including 2,500 European Old Master, Impressionist and Post-Impressionist paintings, as well as the greatest collection of Egyptian art and artifacts outside Cairo—among them, the full-scale Temple of Dendur. Other major attractions include The Met’s American and Lehmann Wings; The Costume Institute; the Rooftop Garden, which offers spectacular views of the Park and the Midtown skyline; and, of course, its 29 amazing period rooms. The Met no longer offers pay-what-wish admission to anyone who isn’t a New York State resident, but even so, a stroll through the museum’s multitude of treasures is one of the greatest pleasures of being in New York.",
            "half day",
            "(Monday - Thursday, Sunday) Open 10:00AM - Closes 5:30PM\n<br><br>" +
            "(Friday, Saturday) Open 10:00AM - Closes 9:00PM",
            "../assets/img/mam.jpg",
            "https://www.google.com/maps/place/The+Metropolitan+Museum+of+Art/@40.7794366,-73.965438,17z/data=!3m2!4b1!5s0x89c25896e10b5523:0x6c1168e355509b8b!4m5!3m4!1s0x89c25896f660c26f:0x3b2fa4f4b6c6a1fa!8m2!3d40.7794366!4d-73.963244",
            "637323",
            "73",
            "1000 5th Ave on the Upper East Side, NEW YORK, NY",
            "Art, Museum",
            "$25 for adults; $17 for seniors; $12 for students.<br><br>\n" +
            "Free for Members, Patrons, and children under 12.<br><br>\n" +
            "Tickets include exhibitions and are valid for three consecutive days at all three Met locations.",
            "https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art"
        );
        var ny2 = makeDoc(
            "1-3 hours",
            "Solomon R. Guggenheim Museum",
            "The Solomon R. Guggenheim Museum, often referred to as The Guggenheim, is an art museum located at 1071 Fifth Avenue on the corner of East 89th Street in the Upper East Side neighborhood of Manhattan, New York City. ",
            "",
            "../assets/img/g.jpeg",
            "4.2 kilometers"
        );
        addrecommendPlace(
            ny2,
            "Art Museum",
            "The Architecture of the Solomon R. Guggenheim Museum",
            "From its very beginnings the Solomon R. Guggenheim Museum has been a hub for new art and new ideas. The museum was designed by renowned architect Frank Lloyd Wright to house an innovative collection of works in a unique environment. Today, the museum continues to be a landmark destination that attracts visitors from around the world.\n<br><br>" +
            "This curriculum module is designed as a resource for educators to help introduce the unique architecture and history of the Solomon R. Guggenheim Museum to students. It can be used on its own in the classroom, as preparation for a visit to the museum, or afterward as post-visit lessons. Although the primary goal of this guide is to introduce the museum’s unique architecture, many of the suggested discussions and activities can be used to explore the history, design, and use of any chosen building.",
            "1-3 hours",
            "(Monday, Wednesday - Friday, Sunday) Open 10:00AM - Closes 5:30PM\n<br><br>" +
            "(Thursday, Saturday) Open 10:00AM - Closes 8:00PM",
            "../assets/img/gu.jpeg",
            "https://www.google.com/maps/place/Solomon+R.+Guggenheim+Museum/@40.7829796,-73.9611646,17z/data=!3m1!4b1!4m5!3m4!1s0x89c258a29a5e9e99:0x4a01c8df6fb3cb8!8m2!3d40.7829796!4d-73.9589706",
            "524",
            "1332",
            "1071 5TH AVE BETWEEN 88TH & 89TH ST, NEW YORK, NY",
            "Art, Architecture, Design, Museum",
            "ADULTS  $25 <br><br>\n" +
            "STUDENTS AND SENIORS WITH STUDENT ID OR 65+  $18<br><br>\n" +
            "CHILDREN UNDER 12  Free<br><br>\n" +
            "MEMBERS  Free",
            "https://en.wikipedia.org/wiki/Solomon_R._Guggenheim_Museum"
        );
        var ny3 = makeDoc(
            "1-2 hours",
            "The Morgan Library & Museum",
            "The Morgan Library & Museum – formerly the Pierpont Morgan Library – is a museum and research library located at 225 Madison Avenue at East 36th Street in the Murray Hill neighborhood of Manhattan, New York City. ",
            "",
            "../assets/img/morgan.jpeg",
            "5 kilometers"
        );
        addrecommendPlace(
            ny3,
            "Library",
            "The Morgan Library & Museum",
            "The Morgan Library & Museum houses an enormous collection of rare books and manuscripts, plus drawings and other uncommon pieces. The collection began as a labor of love by financier J.P. Morgan, and has continued to grow and expand over the years. Now newly renovated, the museum features special additions, like a large performance hall where concerts are held.",
            "1-2 hours",
            "(Tuesday - Thursday) Open 10:00AM - Closes 5:00PM\n<br><br>" +
            "(Friday) Open 10:30AM - Closes 9:00PM\n<br><br>" +
            "(Saturday) Open 10:00AM - Closes 6:00PM\n<br><br>" +
            "(Sunday) Open 11:00AM - Closes 6:00PM\n<br><br>" +
            "(Monday) Closes All Day",
            "../assets/img/ml.jpg",
            "https://www.google.com/maps/place/The+Morgan+Library+%26+Museum/@40.7492258,-73.9835911,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2590738778edf:0x3ba82e23876af8d!8m2!3d40.7492258!4d-73.9813971",
            "345534",
            "345",
            "225 Madison Avenue at 36th Street, New York, NY 10016",
            "Library, Art, Museum",
            "ADULTS  $22 <br><br>\n" +
            "STUDENTS WITH STUDENT ID  $13<br><br>\n" +
            "SENIORS OR 65  $14<br><br>\n" +
            "CHILDREN UNDER 12  Free<br><br>\n" +
            "MEMBERS  Free",
            "https://en.wikipedia.org/wiki/Morgan_Library_%26_Museum"
        );
        var ny4 = makeDoc(
            "3 hours",
            "The Museum of Modern Art",
            "The Museum of Modern Art is an art museum located in Midtown Manhattan, New York City, on 53rd Street between Fifth and Sixth Avenues. MoMA plays a major role in developing and collecting modern art, and is often identified as one of the largest and most influential museums of modern art in the world.",
            "",
            "../assets/img/mo.jpeg",
            ""
        );
        addrecommendPlace(
            ny4,
            "The Museum of Modern Art",
            "The Museum of Modern Art",
            "In an interview in 1964, MoMA’s founding director, Alfred Barr, described what it was that distinguished his institution from other NYC art museums: “[MoMA] is a torpedo moving through time, its head the ever-advancing present, its tail the ever-receding past of 50 to 100 years ago.” His statement reflected the prevailing midcentury view that modernism represented a progressive chronicle in which the torch of important art was passed from Europe to the United States. And indeed, after opening in 1929, MoMA became key to spreading the gospel of modern art over the course of the 20th century, positioning itself as a kind of temple for only the most dedicated aficionados. Today, that approach has largely been discarded in favor of a more inclusive program that features women and artists of color, as well as lesser-known figures from global reaches beyond Europe and the United States. MoMA has become increasingly user-friendly through successive expansions—the most recent of which, in 2019, added 40,000 square feet of new exhibition space, including street-facing galleries free to the public, as well as a dedicated venue for live programming and performances. Current amenities include MoMA’s sculpture garden and cinema, as well a Michelin-starred restaurant run by Danny Meyer (don’t worry; there are also less-expensive dining options). Then there’s The MoMA Design Store, which sells furnishings and other merchandise as well as books. Still, it’s hard for MoMA to completely shake of its legacy; people still come to see famous artists such as Picasso and Matisse, after all. But through repeated renewal and re-invention, MoMA has exceeded its original role as modernism’s incubator to become one of NYC’s most important—and visited—museums.",
            "half day",
            "(Monday - Sunday) Open 10:00AM - Closes 5:30PM\n<br><br>" +
            "(Friday and the first Thursday of each month) Open 10:00AM - Closes 9:00PM",
            "../assets/img/moma.jpg",
            "https://www.google.com/maps/place/The+Metropolitan+Museum+of+Art/@40.7794366,-73.965438,17z/data=!3m2!4b1!5s0x89c25896e10b5523:0x6c1168e355509b8b!4m5!3m4!1s0x89c25896f660c26f:0x3b2fa4f4b6c6a1fa!8m2!3d40.7794366!4d-73.963244",
            "989790",
            "901",
            "11 West 53 Street, New York, NY",
            "Art, Museum",
            "ADULTS  $25 <br><br>\n" +
            "STUDENTS WITH STUDENT ID  $14<br><br>\n" +
            "SENIORS OR 65  $18<br><br>\n" +
            "CHILDREN UNDER 16 AND MEMBERS Free<br><br>\n" +
            "Visitors with disabilities  $18",
            "https://en.wikipedia.org/wiki/Museum_of_Modern_Art"
        );*!/
        var listOfOnedaylists = [];
        //listOfOnedaylists.push(tokyo1, tokyo2, tokyo3, ny1, ny2, ny3, ny4);
        var todolist = collection.find().toArray().callback(function (list) {
            list.oneDayListId.forEach(function (data) {
                listOfOnedaylists.push(data);
            })
        });

        // we can use insertMany to insert an array of documents!
        return onedaylistCollection.insertMany(listOfOnedaylists).then(function () {
            return onedaylistCollection.find().toArray();
        });
    });*/


    return MongoClient.connect(fullMongoUrl)
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
}

// By exporting a function, we can run
var exports = (module.exports = runSetup);

