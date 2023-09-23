const kdrama = require("./kdrama")

const kdramas = [
    {
        title: 'Prison Playbook',
        poster: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Wise_Prison_Life-poster.jpg',
        synopsis:'A captivating series revolving around the lives of convicts behind bars, their families and duty officers working in the correctional facilities. It focuses on the story of a superstar baseball pitcher, Kim Je-hyuk, who is convicted of assault after he saves his sister from a sexual assault.',
        rating: 8.4,
        genre: 'Dark Comedy',
        seasons: 1,
        episodes: 16
    },
    {
        title: 'Romance Is a Bonus Book',
        poster:'https://upload.wikimedia.org/wikipedia/en/b/b5/Romance_Is_a_Supplement.jpg',
        synopsis: 'A gifted writer who\'s the youngest editor-in-chief ever at his publishing company gets enmeshed in the life of a former copywriter desperate for a job.',
        rating: 8,
        genre: 'Rom-Com',
        seasons: 1,
        episodes: 16
    },
    {
        title: 'Record of Youth',
        poster:'https://upload.wikimedia.org/wikipedia/en/a/ab/Record_of_Youth.jpg',
        synopsis:'The drama follows the lives of three young people in the contemporary fashion industry. They strive to achieve their dreams and love without despair.',
        rating: 7.2,
        genre: 'Romance',
        seasons: 1,
        episodes: 16
    },
    {
        title: 'The Sound of Magic',
        poster: 'https://upload.wikimedia.org/wikipedia/en/7/74/The_Sound_of_Magic.jpg',
        synopsis: 'The Sound of Magic is an emotional music drama that revolves around Yoon Ah-yi, a poor student attending Sewoon High School, who has diminished her belief in magic, which she had a passion for when she was younger. Under many misfortunes, she wishes to grow faster to become an adult, so she can escape the major stressors and debts, which weigh her down. She then meets Ri Eul, an adult magician who wants to remain as a so-called \'child\'.',
        rating: 7.6,
        genre: 'Musical',
        seasons: 1,
        episodes: 6
    },
    {
        title: 'My Holo Love',
        poster:'https://upload.wikimedia.org/wikipedia/en/4/42/My_Holo_Love.jpg',
        synopsis:'Because of her face blindness disorder, Han So-yeon decided to live a reclusive life. This changes when she starts using the AI program Holo whose appearance is the same as the developer, Go Nan-do. The latter slowly falls in love with So-yeon but his cold personality, which contrasts with Holo\'s, isn\'t in his favor.',
        rating: 7.6,
        genre: 'Romance',
        seasons: 1,
        episodes: 12
    },
    {
        title: 'D.P.',
        poster: 'https://upload.wikimedia.org/wikipedia/en/2/2f/D.P._%28TV_series%29_2.png',
        synopsis: 'Set in 2014, D.P. tells the story of a team of Korean military police with their mission to catch deserters. The series magnifies the undesirable nature of the military, especially within a South Korean context. The widespread bullying and hazing as well as the mindset for the "survival of the fittest" are rife, with those presumed the “weakest” thrown to the bottom of the pile and served horrifying experiences at the hands of their superiors and compatriots. Private Ahn Jun-ho and Corporal Han Ho-yeol team up to find the deserters, and they end up on an adventurous journey.',
        rating: 8.2,
        genre: 'Military Drama Action',
        seasons: 2,
        episodes: 12
    },
    {
        title: 'Vincenzo',
        poster: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Vincenzo_TV_series.jpg',
        synopsis: 'At the age of eight, Park Joo-hyung (Song Joong-ki) is adopted by an Italian family, but the family later dies tragically in an accident. Joo-hyung joins the mafia and is adopted by Don Fabio, head of the Cassano Family who treats him like a son. Renamed “Vincenzo Cassano” he becomes a lawyer, a consigliere for the mafia, and Don Fabio\'s right-hand man. After Fabio dies, Paolo, Fabio\'s biological son and the new leader of the Cassano Family attempts to kill his adoptive brother out of jealousy because Fabio favoured him over his own biological son. Vincenzo flees to Seoul and sets out to recover 1.5 tons of gold in the form of Buddha statutes that he helped his business partner (a recently-dead Chinese tycoon) secretly stash within the basement of Geumga Plaza.',
        rating: 8.4,
        genre: 'Crime Drama',
        seasons: 1,
        episodes: 20,
        reviews:[
            {
                title: 'Pure Entertainment',
                author: 'YPyaarCinemar',
                content: 'Although the episodes are longer than normal Kdramas and one episode is 80+ mins, but the story was pretty comprehensive! Not draggy and fast paced, especially in the second half! It\'s all presented in a dark comedy kind of series, with a righteous leader, great amount of fighting scenes, a storyline of corruption and some witty yet hilarious plot throughout.',
                rating: 9
            },
            {
                title: 'You should judge after watching eps. 3 and 4',
                author: 'ysmoon-87467',
                content: 'Just finished watching the episode 4. Wow, it was so good. Well made mixture of thriller and comedy. I saw a few negative reviews here written after eps 1 or 2. I recommend watching at least up to eps 3 and 4. The real story starts from eps 3. Eps 4 is like a complete well made movie. You will surely enjoy it.',
                rating: 9
            }
        ]
    },
    {
        title: 'Run On',
        poster: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Run_On_TV_series.jpg',
        synopsis: 'Ki Sun Gyeom is a sprinter on the national team who was forced to quit due to legal issues. Oh Mi Joo writes translated subtitles for movies. She was thrilled to see her name listed among the credits when she first started. Ki Sun Gyeom had just quit sprinting when he encountered Oh Mi Joo, who felt that destiny most certainly brought them together.',
        rating: 7.4,
        genre: 'Romance',
        seasons: 1,
        episodes: 16,
        reviews:[
            {
                title:'Perfect K-Drama - Oozing with Great Script, Lovely Actors, and Realness',
                author: 'peterr-41048',
                content: 'I am so in love with this show! I love the uniqueness of script, well written! Every time you watch an episode, you receive a heartfelt, sincere, warm, and romantic excitement as the story progresses. The chemistry between the 4 lead actors is overflowing, the OST\'s are wonderful. It\'s like a dreamy, lovely, relaxing, heart fluttering journey for us because the romance is there even without forcing it, they are charming. For me, it is a golden k-drama that is always worth rewatching.',
                rating: 10
            },
            {
                title: 'Watch it!',
                author: 'thehopefully',
                content: 'By far one of the best series I have ever seen. And I don\'t exaggerate. And for a start, it has a happy ending for everyone. I highly recommend watching this drama!',
                rating: 9
            }
        ]
    }
]

// Export the seed data to `models/index.js`
module.exports = kdramas