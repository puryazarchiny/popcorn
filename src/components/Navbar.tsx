const tw = (strings: TemplateStringsArray, ...values: []) =>
  String.raw({ raw: strings }, ...values);

const twLi = tw`flex h-9 w-9 cursor-pointer items-center justify-center rounded bg-slate-200 text-[#24292f] hover:bg-slate-100`;
const twNavItem = tw`focus-visible:rounded focus-visible:outline-double focus-visible:outline-2 focus-visible:outline-slate-950`;

function Navbar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li className={twLi}>
          <a href="#" className={twNavItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li className={twLi}>
          <a
            href="https://github.com/puryazarchiny/popcorn"
            target="_blank"
            className={twNavItem}
          >
            <img
              src="/icons/github-mark.svg"
              alt="Invertocat logo"
              className="w-6"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
