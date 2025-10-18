import React from 'react';
import { View, FlatList, Platform, Pressable } from 'react-native';
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { cn } from '~/lib/utils';
import { ChevronRight, User, Plug, Palette, CreditCard, LogOut, X } from 'lucide-react-native';
import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
// Settings item type
type SettingsItem = {
    id: string;
    name: string;
    icon: any;
    variant?: 'destructive';
};

// Hardcoded settings data
const SETTINGS_ITEMS: SettingsItem[] = [
    { id: 'accounts', name: 'Accounts', icon: User },
    { id: 'integrations', name: 'Integrations', icon: Plug },
    { id: 'appearance', name: 'Appearance', icon: Palette },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'logout', name: 'Log out', icon: LogOut, variant: 'destructive' },
];

interface SettingsProps {
    onClose?: () => void;
}



export function Settings({ onClose }: SettingsProps) {
    const handleSettingsPress = (item: SettingsItem) => {
        // TODO: Handle settings navigation
        console.log(`Pressed: ${item.name}`);
    };
    const { colorScheme } = useColorScheme();

    const renderItem = ({ item, index }: { item: SettingsItem; index: number }) => {
        const IconComponent = item.icon;

        return (
            <Button
                variant="outline"
                size="lg"
                className={cn(
                    'dark:bg-background border-border flex-row justify-between rounded-none border-b-0 pl-4 pr-3.5',
                    index === 0 && 'rounded-t-lg',
                    index === SETTINGS_ITEMS.length - 1 && 'rounded-b-lg border-b'
                )}
                onPress={() => handleSettingsPress(item)}
            >
                <View className="flex-row items-center gap-3">
                    <IconComponent className="text-muted-foreground size-5" />
                    <Text className={cn(
                        "text-base font-normal",
                        item.variant === 'destructive' && 'text-destructive'
                    )}>
                        {item.name}
                    </Text>
                </View>
                <ChevronRight className="text-muted-foreground size-4 stroke-[1.5px]" />
            </Button>
        );
    };

    return (
        <>
            <View className="flex-1 bg-background pt-safe">
                {/* Close Button */}
                {onClose && (
                    <Pressable
                        onPress={onClose}
                        className="absolute top-12 right-6 z-10"
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    >
                        <View className="size-10 items-center justify-center rounded-full bg-neutral-100">
                            <X strokeWidth={3} size={22} color="#6B7280" />
                        </View>
                    </Pressable>
                )}

                <View className="flex-1 px-4">
                    <FlatList
                        data={SETTINGS_ITEMS}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        contentContainerClassName="pt-4"
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={
                            <View className="pb-6">
                                <View className="bg-gray-50 rounded-2xl p-6 mb-6">
                                    <View className="flex-row items-center gap-4">
                                        {/* Avatar */}
                                        <View className="w-16 h-16 bg-orange-500 rounded-full items-center justify-center">
                                            <Text className="text-white text-2xl font-bold">J</Text>
                                        </View>

                                        {/* User Info */}
                                        <View className="flex-1">
                                            <View className="flex-row items-center gap-2 mb-1">
                                                <Text className="text-xl font-bold text-gray-900">
                                                    Joshua Smith
                                                </Text>
                                                <View className="bg-blue-500 px-2 py-1 rounded-full">
                                                    <Text className="text-white text-xs font-medium">
                                                        Pro
                                                    </Text>
                                                </View>
                                            </View>
                                            <Text className="text-gray-600 text-sm">
                                                jsmith.mobbin5@gmail.com
                                            </Text>
                                        </View>
                                    </View>
                                </View>

                                <Text className="text-2xl font-bold text-foreground mb-2">
                                    Settings
                                </Text>
                                <Text className="text-muted-foreground">
                                    Manage your account settings and preferences
                                </Text>
                            </View>
                        }
                    />
                </View>
            </View>
        </>

    );
}
