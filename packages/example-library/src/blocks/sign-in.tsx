import React from 'react';
import { View, TextInput, Image, Platform } from 'react-native';
import { useColorScheme } from 'nativewind';
import { Button } from '@/example-library/components/ui/button';
import { Text } from '@/example-library/components/ui/text';
import { Input } from '@/example-library/components/ui/input';
import { cn } from '../lib/utils';

const SOCIAL_CONNECTION_STRATEGIES = [
    {
        type: 'oauth_apple',
        label: 'Continue With Apple',
        source: { uri: 'https://img.clerk.com/static/apple.png?width=160' },
        useTint: true,
    },
    {
        type: 'oauth_google',
        label: 'Continue With Google',
        source: { uri: 'https://img.clerk.com/static/google.png?width=160' },
        useTint: false,
    },
];


export function SignIn() {
    const passwordInputRef = React.useRef<TextInput>(null);
    const { colorScheme } = useColorScheme();
    function onEmailSubmitEditing() {
        passwordInputRef.current?.focus();
    }

    function onSubmit() {
        // TODO: Submit form and navigate to protected screen if successful
    }

    return (
        <View className="flex flex-col bg-bg-white-0 pt-6 px-6 pb-6">
            {/* Header Section */}
            <View className="flex pb-6">
                <View className="flex gap-2 text-center ">
                    <Text variant="h2" className="text-center">
                        Welcome back
                    </Text>
                    <Text variant="small" className="text-center text-text-soft-400">
                        Let's get you back in to Acme
                    </Text>
                </View>
            </View>

            {/* Input Fields */}
            <View className="gap-4 mb-4">
                <View className="gap-1.5">
                    <Input
                        id="email"
                        placeholder="Email"
                        keyboardType="email-address"
                        autoComplete="email"
                        autoCapitalize="none"
                        onSubmitEditing={onEmailSubmitEditing}
                        returnKeyType="next"
                        submitBehavior="submit"
                    />
                </View>

                <View className="gap-1.5">
                    <Input
                        placeholder="Password"
                        ref={passwordInputRef}
                        id="password"
                        secureTextEntry
                        returnKeyType="send"
                        onSubmitEditing={onSubmit}
                    />
                    <View className=" flex-row justify-end">
                        <Button
                            variant="link"
                            size="md"
                            className=""
                            onPress={() => {
                                // TODO: Navigate to forgot password screen
                            }}>
                            <Text className="font-medium text-text-soft-400">Forgot your password?</Text>
                        </Button>
                    </View>

                </View>

                <Button size="xl" className="rounded-full mt-2 w-full"  >
                    <Text>Next</Text>
                </Button>

                {/* Separator */}
                <View className="flex-row items-center my-4">
                    <View className="flex-1 h-px bg-bg-sub-300" />
                    <Text variant="small" className="mx-4 text-text-soft-400">or</Text>
                    <View className="flex-1 h-px bg-bg-sub-300" />
                </View>

                {/* Social Login Buttons */}
                <View className="gap-3">
                    <View className="gap-2 sm:flex-row sm:gap-3">
                        {SOCIAL_CONNECTION_STRATEGIES.map((strategy) => {
                            return (
                                <Button
                                    key={strategy.type}
                                    variant="outline"
                                    size="xl"
                                    className="rounded-full w-full shadow-regular-md"
                                    onPress={() => {
                                        // TODO: Authenticate with social provider and navigate to protected screen if successful
                                    }}>

                                    <Image
                                        className={cn('size-4', strategy.useTint && Platform.select({ web: 'dark:invert' }))}
                                        tintColor={Platform.select({
                                            native: strategy.useTint ? (colorScheme === 'dark' ? 'white' : 'black') : undefined,
                                        })}
                                        source={strategy.source}
                                    />
                                    <Text>{strategy.label}</Text>

                                </Button>
                            );
                        })}
                    </View>
                </View>


                <View className="items-center">
                    <Button
                        variant="ghost"
                        size="lg"
                        onPress={() => {
                            // TODO: Navigate to forgot password screen
                        }}>
                        <Text className="text-base font-medium text-text-soft-400 mb-2">Already have an account?</Text>
                    </Button>
                </View>

            </View>
        </View>
    );
}
