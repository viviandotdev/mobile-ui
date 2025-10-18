import '../global.css';

import { ThemeProvider } from '@react-navigation/native';
import { useGeistFont } from '@showcase/hooks/use-geist-font';
import { NAV_THEME } from '@showcase/lib/theme';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: 'index',
};

export default function RootLayout() {
    const [loaded, error] = useGeistFont();
    const { colorScheme } = useColorScheme();

    React.useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <ThemeProvider value={NAV_THEME[colorScheme]}>
            <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
            <GestureHandlerRootView
                style={{
                    flex: 1,
                    backgroundColor: NAV_THEME[colorScheme].colors.background,
                }}>
                <Stack
                    screenOptions={{
                        headerLargeTitle: true,
                        headerTitle: 'Showcase',
                        headerLargeTitleShadowVisible: false,
                        headerLargeStyle: {
                            backgroundColor: colorScheme === 'dark' ? 'hsl(0 0% 3.9%)' : 'hsl(0 0% 100%)',
                        },
                    }}>
                    <Stack.Screen
                        name="index"
                        options={{
                            headerLargeTitle: true,
                            headerTitle: 'Showcase',
                            headerLargeTitleShadowVisible: false,
                            headerLargeStyle: {
                                backgroundColor: colorScheme === 'dark' ? 'hsl(0 0% 3.9%)' : 'hsl(0 0% 100%)',
                            },
                        }}
                    />

                    <Stack.Screen
                        name="components/sign-in"
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="components/get-started"
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="components/settings"
                        options={{
                            presentation: 'modal',
                            headerShown: true,
                            headerTitle: 'Settings',
                            headerLargeTitle: true,
                            headerLargeTitleShadowVisible: false,
                            headerLargeStyle: {
                                backgroundColor: colorScheme === 'dark' ? 'hsl(0 0% 3.9%)' : 'hsl(0 0% 100%)',
                            },
                        }}
                    />
                    <Stack.Screen
                        name="components/example-component"
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack>
            </GestureHandlerRootView>
        </ThemeProvider>
    );
}
