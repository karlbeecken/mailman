const adminEmail = process.env.MAILMAN_ADMIN;

export const isAdmin = email => email.includes(adminEmail);
