import "./about.css";

function About() {
  return (
    <div className="about">
      <h2 className="mb-4">O Szkole</h2>
      <div className="card">
        <div className="card-body">
          <p className="card-text">
            <strong>Zespół Szkół Licealnych i Technicznych nr 1</strong> to LXXX
            Liceum Ogólnokształcące im. Leopolda Staffa i Technikum
            Mechatroniczne nr 1 im. Piotra Drzewieckiego.
            <br /> <br />
            <strong>Technikum Mechatroniczne nr 1</strong> im. Piotra
            Drzewieckiego jest <em>najlepszym technikum w Polsce</em>, zarówno w
            kategorii ogólnej, jak i w Rankingu Maturalnym.{" "}
            <strong>LXXX Liceum Ogólnokształcące</strong> im. Leopolda Staffa
            zajmuje 60. miejsce w Rankingu Liceów Warszawskich i 40. jeżeli
            weźmiemy pod uwagę wyłącznie licea publiczne.
            <br />
            Zabytkowy budynek mieści w sobie nowoczesną szkołę, w której dzieją
            się fascynujące rzeczy wykraczające w przyszłość. Zespół Szkół
            Licealnych i Technicznych nr 1 w Warszawie to szkoła nowoczesna i
            otwarta na potrzeby młodych ludzi. Obie szkoły tworzą jeden organizm
            – mamy wspólnych nauczycieli, wspólny samorząd uczniowski, wspólne
            sale i wydarzenia. Jedyne różnice, to realizowane plany nauczania i
            kształcenie zawodowe w technikum.
            <br />
            <h4 className="mt-3 mb-2">Nasze Specjalizacje</h4>
            Specjalizujemy się w nowoczesnych technologiach kształcąc w branży
            informatycznej i mechatronicznej. Obecnie są to 3 zawody:
            <ul className="mt-2 mb-2">
              <li>technik informatyk</li>
              <li>technik programista</li>
              <li>technik mechatronik</li>
            </ul>
            W <strong>LICEUM</strong> profil większości klas jest powiązany z
            kształceniem w <strong>TECHNIKUM</strong> – przedmioty rozszerzone
            to matematyka, informatyka i język angielski. W TECHNIKUM jedna z
            klas w zawodzie technik informatyk jest klasą dwujęzyczną, w której
            oprócz zwiększonej liczby godzin języka, angielski pojawia się także
            na niektórych przedmiotach ogólnokształcących i zawodowych. Wszyscy
            uczniowie TECHNIKUM realizują 2 przedmioty rozszerzone: matematykę i
            fizykę lub informatykę.
            <br />
            <h4 className="mt-3 mb-2">Nasza Misja</h4>
            Naszym celem jest dbanie o wszechstronny rozwój intelektualny
            uczniów i kształcenie ich kompetencji zawodowych oraz społecznych,
            potrzebnych do funkcjonowania we współczesnym świecie.
            <br />
            Zapewniamy wysoki poziom nauczania dzięki zatrudnianiu kompetentnej
            kadry, dajemy uczniom możliwość rozwijania ich zainteresowań i
            pasji. Stale współpracujemy z pracodawcami i uczelniami wyższymi,
            różnymi instytucjami kulturalnymi, realizujemy projekty, m.in.
            Warszawskich Inicjatyw Edukacyjnych, unijne w ramach Erasmus +.
            <br />
            Nasi uczniowie mają możliwość współtworzenia szkolnej
            rzeczywistości, aktywnie działają w ramach samorządu, uczą się
            partnerstwa w relacjach z nauczycielami, rodzicami.
            <br />
            <h4 className="mt-3 mb-2">Lokalizacja</h4>
            Szkoła znajduje się na Starym Mokotowie, przy ulicy Wiśniowej 56,
            pomiędzy ulicą Rakowiecką a Batorego. Łatwy dojazd zapewnia:
            <ul className="mt-2">
              <li>stacja metra Pole Mokotowskie</li>
              <li>przystanek autobusowy Wiśniowa na ulicy Rakowieckiej</li>
              <li>
                tramwaje i autobusy przy ulicy Puławskiej, Waryńskiego oraz
                placu Unii Lubelskiej
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
