import { View, Image, Platform, Pressable } from 'react-native';
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { cn } from '~/lib/utils';
import { TypingAnimation } from '../examples/text/typing-animation';
import { X } from 'lucide-react-native';
import { useRouter } from 'expo-router';
// Social login button data
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

interface GetStartedProps {
    onClose?: () => void;
}

export function GetStarted({ onClose }: GetStartedProps) {
    const router = useRouter();
    return (
        <View className="flex-1 bg-white">
            {/* Header Section */}
            <View className="flex-1 items-center justify-center px-6">
                {/* Close Button */}
                <Pressable

                    onPress={() => router.back()}
                    className="absolute top-12 right-6 z-10"
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <View className="size-10 items-center justify-center rounded-full bg-neutral-100">
                        <X strokeWidth={3} size={22} color="#6B7280" />
                    </View>
                </Pressable>

                <TypingAnimation
                    words={["Let's explore", "Let's discover", "Let's build", "ChatGPT", "Let's Design"]}
                    blinkCursor={false}
                    className="text-4xl font-bold text-black text-center"
                    typeSpeed={75}
                    deleteSpeed={20}
                    pauseDelay={500}
                    loop={true}
                    cursorStyle="circle"
                />
            </View>

            {/* Bottom Action Container */}
            <View className="bg-black rounded-t-3xl px-6 pt-8 pb-24">
                {/* Social Login Buttons */}
                <View className="gap-4 mb-4">
                    {SOCIAL_CONNECTION_STRATEGIES.map((strategy) => {
                        return (
                            <Button
                                key={strategy.type}
                                size="lg"
                                className={cn("rounded-xl h-14 bg-white", !strategy.useTint && 'bg-neutral-800')}

                                onPress={() => {
                                    // TODO: Authenticate with social provider and navigate to protected screen if successful
                                }}>

                                <Image
                                    className={cn('size-5', strategy.useTint && Platform.select({ web: 'dark:invert' }))}
                                    source={strategy.source}
                                />
                                <Text className={cn("text-xl text-black", !strategy.useTint && 'text-white')}>{strategy.label}</Text>
                            </Button>
                        );
                    })}
                </View>

                {/* Action Buttons */}
                <View className="gap-4">
                    <Button
                        size="lg"
                        className={cn(
                            'rounded-xl h-14 bg-neutral-800',
                        )}
                    >
                        <Text className="text-xl font-medium"
                        >
                            Sign up
                        </Text>
                    </Button>

                    <Button
                        size="lg"
                        className={cn(
                            'rounded-xl h-14 border-2 border-neutral-800  bg-black',
                        )}
                    >
                        <Text className="text-xl font-medium "
                        >
                            Log in
                        </Text>
                    </Button>
                </View>
            </View>
        </View>
    );
}

// Stack.Screen configuration for this block
export const GetStartedStackScreen = {
    name: "components/get-started",
    options: {
        headerShown: false,
    }
};
