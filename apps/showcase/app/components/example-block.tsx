import * as React from 'react';
import { SignIn } from '@/example-library/blocks/sign-in';
import { PreviewBlock } from '@showcase/components/preview-block';

const exampleBlockPreviews = { name: 'Sign In', component: SignIn }

export default function ExampleBlockScreen() {
    return <PreviewBlock preview={exampleBlockPreviews} />;
}
