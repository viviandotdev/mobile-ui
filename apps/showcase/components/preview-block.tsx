import * as React from 'react';
import { View, Pressable, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@showcase/components/ui/button';
import { Icon } from '@showcase/components/ui/icon';
import { ChevronLeftIcon } from 'lucide-react-native';

type PreviewBlockProps = {
    preview: {
        name: string;
        component: (props: any) => React.JSX.Element;
    }
};

function PreviewBlock({ preview }: PreviewBlockProps) {
    const Component = preview.component;
    const router = useRouter();
    const [showBackButton, setShowBackButton] = React.useState(false);
    const fadeAnim = React.useRef(new Animated.Value(0)).current;
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    const handlePress = () => {
        setShowBackButton(true);

        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Fade in
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();

        // Set timeout to fade out after 3 seconds
        timeoutRef.current = setTimeout(() => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start(() => {
                setShowBackButton(false);
            });
        }, 3000);
    };

    React.useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <Pressable onPress={handlePress} className="bg-background pt-safe flex-1">
            {/* Block Content */}
            <View className="w-screen h-screen flex">
                <Component onClose={() => router.back()} />
            </View>

            {/* Back Button */}
            {showBackButton && (
                <Animated.View
                    style={{ opacity: fadeAnim }}
                    className="absolute top-safe left-4 z-50"
                >
                    <View className="bg-background rounded-md">
                        <Button
                            variant="outline"
                            size="icon"
                            onPress={() => router.back()}
                        >
                            <Icon as={ChevronLeftIcon} className="size-4" />
                        </Button>
                    </View>
                </Animated.View>
            )}
        </Pressable>
    );
}

export { PreviewBlock };
