import { format } from "date-fns";

type Props = {
    children: React.ReactNode;
    data: any;
    county: string;
    sub_county: string;
    date: string;
    slug: string;
};
export function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}

export function getSubCounties(data: any, county: string) {
    return data && county
        ? data.find((item: any) => item.id === county).sub_counties
        : [{ id: "", name: "Select County First", disabled: true }];
}

export function getWards(data: any, sub_county: string) {
    return data && sub_county
        ? data.find((item: any) => item.id === sub_county).wards
        : [{ id: "", name: "Select Sub-County First", disabled: true }];
}

export function formatDate(date: string, dateFormat = "MMM dd, yyyy") {
    return format(new Date(date), dateFormat);
}

export function formatDateTime(date: string, dateFormat = "MMM dd, yyyy hh:mm a") {
    return format(new Date(date), dateFormat);
}

export const makeTitle = (slug: string) => {
    let words = slug.split("-");

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(" ");
};

export const hasPermission = (permissions: any, permission: string) => {
    return permissions?.some((p: any) => p.slug === permission);
};

export const groupPermissions = (permissions: any, by = "category") => {
    return permissions.reduce((result: any, permission: any) => {
        (result[permission[by]] = result[permission[by]] || []).push(
            permission
        );
        return result;
    }, {});
};

export const generatePermissionsSlugs = (permissions: any) => {
    return permissions?.map((p: any) => p.slug) || [];
};

export const checkMpesaNumberFormat = (number: any) => {
    let error = "";
    if(!number || number === '') {
        error += "Please enter a phone number";
    }
    else {
        const regexp = /\d$/g;
        if (!['254'].includes(number.substring(0, 3)))
            error += "Please use format 254000000000";
        if (number.length !== 12) error += " Please enter 12 digits. ";
        if (!regexp.test(number)) error += " Please use digits only. ";
    }

    return error;
};

export const sleep = (ms = 500) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
