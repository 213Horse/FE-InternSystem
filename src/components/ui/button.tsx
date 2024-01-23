import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'bg-[#4889E9] text-primary-foreground hover:bg-[#4889E9]/90',
                danger: 'bg-[#FF3A2E] text-primary-foreground hover:bg-[#FF3A2E]/90',
                secondary: 'bg-[#FB8632] text-primary-foreground hover:bg-[#FB8632]/80',
                success: 'bg-[#41B137]  text-primary-foreground hover:bg-[#41B137]/90 ',
                info: 'bg-[#6537B1] text-primary-foreground hover:bg-[#6537B1]/90',

                outline: 'border bg-white text-black hover:bg-accent hover:text-black-foreground',

                link: 'bg-[#EFF4FB]',
            },
            size: {
                default: 'h-8 rounded-md px-3',
                sm: 'h-7 rounded-md px-2',
                lg: 'h-9 rounded-md px-4',
                xl: 'h-10 rounded-md px-5',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
            // color: 'primary',
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, color, variant, size, asChild = false, leftIcon, rightIcon, children, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
                {leftIcon} {children} {rightIcon}
            </Comp>
        );
    },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
