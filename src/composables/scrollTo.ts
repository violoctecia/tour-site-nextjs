export const handleScroll = (target: string) => {
    let id: string | null = null;

    if (target.startsWith('#')) {
        id = target.slice(1);
    } else {
        try {
            const url = new URL(target, window.location.href);
            id = url.hash ? url.hash.slice(1) : null;

            if (url.pathname !== window.location.pathname) {
                window.location.href = url.href; // перейти на нужную страницу
                return;
            }
        } catch (e) {
            console.warn('Invalid URL passed to handleScroll:', target);
        }
    }

    if (id) {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {

            const observer = new MutationObserver(() => {
                const el = document.getElementById(id!);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    observer.disconnect();
                }
            });
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }
};
