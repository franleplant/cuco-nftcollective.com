import { Fragment } from "react";
import { useMediaQuery } from "beautiful-react-hooks";
import { Menu, Transition } from "@headlessui/react";

// TODO get this from tailwind theme (sm)
const MOBILE_BREAKPOINT = "640px";

export interface IProps {}

export const LINKS = [
  { label: "about", href: "#about" },
  { label: "road map", href: "#road-map" },
  { label: "artist", href: "#artist" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav(props: IProps) {
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT})`);
  console.log("is mobile", isMobile);
  // TODO
  const page = LINKS[0].href;

  if (isMobile) {
    return <MobileNav />;
  }

  return (
    <nav>
      <ul className="flex flex-row gap-2">
        {LINKS.map((link, index) => {
          const active = link.href === page;
          return (
            <li key={index}>
              <a
                href={link.href}
                className={`p-3 border-white ${active ? "border-b-2" : ""}`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function MobileNav() {
  const page = LINKS[0].href;
  //<Menu.Button>Menu.Button>
  return (
    <Menu as="div" className="relative inline-block text-left text-white">
      <div>
        <Menu.Button
          className={`
        inline-flex justify-center w-full px-4 py-2 text-sm font-medium
        text-white bg-black bg-opacity-0 hover:bg-opacity-30
        rounded-md
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
        `}
        >
          •••
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="nav"
          className={`
        bg-blue-800 hover:bg-opacity-30
        absolute right-0 z-10 w-56 mt-2
        shadow-lg origin-top-right
        divide-y divide-gray-100 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none
        text-white
        `}
        >
          <ol>
            {LINKS.map((link, index) => {
              const active = link.href === page;
              return (
                <Menu.Item as="li" key={index}>
                  {() => (
                    <a
                      href={link.href}
                      className={`
                        p-4 text-white group flex items-center w-full text-sm
                        ${active ? "bg-blue-900" : ""}
                      `}
                    >
                      {link.label}
                    </a>
                  )}
                </Menu.Item>
              );
            })}
          </ol>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
