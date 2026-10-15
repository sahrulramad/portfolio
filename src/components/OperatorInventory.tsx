import React, { useState, useEffect } from 'react';
import { SKILL_MODULES, LORE_DIALOGUES, OPERATOR_PROFILE } from '../data/portfolioData';
import { SkillModule, SkillCategory } from '../types/portfolio';
import { OriginiumDiamond, TacticalBarcode, CornerAccents } from './TacticalSvg';
import {
  FileText,
  Shield,
  Zap,
  FastForward,
  ChevronRight,
  Sparkles,
  Sliders,
  CheckCircle2,
  Cpu,
  Layers,
  Database,
  Code
} from 'lucide-react';

export const OperatorInventory: React.FC = () => {
  // LORE Typewriter State
  const [currentDialogueIdx, setCurrentDialogueIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // INVENTORY State
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedModule, setSelectedModule] = useState<SkillModule>(SKILL_MODULES[0]);

  const currentDialogue = LORE_DIALOGUES[currentDialogueIdx];

  // Typewriter effect for dialogue
  useEffect(() => {
    setIsTyping(true);
    setDisplayedText('');
    const fullText = currentDialogue.paragraph;
    let charIdx = 0;

    const interval = setInterval(() => {
      if (charIdx < fullText.length) {
        setDisplayedText(prev => prev + fullText.charAt(charIdx));
        charIdx++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, [currentDialogueIdx, currentDialogue.paragraph]);

  const handleSkipTypewriter = () => {
    setDisplayedText(currentDialogue.paragraph);
    setIsTyping(false);
  };

  const handleNextDialogue = () => {
    setCurrentDialogueIdx(prev => (prev + 1) % LORE_DIALOGUES.length);
  };

  const categories = [
    { label: 'ALL', value: 'ALL' },
    { label: 'WEAPONS (Languages)', value: 'WEAPONS' },
    { label: 'ARMOR (Frameworks)', value: 'ARMOR' },
    { label: 'KEY ITEMS (Tools & OS)', value: 'KEY ITEMS' },
    { label: 'ORIGINIUM ARTS (Specialties)', value: 'ORIGINIUM ARTS' },
  ];

  const filteredModules = selectedCategory === 'ALL'
    ? SKILL_MODULES
    : SKILL_MODULES.filter(m => m.category === selectedCategory);

  return (
    <section id="operator-files" className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[rgba(124,255,1,0.25)] pb-5 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <FileText className="w-5 h-5 text-[#00F0FF]" />
            <span className="font-tactical font-black text-xs tracking-widest text-[#00F0FF] uppercase">
              OPERATOR DOSSIER // RHODES ISLAND EMR
            </span>
          </div>
          <h2 className="font-tactical font-black text-3xl sm:text-5xl text-prts-white uppercase tracking-wider">
            Terminal // Operator Files
          </h2>
          <p className="font-terminal text-xs text-prts-muted mt-1">
            NARRATIVE LOGS, PSYCHOMETRIC EVALUATION & TACTICAL MODULE INVENTORY
          </p>
        </div>
        <div className="flex items-center gap-2 font-terminal text-xs text-prts-muted bg-[#12181C] px-3 py-1.5 clip-tag border border-prts-borderSubtle">
          <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
          <span>SECURITY CLEARANCE: LEVEL 4</span>
        </div>
      </div>

      {/* SUB-SECTION 1: LORE (PRTS Visual Novel Dialogue Box) */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-2 px-2">
          <span className="text-[10px] font-terminal text-[#7CFF01] uppercase tracking-wider font-bold">
            [ SUB-ROUTINE 01 // LORE DIALOGUE ARCHIVE ]
          </span>
        </div>

        {/* Visual Novel Box */}
        <div className="relative p-6 sm:p-8 bg-[#0F1418]/90 border border-[rgba(0,240,255,0.35)] backdrop-blur-md clip-chamfer shadow-[0_0_25px_rgba(0,240,255,0.12)]">
          <CornerAccents />

          {/* Dialogue Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[rgba(0,240,255,0.2)] pb-3 mb-4 text-xs font-terminal">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 bg-[#00F0FF]/15 text-[#00F0FF] font-bold clip-tag">
                {currentDialogue.speaker}
              </span>
              <span className="text-prts-muted text-[11px] hidden sm:inline">
                {currentDialogue.chapterTag}
              </span>
            </div>
            <div className="text-prts-muted text-[11px]">
              LOG: {currentDialogueIdx + 1} / {LORE_DIALOGUES.length}
            </div>
          </div>

          {/* Dialogue Text (Typewritten) */}
          <div className="min-h-[90px] mb-6 flex items-start">
            <p className="font-body text-base sm:text-lg text-prts-white/95 leading-relaxed tracking-wide">
              {displayedText}
              {isTyping && <span className="inline-block w-2 h-5 bg-[#00F0FF] ml-1 animate-pulse" />}
            </p>
          </div>

          {/* Dialogue Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[rgba(148,163,184,0.1)] font-terminal text-xs">
            <div className="flex items-center gap-2">
              <span className="text-prts-muted text-[11px]">OPERATOR SYAHRUL RAMADHON // DOSSIER</span>
            </div>

            <div className="flex items-center gap-3">
              {isTyping && (
                <button
                  onClick={handleSkipTypewriter}
                  className="px-3 py-1.5 bg-[#12181C] border border-prts-borderSubtle hover:border-[#00F0FF] text-prts-muted hover:text-[#00F0FF] clip-tag flex items-center gap-1 transition-all uppercase"
                >
                  <FastForward className="w-3.5 h-3.5" />
                  SKIP ▶▶
                </button>
              )}
              <button
                onClick={handleNextDialogue}
                className="px-4 py-2 bg-[#00F0FF] text-[#080A0C] font-tactical font-black text-xs tracking-wider uppercase clip-tag flex items-center gap-1.5 hover:bg-[#7CFF01] transition-all transform hover:-translate-y-0.5 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              >
                <span>▸ CLICK TO CONTINUE</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SUB-SECTION 2: INVENTORY (Operator Modules & Tech Stack Grid) */}
      <div>
        <div className="flex items-center gap-2 mb-3 px-2">
          <span className="text-[10px] font-terminal text-[#7CFF01] uppercase tracking-wider font-bold">
            [ SUB-ROUTINE 02 // TACTICAL MODULE INVENTORY & STAT MODIFIERS ]
          </span>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 text-xs font-terminal tracking-wider clip-tag uppercase transition-all font-bold ${
                selectedCategory === cat.value
                  ? 'bg-[#7CFF01] text-[#080A0C] shadow-[0_0_15px_rgba(124,255,1,0.3)]'
                  : 'bg-[#0F1418] text-prts-muted border border-prts-borderSubtle hover:text-prts-white hover:border-[#7CFF01]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 2-Column Grid: Left Grid Slots + Right Tactical Inspection Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Skill Slots Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredModules.map(mod => {
              const isSelected = selectedModule.id === mod.id;

              return (
                <div
                  key={mod.id}
                  onClick={() => setSelectedModule(mod)}
                  className={`relative p-4 cursor-pointer transition-all clip-chamfer flex flex-col justify-between min-h-[110px] ${
                    isSelected
                      ? 'bg-[#161F24] border-2 border-[#7CFF01] shadow-[0_0_20px_rgba(124,255,1,0.25)]'
                      : 'bg-[#0F1418]/90 border border-[rgba(124,255,1,0.18)] hover:border-[#7CFF01]/50 hover:bg-[#12181C]'
                  }`}
                >
                  <CornerAccents />
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-terminal text-[#7CFF01] font-bold">
                      {mod.category.slice(0, 4)}
                    </span>
                    <span className="text-[#EAB308] text-[10px] font-terminal">
                      {mod.rarity}
                    </span>
                  </div>

                  <div className="my-2">
                    <h4 className="font-tactical font-black text-sm text-prts-white leading-tight">
                      {mod.name}
                    </h4>
                    <span className="text-[10px] font-terminal text-prts-muted block mt-0.5">
                      {mod.tierName}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-terminal text-prts-muted border-t border-[rgba(148,163,184,0.1)] pt-1">
                    <span className="text-[#7CFF01]">• EQUIPPED</span>
                    <span>READY</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Operator Module Inspection Panel (5 cols) */}
          <div className="lg:col-span-5 sticky top-20 bg-[#0F1418] border-2 border-[#7CFF01] p-6 clip-chamfer-lg shadow-[0_0_30px_rgba(124,255,1,0.2)]">
            <CornerAccents />

            {/* Inspection Header */}
            <div className="flex items-center justify-between border-b border-[rgba(124,255,1,0.25)] pb-3 mb-4 text-xs font-terminal">
              <span className="text-[#7CFF01] font-bold flex items-center gap-1.5 uppercase">
                <OriginiumDiamond className="w-4 h-4" />
                MODULE INSPECTION
              </span>
              <span className="px-2 py-0.5 bg-[#7CFF01]/20 text-[#7CFF01] font-bold clip-tag">
                . EQUIPPED
              </span>
            </div>

            {/* Module Name & Rarity */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#EAB308] text-sm tracking-wider font-bold">
                  {selectedModule.rarity}
                </span>
                <span className="px-1.5 py-0.2 bg-[#00F0FF]/15 text-[#00F0FF] text-[10px] font-terminal font-bold uppercase clip-tag">
                  {selectedModule.tierName}
                </span>
              </div>
              <h3 className="font-tactical font-black text-2xl text-prts-white">
                {selectedModule.name}
              </h3>
              <span className="text-xs font-terminal text-prts-muted block uppercase">
                CATEGORY: {selectedModule.category}
              </span>
            </div>

            {/* Description */}
            <p className="font-body text-xs sm:text-sm text-prts-white/90 leading-relaxed mb-6 bg-[#080A0C]/70 p-3.5 border border-prts-borderSubtle clip-chamfer">
              {selectedModule.description}
            </p>

            {/* Stat Modifiers */}
            <div className="space-y-3 mb-6">
              <span className="font-tactical font-bold text-xs text-[#7CFF01] uppercase tracking-wider block">
                TACTICAL STAT MODIFIERS:
              </span>
              <div className="space-y-2">
                {selectedModule.statModifiers.map((mod, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 bg-[#12181C] border border-prts-borderSubtle text-xs font-terminal"
                  >
                    <span className="text-prts-muted">{mod.stat}</span>
                    <span className="text-[#7CFF01] font-bold tracking-wider text-sm">
                      {mod.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Barcode */}
            <div className="pt-4 border-t border-[rgba(124,255,1,0.2)] flex items-center justify-between text-[10px] font-terminal text-prts-muted">
              <span>RHODES ISLAND R&D VERIFIED</span>
              <TacticalBarcode className="h-4 w-24 opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
