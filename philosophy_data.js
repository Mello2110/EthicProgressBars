const PHILO = [
    // MESOPOTAMIA / ANTIQUITY
    {
        g: 'mesopo', n: 'Code of Ur-Nammu', y: -2100, c: 'Politics', reach: 15, dur: 20, mult: 18, qual: 16, cbrk: 30, imm: 20, shk: 18, inv: 'King Ur-Nammu', org: 'Sumer',
        dsc: 'Oldest known law code (~2100 BC). Introduction of casuistic law.',
        imp: 'Established the principle that law should be written and consistent, predating Hammurabi.',
        ctx: 'Before "an eye for an eye", Ur-Nammu introduced fines for physical injury. It reflects a surprisingly advanced, less brutal legal understanding for the time.'
    },
    {
        g: 'mesopo', n: 'Monotheism', y: -1350, c: 'Belief', reach: 25, dur: 25, mult: 28, qual: 22, cbrk: 40, imm: 10, shk: 30, inv: 'Akhenaten / Moses', org: 'Egypt / Judea',
        dsc: 'The idea of a single, universal God.',
        imp: 'Foundation of Judaism, Christianity, and Islam. Shaped global ethics and conflict.',
        ctx: 'Whether pioneered by Akhenaten (Aten cult) or the Hebrew prophets, the shift from local deities to one universal absolute transformed how humans understood their place in the cosmos.'
    },

    // SOUTH ASIA
    {
        g: 'suedasien', n: 'Ahimsa (Non-Violence)', y: -800, c: 'Ethics', reach: 22, dur: 25, mult: 20, qual: 24, cbrk: 34, imm: 14, shk: 22, inv: 'Upanishads / Mahavira', org: 'India',
        dsc: 'Principle of non-violence towards all living beings.',
        imp: 'Central to Jainism, Hinduism, Buddhism. Inspired Gandhi and MLK.',
        ctx: 'Emerging in the Vedic period, Ahimsa challenged the necessity of violence and animal sacrifice. It posits that hurting another hurts oneself—a radical empathy that scaled to political resistance millennia later.'
    },
    {
        g: 'suedasien', n: 'Four Noble Truths', y: -500, c: 'Ethics', reach: 24, dur: 25, mult: 22, qual: 24, cbrk: 38, imm: 18, shk: 26, inv: 'Siddhartha Gautama', org: 'India / Nepal',
        dsc: 'Core teaching of Buddhism: Suffering exists, but can be overcome.',
        imp: 'Analyzing the mind and suffering rationally. Foundation of a world religion.',
        ctx: 'The Buddha analyzed the human condition like a physician: 1. Diagnosis (Suffering), 2. Cause (Craving), 3. Prognosis (Cessation), 4. Therapy (Eightfold Path). A psychological approach to salvation without requiring a creator god.'
    },

    // EAST ASIA
    {
        g: 'ostasien', n: 'Mandate of Heaven', y: -1046, c: 'Politics', reach: 20, dur: 25, mult: 18, qual: 16, cbrk: 32, imm: 22, shk: 24, inv: 'Duke of Zhou', org: 'China',
        dsc: 'Legitimacy of rulers depends on moral conduct, not just lineage.',
        imp: 'Justified revolution against corrupt dynasties. Basis of Chinese political theory.',
        ctx: 'To justify overthrowing the Shang, the Zhou dynasty claimed that heaven grants the right to rule only to the virtuous. If a ruler becomes a tyrant, he loses the mandate—and the people have the right to rebel.'
    },
    {
        g: 'ostasien', n: 'Confucianism (Ren & Li)', y: -500, c: 'Ethics', reach: 23, dur: 25, mult: 22, qual: 18, cbrk: 28, imm: 20, shk: 18, inv: 'Confucius', org: 'China',
        dsc: 'Social harmony through ritual propriety (Li) and humaneness (Ren).',
        imp: 'Structured East Asian society, education, and government for 2000 years.',
        ctx: 'In a time of chaos, Confucius sought order not through law (Legalism) but through moral cultivation and family hierarchy. He believed that if the leader acts virtuously, the people will follow like grass bending in the wind.'
    },
    {
        g: 'ostasien', n: 'Daoism (Wu Wei)', y: -400, c: 'Belief', reach: 18, dur: 25, mult: 16, qual: 20, cbrk: 34, imm: 14, shk: 20, inv: 'Laozi (legendary)', org: 'China',
        dsc: 'Action through non-action. Harmony with the natural flow (Dao).',
        imp: 'Counterbalance to Confucian rigidity. Influenced art, medicine, and Zen.',
        ctx: 'While Confucians sought to carve society, Daoists sought to be like uncarved wood. "Wu Wei" is not laziness, but effortless action—aligning with the natural order rather than forcing one\'s will upon the world.'
    },

    // EUROPE / GREECE
    {
        g: 'europa', n: 'Democracy', y: -508, c: 'Politics', reach: 22, dur: 25, mult: 26, qual: 20, cbrk: 40, imm: 20, shk: 30, inv: 'Cleisthenes', org: 'Athens',
        dsc: 'Rule by the people (demos + kratos).',
        imp: 'Radical shift from monarchy/oligarchy. Basis of modern governance.',
        ctx: 'Cleisthenes broke the power of the noble clans by reorganizing citizens geographically. For the first time, decisions were made by a direct vote of the citizenry—though "citizens" excluded women and slaves.'
    },
    {
        g: 'europa', n: 'Socratic Method', y: -399, c: 'Science/Logic', reach: 24, dur: 25, mult: 28, qual: 24, cbrk: 36, imm: 14, shk: 28, inv: 'Socrates', org: 'Athens',
        dsc: 'Questioning assumptions to stimulate critical thinking (Elenchus).',
        imp: 'Foundation of Western philosophy and scientific inquiry.',
        ctx: 'Socrates wrote nothing, but annoyed Athens by questioning everything ("I know that I know nothing"). He shifted focus from the cosmos to ethics. His method of relentless questioning exposed ignorance and laid the groundwork for logic.'
    },
    {
        g: 'europa', n: 'Stoicism', y: -300, c: 'Ethics', reach: 20, dur: 22, mult: 18, qual: 20, cbrk: 28, imm: 16, shk: 18, inv: 'Zeno of Citium', org: 'Greece / Rome',
        dsc: 'Virtue is the only good; control what you can, accept what you cannot.',
        imp: 'Influenced Roman law, Christian ethics, and modern CBT therapy.',
        ctx: 'From slave Epictetus to Emperor Marcus Aurelius, Stoicism taught emotional resilience. By distinguishing between internal control and external events, it offered a "fortress of the mind" against fortune\'s wheel.'
    },

    // MIDDLE EAST / ISLAMIC GOLDEN AGE
    {
        g: 'nahost', n: 'Scientific Method (Ibn al-Haytham)', y: 1021, c: 'Science/Logic', reach: 25, dur: 25, mult: 30, qual: 26, cbrk: 40, imm: 14, shk: 28, inv: 'Ibn al-Haytham', org: 'Iraq / Egypt', parents: ['Socratic Method'],
        dsc: 'Systematic observation, experimentation, and skepticism.',
        imp: 'The engine of modern science. Moving from authority to evidence.',
        ctx: 'While Greeks relied on logic, Ibn al-Haytham (Alhazen) insisted on testing hypotheses. His "Book of Optics" demonstrated that theories must be verified by repeatable experiments, breaking with the tradition of accepting Aristotle as absolute truth.'
    },
    {
        g: 'nahost', n: 'Muqaddimah (Sociology)', y: 1377, c: 'Science/Logic', reach: 16, dur: 20, mult: 18, qual: 22, cbrk: 38, imm: 10, shk: 20, inv: 'Ibn Khaldun', org: 'Tunisia',
        dsc: 'Founding text of sociology, historiography, and economics.',
        imp: 'First structural analysis of how civilizations rise and fall (Asabiyyah).',
        ctx: 'Centuries before Machiavelli or Adam Smith, Ibn Khaldun analyzed the cyclic nature of empires. He identified "Asabiyyah" (social cohesion) as the glue of tribes, which dissolves once they settle and become luxurious city-dwellers.'
    },

    // MODERN ERA (EUROPE / AMERICAS)
    {
        g: 'europa', n: 'Social Contract', y: 1651, c: 'Politics', reach: 24, dur: 24, mult: 26, qual: 20, cbrk: 36, imm: 20, shk: 28, inv: 'Hobbes / Locke / Rousseau', org: 'Europe', parents: ['Mandate of Heaven', 'Democracy'],
        dsc: 'Legitimacy of state comes from the consent of the governed.',
        imp: 'Replaced Divine Right of Kings. Basis for modern constitutions.',
        ctx: 'Hobbes saw it as protection from "nasty, brutish" chaos, while Locke argued for natural rights (Life, Liberty, Property). This shift—that power rises from the people, not descends from God—fueled the American and French Revolutions.'
    },
    {
        g: 'europa', n: 'Utilitarianism', y: 1789, c: 'Ethics', reach: 20, dur: 22, mult: 20, qual: 16, cbrk: 30, imm: 18, shk: 22, inv: 'Jeremy Bentham', org: 'England',
        dsc: 'The greatest happiness for the greatest number.',
        imp: 'Basis for modern welfare economics and secular public policy.',
        ctx: 'Bentham proposed a "felicific calculus" to judge actions strictly by their consequences (pleasure vs. pain). It was a radical, secular approach to law reform, arguing that the suffering of the poor (or even animals) matters mathematically.'
    },
    {
        g: 'europa', n: 'Human Rights', y: 1948, c: 'Rights', reach: 25, dur: 25, mult: 24, qual: 24, cbrk: 36, imm: 22, shk: 26, inv: 'UN Assembly', org: 'Global', parents: ['Social Contract', 'Democracy'],
        dsc: 'Universal Declaration of Human Rights.',
        imp: 'First global agreement on the dignity and rights of all humans.',
        ctx: 'After the horrors of WWII, the world nations agreed that rights are not granted by states but are inherent to humanity. "All human beings are born free and equal in dignity and rights."'
    },
    {
        g: 'amerika', n: 'Civil Disobedience', y: 1849, c: 'Rights', reach: 22, dur: 22, mult: 24, qual: 20, cbrk: 32, imm: 18, shk: 24, inv: 'Henry David Thoreau', org: 'USA',
        dsc: 'Right/Duty to refuse cooperation with an unjust state.',
        imp: 'Inspired Gandhi and Civil Rights Movement. Weapon of the powerless.',
        ctx: 'Jailed for refusing to pay poll taxes supporting the Mexican War and slavery, Thoreau argued that conscience is above law. "Under a government which imprisons any unjustly, the true place for a just man is also a prison."'
    }
];
