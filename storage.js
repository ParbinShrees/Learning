// =========================================
// CENTRAL STORAGE
// =========================================

const Storage = {

    get(key, defaultValue = null) {

        try {

            const value =
                localStorage.getItem(key);

            if (value === null) {
                return defaultValue;
            }

            return JSON.parse(value);

        } catch (error) {

            console.error(
                "Storage read error:",
                error
            );

            return defaultValue;
        }
    },


    set(key, value) {

        try {

            localStorage.setItem(
                key,
                JSON.stringify(value)
            );

        } catch (error) {

            console.error(
                "Storage save error:",
                error
            );
        }
    },


    remove(key) {

        localStorage.removeItem(key);

    }

};