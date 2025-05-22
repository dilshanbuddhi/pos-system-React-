import {type ReactNode, useEffect} from "react";
import { XIcon } from "lucide-react";

interface DialogProps {
    isDialogOpen: boolean;
    title: string;
    children: ReactNode;
}

const Dialog = ({ isDialogOpen, title, children }: DialogProps) => {
    const handleCancel = () => {
        return
    }
    // Add ESC key handler to close modal
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isDialogOpen) {
                // You could trigger the onCancel here if you passed it as a prop
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isDialogOpen]);

    // Prevent scroll on body when dialog is open
    useEffect(() => {
        if (isDialogOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isDialogOpen]);

    if (!isDialogOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-screen items-center justify-center p-4 text-center">
                {/* Backdrop */}
                <div
                    className="fixed inset-0 backdrop-blur-xs bg-opacity-50 transition-opacity"
                    aria-hidden="true"
                />

                {/* Dialog */}
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-lg">
                    {/* Header */}
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                        <button className="rounded-full p-1 hover:bg-gray-200 transition-colors">
                            <XIcon onClick={handleCancel} size={20} className="text-gray-500" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Dialog;