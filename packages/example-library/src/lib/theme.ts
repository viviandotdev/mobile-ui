import { DarkTheme, DefaultTheme, type Theme } from '@react-navigation/native';

export const THEME = {
    light: {
        background: 'hsl(0 0% 100%)', // --neutral-0
        foreground: 'hsl(0 0% 9.02%)', // --neutral-950
        card: 'hsl(0 0% 100%)', // --neutral-0
        cardForeground: 'hsl(0 0% 9.02%)', // --neutral-950
        popover: 'hsl(0 0% 100%)', // --neutral-0
        popoverForeground: 'hsl(0 0% 9.02%)', // --neutral-950
        primary: 'hsl(0 0% 9.02%)', // --neutral-950
        primaryForeground: 'hsl(0 0% 100%)', // --neutral-0
        secondary: 'hsl(0 0% 96.08%)', // --neutral-100
        secondaryForeground: 'hsl(0 0% 9.02%)', // --neutral-950
        muted: 'hsl(0 0% 96.08%)', // --neutral-100
        mutedForeground: 'hsl(0 0% 48.24%)', // --neutral-500
        accent: 'hsl(0 0% 96.08%)', // --neutral-100
        accentForeground: 'hsl(0 0% 9.02%)', // --neutral-950
        destructive: 'hsl(354.8 96.08% 60%)', // --red-500
        border: 'hsl(0 0% 92.16%)', // --neutral-200
        input: 'hsl(0 0% 92.16%)', // --neutral-200
        ring: 'hsl(0 0% 63.92%)', // --neutral-400
        radius: '0.625rem', // --radius
        chart1: 'hsl(227.94 100% 60%)', // --blue-500
        chart2: 'hsl(148.15 72.32% 43.92%)', // --green-500
        chart3: 'hsl(24 95.74% 53.92%)', // --orange-500
        chart4: 'hsl(255.93 88.04% 63.92%)', // --purple-500
        chart5: 'hsl(354.8 96.08% 60%)', // --red-500
    },
    dark: {
        background: 'hsl(0 0% 9.02%)', // --neutral-950
        foreground: 'hsl(0 0% 100%)', // --neutral-0
        card: 'hsl(0 0% 9.02%)', // --neutral-950
        cardForeground: 'hsl(0 0% 100%)', // --neutral-0
        popover: 'hsl(0 0% 9.02%)', // --neutral-950
        popoverForeground: 'hsl(0 0% 100%)', // --neutral-0
        primary: 'hsl(24 95.74% 53.92%)', // --orange-500 (primary color)
        primaryForeground: 'hsl(0 0% 100%)', // --neutral-0 (lighter text)
        secondary: 'hsl(0 0% 16.08%)', // --neutral-800
        secondaryForeground: 'hsl(0 0% 100%)', // --neutral-0
        muted: 'hsl(0 0% 16.08%)', // --neutral-800
        mutedForeground: 'hsl(0 0% 63.92%)', // --neutral-400
        accent: 'hsl(0 0% 16.08%)', // --neutral-800
        accentForeground: 'hsl(0 0% 100%)', // --neutral-0
        destructive: 'hsl(354.8 96.08% 60%)', // --red-500
        border: 'hsl(0 0% 16.08%)', // --neutral-800
        input: 'hsl(0 0% 16.08%)', // --neutral-800
        ring: 'hsl(0 0% 63.92%)', // --neutral-400
        radius: '0.625rem', // --radius
        chart1: 'hsl(222.12 100% 70.39%)', // --blue-400
        chart2: 'hsl(147.78 72.32% 56.08%)', // --green-400
        chart3: 'hsl(23.84 100% 70.39%)', // --orange-400
        chart4: 'hsl(252.18 88.08% 70.39%)', // --purple-400
        chart5: 'hsl(354.83 100% 70.39%)', // --red-400
    },
};

export const NAV_THEME: Record<'light' | 'dark', Theme> = {
    light: {
        ...DefaultTheme,
        colors: {
            background: THEME.light.background,
            border: THEME.light.border,
            card: THEME.light.card,
            notification: THEME.light.destructive,
            primary: THEME.light.primary,
            text: THEME.light.foreground,
        },
    },
    dark: {
        ...DarkTheme,
        colors: {
            background: THEME.dark.background,
            border: THEME.dark.border,
            card: THEME.dark.card,
            notification: THEME.dark.destructive,
            primary: THEME.dark.primary,
            text: THEME.dark.foreground,
        },
    },
};
