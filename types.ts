import type { ReactNode } from "react";

export interface Officer {
    image: ImageMetadata;
    email: string;
    name: string;
    title: string;
}

export interface Events {
    date: Date | null;
    name: string;
    people: string;
    description: string;
    details: string[] |null;
    link: string | null;
}