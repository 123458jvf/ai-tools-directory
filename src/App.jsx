import React, { useState } from 'react';
import { toolsData } from './data/toolsData';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [activePage, setActivePage] = useState('home'); // home, privacy, terms, about
  const [showLoginModal, setShowLoginModal] = useState(false);

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
        <div className="logo-section" onClick={() => setActivePage('home')} style={{ cursor: 'pointer' }}>
          <span className="logo-icon">🤖</span>
          <div>
            <div className="logo-title">AI Tools Hub</div>
            <div className="logo-subtitle">Best AI Tools All in One Place</div>
          </div>
        </div>

        <div className="nav-links">
          <a href="#" className={activePage === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActivePage('home'); }}>🏠 Home</a>
          <a href="#" className={activePage === 'about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActivePage('about'); }}>ℹ️ About</a>
          <a href="#" className={activePage === 'privacy' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActivePage('privacy'); }}>🔒 Privacy Policy</a>
          <a href="#" className={activePage === 'terms' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActivePage('terms'); }}>📜 Terms</a>
        </div>

        <div className="nav-actions">
          <button className="login-btn" onClick={() => setShowLoginModal(true)}>Login / Sign Up</button>
        </div>
      </nav>

      {/* পেজ কনটেন্ট */}
      {activePage === 'home' && (
        <>
          {/* হিরো সেকশন */}
          <section className="hero-section">
            <div className="trending-badge">🔥 Trending Now</div>
            <h1>Discover the Best <span>AI Tools</span><br />for Your <span>Work & Life</span></h1>
            <p>Find 100+ powerful AI tools for image generation, writing, video, design, productivity and more.</p>

            <div className="hero-search">
              <input
                type="text"
                placeholder="Search AI tools... (e.g. ChatGPT, Midjourney)"
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

          {/* AdSense Top Ad Placeholder */}
          <div className="ad-container" style={{ margin: '20px 0', textAlign: 'center', background: '#1e293b', padding: '15px', borderRadius: '10px' }}>
            <span style={{ color: '#64748b', fontSize: '0.8rem' }}>ADVERTISEMENT</span>
            {/* আপনার AdSense Code এখানে বসবে */}
          </div>

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
                {filteredTools.length > 0 ? (
                  filteredTools.map((tool) => (
                    <div key={tool.id} className="hub-tool-card">
                      <div className="tool-card-icon">🤖</div>
                      <h3>{tool.name}</h3>
                      <span className="tool-category-badge">{tool.category}</span>
                      <p>{tool.description}</p>
                      <a href={tool.link} target="_blank" rel="noreferrer" className="visit-tool-btn">
                        Visit Tool →
                      </a>
                    </div>
                  ))
                ) : (
                  <p style={{ gridColumn: '1/-1', textAlign: 'center', color: '#94a3b8' }}>No AI tools found matching your search.</p>
                )}
              </div>
            </main>

            {/* সাইডবার */}
            <aside className="sidebar">
              {/* AdSense Sidebar Ad Placeholder */}
              <div className="ad-container" style={{ marginBottom: '20px', textAlign: 'center', background: '#111827', padding: '15px', borderRadius: '12px', border: '1px solid #1f2937' }}>
                <span style={{ color: '#64748b', fontSize: '0.75rem' }}>ADVERTISEMENT</span>
              </div>

              <div className="trending-widget">
                <h3>🔥 Popular Categories</h3>
                <ul className="trending-list" style={{ listStyle: 'none', marginTop: '10px' }}>
                  <li style={{ padding: '8px 0', borderBottom: '1px solid #1f2937' }}>Writing & Content</li>
                  <li style={{ padding: '8px 0', borderBottom: '1px solid #1f2937' }}>Image & Design</li>
                  <li style={{ padding: '8px 0', borderBottom: '1px solid #1f2937' }}>Video & Animation</li>
                  <li style={{ padding: '8px 0' }}>Audio & Voice</li>
                </ul>
              </div>
            </aside>
          </div>
        </>
      )}

      {/* Privacy Policy Page */}
      {activePage === 'privacy' && (
        <div style={{ background: '#111827', padding: '30px', borderRadius: '12px', marginTop: '20px' }}>
          <h2>Privacy Policy</h2>
          <br />
          <p>Welcome to AI Tools Hub. Your privacy is important to us. This Privacy Policy document contains types of information that is collected and recorded by AI Tools Hub and how we use it.</p>
          <br />
          <h3>Log Files</h3>
          <p>AI Tools Hub follows a standard procedure of using log files. These files log visitors when they visit websites.</p>
          <br />
          <h3>Google DoubleClick DART Cookie</h3>
          <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet.</p>
        </div>
      )}

      {/* Terms & Conditions Page */}
      {activePage === 'terms' && (
        <div style={{ background: '#111827', padding: '30px', borderRadius: '12px', marginTop: '20px' }}>
          <h2>Terms & Conditions</h2>
          <br />
          <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use AI Tools Hub if you do not agree to take all of the terms and conditions stated on this page.</p>
        </div>
      )}

      {/* About Us Page */}
      {activePage === 'about' && (
        <div style={{ background: '#111827', padding: '30px', borderRadius: '12px', marginTop: '20px' }}>
          <h2>About AI Tools Hub</h2>
          <br />
          <p>AI Tools Hub is a curated directory of the best Artificial Intelligence tools available online. Our mission is to help creators, developers, and businesses find the right AI software to boost productivity and workflow.</p>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ background: '#1e293b', padding: '30px', borderRadius: '12px', maxWidth: '400px', width: '90%', textAlign: 'center', position: 'relative' }}>
            <button onClick={() => setShowLoginModal(false)} style={{ position: 'absolute', top: '10px', right: '15px', background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
            <h2 style={{ marginBottom: '10px' }}>Welcome Back</h2>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '20px' }}>Log in to access your saved AI tools</p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Logged in successfully!'); setShowLoginModal(false); }}>
              <input type="email" placeholder="Email Address" required style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#fff' }} />
              <input type="password" placeholder="Password" required style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#fff' }} />
              <button type="submit" style={{ width: '100%', padding: '12px', background: '#6366f1', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Login</button>
            </form>
          </div>
        </div>
      )}

      {/* ফুটার */}
      <footer className="footer">
        <div className="footer-brand">
          🤖 <strong>AI Tools Hub</strong> - Best AI Tools All in One Place
        </div>
        <div style={{ margin: '15px 0', display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('privacy'); }} style={{ color: '#94a3b8', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('terms'); }} style={{ color: '#94a3b8', textDecoration: 'none' }}>Terms & Conditions</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('about'); }} style={{ color: '#94a3b8', textDecoration: 'none' }}>About Us</a>
        </div>
        <p>© 2026 AI Tools Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}
