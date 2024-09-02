import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export const DialogModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-x-2 rounded-md bg-danger/10 text-danger px-4 py-2 font-medium hover:bg-danger hover:text-white transition-colors"
        >
          <i className="fi fi-rr-trash"></i>
          Eliminar cuenta
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 bg-gray-800" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-background/30 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="transition ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-800 text-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="text-center flex justify-center mb-5">
                    <i className="fi fi-rr-trash w-20 h-20 flex items-center justify-center rounded-full text-3xl bg-background"></i>
                  </div>
                  <Dialog.Title as="h3" className="text-center text-xl font-medium leading-6">
                    ¿Eliminar cuenta?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-muted-foreground text-center">
                      Está seguro que desea eliminar la cuenta, esta acción ya no podrá deshacerse y se borraran todos
                      los datos.
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-x-2">
                    <button
                      type="button"
                      className="p-3 rounded-full bg-danger text-white w-full outline-none border border-transparent ring-offset-2 ring-offset-transparent hover:ring-offset-background-secondary hover:ring-2 hover:ring-danger transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      Si, eliminar cuenta
                    </button>
                    <button
                      type="button"
                      className="p-3 rounded-full bg-transparent border border-dashed border-orange-600 w-full outline-none ring-offset-2 ring-offset-transparent hover:ring-offset-background-secondary hover:ring-2 hover:ring-foreground transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancelar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
