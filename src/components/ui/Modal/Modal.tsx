'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import styles from './Modal.module.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
    const dialogRef = useRef<HTMLDivElement>(null);
    const previouslyFocused = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!isOpen) return;

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape') onClose();
            if (e.key === 'Tab') trapFocus(e);
        }

        function trapFocus(e: KeyboardEvent) {
            const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
                'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            if (!focusable || focusable.length === 0) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    useEffect(() => {
        if (isOpen) {
            previouslyFocused.current = document.activeElement as HTMLElement;
            document.body.style.overflow = 'hidden';
            dialogRef.current?.focus();
        } else {
            document.body.style.overflow = '';
            previouslyFocused.current?.focus();
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div
                ref={dialogRef}
                className={styles.dialog}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? 'modal-title' : undefined}
                tabIndex={-1}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.header}>
                    {title && <h2 id="modal-title" className={styles.title}>{title}</h2>}
                    <button
                        className={styles.closeButton}
                        onClick={onClose}
                        aria-label="Fechar"
                    >
                        <X size={18} />
                    </button>
                </div>
                <div className={styles.body}>{children}</div>
            </div>
        </div>,
        document.body
    );
}