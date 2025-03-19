
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IdeaGenerator from '@/components/IdeaGenerator';
import { motion } from 'framer-motion';
import { Cpu, Code, LineChart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-12">
        <section className="mb-24">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto staggered-fade-in">
            <motion.div 
              className="mb-8 inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Learn by Building
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-medium mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Transform your skills with perfect practice projects
            </motion.h1>
            
            <motion.p 
              className="text-lg text-slate-600 mb-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Find the ideal project to enhance your portfolio, learn new technologies,
              and grow as a developer - all tailored to your skill level.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium mb-2">Learn by Doing</h3>
                <p className="text-sm text-slate-600">
                  Practical projects based on real-world scenarios to build meaningful skills.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-4">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium mb-2">Build Your Portfolio</h3>
                <p className="text-sm text-slate-600">
                  Create impressive projects that demonstrate your abilities to potential employers.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 bg-violet-100 text-violet-700 rounded-xl flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium mb-2">Track Progress</h3>
                <p className="text-sm text-slate-600">
                  Challenge yourself with increasingly complex projects as your skills grow.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        
        <section>
          <IdeaGenerator />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
