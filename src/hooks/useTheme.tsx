import { useColorScheme } from 'react-native';

export default function useTheme() {
  const isDarkMode = useColorScheme() === 'dark';

  return {
    isDarkMode,
    theme: {
      background: isDarkMode ? '#000000' : '#FFFFFF',
      foreground: isDarkMode ? '#FFFFFF' : '#000000',
      backgroundSecondary: isDarkMode ? '#FFFFFF' : '#D3FAF5',
      card: isDarkMode ? '#FFFFFF' : '#FFFFFF',
      cardForeground: isDarkMode ? '#FFFFFF' : '#000000',
      input: isDarkMode ? '#FFFFFF' : '#000000',
      inputBorder: isDarkMode ? '#FFFFFF' : '#D8D8D8',
      muted: isDarkMode ? '#FFFFFF' : '#FFFFFF',
      mutedForeground: isDarkMode ? '#FFFFFF' : '#D8D8D8',
      primary: isDarkMode ? '#FFFFFF' : '#30C2E3',
      primaryForeground: isDarkMode ? '#FFFFFF' : '#FFFFFF',
      secondary: isDarkMode ? '#FFFFFF' : '#FFFFFF',
      secondaryBorder: isDarkMode ? '#FFFFFF' : '#2FB5D4',
      secondaryForeground: isDarkMode ? '#FFFFFF' : '#2FB5D4',
      danger: isDarkMode ? '#FFFFFF' : '#a52222',
      dangerForeground: isDarkMode ? '#FFFFFF' : '#a52222',
      warning: isDarkMode ? '#FFFFFF' : '#a55222',
      warningForeground: isDarkMode ? '#FFFFFF' : '#FFFFFF',
      success: isDarkMode ? '#FFFFFF' : '#21a22e',
      successForeground: isDarkMode ? '#FFFFFF' : '#FFFFFF',
    },
  };
}
