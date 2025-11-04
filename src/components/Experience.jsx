import React, { useEffect, useRef, useState } from "react";

const RecentWork = () => {
  const cardsRef = useRef([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    cardsRef.current.forEach((el) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      el.style.transition = "opacity .6s ease, transform .6s ease";
      observer.observe(el);
    });

    return () => {
      cardsRef.current.forEach((el) => el && observer.unobserve(el));
    };
  }, [visibleCount]);

  // 🔧 Replace these with your real projects later
  const projects = [
    {
      title: "Exploid Game",
      year: "2020",
      tag: "Mobile App",
      // swap with your image path or URL
      image: null,
    },
    {
      title: "Taskify App",
      year: "2023",
      tag: "Web Design",
      image: null,
    },
    {
      title: "Fashion Brand",
      year: "2024",
      tag: "Branding",
      image: null,
    },
    {
      title: "Leardo Ecom",
      year: "2025",
      tag: "Website Design",
      image: null,
    },
    // add more items to demo "Load More"
    {
      title: "Pulse SaaS",
      year: "2024",
      tag: "Product Design",
      image: null,
    },
    {
      title: "Nova Landing",
      year: "2025",
      tag: "Web Design",
      image: null,
    },
  ];

  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <section id="recent-work" className="recent-work">
      <div className="container">
        <h2 className="section-title">Recent Work</h2>

        <div
          className="work-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "28px",
          }}
        >
          {/* 2-column from ≥ 768px */}
          <style>{`
            @media (min-width: 768px) {
              .work-grid { grid-template-columns: 1fr 1fr; }
            }
            .work-card:hover .work-image { transform: scale(1.02); }
            .work-meta { color: #6b7280; font-size: 0.95rem; }
          `}</style>

          {visibleProjects.map((p, i) => (
            <article
              key={`${p.title}-${i}`}
              ref={(el) => (cardsRef.current[i] = el)}
              className="work-card"
              style={{ display: "grid", gap: "10px" }}
            >
              {/* Image / Placeholder */}
              <div
                className="work-media"
                style={{
                  position: "relative",
                  aspectRatio: "16 / 10",
                  overflow: "hidden",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg, #111827, #1f2937)", // dark gradient
                }}
              >
                {p.image ? (
                  <img
                    className="work-image"
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform .5s ease",
                    }}
                  />
                ) : (
                  <div
                    className="work-image"
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "grid",
                      placeItems: "center",
                      transition: "transform .5s ease",
                    }}
                  >
                    <span
                      style={{
                        color: "white",
                        opacity: 0.8,
                        fontWeight: 600,
                        letterSpacing: "0.02em",
                      }}
                    >
                      Placeholder
                    </span>
                  </div>
                )}
              </div>

              {/* Title / Year / Tag */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <h3 style={{ margin: 0, fontWeight: 600 }}>{p.title}</h3>
                <span className="work-meta">{p.year}</span>
              </div>
              <div className="work-meta">{p.tag}</div>
            </article>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < projects.length && (
          <div style={{ textAlign: "center", marginTop: "22px" }}>
            <button
              onClick={() => setVisibleCount((c) => c + 4)}
              className="load-more-btn"
              style={{
                appearance: "none",
                background: "transparent",
                border: "1.5px solid #cbd5e1",
                padding: "8px 14px",
                borderRadius: "9999px",
                fontSize: "0.95rem",
                cursor: "pointer",
              }}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentWork;
