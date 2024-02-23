import { z } from "zod";

export const orderIdValidator = z.string().uuid().min(36).max(36);
