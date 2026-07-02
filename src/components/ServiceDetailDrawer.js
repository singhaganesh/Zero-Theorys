import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ServiceDetailDrawer({ service, onClose, onStartProject }) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (service) {
      setActiveService(service);
      const t = setTimeout(() => setIsOpen(true), 50);
      return () => clearTimeout(t);
    } else {
      setIsOpen(false);
      const t = setTimeout(() => setActiveService(null), 300);
      return () => clearTimeout(t);
    }
  }, [service]);

  if (!mounted || !activeService) return null;

  return createPortal(
    <div className={`detail-drawer-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div 
        className={`detail-drawer-panel ${isOpen ? "open" : ""}`} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Swipe/Drag Indicator Bar */}
        <div className="mobile-drag-bar" onClick={onClose} />

        {/* Close Button */}
        <button className="detail-drawer-close" aria-label="Close panel" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="detail-drawer-content">
          {/* Abstract Theme Illustration */}
          <div className="detail-drawer-visual">
            <div className="visual-background" />
            <div className="visual-graphic">
              {activeService.icon}
            </div>
            <div className="visual-glow" />
          </div>

          {/* Title & Description */}
          <h2 className="detail-drawer-title">{activeService.title}</h2>
          <p className="detail-drawer-desc">{activeService.description}</p>

          {/* Deliverables Section */}
          <div className="detail-drawer-section">
            <h3>Key Deliverables</h3>
            <ul className="deliverables-list">
              {activeService.deliverables?.map((del, idx) => (
                <li key={idx}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="3" style={{ marginRight: "10px", flexShrink: 0, marginTop: "2px" }}>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Stack Tags */}
          <div className="detail-drawer-section">
            <h3>Technical Stack</h3>
            <div className="tech-tags">
              {activeService.tags?.map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* CTA Footer */}
          <div className="detail-drawer-footer">
            <button 
              className="btn btn-primary" 
              style={{ width: "100%", justifyContent: "center", display: "flex", alignItems: "center" }}
              onClick={() => onStartProject(activeService)}
            >
              <span>Start MVP Project</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: "8px" }}>
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
