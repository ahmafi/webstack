import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import Post from '../../interfaces/post';

const postsDir = join(process.cwd(), 'data', 'posts');

function getPostNames() {
  return readdirSync(postsDir).map((postFileName) =>
    postFileName.replace('.md', '')
  );
}

export function getPostByName(name: string) {
  const fullPath = join(postsDir, `${name}.md`);
  const fileString = readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileString);
  const post: Post = {
    name,
    content,
    title: data.title,
    author: data.author,
    date: data.date,
    coverImage: data.coverImage,
    excerpt: data.excerpt,
    og: data.og,
  };
  return post;
}

export function getAllPosts() {
  const postNames = getPostNames();
  const posts = postNames
    .map((postName) => getPostByName(postName))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
