import * as React from 'react';
import { PreviewBlock } from '@showcase/components/preview-block';
import { Settings } from '@/example-library/blocks/settings';

const settingsPreview = { name: 'Settings', component: Settings }

export default function SettingsScreen() {
    return <PreviewBlock preview={settingsPreview} />;
}
