import { ClassValue, clsx } from "clsx";
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}

/**
 * This document contains all the functions that are going to be called by onclick events in the app
*/