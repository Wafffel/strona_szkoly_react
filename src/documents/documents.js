import "./documents.css";

function Documents() {
  const sampleDocuments = [
    {
      id: 1,
      title: "Statut Szkoły",
      description: "Podstawowy dokument regulujący działalność szkoły",
      downloadUrl: "#",
    },
    {
      id: 2,
      title: "Regulamin Uczniowski",
      description: "Zasady obowiązujące uczniów w szkole",
      downloadUrl: "#",
    },
    {
      id: 3,
      title: "Plan Lekcji",
      description: "Aktualny plan zajęć na rok szkolny 2023/2024",
      downloadUrl: "#",
    },
    {
      id: 4,
      title: "Kalendarz Roku Szkolnego",
      description: "Harmonogram wydarzeń i dni wolnych",
      downloadUrl: "#",
    },
    {
      id: 5,
      title: "Procedury Bezpieczeństwa",
      description: "Zasady bezpieczeństwa obowiązujące w szkole",
      downloadUrl: "#",
    },
    {
      id: 6,
      title: "Regulamin Biblioteki",
      description: "Zasady korzystania z biblioteki szkolnej",
      downloadUrl: "#",
    },
    {
        id: 7,
        title: "Regulamin Sportowy",
        description: "Zasady obowiązujące w zakresie sportu w szkole",
        downloadUrl: "#",
    },
    {
      id: 8,
      title: "Regulamin Pracowniczy",
      description: "Zasady obowiązujące w zakresie pracy w szkole",
      downloadUrl: "#",
    },
    {
      id: 9,
      title: "Regulamin Administracyjny",
      description: "Zasady obowiązujące w zakresie administracyjnym",
      downloadUrl: "#",
    },
    {
      id: 10,
      title: "Regulamin Kuchni",
      description: "Zasady obowiązujące w zakresie kuchni szkolnej",
      downloadUrl: "#",
    },
  ];

  return (
    <div className="documents">
      <h2>Dokumenty</h2>
      <div className="documents-container">
        {sampleDocuments.map((doc) => (
          <div key={doc.id} className="document-item">
            <h3>{doc.title}</h3>
            <p>{doc.description}</p>
            <a href={doc.downloadUrl} className="download-link">Pobierz dokument</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Documents;
