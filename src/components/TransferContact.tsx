import React, { useState } from 'react';
import { OPERATOR_PROFILE } from '../data/portfolioData';
import { OriginiumDiamond, TacticalBarcode, CornerAccents, GithubIcon } from './TacticalSvg';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Globe,
  FileDown,
  ArrowUp,
  CheckCircle,
  Radio
} from 'lucide-react';

export const TransferContact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmitSuccess, setTransmitSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTransmitting(true);

    const subject = encodeURIComponent(`[PRTS COMM] Operation Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `OPERATOR NAME: ${formState.name}\n` +
      `RETURN FREQUENCY (EMAIL): ${formState.email}\n\n` +
      `TRANSMISSION PAYLOAD:\n${formState.message}\n\n` +
      `---\nTransmitted via Rhodes Island EMR Terminal (syahrulram49@gmail.com)`
    );

    const mailUrl = `mailto:${OPERATOR_PROFILE.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsTransmitting(false);
      setTransmitSuccess(true);
      window.location.href = mailUrl;
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setTransmitSuccess(false), 8000);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(OPERATOR_PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[rgba(124,255,1,0.25)] pb-5 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Radio className="w-5 h-5 text-[#7CFF01] animate-pulse" />
            <span className="font-tactical font-black text-xs tracking-widest text-[#7CFF01] uppercase">
              [ PRTS COMM CHANNEL — OPEN // TRANSFER AREA ]
            </span>
          </div>
          <h2 className="font-tactical font-black text-3xl sm:text-5xl text-prts-white uppercase tracking-wider">
            Transfer Area
          </h2>
          <p className="font-terminal text-xs text-prts-muted mt-1">
            TRANSMIT ENCRYPTED PROJECT OFFERS, COLLABORATION SIGNALS & DIRECT MESSAGES
          </p>
        </div>
        <div className="flex items-center gap-2 font-terminal text-xs text-prts-muted bg-[#12181C] px-3 py-1.5 clip-tag border border-prts-borderSubtle">
          <span className="w-2 h-2 rounded-full bg-[#7CFF01] animate-ping" />
          <span>FREQUENCY: SECURE COMM CHANNEL</span>
        </div>
      </div>

      {/* 2-Column Grid: Contact Information & Encrypted Transmission Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left Column: Direct Info & Social Channels (5 cols) */}
        <div className="lg:col-span-5 bg-[#0F1418] border border-[rgba(124,255,1,0.3)] p-6 sm:p-8 clip-chamfer-lg shadow-xl">
          <CornerAccents />
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[rgba(124,255,1,0.2)]">
            <OriginiumDiamond className="w-6 h-6" />
            <span className="font-tactical font-bold text-sm text-[#7CFF01] uppercase tracking-wider">
              OPERATOR COMM ENDPOINTS
            </span>
          </div>

          <div className="space-y-4 mb-8">
            {/* Email */}
            <div className="flex items-start gap-4 p-3 bg-[#12181C] border border-prts-borderSubtle clip-tag">
              <Mail className="w-5 h-5 text-[#7CFF01] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-terminal text-prts-muted uppercase block">EMAIL CHANNEL</span>
                <a
                  href={`mailto:${OPERATOR_PROFILE.email}`}
                  className="font-tactical font-bold text-sm sm:text-base text-prts-white hover:text-[#7CFF01] transition-colors"
                >
                  {OPERATOR_PROFILE.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-3 bg-[#12181C] border border-prts-borderSubtle clip-tag">
              <Phone className="w-5 h-5 text-[#7CFF01] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-terminal text-prts-muted uppercase block">DIRECT FREQUENCY</span>
                <a
                  href={`tel:${OPERATOR_PROFILE.phone.replace(/\s/g, '')}`}
                  className="font-tactical font-bold text-sm sm:text-base text-prts-white hover:text-[#7CFF01] transition-colors"
                >
                  {OPERATOR_PROFILE.phone}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 p-3 bg-[#12181C] border border-prts-borderSubtle clip-tag">
              <MapPin className="w-5 h-5 text-[#7CFF01] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-terminal text-prts-muted uppercase block">SECTOR DEPLOYMENT</span>
                <span className="font-tactical font-bold text-sm sm:text-base text-prts-white">
                  {OPERATOR_PROFILE.location}
                </span>
              </div>
            </div>
          </div>

          {/* Social Channels Buttons */}
          <div className="space-y-3">
            <span className="text-xs font-terminal text-prts-muted uppercase tracking-wider block">
              EXTERNAL SECURE CHANNELS:
            </span>
            <div className="flex flex-wrap gap-3">
              <a
                href={OPERATOR_PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#12181C] border border-[#7CFF01]/40 text-prts-white hover:text-[#7CFF01] hover:border-[#7CFF01] font-tactical font-bold text-xs uppercase flex items-center gap-2 clip-tag transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                GITHUB PROFILE
              </a>
              <a
                href="Syahrul-Ramadhon-CV.pdf"
                download
                className="px-4 py-2.5 bg-[#7CFF01]/10 border border-[#7CFF01]/40 text-[#7CFF01] hover:bg-[#7CFF01] hover:text-[#080A0C] font-tactical font-bold text-xs uppercase flex items-center gap-2 clip-tag transition-all"
              >
                <FileDown className="w-4 h-4" />
                CV DOCUMENT (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Encrypted PRTS Transmission Form (7 cols) */}
        <div className="lg:col-span-7 bg-[#0F1418] border-2 border-[rgba(124,255,1,0.35)] p-6 sm:p-8 clip-chamfer-lg shadow-2xl relative">
          <CornerAccents />

          <div className="flex items-center justify-between border-b border-[rgba(124,255,1,0.2)] pb-3 mb-6">
            <span className="font-tactical font-black text-xs text-[#7CFF01] tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7CFF01] animate-ping" />
              COMPOSE_TRANSMISSION_ // ENCRYPTED PRTS DATA
            </span>
            <TacticalBarcode className="h-4 w-24 opacity-80" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Operator Name */}
            <div>
              <label className="block text-xs font-terminal text-[#7CFF01] uppercase tracking-wider mb-2">
                OPERATOR_NAME // SENDER IDENTIFIER
              </label>
              <div className={`relative border transition-all clip-tag ${focusedField === 'name' ? 'border-[#7CFF01] shadow-[0_0_15px_rgba(124,255,1,0.3)]' : 'border-prts-borderSubtle'}`}>
                <input
                  type="text"
                  required
                  placeholder="Enter your name or organization..."
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-[#12181C] px-4 py-3 text-xs sm:text-sm font-terminal text-prts-white outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-terminal text-[#7CFF01] uppercase tracking-wider mb-2">
                RETURN_FREQUENCY (EMAIL) // RESPONSE ROUTE
              </label>
              <div className={`relative border transition-all clip-tag ${focusedField === 'email' ? 'border-[#7CFF01] shadow-[0_0_15px_rgba(124,255,1,0.3)]' : 'border-prts-borderSubtle'}`}>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formState.email}
                  onChange={e => setFormState({ ...formState, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-[#12181C] px-4 py-3 text-xs sm:text-sm font-terminal text-prts-white outline-none"
                />
              </div>
            </div>

            {/* Message Payload */}
            <div>
              <label className="block text-xs font-terminal text-[#7CFF01] uppercase tracking-wider mb-2">
                TRANSMISSION_PAYLOAD // DIRECT MESSAGE OR PROJECT DETAILS
              </label>
              <div className={`relative border transition-all clip-tag ${focusedField === 'message' ? 'border-[#7CFF01] shadow-[0_0_15px_rgba(124,255,1,0.3)]' : 'border-prts-borderSubtle'}`}>
                <textarea
                  required
                  rows={5}
                  placeholder="State project scope, data challenge, or recruitment inquiry..."
                  value={formState.message}
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-[#12181C] px-4 py-3 text-xs sm:text-sm font-terminal text-prts-white outline-none resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <span className="text-[10px] font-terminal text-prts-muted">
                AUTOMATIC CRYPTOGRAPHIC ROUTING TO SYAHRULRAM49@GMAIL.COM
              </span>
              <button
                type="submit"
                disabled={isTransmitting}
                className="px-6 py-3.5 bg-[#7CFF01] text-[#080A0C] font-tactical font-black text-sm tracking-wider uppercase flex items-center gap-2 clip-chamfer hover:bg-[#4ADE80] transition-all transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(124,255,1,0.35)] disabled:opacity-50"
              >
                {isTransmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#080A0C] border-t-transparent rounded-full animate-spin" />
                    TRANSMITTING SIGNAL...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    [ TRANSMIT DATA ]
                  </>
                )}
              </button>
            </div>

            {transmitSuccess && (
              <div className="p-3 bg-[#7CFF01]/15 border border-[#7CFF01] text-[#7CFF01] font-terminal text-xs flex items-center gap-2 clip-tag animate-fadeIn">
                <CheckCircle className="w-4 h-4" />
                TRANSMISSION DISPATCHED TO RHODES ISLAND TERMINAL. OPERATOR HAS RECEIVED YOUR PACKET.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Warp to PRTS Terminal Top Button & Footer Credits */}
      <div className="pt-8 border-t border-[rgba(124,255,1,0.2)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-terminal text-prts-muted">
        <div>
          <span>© 2026 {OPERATOR_PROFILE.name} · Magelang, Central Java, Indonesia</span>
          <span className="block text-[10px] text-prts-muted/70 mt-0.5">
            PRTS TACTICAL ARCHITECTURE // ARKNIGHTS EP.17 CRITICAL PHASE TRANSITION DESIGN SYSTEM
          </span>
        </div>

        <button
          onClick={scrollToTop}
          className="px-4 py-2 bg-[#12181C] border border-[#7CFF01]/30 hover:border-[#7CFF01] text-[#7CFF01] font-tactical font-bold text-xs uppercase flex items-center gap-2 clip-tag transition-all"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          &gt;&gt;&gt; WARP TO PRTS TERMINAL TOP &lt;&lt;&lt;
        </button>
      </div>
    </footer>
  );
};
