import { TextClassContext } from '@/example-library/components/ui/text';
import { cn } from '@/example-library/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Platform, Pressable } from 'react-native';

const buttonVariants = cva(
    cn(
        'group shrink-0 flex-row items-center justify-center gap-2 rounded-md shadow-none',
    ),
    {
        variants: {
            variant: {
                primary: cn(
                    'bg-primary active:bg-primary/90 shadow-sm shadow-black/5',
                ),
                destructive: cn(
                    'bg-destructive active:bg-destructive/90 dark:bg-destructive/60 shadow-sm shadow-black/5',

                ),
                outline: cn(
                    'border-border bg-background active:bg-accent dark:bg-input/30 dark:border-input dark:active:bg-input/50 border shadow-sm shadow-black/5',
                ),
                secondary: cn(
                    'bg-secondary active:bg-secondary/80 shadow-sm shadow-black/5',
                ),
                ghost: cn(
                    'bg-transparent',
                ),
                link: '',
            },
            size: {
                sm: cn('h-9 gap-1.5 rounded-md px-3 sm:h-8'),
                md: cn('h-10 px-4 py-2 sm:h-9'),
                lg: cn('h-11 rounded-md px-6 sm:h-10'),
                xl: cn('h-12 rounded-md px-8 sm:h-11'),
                icon: 'h-10 w-10 sm:h-9 sm:w-9',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    }
);

const buttonTextVariants = cva(
    cn(
        'text-text-strong-950 font-medium',
        Platform.select({ web: 'pointer-events-none transition-colors' })
    ),
    {
        variants: {
            variant: {
                primary: 'text-primary-foreground',
                destructive: 'text-white',
                outline: cn(
                    'group-active:text-accent-foreground',
                ),
                secondary: 'text-secondary-foreground',
                ghost: 'group-active:text-accent-foreground',
                link: cn(
                    'text-primary group-active:underline',
                ),
            },
            size: {
                sm: 'text-xs',
                md: 'text-sm',
                lg: 'text-md',
                xl: 'text-base',
                icon: '',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    }
);

type ButtonProps = React.ComponentProps<typeof Pressable> &
    React.RefAttributes<typeof Pressable> &
    VariantProps<typeof buttonVariants>;

function Button({ className, variant, size, ...props }: ButtonProps) {
    return (
        <TextClassContext.Provider value={buttonTextVariants({ variant, size })}>
            <Pressable
                className={cn(props.disabled && 'opacity-50', buttonVariants({ variant, size }), className)}
                role="button"
                {...props}
            />
        </TextClassContext.Provider>
    );
}

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
