import { View, ScrollView, Pressable } from 'react-native';
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Icon } from "~/components/ui/icon";
import { cn } from '~/lib/utils';
import { ChevronRight } from 'lucide-react-native';

type ProfileAvatarSectionProps = {
    initials: string;
    name: string;
    onEditPhoto: () => void;
};

type ProfileFieldProps = {
    label: string;
    value: string;
    onPress?: () => void;
    editable?: boolean;
    isInteractive?: boolean;
    isLast?: boolean;
};

type ProfileFormData = {
    firstName: string;
    lastName: string;
    birthday: string;
    age: string;
};

type ProfileProps = {
    formData?: ProfileFormData;
    onSave?: () => void;
    onBack?: () => void;
    onEditPhoto?: () => void;
    onBirthdayPress?: () => void;
    onLogout?: () => void;
    onDeleteAccount?: () => void;
};



// Reusable Avatar Section Component (Single Responsibility)
const ProfileAvatarSection = ({ initials, name, onEditPhoto }: ProfileAvatarSectionProps) => (
    <View className="items-center py-8 px-4">
        <Avatar className="size-24" alt={`${name}'s Avatar`}>
            <AvatarFallback className="bg-blue-200">
                <Text className="text-3xl font-medium text-neutral-600">{initials}</Text>
            </AvatarFallback>
        </Avatar>
        <Text className="text-2xl font-semibold text-neutral-900 mt-4">{name}</Text>
        <Pressable onPress={onEditPhoto}>
            <Text className="text-base text-neutral-400 mt-1 font-medium">Edit photo</Text>
        </Pressable>
    </View>
);

// Reusable Profile Field Component (Single Responsibility)
const ProfileField = ({ label, value, onPress, editable = true, isInteractive = false, isLast = false }: ProfileFieldProps) => {
    const FieldContent = (
        <View className={cn(
            "flex-row items-center justify-between px-4 py-4 bg-white",
            !isLast && "border-b border-border shadow-sm shadow-black/5",
            isInteractive && "active:bg-neutral-50"
        )}>
            <Text className="text-base font-medium text-neutral-900">{label}</Text>
            <View className="flex-row items-center gap-2">
                <Text className={cn(
                    "text-base",
                    editable ? "text-neutral-900" : "text-neutral-400"
                )}>{value}</Text>
                {isInteractive && (
                    <Icon as={ChevronRight} size={20} className="-mr-2 text-neutral-400" />
                )}
            </View>
        </View>
    );

    if (isInteractive && onPress) {
        return (
            <Pressable onPress={onPress}>
                {FieldContent}
            </Pressable>
        );
    }

    return FieldContent;
};

// Reusable Action Button Component (Single Responsibility)
const ActionButton = ({
    label,
    onPress,
    variant = 'default'
}: {
    label: string;
    onPress: () => void;
    variant?: 'default' | 'destructive'
}) => (
    <Button
        variant={variant === 'destructive' ? 'outline' : 'outline'}
        size="lg"
        className={cn(
            "w-full rounded-xl",
            variant === 'destructive' && "bg-red-50 border-red-100"
        )}
        onPress={onPress}
    >
        <Text className={cn(
            "text-base font-medium",
            variant === 'destructive' ? "text-red-500" : "text-neutral-900"
        )}>{label}</Text>
    </Button>
);

// Main Profile Component following Open/Closed Principle
export function Profile({
    formData = {
        firstName: 'John',
        lastName: 'Doe',
        birthday: 'January 24, 1993',
        age: '29 years old'
    },
    onEditPhoto = () => console.log('Edit photo pressed'),
    onBirthdayPress = () => console.log('Birthday pressed'),
    onLogout = () => console.log('Logout pressed'),
    onDeleteAccount = () => console.log('Delete account pressed'),
}: ProfileProps) {
    const initials = `${formData.firstName[0]}${formData.lastName[0]}`;
    const fullName = `${formData.firstName} ${formData.lastName}`;

    return (
        <View className="flex-1 bg-neutral-50">
            <ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={false}
            >
                {/* Avatar Section */}
                <ProfileAvatarSection
                    initials={initials}
                    name={fullName}
                    onEditPhoto={onEditPhoto}
                />

                {/* Form Fields Section */}
                <View className="mx-4 mb-4 rounded-2xl border border-border shadow-sm shadow-black/5">
                    <View className="overflow-hidden rounded-2xl">
                        <ProfileField
                            label="First Name"
                            value={formData.firstName}
                            editable={true}
                        />
                        <ProfileField
                            label="Last Name"
                            value={formData.lastName}
                            editable={true}
                        />
                        <ProfileField
                            label="Birthday"
                            value={formData.birthday}
                            onPress={onBirthdayPress}
                            isInteractive={true}
                        />
                        <ProfileField
                            label="Age"
                            value={formData.age}
                            editable={false}
                            isLast={true}
                        />
                    </View>
                </View>

                {/* Action Buttons */}
                <View className="mx-4 mb-4 gap-3">
                    <ActionButton
                        label="Log out"
                        onPress={onLogout}
                    />
                    <ActionButton
                        label="Delete account"
                        onPress={onDeleteAccount}
                        variant="destructive"
                    />
                </View>
            </ScrollView>
        </View>
    );
}
