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

        var makeDoc = function (day, name, description, location, imgurl, distance, time, traveltime) {
            return {
                _id: Guid.create().toString(),
                day: day,
                name: name,
                description: description,
                location: location,
                imgurl: imgurl,
                distance: distance,
                time: time,
                traveltime: traveltime,
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




        var beijing1 = makeDoc(
            "2-4 hours",
            "The Palace Museum",
            "Established in 1925, the Palace Museum (故宫) is located in the imperial palace of the consecutive Ming (1368-1644) and Qing (1644-1911) dynasties. The magnificent architectural complex, also known as the Forbidden City, and the vast holdings of paintings, calligraphy, ceramics, and antiquities of the imperial collections make it one of the most prestigious museums in China and the world....",
            "Beijing",
            "../assets/img/pm.png",
            "1200 meters",
            "8:30 AM",
            "12:00 PM"
        );
        addrecommendPlace(
            beijing1,
            "placeToVisit",
            "Palace Museum (故宫)",
            "Established in 1925, the Palace Museum is located in the imperial palace of the consecutive Ming (1368-1644) and Qing (1644-1911) dynasties. The magnificent architectural complex, also known as the Forbidden City, and the vast holdings of paintings, calligraphy, ceramics, and antiquities of the imperial collections make it one of the most prestigious museums in China and the world.<br/><br/>\n" +
            "\n" +
            "In 1961, the State Council designated the former imperial residence as one of China's foremost-protected cultural heritage sites, and in 1987 it was listed as a UNESCO World Heritage site.",
            "2-4 hours",
            "(April 1st - October 31st) Open 8:30 AM - Closes 5:00 PM\n<br><br>" +
            "(November 1st - March 31st) Open 8:30 AM - Closes 4:30 PM",
            "../assets/img/palacemuseum.jpg",
            "https://www.google.com/maps/place/The+Palace+Museum/@39.9163488,116.3949659,17z/data=!3m1!4b1!4m5!3m4!1s0x35f052dd9bcd81ab:0xde43eaed9b106064!8m2!3d39.9163447!4d116.3971546",
            "2000",
            "1001200",
            "No.4 Jingshanqian Street, Dongcheng District, Beijing 100009 China",
            "History, Museum, Art",
            "April 1st - October 31st: $9.00\n<br><br>" +
            "November 1st - March 31st: $6.00",
            "https://en.wikipedia.org/wiki/Palace_Museum"
        );

        var beijing2 = makeDoc(
            "1-2 hours",
            "Temple of Heaven",
            "Built in 1420 with a total area of 270 acres, this is the largest building for religious worship in China, which was originally used by the Ming and Qing emperors to pay homage to Heaven and to pray for a year of rich harvest.",
            "Beijing",
            "../assets/img/temple.png",
            "4.4 kilometers",
            "1:00 PM",
            "2:30 PM"
        );
        addrecommendPlace(
            beijing2,
            "placeToVisit",
            "Temple of Heaven",
            "The Temple of Heaven, founded in the first half of the 15th century, is a dignified complex of fine cult buildings set in gardens and surrounded by historic pine woods. In its overall layout and that of its individual buildings, it symbolizes the relationship between earth and heaven – the human world and God's world – which stands at the heart of Chinese cosmogony, and also the special role played by the emperors within that relationship.",
            "1-2 hours",
            "9:00 AM - 5:00 PM",
            "../assets/img/templeofheaven.png",
            "https://www.google.com/maps/place/Temple+of+Heaven/@39.8821844,116.4044169,17z/data=!3m1!4b1!4m5!3m4!1s0x35f04d6019ff91eb:0x372c15453b110e6a!8m2!3d39.8821803!4d116.4066056",
            "9990",
            "9998838",
            "Tiantan Road, Dongcheng District, Beijing 100050 China",
            "Historic, Landmarks, Religious Sites, Architectural Buildings, Temple",
            "$5.99 per adult",
            "https://en.wikipedia.org/wiki/Temple_of_Heaven"
        )
        ;

        var beijing3 = makeDoc(
            "2-3 hours",
            "Nanluoguxiang",
            "Built in 1420 with a total area of 270 acres, this is the largest building for religious worship in China, which was originally used by the Ming and Qing emperors to pay homage to Heaven and to pray for a year of rich harvest.ensoji (浅草寺, Sensōji, also known as Asakusa Kannon Temple) is a Buddhist temple located in Asakusa. It is one of Tokyo's most colorful and popular temples. The legend says that in the year 628, two brothers fished a statue of Kannon, the goddess of mercy, out of the Sumida River, and even though they put the statue back into the river, it always returned to them. Consequently, Sensoji was built nearby for the goddess of Kannon. The temple was completed in 645, making it Tokyo's oldest temple.",
            "Beijing",
            "../assets/img/nanluo.png",
            "10 kilometers",
            "3:30 PM",
            "6:00 PM"
        );
        addrecommendPlace(
            beijing3,
            "placeToVisit",
            "Nanluoguxiang (南锣鼓巷)",
            "Nanluoguxiang, namely South Gong and Drum Lane, is an old hutong in Beijing, renowned for its long history, Hutong culture, specialty stores, and distinctive foods. It is 768 meters (2,519 feet) long and 8 meters (26 feet) wide. Its north end joins Gulou Dong Dajie, and the south end is connected to Di'anmen Dong Dajie. <br><br>\n"+
            "\n" +
            "There are eight parallel hutongs on each side of the old alley. These sixteen and the main lane were put on the first list of 25 historic and culturally protected areas in November 1990, by the local Municipal Government. Situated in the downtown area, it is convenient to reach." ,
            "2-3 hours",
            "All Day",
            "../assets/img/nanluoguxiang.png",
            "https://www.google.com/maps/place/Nan+Luo+Gu+Xiang,+Dongcheng+Qu,+Beijing+Shi,+China/@39.9371056,116.400963,17z/data=!3m1!4b1!4m5!3m4!1s0x35f0533b4ab295e9:0x8e18a10ae773a65e!8m2!3d39.9371015!4d116.4031517",
            "63723",
            "732",
            "Nanluoguo Xiang, Dongcheng District, Beijing 100009 China",
            "Cities, Historic, Shopping",
            "Free",
            "https://en.wikipedia.org/wiki/Nanluoguxiang"
        );

        var beijing4 = makeDoc(
            "More than 3 hours",
            "Great Wall",
            "The Great Wall of China is an ancient series of walls and fortifications, totaling more than 13,000 miles in length, located in northern China. Perhaps the most recognizable symbol of China and its long and vivid history, the Great Wall was originally conceived by Emperor Qin Shi Huang in the third century B.C. as a means of preventing incursions from barbarian nomads.",
            "Beijing",
            "../assets/img/changcheng.png",
            "40 kilometers",
            "7:30 AM",
            "4:00 PM"
        );
        addrecommendPlace(
            beijing4,
            "placeToVisit",
            "Great Wall",
            "The Great Wall of China is an ancient series of walls and fortifications, totaling more than 13,000 miles in length, located in northern China. Perhaps the most recognizable symbol of China and its long and vivid history, the Great Wall was originally conceived by Emperor Qin Shi Huang in the third century B.C. as a means of preventing incursions from barbarian nomads. The best-known and best-preserved section of the Great Wall was built in the 14th through 17th centuries A.D., during the Ming dynasty. Though the Great Wall never effectively prevented invaders from entering China, it came to function as a powerful symbol of Chinese civilization’s enduring strength.",
            "More than 3 hours",
            "(Monday - Friday) 7:30 AM - Closes 5:00 PM\n<br><br>" +
            "(Saturday) 7:30 AM - 6:00 PM",
            "../assets/img/greatwall.png",
            "https://www.google.com/maps/place/Great+Wall+of+China/@40.713599,115.7071388,8.43z/data=!4m12!1m6!3m5!1s0x35f121d7687f2ccf:0xd040259b950522df!2sGreat+Wall+of+China!8m2!3d40.4319077!4d116.5703749!3m4!1s0x35f121d7687f2ccf:0xd040259b950522df!8m2!3d40.4319077!4d116.5703749",
            "98979000",
            "90100",
            "Mutianyu Village, Bohai Town, Huairou District, Beijing China",
            "Historic, Nature, Landmarks, Outdoor, Mountain/Hills",
            "ADULTS  $16<br><br>\n" +
            "STUDENTS WITH STUDENT ID  $8<br><br>\n" +
            "SENIORS OR 65  $8<br><br>\n" +
            "CHILDREN UNDER 16 AND MEMBERS Free<br><br>\n" +
            "Visitors with disabilities  $8",
            "https://en.wikipedia.org/wiki/Great_Wall_of_China"
        );

        var beijing5 = makeDoc(
            "1-2 hours",
            "Quanjude Roast Duck",
            "a Chinese restaurant known for its Peking roast duck and its longstanding culinary heritage since its establishment in 1864 in Beijing, China.",
            "Beijing",
            "../assets/img/quanjude.png",
            "30 kilometers",
            "5:00 AM",
            "7:00 PM"
        );
        addrecommendPlace(
            beijing5,
            "resturant",
            "Quanjude Roast Duck",
            "The Great Wall of China is an ancient series of walls and fortifications, totaling more than 13,000 miles in length, located in northern China. Perhaps the most recognizable symbol of China and its long and vivid history, the Great Wall was originally conceived by Emperor Qin Shi Huang in the third century B.C. as a means of preventing incursions from barbarian nomads. The best-known and best-preserved section of the Great Wall was built in the 14th through 17th centuries A.D., during the Ming dynasty. Though the Great Wall never effectively prevented invaders from entering China, it came to function as a powerful symbol of Chinese civilization’s enduring strength.",
            "More than 3 hours",
            "11:00 AM - 14:30 PM; 5:00 PM - 7:30 PM",
            "../assets/img/quanjudeduck.png",
            "https://www.google.com/maps/dir//39.912167,116.41186/@39.9121459,116.34182,12z",
            "1534",
            "956",
            "13 Shuaifuyuan Lu, Wangfujing, Dongcheng District, Beijing China",
            "Asian, Lunch, Dinner, Late Night",
            "Estimated $25/person",
            "https://en.wikipedia.org/wiki/Quanjude"
        );

        var miami1 = makeDoc(
            "3-6 hours",
            "South Beach",
            "People watching is a great pastime in Miami's South Beach, which draws celebrities and beautiful people in skimpy swim attire to see and be seen. The wide and fine, white sand-covered beaches are popular spots for fashion photo shoots, so you're sure to see models. The area is known for its hip clubs and wild nightlife as well as numerous excellent restaurants.",
            "Miami",
            "../assets/img/sobe.png",
            "5 kilometers",
            "9:00 AM",
            "12:00 PM"
        );
        addrecommendPlace(
            miami1,
            "placeToVisit",
            "South Beach",
            "South Beach, also nicknamed SoBe, is a neighborhood in the city of Miami Beach, Florida, United States, located due east of Miami city proper between Biscayne Bay and the Atlantic Ocean. The area encompasses Miami Beach south of Dade Boulevard.",
            "3-6 hours",
            "9:00 AM - 4:00 PM",
            "../assets/img/southbeach.png",
            "https://www.google.com/maps/place/South+Beach,+Miami+Beach,+FL+33139/@25.781849,-80.1527164,14z/data=!3m1!4b1!4m5!3m4!1s0x88d9b48e8bc080f1:0x7afeece4a9efe6bd!8m2!3d25.7826123!4d-80.1340772",
            "0",
            "956345",
            "Ocean Drive, Miami Beach, FL 33139",
            "Beaches, Nature, Outdoor Activities, Nature & Parks",
            "Free",
            "https://en.wikipedia.org/wiki/South_Beach"
        );

        var miami2 = makeDoc(
            "Less than 1 hour",
            "La Camaronera Fish Market",
            "Since 1976, Camaronera has been serving and selling fresh seafood the Little Havana way. On Triple D, Guy learned that means that every lobster, shrimp and green plantain gets coated in golden batter and fried. For the best fish-fry, locals order the signature Pan con Minuta snapper sandwich.",
            "Miami",
            "../assets/img/fishmarket.png",
            "7.7 miles",
            "1:00 pM",
            "2:00 PM"
        );
        addrecommendPlace(
            miami2,
            "resturant",
            "La Camaronera Fish Market",
            "Since 1976, Camaronera has been serving and selling fresh seafood the Little Havana way. On Triple D, Guy learned that means that every lobster, shrimp and green plantain gets coated in golden batter and fried. For the best fish-fry, locals order the signature Pan con Minuta snapper sandwich.",
            "Less than 1 hour",
            "Sundays 10:30 AM to 4:00 PM\n<br><br>" +
            "Mondays - Thursdays 10:30 AM to 5:30 PM\n<br><br>",+
                "Fridays & Saturdays 10:30 AM to 9:00 PM",
            "Special Dishes: Camarones Fritos (Breaded Shrimp)\n<br><br>",+
                "Cangrejo Moro (Stone Crab), Fried Fish, Hush Puppies",
            "../assets/img/lamfishmarket.jpg",
            "https://www.google.com/maps/place/La+Camaronera+Seafood+Joint+and+Fish+Market/@25.7723006,-80.2298558,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9b6e36a09d5ef:0x64b210a2f0f277cd!8m2!3d25.7722958!4d-80.2276671",
            "1534",
            "956723",
            "1952 W Flagler St Little Havana, Miami, FL",
            "Seafood, Cuban, Cities, Beaches, American, Lunch, Dinner",
            "$$ - $$$",
            "http://www.lacamaronera.com/index.html"
        );

        var miami3 = makeDoc(
            "More than 3 hours",
            "John Pennekamp Coral Reef State Park",
            "A beautiful state park that features land and undersea adventures.",
            "Miami",
            "../assets/img/johnpark.png",
            "60 miles",
            "3:0 PM",
            "6:30 PM"
        );
        addrecommendPlace(
            miami3,
            "placeToVisit",
            "John Pennekamp Coral Reef State Park",
            "AJohn Pennekamp Coral Reef State Park is a Florida State Park located on Key Largo in Florida. It includes approximately 70 nautical square miles (240 km²) of adjacent Atlantic Ocean waters. The park is approximately 25 miles in length and extends 3 miles into the Atlantic Ocean.[1] It was the first underwater park in the United States. The park was added to the National Register of Historic Places on April 14, 1972. The primary attractions of the park are the coral reefs (such as Molasses Reef) and their associated marine life.",
            "More than 3 hours",
            "Sunday - Saturday 8:00 AM - 8:30 PM",
            "../assets/img/johnstatepark.jpg",
            "https://www.google.com/maps/place/John+Pennekamp+Coral+Reef+State+Park/@25.1252511,-80.4082648,17z/data=!3m1!4b1!4m5!3m4!1s0x88d765d7c9d4f8ad:0xe8f62495ebc427a7!8m2!3d25.1252463!4d-80.4060761",
            "944535",
            "50120",
            "102601 Overseas Highway, Key Largo, FL 33037",
            "Nature, Parks, Cities",
            "$50 - $500",
            "https://en.wikipedia.org/wiki/John_Pennekamp_Coral_Reef_State_Park"
        );

        var toronto1 = makeDoc(
            "3 - 6 hours",
            "Toronto Island Park",
            "Park consisting of four main islands and containing trails, beaches and children's amusement rides.",
            "Toronto",
            "../assets/img/torontoisland.png",
            "1.4 miles",
            "10:00 AM",
            "2:00 PM"
        );
        addrecommendPlace(
            toronto1,
            "placeToVisit",
            "Toronto Island Park",
            "As the city's largest downtown Park, Toronto Island Park offers 230 hectares of passive and recreational parkland minutes away from the core. Trails, beaches, horticultural displays and picnic sites are all accessible by ferries that leave the foot of Bay Street, in Toronto.",
            "3 - 6 hours",
            "Sundays - Saturdays 10:00 AM - 5:00 PM",
            "../assets/img/torontoislandpark.jpg",
            "https://www.google.com/maps/search/Toronto+Island+Park/@43.6201119,-79.4001731,15z/data=!3m1!4b1",
            "200230",
            "102003",
            "9 Queens Quay West Bay Street, Jack Layton Ferry Terminal, Toronto, Ontario M5J 2H3 Canada",
            "Nature, Parks, Islands, Mountain/Hills",
            "$$ - $$$",
            "https://en.wikipedia.org/wiki/Toronto_Islands"
        );

        var toronto2 = makeDoc(
            "2 hours",
            "Ripley's Aquarium of Canada",
            "Ripley's Aquarium of Canada is a public aquarium in Toronto, Ontario, Canada. The aquarium is one of three aquariums owned and operated by Ripley Entertainment. It is located in downtown Toronto, just southeast of the CN Tower. The aquarium has 5.7 million litres (1.25 million gallons) of marine and freshwater habitats from across the world. The exhibits hold more than 16,000 exotic sea and freshwater specimens from more than 450 species.",
            "Toronto",
            "../assets/img/ripley.png",
            "1.2 miles",
            "3:00 PM",
            "5:00 PM"
        );
        addrecommendPlace(
            toronto2,
            "placeToVisit",
            "Ripley's Aquarium of Canada",
            "Explore the Waters of the World at Ripley's Aquarium of Canada. Located in the heart of downtown Toronto at the base of the CN Tower, the aquarium is Toronto's must-see attraction for tourists and locals of all ages. Immerse yourself in a world of 20,000 aquatic animals and discover your own underwater adventure. The Aquarium features North America’s longest underwater viewing tunnel with more than 5.7 million litres of water and over 100 interactive opportunities. Get up close and personal with several touch exhibits featuring horseshoe crabs, sharks, scarlet cleaner shrimp, and stingrays as well as daily dive shows every 2 hours. This awe-inspiring attraction consists of nine carefully curated galleries showcasing a cross section of saltwater and freshwater environments from around the world – starting with species from Toronto’s backyard, the Great Lakes basin.",
            "2 hours",
            "Sun - Sat 9:00 AM - 11:00 PM",
            "../assets/img/ripleyaquarium.jpg",
            "https://www.google.com/maps/place/Ripley's+Aquarium+of+Canada/@43.6424036,-79.3881603,17z/data=!3m1!4b1!4m5!3m4!1s0x882b34d5d5b6045b:0x8daf1a19298c213d!8m2!3d43.6424036!4d-79.3859716",
            "980",
            "9013",
            "288 Bremner Boulevard, Toronto, Ontario M5V 3L9 Canada",
            "Nature, Parks, Zoos, Aquariums",
            "ADULT (14+): $39.00<br><br>\n" +
            "YOUTH (6-13): $26.00<br><br>\n" +
            "CHILD (3-5): $13.00<br><br>\n" +
            "SENIOR (65+): $26.00",
            "https://en.wikipedia.org/wiki/Ripley%27s_Aquarium_of_Canada"
        );

        var toronto3 = makeDoc(
            "1 hour",
            "Bindia Indian Bistro",
            "Indian classics with modern flourishes served in contemporary quarters with colourful murals.",
            "Toronto",
            "../assets/img/bindia.jpg",
            "1 kilometers",
            "5:30 PM",
            "6:30 PM"
        );
        addrecommendPlace(
            toronto3,
            "resturant",
            "Bindia Indian Bistro",
            "Bindia Indian Bistro brings a nouveau approach to Indian cuisine – focusing on fresh quality ingredients without compromising the sumptuous flavors that are the essence of Indian food.",
            "1 hour",
            "Sun 12:00 PM - 9:30 PM\n<br><br>" +
            "Mon - Sat 11:00 AM - 10:00 PM",
            "../assets/img/bindiabistro.jpg",
            "https://www.google.com/maps/place/Bindia+Indian+Bistro/@43.6484485,-79.3742346,17z/data=!3m1!4b1!4m5!3m4!1s0x89d4cb31d257ba59:0xa0381b6115c2e791!8m2!3d43.6484485!4d-79.3720459",
            "6832",
            "134",
            "16 Market St, Toronto, Ontario M5E 1M6 Canada",
            "Vegetarian, Vegan, Indian, Asian, Gluten Free, Lunch, Dinner",
            "$$ - $$$",
            "https://www.bindia.ca/"
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
        );

        addOneDayList(
            newyork,
            ny2
        );

        addOneDayList(
            newyork,
            ny3
        );
        addOneDayList(
            newyork,
            ny4
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
        );

        addOneDayList(
            tokyo,
            tokyo2
        );

        addOneDayList(
            tokyo,
            tokyo3
        );
        var beijing = makeDoc2(
            2,
            "Beijing Classic Two-Days Tour",
            "Welcome to a capital city whose story goes back at least 3000 years. In Beijing, you'll find a wealth of history, both ancient (Palace Museum, Temple of Heaven, Great Wall) and more recent (Nanluoguxiang, Quanjude Roast Duck)",
            "four seasons",
            "../assets/img/bj.png",
            9
        );

        addOneDayList(
            beijing,
            beijing1
        );

        addOneDayList(
            beijing,
            beijing2
        );

        addOneDayList(
            beijing,
            beijing3
        );

        addOneDayList(
            beijing,
            beijing4
        );

        addOneDayList(
            beijing,
            beijing5
        );

        var miami = makeDoc2(
            1,
            "Miami Classic One-Day Tour",
            "Miami is hot hot hot! And it’s not just the sultry weather. Indulge in a fancy meal at one of the city’s celebrity-owned restaurants, hit the beach of course, or have yourself a walkabout, taking in Miami’s colorful art deco architecture and dive deep at the John Pennekamp Coral Reef State Park.",
            "four seasons",
            "../assets/img/miami.jpg",
            14
        );

        addOneDayList(
            miami,
            miami1
        );

        addOneDayList(
            miami,
            miami2
        );

        addOneDayList(
            miami,
            miami3
        );

        var toronto = makeDoc2(
            1,
            "Toronto Classic One-Day Tour",
            "In Toronto, you can find world-class theater, shopping and restaurants here, but the sidewalks are clean and the people are friendly. Top things you can't miss are Toronto Island Park and Ripley's Aquarium of Canada.",
            "Spring Summer Fall",
            "../assets/img/toronto.png",
            10
        );

        addOneDayList(
            toronto,
            toronto1
        );

        addOneDayList(
            toronto,
            toronto2
        );

        addOneDayList(
            toronto,
            toronto3
        );

        listOfTodolists.push(newyork, tokyo, beijing, miami, toronto);

        // we can use insertMany to insert an array of documents!
        return todolistCollection.insertMany(listOfTodolists).then(function () {
            return todolistCollection;
        });
    });

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
                        email: "Sherlock@aa.com",
                        interestPlaces: [{
                            value: 1, name: 'interestPlaces', isChecked: true, selected: "Cities"
                        },
                            {
                                value: 2, name: 'interestPlaces', isChecked: false, selected: "Nature"
                            },
                            {
                                value: 3, name: 'interestPlaces', isChecked: false, selected: "Mountain/Hills"
                            },
                            {
                                value: 4, name: 'interestPlaces', isChecked: true, selected: "Beaches"
                            },
                            {
                                value: 5, name: 'interestPlaces', isChecked: true, selected: "Historic"
                            }],
                        preferredFood: [{
                            value: 1, name: 'preferredFood', isChecked: false, selected: "Spanish/Hispanic"
                        },
                            {
                                value: 2, name: 'preferredFood', isChecked: true, selected: "Asian"
                            },
                            {
                                value: 3, name: 'preferredFood', isChecked: false, selected: "American"
                            },
                            {
                                value: 4, name: 'preferredFood', isChecked: true, selected: "Middle Eastern"
                            },
                            {
                                value: 5, name: 'preferredFood', isChecked: false, selected: "European"
                            }],
                        preferDistance: [{
                            value: 1, name: 'preferDistance', isChecked: false, selected: "<5 miles"
                        },
                            {
                                value: 2, name: 'preferDistance', isChecked: true, selected: "5 miles - 10 miles"
                            },
                            {
                                value: 3, name: 'preferDistance', isChecked: false, selected: "10 miles - 20 miles"
                            },
                            {
                                value: 4, name: 'preferDistance', isChecked: false, selected: ">20 miles"
                            }],
                        dietaryRestrictions: [{
                            value: 1, name: 'dietaryRestrictions', isChecked: false, selected: "Vegetarian"
                        },
                            {
                                value: 2, name: 'dietaryRestrictions', isChecked: true, selected: "Gluten free"
                            },
                            {
                                value: 3, name: 'dietaryRestrictions', isChecked: false, selected: "Seafood allergy"
                            }],
                        toDoList: [],
                        postedReviews: [],
                        postedRatings: [],
                        imgurl: "./assets/app/media/img/users/user3.jpg",
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
                            email: "Elizabeth@bb.com",
                            interestPlaces: [{
                                value: 1, name: 'interestPlaces', isChecked: true, selected: "Cities"
                            },
                                {
                                    value: 2, name: 'interestPlaces', isChecked: false, selected: "Nature"
                                },
                                {
                                    value: 3, name: 'interestPlaces', isChecked: false, selected: "Mountain/Hills"
                                },
                                {
                                    value: 4, name: 'interestPlaces', isChecked: true, selected: "Beaches"
                                },
                                {
                                    value: 5, name: 'interestPlaces', isChecked: true, selected: "Historic"
                                }],
                            preferredFood: [{
                                value: 1, name: 'preferredFood', isChecked: false, selected: "Spanish/Hispanic"
                            },
                                {
                                    value: 2, name: 'preferredFood', isChecked: true, selected: "Asian"
                                },
                                {
                                    value: 3, name: 'preferredFood', isChecked: false, selected: "American"
                                },
                                {
                                    value: 4, name: 'preferredFood', isChecked: true, selected: "Middle Eastern"
                                },
                                {
                                    value: 5, name: 'preferredFood', isChecked: false, selected: "European"
                                }],
                            preferDistance: [{
                                value: 1, name: 'preferDistance', isChecked: false, selected: "<5 miles"
                            },
                                {
                                    value: 2, name: 'preferDistance', isChecked: true, selected: "5 miles - 10 miles"
                                },
                                {
                                    value: 3, name: 'preferDistance', isChecked: false, selected: "10 miles - 20 miles"
                                },
                                {
                                    value: 4, name: 'preferDistance', isChecked: false, selected: ">20 miles"
                                }],
                            dietaryRestrictions: [{
                                value: 1, name: 'dietaryRestrictions', isChecked: false, selected: "Vegetarian"
                            },
                                {
                                    value: 2, name: 'dietaryRestrictions', isChecked: true, selected: "Gluten free"
                                },
                                {
                                    value: 3, name: 'dietaryRestrictions', isChecked: false, selected: "Seafood allergy"
                                }],
                            toDoList: [],
                            postedReviews: [],
                            postedRatings: [],
                            imgurl: "./assets/app/media/img/users/user5.jpg",
                            hashedPassword: "$2a$16$SsR2TGPD24nfBpyRlBzINeGU61AH0Yo/CbgfOlU1ajpjnPuiQaiDm"
                        });
                    })
                    .then(function () {
                        return userCollection.insertOne({
                            _id: Guid.create().toString(),
                            username: "theboywholived",
                            firstName: "Harry",
                            lastName: "Potter",
                            email: "Harry@aa.com",
                            interestPlaces: [{
                                value: 1, name: 'interestPlaces', isChecked: true, selected: "Cities"
                            },
                                {
                                    value: 2, name: 'interestPlaces', isChecked: false, selected: "Nature"
                                },
                                {
                                    value: 3, name: 'interestPlaces', isChecked: false, selected: "Mountain/Hills"
                                },
                                {
                                    value: 4, name: 'interestPlaces', isChecked: true, selected: "Beaches"
                                },
                                {
                                    value: 5, name: 'interestPlaces', isChecked: true, selected: "Historic"
                                }],
                            preferredFood: [{
                                value: 1, name: 'preferredFood', isChecked: false, selected: "Spanish/Hispanic"
                            },
                                {
                                    value: 2, name: 'preferredFood', isChecked: true, selected: "Asian"
                                },
                                {
                                    value: 3, name: 'preferredFood', isChecked: false, selected: "American"
                                },
                                {
                                    value: 4, name: 'preferredFood', isChecked: true, selected: "Middle Eastern"
                                },
                                {
                                    value: 5, name: 'preferredFood', isChecked: false, selected: "European"
                                }],
                            preferDistance: [{
                                value: 1, name: 'preferDistance', isChecked: false, selected: "<5 miles"
                            },
                                {
                                    value: 2, name: 'preferDistance', isChecked: true, selected: "5 miles - 10 miles"
                                },
                                {
                                    value: 3, name: 'preferDistance', isChecked: false, selected: "10 miles - 20 miles"
                                },
                                {
                                    value: 4, name: 'preferDistance', isChecked: false, selected: ">20 miles"
                                }],
                            dietaryRestrictions: [{
                                value: 1, name: 'dietaryRestrictions', isChecked: true, selected: "Vegetarian"
                            },
                                {
                                    value: 2, name: 'dietaryRestrictions', isChecked: false, selected: "Gluten free"
                                },
                                {
                                    value: 3, name: 'dietaryRestrictions', isChecked: false, selected: "Seafood allergy"
                                }],
                            toDoList: [],
                            postedReviews: [],
                            postedRatings: [],
                            imgurl: "./assets/app/media/img/users/user4.jpg",
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

