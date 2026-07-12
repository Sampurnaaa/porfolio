export const profile = {
  name: "Sampurna Mandal",
  role: "ML / AI Engineer | Data Engineer",
  email: "sampurnamandal04@gmail.com",
  phones: ["+91 76040 46101", "+91 82820 44405"],
  linkedin: "https://www.linkedin.com/in/sampurna-mandal-/",
  location: "India",
  college: "IIT Kharagpur",
  company: "BlackRock",
  companyRole: "Data Engineer",
  headline: "Building production GenAI systems and enterprise data platforms.",
  summary:
    "IIT Kharagpur graduate (B.Tech in Electronics & Electrical Communication Engineering + M.Tech in Vision & Intelligent Systems) with production Data Engineering experience at BlackRock and hands-on applied AI/ML experience building GenAI, RAG, and multi-agent LLM systems at Dr. Reddy’s Laboratories. Combines enterprise-grade Kubernetes and cloud infrastructure expertise with applied AI/ML execution using Python, LangChain, AutoGen, Hugging Face, and vector databases.",
  interests: [
    "Data Scientist",
    "ML Engineer",
    "AI Engineer",
    "GenAI Engineer",
  ],
}

export const domains = [
  {
    name: "Finance",
    detail: "BlackRock · enterprise data platforms, onboarding automation, Snowflake & Milvus",
    accent: "teal",
  },
  {
    name: "Medical",
    detail: "Dr. Reddy’s · multi-modal RAG, multi-agent LLMs, pharma research workflows",
    accent: "amber",
  },
  {
    name: "ECE",
    detail: "IIT Kharagpur · Electronics & Electrical Communication Engineering foundation",
    accent: "ink",
  },
  {
    name: "AI / ML",
    detail: "GenAI, RAG, deep learning, NLP, and production model systems",
    accent: "teal",
  },
  {
    name: "Computer Vision",
    detail: "M.Tech thesis · hyperspectral networks, ConvLSTM, Vision & Intelligent Systems",
    accent: "amber",
  },
  {
    name: "Marketing Analytics",
    detail: "IIM Calcutta · attribution, pricing elasticity, customer segmentation",
    accent: "ink",
  },
]

export const skills = [
  {
    title: "Languages",
    items: ["Python", "SQL", "C++", "Go", "MATLAB"],
  },
  {
    title: "ML & Deep Learning",
    items: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "XGBoost",
      "LightGBM",
      "Hugging Face",
      "ConvLSTM",
      "ResNet",
      "Feature Engineering",
    ],
  },
  {
    title: "GenAI & LLM",
    items: [
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "AutoGen",
      "RAG",
      "Agentic AI",
      "Fine-Tuning",
      "Azure OpenAI",
      "MCP",
      "Multi-Agent Orchestration",
    ],
  },
  {
    title: "Data Engineering",
    items: [
      "Apache Airflow",
      "Snowflake",
      "Denodo",
      "FastAPI",
      "Temporal",
      "Elasticsearch",
      "Grafana",
      "Kafka",
      "Splunk",
    ],
  },
  {
    title: "Vector Databases",
    items: [
      "Milvus",
      "FAISS",
      "ChromaDB",
      "Pinecone",
      "Semantic Search",
      "Embedding Pipelines",
    ],
  },
  {
    title: "MLOps & Cloud",
    items: [
      "Kubernetes",
      "Docker",
      "ArgoCD",
      "GitOps",
      "GCP",
      "AWS",
      "MLflow",
      "OpenTelemetry",
      "CI/CD",
      "Wiz",
    ],
  },
]

