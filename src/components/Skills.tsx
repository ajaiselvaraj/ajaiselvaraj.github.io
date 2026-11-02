import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Globe, Smartphone, Database, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categories = [
    {
      name: "Core Systems & Backend",
      icon: Terminal,
      description: "High-concurrency backend services, asynchronous API gateways, and systems development.",
      technologies: [
        { name: "Python 3.10+", role: "FastAPI, AsyncIO, Pytest, Pydantic v2", verifiedLevel: "Advanced" },
        { name: "TypeScript & Node.js", role: "Express.js, Next.js App Router, Clean Architecture", verifiedLevel: "Advanced" },
        { name: "Dart", role: "Type-safe asynchronous client and driver programming", verifiedLevel: "Proficient" },
        { name: "C / C++ Foundations", role: "Embedded serial protocols & memory models", verifiedLevel: "Core" },
        { name: "REST & Streaming APIs", role: "FastAPI Uvicorn, SSE, WebSocket telemetry streams", verifiedLevel: "Advanced" },
        { name: "Docker & Containerization", role: "Multi-container compose, environment encapsulation", verifiedLevel: "Proficient" }
      ]
    },
    {
      name: "AI, Machine Learning & Vision",
      icon: Cpu,
      description: "Supervised classification, temporal action recognition, spatial clustering, and edge inference.",
      technologies: [
        { name: "PyTorch", role: "GRU dual-head temporal HAR, 30-frame sequence models", verifiedLevel: "Advanced" },
        { name: "Scikit-Learn", role: "RandomForest, Isolation Forest, LinearSVC, DBSCAN", verifiedLevel: "Advanced" },
        { name: "Computer Vision", role: "Ultralytics YOLOv8, OpenCV, MediaPipe kinematic tracking", verifiedLevel: "Advanced" },
        { name: "3D Kinematics & HMR", role: "SMPL-24 kinematic joint lifter & topological constraints", verifiedLevel: "Specialized" },
        { name: "Predictive Telemetry", role: "XGBoost, LSTM recurrent networks, anomaly isolation", verifiedLevel: "Advanced" },
        { name: "Anti-Hallucination Guard", role: "Deterministic regex & token AST grounding against DB", verifiedLevel: "Specialized" }
      ]
    },
    {
      name: "Geospatial, Spatial & 3D",
      icon: Globe,
      description: "Mathematical coordinate systems, planar geometry validation, and WebGL rendering.",
      technologies: [
        { name: "Shapely 2.0", role: "STRtree 2D R-Tree spatial indexing, make_valid topology repair", verifiedLevel: "Specialized" },
        { name: "PyProj Engine", role: "Geodetic transformations: WGS84 (4326) to UTM Zone 43N (32643)", verifiedLevel: "Specialized" },
        { name: "Rasterio & GDAL", role: "Windowed GeoTIFF reads, affine transforms, elevation zonal profiling", verifiedLevel: "Proficient" },
        { name: "Three.js & WebGL", role: "Substation 3D scene graph, canvas HUD sprites, emissive shaders", verifiedLevel: "Proficient" },
        { name: "Leaflet GIS", role: "WebGIS interactive bi-temporal vector overlays & triage", verifiedLevel: "Advanced" },
        { name: "5-Factor Confidence Math", role: "Weighted IoU, centroid, area, attribute & proximity algorithm", verifiedLevel: "Specialized" }
      ]
    },
    {
      name: "Frontend & Mobile",
      icon: Smartphone,
      description: "Production web applications, mobile platforms, and reactive state architectures.",
      technologies: [
        { name: "React 19 & 18", role: "Hooks, Concurrent features, custom component systems", verifiedLevel: "Advanced" },
        { name: "Flutter 3.32+", role: "Cross-platform desktop & tablet, Material 3, Riverpod 2.6+", verifiedLevel: "Advanced" },
        { name: "Tailwind CSS", role: "Liquid glass design systems, responsive layouts, monochrome styling", verifiedLevel: "Advanced" },
        { name: "Motion & Smooth Scroll", role: "Framer Motion, Lenis smooth scrolling, GSAP timelines", verifiedLevel: "Advanced" },
        { name: "Hardware Integration", role: "RS-232 serial COM scales, ESC/POS 80mm thermal receipt printing", verifiedLevel: "Specialized" },
        { name: "Document Generation", role: "Statutory Rule 46 GST PDF invoice formatting & JSON exports", verifiedLevel: "Proficient" }
      ]
    },
    {
      name: "Datastores & Knowledge Graphs",
      icon: Database,
      description: "Transactional relational schemas, graph network modeling, and offline synchronization queues.",
      technologies: [
        { name: "Drift SQLite", role: "Type-safe reactive local SQLite ORM with transactional DAOs", verifiedLevel: "Advanced" },
        { name: "Neo4j Graph Database", role: "Cypher queries, multi-hop criminal syndicate affiliation graphs", verifiedLevel: "Specialized" },
        { name: "PostgreSQL & Supabase", role: "Relational cloud stores, real-time sync listeners, PostGIS ready", verifiedLevel: "Proficient" },
        { name: "Zoho Catalyst Datastore", role: "ZCQL queries, serverless Advanced I/O integration", verifiedLevel: "Proficient" },
        { name: "Sync Queue Architectures", role: "Idempotent offline transaction journaling & SHA-256 validation", verifiedLevel: "Specialized" },
        { name: "MongoDB & Firebase", role: "Document storage and real-time telemetry log dispatch", verifiedLevel: "Proficient" }
      ]
    }
  ];

  return (
    <section id="expertise" className="py-24 sm:py-32 px-6 relative bg-light dark:bg-dark border-t border-black/5 dark:border-white/5">
      <div className="max-w-5xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono tracking-widest uppercase text-[#777777] dark:text-[#A1A1A6]">
            Section 02 // Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111] dark:text-[#FFFFFF]">
            Disciplinary depth across modern engineering domains.
          </h2>
          <p className="text-sm sm:text-base text-[#777777] dark:text-[#A1A1A6] max-w-2xl font-normal">
            Technologies and frameworks utilized and verified across production systems and national hackathon platforms.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#111111] text-white dark:bg-[#FFFFFF] dark:text-[#000000] shadow-sm'
                    : 'liquid-glass text-[#777777] dark:text-[#A1A1A6] hover:text-[#111111] dark:hover:text-[#FFFFFF]'
                }`}
              >
                <Icon size={14} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Domain Panel */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-panel liquid-glass p-6 sm:p-10 border border-black/10 dark:border-white/10 space-y-8 shadow-glass-light dark:shadow-glass-dark"
        >
          {/* Domain Intro */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/5 dark:border-white/5 pb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#111111] dark:text-[#FFFFFF] tracking-tight">
                {categories[activeCategory].name}
              </h3>
              <p className="text-xs sm:text-sm text-[#777777] dark:text-[#A1A1A6] mt-1">
                {categories[activeCategory].description}
              </p>
            </div>
            <div className="text-xs font-mono text-[#777777] dark:text-[#A1A1A6]">
              {categories[activeCategory].technologies.length} Verified Proficiencies
            </div>
          </div>

          {/* Technology Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories[activeCategory].technologies.map((tech, idx) => (
              <div
                key={idx}
                className="p-5 rounded-card bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 flex flex-col justify-between space-y-3 hover:border-black/15 dark:hover:border-white/20 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#111111] dark:text-[#FFFFFF]">
                    {tech.name}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-black/5 dark:bg-white/10 text-[#777777] dark:text-[#A1A1A6]">
                    {tech.verifiedLevel}
                  </span>
                </div>
                <p className="text-xs text-[#777777] dark:text-[#A1A1A6] leading-relaxed">
                  {tech.role}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#111111] dark:text-[#FFFFFF] pt-1 border-t border-black/5 dark:border-white/5">
                  <Check size={12} />
                  <span>Production Verified</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
