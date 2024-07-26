import { Divider } from "./components/divider";
import { Service } from "./components/service";

function App() {
  return (
    <div className="App">

      <header className="flex bg-gray p-10 mb-4 drop-shadow-repl-cyan">
        <h1 className="font-press text-white text-3xl">REPL&gt;&gt;<span className="animate-pulse"> Balázs Miklós</span></h1>
      </header>

      <div className="p-2 md:p-0 container mx-auto mb-4">

        <h2 className="font-press text-2xl mb-2">Bemutatkozás</h2>

        <div className="bg-cyan p-2 border-cyan border-l-4 drop-shadow-repl-gray">

          <p className="font-sans text-lg">
            Szeretek magamra úgy gondolni, hogy az a mérnök, aki imádja a technológiát, annak fejlődését, és azokat az összefüggéseket,
            amelyek a technológia változásaival jönnek létre. Nagyon fontos számomra, hogy képezzem magam, legyen szó önismeretről, üzletről,
            kommunikációról, emberi kapcsolatokról, az élethosszon való tanulás mellett nem felejtem el azt sem, hogy, ha nyitott szemmel járok rengeteg lehetőséget tudok felfedezni,
            ami elképzelhető, hogy mások problémáinak megoldását jelenti.
          </p>

          <p className="font-sans text-lg"> Ezen elvek mentén szeretek élni, létrehozni új dolgokat, egyszerűen alkotni. </p>

          <p className="font-sans text-lg">Keressen bizalommal.</p>

        </div>

      </div>

      <Divider />

      <div className="p-2 md:p-0 mb-4">

        <div className="container mx-auto mb-4">

          <h2 className="font-press text-2xl mb-2">Miben segíthetek?</h2>

          <div className="bg-cyan p-2 drop-shadow-repl-gray">

            <p className="font-sans text-lg">
              Eddigi pályafutásom során volt már szerencsém kis cégekhez, nagyobbakhoz,
              megesett már olyan, hogy egy vállalkozás igényeit nekem kellett felmérni,
              és történt már olyan is, hogy egy már meglévő termék fejlesztésébe vettem részt.
              Hogy megjelenjen némi elképzelés, ezért bemutatom pár érdekesebb munkámat.
            </p>

          </div>

        </div>

        <Service title="Szoftverfejlesztés" image={<img src="/images/chart.png"></img>}>
          Egy olyan rendszer létrehozására volt a feladat, ami a kiküldött ajánlatok életútját követte végig. Lehetőségem volt a rendszer létrehozásának minden fázisában részt venni, mint a specifikáció,
          adatbázis tervezése, üzleti logika létrehozása, nagyobb feladatok részfeldatokra való bontására, jogosultsági rendszer átgondolására, fejlesztők irányítására.
          Ez a szoftver meghatározó lett a vállalkozás életében, üzleti automatizálás jelent meg egy olyan területen, ahol eddig ilyen nem volt, a vállalkozás folyamatai egyszerűsödtek.
        </Service>

        <Service title="Kezelőfelület létrehozása" image={<img src="/images/ui.png"></img>}>
          Feladatunk az volt, hogy a már meglévő webes komponenseket alakítsunk úgy át hogy a komponensek működésükben ne változzanak, de az új design system elgondolását kövessék.
          Ekkora léptékű projektnél már elengedhetetlen volt saját komponens könyvtár alkalmazása, erre használtunk egy eszközt, ami rendszerezte a komponenseket,
          és a megrendelőknek is lehetőséget biztosított, hogy folyamatosan nyomon tudják követni a fejlesztés folyamatát.
        </Service>

        <Service title="Rendszerintegráció" image={<img src="/images/code.png"></img>}>
          Léteznek kész megoldások, ezek általában egy konkrét problémára adnak megoldást. Arra viszont már nem feltétlenül adnak megoldást, hogy a többi kész megoldással hogyan lehetne összekapcsolni ezeket.
          Jellemzően gyártásban résztvevő eszközök, és adatgyűjtő szoftverek integrálásáról összekapcsolásáról esik szó IoT eszközökkel. Megesett már, hogy SCADA rendszeren kellett megjeleníteni egy fizikai szerver állapotát,
          és naplózni azt, és olyan is volt, hogy fogyasztásmérő órák értékeit kellett eljuttatni egy felhő alapú szolgáltatás felé.
        </Service>

        <Service title="Beágyazott rendszerek" image={<img src="/images/microchip.png"></img>}>
          Számomra teljesen véletlenül jött a lehetőség, hogy mester villamosmérnöki szakon beágyazott rendszerekről tanulhatok, amely a mai napig is tart.
          Jelenleg szabadidőben a beágyazott rendszerek működéséről, biztonságkritikus rendszerek tervezéséről, beágyazott rendszerek tesztelési megoldásainak keresésevel foglalkozom.
          Diplomamunkámat annak szentelem, hogy egy beágyazott rendszer fejlesztését, tesztelését (hardware in the loop), hogyan lehetne összepárosítani a leghatékonyabban egy a mai modern CI/CD eszköz felhasználásával.
        </Service>

      </div>

      <Divider />

      {/* Technológiai stack */}

      <div className="p-2 md:p-0 container mx-auto mb-4">

        <h2 className="font-press text-2xl mb-4">Általam használt technológiák...</h2>

        <div className="md:flex flex-row">

          <div className="basis-1/4 bg-cyan p-4">
            <h3 className="font-press text-center mb-2">Frontend</h3>

            <ul className="text-lg">
              <li>HTML5</li>
              <li>CSS3 (reszponzív, animációk) </li>
              <li>React, Angular</li>
              <li>NextJS</li>
              <li>Material UI</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>BEM naming</li>
            </ul>

          </div>

          <div className="basis-1/4 p-4">
            <h3 className="font-press text-center mb-2">Backend</h3>

            <ul className="text-lg">
              <li>Node.js</li>
              <li>Express</li>
              <li>GraphQL, REST API</li>
              <li>Sequelize</li>
              <li>PostgreSQL, MySQL</li>
              <li>MongoDB, Mongoose</li>
              <li>Docker, Docker Compose</li>
            </ul>

          </div>

          <div className="basis-1/4 bg-cyan p-4">
            <h3 className="font-press text-center mb-2">Beágyazott rendszerek</h3>

            <ul className="text-lg">
              <li>Embedded C / C++</li>
              <li>Microchip MCUs</li>
              <li>IoT:</li>
              <li>Node.js, Node-RED</li>
              <li>MQTT</li>
              <li>Modbus TCP</li>
              <li>HTTP</li>
            </ul>

          </div>

          <div className="basis-1/4 p-4">
            <h3 className="font-press text-center mb-2">IoT és eszközök</h3>

            <ul className="text-lg">
              <li>Node.js, Node-RED</li>
              <li>MQTT</li>
              <li>Modbus TCP</li>
              <li>HTTP</li>
              <li>Git</li>
              <li>Gitlab (config)</li>
              <li>CI/CD</li>
              <li>OOP & design patterns</li>
              <li>Linux</li>
              <li>Shell</li>
            </ul>

          </div>

        </div>

      </div>

      <Divider/>

      <div className="p-2 md:p-0 container mx-auto mb-4">
        <h2 className="font-press text-2xl mb-4">Kapcsolat</h2>

        <p className="font-press">Telefon: +36 30 476 1338</p>
        <p className="font-press">Email: balazs.miklos@yahoo.com</p>
      </div>

      <footer className="flex justify-center items-center bg-gray h-40 border-t-4 border-cyan">
        <p className="font-press text-white text-center">Minden jog fentartva!<br/>repl.hu</p>
      </footer>

    </div>
  );
}

export default App;