export const experience = [
  {
    role: "Data Engineer",
    company: "BlackRock",
    location: "Gurgaon, India",
    period: "May 2025 – Present",
    highlights: [
      "Designed and scaled a multi-tenant client onboarding automation platform using FastAPI, achieving 91% workflow automation across enterprise tenants; drove architectural roadmap toward an MCP-based framework for 200+ enterprise clients and 5+ tenants.",
      "Deployed a production Milvus vector database cluster (Proxy, MinIO, etcd) exposed via Istio gRPC and VirtualServices with RBAC-controlled Attu UI; configured automated embedding ingestion pipelines and RAG collection setup.",
      "Managed Kubernetes-native data infrastructure for 200+ ADC enterprise clients ensuring high availability and zero-downtime operations across L3 production support and critical client go-live events.",
      "Analysed and optimised large-scale client file ingestion workflows using Grafana observability dashboards, identifying bottlenecks and improving end-to-end pipeline throughput.",
      "Re-architected Denodo integration by migrating from CSI to VSO-based Kubernetes secret management, enabling automated secret rotation and streamlined cross-environment configuration.",
      "Standardised Snowflake multi-account warehouse provisioning (primary + DR) with RBAC governance policies across production and disaster recovery environments.",
      "Remediated container image vulnerabilities using Wiz across environments, maintaining a zero-critical-CVE posture for core data services.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Dr. Reddy’s Laboratories",
    location: "Hyderabad, India",
    period: "May 2024 – Jul 2024",
    highlights: [
      "Architected and deployed a production multi-modal RAG system using LlamaIndex and vector embeddings enabling scientists to query 1,000+ heterogeneous databases (PDFs, images) for drug discovery workflows.",
      "Built a multi-agent LLM pipeline using AutoGen and GPT-4 with role-based agent orchestration, prompt chaining, and multi-step autonomous reasoning; benchmarked against GPT Researcher and GPT Engineer architectures.",
      "Processed 7,000+ PDFs and images through NLP pipelines; identified high-performing keywords outperforming the baseline by 160.63% via BERT similarity analysis, optimising email open and click-to-open rates.",
    ],
  },
  {
    role: "Research Intern",
    company: "IIM Calcutta",
    location: "Kolkata, India",
    period: "May 2023 – Jun 2023",
    highlights: [
      "Conducted quantitative marketing analysis on 100,000+ consumer records using Python; built attribution models, pricing elasticity analyses, and customer segmentation pipelines delivering measurable improvements in marketing ROI.",
    ],
  },
]

export const projects = [
  {
    title: "Adaptive Spectral-Spatial Multiscale Network",
    tag: "M.Tech Thesis · Deep Learning · Computer Vision",
    org: "IIT Kharagpur · Jan–Apr 2024",
    description:
      "Designed SeMN and SaMN modules using 1-D CNNs and PCA for spectral-spatial feature extraction on the Indian Pines hyperspectral dataset (200 bands, 145×145px). Fine-tuned ConvLSTM for spatio-temporal modelling, achieving 82.4% classification accuracy — surpassing SOTA baselines by 5% with improved small-object edge preservation across 16 land-cover classes.",
    metric: "82.4% accuracy",
  },
  {
    title: "Hospital Readmission Prediction Analytics",
    tag: "ML Classification · Clinical Data",
    org: "IoT Lab, UPES · 2023",
    description:
      "Preprocessed a 100,000-record clinical dataset with missing value imputation, feature encoding, scaling, and outlier detection. Evaluated Logistic Regression, KNN, Random Forest, and XGBoost; selected XGBoost (accuracy 0.81, F1-score 0.68) after hyperparameter tuning and full ROC-AUC benchmarking.",
    metric: "0.81 accuracy",
  },
]

export const education = {
  degree: "B.Tech + M.Tech, Dual Degree",
  school: "Indian Institute of Technology (IIT) Kharagpur",
  period: "2020 – 2025",
  details: [
    "M.Tech in Vision & Intelligent Systems",
    "B.Tech in Electronics & Electrical Communication Engineering",
  ],
  coursework: [
    "Deep Learning",
    "Reinforcement Learning",
    "Generative AI",
    "Advanced Image & Video Processing",
    "Pattern Recognition & Machine Intelligence",
    "Foundation of Learning Theory",
    "Probability & Statistics",
    "Linear Algebra",
    "Data Structures & Algorithms",
    "Financial Markets (Yale)",
  ],
}

export const achievements = [
  {
    title: "Ranked 11th / 5,818 teams",
    detail:
      "Kharagpur Data Science Hackathon 2024 — built a BTC/USDT ML trading model using quantitative feature engineering and signal generation, placing in the top 0.2% nationwide.",
  },
  {
    title: "Ranked 3rd — Raghnall’s Hiring Challenge",
    detail:
      "Awarded Pre-Placement Interview (PPI) offer for a product analytics deliverable leveraging A/B testing, heatmap analysis, and Figma wireframing.",
  },
]

export const leadership = [
  {
    title: "Co-Founder, Kharagpur Information Security Group",
    detail:
      "Co-founded one of IIT Kharagpur’s core technical societies; organised ethical hacking workshops, infosec seminars, and industry collaboration initiatives fostering cybersecurity and data privacy culture across campus.",
  },
  {
    title: "Head of PR & Marketing, Gopali Youth Welfare Society",
    detail:
      "Led a 50-member team across 16 centres in 11 states (400+ members); achieved 30% YoY visibility growth, 57% engagement increase, and managed INR 2,64,377 in programme funds with full financial accountability.",
  },
  {
    title: "IIT Kharagpur Alumni Cell",
    detail:
      "Organised the 18th Annual Alumni Meet (700+ alumni, 15 events); published Yearbooks and Pan-IIT Newsletter reaching 100,000+ alumni across global chapters.",
  },
]
