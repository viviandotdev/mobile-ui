import fs from "fs/promises";
import path from "path";
import { Button } from '@docs/components/ui/button';
import Link from 'next/link';

type Screen = {
    name: string;
    title: string;
    href: string;
};

interface ScreensGridProps {
    screenName?: string;
}

// Convert kebab-case to Title Case
function formatTitle(name: string): string {
    return name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export async function ScreensGrid({ screenName }: ScreensGridProps) {
    let screens: Screen[] = [];

    try {
        if (screenName) {
            // If screenName is provided, read variations from that specific screen folder
            const screenDir = path.join(process.cwd(), "content/docs/screens", screenName);
            const files = await fs.readdir(screenDir);
            const mdxFiles = files.filter((f) => f.endsWith(".mdx") && f !== "index.mdx");

            screens = mdxFiles.map((file) => {
                const name = path.basename(file, ".mdx");
                return {
                    name,
                    title: formatTitle(name),
                    href: `/docs/screens/${screenName}/${name}`,
                };
            });
        } else {
            // If no screenName provided, read all screen folders
            const screensDir = path.join(process.cwd(), "content/docs/screens");
            const folders = await fs.readdir(screensDir, { withFileTypes: true });
            const screenFolders = folders.filter((f) => f.isDirectory());

            screens = screenFolders.map((folder) => {
                const name = folder.name;
                return {
                    name,
                    title: formatTitle(name),
                    href: `/docs/screens/${name}`,
                };
            });
        }
    } catch (error) {
        console.error("Error reading screens:", error);
    }

    // If no screens found, return empty div
    if (screens.length === 0) {
        return null;
    }

    return (
        <div className="not-prose sm:grid-cols-3 grid grid-cols-2 gap-4 xl:grid-cols-4">
            {screens.map((screen) => (
                <Button
                    asChild
                    size="lg"
                    variant="link"
                    key={screen.href}
                    className="justify-start px-0 text-base font-normal">
                    <Link href={screen.href}>{screen.title}</Link>
                </Button>
            ))}
        </div>
    );
}
