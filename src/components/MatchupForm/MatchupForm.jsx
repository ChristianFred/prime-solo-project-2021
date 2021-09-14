import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MatchupForm() {
    const [myCharacter, setMyCharacter] = useState('');
    const [enemyCharacter, setEnemyCharacter] = useState('');
    const [outcome, setOutcome] = useState('');
    const dispatch = useDispatch();
    const matchItems = [];
    matchItems.length = Math.min(matchItems.length, 5);

    const createMatchup = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_MATCHUP',
            payload: {
                outcome: outcome,
                myCharacter: myCharacter,
                enemyCharacter: enemyCharacter,
                Item1: matchItems[0],
                Item2: matchItems[1],
                Item3: matchItems[2],
                Item4: matchItems[3],
                Item5: matchItems[4],
                Item6: matchItems[5]
            },
        });
    }; 

function addItem(item) {
    console.log('the current Item added is', item);
matchItems.push(item)
console.log('the contents of matchItems is:', matchItems);
}

return (
    <form className="formPanel" onSubmit={createMatchup}>
    <h2>Add A new Matchup</h2>
    <label htmlFor="Played">Your Character:</label>
        <select name="Characters" id="Characters" onChange={(event) => setMyCharacter(event.target.value)}>
            <option value="0">Select a Character</option>
            <option value="1">Aatrox</option><option value="2">Ahri</option><option value="3">Akali</option>
            <option value="4">Akshan</option><option value="5">Alistar</option><option value="6">Amumu</option>
            <option value="7">Anivia</option><option value="8">Annie</option><option value="9">Aphelios</option>
            <option value="10">Ashe</option><option value="11">Aurelion Sol</option><option value="12">Azir</option>
            <option value="13">Bard</option><option value="14">Blitzcrank</option><option value="15">Brand</option>
            <option value="16">Braum</option><option value="17">Caitlyn</option><option value="18">Camille</option>
            <option value="19">Cassiopeia</option><option value="20">ChoGath</option><option value="21">Corki</option>
            <option value="22">Darius</option><option value="23">Diana</option><option value="24">Dr.Mundo</option>
            <option value="25">Draven</option><option value="26">Ekko</option><option value="27">Elise</option>
            <option value="28">Evelynn</option><option value="29">Ezreal</option><option value="30">Fiddlesticks</option>
            <option value="31">Fiora</option><option value="32">Fizz</option><option value="33">Galio</option>
            <option value="34">Gangplank</option><option value="35">Garen</option><option value="36">Gnar</option>
            <option value="37">Gragas</option><option value="38">Graves</option><option value="39">Gwen</option>
            <option value="40">Hecarim</option><option value="41">Heimerdinger</option><option value="42">Illaoi</option>
            <option value="43">Irelia</option><option value="44">Ivern</option><option value="45">Janna</option>
            <option value="46">Jarvan IV</option><option value="47">Jax</option><option value="48">Jayce</option>
            <option value="49">Jhin</option><option value="50">Jinx</option><option value="51">KaiSa</option>
            <option value="52">Kalista</option><option value="53">Karma</option><option value="54">Karthus</option>
            <option value="55">Kassadin</option><option value="56">Katarina</option><option value="57">Kayle</option>
            <option value="58">Kayn</option><option value="59">Kennen</option><option value="60">KhaZix</option>
            <option value="61">Kindred</option><option value="62">Kled</option><option value="63">KogMaw</option>
            <option value="64">LeBlanc</option><option value="65">Lee Sin</option><option value="66">Leona</option>
            <option value="67">Lillia</option><option value="68">Lissandra</option><option value="69">Lucian</option>
            <option value="70">Lulu</option><option value="71">Lux</option><option value="72">Malphite</option>
            <option value="73">Malzahar</option><option value="74">Maokai</option><option value="75">Master Yi</option>
            <option value="76">Miss Fortune</option><option value="77">Mordekaiser</option><option value="78">Morgana</option>
            <option value="79">Nami</option><option value="80">Nasus</option><option value="81">Nautilus</option>
            <option value="82">Neeko</option><option value="83">Nidalee</option><option value="84">Nocturne</option>
            <option value="85">Nunu and Willump</option><option value="86">Olaf</option><option value="87">Orianna</option>
            <option value="88">Ornn</option><option value="89">Pantheon</option><option value="90">Poppy</option>
            <option value="91">Pyke</option><option value="92">Qiyana</option><option value="93">Quinn</option>
            <option value="94">Rakan</option><option value="95">Rammus</option><option value="96">RekSai</option>
            <option value="97">Rell</option><option value="98">Renekton</option><option value="99">Rengar</option>
            <option value="100">Riven</option><option value="101">Rumble</option><option value="102">Ryze</option>
            <option value="103">Samira</option><option value="104">Sejuani</option><option value="105">Senna</option>
            <option value="106">Seraphine</option><option value="107">Sett</option><option value="108">Shaco</option>
            <option value="109">Shen</option><option value="110">Shyvana</option><option value="111">Singed</option>
            <option value="112">Sion</option><option value="113">Sivir</option><option value="114">Skarner</option>
            <option value="115">Sona</option><option value="116">Soraka</option><option value="117">Swain</option>
            <option value="118">Sylas</option><option value="119">Syndra</option><option value="120">Tahm Kench</option>
            <option value="121">Taliyah</option><option value="122">Talon</option><option value="123">Taric</option>
            <option value="124">Teemo</option><option value="125">Thresh</option><option value="126">Tristana</option>
            <option value="127">Trundle</option><option value="128">Tryndamere</option><option value="129">Twisted Fate</option>
            <option value="130">Twitch</option><option value="131">Udyr</option><option value="132">Urgot</option>
            <option value="133">Varus</option><option value="134">Vayne</option><option value="135">Veigar</option>
            <option value="136">VelKoz</option><option value="137">Vex</option><option value="138">Vi</option>
            <option value="139">Viego</option><option value="140">Viktor</option><option value="141">Vladimir</option>
            <option value="142">Volibear</option><option value="143">Warwick</option><option value="144">Wukong</option>
            <option value="145">Xayah</option><option value="146">Xerath</option><option value="147">Xin Zhao</option>
            <option value="148">Yasuo</option><option value="149">Yone</option><option value="150">Yorick</option>
            <option value="151">Yummi</option><option value="152">Zac</option><option value="153">Zed</option>
            <option value="154">Ziggs</option><option value="155">Zilean</option><option value="156">Zoe</option>
            <option value="157">Zyra</option>
        </select>
        <label htmlFor="Enemy">Your Enemy Laner:</label>
        <select name="Characters" id="Characters" onChange={(event) => setEnemyCharacter(event.target.value)}>
            <option value="0">Select a Character</option>
            <option value="1">Aatrox</option><option value="2">Ahri</option><option value="3">Akali</option>
            <option value="4">Akshan</option><option value="5">Alistar</option><option value="6">Amumu</option>
            <option value="7">Anivia</option><option value="8">Annie</option><option value="9">Aphelios</option>
            <option value="10">Ashe</option><option value="11">Aurelion Sol</option><option value="12">Azir</option>
            <option value="13">Bard</option><option value="14">Blitzcrank</option><option value="15">Brand</option>
            <option value="16">Braum</option><option value="17">Caitlyn</option><option value="18">Camille</option>
            <option value="19">Cassiopeia</option><option value="20">ChoGath</option><option value="21">Corki</option>
            <option value="22">Darius</option><option value="23">Diana</option><option value="24">Dr.Mundo</option>
            <option value="25">Draven</option><option value="26">Ekko</option><option value="27">Elise</option>
            <option value="28">Evelynn</option><option value="29">Ezreal</option><option value="30">Fiddlesticks</option>
            <option value="31">Fiora</option><option value="32">Fizz</option><option value="33">Galio</option>
            <option value="34">Gangplank</option><option value="35">Garen</option><option value="36">Gnar</option>
            <option value="37">Gragas</option><option value="38">Graves</option><option value="39">Gwen</option>
            <option value="40">Hecarim</option><option value="41">Heimerdinger</option><option value="42">Illaoi</option>
            <option value="43">Irelia</option><option value="44">Ivern</option><option value="45">Janna</option>
            <option value="46">Jarvan IV</option><option value="47">Jax</option><option value="48">Jayce</option>
            <option value="49">Jhin</option><option value="50">Jinx</option><option value="51">KaiSa</option>
            <option value="52">Kalista</option><option value="53">Karma</option><option value="54">Karthus</option>
            <option value="55">Kassadin</option><option value="56">Katarina</option><option value="57">Kayle</option>
            <option value="58">Kayn</option><option value="59">Kennen</option><option value="60">KhaZix</option>
            <option value="61">Kindred</option><option value="62">Kled</option><option value="63">KogMaw</option>
            <option value="64">LeBlanc</option><option value="65">Lee Sin</option><option value="66">Leona</option>
            <option value="67">Lillia</option><option value="68">Lissandra</option><option value="69">Lucian</option>
            <option value="70">Lulu</option><option value="71">Lux</option><option value="72">Malphite</option>
            <option value="73">Malzahar</option><option value="74">Maokai</option><option value="75">Master Yi</option>
            <option value="76">Miss Fortune</option><option value="77">Mordekaiser</option><option value="78">Morgana</option>
            <option value="79">Nami</option><option value="80">Nasus</option><option value="81">Nautilus</option>
            <option value="82">Neeko</option><option value="83">Nidalee</option><option value="84">Nocturne</option>
            <option value="85">Nunu and Willump</option><option value="86">Olaf</option><option value="87">Orianna</option>
            <option value="88">Ornn</option><option value="89">Pantheon</option><option value="90">Poppy</option>
            <option value="91">Pyke</option><option value="92">Qiyana</option><option value="93">Quinn</option>
            <option value="94">Rakan</option><option value="95">Rammus</option><option value="96">RekSai</option>
            <option value="97">Rell</option><option value="98">Renekton</option><option value="99">Rengar</option>
            <option value="100">Riven</option><option value="101">Rumble</option><option value="102">Ryze</option>
            <option value="103">Samira</option><option value="104">Sejuani</option><option value="105">Senna</option>
            <option value="106">Seraphine</option><option value="107">Sett</option><option value="108">Shaco</option>
            <option value="109">Shen</option><option value="110">Shyvana</option><option value="111">Singed</option>
            <option value="112">Sion</option><option value="113">Sivir</option><option value="114">Skarner</option>
            <option value="115">Sona</option><option value="116">Soraka</option><option value="117">Swain</option>
            <option value="118">Sylas</option><option value="119">Syndra</option><option value="120">Tahm Kench</option>
            <option value="121">Taliyah</option><option value="122">Talon</option><option value="123">Taric</option>
            <option value="124">Teemo</option><option value="125">Thresh</option><option value="126">Tristana</option>
            <option value="127">Trundle</option><option value="128">Tryndamere</option><option value="129">Twisted Fate</option>
            <option value="130">Twitch</option><option value="131">Udyr</option><option value="132">Urgot</option>
            <option value="133">Varus</option><option value="134">Vayne</option><option value="135">Veigar</option>
            <option value="136">VelKoz</option><option value="137">Vex</option><option value="138">Vi</option>
            <option value="139">Viego</option><option value="140">Viktor</option><option value="141">Vladimir</option>
            <option value="142">Volibear</option><option value="143">Warwick</option><option value="144">Wukong</option>
            <option value="145">Xayah</option><option value="146">Xerath</option><option value="147">Xin Zhao</option>
            <option value="148">Yasuo</option><option value="149">Yone</option><option value="150">Yorick</option>
            <option value="151">Yummi</option><option value="152">Zac</option><option value="153">Zed</option>
            <option value="154">Ziggs</option><option value="155">Zilean</option><option value="156">Zoe</option>
            <option value="157">Zyra</option>
        </select>

    <p>Please select The Outcome of the Match:</p>
        <input id="Won" type="radio" name="outcome" value="1" onChange={(event) => setOutcome(event.target.value)}></input>
            <label htmlFor="Won">Won</label>
        <input id="Lost" type="radio" name="outcome" value="2" onChange={(event) => setOutcome(event.target.value)}></input>
            <label htmlFor="Lost">Lost</label>
    <p>Please select the Items used for the Match:</p>
        <table>
        <tr>
            <th>Starter Items</th>
        </tr>
            <img  src="/items/Cull_item.png" onClick={() => { addItem(1) }} />
            <img  src="/items/Dark_seal_item.png" onClick={() => { addItem(2) }} />
            <img  src="/items/Dorans_blade_item.png" onClick={() => { addItem(3) }} />
            <img  src="/items/Dorans_ring_item.png" onClick={() => { addItem(4) }} />
            <img  src="/items/Dorans_shield_item.png" onClick={() => { addItem(5) }} />
            <img  src="/items/Emberknife_item.png" onClick={() => { addItem(6) }} />
            <img  src="/items/Hailblade_item.png" onClick={() => { addItem(7) }} />
            <img  src="/items/Relic_shield_item.png" onClick={() => { addItem(8) }} />
            <img  src="/items/Spectral_sickle_item.png" onClick={() => { addItem(9) }} />
            <img  src="/items/Spellthiefs_Edge_item.png" onClick={() => { addItem(10) }} />
            <img  src="/items/Steel_Shoulderguards_item.png" onClick={() => { addItem(11) }} />
            <img  src="/items/Tear_of_the_Goddess_item.png" onClick={() => { addItem(12) }} />
        <tr>
            <th>Potions and Consumables</th>
        </tr>
            <img src="/Items/Control_Ward_item.png" onClick={() => { addItem(13) }} />
            <img src="/Items/Corrupting_Potion_item.png" onClick={() => { addItem(14) }} />
            <img src="/Items/Elixir_of_Iron_item.png" onClick={() => { addItem(15) }} />
            <img src="/Items/Elixir_of_Sorcery_item.png" onClick={() => { addItem(16) }} />
            <img src="/Items/Elixir_of_Wrath_item.png" onClick={() => { addItem(17) }} />
            <img src="/Items/Health_Potion_item.png" onClick={() => { addItem(18) }} />
            <img src="/Items/Refillable_Potion_item.png" onClick={() => { addItem(19) }} />
        <tr>
                <th>Mythic Items</th>
        </tr>
            <img src="/Items/Divine_Sunderer_item.png" onClick={() => { addItem(157) }} />
            <img src="/Items/Duskblade_of_Draktharr_item.png" onClick={() => { addItem(158) }} />
            <img src="/Items/Eclipse_item.png" onClick={() => { addItem(159) }} />
            <img src="/Items/Everfrost_item.png" onClick={() => { addItem(160) }} />
            <img src="/Items/Frostfire_Gauntlet_item.png" onClick={() => { addItem(161) }} />
            <img src="/Items/Galeforce_item.png" onClick={() => { addItem(162) }} />
            <img src="/Items/Goredrinker_item.png" onClick={() => { addItem(163) }} />
            <img src="/Items/Hextech_Rocketbelt_item.png" onClick={() => { addItem(164) }} />
            <img src="/Items/Immortal_Shieldbow_item.png" onClick={() => { addItem(165) }} />
            <img src="/Items/Imperial_Mandate_item.png" onClick={() => { addItem(166) }} />
            <img src="/Items/Kraken_Slayer_item.png" onClick={() => { addItem(167) }} />
            <img src="/Items/Liandrys_Anguish_item.png" onClick={() => { addItem(168) }} />
            <img src="/Items/Locket_of_the_Iron_Solari_item.png" onClick={() => { addItem(169) }} />
            <img src="/Items/Ludens_Tempest_item.png" onClick={() => { addItem(170) }} />
            <img src="/Items/Moonstone_Renewer_item.png" onClick={() => { addItem(171) }} />
            <img src="/Items/Night_Harvester_item.png" onClick={() => { addItem(172) }} />
            <img src="/Items/Prowlers_Claw_item.png" onClick={() => { addItem(173) }} />
            <img src="/Items/Riftmaker_item.png" onClick={() => { addItem(174) }} />
            <img src="/Items/Shurelyas_Battlesong_item.png" onClick={() => { addItem(175) }} />
            <img src="/Items/Stridebreaker_item.png" onClick={() => { addItem(176) }} />
            <img src="/Items/Sunfire_Aegis_item.png" onClick={() => { addItem(177) }} />
            <img src="/Items/Trinity_Force_item.png" onClick={() => { addItem(178) }} />
            <img src="/Items/Turbo_Chemtank_item.png" onClick={() => { addItem(179) }} />
        <tr>
                <th>Boots</th>
        </tr>
            <img src="/Items/Boots_item.png" onClick={() => { addItem(21) }} />
            <img src="/Items/Berserkers_Greaves_item.png" onClick={() => { addItem(20) }} />
            <img src="/Items/Boots_of_Swiftness_item.png" onClick={() => { addItem(22) }} />
            <img src="/Items/Ionian_Boots_of_Lucidity_item.png" onClick={() => { addItem(23) }} />
            <img src="/Items/Mercurys_Treads_item.png" onClick={() => { addItem(24) }} />
            <img src="/Items/Mobility_Boots_item.png" onClick={() => { addItem(25) }} />
            <img src="/Items/Plated_Steelcaps_item.png" onClick={() => { addItem(26) }} />
            <img src="/Items/Sorcerers_Shoes_item.png" onClick={() => { addItem(27) }} />
        <tr>
                <th>Legendary Items</th>
        </tr>
            <img src="/Items/Abyssal_Mask_item.png" onClick={() => { addItem(89) }} />
            <img src="/Items/Anathemas_Chains_item.png" onClick={() => { addItem(89) }} />
            <img src="/Items/Archangels_Staff_item.png" onClick={() => { addItem(90) }} />
            <img src="/Items/Ardent_Censer_item.png" onClick={() => { addItem(91) }} />
            <img src="/Items/Banshees_Veil_item.png" onClick={() => { addItem(92) }} />
            <img src="/Items/Black_Cleaver_item.png" onClick={() => { addItem(93) }} />
            <img src="/Items/Black_Mist_Scythe_item.png" onClick={() => { addItem(94) }} />
            <img src="/Items/Blade_of_the_Ruined_King_item.png" onClick={() => { addItem(95) }} />
            <img src="/Items/Bloodthirster_item.png" onClick={() => { addItem(96) }} />
            <img src="/Items/Bulwark_of_the_Mountain_item.png" onClick={() => { addItem(97) }} />
            <img src="/Items/Chempunk_Chainsword_item.png" onClick={() => { addItem(98) }} />
            <img src="/Items/Chemtech_Putrifier_item.png" onClick={() => { addItem(99) }} />
            <img src="/Items/Cosmic_Drive_item.png" onClick={() => { addItem(100) }} />
            <img src="/Items/Dead_Mans_Plate_item.png" onClick={() => { addItem(101) }} />
            <img src="/Items/Deaths_Dance_item.png" onClick={() => { addItem(102) }} />
            <img src="/Items/Demonic_Embrace_item.png" onClick={() => { addItem(103) }} />
            <img src="/Items/Edge_of_Night_item.png" onClick={() => { addItem(104) }} />
            <img src="/Items/Essence_Reaver_item.png" onClick={() => { addItem(105) }} />
            <img src="/Items/Force_of_Nature_item.png" onClick={() => { addItem(106) }} />
            <img src="/Items/Frozen_Heart_item.png" onClick={() => { addItem(107) }} />
            <img src="/Items/Gargoyle_Stoneplate_item.png" onClick={() => { addItem(108) }} />
            <img src="/Items/Guardian_Angel_item.png" onClick={() => { addItem(109) }} />
            <img src="/Items/Guinsoos_Rageblade_item.png" onClick={() => { addItem(110) }} />
            <img src="/Items/Horizon_Focus_item.png" onClick={() => { addItem(111) }} />
            <img src="/Items/Horizon_Focus_item.png" onClick={() => { addItem(112) }} />
            <img src="/Items/Hullbreaker_item.png" onClick={() => { addItem(113) }} />
            <img src="/Items/Infinity_Edge_item.png" onClick={() => { addItem(114) }} />
            <img src="/Items/Knights_Vow_item.png" onClick={() => { addItem(115) }} />
            <img src="/Items/Lich_Bane_item.png" onClick={() => { addItem(116) }} />
            <img src="/Items/Lord_Dominiks_Regards_item.png" onClick={() => { addItem(117) }} />
            <img src="/Items/Manamune_item.png" onClick={() => { addItem(118) }} />
            <img src="/Items/Maw_of_Malmortius_item.png" onClick={() => { addItem(119) }} />
            <img src="/Items/Mejais_Soulstealer_item.png" onClick={() => { addItem(120) }} />
            <img src="/Items/Mercurial_Scimitar_item.png" onClick={() => { addItem(121) }} />
            <img src="/Items/Mikaels_Blessing_item.png" onClick={() => { addItem(122) }} />
            <img src="/Items/Morellonomicon_item.png" onClick={() => { addItem(123) }} />
            <img src="/Items/Mortal_Reminder_item.png" onClick={() => { addItem(124) }} />
            <img src="/Items/Muramana_item.png" onClick={() => { addItem(125) }} />
            <img src="/Items/Nashors_Tooth_item.png" onClick={() => { addItem(126) }} />
            <img src="/Items/Navori_Quickblades_item.png" onClick={() => { addItem(127) }} />
            <img src="/Items/Pauldrons_of_Whiterock_item.png" onClick={() => { addItem(128) }} />
            <img src="/Items/Phantom_Dancer_item.png" onClick={() => { addItem(129) }} />
            <img src="/Items/Rabadons_Deathcap_item.png" onClick={() => { addItem(130) }} />
            <img src="/Items/Randuins_Omen_item.png" onClick={() => { addItem(131) }} />
            <img src="/Items/Rapid_Firecannon_item.png" onClick={() => { addItem(132) }} />
            <img src="/Items/Ravenous_Hydra_item.png" onClick={() => { addItem(133) }} />
            <img src="/Items/Redemption_item.png" onClick={() => { addItem(134) }} />
            <img src="/Items/Runaans_Hurricane_item.png" onClick={() => { addItem(135) }} />
            <img src="/Items/Rylais_Crystal_Scepter_item.png" onClick={() => { addItem(136) }} />
            <img src="/Items/Seraphs_Embrace_item.png" onClick={() => { addItem(137) }} />
            <img src="/Items/Serpents_Fang_item.png" onClick={() => { addItem(138) }} />
            <img src="/Items/Seryldas_Grudge_item.png" onClick={() => { addItem(139) }} />
            <img src="/Items/Shard_of_True_Ice_item.png" onClick={() => { addItem(140) }} />
            <img src="/Items/Silvermere_Dawn_item.png" onClick={() => { addItem(141) }} />
            <img src="/Items/Spirit_Visage_item.png" onClick={() => { addItem(142) }} />
            <img src="/Items/Staff_of_Flowing_Water_item.png" onClick={() => { addItem(143) }} />
            <img src="/Items/Steraks_Gage_item.png" onClick={() => { addItem(144) }} />
            <img src="/Items/Stormrazor_item.png" onClick={() => { addItem(145) }} />
            <img src="/Items/The_Collector_item.png" onClick={() => { addItem(146) }} />
            <img src="/Items/Thornmail_item.png" onClick={() => { addItem(147) }} />
            <img src="/Items/Titanic_Hydra_item.png" onClick={() => { addItem(148) }} />
            <img src="/Items/Umbral_Glaive_item.png" onClick={() => { addItem(149) }} />
            <img src="/Items/Vigilant_Wardstone_item.png" onClick={() => { addItem(150) }} />
            <img src="/Items/Void_Staff_item.png" onClick={() => { addItem(151) }} />
            <img src="/Items/Warmogs_Armor_item.png" onClick={() => { addItem(152) }} />
            <img src="/Items/Wits_End_item.png" onClick={() => { addItem(153) }} />
            <img src="/Items/Youmuus_Ghostblade_item.png" onClick={() => { addItem(154) }} />
            <img src="/Items/Zekes_Convergence_item.png" onClick={() => { addItem(155) }} />
            <img src="/Items/Zhonyas_Hourglass_item.png" onClick={() => { addItem(156) }} />
        <tr>
                <th>Epic Items</th>
        </tr>
            <img src="/Items/Aegis_of_the_Legion_item.png" onClick={() => { addItem(45) }} />
            <img src="/Items/Aether_Wisp_item.png" onClick={() => { addItem(46) }} />
            <img src="/Items/Bamis_Cinder_item.png" onClick={() => { addItem(47) }} />
            <img src="/Items/Bandleglass_Mirror_item.png" onClick={() => { addItem(48) }} />
            <img src="/Items/Blighting_Jewel_item.png" onClick={() => { addItem(49) }} />
            <img src="/Items/Bramble_Vest_item.png" onClick={() => { addItem(50) }} />
            <img src="/Items/Caulfields_Warhammer_item.png" onClick={() => { addItem(51) }} />
            <img src="/Items/Chain_Vest_item.png" onClick={() => { addItem(52) }} />
            <img src="/Items/Crystalline_Bracer_item.png" onClick={() => { addItem(53) }} />
            <img src="/Items/Executioners_Calling_item.png" onClick={() => { addItem(54) }} />
            <img src="/Items/Fiendish_Codex_item.png" onClick={() => { addItem(55) }} />
            <img src="/Items/Forbidden_Idol_item.png" onClick={() => { addItem(56) }} />
            <img src="/Items/Frostfang_item.png" onClick={() => { addItem(57) }} />
            <img src="/Items/Giants_Belt_item.png" onClick={() => { addItem(58) }} />
            <img src="/Items/Glacial_Buckler_item.png" onClick={() => { addItem(59) }} />
            <img src="/Items/Harrowing_Crescent_item.png" onClick={() => { addItem(60) }} />
            <img src="/Items/Hearthbound_Axe_item.png" onClick={() => { addItem(61) }} />
            <img src="/Items/Hexdrinker_item.png" onClick={() => { addItem(62) }} />
            <img src="/Items/Hextech_Alternator_item.png" onClick={() => { addItem(63) }} />
            <img src="/Items/Ironspike_Whip_item.png" onClick={() => { addItem(64) }} />
            <img src="/Items/Kindlegem_item.png" onClick={() => { addItem(65) }} />
            <img src="/Items/Kircheis_Shard_item.png" onClick={() => { addItem(66) }} />
            <img src="/Items/Last_Whisper_item.png" onClick={() => { addItem(67) }} />
            <img src="/Items/Leeching_Leer_item.png" onClick={() => { addItem(68) }} />
            <img src="/Items/Lost_Chapter_item.png" onClick={() => { addItem(69) }} />
            <img src="/Items/Negatron_Cloak_item.png" onClick={() => { addItem(70) }} />
            <img src="/Items/Noonquiver_item.png" onClick={() => { addItem(71) }} />
            <img src="/Items/Oblivion_Orb_item.png" onClick={() => { addItem(72) }} />
            <img src="/Items/Phage_item.png" onClick={() => { addItem(73) }} />
            <img src="/Items/Quicksilver_Sash_item.png" onClick={() => { addItem(74) }} />
            <img src="/Items/Rageknife_item.png" onClick={() => { addItem(75) }} />
            <img src="/Items/Recurve_Bow_item.png" onClick={() => { addItem(76) }} />
            <img src="/Items/Runesteel_Spaulders_item.png" onClick={() => { addItem(77) }} />
            <img src="/Items/Seekers_Armguard_item.png" onClick={() => { addItem(78) }} />
            <img src="/Items/Serrated_Dirk_item.png" onClick={() => { addItem(79) }} />
            <img src="/Items/Spectres_Cowl_item.png" onClick={() => { addItem(80) }} />
            <img src="/Items/Targons_Buckler_item.png" onClick={() => { addItem(81) }} />
            <img src="/Items/Tiamat_item.png" onClick={() => { addItem(82) }} />
            <img src="/Items/Vampiric_Scepter_item.png" onClick={() => { addItem(83) }} />
            <img src="/Items/Verdant_Barrier_item.png" onClick={() => { addItem(84) }} />
            <img src="/Items/Wardens_Mail_item.png" onClick={() => { addItem(85) }} />
            <img src="/Items/Watchful_Wardstone_item.png" onClick={() => { addItem(86) }} />
            <img src="/Items/Winged_Moonplate_item.png" onClick={() => { addItem(87) }} />
            <img src="/Items/Zeal_item.png" onClick={() => { addItem(88) }} />
        <tr>
                <th>Basic Items</th>
        </tr>
            <img src="/Items/Amplifying_Tome_item.png" onClick={() => { addItem(28) }} />
            <img src="/Items/B._F._Sword_item.png" onClick={() => { addItem(29) }} />
            <img src="/Items/Blasting_Wand_item.png" onClick={() => { addItem(30) }} />
            <img src="/Items/Broken_Stopwatch_item.png" onClick={() => { addItem(31) }} />
            <img src="/Items/Cloak_of_Agility_item.png" onClick={() => { addItem(32) }} />
            <img src="/Items/Cloth_Armor_item.png" onClick={() => { addItem(33) }} />
            <img src="/Items/Dagger_item.png" onClick={() => { addItem(34) }} />
            <img src="/Items/Faerie_Charm_item.png" onClick={() => { addItem(35) }} />
            <img src="/Items/Long_Sword_item.png" onClick={() => { addItem(36) }} />
            <img src="/Items/Needlessly_Large_Rod_item.png" onClick={() => { addItem(37) }} />
            <img src="/Items/Null-Magic_Mantle_item.png" onClick={() => { addItem(38) }} />
            <img src="/Items/Pickaxe_item.png" onClick={() => { addItem(39) }} />
            <img src="/Items/Rejuvenation_Bead_item.png" onClick={() => { addItem(40) }} />
            <img src="/Items/Ruby_Crystal_item.png" onClick={() => { addItem(41) }} />
            <img src="/Items/Sapphire_Crystal_item.png" onClick={() => { addItem(42) }} />
            <img src="/Items/Sheen_item.png" onClick={() => { addItem(43) }} />
            <img src="/Items/Stopwatch_item.png" onClick={() => { addItem(44) }} />
        <tr>
                <th>Click the Below Icon for as many items were not used</th>
        </tr>
            <img src="/Other/Mix_Mix_profileicon.png" onClick={() => { addItem(404) }} />
        </table>
        
      
            <div>
            <input className="btn" type="submit" name="submit" value="Submit Match" />
            </div>
        </form>
    );
}

export default MatchupForm;
