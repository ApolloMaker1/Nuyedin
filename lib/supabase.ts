import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          title: string
          description: string
          thumbnail: string
          tech_stack: string[]
          github_url: string
          live_url: string
          featured: boolean
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          thumbnail: string
          tech_stack: string[]
          github_url: string
          live_url: string
          featured?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          thumbnail?: string
          tech_stack?: string[]
          github_url?: string
          live_url?: string
          featured?: boolean
          created_at?: string
        }
      }
      posts: {
        Row: {
          id: string
          title: string
          content: string
          slug: string
          tags: string[]
          published_at: string
          status: 'draft' | 'published'
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          slug: string
          tags: string[]
          published_at?: string
          status?: 'draft' | 'published'
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          slug?: string
          tags?: string[]
          published_at?: string
          status?: 'draft' | 'published'
          created_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          name: string
          email: string
          message: string
          status: 'new' | 'read' | 'archived'
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          message: string
          status?: 'new' | 'read' | 'archived'
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          message?: string
          status?: 'new' | 'read' | 'archived'
          created_at?: string
        }
      }
    }
  }
}