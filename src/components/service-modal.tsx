"use client";
import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";

export default function DefaultModal() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <>
      <Button
        className="border-2 border-amber-400 px-4 py-2 rounded w-[240px] h-[74px] hover:bg-red-500/50 hover:scale-125 transition-all duration-30"
        onClick={() => props.setOpenModal("default")}
      >
        <span className="text-black font-semibold text-2xl ">
          Let&apos;s Talk
        </span>
      </Button>
      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>Jamestack &amp; Full Stack Apps</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setOpenModal(undefined)}>
            I accept
          </Button>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
