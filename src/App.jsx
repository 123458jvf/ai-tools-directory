import React, { useState } from 'react';
import { toolsData } from './data/toolsData';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedTool, setSelectedTool] = useState(null);

  const categories = [
    { name: 'Image & Design', icon: '🎨' },
    { name: 'Writing & Content', icon: '📝' },
    { name: 'Video & Animation', icon: '🎬' },
    { name: 'Audio & Voice', icon: '🎙️' },
    { name: 'Productivity', icon: '⚙️' },
    { name: 'Business', icon: '📊' },
    { name: 'Developer Tools', icon: '💻' },
    { name: 'Education', icon: '🎓' },
    { name: 'Lifestyle', icon: '💜' },
    { name: 'All Categories', icon: '🎛️' },
  ];

  const filteredTools = toolsData.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app-container">
      {/* নেভিগেশন বার */}
      <nav className="navbar">
        <div className="logo-section">
          <span className="logo-icon">🤖</span>
          <div>
            <div className="logo-title">AI Tools Hub</div>
            <div className="logo-subtitle">Best AI Tools All in One Place</div>
          </div>
        </div>

        <div className="nav-links">
          <a href="#" className="active">🏠 Home</a>
          <a href="#">⚙️ AI Tools</a>
          <a href="#">🎛️ Categories</a>
          <a href="#">📝 Blog</a>
          <a href="#">ℹ️ About</a>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle">🌙</button>
          <button className="search-btn-icon">🔍</button>
          <button className="login-btn">Login / Sign Up</button>
        </div>
      </nav>

      {/* হিরো সেকশন */}
      <section className="hero-section">
        <div className="trending-badge">🔥 Trending Now</div>
        <h1>Discover the Best <span>AI Tools</span><br />for Your <span>Work & Life</span></h1>
        <p>Find 100+ powerful AI tools for image generation, writing, video, design, productivity and more. Save time. Work smarter.</p>

        <div className="hero-search">
          <input
            type="text"
            placeholder="Search AI tools... (e.g. image generator, text to speech)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-submit">Search</button>
        </div>

        <div className="popular-tags">
          <span>⚡ Popular searches:</span>
          {['ChatGPT', 'Midjourney', 'DALL·E', 'Canva AI', 'Runway'].map((tag) => (
            <button key={tag} onClick={() => setSearchTerm(tag)}>{tag}</button>
          ))}
        </div>
      </section>

      {/* ক্যাটাগরি গ্রিড */}
      <section className="categories-grid">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className={`cat-card ${selectedCategory === cat.name ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.name)}
          >
            <div className="cat-icon">{cat.icon}</div>
            <div className="cat-name">{cat.name}</div>
          </div>
        ))}
      </section>

      {/* মেইন কনটেন্ট (টুলস + সাইডবার) */}
      <div className="content-layout">
        <main className="main-tools-section">
          <div className="section-header">
            <h2>⭐ Featured AI Tools</h2>
            <p>Handpicked tools to boost your creativity and productivity</p>
          </div>

          <div className="tools-cards-grid">
            {filteredTools.map((tool) => (
              <div key={tool.id} className="hub-tool-card" onClick={() => setSelectedTool(tool)}>
                <div className="tool-card-icon">🤖</div>
                <h3>{tool.name}</h3>
                <span className="tool-category-badge">{tool.category}</span>
                <p>{tool.description}</p>
                <a href={tool.link} target="_blank" rel="noreferrer" className="visit-tool-btn">
                  Visit Tool →
                </a>
              </div>
            ))}
          </div>
        </main>

        {/* সাইডবার */}
        <aside className="sidebar">
          <div className="upgrade-card">
            <h3>👑 Upgrade to Premium</h3>
            <p>Get access to exclusive tools, advanced features and ad-free experience.</p>
            <button className="upgrade-btn">Upgrade Now →</button>
          </div>

          <div className="trending-widget">
            <h3>🔥 Trending Tools</h3>
            <ol className="trending-list">
              <li><span>1. ChatGPT</span> <span className="trend-up">↑ 12%</span></li>
              <li><span>2. Midjourney</span> <span className="trend-up">↑ 10%</span></li>
              <li><span>3. Canva AI</span> <span className="trend-up">↑ 8%</span></li>
              <li><span>4. Runway</span> <span className="trend-up">↑ 6%</span></li>
              <li><span>5. DALL·E 3</span> <span className="trend-up">↑ 5%</span></li>
            </ol>
          </div>
        </aside>
      </div>

      {/* ফুটার */}
      <footer className="footer">
        <div className="footer-brand">
          🤖 <strong>AI Tools Hub</strong> - Best AI Tools All in One Place
        </div>
        <p>© 2026 AI Tools Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}
