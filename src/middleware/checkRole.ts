// src/middleware/checkRole.ts
import { Request, Response, NextFunction } from 'express';

export const checkRole = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        // Assuming user role is passed in the JSON body
        const userRole: string = req.body.role;

        // Check if the user has the "admin" role
        if (userRole === 'admin') {
            next(); // User has the "admin" role, proceed to the next middleware or route handler
        } else {
            res.status(403).json({ error: 'Forbidden. Insufficient role.' });
        }
    };
};
