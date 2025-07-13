'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, Code, School} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const timeline = [
  {
    year: '2017 – 2020',
    title: 'High School',
    company: 'İsmet Alkan Anadolu Lisesi',
    location: 'Yüksekova / Hakkari',
    description:
      'Completed a well-rounded education with a focus on science, mathematics, and foreign languages as part of the Anadolu Lisesi curriculum.',
    icon: <School className="h-4 w-4" />,
  },
  {
    year: '2020 – 2025',
    title: 'Computer Engineering',
    company: 'Republic of Turkey – Kütahya Dumlupınar University',
    location: 'Kütahya, TR',
    description:
      'Studied core areas of computer science and engineering while gaining hands-on experience in software development and cybersecurity.',
    icon: <Award className="h-4 w-4" />,
  },
  {
    year: 'Jan 2025 – Feb 2025',
    title: 'Flutter Developer Intern',
    company: 'Piton Technology',
    location: 'Eskişehir, TR',
    description:
      'Worked on mobile app development using Flutter. Gained experience in Riverpod state management, ScreenUtil, and Clean Architecture.',
    icon: <Code className="h-4 w-4" />,
  },
  {
    year: '2025 – Present',
    title: 'LearnWise App Development',
    company: 'TÜBİTAK',
    location: 'Kütahya, TR',
    description:
      'Developed the mobile interface of the LearnWise educational platform using Flutter and designed its backend architecture with GoLang and microservices.',
    icon: <Award className="h-4 w-4" />,
  },
]


const skills = [
  'Flutter', 'Go', 'Python', 'TypeScript', 'React', 'Next.js',
  'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Tailwind CSS', 'Framer Motion'
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a software developer passionate about building mobile applications with Flutter and backend systems using Go.
            I also explore cybersecurity through practical projects focused on network security and vulnerability testing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8">Experience & Education</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-primary/20 last:border-l-0"
                >
                  <div className="absolute -left-2.5 top-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-background rounded-full" />
                  </div>
                  
                  <Card className="ml-4">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        {item.icon}
                        <span className="text-sm font-medium text-primary">{item.year}</span>
                      </div>
                      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <span className="font-medium">{item.company}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {item.location}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">What I Do</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <h5 className="font-medium">Frontend Development</h5>
                      <p className="text-sm text-muted-foreground">
                        Creating responsive, accessible interfaces using Flutter and modern UI frameworks.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <h5 className="font-medium">Backend Development</h5>
                      <p className="text-sm text-muted-foreground">
                         Developing scalable, secure backend services using Go and REST APIs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <h5 className="font-medium">UI/UX Design</h5>
                      <p className="text-sm text-muted-foreground">
                         Designing clean and intuitive user journeys backed by design principles.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}