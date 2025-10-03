'use client'
import React, { createContext, useState, useContext } from 'react';

type KeywordContextType = {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
  keywordInput: string;
  setKeywordInput: (val: string) => void;
  submitKeyword: () => void;
  setSubmitKeyword: (fn: () => void) => void;
};

const KeywordContext = createContext<KeywordContextType | undefined>(undefined);

export const KeywordProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const [keywordInput, setKeywordInput] = useState('');
  const [submitKeyword, setSubmitKeyword] = useState<() => void>(() => () => {});

  return (
    <KeywordContext.Provider
      value={{ showForm, setShowForm, keywordInput, setKeywordInput, submitKeyword, setSubmitKeyword }}
    >
      {children}
    </KeywordContext.Provider>
  );
};

export const useKeywordContext = () => {
  const context = useContext(KeywordContext);
  if (!context) throw new Error('useKeywordContext must be used within KeywordProvider');
  return context;
};
