import { ReactNode } from 'react';

export interface ChildrenProps {
  children: ReactNode,
}

export interface WordleProps {
  solution: string,
  setNewSolution: (isCorrect: boolean) => void,
}

export interface Token {
  key: string,
  color: string,
}

export type Guesses = (Token[] | undefined)[];

export interface GridProps {
  currentGuess: string,
  guesses: Guesses,
  turn: number,
}

export interface RowProps {
  guess?: Token[] | undefined,
  currentGuess?: string,
}

export interface ColoredKey {
  a?: string,
  b?: string,
  c?: string,
  d?: string,
  e?: string,
  f?: string,
  g?: string,
  h?: string,
  i?: string,
  j?: string,
  k?: string,
  l?: string,
  m?: string,
  n?: string,
  ñ?: string,
  o?: string,
  p?: string,
  q?: string,
  r?: string,
  s?: string,
  t?: string,
  u?: string,
  v?: string,
  w?: string,
  x?: string,
  y?: string,
  z?: string
}

export interface KeypadProps {
  usedKeys: ColoredKey,
  handleClickKeypad: (letter: string) => void,
}

export interface ResultsProps {
  isCorrect: boolean,
  turn: number,
  solution: string,
  totalWins: number,
  totalCount: number,
  time: number,
  resetGame: () => void,
  resetTime: () => void,
  resetModal: () => void,
}

export interface TimerProps {
  isCorrect: boolean,
  setNewSolution: (isCorrect: boolean) => void,
}

export interface SquareKeyProps {
  letter?: Token | string, 
  filled?: boolean,
  fixed?: boolean,
}

export interface ModalProps {
  children: ReactNode,
  className?: string,
}

export interface TutorialContextProps {
  showTutorial: boolean,
  openTutorial: () => void,
  closeTutorial: () => void,
}

export interface StatisticsContextProps {
  showResults: boolean,
  openResults: () => void,
  closeResults: () => void,
}