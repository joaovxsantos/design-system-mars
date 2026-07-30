'use client'
import { ComponentsPage } from "@/src/components/ComponentsPage/ComponentsPage";
import { Button } from "@/src/components/ui/Button/Button";
import { Modal } from "@/src/components/ui/Modal/Modal";
import { useState } from "react";

export default function ModalDocs() {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const allDataModal = [{
        nameSec: 'Default modal',
        items: <><Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirmar">
                <p>Tem certeza que deseja continuar?</p>
            </Modal> </>
    }]

    return (
        <>
            <ComponentsPage title="Modal" allData={allDataModal} />
        </>
    )
}