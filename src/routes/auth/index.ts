import { Router } from "express";
import { validateData } from "../../middlewares/validationMiddleware";
import { createUserSchema, loginSchema } from "../../db/usersSchema";
import bcrypt from "bcrypt";
import { db } from "../../db";
import { userTable } from "../../db/usersSchema";
import { eq } from "drizzle-orm";
import jwt from 'jsonwebtoken';

const router = Router();

router.post("/register", validateData(createUserSchema), async (req, res) => {
    try {
        const data = req.cleanBody;
        data.password = await bcrypt.hash(data.password, 10);

        const [user] = await db.insert(userTable).values(data).returning();
        res.status(201).json({ message: "user created successfully", user });
    } catch (error: any) {
        console.error('Registration error:', error);
        res.status(500).json({ message: "Failed to create user", error: error.message });
    }
});

router.post("/login", validateData(loginSchema), async (req: any, res: any) => {
    try {
        const { email, password } = req.cleanBody;
        // Find user by email
        const [user] = await db
            .select()
            .from(userTable)
            .where(eq(userTable.email, email));

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Compare password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign(
            {
                userId: user.id,
                role: user.role,
            },
            process.env.JWT_SECRET || 'your-secret-key', // Better to use environment variable
            { expiresIn: '5d' }
        );

        // Remove password from response
        const { password: _, ...userWithoutPassword } = user;

        res.status(200).json({
            message: "Login successful",
            user: userWithoutPassword,
            token
        });
    } catch (error: any) {
        console.error('Login error:', error);
        res.status(500).json({ message: "Login failed", error: error.message });
    }
})

export default router;
