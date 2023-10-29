import { User } from "../models/user-model.ts";

export const getUsers = async ({
    params,
    response,
}: {
    params: { id: number };
    // deno-lint-ignore no-explicit-any
    response: any;
}) => {
    const users = params.id
        ? await User.getUsername(params.id)
        : await User.getUsername();
    response.body = users;
};

export const auth = async ({
    request,
    response,
}: {
    // deno-lint-ignore no-explicit-any
    request: any;
    // deno-lint-ignore no-explicit-any
    response: any;
}) => {
    const body = await request.body();
    const user = await body.value;
    const users = await User.getUsername();

    const userFound = users.find(
        (u: { email: string; password: string }) =>
            u.email === user.email && u.password === user.password
    );

    if (userFound) {
        response.status = 200;
        response.body = { message: "User found" };
    } else {
        response.status = 404;
        response.body = { message: "User not found" };
    }
};
