export interface PublishDetails {
  environment: string;
  locale: string;
  time: string;
  user: string;
}

export interface File {
  uid: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
  content_type: string;
  file_size: string;
  tags: string[];
  filename: string;
  url: string;
  ACL: any[] | object;
  is_dir: boolean;
  parent_uid: string;
  _version: number;
  title: string;
  _metadata?: object;
  publish_details: PublishDetails;
}

export interface Link {
  title: string;
  href: string;
}

export interface Taxonomy {
  taxonomy_uid: string;
  max_terms?: number;
  mandatory: boolean;
  non_localizable: boolean;
}

export interface Seo {
  /** Version */
  _version: number;
  /** Title */
  title?: string;
  /** Description */
  description?: string;
  /** Canonical URL */
  canonical_url?: string;
  /** No index */
  no_index?: boolean;
  /** No follow */
  no_follow?: boolean;
}

export interface Article {
  /** Version */
  _version: number;
  /** Title */
  title: string;
  /** URL */
  url?: string;
  /** Cover image */
  cover_image: File;
  /** Summary */
  summary?: string;
  /** Taxonomy */
  taxonomies?: Taxonomy[];
  /** Content */
  content?: any;
  /** Show Related Links */
  show_related_links?: boolean;
  /** Related Links */
  related_links?: {
    /** Text */
    text?: string;
  };
  /** Show related articles */
  show_related_articles?: boolean;
  /** Related articles */
  related_articles?: {
    /** Heading */
    heading?: string;
    /** Sub heading */
    sub_heading?: string;
    /** Number of articles */
    number_of_articles?: number | null;
  };
  /** SEO */
  seo?: Seo;
}

export interface LandingPage {
  /** Version */
  _version: number;
  /** Title */
  title: string;
  /** URL */
  url?: string;
  /** SEO */
  seo?: Seo;
}
