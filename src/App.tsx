/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { AddProjectModal } from './components/AddProjectModal';
import { PrintSummary } from './components/PrintSummary';
import { studentProfile, initialProjects } from './data/portfolioData';
import { Project, ThemeColor } from './types';

export default function App() {
  const [themeColor, setThemeColor] = useState<ThemeColor>('amber');
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleOpenCheer = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleAddProject = (newProject: Project) => {
    setProjects((prev) => [newProject, ...prev]);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-sky-50 text-slate-900 selection:bg-yellow-300 selection:text-slate-950">
      {/* Interactive Web Portfolio (Hidden when printing) */}
      <div className="no-print flex-1 flex flex-col">
        <Navbar
          studentName={studentProfile.name}
          themeColor={themeColor}
          onOpenCheer={handleOpenCheer}
        />

        <main className="flex-1">
          <Hero
            themeColor={themeColor}
            setThemeColor={setThemeColor}
            onOpenCheer={handleOpenCheer}
            onPrint={handlePrint}
          />

          <AboutMe themeColor={themeColor} />

          <Projects
            projects={projects}
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenAddModal={() => setIsAddModalOpen(true)}
            themeColor={themeColor}
          />

          <Skills themeColor={themeColor} />

          <Contact themeColor={themeColor} onPrint={handlePrint} />
        </main>

        <Footer />

        {/* Fullscreen Interactive Project Detail Lightbox Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          themeColor={themeColor}
        />

        {/* Add / Customize Project Modal */}
        <AddProjectModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAddProject={handleAddProject}
          themeColor={themeColor}
        />
      </div>

      {/* Clean printable one-page showcase for paper / PDF */}
      <PrintSummary projects={projects} />
    </div>
  );
}
