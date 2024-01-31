const dataBooks = [
    {
        id: 1,
        price: 9.99,
        img: 'WhyNationsFail',
        name: 'Why Nations Fail: The Origins of Power, Prosperity, and Poverty',
        author: 'by Daron Acemoglu, James A. Robinson',
        description: 'Shortlisted for the Financial Times and Goldman Sachs Business Book of the Year Award 2012. Why are some nations more prosperous than others? Why Nations Fail sets out to answer this question, with a compelling and elegantly argued new theory: that it is not down to climate, geography or culture, but because of institutions. Drawing on an extraordinary range of contemporary and historical examples, from ancient Rome through the Tudors to modern-day China, leading academics Daron Acemoglu and James A. Robinson show that to invest and prosper, people need to know that if they work hard, they can make money and actually keep it - and this means sound institutions that allow virtuous circles of innovation, expansion and peace. Based on fifteen years of research, and answering the competing arguments of authors ranging from Max Weber to Jeffrey Sachs and Jared Diamond, Acemoglu and Robinson step boldly into the territory of Francis Fukuyama and Ian Morris. They blend economics, politics, history and current affairs to provide a new, powerful and persuasive way of understanding wealth and poverty.',
        category: 'HISTORY',
        showMore: false,
    },

    {
        id: 2,
        price: 9.99,
        img: 'HealingTheChildWithin',
        name: 'Healing the Child Within: Discovery and Recovery for Adult Children of Dysfunctional Families',
        author: 'by Dr. Charles Whitfield',
        description: 'Dr. Whitfield provides a clear and effective introduction to the basic principles of recovery. This book is a modern classic, as fresh and useful today as it was more than a decade ago when first published. Here, frontline physician and therapist Charles Whitfield describes the process of wounding that the Child Within (True Self) experiences and shows how to differentiate the True Self from the false self. He also describes the core issues of recovery and more. Other writings on this topic have come and gone, while Healing the Child Within has remained a strong introduction to recognizing and healing from the painful effects of childhood trauma. Highly recommended by therapists and survivors of trauma.',
        category: 'PSYCHOLOGY',
        showMore: false,
    },

    {
        id: 3,
        price: 12.50,
        img: 'AManCalledOve',
        name: 'A Man Called Ove',
        author: 'by Fredrik Backman',
        description: 'Meet Ove. He’s a curmudgeon—the kind of man who points at people he dislikes as if they were burglars caught outside his bedroom window. He has staunch principles, strict routines, and a short fuse. People call him “the bitter neighbor from hell.” But must Ove be bitter just because he doesn’t walk around with a smile plastered to his face all the time? Behind the cranky exterior there is a story and a sadness. So when one November morning a chatty young couple with two chatty young daughters move in next door and accidentally flatten Ove’s mailbox, it is the lead-in to a comical and heartwarming tale of unkempt cats, unexpected friendship, and the ancient art of backing up a U-Haul. All of which will change one cranky old man and a local residents’ association to their very foundations.',
        category: 'NOVELS',
        showMore: false,
    },
    

    {
        id: 4,
        price: 9.99,
        img: 'AThousandSplendidSuns',
        name: 'A Thousand Splendid Suns',
        author: 'by Khaled Hosseini',
        description: "Born a generation apart and with very different ideas about love and family, Mariam and Laila are two women brought jarringly together by war, by loss and by fate. As they endure the ever escalating dangers around them-in their home as well as in the streets of Kabul-they come to form a bond that makes them both sisters and mother-daughter to each other, and that will ultimately alter the course not just of their own lives but of the next generation. With heart-wrenching power and suspense, Hosseini shows how a woman's love for her family can move her to shocking and heroic acts of self-sacrifice, and that in the end it is love, or even the memory of love, that is often the key to survival.",
        category: 'NOVELS',
        showMore: false,
    },
    
    {
        id: 5,
        price: 10.50,
        img: 'TheHungerGames',
        name: 'The Hunger Games',
        author: 'by Suzanne Collins',
        description: 'In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. Long ago the districts waged war on the Capitol and were defeated. As part of the surrender terms, each district agreed to send one boy and one girl to appear in an annual televised event called, "The Hunger Games," a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she is forced to represent her district in the Games. The terrain, rules, and level of audience participation may change but one thing is constant: kill or be killed.',
        category: 'ADVENTURE',
        showMore: false,
    },

    {
        id: 6,
        price: 7.99,
        img: 'CatchingFire',
        name: 'Catching Fire',
        author: 'by Suzanne Collins',
        description: 'Against all odds, Katniss Everdeen has won the annual Hunger Games with fellow district tribute Peeta Mellark. Katniss and Peeta should be happy. After all, they have just earned for themselves and their families a life of safety and plenty. But it was a victory won by defiance of the Capitol and their harsh rules, and now there are rumors of rebellion in the districts. Katniss and Peeta, to their horror, are the faces of that rebellion. The Capitol is angry. The Capitol wants revenge.',
        category: 'ADVENTURE',
        showMore: false,
    },

    {
        id: 7,
        price: 8.99,
        img: 'Mockingjay',
        name: 'Mockingjay',
        author: 'by Suzanne Collins',
        description: "Katniss Everdeen, girl on fire, has survived, even though her home has been destroyed. There are rebels. There are new leaders. A revolution is unfolding.District 13 has come out of the shadows and is plotting to overthrow the Capitol. Though she's long been a part of the revolution, Katniss hasn't known it. Now it seems that everyone has had a hand in the carefully laid plans but her.The success of the rebellion hinges on Katniss's willingness to be a pawn, to accept responsibility for countless lives, and to change the course of the future of Panem. To do this, she must put aside her feelings of anger and distrust. She must become the rebels' Mockingjay - no matter what the cost.",
        category: 'ADVENTURE',
        showMore: false,
    },
    

    {
        id: 8,
        price: 19,
        img: 'ChasingDaylight',
        name: 'Chasing Daylight: How My Forthcoming Death Transformed My Life',
        author: "by Eugene O'Kelly",
        description: "Chasing Daylight is the honest, touching, and ultimately inspirational memoir of former KPMG CEO Eugene O'Kelley, completed in the three-and-a-half months between his diagnosis with brain cancer and his death in September 2005. Its haunting yet extraordinarily hopeful voice reminds us to embrace the fragile, fleeting moments of our lives-the brief time we have with our family, our friends, and even ourselves.",
        category: 'NOVELS',
        showMore: false,
    },
    
    {
        id: 9,
        price: 16.74,
        img: 'CultureMap',
        name: 'The Culture Map',
        author: 'by Erin Meyer',
        description: "In today's ever-more-globalized world, success in business requires navigating through cultural differences, and a knowledge of how to decode cultures foreign to our own. In this fun and instructive book, international business expert Erin Meyer offers key tactics and strategies to help businesspeople overcome cultural obstacles and obtain success. Whether you work in a home office or abroad, business success in our ever more globalized and virtual world requires the skills to navigate through cultural differences and decode cultures foreign to your own. Renowned expert Erin Meyer is your guide through this subtle, sometimes treacherous terrain where people from starkly different backgrounds are expected to work harmoniously together. When you have Americans who precede anything negative with three nice comments; French, Dutch, Israelis, and Germans who get straight to the point; Latin Americans and Asians who are steeped in hierarchy; Scandinavians who think the best boss is just one of the crowd--the result can be, well, sometimes interesting, even funny, but often disastrous. Even with English as a global language, it's easy to fall into cultural traps that endanger careers and sink deals when, say, a Brazilian manager tries to fathom how his Chinese suppliers really get things done, or an American team leader tries to get a handle on the intra-team dynamics between his Russian and Indian team members. In The Culture Map , Erin Meyer provides a field-tested model for decoding how cultural differences impact international business. She combines a smart analytical framework with practical, actionable advice for succeeding in a global world.",
        category: 'HISTORY',
        showMore: false,
    },

    {
        id: 10,
        price: 15,
        img: 'DarknessAtNoon',
        name: 'Darkness at Noon',
        author: 'by Arthur Koestler',
        description: "A brilliant new translation of Koestler's long-lost original manuscript. A chilling and unforgettable 20th century classic. From a prison cell in an unnamed country run by a totalitarian government Rubashov reflects. Once a powerful player in the regime, mercilessly dispensing with anyone who got in the way of his party’s aims, Rubashov has had the tables turned on him. He has been arrested and he’ll be interrogated, probably d and certainly executed. Darkness at Noon is as gripping as a thriller and a seminal work of twentieth-century literature. Published in Great Britain in 1940, it was feted by George Orwell, went on to be translated into thirty languages and is considered the finest work of pre-eminent European master, Arthur Koestler. And yet the novel’s worldwide reputation has, for over seventy years, been based on the first incomplete and inexpert English translation – Koestler’s original manuscript was lost when he fled the German occupation of Paris in 1940. In 2016, a student discovered that long-lost manuscript in a Zurich archive. At last, with the publication of this new translation of the rediscovered original, Koestler’s masterpiece can be experienced afresh and in its entirety for the first time",
        category: 'HISTORY',
        showMore: false,
    },

    {
        id: 11,
        price: 9.99,
        img: 'GunsGermsAndSteel',
        name: 'Guns, Germs and Steel: The Fate of Human Societies',
        author: 'by Jared Diamond',
        description: "'Guns, Germs and Steel' examines the rise of civilization and the issues its development has raised throughout history. Having done field work in New Guinea for more than 30 years, Jared Diamond presents the geographical and ecological factors that have shaped the modern world. From the viewpoint of an evolutionary biologist, he highlights the broadest movements both literal and conceptual on every continent since the Ice Age, and examines societal advances such as writing, religion, government, and technology. Diamond also dissects racial theories of global history, and the resulting work—Guns, Germs and Steel—is a major contribution to our understanding the evolution of human societies.",
        category: 'HISTORY',
        showMore: false,
    },
    

    {
        id: 12,
        price: 8.28,
        img: 'Nightingale',
        name: 'The Nightingale',
        author: 'by Kristin Hannah',
        description: "France, 1939 - In the quiet village of Carriveau, Vianne Mauriac says goodbye to her husband, Antoine, as he heads for the Front. She doesn't believe that the Nazis will invade France … but invade they do, in droves of marching soldiers, in caravans of trucks and tanks, in planes that fill the skies and drop bombs upon the innocent. When a German captain requisitions Vianne's home, she and her daughter must live with the enemy or lose everything. Without food or money or hope, as danger escalates all around them, she is forced to make one impossible choice after another to keep her family alive. Vianne's sister, Isabelle, is a rebellious eighteen-year-old girl, searching for purpose with all the reckless passion of youth. While thousands of Parisians march into the unknown terrors of war, she meets Gäetan, a partisan who believes the French can fight the Nazis from within France, and she falls in love as only the young can … completely. But when he betrays her, Isabelle joins the Resistance and never looks back, risking her life time and again to save others. With courage, grace, and powerful insight, bestselling author Kristin Hannah captures the epic panorama of World War II and illuminates an intimate part of history seldom seen: the women's war. The Nightingale tells the stories of two sisters, separated by years and experience, by ideals, passion and circumstance, each embarking on her own dangerous path toward survival, love, and freedom in German-occupied, war-torn France―a heartbreakingly beautiful novel that celebrates the resilience of the human spirit and the durability of women. It is a novel for everyone, a novel for a lifetime.",
        category: 'NOVEL',
        showMore: false,
    },
    
    {
        id: 13,
        price: 33.91,
        img: 'TamingTigers',
        name: 'Taming Tigers: Do Things You Never Thought You Could',
        author: 'by Jim Lawless',
        description: "Everybody has a tiger. It is the thing that snarls at us when we think about making a change in our lives and stops us developing and achieving our potential. In Taming Tigers Jim Lawless shares his proven and inspirational training program and case studies from people who have changed their lives by following the rules. You'll hear Jim's own experience of grabbing his tiger by the tail, as he went from a 36 year-old, overweight, non-riding consultant to a jockey, and later a UK freediving record holder, in 12 months. Jim is living proof that Taming Tigers works, and he's here to help you achieve your dreams by taming the tigers in your life.",
        category: 'PSYCHOLOGY',
        showMore: false,
    },

    {
        id: 14,
        price: 12.99,
        img: 'TheChoice',
        name: 'The Choice: Embrace the Possible',
        author: 'by Dr. Edith Eva Eger ',
        description: 'At the age of sixteen, Edith Eger was sent to Auschwitz. Hours after her parents were killed, Nazi officer Dr. Josef Mengele, forced Edie to dance for his amusement and her survival. Edie was pulled from a pile of corpses when the American troops liberated the camps in 1945. Edie spent decades struggling with flashbacks and survivor’s guilt, determined to stay silent and hide from the past. Thirty-five years after the war ended, she returned to Auschwitz and was finally able to fully heal and forgive the one person she’d been unable to forgive—herself. Edie weaves her remarkable personal journey with the moving stories of those she has helped heal. She explores how we can be imprisoned in our own minds and shows us how to find the key to freedom. The Choice is a life-changing book that will provide hope and comfort to generations of readers.',
        category: 'HISTORY',
        showMore: false,
    },

    {
        id: 15,
        price: 9.99,
        img: 'TheCuckoosCalling',
        name: "The Cuckoo's Calling (A Cormoran Strike Novel, 1)",
        author: 'by Robert Galbraith ',
        description: "Published under a pseudonym, J. K. Rowling's brilliant debut mystery introduces Detective Cormoran Strike as he investigates a supermodel's suicide in one of the best books of the year, the first novel in the brilliant series that inspired the acclaimed HBO Max series C.B. Strike. After losing his leg to a land mine in Afghanistan, Cormoran Strike is barely scraping by as a private investigator. Strike is down to one client, creditors are calling, and after a breakup with his longtime girlfriend, he's living in his office. Then John Bristow walks through his door with a shocking story: His sister, the legendary supermodel Lula Landry -- known to her friends as the Cuckoo -- famously fell to her death a few months earlier. The police ruled it a suicide, but John refuses to believe that. The case plunges Strike into the world of multimillionaire beauties, rock-star boyfriends, and desperate designers, and it introduces him to every variety of pleasure, enticement, seduction, and delusion known to man. You may think you know detectives, but you've never met one quite like Strike. You may think you know about the wealthy and famous, but you've never seen them under an investigation like this.",
        category: 'DETECTIVES',
        showMore: false,
    }, 

    {
        id: 16,
        price: 8.99,
        img: 'theGirlWhoPlayedWithFireBook',
        name: 'The Girl Who Played with Fire',
        author: 'by Stieg Larsson ',
        description: 'Mikael Blomkvist, crusading publisher of the magazine Millennium, has decided to run a story that will expose an extensive sex trafficking operation. On the eve of its publication, the two reporters responsible for the article are murdered, and the fingerprints found on the murder weapon belong to his friend, the troubled genius hacker Lisbeth Salander. Blomkvist, convinced of Salander’s innocence, plunges into an investigation. Meanwhile, Salander herself is drawn into a murderous game of cat and mouse, which forces her to face her dark past.',
        category: 'ADVENTURE',
        showMore: false,
    }
];

export default dataBooks;