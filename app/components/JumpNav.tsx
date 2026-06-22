'use client';

type JumpNavItem = {
  label: string;
  href: string;
};

type JumpNavProps = {
  items: JumpNavItem[];
  navClassName?: string;
};

export default function JumpNav({ items, navClassName = '' }: JumpNavProps) {
  function handleToggle(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    document.getElementById('jumpnavList')?.classList.toggle('show');
  }

  return (
    <div className={`jump-nav ${navClassName}`.trim()}>
      <div className="container">
        <div className="jump-nav__menu-wrap">
          <ul id="jumpnavList" className="mobile-hidden">
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <a href="#" id="jumpnavToggle" onClick={handleToggle}>
            Jump to Section
          </a>
        </div>
      </div>
    </div>
  );
}
