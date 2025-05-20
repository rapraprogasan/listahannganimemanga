// Sample data - replace with your actual anime/manga data
const itemsData = [
    //Anime section 1
    {
        id: 1,
        title: "Pseudo Harem",
        image: "image/Pseudo Harem.jpg",
        category: "completed",
        type: "anime",
        notes: "[Rating 10/10] Eiji Kitahama dreams of having a harem, so his drama club junior, Rin Nanakura, uses her acting skills to play different harem girls for him. As they bond, Rin secretly hopes to win Eiji's heart for real. The story mixes comedy and romance as she balances her roles and true feelings.",
        
        videoId: "3-4xv2jKc9U" // Replace with actual YouTube ID
    },
    {
        id: 2,
        title: "Scum's Wish",
        image: "image/Scum's Wish.jpg",
        category: "completed",
        type: "anime",
        notes: "[Rating 8/10] Hanabi and Mugi pretend to date to cope with their unrequited love for other people—who are now dating each other. Their fake relationship blurs the line between comfort and heartbreak.",
        videoId: "QqpIWaVThEM"
    },
    {
        id: 3,
        title: "A Couple of Cuckoos",
        image: "image/A Couple of Cuckoos.jpg",
        category: "completed",
        type: "anime",
        notes: "[Rating 8/10] Nagi and Erika, swapped at birth, refuse their parents' plan to make them marry—but as they spend time together, their feelings get complicated. A mix of romance and family drama unfolds.",
        videoId: "fRtIES1Qb0Y"
    },
    {
        id: 4,
        title: "Love Is Indivisible by Twins",
        image: "image/Love Is Indivisible by Twins.jpg",
        category: "completed",
        type: "anime",
        notes: "[Rating 7/10] Jun Shirasaki and the Jinguuji sisters are childhood friends and neighbors. When Jun's first girlfriend, the older sister Rumi, breaks up with him, she says something that complicates the three people's relationship, their first loves, and their romance—?",
        videoId: "nXSRWW9I3xk"
    },
    {
        id: 5,
        title: "Medaka Kuroiwa is Impervious to My Charms",
        image: "image/Medaka Kuroiwa is Impervious to My Charms.jpg",
        category: "completed",
        type: "anime",
        notes: "[Rating 8.5/10] Mona, a girl used to being adored, is obsessed with winning over Medaka—the only guy immune to her charms. But his indifference comes from his dream of becoming a monk. As Mona relentlessly pursues him, she might end up falling for him for real. A comedic battle of stubborn hearts.",
        videoId: "pl8FYawHdh0"
    },
    {
        id: 6,
        title: "Too Many Losing Heroines!",
        image: "image/Too Many Losing Heroines!.jpg",
        category: "completed",
        type: "anime",
        notes: "[Rating 9.5/10] Introverted Kazuhiko Nukumizu prefers staying unnoticed—until he witnesses popular girl Anna Yanami get rejected. Dragged into her love drama, he gets tangled in the romantic woes of two more girls: energetic Lemon and shy Chika. Now, this {background character] is stuck as the unlikely confidant for three hopeless heroines. A comedy about love, losers, and unexpected friendships.",
        videoId: "uytJ6_KTCZI"
    },
    {
        id: 7,
        title: "Saekano How to Raise a Boring Girlfriend",
        image: "image/Saekano How to Raise a Boring Girlfriend.jpg",
        category: "watching",
        type: "anime",
        notes: "Otaku Tomoya Aki dreams of creating an emotional visual novel. He recruits his talented childhood friend Eriri (artist) and genius writer Utaha, using the kind-hearted Megumi as their muse. As they develop the game, their own personal dramas and unspoken feelings begin to mirror the story they're trying to tell—blurring the lines between fiction and reality.",
        videoId: "Hv3oF7Ky8NI"
    },
    {
        id: 8,
        title: "Saekano How to Raise a Boring Girlfriend .flat",
        image: "image/Saekano How to Raise a Boring Girlfriend .flat.jpg",
        category: "watching",
        type: "anime",
        notes: "Tomoya Aki and his team at Blessing Software push to finish their visual novel, but struggle with Megumi's bland personality and the pressures of game development. As deadlines loom and creative clashes arise, they learn tough lessons about teamwork, industry demands, and the gap between passion and professionalism.",
        videoId: "gsZb9-SRDDI"
    },
    {
        id: 9,
        title: "Saekano the Movie: Finale",
        image: "image/Saekano the Movie  Finale.jpg",
        category: "watching",
        type: "anime",
        notes:"As Blessing Software races to complete their new game for Winter Comiket, Tomoya faces tough choices between friendship and ambition. With Utaha and Eriri gone, Megumi and new members Iori and Izumi push forward—but creative hurdles and personal conflicts test their resolve. In the end, Tomoya must choose his own path, both in love and game development, bringing his journey to a heartfelt close.",
        videoId: "9LDEKv0l4j0"
    },
    {
    id: 10,
        title: "Shangri-La Frontier",
        image: "image/Shangri-La Frontier.jpg",
        category: "watching",
        type: "anime",
        notes:"Rakurou Sunraku Hizutome, a high schooler obsessed with glitchy, broken games, tries Shangri-La Frontier—a polished VR masterpiece—as a change of pace. But his unorthodox playstyle (starting in just boxers and a bird mask) turns him into an unexpected legend. Using skills honed from trash games, he dominates challenges even pros fear, shaking the games meta.",
        videoId: "AFNZzbQ8tVI"
    },
    {
    id: 11,
        title: "Shoshimin How to Become Ordinary",
        image: "image/Shoshimin How to Become Ordinary.jpg",
        category: "watching",
        type: "anime",
        notes:"Ex-detective Jougorou Kobato and shy Yuki Osanai vow to live ordinary high school lives—but Jougorou’s nosy instincts keep pulling them into mysteries. From trivial school oddities to real dangers, their quest for normalcy keeps backfiring in this mix of comedy, slice-of-life, and light suspense.",
        videoId: "5GTiAYZ19D4"
    },
     {
    id: 12,
        title: "Shoshimin How to Become Ordinary Season 2",
        image: "image/Shoshimin How to Become Ordinary Season 2.jpg",
        category: "watching",
        type: "anime",
        notes:"After parting ways, Kobato and Osanai try normal lives—until an arson case pulls them back into danger and unresolved feelings. Can they stay ordinary when chaos calls?",
        videoId: "kgTAUP11ko0"
    },
     {
    id: 13,
        title: "The Dangers in My Heart",
        image: "image/The Dangers in My Heart.jpg",
        category: "watching",
        type: "anime",
        notes:"Middle schooler Kyoutarou Ichikawa fantasizes about killing his classmate Anna Yamada—until he discovers her clumsy, airheaded side during library visits. His murderous urges twist into an awkward mix of protectiveness and budding affection. Could this twisted crush become something real?",
        videoId: "1x6BnBAOwaY"
    },
     {
    id: 14,
        title: "The Dangers in My Heart  Season 2",
        image: "image/The Dangers in My Heart  Season 2.jpg",
        category: "watching",
        type: "anime",
        notes:"Kyoutarou and Anna return from winter break with a deeper connection—she pursues modeling dreams while he wrestles with his growing feelings. As their bond blurs the line between friendship and romance, they must choose: stay as they are, or take the leap into love?",
        videoId: "DAbLNzr4cC8"
    },
     {
    id: 15,
        title: "The Dangers in My Heart: Twi-Yaba",
        image: "image/The Dangers in My Heart Twi-Yaba.jpg",
        category: "planned",
        type: "anime",
        notes:"OVA, Side stories of Boku no Kokoro no Yabai Yatsu, based on a series of shorts that were posted on X (formerly Twitter).",
    },
    {
    id: 16,
        title: "The Foolish Angel Dances with the Devil",
        image: "image/The Foolish Angel Dances with the Devil.jpg",
        category: "watching",
        type: "anime",
        notes:"With Hell on the brink of defeat, demon soldier Akutsu infiltrates a human high school to recruit a savior—only to target Lily Amane, an angel in disguise. As their rivalry twists into an unlikely bond, Akutsu faces a dire choice: complete his mission or betray Hell for love.",
        videoId: "3fBQ9LS1hQY"
    },
    {
    id: 17,
        title: "Shikimori's Not Just a Cutie",
        image: "image/Shikimori's Not Just a Cutie.jpg",
        category: "completed",
        type: "anime",
        notes:"[Rating 9/10] Despite his streak of absurdly bad luck, Yuu Izumi cherishes his relationship with his seemingly perfect girlfriend, Shikimori—who transforms into a fiercely cool protector whenever danger strikes. As their love blossoms, Izumi learns that true happiness isn’t about avoiding misfortune, but having someone who makes even chaos feel magical.",
        videoId: "IRxdEcemmsE"
    },
    {
    id: 18,
        title: "Kimi ni Todoke: From Me to You",
        image: "image/Kimi ni Todoke From Me to You.jpg",
        category: "planned",
        type: "anime",
        notes:"Shy (Sadako) Sawako is feared by classmates until popular Kazehaya befriends her. As she grows confident, she inspires him too—proving kindness breaks all stereotypes.",
        videoId: "_gJR6gfRYEQ"
    },
    {
    id: 19,
        title: "Kimi ni Todoke: From Me to You Season 2",
        image: "image/Kimi ni Todoke From Me to You Season 2.jpg",
        category: "planned",
        type: "anime",
        notes:"Sawako hides her Valentine's chocolates—and feelings—from Kazehaya, creating tension. When a new classmate shows interest in her, their unspoken love faces its first real test.",
        videoId: "9aRQlHYaluU"
    },
    {
    id: 20,
        title: "Kimi ni Todoke: From Me to You Season 3",
        image: "image/Kimi ni Todoke From Me to You Season 3.jpg",
        category: "planned",
        type: "anime",
        notes:"Sawako and Kazehaya grow closer through summer dates and family meetings, navigating young love’s doubts. Meanwhile, friends Chizuru and Ayane wrestle with their own romantic struggles, as all four learn that love is equal parts joy and vulnerability.",
        videoId: "tJbJI5GE0jg"
    },
    {
    id: 21,
        title: "Shangri-La Frontier Season 2",
        image: "image/Shangri-La Frontier Season 2.jpg",
        category: "planned",
        type: "anime",
        notes:"Gamer Sunraku dominates Shangri-La Frontier, taking on impossible bosses with his rabbit guide Emul. But when allies Arthur and OiKatzo join with hidden agendas, his quest for power unveils deeper game secrets—and his actions might reshape the entire virtual world.",
        videoId: "OIi6fBHx72U"
    },
    {
    id: 22,
        title: "The Gorilla God's Go-To Girl",
        image: "image/The Gorilla God's Go-To Girl.jpg",
        category: "planned",
        type: "anime",
        notes:"Timid noble girl Sophia gains the ultra-rare (Gorilla God) blessing—making her absurdly strong but desperate to hide it. Thrust into the Royal Knights against her will, she struggles to maintain a peaceful facade while her monstrous power keeps stealing the spotlight.",
        videoId: "kTrG6N72ZN4"
    },
    {
    id: 23,
        title: "Lycoris Recoil",
        image: "image/Lycoris Recoil.jpg",
        category: "planned",
        type: "anime",
        notes:"Disciplined assassin Takina gets demoted to LycoReco—a quirky cafe run by carefree prodigy Chisato, who solves crises without killing. As their clashing philosophies collide during missions, Takina must choose: return to her rigid old life, or embrace Chisato’s belief that (saving) means more than eliminating threats.",
        videoId: "F5DMjhg3A6c"
    },
    {
    id: 24,
        title: "Lycoris Recoil Short Movie",
        image: "image/Lycoris Recoil Short Movie.jpg",
        category: "planned",
        type: "anime",
        notes:"Six short movies featuring the daily lives of Chisato, Takina, and their friends. Each movie will have a different director and storyboard.",
        videoId: "kal-KjsPStU"
    },
    {
    id: 25,
        title: "The Too-Perfect Saint: Tossed Aside by My Fiancé and Sold to Another Kingdom",
        image: "image/The Too-Perfect Saint Tossed Aside by My Fiancé and Sold to Another Kingdom.jpg",
        category: "planned",
        type: "anime",
        notes:"Arrogant saint Philia—so powerful she’s unbearable—gets dumped and sold to a rival kingdom. But when her new life defies all expectations, she must confront her own flaws to rewrite her story.",
        videoId: "bVr2-cbGhM0"
    },
    {
    id: 26,
        title: "Violet Evergarden",
        image: "image/Violet Evergarden.jpg",
        category: "planned",
        type: "anime",
        notes:"Violet Evergarden, a former child soldier with prosthetic arms and a shattered heart, becomes a letter-writer to understand her lost commander’s final words—(I love you.) Each client’s story helps her unravel emotions she never knew, stitching her soul back together one letter at a time.",
        videoId: "g5xWqjFglsk"
    },
    {
    id: 27,
        title: "Violet Evergarden: The Day You Understand (I Love You) Will Surely Come",
        image: "image/Violet Evergarden.jpg",
        category: "planned",
        type: "anime",
        notes:"Violet struggles to craft a love letter for opera star Irma, who rejects every draft—until a raw, honest confession reveals the truth: the letter was never meant for a lover, but for Irma’s estranged sister.",
        videoId: "T6TqdAkREJk"
    },
    {
    id: 28,
        title: "Violet Evergarden: Eternity and the Auto Memory Doll",
        image: "image/Violet Evergarden Eternity and the Auto Memory Doll.jpg",
        category: "planned",
        type: "anime",
        notes:"Defiant noble girl Isabella, trapped in a gilded cage, clashes with her (perfect) tutor Violet—until she learns Violet’s tragic past mirrors her own loneliness. Together, they craft a letter to Isabella’s lost sister, proving that even the most broken bonds can heal with honesty.",
        videoId: "lWRXk7nOhsE"
    },
    {
    id: 29,
        title: "Violet Evergarden: The Movie",
        image: "image/Violet Evergarden The Movie.jpg",
        category: "planned",
        type: "anime",
        notes:"In a world moving toward telephones, Violet—now a legendary letter-writer—clings to fading hope that her lost commander Gilbert survives. Her journey to understand (I love you) culminates in a heart-wrenching reunion, where love and sacrifice collide across years of silence.",
        videoId: "NSIzsFOfd8M"
    },
    {
    id: 30,
        title: "Remake Our Life!",
        image: "image/Remake Our Life!.jpg",
        category: "planned",
        type: "anime",
        notes:"Failed game developer Kyouya wakes up 10 years in the past, ditches business school for art college, and teams up with future legends (including his former boss) to rewrite their destinies. Together, they chase creative dreams—but can he avoid past regrets when success demands more than just second chances?",
        videoId: "MSvTN_aQrCU"
    },
    {
    id: 31,
        title: "I'm Getting Married to a Girl I Hate in My Class",
        image: "image/I'm Getting Married to a Girl I Hate in My Class.jpg",
        category: "planned",
        type: "anime",
        notes:"High school enemies Saito and Akane are forced into an arranged marriage by their grandparents. Now stuck living together, their fiery hatred might just melt into something hotter—love.",
        videoId: "RgyqkGLsZ2M"
    },
    {
    id: 32,
        title: "The Detective Is Already Dead",
        image: "image/The Detective Is Already Dead.jpg",
        category: "planned",
        type: "anime",
        notes:"Trouble-magnet Kimihiko gets kidnapped, survives a hijacking, and meets legendary detective Siesta—only for her to die three years later, leaving him heartbroken. But as new mysteries arise, he realizes her legacy (and maybe more) lives on.",
        videoId: "PgA7OQCvO8M"
    },
    {
    id: 33,
        title: "Lazarus",
        image: "image/Lazarus.jpg",
        category: "watching",
        type: "anime",
        notes:"In 2052, the miracle drug Hapuna has eradicated suffering—until its creator resurfaces to reveal it’s actually a slow-acting poison dooming humanity. Now, the elite Lazarus squad must hunt him down and find an antidote before the clock runs out.",
        videoId: "Nk5n35aeYdA"
    },
    {
    id: 34,
        title: "Our Dating Story: The Experienced You and The Inexperienced Me",
        image: "image/Our Dating Story The Experienced You and The Inexperienced Me.jpg",
        category: "completed",
        type: "anime",
        notes:"[Rating 8.5] Shy Ryuuto expects humiliation after a fake confession to popular Runa—but she shocks him by saying yes! Now, navigating a secret relationship, past crushes, and vicious rumors, this unlikely couple must fight for their fragile love before the world tears them apart.",
        videoId: "5pzAENiLIZI"
    },
    {
    id: 35,
        title: "A Sign of Affection",
        image: "image/A Sign of Affection.jpg",
        category: "completed",
        type: "anime",
        notes:"[Rating 9/10] Hearing-impaired Yuki’s quiet world expands when globetrotter Itsuomi enters her life—not with pity, but genuine curiosity. As their connection deepens, she discovers love doesn’t need sound, just someone willing to listen in their own way.",
        videoId: "XDGIzU0D_Pg"
    },
    {
    id: 36,
        title: "The Shiunji Family Children",
        image: "image/The Shiunji Family Children.jpg",
        category: "watching",
        type: "anime",
        notes:"The wealthy, dazzling Shiunji siblings seem perfect—until their father reveals a devastating secret on the youngest’s 15th birthday: they’re not blood-related. Now, eldest brother Arata must grapple with buried desires as forbidden love threatens to shatter their gilded family.",
        videoId: "4XVwQr0t_zU"
    },
    {
    id: 37,
        title: "Days with My Stepsister",
        image: "image/Days with My Stepsister.jpg",
        category: "completed",
        type: "anime",
        notes:"[Rating 7/10] Yuuta and his new stepsister Saki—the school’s top beauty—agree to keep a polite distance. But as they navigate shared routines and quiet moments, their cautious bond slowly blurs into something deeper, testing the line between family and forbidden love.",
        videoId: "RRwt3t98bUA"
    },
    {
    id: 38,
        title: "Witch Watch",
        image: "image/Witch Watch.jpg",
        category: "watching",
        type: "anime",
        notes:"Newly minted witch Nico forces her ogre childhood crush, Morihito, to become her familiar—or stay cursed as a cow-tiger hybrid. Now living together, they juggle chaotic magic mishaps, budding feelings, and a looming prophecy that threatens Nico’s life.",
        videoId: "mLOi_84AlOg"
    },
    {
    id: 39,
        title: "Uma Musume: Cinderella Gray",
        image: "image/Uma Musume Cinderella Gray.jpg",
        category: "watching",
        type: "anime",
        notes:"A spin-off title of the Uma Musume project by Cygames. It follows Oguri Cap through her time at Kasamatsu Training Center Academy and on her journey of becoming a legendary horse girl.",
        videoId: "Gw8j8-m1gVk"
    },
    {
    id: 40,
        title: "I Left My A-Rank Party to Help My Former Students Reach the Dungeon Depths!",
        image: "image/I Left My A-Rank Party to Help My Former Students Reach the Dungeon Depths!.jpg",
        category: "watching",
        type: "anime",
        notes:"After quitting his toxic A-rank party, red mage Yuke joins an all-female adventurer group—his former students! As they crush dungeons together, his true power (long suppressed by ridicule) finally shines, proving he was never the weakling they thought.",
        videoId: "LvzfKjNjJeg"
    },
    {
    id: 41,
        title: "From Old Country Bumpkin to Master Swordsman",
        image: "image/From Old Country Bumpkin to Master Swordsman.jpg",
        category: "watching",
        type: "anime",
        notes:"Retired swordsman Beryl, content with his quiet rural life, is suddenly thrust into the spotlight when his legendary former students demand his guidance for the royal knights. Now, this (humble old man) must navigate political intrigue, overeager pupils, and his own buried past—all while insisting he’s not the master they remember.",
        videoId: "1ukoLVyCfW8"
    },
    {
    id: 42,
        title: "Teogonia",
        image: "image/Teogonia.jpg",
        category: "watching",
        type: "anime",
        notes:"After a near-fatal injury, borderlands warrior Kai awakens memories of a past life—and realizes his world operates on brutal, unfair rules. Now armed with ancient knowledge, he defies fate to rise from expendable soldier to a power that could shatter the very gods.",
        videoId: "_qzw-m-nR3A"
    },
    {
    id: 43,
        title: "Fire Force Season 3",
        image: "image/Fire Force Season 3.jpg",
        category: "watching",
        type: "anime",
        notes:"Third season of Enen no Shouboutai.",
        videoId: "nz-VCl7yUAw"
    },
    {
    id: 44,
        title: "Can a Boy-Girl Friendship Survive",
        image: "image/Can a Boy-Girl Friendship Survive.jpg",
        category: "watching",
        type: "anime",
        notes:"Childhood friends Himari and Yuu—still inseparable in high school—jokingly promise to marry if neither finds love. But when playful words spark real tension, their (just friends) dynamic teeters on the edge of something scarier (and sweeter).",
        videoId: "fZH5jDK5qV8"
    },
    {
    id: 45,
        title: "Wind Breaker Season 2",
        image: "image/Wind Breaker Season 2.jpg",
        category: "watching",
        type: "anime",
        notes:"Second season of Wind Breaker.",
        videoId: "qaR2_4tYhq8"
    },
    {
    id: 46,
        title: "The Brilliant Healer's New Life in the Shadows",
        image: "image/The Brilliant Healer's New Life in the Shadows.jpg",
        category: "watching",
        type: "anime",
        notes:"After being discarded by his ungrateful adventurer party, slum-born healer Zenos opens an underground clinic—only to become a legend in the city’s darkest corners. Now, with nobles and outlaws alike seeking his skills, he must choose: heal the world that broke him, or use his power to break it back.",
        videoId: "3E5gmPGu238"
    },
    {
    id: 47,
        title: "The Beginning After the End",
        image: "image/The Beginning After the End.jpg",
        category: "watching",
        type: "anime",
        notes:"The invincible but lonely King Grey is reborn as Arthur, a powerless child in a magical world. For the first time, he experiences love and family—until bandits shatter his newfound happiness, forcing him to reclaim his strength to protect what matters most.",
        videoId: "xlRCC8SXT3Y"
    },
    {
    id: 48,
        title: "Sword of the Demon Hunter: Kijin Gentosho",
        image: "image/Sword of the Demon Hunter Kijin Gentosho.jpg",
        category: "watching",
        type: "anime",
        notes:"After a demon's curse turns Jinta immortal, he loses everything—including his beloved Shirayuki, killed by his childhood friend Suzune, now a demon queen. Vowing vengeance, he wanders through time, hunting demons and wrestling with the truth behind her betrayal.",
        videoId: "xJUaomEmQgs"
    },
    {
    id: 49,
        title: "Mobile Suit Gundam: GQuuuuuuX",
        image: "image/Mobile Suit Gundam GQuuuuuuX.jpg",
        category: "watching",
        type: "anime",
        notes:"Space colony student Amate (Machu) gets swept into underground mecha battles piloting the GQuuuuuuX—until a rogue Gundam and its enigmatic pilot, Shuji, drag her into a conflict that will rewrite history.",
        videoId: "LnMIaFV4q6M"
    },
    {
    id: 50,
        title: "The Apothecary Diaries Season 2",
        image: "image/The Apothecary Diaries Season 2.jpg",
        category: "watching",
        type: "anime",
        notes:"Apothecary-detective Maomao returns to the imperial court, balancing her duties for the consorts and her tangled dynamic with Jinshi—until a suspicious merchant caravan sparks fresh intrigue. With poison, politics, and hidden agendas at play, she must outwit threats inside and outside the palace walls.",
        videoId: "hkflaNu6yAQ"
    },
    {
    id: 51,
        title: "Summer Pockets",
        image: "image/Summer Pockets.jpg",
        category: "watching",
        type: "anime",
        notes:"City boy Hairi escapes to a sleepy island after personal turmoil, only to meet four enigmatic girls—each chasing their own summer mysteries. As he helps them, he uncovers the island’s secrets… and maybe a way to heal his own heart.",
        videoId: "2u-RIQst_N"
    },
    {
    id: 52,
        title: "Zatsu Tabi: That's Journey",
        image: "image/Zatsu Tabi That's Journey.jpg",
        category: "planned",
        type: "anime",
        notes:"After her manga drafts get rejected, socially awkward artist Chika impulsively takes a solo trip—only to find inspiration (and unexpected friendships) on the road. Now, she vows to keep traveling, turning life’s rejections into fuel for her art and heart.",
        videoId: "F2lIatsblH4"
    },
    {
    id: 53,
        title: "Alya Sometimes Hides Her Feelings in Russian",
        image: "image/Alya Sometimes Hides Her Feelings in Russian.jpg",
        category: "completed",
        type: "anime",
        notes:"[Rating 9.5/10] Perfectionist student council star Alya vents her crush on slacker Masachika in Russian—unaware he understands every word. As their playful dynamic deepens, secrets from his past and her icy facade melt into something neither expected: real love.",
        videoId: "pBX6TtOlYow"
    },
    //Manga section 1
    {
    id: 54,
    title: "Alya Sometimes Hides Her Feelings in Russian (manga)",
    image: "image/Alya Sometimes Hides Her Feelings in Russian manga.jpg",
    category: "reading",
    type: "manga",
    notes: "[Currently reading Chapter-25] Tokidoki Bosotto Russiago de Dereru Tonari no Alya-san; Alya Sometimes Hides Her Feelings in Russian; Tokidoki Bosotto Russiago de Dereru Tonari no Aarya-san; My Deskmate Alya Sometimes Hides Her Feelings in Russian",
    videoId: "",
    mangaLink: "https://mangafire.to/manga/my-deskmate-alya-sometimes-hides-her-feelings-in-russiann.m6nz" // Added manga link"
    },
    {
    id: 55,
        title: "A Couple of Cuckoos",
        image: "image/A Couple of Cuckoos manga.jpg",
        category: "reading",
        type: "manga",
        notes:"[Currently reading Chapter-249] Kakkou no Iinazuke; A Couple of Cuckoos; Cuckoo's Fiancé",
        videoId: "",
        mangaLink: "https://mangafire.to/manga/kakkou-no-iinazukee.w1656"
    },
    {
    id: 56,
        title: "You Were Experienced, I Was Not: Our Dating Story manga",
        image: "image/You Were Experienced, I Was Not Our Dating Story manga.jpg",
        category: "planned",
        type: "manga",
        notes:"[Currently reading Chapter-1] Keiken Zumi na Kimi to, Keiken Zero na Ore ga, Otsukiai Suru Hanashi; You Were Experienced, I Was Not: Our Dating Story; Keikenzumi na Kimi to, Keiken Zero na Ore ga, Otsukiai suru Hanashi.; Our Dating Story: The Experienced You and The Inexperienced Me; 経験済みなキミと、 経験ゼロなオレが、 お付き合いする話",
        videoId: "",
        mangaLink: "https://mangafire.to/manga/keiken-zumi-na-kimi-to-keiken-zero-na-ore-ga-otsukiai-suru-hanashii.3rqj8"
    },
    {
    id: 57,
        title: "Shikimori's Not Just a Cutie",
        image: "image/Shikimori's Not Just a Cutie.jpg",
        category: "reading",
        type: "manga",
        notes:"[Currently reading Chapter-15] Kawaii dake ja Nai Shikimori-san; Shikimori's Not Just a Cutie; That Girl Isn't Just Cute; That Girl Is Not Just Cute; Kawaii Dake janai Onnanoko Manga; かわいいだけじゃない女の子漫画; Miss Shikimori Is Not Just Cute; 귀엽기만 한 게 아닌 시키모리 양; คุณชิกิโมริไม่ได้น่ารักแค่อย่างเดียวนะ; Shikimori n'est pas juste mignonne; Shikikomori es más que una cara bonita; 我家女友可不止可爱呢; Моя девушка не только милая; 式守同學不只可愛而已",
        videoId: "",
        mangaLink: "https://mangafire.to/manga/shikimoris-not-just-a-cutiee.295"
    },
    {
    id: 58,
        title: "Katainaka no Ossan, Kensei ni Naru ~Tada no Inaka no Kenjutsu Shihan datta no ni, Taiseishita Deshi-tachi ga Ore wo Hottekurenai Ken~",
        image: "image/Katainaka no Ossan,.jpg",
        category: "planned",
        type: "manga",
        notes:"[Planned Reading] Author: Kazuki Satou, Shigeru Sagazaki Published: Aug 23, 2021 to ? Genres: Action, Comedy, Adventure, Fantasy, Seinen, Magic       Mangazines: Young Champion Magazine",
        videoId: "",
        mangaLink: "https://mangafire.to/manga/katainaka-no-ossan-kensei-ni-naru-tada-no-inaka-no-kenjutsu-shihan-datta-no-ni-taiseishita-deshi-tachi-ga-ore-wo-hottekurenai-kenn.pjr9j"
    },
    {
    id: 59,
        title: "A Sign of Affection",
        image: "image/A Sign of Affection manga.jpg",
        category: "reading",
        type: "manga",
        notes:"[Currently reading Chapter-21]  Author: Suu MorishitaPublished: Jul 23, 2019 to ?Genres: Romance, Shoujo, Slice of LifeMangazines: Dessert",
        videoId: "",
        mangaLink: "https://mangafire.to/read/yubisaki-to-renrenn.qxl2j/en/chapter-21"
    },
    {
    id: 60,
        title: "Blue Box",
        image: "image/blue box.jpg",
        category: "reading",
        type: "manga",
        notes:"[Currently reading Chapter-196] Taiki Inomata is on the boys' badminton team at sports powerhouse Eimei Junior and Senior High. He's in love with basketball player Chinatsu Kano, the older girl he trains alongside every morning in the gym. One Spring day, their relationship takes a sharp turn ... And thus begins this brand-new series of love, sports and youth!",
        videoId: "",
        mangaLink: "https://mangaplus.shueisha.co.jp/titles/100157"
    },
    {
    id: 61,
        title: "Medaka Kuroiwa is Impervious to My Charms",
        image: "image/Medaka Kuroiwa is Impervious to My Charms manga.jpg",
        category: "planned",
        type: "manga",
        notes:"[Planned Reading] High school girl Mona Kawai is uniformly adored by her fellow pupils; that is until Medaka Kuroiwa transfers to her school. He appears to be constantly angry and refuses to even look at her; she determines that she will get him to fall for her.",
        videoId: "",
        mangaLink: "https://mangafire.to/read/kuroiwa-medaka-ni-watashi-no-kawaii-ga-tsuujinaii.kmmw/en/chapter-1"
    },
    {
    id: 62,
        title: "Nano Machine",
        image: "image/Nano Machine.jpg",
        category: "planned",
        type: "manga",
        notes:"[Planned Reading]The story of Cheon Yeo-Woon's journey of bypassing the Demonic Cult and rising to become the best martial artist has just begun.",
        videoId: "",
        mangaLink: "https://mangafire.to/manga/nano-machinee.m2y8v"
    },
    {
    id: 63,
        title: "The Too-Perfect Saint: Tossed Aside by My Fiancé and Sold to Another Kingdom",
        image: "image/The Too-Perfect Saint Tossed Aside by My Fiancé and Sold to Another Kingdom manga.jpg",
        category: "planned",
        type: "manga",
        notes:"[Planned Reading] Synopsis: Philia is the greatest saint her kingdom has ever known, but you'd have a hard time convincing her of that. Raised to believe that she's untalented, Philia suffers neglect and abuse at the hands of her parents and fiancé until she's abruptly sold to the neighboring kingdom, whose saint has passed away.",
        videoId: "",
        mangaLink: "https://mangafire.to/manga/kanpeki-sugite-kawaigeganai-to-konyaku-hakisareta-seijo-wa-ringoku-ni-urareruu.jj864"
    },
    {
    id: 64,
        title: "The Shiunji Family Children",
        image: "image/The Shiunji Family Children manga.jpg",
        category: "reading",
        type: "manga",
        notes:"[Currently reading Chapter-18] (The Shiunji Family Children) follows the lives of the seven Shiunji siblings in a mansion in Tokyo's Setagaya ward. The story revolves around Arata, the eldest son, who is tired of his sisters' behavior and dreams of being free of them. His life takes an unexpected turn when his father reveals a shocking truth: Arata is not biologically related to his sisters, except for twin Shion and Minami. This revelation throws the family into turmoil, as they navigate their changing relationships. ",
        videoId: "",
        mangaLink: "https://mangafire.to/read/shiunji-ke-no-kodomo-tachii.n31vn/en/chapter-18"
    },
    {
    id: 65,
        title: "Hima-Ten!",
        image: "image/Hima-Ten!.jpg",
        category: "planned",
        type: "manga",
        notes:"[Planned Reading] (Hima-Ten!) is a Japanese manga by Genki Ono, serialized in Shueisha's Weekly Shonen Jump magazine. It follows Tenichi Iemori, a high school student who works part-time as a cleaner, and Himari Yoshino, a popular model who is also his new classmate and the subject of his cleaning duties. The story highlights the contrast between Himari's public image and her messy living situation. ",
        videoId: "",
        mangaLink: "https://mangafire.to/manga/hima-tenn.3pnx9"
    },
    {
    id: 66,
        title: "Days with My Stepsister manga",
        image: "image/Days with My Stepsister manga.jpg",
        category: "planned",
        type: "manga",
        notes:"[Currently reading Chapter-24.1] (Days with My Stepsister) follows Yuuta Asamura and his new stepsister Saki Ayase after his father remarries. They are both burdened by the scars of their parents' divorces and initially agree to maintain a respectful distance. Despite their cautious approach, they gradually grow closer, exploring the nature of their burgeoning feelings: admiration, familial love, or something more. ",
        videoId: "",
        mangaLink: "https://mangafire.to/read/gimai-seikatsuu.mqx1p/en/chapter-24.1"
    },
    {
    id: 67,
        title: "The Beginning After the End",
        image: "image/The Beginning After the End manhwa.jpg",
        category: "reading",
        type: "manga",
        notes:"[Currently reading Chapter-218] (The Beginning After the End) tells the story of King Grey, who is reincarnated as Arthur Leywin after a mysterious death. Arthur, possessing memories of his past life, is born into a world of magic and warriors, eventually learning to control mana and grow into a powerful being. The series follows his journey as he navigates this new world, utilizing his knowledge and skills to overcome challenges and make a difference. ",
        videoId: "",
        mangaLink: "https://mangafire.to/manga/the-beginning-after-the-endd.6v55p"
    },
    //update 20/05/2025
     {
    id: 68,
        title: "Aharen-san wa Hakarenai",
        image: "image/Aharen-san wa Hakarenai.jpg",
        category: "planned",
        type: "anime",
        notes:"A quiet high schooler who doesn't really get the concept of personal space becomes smitten with the boy who sits next to her in class. A quiet high schooler who doesn't really get the concept of personal space becomes smitten with the boy who sits next to her in class.",
        videoId: "F7bGTibgcjM"
    },
     {
    id: 69,
        title: "Aharen-san wa Hakarenai Season 2",
        image: "image/Aharen-san wa Hakarenai Season 2.jpg",
        category: "planned",
        type: "anime",
        notes:"Aharen-san wa Hakarenai Season 2 follows the second year of Reina Aharen and Raido's high school journey as they navigate a new semester and a new transfer student, Riku Tamanaha.",
        videoId: "5-nbw77_Bss"
    },
     {
    id: 70,
        title: "The Regressed Youngest Son of the Duke Is an Assassin",
        image: "image/The Regressed Youngest Son of the Duke Is an Assassin.jpg",
        category: "planned",
        type: "manga",
        notes:"[Planned Reading] Cyan Vert, the youngest son of the prestigious Vert family, was born into an environment of high expectations and fierce competition. ",
        mangaLink: "https://mangafire.to/manga/the-reborn-young-lord-is-an-assassinn.oxpw8"
    },
    {
    id: 71,
        title: "Solo Leveling",
        image: "image/Solo Leveling.jpg",
        category: "planned",
        type: "manga",
        notes:"[Planned Reading] Na Honjaman Level Up Solo Leveling I Level Up Alone Only I Level Up",
        mangaLink: "https://mangafire.to/read/solo-levelingg.52x0/en/chapter-111"
    },
];

