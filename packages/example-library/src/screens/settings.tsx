import { View, SectionList } from 'react-native';
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Icon } from "~/components/ui/icon";
import { cn } from '~/lib/utils';
import { ChevronRight, User, Palette, LogOut, Bell, Globe, HelpCircle, MessageCircle } from 'lucide-react-native';
// Settings item type
type IconColors = {
    bg: string;
    border: string;
    stroke: string;
};

type SettingsItem = {
    id: string;
    name: string;
    icon: any;
    iconColors: IconColors;
    variant?: 'destructive';
};

type SettingsGroup = {
    id: string;
    title: string;
    data: SettingsItem[];
};

// Hardcoded settings data
const SETTINGS_GROUPS: SettingsGroup[] = [
    {
        id: 'user',
        title: 'General',
        data: [
            {
                id: 'accounts',
                name: 'Accounts',
                icon: User,
                iconColors: {
                    bg: 'bg-blue-100',
                    border: 'border-blue-300',
                    stroke: 'stroke-blue-700',
                }
            },
            {
                id: 'appearance',
                name: 'Appearance',
                icon: Palette,
                iconColors: {
                    bg: 'bg-purple-100',
                    border: 'border-purple-300',
                    stroke: 'stroke-purple-700',
                }
            },
            {
                id: 'notifications',
                name: 'Notifications',
                icon: Bell,
                iconColors: {
                    bg: 'bg-orange-100',
                    border: 'border-orange-300',
                    stroke: 'stroke-orange-700',
                }
            },
            {
                id: 'language',
                name: 'Language',
                icon: Globe,
                iconColors: {
                    bg: 'bg-green-100',
                    border: 'border-green-300',
                    stroke: 'stroke-green-700',
                }
            },
        ]
    },
    {
        id: 'support',
        title: 'Support',
        data: [
            {
                id: 'help',
                name: 'Help',
                icon: HelpCircle,
                iconColors: {
                    bg: 'bg-yellow-100',
                    border: 'border-yellow-300',
                    stroke: 'stroke-yellow-700',
                }
            },
            {
                id: 'feedback',
                name: 'Feedback',
                icon: MessageCircle,
                iconColors: {
                    bg: 'bg-sky-100',
                    border: 'border-sky-300',
                    stroke: 'stroke-sky-700',
                }
            },

        ]
    },
    {
        id: 'account',
        title: '',
        data: [
            {
                id: 'logout',
                name: 'Log out',
                icon: LogOut,
                iconColors: {
                    bg: 'bg-red-100',
                    border: 'border-red-300',
                    stroke: 'stroke-red-700',
                },
                variant: 'destructive'
            },
        ]
    }
];

interface SettingsProps {
}

// Icon components
const SettingsItemIcon = ({ IconComponent, colors }: { IconComponent: any; colors: IconColors }) => (
    <View className={cn(
        "inline-flex shrink-0 rounded-lg border p-2",
        colors.bg,
        colors.border
    )}>
        <Icon
            as={IconComponent}
            size={18}
            strokeWidth={1.5}
            className={cn("size-5", colors.stroke)}
        />
    </View>
);

const ChevronIcon = () => (
    <Icon
        as={ChevronRight}
        size={12}
        strokeWidth={2.5}
        className="text-neutral-400 size-4"
    />
);

export function Settings({ }: SettingsProps) {
    const handleSettingsPress = (item: SettingsItem) => {
        // TODO: Handle settings navigation
        console.log(`Pressed: ${item.name}`);
    };

    const renderItem = ({ item, index, section }: { item: SettingsItem; index: number; section: SettingsGroup }) => {
        const isFirst = index === 0;
        const isLast = index === section.data.length - 1;

        return (
            <Button
                variant="outline"
                size="lg"
                className={cn(
                    'h-14 border-border flex-row justify-between rounded-none border-b-0 pl-4 pr-3.5',
                    isFirst && 'rounded-t-lg',
                    isLast && 'rounded-b-lg border-b'
                )}
                onPress={() => handleSettingsPress(item)}
            >
                <View className="flex-row items-center gap-3">
                    <SettingsItemIcon IconComponent={item.icon} colors={item.iconColors} />
                    <Text className="text-base ">
                        {item.name}
                    </Text>
                </View>
                <ChevronIcon />
            </Button>
        );
    };

    const renderSectionHeader = ({ section }: { section: SettingsGroup }) => {
        if (!section.title) return null;

        return (
            <View className="pl-2 pt-4">
                <Text className="text-base font-semibold text-muted-foreground ">
                    {section.title}
                </Text>
            </View>
        );
    };

    return (
        <>
            <View className="flex flex-col p-4">
                <SectionList
                    sections={SETTINGS_GROUPS}
                    renderItem={renderItem}
                    renderSectionHeader={renderSectionHeader}
                    keyExtractor={(item) => item.id}
                    contentContainerClassName=""
                    showsVerticalScrollIndicator={false}
                    stickySectionHeadersEnabled={false}
                    ItemSeparatorComponent={null}
                    SectionSeparatorComponent={() => <View className="h-2" />}
                    ListHeaderComponent={
                        <View className="p-4 border-border bg-background border shadow-sm shadow-black/5 rounded-2xl">
                            <View className="flex-row items-center gap-4">
                                {/* Avatar */}
                                <Avatar className="size-14" alt="John's Avatar">
                                    <AvatarImage source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg' }} />
                                    <AvatarFallback>
                                        <Text>JD</Text>
                                    </AvatarFallback>
                                </Avatar>

                                {/* User Info */}
                                <View className="flex">
                                    <View className="flex-row items-center gap-1.5">
                                        <Text className="text-base font-bold text-gray-900">
                                            John Doe
                                        </Text>
                                        <Badge variant="outline" className="border border-blue-300 px-1.5 py-0.5">
                                            <Text className="text-blue-400 text-[10px]">Pro</Text>
                                        </Badge>

                                    </View>
                                    <Text className="text-gray-600 text-sm">
                                        jdoe.dev@gmail.com
                                    </Text>
                                </View>
                            </View>
                        </View >
                    }
                />
            </View >
        </>

    );
}
