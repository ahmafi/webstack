import Author from './author';
import Image from './image';
import OG from './og';

type Post = {
  name: string;
  title: string;
  date: string;
  coverImage: Image;
  author: Author;
  excerpt: string;
  og: OG;
  content: string;
};

export default Post;
