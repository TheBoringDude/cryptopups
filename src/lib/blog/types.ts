interface BlogDataProps {
  isExists: boolean;
  data?: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    content: string;
  };
}

export type { BlogDataProps };
