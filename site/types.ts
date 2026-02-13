export interface PostImage {
  url: string;
  caption: string;
}

export type Category = 'Intro' | 'All' | 'Practice' | 'Setup' | 'Tips' | 'Q&A';

export interface Post {
  id: string;
  title: string;
  date: string;
  location: string;
  category: Category;

  /** One-sentence thesis / summary */
  viewpoint: string;

  /** Main markdown content */
  content: string;

  /** Optional images for the right column carousel */
  images: PostImage[];

  author: string;
  authorAvatar: string;

  takeaway?: string;
  tradeoff?: string;
  reflection?: string;

  links?: { title: string; url: string }[];

  /** Q&A page model */
  qaItems?: { topic: string; questions: string[] }[];

  /** Home page expandable blocks */
  characteristics?: { label: string; description: string }[];

  downloadableTemplate?: {
    title: string;
    filename: string;
    content: string;
  };
}

export interface SidebarProps {
  posts: Post[];
  selectedPostId: string;
  onSelectPost: (post: Post) => void;
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
  isOpen: boolean;
  onClose: () => void;
}

export interface ImageModalProps {
  imageUrl: string | null;
  onClose: () => void;
}
