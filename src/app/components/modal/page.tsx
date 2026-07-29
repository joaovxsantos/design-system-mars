'use client'
import { Button } from "@/src/components/ui/Button/Button";
import { Modal } from "@/src/components/ui/Modal/Modal";
import { useState } from "react";

export default function ModalDocs() {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Click</Button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirmar">
                <p>Tem certeza que deseja continuar?</p>
            </Modal>
        </>
    )
}