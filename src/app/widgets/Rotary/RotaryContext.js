import { createContext } from 'react';

const RotaryContext = createContext({});

export const RotaryProvider = RotaryContext.Provider;
export const RotaryConsumer = RotaryContext.Consumer;

export default RotaryContext;
