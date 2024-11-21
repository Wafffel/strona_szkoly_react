import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2 className="contact-title">Kontakt</h2>
      
      <div className="contact-card">
        <div className="card-content">
          <div className="section">
            <h4>Placówki w zespole:</h4>
            <ul>
              <li>Technikum Mechatroniczne nr 1 im. Piotra Drzewieckiego</li>
              <li>LXXX Liceum Ogólnokształcące im. Leopolda Staffa</li>
            </ul>
          </div>

          <div className="section">
            <h4>Adres korespondencyjny:</h4>
            <address>
              <strong>Zespół Szkół Licealnych i Technicznych nr 1</strong><br />
              ul. Wiśniowa 56<br />
              02-520 Warszawa
            </address>
          </div>

          <div className="section">
            <h4>Kontakt ogólny:</h4>
            <p>
              <i className="fas fa-phone"></i> <strong>22 646-44-99</strong> lub <strong>22 646-44-98</strong><br />
              <i className="fas fa-envelope"></i> Rekrutacja: <a href="mailto:rekrutacja@tm1.edu.pl">rekrutacja@tm1.edu.pl</a>
            </p>
          </div>

          <div className="section">
            <h4>Działy:</h4>
            <div className="departments">
              <div className="department-column">
                <ul>
                  <li>
                    <strong>Sekretariat dyrektora</strong> (pok. 105)<br />
                    Tel. wew. 113<br />
                    <a href="mailto:szkola@tm1.edu.pl">szkola@tm1.edu.pl</a>
                  </li>
                  <li>
                    <strong>Sekretariat uczniowski</strong> (pok. 104)<br />
                    Tel. wew. 111<br />
                    <a href="mailto:sekretariat@tm1.edu.pl">sekretariat@tm1.edu.pl</a>
                  </li>
                  <li>
                    <strong>Archiwum</strong><br />
                    <a href="mailto:archiwum@tm1.edu.pl">archiwum@tm1.edu.pl</a>
                  </li>
                </ul>
              </div>
              <div className="department-column">
                <ul>
                  <li>
                    <strong>Kierownik gospodarczy</strong> (pok. 102)<br />
                    Tel. wew. 114<br />
                    <a href="mailto:boguslawa.gronczynska@tm1.edu.pl">boguslawa.gronczynska@tm1.edu.pl</a>
                  </li>
                  <li>
                    <strong>Dział kadr</strong> (pok. 101)<br />
                    Tel. wew. 119<br />
                    <a href="mailto:joanna.wolowska@tm1.edu.pl">joanna.wolowska@tm1.edu.pl</a>
                  </li>
                  <li>
                    <strong>Specjalista ds. finansowych</strong> (pok. 102)<br />
                    Tel. wew. 114<br />
                    <a href="mailto:monika.naruszczka@tm1.edu.pl">monika.naruszczka@tm1.edu.pl</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section">
            <h4>Dodatkowe informacje:</h4>
            <p>
              Kontakt przez ePUAP: <a href="https://epuap.gov.pl" target="_blank" rel="noopener noreferrer">https://epuap.gov.pl</a>
            </p>
            <p>
              <strong>Inspektor Ochrony Danych Osobowych:</strong><br />
              Stanisław Rudowski<br />
              <a href="mailto:srudowski.iod@dbfomokotow.pl">srudowski.iod@dbfomokotow.pl</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
