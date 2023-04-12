import React, {createContext, useState} from 'react';

//Definir la informacion
export interface GradientColor {
  primary: string;
  secondary: string;
}

//Estado inicial
export const colorInitialState: GradientColor = {
  primary: 'blue',
  secondary: 'black',
};
//informacion que se expone

export interface GradientContextProps {
  color: GradientColor;
  prevColor: GradientColor;
  setColorMain: (colors: GradientColor) => void;
  setPrevColorMain: (colors: GradientColor) => void;
}

export const GradientContext = createContext({} as GradientContextProps);

export const GradientProvider = ({children}: any) => {
  const [color, setColor] = useState<GradientColor>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [prevColor, setPrevColor] = useState<GradientColor>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setColorMain = (colors: GradientColor) => {
    setColor(colors);
  };
  const setPrevColorMain = (colors: GradientColor) => {
    setPrevColor(colors);
  };
  return (
    <GradientContext.Provider
      value={{
        color,
        prevColor,
        setColorMain,
        setPrevColorMain,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
