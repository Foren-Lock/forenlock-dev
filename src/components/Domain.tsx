
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const domainSections = [
  {
    id: "literature",
    title: "Literature Survey",
    content: `Our literature survey involved analyzing over 40 research papers on blockchain applications in healthcare, 
    cryptographic methods for evidence security, and machine learning approaches for forensic data extraction. 
    The survey identified current trends in healthcare forensics and the technological challenges in managing 
    digital evidence securely.`
  },
  {
    id: "gap",
    title: "Research Gap",
    content: `The analysis revealed significant gaps in healthcare forensic systems, particularly in maintaining 
    evidence integrity while ensuring appropriate access. Most existing solutions sacrifice either security 
    for accessibility or privacy for functionality. Additionally, the integration of blockchain with 
    privacy-preserving technologies in healthcare forensics remains largely unexplored.`
  },
  {
    id: "problem",
    title: "Research Problem",
    content: `How can digital evidence in healthcare forensics be managed in a way that ensures integrity, 
    accessibility, and privacy throughout the investigation lifecycle while maintaining a verifiable 
    and immutable chain of custody?`
  },
  {
    id: "objectives",
    title: "Research Objectives",
    content: `1. Develop a blockchain-based framework for maintaining forensic evidence integrity.\n
    2. Implement secure access control mechanisms using advanced cryptography.\n
    3. Design privacy-preserving methods for handling sensitive healthcare data.\n
    4. Create efficient techniques for extracting and processing forensic evidence from medical sources.`
  },
  {
    id: "methodology",
    title: "Methodology",
    content: `Our research follows a design science methodology, consisting of:\n
    1. Literature Review and Problem Identification\n
    2. Technology Selection and Architecture Design\n
    3. Prototype Development and Iterative Testing\n
    4. Validation using Healthcare Forensic Case Studies\n
    5. Performance Analysis and Security Assessment`
  },
  {
    id: "technologies",
    title: "Technologies Used",
    content: `The research leverages multiple cutting-edge technologies:\n
    • Blockchain: Ethereum and Hyperledger for immutable evidence storage\n
    • Cryptographic Methods: Advanced Encryption Standard (AES), Zero-Knowledge Proofs (ZKP)\n
    • Machine Learning: Natural Language Processing, Computer Vision for data extraction\n
    • Privacy Technologies: Fully Homomorphic Encryption (FHE), Differential Privacy\n
    • Data Management: IPFS for distributed storage, Secure Multi-party Computation`
  }
];

const Domain = () => {
  return (
    <section id="domain" className="bg-white py-20">
      <div className="container-section">
        <h2 className="section-title">Research Domain</h2>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="literature" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              {domainSections.map((section) => (
                <TabsTrigger key={section.id} value={section.id} className="text-sm">
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {domainSections.map((section) => (
              <TabsContent key={section.id} value={section.id} className="p-6 bg-navy-50 rounded-lg">
                <h3 className="text-xl font-semibold text-navy-800 mb-4">{section.title}</h3>
                <div className="text-navy-700 whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Domain;
