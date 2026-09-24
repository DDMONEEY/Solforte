import React from 'react';
import { Building2, FileCheck, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#070b12] border-t border-white/5 relative" aria-label="Conformidade e regularidade fiscal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-[#FF9D43] text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F58220]" />
            <span>Compliance & Idoneidade B2B</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Conformidade Cadastral e <span className="text-gradient-orange">Solidez Operacional</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Dados públicos e registros formais para homologação direta no setor de compras e suprimentos da sua empresa.
          </p>
        </div>

        {/* Official Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all text-center">
            <Building2 className="w-8 h-8 text-[#F58220] mx-auto mb-3" />
            <p className="text-xs text-slate-400 uppercase font-semibold">Razão Social Oficial</p>
            <p className="text-sm font-bold text-white mt-1">SOLFORTE TRANSPORTES DE CARGAS LTDA.</p>
            <span className="text-[11px] text-slate-500 mt-2 block font-mono">Sociedade Limitada</span>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all text-center">
            <FileCheck className="w-8 h-8 text-[#F58220] mx-auto mb-3" />
            <p className="text-xs text-slate-400 uppercase font-semibold">Inscrição no CNPJ</p>
            <p className="text-sm font-mono font-bold text-white mt-1">53.119.407/0001-07</p>
            <span className="text-[11px] text-emerald-400 mt-2 block flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Ativa e Regular na RFB
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all text-center">
            <ShieldCheck className="w-8 h-8 text-[#F58220] mx-auto mb-3" />
            <p className="text-xs text-slate-400 uppercase font-semibold">Registro ANTT (RNTRC)</p>
            <p className="text-sm font-mono font-bold text-white mt-1">056478766</p>
            <span className="text-[11px] text-emerald-400 mt-2 block flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Habilitada Transporte Cargas
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all text-center">
            <MapPin className="w-8 h-8 text-[#F58220] mx-auto mb-3" />
            <p className="text-xs text-slate-400 uppercase font-semibold">Endereço da Matriz</p>
            <p className="text-sm font-bold text-white mt-1">Avenida Lions Club, 54</p>
            <span className="text-[11px] text-slate-400 mt-2 block">
              Jequiezinho • Jequié / BA • CEP 45208-441
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
