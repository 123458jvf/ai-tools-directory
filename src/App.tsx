
import "./App.css";

const categories = [
  { name: "Writing & Content", icon: "✍️", color: "#EEF2FF" },
  { name: "Image & Design", icon: "🎨", color: "#FCE7F3" },
  { name: "Video & Animation", icon: "🎬", color: "#FEF3C7" },
  { name: "Audio & Voice AI", icon: "🎙️", color: "#D1FAE5" },
  { name: "Coding & Development", icon: "💻", color: "#DBEAFE" },
  { name: "Research & Search", icon: "🔎", color: "#EDE9FE" },
  { name: "Marketing & SEO", icon: "📈", color: "#FFEDD5" },
  { name: "Productivity", icon: "⚡", color: "#F3F4F6" },
];

export default function App() {
  return (
    <main className="directory-page">
      <div className="ad-placeholder">
        <span>ADVERTISEMENT</span>
      </div>

      <section className="popular-section">
        <div className="popular-heading">
          <div className="heading-icon">🔥</div>
          <div>
            <h2>Popular Categories</h2>
            <p>Explore the best AI tools by category</p>
          </div>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <button
              className="category-card"
              key={category.name}
              onClick={() => {
                window.location.hash =
                  "category-" +
                  category.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              }}
            >
              <span
                className="category-icon"
                style={{ backgroundColor: category.color }}
              >
                {category.icon}
              </span>

              <span className="category-name">{category.name}</span>
              <span className="category-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
