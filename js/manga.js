document.addEventListener('DOMContentLoaded', function() {
    // Sample manga data - replace with your actual data
    const mangaData = [
        {
            id: 1,
            title: "Alya Sometimes Hides Her Feelings in Russian (manga)",
            image: "image/Alya Sometimes Hides Her Feelings in Russian manga.jpg",
            status: "reading",
            rating: 0,
            notes: "[1] [Currently reading Chapter-25] Tokidoki Bosotto Russiago de Dereru Tonari no Alya-san; Alya Sometimes Hides Her Feelings in Russian; Tokidoki Bosotto Russiago de Dereru Tonari no Aarya-san; My Deskmate Alya Sometimes Hides Her Feelings in Russian",
            mangaLink: "https://mangafire.to/manga/my-deskmate-alya-sometimes-hides-her-feelings-in-russiann.m6nz"
        },
        {
            id: 2,
        title: "A Couple of Cuckoos",
        image: "image/A Couple of Cuckoos manga.jpg",
        status: "reading",
        rating: 0,
        notes:"[2] [Currently reading Chapter-249] Kakkou no Iinazuke; A Couple of Cuckoos; Cuckoo's Fiancé",
        mangaLink: "https://mangafire.to/manga/kakkou-no-iinazukee.w1656"
        },
        {
             id: 3,
        title: "You Were Experienced, I Was Not: Our Dating Story manga",
        image: "image/You Were Experienced, I Was Not Our Dating Story manga.jpg",
        status: "planned",
        rating: 0,
        notes:"[3] [Currently reading Chapter-1] Keiken Zumi na Kimi to, Keiken Zero na Ore ga, Otsukiai Suru Hanashi; You Were Experienced, I Was Not: Our Dating Story; Keikenzumi na Kimi to, Keiken Zero na Ore ga, Otsukiai suru Hanashi.; Our Dating Story: The Experienced You and The Inexperienced Me; 経験済みなキミと、 経験ゼロなオレが、 お付き合いする話",
        mangaLink: "https://mangafire.to/manga/keiken-zumi-na-kimi-to-keiken-zero-na-ore-ga-otsukiai-suru-hanashii.3rqj8"
        },
        {
            id: 4,
        title: "Shikimori's Not Just a Cutie",
        image: "image/Shikimori's Not Just a Cutie.jpg",
        status: "reading",
        rating: 0,
        notes:"[4] [Currently reading Chapter-15] Kawaii dake ja Nai Shikimori-san; Shikimori's Not Just a Cutie; That Girl Isn't Just Cute; That Girl Is Not Just Cute; Kawaii Dake janai Onnanoko Manga; かわいいだけじゃない女の子漫画; Miss Shikimori Is Not Just Cute; 귀엽기만 한 게 아닌 시키모리 양; คุณชิกิโมริไม่ได้น่ารักแค่อย่างเดียวนะ; Shikimori n'est pas juste mignonne; Shikikomori es más que una cara bonita; 我家女友可不止可爱呢; Моя девушка не только милая; 式守同學不只可愛而已",
        mangaLink: "https://mangafire.to/manga/shikimoris-not-just-a-cutiee.295"
        },
        {
            id: 5,
        title: "Katainaka no Ossan, Kensei ni Naru ~Tada no Inaka no Kenjutsu Shihan datta no ni, Taiseishita Deshi-tachi ga Ore wo Hottekurenai Ken~",
        image: "image/Katainaka no Ossan,.jpg",
        status: "planned",
        rating: 0,
        notes:"[5] [Planned Reading] Author: Kazuki Satou, Shigeru Sagazaki Published: Aug 23, 2021 to ? Genres: Action, Comedy, Adventure, Fantasy, Seinen, Magic       Mangazines: Young Champion Magazine",
        mangaLink: "https://mangafire.to/manga/katainaka-no-ossan-kensei-ni-naru-tada-no-inaka-no-kenjutsu-shihan-datta-no-ni-taiseishita-deshi-tachi-ga-ore-wo-hottekurenai-kenn.pjr9j"
        },
        {
              id: 6,
        title: "A Sign of Affection",
        image: "image/A Sign of Affection manga.jpg",
        status: "reading",
        rating: 0,
        notes:"[6] [Currently reading Chapter-21]  Author: Suu MorishitaPublished: Jul 23, 2019 to ?Genres: Romance, Shoujo, Slice of LifeMangazines: Dessert",
        mangaLink: "https://mangafire.to/read/yubisaki-to-renrenn.qxl2j/en/chapter-21"
        },
         {
              id: 7,
        title: "Blue Box",
        image: "image/blue box.jpg",
        status: "reading",
        rating: 0,
        notes:"[7] [Currently reading Chapter-196] Taiki Inomata is on the boys' badminton team at sports powerhouse Eimei Junior and Senior High. He's in love with basketball player Chinatsu Kano, the older girl he trains alongside every morning in the gym. One Spring day, their relationship takes a sharp turn ... And thus begins this brand-new series of love, sports and youth!",
        mangaLink: "https://mangaplus.shueisha.co.jp/titles/100157"
        },
         {
            id: 8,
        title: "Medaka Kuroiwa is Impervious to My Charms",
        image: "image/Medaka Kuroiwa is Impervious to My Charms manga.jpg",
        status: "planned",
        rating: 0,
        notes:"[8] [Planned Reading] High school girl Mona Kawai is uniformly adored by her fellow pupils; that is until Medaka Kuroiwa transfers to her school. He appears to be constantly angry and refuses to even look at her; she determines that she will get him to fall for her.",
        mangaLink: "https://mangafire.to/read/kuroiwa-medaka-ni-watashi-no-kawaii-ga-tsuujinaii.kmmw/en/chapter-1"
        },
         {
             id: 9,
        title: "Nano Machine",
        image: "image/Nano Machine.jpg",
        status: "planned",
        rating: 0,
        notes:"[9] [Planned Reading]The story of Cheon Yeo-Woon's journey of bypassing the Demonic Cult and rising to become the best martial artist has just begun.",
        mangaLink: "https://mangafire.to/manga/nano-machinee.m2y8v"
        },
         {
            id: 10,
        title: "The Too-Perfect Saint: Tossed Aside by My Fiancé and Sold to Another Kingdom",
        image: "image/The Too-Perfect Saint Tossed Aside by My Fiancé and Sold to Another Kingdom manga.jpg",
        status: "planned",
        rating: 0,
        notes:"[10] [Planned Reading] Synopsis: Philia is the greatest saint her kingdom has ever known, but you'd have a hard time convincing her of that. Raised to believe that she's untalented, Philia suffers neglect and abuse at the hands of her parents and fiancé until she's abruptly sold to the neighboring kingdom, whose saint has passed away.",
        mangaLink: "https://mangafire.to/manga/kanpeki-sugite-kawaigeganai-to-konyaku-hakisareta-seijo-wa-ringoku-ni-urareruu.jj864"
        },
         {
            id: 11,
        title: "The Shiunji Family Children",
        image: "image/The Shiunji Family Children manga.jpg",
        status: "reading",
        rating: 0,
        notes:"[11] [Currently reading Chapter-18] (The Shiunji Family Children) follows the lives of the seven Shiunji siblings in a mansion in Tokyo's Setagaya ward. The story revolves around Arata, the eldest son, who is tired of his sisters' behavior and dreams of being free of them. His life takes an unexpected turn when his father reveals a shocking truth: Arata is not biologically related to his sisters, except for twin Shion and Minami. This revelation throws the family into turmoil, as they navigate their changing relationships. ",
        mangaLink: "https://mangafire.to/read/shiunji-ke-no-kodomo-tachii.n31vn/en/chapter-36"
        },
         {
             id: 12,
        title: "Days with My Stepsister manga",
        image: "image/Days with My Stepsister manga.jpg",
        status: "planned",
        rating: 0,
        notes:"[12] [Currently reading Chapter-24.1] (Days with My Stepsister) follows Yuuta Asamura and his new stepsister Saki Ayase after his father remarries. They are both burdened by the scars of their parents' divorces and initially agree to maintain a respectful distance. Despite their cautious approach, they gradually grow closer, exploring the nature of their burgeoning feelings: admiration, familial love, or something more. ",
        mangaLink: "https://mangafire.to/read/gimai-seikatsuu.mqx1p/en/chapter-24.1"
        },
         {
             id: 13,
        title: "The Beginning After the End",
        image: "image/The Beginning After the End manhwa.jpg",
        status: "reading",
        rating: 0,
        notes:"[13] [Currently reading Chapter-218] (The Beginning After the End) tells the story of King Grey, who is reincarnated as Arthur Leywin after a mysterious death. Arthur, possessing memories of his past life, is born into a world of magic and warriors, eventually learning to control mana and grow into a powerful being. The series follows his journey as he navigates this new world, utilizing his knowledge and skills to overcome challenges and make a difference. ",
        mangaLink: "https://mangafire.to/manga/the-beginning-after-the-endd.6v55p"
        },
         {
            id: 14,
        title: "The Regressed Youngest Son of the Duke Is an Assassin",
        image: "image/The Regressed Youngest Son of the Duke Is an Assassin.jpg",
        status: "planned",
        rating: 0,
        notes:"[14] [Planned Reading] Cyan Vert, the youngest son of the prestigious Vert family, was born into an environment of high expectations and fierce competition. ",
        mangaLink: "https://mangafire.to/manga/the-reborn-young-lord-is-an-assassinn.oxpw8"
        },
         {
            id: 15,
        title: "Solo Leveling",
        image: "image/Solo Leveling.jpg",
        status: "planned",
        rating: 0,
        notes:"[15] [Planned Reading] Na Honjaman Level Up Solo Leveling I Level Up Alone Only I Level Up",
        mangaLink: "https://mangafire.to/read/solo-levelingg.52x0/en/chapter-111"
        },
       {
      id: 16,
        title: "Solo Leveling: Ragnarok",
        image: "image/Solo Leveling Ragnarok.jpg",
        status: "planned",
        rating: 0,
        notes:"[16] [Planned Reading] Na Honjaman Level Up: Ragnarok Solo Leveling: Ragnarok",
        mangaLink: "https://mangafire.to/manga/na-honjaman-level-up-ragnarokk.ppx06"
     },
     {
       id: 17,
        title: "The Most Heretical Last Boss Queen: From Villainess to Savior",
        image: "image/The Most Heretical Last Boss Queen From Villainess to Savior.jpg",
        status: "planned",
        rating: 0,
        notes:"[17] Eight-year-old Pride Royal Ivy suddenly recalls her former life as a fan of the otome game Our Ray of Light. While on her way to replay it, she tragically died, reincarnating as the game's final boss and firstborn princess of Freesia.",
        videoId: "KdmxkRQshic"
     },
       //update 05/07/2025
          {
       id: 18,
       title: "Hima-Ten!",
       image: "image/Hima-Ten!.jpg",
       status: "reading",
       rating: 0,
       notes: "[18] Himaten!; Hima-Ten!",
       mangaLink: "https://mangafire.to/manga/hima-tenn.3pnx9"
     },
      {
       id: 19,
       title: "The Fragrant Flower Blooms With Dignity",
       image: "image/The Fragrant Flower Blooms With Dignity.jpg",
       status: "reading",
       rating: 0,
       notes: "[19] The Fragrant Flower Blooms With Dignity; Kaoru Hana wa Rin to Saku;",
       mangaLink: "https://mangafire.to/manga/the-fragrant-flower-blooms-with-dignityy.zlw6m"
     },
    
      {
       id: 20,
       title: "Kaji Daikou no Arbeit wo Hajimetara Gakuen Ichi no Bishoujo no Kazoku ni Kiinirare Chaimashita.",
       image: "image/Kaji Daikou no Arbeit wo Hajimetara Gakuen Ichi no Bishoujo no Kazoku ni Kiinirare Chaimashita..jpg",
       status: "reading",
       rating: 0,
       notes: "[20] Kaji Daikou no Arbeit wo Hajimetara Gakuen Ichi no Bishoujo no Kazoku ni Kiinirare Chaimashita.; I Started working a Housekeeping Job and Ended Up Being Liked by the Family of the Most Beautiful Girl in School.",
       mangaLink: "https://mangafire.to/manga/kaji-daikou-no-arbeit-wo-hajimetara-gakuen-ichi-no-bishoujo-no-kazoku-ni-kiinirare-chaimashita.qzn4n"
     },
    
      {
       id: 21,
       title: "Namaiki Asahi-chan wo Wakarasetai",
       image: "image/Namaiki Asahi-chan wo Wakarasetai.jpg",
       status: "planned",
       rating: 0,
       notes: "[21] Namaiki Asahi-chan wo Wakarasetai; I Wanna Set This Cocky Asahi-chan Straight",
       mangaLink: "https://mangafire.to/manga/namaiki-asahi-chan-wo-wakarasetai.700zj"
     },
    
      {
       id: 22,
       title: "Tying the Knot with an Amagami Sister",
       image: "image/Tying the Knot with an Amagami Sister.jpg",
       status: "planned",
       rating: 0,
       notes: "[22] Amagami-san Chi no Enmusubi; Tying the Knot with an Amagami Sister; Брачные узы с семьёй Амагами; Matchmaking at the Amagami Household; 甘神さんちの縁結び; 甘神家的連理枝",
       mangaLink: "https://mangafire.to/manga/amagami-san-chi-no-enmusubii.1n2qm"
     },
    
      {
       id: 23,
       title: "His Girlfriend",
       image: "image/His Girlfriend.jpg",
       status: "planned",
       rating: 0,
       notes: "[23] As April marks the commencement of my last year in high school, I find myself in a dicey situation as I have fallen for the stunning girlfriend of my ..",
       mangaLink: "https://mangafire.to/manga/his-girlfriendd.l3lr3"
     },
    
      {
       id: 24,
       title: "Miya-chan no Kyuuin Life!",
       image: "image/Miya-chan no Kyuuin Life!.jpg",
       status: "planned",
       rating: 0,
       notes: "[24] Sucking up all the boys' nectar.♥ Miya-chan, a member of the track and field club, has been in poor condition for the last few days due to some unknow...",
       mangaLink: "https://mangafire.to/manga/miya-chan-no-kyuuin-lifee.w52j4"
     },
    
      {
       id: 25,
       title: "A Reincarnation Romantic Comedy Of A Hero And A Witch",
       image: "image/A Reincarnation Romantic Comedy Of A Hero And A Witch.jpg",
       status: "planned",
       rating: 0,
       notes: "[25] A Reincarnation Romantic Comedy Of A Hero And A Witch; Eiyuu to Majo no Tensei Rabu Kome • 英雄と魔女の転生ラブコメ • A Reincarnation Romantic Comedy Of A Hero And A Witch",
       mangaLink: "https://mangafire.to/manga/a-reincarnation-romantic-comedy-of-a-hero-and-a-witch.zxoxm"
     },
    
      {
       id: 26,
       title: "Please Put Them On, Takamine-san!",
       image: "image/Please Put Them On, Takamine-san!.jpg",
       status: "planned",
       rating: 0,
       notes: "[26] Please Put These On, Takamine-san; Please Put Them On, Takamine-san!; Haite Kudasai, Takamine-san; ",
       mangaLink: "https://mangafire.to/manga/please-put-these-on-takamine-sann.6lo47"
     },
    
    
    

    ];

    const mangaGrid = document.getElementById('manga-grid');
    const searchInput = document.getElementById('manga-search');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Display manga cards
    function displayManga(mangaList) {
        mangaGrid.innerHTML = '';
        
        mangaList.forEach(manga => {
            const mangaCard = document.createElement('div');
            mangaCard.className = 'manga-card';
            
            // Determine status class
            let statusClass = '';
            let statusText = '';
            switch(manga.status) {
                case 'reading':
                    statusClass = 'status-reading';
                    statusText = 'Reading';
                    break;
                case 'completed':
                    statusClass = 'status-completed';
                    statusText = 'Completed';
                    break;
                case 'dropped':
                    statusClass = 'status-dropped';
                    statusText = 'Dropped';
                    break;
                case 'planned':
                    statusClass = 'status-planned';
                    statusText = 'Plan to Read';
                    break;
            }
            
            // Create star rating
            let stars = '';
            const fullStars = Math.floor(manga.rating);
            const hasHalfStar = manga.rating % 1 !== 0;
            
            for (let i = 0; i < fullStars; i++) {
                stars += '<i class="fas fa-star"></i>';
            }
            
            if (hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            }
            
            for (let i = 0; i < 5 - Math.ceil(manga.rating); i++) {
                stars += '<i class="far fa-star"></i>';
            }
            
            mangaCard.innerHTML = `
                <div class="card-image">
                    <img src="${manga.image}" alt="${manga.title}" loading="lazy">
                    ${manga.mangaLink ? `<div class="read-overlay" title="Read Manga">
                        <i class="fas fa-book-open"></i>
                    </div>` : ''}
                </div>
                <div class="card-content">
                    <span class="card-status ${statusClass}">${statusText}</span>
                    <h3>${manga.title}</h3>
                    <div class="rating">${stars}</div>
                    <div class="notes">${manga.notes}</div>
                </div>
            `;
            
            // Add click event to read manga if link exists
            if (manga.mangaLink) {
                const readOverlay = mangaCard.querySelector('.read-overlay');
                readOverlay.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent card click if needed
                    window.open(manga.mangaLink, '_blank');
                });
                
                // Make entire card clickable if desired
                mangaCard.style.cursor = 'pointer';
                mangaCard.addEventListener('click', () => {
                    window.open(manga.mangaLink, '_blank');
                });
            }
            
            mangaGrid.appendChild(mangaCard);
        });
    }
    
    // Initial display
    displayManga(mangaData);
    
    // Filter manga by status
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            let filteredManga = mangaData;
            
            if (filter !== 'all') {
                filteredManga = mangaData.filter(manga => manga.status === filter);
            }
            
            displayManga(filteredManga);
        });
    });
    
    // Search manga
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredManga = mangaData.filter(manga => 
            manga.title.toLowerCase().includes(searchTerm)
        );
        displayManga(filteredManga);
    });

    // Loading screen hide
    window.addEventListener('load', function() {
        const loadingScreen = document.querySelector('.loading-screen');
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    });
});
