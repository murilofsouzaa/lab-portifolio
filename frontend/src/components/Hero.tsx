import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import profilePhoto from '../assets/_.jpeg';
import type { ProfileData } from '../types';
import type { Translations } from '../data/translations';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { soundManager } from '../utils/soundEffects';

interface HeroProps {
  profile: ProfileData;
  t: Translations['hero'];
}

export const Hero: React.FC<HeroProps> = ({ profile, t }) => {
  const heroRef = useRef<HTMLElement>(null);
  useScrollReveal(heroRef);

  return (
    <section
      ref={heroRef}
      className="py-10 sm:py-16 pb-12 sm:pb-20 grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10 sm:gap-14 items-center"
    >
      {/* Coluna Esquerda: Texto Principal */}
      <div>
        {/* Tagline de Topo */}
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span
            className="sketchy inline-block px-3.5 py-1.5 font-mono text-[0.72rem] tracking-wider uppercase font-bold"
            style={{
              backgroundColor: profile.theme.paper2,
              color: profile.theme.pencil,
              border: `1.5px solid ${profile.theme.ink}`,
            }}
          >
            {profile.tag}
          </span>
          <span
            className="font-mono text-[0.72rem] px-2.5 py-1 rounded-full flex items-center gap-1.5"
            style={{
              backgroundColor: 'rgba(34, 197, 94, 0.15)',
              color: '#15803d',
              border: '1px solid rgba(34, 197, 94, 0.35)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping inline-block" />
            <span>{profile.status}</span>
          </span>
        </div>

        {/* Título Principal com Circulo Desenhado */}
        <motion.h1
          key={profile.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-caveat font-bold leading-[1.05] text-[3.6rem] sm:text-[4.8rem] md:text-[5.4rem] m-0 mb-2"
          style={{ color: profile.theme.ink }}
        >
          {t.greeting}<br />
          <span className="relative inline-block px-3 pb-1">
            {profile.name}
            {/* SVG de elipse desenhada à mão contornando o nome */}
            <svg
              className="absolute inset-0 -top-2 -left-2 w-[calc(100%+16px)] h-[calc(100%+16px)] -z-10 pointer-events-none"
              viewBox="0 0 220 90"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M15 45 C 10 15, 65 5, 110 8 C 165 11, 215 20, 208 45 C 200 75, 140 86, 95 83 C 45 80, 8 68, 15 45 Z"
                stroke={profile.theme.yellow}
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ filter: 'url(#roughen)' }}
              />
            </svg>
          </span>
        </motion.h1>

        {/* Cargo e Frase de Efeito */}
        <p
          className="font-architects text-xl sm:text-2xl mt-2 font-medium leading-snug"
          style={{ color: profile.theme.blue }}
        >
          {profile.role}
        </p>

        <p
          className="font-roboto text-sm sm:text-base max-w-[52ch] mt-4 leading-relaxed"
          style={{ color: profile.theme.pencil }}
        >
          {profile.bio}
        </p>

        {/* Botões de Ação Principais */}
        <div className="mt-8 flex flex-wrap gap-4 items-center">
          <a
            href="#trabalhos"
            onClick={() => soundManager.playPaperRustle()}
            className="sketchy inline-flex items-center gap-2 font-mono text-sm px-6 py-3.5 cursor-pointer no-underline transition-all duration-200 active:scale-95 shadow-xs font-bold"
            style={{
              backgroundColor: profile.theme.ink,
              color: profile.theme.paper,
              border: `2px solid ${profile.theme.ink}`,
            }}
          >
            <span>{t.viewWorks}</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#contato"
            onClick={() => soundManager.playClick()}
            className="sketchy inline-flex items-center gap-2 font-mono text-sm px-5 py-3 cursor-pointer no-underline transition-all duration-200 active:scale-95 border-2 font-bold"
            style={{
              borderColor: profile.theme.ink,
              color: profile.theme.ink,
              backgroundColor: 'transparent',
            }}
          >
            <Mail className="w-4 h-4" />
            <span>{t.letsTalk}</span>
          </a>

        </div>

        {/* Mini Grid de Estatísticas / Destaques Rápidos */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t-2 border-dashed" style={{ borderColor: profile.theme.line }}>
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-xs transition-transform hover:-translate-y-0.5"
              style={{
                backgroundColor: profile.theme.paper2,
                border: `1px solid ${profile.theme.line}`,
              }}
            >
              <div className="font-caveat font-bold text-2xl sm:text-3xl leading-none" style={{ color: profile.theme.red }}>
                {stat.value}
              </div>
              <div className="font-mono text-[0.72rem] font-bold mt-1 leading-tight" style={{ color: profile.theme.ink }}>
                {stat.label}
              </div>
              <div className="font-roboto text-[0.65rem] opacity-70 mt-0.5" style={{ color: profile.theme.pencil }}>
                {stat.note}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coluna Direita: Moldura de Retrato Desenhada com Avatar Ilustrado */}
      <div className="flex flex-col items-center justify-center">
        <div
          className="relative w-full max-w-[320px] aspect-[1/1.12] p-4 sketchy -rotate-1 transition-all duration-300 hover:rotate-0"
          style={{
            backgroundColor: profile.theme.paper2,
            border: `2.5px solid ${profile.theme.ink}`,
            boxShadow: '6px 8px 0px rgba(0,0,0,0.12)',
          }}
        >
          {/* Fita adesiva colada no topo da moldura */}
          <div
            className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-7 -rotate-2 opacity-80 shadow-xs"
            style={{
              backgroundColor: profile.theme.yellow,
              border: '1px dashed rgba(0,0,0,0.15)',
            }}
          />

          {/* Carimbo no canto inferior do retrato */}
          <div
            className="absolute -bottom-3 -right-3 px-2 py-1 font-mono text-[0.6rem] font-bold uppercase rotate-6 shadow-xs border"
            style={{
              backgroundColor: profile.theme.paper,
              borderColor: profile.theme.red,
              color: profile.theme.red,
            }}
          >
            {t.stampText}
          </div>

          <div className="w-full h-full relative flex items-center justify-center overflow-hidden rounded-[10px] bg-white/40">
            <img
              src={profilePhoto}
              alt="Retrato do perfil"
              className="w-full h-full object-cover object-center block"
            />
          </div>
        </div>

      </div>
    </section>
  );
};