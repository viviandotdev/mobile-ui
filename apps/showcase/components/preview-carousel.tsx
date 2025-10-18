import { Button } from '@showcase/components/ui/button';
import { Icon } from '@showcase/components/ui/icon';
import { cn } from '@showcase/lib/utils';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react-native';
import * as React from 'react';
import { useState } from 'react';
import {
    Dimensions,
    FlatList,
    type ListRenderItemInfo,
    type NativeScrollEvent,
    type NativeSyntheticEvent,
    View,
    Pressable,
    Animated,
} from 'react-native';
import { useRouter } from 'expo-router';

const windowWidth = Dimensions.get('window').width;

type PreviewCarouselProps = {
    previews: {
        name: string;
        component: (props: unknown) => React.JSX.Element;
    }[];
    removeBottomSafeArea?: boolean;
};

function PreviewCarousel({ previews, removeBottomSafeArea = false }: PreviewCarouselProps) {
    const [index, setIndex] = useState(0);
    const ref = React.useRef<FlatList>(null);
    const router = useRouter();
    const [showBackButton, setShowBackButton] = React.useState(false);
    const fadeAnim = React.useRef(new Animated.Value(0)).current;
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    function onScroll(ev: NativeSyntheticEvent<NativeScrollEvent>) {
        const index = Math.round(ev.nativeEvent.contentOffset.x / windowWidth);
        setIndex(index);
    }

    function onPreviewPress() {
        ref.current?.scrollToIndex({ index: Math.max(0, index - 1) });
    }

    function onNextPress() {
        ref.current?.scrollToIndex({
            index: Math.min(previews.length - 1, index + 1),
        });
    }

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
        <Pressable onPress={handlePress} className="flex-1">
            <FlatList
                ref={ref}
                data={previews}
                renderItem={renderItem}
                onScroll={onScroll}
                keyExtractor={keyExtractor}
                horizontal
                snapToInterval={windowWidth}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                contentContainerClassName={cn('pt-safe', !removeBottomSafeArea && 'pb-12 mb-safe')}
            />
            <View className="mb-safe absolute bottom-0 left-0 right-0 h-12 flex-row items-center justify-center px-4">
                <View className="relative flex-row items-center justify-center gap-2">
                    <View className="bg-background rounded-md">
                        <Button variant="outline" size="icon" disabled={index === 0} onPress={onPreviewPress}>
                            <Icon as={ChevronLeftIcon} className="size-4" />
                        </Button>
                    </View>
                    <View className="bg-background rounded-md">
                        <Button
                            variant="outline"
                            size="icon"
                            disabled={index === previews.length - 1}
                            onPress={onNextPress}>
                            <Icon as={ChevronRightIcon} className="size-4" />
                        </Button>
                    </View>
                </View>
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

export { PreviewCarousel };

function renderItem({
    item,
}: ListRenderItemInfo<{
    name: string;
    component: (props: unknown) => React.JSX.Element;
}>) {
    const Component = item.component;
    return (
        <View className="w-screen flex-1 items-center justify-center">
            <Component />
        </View>
    );
}

function keyExtractor(item: { name: string }) {
    return item.name;
}
