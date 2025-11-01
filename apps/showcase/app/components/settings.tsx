import * as React from 'react';
import { PreviewScreen } from '@showcase/components/preview-screen';
import { Settings } from '@/example-library/screens/settings';

const settingsPreview = { name: 'Settings', component: Settings }

export default function SettingsScreen() {
    return <PreviewScreen preview={settingsPreview} />;
}
