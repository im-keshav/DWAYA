export interface ProjectStats {
  drawCalls: string;
  particles: string;
  latency: string;
  shaders: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  deliverables: string[];
  impact: string;
  description: string;
  image: string;
  stats: ProjectStats;
  liveUrl?: string;
}

export interface Capability {
  code: string;
  title: string;
  desc: string;
}

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  stack: string[];
  badge: string;
}

export type TopologyType =
  | "torusknot"
  | "icosahedron"
  | "dodecahedron"
  | "octahedron"
  | "ring";

export type CursorMode =
  | "default"
  | "view"
  | "magnetic"
  | "drag"
  | "link";
