import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../SetContext";
import "../css/filter.css";

export default function Filter() {
  const { dog, setFilterDog } = useContext(StateContext);
  const [sex, setSex] = useState("");
  const [race, setRace] = useState("");
  const [size, setSize] = useState("");
  const [region, setRegion] = useState("");

  var newDog = [...dog];

  const filteredArray = () => {
    const filteredData = newDog.filter((item) => {
  
   
      if(item.sex===undefined){
        return newDog
      }else if(item.race===undefined){
        return newDog
      }
      else if(item.size===undefined){
        return newDog
      }
      else if(item.region===undefined){
        return newDog
      }
      else{
      return (
        item.sex.includes(sex) &&
        item.race.includes(race) &&
        item.size.includes(size) &&
        item.region.includes(region)
      );
    
    }
    });

    setFilterDog(filteredData);
  };

  useEffect(() => {
    filteredArray();
    // eslint-disable-next-line
  }, [sex, race, size, region]);

  return (
    <div className="containerFilter borderSpacing">
      <div className="optionSelect">
        <h5>Sesso</h5>
        <select onChange={(e) => setSex(e.target.value)}>
          <option value="">Tutti</option>
          <option value="Maschio">Maschio</option>
          <option value="Femmina">Femmina</option>
        </select>
      </div>
      <div className="optionSelect">
        <h5>Dimensione</h5>
        <select onChange={(e) => setSize(e.target.value)}>
          <option value="">Tutti</option>
          <option value="Piccola">Piccola</option>
          <option value="Media">Media</option>
          <option value="Grande">Grande</option>
        </select>
      </div>

      <div className="optionSelect">
        <h5>Regione</h5>
        <select onChange={(e) => setRegion(e.target.value)}>
          <option value="">Tutti</option>
          <option value="Abruzzo">Abruzzo</option>
          <option value="Basilicata">Basilicata</option>
          <option value="Calabria">Calabria</option>
          <option value="Campania">Campania</option>
          <option value="Emilia Romagna">Emilia Romagna</option>
          <option value="Friuli Venezia Giulia">Friuli Venezia Giulia</option>
          <option value="Lazio">Lazio</option>
          <option value="Liguria">Liguria</option>
          <option value="Lombardia">Lombardia</option>
          <option value="Marche">Marche</option>
          <option value="Molise">Molise</option>
          <option value="Piemonte">Piemonte</option>
          <option value="Puglia">Puglia</option>
          <option value="Sardegna">Sardegna</option>
          <option value="Sicilia">Sicilia</option>
          <option value="Toscana">Toscana</option>
          <option value="Trentino Alto Adige">Trentino Alto Adige</option>
          <option value="Umbria">Umbria</option>
          <option value="Val d'Aosta">Val d'Aosta</option>
          <option value="Veneto">Veneto</option>
        </select>
      </div>

      <div className="optionSelect">
        <h5>Razza</h5>
        <select onChange={(e) => setRace(e.target.value)}>
          <option value="">Tutti</option>
          <option value="Affenpinscher">Affenpinscher</option>
          <option value="Airedale Terrier">Airedale Terrier</option>
          <option value="Akita Inu">Akita Inu</option>
          <option value="Akita Americano">Akita Americano</option>
          <option value="Alano">Alano</option>
          <option value="Alaskan Husky">Alaskan Husky</option>
          <option value="Alaskan Malamute">Alaskan Malamute</option>
          <option value="Alpenlaendische Dachsbracke">
            Alpenlaendische Dachsbracke
          </option>
          <option value="American Pit Bull Terrier">
            American Pit Bull Terrier
          </option>
          <option value="American Staffordshire Terrier">
            American Staffordshire Terrier
          </option>
          <option value="American Water Spaniel">American Water Spaniel</option>
          <option value="Anglo-Français De Petite Vénerie">
            Anglo-Français De Petite Vénerie
          </option>
          <option value="Ariegeois">Ariegeois</option>
          <option value="Australian Cattle Dog">Australian Cattle Dog</option>
          <option value="Australian Shepherd">Australian Shepherd</option>
          <option value="Australian Silky Terrier">
            Australian Silky Terrier
          </option>
          <option value="Australian Stumpy Tail Cattle Dog">
            Australian Stumpy Tail Cattle Dog
          </option>
          <option value="Australian Terrier">Australian Terrier</option>
          <option value="Azawakh">Azawakh</option>
          <option value="Bandog">Bandog</option>
          <option value="Bangara">Bangara</option>
          <option value="Barbet">Barbet</option>
          <option value="Barbone">Barbone</option>
          <option value="Barboncino">Barboncino</option>
          <option value="Basenji">Basenji</option>
          <option value="Basset Artésien Normand">
            Basset Artésien Normand
          </option>
          <option value="Basset Bleu De Gascogne">
            Basset Bleu De Gascogne
          </option>
          <option value="Basset Fauve De Bretagne">
            Basset Fauve De Bretagne
          </option>
          <option value="Basset Hound">Basset Hound</option>
          <option value="Bassotto">Bassotto</option>
          <option value="Bayerischer Gebirgsschweisshund">
            Bayerischer Gebirgsschweisshund
          </option>
          <option value="Beagle">Beagle</option>
          <option value="Beagle-Harrier">Beagle-Harrier</option>
          <option value="Bearded Collie">Bearded Collie</option>
          <option value="Bedlington Terrier">Bedlington Terrier</option>
          <option value="Bhotia">Bhotia</option>
          <option value="Bhote Kukur">Bhote Kukur</option>
          <option value="Borador">Borador</option>
          <option value="Bichon Poil Frisé">Bichon Poil Frisé</option>
          <option value="Bichon Havanais">Bichon Havanais</option>
          <option value="Biewer">Biewer</option>
          <option value="Billy">Billy</option>
          <option value="Black And Tan Coonhound">
            Black And Tan Coonhound
          </option>
          <option value="Black Mouth Cur">Black Mouth Cur</option>
          <option value="Blue Lacy">Blue Lacy</option>
          <option value="Blue Paul Terrier">Blue Paul Terrier</option>
          <option value="Alano">Alano</option>
          <option value="Blue Picardy Spaniel">Blue Picardy Spaniel</option>
          <option value="Bluetick Coonhound">Bluetick Coonhound</option>
          <option value="Bobtail">Bobtail</option>
          <option value="Boerboel">Boerboel</option>
          <option value="Bolognese">Bolognese</option>
          <option value="Bolonka">Bolonka</option>
          <option value="Border Collie">Border Collie</option>
          <option value="Border Terrier">Border Terrier</option>
          <option value="Borzoi">Borzoi</option>
          <option value="Boston Terrier">Boston Terrier</option>
          <option value="Bouledogue Francese">Bouledogue Francese</option>
          <option value="Bovaro Del Bernese">Bovaro Del Bernese</option>
          <option value="Bovaro Dell’Appenzell">Bovaro Dell’Appenzell</option>
          <option value="Bovaro Dell’Entlebuch">Bovaro Dell’Entlebuch</option>
          <option value="Bovaro Delle Ardenne">Bovaro Delle Ardenne</option>
          <option value="Bovaro Delle Fiandre">Bovaro Delle Fiandre</option>
          <option value="Boxer">Boxer</option>
          <option value="Boykin Spaniel">Boykin Spaniel</option>
          <option value="Bracco D’Ariège">Bracco D’Ariège</option>
          <option value="Bracco D’Auvergne">Bracco D’Auvergne</option>
          <option value="Bracco Del Borbonese">Bracco Del Borbonese</option>
          <option value="Bracco Di Burgos">Bracco Di Burgos</option>
          <option value="Bracco Francese">Bracco Francese</option>
          <option value="Bracco Italiano">Bracco Italiano</option>
          <option value="Bracco Portoghese">Bracco Portoghese</option>
          <option value="Bracco Saint Germain">Bracco Saint Germain</option>
          <option value="Bracco Tedesco">Bracco Tedesco</option>
          <option value="Bracco Ungherese">Bracco Ungherese</option>
          <option value="Bracco Slovacco">Bracco Slovacco</option>
          <option value="Briquet Griffon Vendeen">
            Briquet Griffon Vendeen
          </option>
          <option value="Broholmer">Broholmer</option>
          <option value="Bull Arab">Bull Arab</option>
          <option value="Bull Terrier">Bull Terrier</option>
          <option value="Bulldog">Bulldog</option>
          <option value="Bulldog Inglese">Bulldog Inglese</option>
          <option value="Bullmastiff">Bullmastiff</option>
          <option value="Bully Kutta">Bully Kutta</option>
          <option value="Cairn Terrier">Cairn Terrier</option>
          <option value="Can De Bou">Can De Bou</option>
          <option value="Canaan Dog">Canaan Dog</option>
          <option value="Canadian Eskimo Dog">Canadian Eskimo Dog</option>
          <option value="Cane Corso">Cane Corso</option>
          <option value="Cane D’Acqua Spagnolo">Cane D’Acqua Spagnolo</option>
          <option value="Cane Dei Faraoni">Cane dei Faraoni</option>
          <option value="Cane Da Ferma Tedesco">Cane Da Ferma Tedesco</option>
          <option value="Cane Da Montagna Dei Pirenei">
            Cane Da Montagna Dei Pirenei
          </option>
          <option value="Cane Da Orso Della Carelia">
            Cane Da Orso Della Carelia
          </option>
          <option value="Cane Dell’Atlas">Cane Dell’Atlas</option>
          <option value="Cane Di Oropa">Cane Di Oropa</option>
          <option value="Cane Indiano Pantera">Cane Indiano Pantera</option>
          <option value="Cane Lupo Cecoslovacco">Cane Lupo Cecoslovacco</option>
          <option value="Cane Lupo Di Saarloos">Cane Lupo Di Saarloos</option>
          <option value="Cane Nudo Peruviano">Cane Nudo Peruviano</option>
          <option value="Cane Toccatore">Cane Toccatore</option>
          <option value="Cane Da Serra Di Estrela">
            Cane da Serra di Estrela
          </option>
          <option value="Cão Da Serra De Aires">Cão da Serra de Aires</option>
          <option value="Cão De Água Português">Cão de Água Português</option>
          <option value="Cão De Castro Laboreiro">
            Cão de Castro Laboreiro
          </option>
          <option value="Cão De Fila De São Miguel">
            Cão de Fila de São Miguel
          </option>
          <option value="Cão De Fila Da Terceira">
            Cão de Fila da Terceira
          </option>
          <option value="Cão De Gado Transmontano">
            Cão de Gado Transmontano
          </option>
          <option value="Carlino">Carlino</option>
          <option value="Catahoula Leopard Dog">Catahoula Leopard Dog</option>
          <option value="Catahoula Bulldog">Catahoula Bulldog</option>
          <option value="Cavalier King Charles Spaniel">
            Cavalier King Charles Spaniel
          </option>
          <option value="Cavapoo">Cavapoo</option>
          <option value="Cavoodle">Cavoodle</option>
          <option value="Cesky Terrier">Cesky Terrier</option>
          <option value="Chesapeake Bay Retriever">
            Chesapeake Bay Retriever
          </option>
          <option value="Chien De Combat Majorquin">
            Chien de Combat Majorquin
          </option>
          <option value="Chien De Saint Hubert">Chien de Saint Hubert</option>
          <option value="Chien Courant Hamilton">Chien Courant Hamilton</option>
          <option value="Chihuahua">Chihuahua</option>
          <option value="Chin">Chin</option>
          <option value="Chinese Crested Dog">Chinese Crested Dog</option>
          <option value="Chinook">Chinook</option>
          <option value="Chippiparai">Chippiparai</option>
          <option value="Chiweenie">Chiweenie</option>
          <option value="Chow Chow">Chow Chow</option>
          <option value="Ciobănesc De Bucovina">Ciobănesc de Bucovina</option>
          <option value="Cirneco Dell’Etna">Cirneco dell’Etna</option>
          <option value="Clumber Spaniel">Clumber Spaniel</option>
          <option value="Cockapoo">Cockapoo</option>
          <option value="Cocker">Cocker</option>
          <option value="Cocker Spaniel Americano">
            Cocker Spaniel Americano
          </option>
          <option value="Combai">Combai</option>
          <option value="Coton de Tuléar">Coton de Tuléar</option>
          <option value="Curly Coated Retriever">Curly Coated Retriever</option>
          <option value="Dalmata">Dalmata</option>
          <option value="Dandie Dinmont Terrier">Dandie Dinmont Terrier</option>
          <option value="Danish/Swedish Farm Dog">
            Danish/Swedish Farm Dog
          </option>
          <option value="Deerhound">Deerhound</option>
          <option value="Dobermann">Dobermann</option>
          <option value="Dogo Argentino">Dogo Argentino</option>
          <option value="Dogo Cubano">Dogo Cubano</option>
          <option value="Dogo Guatemalteco">Dogo Guatemalteco</option>
          <option value="Dogo Sardo">Dogo Sardo</option>
          <option value="Dogue De Bordeaux">Dogue de Bordeaux</option>
          <option value="Drever">Drever</option>
          <option value="Drentse Patrijshond">Drentse Patrijshond</option>
          <option value="Dunker">Dunker</option>
          <option value="Dutch Smoushond">Dutch Smoushond</option>
          <option value="English Coonhound">English Coonhound</option>
          <option value="English Foxhound">English Foxhound</option>
          <option value="English Toy Terrier">English Toy Terrier</option>
          <option value="Épagneul Bleu De Picardie">
            Épagneul Bleu de Picardie
          </option>
          <option value="Épagneul Breton">Épagneul Breton</option>
          <option value="Épagneul De Pont-Audemer">
            Épagneul de Pont-Audemer
          </option>
          <option value="Épagneul Français">Épagneul Français</option>
          <option value="Épagneul Picard">Épagneul Picard</option>
          <option value="Épagneul Nano Continentale">
            Épagneul Nano Continentale
          </option>
          <option value="Epagneul Olandese">Epagneul Olandese</option>
          <option value="Estonian Hound">Estonian Hound</option>
          <option value="Eurasier">Eurasier</option>
          <option value="Eurohound">Eurohound</option>
          <option value="Feist">Feist</option>
          <option value="Field Spaniel">Field Spaniel</option>
          <option value="Fila Brasileiro">Fila Brasileiro</option>
          <option value="Flat-Coated Retriever">Flat-Coated Retriever</option>
          <option value="Fox Terrier">Fox Terrier</option>
          <option value="Fox Paulistinha">Fox Paulistinha</option>
          <option value="Français">Français</option>
          <option value="Franzuskaya Bolonka">Franzuskaya Bolonka</option>
          <option value="Gaddi Kutta">Gaddi Kutta</option>
          <option value="Galgo Español">Galgo Español</option>
          <option value="Gammel Dansk Hønsehund">Gammel Dansk Hønsehund</option>
          <option value="Gascon Saintongeois">Gascon Saintongeois</option>
          <option value="Glen Of Imaal Terrier">Glen of Imaal Terrier</option>
          <option value="Goldendoodle">Goldendoodle</option>
          <option value="Golden Retriever">Golden Retriever</option>
          <option value="Gonczy Polski">Gonczy Polski</option>
          <option value="Grand Anglo-Francais">Grand Anglo-Francais</option>
          <option value="Grand Basset Griffon Vendeen">
            Grand Basset Griffon Vendeen
          </option>
          <option value="Grand Bleu De Gascogne">Grand Bleu de Gascogne</option>
          <option value="Grand Griffon Vendeen">Grand Griffon Vendeen</option>
          <option value="Gran Mastin De Borínquen">
            Gran Mastin de Borínquen
          </option>
          <option value="Grande Bovaro Svizzero">Grande Bovaro Svizzero</option>
          <option value="Greyhound">Greyhound</option>
          <option value="Griffon Bleu De Gascogne">
            Griffon Bleu de Gascogne
          </option>
          <option value="Griffon Fauve De Bretagne">
            Griffon Fauve de Bretagne
          </option>
          <option value="Griffon Nivernais">Griffon Nivernais</option>
          <option value="Griffone A Pelo Duro">Griffone a Pelo Duro</option>
          <option value="Griffone Belga">Griffone Belga</option>
          <option value="Griffone Di Bruxelles">Griffone di Bruxelles</option>
          <option value="Groenlandese">Groenlandese</option>
          <option value="Guatemalan Bull Terrier">
            Guatemalan Bull Terrier
          </option>
          <option value="Guardiano Moscovita">Guardiano Moscovita</option>
          <option value="Gull Dong">Gull Dong</option>
          <option value="Gull Terr">Gull Terr</option>
          <option value="Hairless Khala">Hairless Khala</option>
          <option value="Haldenstovare">Haldenstovare</option>
          <option value="Hamiltonstövare">Hamiltonstövare</option>
          <option value="Hannoverscher Schweisshund">
            Hannoverscher Schweisshund
          </option>
          <option value="Harrier">Harrier</option>
          <option value="Himalayan Sheepdog">Himalayan Sheepdog</option>
          <option value="Hokkaido">Hokkaido</option>
          <option value="Hottosho">Hottosho</option>
          <option value="Hovawart">Hovawart</option>
          <option value="Huntaway">Huntaway</option>
          <option value="Husky">Husky</option>
          <option value="Hygenhund">Hygenhund</option>
          <option value="Icelandic Sheepdog">Icelandic Sheepdog</option>
          <option value="Irish Bull Terrier">Irish Bull Terrier</option>
          <option value="Irish Glen Of Imaal Terrier">
            Irish Glen of Imaal Terrier
          </option>
          <option value="Irish Soft Coated Wheaten Terrier">
            Irish Soft Coated Wheaten Terrier
          </option>
          <option value="Irish Terrier">Irish Terrier</option>
          <option value="Irish Water Spaniel">Irish Water Spaniel</option>
          <option value="Jack Russell">Jack Russell</option>
          <option value="Jagdterrier">Jagdterrier</option>
          <option value="Jämthund">Jämthund</option>
          <option value="Jonangi">Jonangi</option>
          <option value="Kai">Kai</option>
          <option value="Kanni">Kanni</option>
          <option value="Kerry Blue Terrier">Kerry Blue Terrier</option>
          <option value="Khonch Nokhoi">Khonch Nokhoi</option>
          <option value="Khottosho">Khottosho</option>
          <option value="Khortals">Khortals</option>
          <option value="Kintamani">Kintamani</option>
          <option value="Kishu">Kishu</option>
          <option value="Kleine Brabander">Kleine Brabander</option>
          <option value="Kombai">Kombai</option>
          <option value="Komondor">Komondor</option>
          <option value="Kooikerhondje">Kooikerhondje</option>
          <option value="Koolie">Koolie</option>
          <option value="Korea Jindo Dog">Korea Jindo Dog</option>
          <option value="Korean Mastiff">Korean Mastiff</option>
          <option value="Kromfohrländer">Kromfohrländer</option>
          <option value="Kuchi">Kuchi</option>
          <option value="Kuvasz">Kuvasz</option>
          <option value="Kyi Leo">Kyi Leo</option>
          <option value="Labrador Retriever">Labrador Retriever</option>
          <option value="Labradoodle">Labradoodle</option>
          <option value="Lagotto Romagnolo">Lagotto Romagnolo</option>
          <option value="Laika Della Siberia Occidentale">
            Laika della Siberia Occidentale
          </option>
          <option value="Laika Della Siberia Orientale">
            Laika della Siberia Orientale
          </option>
          <option value="Laika Russo-Europeo">Laika Russo-Europeo</option>
          <option value="Lakeland Terrier">Lakeland Terrier</option>
          <option value="Lancashire Heeler">Lancashire Heeler</option>
          <option value="Landseer">Landseer</option>
          <option value="Lapinkoira">Lapinkoira</option>
          <option value="Lapinporokoira">Lapinporokoira</option>
          <option value="Leonberger">Leonberger</option>
          <option value="Levriero">Levriero</option>
          <option value="Levriero Afgano">Levriero Afgano</option>
          <option value="Levriero Africano">Levriero Africano</option>
          <option value="Levriero Arabo">Levriero Arabo</option>
          <option value="Levriero della Steppa">Levriero della Steppa</option>
          <option value="Levriero Inglese a pelo raso">
            Levriero Inglese a pelo raso
          </option>
          <option value="Levriero Irlandese">Levriero Irlandese</option>
          <option value="Levriero Polacco">Levriero Polacco</option>
          <option value="Levriero Russo">Levriero Russo</option>
          <option value="Levriero Ungherese">Levriero Ungherese</option>
          <option value="Lhasa Apso">Lhasa Apso</option>
          <option value="Longdog">Longdog</option>
          <option value="Lowchen">Lowchen</option>
          <option value="Lupo Italiano">Lupo Italiano</option>
          <option value="Lurcher">Lurcher</option>
          <option value="Mackenzie River Husky">Mackenzie River Husky</option>
          <option value="Majorquin Bulldog">Majorquin Bulldog</option>
          <option value="Mallorquin Mastiff">Mallorquin Mastiff</option>
          <option value="Maltese">Maltese</option>
          <option value="Maltipoo">Maltipoo</option>
          <option value="Mannara">Mannara</option>
          <option value="Manchester Terrier">Manchester Terrier</option>
          <option value="Mastiff">Mastiff</option>
          <option value="Mastino Abruzzese">Mastino Abruzzese</option>
          <option value="Mastino Brasiliano">Mastino Brasiliano</option>
          <option value="Mastino dei Pirenei">Mastino dei Pirenei</option>
          <option value="Mastino delle Alpi">Mastino delle Alpi</option>
          <option value="Mastino Napoletano">Mastino Napoletano</option>
          <option value="Mastino Mahidant">Mastino Mahidant</option>
          <option value="Mastino Portoricano">Mastino Portoricano</option>
          <option value="Mastino Spagnolo">Mastino Spagnolo</option>
          <option value="Mastino Tibetano">Mastino Tibetano</option>
          <option value="McNab">McNab</option>
          <option value="Meliteo Kinidio">Meliteo Kinidio</option>
          <option value="Moscovskaya Storozhevaya Sobaka">
            Moscovskaya Storozhevaya Sobaka
          </option>
          <option value="Moscov Watchdog">Moscov Watchdog</option>
          <option value="Mountain Burmese">Mountain Burmese</option>
          <option value="Mountain Cur">Mountain Cur</option>
          <option value="Mudi">Mudi</option>
          <option value="Mudhol Hound">Mudhol Hound</option>
          <option value="Munsterlander">Munsterlander</option>
          <option value="Nebolish Mastiff">Nebolish Mastiff</option>
          <option value="Norfolk Terrier">Norfolk Terrier</option>
          <option value="Norrbottenspets">Norrbottenspets</option>
          <option value="Norsk Buhund">Norsk Buhund</option>
          <option value="Norsk Elghund">Norsk Elghund</option>
          <option value="Norsk Lundehund">Norsk Lundehund</option>
          <option value="Northern Inuit">Northern Inuit</option>
          <option value="Norwich Terrier">Norwich Terrier</option>
          <option value="Nova Scotia Duck Tolling Retriever">
            Nova Scotia Duck Tolling Retriever
          </option>
          <option value="Otterhound">Otterhound</option>
          <option value="Old English Bulldog">Old English Bulldog</option>
          <option value="Owczarek Podhalanski">Owczarek Podhalanski</option>
          <option value="Papillon">Papillon</option>
          <option value="Pardog">Pardog</option>
          <option value="Pastore Afgano">Pastore Afgano</option>
          <option value="Pastore Australiano">Pastore Australiano</option>
          <option value="Pastore Australiano Kelpie">
            Pastore Australiano Kelpie
          </option>
          <option value="Pastore Belga">Pastore Belga</option>
          <option value="Pastore Bergamasco">Pastore Bergamasco</option>
          <option value="Pastore Boemo">Pastore Boemo</option>
          <option value="Pastore Carnico">Pastore Carnico</option>
          <option value="Pastore Catalano">Pastore Catalano</option>
          <option value="Pastore Croato">Pastore Croato</option>
          <option value="Pastore dei Pirenei">Pastore dei Pirenei</option>
          <option value="Pastore della Russia Meridionale">
            Pastore della Russia Meridionale
          </option>
          <option value="Pastore del Caucaso">Pastore del Caucaso</option>
          <option value="Pastore dell’Asia Centrale">
            Pastore dell’Asia Centrale
          </option>
          <option value="Pastore di Beauce">Pastore di Beauce</option>
          <option value="Pastore di Brie">Pastore di Brie</option>
          <option value="Pastore di Karst">Pastore di Karst</option>
          <option value="Pastore di Ciarplanina">Pastore di Ciarplanina</option>
          <option value="Pastore di Piccardia">Pastore di Piccardia</option>
          <option value="Pastore di Tatra">Pastore di Tatra</option>
          <option value="Pastore di Vallée">Pastore di Vallée</option>
          <option value="Pastore Fonnese">Pastore Fonnese</option>
          <option value="Pastore Himalayano">Pastore Himalayano</option>
          <option value="Pastore Italiano">Pastore Italiano</option>
          <option value="Pastore Islandese">Pastore Islandese</option>
          <option value="Pastore Kangal">Pastore Kangal</option>
          <option value="Pastore Mallorquín">Pastore Mallorquín</option>
          <option value="Pastore Maremmano">Pastore Maremmano</option>
          <option value="Pastore Neozelandese">Pastore Neozelandese</option>
          <option value="Pastore Olandese">Pastore Olandese</option>
          <option value="Pastore Rumeno dei Carpazi">
            Pastore Rumeno dei Carpazi
          </option>
          <option value="Pastore Scozzese">Pastore Scozzese</option>
          <option value="Pastore Svizzero">Pastore Svizzero</option>
          <option value="Pastore Tedesco">Pastore Tedesco</option>
          <option value="Patterdale Terrier">Patterdale Terrier</option>
          <option value="Peekapoo">Peekapoo</option>
          <option value="Pechinese">Pechinese</option>
          <option value="Perro Cimarrón Uruguayo">
            Perro Cimarrón Uruguayo
          </option>
          <option value="Perro De Agua Español">Perro de Agua Español</option>
          <option value="Perro De Pelea Cordobes">
            Perro de Pelea Cordobes
          </option>
          <option value="Perro De Presa Canario">Perro de Presa Canario</option>
          <option value="Perro De Presa Mallorquin">
            Perro de Presa Mallorquin
          </option>
          <option value="Perro De Toro">Perro de Toro</option>
          <option value="Perro Fino Colombiano">Perro Fino Colombiano</option>
          <option value="Petit Barbaçon">Petit Barbaçon</option>
          <option value="Petit Basset Griffon Vendeen">
            Petit Basset Griffon Vendeen
          </option>
          <option value="Petit Bleu De Gascogne">Petit Bleu de Gascogne</option>
          <option value="Phalene">Phalene</option>
          <option value="Piccolo Brabantino">Piccolo Brabantino</option>
          <option value="Piccolo Cane Leone">Piccolo Cane Leone</option>
          <option value="Piccolo Levriero Italiano">
            Piccolo Levriero Italiano
          </option>
          <option value="Piccolo Segugio della Svizzera">
            Piccolo Segugio della Svizzera
          </option>
          <option value="Pinscher">Pinscher</option>
          <option value="Pit Bull">Pit Bull</option>
          <option value="Plott Hound">Plott Hound</option>
          <option value="Podenco Canario">Podenco Canario</option>
          <option value="Podenco Ibicenco">Podenco Ibicenco</option>
          <option value="Podengo Português">Podengo Português</option>
          <option value="Pointer">Pointer</option>
          <option value="Poitevin">Poitevin</option>
          <option value="Pomchi">Pomchi</option>
          <option value="Pomerania">Pomerania</option>
          <option value="Poochon">Poochon</option>
          <option value="Porcelaine">Porcelaine</option>
          <option value="Pražský Krysařík">Pražský Krysařík</option>
          <option value="Pudelpointer">Pudelpointer</option>
          <option value="Puggle">Puggle</option>
          <option value="Puli">Puli</option>
          <option value="Pumi">Pumi</option>
          <option value="Pungsan">Pungsan</option>
          <option value="Rafeiro Do Alentejo">Rafeiro do Alentejo</option>
          <option value="Rajapalayam">Rajapalayam</option>
          <option value="Rampur Greyhound">Rampur Greyhound</option>
          <option value="Ratonero Bodeguero Andaluz">
            Ratonero Bodeguero Andaluz
          </option>
          <option value="Rat Terrier">Rat Terrier</option>
          <option value="Redbone Coonhound">Redbone Coonhound</option>
          <option value="Rhodesian Ridgeback">Rhodesian Ridgeback</option>
          <option value="Riesenschnauzer">Riesenschnauzer</option>
          <option value="Romanian Carpathian Shepherd Dog">
            Romanian Carpathian Shepherd Dog
          </option>
          <option value="Romanian Mioritic Dhepherd Dog">
            Romanian Mioritic Dhepherd Dog
          </option>
          <option value="Rottweiler">Rottweiler</option>
          <option value="Rough Collie">Rough Collie</option>
          <option value="Russian Toy Terrier">Russian Toy Terrier</option>
          <option value="Russell Terrier">Russell Terrier</option>
          <option value="Sabueso">Sabueso</option>
          <option value="Saluki">Saluki</option>
          <option value="Samoiedo">Samoiedo</option>
          <option value="San Bernardo">San Bernardo</option>
          <option value="Sapsali">Sapsali</option>
          <option value="Schapendoes">Schapendoes</option>
          <option value="Schillerstovare">Schillerstovare</option>
          <option value="Schipperke">Schipperke</option>
          <option value="Schnauzer">Schnauzer</option>
          <option value="Schnauzer Gigante">Schnauzer Gigante</option>
          <option value="Schnoodle">Schnoodle</option>
          <option value="Scottish Terrier">Scottish Terrier</option>
          <option value="Sealyham Terrier">Sealyham Terrier</option>
          <option value="Segugio Austriaco Nero Focato">
            Segugio Austriaco Nero Focato
          </option>
          <option value="Segugio Da Montagna Del Montenegro">
            Segugio da Montagna del Montenegro
          </option>
          <option value="Segugio Dell’Appennino">Segugio dell’Appennino</option>
          <option value="Segugio Della Bosnia">Segugio della Bosnia</option>
          <option value="Segugio Della Stiria">Segugio della Stiria</option>
          <option value="Segugio Della Transilvania">
            Segugio della Transilvania
          </option>
          <option value="Segugio Della Westfalia">
            Segugio della Westfalia
          </option>
          <option value="Segugio Dell’Istria">Segugio dell’Istria</option>
          <option value="Segugio Di Hamilton">Segugio di Hamilton</option>
          <option value="Segugio Ellenico">Segugio Ellenico</option>
          <option value="Segugio Finlandese">Segugio Finlandese</option>
          <option value="Segugio Italiano">Segugio Italiano</option>
          <option value="Segugio Maremmano">Segugio Maremmano</option>
          <option value="Segugio Polacco">Segugio Polacco</option>
          <option value="Segugio Della Foresta Nera">
            Segugio della Foresta Nera
          </option>
          <option value="Segugio Posavatz">Segugio Posavatz</option>
          <option value="Segugio Serbo">Segugio Serbo</option>
          <option value="Segugio Tedesco">Segugio Tedesco</option>
          <option value="Segugio Tirolese">Segugio Tirolese</option>
          <option value="Segugio Tricolore Serbo">
            Segugio Tricolore Serbo
          </option>
          <option value="Seppala Siberian Sleddog">
            Seppala Siberian Sleddog
          </option>
          <option value="Setter Gordon">Setter Gordon</option>
          <option value="Setter Inglese">Setter Inglese</option>
          <option value="Setter Irlandese">Setter Irlandese</option>
          <option value="Setter Scozzese">Setter Scozzese</option>
          <option value="Sha-Khyi">Sha-Khyi</option>
          <option value="Shar Pei">Shar Pei</option>
          <option value="Shiba Inu">Shiba Inu</option>
          <option value="Shih Tzu">Shih Tzu</option>
          <option value="Shikoku">Shikoku</option>
          <option value="Shiloh Shepherd Dog">Shiloh Shepherd Dog</option>
          <option value="Siberian Husky">Siberian Husky</option>
          <option value="Silken Windhound">Silken Windhound</option>
          <option value="Skye Terrier">Skye Terrier</option>
          <option value="Sloughi">Sloughi</option>
          <option value="Smalandsstovare">Smalandsstovare</option>
          <option value="Smooth Collie">Smooth Collie</option>
          <option value="Spaniel Olandese">Spaniel Olandese</option>
          <option value="Spaniel Tedesco">Spaniel Tedesco</option>
          <option value="Spinone Italiano">Spinone Italiano</option>
          <option value="Spitz Tedesco">Spitz Tedesco</option>
          <option value="Spitz Finnico">Spitz Finnico</option>
          <option value="Spitz Giapponese">Spitz Giapponese</option>
          <option value="Springer Spaniel">Springer Spaniel</option>
          <option value="Stabyhoun">Stabyhoun</option>
          <option value="Staffordshire Bull Terrier">
            Staffordshire Bull Terrier
          </option>
          <option value="Stephens Cur">Stephens Cur</option>
          <option value="Storozhevaya Sobaka">Storozhevaya Sobaka</option>
          <option value="Suomenlapinkoira">Suomenlapinkoira</option>
          <option value="Sussex Spaniel">Sussex Spaniel</option>
          <option value="Svensk Lapphund">Svensk Lapphund</option>
          <option value="Swedish Foxhound">Swedish Foxhound</option>
          <option value="Taiwan Dog">Taiwan Dog</option>
          <option value="Tamaskan">Tamaskan</option>
          <option value="Terranova">Terranova</option>
          <option value="Terrier Boemo">Terrier Boemo</option>
          <option value="Terrier Brasileiro">Terrier Brasileiro</option>
          <option value="Terrier Giapponese">Terrier Giapponese</option>
          <option value="Terrier Nero Russo">Terrier Nero Russo</option>
          <option value="Thai Bangkaew Dog">Thai Bangkaew Dog</option>
          <option value="Thai Ridgeback">Thai Ridgeback</option>
          <option value="Tibetan Spaniel">Tibetan Spaniel</option>
          <option value="Tibetan Terrier">Tibetan Terrier</option>
          <option value="Tobet">Tobet</option>
          <option value="Tornjak">Tornjak</option>
          <option value="Tosa">Tosa</option>
          <option value="Västgötaspets">Västgötaspets</option>
          <option value="Volpino Italiano">Volpino Italiano</option>
          <option value="Weimaraner">Weimaraner</option>
          <option value="Welsh Corgi">Welsh Corgi</option>
          <option value="Welsh Springer Spaniel">Welsh Springer Spaniel</option>
          <option value="Welsh Terrier">Welsh Terrier</option>
          <option value="West Highland White Terrier">
            West Highland White Terrier
          </option>
          <option value="Whippet">Whippet</option>
          <option value="Wolfdog">Wolfdog</option>
          <option value="Xoloitzcuintle">Xoloitzcuintle</option>
          <option value="Yorkshire Terrier">Yorkshire Terrier</option>
          <option value="Zwergschnauzer">Zwergschnauzer</option>
          <option value="Zwergpinscher">Zwergpinscher</option>
        </select>
      </div>
    </div>
  );
}
