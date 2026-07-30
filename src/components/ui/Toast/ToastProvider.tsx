'use client';

import { createContext, useCallback, useContext, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { CheckCircle2, XCircle, Info, X } from 'lucide-react';
import styles from './Toast.module.scss';

type ToastVariant = 'success' | 'error' | 'info';

interface ToastItem {
  id: string;
  message: string;
  variant: ToastVariant;
}

interface ToastContextValue {
  showToast: (message: string, variant?: ToastVariant) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

const icons = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((message: string, variant: ToastVariant = 'info') => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, message, variant }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  function dismiss(id: string) {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {typeof document !== 'undefined' &&
        createPortal(
          <div className={styles.stack} role="region" aria-label="Notificações">
            {toasts.map((toast) => {
              const Icon = icons[toast.variant];
              return (
                <div
                  key={toast.id}
                  className={`${styles.toast} ${styles[toast.variant]}`}
                  role="status"
                  aria-live="polite"
                >
                  <Icon size={16} className={styles.icon} />
                  <span className={styles.message}>{toast.message}</span>
                  <button
                    className={styles.closeButton}
                    onClick={() => dismiss(toast.id)}
                    aria-label="Fechar notificação"
                  >
                    <X size={14} />
                  </button>
                </div>
              );
            })}
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast deve ser usado dentro de ToastProvider');
  return context;
}