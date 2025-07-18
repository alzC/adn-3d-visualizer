"use client";
import React, { useState } from "react";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { Tabs } from "./ui/Tabs";

const TABS = [
  { id: "analysis", label: "Analyse" },
  { id: "sequence", label: "Séquence" },
  { id: "results", label: "Résultats" },
  { id: "advanced", label: "Avancé" },
];

export const LeftPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("analysis");

  return (
    <div className="absolute left-6 top-6 bottom-6 w-100 glassmorphism rounded-2xl p-6 flex flex-col custom-scrollbar overflow-y-auto z-10">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white orbitron mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">DNA</span>
          <span className="text-white"> Lab</span>
        </h1>
        <p className="text-gray-300 inter text-sm">Analyseur génétique avancé</p>
      </div>
      {/* Tabs */}
      <Tabs tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
      {/* Content */}
      <div className="space-y-4 flex-1">
        {activeTab === "analysis" && (
          <>
            <Card className="border border-cyan-500/20">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white orbitron">Statut</h3>
                <div className="w-3 h-3 bg-green-400 rounded-full dna-pulse"></div>
              </div>
              <p className="text-cyan-300 inter text-sm mb-2">Séquençage en cours...</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-300" style={{ width: "73%" }}></div>
              </div>
              <p className="text-gray-400 inter text-xs mt-1">73% complété</p>
            </Card>
            <Card className="border border-pink-500/20">
              <h3 className="text-lg font-semibold text-white orbitron mb-3">Données</h3>
              <div className="space-y-2 inter text-sm">
                <div className="flex justify-between"><span className="text-gray-300">Paires de bases:</span><span className="text-cyan-300">3.2B</span></div>
                <div className="flex justify-between"><span className="text-gray-300">Gènes identifiés:</span><span className="text-green-300">23,847</span></div>
                <div className="flex justify-between"><span className="text-gray-300">Mutations:</span><span className="text-pink-300">127</span></div>
                <div className="flex justify-between"><span className="text-gray-300">Qualité:</span><span className="text-blue-300">98.7%</span></div>
              </div>
            </Card>
            <Card className="border border-blue-500/20">
              <h3 className="text-lg font-semibold text-white orbitron mb-3">Coverage Quality</h3>
              <div className="h-20 bg-gray-800 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-pink-500/20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <div className="absolute top-2 left-2 right-2 flex justify-between text-xs text-gray-400 inter">
                  <span>Chr1</span><span>Chr12</span><span>Chr23</span>
                </div>
                <div className="absolute bottom-2 left-2 text-xs text-cyan-300 inter">Couverture: 98.7% | Profondeur: 45x</div>
              </div>
            </Card>
            <Card className="border border-purple-500/20">
              <h3 className="text-lg font-semibold text-white orbitron mb-3">Actions</h3>
              <div className="space-y-2">
                <Button>Exporter les données</Button>
                <Button variant="outline">Générer rapport</Button>
                <Button variant="outline" onClick={() => setActiveTab("advanced")}>Paramètres avancés</Button>
              </div>
            </Card>
          </>
        )}
        {activeTab === "sequence" && (
          <>
            <Card className="border border-cyan-500/20">
              <h3 className="text-lg font-semibold text-white orbitron mb-3">Navigateur de séquence</h3>
              <div className="mb-3">
                <input type="text" placeholder="Rechercher une séquence..." className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white inter text-sm" />
              </div>
              <div className="bg-gray-800 rounded-lg p-3 font-mono text-sm text-green-300 max-h-32 overflow-y-auto">
                <div>Chr1:12,345,678-12,345,778</div>
                <div className="mt-2 break-all">ATCGATCGATCGATCGATCGAATCGATCGATCGATCGATCGCGTAGCTAGCTAGCTAGCTAGCGTAGCTAGCTAGCTAGCTAGGGCCGGCCGGCCGGCCGGCCGGCCGGCCGGCCGGCCGGCC</div>
              </div>
            </Card>
            <Card className="border border-green-500/20">
              <h3 className="text-lg font-semibold text-white orbitron mb-3">Annotations géniques</h3>
              <div className="space-y-2">
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2"><span className="text-cyan-300 inter text-sm font-medium">BRCA1</span><span className="text-gray-400 inter text-xs">Chr17:43,044,295-43,125,483</span></div>
                  <div className="text-gray-300 inter text-xs">Gène suppresseur de tumeur - Réparation ADN</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2"><span className="text-pink-300 inter text-sm font-medium">TP53</span><span className="text-gray-400 inter text-xs">Chr17:7,668,402-7,687,538</span></div>
                  <div className="text-gray-300 inter text-xs">Gardien du génome - Contrôle cycle cellulaire</div>
                </div>
              </div>
            </Card>
            <Card className="border border-blue-500/20">
              <h3 className="text-lg font-semibent text-white orbitron mb-3">Statistiques</h3>
              <div className="grid grid-cols-2 gap-4 inter text-sm">
                <div><span className="text-gray-300">GC Content:</span><div className="text-cyan-300 font-medium">42.3%</div></div>
                <div><span className="text-gray-300">Répétitions:</span><div className="text-pink-300 font-medium">1,247</div></div>
                <div><span className="text-gray-300">CpG Islands:</span><div className="text-green-300 font-medium">89</div></div>
                <div><span className="text-gray-300">Exons:</span><div className="text-blue-300 font-medium">2,456</div></div>
              </div>
            </Card>
          </>
        )}
        {activeTab === "results" && (
          <>
            <Card className="border border-pink-500/20">
              <h3 className="text-lg font-semibold text-white orbitron mb-3">Variants détectés</h3>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-1"><span className="text-red-300 inter text-sm font-medium">SNV - Pathogène</span><span className="text-gray-400 inter text-xs">Chr13:32,900,000</span></div>
                  <div className="text-gray-300 inter text-xs">c.5266dupC → p.Gln1756ProfsTer74</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-1"><span className="text-yellow-300 inter text-sm font-medium">CNV - Incertain</span><span className="text-gray-400 inter text-xs">Chr7:140,000,000</span></div>
                  <div className="text-gray-300 inter text-xs">Délétion 2.1kb → Impact fonctionnel inconnu</div>
                </div>
              </div>
            </Card>
            <Card className="border border-purple-500/20">
              <h3 className="text-lg font-semibold text-white orbitron mb-3">Impact clinique</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between"><span className="text-gray-300 inter text-sm">Risque cardiovasculaire:</span><span className="text-yellow-300 inter text-sm font-medium">Modéré</span></div>
                <div className="flex items-center justify-between"><span className="text-gray-300 inter text-sm">Pharmacogénomique:</span><span className="text-green-300 inter text-sm font-medium">Standard</span></div>
                <div className="flex items-center justify-between"><span className="text-gray-300 inter text-sm">Prédisposition cancer:</span><span className="text-red-300 inter text-sm font-medium">Élevé</span></div>
              </div>
            </Card>
            <Card className="border border-cyan-500/20">
              <h3 className="text-lg font-semibold text-white orbitron mb-3">Génération de rapport</h3>
              <div className="space-y-2">
                <Button>Rapport clinique complet</Button>
                <Button variant="outline">Résumé exécutif</Button>
                <Button variant="outline">Données brutes (VCF)</Button>
              </div>
            </Card>
          </>
        )}
        {activeTab === "advanced" && (
          <>
            <Card className="border border-cyan-500/20">
              <h3 className="text-lg font-semibold text-white orbitron mb-3">Seuils de qualité</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-gray-300 inter text-sm">Qualité minimale (QUAL)</label>
                  <input type="range" min="10" max="100" defaultValue="30" className="w-full mt-1" />
                  <div className="text-cyan-300 inter text-xs mt-1">Valeur: 30</div>
                </div>
                <div>
                  <label className="text-gray-300 inter text-sm">Profondeur minimale (DP)</label>
                  <input type="range" min="5" max="50" defaultValue="20" className="w-full mt-1" />
                  <div className="text-pink-300 inter text-xs mt-1">Valeur: 20x</div>
                </div>
              </div>
            </Card>
            <Card className="border border-purple-500/20">
              <h3 className="text-lg font-semibold text-white orbitron mb-3">Algorithmes</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between"><span className="text-gray-300 inter text-sm">Variant Caller:</span><select className="bg-gray-800 border border-gray-600 rounded-md px-2 py-1 text-white inter text-sm"><option>GATK HaplotypeCaller</option><option>FreeBayes</option><option>SAMtools</option></select></div>
                <div className="flex items-center justify-between"><span className="text-gray-300 inter text-sm">Annotation:</span><select className="bg-gray-800 border border-gray-600 rounded-md px-2 py-1 text-white inter text-sm"><option>ANNOVAR</option><option>VEP</option><option>SnpEff</option></select></div>
              </div>
            </Card>
            <Card className="border border-green-500/20">
              <h3 className="text-lg font-semibold text-white orbitron mb-3">Filtres</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between"><span className="text-gray-300 inter text-sm">Fréquence allélique max:</span><input type="number" step="0.01" defaultValue="0.05" className="bg-gray-800 border border-gray-600 rounded-md px-2 py-1 text-white inter text-sm w-20" /></div>
                <div className="flex items-center justify-between"><span className="text-gray-300 inter text-sm">Régions codantes uniquement:</span><input type="checkbox" defaultChecked className="accent-cyan-500" /></div>
                <div className="flex items-center justify-between"><span className="text-gray-300 inter text-sm">Exclure variants synonymes:</span><input type="checkbox" className="accent-cyan-500" /></div>
              </div>
            </Card>
            <Card className="border border-blue-500/20">
              <div className="space-y-2">
                <Button>Appliquer les paramètres</Button>
                <Button variant="outline">Réinitialiser par défaut</Button>
                <Button variant="outline" onClick={() => setActiveTab("analysis")}>Retour à l&apos;analyse</Button>
              </div>
            </Card>
          </>
        )}
        {/* Info Card - Always visible */}
        <Card className="border border-gray-500/20">
          <h3 className="text-lg font-semibold text-white orbitron mb-3">Information</h3>
          <p className="text-gray-300 inter text-sm leading-relaxed">
            {activeTab === "analysis" && "Dashboard principal montrant l'état global du séquençage et les métriques de qualité en temps réel."}
            {activeTab === "sequence" && "Exploration interactive des séquences ADN avec annotations géniques et statistiques détaillées."}
            {activeTab === "results" && "Analyse complète des variants détectés avec évaluation de l'impact clinique et génération de rapports."}
            {activeTab === "advanced" && "Configuration avancée des algorithmes de détection et des seuils de qualité pour l'analyse bioinformatique."}
          </p>
        </Card>
      </div>
      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-600">
        <p className="text-gray-400 inter text-xs text-center">BioTech Lab v2.1.0 • Dernière mise à jour: 17 Jul 2025</p>
      </div>
    </div>
  );
}; 