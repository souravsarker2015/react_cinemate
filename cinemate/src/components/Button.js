
export const Button = ({children}) => {
    return (
        <button className={'w-64 text-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... rounded-lg px-5 py-2.4 mr-2 mb-2 font-medium text-white hover:bg-gradient-to-br'}>{children}</button>

    );
};