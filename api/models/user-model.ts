import { sql } from "../app.ts";

export class User {
    // deno-lint-ignore no-explicit-any
    static async getPassword(id?: number): Promise<any> {
        try {
            const passwords = id
                ? await sql`select password from Public."User" where id = ${id}`
                : await sql`select password from Public."User"`;
            return passwords;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    // deno-lint-ignore no-explicit-any
    static async getEmail(id?: number): Promise<any> {
        try {
            const emails = id
                ? await sql`select email from Public."User" where id = ${id}`
                : await sql`select email from Public."User"`;
            return emails;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    // deno-lint-ignore no-explicit-any
    static async getUsername(id?: number): Promise<any> {
        try {
            const users = id
                ? await sql`select name, id, email, password from Public."User" where id = ${id}`
                : await sql`select name, id, email, password from Public."User"`;
            return users;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}
