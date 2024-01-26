import { Dialog, Disclosure } from '@headlessui/react';
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { callsToAction, products } from '@/constants/nav-items';
import MobileNavLink from './mobile-nav-link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const MobileMenu = ({ isOpen, onClose }) => (
  <Dialog as="div" className="lg:hidden" open={isOpen} onClose={onClose}>
    <div className="fixed inset-0 z-10" />
    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
        <button
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
          onClick={onClose}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            <Disclosure as="div" className="-mx-3">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'rotate-180' : '',
                        'h-5 w-5 flex-none'
                      )}
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <MobileNavLink href="#">Features</MobileNavLink>
            <MobileNavLink href="#">Marketplace</MobileNavLink>
            <MobileNavLink href="#">Company</MobileNavLink>
          </div>
          <div className="py-6">
            <MobileNavLink>Log in</MobileNavLink>
          </div>
        </div>
      </div>
    </Dialog.Panel>
  </Dialog>
);

export default MobileMenu;
