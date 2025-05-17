interface DialogProps {
    title : string
    children : React.ReactNode
    open : boolean
}

const Dialog = ({title , children , open} : DialogProps) => {
    if (!open) return null
    return (
        <>
            <div className="max-w-sm mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                    <div>
                        {children}
                    </div>
                    </div>
                </div>


        </>
    );
};
export default Dialog