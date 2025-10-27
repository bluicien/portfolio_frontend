export interface ReviewItemProps {
    userId: string;
    username: string;
    company?: string;
    role?: string;
    rating: number;
    ipAddress?: string;
    message: string;
}