
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (500) UNIQUE NOT NULL
);

CREATE TABLE "Matchup" (
    "id" SERIAL PRIMARY KEY,
    "outcome" BOOLEAN,
    "myCharacter" INTEGER, 
    "enemyCharacter" INTEGER,
    "user_id" INT REFERENCES "user" NOT NULL
);

CREATE TABLE "Characters" (
    "id" SERIAL PRIMARY KEY,
    "Character" VARCHAR (250), 
    "image_path" VARCHAR (250)
);

CREATE TABLE "MatchupItems" (
    "id" SERIAL PRIMARY KEY,
    "winner_Id" INT REFERENCES "Matchup" NOT NULL,
    "items_Id" INT REFERENCES "Items" NOT NULL
); 

CREATE TABLE "Items" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (250) NOT NULL, 
    "image_path" VARCHAR (250)
);

INSERT INTO "Characters" ("Character")
VALUES
('Aatrox'),('Ahri'),('Akali'),('Akshan'),('Alistar'),('Amumu'),
('Anivia'),('Annie'),('Aphelios'),('Ashe'),('Aurelion Sol'),('Azir'),
('Bard'),('Blitzcrank'),('Brand'),('Braum'),('Caitlyn'),('Camille'),
('Cassiopeia'),('ChoGath'),('Corki'),('Darius'),('Diana'),('Dr.Mundo'),
('Draven'),('Ekko'),('Elise'),('Evelynn'),('Ezreal'),('Fiddlesticks'),
('Fiora'),('Fizz'),('Galio'),('Gangplank'),('Garen'),('Gnar'),('Gragas'),
('Graves'),('Gwen'),('Hecarim'),('Heimerdinger'),('Illaoi'),('Irelia'),
('Ivern'),('Janna'),('Jarvan IV'),('Jax'),('Jayce'),('Jhin'),('Jinx'),
('KaiSa'),('Kalista'),('Karma'),('Karthus'),('Kassadin'),('Katarina'),
('Kayle'),('Kayn'),('Kennen'),('KhaZix'),('Kindred'),('Kled'),('KogMaw'),
('LeBlanc'),('Lee Sin'),('Leona'),('Lillia'),('Lissandra'),('Lucian'),
('Lulu'),('Lux'),('Malphite'),('Malzahar'),('Maokai'),('Master Yi'),
('Miss Fortune'),('Mordekaiser'),('Morgana'),('Nami'),('Nasus'),('Nautilus'),
('Neeko'),('Nidalee'),('Nocturne'),('Nunu & Willump'),('Olaf'),('Orianna'),
('Ornn'),('Pantheon'),('Poppy'),('Pyke'),('Qiyana'),('Quinn'),('Rakan'),('Rammus'),
('RekSai'),('Rell'),('Renekton'),('Rengar'),('Riven'),('Rumble'),('Ryze'),('Samira'),
('Sejuani'),('Senna'),('Seraphine'),('Sett'),('Shaco'),('Shen'),('Shyvana'),('Singed'),
('Sion'),('Sivir'),('Skarner'),('Sona'),('Soraka'),('Swain'),('Sylas'),('Syndra'),('Tahm Kench'),
('Taliyah'),('Talon'),('Taric'),('Teemo'),('Thresh'),('Tristana'),('Trundle'),('Tryndamere'),
('Twisted Fate'),('Twitch'),('Udyr'),('Urgot'),('Varus'),('Vayne'),('Veigar'),('VelKoz'),
('Vex'),('Vi'),('Viego'),('Viktor'),('Vladimir'),('Volibear'),('Warwick'),('Wukong'),('Xayah'),
('Xerath'),('Xin Zhao'),('Yasuo'),('Yone'),('Yorick'),('Yummi'),('Zac'),('Zed'),('Ziggs'),('Zilean'),
('Zoe'),('Zyra');

