export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: "map" | "target" | "layers" | "mountain" | "draft";
  metric: string;
  outcome: string;
  image: string;
  detailTitle: string;
  detailDescription: string;
  bullets: string[];
};

export type Advantage = {
  title: string;
  description: string;
};

export type Stat = {
  value: string;
  label: string;
  description: string;
};

export type TrustItem = {
  title: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  tag: string;
  result: string;
  deliverable: string;
  status: string;
  image: string;
};

export type ShowcaseItem = {
  title: string;
  description: string;
  image: string;
};

export type WorkItem = {
  id?: string;
  title: string;
  description: string;
  image_url: string;
  created_at?: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ContactChannel = {
  label: string;
  value: string;
  href?: string;
};

export type Post = {
  title: string;
  description: string;
  date: string;
  href: string;
};

export type OrderFormValues = {
  name: string;
  phone: string;
  service: string;
  address: string;
  note: string;
};
