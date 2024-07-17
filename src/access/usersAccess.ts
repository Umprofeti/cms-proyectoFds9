import { Access } from "payload/config";
import { User, UsersApp } from "payload/generated-types";

export const isAdmin:Access<any, User> = ({req: {user}}) => {
    return Boolean (user);
}

export const isUserApp:Access<any, UsersApp> = ({req: {user}}) => {
    return Boolean (user);
}

export const isUserAppOrAdmin:Access<any, User | UsersApp> = ({req: {user}}) => {
    return Boolean (user);
}