INSERT INTO "Items" ("name")
VALUES
('Cull'),('Dark Seal'),('Dorans Blade'),('Dorans Ring'),('Dorans Shield'),('Emberknife'),('Hailblade'),('Relic Shield'),('Spectral Sickle'),('Spellthielfs Edge'),('Steel Shoulderguards'),
('Tear of the Goddess'),('Control Ward'),('Corrupting Potion'),('Elixir of Iron'),('Elixir of Sorcery'),('Elixir of Wrath'),('Health Potion'),('Refillable Potion'),('Berserkers Greaves'),
('Boots'),('Boots of Swiftness'),('Ionian Boots of Lucidity'),('Mercurys Treads'),('Mobility Boots'),('Plated Steelcaps'),('Sorcerers Shoes'),('Amplifying Tome'),('B.F.Sword'),('Blasting Wand'),
('Broken Stopwatch'),('Cloak of Agility'),('Cloth Armor'),('Dagger'),('Faerie Charm'),('Long Sword'),('Needlessly Large Rod'),('Null-Magic Mantle'),('Pickaxe'),('Rejuvenation Bead'),('Ruby Crystal'),
('Sapphire Crystal'),('Sheen'),('Stopwatch'),('Aegis of the Legion'),('Aether Wisp'),('Bamis Cinder'),('Bandleglass Mirror'),('Blighting Jewel'),('Bramble Vest'),('Caulfields Warhammer'),('Chain Vest'),
('Crystalline Bracer'),('Executioners Calling'),('Fiendish Codex'),('Forbidden Idol'),('Frostfang'),('Giants Belt'),('Glacial Buckler'),('Harrowing Crescent'),('Hearthbound Axe'),('Hexdrinker'),('Hextech Alternator'),
('Ironspike Whip'),('Kindlegem'),('Kircheis Shard'),('Last Whisper'),('Leeching Leer'),('Lost Chapter'),('Negatron Cloak'),('Noonquiver'),('Oblivion Orb'),('Phage'),('Quicksilver Sash'),('Rageknife'),('Recurve Bow'),
('Runesteel Spaulders'),('Seekers Armguard'),('Serrated Dirk'),('Spectres Cowl'),('Targons Buckler'),('Tiamat'),('Vampiric Scepter'),('Verdant Barrier'),('Wardens Mail'),('Watchful Wardstone'),('Winged Moonplate'),('Zeal'),
('Abyssal Mask'),('Anathemas Chains'),('Archangels Staff'),('Ardent Censor'),('Banshees Veil'),('Black Cleaver'),('Black Mist Scythe'),('Blade of the Ruined King'),('Bloodthirster'),('Bulwark of the Mountain'),('Chempunk Chainsword'),
('Chemtech Putrifer'),('Cosmic Drive'),('Dead Mans Plate'),('Deaths Dance'),('Demonic Embrace'),('Edge of Night'),('Essense Reaver'),('Force of Nature'),('Frozen Heart'),('Gargoyle Stoneplate'),('Guardian Angel'),('Guinsoos Rageblade'),
('Horizon Focus'),('Hullbreaker'),('Infinity Edge'),('Knights Vow'),('Lich Bane'),('Lord Dominiks Regards'),('Manamune'),('Maw of Malmortius'),('Mejais Soulstealer'),('Mercurial Scimitar'),('Mikaels Blessing'),('Morellonomocon'),('Mortal Reminder'),
('Muramana'),('Nashors Tooth'),('Navori Quickblades'),('Pauldrons of Whiterock'),('Phantom Dancer'),('Rabadons Deathcap'),('Randuins Omen'),('Rapid Firecannon'),('Ravenous Hydra'),('Redemption'),('Runaans Hurricane'),('Rylais Crystal Scepter'),('Seraphs Embrace'),
('Serpents Fang'),('Seryldas Grudge'),('Shard of True Ice'),('Silvermere Dawn'),('Spirit Visage'),('Staff of Flowing Water'),('Steraks Gage'),('Stormrazor'),('The Collector'),('Thornmail'),('Titanic Hydra'),('Umbral Glaive'),('Vigilant Wardstone'),('Void Staff'),
('Warmogs Armor'),('Wits End'),('Youmuus Ghostblade'),('Zekes Convergence'),('Zhonyas Hourglass'),('Divine Sunderer'),('Duskblade of Draktharr'),('Eclipse'),('Everfrost'),('Frostfire Gauntlet'),('Galeforce'),('Goredriner'),('Hextech Rocketbelt'),
('Immortal Shieldbow'),('Imperial Mandate'),('Kraken Slayer'),('Liandrys Anguish'),('Locket of the Iron Solari'),('Ludens Tempest'),('Moonstone Renewer'),('Night Harvester'),('Prowlers Claw'),('Riftmaker'),('Shurelyas Battlesong'),
('Stridebreaker'),('Sunfire Aegis'),('Trinity Force'),('Turbo Chemtank');