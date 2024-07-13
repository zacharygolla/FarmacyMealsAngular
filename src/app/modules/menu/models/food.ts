import { Guid } from "guid-typescript";

export interface Food {
    FoodId: Guid;
    Name: string;
    Price: number;
    Category: string;
    Description: string;
    ImagePath: string;
    IconPath: string;
}