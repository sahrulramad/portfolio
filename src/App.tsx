import React, { useState, useEffect } from 'react';
import { ProjectDossier } from './types/portfolio';
import { IntroCinematic } from './components/IntroCinematic';
import { MainHubView } from './components/MainHubView';
import { MemoriesMapView, BranchCategory } from './components/MemoriesMapView';
import { BranchDrawer } from './components/BranchDrawer';
import {
  ProfileModal,
  SkillsModal,
  ClinicModal,
  TransferModal,
  AllProjectsModal,
} from './components/CleanModals';
import { ProjectDetailModal } from './components/ProjectDetailModal';

type ActiveScreen = 'intro' | 'main' | 'memories';
type ActiveModal = 'profile' | 'skills' | 'clinic' | 'transfer' | 'all_projects' | null;

export const App: React.FC = () => {
  // Check localStorage for intro seen (Ponytail principle: respect user time)
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>(() => {
    try {
      return localStorage.getItem('prts_intro_seen') === 'true' ? 'main' : 'intro';
    } catch {
      return 'main';
    }
  });

  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [selectedBranch, setSelectedBranch] = useState<BranchCategory | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectDossier | null>(null);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedProject) setSelectedProject(null);
        else if (selectedBranch) setSelectedBranch(null);
        else if (activeModal) setActiveModal(null);
        else if (activeScreen === 'memories') setActiveScreen('main');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, selectedBranch, activeModal, activeScreen]);

  const handleIntroComplete = () => {
    try {
      localStorage.setItem('prts_intro_seen', 'true');
    } catch {}
    setActiveScreen('main');
  };

  const handleReplayIntro = () => {
    setActiveScreen('intro');
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#050706] text-[#F1F5F9] font-body selection:bg-[#b8f500] selection:text-[#050706]">
      {/* 1. Tampilan 1 & 2: Intro Cinematic (Gambar 1 & 2) */}
      {activeScreen === 'intro' && (
        <IntroCinematic onComplete={handleIntroComplete} />
      )}

      {/* 2. Tampilan 3: Main Hub Menu (Gambar 3 & 4) */}
      {activeScreen === 'main' && (
        <MainHubView
          onOpenMemories={() => setActiveScreen('memories')}
          onOpenProfile={() => setActiveModal('profile')}
          onOpenSkills={() => setActiveModal('skills')}
          onOpenClinic={() => setActiveModal('clinic')}
          onOpenTransfer={() => setActiveModal('transfer')}
          onReplayIntro={handleReplayIntro}
        />
      )}

      {/* 3. Tampilan 4: Memories View / Project & Skill Map (Gambar 5) */}
      {activeScreen === 'memories' && (
        <MemoriesMapView
          onBack={() => setActiveScreen('main')}
          onSelectBranch={(branch) => setSelectedBranch(branch)}
          onOpenAllProjects={() => setActiveModal('all_projects')}
        />
      )}

      {/* 4. Branch Projects Drawer (When a branch is clicked on Memories View) */}
      {selectedBranch && (
        <BranchDrawer
          branch={selectedBranch}
          onClose={() => setSelectedBranch(null)}
          onSelectProject={(project) => setSelectedProject(project)}
        />
      )}

      {/* 5. Clean Slide-over Modals */}
      {activeModal === 'profile' && (
        <ProfileModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === 'skills' && (
        <SkillsModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === 'clinic' && (
        <ClinicModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === 'transfer' && (
        <TransferModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === 'all_projects' && (
        <AllProjectsModal
          onClose={() => setActiveModal(null)}
          onSelectProject={(project) => setSelectedProject(project)}
        />
      )}

      {/* 6. Full Project Detail Modal (Dossier Inspection) */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default App;
