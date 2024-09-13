import { AccountSVG } from "@/assets/svgs/navbarAccount/drawerYouMenu/Account";
import { ProfileSVG } from "@/assets/svgs/navbarAccount/drawerYouMenu/Profile";
import { searchPreferencesSVG } from "@/assets/svgs/navbarAccount/drawerYouMenu/SearchPreferences";

const basePath = '/account';

export interface AnchorLinks {
    path: string;
    label: string;
}

const navLinks = [
    {
        path: '/matches',
        label: 'Matches',
    },
    {
        path: '/inbound',
        label: 'Inbound',
    },
    {
        path: '/board',
        label: 'Board',
    },
    {
        path: '/inbox',
        label: 'Inbox',
    },
    {
        path: '/you',
        label: 'You',
    },
].map(link => ({
    ...link,
    path: `${basePath}${link.path}`,
}));

const anchorLinks = [
    {
        path: '/you/preferences',
        label: 'Search preferences',
        Icon: AccountSVG
    }, {
        path: '/you/profile',
        label: 'Profile',
        Icon: ProfileSVG
    },
    {
        path: '/you/account-details',
        label: 'Account',
        Icon: searchPreferencesSVG
    },
].map(link => ({
    ...link,
    path: `${basePath}${link.path}`,
}));

export { navLinks, anchorLinks };
