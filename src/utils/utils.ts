import ButterToast, { CinnamonSugar } from 'butter-toast';

//Have a global toast
export function raiseToast(title: string, message: string, icon: string) {
    const toast = CinnamonSugar.fresh({
        theme: 'lite',
        title,
        message,
        icon
    });

    ButterToast.raise(toast);
}
