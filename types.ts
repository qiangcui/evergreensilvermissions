import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Program {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface DailyVerse {
  text: string;
  reference: string;
  reflection: string;
}