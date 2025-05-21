"use client";

import React, { useEffect, useRef } from 'react';
import { useUI } from './context/UIContext';
import { useTranslation } from 'react-i18next';

interface ModalProps {
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
    const { setIsModalOpen } = useUI();
    const modalRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();  // Hook innerhalb der Komponente verwenden
    const hour = new Date().getHours().toString().padStart(2, '0');
    const min = new Date().getMinutes();

    useEffect(() => {
        const modal = modalRef.current;
        setIsModalOpen(true);

        // Fokus auf das Modal setzen
        if (modal) {
            modal.focus();
        }

        // Scrollen im Hintergrund deaktivieren
        document.body.style.overflow = 'hidden';

        // Escape-Taste zum Schließen des Modals
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        // Cleanup: Entfernen des Event Listeners und Aktivieren des Scrollens
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            setIsModalOpen(false);

            // Scrollen wieder aktivieren, wenn das Modal geschlossen wird
            document.body.style.overflow = 'auto';
        };
    }, [onClose, setIsModalOpen]);


    // Close modal if clicked outside of modal content
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (overlayRef.current === e.target) {
            onClose();
        }
    };


    return (
        <div 
            ref={overlayRef}
            id="modal"
            tabIndex={-1}  // Fokus auf das Modal setzen
            className="fixed inset-0 flex justify-center items-center bg-white/20 dark:bg-black/30 backdrop-blur-sm z-100"
            role="dialog"
            aria-labelledby="modal-title"
            aria-hidden="false"
            onClick={handleOverlayClick} // Close modal on overlay click
        >
            <div
                ref={modalRef}
                className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-lg shadow-lg w-full max-w-md max-h-[70vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside modal
                aria-labelledby="modal-title"
            >
                {/* Modal Header (Icon + Title + Close Button) */}
                <div className="flex justify-between items-center mb-4 ">
                    <h2 className="flex items-center text-2xl text-pink-500">
                        Timetable
                    </h2>
                    
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                        aria-label="Modal schließen"
                    >
                        X
                    </button>
                </div>

                {/* Zwei untereinander platzierte Buttons */}
                <div className="flex flex-col space-y-4 mt-4">
                <p className={` ${hour=="16" && min>=0  ? "text-pink-500" : "text-blue-500"}`}>{t("tt-0")}</p>
                <p className={` ${hour=="17" && min>=0  ? "text-pink-500" : "text-blue-500"}`}>{t("tt-1")}</p>
                <p className={` ${hour=="19" && min>=30  ? "text-pink-500" : "text-blue-500"}`}>{t("tt-2")}</p>
                <p className={` ${hour=="20" && min>=30  ? "text-pink-500" : "text-blue-500"}`}>{t("tt-3")}</p>
                <p className={` ${hour=="20" && min>=30  ? "text-pink-500" : "text-blue-500"}`}>{t("tt-4")}</p>
                <p className={` ${hour=="20" && min>=30  ? "text-pink-500" : "text-blue-500"}`}>{t("tt-5")}</p>
                <p className={` ${hour=="20" && min>=30  ? "text-pink-500" : "text-blue-500"}`}>{t("tt-6")}</p>


                </div>
            </div>
        </div>
    );
};

export default Modal;
