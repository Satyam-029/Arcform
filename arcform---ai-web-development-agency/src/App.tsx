/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronDown, ChevronUp, Github, Twitter, Linkedin, Sparkles, Code2, MessageSquare, Cpu, Rocket, LayoutTemplate, Terminal, Bot, Zap, Star, HelpCircle, Heart } from 'lucide-react';

const faqs = [
  {
    question: "How fast can you build a website using AI?",
    answer: "Our AI-accelerated workflow allows us to deliver high-performance, custom websites in a matter of days, rather than weeks or months."
  },
  {
    question: "Will my website look like a generic template?",
    answer: "Not at all. We use AI to speed up the development and structural phases, but every design is meticulously crafted to reflect your unique brand identity."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support packages to ensure your site remains secure, up-to-date, and optimized for peak performance."
  },
  {
    question: "Can you integrate custom APIs and third-party tools?",
    answer: "Absolutely. Our engineering team specializes in seamless integrations, ensuring your website connects perfectly with your existing software stack."
  },
  {
    question: "Is the code scalable and maintainable?",
    answer: "We pride ourselves on writing clean, modular code. Our AI tools assist in generating robust architecture that scales effortlessly as your business grows."
  }
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <div className="bg-background text-text bg-noise relative overflow-hidden">
      
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col relative">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3333331a_1px,transparent_1px),linear-gradient(to_bottom,#3333331a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Navigation */}
        <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-text text-background flex items-center justify-center rounded-sm">
              <Code2 size={20} strokeWidth={2.5} />
            </div>
            <span className="font-sans font-bold text-xl tracking-tight">Arcform</span>
          </div>

          <div className="hidden md:flex items-center gap-8 px-6 py-2 rounded-full border border-border bg-background/50 backdrop-blur-md">
            <a href="#work" className="text-sm font-medium text-text/70 hover:text-text transition-colors">Work</a>
            <a href="#process" className="text-sm font-medium text-text/70 hover:text-text transition-colors">Process</a>
            <a href="#pricing" className="text-sm font-medium text-text/70 hover:text-text transition-colors">Pricing</a>
            <a href="#contact" className="text-sm font-medium text-text/70 hover:text-text transition-colors">Contact</a>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-card hover:bg-border/50 transition-colors text-sm font-medium">
            <Sparkles size={16} />
            <span>Start Project</span>
          </button>
        </nav>

        {/* Hero Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 relative z-10 text-center mt-12 md:mt-0 pb-20">
          
          {/* Icon Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 mb-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none" />
            <Code2 size={32} className="text-text" strokeWidth={1.5} />
          </motion.div>

          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm"
          >
            <span className="text-[11px] font-semibold tracking-wider uppercase text-text/80">
              AI-Driven Efficiency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight max-w-4xl leading-tight mb-6"
          >
            Never Miss an Opportunity
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-text/60 max-w-2xl mb-10 leading-relaxed"
          >
            Capture leads, analyze trends, and centralize critical insights with our AI-powered web development solutions.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="group relative flex items-center gap-3 px-6 py-3 bg-text text-background rounded-full font-semibold text-base hover:scale-105 transition-transform duration-300">
              <span>View Our Work</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex items-center gap-8 text-text/40"
          >
            <a href="#" className="hover:text-text transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-text transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-text transition-colors"><Linkedin size={20} /></a>
          </motion.div>

        </main>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text/30 animate-bounce"
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>

      {/* Problem & Solution Section */}
      <section className="relative w-full py-32 px-6 border-t border-border/30 bg-background">
        {/* Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          
          {/* Left Column - The Problem Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-b from-[#111] to-[#050505] border border-border rounded-3xl p-10 md:p-12 flex flex-col shadow-2xl shadow-black"
          >
            <div className="mb-12">
              <div className="inline-flex items-center justify-center px-6 py-3 bg-text text-background rounded-full font-semibold text-sm">
                The Problem
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex gap-5 items-start">
                <div className="w-2 h-2 rounded-full bg-text/40 mt-2.5 shrink-0" />
                <p className="text-lg md:text-xl font-medium leading-relaxed text-text/90">Slow development cycles and constantly missed deadlines</p>
              </div>
              <div className="flex gap-5 items-start">
                <div className="w-2 h-2 rounded-full bg-text/40 mt-2.5 shrink-0" />
                <p className="text-lg md:text-xl font-medium leading-relaxed text-text/90">Exorbitant costs for custom engineering and design</p>
              </div>
              <div className="flex gap-5 items-start">
                <div className="w-2 h-2 rounded-full bg-text/40 mt-2.5 shrink-0" />
                <p className="text-lg md:text-xl font-medium leading-relaxed text-text/90">Generic templates that fail to make your brand stand out</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - The Solution Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-gradient-to-b from-[#111] to-[#050505] border border-border rounded-3xl p-10 md:p-12 flex flex-col md:items-end text-left md:text-right shadow-2xl shadow-black"
          >
            <div className="mb-12">
              <div className="inline-flex items-center justify-center px-6 py-3 bg-text text-background rounded-full font-semibold text-sm">
                The Arcform Solution
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex gap-5 items-start md:flex-row-reverse">
                <div className="w-2 h-2 rounded-full bg-text/40 mt-2.5 shrink-0" />
                <p className="text-lg md:text-xl font-medium leading-relaxed text-text/90">Launch gorgeous, high-performance websites in a matter of days</p>
              </div>
              <div className="flex gap-5 items-start md:flex-row-reverse">
                <div className="w-2 h-2 rounded-full bg-text/40 mt-2.5 shrink-0" />
                <p className="text-lg md:text-xl font-medium leading-relaxed text-text/90">Significantly reduce costs with our AI-driven efficiency</p>
              </div>
              <div className="flex gap-5 items-start md:flex-row-reverse">
                <div className="w-2 h-2 rounded-full bg-text/40 mt-2.5 shrink-0" />
                <p className="text-lg md:text-xl font-medium leading-relaxed text-text/90">Achieve pixel-perfect, unique designs without compromise</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* How We Work Section */}
      <section className="relative w-full py-32 px-6 border-t border-border/30 bg-background">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-6"
            >
              <span className="text-[11px] font-semibold tracking-wider uppercase text-text/80">
                Our Process
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl leading-tight mb-6"
            >
              From Concept to Launch in Days
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-text/60 max-w-2xl leading-relaxed"
            >
              A streamlined, AI-enhanced workflow designed to deliver exceptional results without the traditional bottlenecks.
            </motion.p>
          </div>

          {/* Process Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-b from-[#111] to-[#050505] border border-border rounded-3xl p-8 flex flex-col shadow-xl shadow-black"
            >
              <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 shadow-inner">
                <MessageSquare size={20} className="text-text" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-text">Discovery & Strategy</h3>
              <p className="text-text/60 leading-relaxed text-sm md:text-base">
                We start by understanding your brand, audience, and goals. Our AI tools help analyze market trends to formulate a winning strategy.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-b from-[#111] to-[#050505] border border-border rounded-3xl p-8 flex flex-col shadow-xl shadow-black"
            >
              <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 shadow-inner">
                <Cpu size={20} className="text-text" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-text">AI-Accelerated Build</h3>
              <p className="text-text/60 leading-relaxed text-sm md:text-base">
                Using cutting-edge AI development frameworks, we rapidly prototype and build your website, ensuring pixel-perfect design and robust performance.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-b from-[#111] to-[#050505] border border-border rounded-3xl p-8 flex flex-col shadow-xl shadow-black"
            >
              <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 shadow-inner">
                <Rocket size={20} className="text-text" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-text">Testing & Launch</h3>
              <p className="text-text/60 leading-relaxed text-sm md:text-base">
                Rigorous automated testing guarantees a flawless user experience across all devices before we deploy your site to the world.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="relative w-full py-32 px-6 border-t border-border/30 bg-background">
        <div className="max-w-6xl mx-auto flex flex-col gap-24 relative z-10">
          
          {/* Top Half: Intro & Placeholder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm w-fit">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-text/80">
                    Our Services
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                  Elevating Digital Experiences
                </h2>
                
                <p className="text-base md:text-lg text-text/60 leading-relaxed max-w-md">
                  Empowering brands with lightning-fast, AI-driven web development, stunning design, and scalable architecture that captivates and converts.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {['Web Development', 'UI/UX Design', 'AI Integration', 'Optimization'].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-md bg-[#111] border border-border text-xs font-medium text-text/80">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button className="px-6 py-3 bg-text text-background rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300">
                  Book a Free Call
                </button>
                <button className="px-6 py-3 bg-transparent border border-border text-text rounded-full font-semibold text-sm hover:bg-border/50 transition-colors duration-300">
                  See Projects
                </button>
              </div>
            </motion.div>

            {/* Right: Animation/Component Placeholder */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full aspect-[4/3] md:aspect-[16/10] rounded-3xl border border-border/50 bg-gradient-to-br from-[#111] to-[#050505] relative overflow-hidden flex items-center justify-center shadow-2xl shadow-black"
            >
              {/* Subtle grid inside placeholder */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#3333331a_1px,transparent_1px),linear-gradient(to_bottom,#3333331a_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
              <span className="text-text/20 text-sm font-mono tracking-widest uppercase relative z-10">
                [ Interactive Component Space ]
              </span>
            </motion.div>

          </div>

          {/* Bottom Half: Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-b from-[#111] to-[#050505] border border-border rounded-2xl p-8 md:p-10 flex flex-col hover:border-text/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <LayoutTemplate size={24} className="text-text" />
                <h3 className="text-xl font-semibold text-text">UI/UX Design</h3>
              </div>
              <div className="w-full h-px bg-border/50 mb-6" />
              <p className="text-text/60 leading-relaxed text-sm md:text-base">
                Crafting intuitive, user-centric interfaces that engage visitors and drive conversions. Every touchpoint is designed to reflect your brand's unique essence.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-b from-[#111] to-[#050505] border border-border rounded-2xl p-8 md:p-10 flex flex-col hover:border-text/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <Terminal size={24} className="text-text" />
                <h3 className="text-xl font-semibold text-text">Web Development</h3>
              </div>
              <div className="w-full h-px bg-border/50 mb-6" />
              <p className="text-text/60 leading-relaxed text-sm md:text-base">
                Building responsive, high-performance websites using modern frameworks and AI-assisted coding to ensure robust, scalable, and maintainable architecture.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-b from-[#111] to-[#050505] border border-border rounded-2xl p-8 md:p-10 flex flex-col hover:border-text/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <Bot size={24} className="text-text" />
                <h3 className="text-xl font-semibold text-text">AI Integration</h3>
              </div>
              <div className="w-full h-px bg-border/50 mb-6" />
              <p className="text-text/60 leading-relaxed text-sm md:text-base">
                Implementing smart features, intelligent chatbots, and automated workflows to supercharge your site's capabilities and streamline your business operations.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-b from-[#111] to-[#050505] border border-border rounded-2xl p-8 md:p-10 flex flex-col hover:border-text/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <Zap size={24} className="text-text" />
                <h3 className="text-xl font-semibold text-text">Performance Optimization</h3>
              </div>
              <div className="w-full h-px bg-border/50 mb-6" />
              <p className="text-text/60 leading-relaxed text-sm md:text-base">
                Ensuring lightning-fast load times, flawless technical SEO, and top-tier accessibility scores so your audience gets the best experience possible.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative w-full py-32 px-6 border-t border-border/30 bg-background overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-6"
            >
              <span className="text-[11px] font-semibold tracking-wider uppercase text-text/80">
                Wall of Love
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl leading-tight mb-6"
            >
              Loved by Visionaries
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-text/60 max-w-2xl leading-relaxed"
            >
              Here's what industry leaders are saying about our AI-driven development process.
            </motion.p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Testimonial 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-b from-[#111] to-[#050505] border border-border rounded-2xl p-8 flex flex-col justify-between shadow-xl shadow-black h-full min-h-[280px]"
            >
              <div>
                <p className="text-text/90 font-medium leading-relaxed mb-6">
                  "Arcform delivered our platform in record time. The AI-driven approach is highly intuitive and polished. It's everything we needed and more!"
                </p>
                <div className="flex items-center gap-1 mb-8">
                  <span className="text-sm font-semibold mr-2">5.0</span>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-text text-text" />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="https://picsum.photos/seed/alex/100/100" alt="Alex Jonas" className="w-10 h-10 rounded-full object-cover grayscale" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="text-sm font-semibold text-text">Alex Jonas</h4>
                  <p className="text-xs text-text/50">Director of Marketing, TechFlow</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-b from-[#111] to-[#050505] border border-border rounded-2xl p-8 flex flex-col justify-between shadow-xl shadow-black h-full min-h-[280px]"
            >
              <div>
                <p className="text-text/90 font-medium leading-relaxed mb-6">
                  "This is truly incredible. The speed at which they iterate and deploy has saved our engineering team countless hours."
                </p>
                <div className="flex items-center gap-1 mb-8">
                  <span className="text-sm font-semibold mr-2">5.0</span>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-text text-text" />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="https://picsum.photos/seed/sarah/100/100" alt="Sarah Chen" className="w-10 h-10 rounded-full object-cover grayscale" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="text-sm font-semibold text-text">Sarah Chen</h4>
                  <p className="text-xs text-text/50">VP of Product, Nexus</p>
                </div>
              </div>
            </motion.div>

            {/* Empty/Placeholder Block 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-b from-[#0A0A0A] to-[#050505] border border-border/50 rounded-2xl p-8 flex items-center justify-center shadow-inner h-full min-h-[280px]"
            >
              <div className="w-16 h-16 rounded-2xl border border-border/30 bg-white/[0.02] flex items-center justify-center">
                <Sparkles size={24} className="text-text/20" />
              </div>
            </motion.div>

            {/* Empty/Placeholder Block 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-b from-[#0A0A0A] to-[#050505] border border-border/50 rounded-2xl p-8 flex items-center justify-center shadow-inner h-full min-h-[280px]"
            >
              <div className="w-16 h-16 rounded-2xl border border-border/30 bg-white/[0.02] flex items-center justify-center">
                <Code2 size={24} className="text-text/20" />
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-b from-[#111] to-[#050505] border border-border rounded-2xl p-8 flex flex-col justify-between shadow-xl shadow-black h-full min-h-[280px]"
            >
              <div>
                <p className="text-text/90 font-medium leading-relaxed mb-6">
                  "Pure brilliance! The AI integration has streamlined our workflow massively. A top-notch solution that transformed our entire operation."
                </p>
                <div className="flex items-center gap-1 mb-8">
                  <span className="text-sm font-semibold mr-2">4.9</span>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i === 4 ? "fill-text/30 text-text/30" : "fill-text text-text"} />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="https://picsum.photos/seed/maggie/100/100" alt="Maggie Hue" className="w-10 h-10 rounded-full object-cover grayscale" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="text-sm font-semibold text-text">Maggie Hue</h4>
                  <p className="text-xs text-text/50">CEO, GrowthStack</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-b from-[#111] to-[#050505] border border-border rounded-2xl p-8 flex flex-col justify-between shadow-xl shadow-black h-full min-h-[280px]"
            >
              <div>
                <p className="text-text/90 font-medium leading-relaxed mb-6">
                  "Incredible design and functionality! This has exceeded our expectations. The pixel-perfect execution is exactly what our brand needed."
                </p>
                <div className="flex items-center gap-1 mb-8">
                  <span className="text-sm font-semibold mr-2">5.0</span>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-text text-text" />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="https://picsum.photos/seed/john/100/100" alt="John Robert" className="w-10 h-10 rounded-full object-cover grayscale" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="text-sm font-semibold text-text">John Robert</h4>
                  <p className="text-xs text-text/50">Founder, JO Strategy</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative w-full py-32 px-6 border-t border-border/30 bg-background">
        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-6"
            >
              <span className="text-[11px] font-semibold tracking-wider uppercase text-text/80">
                FAQ's
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl leading-tight mb-6"
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-text/60 max-w-2xl leading-relaxed"
            >
              Find quick answers to the most common support questions about our process and services.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Column - Contact Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-1 bg-gradient-to-b from-[#111] to-[#050505] border border-border rounded-3xl p-10 flex flex-col items-center text-center shadow-2xl shadow-black sticky top-32 self-start"
            >
              <div className="w-14 h-14 rounded-full border border-border bg-background flex items-center justify-center mb-6">
                <HelpCircle size={24} className="text-text" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-text">Still Have Questions?</h3>
              <p className="text-text/60 leading-relaxed text-sm mb-8">
                Still have questions? Feel free to get in touch with us today and we'll get back to you promptly.
              </p>
              <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-transparent hover:bg-text hover:text-background transition-colors duration-300 text-sm font-semibold w-full justify-center group">
                <span>Ask A Question</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>

            {/* Right Column - Accordion */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2 flex flex-col gap-4"
            >
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index} 
                    className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-text/30 bg-[#0A0A0A]' : 'border-border bg-transparent hover:border-text/20'}`}
                  >
                    <button 
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <span className="font-medium text-text/90 pr-8">{faq.question}</span>
                      <div className="shrink-0 text-text/50">
                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 text-text/60 text-sm md:text-base leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative w-full py-40 px-6 border-t border-border/30 bg-background overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Abstract Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)] blur-[60px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          
          {/* Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-text animate-pulse" />
            <span className="text-[11px] font-semibold tracking-wider uppercase text-text/80">
              Accepting New Projects
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-10"
          >
            Ready to accelerate your digital presence? Let's build your next platform at lightspeed.
          </motion.h2>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button className="px-8 py-4 bg-transparent border border-border text-text rounded-full font-semibold text-base hover:bg-text hover:text-background transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.02)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center gap-2 group">
              <span>Book a Discovery Call</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6 mt-20 text-text/50"
          >
            <a href="#" className="hover:text-text transition-colors"><Github size={20} /></a>
            <div className="w-px h-4 bg-border" />
            <a href="#" className="hover:text-text transition-colors"><Twitter size={20} /></a>
            <div className="w-px h-4 bg-border" />
            <a href="#" className="hover:text-text transition-colors"><Linkedin size={20} /></a>
          </motion.div>

        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative w-full pt-32 pb-12 px-6 border-t border-border/30 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
            
            {/* Column 1: Brand & Info */}
            <div className="lg:col-span-4 flex flex-col">
              <div className="flex items-center gap-3 text-2xl font-semibold mb-8 text-text">
                <div className="w-8 h-8 rounded-lg bg-text text-background flex items-center justify-center">
                  <Sparkles size={18} />
                </div>
                Arcform
              </div>
              <div className="w-full max-w-[200px] h-px bg-gradient-to-r from-border/40 to-transparent mb-8" />
              <p className="text-text/60 leading-relaxed text-base">
                Made remotely with <Heart size={16} className="inline-block mx-0.5 text-text fill-text" /> and<br />
                passion<br />
                <span className="text-text font-medium mt-2 inline-block">- Arcform Studio.</span>
              </p>
            </div>

            {/* Column 2: Pages */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <h4 className="text-lg font-semibold text-text">Pages</h4>
              <div className="flex flex-col gap-4">
                {['Home', 'About', 'Portfolio', 'Contact', 'FAQ'].map((link) => (
                  <a key={link} href="#" className="text-base text-text/60 hover:text-text transition-colors w-fit">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Social */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <h4 className="text-lg font-semibold text-text">Social</h4>
              <div className="flex flex-col gap-4">
                {['Twitter (X)', 'Instagram', 'Youtube', 'LinkedIn'].map((social) => (
                  <a key={social} href="#" className="text-base text-text/60 hover:text-text transition-colors w-fit">
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 4: Subscribe Form */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <h4 className="text-lg font-semibold text-text">Subscribe Form</h4>
              <form className="relative flex items-center w-full border border-border/40 rounded-full p-1.5 bg-[#050505]" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter Your Email..." 
                  className="w-full bg-transparent pl-5 pr-36 py-3 text-sm focus:outline-none placeholder:text-text/40 text-text"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-6 rounded-full bg-text text-background hover:bg-text/90 transition-colors text-sm font-semibold"
                >
                  Subscribe Us
                </button>
              </form>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border/20">
            <p className="text-sm text-text/50">
              © 2026 Arcform Design
            </p>
            <div className="flex items-center gap-4 text-sm text-text/50">
              <a href="#" className="hover:text-text transition-colors">Terms & Conditions</a>
              <div className="w-px h-3 bg-border/50" />
              <a href="#" className="hover:text-text transition-colors">Privacy Policy</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
