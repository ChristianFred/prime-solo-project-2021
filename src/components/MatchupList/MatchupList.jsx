import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MatchupList.css';


function MatchupList() {
const [myCharacter, setCharacter] = useState('');
const [enemy, setEnemy] = useState('');
const dispatch = useDispatch();
const matches = useSelector((store) => store.matchupReducer);
console.log('matchup Reducer currently has', matches);
const outcomeOfMatch = ""

  const searchEnemyMatchup = (event) => {
    event.preventDefault();
    dispatch ({
      type: 'FETCH_ENEMY_MATCHUP',
      payload: {
        enemy: enemy
      }
    })
  }

  const searchMatchup = (event) => {
    event.preventDefault();

    dispatch({
      type: 'FETCH_SPECIFIC_MATCHUP',
      payload: {
        myCharacter: myCharacter
      }
    });
  }; // end registerUser

  if (matches.outcome === 1){
    outcomeOfMatch = "Won"
  }
  else if(matches.outcome === 2){
    outcomeOfMatch = 'Lost'
  }
  return (
    <>
    <form className="formPanel" onSubmit={searchMatchup}>
    <h1>View Matchups</h1>
    <label htmlFor="Played">Played Character:</label>
    <select name="Characters" id="Characters" onChange={(event) => setCharacter(event.target.value)}>
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


        <input className="btn" type="submit" name="submit" value="Search for Matches" />
        </form>
        <form className="formPanel" onSubmit={searchEnemyMatchup}>
        <label htmlFor="Games Against">Games Against:</label>
        <select name="Against" id="Against" onChange={(event) => setEnemy(event.target.value)}>
          <option value="0">Select a Opposing Laner</option>
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
        <div>
        <input className="btn" type="submit" name="submit" value="Search for Matches" />
        </div>
    </form>

      <div className="formPanel2">
      <h2>Matchups</h2>
        <p>All of the Selected Matchs can be seen below:</p>
        <div>
          <table className="Table" >
            <tbody>
              {matches.map(match => {
                return (
                <><tr key={match.id}>
                    <td>Game Status</td>
                    <td>{match.myCharacter}</td>
                    <td>{match.enemyCharacter}</td>
                    <td>{match.Item1}</td>
                    <td>{match.Item2}</td>
                    <td>{match.Item3}</td>
                    <td>{match.Item4}</td>
                    <td>{match.Item5}</td>
                    <td>{match.Item6}</td>
                  </tr>
                  <tr key={match.id}>
                    <td>{match.outcome}</td>
                    <td><img className="content_img" src={match.player_image_path} /></td>
                    <td><img className="content_img" src={match.enemy_image_path} /></td>
                    <td><img className="content_img" id="image_text" src={match.item1_image_path} /></td>
                    <td><img className="content_img" id="image_text" src={match.item2_image_path} /></td>
                    <td><img className="content_img" id="image_text" src={match.item3_image_path} /></td>
                    <td><img className="content_img" id="image_text" src={match.item4_image_path} /></td>
                    <td><img className="content_img" id="image_text" src={match.item5_image_path} /></td>
                      <td><img className="content_img" id="image_text" src={match.item6_image_path} /></td>
                    </tr></>
                )})}
            </tbody>
          </table>
        </div>
   </div>
  </>
  );
}

export default MatchupList;
