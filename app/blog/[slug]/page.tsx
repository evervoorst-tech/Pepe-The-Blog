import { getAllPosts, getPostBySlug } from "@/lib/posts";
import PostContent from "@/components/blog/PostContent";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />
      <div style={{ flex: 1, padding: "12px", maxWidth: 800, margin: "0 auto", width: "100%" }}>
        <div style={{ marginBottom: "8px" }}>
          <Link href="/" style={{ fontSize: "12px" }}>
            &laquo; back to the swamp
          </Link>
        </div>
        <PostContent post={post} />
      </div>
      <SiteFooter />
    </div>
  );
}
