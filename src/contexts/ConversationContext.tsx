"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ConversationContextType {
  allConversationContext: any;
  thisConversationContext: number;
  addConversation: (newConversation: any) => void;
  setThisConversation: (thisConversation: number) => void;
}

const ConversationContext = createContext<ConversationContextType | undefined>(
  undefined
);

export const ConversationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [thisConversationContext, setThisConversationContext] = useState(null);
  const [allConversationContext, setAllConversationContext] = useState([
    { id: 1, title: "Memulai Proyek AI Pertamaku", date: "2024-06-26" },
    {
      id: 2,
      title: "Ide-Inovatif untuk Aplikasi Mobile",
      date: "2024-06-27",
    },
    { id: 3, title: "Belajar React untuk Pemula", date: "2024-06-28" },
    {
      id: 4,
      title: "Tips Produktivitas untuk Pengembang",
      date: "2024-06-29",
    },
    {
      id: 5,
      title: "Mengelola Tim Remote dengan Efektif",
      date: "2024-06-30",
    },
    { id: 6, title: "Pengantar ke Machine Learning", date: "2024-07-01" },
    {
      id: 7,
      title: "Meningkatkan Keterampilan Pemrograman",
      date: "2024-07-02",
    },
    { id: 8, title: "Strategi Pemasaran Digital", date: "2024-06-25" },
    { id: 9, title: "Membangun API dengan Node.js", date: "2024-05-25" },
    { id: 10, title: "Mendesain UI/UX yang Menarik", date: "2024-04-25" },
    { id: 11, title: "Optimalisasi SEO untuk Website", date: "2024-07-03" },
    { id: 12, title: "Mengembangkan Game dengan Unity", date: "2024-07-04" },
    { id: 13, title: "Mengenal Cloud Computing", date: "2024-07-05" },
    { id: 14, title: "Automasi dengan Python", date: "2024-07-06" },
    { id: 15, title: "Teknik Analisis Data", date: "2024-07-07" },
    { id: 16, title: "Dasar-dasar Cybersecurity", date: "2024-07-08" },
    { id: 17, title: "Pengenalan ke DevOps", date: "2024-07-09" },
    { id: 18, title: "Membangun Website Responsif", date: "2024-07-10" },
    { id: 19, title: "Teknik Machine Learning Lanjut", date: "2024-07-11" },
    { id: 20, title: "Memanfaatkan Big Data", date: "2024-07-12" },
    { id: 21, title: "Penerapan IoT dalam Industri", date: "2024-07-13" },
    { id: 22, title: "Dasar-dasar Kubernetes", date: "2024-07-14" },
    { id: 23, title: "Panduan Docker untuk Pemula", date: "2024-07-15" },
    { id: 24, title: "Strategi Monetisasi Aplikasi", date: "2024-07-16" },
    {
      id: 25,
      title: "Pemrograman Fungsional dengan Scala",
      date: "2024-07-17",
    },
  ]);

  const addConversation = (newConversation: any) => {
    setAllConversationContext((prevConversations) => [
      ...prevConversations,
      newConversation,
    ]);
  };

  const setThisConversation = (thisConversation: number) => {
    setThisConversationContext(thisConversation);
  };

  return (
    <ConversationContext.Provider
      value={{
        allConversationContext,
        addConversation,
        thisConversationContext,
        setThisConversation,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

export const useConversation = (): ConversationContextType => {
  const context = useContext(ConversationContext);
  if (!context) {
    throw new Error(
      "useConversation must be used within a ConversationProvider"
    );
  }
  return context;
};
