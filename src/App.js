import { Service } from "./components/service";
import { CookieConsent } from "./components/cookie-consent";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

function App() {
  return (
    <div className="App">

      {/* Sütik elfogadása */}

      <CookieConsent />

      {/* Header */}

      <Header />

      {/* Bemutatkozás */}

      <div className="p-2 md:p-0 container mx-auto mb-4">

        <h2 className="font-sans text-3xl mb-2">Bemutatkozás</h2>

        <div className="p-2 border-cyan">

          <p className="text-3xl mb-2">Üdvözlöm!<br /></p>

          <p className="font-sans text-lg mb-2">
            Először is had mutatkozzak be! Én <span className="font-bold">Balázs Miklós</span> vagyok.<br />
            Olyan mérnöknek gondolom magam, aki szeret új dolgokat létrehozni, vagy a már meglévő dolgokat úgy átalakítani, hogy az jellemben jobb legyen.
            <br />Nagyon fontos számomra, hogy képezzem magam, legyen szó önismeretről, üzletről,
            kommunikációról, emberi kapcsolatokról, az élethosszon való tanulás mellett nem felejtem el azt sem, hogy, ha nyitott szemmel járok rengeteg lehetőséget tudok felfedezni,
            ami akár járhat azzal is, hogy mások problémáin segíthetek.
          </p>

          <p className="font-sans font-bold text-lg mb-2"> Ezen elvek mentén szeretek élni. Létrehozni új dolgokat, egyszerűen alkotni.</p>

          <p className="font-sans text-lg mb-2">Keressen bizalommal. <br />Üdvözlettel: Balázs Miklós</p>

        </div>

      </div>

      {/* Miben segíthetek? */}

      <div className="p-2 md:p-0 mb-4">

        <div className="container mx-auto mb-4">

          <h2 className="font-sans text-3xl mb-2">Miben segíthetek?</h2>

          <div className="p-2">

            <p className="font-sans text-lg">
              Eddigi pályafutásom során volt már szerencsém kis cégekhez, nagyobbakhoz,
              megesett már olyan, hogy egy vállalkozás igényeit nekem kellett felmérni,
              és történt már olyan is, hogy egy már meglévő termék fejlesztésébe vettem részt.
              Hogy legyen elképzelése, ezért bemutatok pár általam megoldott problémát.
            </p>

          </div>

        </div>

        <Service title="Szoftverfejlesztés" image={<img src="/images/chart.png"></img>}>
          Egy olyan rendszer létrehozására volt a feladat, ami a kiküldött ajánlatok életútját követte végig. Lehetőségem volt a rendszer létrehozásának minden fázisában részt venni, mint a specifikáció,
          adatbázis tervezése, üzleti logika létrehozása, nagyobb feladatok részfeldatokra való bontására, jogosultsági rendszer átgondolására, fejlesztők irányítására.
          <br />Ez a szoftver meghatározó lett a vállalkozás életében, üzleti automatizálás jelent meg egy olyan területen, ahol eddig ilyen nem volt, a vállalkozás folyamatai egyszerűsödtek.
        </Service>

        <Service title="Kezelőfelület létrehozása" image={<img src="/images/ui.png"></img>}>
          Feladatunk az volt, hogy a már meglévő webes komponenseket alakítsunk úgy át hogy a komponensek működésükben ne változzanak, de az új design system formanyelvét kövessék.
          <br />Ekkora léptékű projektnél már elengedhetetlen volt saját komponens könyvtár alkalmazása, erre használtunk egy eszközt, ami rendszerezte a komponenseket,
          és a megrendelőknek is lehetőséget biztosított, hogy folyamatosan nyomon tudják követni a fejlesztés folyamatát.
        </Service>

        <Service title="Rendszerintegráció" image={<img src="/images/code.png"></img>}>
          Léteznek kész megoldások, ezek általában egy konkrét problémára adnak megoldást. Arra viszont már nem feltétlenül adnak megoldást, hogy a többi kész megoldással hogyan lehetne összekapcsolni,
          és ettől lesznek változatosak az IoT rendszerek felhasználási területei.
          <br />Jellemzően gyártásban résztvevő eszközök, és külső felek által létrehozott megoldásokat kelett összeegyeztetni. Példaképp megemlíthető, hogy SCADA rendszeren kellett megjeleníteni egy fizikai szerver állapotát,
          és naplózni azt, vagy, hogy energiamérő berendezéseket.
          <br />
        </Service>

        <Service title="Beágyazott rendszerek" image={<img src="/images/microchip.png"></img>}>
          Számomra teljesen véletlenül jött a lehetőség, hogy villamosmérnöki szakon beágyazott rendszerekről tanulhatok, amely a mai napig is tart.<br />
          Jelenleg szabadidőben a beágyazott rendszerek működéséről, biztonságkritikus rendszerek tervezéséről, beágyazott rendszerek tesztelési megoldásainak keresésevel foglalkozom.
          Diplomamunkámat annak szentelem, hogy egy beágyazott rendszer fejlesztését, tesztelését (hardware in the loop környezetben), hogyan lehetne összepárosítani a leghatékonyabban egy a mai modern CI/CD eszköz felhasználásával.
        </Service>

      </div>

      {/* Technológiai stack */}

      <div className="p-2 md:p-0 container mx-auto mb-4">

        <h2 className="font-sans text-3xl mb-4">Általam használt eszközök és technológiák</h2>

        <div className="flex flex-col md:flex-row">

          <div className="basis-1/4 bg-cyan p-4">
            <h3 className="font-sans font-bold text-lg text-center mb-2">Frontend</h3>

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
            <h3 className="font-sans font-bold text-lg text-center mb-2">Backend</h3>

            <ul className="text-lg">
              <li>Node.js</li>
              <li>Express</li>
              <li>GraphQL, REST API</li>
              <li>Sequelize ORM</li>
              <li>PostgreSQL, MySQL</li>
              <li>MongoDB, Mongoose</li>
              <li>Docker, Docker Compose</li>
            </ul>

          </div>

          <div className="basis-1/4 bg-cyan p-4">
            <h3 className="font-sans font-bold text-lg text-center mb-2">Beágyazott rendszerek</h3>

            <ul className="text-lg">
              <li>Embedded C</li>
              <li>Microchip MCUs</li>
              <li>RS232</li>
              <li>UART</li>
              <li>I2C</li>
            </ul>

          </div>

          <div className="basis-1/4 p-4">
            <h3 className="font-sans font-bold text-lg text-center mb-2">IoT és eszközök</h3>

            <ul className="text-lg">
              <li>C++</li>
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

      <div className="p-2 md:p-0 container mx-auto mb-4">
        <h2 className="font-sans text-3xl mb-4">Kapcsolat</h2>
        <p className="font-sans">Amennyiben kérdése van, vagy érdeklődik kérem keressen elérhetőségeim egyikén.</p>
        <p className="font-sans">Telefon: +36 30 <span className="hidden">1125478</span> 476 1338</p>
        <p className="font-sans">
          <a href="mailto:balazs.miklos&#64;yahoo&#46;com">balazs.miklos&#64;yahoo&#46;com</a>
        </p>
      </div>

      <Footer />

    </div>
  );
}

export default App;