// DOM Elements
const contentGrid = document.getElementById('contentGrid');
const searchInput = document.getElementById('searchInput');
const tabButtons = document.querySelectorAll('.tab-button');
const videoModal = document.getElementById('videoModal');
const videoFrame = document.getElementById('videoFrame');
const videoNotes = document.getElementById('videoNotes');
const closeModal = document.querySelector('.close-modal');
const loadingScreen = document.getElementById('loadingScreen');
const mainContent = document.getElementById('mainContent');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Simulate loading
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.classList.add('loaded');
        }, 500);
    }, 2000);

    // Load all items initially
    renderItems(itemsData);
    
    // Set up event listeners
    setupEventListeners();
});

function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const activeCategory = document.querySelector('.tab-button.active').dataset.category;
        
        let filteredItems = itemsData;
        
        // Filter by category if not "all"
        if (activeCategory !== 'all') {
            filteredItems = itemsData.filter(item => 
                item.category === activeCategory || 
                (activeCategory === 'manga' && item.type === 'manga')
            );
        }
        
        // Filter by search term
        if (searchTerm) {
            filteredItems = filteredItems.filter(item => 
                item.title.toLowerCase().includes(searchTerm)
            );
        }
        
        renderItems(filteredItems);
    });

    // Tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.dataset.category;
            const searchTerm = searchInput.value.toLowerCase();
            
            let filteredItems = itemsData;
            
            if (category !== 'all') {
                filteredItems = itemsData.filter(item => 
                    item.category === category || 
                    (category === 'manga' && item.type === 'manga')
                );
            }
            
            if (searchTerm) {
                filteredItems = filteredItems.filter(item => 
                    item.title.toLowerCase().includes(searchTerm)
                );
            }
            
            renderItems(filteredItems);
        });
    });

    // Footer tab links
    document.querySelectorAll('.tab-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelector(`.tab-button[data-category="${category}"]`).classList.add('active');
            
            searchInput.value = '';
            
            let filteredItems = itemsData;
            
            if (category !== 'all') {
                filteredItems = itemsData.filter(item => 
                    item.category === category || 
                    (category === 'manga' && item.type === 'manga')
                );
            }
            
            renderItems(filteredItems);
            
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // Close modal
    closeModal.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        closeVideoModal();
    });

    // Close modal when clicking outside
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });
}

