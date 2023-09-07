"use client";
import * as z from "zod";
import { Category, Companion } from "@prisma/client";

interface CompanionFormProps {
    initialData: Companion | null;
    categories: Category[];
}
//  2
export const CompanionForm = ({
    categories,initialData
}: CompanionFormProps) => {
    return (
        <div>
            Companion Form
        </div>
    )
}