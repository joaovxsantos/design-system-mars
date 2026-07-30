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
            </Modal> </>,
        decision: <p>Usa createPortal pra renderizar fora da árvore DOM normal, evitando bugs de z-index e overflow de containers pais. Implementa focus trap manual, impedindo que o Tab escape do modal, e restaura o foco pro elemento que abriu o modal ao fechar — dois requisitos de acessibilidade que modais mal-feitos costumam ignorar.</p>
    }]

    return (
        <>
            <ComponentsPage title="Modal" allData={allDataModal} />
        </>
    )
}