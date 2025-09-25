import React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }) {
    return (
        <div
            data-slot="card"
            className={cn(
                "bg-card text-card-foreground flex flex-col gap-4 rounded-xl  p-4 shadow-sm",
                className
            )}
            {...props}
        />
    );
}

export function CardHeader({ className, ...props }) {
    return (
        <div
            data-slot="card-header"
            className={cn("flex items-start justify-between gap-4 px-0", className)}
            {...props}
        />
    );
}

export function CardTitle({ className, ...props }) {
    return (
        <div
            data-slot="card-title"
            className={cn("text-lg font-semibold", className)}
            {...props}
        />
    );
}

export function CardDescription({ className, ...props }) {
    return (
        <div
            data-slot="card-description"
            className={cn("text-sm text-muted-foreground", className)}
            {...props}
        />
    );
}

export function CardAction({ className, ...props }) {
    return (
        <div
            data-slot="card-action"
            className={cn("ml-auto", className)}
            {...props}
        />
    );
}

export function CardContent({ className, ...props }) {
    return (
        <div
            data-slot="card-content"
            className={cn("px-0 pt-2", className)}
            {...props}
        />
    );
}

export function CardFooter({ className, ...props }) {
    return (
        <div
            data-slot="card-footer"
            className={cn(
                "flex items-center justify-between px-0 pt-3",
                className
            )}
            {...props}
        />
    );
}
