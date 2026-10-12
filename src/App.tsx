
<section className="popular-categories">
  <div className="popular-header">
    <span className="popular-fire">🔥</span>
    <div>
      <h2>Popular Categories</h2>
      <p>Explore the best AI tools by category</p>
    </div>
  </div>

  <div className="category-grid">
    {[
      { name: "Writing & Content", icon: "✍️" },
      { name: "Image & Design", icon: "🎨" },
      { name: "Video & Animation", icon: "🎬" },
      { name: "Audio & Voice AI", icon: "🎙️" },
    ].map((category) => (
      <button
        className="category-card"
        key={category.name}
        onClick={() => {
          const search = document.querySelector<HTMLInputElement>(
            'input[type="search"]'
          );
          if (search) {
            search.value = category.name;
            search.dispatchEvent(
              new Event("input", { bubbles: true })
            );
          }
        }}
      >
        <span className="category-icon">{category.icon}</span>
        <span className="category-name">{category.name}</span>
        <span className="category-arrow">→</span>
      </button>
    ))}
  </div>
</section>
