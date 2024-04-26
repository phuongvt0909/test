import { createTheme, MantineProvider } from '@mantine/core';
import React from 'react';

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
});

export function StoryBookProvider({children} : {children: React.ReactNode}) {
  return (
    <MantineProvider theme={theme} defaultColorScheme='dark'>
      {children}
    </MantineProvider>
  );
}