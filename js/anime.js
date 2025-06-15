document.addEventListener('DOMContentLoaded', function() {
    // Sample anime data - replace with your actual data
    const animeData = [
        {
            id: 1,
            title: "Pseudo Harem",
            image: "image/Pseudo Harem.jpg",
            status: "completed",
            rating: 5,
            notes: "Eiji Kitahama dreams of having a harem, so his drama club junior, Rin Nanakura, uses her acting skills to play different harem girls for him. As they bond, Rin secretly hopes to win Eiji's heart for real. The story mixes comedy and romance as she balances her roles and true feelings.",
            videoId: "y4BKpjfXPPA"
        },
        {
            id: 2,
        title: "Scum's Wish",
        image: "image/Scum's Wish.jpg",
        status: "completed",
        rating: 4,
        notes: "Hanabi and Mugi pretend to date to cope with their unrequited love for other people—who are now dating each other. Their fake relationship blurs the line between comfort and heartbreak.",
        videoId: "QqpIWaVThEM"
        },
        {
          id: 3,
        title: "A Couple of Cuckoos",
        image: "image/A Couple of Cuckoos.jpg",
        status: "completed",
        rating: 4,
        notes: "Nagi and Erika, swapped at birth, refuse their parents' plan to make them marry—but as they spend time together, their feelings get complicated. A mix of romance and family drama unfolds.",
        videoId: "fRtIES1Qb0Y"
        },
        {
            id: 4,
        title: "Love Is Indivisible by Twins",
        image: "image/Love Is Indivisible by Twins.jpg",
        status: "completed",
        rating: 3,
        notes: " Jun Shirasaki and the Jinguuji sisters are childhood friends and neighbors. When Jun's first girlfriend, the older sister Rumi, breaks up with him, she says something that complicates the three people's relationship, their first loves, and their romance—?",
        videoId: "nXSRWW9I3xk"
        },
        {
            id: 5,
        title: "Medaka Kuroiwa is Impervious to My Charms",
        image: "image/Medaka Kuroiwa is Impervious to My Charms.jpg",
        status: "completed",
        rating: 4,
        notes: " Mona, a girl used to being adored, is obsessed with winning over Medaka—the only guy immune to her charms. But his indifference comes from his dream of becoming a monk. As Mona relentlessly pursues him, she might end up falling for him for real. A comedic battle of stubborn hearts.",
        videoId: "pl8FYawHdh0"
        },
        {
            id: 6,
        title: "Too Many Losing Heroines!",
        image: "image/Too Many Losing Heroines!.jpg",
        status: "completed",
        rating: 4.5,
        notes: " Introverted Kazuhiko Nukumizu prefers staying unnoticed—until he witnesses popular girl Anna Yanami get rejected. Dragged into her love drama, he gets tangled in the romantic woes of two more girls: energetic Lemon and shy Chika. Now, this {background character] is stuck as the unlikely confidant for three hopeless heroines. A comedy about love, losers, and unexpected friendships.",
        videoId: "uytJ6_KTCZI"

        },
        {
           id: 7,
        title: "Saekano How to Raise a Boring Girlfriend",
        image: "image/Saekano How to Raise a Boring Girlfriend.jpg",
        status: "completed",
        rating: 4,
        notes: " Otaku Tomoya Aki dreams of creating an emotional visual novel. He recruits his talented childhood friend Eriri (artist) and genius writer Utaha, using the kind-hearted Megumi as their muse. As they develop the game, their own personal dramas and unspoken feelings begin to mirror the story they're trying to tell—blurring the lines between fiction and reality.",
        videoId: "Hv3oF7Ky8NI"
        },
        {
            id: 8,
        title: "Saekano How to Raise a Boring Girlfriend .flat",
        image: "image/Saekano How to Raise a Boring Girlfriend .flat.jpg",
        status: "completed",
        rating: 4,
        notes: " Tomoya Aki and his team at Blessing Software push to finish their visual novel, but struggle with Megumi's bland personality and the pressures of game development. As deadlines loom and creative clashes arise, they learn tough lessons about teamwork, industry demands, and the gap between passion and professionalism.",
        videoId: "gsZb9-SRDDI"
        },
        {
             id: 9,
        title: "Saekano the Movie: Finale",
        image: "image/Saekano the Movie  Finale.jpg",
        status: "completed",
        rating: 4.5,
        notes:" As Blessing Software races to complete their new game for Winter Comiket, Tomoya faces tough choices between friendship and ambition. With Utaha and Eriri gone, Megumi and new members Iori and Izumi push forward—but creative hurdles and personal conflicts test their resolve. In the end, Tomoya must choose his own path, both in love and game development, bringing his journey to a heartfelt close.",
        videoId: "9LDEKv0l4j0"
        },
        {
            id: 10,
        title: "Shangri-La Frontier",
        image: "image/Shangri-La Frontier.jpg",
        status: "completed",
        rating: 4,
        notes:"[10] Rakurou Sunraku Hizutome, a high schooler obsessed with glitchy, broken games, tries Shangri-La Frontier—a polished VR masterpiece—as a change of pace. But his unorthodox playstyle (starting in just boxers and a bird mask) turns him into an unexpected legend. Using skills honed from trash games, he dominates challenges even pros fear, shaking the games meta.",
        videoId: "AFNZzbQ8tVI"
        },
        {
            id: 11,
        title: "Shoshimin How to Become Ordinary",
        image: "image/Shoshimin How to Become Ordinary.jpg",
        status: "completed",
        rating: 4,
        notes:" Ex-detective Jougorou Kobato and shy Yuki Osanai vow to live ordinary high school lives—but Jougorou’s nosy instincts keep pulling them into mysteries. From trivial school oddities to real dangers, their quest for normalcy keeps backfiring in this mix of comedy, slice-of-life, and light suspense.",
        videoId: "5GTiAYZ19D4"
        },
        {
             id: 12,
        title: "Shoshimin How to Become Ordinary Season 2",
        image: "image/Shoshimin How to Become Ordinary Season 2.jpg",
        status: "watching",
        rating: 0,
        notes:"[12] After parting ways, Kobato and Osanai try normal lives—until an arson case pulls them back into danger and unresolved feelings. Can they stay ordinary when chaos calls?",
        videoId: "kgTAUP11ko0"
        },
         {
            id: 13,
        title: "The Dangers in My Heart",
        image: "image/The Dangers in My Heart.jpg",
        status: "completed",
        rating: 4.5,
        notes:"Middle schooler Kyoutarou Ichikawa fantasizes about killing his classmate Anna Yamada—until he discovers her clumsy, airheaded side during library visits. His murderous urges twist into an awkward mix of protectiveness and budding affection. Could this twisted crush become something real?",
        videoId: "1x6BnBAOwaY"
        },
         {
             id: 14,
        title: "The Dangers in My Heart  Season 2",
        image: "image/The Dangers in My Heart  Season 2.jpg",
        status: "completed",
        rating: 5,
        notes:" Kyoutarou and Anna return from winter break with a deeper connection—she pursues modeling dreams while he wrestles with his growing feelings. As their bond blurs the line between friendship and romance, they must choose: stay as they are, or take the leap into love?",
        videoId: "DAbLNzr4cC8"
        },
         {
            id: 15,
        title: "The Dangers in My Heart: Twi-Yaba",
        image: "image/The Dangers in My Heart Twi-Yaba.jpg",
        status: "completed",
        rating: 4,
        notes:" OVA, Side stories of Boku no Kokoro no Yabai Yatsu, based on a series of shorts that were posted on X (formerly Twitter).",
        },
         {
             id: 16,
        title: "The Foolish Angel Dances with the Devil",
        image: "image/The Foolish Angel Dances with the Devil.jpg",
        status: "completed",
        rating: 3,
        notes:" With Hell on the brink of defeat, demon soldier Akutsu infiltrates a human high school to recruit a savior—only to target Lily Amane, an angel in disguise. As their rivalry twists into an unlikely bond, Akutsu faces a dire choice: complete his mission or betray Hell for love.",
        videoId: "3fBQ9LS1hQY"
        },
         {
            id: 17,
        title: "Shikimori's Not Just a Cutie",
        image: "image/Shikimori's Not Just a Cutie.jpg",
        status: "completed",
        rating: 4,
        notes:" Despite his streak of absurdly bad luck, Yuu Izumi cherishes his relationship with his seemingly perfect girlfriend, Shikimori—who transforms into a fiercely cool protector whenever danger strikes. As their love blossoms, Izumi learns that true happiness isn’t about avoiding misfortune, but having someone who makes even chaos feel magical.",
        videoId: "IRxdEcemmsE"
        },
         {
           id: 18,
        title: "Kimi ni Todoke: From Me to You",
        image: "image/Kimi ni Todoke From Me to You.jpg",
        status: "completed",
        rating: 4,
        notes:" Shy (Sadako) Sawako is feared by classmates until popular Kazehaya befriends her. As she grows confident, she inspires him too—proving kindness breaks all stereotypes.",
        videoId: "_gJR6gfRYEQ"
        },
         {
            id: 19,
        title: "Kimi ni Todoke: From Me to You Season 2",
        image: "image/Kimi ni Todoke From Me to You Season 2.jpg",
        status: "completed",
        rating: 4.5,
        notes:"Sawako hides her Valentine's chocolates—and feelings—from Kazehaya, creating tension. When a new classmate shows interest in her, their unspoken love faces its first real test.",
        videoId: "9aRQlHYaluU"
        },
         {
            id: 20,
        title: "Kimi ni Todoke: From Me to You Season 3",
        image: "image/Kimi ni Todoke From Me to You Season 3.jpg",
        status: "completed",
        rating: 5,
        notes:"Sawako and Kazehaya grow closer through summer dates and family meetings, navigating young love’s doubts. Meanwhile, friends Chizuru and Ayane wrestle with their own romantic struggles, as all four learn that love is equal parts joy and vulnerability.",
        videoId: "tJbJI5GE0jg"
        },
         {
           id: 21,
        title: "Shangri-La Frontier Season 2",
        image: "image/Shangri-La Frontier Season 2.jpg",
        status: "planned",
        rating: 0,
        notes:"[21] Gamer Sunraku dominates Shangri-La Frontier, taking on impossible bosses with his rabbit guide Emul. But when allies Arthur and OiKatzo join with hidden agendas, his quest for power unveils deeper game secrets—and his actions might reshape the entire virtual world.",
        videoId: "OIi6fBHx72U"
        },
         {
             id: 22,
        title: "The Gorilla God's Go-To Girl",
        image: "image/The Gorilla God's Go-To Girl.jpg",
        status: "watching",
        rating: 0,
        notes:"[22] Timid noble girl Sophia gains the ultra-rare (Gorilla God) blessing—making her absurdly strong but desperate to hide it. Thrust into the Royal Knights against her will, she struggles to maintain a peaceful facade while her monstrous power keeps stealing the spotlight.",
        videoId: "kTrG6N72ZN4"
        },
         {
             id: 23,
        title: "Lycoris Recoil",
        image: "image/Lycoris Recoil.jpg",
        status: "watching",
        rating: 0,
        notes:"[23] Disciplined assassin Takina gets demoted to LycoReco—a quirky cafe run by carefree prodigy Chisato, who solves crises without killing. As their clashing philosophies collide during missions, Takina must choose: return to her rigid old life, or embrace Chisato’s belief that (saving) means more than eliminating threats.",
        videoId: "F5DMjhg3A6c"
        },
         {
             id: 24,
        title: "Lycoris Recoil Short Movie",
        image: "image/Lycoris Recoil Short Movie.jpg",
        status: "planned",
        rating: 0,
        notes:"[24] Six short movies featuring the daily lives of Chisato, Takina, and their friends. Each movie will have a different director and storyboard.",
        videoId: "kal-KjsPStU"
        },
         {
           id: 25,
        title: "The Too-Perfect Saint: Tossed Aside by My Fiancé and Sold to Another Kingdom",
        image: "image/The Too-Perfect Saint Tossed Aside by My Fiancé and Sold to Another Kingdom.jpg",
        status: "watching",
        rating: 0,
        notes:"[25] Arrogant saint Philia—so powerful she’s unbearable—gets dumped and sold to a rival kingdom. But when her new life defies all expectations, she must confront her own flaws to rewrite her story.",
        videoId: "bVr2-cbGhM0"
        },
         {
            id: 26,
        title: "Violet Evergarden",
        image: "image/Violet Evergarden.jpg",
        status: "completed",
        rating: 4.5,
        notes:" Violet Evergarden, a former child soldier with prosthetic arms and a shattered heart, becomes a letter-writer to understand her lost commander’s final words—(I love you.) Each client’s story helps her unravel emotions she never knew, stitching her soul back together one letter at a time.",
        videoId: "g5xWqjFglsk"
        },
         {
            id: 27,
        title: "Violet Evergarden: The Day You Understand (I Love You) Will Surely Come",
        image: "image/Violet Evergarden.jpg",
        status: "planned",
        rating: 0,
        notes:"[27] Violet struggles to craft a love letter for opera star Irma, who rejects every draft—until a raw, honest confession reveals the truth: the letter was never meant for a lover, but for Irma’s estranged sister.",
        videoId: "T6TqdAkREJk"
        },
         {
             id: 28,
        title: "Violet Evergarden: Eternity and the Auto Memory Doll",
        image: "image/Violet Evergarden Eternity and the Auto Memory Doll.jpg",
        status: "planned",
        rating: 0,
        notes:"[28] Defiant noble girl Isabella, trapped in a gilded cage, clashes with her (perfect) tutor Violet—until she learns Violet’s tragic past mirrors her own loneliness. Together, they craft a letter to Isabella’s lost sister, proving that even the most broken bonds can heal with honesty.",
        videoId: "lWRXk7nOhsE"
        },
        {
            id: 29,
        title: "Violet Evergarden: The Movie",
        image: "image/Violet Evergarden The Movie.jpg",
        status: "planned",
        rating: 0,
        notes:"[29] In a world moving toward telephones, Violet—now a legendary letter-writer—clings to fading hope that her lost commander Gilbert survives. Her journey to understand (I love you) culminates in a heart-wrenching reunion, where love and sacrifice collide across years of silence.",
        videoId: "NSIzsFOfd8M"
        },
        {
            id: 30,
        title: "Remake Our Life!",
        image: "image/Remake Our Life!.jpg",
        status: "watching",
        rating: 0,
        notes:"[30] Failed game developer Kyouya wakes up 10 years in the past, ditches business school for art college, and teams up with future legends (including his former boss) to rewrite their destinies. Together, they chase creative dreams—but can he avoid past regrets when success demands more than just second chances?",
        videoId: "MSvTN_aQrCU"
        },
        {
            id: 31,
        title: "I'm Getting Married to a Girl I Hate in My Class",
        image: "image/I'm Getting Married to a Girl I Hate in My Class.jpg",
        status: "planned",
        rating: 0,
        notes:"[31] High school enemies Saito and Akane are forced into an arranged marriage by their grandparents. Now stuck living together, their fiery hatred might just melt into something hotter—love.",
        videoId: "RgyqkGLsZ2M"
        },
        {
            id: 32,
        title: "The Detective Is Already Dead",
        image: "image/The Detective Is Already Dead.jpg",
        status: "planned",
        rating: 0,
        notes:"[32] Trouble-magnet Kimihiko gets kidnapped, survives a hijacking, and meets legendary detective Siesta—only for her to die three years later, leaving him heartbroken. But as new mysteries arise, he realizes her legacy (and maybe more) lives on.",
        videoId: "PgA7OQCvO8M"
        },
        {
            id: 33,
        title: "Lazarus",
        image: "image/Lazarus.jpg",
        status: "watching",
        rating: 0,
        notes:"[33] In 2052, the miracle drug Hapuna has eradicated suffering—until its creator resurfaces to reveal it’s actually a slow-acting poison dooming humanity. Now, the elite Lazarus squad must hunt him down and find an antidote before the clock runs out.",
        videoId: "Nk5n35aeYdA"
        },
        {
            id: 34,
        title: "Our Dating Story: The Experienced You and The Inexperienced Me",
        image: "image/Our Dating Story The Experienced You and The Inexperienced Me.jpg",
        status: "completed",
        rating: 4.5,
        notes:" Shy Ryuuto expects humiliation after a fake confession to popular Runa—but she shocks him by saying yes! Now, navigating a secret relationship, past crushes, and vicious rumors, this unlikely couple must fight for their fragile love before the world tears them apart.",
        videoId: "5pzAENiLIZI"
        },
        {
             id: 35,
        title: "A Sign of Affection",
        image: "image/A Sign of Affection.jpg",
        status: "completed",
        rating: 4.5,
        notes: " Hearing-impaired Yuki’s quiet world expands when globetrotter Itsuomi enters her life—not with pity, but genuine curiosity. As their connection deepens, she discovers love doesn’t need sound, just someone willing to listen in their own way.",
        videoId: "XDGIzU0D_Pg"
        },
        { id: 36,
        title: "The Shiunji Family Children",
        image: "image/The Shiunji Family Children.jpg",
        status: "watching",
        rating: 0,
        notes:"[36] The wealthy, dazzling Shiunji siblings seem perfect—until their father reveals a devastating secret on the youngest’s 15th birthday: they’re not blood-related. Now, eldest brother Arata must grapple with buried desires as forbidden love threatens to shatter their gilded family.",
        videoId: "4XVwQr0t_zU"
        },
        { id: 37,
        title: "Days with My Stepsister",
        image: "image/Days with My Stepsister.jpg",
        status: "completed",
        rating: 4,
        notes:" Yuuta and his new stepsister Saki—the school’s top beauty—agree to keep a polite distance. But as they navigate shared routines and quiet moments, their cautious bond slowly blurs into something deeper, testing the line between family and forbidden love.",
        videoId: "RRwt3t98bUA"
        },
         {
            id: 38,
        title: "Witch Watch",
        image: "image/Witch Watch.jpg",
        status: "watching",
        rating: 0,
        notes:"[38] Newly minted witch Nico forces her ogre childhood crush, Morihito, to become her familiar—or stay cursed as a cow-tiger hybrid. Now living together, they juggle chaotic magic mishaps, budding feelings, and a looming prophecy that threatens Nico’s life.",
        videoId: "mLOi_84AlOg"
        },
         {
           id: 39,
        title: "Uma Musume: Cinderella Gray",
        image: "image/Uma Musume Cinderella Gray.jpg",
        status: "watching",
        rating: 0,
        notes:"[39] A spin-off title of the Uma Musume project by Cygames. It follows Oguri Cap through her time at Kasamatsu Training Center Academy and on her journey of becoming a legendary horse girl.",
        videoId: "Gw8j8-m1gVk"
        },
         {
             id: 40,
        title: "I Left My A-Rank Party to Help My Former Students Reach the Dungeon Depths!",
        image: "image/I Left My A-Rank Party to Help My Former Students Reach the Dungeon Depths!.jpg",
        status: "watching",
        rating: 0,
        notes:"[40] After quitting his toxic A-rank party, red mage Yuke joins an all-female adventurer group—his former students! As they crush dungeons together, his true power (long suppressed by ridicule) finally shines, proving he was never the weakling they thought.",
        videoId: "LvzfKjNjJeg"
        },
         {
            id: 41,
        title: "From Old Country Bumpkin to Master Swordsman",
        image: "image/From Old Country Bumpkin to Master Swordsman.jpg",
        status: "watching",
        rating: 0,
        notes:"[41] Retired swordsman Beryl, content with his quiet rural life, is suddenly thrust into the spotlight when his legendary former students demand his guidance for the royal knights. Now, this (humble old man) must navigate political intrigue, overeager pupils, and his own buried past—all while insisting he’s not the master they remember.",
        videoId: "1ukoLVyCfW8"
        },
         {
             id: 42,
        title: "Teogonia",
        image: "image/Teogonia.jpg",
        status: "watching",
        rating: 0,
        notes:"[42] After a near-fatal injury, borderlands warrior Kai awakens memories of a past life—and realizes his world operates on brutal, unfair rules. Now armed with ancient knowledge, he defies fate to rise from expendable soldier to a power that could shatter the very gods.",
        videoId: "_qzw-m-nR3A"
        },
         {
            id: 43,
        title: "Fire Force Season 3",
        image: "image/Fire Force Season 3.jpg",
        status: "watching",
        rating: 0,
        notes:"[43] Third season of Enen no Shouboutai.",
        videoId: "nz-VCl7yUAw"
        },
         {
           id: 44,
        title: "Can a Boy-Girl Friendship Survive",
        image: "image/Can a Boy-Girl Friendship Survive.jpg",
        status: "watching",
        rating: 0,
        notes:"[44] Childhood friends Himari and Yuu—still inseparable in high school—jokingly promise to marry if neither finds love. But when playful words spark real tension, their (just friends) dynamic teeters on the edge of something scarier (and sweeter).",
        videoId: "fZH5jDK5qV8"
        },
         {
          id: 45,
        title: "Wind Breaker Season 2",
        image: "image/Wind Breaker Season 2.jpg",
        status: "watching",
        rating: 0,
        notes:"[45] Second season of Wind Breaker.",
        videoId: "qaR2_4tYhq8"
        },
         {
              id: 46,
        title: "The Brilliant Healer's New Life in the Shadows",
        image: "image/The Brilliant Healer's New Life in the Shadows.jpg",
        status: "watching",
        rating: 0,
        notes:"[46] After being discarded by his ungrateful adventurer party, slum-born healer Zenos opens an underground clinic—only to become a legend in the city’s darkest corners. Now, with nobles and outlaws alike seeking his skills, he must choose: heal the world that broke him, or use his power to break it back.",
        videoId: "3E5gmPGu238"
        },
        {
              id: 47,
        title: "The Beginning After the End",
        image: "image/The Beginning After the End.jpg",
        status: "watching",
        rating: 0,
        notes:"[47] The invincible but lonely King Grey is reborn as Arthur, a powerless child in a magical world. For the first time, he experiences love and family—until bandits shatter his newfound happiness, forcing him to reclaim his strength to protect what matters most.",
        videoId: "xlRCC8SXT3Y"
        },
        {
            id: 48,
        title: "Sword of the Demon Hunter: Kijin Gentosho",
        image: "image/Sword of the Demon Hunter Kijin Gentosho.jpg",
        status: "watching",
        rating: 0,
        notes:"[48] After a demon's curse turns Jinta immortal, he loses everything—including his beloved Shirayuki, killed by his childhood friend Suzune, now a demon queen. Vowing vengeance, he wanders through time, hunting demons and wrestling with the truth behind her betrayal.",
        videoId: "xJUaomEmQgs"
        },
        {
            id: 49,
        title: "Mobile Suit Gundam: GQuuuuuuX",
        image: "image/Mobile Suit Gundam GQuuuuuuX.jpg",
        status: "watching",
        rating: 0,
        notes:"[49] Space colony student Amate (Machu) gets swept into underground mecha battles piloting the GQuuuuuuX—until a rogue Gundam and its enigmatic pilot, Shuji, drag her into a conflict that will rewrite history.",
        videoId: "LnMIaFV4q6M"
        },
        {
           id: 50,
        title: "The Apothecary Diaries Season 2",
        image: "image/The Apothecary Diaries Season 2.jpg",
        status: "watching",
        rating: 0,
        notes:"[50] Apothecary-detective Maomao returns to the imperial court, balancing her duties for the consorts and her tangled dynamic with Jinshi—until a suspicious merchant caravan sparks fresh intrigue. With poison, politics, and hidden agendas at play, she must outwit threats inside and outside the palace walls.",
        videoId: "hkflaNu6yAQ"
        },
        {
            id: 51,
        title: "Summer Pockets",
        image: "image/Summer Pockets.jpg",
        status: "watching",
        rating: 0,
        notes:"[51] City boy Hairi escapes to a sleepy island after personal turmoil, only to meet four enigmatic girls—each chasing their own summer mysteries. As he helps them, he uncovers the island’s secrets… and maybe a way to heal his own heart.",
        videoId: "2u-RIQst_N"
        },
        {
            id: 52,
        title: "Zatsu Tabi: That's Journey",
        image: "image/Zatsu Tabi That's Journey.jpg",
        status: "planned",
        rating: 0,
        notes:"[52] After her manga drafts get rejected, socially awkward artist Chika impulsively takes a solo trip—only to find inspiration (and unexpected friendships) on the road. Now, she vows to keep traveling, turning life’s rejections into fuel for her art and heart.",
        videoId: "F2lIatsblH4"
        },
        {
             id: 53,
        title: "Alya Sometimes Hides Her Feelings in Russian",
        image: "image/Alya Sometimes Hides Her Feelings in Russian.jpg",
        status: "completed",
        rating: 4.5,
        notes:" Perfectionist student council star Alya vents her crush on slacker Masachika in Russian—unaware he understands every word. As their playful dynamic deepens, secrets from his past and her icy facade melt into something neither expected: real love.",
        videoId: "pBX6TtOlYow"
        },
        {
             id: 54,
        title: "Aharen-san wa Hakarenai",
        image: "image/Aharen-san wa Hakarenai.jpg",
        status: "planned",
        rating: 0,
        notes:"[54] A quiet high schooler who doesn't really get the concept of personal space becomes smitten with the boy who sits next to her in class. A quiet high schooler who doesn't really get the concept of personal space becomes smitten with the boy who sits next to her in class.",
        videoId: "F7bGTibgcjM"
        },
        {
             id: 55,
        title: "Aharen-san wa Hakarenai Season 2",
        image: "image/Aharen-san wa Hakarenai Season 2.jpg",
        status: "planned",
        rating: 0,
        notes:"[55] Aharen-san wa Hakarenai Season 2 follows the second year of Reina Aharen and Raido's high school journey as they navigate a new semester and a new transfer student, Riku Tamanaha.",
        videoId: "5-nbw77_Bss"
        },
        {
            id: 6,
            title: "Neon Genesis Evangelion",
            image: "https://via.placeholder.com/300x425/6a5acd/ffffff?text=Neon+Genesis+Evangelion",
            status: "dropped",
            rating: 3,
            notes: "Couldn't get into it. Might try again later.",
            videoId: "13nSISwxrY4"
        },
        
        
        
    ];

    const animeGrid = document.getElementById('anime-grid');
    const searchInput = document.getElementById('anime-search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const videoModal = document.querySelector('.video-modal');
    const closeVideo = document.querySelector('.close-video');
    const videoIframe = document.getElementById('anime-video');
    const videoNotesContent = document.getElementById('video-notes-content');

    // Display anime cards
    function displayAnime(animeList) {
        animeGrid.innerHTML = '';
        
        animeList.forEach(anime => {
            const animeCard = document.createElement('div');
            animeCard.className = 'anime-card';
            
            // Determine status class
            let statusClass = '';
            let statusText = '';
            switch(anime.status) {
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
            
            // Create star rating
            let stars = '';
            const fullStars = Math.floor(anime.rating);
            const hasHalfStar = anime.rating % 1 !== 0;
            
            for (let i = 0; i < fullStars; i++) {
                stars += '<i class="fas fa-star"></i>';
            }
            
            if (hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            }
            
            for (let i = 0; i < 5 - Math.ceil(anime.rating); i++) {
                stars += '<i class="far fa-star"></i>';
            }
            
            animeCard.innerHTML = `
                <div class="card-image">
                    <img src="${anime.image}" alt="${anime.title}" loading="lazy">
                    <div class="play-overlay">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="card-content">
                    <span class="card-status ${statusClass}">${statusText}</span>
                    <h3>${anime.title}</h3>
                    <div class="rating">${stars}</div>
                    <div class="notes">${anime.notes}</div>
                </div>
            `;
            
            // Add click event to play video
            const playOverlay = animeCard.querySelector('.play-overlay');
            playOverlay.addEventListener('click', () => {
                videoIframe.src = `https://www.youtube.com/embed/${anime.videoId}?autoplay=1&rel=0`;
                videoNotesContent.textContent = anime.notes;
                videoModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
            
            animeGrid.appendChild(animeCard);
        });
    }
    
    // Initial display
    displayAnime(animeData);
    
    // Filter anime by status
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            let filteredAnime = animeData;
            
            if (filter !== 'all') {
                filteredAnime = animeData.filter(anime => anime.status === filter);
            }
            
            displayAnime(filteredAnime);
        });
    });
    
    // Search anime
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredAnime = animeData.filter(anime => 
            anime.title.toLowerCase().includes(searchTerm)
        );
        displayAnime(filteredAnime);
    });
    
    // Close video modal
    closeVideo.addEventListener('click', () => {
        videoModal.style.display = 'none';
        videoIframe.src = '';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            videoIframe.src = '';
            document.body.style.overflow = 'auto';
        }
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