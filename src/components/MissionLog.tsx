import React, { useState } from 'react';
import { OPERATION_LOGS, OPERATOR_PROFILE } from '../data/portfolioData';
import { OperationLogItem } from '../types/portfolio';
import { OriginiumDiamond, TacticalBarcode, CornerAccents } from './TacticalSvg';
import {
  ClipboardList,
  GraduationCap,
  Award,
  Briefcase,
  ChevronDown,
  CheckCircle2,
  Shield,
  Zap,
  Sparkles
} from 'lucide-react';

export const MissionLog: React.FC = () => {
  const [expandedCode, setExpandedCode] = useState<string | null>('OP-EDU-01');

  const toggleExpand = (code: string) => {
    setExpandedCode(prev => (prev === code ? null : code));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'EDUCATION':
        return <GraduationCap className="w-4 h-4 text-[#7CFF01]" />;
      case 'CERTIFICATION':
        return <Award className="w-4 h-4 text-[#EAB308]" />;
      case 'EXPERIENCE':
        return <Briefcase className="w-4 h-4 text-[#00F0FF]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#FF0055]" />;
    }
  };

  return (
    <section id="mission-log" className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[rgba(124,255,1,0.25)] pb-5 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <ClipboardList className="w-5 h-5 text-[#EAB308]" />
            <span className="font-tactical font-black text-xs tracking-widest text-[#EAB308] uppercase">
              MISSION MANIFEST // ARKNIGHTS EPISODE 17 VOYAGE
            </span>
          </div>
          <h2 className="font-tactical font-black text-3xl sm:text-5xl text-prts-white uppercase tracking-wider">
            List of Items Required
          </h2>
          <p className="font-terminal text-xs text-prts-muted mt-1">
            ACADEMIC OPERATIONS, CERTIFICATION MASTERIES & FIELD EXPERIENCE LOG
          </p>
        </div>
        <div className="flex items-center gap-2 font-terminal text-xs text-prts-muted bg-[#12181C] px-3 py-1.5 clip-tag border border-prts-borderSubtle">
          <span className="w-2 h-2 rounded-full bg-[#EAB308] animate-ping" />
          <span>ALL OPERATIONS COMPLETED</span>
        </div>
      </div>

      {/* 2-Column Arknights Mission Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Operator Identity Card (4 cols) */}
        <div className="lg:col-span-4 bg-[#0F1418] border-2 border-[#7CFF01] p-6 clip-chamfer-lg shadow-[0_0_30px_rgba(124,255,1,0.15)] sticky top-20">
          <CornerAccents />

          {/* Card Top */}
          <div className="flex items-center justify-between border-b border-[rgba(124,255,1,0.25)] pb-3 mb-5">
            <span className="font-tactical font-black text-xs text-[#7CFF01] tracking-widest uppercase">
              RHODES ISLAND // OPERATOR CARD
            </span>
            <TacticalBarcode className="h-4 w-20 opacity-80" />
          </div>

          {/* Avatar Picture with Chamfered Frame */}
          <div className="relative w-44 h-44 mx-auto mb-6 clip-chamfer border-2 border-[#7CFF01] overflow-hidden bg-[#12181C] shadow-[0_0_20px_rgba(124,255,1,0.3)]">
            <img
              src="https://avatars.githubusercontent.com/u/121705382?v=4"
              alt="Operator Syahrul Ramadhon"
              className="w-full h-full object-cover filter contrast-105"
              onError={e => {
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Overlay Gradient Scanline */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080A0C] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-2 left-2 right-2 flex justify-between text-[10px] font-terminal text-[#7CFF01] font-bold">
              <span>{OPERATOR_PROFILE.codename}</span>
              <span>CONFIRMED</span>
            </div>
          </div>

          {/* Operator Meta Details */}
          <div className="text-center mb-6">
            <h3 className="font-tactical font-black text-2xl text-prts-white uppercase">
              {OPERATOR_PROFILE.name}
            </h3>
            <span className="font-terminal text-xs text-[#7CFF01] font-bold block mt-1">
              {OPERATOR_PROFILE.classType} // {OPERATOR_PROFILE.subClass}
            </span>
          </div>

          {/* Status Metrics Box */}
          <div className="space-y-2.5 p-3.5 bg-[#080A0C]/80 border border-prts-borderSubtle text-xs font-terminal clip-tag mb-4">
            <div className="flex items-center justify-between">
              <span className="text-prts-muted">TRUST COEFFICIENT:</span>
              <span className="text-[#00F0FF] font-bold">{OPERATOR_PROFILE.trust}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-prts-muted">SANITY RATIO:</span>
              <span className="text-[#7CFF01] font-bold">{OPERATOR_PROFILE.sanity}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-prts-muted">MISSION EXP GAINED:</span>
              <span className="text-[#EAB308] font-bold">3840+ EXP [CLEARED]</span>
            </div>
          </div>

          <div className="text-[10px] font-terminal text-prts-muted text-center">
            RHODES ISLAND EMR DEPT. · BATTLE LOG 2022 - 2026
          </div>
        </div>

        {/* Right Column: Operation Log Rows (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          {OPERATION_LOGS.map(op => {
            const isExpanded = expandedCode === op.code;

            return (
              <div
                key={op.code}
                className={`bg-[#0F1418]/90 border transition-all clip-chamfer ${
                  isExpanded
                    ? 'border-[#7CFF01] shadow-[0_0_20px_rgba(124,255,1,0.15)] bg-[#12181C]'
                    : 'border-[rgba(124,255,1,0.2)] hover:border-[#7CFF01]/60'
                }`}
              >
                <CornerAccents />

                {/* Operation Row Header (Clickable to expand) */}
                <div
                  onClick={() => toggleExpand(op.code)}
                  className="p-5 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-[#12181C] border border-[rgba(124,255,1,0.3)] flex items-center justify-center flex-shrink-0">
                      {getCategoryIcon(op.category)}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-[#7CFF01]/10 text-[#7CFF01] font-tactical font-black text-xs clip-tag">
                          {op.code}
                        </span>
                        <span className="text-[10px] font-terminal text-[#EAB308] uppercase font-bold">
                          {op.type}
                        </span>
                        <span className="text-prts-muted text-[11px] font-terminal">
                          · {op.period}
                        </span>
                      </div>
                      <h4 className="font-tactical font-black text-lg text-prts-white">
                        {op.title}
                      </h4>
                      <span className="text-xs font-terminal text-prts-muted block">
                        {op.institution}
                      </span>
                    </div>
                  </div>

                  {/* Progress & Expansion indicator */}
                  <div className="flex items-center gap-4 self-end sm:self-center">
                    <div className="text-right">
                      <span className="px-2 py-0.5 bg-[#7CFF01]/20 border border-[#7CFF01]/40 text-[#7CFF01] font-terminal text-[10px] font-bold block clip-tag">
                        {op.progress}
                      </span>
                      <span className="text-[11px] font-terminal text-[#00F0FF] block mt-0.5 font-bold">
                        {op.scoreOrAward}
                      </span>
                    </div>
                    <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[#7CFF01]' : 'text-prts-muted'}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Expanded Operation Details */}
                {isExpanded && (
                  <div className="p-5 pt-0 border-t border-[rgba(124,255,1,0.15)] mt-2 space-y-4 animate-fadeIn">
                    <div className="text-xs font-terminal text-prts-muted uppercase tracking-wider flex items-center gap-2">
                      <span className="text-[#7CFF01]">›</span>
                      <span>OPERATIONAL DEPLOYMENT OUTCOMES</span>
                    </div>

                    <ul className="space-y-2 text-xs font-body text-prts-white/90">
                      {op.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-[#080A0C]/60 p-3 border border-prts-borderSubtle">
                          <CheckCircle2 className="w-4 h-4 text-[#7CFF01] flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Rewards & Acquired Skills */}
                    <div className="pt-2">
                      <span className="text-[10px] font-terminal text-prts-muted uppercase tracking-wider block mb-2">
                        MISSION CLEAR REWARDS & GAINED CREDENTIALS:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {op.rewards.map((r, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-[#161F24] border border-[#7CFF01]/30 text-xs font-terminal text-[#7CFF01] font-semibold clip-tag"
                          >
                            + {r}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
