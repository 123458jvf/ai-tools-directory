import React, { useState } from 'react';
import { toolsData } from './data/toolsData';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTool, setSelectedTool] = useState(null);

  // ক্যাটাগরি ফিল্টারিং
  const categories = ['All', 'Text & Chat', 'Image Generator', 'Video Generator', 'Audio & Voice'];

  // সার্চ ও ফিল্টার লজিক
  const filteredTools = toolsData.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      {/* হেডার */}
      <header className="header">
        <h1>🤖 AI Tools Directory</h1>
        <p>আপনার প্রয়োজনীয় সেরা AI টুল খুঁজে নিন এক জায়গায়</p>
      </header>

      {/* বিস্তারিত পেজ (পপআপ/ডিটেইল ভিউ) */}
      {selectedTool ? (
        <div className="detail-view">
          <button className="back-btn" onClick={() => setSelectedTool(null)}>
            ← ফিরে যান
          </button>
          <h2>{selectedTool.name}</h2>
          <span className="badge">{selectedTool.category}</span>
          <p className="full-desc">{selectedTool.fullDescription}</p>
          <a href={selectedTool.link} target="_blank" rel="noreferrer" className="visit-btn">
            অফিশিয়াল ওয়েবসাইট ভিজিট করুন 🚀
          </a>
        </div>
      ) : (
        <>
          {/* সার্চ ও ফিল্টার সেকশন */}
          <div className="controls">
            <input
              type="text"
              placeholder="AI টুল খুঁজুন (যেমন: ChatGPT, Midjourney)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />

            <div className="category-list">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`cat-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* টুলের তালিকা (Grid) */}
          <div className="tools-grid">
            {filteredTools.length > 0 ? (
              filteredTools.map((tool) => (
                <div key={tool.id} className="tool-card" onClick={() => setSelectedTool(tool)}>
                  <div className="card-header">
                    <h3>{tool.name}</h3>
                    <span className="pricing-badge">{tool.badge}</span>
                  </div>
                  <p className="category-tag">{tool.category}</p>
                  <p className="desc">{tool.description}</p>
                  <button className="details-btn">বিস্তারিত দেখুন →</button>
                </div>
              ))
            ) : (
              <p className="no-result">কোনো AI টুল পাওয়া যায়নি!</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
