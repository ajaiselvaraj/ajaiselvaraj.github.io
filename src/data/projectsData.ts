export interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  achievementBadge?: string;
  tags: string[];
  summary: string;
  githubUrl?: string;
  liveUrl?: string;
  problem: string;
  solution: string;
  architecture: {
    overview: string;
    layers: { title: string; description: string; tech: string }[];
    asciiFlow?: string;
  };
  techStackMatrix: {
    category: string;
    items: string[];
  }[];
  keyFeatures: string[];
  contributions: string[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  verifiedResults: {
    metric: string;
    value: string;
    description: string;
  }[];
}

export const flagshipProjects: CaseStudyData[] = [
  {
    id: "ehv-digital-twin",
    title: "EHV Digital Twin Substation",
    subtitle: "AI/ML Real-Time Telemetry & 3D Predictive Simulation Platform",
    category: "Industrial AI & Digital Twin",
    achievementBadge: "SIH 2025 Winner",
    tags: ["Three.js", "Python FastAPI", "TypeScript", "Next.js", "XGBoost", "LSTM", "MongoDB"],
    summary: "AI-driven Extra High Voltage (EHV) substation digital twin providing real-time 3D asset telemetry, fault prediction, and 60fps thermal simulation.",
    githubUrl: "https://github.com/ajaiselvaraj",
    liveUrl: "https://ajaiselvaraj.me",
    problem:
      "Extra High Voltage (400kV/220kV) electrical substations suffer from catastrophic insulation breakdowns and thermal runaway events that traditional SCADA systems detect only after damage occurs. Utility operators lack visual, real-time spatial context and predictive forecasting for individual baylines, transformers, and isolators.",
    solution:
      "Engineered an interactive 3D digital twin platform that couples live telemetry feeds with predictive ML models. Implemented progressive color-temperature transitions directly onto 3D asset geometries and created an ultra-clear HUD display with 60fps simulation recording for operator briefings.",
    architecture: {
      overview: "A decoupled three-tier microservice architecture separating spatial client rendering, telemetry routing, and GPU/CPU machine learning inference.",
      layers: [
        {
          title: "Spatial Presentation Layer",
          description: "Interactive 3D substation scene with dynamic HUD parameter overlays, GIS station mapping, and live telemetry Recharts trends.",
          tech: "Next.js App Router, Three.js, React Leaflet, Tailwind CSS",
        },
        {
          title: "API Gateway & Video Hub",
          description: "Coordinates bi-directional telemetry streaming, database persistence, and automated alert dispatch.",
          tech: "Express.js (TypeScript), MongoDB, Firebase Realtime Database",
        },
        {
          title: "Predictive ML Engine",
          description: "Executes anomaly detection, asset health degradation curves, and multi-parameter fault isolation.",
          tech: "Python FastAPI, XGBoost, LSTM Neural Networks, Isolation Forest",
        },
      ],
      asciiFlow: `[Telemetry Sensors / SCADA] ──> [Express API Gateway] ──> [FastAPI ML Service]
                                       │                        │
                                       ▼                        ▼
                          [MongoDB / Firebase]          [XGBoost & LSTM]
                                       │                        │
                                       └──────> [Three.js 3D Twin] <────┘`,
    },
    techStackMatrix: [
      { category: "3D & Visualization", items: ["Three.js", "WebGL", "React Leaflet", "Recharts"] },
      { category: "Backend & Gateway", items: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Firebase"] },
      { category: "Machine Learning", items: ["Python", "FastAPI", "XGBoost", "LSTM", "Isolation Forest", "NumPy"] },
      { category: "DevOps & Pipeline", items: ["Docker Compose", "MediaRecorder 8Mbps H.264", "Git"] },
    ],
    keyFeatures: [
      "Real-time 3D telemetry visualization of high-voltage transformers, busbars, circuit breakers, and baylines.",
      "Dynamic Head-Up Display (HUD) with progressive color-temperature lerp transitions mapped to asset health.",
      "High-bitrate (8 Mbps) video stream recording engine for incident playback and post-mortem analysis.",
      "Multi-tier predictive alert engine triggering proactive warnings prior to physical equipment trip threshold.",
    ],
    contributions: [
      "Architected the decoupled Three.js viewport with canvas-rendered HUD sprites and dynamic emissive shaders.",
      "Implemented the linear color interpolation (lerp) shader logic mapping live temperature to physical 3D meshes.",
      "Configured the unified Docker Compose environment orchestrating Next.js, Express, and FastAPI containers.",
      "Led technical presentations during the Smart India Hackathon 2025 grand finale.",
    ],
    challenges: [
      {
        challenge: "Real-time canvas texture rendering for HUD caused frame drops and severe memory overhead in WebGL loop.",
        solution: "Decoupled HUD canvas generation to an off-screen buffer with dirty-flag re-rendering only when telemetry deltas exceed 0.5% threshold.",
      },
      {
        challenge: "Instantaneous color changes during simulated surges caused jarring visual artifacts for operators.",
        solution: "Engineered a time-weighted parameter transition function applying smooth emissive scalar ramp-ups over simulation tick sequences.",
      },
    ],
    verifiedResults: [
      { metric: "Hackathon Placement", value: "1st Place", description: "Smart India Hackathon (SIH) 2025 Grand Finale Winner" },
      { metric: "Video Capture Quality", value: "8.0 Mbps", description: "Clean high-definition simulation stream recording" },
      { metric: "HUD Geometry Resolution", value: "768x384", description: "Sub-pixel sharp telemetry overlay with depthTest isolation" },
      { metric: "Asset Scope", value: "5 Classes", description: "Transformers, Busbars, Circuit Breakers, Isolators, Baylines" },
    ],
  },
  {
    id: "aazhi-civic-helpdesk",
    title: "AAZHI (SUVIDHA Civic Helpdesk)",
    subtitle: "Multimodal Voice-Driven Municipal Grievance & AI Routing Platform",
    category: "GovTech & Civic AI",
    achievementBadge: "SUVIDHA 2026 2nd Runner-up",
    tags: ["FastAPI", "React 19", "Scikit-Learn", "DBSCAN", "Gemini 2.5 Flash", "Speech AI"],
    summary: "Multimodal smart urban digital helpdesk featuring 10 AI models for voice-guided grievance intake, fraud prevention, automated department routing, and DBSCAN geographic hotspot clustering.",
    githubUrl: "https://github.com/ajaiselvaraj/AAZHI",
    liveUrl: "https://github.com/ajaiselvaraj/AAZHI",
    problem:
      "Municipal grievance helpdesks face overwhelming backlogs, misrouted tickets (over 30% wrongly assigned), rampant duplicate submissions from identical neighborhood incidents, and systemic barriers for non-tech-savvy citizens who cannot type long text forms.",
    solution:
      "Built AAZHI, a voice-first multimodal kiosk and web portal powered by a 10-model AI pipeline. Citizens speak naturally in their native language; the system transcribes, screens spam, computes duplicate similarity, classifies the department with explainability attributions, predicts resolution SLA, and clusters regional hotspots via DBSCAN.",
    architecture: {
      overview: "Citizen voice input feeds into client speech normalization, routes through a FastAPI AI microservice pipeline, and visualizes on an administrative command center.",
      layers: [
        {
          title: "Multimodal Client Kiosk",
          description: "Native Web Speech API integration, intent-driven regex routing, and accessible kiosk interface.",
          tech: "React 19, Capacitor, Web Speech API, Tailwind CSS",
        },
        {
          title: "AI Pipeline Microservice",
          description: "10 decoupled supervised, unsupervised, and generative models executing ticket verification and routing.",
          tech: "Python FastAPI, Scikit-learn, TF-IDF Vectorizer, DBSCAN, Pandas",
        },
        {
          title: "Generative Assistant & Cloud LLM",
          description: "Conversational public policy assistant answering complex administrative queries via prompt-grounded LLM.",
          tech: "Google Gemini 2.5 Flash, REST Proxy Gateway",
        },
      ],
      asciiFlow: `[Citizen Audio / Speech] ──> [Web Speech API] ──> [Intent Detection]
                                                          │
          ┌───────────────────────────────────────────────┴───────────────────────────────┐
          ▼                                                                               ▼
  [General Inquiries]                                                           [Grievance Ingestion]
          │                                                                               │
          ▼                                                                               ▼
  [Gemini 2.5 Flash LLM]                                                  [Spam Check: Isolation Forest]
                                                                                          │
                                                                                          ▼
                                                                          [Duplicate Check: TF-IDF Cosine]
                                                                                          │
                                                                                          ▼
                                                                          [Dept Classifier & SLA Regressor]
                                                                                          │
                                                                                          ▼
                                                                          [DBSCAN Hotspots & Volume Forecast]`,
    },
    techStackMatrix: [
      { category: "Frontend & Speech", items: ["React 19", "Capacitor", "Web Speech API", "Tailwind CSS"] },
      { category: "Core AI / ML", items: ["Scikit-learn", "FastAPI", "Isolation Forest", "LinearSVC", "RandomForest", "DBSCAN"] },
      { category: "NLP & Generative AI", items: ["Google Gemini 2.5 Flash", "TF-IDF Vectorizer", "Extractive Summarizer"] },
      { category: "Backend Infrastructure", items: ["Python 3.11", "Uvicorn", "PostgreSQL / SQLite", "RESTful API"] },
    ],
    keyFeatures: [
      "Voice-first multilingual complaint intake using native browser speech recognition and regex intent mapping.",
      "Automated spam and anomalous submission filtering via Scikit-learn Isolation Forest and LinearSVC.",
      "Duplicate ticket prevention through runtime TF-IDF matrix computation and Cosine Similarity thresholds.",
      "Explainable department assignment with token-level feature importance attributions.",
      "Unsupervised spatial hotspot discovery using DBSCAN geospatial coordinate clustering.",
      "Time-series 7-day municipal complaint volume forecasting using Random Forest regressors.",
    ],
    contributions: [
      "Architected the complete 10-model AI microservice pipeline within Python FastAPI.",
      "Engineered the dynamic TF-IDF duplicate detection engine with cosine distance ranking.",
      "Integrated the Gemini 2.5 Flash conversational assistant proxy with strict sanitization.",
      "Defended the project technical architecture before hackathon judges.",
    ],
    challenges: [
      {
        challenge: "Duplicate complaints had varied phrasing and colloquial terms that simple keyword matches missed.",
        solution: "Built a hybrid similarity pipeline combining TF-IDF n-gram vectorization with threshold-gated cosine similarity matrix matching against recent ward tickets.",
      },
      {
        challenge: "High latency when chaining 10 sequential ML models on limited kiosk compute.",
        solution: "Restructured pipeline execution into parallel async tasks: spam and department routing run synchronously, while DBSCAN clustering and volume forecasting update in background worker threads.",
      },
    ],
    verifiedResults: [
      { metric: "Hackathon Placement", value: "2nd Runner-up", description: "SUVIDHA 2026 National Hackathon" },
      { metric: "AI Model Suite", value: "10 Models", description: "Fully decoupled predictive, spatial, and generative engines" },
      { metric: "Forecast Window", value: "7 Days", description: "Daily municipal grievance volume prediction" },
      { metric: "Speech Integration", value: "Multimodal", description: "Zero-keyboard kiosk voice grievance intake" },
    ],
  },
  {
    id: "prema-jewellery-pos",
    title: "Prema Jewellery POS & ERP",
    subtitle: "Offline-First Retail Management, CGST Rule 46 Tax Engine & AI HUID Verification",
    category: "Enterprise Retail Systems",
    achievementBadge: "Active Production Deployment",
    tags: ["Flutter", "Dart", "Drift SQLite", "Riverpod", "Supabase", "RS-232 COM", "Gemini Vision"],
    summary: "Production-grade, offline-first jewellery showroom ERP engineered with Flutter and Drift SQLite, featuring live RS-232 weighing scale streams, dual-split GST Rule 46 compliance, and Gemini Vision HUID validation.",
    githubUrl: "https://github.com/ajaiselvaraj",
    liveUrl: "https://ajaiselvaraj.me",
    problem:
      "Retail jewellery showrooms in South India operate under strict tax compliance (Indian CGST Rule 46 requiring dual-split GST on bullion vs. crafting charges), need sub-milligram precision direct from physical scale hardware, and cannot tolerate cloud POS downtime during network blackouts.",
    solution:
      "Engineered an offline-first enterprise desktop and mobile POS platform in Flutter and Dart. Powered by Drift reactive SQLite and Riverpod clean architecture, it reads serial COM streams from physical weighing scales, handles complex old gold exchange accounting, generates GST A4/thermal receipts, and validates Hallmark Unique Identifiers (HUID) via Gemini Vision.",
    architecture: {
      overview: "Clean Architecture separating presentation, domain use cases, local reactive Drift database, hardware drivers, and an asynchronous sync queue to Supabase.",
      layers: [
        {
          title: "Material 3 Presentation",
          description: "High-contrast billing terminal with touch-optimized numpads, stone breakdown tables, and customer lookup.",
          tech: "Flutter 3.32+, Dart 3.8+, Riverpod 2.6+",
        },
        {
          title: "Domain & Tax Rules",
          description: "CGST Rule 46 dual-tax calculator (3% metal / 5% making charges), old gold fine weight ledger, and loyalty math.",
          tech: "Pure Dart Domain Services, FP principles",
        },
        {
          title: "Local Database & Hardware",
          description: "Offline-first transactional persistence, direct RS-232 COM scale polling, ESC/POS thermal printing.",
          tech: "Drift SQLite, serial_port_win32, pdf & printing",
        },
        {
          title: "Cloud Sync & AI Vision",
          description: "Conflict-free sync queue ledger replicating to Supabase; Gemini Vision for Hallmark HUID OCR extraction.",
          tech: "Supabase PostgreSQL, Gemini Vision API, GoldAPI.io",
        },
      ],
      asciiFlow: `[Physical COM Scale] ──> [RS-232 Driver] ──> [Riverpod State Manager]
                                                        │
                                                        ▼
                                             [Drift Local SQLite] ◄──> [Offline Transaction Log]
                                                        │
                                                        ▼
                                            [Sync Queue Worker] ───> [Supabase PostgreSQL Cloud]
                                                        │
                                                        ▼
                                       [ESC/POS Thermal & A4 Invoices]`,
    },
    techStackMatrix: [
      { category: "Client Framework", items: ["Flutter 3.32+", "Dart 3.8+", "Material 3", "GoRouter"] },
      { category: "State & Data", items: ["Riverpod 2.6+", "Drift (Type-Safe SQLite)", "Supabase", "PostgreSQL"] },
      { category: "Hardware & Output", items: ["RS-232 Serial Port COM", "ESC/POS Thermal Print", "PDF Invoice Engine"] },
      { category: "AI & External APIs", items: ["Gemini Vision (HUID OCR)", "Claude API", "GoldAPI.io Live Rates"] },
    ],
    keyFeatures: [
      "Hardware-level RS-232 serial COM integration reading continuous weight streams with gross, tare, and net isolation.",
      "Dual-split tax engine strictly complying with Rule 46 of the Indian CGST Act (3% bullion / 5% making charges).",
      "Offline-first resilience via Drift SQLite ensuring zero transaction disruption during network outages.",
      "Automated Old Gold purchase workflow computing net purity, wastage deductions, and fine-gold reconciliations.",
      "Gemini Vision integration for instant optical verification of engraved Hallmark Unique Identification (HUID) codes.",
      "Automated generation of GSTR-1 HSN-compliant JSON tax exports and dual-format PDF invoices (A4 & 80mm roll).",
    ],
    contributions: [
      "Engineered the entire Drift SQLite transactional database schema including bills, line items, and audit journals.",
      "Implemented the RS-232 serial communication layer with automatic parity and baud rate negotiation.",
      "Constructed the mathematical tax calculation module conforming to statutory Indian CGST/SGST regulations.",
      "Deployed and verified the application on physical Windows terminals and Android tablets in showroom environments.",
    ],
    challenges: [
      {
        challenge: "Fluctuating serial COM data streams from diverse scale brands caused erratic weight readings during fast billing.",
        solution: "Implemented an exponential moving average (EMA) jitter filter with a 200ms debounce buffer confirming scale stability before lock-in.",
      },
      {
        challenge: "Maintaining data integrity and atomic transactions across offline cash sales and subsequent cloud syncing.",
        solution: "Architected a local sync queue ledger where each transaction receives an immutable UUID and sequence number, executing idempotent UPSERTs in Supabase upon network reconnection.",
      },
    ],
    verifiedResults: [
      { metric: "Deployment Status", value: "Production", description: "Active in-store showroom terminals" },
      { metric: "Tax Compliance", value: "CGST Rule 46", description: "Verified dual-split 3% metal & 5% making charges" },
      { metric: "Data Availability", value: "100% Offline", description: "Complete billing functionality without internet access" },
      { metric: "Scale Precision", value: "0.001g", description: "Direct RS-232 serial hardware integration" },
    ],
  },
  {
    id: "orbita-experiment-intelligence",
    title: "ORBITA",
    subtitle: "Edge-First Autonomous Experiment Copilot & 3D Human Mesh Recovery Platform",
    category: "Edge AI & Aerospace Systems",
    achievementBadge: "Edge Platform Prototype",
    tags: ["NVIDIA Jetson Orin", "PyTorch GRU", "SMPL-24 HMR", "YOLOv8", "FastAPI", "React 19", "SHA-256"],
    summary: "Autonomous edge experiment copilot designed for extreme analog space habitats, combining YOLOv8, SMPL-24 3D Human Mesh Recovery, PyTorch GRU HAR, a 13-step safety FSM, and SHA-256 cryptographic logging.",
    githubUrl: "https://github.com/ajaiselvaraj",
    liveUrl: "https://ajaiselvaraj.me",
    problem:
      "Scientific procedures in isolated, confined, and extreme environments (space habitats, polar research bases) suffer from procedural deviations, missed protocol steps, and lack of real-time coaching due to multi-minute ground communication latencies.",
    solution:
      "Created ORBITA, an edge-native experiment copilot optimized for the NVIDIA Jetson Orin Nano. ORBITA processes multi-modal video feeds locally, lifts 24-joint 3D human kinematic poses (SMPL), classifies action sequences with a PyTorch GRU over 30-frame sliding windows, guides astronauts via a 13-step safety FSM, and seals experiment records with SHA-256 integrity checksums.",
    architecture: {
      overview: "Edge-first pipeline executing object detection, 3D kinematic estimation, temporal reasoning, state validation, and local SQLite persistence with ground sync queueing.",
      layers: [
        {
          title: "Edge Vision & Object Tracking",
          description: "Detects specialized experimental apparatus and instruments at 30+ FPS on edge compute.",
          tech: "OpenCV, Ultralytics YOLOv8 (fine-tuned), MediaPipe",
        },
        {
          title: "Kinematic Mesh & Temporal HAR",
          description: "Lifts 2D keypoints into 24 SMPL 3D kinematic joints; PyTorch GRU classifies action sequences over 30-frame windows.",
          tech: "SMPL-24 Kinematic Lifter, PyTorch GRU (64-dim embedding)",
        },
        {
          title: "Procedural Intelligence & Crypto Ledger",
          description: "13-step deterministic FSM enforces safety rules R01-R07; outputs canonical Section 20 JSON with SHA-256 checksums.",
          tech: "Python 3.13, FastAPI, SQLite3, SyncQueueManager",
        },
        {
          title: "Mission Control Dashboard",
          description: "Real-time edge telemetry, joint angle visualizer, protocol step inspector, and offline sync monitor.",
          tech: "React 19, TypeScript, Tailwind CSS, Recharts, Vite",
        },
      ],
      asciiFlow: `[Video Input] ──> [YOLOv8 Object Detection] ──> [SMPL-24 3D Kinematics]
                                                              │
                                                              ▼
                                              [PyTorch GRU Temporal HAR (30 Frames)]
                                                              │
                                                              ▼
                                              [13-Step Deterministic Safety FSM]
                                                              │
                                                              ▼
                                              [Canonical JSON + SHA-256 Digest]
                                                              │
                                                              ▼
                                              [SQLite3 Database] ──> [Ground Station Sync]`,
    },
    techStackMatrix: [
      { category: "Edge Vision & Kinematics", items: ["Ultralytics YOLOv8", "SMPL-24", "OpenCV", "MediaPipe"] },
      { category: "Deep Learning", items: ["PyTorch", "GRU (Dual-Head)", "NumPy", "SciPy"] },
      { category: "Backend & State Engine", items: ["Python 3.13", "FastAPI", "Deterministic FSM", "Pydantic v2"] },
      { category: "Storage & Security", items: ["SQLite3", "SHA-256 Checksum", "Idempotent Sync Queue", "JSON Canonicalizer"] },
    ],
    keyFeatures: [
      "24-joint SMPL 3D Human Mesh Recovery estimating human posture and hand-apparatus interaction in zero-g analogs.",
      "Dual-head PyTorch GRU temporal model classifying human activities over 30-frame sliding windows (64-dim embeddings).",
      "13-step deterministic safety-critical Finite State Machine enforcing laboratory protocol rules (R01 through R07).",
      "Cryptographic data integrity validation generating canonical Section 20 JSON logs with SHA-256 verification hashes.",
      "Offline sync queue with exponential backoff and idempotent Ground Station Receiver acknowledgement protocols.",
      "Comprehensive 18-step deterministic automated verification harness for end-to-end edge pipeline testing.",
    ],
    contributions: [
      "Engineered the PyTorch temporal feature fusion pipeline combining spatial bounding boxes and kinematic angles.",
      "Designed the 13-step procedural FSM with strict boundary condition checks and out-of-order execution alerts.",
      "Implemented the cryptographic SHA-256 canonical hashing utility for verifiable spaceflight scientific logs.",
      "Constructed the integrated web interface enabling simultaneous live video, joint plots, and protocol timelines.",
    ],
    challenges: [
      {
        challenge: "3D kinematic mesh recovery algorithms typically require heavy cloud GPUs, causing severe thermal throttling on Jetson edge devices.",
        solution: "Engineered an explicit fallback kinematic lifter that extracts key rotational degrees-of-freedom using optimized matrix operations, maintaining 30fps edge throughput.",
      },
      {
        challenge: "Intermittent network dropouts to mission control caused dropped packets and duplicate protocol entries.",
        solution: "Developed an idempotent SQLite sync queue manager with SHA-256 hash deduplication that safely queues records indefinitely until receiving an HTTP 200 verification ACK.",
      },
    ],
    verifiedResults: [
      { metric: "Kinematic Joints", value: "24 SMPL", description: "3D human mesh recovery representation" },
      { metric: "Temporal Window", value: "30 Frames", description: "PyTorch GRU sliding feature fusion buffer" },
      { metric: "FSM Protocol Steps", value: "13 Steps", description: "Deterministic procedural state verification" },
      { metric: "Data Integrity", value: "SHA-256", description: "Cryptographically verified Section 20 JSON audit trail" },
    ],
  },
  {
    id: "ulag-geospatial-harmonization",
    title: "ULAG",
    subtitle: "Automated Multi-Source Geospatial Harmonization & WebGIS Engine",
    category: "GeoAI & Spatial Systems",
    achievementBadge: "SIH Problem Statement 26013",
    tags: ["Shapely 2.0", "PyProj", "Rasterio", "GDAL", "FastAPI", "React 19", "Leaflet GIS"],
    summary: "Enterprise geospatial integration and intelligent harmonization engine resolving conflicts between drone surveys (ORI), elevation rasters (DSM), legacy cadastral maps, and revenue records via a 5-factor scoring model.",
    githubUrl: "https://github.com/ajaiselvaraj",
    liveUrl: "https://ajaiselvaraj.me",
    problem:
      "Urban land records are plagued by severe discrepancies between century-old cadastral revenue maps, modern drone ortho-rectified imagery (ORI), and RTK GPS surveys. Discrepant coordinate systems, boundary distortions, and attribute mismatches trigger protracted civil disputes and stall urban planning.",
    solution:
      "Engineered ULAG to automate geospatial harmonization across heterogeneous spatial sources. Utilizing Shapely 2.0 STRtree 2D R-tree spatial indexing, PyProj geodetic transformations, Rasterio windowed zonal statistics, and a mathematically grounded 5-factor confidence scoring model, ULAG pairs parcels, resolves overlaps, and presents clear visual conflict triage in a React WebGIS.",
    architecture: {
      overview: "Multi-stage geospatial pipeline converting heterogeneous cadastral, raster, and GNSS datasets into unified OGC GeoJSON with explainable match metrics.",
      layers: [
        {
          title: "Geodetic & Coordinate Normalization",
          description: "Transforms WGS84 geographic coordinates to projected UTM systems and repairs non-planar geometries.",
          tech: "PyProj (EPSG:4326 <-> EPSG:32643), Shapely 2.0 (make_valid)",
        },
        {
          title: "Spatial Indexing & 5-Factor Matcher",
          description: "Sub-millisecond candidate discovery via 2D R-Tree; calculates IoU, area ratio, centroid offset, and attributes.",
          tech: "Shapely STRtree 2D Index, NumPy Vectorized Math",
        },
        {
          title: "Raster Processing & GeoAI",
          description: "Extracts building footprints from drone ORI and samples elevation slopes from DSM GeoTIFFs.",
          tech: "Rasterio, GDAL Affine, Ultralytics YOLOv8",
        },
        {
          title: "WebGIS Decision Center",
          description: "Interactive bi-temporal vector comparison, conflict triage classification, and OGC GeoJSON export.",
          tech: "React 19, TypeScript, Leaflet GIS, Tailwind CSS v4",
        },
      ],
      asciiFlow: `[Drone ORI / DSM / Cadastral Maps] ──> [PyProj Geodetic Projection Engine]
                                                           │
                                                           ▼
                                            [Shapely 2.0 Topology Repair (make_valid)]
                                                           │
                                                           ▼
                                            [STRtree 2D R-Tree Spatial Candidate Index]
                                                           │
                                                           ▼
                                      [5-Factor Confidence Scoring Algorithm]
                 [35% IoU + 20% Area + 20% Centroid + 15% Attributes + 10% Proximity]
                                                           │
                                                           ▼
                                            [Rasterio Zonal Statistics & YOLOv8]
                                                           │
                                                           ▼
                                      [React 19 Leaflet WebGIS & Conflict Triage]`,
    },
    techStackMatrix: [
      { category: "Geospatial Backend", items: ["Python 3.10+", "FastAPI", "Shapely 2.0", "PyProj", "Rasterio", "GDAL"] },
      { category: "GeoAI & Machine Learning", items: ["Ultralytics YOLOv8", "PyTorch", "ONNX Runtime", "Scikit-learn"] },
      { category: "WebGIS Frontend", items: ["React 19", "TypeScript", "Leaflet GIS", "Tailwind CSS v4", "Vite"] },
      { category: "Testing & Validation", items: ["Pytest (16 Passing Tests)", "TestClient", "AnyIO"] },
    ],
    keyFeatures: [
      "Rigorous geodetic projection conversions between WGS84 (EPSG:4326) and UTM Zone 43N (EPSG:32643) using PyProj.",
      "High-speed 2D spatial indexing with Shapely STRtree enabling sub-millisecond candidate parcel retrieval.",
      "Zero-hardcoding 5-factor confidence scoring: 35% IoU + 20% Area + 20% Centroid + 15% Attributes + 10% Proximity.",
      "Automated topological repair of self-intersecting cadastral polygons using Shapely 2.0 make_valid.",
      "Windowed zonal elevation and terrain slope calculations extracted directly from GeoTIFF rasters with Rasterio.",
      "Audited human-in-the-loop conflict triage interface categorizing matches into Auto-Approved, Review, or Conflict.",
    ],
    contributions: [
      "Formulated and implemented the mathematical 5-factor weighted confidence scoring equation.",
      "Engineered the FastAPI geospatial query router with streaming GeoJSON serialization.",
      "Built the complete 16-test automated pytest suite validating spatial projections, boundary repair, and edge cases.",
      "Developed the interactive Leaflet split-layer map visualizer comparing cadastral vectors against drone orthomosaics.",
    ],
    challenges: [
      {
        challenge: "Legacy revenue shapefiles contained invalid self-intersecting geometries and inverted coordinate orders causing spatial query crashes.",
        solution: "Implemented an automated ingestion sanitizer utilizing Shapely make_valid and orient_polygon to ensure strict OGC Simple Features specification compliance.",
      },
      {
        challenge: "Large-scale raster datasets (multi-gigabyte GeoTIFFs) exhausted server memory during elevation profiling.",
        solution: "Switched to Rasterio windowed reads with affine coordinate transforms, computing zonal statistics only across the exact bounding box of target parcels.",
      },
    ],
    verifiedResults: [
      { metric: "Test Suite Pass", value: "16 / 16 Tests", description: "Automated pytest geospatial verification passing" },
      { metric: "Scoring Formula", value: "5-Factor Math", description: "Weighted explainable parcel confidence evaluation" },
      { metric: "Spatial Index", value: "STRtree 2D", description: "Sub-millisecond R-Tree candidate spatial search" },
      { metric: "Coordinate Systems", value: "EPSG:4326 / 32643", description: "Rigorous PyProj geodetic transformation engine" },
    ],
  },
  {
    id: "vikshana-criminal-intelligence",
    title: "VIKSHANA",
    subtitle: "AI-Powered Criminal Intelligence, Syndicate Graph & Anti-Hallucination Platform",
    category: "Law Enforcement & Graph AI",
    achievementBadge: "35/35 Hardening Pass",
    tags: ["Zoho Catalyst", "Neo4j Cypher", "RandomForest", "React 19", "Express.js", "ZCQL", "Anti-Hallucination"],
    summary: "Law enforcement intelligence platform with multi-hop Neo4j syndicate graphs, Platt-calibrated Random Forest predictions trained on 69,841 historical police dockets, and an anti-hallucination verification guard.",
    githubUrl: "https://github.com/ajaiselvaraj",
    liveUrl: "https://ajaiselvaraj.me",
    problem:
      "Detectives investigating organized crime syndicates struggle to synthesize massive, fragmented police dockets (FIRs, arrest records, chargesheets, vehicle registries). LLMs introduced into policing pose dangerous risks of factual hallucinations, inventing non-existent criminal records or misquoting penal codes.",
    solution:
      "Architected VIKSHANA on Zoho Catalyst serverless infrastructure with Neo4j graph databases. Deployed VIKSHANA 3.0 Foresight (a Platt-calibrated Random Forest model evaluated across 69,841 Karnataka Police dockets) and engineered a deterministic HallucinationGuardService that intercepts generative outputs to verify case IDs, dates, and penal code sections against raw datastores.",
    architecture: {
      overview: "Serverless microservice architecture combining relational Catalyst Datastore (ZCQL), Neo4j knowledge graphs, and predictive ML pipelines.",
      layers: [
        {
          title: "Investigation Command Center",
          description: "Force-directed syndicate graphs, temporal FIR timelines, geographic incident heatmaps, bilingual UI.",
          tech: "React 19, React Force Graph 2D, XYFlow, Leaflet, Tailwind CSS",
        },
        {
          title: "Serverless Function & Multi-Agent Hub",
          description: "Coordinates RelationshipAgent, ReportAgent, CopilotService, and Sentinel case-triage engine.",
          tech: "Zoho Catalyst Advanced I/O, Node.js, Express.js",
        },
        {
          title: "Knowledge Graph & Relational Store",
          description: "Traverses multi-hop criminal affiliations and stores 44 relational docket tables with offline in-memory fallback.",
          tech: "Neo4j (Cypher), Catalyst Datastore (ZCQL), datastoreClient.js",
        },
        {
          title: "Foresight ML & Anti-Hallucination Guard",
          description: "Platt-calibrated case outcome predictions; deterministic interceptor verifying claims against raw records.",
          tech: "Python Scikit-learn, RandomForest (37MB), HallucinationGuardService",
        },
      ],
      asciiFlow: `[Police Dockets: 69,841 Records] ──> [Catalyst ZCQL Datastore] ──> [Neo4j Graph Database]
                                                 │                             │
                                                 ▼                             ▼
                              [Foresight 3.0 ML Pipeline]            [Multi-Hop Syndicate Graph]
                                                 │                             │
                                                 └──────────────┬──────────────┘
                                                                ▼
                                                [HallucinationGuardService]
                                                                │
                                                                ▼
                                             [React 19 Command Center Dashboard]`,
    },
    techStackMatrix: [
      { category: "Cloud & Infrastructure", items: ["Zoho Catalyst", "Node.js Serverless", "Express.js", "ZCQL SQL"] },
      { category: "Graph Analytics", items: ["Neo4j Community / AuraDB", "Cypher Queries", "React Force Graph 2D", "XYFlow"] },
      { category: "Machine Learning & NLP", items: ["Scikit-learn", "RandomForest (37MB)", "Platt Calibration", "QuickML GLM", "Gemini"] },
      { category: "Frontend Interface", items: ["React 19", "Leaflet Maps", "Recharts", "Bilingual i18n (EN/KN)"] },
    ],
    keyFeatures: [
      "Multi-hop criminal syndicate network graph mapping accused affiliations, co-arrest links, and gang hierarchy in Neo4j.",
      "VIKSHANA Sentinel autonomous case-triage engine (26/26 automated end-to-end tests passing).",
      "VIKSHANA 3.0 Foresight: Platt-calibrated Random Forest model evaluated across 69,841 real Karnataka Police dockets.",
      "Deterministic HallucinationGuardService intercepting LLM summaries to prevent factual hallucination of names or penal codes.",
      "Automated Court-Ready Briefing Generator assembling timeline chronologies, witness testimonies, and forensic logs.",
      "Bilingual interface fully localized for English and Kannada law enforcement field operations.",
    ],
    contributions: [
      "Engineered the RelationshipAgent graph query generator converting complex docket joins into Cypher graph traversals.",
      "Implemented the HallucinationGuardService regex and symbol validation pipeline preventing factual hallucinations.",
      "Resolved all 5 legacy suite defects, achieving 100% test pass rates across master hardening and adversarial test suites.",
      "Structured the complete academic evidence dossier and architectural report.",
    ],
    challenges: [
      {
        challenge: "LLMs frequently hallucinated non-existent FIR numbers and penal code sections when summarizing lengthy investigative records.",
        solution: "Engineered HallucinationGuardService to perform strict AST token matching against the underlying ZCQL datastore; any ungrounded case identifier is immediately intercepted and downgraded to UNAVAILABLE.",
      },
      {
        challenge: "Large-scale cross-case relationship queries caused exponential graph traversal delays on deep syndicate webs.",
        solution: "Optimized Cypher traversals with bounded depth limits (max 3 hops) and indexed active arrest records, ensuring sub-second response times.",
      },
    ],
    verifiedResults: [
      { metric: "Hardening Suite", value: "35 / 35 Tests", description: "100% test pass rate on master hardening test suite" },
      { metric: "Sentinel Triage", value: "26 / 26 Tests", description: "100% pass on autonomous case triage engine" },
      { metric: "Adversarial Defense", value: "16 / 16 Tests", description: "100% pass on security and offline fallback suite" },
      { metric: "Evaluated Records", value: "69,841 Dockets", description: "Karnataka Police dataset evaluation" },
    ],
  },
];
