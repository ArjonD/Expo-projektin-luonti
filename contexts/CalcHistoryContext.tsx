import React, { createContext, ReactNode, useContext, useState } from 'react';

type HistoryItem = { equation: string };
type CalcHistoryContextType = {
    history: HistoryItem[];
    addHistory: (item: HistoryItem) => void;
};

const CalcHistoryContext = createContext<CalcHistoryContextType | undefined>(undefined);

export function CalcHistoryProvider({ children }: { children: ReactNode }) {
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const addHistory = (item: HistoryItem) => setHistory((prev) => [...prev, item]);
    return (
        <CalcHistoryContext.Provider value={{ history, addHistory }}>
            {children}
        </CalcHistoryContext.Provider>
    );
}

export const useCalcHistory = () => {
    const context = useContext(CalcHistoryContext);
    if (!context) throw new Error('useCalcHistory must be used within a CalcHistoryProvider');
    return context;
};