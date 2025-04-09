type BuildTuple<T, N extends number, R extends T[] = []> = R["length"] extends N
  ? R
  : BuildTuple<T, N, [...R, T]>;

type TuplePrefixes<T extends any[]> = T extends [any, ...infer Rest]
  ? T | TuplePrefixes<Rest extends any[] ? Rest : []>
  : [];

type MaxTuple<T, N extends number> = TuplePrefixes<BuildTuple<T, N>>;

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

export interface JSONRTENode {
  type: string;
  uid: string;
  _version: number;
  attrs: Record<string, any>;
  children?: JSONRTENode[];
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  src?: string;
  alt?: string;
  href?: string;
  target?: string;
  embed?: {
    type: string;
    uid: string;
    _version: number;
    attrs: Record<string, any>;
  };
}

export interface GfV1 {
  /** Version */
  _version: number;
  /** Single Line Textbox v1 */
  single_line_textbox_v1?: string;
  /** Reference */
  reference?: Page[];
  /** new multiline v2 */
  new_multiline_v2?: string;
}

/** It contains SEO related information. */
export interface Seo {
  /** Version */
  _version: number;
  /** Meta Title */
  meta_title?: string;
  /** Meta Description */
  meta_description?: string;
  /** Meta Keywords */
  keywords?: string;
  /** Enable Search Indexing */
  enable_search_indexing?: boolean;
}

export interface PageComponents {
  hero_banner: {
    /** Banner Image */
    banner_image?: File | null;
    /** Bg color */
    bg_color?: string;
    /** Banner Title */
    banner_title?: string;
    /** Banner Description */
    banner_description?: string;
    /** Call to Action */
    call_to_action?: Link;
  };
  contact_details: {
    /** Address */
    address?: string;
    /** Phone */
    phone?: string;
    /** Email */
    email?: string;
  };
  section_with_buckets: {
    /** Title H2 */
    title_h2?: string;
    /** Description */
    description?: string;
    /** Buckets */
    buckets?: {
      /** Title H3 */
      title_h3?: string;
      /** Description */
      description?: {
        type: string;
        uid: string;
        _version: number;
        attrs: Record<string, any>;
        children: JSONRTENode[];
      };
      /** Icon */
      icon?: File | null;
      /** Call to Action */
      call_to_action?: Link;
    }[];
  };
  section: {
    /** Title H2 */
    title_h2?: string;
    /** Description */
    description?: string;
    /** Call to Action */
    call_to_action?: Link;
    /** Image */
    image?: File | null;
    /** Image Alignment */
    image_alignment?: ("Left" | "Right") | null;
  };
  section_with_cards: {
    /** Cards */
    cards?: MaxTuple<
      {
        /** Title H3 */
        title_h3?: string;
        /** Description */
        description?: string;
        /** Call to Action */
        call_to_action?: Link;
      },
      3
    >;
  };
  section_with_html_code: {
    /** Title */
    title?: string;
    /** Description */
    description?: {
      type: string;
      uid: string;
      _version: number;
      attrs: Record<string, any>;
      children: JSONRTENode[];
    };
    /** HTML Code */
    html_code?: string;
    /** HTML Code Alignment */
    html_code_alignment?: ("Left" | "Right") | null;
  };
  from_blog: {
    /** Title H2 */
    title_h2?: string;
    /** Featured Blogs */
    featured_blogs?: BlogPost[];
    /** View Articles */
    view_articles?: Link;
  };
  our_team: {
    /** Title H2 */
    title_h2?: string;
    /** Description */
    description?: string;
    /** Employees */
    employees?: {
      /** Name */
      name?: string;
      /** Designation */
      designation?: string;
      /** Image */
      image?: File | null;
    }[];
  };
  widget: {
    /** Title H2 */
    title_h2?: string;
    /** Type */
    type?: ("Blog Archive" | "Related Posts") | null;
  };
}

/** Re-usable content template that can be extended to fit many use cases. Example: Landing page, Contact page, About page, etc. */
export interface Page {
  /** Version */
  _version: number;
  /** Title */
  title: string;
  /** URL */
  url?: string;
  /** Page Components */
  page_components?: PageComponents[];
  /** SEO */
  seo?: Seo;
  /** Rich Text Editor */
  rich_text_editor1?: string;
  /** JSON Rich Text Editor */
  json_rte1?: {
    type: string;
    uid: string;
    _version: number;
    attrs: Record<string, any>;
    children: JSONRTENode[];
  };
}

/** It contains the company logo, main navigation and notification bar. */
export interface Header {
  /** Version */
  _version: number;
  /** Title */
  title: string;
  /** Logo */
  logo?: File | null;
  /** Navigation Menu */
  navigation_menu?: MaxTuple<
    {
      /** Label */
      label?: string;
      /** Page Reference */
      page_reference?: Page[];
    },
    10
  >;
  /** Notification Bar */
  notification_bar?: {
    /** Announcement Text */
    announcement_text?: {
      type: string;
      uid: string;
      _version: number;
      attrs: Record<string, any>;
      children: JSONRTENode[];
    };
    /** Show Announcement? */
    show_announcement?: boolean;
  };
}

/** It contains blog authors */
export interface Author {
  /** Version */
  _version: number;
  /** Full Name */
  title: string;
  /** Picture */
  picture?: File | null;
  /** Bio */
  bio?: string;
  /** New multiline v1 */
  new_multiline_v1?: string;
  /** new multiline v2 */
  new_multiline_v2?: string;
  /** Multi Line Textbox v3 */
  multi_line_textbox_v3?: string;
  /** JSON Rich Text Editor */
  json_rte?: {
    type: string;
    uid: string;
    _version: number;
    attrs: Record<string, any>;
    children: JSONRTENode[];
  };
}

/** It contains navigation, social media links and copyright text. */
export interface Footer {
  /** Version */
  _version: number;
  /** Title */
  title: string;
  /** Logo */
  logo?: File | null;
  /** Navigation */
  navigation?: {
    /** Link */
    link?: Link[];
  };
  /** Social */
  social?: {
    /** Social Share */
    social_share?: {
      /** Link */
      link?: Link;
      /** Icon */
      icon?: File | null;
    }[];
  };
  /** Copyright */
  copyright?: {
    type: string;
    uid: string;
    _version: number;
    attrs: Record<string, any>;
    children: JSONRTENode[];
  };
}

/** It contains blog posts */
export interface BlogPost {
  /** Version */
  _version: number;
  /** Title */
  title: string;
  /** URL */
  url?: string;
  /** Author */
  author?: Author[];
  /** Date */
  date?: string | null;
  /** Featured Image */
  featured_image?: File | null;
  /** Body */
  body?: {
    type: string;
    uid: string;
    _version: number;
    attrs: Record<string, any>;
    children: JSONRTENode[];
  };
  /** Related Post */
  related_post?: BlogPost[];
  /** Is Archived? */
  is_archived?: boolean;
  /** SEO */
  seo?: Seo;
}
