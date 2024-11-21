import Post from "../post/post";
import "./news.css";

function News() {
  const newsItems = [
    {
      title: "Wydarzenie Szkolne",
      content: "Doroczny festiwal szkolny już w przyszłym tygodniu!",
      date: "2024-01-15"
    },
    {
      title: "Osiągnięcie Akademickie",
      content: "Nasi uczniowie wygrali regionalny konkurs matematyczny",
      date: "2024-01-14"
    },
    {
      title: "Ważne Ogłoszenie",
      content: "Spotkanie rodzic-nauczyciel zaplanowane na piątek",
      date: "2024-01-13"
    },  ];

  return (
    <div className="news">
      <h2>Aktualności</h2>
      {newsItems.map((item, index) => (
        <Post key={index} title={item.title} content={item.content} date={item.date} />
      ))}
    </div>
  );
}

export default News;