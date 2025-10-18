import * as React from 'react';
import { View } from 'react-native';
import { Text } from '@showcase/components/ui/text';

type PreviewBlockProps = {
    preview: {
        name: string;
        component: (props: unknown) => React.JSX.Element;
    }
};

function PreviewBlock({ preview }: PreviewBlockProps) {
    const Component = preview.component;
    return (
        <View className="bg-background">
            {/* Block Content */}
            <View className="w-screen h-screen flex">
                <Component />
            </View>
        </View>
    );
}

export { PreviewBlock };
