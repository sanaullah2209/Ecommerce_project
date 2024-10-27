import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

export function verifyToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.header('Authorization'); // Fixed typo here

    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, 'your-secret-key');
        console.log(decoded);
        if (typeof decoded !== 'object' || !decoded?.userId) {
            res.status(401).json({ message: "Invalid token" });
            return;

        }
        req.userId = decoded.userId;
        req.role = decoded.role;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
}



export function verifySeller(req: Request, res: Response, next: NextFunction) {
    const role = req.role; // Fixed typo here

    if (role !== "seller") {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();

}
