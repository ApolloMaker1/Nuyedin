'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const blogPosts = [
  {
      id: 1,
    title: 'How I Built an AI-Powered Education App (LearnWise)',
    excerpt: 'A deep dive into how I combined Flutter, GoLang, and LangChain to create an AI-based education platform with PDF analysis and flashcard generation.',
    publishedAt: '2025-03-15',
    readTime: '7 min read',
    tags: ['Flutter', 'GoLang', 'AI', 'Education'],
    slug: 'building-learnwise-ai-app'
  },
  {
      id: 2,
    title: 'Getting Started with Penetration Testing on Your Home Network',
    excerpt: 'Beginner-friendly guide to setting up a virtual lab and using tools like Bettercap and Nmap to test network vulnerabilities — all legally and safely.',
    publishedAt: '2025-04-02',
    readTime: '6 min read',
    tags: ['Cybersecurity', 'Pentesting', 'Nmap'],
    slug: 'home-pentesting-lab-guide'
  },
  {
      id: 3,
    title: 'Why I Chose GoLang for My Backend Services',
    excerpt: 'Explaining the performance, simplicity, and concurrency benefits that make Go the perfect backend tool for my microservices architecture.',
    publishedAt: '2025-04-21',
    readTime: '5 min read',
    tags: ['GoLang', 'Backend', 'Microservices'],
    slug: 'why-golang-backend'
  }
  
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thoughts, tutorials, and insights about web development, technology, and the digital world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="ghost" className="group p-0">
                    <a href={`/blog/${post.slug}`}></a>
                    Read More
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-2"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg">
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}