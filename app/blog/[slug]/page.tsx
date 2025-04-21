import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params
  
  // In a real implementation, fetch the blog post data
  // For now, we'll just return a placeholder
  
  // Simulate 404 for testing
  if (slug === 'not-found') {
    notFound()
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Blog Post: {slug}</h1>
        <div className="text-gray-500 mb-8">Posted on June 15, 2023</div>
        <div className="prose max-w-none">
          <p>This is a placeholder for the blog post content. In a real implementation, this would be content fetched from a CMS or database.</p>
        </div>
      </article>
    </div>
  )
} 