// Function to close video modal
function closeVideoModal() {
    videoModal.classList.remove('show');
    setTimeout(() => {
        videoModal.style.display = 'none';
        videoFrame.src = '';
    }, 300);
}

// Render items to the grid
function renderItems(items) {
    contentGrid.innerHTML = '';
    
    if (items.length === 0) {
        contentGrid.innerHTML = '<p class="no-results">No items found. Try a different search or category.</p>';
        return;
    }
    
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'content-item';
        
        // Determine status class
        let statusClass = '';
        let statusText = '';
        
        if (item.type === 'manga') {
            // Manga specific statuses
            switch(item.mangaStatus) {
                case 'reading':
                    statusClass = 'status-reading';
                    statusText = 'Currently Reading';
                    break;
                case 'complete':
                    statusClass = 'status-complete';
                    statusText = 'Completed';
                    break;
                default:
                    statusClass = 'status-manga';
                    statusText = 'Manga';
            }
        } else {
            switch(item.category) {
                case 'watching':
                    statusClass = 'status-watching';
                    statusText = 'Watching';
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
                    statusText = 'Plan to Watch';
                    break;
            }
        }
        
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="item-image">
            <i class="fas fa-play-circle play-button"></i>
            <div class="item-info">
                <h3 class="item-title">${item.title}</h3>
                <span class="item-status ${statusClass}">${statusText}</span>
                <p class="item-notes">${item.notes}</p>
            </div>
        `;
        
        // Add click event to image for video modal
        const image = itemElement.querySelector('.item-image');
        const playButton = itemElement.querySelector('.play-button');
        
        if (item.type === 'manga' && item.mangaLink) {
            // For manga with links, open the manga site when clicked
            image.style.cursor = 'pointer';
            image.addEventListener('click', () => {
                window.open(item.mangaLink, '_blank');
            });
            
            // Hide play button for manga with no video
            playButton.style.display = 'none';
        } else if (item.videoId) {
            // For anime or manga with videos, show video modal
            const openModal = () => {
                videoFrame.src = `https://www.youtube.com/embed/${item.videoId}?autoplay=1`;
                videoNotes.textContent = item.notes;
                videoModal.style.display = 'flex';
                videoModal.classList.add('show');
                
                // Smooth scroll to center of modal
                setTimeout(() => {
                    videoModal.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }, 10);
            };
            
            image.addEventListener('click', openModal);
            playButton.addEventListener('click', openModal);
        } else {
            // For items with no video or link
            playButton.style.display = 'none';
        }
        
        contentGrid.appendChild(itemElement);
    });
}
