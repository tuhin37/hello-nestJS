import { Document } from "mongoose";

export interface Icar extends Document {
    readonly id: number;
    readonly manufacturer: string;
    readonly model: string;
    readonly date: string;
    readonly type: string;
}