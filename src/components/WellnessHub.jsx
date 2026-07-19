import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './WellnessHub.css';

const articles = [
  {
    id: 1,
    category: 'BREATHWORK',
    readTime: '4 min read',
    title: '5 Simple Breathwork Exercises for Midday Calm',
    excerpt: 'Relieve workday stress in minutes. Explore simple pranayama techniques like Box Breathing and Alternate Nostril Breathing (Nadi Shodhana) that you can practice right at your desk.',
    date: 'June 12, 2026',
    content: (
      <>
        <p>Modern workdays are filled with constant stimulation. Our nervous systems are frequently locked in a low-grade 'fight-or-flight' state, leading to shallow breathing, tense shoulders, and mental fatigue.</p>
        <p>Fortunately, we carry the ultimate tool for nervous system regulation with us everywhere: our breath. By consciously changing our breathing patterns, we send direct signals to our brain to switch on the parasympathetic nervous system, lowering heart rate and cortisol levels.</p>
        <p>Here are three quick exercises to try today:</p>
        <p>1. <strong>Box Breathing (4-4-4-4):</strong> Inhale for 4 seconds, hold the breath full for 4 seconds, exhale for 4 seconds, and hold empty for 4 seconds. Repeat for 4-5 cycles.</p>
        <p>2. <strong>Exhale Extension (4-8):</strong> Inhale for 4 seconds, and exhale slowly for 8 seconds. Extending the exhale is the fastest way to signal safety to the brain.</p>
        <p>3. <strong>Nadi Shodhana (Alternate Nostril):</strong> Gently close your right nostril with your thumb, inhale through the left. Close the left with your ring finger, release and exhale through the right. Inhale right, close right, exhale left. Repeat for 3 minutes.</p>
        <p>Take a moment, close your eyes, and try just five conscious rounds of box breathing. Feel the shift in your posture, your mind, and your presence.</p>
      </>
    ),
    author: 'Elena Vance',
    authorImg: '/about-founder.jpg',
    authorBio: '500hr RYT. Passionate about bringing traditional yoga philosophy into modern life.'
  },
  {
    id: 2,
    category: 'AYURVEDA',
    readTime: '6 min read',
    title: 'Understanding Your Dosha: Ayurveda 101',
    excerpt: 'Discover the sister science of yoga. Learn about Vata, Pitta, and Kapha constitution types, and how identifying your unique dosha helps you optimize your diet and yoga practice.',
    date: 'May 28, 2026',
    content: (
      <>
        <p>Ayurveda, often called the sister science of yoga, translates to 'the science of life'. According to Ayurveda, everything in the universe, including our bodies, is made up of five elements: space, air, fire, water, and earth.</p>
        <p>These elements combine to form three primary energies or doshas: Vata, Pitta, and Kapha. Understanding your dominant dosha can unlock a wealth of knowledge about your physical tendencies, emotional patterns, and how to maintain balance.</p>
        <p><strong>Vata (Space & Air):</strong> Governs movement. Vata types are typically energetic, creative, and lean, but can be prone to anxiety and dry skin when out of balance.</p>
        <p><strong>Pitta (Fire & Water):</strong> Governs metabolism. Pitta types are often driven, intelligent, and athletic, but can suffer from inflammation or irritability when imbalanced.</p>
        <p><strong>Kapha (Earth & Water):</strong> Governs structure. Kapha types are usually calm, grounded, and strong, but may struggle with lethargy or weight gain if stagnant.</p>
        <p>By understanding your unique constitution, you can tailor your yoga practice, diet, and lifestyle to stay in harmony with your true nature.</p>
      </>
    ),
    author: 'Elena Vance',
    authorImg: '/about-founder.jpg',
    authorBio: '500hr RYT. Passionate about bringing traditional yoga philosophy into modern life.'
  },
  {
    id: 3,
    category: 'ASANA ALIGNMENT',
    readTime: '5 min read',
    title: 'The Anatomy of a Sun Salutation (Surya A)',
    excerpt: 'Deconstruct the core flow sequence of Vinyasa yoga. Learn the alignment keys for Chaturanga, Upward Dog, and Downward Facing Dog to protect your joints and move safely.',
    date: 'May 10, 2026',
    content: (
      <>
        <p>Surya Namaskar A, or Sun Salutation A, is the foundational sequence of Vinyasa yoga. It builds heat, links breath with movement, and stretches the entire body. However, because it is repeated so frequently, improper alignment can lead to repetitive strain injuries.</p>
        <p>Let's break down the three most crucial components: Chaturanga Dandasana, Upward Facing Dog, and Downward Facing Dog.</p>
        <p><strong>Chaturanga Dandasana:</strong> Keep your elbows tucked closely to your ribs. Do not dip your shoulders below your elbows; this places immense strain on the rotator cuff. It's perfectly fine to drop your knees to build strength.</p>
        <p><strong>Upward Facing Dog:</strong> Press firmly through the tops of your feet to lift your thighs off the mat. Roll your shoulders back and down, keeping the neck long. Avoid crunching the lower back by engaging your core.</p>
        <p><strong>Downward Facing Dog:</strong> Focus on length in the spine rather than straight legs. Spread your fingers wide and press through the knuckles. Bend your knees if your lower back is rounding, and let your head hang heavy.</p>
        <p>Next time you flow, focus on the mechanics of each transition rather than rushing through.</p>
      </>
    ),
    author: 'Elena Vance',
    authorImg: '/about-founder.jpg',
    authorBio: '500hr RYT. Passionate about bringing traditional yoga philosophy into modern life.'
  }
];

const WellnessHub = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section className="wellness-hub">
      <div className="wellness-hub-header animate-fade-in">
        <span className="hub-badge">WELLNESS HUB</span>
        <h2 className="wellness-hub-title">Mindfulness, breath, and lifestyle guides</h2>
        <p className="wellness-hub-subtitle">
          Dive deeper into the philosophy of yoga, breathwork techniques, and ayurvedic living tips curated to expand your knowledge.
        </p>
      </div>

      <div className="hub-grid">
        {articles.map((article) => (
          <div key={article.id} className="hub-card animate-fade-in" onClick={() => setSelectedArticle(article)}>
            <div className="hub-card-meta">
              <span className="hub-card-category">{article.category}</span>
              <span className="hub-card-read">{article.readTime}</span>
            </div>
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
            <div className="hub-card-footer">
              <span className="hub-card-date">{article.date}</span>
              <span className="hub-card-link">Read Article &rarr;</span>
            </div>
          </div>
        ))}
      </div>

      {selectedArticle && createPortal(
        <div className="article-modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="article-modal-content animate-pop-in" onClick={(e) => e.stopPropagation()}>
            <button className="article-modal-close" onClick={() => setSelectedArticle(null)}>&times;</button>
            <div className="article-modal-header">
              <span className="hub-badge">{selectedArticle.category}</span>
              <h2>{selectedArticle.title}</h2>
              <div className="article-modal-meta">
                Published on {selectedArticle.date} &bull; {selectedArticle.readTime}
              </div>
            </div>
            <div className="article-modal-body">
              {selectedArticle.content}
            </div>
            <div className="article-modal-footer">
              <div className="article-author">
                <img src={selectedArticle.authorImg} alt={selectedArticle.author} />
                <div className="author-info">
                  <h4>Written by {selectedArticle.author}</h4>
                  <p>{selectedArticle.authorBio}</p>
                </div>
              </div>
              <button 
                className="btn-close-article"
                onClick={() => setSelectedArticle(null)}
              >
                Close Article
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default WellnessHub;
